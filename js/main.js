newFunction();
var userSelected = [];

var questions = null;
var avator = null;

var timeOut;
var secondsToAnswer = 10;
var countDown =0;
var racersResult = new Array(3);;

var racers = [
    {
        ImageSrc:"https://fortloc.com/quiz/images/c_j.jpg",        
        Name: "C.J Yood",
        imageAnswerCJ: "https://fortloc.com/quiz/images/cjcj.gif",
        imageAnswerNoCJ: "https://fortloc.com/quiz/images/nocjcj.gif",
        Score: 0,
        TimeOut: 0,
        Description:"C.J has been racing for over 5 years and has won multiple races in open wheel and GT race cars. When he isnt driving a race car, C.J. enjoys taking train rides even when he has no destination. He likes trains that much!" 
    },
    {
        ImageSrc:"https://fortloc.com/quiz/images/hiro.jpg",
        Name: "Hiro Maya",
        imageAnswerCJ: "https://fortloc.com/quiz/images/borrismayra.gif",
        imageAnswerNoCJ: "https://fortloc.com/quiz/images/borrismayra.gif",
        Score: 0,
        TimeOut: 0,
        Description: "Hiro is the fastest racer of all. He specializes in open wheel race cars. He has competed against the other racers and has defeated them all multiple times. In fact, he has been defeated by only one of the other racers and that happened just once. Yes, he does carry his swords at all times."
    },
    {
        ImageSrc:"https://fortloc.com/quiz/images/mayra.jpg",
        Name: "Mayra Hampshire",
        imageAnswerCJ: "https://fortloc.com/quiz/images/borrishiro.gif",
        imageAnswerNoCJ: "https://fortloc.com/quiz/images/borrishiro.gif",
        Score: 0,
        TimeOut: 0,
        Description: "Mayra has been racing since she was 6 years old. Like Hiro, she has beaten all other racers multiple times. In fact, she is the only one that can boast of beating Hiro in a race. When she isnt racing, she likes painting race circuits on her finger nails."
    },
    {
        ImageSrc:"https://fortloc.com/quiz/images/akio.jpg",        
        Name: "Akio Suzuki",
        imageAnswerCJ: "https://fortloc.com/quiz/images/cjakio.gif",
        imageAnswerNoCJ: "https://fortloc.com/quiz/images/nocjakio.gif",
        Score: 0,
        TimeOut: 0,
        Description: "Akio has very little experience in professional racing but he likes to drive fast. If you are wondering how fast he drives, you need to know that his street driving license has been revoked many times. He has also served short prison terms for street racing."
    },
    {
        ImageSrc:"https://fortloc.com/quiz/images/sue.jpg",
        Name: "Sue (Fireball) Yesterday",
        imageAnswerCJ: "https://fortloc.com/quiz/images/cjsue.gif",
        imageAnswerNoCJ: "https://fortloc.com/quiz/images/nocjsue.gif",
        Score: 0,
        TimeOut: 0,
        Description: "Sue is without a doubt the most gifted racer we have. With a Ph.D. in physics, she is likely the most intelligent too. The only reason why she does not have the best record is because of her short temper which has earned her the nickname - Fireball."
    },
    {
        ImageSrc:"https://fortloc.com/quiz/images/reydo.jpg",
        Name: "Reydo Dewitt",
        imageAnswerCJ: "https://fortloc.com/quiz/images/cjsue.gif",
        imageAnswerNoCJ: "https://fortloc.com/quiz/images/nocjreydon.gif",
        Score: 0,
        TimeOut: 0,
        Description: "Reydo is the most experienced racer of the lot. However, he is notorious for his questionable tactics when attempting to overtake. In fact, some will insist he is the reason why Sue fireball has not won more races as they have come to blows on the track multiple times."
    },
    {
        ImageSrc:"https://fortloc.com/quiz/images/borris.jpg",
        Name: "Borris Nikon",
        imageAnswerCJ: "https://fortloc.com/quiz/images/hiromayra.gif",
        imageAnswerNoCJ: "https://fortloc.com/quiz/images/hiromayra.gif",
        Score: 0,
        TimeOut: 0,
        Description: "Borris is always angry and this shows on the race track. His aggressive driving style has led to multiple penalties and race suspensions. He's very close to being banned for life but some say he has friends in high places and will likely get away with behavior no one else can."
    }


];

