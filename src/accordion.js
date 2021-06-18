const Accordion = (function() {

    const loadBeers = () => {
        const fetchPromise = fetch("https://api.punkapi.com/v2/beers");
        fetchPromise.then(response => {
        return response.json();
        });
    };

    const loadAccordion = () => {
        // initialize the slideshow here
        
        const newDiv = document.createElement("div");

        const beers = loadBeers;

        console.log(beers);

        // and give it some content
        const newContent = document.createTextNode("Hi there and greetings!");
      
        // add the text node to the newly created div
        newDiv.appendChild(newContent);
      
        // add the newly created element and its content into the DOM
        document.addEventListener("DOMContentLoaded", function() {
        const currentDiv = document.getElementById('beers');
        currentDiv.append(newDiv);
        });
    };
  
    return {
      loadBeers: loadBeers,
    };
  
  })();

module.exports = {
    Accordion: Accordion
};