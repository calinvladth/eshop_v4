import React from 'react'
import style from './index.module.sass'
import CardComponent from "../../../../components/card";

const HeroComponent = () => {
    return (
        <div className={style.box}>
            <div className={style.boxContent}>

                <div className={style.boxItems}>

                    <div className={style.boxCardSection}>
                        <CardComponent>
                            <div className={style.boxCard}>
                                <div>
                                    <h1>Cecile soaps</h1>
                                </div>
                                <div>
                                    <h2>Organic homemage soaps for your perfect skin</h2>
                                </div>
                                <div>
                                    <button className="button">Buy now</button>
                                </div>
                            </div>
                        </CardComponent>
                    </div>

                    <div className={style.boxImage}>
                        1
                    </div>

                </div>

            </div>
        </div>
    )
}

export default HeroComponent