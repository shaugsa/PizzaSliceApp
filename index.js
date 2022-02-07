
document.getElementById('app').innerHTML = `<p>Click 👆 this button</p>`

document.getElementById('load-btn').addEventListener('click', () => {
  let app = document.getElementById('app')
    app.innerHTML = 'waiting...'
    let btn = document.querySelector('button')
    btn.className = 'loading'

  fetch('https://gp-js-test.herokuapp.com/pizza',)
    .then((response) => {
        if (response.ok) {
            response.json().then(data => {
                circle.innerHTML = ''
                app.innerHTML = ''
                list.innerHTML = ''
                btn.classList.remove('loading')
                circle.style.display = 'block'
                title.style.display = 'block'
                for (let i = 0; i < data['party'].length; i++) {
                    if (data['party'][i]['eatsPizza'] == true) {
                        let line = document.createElement('div')
                        line.className = 'line'
                        circle.appendChild(line)
                        }
                    let guest = document.createElement('li')
                    guest.className = 'guest'
                    guest.innerHTML = `${data['party'][i]['name']}`
                    list.appendChild(guest)
                }
                const degLine = () => {
                    let lines = document.querySelectorAll('.line')
                    let degrees = 360 / (lines.length);
            
                    let deg = 0
                    for (let i = 0; i <= lines.length; i++) {
                        lines[i].style.transform = `rotate(${deg += degrees}deg)`
                        }
                    }
                degLine()         
            })
        }
    })
})
 
                    
// https://codesandbox.io/s/gp-test-1-who-eats-pizza-forked-zee7d