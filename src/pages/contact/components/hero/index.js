import React from "react";
import style from './index.module.sass'
import CardComponent from "../../../../components/card";
import {contactData, contactpageData} from "../../../../data";

const HeroComponent = () => (
    <div className={style.box}>
        <div className={style.boxContent}>

            <div className={style.boxItems}>

                <div className={style.boxCardSection}>
                    <CardComponent>
                        <div className={style.boxInfo}>
                            <div>
                                <h1>{contactpageData.title}</h1>
                            </div>
                            <div>
                                <p>{contactpageData.subtitle}</p>
                            </div>

                            <div>
                                <p>{contactData.address}</p>
                                <p>{contactData.phone}</p>
                                <p>{contactData.email}</p>
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

export default HeroComponent