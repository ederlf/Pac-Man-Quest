var monster_position;
var pacman_position;
var aux = true;
var pacman_dir;


$(document).keydown(function(e){
        var key = e.which;
        
        if(key == "37") pacman_dir = "left";
        else if(key == "38") pacman_dir = "up";
        else if(key == "39") pacman_dir = "right";
        else if(key == "40") pacman_dir = "down";
      }
      )


var dummy_map = [
                ['*', ' ', ' ', ' ', ' '],
                ['*', ' ', 'P', ' ', ' '],
                ['*', ' ', ' ', ' ', ' '],
                ['*', ' ', ' ', ' ', ' '],
                ['*', ' ', ' ', '1', ' '],
                ['*', ' ', ' ', ' ', ' ']];
                
var mainloop = function() {
  //make moviments
  paint();
  if(pacman_dir == "up"){
    dummy_map[pacman_position[0]][pacman_position[1]] = ' ';
    dummy_map[pacman_position[0]-1][pacman_position[1]] = 'P';
  }
  if(pacman_dir == "down"){
    dummy_map[pacman_position[0]][pacman_position[1]] = ' ';
    dummy_map[pacman_position[0]+1][pacman_position[1]] = 'P';
  }
  if(pacman_dir == "right"){
    dummy_map[pacman_position[0]][pacman_position[1]] = ' ';
    dummy_map[pacman_position[0]][pacman_position[1]+1] = 'P';
  }
  if(pacman_dir == "left"){
    dummy_map[pacman_position[0]][pacman_position[1]] = ' ';
    dummy_map[pacman_position[0]][pacman_position[1]-1] = 'P';
  }
  if(aux){
    dummy_map[monster_position[0]][monster_position[1]] = ' ';
    dummy_map[monster_position[0]][monster_position[1]+1] = '1';
  }
  else{
    dummy_map[monster_position[0]][monster_position[1]] = ' ';
    dummy_map[monster_position[0]][monster_position[1]-1]= '1';
  }
  aux = !aux;
};

var paint = function() {
    $(".canvas").empty();
    for (var i = 0; i < dummy_map.length; i++) {
      for (var j = 0; j < dummy_map[i].length; j++) {
        if(dummy_map[i][j] == "*") $(".canvas").append('<div class="element wall"/>');
        else if(dummy_map[i][j] == "P") {
          $(".canvas").append('<div class="element pacman"></div>');
          pacman_position = [i,j];
        }
        else if($.isNumeric(dummy_map[i][j])){
          $(".canvas").append('<div class="element"><div class="monster"/></div>');
          monster_position = [i,j];
        }
        else $(".canvas").append('<div class="element freespace"/>');
      }
    }
};

if(typeof game_loop != "undefined") clearInterval(game_loop);
        game_loop = setInterval(mainloop, 500);