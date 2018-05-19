var postRequest = $.ajax( "https://jsonplaceholder.typicode.com/posts" );

function generatePost( post ){
    return `
  <div>
    <h2>${post.title}</h2>
    <p>${post.body}</p>
    </div>
  `;
}

function previewMarkup( posts ){
    return posts
        .slice( 0, 9 )
        .map( generatePost )
        .join( "" );
}

function injectPosts( posts ){
    document.querySelector( "#content" ).innerHTML = previewMarkup( posts );
}

postRequest.then( injectPosts );
