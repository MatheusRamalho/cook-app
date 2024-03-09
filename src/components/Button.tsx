import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native'

interface ButtonProps extends TouchableOpacityProps {
    title: string
}

export function Button({ title, ...rest }: ButtonProps) {
    return (
        <TouchableOpacity
            activeOpacity={0.7}
            className="h-12 w-full bg-green-600 items-center justify-center rounded-md"
            {...rest}
        >
            <Text className="font-medium text-lg text-white">{title}</Text>
        </TouchableOpacity>
    )
}
