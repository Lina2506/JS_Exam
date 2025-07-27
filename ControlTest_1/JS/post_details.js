const post = JSON.parse(localStorage.getItem("selectedPost"));

const postInfoDiv = document.getElementById('postInfo');
const commentsDiv = document.getElementById('comments');

if (post) {
    for (const key in post) {
        const p = document.createElement('p');
        p.innerHTML=`<span class="key">${key}:</span> ${post[key]}`;
        postInfoDiv.appendChild(p);
}
    fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
        .then(resp => resp.json())
        .then(comments=>{
            for (const comment of comments) {
                const commentDiv = document.createElement('div');
                commentDiv.classList.add('comment');
                let h4 = document.createElement('h4');
                h4.innerText=comment.name;
                let email = document.createElement('i');
                email.innerText=comment.email;
                let body = document.createElement('p');
                body.innerText=comment.body;


                commentDiv.append(h4, email, body);
                commentsDiv.appendChild(commentDiv);
            }
})
        }else{
    postInfoDiv.innerText='There is no content';
}

