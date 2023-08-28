
//1.მოცემულია მასივი:let languages = ['html', 'css', 'javascript', ‘python’, 'php'];
//ფილტრის საშულებით გაფილტრეთ და გამოიტანეთ მარტო ის სიტყვები რომლების სიმბოლოების რაოდენობა იქნება 3-ზე მეტი;
let languages = ['html', 'css', 'javascript', 'python', 'php'];
let result = languages.filter((languages) => languages.length > 3);
console.log(result);

//2.შეამოწმეთ მოცელუმ მასივში let arr = [-1, -2, -3, 4]; არის თუ არა ერთი მაინც დადებითი რიცხვი some მეთიდით.
let arr = [-1, -2, -3, 4];
let PositiveNumber = arr.some(arr => arr => 0);
console.log(`Is there at least one positive number in the array?: ${PositiveNumber}`);

//3.Მოცემულია მასივი:let words = ['Madrid', 'Rome', 'Milan', 'Berlin'];
//Filter მეთოდის საშუალებით დააბრუნეთ მასივი, რომელიც შედგება ისეთი სიტყვებისგან რომელიც შეიცავს ასო m-ს ან M-ს;
let words = ['Madrid', 'Rome', 'Milan', 'Berlin'];
let containsM = word => word.toLowerCase().includes('m');
let filteredWords = words.filter(containsM);
console.log(filteredWords);

//4.შექმენით htmlში დივი, მიანიჭეთ id და ჯსდან ამ დივში დაამატეთ შემდეგი html სტრუქტურა:
//div class=“wraper”
//<img src=“რაღაცა სურათის მისამართი დაამატეთ” alt=“image”>
//<h2 class=“title”> image title </h2>
//</div>
const dynamicDiv = document.getElementById('dynamicDiv');
const innerHTML = `
  <div class="wrapper">
    <img src="https://www.br.de/radio/bayern1/foto-glaskugel-lensball-100~_v-img__3__4__xl_-f4c197f4ebda83c772171de6efadd3b29843089f.jpg?version=cbb0b" alt="image">
    <h2 class="title">image title</h2>
  </div>
`;
dynamicDiv.innerHTML = innerHTML;

//5.მოცემულია სტრინგი - ‘12345’, გაიგეთ ამ რიცხვებსის ჯამი. ( უნდა გადაიყავნოთ მასივში, გათვალოთ ჯამი, და შემდგ ეს სტრინგი გადაიყავნოთ რიცხვში)
const string = '12345';
const numbers = string.split('');
const sum = numbers.reduce((accumulator, currentValue) => accumulator + parseInt(currentValue), 0);
const number = Number(sum);
console.log(number);

//6.მოცემულია მასივი, შემდეგი მნიშვნელობებით -let array = ['html', 100, 'css', 'javascript', 25, 10, 'python', 11]; გამოიტანეთ მარტო ციფრები;
const array = ['html', 100, 'css', 'javascript', 25, 10, 'python', 11];
const Numbers = [];
for (const element of array) {
    if (typeof element === 'number') {
        Numbers.push(element);
    }
}
console.log(Numbers);

//7.მოცემულია მასიცი:let array2 = [14, 150, 'css', null, 'javascript', 25];
//შექმენით ახალი მასივი map ფუნქციის საშუალებით შემდეგი ლოგიკით: თუ ელემენტი არის რიცხვი ამ მასივში უნდა იყოს ამ რიცხვის კვადრატი. თუ ელემენტი არის სტირნგი, მაშინ ახალ მასივში უნდა იყოს ეს ტექსტი დიდი ასოებით. სხვა შემთხვევაში ელემენტი უნდა დაემატოს უცვლელად.
const array2 = [14, 150, 'css', null, 'javascript', 25];

const newArray = array2.map(element => {
    if (typeof element === 'number') {
        return element ** 2;
    } else if (typeof element === 'string') {
        return element.toUpperCase();
    } else {
        return element;
    }
});
console.log(newArray);

//8.მოცემულია სტრინგი - ‘javascript’, მიიღეთ შემოტრიალებული ვარიანტი მეთოდების გარეშე ( for loop ით)
const originalString = 'javascript';
let wrappedString = '';

for (let i = 0; i < originalString.length; i++) {
    wrappedString += originalString[i] + '_';
}
console.log(wrappedString);

//9.მოცემულია სტრინგი: let info= ‘Good day”, ამოიღეთ სიტყვა day და ჩასვით ახალ ცვლადში slice მეთოდის საშუელებით.
let info = 'Good day';
let newVariable = info.slice(5); 
info = info.slice(0, 5);
console.log(info); 
console.log(newVariable); 

//10.დაწერეთ ფუნქცია, რომელიც პარამეტრსდ იღებს სტრინგს, და დააბრუნებს ჩაწერილი სტრინგის სიგრძეს.
function getStringLength(inputString) {
    return inputString.length;
  }
  const myString = 'Hello, world!';
  const length = getStringLength(myString);
  console.log(`Length of the string: ${length}`);

  //11.Prompt ფუნქციის საშუალებით კითხეთ მომხმარებელს შემდეგი კითხვა: საქართველოს დედაქალაქი? სწორი პასუხი ჩაწერეთ პატარა ასობიეთ და  შეინახეთ 
  //ცვლადში. როდესაც მიიღებთ პასუხს მომხმარებლისგან, გადაიყვანეთ ეს პასუხი პატარა ასოებად და შეადარეთ სწორ პასუხს. თუ მომხმარებლის პასუხი სწორია, დაბეჭდეთ სწორია, თუ არა მაშინ დაბეჭდეთ არასწორია.
 // Prompting the user for the capital of Georgia
var userResponse = prompt("Capital of Georgia?").toLowerCase();
var correctAnswer = "tbilisi";
if (userResponse === correctAnswer) {
    console.log("Correct");
} else {
    console.log("False");
}

//12.მოცემულია: let link = “https://google.com”. დაწერეთ ფუნქცია, რომელიც პარამეტრად იღებს ამ ცვლადს, და შეამოწმეთ indexof მეთოდის საშუალებით არის თუ არა ამ
// ცვლადში “https://“. თუ კი გამოიტანეთ - კი მოიცავს, თუ არა - არა, არ მოიცავს.
function checkHttps(link) {
    if (link.indexOf("https://") !== -1) {
      return "yes, it includes";
    } else {
      return "no, it does not include";
    }
  }
  let link = "https://google.com";
  console.log(checkHttps(link)); 
  
  //13.მოცემულია მასივი, რომელშიც არის ერთზე მეტი მნიშვნელობა, მაგრამ კონკრეტულად რამდენი არ ვიცით, შეიძლება 100 ან 200 ან 10. მაგ: let fruits = [“apple”, “mango”, “avocado”,”kiwi”] 
   //splice მეთოდის საშუალებით წაშალეთ ბოლოს წინა მნიშვნელობა და მავის მავივრად ჩასვით “strawberry”. 
   let fruits = ["apple", "mango", "avocado", "kiwi"];
let indexToDelete = fruits.indexOf("avocado");
if (indexToDelete !== -1) {
    fruits.splice(indexToDelete, 1);
}
let indexToInsertBefore = fruits.indexOf("kiwi");
if (indexToInsertBefore !== -1) {
    fruits.splice(indexToInsertBefore, 0, "strawberry");
}
console.log(fruits);
