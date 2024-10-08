document.getElementById("add").addEventListener("click", ()=>{
    document.getElementById("home").style.display="none"
})

window.addEventListener("load", ()=>{
  document.getElementById("loadpage").style.display="none"
})
interact('.draggable').draggable({
    listeners: {
        start(event) {
            console.log(event.type, event.target);
        },
        move(event) {
            let target = event.target;
            let x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx;
            let y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

            target.style.transform = `translate(${x}px, ${y}px)`;
            target.setAttribute('data-x', x);
            target.setAttribute('data-y', y);
        }
    }
});
