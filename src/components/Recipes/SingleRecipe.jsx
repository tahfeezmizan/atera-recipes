
const SingleRecipe = ({ cookItem, idx, handleCurrentlyCooking, preparingBtn }) => {
    const { recipe_name, preparing_time, calories } = cookItem;

    return (
        <tr className="fira-sans flex gap-4 text-start items-center justify-center p-4 bg-gray-100">
            <th>{idx + 1}</th>
            <td>{recipe_name}</td>
            <td>{preparing_time} minutes</td>
            <td>{calories} calories</td>

            {preparingBtn &&
                <td>
                    <button onClick={() => handleCurrentlyCooking(cookItem)} className="btn rounded-3xl px-4 border-none bg-green-400 text-base font-medium">Preparing</button>
                </td>
            }
        </tr>
    );
};

export default SingleRecipe;