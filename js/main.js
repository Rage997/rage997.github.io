$(document).ready(function(){
    $('.header').height($(window).height());
    
    
    $('#hello-there').click( ()=>{        
        let text = $('#hello-there').text();
        $('#hello-there').text("General Kenobi!");
    })
})