import React from 'react'
import style from "./index.module.sass";

const DetailsComponent = ({product = {}}) => (
    <div className={style.box}>

        <div>
            <p>{product.data.description_short}</p>
        </div>
    </div>
)

export default DetailsComponent