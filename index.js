
function myfun(event) {
    const sel = document.querySelector(".sidebar");
    // Set initial state
    sel.style.opacity = "0";
    sel.style.display = "flex";
    sel.style.transition = "opacity 2s";

    // Trigger a reflow to apply initial styles
    sel.offsetHeight;
    //This line is a trick to force a reflow. It ensures that the initial styles are applied before the next changes. The offsetHeight property is accessed, causing the browser to recalculate styles and layout. This is necessary to make the transition work as intended.
    setTimeout(() => {
        sel.style.opacity = "1";
    }, 100); // You can adjust the delay if needed

    event.preventDefault(); // Prevent the default behavior of the link
}
function myfun1(event) {
    const sel = document.querySelector(".sidebar");
    sel.style.opacity = "0";
    sel.style.backgroundColor="#00000000"
    sel.offsetHeight;
    setTimeout(() => {
        sel.style.display = "none";
    }, 1000);
    event.preventDefault(); // Prevent the default behavior of the link
}
function links() {
    

document.querySelectorAll('a[href^="."]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
}
links()
///main/////////////////////////////////////////////////////

let take = gsap.timeline()

take.from(".child1 > h1,.child1 > h4, .child1 > button", {
    x: -280,
    scale: 0,
    duration: 2,
    stagger: 1,
    scrub: true
})


gsap.from(".address .border", {
    scale: 0,
    delay: 1,
    duration: 1,
    y: 50,
    scrollTrigger: {
        trigger: ".address .border",
        scroller: "body",
        //  markers:true,
        start: "top 50%",
        end: "top 30%",
        scrub: 2
    }
})
//main////////////////////////////////222222222222222222//////////////////////////////////
let take1 = gsap.timeline();

take1.from(".m2r > h3,  .m2r > h2,  .m2r > h4", {
    y: -100,
    duration: 2,
    stagger: 1,
    scrollTrigger: {
        trigger: ".main2 .m2r",
        scroller: "body",
        // markers:true,
        start: "top 50%",
        end: "top 30%",
        scrub: 5,
        stagger: 3
    }
})
///////////////back color main 2///////////////////////////////////
gsap.from(".main2", {
    duration: 2,
    delay: 0.5,
    backgroundColor: "#274E3C",

    scrollTrigger: {
        trigger: ".main2",
        scroller: "body",
        //     markers:true,
        start: "top 50%",
        end: "top 30%",
        scrub: 2,
    }
})

/////////////////////////////////////////////////
gsap.from(".m2l > img", {
    scale: 0,
    duration: 3,
    delay: 0.5,
    scrollTrigger: {
        trigger: ".main2 .m2l",
        scroller: "body",
        //   markers:true,
        start: "top 50%",
        end: "top 30%",
        scrub: 5,
        stagger: 1
    }
})
gsap.from("hr", {
    duration: 3,
    delay: 0.5,
    scale:0,
    scrollTrigger: {
        trigger: ".main2",
        scroller: "body",
        //     markers:true,
        start: "top 40%",
        end: "top 20%",
        scrub: 3,
    }
})
////main3/////////////////////////////333333333333333333/////////////////////////////////////////

gsap.from(".firstc img", {
    x: 50,
    duration: 3,
    delay: 1,
    stagger: 1,
    scrollTrigger: {
        trigger: ".main3  .firstc",
        scroller: "body",
        //    markers:true,
        start: "top 50%",
        end: "top 30%",
        scrub: 5,
    }
})
gsap.from(".main3", {
    duration: 2,
    delay: 0.5,
    backgroundColor: "#00000000",
    scrollTrigger: {
        trigger: ".main3",
        scroller: "body",
        //     markers:true,
        start: "top 50%",
        end: "top 30%",
        scrub: 2,
    }
})
////////////////////////////contuct me///#130E14#
gsap.from(".contuctme", {
    duration: 2,
    delay: 0.5,
    backgroundColor: "#274E3C",
    scrollTrigger: {
        trigger: ".contuctme",
        scroller: "body",
        //     markers:true,
        start: "top 50%",
        end: "top 30%",
        scrub: 2,
    }
})