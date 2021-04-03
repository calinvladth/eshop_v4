import React, {useEffect, useState} from "react";
import style from './index.module.sass'
import CardComponent from "../../../../components/card";
import {setBackgroundImage} from "../../../../services/image";
import {api} from "../../../../config";
import QuantityComponent from "../../../../components/quantity";
import {useDispatch, useSelector} from "react-redux";
import {OrderByIndex} from "../../../../services/reorder";
import {ChangeQuantity} from "../../../../services/quantity";
import {PostCartItem} from "../../../../redux/cart/actions";

const ProductViewComponent = () => {
    const config = useSelector(state => state.config)
    const currency = config.data.payment.currency

    const [primaryImage, setPrimaryImage] = useState({})

    const [quantity, setQuantity] = useState(1)


    const product = useSelector(state => state.product)

    useEffect(() => {
        setPrimaryImage(product.data.images[0])
        return () => {
            setPrimaryImage({})
        }
    }, [product.success, product.data.name, product.data.images, product.data.specs])

    function editQuantity(add, quantity) {
        const newQuantity = ChangeQuantity(add, quantity)
        setQuantity(newQuantity)
    }

    return (
        <div className={style.box}>

            <div className={style.boxContent}>

                <div>
                    <div className={style.boxImage} style={setBackgroundImage(api + primaryImage.path)}>
                        &nbsp;
                    </div>
                </div>
                <div>
                    <div>
                        <CardComponent full={true}>
                            <Details
                                product={product.data}
                                currency={currency}
                                quantity={quantity}
                                editQuantity={editQuantity}
                            />
                        </CardComponent>
                    </div>
                    <div className={style.boxGallery}>
                        <Gallery
                            images={product.data.images}
                            primaryImage={primaryImage}
                            setPrimaryImage={setPrimaryImage}
                        />
                    </div>
                </div>

            </div>

        </div>
    )
}

const Details = ({product, currency, quantity, editQuantity}) => {
    const dispatch = useDispatch()
    return (
        <div className={style.details}>
            <div>
                <h1>{product.name}</h1>
            </div>
            <div>
                <h1>{product.price} {currency}</h1>
            </div>
            <div className={style.detailsSpecs}>
                <div>
                    <div>
                        <p>Category</p>
                    </div>
                    <div>
                        <p>{product.category.category.name}</p>
                    </div>
                </div>
                {
                    OrderByIndex(product.specs).map(o => <div key={o.id}>
                        <div>
                            <p>{o.key}</p>
                        </div>
                        <div>
                            <p>{o.value}</p>
                        </div>
                    </div>)
                }

            </div>
            <div className={style.detailsAction}>
                <div>
                    <QuantityComponent quantity={quantity} editQuantity={editQuantity}/>
                </div>
                <div>
                    <button
                        onClick={() => dispatch(PostCartItem(product.id, quantity, false, true))}
                        className="button button--full">
                        Add to cart
                    </button>
                </div>

            </div>
            <div>
                <p>{product.description_short}</p>
            </div>
        </div>
    )
}

const Gallery = ({images, primaryImage, setPrimaryImage}) => (
    <div className={style.gallery}>
        {
            OrderByIndex(images).map((o, i) => <div
                key={o.id}
                style={setBackgroundImage(api + o.path)}
                className={primaryImage.id === o.id ? style.imageActive : null}
                onClick={() => setPrimaryImage(o)}
            >&nbsp;</div>)
        }
    </div>
)

export default ProductViewComponent