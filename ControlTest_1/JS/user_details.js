const user = JSON.parse(localStorage.getItem('selectedUser'));
const userDiv = document.getElementById('user');

for (const key in user) {
    const value = user[key];

    const p = document.createElement('p');

    if (key === 'address') {
        const { street, suite, city, zipcode, geo } = value;
        p.innerHTML = `<span class="key">address:</span> ${street}, ${suite}, ${city}, ${zipcode}, ${geo.lat}, ${geo.lng}`;
    } else if (key === 'company') {
        const { name, catchPhrase, bs } = value;
        p.innerHTML = `<span class="key">company:</span> ${name}, ${catchPhrase}, ${bs}`;
    } else if (typeof value === 'object') {
        p.innerHTML = `<span class="key">${key}:</span> ${JSON.stringify(value)}`;
    } else {
        p.innerHTML = `<span class="key">${key}:</span> ${value}`;
    }

    userDiv.appendChild(p);
}
let load=false;
const postButton = document.getElementById('postButton');
postButton.onclick=function (){
    if (load) return;
    load = true;

    fetch(` https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
    .then(resp => resp.json())
    .then(posts=> {
        const postsDiv = document.getElementById('posts');
        for (const post of posts) {
            const postDiv = document.createElement('div');
            postDiv.classList.add('post');
            postDiv.innerText=post.title;

            const link = document.createElement('a');
            link.innerText = 'Details';
            link.href = '#';
            link.onclick=function (e){
                e.preventDefault();
                localStorage.setItem('selectedPost',JSON.stringify(post));
                window.location.href='post-details.html'
            }


            postDiv.appendChild(link);
            postsDiv.appendChild(postDiv);
        }
    })
    
}