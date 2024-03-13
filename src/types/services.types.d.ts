interface IngredientResponse {
    id: string
    name: string
    image: string
}

interface PreparationsResponse {
    id: string
    recipe_id: string
    description: string
    step: number
}

interface RecipeResponse {
    id: string
    name: string
    image: string
    minutes: number
}
