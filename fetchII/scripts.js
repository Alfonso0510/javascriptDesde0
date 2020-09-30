const button = document.getElementById('button');

button.addEventListener('click', ()=> {

    const newPost = {
        title: 'Nuevo post',
        body: 'lorem ipsum dolor sit',
        userId: 1
    }
    console.log(newPost);
    console.log(JSON.stringify(newPost));
})