import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-dark text-white d-flex justify-content-around aling-items-center pt-5'>
        <p className='text-danger'>&#169; DaVinci 2024</p>
        <ul className='list'>
            <li className='list-group-item'><strong className='fw-bold text-danger'>Alumno: </strong>Gabriel Agüero</li>
            <li className='list-group-item'><strong className='fw-bold text-danger'>Profesora: </strong>Camila Belén Marcos Galban</li>
            <li className='list-group-item'><strong className='fw-bold text-danger'>Materia: </strong>Aplicaciones Híbridas</li>
            <li className='list-group-item'><strong className='fw-bold text-danger'>Comisión: </strong>DWN4AV</li>
        </ul>
    </footer>
  )
}

export default Footer