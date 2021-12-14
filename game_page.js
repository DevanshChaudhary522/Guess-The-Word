var player_1name=localStorage.getItem("player_1name");
var player_2name=localStorage.getItem("player_2name");

player_1score=0;
player_2score=0;

document.getElementById("Player_1_name").innerHTML=player_1name + ":" ;
document.getElementById("Player_2_name").innerHTML=player_2name + ":" ;

document.getElementById("player_1score").innerHTML=player_1score ;
document.getElementById("player_2score").innerHTML=player_2score ;

document.getElementById("player_question").innerHTML="Question turn-" + player_1name;
document.getElementById("player_answer").innerHTML="answer turn-" + player_2name;
 

function send(){
    var sending =document.getElementById("word").value;
    word = sending.toLowerCase();
    console.log(word);

    Charat1= word.charAt(1);
    console.log(Charat1);

    len=Math.floor(word.length / 2);
    var Charat2 = word.charAt(len);
    console.log(Charat2);

    var lengthlast=word.length -1;
    Charat3=word.charAt(lengthlast);
    console.log(Charat3);
  

    var sended=word.replace(Charat1,"_");
    var sended2=sended.replace(Charat2,"_") ;
    var sended3 = sended2.replace(Charat3,"_");

    console.log(sended3);
    var Question_word="<h3>Q."+sended3+"</h3>";
    var input_text="answer: <input type = 'text' id='final_answer'>";
    
    var button="<br><button class='btn btn-info' onclick='check()'> check </button>";
    row=Question_word+input_text+button;

    document.getElementById("output").innerHTML=row;
    document.getElementById("word").value="";

}

 Question_turn="player_1";
 answer_turn="player_2";

 function check(){

    var checking = document.getElementById("final_answer").value;
    answer = checking.toLowerCase();
    console.log(answer);
    if(answer == word ){
        if(answer_turn == "player_1"){
            player_1score = player_1score+1;
            document.getElementById("player_1score").innerHTML=player_1score;

        }
        else {
            player_2score = player_2score+1;
            document.getElementById("player_2score").innerHTML=player_2score;
        }

    }
    if (Question_turn == "player_1"){
        Question_turn = "player_2";
        document.getElementById("player_question").innerHTML="Question turn   -" + player_2name;

    }
    else{
        Question_turn = "player_1";
        document.getElementById("player_question").innerHTML="Question turn   -" + player_1name;
    }

    if (answer_turn == "player_1"){
        answer_turn = "player_2"
        document.getElementById("player_answer").innerHTML="answer turn    -" + player_2name;

    }
    else{
        answer_turn = "player_1"
        document.getElementById("player_answer").innerHTML="answer turn    -" + player_1name;
    }
   document.getElementById("output").innerHTML="";
 }