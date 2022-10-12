controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    Dzakir.vy = -190
})
info.onCountdownEnd(function () {
    game.over(false, effects.dissolve)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    game.over(true, effects.bubbles)
})
let Dzakir: Sprite = null
game.setDialogFrame(assets.image`DialogFrame`)
game.showLongText("Adiwiyata Code Jam\\nJudul Game\\nPenjelasan singkat game\\n", DialogLayout.Full)
game.showLongText("Cara main game ini\\n", DialogLayout.Full)
game.showLongText("Tim Pembuat Game:\\n1. Nama - Kelas\\n2. Nama - Kelas\\n(c) Hak Cipta 2022\\nSMP Negeri 2 Kalitidu\\nKab. Bojonegoro\\nJawa Timur - Indonesia", DialogLayout.Full)
scene.setBackgroundImage(assets.image`LatarDino`)
Dzakir = sprites.create(assets.image`DzakirPlayer`, SpriteKind.Player)
let Apel = sprites.create(assets.image`ApelPoint`, SpriteKind.Food)
tiles.setCurrentTilemap(tilemap`level1`)
tiles.placeOnRandomTile(Dzakir, sprites.dungeon.doorOpenNorth)
tiles.placeOnRandomTile(Apel, sprites.dungeon.stairLadder)
scene.cameraFollowSprite(Dzakir)
controller.moveSprite(Dzakir, 100, 0)
Dzakir.ay = 350
info.startCountdown(10)
