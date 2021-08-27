export default function hamburgerMenu(panelBtn,panel, menuLink){
    const d = document;

    d.addEventListener('click', (e) => {
        if(e.target.matches(panelBtn)) {
            d.querySelector(panel).classList.toggle("active");
        }

        if(e.target.matches(menuLink)) {
            d.querySelector(panel).classList.remove("active");
        }
    })
}