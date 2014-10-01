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
        ['*', ' ', ' ', ' ', ' '],
        ['*', ' ', ' ', ' ', ' ']];
    this.characters = {};

    // for (var r in this.map) {
    //     for (var c in this.map[r]) {
    //         var char = this.map[r][c];
    //         if (char != WALL && char != EMPTY) {
    //             console.log(r, c);
    //             this.characters[char] = {x: r, y: c};
    //         }
    //     }
    // }

    this.moves = {};

    this.setCharacter = function(char, x, y, moves) {
        if (this.characters[char] != undefined) {
            current_x = this.characters[char].x;
            current_y = this.characters[char].y;
            this.map[current_y][current_x] = EMPTY;
        }
        this.map[y][x] = char;
        this.characters[char] = {"x": x, "y": y};
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

    this.getMap = function() {
        return this.map.slice();
    }

    this.moveCharacter = function(char, dir) {
        // get the character's position
        var pos = this.getCharacterPosition(char);
        x = pos.x;
        y = pos.y;

        // get the this.map size
        var size = this.getSize();
        maxX = size[0];
        maxY = size[1];

        // update the this.map with new position
        if (dir == "r") {
            if (this.map[x+1][y] != "*" && x+1 < maxX) {
                this.setCharacter(char, x+1, y);
            }
        }
        else if (dir == "l") {
            if (this.map[x-1][y] != "*" && x-1 >= 0) {
                this.setCharacter(char, x-1, y);
            }
        }
        else if (dir == "u") {
            if (this.map[x][y-1] != "*" && y+1 < maxY) {
                this.setCharacter(char, x, y-1);
            }
        }
        else if (dir == "d") {
            if (this.map[x][y+1] != "*" && y-1 >= 0) {
                this.setCharacter(char, x, y+1);
            }
        }
    }
};
