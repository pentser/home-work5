//Tar 1
function min(num1, num2) {
  if (num1 < num2) {
    console.log("the minimum number:" + num1);
  } else if (num1 > num2) {
    console.log("the minimum number:" + num2);
  } else {
    console.log("the number are equal!");
  }
}

min(10, 12);

//Tar 2
function greaterThen3(str1, str2, str3, str4) {
  let counter = 0;
  if (str1.length > 3) counter++;
  if (str2.length > 3) counter++;
  if (str3.length > 3) counter++;
  if (str4.length > 3) counter++;
  console.log("number of strings with more then 3 characters are: " + counter);
}

greaterThen3("12", "Ab", "eli", "jjjj");

//Tar 3

function isAfound(value) {
  let l;
  if ((l = value.indexOf("A") !== -1)) {
    value[l] = "A" + 32;
    console.log(value);
  }
}
isAfound("pentser EliyAhu");

//
function isEvenAndisPositive(num) {
  if (num % 2 == 0) console.log("the number is even");
  else console.log("the number is odd");

  if (num > 0) console.log("the number is positive");
  else if (num < 0) console.log("the number is negetive");
  else console.log("the number is 0");
}

isEvenAndisPositive(6);

//tar 5

function isHeadSameAsTail(str) {
  let res;
  if (str.charAt(0) === str.charAt(str.length - 1)) {
    res = str.slice(1).slice(0, str.length - 2);
    console.log(res);
  }
}
isHeadSameAsTail("abbbbbba");


//tar 6
function isMagicString(str) {
    let res;

    if(str.indexOf('*')!==-1) {
        res = str.replace(/\*/g, "");
        console.log(res);
        return;
    }
    if(str.indexOf('@')!==-1) {
        res="*" + str + "*";
        console.log(res);
        return;
    }
    if(str.indexOf('₪')!==-1) {
        console.log("new shekel");
        return;
    }
   
}
isMagicString("1000₪");
isMagicString("Passwor***");
isMagicString("eli@gmail.com");

