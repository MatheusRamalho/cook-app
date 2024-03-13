import { useEffect, useState } from 'react'
import { View, FlatList, Text, Image } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import { Redirect, router, useLocalSearchParams } from 'expo-router'

import { services } from '@/services'

import { Step } from '@/components/Step'
import { Loading } from '@/components/Loading'
import { Ingredients } from '@/components/Ingredients'

export default function Recipe() {
    const [isLoading, setIsLoading] = useState(true)
    const [recipe, setRecipe] = useState<RecipeResponse | null>(null)
    const [ingredients, setIngredients] = useState<IngredientResponse[]>([])
    const [preparations, setPreparations] = useState<PreparationsResponse[]>([])

    const { id } = useLocalSearchParams<{ id: string }>()

    useEffect(() => {
        services.recipes
            .show(id)
            .then((response) => setRecipe(response))
            .finally(() => setIsLoading(false))
    }, [id])

    useEffect(() => {
        services.ingredients.findByRecipeId(id).then((response) => setIngredients(response))
    }, [id])

    useEffect(() => {
        services.preparations.findByRecipeId(id).then((response) => setPreparations(response))
    }, [id])

    if (isLoading) {
        return <Loading />
    }

    if (!id || !recipe) {
        return <Redirect href="/" />
    }

    return (
        <View className="flex-1">
            <Image className="w-full h-48 bg-gray-300" source={{ uri: recipe.image }} alt="" />

            <View className="-mt-6 bg-white rounded-t-3xl">
                <View className="p-8">
                    <MaterialIcons size={32} name="arrow-back" onPress={() => router.back()} />

                    <Text className="font-bold text-2xl mt-6"> {recipe.name} </Text>

                    <Text className="ml-1 mt-1 text-base text-gray-400 font-regular">
                        {recipe.minutes} minutos de preparo
                    </Text>
                </View>

                <Ingredients ingredients={ingredients} />

                <View className="p-8">
                    <Text className="text-lg font-bold mb-4">Modo de preparado</Text>

                    <FlatList
                        data={preparations}
                        renderItem={({ item }) => <Step step={item.step} description={item.description} />}
                        contentContainerStyle={{ gap: 16 }}
                        showsVerticalScrollIndicator={false}
                    />
                </View>
            </View>
        </View>
    )
}
