import React from 'react'
import { Link } from 'react-router-dom'
import News from './../../assets/images/forDesign/news.png'
import Flash from './../../assets/images/forDesign/flash.png'
import Mac from './../../assets/images/forDesign/mac.png'
import Acs from './../../assets/images/forDesign/acces.png'
import Feature from './../../assets/images/forDesign/image.png'
import Catog from './../../assets/images/ads/image.png'
import Pod from './../../assets/images/ads/homepod.png'
import xbox from './../../assets/images/ads/xbox.png'


export const HomeMain = () => {
    return (
        <div>
            <Link to='/shop'>
                <div className='px-80'>
                    <img src={xbox} />
                    <img src={Feature} className='my-5' />
                </div>
                <img src={Catog} className='my-16' />
                <img src={Pod} />
                <img src={Acs} />
                <div className='px-60'>
                    <img src={Mac} />
                </div>
                <img src={Flash} />
                <img src={News} />
            </Link>
        </div>
    )
}