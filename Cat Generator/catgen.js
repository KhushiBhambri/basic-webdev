function age(){
    var yob = prompt("enter year of birth ");
    var a= (2021-yob)*365;
    var h4=document.createElement('h4');
    h4.setAttribute('id','AID');
    var ans=document.createTextNode('YOU ARE '+a+' DAYS OLD.');
    h4.appendChild(ans);
    document.getElementById("result").appendChild(h4);
}
function reset(){
    document.getElementById("AID").remove();
}


function generateCat(){
   var i= document.createElement('img');
   var d = document.getElementById('gencat');
   i.src="http://thecatapi.com/api/images/get?format=src&type=gif";
   d.append(i);
}
