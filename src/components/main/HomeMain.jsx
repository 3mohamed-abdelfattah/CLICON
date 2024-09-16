import React from 'react'
import { Link } from 'react-router-dom'


export const HomeMain = () => {
    return (
        <div className='flex justify-center my-10 gap-5'>
            <Link to='/shop'>
                go to shop
            </Link>
        </div>
    )
}