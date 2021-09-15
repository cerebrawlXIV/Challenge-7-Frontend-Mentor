
let rightButton = document.querySelector("#right-button");
let leftButton = document.getElementById("left-button");

let img = document.querySelector("#photo-container figure img");
let firstPerson = document.getElementById("first-person");
let secondPerson = document.getElementById("second-person");

let personList = [firstPerson, secondPerson];
let photoList = ["image-tanya.jpg", "image-john.jpg"];
let nameList = ["Tanya", "John"];
let index = 0;

rightButton.addEventListener("click", () => {
    personList[index].style.display = "none";
    if(index == personList.length - 1){
        index = 0;
    } else {
        index++;
    }
    personList[index].style.display = "block";
    img.setAttribute("src", `images/${photoList[index]}`);
    img.setAttribute("alt", `Une photo de ${nameList[index]}`);
});

leftButton.addEventListener("click", () => {
    personList[index].style.display = "none";
    if(index == 0){
        index = personList.length - 1;
    } else {
        index--;
    }
    personList[index].style.display = "block";
    img.setAttribute("src", `images/${photoList[index]}`);
    img.setAttribute("alt", `Une photo de ${nameList[index]}`);
});