const d = document;
export default function navBar(btnMenu,menu){
    d.addEventListener('click',(e)=>{
        let menuNav = d.querySelector(menu)
        if(e.target.matches(btnMenu)|| e.target.matches(`${btnMenu} *`)){
            menuNav.classList.toggle('menu-open')
        }else{
            menuNav.classList.remove('menu-open')
        }
    })
}