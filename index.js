const menuBarSvg = document.getElementById('menuBar');
const menuBtnEl = document.getElementById('menuBtn');

const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true
});

setTimeout(() => {
    scroll.update()
}, 1500);

menuBarSvg.addEventListener('click',function(){
    menuBtnEl.classList.toggle('show');
})

document.querySelectorAll('[data-scroll-to]').forEach(a =>{
    a.addEventListener('click', function(){
        const target = document.querySelector(this.dataset.scrollTo);
        console.log(target);
        scroll.scrollTo(target);
    })
})

function showPara(e){
    e.target.parentElement.classList.toggle('lessText');
    e.target.textContent = e.target.textContent === 'Read More' ? 'Read Less' : 'Read More';
}