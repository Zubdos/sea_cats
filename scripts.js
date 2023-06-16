let pet = {
    name: "Матроскин",
    favorite: false,
    
}

let pet2 = {
    name: "Резвый",
    favorite: true,
    
}

const block = document.querySelector(".wrapper");

/*
    <div class="card">
            <div class="pic tmp"></div>
            <h2>Сергей Иванович</h2>
            <i class="like fa-regular fa-heart"></i>
    </div>
*/
function createCard(pet) {
const card = document.createElement("div");
card.className = "card";
const cardImg = document.createElement("div");
cardImg.className = "pic";
if (pet.image) {
    cardImg.style.backgroundImage = `url(${pet.image})`;
} else {
    cardImg.classList.add("tmp");
}
const cardTitle = document.createElement("h2");
cardTitle.innerText = pet.name;

const cardLike = document.createElement("i");
cardLike.className ="like fa-heart";
cardLike.classList.add(pet.favorite ? "fa-solid" : "fa-regular");


card.append(cardImg, cardTitle, cardLike);


block.append(card);
console.log(cardImg.offsetWidth);
cardImg.style.height = cardImg.offsetWidth + "px"
}
createCard(pet)
createCard(pet2)

let name = "Tony_proTony";
let path = `https://cats.petiteweb.dev/api/single/${name}`;
// let f = fetch(path + "/show")
// console.log(f); 

// fetch(path + "/show")
fetch(path + "/show")
    .then(function(res) {
        console.log(res);      
        
        return res.json();
    })
    .then(function(data) {
        console.log(data);
        if (data.length){
            for (let pet of data) {
                createCard(pet);
            }

        }
    })

//fetch(path + "/show")
//    .then(res => res.json())
//    .then(data => {
//        console.log(data);
//    }