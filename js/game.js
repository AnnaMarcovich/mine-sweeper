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
    setMinesNegsCount(gBoard)
    renderBoard(gBoard, '.board-container')
}

function buildBoard() {
    var size = gSize
    const board = []
    for (var i = 0; i < size; i++) {
        board.push([])
        for (var j = 0; j < size; j++) {
            board[i][j] = EMPTY
        }
    }

    buildMineCells(board);

    // for (var i = 0; i < gMine; i++) {
    //     var randomCell = getEmptyCells()
    //     board[randomCell.i][randomCell.j] = MINE
    // }
    return board
}

function buildMineCells(board) {
    var emptyCells = getEmptyCells()

    for (var i = 0; i < gMine; i++) {
        var idx = getRandomIntInclusive(0, emptyCells.length - 1)
        var emptyCell = emptyCells[idx]
        board[emptyCell.i][emptyCell.j] = MINE
        emptyCells.splice(idx, 1)

    }

}

function getEmptyCells() {
    const cells = []
    for (var i = 0; i < gSize; i++) {
        for (var j = 0; j < gSize; j++) {
            cells.push({ i, j })
        }
    }

    return cells;
}

function setMinesNegsCount(board) {
    for (var i = 0; i < board.length; i++) {
        for (var j = 0; j < board[0].length; j++) {
            if (board[i][j] !== MINE) {
                board[i][j] = countNeighbors(board, i, j)
            }
        }
    }
}

// function chooseDifficult(lvl) {
//     gLevel = lvl
//     restart()
// }
