const elem = document.getElementById('output');

// Todo: make
const className = 'fa-heart';

/* TODO: instead of repeating the line below
   over and over again, use a while loop to repeat it
   as many times as you like.
*/
// elem.innerHTML += '<i class="fa ' + className + '"></i>';
// elem.innerHTML += '<i class="fa ' + className + '"></i>';
// elem.innerHTML += '<i class="fa ' + className + '"></i>';
// elem.innerHTML += '<i class="fa ' + className + '"></i>';

count = 0;
while (count < 100) {
  elem.innerHTML += '<i class="fa ' + className + '"></i>';
  count++;
  // ++ means count + 1, increase, will keep going until count hits 100
}
