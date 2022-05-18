namespace SpriteKind {
    export const Npc = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(assets.image`attack`, p1, 159, 0)
    pause(100)
    projectile.destroy()
})
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.forestTiles6, function (sprite, location) {
    music.bigCrash.play()
    animation.runImageAnimation(
    p1,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . f f f f f f f f f . . . . 
        . . . f 1 1 1 1 1 1 1 f f . . . 
        . . f 1 1 f f f f f 1 1 f f . . 
        . . f 1 f f f f f f f 1 1 f . . 
        . . f 1 f 2 2 f f 2 2 f 1 f . . 
        . f f f f 2 2 f f 2 2 f 1 f . . 
        . f 1 f f f f f f f f f 1 f . . 
        . f 1 f f 2 2 2 2 2 f f 1 f . . 
        . f 1 1 f f 2 2 2 2 f f 1 f . . 
        . f 1 1 f f 1 1 f 1 f f 1 f . . 
        . f 1 1 f 1 f 1 1 1 1 1 f f . . 
        . f f 1 1 1 . 1 f f 1 1 f f . . 
        . . . f . f . f f . f f f . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . f f f f f f f f f . . . . 
        . . . f 1 1 1 1 1 1 1 f f . . . 
        . . f 1 1 f f f f f 1 1 f f . . 
        . . f 1 f f f f f f f 1 1 f . . 
        . . f 1 f 2 2 f f 2 2 f 1 f . . 
        . f f f f 2 2 f f 2 2 f 1 f . . 
        . f 1 f f f f f f f f f 1 f . . 
        . f 1 f f f 2 2 2 2 f f 1 f . . 
        . f 1 1 f f 2 2 2 2 f f 1 f . . 
        . f 1 1 f f 2 2 2 2 f f 1 f . . 
        . f 1 1 f 1 f f f f 1 1 f f . . 
        . f f 1 1 1 f 1 f f 1 f f f . . 
        . . . f f f f f f . f f f . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . f f f f f f f f f . . . . 
        . . . f 1 1 f 1 1 f 1 f f . . . 
        . . f f 1 f f f f f 1 1 f f . . 
        . . f f f f f f f f f 1 1 f . . 
        . . f 1 f 2 2 f f 2 2 f f f . . 
        . f f f f 2 2 f f 2 2 f f f . . 
        . f 1 f f f f f f f f f 1 f . . 
        . f 1 f f f 2 2 2 2 f f f f . . 
        . f f 1 f f 2 2 2 2 f f 1 f . . 
        . f f 1 f f 2 2 2 2 f f 1 f . . 
        . f 1 1 f 1 2 2 2 2 1 1 f f . . 
        . f f f 1 1 f 1 f f 1 f f f . . 
        . . . f f f f f f . f f f . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . f f f f f f f f f . . . . 
        . . . f f 1 f 1 1 f 1 f f . . . 
        . . f f 1 f f f f f 1 f f f . . 
        . . f f f f f f f f f 1 1 f . . 
        . . f 1 f 2 2 f f 2 2 f f f . . 
        . f f f f 2 2 f f 2 2 f f f . . 
        . f 1 f f f f f f f f f 1 f . . 
        . f 1 f f f 2 2 2 2 f f f f . . 
        . f f 1 f f 2 2 2 2 f f 1 f . . 
        . f f f f f 2 2 2 2 f f 1 f . . 
        . f 1 1 f 1 2 2 2 2 f 1 f f . . 
        . f f f 1 1 2 2 2 2 1 f f f . . 
        . . . f f f f f f . f f f . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . f f f f f f f f f . . . . 
        . . . f f 1 f 1 1 f 1 2 2 . . . 
        . . f f 1 f f f f f 1 f 2 f . . 
        . . f f f f f f f f f 1 1 f . . 
        . . f f f 2 2 f f 2 2 f f f . . 
        . f 2 f f 2 2 f f 2 2 f f f . . 
        . 2 f f f f f f f f f f 1 f . . 
        . 2 f f 2 f 2 2 2 2 f 2 f f . . 
        . f f f f f 2 2 2 2 2 f 1 f . . 
        . f f f 2 f 2 2 2 2 f 2 f f . . 
        . f f f f 2 2 2 2 2 2 1 f f . . 
        . f f f 2 1 2 2 2 2 1 2 f f . . 
        . . . f f f f f f . f f f . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . f f f f f f f f f . . . . 
        . . . f f 1 f 1 1 f 1 2 2 . . . 
        . . f f 1 f f f f f 1 f 2 f . . 
        . . f f f f f f f f f 1 1 f . . 
        . . f f f 2 2 f f 2 2 f f f . . 
        . f 2 f f 2 2 f f 2 2 f f f . . 
        . 2 f f f f f f f f f f 1 f . . 
        . 2 f f 2 f 2 2 2 2 f 2 f f . . 
        . f f f f f 2 2 2 2 2 f 1 f . . 
        . f f f 2 f 2 2 2 2 f 2 f f . . 
        . f f f f 2 2 2 2 2 2 1 f f . . 
        . f f f 2 1 2 2 2 2 1 2 f f . . 
        . . . f f f f f f 2 f f f . . . 
        . . . . . . . 2 2 2 . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        2 2 . f f f f f f f f f . . . . 
        . 2 2 2 f 2 2 2 e f e 2 2 . 2 2 
        . . f 2 2 f f f f f 1 f 2 f 2 . 
        . . f f f f f f f f f 1 1 2 2 . 
        . . f f f 2 2 f f 2 2 f f f 2 . 
        . f 2 f f 2 2 f f 2 2 f f f 2 . 
        . 2 f f f f f f f f f f 1 f 2 . 
        . 2 f f 2 f 2 2 2 2 f 2 f f . . 
        . f f f f f 2 2 2 2 2 f 1 f . . 
        . f f f 2 f 2 2 2 2 f 2 f f . . 
        . f f f f 2 2 2 2 2 2 1 f f . . 
        . f f f 2 1 2 2 2 2 1 2 f f . . 
        . . . f f f f f f 2 f f f . . . 
        . . . . . . . 2 2 2 . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        2 2 . f f f f f f f f f . . . . 
        . 2 2 2 f 2 2 2 e f e 2 2 . 2 2 
        . . f 2 2 f f f f f e f 2 f 2 . 
        . . f f f f f f f f f e e 2 2 . 
        . . f f f 2 2 f f 2 2 f f f 2 . 
        . f 2 f f 2 2 f f 2 2 f f f 2 . 
        . 2 f f f f f f f f f f e f 2 . 
        . 2 f f 2 f 2 2 2 2 f 2 f f . . 
        . f f f f f 2 2 2 2 2 f e f . . 
        . 2 2 f 2 f 2 2 2 2 f 2 f f . . 
        . 2 f f f 2 2 2 2 2 2 e f f . . 
        2 2 f f 2 e 2 2 2 2 e 2 f 2 2 . 
        . . . f f f f f f 2 f f f . 2 . 
        . . . . . . . 2 2 2 . . . . 2 2 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . f f . . . . . . . 
        . . . f f f f f f f f f f . . . 
        . . . f 1 1 1 1 1 1 1 1 f f . . 
        . . . f 1 1 1 1 1 1 1 1 2 f f . 
        . . . f 1 1 f 1 1 f 1 1 1 f f . 
        . . . f 1 f f 1 1 f f 1 1 1 f . 
        . . . f 1 9 1 1 1 1 9 1 1 1 f . 
        . . f f 1 1 1 1 1 f f 1 1 1 f . 
        . . f 2 1 1 1 1 1 1 1 1 1 1 f . 
        . . f 1 1 1 1 1 1 1 1 1 1 1 f . 
        . . f f 1 1 1 1 1 f f 1 1 1 f . 
        . . . f f f f f f f f f f f f . 
        . . . f f . f f f . . . f f . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    200,
    false
    )
    game.showLongText("YOU are marked YOU ARE Cursed", DialogLayout.Center)
})
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.forestTiles12, function (sprite, location) {
    music.spooky.play()
    scene.cameraShake(8, 50)
    game.splash("All these deeds all this accursed things ")
    game.setDialogTextColor(2)
    game.splash("You carry the curses of a billion  why are you here")
    tiles.placeOnRandomTile(p1, sprites.dungeon.collectibleRedCrystal)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.floorLight1, function (sprite, location) {
    game.showLongText("Look at how the treat you *Scoff* it make us sick people like us we dont need a reason or thought to kill. I mean you ARE THE 'PLAYER' so you could kill without consequences", DialogLayout.Bottom)
})
let projectile: Sprite = null
let p1: Sprite = null
game.splash("Wait what where are we")
scene.cameraShake(4, 500)
game.splash("who are we")
scene.cameraShake(4, 500)
game.splash("what are we")
scene.cameraShake(8, 200)
tiles.setCurrentTilemap(tilemap`level3`)
tiles.placeOnRandomTile(sprites.create(img`
    .......bbbbbbbbbbbbbbbbbb.......
    ......b222222222222222222b......
    22222222222222222222222222b.....
    22222222222222222222222222222222
    22222222222222222222222222222222
    22222222222222222222222222222222
    22c11111111111111111111111111c22
    22c11111111111111111111111111c22
    22ccccccccccccccccccccccccccccb2
    bb11111dd11dbbbbbbbbd11dd11111bb
    c11bbcc11dd11dbbbbd11dd11ccbb11c
    c1bbddbcb11fd111111df11bcbddbb1c
    c1bbbddbdbd11dddddd11dbdbddbbb1c
    c11bbddcddffd111111dffddcddbb11c
    cb1111dcbd11ffffffff11dbcd1111bc
    .cb111ccbdd12f1f1f121ddbcc111bc.
    ..cccc.cbdbb2fffff22bbdbc.cccc..
    .......cbdbb22222222bbdbc.......
    .......cbdbd1dd11dd2dbdbc.......
    .......cbdbd1dd11dd2dbdbc.......
    ......ccbdbd1dd11dd1dbdbcc......
    .....cbbbdbd1dd11dd1dbdbbbc.....
    .....cdbbdbd1dd11dd1dbdbbdc.....
    .....c11bbbd1dd11dd1dbbb11c.....
    .....cd111bbbbbbbbbbbb111dc.....
    ....cccd1111111111111111dccc....
    ...cbddbbb111111111111bbbddbc...
    ..cbddddddbbbbbbbbbbbbddddddbc..
    ..c11111111111111111111111111c..
    ..c11111111111111111111111111c..
    ..c11111111111111111111111111c..
    ..cbbbbbbbbbbbbbbbbbbbbbbbbbbc..
    `, SpriteKind.Food), sprites.builtin.forestTiles6)
