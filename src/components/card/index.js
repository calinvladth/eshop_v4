import React from "react";
import style from './index.module.sass'

const CardComponent = ({children, full=false}) => {
    const styleHeight = {
        height: full ? '100%' : 'auto'
    }
    return (
    <div className={style.box} style={styleHeight}>
        {children}
    </div>
)
}

export default CardComponent