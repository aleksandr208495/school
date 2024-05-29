let captcha;
let alphabets = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz";
console.log(alphabets.length);




 generate = () => {
// console.log(status)
let first = alphabets[Math.floor(Math.random() * alphabets.length)];
let second = Math.floor(Math.random() * 10);
let third = Math.floor(Math.random() * 10);
let fourth = alphabets[Math.floor(Math.random() * alphabets.length)];
let fifth = alphabets[Math.floor(Math.random() * alphabets.length)];
let sixth = Math.floor(Math.random() * 10);
captcha = first.toString()+second.toString()+third.toString()+fourth.toString()+fifth.toString()+sixth.toString();
console.log(captcha);
document.getElementById('generated-captcha').value = captcha;
// document.getElementById("entered-captcha").value = '';

}

function formerror (errortext) {
    let errors = document.getElementById("errors");
    errors.replaceChildren();
    let p = document.createElement("h2");
    p.textContent = errortext;
    errors.append(p);
    
   
}

formcheck = (event) => {
    // capcha check
    

    let generated = document.getElementById('generated-captcha').value
    let userValue = document.getElementById("input-captcha").value;
    
    if (generated != userValue) {
        formerror("капча неверная")
        event.preventDefault();
    }
    alert("Обращение отправлено")
    // event.preventDefault();
}


document.onload = generate();
const form = document.getElementById("elcallform");
form.addEventListener("submit", formcheck);
 check = () => {
// console.log(status)
let userValue = document.getElementById("entered-captcha").value;
console.log(captcha);
console.log(userValue);
if(userValue == captcha){
    status.innerText = "Correct!!"
}else{
    status.innerText = "Try Again!!"
    document.getElementById("entered-captcha").value = '';
}
}


