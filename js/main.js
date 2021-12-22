$(document).ready(function(){
    $('.header').height($(window).height());
    
    
    $('#hello-there').click( ()=>{        
        let text = $('#hello-there').text();
        $('#hello-there').text("General Kenobi!");
    })

    $('#mail_btn').click( (e)=>{
        e.preventDefault();
        
        let sender = document.getElementById('name').value;
        var subject = document.getElementById("subject").value;
        let body = document.getElementById('query').value;

        console.log(sender, subject, body)
        window.open(`mailto:test@example.com?subject=${subject + ` from `
                     + sender}&body=${body}`);

        
    })
})