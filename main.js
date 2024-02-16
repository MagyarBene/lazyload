import { getData } from "./utils.js";
import {apiKey} from "./apiKey.js";
let page = 1

const url=`https://api.unsplash.com/search/photos?client_id=${apiKey}&page=`
let gomb = document.querySelector("button").addEventListener("click", SearchBar)
let qString
function SearchBar() {
    document.querySelector(".image-gallery").innerHTML=""   
    let srch = document.querySelector('.scr').value
    qString=`&query=${srch}`
    getData(url+page+qString,renderImages)
}


function renderImages(data){
    document.querySelector('.loading').style.display="none"
    console.log(data);
    data.results.forEach(obj => {
        const imageElement = document.createElement('img')
        imageElement.src=obj.urls.small
        imageElement.alt=obj.alt_description
        document.querySelector('.image-gallery').appendChild(imageElement)
    });
    console.log(page);
    page++
}

window.addEventListener("scroll",handleScroll)

function handleScroll(){
    if(window.innerHeight+window.scrollY>=document.body.offsetHeight-200){
        document.querySelector('.loading').style.display="block"
        getData(url+page+qString,renderImages)
    }
}
