var subtitle = document.querySelector( "h2" );

var getUserName = function getUserName(){
    var userName = prompt( "What is your Name My Dude" );

    if( !userName ){
        getUserName();
    }
    else{
        console.log( subtitle.innerHTML );
        subtitle.textcontent += userName;
        // alert( "welcome To My World" + userName );
    }
};

getUserName();
