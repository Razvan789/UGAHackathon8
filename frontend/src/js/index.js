const serverURL = 'http://localhost:5000';

$(document).ready(() => {
    $.get(`${serverURL}/users?userID=1`, (data) => {
        console.log(data, data[0].username);
        $('#user-id').text(data[0].username);
    });
});