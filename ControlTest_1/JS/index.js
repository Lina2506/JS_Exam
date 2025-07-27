const usersDiv = document.getElementById('users');
fetch('https://jsonplaceholder.typicode.com/users')
.then(resp => resp.json())
.then(users => {
    for (const user of users) {
        const userDiv = document.createElement('div');
        userDiv.classList.add('userDiv');
        
        const info = document.createElement('div');
        const idP = document.createElement('p');
        idP.innerHTML=`<span class="key">id:</span> ${user.id}`;
        const nameP = document.createElement('p');
        nameP.innerHTML=`<span class="key">name:</span> ${user.name}`;

        const button = document.createElement('button');
        button.innerText = 'View more';
        button.classList.add('viewMore');
        button.onclick = function (e) {
            e.preventDefault();
            localStorage.setItem('selectedUser', JSON.stringify(user));
            window.location.href=`user-details.html`
        };

        info.append(idP,nameP)
        userDiv.append(info, button);
        usersDiv.appendChild(userDiv);
    }

});

