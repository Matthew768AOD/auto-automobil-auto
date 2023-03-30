
const centerP: DigitalPin = DigitalPin.P8
pins.setPull(centerP, PinPullMode.PullNone)

let center: boolean = false

basic.forever(function() {

    center = pins.digitalReadPin(centerP) == 1


    if (center)
        led.plot(2, 2)
    else
        led.unplot(2, 2)
console.log(center)
    basic.pause(10)
})

const centerPP: DigitalPin = DigitalPin.P14
pins.setPull(centerPP, PinPullMode.PullNone)

let centerPPP: boolean = false

basic.forever(function () {

    centerPPP = pins.digitalReadPin(centerPP) == 1


    if (center)
        led.plot(2, 2)
    else
        led.unplot(2, 2)
    console.log(centerPPP)
    basic.pause(10)
})
