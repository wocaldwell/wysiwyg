const famousPeople = [
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
const mainContainer = document.getElementById("main-container");

for (let famousPerson in famousPeople) {
    let card =
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
peopleCards = mainContainer.children;
for (var i = 0; i < peopleCards.length; i++) {
    if (i % 2 === 0) {
        peopleCards[i].classList.add("yellow");
    } else {
        peopleCards[i].classList.add("blue");
    }
};