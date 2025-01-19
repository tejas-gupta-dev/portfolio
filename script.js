/*const topLeftLink = document.getElementsByClassName("act")[1];

// Check if the element exists before adding the event listener
topLeftLink.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default link behavior

        // Add the animation class to the clicked link
    document.getElementsByClassName('line1')[0].classList.add("animation1");

        // Redirect to the link after a delay
    setTimeout(() => {
        window.location.href = this.href; // Redirect to the link
        }, 4000);
    });*/
    // Get all links inside the element with class "act"
const links = document.querySelectorAll('.act span a');

links.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();

        const imagess = document.querySelector('.imagess');
        const lineClass = this.getAttribute('data-line');
        const lineElement = document.querySelector(`.${lineClass}`);
        const animationclass = this.getAttribute('data-animation');

        if (lineElement) {
            if (lineClass === 'line1') {
                imagess.src = '1000184485.png';
            } else if (lineClass === 'line2') {
                imagess.src = '1000184487.png';
            } else if (lineClass === 'line3') {
                imagess.src = '1000184486.png';
            } else {
                imagess.src = '1000184488.png';
            }

            lineElement.classList.add(animationclass);
        }


        setTimeout(() => {
            window.location.href = this.href;
        }, 4000);
    });
});
document.addEventListener('mousemove', (e) => {
    const cursor = document.querySelector('.cursor');
    cursor.style.left = `${e.pageX}px`;
    cursor.style.top = `${e.pageY}px`;
});
const content = document.querySelector(".boxcontent");
const video = document.querySelector(".videos");
const about = document.querySelector(".aboutus");
setTimeout(() => {
    content.style.display = 'block';
    video.remove();
    const imgs = document.createElement('img');
    imgs.setAttribute("src", "IMG_20250119_135635-removebg-preview.png");
    imgs.setAttribute("class", "imgs");
    about.insertBefore(imgs, about.firstChild);
}, 10000);
const content1 = document.querySelector(".box2");
const video1 = document.querySelector(".videos");
const about1 = document.querySelector(".aboutus");
setTimeout(() => {
    content1.style.display = 'flex';
    video.remove();
    const items = content1.querySelectorAll('.content1');
    items.forEach((item, index) => {
        setTimeout(() => {
            item.style.opacity = 1;
        }, index * 1000);
    });
    const imgs = document.createElement('img');
    imgs.setAttribute("src", "IMG_20250119_135635-removebg-preview.png");
    imgs.setAttribute("class", "imgs");
    about1.insertBefore(imgs, about.firstChild);
}, 10000);