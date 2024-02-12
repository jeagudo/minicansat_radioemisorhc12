input.onButtonPressed(Button.A, function () {
    serial.writeLine("Prueba")
})
let texto = ""
basic.showIcon(IconNames.Pitchfork)
serial.redirect(
SerialPin.USB_TX,
SerialPin.P8,
BaudRate.BaudRate9600
)
serial.writeLine("MiniCanSAT 1.0")
basic.forever(function () {
    texto = serial.readLine()
    if (texto != "") {
        serial.writeLine(texto)
    }
})
