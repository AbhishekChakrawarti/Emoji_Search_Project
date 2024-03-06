
let emojee_container =document.getElementById("emoji_container");
let search_feild = document.getElementById('search_feild');

const displayEmojis = (query='') =>{
    let filteredData = emojiList.filter(e=>{
        if(e.description.indexOf(query) != -1){
            return true;
        }
        if(e.aliases.find(elem => elem === query)){
            return true;
        }
        if(e.tags.find(elem => elem === query)){
            return true;
        }
    })

    emojee_container.innerHTML='';

     filteredData.forEach(e =>{
          let new_emojee = document.createElement('div');
          new_emojee.innerText= e.emoji;
          emojee_container.appendChild(new_emojee);

          console.log(emojee_container);

     })
}

const searchData =(e)=>{
    let value = e.target.value;
    console.log(value);
   displayEmojis(value);
}

window.addEventListener('load', displayEmojis);

search_feild.addEventListener('keyup', searchData);

window.onload = () => displayEmojis();