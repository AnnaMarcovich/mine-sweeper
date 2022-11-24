'use strict'

const MINE = '💣'
const FLAGE = '🚩'
const EMPTY = ' '

var gBoard
var gLevel = { size: 4, mines: 2 }
var gGame = {
    isOn: false,
    shownCount: 0,
    markdCount: 0,
    secsPassed: 0
}

function initGame() {

    gBoard = buildBoard()
    setMinesNegsCount(gBoard)
    renderBoard(gBoard, '.board-container')
}

function buildBoard() {
    var size = gLevel.size
    const board = []
    for (var i = 0; i < size; i++) {
        board.push([])
        for (var j = 0; j < size; j++) {
            board[i][j] = {
                minesAroundCount: 0,
                isShown: false,
                isMine: false,
                isMarked: false
            }
        }
    }

    buildMineCells(board);
    return board
}

function buildMineCells(board) {
    var emptyCells = getEmptyCells()

    for (var i = 0; i < gLevel.mines; i++) {
        var idx = getRandomIntInclusive(0, emptyCells.length - 1)
        var emptyCell = emptyCells[idx]
        board[emptyCell.i][emptyCell.j].isMine = true
        emptyCells.splice(idx, 1)

    }

}

function getEmptyCells() {
    const cells = []
    for (var i = 0; i < gLevel.size; i++) {
        for (var j = 0; j < gLevel.size; j++) {
            cells.push({ i, j })
        }
    }

    return cells;
}

function setMinesNegsCount(board) {
    for (var i = 0; i < board.length; i++) {
        for (var j = 0; j < board[0].length; j++) {
            if (!board[i][j].isMine) {
                board[i][j].minesAroundCount = countNeighbors(board, i, j)
            }
        }
    }
}

function chooseDifficult(size, mines) {
    gLevel = { size, mines }
    restart()
}

function restart() {
    document.querySelector('.min').innerText = '00'
    document.querySelector('.sec').innerText = '00'
    initGame()
}

function timer() {
    //sec
    var elSec = document.querySelector('.sec')
    var currSec = elSec.innerText
    currSec++
    elSec.innerText = currSec
    //min
    var elMin = document.querySelector('.min')
    var currMin = elMin.innerText
    if (currSec > 60) {
        currMin++
        elMin.innerText = currMin
        //need to reset the sec
        currSec = 0
        elSec.innerText = currSec
    }

}

function cellClicked(i, j) {
    gBoard[i][j].isShown = true

    renderBoard(gBoard, '.board-container')
}