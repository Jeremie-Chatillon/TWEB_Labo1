let i = true;
let timer = 15;
const congratulations = '<br>You did it fine. Congratulations'
const noCSS = 'Ohhhh noooo, what did you do???? CSS has disappeared. You see? Isn\'t it better before??';
const withCSS = 'This article discusses the importance of having a beautiful web page. Even if the creator of the site has dubious tastes ... I can still say a lot of bullshit, but the best way to realize is to test it ... So, let\'s try. <br/><br/>However, you must find the buton to disable the CSS before the end of the timer. <br/>I\'m sure you can do it easily.';

window.onload = function  initialiser() {
  document.getElementById('text').innerHTML = withCSS;
};

// disable and enable CSS
//https://stackoverflow.com/questions/5278062/how-could-i-turn-off-a-stylesheethttps://stackoverflow.com/questions/5278062/how-could-i-turn-off-a-stylesheet
function doMagic() {
  
  if(timer <= 0){
    console.log(timer); 
    document.getElementsByTagName('body')[0].innerHTML = 'too Late :S';
  } else{

    clearInterval(x);

    document.getElementById('timer').innerHTML = congratulations; 
      
    if(i == true){
      for ( i=0; i<document.styleSheets.length; i++) 
        void(document.styleSheets.item(i).disabled=true);
        i = false; 
        document.getElementById('text').innerHTML = noCSS;
    }else{
      for ( i=0; i<document.styleSheets.length; i++) 
        void(document.styleSheets.item(i).disabled=false);
        i = true;
        document.getElementById('text').innerHTML = withCSS;
    }
  } 
};
    
// Timer: https://www.w3schools.com/howto/howto_js_countdown.asp
var x = setInterval(function() {
 
  timer -= 1; 
  document.getElementById('timer').innerHTML =  timer + "s "; 
  
  console.log(timer);
  // If the count down is over, write some text 
  if (timer == 0) {
      clearInterval(x);

      document.getElementById('timer').innerHTML = "<br>Too Late :S";
  }
}, 1000);