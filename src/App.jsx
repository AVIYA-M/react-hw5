import { useState } from 'react'
import Carousel from './Carousel/Carousel'
import RecipesCarousel from './RecipesCarousel/RecipesCarousel'
import './App.css'

const images = [
  '/images/(1).jpg',
  '/images/(2).jpg',
  '/images/(3).jpg',
  '/images/(4).jpg',
  '/images/(5).jpg',
  '/images/(6).jpg',
]

function App() {
  const [showRecipes, setShowRecipes] = useState(true)

  return (
    <>
      <Carousel images={images} intervalSeconds={3} />

      <button onClick={() => setShowRecipes((prev) => !prev)}>
        {showRecipes ? 'Hide recipes' : 'Show recipes'}
      </button>

      {showRecipes && <RecipesCarousel />}
    </>
  )
}

export default App