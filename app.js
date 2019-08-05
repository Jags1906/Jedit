let input = document.querySelector('#input')
let view = document.querySelector('#view')

input.addEventListener('keyup', function (e) {
    e.preventDefault

    view.innerHTML = input.value

})