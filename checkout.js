document.querySelector("form").addEventListener("submit",Payfun);

function Payfun(event){
event.preventDefault();
let payObj={
  name: document.querySelector("#name").value,
  cardNo: document.querySelector("#cardNo").value,
  cvv: document.querySelector("#cvv").value,
  date:document.querySelector("#date").value
}
  let nameStr= payObj.name.toString();
let cvvStr= payObj.cvv.toString();
 if(payObj.name==""||payObj.cardNo==""||payObj.cvv==""||payObj.date==""){
    alert("fill wright credentials");
} else if(nameStr.length!=14&&cvvStr.length!=3){
    alert("card number or cvv incorrect");
}
  else{

    alert('Otp send successfully')
     
      document.querySelector('form').style.display = "none";
      document.getElementById('otp_div').style.display = "flex";

  }
 
}


let btn = document.getElementById('enter');

btn.onclick = () => {
let otp = document.getElementById('otp').value;

if(otp == 1234){
    alert('Payment Successful')
    window.location.href="index.html"
}
else{
    alert ("otp does not match")
   document.getElementById('resend').style.display = "block";
   document.getElementById('enter').style.display="none";
   document.getElementById('otp').style.display="none"
}
}

let resend = document.getElementById('resend');
resend.onclick = () => {
    alert('otp successfully sended again');
    document.getElementById('resend').style.display = "none";
    document.getElementById('enter').style.display="block";
    document.getElementById('otp').style.display="block"

}