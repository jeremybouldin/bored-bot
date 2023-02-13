const buttonEl = document.getElementById('button-click')

// fetch('https://apis.scrimba.com/bored/api/activity')
//     .then((response) => response.json())
//     .then((data) => {
//         console.log(data)
//         document.getElementById('idea-container').textContent = data.activity
//     })

buttonEl.addEventListener('click', () => {
    fetch('https://apis.scrimba.com/bored/api/activity')
        .then((response) => response.json())
        .then(
            (data) =>
                (document.getElementById('idea-container').textContent =
                    data.activity)
        )
})
