const APIURL = 'https://opentdb.com/api.php?amount=10'

const main = document.getElementById('main')
const entire = document.getElementById('entire')
const List = document.getElementById('diffi')
const Topic=document.getElementById('Topic')

var score=0;
var ques=[];
async function getques(diff,cat) {
    try {
        const { data } = await axios(APIURL+'&category='+cat +'&difficulty='+ diff+'&type=multiple')
      if(data.results.length===0){
        createErrorCard('☹ SORRY! ☹ <br/> Questions Unavailable in this context<br/> Try changing Difficulty or Topic📰')
      }
      else 
      {
        for(let i=0;i<data.results.length;i++){
          var random= Math.floor(Math.random()*4);
          var options = new Array(4);
          options[random]=data.results[i].correct_answer;
          let k=0;
          for(let j=0;j<4;j++){   
            if(j!==random) options[j]=data.results[i].incorrect_answers[k++];
          } 
          const obj={
             q:data.results[i].question,
             correct:random,
             mcq:options
          }
          ques.push(obj);
      }
        quiz(0);
      }      
    } catch(err) { 
           if(response_code=1)
           createErrorCard('☹ OOPS!! ☹<br/> An error occured! ')
           console.log(err);        
    }
}

function quiz(id){
   if(id<9) createCard(id);
   else createResult();
}

function check(correct,id){
        console.log("correct choice was: ",correct+1);
  const rbs = document.querySelectorAll('input[name="choice"]');
            for (const rb of rbs) {
                if (rb.checked) {
                  // console.log(rb.value);
                    if(rb.value==correct) {
                      score++;}
                    break;
                }
            }
            quiz(id+1); 

}
function createCard(id){ 
    const cardhtml = `
    <div class="card">  
    <div class="user-info">
      <div class="head">
      <h5>Current Score: ${score} 📑</h5>
      <h4>Question ${id+1}</h4>
      </div>     
      <p>${ques[id].q}</p>    
      <form>
        <input type="radio" name="choice" value="0">${ques[id].mcq[0]}<br/>
        <input type="radio" name="choice" value="1">${ques[id].mcq[1]}<br/>
        <input type="radio" name="choice" value="2">${ques[id].mcq[2]}<br/>
        <input type="radio" name="choice" value="3">${ques[id].mcq[3]}<br/>
        
        <div style="display:flex;">
        <button class="btn btnform" type="button" onclick="createResult()">End</button>
        <button class="btn btnform" type="button" onclick="check(${ques[id].correct},${id})">Next</button>       
        </div>
      </form>
      <div id="repos"></div>
    </div>
  </div>
  `
  entire.innerHTML = cardhtml
}
function createResult(){
  const cardHTML = `
  <div class="card" style="font-size:1rem;Text-align:center;">
      <h3>Thankyou for giving this Quiz! 📝<br/><br> We Appreciate Your Time and Efforts👏🏻</h3>
      <h2> Your Score of the quiz is :<br/> ${score}/10 <br/>
      <h5> ♥✨ Please Visit Again! ✨♥ </h5>
      <button class="btn btnform" onclick="location.reload();">Start Again</button>
      </h2>
  </div>
`
entire.innerHTML = cardHTML
}
function createErrorCard(msg) {
  const cardHTML = `
      <div class="card" style="font-size:1rem;Text-align:center;">
          <h3>${msg}</h3>
      </div>
  `
  main.innerHTML = cardHTML
}

function difficulty(){
    if(List.selectedIndex!==0 && Topic.selectedIndex!==0) {
        const diff = List.options[List.selectedIndex].text;
        const cat = Topic.options[Topic.selectedIndex].value;
        getques(diff,cat);
    }
    else{
        createErrorCard('👆🏻 👆🏻 <br/>Please Select Difficulty level and Topic before you proceed!')
    }
}
   
