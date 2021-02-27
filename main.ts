basic.forever(function () {
    basic.showIcon(IconNames.Heart)
    basic.pause(2000)
    basic.showLeds(`
        . . . . .
        # # . # #
        # # # # #
        . # # # .
        . . # . .
        `)
    basic.pause(2000)
    basic.showIcon(IconNames.SmallHeart)
    basic.pause(2000)
    basic.showLeds(`
        . . . . .
        # # . # #
        # # # # #
        . # # # .
        . . # . .
        `)
    basic.pause(2000)
    basic.showIcon(IconNames.Heart)
})
