document.getElementById('add-backgroundColor').addEventListener('click', function () {
    const friends = document.getElementsByClassName('friend');
    for (const friend of friends) {
        friend.style.backgroundColor = 'pink';
    }
})

document.getElementById('add-border').addEventListener('click', function () {
    document.getElementById('friends-container').style.border = '2px solid blue';
})

document.getElementById('container-padding').addEventListener('click', function () {
    document.getElementById('friends-container').style.padding = '5px';
})