function showDate()
{
 let d = new Date();

 document.getElementById("date").innerHTML = d;
}

function timer()
{
 let festDate =
 new Date("May 30, 2026 09:00:00").getTime();

 setInterval(function()
 {
  let now = new Date().getTime();

  let diff = festDate - now;

  let days =
  Math.floor(diff / (1000*60*60*24));

  let hours =
  Math.floor((diff % (1000*60*60*24))
  / (1000*60*60));

  let minutes =
  Math.floor((diff % (1000*60*60))
  / (1000*60));

  let seconds =
  Math.floor((diff % (1000*60))
  / 1000);

  document.getElementById("timer").innerHTML =
  days + " Days " +
  hours + " Hours " +
  minutes + " Minutes " +
  seconds + " Seconds";

 },1000);
}

let total = 0;
let oldData = "";

function showTeam()
{
 let p =
 document.getElementById("ptype").value;

 if(p == "Team")
 {
  document.getElementById("teamdiv")
  .style.display = "block";
 }
 else
 {
  document.getElementById("teamdiv")
  .style.display = "none";
 }
}

function register()
{
 let name =
 document.getElementById("name").value;

 let reg =
 document.getElementById("reg").value;

 let email =
 document.getElementById("email").value;

 let mobile =
 document.getElementById("mobile").value;

 let event =
 document.getElementById("event").value;

 let ptype =
 document.getElementById("ptype").value;

 let team =
 document.getElementById("teamname").value;

 let members =
 document.getElementById("members").value;

 let namePattern =
 /^[A-Za-z ]+$/;

 let emailPattern =
 /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

 let mobilePattern =
 /^[0-9]{10}$/;

 let regPattern =
 /^[A-Z]{2}\.[A-Z]{2}\.[A-Z0-9]+$/;

 if(!name.match(namePattern))
 {
  alert("Invalid Name");
  return;
 }

 if(!email.match(emailPattern))
 {
  alert("Invalid Email");
  return;
 }

 if(!mobile.match(mobilePattern))
 {
  alert("Invalid Mobile Number");
  return;
 }

 if(!reg.match(regPattern))
 {
  alert("Invalid Register Number");
  return;
 }

 if(event == "")
 {
  alert("Select Event");
  return;
 }

 if(event == "Quiz")
 {
  alert("Registration Closed");
  return;
 }

 let duplicate = reg + event;

 if(oldData.indexOf(duplicate) != -1)
 {
  alert("Duplicate Registration");
  return;
 }

 if(ptype == "Team")
 {
  if(team == "")
  {
   alert("Enter Team Name");
   return;
  }

  if(members < 2 || members > 4)
  {
   alert("Team Size 2 to 4");
   return;
  }
 }

 oldData = oldData + duplicate;

 total++;

 document.getElementById("msg").innerHTML =
 "Registration Successful";

 document.getElementById("count").innerHTML =
 total;

 document.getElementById("out").innerHTML +=
 "Name: " + name + "<br>" +
 "Register No: " + reg + "<br>" +
 "Event: " + event + "<br><br>";

 document.forms[0].reset();

 document.getElementById("teamdiv")
 .style.display = "none";
}

let ratingTotal = 0;
let ratingCount = 0;

function feed()
{
 let name =
 document.getElementById("fname").value;

 let reg =
 document.getElementById("freg").value;

 let event =
 document.getElementById("fevent").value;

 let rating =
 document.getElementById("rating").value;

 let comment =
 document.getElementById("comment").value;

 if(reg == "")
 {
  alert("Register Number Required");
  return;
 }

 if(event == "")
 {
  alert("Select Event");
  return;
 }

 if(rating == "")
 {
  alert("Select Rating");
  return;
 }

 if(comment.length < 20)
 {
  alert("Minimum 20 Characters");
  return;
 }

 ratingTotal =
 ratingTotal + parseInt(rating);

 ratingCount++;

 let average =
 ratingTotal / ratingCount;

 document.getElementById("avg").innerHTML =
 average.toFixed(2);

 document.getElementById("fmsg").innerHTML =
 "Feedback Submitted Successfully";

 document.getElementById("fout").innerHTML +=
 "Name: " + name + "<br>" +
 "Event: " + event + "<br>" +
 "Rating: " + rating + "<br><br>";

 document.forms[0].reset();
}
From: DASARI JAYAVARDHAN REDDY-[BL.AI.U4AID24018] <bl.ai.u4aid24018@bl.students.amrita.edu>
Sent: Tuesday, May 19, 2026 09:48
To: THANGI VISHNU VARDHAN-[BL.AI.U4AID24069] <bl.ai.u4aid24069@bl.students.amrita.edu>
Subject:
 