var imageQuestion;
var imageAnswer;
var opponent1;
var opponent2;
var player;
var currQuestion = 0; //index of the current question
var userPoints = 0; //user points total
var contestantImage;
var oppo1; // for storing timeouts
var oppo2; // for storing timeouts
var answered = [false,false,false,false,false,false,false,false,false,false];
var borrisUnlocked = false;

function newFunction() {
    debugger;
}

function getReactionTimes()
{
    if (opponent1.Name == "Sue (Fireball) Yesterday")
     {
        oppo1 = 10 - Number(questions.QuestionsInfo[currQuestion].Sue);
     }
     if (opponent1.Name == "Akio Suzuki")
     {
        oppo1 = 10 - Number(questions.QuestionsInfo[currQuestion].Akio);
     }
     if (opponent1.Name == "Reydo Dewitt")
     {
        oppo1 = 10 - Number(questions.QuestionsInfo[currQuestion].Reydo);
     }

     if (opponent1.Name == "C.J Yood")
     {
        oppo1 = 10 - Number(questions.QuestionsInfo[currQuestion].C_J);
     }

     if (opponent1.Name == "Hiro Maya")
     {
        oppo1 = 10 - Number(questions.QuestionsInfo[currQuestion].Hiro);
     }

     if (opponent1.Name == "Mayra Hampshire")
     {
        oppo1 = 10 - Number(questions.QuestionsInfo[currQuestion].Mayra);
     }

     if (opponent2.Name == "Sue (Fireball) Yesterday")
     {
        oppo2 = 10 - Number(questions.QuestionsInfo[currQuestion].Sue);
     }
     if (opponent2.Name == "Akio Suzuki")
     {
        oppo2 = 10 - Number(questions.QuestionsInfo[currQuestion].Akio);
     }
     if (opponent2.Name == "Reydo Dewitt")
     {
        oppo2 = 10 - Number(questions.QuestionsInfo[currQuestion].Reydo);
     }

     if (opponent2.Name == "C.J Yood")
     {
        oppo2 = 10 - Number(questions.QuestionsInfo[currQuestion].C_J);
     }
     if (opponent2.Name == "Hiro Maya")
     {
        oppo2 = 10 - Number(questions.QuestionsInfo[currQuestion].Hiro);
     }

     if (opponent2.Name == "Mayra Hampshire")
     {
        oppo2 = 10 - Number(questions.QuestionsInfo[currQuestion].Mayra);
     }
}
function timeOutCounter() 
{    
    countDown++;
    if (Number(document.getElementById("rTime").innerHTML) > 0)
    {
        document.getElementById("rTime").innerHTML = (secondsToAnswer - countDown);
    }
    if (secondsToAnswer - countDown == 0)
    {
        var  text = document.getElementById("rTime");
        text.style.color = 'red'; 
    }
    if (secondsToAnswer - countDown == oppo1)
    {
        clearInterval(timeOut);
        countDown = 0;
        if (imageQuestion == "https://fortloc.com/quiz/images/nocj_0.gif")
        {
            contestantImage = opponent1.imageAnswerNoCJ;
        }
        else 
        {
            contestantImage = opponent1.imageAnswerCJ;
        }
        opponent1.Score += 1;
        displayQuiz(currQuestion, true, false, true);
    }
    if (secondsToAnswer - countDown == oppo2)
    {
        clearInterval(timeOut);
        countDown = 0;
        if (imageQuestion == "https://fortloc.com/quiz/images/nocj_0.gif")
        {
            contestantImage = opponent2.imageAnswerNoCJ;
        }
        else 
        {
            contestantImage = opponent2.imageAnswerCJ;
        }
        opponent2.Score += 1;
        displayQuiz(currQuestion, true, false, true);                
    }
    if (secondsToAnswer - countDown == -1)
    {
        clearInterval(timeOut);
        var next = document.getElementById("nButton");
        var  text = document.getElementById("rTime");
        text.style.color = 'red'; 
        countDown = 0;
        next.click();
    }
}

