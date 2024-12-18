import React from 'react'
import WishList from '../../components/Profile/WishList'

const Profile = () => {
  return (
    <section>
        <h2 className='text-danger fs-1 fw-bold my-5 text-center'>Perfil de usuario</h2>
        <div>
            <WishList/>
        </div>
    </section>
  )
}

export {Profile}