function fetchFood(){
    fetch("http://victorydesign.net/wordpress/wp-json/wp/v2/food?_embed&per_page=100")
    .then(e => e.json())
    .then(showFood)
}

function showFood(data){
    console.log(data);
    data.forEach(showSingleFood)
}

function showSingleFood(aFood){
    console.log(aFood.acf.image.sizes.medium);
    let template = document.querySelector("#foodtemp").content;
    let clone = template.cloneNode(true);
    
    clone.querySelector("h1").textContent = aFood.title.rendered;
    clone.querySelector(".descript").textContent = aFood.content.rendered;
    clone.querySelector(".price span").textContent = aFood.acf.price;
    clone.querySelector(".alc").textContent = aFood.acf.contains_alcohol;
    
    if((".alc").textContent = aFood.acf.contains_alcohol){
    }   else{
        clone.querySelector(".alc").remove()
    }
    
    clone.querySelector("img").setAttribute("src", aFood.acf.image.sizes.medium)
    
    let foodlist = document.querySelector("#foodlist");
    foodlist.appendChild(clone);
    
    
};

fetchFood();

