function talk(){
var know={
    "who are you": "Hello ,Codewith_random here ",
    "How are you": "Good:) ",
    "what can ı do for you": "Please give us a link ",
    "Your Followers": "ı have my family 5000 members,ı dont have follewer",
    "ok": "Thank you so much ",
    "Bye": "Okay! Will meet soon...  "
}
 var user=document.getElementById('userBox').ariaValueMax;
 document.getElementById('ChatLog').innerHTML=user + "<br/>";
 if(user in know){
    document.getElementById('ChatLog').innerHTML=know[user]+"<br/>";
 } else{
    document.getElementById('ChatLog').innerHTML="Sorry ı didn't understand <br/> ";
 }

}