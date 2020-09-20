import Typed from 'typed.js';

const loadDynamicBannerText = () => {
  new Typed('#banner-typed-text', {
    strings: ["Change your life", "Learn to code ;)"],
    typeSpeed: 60,
    loop: true
  });
}

export { loadDynamicBannerText };