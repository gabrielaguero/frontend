import React from 'react'
import Carrousel from '../../components/HomeComponents/Carrousel'
import FirstSection from '../../components/HomeComponents/FirstSection'
import SecondSection from '../../components/HomeComponents/SecondSection'
import ThirdSection from '../../components/HomeComponents/ThirdSection'

const Home = () => {

    return (
        <div className='bg-black text-white'>
            <h1 className='text-center fs-1 m-5'>Game Verse</h1>
            <Carrousel/>
            <FirstSection/>
            <SecondSection/>
            <ThirdSection/>
        </div>
    )
}

export {Home}