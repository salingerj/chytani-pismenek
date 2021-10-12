let Písmeno = 0
let čas = 0
let Body = 0
input.onButtonPressed(Button.AB, function () {
    basic.pause(500)
    for (let index = 0; index < 15; index++) {
        Písmeno = randint(1, 2)
        čas = randint(100, 500)
        if (Písmeno == 1) {
            basic.showString("A")
            while (čas > 0) {
                if (input.buttonIsPressed(Button.A)) {
                    Body += 1
                }
            }
            basic.showString("Hello!")
        }
        if (Písmeno == 2) {
            basic.showString("B")
            while (čas > 0) {
                if (input.buttonIsPressed(Button.B)) {
                    Body += 1
                }
            }
            basic.showString("Hello!")
        }
        basic.clearScreen()
        basic.pause(randint(1000, 3000))
    }
    basic.showString("Konec")
    basic.showString("Pocet bodu:")
    basic.showNumber(Body)
})
input.onGesture(Gesture.Shake, function () {
    basic.showNumber(Body)
})
loops.everyInterval(1, function () {
    čas = čas - 1
})
