var story = {
    "start": "What part of Harlem would you like to go? uptown, downtown, east side or west side?",
    "uptown": "This is the real Harlem",
    "downtown": "This is the Bill Clinton Harlem",
    "east side": "This is where the Puerto Ricans reside",
    "west side": "This is where the Money Makers Are",

};

var root = document.querySelector( "root" );
var tellStory = function tellStory(){
    var answer = prompt( story.start );

    if( answer === "uptown" ){
        root.textContent = story[answer];
    }
    else if( answer === "east side" ){
        answer = prompt( story[answer] );
        if( answer === "east side" || answer === "east side" ){
            root.textContent = story[answer];
        }
        else{
            tellStory();
        }
    }
    else{
        tellStory();
    }
};

tellStory();
