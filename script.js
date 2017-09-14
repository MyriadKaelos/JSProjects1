/**
 * Created by h205p2 on 9/1/17.
 */
//write first method
function sleepIn(param1,param2) {
    if(param2 == true) {
        return param2;
    } else if (param2 == false){
        if(param1 == true) {
            return param2;
        } else if (param1 == false) {
            return "true";
        }
    }
}
//write second method
function monkeyTrouble(param1,param2)  {
    if(param1 == true) {
        if(param2 == true) {
            //both smiling
            return "true";
        } else if(param2 == false) {
            //one smiling
            return "false";
        }
    } else if(param1 == false) {
        if(param2 == true) {
            //one smiling
            return "false";
        } else if(param2 == false) {
            //both not
            return "true";
        }
    }
}
//write third method
function stringTimes(param1,param2) {
    var final = "";
    for(var i = 0; i < param2; i++) {
        final += param1;
        final += " ";
    }
    return final;
}
//write fourth method
function frontTimes(param1,param2) {
    var final = "";
    var subParam = param1.substring(0,3);
    for(var i = 0; i < param2; i++) {
        final += subParam;
        final += " ";
    }
    return final;
}
//write fifth method
function stringBits(param1) {
    var STRING_LENGTH = param1.length;
    var final = "";
    for(var i = 0; i < STRING_LENGTH; i++) {
        var subParam = param1.substring(i,i+1);
        if(i % 2 == 0) {
            final += subParam;
        }
    }
    return final;
}
//write sixth method
function caughtSpeeding(param1,param2) {
    var ticket = 0;
    var kindNess = 0;
    if(param2 == true) {
        kindNess += 5;
    }
    if(param1  <= 60 + kindNess) {
        ticket = 0;
    } else if (param1 <= 80 + kindNess) {
        ticket = 1;
    } else {
        ticket = 2;
    }
    return ticket;
}
//write seventh method
function fizzBuzz(param1) {
    var final = "";
    if(param1 % 3 == 0) {
        final += "Fizz";
        if(param1 % 5 == 0) {
            final += "Buzz";
        }
    } else if(param1 % 5 == 0) {
        final += "Buzz";
    } else {
        final += param1;
        final += "!";
    }
    return final;
}
//write eighth method
function teaParty(param1,param2) {
    var party = 0;
    var great = false;
    if(param1/2 >= param2 || param2/2 >= param1) {
        great = true;
    }
    if(param1 >= 5 && param2 >= 5) {
        party += 1;
    }
    if(great == true && party == 1) {
        party += 1;
    }
    return party;
}
//write ninth method
function blackJack(param1,param2) {
    if(param1 >= param2 && param1 <=21) {
        return param1;
    } else if(param2 > param1 && param2 <=21) {
        return param2;
    } else if(param1 > 21 && param2 > 21) {
        return 0;
    } else if(param1 < param2) {
        return param1;
    } else {
        return param2;
    }
}
//write tenth method
function loneSum(param1,param2,param3) {
    var sum = 0;
    if(param1 != param2 && param1 != param3) {
        sum += param1;
    }
    if(param2 != param1 && param2 != param3) {
        sum += param2;
    }
    if(param3 != param1 && param3 != param2) {
        sum += param3;
    }
    return sum;
}
//write eleventh method
function firstLast6(param1) {

}
//write twelfth method
function has_23(param1) {

}
//write thirteenth method
function fix_23(param1) {

}
//write fourteenth method
function countYZ(param1) {

}
//write fifteenth method
function endOther(param1) {

}
//write sixteenth method
function starOut(param1) {

}
//write seventeenth method
function getSandwich(param1) {

}
//write eighteenth method
function canBalance(param1) {

}
//write nineteenth method
function countClumps(param1) {

}
//write twentieth method
function evenlySpaced(param1) {

}

