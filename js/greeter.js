var subtitle = document.querySelector( "h2" );
var userInput = document.querySelector( "#user-input" );
var originalSubtitle = subtitle.innerHTML;

userInput.addEventListener(
    "keyup",
    function greetUser( event ){
        subtitle.innerHTML = originalSubtitle + event.target.value;
    }
);


//
// var getUserName = function getUserName(){
//     var userName = prompt( "What is your Name My Dude" );
//
//     if( !userName ){
//         getUserName();
//     }
//     else{
//         console.log( subtitle.innerHTML );
//         subtitle.textcontent += userName;
//         // alert( "welcome To My World" + userName );
//     }
// };
//
// getUserName();
