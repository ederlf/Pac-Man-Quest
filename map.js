WALL = '*';
PACMAN = 'P';
EMPTY = ' ';

function isMonster(char) {
    return parseInt(char) != NaN;
}

function Map() {
    this.map = [
    ['*', ' ', ' ', ' ', ' '],
    ['*', ' ', ' ', ' ', ' '],
    ['*', ' ', ' ', ' ', ' '],
    ['*', ' ', ' ', ' ', ' '],
    ['*', ' ', ' ', '1', ' '],
    ['*', ' ', ' ', ' ', ' ']];

    this.characters = {};
    this.moves = {};

    this.setCharacter = function(char, x, y, moves) {
        if (this.characters[char] != undefined) {
            current_x = this.characters[char][0];
            current_y = this.characters[char][1];
            this.map[current_y][current_x] = EMPTY;
        }
        this.map[y][x] = char;
        this.characters[char] = [x, y];
        this.moves[char] = moves;
    }

    this.getCharacterPosition = function(char) {
        return this.characters[char];
    }

    this.getSize = function() {
        return [this.map[0].length, this.map.length];
    }

    this.setWall = function(x, y) {
        this.map[y][x] = WALL;
    }

    this.getPosition = function(x, y) {
        return this.map[y][x];
    }

    this.getCharacterMoves = function(char) {
        return this.moves[char];
    }

    function moveCharacter(char, dir) {
    // get the character's position
    pos = map.getCharacter(character);
    x = pos.x;
    y = pos.y;

    // get the map size
    size = map.getSize();
    maxX = size.x;
    maxY = size.y;

    // update the map with new position
    if (dir == "r")
    {
    if (map[x+1][y] != "*" && x+1 < maxX)
    {
    map[x+1][y] = character;
    }
    }
    else if (dir == "l")
    {
    if (map[x-1][y] != "*" && x-1 >= 0)
    {
    map[x-1][y] = character;
    }
    }
    else if (dir == "u")
    {
    if (map[x][y-1] != "*" && y+1 < maxY)
    {
    map[x][y-1] = character;
    }
    }
    else if (dir == "d")
    {
    if (map[x][y+1] != "*" && y-1 >= 0)
    {
    map[x][y+1] = character;
    }
    }
    return map;
    }
};
