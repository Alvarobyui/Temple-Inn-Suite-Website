const requestURL = 'https://github.com/Alvarobyui/wdd230/blob/main/chamber/json/data.json';
const cards = document.querySelector('.directory');


fetch(requestURL) 
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const companies = jsonObject['directory'];  
    //console.log(JSON.parse(userJson));
    console.table(JSON.parse(jsonObject));  // temporary checking for valid response and data parsing
    companies.forEach(displayCompany);
  }); 

  fetch (requestURL, {
    method: 'POST'
  })
  .then(res => res.json())
  .then(res => {
    if (res.success) {
      const companies = jsonObject['directory'];  
      //console.log(JSON.parse(userJson));
      console.table(JSON.parse(jsonObject));  // temporary checking for valid response and data parsing
      companies.forEach(displayCompany);
    }else{
      console.table("nop");
    }
  })
  .catch(function() {
    alert("Can't connect to backend try latter");
  });

function displayCompany(company) {
  // Create elements to add to the document
  let card = document.createElement('section');
  let portrait = document.createElement('img');
  let p = document.createElement('p');
  let p2 = document.createElement('p');
  let link = document.createElement("a");

    // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values.
  portrait.setAttribute('src', company.imageurl);
  portrait.setAttribute('alt', `Logo of ${company.company}`);
  portrait.setAttribute('loading', 'lazy');

  // Change the textContent property of the h2 element to contain the company name
  p.textContent = `${company.address}`;
  p2.textContent = `${company.phone}`;
  link.textContent = `${company.website}`;

//`string text ${expression} string text`
  // Add/append the section(card) with the h2 element
  card.appendChild(portrait); 
  card.appendChild(p);
  card.appendChild(p2);
  

  // Add/append the existing HTML div with the cards class with the section(card)
  cards.appendChild(card);
}   