const tabs = document.querySelectorAll('.tab')
const panels = document.querySelectorAll('.panel')
const btn = document.getElementById('menu-btn')
const menu = document.getElementById('menu')
const logo = document.getElementById('logo')


// tabs menu event listener
tabs.forEach((tab) => {tab.addEventListener('click',onTabClick)})

// Hamburger button listener
btn.addEventListener('click', navToggle)


function onTabClick(event_click){
    //Deactivate all tabs
    tabs.forEach((tab) =>{
	tab.children[0].classList.remove("border-softRed","border-b-4","md:border-b-0")
    })

    //Hide all panels
    panels.forEach((panel) => {
	panel.classList.add("hidden")
    })

    //Active a new tab and panel based on the target
    event_click.target.classList.add("border-softRed","border-b-4")
    const classString = event_click.target.getAttribute("data-target")
    document.getElementById('panels').getElementsByClassName(classString)[0].classList.remove("hidden")
}

function navToggle() {
  btn.classList.toggle('open')
  menu.classList.toggle('flex')
  menu.classList.toggle('hidden')

  if (menu.classList.contains('flex')) {
    logo.setAttribute('src', './images/logo-bookmark-footer.svg')
  } else {
    logo.setAttribute('src', './images/logo-bookmark.svg')
  }
}

    
    

