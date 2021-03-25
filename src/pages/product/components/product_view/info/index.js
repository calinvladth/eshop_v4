import React, {useState} from "react";
import style from './index.module.sass'
import {PostCartItem} from "../../../../../redux/cart/actions";
import {ChangeQuantity} from "../../../../../services/quantity";
import {useDispatch} from "react-redux";
import QuantityComponent from "../../../../../components/quantity";
import {setBackgroundImage} from "../../../../../services/image";
import {api} from "../../../../../config";


const InfoComponent = ({product = {}, images = [], primaryImage = {}, setPrimaryImage}) => {
    const dispatch = useDispatch()
    const [quantity, setQuantity] = useState(1)

    function editQuantity(add, quantity) {
        const newQuantity = ChangeQuantity(add, quantity)
        setQuantity(newQuantity)
    }

    return (
        <div className={style.box}>

            <div className={style.boxActions}>
                <div>
                    <QuantityComponent quantity={quantity} editQuantity={editQuantity} base={false}/>
                </div>
                <div>
                    <button
                        onClick={() => dispatch(PostCartItem(product.data.id, quantity, false, true))}
                        className={'button'}>
                        Add to cart
                    </button>
                </div>
                <div className={style.gallery}>
                    {
                        images.map((o, i) => <div
                            key={o.id}
                            style={setBackgroundImage(api + o.path)}
                            className={primaryImage.id === o.id ? style.imageActive : null}
                            onClick={() => setPrimaryImage(o)}
                        >&nbsp;</div>)
                    }
                </div>
            </div>

        </div>
    )

}

export default InfoComponent