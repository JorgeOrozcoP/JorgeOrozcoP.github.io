
// on load handler. From:
// https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest
function transferComplete() {
    console.log(this.responseText);

    if (this.status >= 200 && this.status < 400) {
        result = JSON.parse(this.response)['message'];
        document.getElementById('text_output').innerHTML = result; // request.responseText
    } else {

        document.getElementById('text_output').innerHTML = this.statusText;
    }
}

// https://developer.mozilla.org/en-US/docs/Web/API/FormData/Using_FormData_Objects
function http_call(){
    
    // --- input data ---
    var formData = new FormData();

    // formData.append('text', document.getElementById('input_text').value);
    formData.append("image", document.getElementById('input_slct').files[0]);

    // --- http request ---
    var request = new XMLHttpRequest();
    request.addEventListener("load", transferComplete);

    var url = 'https://y4b2zohpb7.execute-api.eu-central-1.amazonaws.com/Prod/hello/';
    // var url = 'http://127.0.0.1:5000/'
    request.open("POST", url);
    

    request.send(formData);
}

function img_preview(){

    img_file = document.getElementById('input_slct').files[0];

    document.getElementById('input_img').src = window.URL.createObjectURL(img_file); 
    document.getElementById('input_img').setAttribute('class', 'img-fluid');
}