function tester1() {
    //output becomes the return of sleepIn
    //whether it's a school day or a holiday
    //return true if param2 is true, or param1 is false
    //return false if  both are false
    document.getElementById("output0").innerHTML = sleepIn(false, false);
}
function tester2() {
    //output becomes the return of monkeyTrouble
    //monkeys smiling? bad idea
    //if one is then return false
    //if both or none return true
    document.getElementById("output1").innerHTML = monkeyTrouble(false, false);
}
function tester3() {
    //output becomes the return of stringTimes
    //returns a string n times
    document.getElementById("output2").innerHTML = stringTimes("Hey",2);
}
function tester4() {
    //output becomes the return of frontTimes
    //returns the first three letters of the string n times
    document.getElementById("output3").innerHTML = frontTimes("Cool",4);
}
function tester5() {
    //output becomes the return of stringBits
    //returns every other letter of the string
    document.getElementById("output4").innerHTML = stringBits("curse aisle");
}
function tester6() {
    //output becomes the return of caughtSpeeding
    //0 to 60 returns no ticket,(0)
    //61 to 80 returns small ticket,(1)
    //81 and up returns a big ticket,(2)
    //unless it's your birthday, then your speed can be five higher
    document.getElementById("output5").innerHTML = caughtSpeeding(83,true);
}
function tester7() {
    //output becomes the return of FizzBuzz
    //returns the string form of a number followed by !
    //unless the number is divisible by 3 which should return Fizz
    //unless by five then return Buzz
    //if both 5 and 3 return FizzBuzz
    document.getElementById("output6").innerHTML = fizzBuzz(30);
}
function tester8() {
    //output becomes the return of teaParty
    //returns 0 = bad party:
    //returns 1 = good party: tea and candy are at least 5
    //returns 2 = great party: if tea and candy are at least five and
    //one is more than twice the other

    document.getElementById("output7").innerHTML = teaParty(5,15);
}
function tester9() {
    //output becomes the return of blackJack
    //return one integer, of the two, whichever is closest to 21 without going over
    //returns 0 if they both go over
    document.getElementById("output8").innerHTML = blackJack(22,19);
}
function tester10() {
    //output becomes the return of loneSum
    //returns the sum of a, b, and c.
    //unless a value is the same as another
    //ie: 5,4,6 = 15; 3,3,3 = 0; 5,5,16 = 16
    document.getElementById("output9").innerHTML = loneSum(3,6,9);
}
function tester11() {
    //output becomes the return of firstLast6
        //arrays can be written by calling a
        //var y = ["c","a","l","l","m","e"];
    //firstLast6 gets an array of integers
    //if the first or last is "6" return true
    document.getElementById("output10").innerHTML = firstLast6([4,5,2,3,7,6]);
}
function tester12() {
    //output becomes the return of has_23
    //given an array of two integers,
    //return true if either is a two or three
    document.getElementById("output11").innerHTML = has_23();
}
function tester13() {
    //output becomes the return of fix_23
    //given an array of three integers,
    //if an integer 2 is followed by a three
    //return the array with the 3 turned into a zero
    //ie: 234 = 204
    document.getElementById("output12").innerHTML = fix_23();
}
function tester14() {
    //output becomes the return of countYZ
    //returns the amount of words ending in
    //y or z in a string of words
    //ie: fray fez = 2
    //ie: cold fez = 1
    document.getElementById("output13").innerHTML = countYZ();
}
function tester15() {
    //output becomes the return of endOther
    //given two strings returns true if one
    //is at the end of another, (not case sensitive)
    //ie: "abVow" and "crabVow" would return true
    //str.toLowerCase() returns the lowercase version
    //of string str
    document.getElementById("output14").innerHTML = endOther();
}
function tester16() {
    //output becomes the return of starOut
    //given a string, the return is the string, but
    //where there is a "*" character, the characters
    //to its right and left are gone
    //ie: "canni*bal" returns "cannal"
    document.getElementById("output15").innerHTML = starOut();
}
function tester17() {
    //output becomes the return of getSandwich
    //given a string, returns only the party of the
    //string between two slices of bread
    //ie: "plasticbreadhoneybread" returns "honey"
    document.getElementById("output16").innerHTML = getSandwich();
}
function tester18() {
    //output becomes the return of canBalance
    //given an array of numbers, returns true
    //if the array can be split with equal
    //weight on either side
    //ie: ([5,2,1,8]) would return true
    document.getElementById("output17").innerHTML = canBalance();
}
function tester19() {
    //output becomes the return of countClumps
    //given an array, the return is the amount
    //of clumps in the array, clumps being
    //two adjacent same integers
    //ie: ([1,1,4,5,7,7,5]) returns 2
    document.getElementById("output18").innerHTML = countClumps();
}
function tester20() {
    //output becomes the return of evenlySpaced
    //given an array of three integers
    //returns true if a sequence of three integers
    //is evenly spaced
    //ie: ([6,5,4]) true
    //ie: ([1,3,4]) false
    document.getElementById("output19").innerHTML = evenlySpaced();
}