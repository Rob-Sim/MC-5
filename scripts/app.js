const canvas = document.getElementById("canv")
const context = canvas.getContext('2d')

canvas.width = 1158;
canvas.height = 770;

//Images are stored "0007.jpg". Therefore, if the length of the given index is less than 4 figures in length, pad 0s on the front to point towards correct path
const currentFrame = index => (
    `https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/01-hero-lightpass/${index.toString().padStart(4, '0')}.jpg`
)

const drawImg = () => { context.drawImage(image, 0, 0) }

//Draw initial image with first frame
const image = new Image()
image.src = currentFrame(1)
image.onload = drawImg()

//Scroll event init
const main = document.getElementById("main")
const cliHeight = document.documentElement.clientHeight
let scrTop, scrPerc

//Scroll event
window.addEventListener('scroll', (e) => {
    //Amount of page scrolled
    scrTop = this.scrollY

    //Move the body with where the page is
    main.style.transform = `translate3d(0,-${scrTop}px,0)`

    //Percentage of page scrolled
    scrPerc = scrTop / (document.documentElement.scrollHeight - cliHeight)

    requestAnimationFrame(() => {
        //Pass perc to get path. Percentage of amount of images in index. 50 % of page- 50% of 500 img = 250-> index = 250
        image.src = currentFrame(Math.min(147,Math.floor(scrPerc * 148)))
        //Draw the image onto canvas context
        drawImg()
    })
})