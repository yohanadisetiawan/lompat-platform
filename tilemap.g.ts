// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100001010101010101010101010101000004010000000000000000000000000000000100000000000000000000000000000001000002020202020202020202020201010000000000000000000000000000010100000000000000000000000000000101020202020000020202020202000001010000000000000200000000000000010100000000000002000000000000000101020202020202020000020202020201010000000000000000000200000000000100000000000000000002000000000001000002020202020202020202020000010000000000000000000000000000000100000000000000000000000000000301010101010101010101010101010101`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 . . . 
2 . . . . . . . . . . . . . . . 
2 . . . . . . . . . . . . . . . 
2 . . 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 2 2 2 2 . . 2 2 2 2 2 2 . . 2 
2 . . . . . . 2 . . . . . . . 2 
2 . . . . . . 2 . . . . . . . 2 
2 2 2 2 2 2 2 2 . . 2 2 2 2 2 2 
2 . . . . . . . . . 2 . . . . . 
2 . . . . . . . . . 2 . . . . . 
2 . . 2 2 2 2 2 2 2 2 2 2 2 . . 
2 . . . . . . . . . . . . . . . 
2 . . . . . . . . . . . . . . . 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.dungeon.floorDark0,sprites.dungeon.floorMixed,sprites.dungeon.doorOpenNorth,sprites.dungeon.stairLadder], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
