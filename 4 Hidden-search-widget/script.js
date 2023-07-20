const btns = document.getElementById('prev')
const inputs=document.querySelector('.input')
btns.addEventListener('click', () => {
        inputs.classList.toggle('active')
        update();
    })