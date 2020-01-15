var score = 0
var i = 1
var ans = 1
function submitAnswer(){
    y = document.getElementById("qans").value
    var yy=y.toUpperCase();
    x = document.getElementById("question").value
if (ans===1){
    y = document.getElementById("qans").value
    if(yy==="D"){
        document.getElementById("question").value="You are right"
        score++
      
        var audio =  new Audio('ding.mp3');
audio.play();
        
        var myImage = new Image(50, 50);
myImage.src = 'smiley.png';
document.body.appendChild(myImage);
    }
    
    else {
        document.getElementById("question").value="You are wrong"
var myImage = new Image(50, 50);
myImage.src = 'sad.png';
document.body.appendChild(myImage);
    
        var audio = new Audio('buzz.mp3');
audio.play();
    
    }
    document.view.qscore.value=score
}
else if (ans===2){ 
	y = document.getElementById("qans").value
    if(yy==="A"){
        document.getElementById("question").value="You are right"
         score++
        var myImage = new Image(50, 50);
myImage.src = 'smiley.png';
document.body.appendChild(myImage);
    
    }
    else {
        document.getElementById("question").value="You are wrong"
        var myImage = new Image(50, 50);
myImage.src = 'sad.png';
document.body.appendChild(myImage);
    }
    document.view.qscore.value=score
}
    

else if (ans===3){ 
	y = document.getElementById("qans").value
    if(yy==="C"){
        document.getElementById("question").value="You are right"
         score++
        
    var myImage = new Image(50, 50);
myImage.src = 'smiley.png';
document.body.appendChild(myImage);
      
    }
    else {
        document.getElementById("question").value="You are wrong"
        var myImage = new Image(50, 50);
myImage.src = 'sad.png';
document.body.appendChild(myImage);
    }
    document.view.qscore.value=score
}
    
else if (ans===4){ 
	y = document.getElementById("qans").value
    if(yy==="D"){
        document.getElementById("question").value="You are right"
         score++
        var myImage = new Image(50, 50);
myImage.src = 'smiley.png';
document.body.appendChild(myImage);
        
    }
    else {
        document.getElementById("question").value="You are wrong"
         var myImage = new Image(50, 50);
myImage.src = 'sad.png';
document.body.appendChild(myImage);
    }
    document.view.qscore.value=score
}   
    
else if (ans===5){ 
	y = document.getElementById("qans").value
    if(yy==="b"){
        document.getElementById("question").value="You are right"
         score++
        var myImage = new Image(50, 50);
myImage.src = 'smiley.png';
document.body.appendChild(myImage);
       
    }
    else {
        document.getElementById("question").value="You are wrong"
         var myImage = new Image(50, 50);
myImage.src = 'sad.png';
document.body.appendChild(myImage);
    }
    document.view.qscore.value=score
}   
 
else if (ans===6){ 
	y = document.getElementById("qans").value
    if(yy==="A"){
        document.getElementById("question").value="You are right"
         score++
        var myImage = new Image(50, 50);
myImage.src = 'smiley.png';
document.body.appendChild(myImage);
        
    }
    else {
        document.getElementById("question").value="You are wrong"
         var myImage = new Image(50, 50);
myImage.src = 'sad.png';
document.body.appendChild(myImage);
    }
    document.view.qscore.value=score
}  
 else if (ans===7){ 
	y = document.getElementById("qans").value
    if(yy==="B"){
        document.getElementById("question").value="You are right"
         score++
        var myImage = new Image(50, 50);
myImage.src = 'smiley.png';
document.body.appendChild(myImage);
        
    }
    else {
        document.getElementById("question").value="You are wrong"
         var myImage = new Image(50, 50);
myImage.src = 'sad.png';
document.body.appendChild(myImage);
    }
    document.view.qscore.value=score
}          
    
    else if (ans===8){ 
	y = document.getElementById("qans").value
    if(yy==="D"){
        document.getElementById("question").value="You are right"
         score++
        var myImage = new Image(50, 50);
myImage.src = 'smiley.png';
document.body.appendChild(myImage);
       
    }
    else {
        document.getElementById("question").value="You are wrong"
         var myImage = new Image(50, 50);
myImage.src = 'sad.png';
document.body.appendChild(myImage);
    }
    document.view.qscore.value=score
}          
     else if (ans===9){ 
	y = document.getElementById("qans").value
    if(yy==="C"){
        document.getElementById("question").value="You are right"
         score++
        var myImage = new Image(50, 50);
myImage.src = 'smiley.png';
document.body.appendChild(myImage);
       
    }
    else {
        document.getElementById("question").value="You are wrong"
         var myImage = new Image(50, 50);
myImage.src = 'sad.png';
document.body.appendChild(myImage);
    }
    document.view.qscore.value=score
}          
     else if (ans===10){ 
	y = document.getElementById("qans").value
    if(yy==="A"){
        document.getElementById("question").value="You are right"
         score++
        var myImage = new Image(50, 50);
myImage.src = 'smiley.png';
document.body.appendChild(myImage);
     
    }
    else {
        document.getElementById("question").value="You are wrong"
         var myImage = new Image(50, 50);
myImage.src = 'sad.png';
document.body.appendChild(myImage);
    }
    document.view.qscore.value=score
}          
ans++; 
}   














    

