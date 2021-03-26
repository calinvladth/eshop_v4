import React from 'react'
import style from './index.module.sass'
import CardComponent from "../../../../components/card";
import {homepageData} from "../../../../data";
import {useHistory} from "react-router";
import {ShopPath} from "../../index";
import {setBackgroundImage} from "../../../../services/image";

const HeroComponent = () => {
    const history = useHistory()
    return (
        <div className={style.box}>
            <div className={style.boxContent}>

                <div className={style.boxItems}>

                    <div className={style.boxCardSection}>
                        <CardComponent>
                            <div className={style.boxCard}>
                                <div>
                                    <h1>{homepageData.hero_title}</h1>
                                </div>
                                <div>
                                    <h2>{homepageData.hero_subtitle}</h2>
                                </div>
                                <div>
                                    <button onClick={() => history.push(ShopPath)} className="button">{homepageData.hero_shop_button}</button>
                                </div>
                            </div>
                        </CardComponent>
                    </div>

                    <div className={style.boxImage} style={setBackgroundImage(homepageData.hero_image)}>&nbsp;</div>

                </div>

            </div>
        </div>
    )
}

export default HeroComponent