input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.temperature())
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(input.temperature() * 1.8 + 32)
})
basic.forever(function () {
	
})
