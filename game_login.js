function add_user() {
    player_1name=document.getElementById("Player_1_name").value;
    player_2name=document.getElementById("Player_2_name").value;
    localStorage.setItem("player_1name",player_1name);
    localStorage.setItem("player_2name",player_2name);
    window.location="game_page.html";
}


