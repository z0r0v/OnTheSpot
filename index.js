
// get name;
// get coast;
// get original coast;
// ling mane img;
// Array all img;

const getInnerText = (element)=> {
    return document.querySelector(element).innerText;
};
const getUrlImg = (element) => {
    return document.querySelector(element).src
};
const getArrayImg = (element) => {
    const imgList = document.querySelectorAll(element);
    return Array.prototype.slice.call(imgList)
};

const origCoast = getInnerText(".product-price").split('$')[0] + '$';

console.log(

    "Name:", getInnerText(".product-hero h1"),'\n',
    "Coast:", getInnerText(".product-price-discounted"),'\n',
    "Original Coast:", origCoast, '\n',
    "LinkImage:", getUrlImg('.fullImageContainer .img'),'\n',
    "Array Img:", getArrayImg('.image-container .gallery-image'),

);





