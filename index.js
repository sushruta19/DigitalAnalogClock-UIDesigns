let hr = document.querySelector("#hr");
let mn = document.querySelector("#mn");
let sc = document.querySelector("#sc");

let hour = document.querySelector("#hour");
let minute = document.querySelector("#minute");
let second = document.querySelector("#second");
let ampm = document.querySelector("#ampm");

setInterval(() => {
  let day = new Date();
  let hh = day.getHours();
  let mm = day.getMinutes();
  let ss = day.getSeconds();
  hr.style.transform = `rotate(${hh*30 + (mm/2)}deg)`;
  mn.style.transform = `rotate(${mm*6}deg)`;
  sc.style.transform = `rotate(${ss*6}deg)`;

  //Digital Clock
  //show PM at 12:00:00
  let am = (hh >= 12) ? 'PM' : 'AM';

  //convert 24 hour clock to 12 hour clock
  hh = (hh > 12) ? hh - 12 : hh;

  //add zero before single digit number
  hh = (hh < 10) ? "0" + hh : hh;
  mm = (mm < 10) ? "0" + mm : mm;
  ss = (ss < 10) ? "0" + ss : ss;

  hour.textContent = hh;
  minute.textContent = mm;
  second.textContent = ss;
  ampm.textContent = am;
})