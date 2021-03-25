import React from "react";
import style from './index.module.sass'
import CardComponent from "../../../../components/card";

const AboutComponent = () => (
    <div className={style.box}>
        <div className={style.boxContent}>

            <div className={style.boxOne}>
                <div>
                    <div className={style.boxOneImage}>1</div>
                </div>
                <div className={style.boxCardSection}>
                    <CardComponent>
                        <div className={style.boxCard}>
                            <h1>Our story</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad id maxime modi quos. A atque
                                dicta, excepturi fugit maxime nesciunt perspiciatis praesentium, quas quod rerum, sunt
                                ut
                                voluptatibus! Ad consectetur corporis enim, error et exercitationem fugiat, incidunt
                                magni
                                natus perferendis quaerat quibusdam ratione veniam voluptatem!</p>
                        </div>
                    </CardComponent>
                </div>
            </div>
            <div className={style.boxTwo}>
                <div className={style.boxCardSection}>
                    <CardComponent>
                        <div className={style.boxCard}>
                            <h1>Our process</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad id maxime modi quos. A atque
                                dicta, excepturi fugit maxime nesciunt perspiciatis praesentium, quas quod rerum, sunt
                                ut
                                voluptatibus! Ad consectetur corporis enim, error et exercitationem fugiat, incidunt
                                magni
                                natus perferendis quaerat quibusdam ratione veniam voluptatem!</p>
                        </div>
                    </CardComponent>
                </div>
                <div>
                    <div className={style.boxTwoImage}>2</div>
                </div>
            </div>

        </div>
    </div>
)

export default AboutComponent