import React from "react";
import style from './index.module.sass'
import CardComponent from "../../../../components/card";

const ProductViewComponent = () => (
    <div className={style.box}>

        <div className={style.boxContent}>

            <div>
                <div className={style.boxImage}>
                    2
                </div>
            </div>
            <div>
                <div className={style.test}>
                    <CardComponent full={true}>
                        <Details/>
                    </CardComponent>
                </div>
                <div>2</div>
            </div>

        </div>

    </div>
)

const Details = () => (
    <div className={style.details}>
        <div>
            <h1>rose soap</h1>
        </div>
        <div>
            <h1>19.99 usd</h1>
        </div>
        <div>
            <p>first - x</p>
            <p>first - x</p>
            <p>first - x</p>
        </div>
        <div>
            <button className="button button--full">Add to cart</button>
        </div>
        <div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At culpa deleniti dicta est expedita illo,
                magni maxime optio pariatur provident quaerat quisquam repudiandae saepe soluta veritatis. A amet
                aspernatur aut consequatur dignissimos exercitationem nemo, perspiciatis porro provident quas rem
                repellat sapiente, similique ut voluptate voluptatibus.</p>
        </div>
    </div>
)

export default ProductViewComponent