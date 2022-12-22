input.onButtonPressed(Button.A, function () {
    basic.showNumber(10224)
})
input.onButtonPressed(Button.B, function () {
    basic.showString("f**k")
})
basic.showIcon(IconNames.Silly)
basic.forever(function () {
    basic.showIcon(IconNames.Heart)
    basic.pause(100)
    basic.showIcon(IconNames.SmallHeart)
    basic.pause(100)
})
