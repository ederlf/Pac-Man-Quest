QUnit.test("set wall test", function(assert) {
    var m = new Map();
    m.setWall(1, 1);
    assert.ok(m.getPosition(1, 1) == WALL, "Passed!");
});

QUnit.test( "get map size test", function(assert) {
    var m = new Map();
    assert.deepEqual(m.getSize(), [5, 6], "Passed!");
});

QUnit.test("set position", function(assert) {
    var m = new Map();
    m.setCharacter(PACMAN, 2, 2);
    m.setCharacter(PACMAN, 2, 3);
    m.setCharacter('7', 3, 4);

    assert.notEqual(m.getPosition(2 ,2), 'P', "Passed!");
    assert.deepEqual(m.getCharacterPosition(PACMAN), {x: 2, y: 3}, "Passed!");
    assert.deepEqual(m.getCharacterPosition('7'), {x: 3, y: 4}, "Passed!");
});

QUnit.test( "get char moves", function(assert) {
    var m = new Map();
    m.setCharacter('9', 2, 4, ['u', 'u', 'd', 'd']);
    assert.deepEqual(m.getCharacterMoves('9'), ['u', 'u', 'd', 'd'], "Passed!");
    assert.deepEqual(m.getCharacterMoves('7'), undefined, "Passed!");
});

QUnit.test("test pacman move", function( assert ) {
    var after = [
    ['*', ' ', ' ', ' ', ' '],
    ['*', ' ', ' ', ' ', ' '],
    ['*', ' ', ' ', ' ', ' '],
    ['*', 'P', ' ', ' ', ' '],
    ['*', ' ', ' ', '1', ' '],
    ['*', ' ', ' ', ' ', ' ']];

    var m = new Map();

    m.setCharacter('P', 1, 2);
    m.setCharacter('1', 3, 4);

    // alert(m.getPosition(2, 1));

    m.moveCharacter('P', "d");
    assert.deepEqual(m.getMap(), after, "Passed!" );
});
