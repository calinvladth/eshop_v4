import React, {useEffect, useState} from 'react'
import style from './index.module.sass'
import {useSelector} from "react-redux";
import {OrderByIndex} from "../../../../services/reorder";
import ActiveImageComponent from "./active_image";
import DetailsComponent from "./details";
import InfoComponent from "./info";

const ProductViewProductComponent = ({productRef}) => {
    const config = useSelector(state => state.config)
    const currency = config.data.payment.currency

    const [images, setImages] = useState([])
    const [primaryImage, setPrimaryImage] = useState({})

    const product = useSelector(state => state.product)

    useEffect(() => {
        setImages(OrderByIndex(product.data.images))
        setPrimaryImage(product.data.images[0])
        return () => {
            setPrimaryImage({})
        }
    }, [product.success, product.data.name, product.data.images, product.data.specs])


    return (
        <div className={style.box} ref={productRef}>
            <div className={style.boxContent}>
                <div className={style.boxSection}>
                    <div className={style.boxTitle}>
                        <h1>{product.data.name}</h1>
                        <h1>{product.data.price} {currency}</h1>
                    </div>
                    <div className={`${style.bar} ${style.barRight}`}>&nbsp;</div>
                    <div>
                        <DetailsComponent product={product}/>
                    </div>

                    <div className={style.boxShowInMd}>
                        <InfoComponent
                            images={images}
                            product={product}
                            primaryImage={primaryImage}
                            setPrimaryImage={setPrimaryImage}
                        />
                    </div>

                </div>
                <div>
                    <ActiveImageComponent images={images} primaryImage={primaryImage}/>
                </div>
                <div className={`${style.boxSection} ${style.boxHideFromMd}`}>
                    <div className={style.boxPrice}>
                        <h1>Price</h1>
                        <h1>{product.data.price} {currency}</h1>
                    </div>
                    <div className={`${style.bar} ${style.barLeft}`}>&nbsp;</div>
                    <div>
                        <InfoComponent
                            images={images}
                            product={product}
                            primaryImage={primaryImage}
                            setPrimaryImage={setPrimaryImage}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductViewProductComponent