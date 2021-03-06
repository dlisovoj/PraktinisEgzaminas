"use strict";

var buttons = document.getElementsByClassName("tab");
var midbutton = document.getElementById("midbutton");
var namemid = document.getElementById("namemid");
var lastnamemid = document.getElementById("lastnamemid");
var phonemid = document.getElementById("phonemid");
var phonebot = document.getElementById("phonebot");
var namebot = document.getElementById("namebot");
var lastnamebot = document.getElementById("lastnamebot");
var link1 = document.getElementById("link1");
var link2 = document.getElementById("link2");
var link3 = document.getElementById("link3");
var link4 = document.getElementById("link4");
var link5 = document.getElementById("link5");
var send = document.getElementById("send");

for (var x of buttons){
  x.addEventListener("click", function(){
    for(var y of buttons){
      y.classList.remove("active");
    }
    this.classList.add("active");
    var index = this.getAttribute("index");
    swiper2.slideTo(index, 1000);
  });
}

link1.addEventListener("click", function(){
  setTimeout(function () {
    window.scrollTo({
      top: 750,
      left: 0,
      behavior: 'smooth'
      });
    }, 10);
});

link2.addEventListener("click", function(){
  setTimeout(function () {
    window.scrollTo({
      top: 1350,
      left: 0,
      behavior: 'smooth'
      });
    }, 10);
});

link3.addEventListener("click", function(){
  setTimeout(function () {
    window.scrollTo({
      top: 2600,
      left: 0,
      behavior: 'smooth'
      });
    }, 10);
});

link4.addEventListener("click", function(){
  setTimeout(function () {
    window.scrollTo({
      top: 3450,
      left: 0,
      behavior: 'smooth'
      });
    }, 10);
});

link5.addEventListener("click", function(){
  setTimeout(function () {
    window.scrollTo({
      top: 4200,
      left: 0,
      behavior: 'smooth'
      });
    }, 10);
});

midbutton.addEventListener("click", function(){
      if (namemid.value == 0 && lastnamemid.value == 0 && phonemid.value == 0) {
        document.getElementById("midbutton").innerText = "You must enter the required information";
        midbutton.classList.add("error");
        midbutton.disabled = true;
        setTimeout(function(){
        midbutton.classList.remove("error");
        document.getElementById("midbutton").innerText = "GET STARTED";
        midbutton.disabled = false;
      }, 2000);
      } else if (namemid.value == 0) {
        document.getElementById("midbutton").innerText = "You must enter your name";
        midbutton.classList.add("error");
        midbutton.disabled = true;
        setTimeout(function(){
        midbutton.classList.remove("error");
        document.getElementById("midbutton").innerText = "GET STARTED";
        midbutton.disabled = false;
        }, 2000);
      } else if (lastnamemid.value == 0) {
        document.getElementById("midbutton").innerText = "You must enter your last name";
        midbutton.classList.add("error");
        midbutton.disabled = true;
        setTimeout(function(){
        midbutton.classList.remove("error");
        document.getElementById("midbutton").innerText = "GET STARTED";
        midbutton.disabled = false;
        }, 2000);
      } else if (phonemid.value == 0) {
        document.getElementById("midbutton").innerText = "You must enter your phone number";
        midbutton.classList.add("error");
        midbutton.disabled = true;
        setTimeout(function(){
        midbutton.classList.remove("error");
        document.getElementById("midbutton").innerText = "GET STARTED";
        midbutton.disabled = false;
        }, 2000);
      }
  });

send.addEventListener("click", function(){
      if (namebot.value == 0 && lastnamebot.value == 0 && phonebot.value == 0) {
        send.classList.add("errorsend");
        send.disabled = true;
        setTimeout(function(){
        document.getElementById("send").innerText = "You must enter the required information";
      }, 200);
        setTimeout(function(){
        send.classList.remove("errorsend");
        document.getElementById("send").innerText = "SEND";
        send.disabled = false;
      }, 2000);
      } else if (namebot.value == 0) {
        send.classList.add("errorsend");
        send.disabled = true;
        setTimeout(function(){
        document.getElementById("send").innerText = "You must enter your name";
      }, 200);
        setTimeout(function(){
        send.classList.remove("errorsend");
        document.getElementById("send").innerText = "SEND";
        send.disabled = false;
      }, 2000);
      } else if (lastnamebot.value == 0) {
        send.classList.add("errorsend");
        send.disabled = true;
        setTimeout(function(){
        document.getElementById("send").innerText = "You must enter your last name";
      }, 200);
        setTimeout(function(){
        send.classList.remove("errorsend");
        document.getElementById("send").innerText = "SEND";
        send.disabled = false;
      }, 2000);
      } else if (phonebot.value == 0) {
        send.classList.add("errorsend");
        send.disabled = true;
        setTimeout(function(){
        document.getElementById("send").innerText = "You must enter your phone number";
      }, 200);
        setTimeout(function(){
        send.classList.remove("errorsend");
        document.getElementById("send").innerText = "SEND";
        send.disabled = false;
      }, 2000);
      }
  });
