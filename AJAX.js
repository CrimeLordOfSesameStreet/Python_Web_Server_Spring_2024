$(document).ready(function()
{
    $('#load-signup-form').click(function() 
    {
        $.ajax({
            url: 'signup-form.html',
            type: 'GET',
            success: function(response) {
                $('#signup-container').html(response);
            },
            error: function(xhr, status, error) {
                console.error('Error:', error);
            }
        });
    });
});