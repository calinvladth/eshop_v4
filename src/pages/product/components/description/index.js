import React from "react";
import style from './index.module.sass'
import CardComponent from "../../../../components/card";
import {contactData, contactpageData, productpageData} from "../../../../data";
import {setBackgroundImage} from "../../../../services/image";

const ProductDescriptionComponent = ({description}) => (
    <div className={style.box}>

        <div className={style.boxContent}>

            <div className={style.boxCardSection}>
                <CardComponent>
                    <div className={style.boxInfo}>
                        <div>
                            <h1>Description</h1>
                        </div>
                        <div>
                            <p>{description}</p>
                        </div>
                    </div>
                </CardComponent>
            </div>

            <div className={style.boxImage} style={setBackgroundImage(productpageData.description_image)}>
                &nbsp;
            </div>

        </div>

    </div>
)

export default ProductDescriptionComponent