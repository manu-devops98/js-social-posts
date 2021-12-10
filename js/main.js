/* CONSEGNA:
Ricreiamo un feed social aggiungendo al layout di base fornito, il nostro javascript in cui:
- Creiamo il nostro array di oggetti che rappresentano ciascun post. Ogni post dovrà avere le informazioni necessarie per stampare la relativa card: 
---nome autore, 
---foto profilo, 
---data in formato americano, 
---testo del post, 
---immagine (non tutti i post devono avere una immagine), 
--- numero di likes.
Per le immagini va bene utilizzare qualsiasi servizio di placeholder ad es. Unsplash (https://unsplash.it/300/300?image=<id>)
- Prendendo come riferimento il layout di esempio presente nell’html, stampiamo i post del nostro feed.
- Rendiamo il tasto “Mi Piace” cliccabile con incremento del counter dei likes. */


// variabili globali 
const container = document.getElementById('container');

// funzione numeri casuali 
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}


// array dei post 
const arrayPost = [
    {
        name: 'Anna',
        profile: `https://picsum.photos/id/${getRndInteger(1,250)}/300/300`,
        date: '2 mesi fa',
        text: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut.  Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
        image: `https://picsum.photos/id/${getRndInteger(1,250)}/600/300`,
        likes: 130
    },
    {
        name: 'Francesco',
        profile: `https://picsum.photos/id/${getRndInteger(1,250)}/300/300`,
        date: '5 mesi fa',
        text: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut.  Distinctio minima iusto.',
        image: `https://picsum.photos/id/${getRndInteger(1,250)}/600/300`,
        likes: 60
    },
    {
        name: 'Giulia',
        profile: `https://picsum.photos/id/${getRndInteger(1,250)}/300/300`,
        date: '2 settimane fa',
        text: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut.  Distinctio minima.',
        // image: 'https://picsum.photos/id//600/300',
        image: `https://picsum.photos/id/${getRndInteger(1,250)}/600/300`,
        likes: 200
    },
];

// funzione per stampare i post in pagina 
function printPost(array,container) {
    container.innerHTML = '';
    // ciclo for per ciclare sugli oggetti 
    for (let i = 0; i < array.length; i++) {
        const obj = array[i];

        // variabile per inserire dinamicamente i post 
        const templatePost = `
        <div class="post">
        <div class="post__header">
            <div class="post-meta">                    
                <div class="post-meta__icon">
                    <img class="profile-pic" src="${obj.profile}" alt="obj.name">                    
                </div>
                <div class="post-meta__data">
                    <div class="post-meta__author">${obj.name}</div>
                    <div class="post-meta__time">${obj.date}</div>
                </div>                    
            </div>
        </div>
        <div class="post__text">${obj.text}</div>
        <div class="post__image">
            <img src="${obj.image}" alt="">
        </div>
        <div class="post__footer">
            <div class="likes js-likes">
                <div class="likes__cta">
                    <a class="like-button  js-like-button" href="#" data-postid="1">
                        <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                        <span class="like-button__label">Mi Piace</span>
                    </a>
                </div>
                <div class="likes__counter">
                    Piace a <b id="like-counter-1" class="js-likes-counter">${obj.likes}</b> persone
                </div>
            </div> 
        </div>            
    </div>
        `;
        // inserisco variabile nell html 
        container.innerHTML += templatePost;
    } 
}

printPost(arrayPost, container);

// creo variabile per bottone dei like e numero like
const button = document.querySelector('.like-button');
console.log(button);
let sum = arrayPost.likes;
const numLikes = document.getElementById('like-counter-1');


button.addEventListener('click', function () {
    button.style.color = 'green';
});
