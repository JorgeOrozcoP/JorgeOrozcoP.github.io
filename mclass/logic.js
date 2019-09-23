



function http_call(){

    var Http = new XMLHttpRequest();
    const url='https://y4b2zohpb7.execute-api.eu-central-1.amazonaws.com/Prod/hello/';
    Http.open("POST", url);



    Http.send();



    Http.onreadystatechange=(e)=>{

        // alert(JSON.parse(Http.response)['message'])
        alert(Http.responseText)
    }
}



// https://developer.mozilla.org/en-US/docs/Web/API/FormData/Using_FormData_Objects

function http_call2(){
    

    var formData = new FormData();

    formData.append('text',document.getElementById('input_text').value);
    // formData.append("image", document.getElementById('input_slct').files[0]);

    var request = new XMLHttpRequest();

    var url = 'https://y4b2zohpb7.execute-api.eu-central-1.amazonaws.com/Prod/hello/';
    request.open("POST", url);
    request.send(formData);

    // request.onreadystatechange=(e)=>{

        // alert(JSON.parse(request.response)['message'])
        // alert(request.responseText)
    // }


    if (request.status >= 200 && request.status < 400) {
        document.getElementById('text_output').innerHTML = request.responseText
    } else {

        document.getElementById('text_output').innerHTML = request.statusText 
    }
}




// from https://www.airpair.com/js/jquery-ajax-post-tutorial
(function($){
    function processForm( e ){
        $.post({
            url: 'https://y4b2zohpb7.execute-api.eu-central-1.amazonaws.com/Prod/hello/',
            // dataType: 'text',
            // type: 'POST',
            contentType: 'multipart/form-data',
            data: $(this).serialize(),
            success: function( data, textStatus, jQxhr ){
                $('#text_output').text(data);
            },
            error: function( jqXhr, textStatus, errorThrown ){
                console.log( errorThrown );
            }
        });

        e.preventDefault();
    }

    $('#input_form').submit( processForm );
})(jQuery);

