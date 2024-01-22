/*0->Rock ,1->Paper,2->scissor
*/
let scoreStr=JSON.parse(localStorage.getItem('score'));
let score;
score = (scoreStr)?score=scoreStr:
 score={
    win:0,
    lost:0,
    tie:0,
};

localStorage.setItem('score',JSON.stringify(score));
score.displayscore=function(){
    document.querySelector('p').innerHTML=`<br>Computer Score : ${score.lost} <br><br>
     Your Score : ${score.win} 
     <br><br> Tie Matches : ${score.tie}`;

}





function Rock(b){
let r=Math.floor(Math.random() * 3);
if(b==r){
    document.querySelector('h2').innerHTML='Your Choice :  Rock <br><br> Computer Choice : Rock';
    document.querySelector('p').innerHTML='Match draw';
    score.tie+=1;
    localStorage.setItem('score',JSON.stringify(score));
}
else if(r==1){
    document.querySelector('h2').innerHTML='Your Choice : Rock <br><br>Computer Choice : Paper';
    document.querySelector('p').innerHTML='You Loose';
     score.lost+=1;
     localStorage.setItem('score',JSON.stringify(score));
    
}
else if(r==2) {
    document.querySelector('h2').innerHTML='Your Choice : Rock<br><br> Computer Choice : Scissor';
    document.querySelector('p').innerHTML='You Win';
    score.win+=1;
    localStorage.setItem('score',JSON.stringify(score));
}else{
    document.querySelector('p').innerHTML='Invalid';
}
score.displayscore();



}
function paper(ba){
let r=Math.floor(Math.random() * 3);
if(ba==r){
    document.querySelector('h2').innerHTML='Your Choice : Paper <br> <br>Computer Choice : Paper';
    document.querySelector('p').innerHTML='Match draw';
    score.tie+=1;
    localStorage.setItem('score',JSON.stringify(score));
}
else if(r==2){
    document.querySelector('h2').innerHTML='Your Choice : Paper <br><br> Computer Choice : Scissor';
    document.querySelector('p').innerHTML='You Loose';
    score.lost+=1;
    localStorage.setItem('score',JSON.stringify(score));
}
else if(r==0) {
    document.querySelector('h2').innerHTML='Your Choice : Paper <br><br> Computer Choice : Stone';
    document.querySelector('p').innerHTML='You Win';
    score.win+=1;
    localStorage.setItem('score',JSON.stringify(score));
}else{
    document.querySelector('p').innerHTML='Invalid';
}

score.displayscore();
}
function scissor(s){
let r=Math.floor(Math.random() * 3);
if(s==r){
    document.querySelector('h2').innerHTML='Your Choice : Scissor <br><br> Computer Choice : Scissor';
    document.querySelector('p').innerHTML='Match draw';
    score.tie+=1;
    localStorage.setItem('score',JSON.stringify(score));
}
else if(r==0){
    document.querySelector('h2').innerHTML='Your Choice : Scissor <br><br> Computer Choice : Rock';
    document.querySelector('p').innerHTML='You Loose';
    score.lost+=1;
    localStorage.setItem('score',JSON.stringify(score));
}
else if(r===1) {
    document.querySelector('h2').innerHTML='Your Choice : Scissor <br><br> Computer Choice : Paper';
    document.querySelector('p').innerHTML='You Win';
    score.win+=1;
    localStorage.setItem('score',JSON.stringify(score));
}else{
    document.querySelector('p').innerHTML='Invalid';
}
score.displayscore();

}

function reset(){
score.win=0;
score.lost=0;
score.tie=0;
localStorage.clear();
document.querySelector('h2').innerHTML='';
score.displayscore();

}
