
const RecipesUI = ({ recipe, handleAddToCook }) => {
    const { recipe_image, recipe_name, short_description, ingredients, preparing_time, calories } = recipe;

    return (
        // <div className="flex gap-6">

        // </div>
        <div className="w-full bg-white border border-gray-200 rounded-xl">
            <img src={recipe_image} alt="Shoes" className="rounded-[2.5rem] p-6 w-full" />
            <div className="px-6 pb-6">
                <h2 className="card-title text-xl font-semibold pb-4">{recipe_name}</h2>
                <p className='fira-sans text-base text-gray-400 pb-4'>{short_description}</p>
                <hr />
                <div className="py-4">
                    <h4 className='text-lg font-medium mb-4'>Ingredients: {ingredients.length}</h4>
                    <ul className="list-inside fira-sans text-lg text-gray-400 pl-2">
                        {
                            ingredients.map((ingredient, i) => <li key={i}>{ingredient}</li>)
                        }
                    </ul>
                </div>
                <hr />
                <div className="flex gap-4 py-5">
                    <div className='flex gap-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                        <p className="fira-sans text-base text-gray-400">{preparing_time} minutes</p>
                    </div>

                    <div className='flex gap-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                        </svg>

                        <p className="fira-sans text-base text-gray-400">{calories} calories</p>
                    </div>
                </div>
                <button onClick={() => handleAddToCook(recipe)} className="btn rounded-3xl px-6 border-none bg-green-400 text-lg font-medium">Want to Cook</button>
            </div>
        </div>
    );
};

export default RecipesUI;