const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});

let Name = 'aniket';
console.log(Name);





var elemC = document.querySelector(".elem-container")
    var fixed = document.querySelector(".fixed-image")
    elemC.addEventListener("mouseenter", function () {
         fixed.style.display = "block";
    })
    elemC.addEventListener("mouseleave", function () {
        fixed.style.display = "none";
    })

    let elems = document.querySelectorAll(".elem")
    elems.forEach(function (elem) {
        elem.addEventListener("mouseenter", function(){
            let image = elem.getAttribute('data-image');
            
            fixed.style.backgroundImage = `url(${image})`;


    })
})

let loader = document.querySelector('.loader');
setTimeout(function() {
    loader.style.top = "-100%";
}, 3700)

    



