import ContactHero from './assets/images/contact_hero.webp'
import TikTokIcon from "./assets/images/tik-tok.png";
import FacebookIcon from "./assets/images/facebook.png";
import InstagramIcon from "./assets/images/instagram.png";
import PinterestIcon from "./assets/images/pinterest.png";
import TwitterIcon from "./assets/images/twitter.png";
import Logo from './assets/images/logo.png'
import HomeHero from './assets/images/home_hero.webp'
import AboutImageFirst from './assets/images/home_about_1.webp'
import AboutImageSecond from './assets/images/home_about_2.webp'
import ProductImage from './assets/images/product_page.webp'

export const headerData = {
    logo_light: Logo,
    logo_dark: Logo,
}

export const homepageData = {
    hero_image: HomeHero,
    hero_title: 'Cecile soaps',
    hero_subtitle: 'Organic homemage soaps for your perfect skin',
    hero_shop_button: 'buy now',
    about: {
        fist: {
            title: 'Our story',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad id maxime modi quos. A atque dicta, excepturi fugit maxime nesciunt perspiciatis praesentium, quas quod rerum, sunt ut voluptatibus! Ad consectetur corporis enim, error et exercitationem fugiat, incidunt magni natus perferendis quaerat quibusdam ratione veniam voluptatem!',
            image: AboutImageFirst
        },
        second: {
            title: 'Our process',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad id maxime modi quos. A atque dicta, excepturi fugit maxime nesciunt perspiciatis praesentium, quas quod rerum, sunt ut voluptatibus! Ad consectetur corporis enim, error et exercitationem fugiat, incidunt magni natus perferendis quaerat quibusdam ratione veniam voluptatem!',
            image: AboutImageSecond
        }
    }
}

export const productpageData = {
    description_image: ProductImage
}

export const aboutDataFooter = {
    title: 'about us',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium ad aliquid amet atque consequuntur\n' +
        '            delectus dolore eius eligendi error est eum expedita explicabo laudantium necessitatibus neque nostrum odio\n' +
        '            quasi quod ratione sapiente sed, sequi totam vel vero. Tenetur, voluptatibus.'
}

export const contactpageData = {
    title: "Contact us",
    subtitle: "Fell free to contact us and we will get back to you as soon as possible.",
    image: ContactHero
}

export const contactData = {
    address: "232 Bubby Drive. Austin Texas",
    phone: "512-563-3420",
    email: "example@email.com"
}

export const newsletterData = {
    "reason": "Sign up for exciting sales and updates about our new products."
}

export const successData = {
    message: {
        title: "Thank you for your message",
        message: "We will get back to you as soon as we can"
    },
    newsletter: {
        title: "Success!",
        message: "You have successfully subscribed to our newsletter"
    },
    order: {
        title: "Thank you for your purchase"
    }
}

export const errorData = {
    server_down: {
        title: 'Thank you for your patience',
        message: 'Our servers are down. Please come back later'
    },
    not_found: {
        title: 'This page does not exist',
    }
}

export const socialMediaData = [
    {
        name: 'tiktok',
        icon: TikTokIcon,
        link: 'https://tiktok.com'
    },
    {
        name: 'facebook',
        icon: FacebookIcon,
        link: 'https://facebook.com'
    },
    {
        name: 'instagram',
        icon: InstagramIcon,
        link: 'https://instagram.com'
    },
    {
        name: 'pinterest',
        icon: PinterestIcon,
        link: 'https://pinterest.com'
    },
    {
        name: 'twitter',
        icon: TwitterIcon,
        link: 'https://facebook.com'
    },
]

export const legalPagesData = {
    payment_method: "Payment method",
    terms_and_conditions: "Terms and conditions",
    shipping_and_refund: "Shipping and refund",
    data_privacy: "Data privacy"
}

