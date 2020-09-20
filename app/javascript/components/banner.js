import Typed from 'typed.js';

const loadDynamicBannerText = () => {
  new Typed('#banner-typed-text', {
    strings: ["Change your life", "Read poems ;)"],
    typeSpeed: 60,
    loop: true
  });
}

export { loadDynamicBannerText };