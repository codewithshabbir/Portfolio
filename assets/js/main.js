var getHubergerIcon = document.getElementById("hamburger-menu");
var getHubergerCrossIcon = document.getElementById("hamburger-cross");
var getMobileMenu = document.getElementById("mobile-menu");

getHubergerIcon.addEventListener("click", function () {
    console.log("Opening mobile menu");
    getMobileMenu.style.display = "flex";
    setTimeout(function () {
        getMobileMenu.style.transform = "translateX(0%)";
    }, 50);
});

getHubergerCrossIcon.addEventListener("click", function () {
    console.log("Closing mobile menu");
    getMobileMenu.style.transform = "translateX(-100%)";
    setTimeout(function () {
        getMobileMenu.style.display = "none";
    }, 300);
});

window.addEventListener("resize", function () {
    if (window.innerWidth > 770) {
        getMobileMenu.style.display = "none";
    }
});


window.addEventListener('scroll', () => {
    const firstChild = document.body.children[0];
    const firstChildInner = firstChild ? firstChild.children[0] : null;

    if (window.scrollY > 50) {
        if (firstChild) {
            firstChild.classList.remove('lg:my-4');
            firstChild.classList.add('lg:mt-0');

            if (firstChildInner) {
                firstChildInner.classList.remove('rounded-full');
                firstChildInner.classList.add('rounded-bl-[30px]');
                firstChildInner.classList.add('rounded-br-[30px]');
            }
        }
    } else if (window.scrollY === 0) {
        if (firstChild) {
            firstChild.classList.add('lg:my-4');
            firstChild.classList.remove('lg:mt-0');

            if (firstChildInner) {
                firstChildInner.classList.add('rounded-full');
                firstChildInner.classList.remove('rounded-bl-[30px]');
                firstChildInner.classList.remove('rounded-br-[30px]');
            }
        }
    }
});
