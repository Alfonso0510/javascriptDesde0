const button = document.getElementById('button');

button.addEventListener('click', ()=> {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.ok ? Promise.resolve(res) : Promise.reject(res))
    .then(res => res.json())
    .then(res => {
        const list = document.getElementById('list');
        for(const $userInfo of res){
        const listItem = document.createElement('LI');
        listItem.textContent = `${$userInfo.id} - ${$userInfo.name}`;
        list.appendChild(listItem);
    }
    })
})