
var t = Number(document.getElementById("high").textContent);
var s = Number(document.getElementById("windS").textContent);
var f = (35.74 + (0.6215 * t) - (35.75 * Math.pow(s,0.16)) + (0.4275 * t * (Math.pow(s,0.16))));
var final = Math.round(f) + " °F";

document.getElementById('windC').innerHTML = final;
