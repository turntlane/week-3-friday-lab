const restaurants = ['Rigatonis "Number 1 Rated"', 'Porkys "My Favorite"', 'Taco Smell "Vegan Favorite"'];
const button = document.getElementById('random-button');



function getRandom() {
    let text = document.getElementById('random-pick')
    const random = restaurants[Math.floor(Math.random() * restaurants.length)];

    // alert(random, restaurants[random]);

    text.textContent = random;


}



document.getElementById('random-button').addEventListener('click', getRandom)

document.getElementById('random-button').addEventListener('mouseover', () => {
    button.textContent = 'Get a random choice!';

})

document.getElementById('random-button').addEventListener('mouseout', () => {
    button.textContent = `Can't choose a restaurant?`;

})
