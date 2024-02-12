BMP280.PowerOn()
basic.showIcon(IconNames.Happy)
let Contador = 0
serial.redirect(
SerialPin.P12,
SerialPin.P8,
BaudRate.BaudRate9600
)
loops.everyInterval(1000, function () {
    Contador += 1
    serial.writeLine("" + ([BMP280.pressure(), ",", BMP280.temperature()]))
})
basic.forever(function () {
	
})
