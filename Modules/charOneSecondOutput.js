function charOneSecondOutput(str){
    let index = 0;

    const interval = setInterval(function(){
        if(index >= str.length - 1){
            clearInterval(interval)
        }

        console.log(str[index]);
        index++;
    }, 1000)
}


module.exports = charOneSecondOutput;
