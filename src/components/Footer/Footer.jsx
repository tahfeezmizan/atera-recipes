import facebookSvg from '../../assets/Facebook.svg';
import instaSvg from '../../assets/Instagram.svg';
import twitterSvg from '../../assets/Twitter.svg';

const Footer = () => {
    return (
        <div class="w-full lg:w-11/12 xl:w-8/12 mx-auto px-3 md:px-6 lg:px-0 py-20">
            <div class="text-center mb-5">
                <h2 class="mulish text-4xl font-black mb-6">Atera Recipe</h2>
                <p class="inter text-lg px-6 lg:px-40 xl:px-72 text-black text-opacity-60 ">Enjoy an exceptional journey of taste. It's our job every day to make every important aspect of the customer experience a little better.</p>
            </div>

            <div class="flex justify-center items-center gap-4 py-5">
                <img src={facebookSvg} alt="SVG Image" />
                <img src={twitterSvg} alt="SVG Image" />
                <img src={instaSvg} alt="SVG Image" />
            </div>

            <div class="text-center pt-12 border-t-2">
                <p class="mulish text-base font-light text-black text-opacity-60">2024, All Rights Reserved.</p>
            </div>
        </div>
    );
};

export default Footer;