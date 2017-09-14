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

//instructions and call for method 1
//DONE!!
function tester1() {
    //output becomes the return of sleepIn
    //whether it's a school day or a holiday
    //return true if param2 is true, or param1 is false
    //return false if  both are false
    document.getElementById("output0").innerHTML = sleepIn(false, false);
}
//instructions and call for method 2
//DONE!!
function tester2() {
    //output becomes the return of monkeyTrouble
    //monkeys smiling? bad idea
    //if one is then return false
    //if both or none return true
    document.getElementById("output1").innerHTML = monkeyTrouble(false, false);
}
//instructions and call for method 3
//DONE!!
function tester3() {
    //output becomes the return of stringTimes
    //returns a string n times
    document.getElementById("output2").innerHTML = stringTimes("Hey",2);
}
//instructions and call for method 4
//DONE!!
function tester4() {
    //output becomes the return of frontTimes
    //returns the first three letters of the string n times
    document.getElementById("output3").innerHTML = frontTimes("Cool",4);
}
//instructions and call for method 5
//DONE!!
function tester5() {
    //output becomes the return of stringBits
    //returns every other letter of the string
    document.getElementById("output4").innerHTML = stringBits("curse aisle");
}
//instructions and call for method 6
//DONE!!
function tester6() {
    //output becomes the return of caughtSpeeding
    //0 to 60 returns no ticket,(0)
    //61 to 80 returns small ticket,(1)
    //81 and up returns a big ticket,(2)
    //unless it's your birthday, then your speed can be five higher
    document.getElementById("output5").innerHTML = caughtSpeeding(83,true);
}
//instructions and call for method 7
//DONE!!
function tester7() {
    //output becomes the return of FizzBuzz
    //returns the string form of a number followed by !
    //unless the number is divisible by 3 which should return Fizz
    //unless by five then return Buzz
    //if both 5 and 3 return FizzBuzz
    document.getElementById("output6").innerHTML = fizzBuzz(30);
}
//instructions and call for method 8
//DONE!!
function tester8() {
    //output becomes the return of teaParty
    //returns 0 = bad party:
    //returns 1 = good party: tea and candy are at least 5
    //returns 2 = great party: if tea and candy are at least five and
    //one is more than twice the other

    document.getElementById("output7").innerHTML = teaParty(5,15);
}
//instructions and call for method 9
//DONE!!
function tester9() {
    //output becomes the return of blackJack
    //return one integer, of the two, whichever is closest to 21 without going over
    //returns 0 if they both go over
    document.getElementById("output8").innerHTML = blackJack(22,19);
}
//instructions and call for method 10
function tester10() {
    //output becomes the return of loneSum
    //returns the sum of a, b, and c.
    //unless a value is the same as another
    //ie: 5,4,6 = 15; 3,3,3 = 0; 5,5,16 = 16
    document.getElementById("output9").innerHTML = loneSum(3,6,9);
}