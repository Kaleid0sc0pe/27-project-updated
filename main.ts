function GetNumberatPlace (Number2: number, Place: number) {
    return (Number2 % (Place * 10) - Number2 % Place) / Place
}
function Check_Guess () {
    Playerguess = game.askForNumber("Guess a number", sequence_length)
    for (let value of Correct_Sequence) {
        if (Correct_Sequence[0] == GetNumberatPlace(Playerguess, 10 ** sequence_length)) {
            game.splash("First number correct and in the correct position")
        } else if (value == Playerguess) {
            game.splash("s")
        }
        sequence_length += -1
    }
    game.splash("You have " + (TotalNumberofGuesses - GuessesMade) + " guesses left")
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    game.splash("hi")
    Check_Guess()
})
function SetDifficulty (DifficultyLevel: number) {
    if (DifficultyLevel == 1) {
        scene.setBackgroundColor(12)
        TotalNumberofGuesses = 10
        sequence_length = 4
    } else if (DifficultyLevel == 2) {
        scene.setBackgroundColor(6)
        TotalNumberofGuesses = 9
        sequence_length = 5
    } else if (DifficultyLevel == 3) {
        scene.setBackgroundColor(11)
        TotalNumberofGuesses = 7
        sequence_length = 6
    } else {
        game.splash("You won", "Good job!!!!")
        game.gameOver(true)
    }
}
function Make_Sequence (Sequencelength: number) {
    Correct_Sequence = []
    for (let index = 0; index < Sequencelength; index++) {
        NextNuminSequence = randint(1, 9)
        Correct_Sequence.push(NextNuminSequence)
    }
    game.splash(Correct_Sequence)
}
let NextNuminSequence = 0
let TotalNumberofGuesses = 0
let Correct_Sequence: number[] = []
let Playerguess = 0
let GuessesMade = 0
let sequence_length = 0
let Dfficultylevel = 1
SetDifficulty(Dfficultylevel)
Make_Sequence(sequence_length)
let CodeMakerSprite = sprites.create(img`
    ........................
    ........................
    ........................
    ........................
    ..........ffff..........
    ........ff1111ff........
    .......fb111111bf.......
    .......f11111111f.......
    ......fd11111111df......
    ......fd11111111df......
    ......fddd1111dddf......
    ......fbdbfddfbdbf......
    ......fcdcf11fcdcf......
    .......fb111111bf.......
    ......fffcdb1bdffff.....
    ....fc111cbfbfc111cf....
    ....f1b1b1ffff1b1b1f....
    ....fbfbffffffbfbfbf....
    .........ffffff.........
    ...........fff..........
    ........................
    ........................
    ........................
    ........................
    `, SpriteKind.Enemy)
GuessesMade = 0
CodeMakerSprite.sayText("I bet you can't guess my password", 2000, false)
pause(2000)
game.splash("Press A to guess the code")
