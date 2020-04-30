const makeBigger = () => {
   document.querySelector('.content').style.fontSize = '40px';
};

const makeSmaller = () => {
   document.querySelector('.content').style.fontSize = '12px';
};


document.querySelector('.a1').onclick = makeBigger;
document.querySelector('.a2').onclick = makeSmaller;
// if you have class name, need the ., just like if you have id you need #//
