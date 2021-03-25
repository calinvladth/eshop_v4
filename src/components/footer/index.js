import React from "react";
import style from './index.module.sass'
import NewsLetterComponent from "./news_letter";
import ContactComponent from "./contact";
import QuickLinksComponent from "./quick_links";
import AboutComponent from "./about";


const FooterComponent = () => (
    <div className={style.box}>
        <div className={style.boxContent}>
            <div>
                <AboutComponent/>
            </div>
            <div>
                <QuickLinksComponent/>
            </div>
            <div>
                <ContactComponent/>
            </div>
            <div>
                <NewsLetterComponent/>
            </div>

        </div>
    </div>
)

export default FooterComponent