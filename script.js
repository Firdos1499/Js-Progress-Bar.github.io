function move(){
    const element = document.getElementById("mybar");
    let width = 0;
    const id = setInterval(frame , 1000);

    function frame(){
        if(width == 100){
            clearInterval(id);
        }else{
            width += 25;
            element.style.width = width+"%";
        }
    }
}