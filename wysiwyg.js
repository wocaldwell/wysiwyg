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

//get div
const mainContainer = document.getElementById("main-container");

//iterate
for (let famousPerson in famousPeople) {

//get keys and access values
//and build up the string all at once

let card =
`<person class="person-card">
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
//put it in the div
mainContainer.innerHTML += card;
};