function avatarSelect(doc, num)
{
    if (num == 6)
    {
        imageQuestion = "https://fortloc.com/quiz/images/borris_0.gif";
    }
    else if (num > 0 && num < 6)
    {
        imageQuestion = "https://fortloc.com/quiz/images/nocj_0.gif";
    }
    else{
        imageQuestion = "https://fortloc.com/quiz/images/cj_0.gif"; 
    }
    switch (Number(num))
    {
        case 0:
            player = racers[0];
            opponent1 = racers[3];
            opponent2 = racers[4];
        break;
        case 3:
            player = racers[3];
            opponent1 = racers[4];
            opponent2 = racers[5];
        break;
        case 4:
            player = racers[4];
            opponent1 = racers[3];
            opponent2 = racers[5];
        break;
        case 5:
            player = racers[5];
            opponent1 = racers[3];
            opponent2 = racers[4];
        break;
        case 6:
            player = racers[6];
            opponent1 = racers[1];
            opponent2 = racers[2];
        break;
    }
    displayQuiz(0, false);
}

function displayTopBanner()
{
    var imgNum = Math.floor((Math.random() * 5) + 1);
    var imgName = "https://fortloc.com/quiz/images/720motosports.jpg";
    var linkedIn = "https://fortloc.com/quiz/images/vacations";
    switch(imgNum)
    {
        case 1:
            imgName = "https://fortloc.com/quiz/images/720motosports.jpg";
            linkedIn = "https://fortloc.com/motorsports";
        break;
        case 2:
            imgName = "https://fortloc.com/quiz/images/destinationbanners.jpg";
        break;
        case 3:
            imgName = "https://fortloc.com/quiz/images/destinationbanners2.jpg";
        break;
        case 4:
            imgName = "https://fortloc.com/quiz/images/experiencesbanner3.jpg";
            linkedIn = "https://fortloc.com/experiences/";
        break;
        case 5:
            imgName = "https://fortloc.com/quiz/images/experiencestopnotch.jpg";
            linkedIn = "https://fortloc.com/experiences/";
        break;
    }
    image = document.getElementById('topimage');
    link = document.getElementById('topLink');
    image.src = imgName;
    link.href = linkedIn;
}
function displaySplashScreen()
{
    displayTopBanner();
    var html = '';
    html += '<center><img class="splash" src="https://fortloc.com/quiz/images/splash.jpg" alt="image1" width="300" height="462" onclick="displayRacers('+ 0 + ')">';
    document.getElementsByClassName('main')[0].innerHTML = html;
}
function displayRacers(racerNum)
{
    var selection1 = '&nbsp;&nbsp;<button name=selectButton onclick="avatarSelect(this, \''+ racerNum + '\')">Select</button>';
    var selection2 = '&nbsp;&nbsp;<button name=lockedButton >Locked</button>';    
    var html = '';
    
    
    html += '<div class="racer-image">\
    <center><img src="'+ racers[racerNum].ImageSrc + '" alt="image1" width="300" height="462"></center>\
    </div>';
   // html += '<button name=backButton onclick="displayRacers(' + (racerNum - 1) + ')">Back</button>';
   // html += '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
   // html += '<button name=nextButton onclick="displayRacers(' + (racerNum + 1) + ')">Next</button>';
    html += '<center><table width="400" border="0">\
    <tbody>\
      <tr>\
        <td>&nbsp;</td>';
        html += '<td>';
        if (racerNum == 1 || racerNum ==2 || (racerNum ==6 && !borrisUnlocked))
        {
            html +=  '<p><b>'+ racers[racerNum].Name + selection2 + '</b></p>';
        }
        else{
            html +=  '<p><b>'+ racers[racerNum].Name + selection1 + '</b></p>';
        }
        html += '<p><button align="left" name=backButton onclick="displayRacers('+ (racerNum - 1) + ')">Back</button>';
        html += '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
        html += '<button align="right" name=nextButton onclick="displayRacers('+ (racerNum + 1) + ')">Next</button></p>';
        html += '<div class="description"> <p><b>'+ racers[racerNum].Description + '</b></p></div></td>\
        <td>&nbsp;</td>\
      </tr>\
    </tbody>';   
    
    document.getElementsByClassName('main')[0].innerHTML = html;
    if (racerNum >= 6)
    {
        var input = document.querySelector('[name="nextButton"]');
        input.setAttribute('disabled', true);
    }
    if (racerNum == 0)
    {
        var input = document.querySelector('[name="backButton"]');
        input.setAttribute('disabled', true);
    }
    var sel = document.querySelector('[name="lockedButton"]');
    if (sel != null)
    {
        sel.setAttribute('disabled', true);
    }
}

