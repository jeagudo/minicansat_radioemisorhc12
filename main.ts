basic.showIcon(IconNames.SmallHeart)
let Contador = 0
serial.redirect(
SerialPin.P12,
SerialPin.P8,
BaudRate.BaudRate9600
)
loops.everyInterval(1000, function () {
    Contador += 1
    serial.writeLine("" + (Contador))
})
basic.forever(function () {
	
})
