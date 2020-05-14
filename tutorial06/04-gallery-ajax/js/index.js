const photosURL = 'https://raw.githubusercontent.com/eecs130/spring2020/master/course-files/tutorials/tutorial06/04-gallery-ajax/data/flowers.json';
const bikesURL = 'https://raw.githubusercontent.com/eecs130/spring2020/master/course-files/tutorials/tutorial06/04-gallery-ajax/data/bikes.json';
const carsURL = 'https://raw.githubusercontent.com/eecs130/spring2020/master/course-files/tutorials/tutorial06/04-gallery-ajax/data/cars.json';

// defining function loadCards, passing in list of photos
const loadCards = (photos) => {
  // resetting the innerHTML of .cards element
    document.querySelector('.cards').innerHTML = '';
// loop thru each photo in list of photos
    for (photo of photos) {
      // photos variable name is the name of list - const names, so list is names; but (x of names) works also - the (blank of names) could be anything;
// the HTML element displayed for each card (creating template for each card, don't forget `)
        const template = `
            <div class="card" style="background-image:url('${photo}')"></div>`;
// adding newly created template literal to .cards innerHTML
        document.querySelector('.cards').innerHTML += template;
    }
    initCarousel();
    // implements carousel, start carousel behavior
};

// query the data from the server:
fetch(bikesURL)
// asking for data from URL sent - convert data/response to json
    .then((response) => {
        return response.json();
    })
    .then(loadCards); // invokes a function to process the data
