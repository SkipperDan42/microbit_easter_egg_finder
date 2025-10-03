radio.onReceivedNumber(function (receivedNumber) {
    Signal = Math.map(radio.receivedPacket(RadioPacketProperty.SignalStrength), -95, -50, 0, 9)
    led.plotBarGraph(
    Signal,
    9
    )
    music.setTempo(Signal * 30)
    music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    music.rest(music.beat(BeatFraction.Whole))
})
input.onButtonPressed(Button.A, function () {
    Egg_Number += -1
    basic.showNumber(Egg_Number)
})
input.onButtonPressed(Button.B, function () {
    Egg_Number += 1
    basic.showNumber(Egg_Number)
})
let Signal = 0
let Egg_Number = 0
Egg_Number = 0
radio.setGroup(Egg_Number)
