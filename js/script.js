let i = true;
let timer = 15;
const congratulations = '<br>You did it fine. Congratulations'
const noCSS = 'Ohhhh noooo, what did you do???? CSS disaperad. You see? Wasn\'t it better before';
const withCSS = 'This post is relating about how important to have a nice webPage. I can say a lot of bullshit, but the better way of realise it is to test it... So let try. </br><br>However, you have to find the buton to disable it ;D </br>I\'m sure you can do dat easily.';
//https://stackoverflow.com/questions/5278062/how-could-i-turn-off-a-stylesheethttps://stackoverflow.com/questions/5278062/how-could-i-turn-off-a-stylesheet
function doMagic() {
  
  if(timer <= 0){
    console.log(timer); 
    document.getElementsByTagName('body')[0].innerHTML = 'tooLate :S';
  } else{

    clearInterval(x);

    document.getElementById('timer').innerHTML = "<br>Too Late:S";  /// ça passe pas :()
      
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
}
    


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