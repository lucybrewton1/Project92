function addUser() {
    player1=document.getElementById("player1Name").value;
    localStorage.setItem("player1",player1);
    player2=document.getElementById("player2Name").value;
    localStorage.setItem("player2",player2);
    window.location="quiz_game_page.html";
}