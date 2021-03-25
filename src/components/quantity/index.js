import React from 'react'
import style from './index.module.sass'
import AddSvg from "../../assets/icons/add";
import SubtractSvg from "../../assets/icons/subtract";

const QuantityComponent = ({quantity, editQuantity, base = true}) => {
    return (
        <div>
            {
                base
                    ?
                    <QuantityBase quantity={quantity} editQuantity={editQuantity}/>
                    :
                    <QuantityLong quantity={quantity} editQuantity={editQuantity}/>
            }
        </div>
    )
}

const QuantityBase = ({quantity, editQuantity}) => (
    <div className="quantity">
        <input type="number" min="1" value={quantity}
               readOnly={true}/>
        <div className={style.oldQuantityButtons}>
            <div className="quantity__button"
                 onClick={() => editQuantity(true, quantity)}>
                <AddSvg/>
            </div>
            <div className="quantity__button"
                 onClick={() => editQuantity(false, quantity)}>
                <SubtractSvg/>
            </div>
        </div>
    </div>
)

const QuantityLong = ({quantity, editQuantity}) => (
    <div className={style.quantity}>
        <div onClick={() => editQuantity(false, quantity)}>
            <SubtractSvg/>
        </div>
        <div>
            <span>{quantity}</span>
        </div>
        <div onClick={() => editQuantity(true, quantity)}>
            <AddSvg/>
        </div>
    </div>
)

export default QuantityComponent