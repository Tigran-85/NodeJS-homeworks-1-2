function wordsFromString(str){
    str.split(' ').forEach(word => {
         if(!/[^a-zA-Z0-9]/.test(word)){
            console.log(word)
         }
    })
}

module.exports = wordsFromString;