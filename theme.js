const tema = document.getElementById("tema").addEventListener('click', function mudacor(ev) {
    ev.preventDefault()
   document.body.classList.toggle('white-mode');
   const grid = document.querySelectorAll('.container-grid')
   grid.forEach(x => x.classList.toggle('white-mode-grid'));

})