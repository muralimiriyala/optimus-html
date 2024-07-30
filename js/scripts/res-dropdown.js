
document.addEventListener("DOMContentLoaded", function(){
    const srcBtn = document.querySelector("button.res-srch-icon");
    if(srcBtn){
        srcBtn.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(".res-srch-form").classList.toggle("open");
        });
    }
});
    