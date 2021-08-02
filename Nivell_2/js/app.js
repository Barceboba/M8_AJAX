const image = document.querySelector('img');
const jokeDIV = document.querySelector('#display-joke');
const button = document.querySelector('#get-joke');

button.addEventListener('click', function () {
    getRandomJoke();
})

function getRandomJoke() {
    const ajax = new XMLHttpRequest;
    const url = 'https://api.chucknorris.io/jokes/random'

    ajax.open('GET', url, true);

    ajax.onreadystatechange = function () {
        if (this.status === 200 && this.readyState === 4) {
            console.log(this.responseText);
            let data = JSON.parse(this.responseText);
            jokeDIV.innerHTML = `${data.value}`
        } else {
            this.onerror = onerror();
        }
    }
    ajax.send();
}

function onerror() {
    jokeDIV.textContent = 'Disculpes, està donat error!';
}

// jQuery Styles
$('#display-joke').css({ 'font-family': 'Marck Script', 'background-color': '#5487c1', 'color': '#e7a933', 'padding': '1.6rem', 'border-radius': '20px', 'border': '.8rem solid #201f42' });
$('.btn').css({ 'background-color': '#5487c1', 'color': '#e7a933' });
$('img').css('display', 'none');

$(document).ready(function () {
    $('.btn').click(function () {
        $('body').css({ 'background-image': 'url(./images/camo.svg', 'border': '0', 'background-color': '#004079' });
    })
});

$(document).ready(function () {
    $('.btn').click(function () {
        $('img').show(2000);
    
    });


});

