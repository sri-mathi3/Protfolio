// ================================
// TYPING EFFECT
// ================================

const roles = [
    "Aspiring Full Stack Developer",
    "Frontend Developer",
    "Web Developer",
    "Java Developer"
];

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

const typingText = document.getElementById("typingText");

function typeText() {

    let currentRole = roles[roleIndex];

    if (deleting === false) {

        typingText.textContent =
            currentRole.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentRole.length) {

            deleting = true;

            setTimeout(typeText, 1500);

            return;
        }

        setTimeout(typeText, 80);

    } else {

        typingText.textContent =
            currentRole.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

            deleting = false;

            roleIndex++;

            if (roleIndex === roles.length) {
                roleIndex = 0;
            }

            setTimeout(typeText, 400);

            return;
        }

        setTimeout(typeText, 40);
    }
}

typeText();


// ================================
// THEME BUTTON
// ================================

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", function () {

    document.body.classList.toggle("light");

    if (document.body.classList.contains("light")) {

        themeBtn.innerHTML =
            '<i class="bi bi-sun-fill"></i>';

    } else {

        themeBtn.innerHTML =
            '<i class="bi bi-moon-stars-fill"></i>';

    }

});


// ================================
// ACTIVE NAVBAR
// ================================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", function () {

    let currentSection = "";

    sections.forEach(function (section) {

        const sectionTop =
            section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {

            currentSection =
                section.getAttribute("id");

        }

    });

    navLinks.forEach(function (link) {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            "#" + currentSection
        ) {

            link.classList.add("active");

        }

    });

});


// ================================
// AI CHAT
// ================================

const aiButton =
    document.getElementById("aiButton");

const aiChat =
    document.getElementById("aiChat");

const closeChat =
    document.getElementById("closeChat");

const sendMessage =
    document.getElementById("sendMessage");

const chatInput =
    document.getElementById("chatInput");

const chatMessages =
    document.getElementById("chatMessages");

const quickButtons =
    document.querySelectorAll(".quick-buttons button");


aiButton.addEventListener("click", function () {

    aiChat.classList.toggle("show");

    if (aiChat.classList.contains("show")) {

        chatInput.focus();

    }

});


closeChat.addEventListener("click", function () {

    aiChat.classList.remove("show");

});


function addMessage(message, type) {

    const div =
        document.createElement("div");

    if (type === "user") {

        div.className = "user-message";

    } else {

        div.className = "bot-message";

    }

    div.textContent = message;

    chatMessages.appendChild(div);

    chatMessages.scrollTop =
        chatMessages.scrollHeight;

}


function getResponse(question) {

    const q = question.toLowerCase();


    if (
        q.includes("skill") ||
        q.includes("technology") ||
        q.includes("tech")
    ) {

        return "Sri Mathi's skills include HTML, CSS, Bootstrap, JavaScript, Java, SQL, Git and GitHub.";

    }


    if (
        q.includes("project") ||
        q.includes("built") ||
        q.includes("work")
    ) {

        return "She has built Yummy, Spizy, Monoline, Glamore, E-Learning and Learn Hub.";

    }


    if (
        q.includes("education") ||
        q.includes("degree") ||
        q.includes("study")
    ) {

        return "Sri Mathi is a B.Sc Computer Science graduate.";

    }


    if (
        q.includes("contact") ||
        q.includes("email") ||
        q.includes("phone")
    ) {

        return "You can contact Sri Mathi through the Contact section of this portfolio.";

    }


    if (
        q.includes("about") ||
        q.includes("who")
    ) {

        return "Sri Mathi is a Computer Science graduate interested in web development and continuous learning.";

    }


    if (
        q.includes("hello") ||
        q.includes("hi")
    ) {

        return "Hello! 👋 What would you like to know about Sri Mathi?";

    }


    return "I can tell you about her skills, projects, education and contact details.";

}


function sendChatMessage(question) {

    const message = question.trim();

    if (message === "") {
        return;
    }

    addMessage(message, "user");

    chatInput.value = "";

    setTimeout(function () {

        const response =
            getResponse(message);

        addMessage(response, "bot");

    }, 500);

}


sendMessage.addEventListener("click", function () {

    sendChatMessage(chatInput.value);

});


chatInput.addEventListener("keydown", function (event) {

    if (event.key === "Enter") {

        sendChatMessage(chatInput.value);

    }

});


quickButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        sendChatMessage(
            button.dataset.question
        );

    });

});