function userSelection(selection)
{
    var answerRight = false;
    if (selection == questions.QuestionsInfo[currQuestion].Answer)
    {
        userPoints++;
        answerRight = true;
        if (imageQuestion == "https://fortloc.com/quiz/images/nocj_0.gif")
        {
            contestantImage = player.imageAnswerNoCJ;
        }
        else
        {
            contestantImage = player.imageAnswerCJ;
        }
        player.Score += 1;
        clearInterval(timeOut);
        countDown = 0;
    }
    displayQuiz(currQuestion, answerRight, true, false);
}

function changeLabelColor(no)
{
    var rightLabel;
     if (questions.QuestionsInfo[no].Answer == "A")
     {
        rightLabel = document.getElementById("A");
     }
     else if (questions.QuestionsInfo[no].Answer == "B")
     {
        rightLabel = document.getElementById("B");
     }
     if (questions.QuestionsInfo[no].Answer == "C")
     {
        rightLabel = document.getElementById("C");
     }
     else if (questions.QuestionsInfo[no].Answer == "D")
     {
        rightLabel = document.getElementById("D");
     }
     if (rightLabel)
     {
        rightLabel.style.color = "green";
        rightLabel.style.fontSize = "150%";
     }
     answered[no] = true;
}

function displayQuiz(no, rightAnswer, fromAnswerSelection, fromTimeOut) {
    
    currQuestion = no;
    if (questions == null)
    {
        //alert("questions is null");
        var xhttp = new XMLHttpRequest();
        xhttp.overrideMimeType("application/json")
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 ){
                if (this.status == 200) {
                    questions = JSON.parse(this.responseText);
                } 
            }
        };
        xhttp.open("GET", "https://fortloc.com/app-beta/Quiz.php?option=one", false);
        xhttp.send();         
    }
    
    var html = '';
    
    html += '<div class="main-image">';
    if (!rightAnswer)
    {
        html += '<center><img src="'+ imageQuestion + '" alt="image1" height="369" width="500"></center>';
    }
    else 
    {
        html += '<center><img src="'+ contestantImage + '" alt="image1" height="369" width="500"></center>'; 
    }    
    //html += '<p id="dbasenum">'+questions.QuestionsInfo[no].Number+'</p>';
    if ((fromAnswerSelection && rightAnswer) ||fromTimeOut)
    {
        //if the user selects the right answer or the timeout occurred freeze the current time
        html += '<div class="stopwatch"><b><p id="rTime">0</p></b>';
    }else {
        html += '<div class="stopwatch"><b><p id="rTime">10</p></b>';
    }
    html += '</div></div>';
    if (fromTimeOut || 
        (rightAnswer && fromAnswerSelection) || 
        answered[no] == true)
    {
        html += '<center><table width="500" border="0" style="background-color:black;">\
        <tbody>\
          <tr>\
            <td>&nbsp;</td>';
        html += '<td>';
        //html += '</div>\
        html +='<div class="question"> <p><b><font color="white">'+ (currQuestion+1) + '. ' +questions.QuestionsInfo[no].Question + '</font></b></p>\
     <form name="myForm" id="answers" class="Select">\
       <ul>\
          <li>\
             <label id="A">' + questions.QuestionsInfo[no].OptionA + '\
             </label>\
           </li>\
           <li>\
              <label id="B">' + questions.QuestionsInfo[no].OptionB + '\
              </label>\
          </li>\
          <li>\
              <label id="C">' + questions.QuestionsInfo[no].OptionC + '\
              </label>\
          </li>\
          <li>\
              <label id="D">' + questions.QuestionsInfo[no].OptionD + '\
              </label>\
          </li>\
      </ul>\
     </form></div>';//</td>;<td>&nbsp;</td></tr></tbody>';
     
    }
    else {
        html += '<center><table width="500" border="0" style="background-color:black;">\
        <tbody>\
          <tr>\
            <td>&nbsp;</td>';
        html += '<td>';
    //html += '</div>\
    html +=  '<div class="question"><p><b><font color="white">'+ (currQuestion+1) + '. ' +questions.QuestionsInfo[no].Question + '</font></b></p>\
     <form name="myForm" id="answers" class="Select">\
       <ul>\
          <li>\
             <label>\
              <input type="radio"  name="mySelect" onchange="userSelection(\''+ "A" + '\');"   value="a"><font color="white">' + questions.QuestionsInfo[no].OptionA + '\
              </font></label>\
           </li>\
           <li>\
              <label>\
               <input type="radio" name="mySelect" onchange="userSelection(\''+ "B" + '\')" value="b"><font color="white">' + questions.QuestionsInfo[no].OptionB + '\
              </font></label>\
          </li>\
          <li>\
              <label>\
                <input type="radio" name="mySelect" onchange="userSelection(\''+ "C" + '\')" value="c"><font color="white">' + questions.QuestionsInfo[no].OptionC + '\
                </font></label>\
          </li>\
          <li>\
              <label>\
              <input type="radio" name="mySelect" onchange="userSelection(\''+ "D" + '\')" value="d"><font color="white">' + questions.QuestionsInfo[no].OptionD + '\
              </font></label>\
          </li>\
      </ul>\
      </form></div>';//</td>';<td>&nbsp;</td></tr></tbody>';
      
    }
     

     if (!fromAnswerSelection && 
        !fromTimeOut)
    {
        getReactionTimes();
        clearInterval(timeOut);
        countDown = 0;
    }

     if (no == questions.QuestionsInfo.length-1) {
        racersResult[0] = player;
        racersResult[1] = opponent1;
        racersResult[2] = opponent2;
        html += '<button onclick="displayResult()">Result</button>';
        html += '</td><td>&nbsp;</td></tr></tbody>';
    } else {
        
       html += '<center><button id="nButton" onclick="displayQuiz(' + (no + 1) + ')">Next</button></center>';       
        html += '</td><td>&nbsp;</td></tr></tbody>';
    }    
    
    if (!fromAnswerSelection && 
        !fromTimeOut)
    {
        timeOut = setInterval(timeOutCounter, 1000);
    }
    

    document.getElementsByClassName('main')[0].innerHTML = html;
    if (fromTimeOut || 
        (rightAnswer && fromAnswerSelection) || 
        answered[no] == true)
    {
        changeLabelColor(no);
    }    
}

