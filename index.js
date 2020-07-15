// get name;
// get coast;
// get original coast;
// ling mane img;
// Array all img;

const getInnerText = (element) => {
    return document.querySelector(element).innerText;
};

const dqs = (element, all) => {
    if (all === false) {
        return document.querySelector(element);
    } else {
        return document.querySelectorAll(element);
    }
};

const getArray = (element) => {
    return Array.prototype.slice.call(element);
};

const getUrlImg = (element) => {
    const lists = dqs(element, 0);
    const arrayList = getArray(lists);
    const newList = arrayList.filter(list => !list.ariaHidden);
    const arrayChild = getArray(newList[0].children);
    return arrayChild[1].src
};

const getArrayImg = (element) => {
    const imgList = dqs(element, 1);
    return getArray(imgList)
};


console.log(
    "Name:", getInnerText(".product-hero h1"), '\n',
    "Coast:", getInnerText(".product-price-discounted"), '\n',
    "Original Coast:", getInnerText(".product-price").split('$')[0] + '$', '\n',
    "LinkImage:", getUrlImg('.image-container.zoomable'), '\n',
    "Array Img:", getArrayImg('.image-container .gallery-image'),
);





