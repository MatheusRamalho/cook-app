import { FlatList, Text, View } from 'react-native'
import { router } from 'expo-router'
import { MaterialIcons } from '@expo/vector-icons'

import { Ingredients } from '@/components/Ingredients'
import { Recipe } from '@/components/Recipe'

export function Recipes() {
    return (
        <View className="flex-1">
            <View className="pt-16 px-8 mb-3">
                <MaterialIcons size={32} name="arrow-back" onPress={() => router.back()} />

                <Text className="font-bold text-lg mb-3"> Ingredientes </Text>
            </View>

            {/* {<Ingredients ingredients={ingredients} />} */}

            <FlatList
                data={recipes}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <Recipe recipe={item} onPress={() => router.navigate('/recipe/' + item.id)} />
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
