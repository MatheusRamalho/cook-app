import { useEffect, useState } from 'react'
import { FlatList, Text, View } from 'react-native'
import { router, useLocalSearchParams } from 'expo-router'
import { MaterialIcons } from '@expo/vector-icons'

import { services } from '@/services'

import { Loading } from '@/components/Loading'
import { Recipe } from '@/components/Recipe'
import { Ingredients } from '@/components/Ingredients'

export default function Recipes() {
    const [isLoading, setIsLoading] = useState(true)
    const [recipes, setRecipes] = useState<RecipeResponse[]>([])
    const [ingredients, setIngredients] = useState<IngredientResponse[]>([])

    const params = useLocalSearchParams<{ ingredientsIds: string }>()
    const ingredientsIds = params.ingredientsIds.split(',')

    useEffect(() => {
        services.recipes
            .findByIngredientsIds(ingredientsIds)
            .then((response) => setRecipes(response))
            .finally(() => setIsLoading(false))
    }, [ingredientsIds])

    useEffect(() => {
        services.ingredients
            .findByIds(ingredientsIds)
            .then((response) => setIngredients(response))
            .finally(() => setIsLoading(false))
    }, [ingredientsIds])

    if (isLoading) {
        return <Loading />
    }

    console.log(recipes)

    return (
        <View className="flex-1">
            <View className="pt-16 px-8 mb-3">
                <MaterialIcons size={32} name="arrow-back" onPress={() => router.back()} />

                <Text className="mt-8 font-bold text-3xl mb-3"> Ingredientes </Text>
            </View>

            <Ingredients ingredients={ingredients} />

            <FlatList
                data={recipes}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <Recipe recipe={item} onPress={() => router.navigate(`/recipe/${item.id}`)} />
                )}
                showsVerticalScrollIndicator={false}
                className="p-8"
                contentContainerStyle={{ gap: 16 }}
                columnWrapperStyle={{ gap: 16 }}
                numColumns={2}
                ListEmptyComponent={() => (
                    <Text className="font-regular text-lg text-gra-400">
                        Nenhuma receita encontrada. Escolha outros ingredientes.
                    </Text>
                )}
            />
        </View>
    )
}
