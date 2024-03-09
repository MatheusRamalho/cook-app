import { Text, Pressable, PressableProps, Image } from 'react-native'
import clsx from 'clsx'

export interface IngredientProps {
    name: string
    image: string
    selected?: boolean
}

export function Ingredient({ name, image, selected = false, ...rest }: IngredientProps & PressableProps) {
    return (
        <Pressable
            className={clsx(
                'h-11 px-4 border-2 border-gray-200 rounded-full items-center flex-row gap-2',
                selected && 'border-green-600 bg-green-100',
            )}
            {...rest}
        >
            <Image className="size-6" source={{ uri: image }} alt="" />
            <Text className="text-base font-medium">{name}</Text>
        </Pressable>
    )
}
