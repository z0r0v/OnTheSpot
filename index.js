
// get name;
// get coast;
// get original coast;
// ling mane img;
// Array all img;

const getInnerText = (element)=> {
    return document.querySelector(element).innerText;
};

const getUrlImg = (element) => {
const lists = document.querySelectorAll(element);
const arrayList =  Array.prototype.slice.call(lists);
const newList = arrayList.filter(list => !list.ariaHidden);
const arrayChild =  Array.prototype.slice.call(newList[0].children);
return arrayChild[1].src
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
    "LinkImage:", getUrlImg('.image-container.zoomable'),'\n',
    "Array Img:", getArrayImg('.image-container .gallery-image'),
);





