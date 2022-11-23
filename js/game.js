'use strict'

const MINE = '💣'
const FLAGE = '🚩'
const EMPTY = ' '

var gBoard
var gSize = 4
var gMine = 2
// var gLevel = 16

function initGame() {

    gBoard = buildBoard()
    renderBoard(gBoard, '.board-container')

}

function buildBoard() {
    var size = gSize
    const board = []
    for (var i = 0; i < size; i++) {
        board.push([])
        for (var j = 0; j < size; j++) {
            board[i][j] = ''
        }
    }
    setMinesNegsCount()
    // // Update Model
    // gBoard[randIdx.i][randIdx.j] = MINE

    // // Update DOM
    // renderCell(gBoard, MINE)
    return board
}

function setMinesNegsCount() {
    var randIdx = getRandomIntInclusive(0, gSize ** 2)
    const Cells = []
    for (var i = 0; i < gMine.length; i++) {
        for (var j = 0; j < gMine[0].length; j++) {
            Cells.push({ i, j })

        }
    }
    return Cells[randIdx]
    console.log(Cells[randIdx])
}


// function chooseDifficult(lvl) {
//     gLevel = lvl
//     restart()
// }
