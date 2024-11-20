var contactString = "<div class='social'> <a target='_blank' href='tel:+917493****'> <div class='socialItem' id='call'><img class='socialItemI' src='images/phone.svg'/><label class='number'></label></label></div> </a> <a href='mailto:abhinavchoudhary856@gmail.com'> <div class='socialItem'><img class='socialItemI' src='images/gmail.svg' alt=''></div> </a> <a target='_blank' href='https://github.com/abhinavchy875'> <div class='socialItem'><img class='socialItemI' src='images/github.svg' alt=''></div> </a> <a target='_blank' href='https://wa.me/917493926495'> <div class='socialItem'><img class='socialItemI' src='images/whatsapp.svg' alt=''>";

function sendMessage() {
    var userInput = document.getElementById("user-input").value;
    if (userInput.trim() === "") return;

    var chatBox = document.getElementById("chat-box");
    var userMessage = document.createElement("div");
    userMessage.classList.add("chat-message", "user");
    userMessage.textContent = userInput;
    chatBox.appendChild(userMessage);

    // Simulate bot response (you can replace this with actual bot logic)
    setTimeout(function() {
        var botMessage = document.createElement("div");
        botMessage.classList.add("chat-message", "bot");
        botMessage.textContent = "Hi, I'm just a bot Adwait. How can i help you !.";
        chatBox.appendChild(botMessage);
        chatBox.scrollTop = chatBox.scrollHeight; // Scroll to bottom
    }, 500);

    document.getElementById("user-input").value = "";
}
