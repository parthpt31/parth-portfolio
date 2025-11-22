const btn = document.getElementById("modeBtn");

btn.addEventListener("click", () => {
    document.body.classList.toggle("light");

    if (document.body.classList.contains("light")) {
        btn.textContent = "🌙 Dark Mode";
    } else {
        btn.textContent = "☀️ Light Mode";
    }
});
document.getElementById("contactForm").addEventListener("submit", function(e){
    e.preventDefault();

    emailjs.send("SERVICE_ID","TEMPLATE_ID",{
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    }).then(() => {
        document.getElementById("statusMessage").innerHTML = "Message Sent ✔";
    }, () => {
        document.getElementById("statusMessage").innerHTML = "❌ Failed to send message.";
    });
});
