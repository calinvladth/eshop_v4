import ContactHero from './assets/images/contact_hero.jpg'
import Spinner from './assets/images/spin.gif'
import TikTokIcon from "./assets/images/tik-tok.png";
import FacebookIcon from "./assets/images/facebook.png";
import InstagramIcon from "./assets/images/instagram.png";
import PinterestIcon from "./assets/images/pinterest.png";
import TwitterIcon from "./assets/images/twitter.png";
import LogoLight from './assets/images/logo_light.png'
import LogoDark from './assets/images/logo_dark.png'
import HomeHero from './assets/images/home_hero.jpg'

export const headerData = {
    logo_light: LogoLight,
    logo_dark: LogoDark,
}

export const homepageData = {
    hero_image: HomeHero,
    hero_title: 'Timeless pieces for your exquisite taste, handrafted with care and passion. \nBrowse our collections now.',
    hero_shop_button: 'start shopping',
    spinner: Spinner,
    about_slogan: 'about us',
    about_title: 'Delilah\'s story',
    about_description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus commodi dicta dolor\n' +
        '                        doloremque est illo laboriosam nam, nulla pariatur quis quisquam quos, sint ullam? Dolorem, ex\n' +
        '                        id. Ad eaque eum veniam vero. Architecto, officia, perspiciatis.',
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

