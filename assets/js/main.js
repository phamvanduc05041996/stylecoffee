
const topMenu = document.getElementById('top-menu-item');
console.log(topMenu);
const toggleTopMenuIcon = document.getElementById('toggle-top-menu-icon');

document.addEventListener('click', (e) => {
    if (toggleTopMenuIcon.contains(e.target)) {
        //click to Toggle top menu icon
        topMenu.classList.toggle('tqd-topmenu-expanded')
        topMenu.classList.toggle('hidden')
    }
    else {
        // click outside from  Toggle top menu icon
        if (topMenu.classList.contains('tqd-topmenu-expanded')) {
            topMenu.classList.remove('tqd-topmenu-expanded');
            topMenu.classList.add('hidden')
        }

    }
})