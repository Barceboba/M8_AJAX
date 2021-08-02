let contents = document.querySelector('#contents')
function obtain() {
    fetch('http://api.icndb.com/jokes/random')
    .then(res => res.json())
    .then(data=>{
        console.log(data)
        contents.innerHTML = `${data.value["joke"]}`
    } )

}