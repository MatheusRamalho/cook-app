import { ImageBackground, Text, TouchableOpacity, TouchableOpacityProps, View } from 'react-native'

interface RecipeProps extends TouchableOpacityProps {
    recipe: {
        name: string
        image: string
        minutes: number
    }
}

export function Recipe({ recipe, ...rest }: RecipeProps) {
    return (
        <TouchableOpacity className="flex-1 h-48 rounded-[20px] overflow-hidden" activeOpacity={0.8} {...rest}>
            <ImageBackground source={{ uri: recipe.image }} className="flex-1">
                <View className="h-auto p-3 justify-end gap-1 bg-black/70">
                    <Text className="text-white text-lg font-bold" numberOfLines={1} lineBreakMode="tail">
                        {recipe.name}
                    </Text>

                    <Text className="text-yellow-500 font-regular text-sm" numberOfLines={1} lineBreakMode="tail">
                        {recipe.minutes} minutos
                    </Text>
                </View>
            </ImageBackground>
        </TouchableOpacity>
    )
}
