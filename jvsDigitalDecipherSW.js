//This script was made done by the help of a friend. It may look very similar but I still understood the assignment. I wanted to clarify that I still learned from the code and not just copied without thought.

function digitalDecipher(eMessage,key) {
    const list = eMessage;
    let numbers = key.toString();
    
    //make the length of number equal to list
    var division = Math.floor(list.length / numbers.length);
    divRep = numbers.repeat(division - 1);
    numbers = numbers.concat(divRep);
    
    //add remainder of the number to be equal to length
    var remainder = list.length % numbers.length;
    
    for (let i = 0; i < remainder; i ++) {
        numbers = numbers.concat(numbers.charAt(i));
    }
    
    //subtract the list with the number
    var newList = [];
    if (list.length == numbers.length) {
        for (let i = 0; i < list.length; i ++) {
            results = list[i] - numbers.charAt(i);
    
            //Change the numbers to alphabets
            var letter = String.fromCharCode(results + 96);
            newList.push(letter);
        }
    }
    console.log(newList.join(""));
}
    
digitalDecipher([20, 12, 18, 30, 21], 1939);
digitalDecipher([14, 30, 11, 1, 20, 17, 18, 18], 1990);
digitalDecipher([6, 4, 1, 3, 9, 20], 100);