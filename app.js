let avatarName = prompt("Plaese, enter your name: ") ;

let cash  = Number( prompt(" Hi ! "+ avatarName +", please, enter the  amount of money you have for the journey : "));

const oneDollar = 10650.34;  // 1$ = 10650.34 so`m
const oneEuro = 11650.03;  // 1 euro = 11650.03 so`m

const allExpences =Math.round(750 * oneDollar + 120 * oneEuro);

const expenxesInDollar = Math.round(allExpences/10650.34);


const cashInDollar = Math.round(cash/10650.34);

let getTitle = document.querySelector('#title');
let getInfo = document.querySelector('#info');

getInfo.textContent = "At least you should have 881 $ to go somewhere and you have " + cashInDollar+ " $";


if (cash >= allExpences) {

  getTitle.textContent = `Have a nice journey ${avatarName} !`;
  getTitle.style.color = "green";
   

} else {

  getTitle.textContent = `Oops! Sorry  ${avatarName}, you should earn more money for the journey...`;
  getTitle.style.color = "red";

}








