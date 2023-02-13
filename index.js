// fetch('https://apis.scrimba.com/bored/api/activity')
//     .then((response) => response.json())
//     .then((data) => {
//         console.log(data)
//         document.getElementById('idea-container').textContent = data.activity
//     })

document.getElementById('get-activity').addEventListener('click', () => {
    fetch('https://apis.scrimba.com/bored/api/activity')
        .then((response) => response.json())
        .then((data) => {
            document.getElementById('activity').textContent = data.activity
            document.getElementById('title').textContent = '🦾 HappyBot 🦿'
            document.body.classList.add('fun')
        })
})
