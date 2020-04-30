const defaultTheme = () => {
   document.querySelector('.container').className = 'container';
};

const oceanTheme = () => {
   document.querySelector('.container').className = 'ocean container';
};

const desertTheme = () => {
   document.querySelector('.container').className = 'desert container';
};

document.querySelector('#default').onclick = defaultTheme;
document.querySelector('#ocean').onclick = oceanTheme;
document.querySelector('#desert').onclick = desertTheme;
