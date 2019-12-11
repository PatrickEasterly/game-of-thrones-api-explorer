
const iceAndFire = `https://anapioficeandfire.com/api/`;
const category = document.querySelector(".category")
const masterlist = document.querySelector(".masterlist")
const detail = document.querySelector(".detail")

let iceAndFireJSON;
let iceAndFireKeys;

const listMapper = x => x.map(liMaker);
const keyMaker = x => iceAndFireKeys = Object.keys(x);
const extract = x => iceAndFireJSON = x;
const liMaker = x => {
    let li = document.createElement("li");
    li.textContent = x;
    li.addEventListener("click", catClick)
    category.appendChild(li);
}
const displayCats = (x) => {
    x.map(liMaker)
}

function getCats() {
    fetch(iceAndFire)
        .then(r=>r.json())
        // .then(logger)
        //  extract JSON object
        .then(extract)
        .then(keyMaker)
        .then(listMapper)
}
getCats()

let jsonTheft;
const li2Maker = x => {
    jsonTheft = x;
    masterlist.textContent = "";
    for (let i of x) {
        let li = document.createElement("li");
        li.textContent = i.name;
        li.addEventListener("click", itemClick)
        masterlist.appendChild(li);
    }
}

function itemClick() {
    let thisName = this.textContent;
    // console.log(jsonTheft[0].region)
    // write functinos for books, characters, and houses that will display their properties


    for (let item of jsonTheft) {
        // console.log(item["name"]);
        // console.log(item["name"] == thisName)
        if (item["name"] == thisName) {
            // console.log(thisName);
            detail.textContent = "";
            // console.log(item["region"])
            for(let property in item) {
                let pee = document.createElement('p');
                pee.textContent = `${property}: ${item[property]}`;
                detail.appendChild(pee);
            }
        }

        
    }


}
// houses == seats
// characters == culture
// books == authors
// console.log(item.hasOwnProperty("authors"))

function bookClick() {

}
function characterClick() {

}
function houseClick() {

}

// for(let property in obj.) {
//     let pee = document.createElement('p');
//     pee.textContent = `${property}: ${obj[property]}`;

// }

function catClick() {
    //  go get that category from the api
    // console.log(this.textContent)
    const apiTarget = `https://anapioficeandfire.com/api/${this.textContent}`
    fetch(apiTarget)
        .then(r=>r.json())
        // .then(r=>console.log(r[0]))
        //  dev tools -> 3 dots -> settings -> disable cache while devtools is open SAVED the day
        .then(li2Maker)
        // .then(itemClick)
}