let mySprite = sprites.create(img`
    ................................
    ................................
    ................................
    ...............fffffff..........
    ...............f33333f..........
    ...............3333333..........
    ...............3333333..........
    ..........fff88883338888fff.....
    ..........f3388888ff888833f.....
    ..........f3388888ff888833f.....
    ..........3338ff88ffff88333.....
    ..........33388888ffff88333.....
    ..........3338888888fff8333.....
    .........f3338888888fff8333f....
    .........f33388888888888333f....
    .........ffff88888888888ffff....
    .............88888888888........
    .............88888888888........
    .............fffffffffff........
    .............ffff222ffff........
    .............ffff222ffff........
    .............eeeeeeeeeee........
    .............eeeeeeeeeee........
    .............eeeee.eeeee........
    .............eeee...eeee........
    .............eeee...eeee........
    .............eeee...eeee........
    ............eeeee...eeeee.......
    ............eeeee...eeeee.......
    ................................
    ................................
    ................................
    `, SpriteKind.Npc)
mySprite = sprites.create(assets.image`devil poo poo`, SpriteKind.Npc)
tiles.placeOnRandomTile(mySprite, sprites.skillmap.islandTile7)
tiles.placeOnRandomTile(mySprite, sprites.dungeon.floorLight0)
p1 = sprites.create(assets.image`main character`, SpriteKind.Player)
controller.moveSprite(p1)
scene.cameraFollowSprite(p1)
tiles.placeOnRandomTile(p1, sprites.dungeon.stairNorth)
