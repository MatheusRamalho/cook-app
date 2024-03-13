import { ImageBackground, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

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
                <LinearGradient colors={['rgba(0,0,0,0.3)', '#000']} className="flex-1 p-3 justify-end gap-1">
                    <Text className="text-white text-lg font-bold" numberOfLines={1} lineBreakMode="tail">
                        {recipe.name}
                    </Text>

                    <Text className="text-yellow-500 font-regular text-sm" numberOfLines={1} lineBreakMode="tail">
                        {recipe.minutes} minutos
                    </Text>
                </LinearGradient>
            </ImageBackground>
        </TouchableOpacity>
    )
}
