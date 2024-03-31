
import { useEffect } from 'react';
import { useState } from 'react';
import RecipesUI from './RecipesUI';

const Recipes = ({handleAddToCook}) => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setRecipes(data))
    }, []);

    return (
        <div className='grid md:grid-cols-2 gap-6'>
            {
                recipes.map(reci => <RecipesUI key={reci.recipe_id} recipe={reci} handleAddToCook={handleAddToCook}></RecipesUI>)
            }
        </div>
    );
};

export default Recipes;
