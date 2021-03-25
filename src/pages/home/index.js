import React, {createRef, useEffect} from 'react'
import style from './layout.module.sass'
import HeroComponent from "./components/hero";
import ShopSectionComponent from "../../components/shop_section";
import {useLocation} from "react-router";
import AboutComponent from "./components/about";

export const HomePath = '/'
const shop = 'shop'
export const ShopHash = `#${shop}`
export const ShopPath = `${HomePath}${ShopHash}`


const HomePage = () => {
    const location = useLocation()

    const shopRef = createRef()
    const shopRef1 = createRef()

    document.title = "Shop";
    useEffect(() => {
        if (location.hash === ShopHash) {
            if (shopRef && shopRef.current) shopRef.current.scrollIntoView({behavior: 'smooth', block: 'start'})
            else shopRef1.current.scrollIntoView({behavior: 'smooth', block: 'start'})
        } else {
            window.scrollTo(0, 0)
        }
    }, [shopRef, shopRef1, location])


    return (
        <div className={style.box}>
            <section>
                <HeroComponent/>
            </section>
            <section ref={shopRef1}>
                <ShopSectionComponent shopRef={shopRef}/>
            </section>
            <section>
                <AboutComponent/>
            </section>
        </div>
    )
}

export default HomePage