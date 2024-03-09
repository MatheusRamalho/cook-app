import { useState } from 'react'
import { Alert, ScrollView, Text, View } from 'react-native'
import { router } from 'expo-router'

import { Ingredient } from '@/components/Ingredient'
import { Selected } from '@/components/Selected'

export default function Home() {
    const [selected, setSelected] = useState<string[]>([])

    function handleToggleSelected(value: string) {
        if (selected.includes(value)) {
            return setSelected((state) => state.filter((item) => item !== value))
        }

        setSelected((state) => [...state, value])
    }

    function handleClearSelected() {
        Alert.alert('Limpar', 'Deseja limpar tudo?', [
            { text: 'Não', style: 'cancel' },
            { text: 'Sim', onPress: () => setSelected([]) },
        ])
    }

    function handleSearch() {
        router.navigate('/recipes/')
    }

    return (
        <View className="flex-1 p-6">
            <Text className="text-4xl font-bold leading-[44px] mt-11">
                Escolha {'\n'}
                <Text className="font-regular">os produtos</Text>
            </Text>

            <Text className="font-regular text-xl text-gray-400 mt-3 mb-9">
                Descubra receitas baseadas nos produtos que você escolheu.
            </Text>

            <ScrollView
                contentContainerStyle={{
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    gap: 12,
                    paddingBottom: 208,
                }}
                showsHorizontalScrollIndicator={false}
            >
                {Array.from({ length: 100 }).map((item, index) => (
                    <Ingredient
                        key={index}
                        selected={selected.includes(String(index))}
                        name="Tomate"
                        image={}
                        onPress={() => handleToggleSelected(String(index))}
                    />
                ))}
            </ScrollView>

            {selected.length > 0 && (
                <Selected quantity={selected.length} onClear={handleClearSelected} onSearch={handleSearch} />
            )}
        </View>
    )
}
