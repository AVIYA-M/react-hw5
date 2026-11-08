import { useState } from 'react'
import './Carousel.css'
import CarouselItem from './CarouselItem'

function Carousel({ images = [], intervalSeconds = 3 }) {
  const [selected, setSelected] = useState(0)

  const move = (step) => {
    setSelected((prev) => prev + step)
  }

  return (
    <div className="carousel">
      <button className="carousel-arrow prev" onClick={() => move(-1)}>
        ‹
      </button>

      {images.map((src, index) =>
        index === selected ? (
          <CarouselItem key={index} src={src} alt={`תמונה ${index + 1}`} />
        ) : null
      )}

      <button className="carousel-arrow next" onClick={() => move(1)}>
        ›
      </button>

      <div className="carousel-dots">
        {images.map((_, index) => (
          <button
            key={index}
            type="button"
            className={index === selected ? 'carousel-dot active' : 'carousel-dot'}
            onClick={() => setSelected(index)}
          />
        ))}
      </div>
    </div>
  )
}

export default Carousel