import { useState } from "react";
import SingleRecipe from "./SingleRecipe";

const Cooking = ({ cookItem, setCookItem }) => {
    const [currentlyCooked, setCurrentlyCooked] = useState([]);

    // add to current cooking function
    const handleCurrentlyCooking = (cookedItem) => {
        const newCooked = [...currentlyCooked, cookedItem];
        setCurrentlyCooked(newCooked);
        const newCookedItem = cookItem.filter(item => item.recipe_id != cookedItem.recipe_id)
        setCookItem(newCookedItem)
    }

    // const handleTimeCalories = () => {    }

    return (
        <div className="col-span-2 gap-8">
            <div className="w-full bg-white border border-gray-200 py-10 rounded-3xl text-center">
                <h2 className="text-2xl font-semibold pb-4 border-b border-black mb-6 mx-10">Want to cook: {cookItem.length}</h2>
                <div className="overflow-x-auto">
                    <thead className="table">
                        <tr className="text-base font-medium text-gray-500">
                            <th></th>
                            <th>Name</th>
                            <th>Time</th>
                            <th>Calories</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cookItem.map((Cooking, idx) => <SingleRecipe idx={idx}
                                cookItem={Cooking} key={idx} handleCurrentlyCooking={handleCurrentlyCooking} preparingBtn={true} />)
                        }
                    </tbody>
                </div>

                {/* current cooking  */}
                <h2 className="text-2xl font-semibold pb-4 border-b border-black my-8 mx-10">Currently cooking: {currentlyCooked.length}</h2>
                <div className="overflow-x-auto">
                    <thead className="table">
                        <tr className="text-base font-medium text-gray-500">
                            <th></th>
                            <th>Name</th>
                            <th>Time</th>
                            <th>Calories</th>
                            <th></th>
                        </tr>
                    </thead>
                    {
                        currentlyCooked.map((Cooked, idx) => <SingleRecipe idx={idx}
                            cookItem={Cooked} key={idx} />)
                    }
                </div>

                {/* cooking time and calories */}
                <div className="overflow-x-auto">
                    <thead className="table">
                        <tr className="text-base font-medium text-gray-500">
                            <th> </th>
                            <th> </th>
                            <th> </th>
                            <th>Total Time =</th>
                            <th>Total Calories =</th>
                        </tr>
                    </thead>
                    {
                        currentlyCooked.map((Cooked, idx) => <SingleRecipe idx={idx}
                            cookItem={Cooked} key={idx} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Cooking;