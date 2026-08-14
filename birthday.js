// Birthday Girl Name

const birthdayGirl = "Sonali"; // <-- Change this


function checkName(){

    let input = document
        .getElementById("nameInput")
        .value
        .trim()
        .toLowerCase();

    let correct = birthdayGirl.toLowerCase();

    let msg = document.getElementById("message");

    if(input === correct){

        msg.style.color="green";

        msg.innerHTML="❤️ Access Granted!<br>Preparing your surprise...";

        setTimeout(()=>{

            // Next page
            window.location.href="step2.html";

        },2500);

    }

    else{

        msg.style.color="#ff0066";

        msg.innerHTML="Oops!<br>This surprise isn't for you 💔";

        document.querySelector(".container").classList.add("shake");

        setTimeout(()=>{

            document.querySelector(".container").classList.remove("shake");

        },500);

    }

}



const cards = document.querySelectorAll(".card");

const popup = document.getElementById("popup");

const popupImg = document.getElementById("popup-img");

const popupText = document.getElementById("popup-text");

const closeBtn = document.getElementById("close");


cards.forEach(card=>{

card.onclick=()=>{

popup.style.display="flex";

popupImg.src=card.querySelector("img").src;

popupText.innerHTML=card.querySelector("h3").innerHTML;

}

});

closeBtn.onclick=()=>{

popup.style.display="none";

}

popup.onclick=(e)=>{

if(e.target===popup){

popup.style.display="none";

}

}



/* =========================
   STEP 3 - GIFT
========================= */

const gift = document.getElementById("gift");

const openGift = document.getElementById("openGift");

const birthdayMessage =
    document.getElementById("birthdayMessage");


if (openGift) {

    openGift.addEventListener("click", function () {

        // Open gift
        gift.classList.add("open");


        // Hide button
        openGift.style.display = "none";


        // Wait for gift animation
        setTimeout(function () {

            gift.style.display = "none";

            birthdayMessage.classList.add("show");

            createConfetti();

        }, 800);

    });

}


/* =========================
   CONFETTI
========================= */

function createConfetti() {

    const symbols = [
        "🎉",
        "🎊",
        "✨",
        "💖",
        "💕",
        "🌸"
    ];


    for (let i = 0; i < 40; i++) {

        const confetti =
            document.createElement("div");

        confetti.innerHTML =
            symbols[
                Math.floor(
                    Math.random() * symbols.length
                )
            ];


        confetti.style.position = "fixed";

        confetti.style.left =
            Math.random() * 100 + "vw";

        confetti.style.top = "-50px";

        confetti.style.fontSize =
            Math.random() * 20 + 15 + "px";

        confetti.style.zIndex = "1000";

        confetti.style.pointerEvents = "none";


        const duration =
            Math.random() * 3 + 2;


        confetti.style.animation =
            `confettiFall ${duration}s linear`;


        document.body.appendChild(confetti);


        setTimeout(function () {

            confetti.remove();

        }, duration * 1000);

    }

}