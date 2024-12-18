import React from 'react'
import imgJuegos from '../../assets/img/secciones/juegos.webp'

const ThirdSection = () => {
  return (
    <section className='text-center w-50 mx-auto d-flex justify-content-center aling-items-center mt-5'>
        <div>
            <img src={imgJuegos}  alt="Images ilustrativa para agregar juegos a la lista" />
        </div>
        <div>
            <h2 className='text-danger fs-2 fw-bold my-5'>Encontrá todos los juegos</h2>
            <p>
                En Game Verse podrás encontrar cientos de juegos con toda la información que necesitas. Seguro que los juegos que tenés ya están acá, pero si no encuentras algo, puedes crearlo tú mismo desde la web.
            </p>
        </div>
    </section>
  )
}

export default ThirdSection