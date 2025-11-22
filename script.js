const roles = [
    "Cybersecurity Enthusiast",
    "Ethical Hacker",
    "Bug Bounty Learner",
    "Web Security Researcher",
    "Penetration Tester"
];

let index = 0;
let charIndex = 0;
let currentRole = "";
let isDeleting = false;

function typeEffect() {
    currentRole = roles[index];

    if (!isDeleting) {
        document.getElementById("typing").innerHTML = currentRole.substring(0, charIndex++) + "|";
    } else {
        document.getElementById("typing").innerHTML = currentRole.substring(0, charIndex--) + "|";
    }

    if (charIndex === currentRole.length + 1) {
        isDeleting = true;
        setTimeout(typeEffect, 1000);
        return;
    }

    if (charIndex === 0 && isDeleting) {
        isDeleting = false;
        index = (index + 1) % roles.length;
    }

    setTimeout(typeEffect, isDeleting ? 50 : 100);
}

typeEffect();
