const navmenu=document.getElementById('nav-menu'),
      togglemenu=document.getElementById('nav_toggle'),
      closemenu=document.getElementById('nav-close')

// show
togglemenu.addEventListener('click',()=>
{
    navmenu.classList.toggle('show');
})

//hidden
closemenu.addEventListener('click',()=>
{
    navmenu.classList.remove('show');
})

//remove menu

const navLink=document.querySelectorAll('.nav_link')

function linkaction()
{
    navmenu.classList.remove('show');
}

navLink.forEach(n=>n.addEventListener('click',linkaction));

// ---------scroll section action links
const sections=document.querySelectorAll('section[id]');
window.addEventListener('scroll',scrollActive)
console.log(sections);

function scrollActive()
{
    const scrollY=window.pageYOffset;
    sections.forEach(current=>
        {
            const sectionHeight=current.offsetHeight;
            const sectionTop=current.offsetTop-40;
            sectionId=current.getAttribute('id');
           // console.log(sectionHeight+" "+sectionTop+" "+sectionId);

            if(scrollY>sectionTop && scrollY<sectionTop+sectionHeight)
            {
                //console.log(document.querySelector('.nav_menu a[href*='+sectionId+']'));
                document.querySelector('.nav_menu a[href*='+sectionId+']').classList.add('active');
            }
            else{
                document.querySelector('.nav_menu a[href*='+sectionId+']').classList.remove('active');
            }
        })
}


