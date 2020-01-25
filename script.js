
const container = document.getElementById('main-container');
const page = [
    document.getElementById('page-1'),
    document.getElementById('page-2'),
    document.getElementById('page-3'),
    document.getElementById('page-4'),
];

curPage = 0;
scrolling = false;


let scrollUp = function() {
    if (!scrolling && curPage>0) {
        scrolling = true;
        page[curPage].style.animationName = "move-down";
        page[curPage].onanimationend = function() {
            this.classList.remove("active");
            scrolling = false;
        }
        curPage--;
        page[curPage].classList.add("active");
        page[curPage].style.animationName = "bring-down";
        page[curPage].onanimationend = null;
    }
}

const scrollDown = function() {
    if (!scrolling && curPage<3) {
        scrolling = true;
        page[curPage].style.animationName = "move-up";
        page[curPage].onanimationend = function() {
            this.classList.remove("active");
            scrolling = false;
        }
        curPage++;
        page[curPage].classList.add("active");
        page[curPage].style.animationName = "bring-up";
        page[curPage].onanimationend = null;
    }
}

for (let item of document.getElementsByClassName("scroll-up")) {
    item.onclick = scrollUp;
}

for (let item of document.getElementsByClassName("scroll-down")) {
    item.onclick = scrollDown;
}

viewImage = document.getElementById("view-img");
for (let item of document.getElementsByClassName("btn-img")) {
    item.onclick = function() {
        
        viewImage.style.backgroundImage = this.style.backgroundImage;

        for (let span of document.getElementsByClassName("img-details-title")) {
            span.style.color = this.getAttribute('clr');
        }
    }
}