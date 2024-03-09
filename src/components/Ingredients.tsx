import { ScrollView } from 'react-native'

import { services } from '@/services'

import { Ingredient, IngredientProps } from '@/components/Ingredient'

interface IngredientsProps {
    ingredients: IngredientProps[]
}

export function Ingredients({ ingredients }: IngredientsProps) {
    return (
        <ScrollView
            horizontal
            className="h-14 max-h-14 bg-red-200"
            contentContainerStyle={{ gap: 12, paddingHorizontal: 32 }}
            showsHorizontalScrollIndicator={false}
        >
            {ingredients.map((ingredient) => (
                <Ingredient
                    key={ingredient.name}
                    name={ingredient.name}
                    image={`${services.storage.imagePath}/${ingredient.image}`}
                />
            ))}
        </ScrollView>
    )
}
