window.addEventListener('load', (event) => {
    console.log('DOM fully loaded and parsed');

    function onEntry(entry) {
        entry.forEach(change => {
            if (change.isIntersecting) {
                change.target.classList.add('active');
            } else {
                change.target.classList.remove('active');
            }
        });
    }

    let options = {
        threshold: [0.3]
    };
    let observer = new IntersectionObserver(onEntry, options);
    let elements = document.querySelectorAll('.animation_company_item,.animation_title,.header_animation_item,' +
        ' .img_animation_container, .progress_bar_animation');

    for (let elm of elements) {
        observer.observe(elm);
    }

    let collapseButton = document.getElementsByClassName("collapsible")[0];

    collapseButton.addEventListener("click", function () {
        this.classList.toggle("active");
        let content = this.nextElementSibling;
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
            this.classList.add("d-none")
        }
    })


});

