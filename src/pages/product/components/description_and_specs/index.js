import React from "react";
import style from './index.module.sass'
import {OrderByIndex} from "../../../../services/reorder";

const DescriptionAndSpecs = ({description, specs, category}) => (
    <div className={style.box}>
        <div>
            <AdditionalInformations specs={specs} category={category}/>
        </div>
        <div>
            <Description description={description}/>
        </div>
    </div>
)

const AdditionalInformations = ({specs, category}) => (
    <div>
        <h1>Additional Informations</h1>
        <div className={style.spec}>
            <p>Category</p>
            <p>{category.category.name}</p>
        </div>
        {
            OrderByIndex(specs).map(o => <div key={o.id} className={style.spec}>
                <p>{o.key}</p>
                <p>{o.value}</p>
            </div>)
        }
    </div>
)

const Description = ({description}) => (
    <div>
        <h1>Description</h1>
        <p>
            {description}
        </p>
    </div>
)

export default DescriptionAndSpecs