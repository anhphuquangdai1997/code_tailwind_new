import React from 'react';
import menu from '../assets/menu.png'
import menu7 from '../assets/menu7.png'
import menu3 from '../assets/menu3.png'


const Menu = () => {
    return (
        <div>
            <img src={menu} alt="" />
            <div>
                <img src={menu7} alt="" />
                <img src={menu3} alt="" />
            </div>
        </div>
    )
}

export default Menu