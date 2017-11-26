'use strict';

// HTML contains element 'message'. This is used to show the server's response
const html = document.querySelector('#message');
// Select it and save it as a variable/object

// make function 'upload' which
const upload = (evt) => {
// - prevents the form from sending
    evt.preventDefault();

// - writes 'Upload in progress...' into 'message' element
    html.innerHTML('Upload in progress...');

// - selects the file input field
    const input = document.querySelector('input[type="file"]')

// - makes FormData -object and adds the file selected byt the user into the object
    const data = new FormData;
    data.append('fileup', input.files[0]);

// - make an object for settings
    const settings = {
        method: 'POST',
        // credentials: 'same-origin', // this might be needed for some servers
        body: data
    };

// - send the file to the same url as in task a by using fetch -method
    fetch('Servlet', settings).then((response) => {
        return response.json();
    }).then((json) => {
        // - when file upload is complete, writes server response to 'message' element
        console.log(json);
        html.innerHTML = 'upload complete';
        document.querySelector('img').src = json.src;
    })
// function ends
}

// make an event listener which calls upload function when the form is submitted
document.querySelector('form').addEventListener('submit', upload);
