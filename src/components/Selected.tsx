import { View, Text } from 'react-native'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import Animated, { BounceOutDown, SlideInDown } from 'react-native-reanimated'
import colors from 'tailwindcss/colors'

import { Button } from '@/components/Button'

interface SelectedProps {
    quantity: number
    onClear?: () => void
    onSearch?: () => void
}

export function Selected({ quantity, onClear, onSearch }: SelectedProps) {
    return (
        <Animated.View
            entering={SlideInDown.duration(500)}
            exiting={BounceOutDown}
            className="absolute bottom-6 w-full p-6 rounded-[20px] bg-black self-center"
        >
            <View className="flex-row items-center justify-between mb-9">
                <Text className="text-white text-lg font-regular">{quantity} ingredientes selecionados</Text>

                <MaterialIcons name="close" size={24} color={colors.gray[400]} onPress={onClear} />
            </View>

            <Button title="Encontrar" onPress={onSearch} />
        </Animated.View>
    )
}
