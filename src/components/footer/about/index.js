import React from "react";
import style from './index.module.sass'
import {aboutDataFooter} from "../../../data";

const AboutComponent = () => (
    <div className={style.box}>
        <h2>{aboutDataFooter.title}</h2>
        <p>{aboutDataFooter.description}</p>
    </div>
)

export default AboutComponent