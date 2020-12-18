// Code your solution here!

printString = (myString) => {
    console.log(myString[0])
    if (myString.length > 1) {
        let mySubString = myString.substring(1, myString.length)
        printString(mySubString)
    } else {
        return true
    }
}

reverseString = (myString) => {
    if (myString.length < 2) {
        return myString;
    } else {
        return reverseString(myString.substring(1)) + myString[0]
    }
}

isPalindrome = (myString) => {
    let len = myString.length

    if ( len < 2) {
        return true;
    } else if (myString[ len - 1 ] === myString[0]) {
        return isPalindrome(myString.substring(1, len - 1))
    } else {
        return false;
    }
}

addUpTo = (array, index) => {
    return index ? array[index] + addUpTo(array, --index) : array[index];
}

maxOf = (array) => {
    if (array.length === 1) {
        return array[0];
    } else {
        return Math.max(array.pop(), maxOf(array))
    }
}


includesNumber = (array, number) => {

    if (!array.length) {
        return false
    } else if  (array[0] === number) {
        return true
    } else {
        return includesNumber(array.slice(1), number)
    }
}