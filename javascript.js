// This script ensures smooth scrolling even on older browsers
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Initialize EmailJS with your Public Key
emailjs.init('wYa5-OpDgfJedkMb6');  // Your Public Key

// Function to handle the form submission and email sending
function sendEmail() {
    // Get the form values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    // Check if fields are filled
    if (name === "" || email === "" || message === "") {
        alert("Please fill out all fields before submitting.");
        return;  // Exit the function if fields are empty
    }

    // Prepare the template parameters
    var templateParams = {
        from_name: name,
        from_email: email,
        message: message
    };

    // Send the email using EmailJS with the correct Service ID and Template ID
    emailjs.send('service_pomv60u', 'template_0asez948', templateParams)
        .then(function (response) {
            console.log('SUCCESS!', response);
            alert("Your message has been sent!");

            // Clear the form fields after successful submission
            document.getElementById('name').value = '';
            document.getElementById('email').value = '';
            document.getElementById('message').value = '';
        }, function (error) {
            console.log('FAILED...', error);
            alert("Something went wrong. Please try again.");
        });
}