 // Get the form and submit button
 const form = document.querySelector('form');
 const submitButton = document.querySelector('#submit');

 // Add a submit event listener to the form
 form.addEventListener('submit', function(event) {
     // Prevent the default form submission
     event.preventDefault();

     // Get the email and password values from the form
     const email = document.querySelector('#email').value;
     const password = document.querySelector('#password').value;

     // Send a POST request to the validate.php endpoint using Axios
     axios.post('validate.php', {
         email: email,
         password:password
        })
        .then(function(response) {
        // If the response is successful, show a success message
        if (response.data.valid) {
        alert('Email and password are valid!');
        } else {
        alert('Email and password are invalid!');
        }
        })
        .catch(function(error) {
        // If there is an error, show an error message
        alert('An error occurred: ' + error.message);
        });
        });