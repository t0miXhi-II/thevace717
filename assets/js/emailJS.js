
document.addEventListener('DOMContentLoaded', function () {
    document.querySelector("#send_email_message2").onclick = function () {

        s_name = document.querySelector("#senders_name").value;
        s_email = document.querySelector("#senders_email").value; 
        s_message = document.querySelector("#email_message").value;

        var templateParams = {
            name: s_name, 
            email: s_email, 
            message: s_message
        };

        emailjs.send("service_fb2m0os", "template_eioih8v", templateParams).then(
            function (response) {
                console.log('SUCCESS', response.status, response.text);
                alert("Message sent successfully! Thank you for contacting us. The team will be in touch with you soon."); 
            }, 

            function (error) {
                console.log("ERROR...", error);
                alert("Ooops! Something went wrong. Please try again.");
            }, 
        );
        
    } 

});
