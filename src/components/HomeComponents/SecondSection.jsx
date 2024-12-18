import React from 'react'
import imgSection from '../../assets/img/secciones/seccion2.webp'

const SecondSection = () => {
  return (
    <section className='text-center w-50 mx-auto d-flex justify-content-center aling-items-center mt-5'>
        <div className='me-5'>
            <h2 className='text-danger fs-2 fw-bold my-5'>Armá tu colección</h2>
            <p>Añadir tus juegos en nuestra plataforma es tan sencillo como hacer clic en “Lo tengo”. Un solo clic y listo. No importa lo grande que sea tu colección, con nuestra herramienta es tan rápido que podrás tenerla organizada en una tarde.</p>
        </div>
        <div>
            <img src={imgSection} className='mt-5' style={{width: '700px'}} alt="Imagen grilla de juegos" />
        </div>
    </section>
  )
}

export default SecondSection