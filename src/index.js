const siteContent = { // DO NOT CHANGE THIS OBJECT
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2021",
  },
  "images": {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log('project wired!')
const links = document.querySelectorAll('header nav a');
links[0].textContent = 'Services';
links[1].textContent = 'Product';
links[2].textContent = 'Vision';
links[3].textContent = 'Features';
links[4].textContent = 'About';
links[5].textContent = 'Contact';


const ctaHeader = document.querySelector('.cta h1')
ctaHeader.textContent = 'DOM Is Awesome';

const ctaButton = document.querySelector('.cta button')
ctaButton.textContent = 'Get Started';

const logoImage = document.querySelector('#logo-img');
logoImage.src = 'http://localhost:9000/img/logo.png';

const ctaImage = document.querySelector('#cta-img');
ctaImage.src = 'http://localhost:9000/img/cta.png';

const accentImage = document.querySelector('.middle-img');
accentImage.src = 'http://localhost:9000/img/accent.png';

const topContentHeader = document.querySelectorAll('.top-content .text-content h4');
const topContentText = document.querySelectorAll('.top-content .text-content p');
topContentHeader[0].textContent = (siteContent['main-content']['features-h4']);
topContentText[0].textContent = (siteContent['main-content']['features-content']);
topContentHeader[1].textContent = (siteContent['main-content']['about-h4']);
topContentText[1].textContent = (siteContent['main-content']['about-content']);
const bottomContentHeader = document.querySelectorAll('.bottom-content .text-content h4');
const bottomContentText = document.querySelectorAll('.bottom-content .text-content p');
bottomContentHeader[0].textContent = (siteContent['main-content']['services-h4']);
bottomContentText[0].textContent = (siteContent['main-content']['services-content']);
bottomContentHeader[1].textContent = (siteContent['main-content']['product-h4']);
bottomContentText[1].textContent = (siteContent['main-content']['product-content']);
bottomContentHeader[2].textContent = (siteContent['main-content']['vision-h4']);
bottomContentText[2].textContent = (siteContent['main-content']['vision-content']);
const contactHeader = document.querySelector('.contact h4');
contactHeader.textContent = (siteContent['contact']['contact-h4']);

const contactText = document.querySelectorAll('.contact p');
contactText[0].textContent = (siteContent['contact']['address']);
contactText[1].textContent = (siteContent['contact']['phone']);
contactText[2].textContent = (siteContent['contact']['email']);

const copyright = document.querySelector('footer a');
copyright.textContent = (siteContent['footer']['copyright']);
copyright.className = 'bold';
links.forEach((link) => link.className = 'italic');