function showDate()
{
 let d = new Date();

 document.getElementById("date").innerHTML = d;
}

function timer()
{
 let festDate =
 new Date("May 30, 2026").getTime();

 setInterval(function()
 {

  let now = new Date().getTime();

  let diff = festDate - now;

  let days =
  Math.floor(diff / (1000*60*60*24));

  document.getElementById("timer").innerHTML =
  days + " Days Left";

 },1000);
}

let total = 0;
let oldData = "";

function showTeam()
{
 let p =
 document.getElementById("ptype").value;

 if(p == "Team")
 {
  document.getElementById("teamdiv")
  .style.display = "block";
 }
 else
 {
  document.getElementById("teamdiv")
  .style.display = "none";
 }
}

function register()
{
 let name =
 document.getElementById("name").value;

 let reg =
 document.getElementById("reg").value;

 let email =
 document.getElementById("email").value;

 let mobile =
 document.getElementById("mobile").value;

 let event =
 document.getElementById("event").value;

 let ptype =
 document.getElementById("ptype").value;

 let team =
 document.getElementById("teamname").value;

 let members =
 document.getElementById("members").value;

 let namePattern =
 /^[A-Za-z ]+$/;

 let emailPattern =
 /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

 let mobilePattern =
 /^[0-9]{10}$/;

 if(!name.match(namePattern))
 {
  alert("Invalid Name");
  return;
 }

 if(!email.match(emailPattern))
 {
  alert("Invalid Email");
  return;
 }

 if(!mobile.match(mobilePattern))
 {
  alert("Invalid Mobile");
  return;
 }

 if(event == "Quiz")
 {
  alert("Registration Closed");
  return;
 }

 let duplicate = reg + event;

 if(oldData.indexOf(duplicate) != -1)
 {
  alert("Duplicate Registration");
  return;
 }

 if(ptype == "Team")
 {
  if(team == "")
  {
   alert("Enter Team Name");
   return;
  }

  if(members < 2 || members > 4)
  {
   alert("Team Size 2 to 4");
   return;
  }
 }

 oldData = oldData + duplicate;

 total++;
 document.getElementById("msg").innerHTML =
 "Registration Successful";

 document.getElementById("count").innerHTML =
 total;

 document.getElementById("out").innerHTML +=
 "Name: " + name + "<br>" +
 "Event: " + event + "<br><br>";
}

let ratingTotal = 0;
let ratingCount = 0;

function feed()
{
 let reg =
 document.getElementById("freg").value;

 let event =
 document.getElementById("fevent").value;

 let rating =
 document.getElementById("rating").value;

 let comment =
 document.getElementById("comment").value;

 if(reg == "")
 {
  alert("Enter Register Number");
  return;
 }

 if(event == "")
 {
  alert("Select Event");
  return;
 }

 if(rating == "")
 {
  alert("Select Rating");
  return;
 }

 if(comment.length < 20)
 {
  alert("Minimum 20 Characters");
  return;
 }

 ratingTotal =
 ratingTotal + parseInt(rating);

 ratingCount++;

 let avg =
 ratingTotal / ratingCount;

 document.getElementById("avg").innerHTML =
 avg.toFixed(2);

 document.getElementById("fmsg").innerHTML =
 "Feedback Submitted";
}