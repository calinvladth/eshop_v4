import React from "react";
import style from './index.module.sass'
import CardComponent from "../../../../components/card";
import {contactData, contactpageData} from "../../../../data";

const ProductDescriptionComponent = () => (
    <div className={style.box}>

        <div className={style.boxContent}>

            <div className={style.boxCardSection}>
                <CardComponent>
                    <div className={style.boxInfo}>
                        <div>
                            <h1>Description</h1>
                        </div>
                        <div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquid asperiores deserunt
                                dolor doloremque eaque eos et fuga id impedit incidunt inventore iure labore laborum
                                libero maiores maxime minima mollitia non odit praesentium quam quas quis, repellendus
                                repudiandae sequi sit suscipit tempore temporibus tenetur ut?</p>
                        </div>
                    </div>
                </CardComponent>
            </div>

            <div className={style.boxImage}>
                1
            </div>

        </div>

    </div>
)

export default ProductDescriptionComponent