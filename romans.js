var romanToInt = function(string) {
    const romans = [
        {roman: "I", number: 1},
        {roman: "V", number: 5},
        {roman: "X", number: 10},
        {roman: "L", number: 50},
        {roman: "C", number: 100},
        {roman: "D", number: 500},
        {roman: "M", number: 1000},
        {roman: "IV", number: 4},
        {roman: "IX", number: 9},
        {roman: "XL", number: 40},
        {roman: "XC", number: 90},
        {roman: "CD", number: 400},
        {roman: "CM", number: 900},
    ];

    let number = 0;
    let object = romans.find(roman => roman.roman === string);

    if(object){
        number = object.number
    } else{
        let filteredObject = [];
        let filteredString = string;

        // SEARCH FOR IV, IX, XL, XC, CD, CM
        for(let object of romans){
            if(object.roman.length > 1 && string.includes(object.roman)){
                filteredObject.push(object);
            };
        };

        // IF FOUND ANY "filteredObject", REMOVE IT FROM STRING
        for(let romanLetter of filteredObject){
            filteredString = filteredString.replace(romanLetter.roman, '');
        }

        // ADD REMAINING LETTERS IN "filteredObject"
        let letters = filteredString.split('');
        for(let letter of letters){
            for(let roman of romans){
                if(letter.includes(roman.roman)){
                    console.log(roman)
                    filteredObject.push(roman);
                }
            }
        }

        // FINAL SUM
        filteredObject.forEach(convertedNumber => {
            number += convertedNumber.number;
        });

        console.log(string);
    };
    return number;
};
'MCMXCIV'
"M CM XC IV"
// 1000 + 900 + 90 + 4

let string = 'XXIIII';
console.log(
    romanToInt(string)
);