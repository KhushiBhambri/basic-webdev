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
 var images={
    'rock': document.getElementById('rock').src,
    'paper':document.getElementById('paper').src,
    'scissors': document.getElementById('scissors').src
}
function rps(yourimage){
    var human=yourimage.id;
    var comp= ['rock','paper','scissors'][Math.floor(Math.random()*3)];
    console.log(comp);
    

    document.getElementById("box").remove();
    var message={
        'text':'hi',
        'color':'red'
    }


    if(human===comp){    //'5'==5 is true but '5'===5 is false
        message['text']="TIED UP!";
        message['color']='yellow';
    }
    else{
        switch(human){
            case "rock": {
                if(comp==="scissors") message['text']="YOU WON!";
                else message['text']="YOU LOST!";
                break;
            }
            case "paper": {
                if(comp==="scissors")  message['text']="YOU LOST!";
                else message['text']="YOU WON!";
                break;
            }
            default :{
                    if(comp==="paper") message['text']="YOU WON!";
                    else message['text']="YOU LOST!";
            }

        }
    }
    if(message['text']==="YOU WON!"){
        message['color']='green';
    }


/*
var data={
    'rock':{'scissors':1,'rock':0.5,'paper':0},
    'paper':{'scissors':0,'rock':1,'paper':0.5},
    'scissors' :{'scissors':0.5,'rock':0,'paper':1}
}
     var yourscore = data[human][comp];
    console.log(yourscore);
*/

// var ans=document.createTextNode(message);
  
// 
var btn = document.createElement('btn');
btn.id='btn';
btn.className='btndiv';
{/* <button class ='btn btn-danger' onclick='history.go(0)'>refresh</button> */}
btn.innerHTML="<button class ='btn btn-danger'><a href='http://127.0.0.1:5500/portfolio/MyPortfolio.html#projects' style='color:white;'>Home Page</a></button><button class ='btn btn-danger' onclick='resett()'>reset</button>";
var div = document.createElement('div');

div.id = 'divbox';
//div.innerHTML = 'Here!';
div.className = 'borderpad';
//document.body.appendChild(div);
div.innerHTML = "<img class ='ishadow' src ='"+images[human]+"' height= 250 width=150 '><h1 style='color:"+message['color']+"; padding: 50px;'>"+message['text']+"</h1><img class ='ishadow' src='"+images[comp]+"'height= 250 width=150 style='box-shadow: 0px 4px 8px 0 rgb(204,39,39);' >";
//div.appendChild(yourimage);

document.getElementById("rps container").appendChild(div);
document.getElementById("rps container").appendChild(btn);
}

function resett(){

    document.getElementById("divbox").remove();
    document.getElementById("btn").remove();
    var div = document.createElement('div');
    div.id ='box';
    div.className = 'flex-box';
    div.innerHTML ="<img id ='rock' src='"+images['rock']+"'onclick='rps(this)'><img id='paper' src='"+images['paper']+"'onclick='rps(this)'><img id='scissors' src='"+images['scissors']+"' onclick='rps(this)'>";
    document.getElementById("rps container").appendChild(div);
    
}
function generateCat(){
    var i= document.createElement('img');
    var d = document.getElementById('gencat');
    i.src="http://thecatapi.com/api/images/get?format=src&type=gif";
    d.append(i);
}
