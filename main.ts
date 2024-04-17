basic.forever(function () {
    if (pins.analogReadPin(AnalogPin.P0) > 0 && pins.analogReadPin(AnalogPin.P1) < 20) {
        basic.showArrow(ArrowNames.North)
    } else if (pins.analogReadPin(AnalogPin.P1) > 30 && pins.analogReadPin(AnalogPin.P1) < 70) {
        basic.showArrow(ArrowNames.East)
    } else if (pins.analogReadPin(AnalogPin.P1) > 70 && pins.analogReadPin(AnalogPin.P1) < 110) {
        basic.showArrow(ArrowNames.South)
    } else if (pins.analogReadPin(AnalogPin.P1) > 110 && pins.analogReadPin(AnalogPin.P1) < 150) {
        basic.showArrow(ArrowNames.West)
    } else if (pins.analogReadPin(AnalogPin.P1) > 150 && pins.analogReadPin(AnalogPin.P1) < 600) {
        basic.showLeds(`
            . # # # .
            # . . # #
            # . # . #
            # # . . #
            . # # # .
            `)
    }
})
