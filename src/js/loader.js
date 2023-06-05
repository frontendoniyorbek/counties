const elLoaeder = document.querySelector('.loader')

const loaderToggle = (info) => {
    if (info) {
        elLoaeder.classList.remove('hidden')
    } else {
        elLoaeder.classList.add('hidden')
    }
}

export default loaderToggle