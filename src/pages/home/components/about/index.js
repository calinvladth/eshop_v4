import React from "react";
import style from './index.module.sass'
import CardComponent from "../../../../components/card";
import {setBackgroundImage} from "../../../../services/image";
import {homepageData} from "../../../../data";

const AboutComponent = () => (
    <div className={style.box}>
        <div className={style.boxContent}>

            <div className={style.boxOne}>
                <div>
                    <div className={style.boxOneImage} style={setBackgroundImage(homepageData.about.fist.image)}>&nbsp;</div>
                </div>
                <div className={style.boxCardSection}>
                    <CardComponent>
                        <div className={style.boxCard}>
                            <h1>{homepageData.about.fist.title}</h1>
                            <p>{homepageData.about.fist.text}</p>
                        </div>
                    </CardComponent>
                </div>
            </div>
            <div className={style.boxTwo}>
                <div className={style.boxCardSection}>
                    <CardComponent>
                        <div className={style.boxCard}>
                            <h1>{homepageData.about.second.title}</h1>
                            <p>{homepageData.about.second.text}</p>
                        </div>
                    </CardComponent>
                </div>
                <div>
                    <div className={style.boxTwoImage} style={setBackgroundImage(homepageData.about.second.image)}>&nbsp;</div>
                </div>
            </div>

        </div>
    </div>
)

export default AboutComponent