const elem = document.getElementById('output')

// Todo: make
const classNames = [
    'fa-heart',
    'fa-beer',
    'fa-star',
    'fa-bicycle',
    'fa-book',
    'fa-apple-alt',
    'fa-brain',
    'fa-chess'
]
// Exercise: using a for / of loop, iterate through the classNames list
// and output an icon that corresponds to each class.
// Note that these icons are drawing from the FontAwesome icons:
// https://fontawesome.com/icons?d=gallery&m=free
elem.innerHTML += '<i class="fas ' + classNames[0] + '"></i>'
elem.innerHTML += '<i class="fas ' + classNames[1] + '"></i>'
elem.innerHTML += '<i class="fas ' + classNames[2] + '"></i>'

for(icon of classNames) {
  elem.innerHTML += '<i class="fas ' + icon + '"></i>';
}
