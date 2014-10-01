map = [
['*', ' ', ' ', ' ', ' '],
['*', ' ', 'P', ' ', ' '],
['*', ' ', ' ', ' ', ' '],
['*', ' ', ' ', ' ', ' '],
['*', ' ', ' ', '1', ' '],
['*', ' ', ' ', ' ', ' ']];

map1 = [
['*', ' ', ' ', ' ', ' '],
['*', ' ', ' ', ' ', ' '],
['*', ' ', 'P', ' ', ' '],
['*', ' ', ' ', ' ', ' '],
['*', ' ', ' ', '1', ' '],
['*', ' ', ' ', ' ', ' ']];

QUnit.test( "testUpdateMap", function( assert ) {
  assert.equal( update_map(map, "P", "d"), map1, "Passed!" );
});


function update_map(map, character, dir) {
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