function displayResult() 
{
    var html = '';
    racersResult.sort(compare);
    if (player.Score > 8 && !borrisUnlocked)
    {
        html += '<center><table><tr><td>&nbsp;&nbsp;</td><td><p class="Unlocked"><b> Borris Nikon is now unlocked</b></p></td><td>&nbsp;</td></tr></table></center>';
        borrisUnlocked = true;
    }
    html += '<center><table width="400" border="0">\
    <tbody>\
      <tr>';
    for(i=racersResult.length-1; i >=0; i--)
    {
      html += '<td><p><img src="'+ racersResult[i].ImageSrc + '" alt="image1" height="462" width="300"></p>';
      if (racersResult[i].Name != player.Name)
      {
        html += '<p><b> Name: ' + racersResult[i].Name + '</b></p>\
            <p><b> Score: '+ racersResult[i].Score + '</b></p></td>';
      }
      else{
        html += '<p class="player"><b> Name: ' + racersResult[i].Name + '</b></p>\
            <p class="player"><b> Score: '+ racersResult[i].Score + '</b></p></td>';
      }
    }
    html += '</tr></tbody>';
    
    for(i=0; i <answered.length; i++)
    {
        answered[i] = false;
    }
    html += '<button class="play" onclick="displayQuiz(' + 0 + ','+false+','+false+'.'+false+')">Play Again</button></center>';
    html += '&nbsp;&nbsp;&nbsp;<button class="play" onclick="displayRacers('+0+')">Choose Avatar</button></table></center>';
    
    questions = null;
    document.getElementsByClassName('main')[0].innerHTML = html;
    importResults(player.Name, player.Score, opponent1.Score, opponent2.Score);
    
    player.Score = 0;
    opponent1.Score = 0;
    opponent2.Score = 0;
}

function compare(a,b)
{
    if (a.Score < b.Score)
    {
        return -1;
    }
    if (a.Score > b.Score)
    {
        return 1;
    }
    return 0;
}

function importResults(avatar, score, oppo1, oppo2)
{
    var xhttpp = new XMLHttpRequest();
    var argumentis = "avatar="+avatar+"&";
    argumentis += "score="+score+"&";
    argumentis += "oppo1="+oppo1+"&";
    argumentis += "oppo2="+oppo2;
    
    xhttpp.open("GET", "https://fortloc.com/app-beta/Quiz.php?"+argumentis, true);
    xhttpp.send(); 
}
