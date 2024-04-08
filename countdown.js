function countDown(time) {
    let timer = setInterval(function(){
        time -= 1;
        if(time <= 0){
            clearInterval(timer);
            console.log('DONE!');
        }
    else {
        console.log(time);
    }

    },1000)
}

function randomGame(){
    let num;
    let counter = 0;
    let timer = setInterval(function(){
        num = Math.random();
        counter += 1;
        if (num>.75){
            clearInterval(timer);
            console.log(`It took ${counter} time(s)`)
        }
    },1000)
}