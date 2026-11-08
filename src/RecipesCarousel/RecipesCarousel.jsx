import { useEffect, useState } from 'react'
import Carousel from '../Carousel/Carousel'

function RecipesCarousel() {
  const [images, setImages] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const controller = new AbortController()

    async function loadImages() {
      try {
        const response = await fetch(
          'https://dummyjson.com/recipes?limit=6&select=name,image',
          {
            signal: controller.signal,
          }
        )

        if (!response.ok) {
          throw new Error('Failed to load recipes')
        }

        const data = await response.json()
        const recipeImages = data.recipes.map((recipe) => recipe.image)

        setImages(recipeImages)
        setLoading(false)
      } catch (err) {
        if (err.name === 'AbortError') return
        setError(err.message)
        setLoading(false)
      }
    }

    loadImages()

    return () => {
      console.log('cleanup')
      controller.abort()
    }
  }, [])

  if (loading) return <div className="carousel-message">טוען...</div>
  if (error) return <div className="carousel-message error">{error}</div>

  return <Carousel images={images} intervalSeconds={4} />
}

export default RecipesCarousel