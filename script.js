document.getElementById('signup-form').addEventListener('submit', function(event) 
{
    event.preventDefault();

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    if (name === '' || email === '' || password === '') {
        document.getElementById('message').innerHTML = 'Not all fields are entered, please try again.';
        return;
    }

    document.getElementById('message').innerHTML = 'All signed up and ready to go!';

});
