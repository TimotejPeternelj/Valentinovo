const startBtn = document.getElementById("startBtn");
const mainContent = document.getElementById("mainContent");

const modal = document.getElementById("modal");
const closeModal = document.getElementById("closeModal");
const modalTitle = document.getElementById("modalTitle");
const modalText = document.getElementById("modalText");

startBtn.addEventListener("click", () => {
    mainContent.classList.remove("hidden");
    startBtn.style.display = "none";
    window.scrollTo({ top: 400, behavior: "smooth" });

    bgMusic.play();

    // stagger timeline events
    const events = document.querySelectorAll(".timeline .event");
    events.forEach((ev, i) => {
        setTimeout(() => ev.classList.add("show"), i * 400); // 400ms gap
    });
});

const muteBtn = document.getElementById("muteBtn");
muteBtn.addEventListener("click", () => {
    bgMusic.muted = !bgMusic.muted;
    muteBtn.textContent = bgMusic.muted ? "🔇" : "🔊";
});

const bgMusic = new Audio("song.mp3");
bgMusic.volume = 0.35;       // adjust volume
bgMusic.loop = true;         // keep playing

// Love letters content
const letters = {
    miss: {
        title: "Vadpri ka me pagrišaš 💌",
        text: `Jest tut tebe pagrišam.
Ampak tut ka nisva skupi si še vednu maje najlubša oseba. Skus te podperam u usemu in skus razmišlam o teb. ❤️`,
    },
    sad: {
        title: "Si žalostna 🫶",
        text: `Oj miška. Vim de stvari nisa skus lahke ampak čem de skus viš de si use za mene in de te mam skus najrajš. Skus sm ponosn nate tut na dneve ka sa težki.`,
    },
    stressed: {
        title: "Si pad stresam 😤❤️",
        text: `Sam dihaj. Ni triba vse stvari na enkrat nardit in use se bo rešilu. Skus sm tole za tebe in lahka mi paviš čist use.`,
    },
    happy: {
        title: "Si vesela 😄💖",
        text: `Najrajš te vidm srečna.
Tu de si ti srečna je maje NAJLJUBŠ stvar na svitu. Najvejč srejče mam de lahka tebe ljubim`,
    },
};

document.querySelectorAll(".letter").forEach((btn) => {
    btn.addEventListener("click", () => {
        const key = btn.dataset.letter;
        modalTitle.textContent = letters[key].title;
        modalText.textContent = letters[key].text;
        modal.classList.remove("hidden");
    });
});

closeModal.addEventListener("click", () => {
    modal.classList.add("hidden");
});

modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.classList.add("hidden");
});

// Floating hearts generator
const heartsContainer = document.querySelector(".hearts");
const heartEmojis = ["💖", "💘", "💗", "💕", "❤️"];

function createHeart() {
    const heart = document.createElement("span");
    heart.textContent = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = 4 + Math.random() * 6 + "s";
    heart.style.fontSize = 14 + Math.random() * 22 + "px";
    heartsContainer.appendChild(heart);

    setTimeout(() => heart.remove(), 10000);
}

setInterval(createHeart, 350);