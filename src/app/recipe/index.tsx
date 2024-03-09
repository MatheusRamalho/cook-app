import { View, FlatList, Text, Image } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import { router } from 'expo-router'

import { Step } from '@/components/Step'
import { Ingredients } from '@/components/Ingredients'

export function Recipe() {
    return (
        <View className="flex-1">
            <Image className="w-full h-48 bg-gray-300" source={{ uri: recipe.image }} alt="" />

            <View className="-mt-6 bg-white rounded-t-[20px]">
                <View className="p-8">
                    <MaterialIcons size={32} name="arrow-back" onPress={() => router.back()} />

                    <Text className="font-bold text-lg mt-6"> {recipe.name} </Text>
                    <Text className="text-sm text-gray-400 font-regular"> {recipe.minutes} minutos de preparo </Text>
                </View>

                <Ingredients ingredients={ingredients} />

                <View className="p-8">
                    <Text className="text-sm font-medium mb-4">Modo de preparado</Text>

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
