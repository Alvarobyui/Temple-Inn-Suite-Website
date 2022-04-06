const requestURL = 'https://github.com/Alvarobyui/Final-Project-WDD230/blob/main/json/temple-info.json';
const cards = document.querySelector('.directory');


fetch(requestURL) 
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    //const companies = jsonObject['directory'];  
    //console.log(JSON.parse(userJson));
    console.table(JSON.parse(jsonObject));  // temporary checking for valid response and data parsing
    //temple.forEach(displayTemple);
  }); 
  
function displayTemple(temple) {
  // Create elements to add to the document
  let card = document.createElement('section');
  let portrait = document.createElement('img');
  let p = document.createElement('p');
  let p2 = document.createElement('p');
  let link = document.createElement("a");

    // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values.
  portrait.setAttribute('src', temple.imageurl);
  portrait.setAttribute('alt', `Logo of ${temple.name}`);
  portrait.setAttribute('loading', 'lazy');

  // Change the textContent property of the h2 element to contain the company name
  p.textContent = `${temple.name}`;
  p2.textContent = `${temple.phone}`;
  link.textContent = `${temple.temple-closure}`;

//`string text ${expression} string text`
  // Add/append the section(card) with the h2 element
  card.appendChild(portrait); 
  card.appendChild(p);
  card.appendChild(p2);
  

  // Add/append the existing HTML div with the cards class with the section(card)
  cards.appendChild(card);
}   