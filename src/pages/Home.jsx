import { MoonStars } from '@phosphor-icons/react'
import { SunDim } from '@phosphor-icons/react'

import { useState } from 'react'

export function Home({toggleNightMode}) {
    const [activeNight, setActiveNight] = useState(true);

    const handleButtonNight = () => {
        setActiveNight(!activeNight);
        toggleNightMode(!activeNight);
    }

    return(
        <>
        <div className={activeNight ? "bodyHome" : "bodyHomeNight"}>
            <div className="itemOne">
                <div className={activeNight ? "ballOne" : "ballOneNight"}></div>
                <div className={activeNight ? "ballSmallOne" : "ballSmallOneNight"}></div>
                <div className={activeNight ? "circleOne" : "circleOneNight"}></div>
            </div>
            <div className="mainHome">
                <div className="container">
                    <div className={activeNight ? "content" : "contentNight"}>
                        <img src="../src/assets/cezar.png" alt="" />
                        <h1>CEZAR RULL</h1>
                        <ul>
                            <li>
                                <a href="#">CONTATO</a>
                            </li>
                            <li>
                                <a href="#">SOBRE</a>
                            </li>
                            <li>
                                <a href="#">OUTROS</a>
                            </li>
                        </ul>
                        <button className={activeNight ? "buttonDay" : "buttonNight"} onClick={handleButtonNight}>
                            <div className='sun'>
                                <SunDim size={20} />
                            </div>
                            <div className='moon'>
                                <MoonStars size={20} />
                            </div>
                        </button>
                    </div>
                </div>
            </div>
            <div className="itemTwo">
                <div className={activeNight ? "ballTwo" : "ballTwoNight"}></div>
                <div className={activeNight ? "ballSmallTwo" : "ballSmallTwoNight"}></div>
                <div className={activeNight ? "circleTwo" : "circleTwoNight"}></div>
            </div>
        </div>
        </>
    )
}