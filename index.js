
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

console.log(
    "Name:", getInnerText(".product-hero h1"),'\n',
    "Coast:", getInnerText(".product-price-discounted"),'\n',
    "Original Coast:", getInnerText(".product-prev-price"),'\n',
    "LinkImage:", getUrlImg('.fullImageContainer .img'),'\n',
);
console.dir("Array Img",getArrayImg('.gallery-aside-wrapper .thumbnails .image-thumbnail button img'));



