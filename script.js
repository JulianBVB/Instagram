/**
 * Arrays follower
*/
let followerPictures = ['img/1.JPG', 'img/2.JPG', 'img/3.JPG', 'img/4.JPG', 'img/5.JPG', 'img/7.JPG', 'img/9.JPG', 'img/10.JPG']
let followerNames = ['BVB', 'OBS', 'Eat', 'Malle', 'erling', 'Moukoko', 'BVB', 'Mats']


/**
 * Arrays Newsfeed Posts
*/
let imageUser = ['img/1.JPG', 'img/5.JPG', 'img/7.JPG'];
let user = ['Poldi_official', 'erling.Haaland', 'Moukoko'];
let imagePost = ['img/1.JPG', 'img/6.JPG', 'img/8.JPG'];
let comment = ['Das schönste Stadion der Welt', 'GOAL GOAL GOAAAL', 'YOUNGSTAR'];


/**
 * load all Posts
*/
function loadPosts() {

    document.getElementById('posts').innerHTML = '';
    for (let i = 0; i < user.length; i++) {
        document.getElementById('posts').innerHTML += `

<div class="post">
<div class="posts-headline">
    <div class="posts-headline1">
        <img src="${imageUser[i]}">
        <p>${user[i]}</p>
    </div>
    <div>
        <p onclick="togglePopupError()"><b>. . .</b></p>
    </div>
</div>

<div class="posts-picture">
    <img onclick="togglePopupError()" src="${imagePost[i]}">
</div>

<div class="posts-icons">
    <div>
        <span onclick="togglePopupError()" class="material-icons-outlined">
            favorite_border
        </span>

        <span onclick="togglePopupError()" class="material-icons-outlined">
            chat_bubble_outline
        </span>

        <span onclick="togglePopupError()" class="material-icons-outlined">
            send
        </span>
    </div>

    <div>
        <span onclick="togglePopupError()" class="material-icons-outlined">
            local_offer
        </span>

    </div>

</div>

<div class="posts-likes">
    <img src="img/3.JPG">
    <p>Gefällt <b>fischkreutz</b> und <b>3.453 weitere Personen</b></p>
</div>

<div class="posts-detail">
    <p><b>${user[i]}</b> ${comment[i]}...</p>
    <p class="posts-detail-color">Alle 22 Kommentare ansehen</p>
</div>

<div id="ownPost${[i]}">

<div class="posts-comment">
    <p><b>fischkreutz</b></p>
    <span>❤️😍❤️</span>
</div>

<div class="posts-comment">
    <p><b>mGoetze</b></p>
    <span>🔥🔥🔥</span>
</div>

</div>

<div class="posts-own-comment">
    <div class="input">
        <div>
            <span onclick="togglePopupError()" class="material-icons-outlined">
                sentiment_satisfied_alt
            </span>
        </div>
        <div>
            <input id="post${[i]}" placeholder="Kommentar einfügen....">
            <input id="name${[i]}" placeholder="Dein Name....">
        </div>
    </div>

    <button onclick="post(${[i]})">Posten</button>

</div>

</div>
`
    }
}


/**
 * load followers
*/

function loadFollowers() {
    document.getElementById('followers').innerHTML = '';
    for (let i = 0; i < followerNames.length; i++) {
        document.getElementById('followers').innerHTML += `

            <div class="follower-details">
                <img onclick="togglePopupError()" src="${followerPictures[i]}">
                <p onclick="togglePopupError()">${followerNames[i]}</p>
            </div>
    `
    }
}

/**
 * Add a new comment
*/
function post(n) {
    let post = document.getElementById('post' + n).value;
    let name = document.getElementById('name' + n).value;


    if (post.length == 0 || name.length == 0) {
        togglePopup();

    } else {
        document.getElementById('ownPost' + n).innerHTML += `
        <div class="posts-comment">
           <p><b>${name}</b></p>
           <span>${post}</span>
        </div>
            `;
            document.getElementById('post' + n).value = "";
            document.getElementById('name' + n).value = "";
    }

}

/**
 * Show and close Popup
*/
function togglePopup() {
    document.getElementById("popup-1").classList.toggle("active");
}



/**
 * Show and close Popup
*/
function togglePopupError() {
    document.getElementById("popup-2").classList.toggle("active");
}