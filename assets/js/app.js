// An object literal
var app = {
    init: function () {
        app.functionOne();
    },
    functionOne: function () {
    },
    scrollTop: function () {
        console.log("scrollTo");
        window.scrollTo({top: 0, behavior: 'smooth'});
    }

};
(function () {
    // your page initialization code here
    // the DOM will be available here
    // const myViewport = document.getElementById('myViewport');
    //
    // console.log(myViewport);
    //
    // const firstSection = document.getElementById('firstSection');
    // console.log(firstSection);
    //
    // myViewport.addEventListener(
    //     'scroll',
    //     function () {
    //         let location = firstSection.viewportTopLocation;
    //         console.log(
    //             'The viewport is at ' + location +
    //             ' relatively to the first section'
    //         );
    //     },
    //     false
    // );

    app.init();
})();


window.addEventListener('load', (event) => {
    console.log('DOM fully loaded and parsed');
    // let myViewportval = document;

    // When HTML/DOM elements are ready:
    // if (event.target.readyState === "interactive") {   //does same as:  ..addEventListener("DOMContentLoaded"..
    //     alert("hi 1");
    // }

    // When window loaded ( external resources are loaded too- `css`,`src`, etc...)
    // if (event.target.readyState === "complete") {
    //     // alert("hi 2");
    // }

    // app.functionOne();
    // app.myViewport(myViewportval, firstSection);
    app.scrollTop();

    var firstSection = document.getElementById('firstSection');
    var firstSection2 = document.getElementById('firstSection2');


    window.addEventListener(
        'scroll',
        function (e) {
            var location = firstSection.viewportTopLocation;
            var viewportTopStart = firstSection.viewportTopStart;
            var viewportTopEnd = firstSection.viewportTopEnd;
            console.log(
                'firstSection ' + location +
                'viewportTopEnd' + viewportTopStart + " viewportTopEnd" + viewportTopEnd
            );
            viewport.updateDimensions()
        },
        false
    );


    let last_known_scroll_position = 0;
    let ticking = false;

    var note = document.getElementById('firstSection');
    console.log("note", note);
    var screenPosition = note.getBoundingClientRect();
    console.log("screenPosition", screenPosition);
    console.log("note.offsetHeight()", note.offsetHeight);
    // alert(screenPosition.height);
    // alert(note.offsetHeight)

    let pageYOffset = window.pageYOffset;

    console.log("pageYOffset", pageYOffset);
    console.log("screenPosition- scroll_pos", (screenPosition.height + screenPosition.x) - pageYOffset);
    // alert("scroll_pos ",(screenPosition.height + screenPosition.x) - pageYOffset);
    // console.log("scroll_pos ",screenPosition.height + screenPosition.x - pageYOffset)


    function animation() {
        let img_animation_container = document.getElementsByClassName('img_animation_container')[0];
        let header_info_block_animation_container = document.getElementsByClassName('header_info_block_animation_container')[0];
        let windowHeight = window.innerHeight;
        let elementTop = note.getBoundingClientRect().top;
        if (elementTop < windowHeight) {
            img_animation_container.classList.add("active");
            header_info_block_animation_container.classList.add("active");
        } else {
            img_animation_container.classList.remove("active");
            header_info_block_animation_container.classList.remove("active");
        }
    }

    function animation_title() {
        // let animation_title = document.getElementsByClassName('animation_title')[0];
        // let windowHeight = window.innerHeight;
        //
        // let elementTop = animation_title.getBoundingClientRect().top;
        // if (elementTop < windowHeight) {
        //     animation_title.classList.add("active");
        // } else {
        //     animation_title.classList.remove("active");
        // }

        let animation_title = document.querySelectorAll(".animation_title");
        for (let i = 0; i < animation_title.length; i++) {
            let windowHeight = window.innerHeight;
            let elementTop = animation_title[i].getBoundingClientRect().top;
            let elementVisible = 150;
            if (elementTop < windowHeight - elementVisible) {
                animation_title[i].classList.add("active");
            } else {
                animation_title[i].classList.remove("active");
            }
        }
    }

    function animationCompany() {
        let animationCompanyItem = document.querySelectorAll(".animation_company_item");
        let historyContainer = document.querySelectorAll(".history_container")[0];


        let windowHeight = window.innerHeight;
        let elementTop = historyContainer.getBoundingClientRect().top;

        if (elementTop < windowHeight) {
            for (let i = 0; i < animationCompanyItem.length; i++) {
                animationCompanyItem[i].classList.add("active");
            }

        } else {
            for (let i = 0; i < animationCompanyItem.length; i++) {
                animationCompanyItem[i].classList.add("active");
            }
        }

    }

    // animation();
    // animation_title();
    // animationCompany();

    function doSomething(scroll_pos) {
        // Делаем что-нибудь с позицией скролла


        console.log("scroll_pos", scroll_pos);
        console.log("screenPosition.height", screenPosition.height);
        console.log("screenPosition.x", screenPosition.x);
        console.log("screenPosition- scroll_pos", (screenPosition.height + screenPosition.x) - scroll_pos)
    }

    window.addEventListener('scroll', function (e) {
        last_known_scroll_position = window.scrollY;

        if (!ticking) {
            window.requestAnimationFrame(function () {
                doSomething(last_known_scroll_position);
                // animation();
                // animation_title()
                // animationCompany();
                ticking = false;
            });

            ticking = true;
        }
    });

    // window.addEventListener(
    //     'scroll',
    //     function () {
    //         if (!ticking) {
    //             window.requestAnimationFrame(function () {
    //                 var location = firstSection.viewportTopLocation;
    //                 var viewportTopStart = firstSection.viewportTopStart;
    //                 var viewportTopEnd = firstSection.viewportTopEnd;
    //                 console.log(
    //                     'viewportTopLocation ' + location +
    //                     'viewportTopStart' + viewportTopStart + " viewportTopEnd" + viewportTopEnd
    //                 );
    //                 ticking = false;
    //             });
    //
    //             ticking = true;
    //         }
    //     },
    //     false
    // );

    // let options = {
    //     rootMargin: '0px',
    //     threshold: 1.0
    // }
    // let callback = function (entries, observer) {
    //     /* Content excerpted, show below */
    //     entries.forEach(entry => {
    //         entry.time;               // a DOMHightResTimeStamp indicating when the intersection occurred.
    //         entry.rootBounds;         // a DOMRectReadOnly for the intersection observer's root.
    //         entry.boundingClientRect; // a DOMRectReadOnly for the intersection observer's target.
    //         entry.intersectionRect;   // a DOMRectReadOnly for the visible portion of the intersection observer's target.
    //         entry.intersectionRatio;  // the number for the ratio of the intersectionRect to the boundingClientRect.
    //         entry.target;             // the Element whose intersection with the intersection root changed.
    //         entry.isIntersecting;     // intersecting: true or false
    //
    //         console.log("entry.boundingClientRect",entry.boundingClientRect);
    //     });
    // };
    // let observer = new IntersectionObserver(callback, options);

//     let target = document.querySelector('#firstSection2');
// let observer.observe(target);

    function onEntry(entry) {
        entry.forEach(change => {
            if (change.isIntersecting) {
                change.target.classList.add('active');
            }
        });
    }

    let options = {
        threshold: [0.5]
    };
    let observer = new IntersectionObserver(onEntry, options);
    let elements = document.querySelectorAll('.animation_company_item,.animation_title,.header_animation_item,' +
        ' .img_animation_container, .progress_bar_animation');

    for (let elm of elements) {
        observer.observe(elm);
    }


});

