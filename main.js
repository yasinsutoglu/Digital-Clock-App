const hour = document.querySelector("#hour")

const minute = document.querySelector("#minute")

const second = document.querySelector("#second")

const pmAm = document.querySelector("#pmAm")

const body = document.querySelector("body")

let hours = 0



const showTime =()=> {
// hours = new Date().getHours()
hours = new Date().getHours();
hour.innerText = hours
minute.innerText = new Date().getMinutes()
second.innerText = new Date().getSeconds();

if(hour.innerText>12){
    if (Number(hour.innerText) - 12 < 10) {
      hour.innerText = `0${Number(hour.innerText) - 12}`;

    }else {
      hour.innerText = `${Number(hour.innerText) - 12}`;
        
    }
    pmAm.innerText= "PM"
}else {
    if(hour.innerText<10) {
         hour.innerText = `0${Number(hour.innerText)}`;
    }
    pmAm.innerText = "AM"
}

if(second.innerText<10) {
    second.innerText = `0${Number(second.innerText)}`
}
if(minute.innerText<10) {
    minute.innerText = `0${Number(minute.innerText)}`
}

if (hours < 12 && hours > 5) {
  body.style.background =
    "url(./img/morning.jpg) no-repeat center center / cover";
}else if(hours > 12 && hours < 18){
 
  body.style.background =
    "url(./img/afternoon-1.jpg) no-repeat center center / cover";
  body.style.color = "white";
} 
else if (hours > 18 && hours < 20) {
  body.style.background =
    "url(./img/evening-2.webp) no-repeat center center / cover";
  body.style.color = "white";
  document.querySelector("#timer").style.boxShadow =
    "2px 2px 10px 5px #fff";
}else {
     body.style.background =
       "url(./img/night.jpg) no-repeat center center / cover";
     body.style.color = "white";
     document.querySelector("#timer").style.boxShadow = "2px 2px 10px 5px #fff";
}

}

setInterval(showTime, 1000);


