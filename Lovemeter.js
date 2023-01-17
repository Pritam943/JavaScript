prompt("What is your name??");
prompt("What is their name??");

var Lovemeter = Math.random() * 100;
Lovemeter = Math.floor(Lovemeter) + 1;

if (Lovemeter > 70) {
  alert("Your love score is :" + Lovemeter + "%" + "your love is like Gold.");
} else {
  alert("Your love score is :" + Lovemeter + "%" + "your love is OK type");
}
