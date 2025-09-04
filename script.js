// Sample data for players (gold, silver, bronze medals separately)

const players = [

  { 

    name: "Arun Kumar", 

    matches: 25, 

    medals: { gold: 3, silver: 1, bronze: 1 }, 

    img: "https://i.pravatar.cc/150?img=11" 

  },

  { 

    name: "Mohan Raj", 

    matches: 18, 

    medals: { gold: 1, silver: 2, bronze: 0 }, 

    img: "https://i.pravatar.cc/150?img=12" 

  },

  { 

    name: "Ravi Shankar", 

    matches: 30, 

    medals: { gold: 5, silver: 2, bronze: 1 }, 

    img: "https://i.pravatar.cc/150?img=13" 

  },

  { 

    name: "Suresh Kumar", 

    matches: 12, 

    medals: { gold: 0, silver: 1, bronze: 0 }, 

    img: "https://i.pravatar.cc/150?img=14" 

  },

  { 

    name: "Karthik M", 

    matches: 20, 

    medals: { gold: 2, silver: 1, bronze: 1 }, 

    img: "https://i.pravatar.cc/150?img=15" 

  },

  { 

    name: "Vignesh P", 

    matches: 15, 

    medals: { gold: 1, silver: 0, bronze: 1 }, 

    img: "https://i.pravatar.cc/150?img=16" 

  }

];

const searchBar = document.getElementById("searchBar");

const playerList = document.getElementById("playerList");

const playerDetails = document.getElementById("playerDetails");

const playerName = document.getElementById("playerName");

const playerMatches = document.getElementById("playerMatches");

const playerMedals = document.getElementById("playerMedals");

const playerImage = document.getElementById("playerImage");

const closeBtn = document.getElementById("closeBtn");

// Function to render players

function renderPlayers(filteredPlayers) {

  playerList.innerHTML = "";

  filteredPlayers.forEach(player => {

    const li = document.createElement("li");

    // Player name

    const nameSpan = document.createElement("span");

    nameSpan.textContent = player.name;

    // Medal summary

    const medalsSpan = document.createElement("span");

    medalsSpan.innerHTML = `

      🥇${player.medals.gold} 

      🥈${player.medals.silver} 

      🥉${player.medals.bronze}

    `;

    li.appendChild(nameSpan);

    li.appendChild(medalsSpan);

    li.addEventListener("click", () => showDetails(player));

    playerList.appendChild(li);

  });

}

// Function to show details

function showDetails(player) {

  playerName.textContent = player.name;

  playerMatches.textContent = player.matches;

  playerImage.src = player.img;

  // Show gold, silver, bronze medals separately

  playerMedals.innerHTML = `

    <span class="medal">🥇</span> ${player.medals.gold}

    <span class="medal">🥈</span> ${player.medals.silver}

    <span class="medal">🥉</span> ${player.medals.bronze}

  `;

  playerDetails.classList.remove("hidden");

}

// Close button

closeBtn.addEventListener("click", () => {

  playerDetails.classList.add("hidden");

});

// Search functionality

searchBar.addEventListener("input", e => {

  const value = e.target.value.toLowerCase();

  const filtered = players.filter(player =>

    player.name.toLowerCase().includes(value)

  );

  renderPlayers(filtered);

});

// Initial render

renderPlayers(players);