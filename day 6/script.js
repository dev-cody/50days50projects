const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', checkBoxes);

//Run to show everything when the page is loaded
checkBoxes();

function checkBoxes() {
    //Setting the trigger for when the boxes will show
    const trigger = window.innerHeight / 5 * 4;

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;

        if(boxTop < trigger) {
            box.classList.add('show');
        } else {
            box.classList.remove('show');
        };
    })
};