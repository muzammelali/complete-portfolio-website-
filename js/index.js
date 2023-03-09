

const latestWorksBtns = document.querySelector('.latest_works_buttons')
const latestWorksBtn = document.querySelectorAll('.p-btn')
const pImgElement = document.querySelectorAll('.overlay')

latestWorksBtns.addEventListener("click" ,(e) => {
    const pBtnClicked = e.target

    latestWorksBtn.forEach((curElem) => curElem.classList.remove("p-btn-active"));

    pBtnClicked.classList.add('p-btn-active')

    const btn_Num = pBtnClicked.dataset.btnNum
    
    imgActive = document.querySelectorAll(`.pb--${btn_Num}`)

    pImgElement.forEach((e) => e.classList.add('p-btn-not-active'))
    imgActive.forEach((e) => e.classList.remove('p-btn-not-active'))
})


// swiper js testimonial section slide js 
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 30,
    autoplay: {
        delay : 2500
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
});

// scroll to top 
const scrollToTop = document.querySelector('.scroll-to-top')
scrollToTop.addEventListener('click',(e) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
})


// number cunter 

const counterNum = document.querySelectorAll('.counter-number')
const speed = 200

counterNum.forEach((curElem) => {
    const updateNum = () => {
        const targetNum = parseInt(curElem.dataset.number)
        const currentNum = parseInt(curElem.innerText)

        const incrementNumber = Math.trunc(targetNum / speed)
        if(currentNum < targetNum){
            curElem.innerText = `${currentNum + incrementNumber}+`
        }
        setTimeout(updateNum, 5)
    }
    updateNum()
})