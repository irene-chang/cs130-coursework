const photosURL = 'https://raw.githubusercontent.com/eecs130/spring2020/master/course-files/tutorials/tutorial06/05-gallery-many-threads/data/flowers.json';
const bikesURL = 'https://raw.githubusercontent.com/eecs130/spring2020/master/course-files/tutorials/tutorial06/05-gallery-many-threads/data/bikes.json';
const carsURL = 'https://raw.githubusercontent.com/eecs130/spring2020/master/course-files/tutorials/tutorial06/05-gallery-many-threads/data/cars.json';


const loadCards = (photos) => {
    document.querySelector('.cards').innerHTML = '';

    // load new ones (based on photos list)
    for (photo of photos) {
        const template = `
           <div class="card" style="background-image:url('${photo}')"></div>`;
        document.querySelector('.cards').innerHTML += template;
    }
    initCarousel();
};

const loadFlowers = () => {
    fetch(photosURL)
        .then((response) => {
            return response.json();
        })
        .then(loadCards);
};

const loadCars = () => {
    fetch(carsURL)
      .then((response) => {
          return response.json();
      })
      .then(loadCards);
    console.log('fetch data from', carsURL, 'and display it...');
};

const loadBikes = () => {
  fetch(bikesURL)
    .then((response) => {
        return response.json();
    })
    .then(loadCards);
    console.log('fetch data from', bikesURL, 'and display it...');
};

document.querySelector('#flowers-button').onclick = loadFlowers;
document.querySelector('#cars-button').onclick = loadCars;
document.querySelector('#bikes-button').onclick = loadBikes;

// default to the flowers:
loadFlowers();
