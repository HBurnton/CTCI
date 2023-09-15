let isUnique = ( word ) =>{
    //Check if all characters in a given string are unique
    //ignore capital/lowercase using eng UTF-16 enc
    let uppercaseWord = word.toUpperCase().split('')
    let indexArr = [];
    for(let i = 0; i < uppercaseWord.length; i++){
        if(!indexArr[uppercaseWord[i].charCodeAt(0)-65]){
            indexArr[uppercaseWord[i].charCodeAt(0)-65] = 1;
        }else{
            console.log('NotUnique')
            return false;
        }
    }
    console.log('unique')
    return true;
}

isUnique("WhOllyUnFair")
isUnique('abcdefghijklmnopqrs')