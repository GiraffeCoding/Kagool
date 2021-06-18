const Carousel = (function() {

    loadBeers = () => {
        const fetchPromise = fetch("https://api.punkapi.com/v2/beers");
        fetchPromise.then(response => {
        return response.json();
        }).then(beers => {
        const names = beers.map(beer => beer.name).join("\n");
        console.log(names);
        });
    };

    imageSlider = function(images) {
        // initialize the slideshow here
        
        const newDiv = document.createElement("div");

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

    publicMethod = function() {
        imageSlider();
    };

    return {
        publicMethod: publicMethod
    };

})();

module.exports = {
    Carousel: Carousel
};