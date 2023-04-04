const buttonResponsive = document.getElementById('button-responsive')

function toggleMenu() {
    const menuResponsive = document.getElementById('header');
    menuResponsive.classList.toggle('ativo')
}

buttonResponsive.addEventListener('click', toggleMenu)