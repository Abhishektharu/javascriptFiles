var isPalindrome = function (x) {
    var flag = false;


    var digit = x.toString();
    console.log( typeof digit)
    
    var convertedInt = '';

    for (var i = digit.length - 1; i >= 0; i--) {
        convertedInt += digit[i];
    }

    if(convertedInt === digit){
        flag = true;
    }
    
    console.log(flag);

};

// console.log(isPalindrome(121));
isPalindrome(121)
