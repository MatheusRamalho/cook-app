import { Text, View } from 'react-native'

interface StepProps {
    step: number
    description: string
}

export function Step({ step, description }: StepProps) {
    return (
        <View className="flex-row items-center gap-6">
            <Text className="text-sm font-bold text-black"> {step} </Text>
            <Text className="flex-1 text-sm text-gray-400 font-regular"> {description} </Text>
        </View>
    )
}
