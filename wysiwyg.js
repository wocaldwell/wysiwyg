var famousPeople = [
    {
        title: "Samurai",
        name: "Tomoe Gozen",
        bio: "Serving under Minamoto Yoshinaka, Tomoe was one of his finest soldiers, and her skills in battle dwarfed many of those held by even the strongest men in her unit.",
        image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Tomoe-Gozen.jpg",
        lifespan: {birth: 1747, death: 1797}
    },
    {
        title: "Samurai",
        name: "Tomoe Gozen",
        bio: "Serving under Minamoto Yoshinaka, Tomoe was one of his finest soldiers, and her skills in battle dwarfed many of those held by even the strongest men in her unit.",
        image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Tomoe-Gozen.jpg",
        lifespan: {birth: 1747, death: 1797}
    },
    {
        title: "Samurai",
        name: "Tomoe Gozen",
        bio: "Serving under Minamoto Yoshinaka, Tomoe was one of his finest soldiers, and her skills in battle dwarfed many of those held by even the strongest men in her unit.",
        image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Tomoe-Gozen.jpg",
        lifespan: {birth: 1747, death: 1797}
    },
    {
        title: "Samurai",
        name: "Tomoe Gozen",
        bio: "Serving under Minamoto Yoshinaka, Tomoe was one of his finest soldiers, and her skills in battle dwarfed many of those held by even the strongest men in her unit.",
        image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Tomoe-Gozen.jpg",
        lifespan: {birth: 1747, death: 1797}
    },
    {
        title: "Samurai",
        name: "Tomoe Gozen",
        bio: "Serving under Minamoto Yoshinaka, Tomoe was one of his finest soldiers, and her skills in battle dwarfed many of those held by even the strongest men in her unit.",
        image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Tomoe-Gozen.jpg",
        lifespan: {birth: 1747, death: 1797}
    }
];

// Fill main container
var mainContainer = document.getElementById("main-container");

for (var famousPerson in famousPeople) {
    var card =
    `<person class="person-card" id="famous-person--${famousPerson}">
        <header class="person-header">
            <h2>${famousPeople[famousPerson].name}</h2>
            <h3>${famousPeople[famousPerson].title}</h3>
        </header>
        <section class="person-info">
            <p>${famousPeople[famousPerson].bio}</p>
            <img src="${famousPeople[famousPerson].image}" class="pic" alt="${famousPeople[famousPerson].name}">
        </section>
        <footer class="lifespan">
            <p>${famousPeople[famousPerson].lifespan.birth} - ${famousPeople[famousPerson].lifespan.death}</p>
        </footer>
    </person>`;
    mainContainer.innerHTML += card;
};

// change card background color based on position
var peopleCards = mainContainer.children;
for (var i = 0; i < peopleCards.length; i++) {
    if (i % 2 === 0) {
        peopleCards[i].classList.add("yellow");
    } else {
        peopleCards[i].classList.add("blue");
    }
};

// click card event listeners
for (var i = 0; i < peopleCards.length; i++) {
    peopleCards[i].addEventListener('click', function() {
        focusInput();
        addBorder();
    });
};

function focusInput() {
    document.getElementById("user-input").focus();
}

function addBorder() {
    event.currentTarget.classList.add("border");
}

// change text event listener
var userInputField = document.getElementById("user-input");
var personCards = document.getElementsByTagName("person");
userInputField.addEventListener('keyup', changeBio);

// Doesn't work
function changeBio() {
    console.log(personCards);
    if (personCards.classList.contains("border")) {
        var personInfoSection = personCards.childNodes[1];
        personInfoSection.childNodes[0].innerHTML = newBio;
    }
}

// Clear text field when enter is pressed
userInputField.onkeypress=function(e) {
    if (e.keyCode === 13) {
        e.preventDefault();
        userInputField.value = "";
    }
}









