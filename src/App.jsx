import { useState } from 'react'
import './App.css'
import Banner from './components/Banner/Banner'
import Header from './components/Header/Header'
import Cooking from './components/Recipes/Cooking'
import Recipes from './components/Recipes/Recipes'
import RecipesTitle from './components/Recipes/RecipesTitle'
import RecipesUI from './components/Recipes/RecipesUI'
import Currentlycooking from './components/Recipes/Currentlycooking';
import toast from 'react-hot-toast';
import Footer from './components/Footer/Footer'


function App() {
  const [cookItem, setCookItem] = useState([]);

  //add to cook function
  const handleAddToCook = recipes => {
    const isExist = cookItem.find(item => item.recipe_id == recipes.recipe_id);
    if (!isExist) {
      const newRecipes = [...cookItem, recipes];
      setCookItem(newRecipes)
      toast.success("Recipes Added Successfully")
    } else {
      toast.error('Recipe Aleready Added');
    }
  }

  return (
    <>
      <Header></Header>
      <Banner></Banner>
      <RecipesTitle></RecipesTitle>

      <div className="w-full lg:w-11/12 xl:w-8/12 mx-auto px-4 md:px-6 lg:px-0 pb-20">

        <div className="grid md:grid-cols-5 gap-6">

          <div className="md:col-span-3">
            <Recipes handleAddToCook={handleAddToCook}></Recipes>
          </div>
          <div className="md:col-span-2">
            <Cooking key={cookItem.recipe_id} cookItem={cookItem} setCookItem={setCookItem}></Cooking>
          </div>
        </div>
      </div>

      <Footer></Footer>

    </>
  )
}

export default App