function main(){ 
if (i===1){ 
	document.view.qnum.value=i;
   	document.view.question.value ="Which Artist sings the song titled Perfect \na)Taylor Swift \nb)Justin Bieber \nc)Selena Gomez \nd)Ed Sheeran";
    document.view.qans.value=""
}
else if (i===2){ 
	document.view.qnum.value=i;	
	document.view.question.value ="Which Shawn Mendes song has the lyrics : Oh, I've been shaking, I love it when you go crazy, You take all my inhibitions? \na)There's Nothing Holding Me Back \nb)Stitches \nc)Something Big \nd)Senorita";
    document.view.qans.value=""
   
}

else if (i===3){ 
	document.view.qnum.value=i;	
	document.view.question.value ="Which of these is not an Ed Sheeran song? \na)Shape Of You \nb)Castle On The Hill \nc)Young Forever \nd)Galway Girl";
    document.view.qans.value=""
}
else if (i===4){ 
	document.view.qnum.value=i;	
	document.view.question.value ="Who is not a singer? \na)Jimin \nb)Camila Cabello \nc)Lady Gaga \nd)Tom Holland";
    document.view.qans.value=""
}
else if (i===5){ 
	document.view.qnum.value=i;	
	document.view.question.value ="Which Taylor Swift Song has the lyrics : You go talk to your friends, talk to my friends, talk to me? \na)Wildest Dreams\nb)We Are Never Ever Getting Back Together \nc)Shake It Off \nd)Blank Space";
    document.view.qans.value=""
}  
else if (i===6){ 
	document.view.qnum.value=i;	
	document.view.question.value ="What is BTS's most viewed song on Youtube? \na)DNA \nb)Fake Love \nc)Idol \nd)Fire";
    document.view.qans.value=""
}  
else if (i===7){ 
	document.view.qnum.value=i;	
	document.view.question.value ="What artist did Shawn Mendes collaborate with for the song Senorita?  \na)Ariana Grande \nb)Camilla Cabello \nc)Tayor Swift \nd)Drake";
    document.view.qans.value=""
}  
else if (i===8){ 
	document.view.qnum.value=i;	
	document.view.question.value ="Which one of these artists is Canadian? \na)Shawn Mendes \nb)Drake \nc)Justin Bieber \nd)All of the above";
    document.view.qans.value=""
}  
else if (i===9){ 
	document.view.qnum.value=i;	
	document.view.question.value ="Which artist sings the song titled Sucker? \na)Ariana Grande \nb)DNCE \nc)Jonas Brothers \nd)J-hope";
    document.view.qans.value=""
}  
else if (i===10){ 
	document.view.qnum.value=i;	
	document.view.question.value ="How many members of BTS are there? \na)7 \nb)4 \nc)10 \nd)3";
    document.view.qans.value=""
}  
	i++; 
}