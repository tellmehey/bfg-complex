let mySprite: Sprite = null
scene.centerCameraAt(8, 8)
tiles.placeOnTile(mySprite, tiles.getTileLocation(8, 1))
tiles.setCurrentTilemap(tilemap`level1`)
let chapter = 1
mySprite = sprites.create(img`
    ........................
    ........................
    ........................
    ........................
    ..........ffff..........
    ........ff1111ff........
    .......fb111111bf.......
    .......f11111111f.......
    ......fd11111111df......
    ......fd11111111df......
    ......fddd1111dddf......
    ......fbdbfddfbdbf......
    ......fcdcf11fcdcf......
    .......fb111111bf.......
    ......fffcdb1bdffff.....
    ....fc111cbfbfc111cf....
    ....f1b1b1ffff1b1b1f....
    ....fbfbffffffbfbfbf....
    .........ffffff.........
    ...........fff..........
    ........................
    ........................
    ........................
    ........................
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 40, 40)
forever(function () {
    if (chapter == 8) {
        game.gameOver(true)
    }
})
