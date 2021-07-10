var player1=localStorage.getItem("player1");
var player2=localStorage.getItem("player2");

var score1=0;
var score2=0;

var question_turn="Player 1";
var answer_turn="Player 2";

document.getElementById("player1_name").innerHTML=player1+": ";
document.getElementById("player1_score").innerHTML=score1;
document.getElementById("player2_name").innerHTML=player2+": ";
document.getElementById("player2_score").innerHTML=score2;

document.getElementById("player_question").innerHTML="Question Turn: "+player1;
document.getElementById("player_answer").innerHTML="Answer Turn: "+player2;

function send() {
    number1=document.getElementById("number1").value;
    number2=document.getElementById("number2").value;
    actual_answer=parseInt(number1)*parseInt(number2);
    console.log(actual_answer);

    question_number="<h4>"+number1+" X "+number2+"</h4>";
    input_box="<br> Answer: <input type='text' id='input_check_box';";
    check_button="<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row=question_number+input_box+check_button;
    document.getElementById("output").innerHTML=row;

    document.getElementById("number1").value="";
    document.getElementById("number2").value="";
}
function check() {
    get_answer=document.getElementById("input_check_box").value;
    console.log(get_answer);
    if (get_answer==actual_answer) {
        if (answer_turn=="Player 1") {
            score1=score1+1;
            document.getElementById("player1_score").innerHTML=score1;
        }
        else {
            score2=score2+1;
            document.getElementById("player2_score").innerHTML=score2;
        }
    }
    else {
        if (answer_turn=="Player 1") {
            score1=score1-1;
            document.getElementById("player1_score").innerHTML=score1;
        }
        else {
            score2=score2-1;
            document.getElementById("player2_score").innerHTML=score2;
        }
    }
    if (question_turn=="Player 1") {
        question_turn="Player 2";
        answer_turn="Player 1";
        document.getElementById("player_question").innerHTML="Question Turn: "+player2;
        document.getElementById("player_answer").innerHTML="Answer Turn: "+player1;
    }
    else {
        question_turn="Player 1";
        answer_turn="Player 2";
        document.getElementById("player_question").innerHTML="Question Turn: "+player1;
        document.getElementById("player_answer").innerHTML="Answer Turn: "+player2;
    }
    document.getElementById("output").value="";
    document.getElementById("output").innerHTML="";
}