'use strict'

function renderBoard(mat, selector) {

    var strHTML = '<table border="0" class="board"><tbody>'
    for (var i = 0; i < mat.length; i++) {
        strHTML += '<tr>'
        for (var j = 0; j < mat[0].length; j++) {
            var content;
            const cell = mat[i][j]
            const className = `cell cell-${i}-${j}`

            if (!cell.isShown) {
                content = EMPTY
            } else if (cell.isShown && cell.isMine) {
                content = MINE
            } else if (cell.isShown && cell.isMarked) {
                content = FLAGE
            } else {
                content = cell.minesAroundCount
            }

            strHTML += `<td class="${className}" onclick="cellClicked(${i}, ${j})">${content}</td>`
        }
        strHTML += '</tr>'
    }
    strHTML += '</tbody></table>'

    const elContainer = document.querySelector(selector)
    elContainer.innerHTML = strHTML
}

// //* GET RANDOM INT INCLUSIVE (both included)
function getRandomIntInclusive(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}
// ///////////////////////////////////////////////
// // location is an object like this - { i: 2, j: 7 }
function renderCell(location, value) {
    // Select the elCell and set the value
    const elCell = document.querySelector(`.cell-${location.i}-${location.j}`)
    elCell.innerHTML = value
}
// //* NEIGHBORS LOOP
function countNeighbors(board, rowIdx, colIdx) {
    var mineCount = 0
    for (var i = rowIdx - 1; i <= rowIdx + 1; i++) {
        if (i < 0 || i >= board.length) continue
        for (var j = colIdx - 1; j <= colIdx + 1; j++) {
            if (i === rowIdx && j === colIdx) continue
            if (j < 0 || j >= board[0].length) continue
            var currCell = board[i][j]

            if (currCell.isMine) mineCount++
        }
    }
    return mineCount
}
// //* CREATES BOARD ACCORDING TO GLOBAL SIZE VAR
// function createBoard() {
//     var size = gSize
//     const board = []
//     for (var i = 0; i < size; i++) {
//         board.push([])
//         for (var j = 0; j < size; j++) {
//             board[i][j] = VAR
//         }
//     }
//     return board
// }


// // !/random number between min (included) and max (excluded):
// function getRandomInt(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min)) + min;
// }

// function getRandomColor() {
//     const letters = '0123456789ABCDEF'
//     var color = '#'
//     for (var i = 0; i < 6; i++) {
//         color += letters[Math.floor(Math.random() * 16)]
//     }
//     return color
// }

// //* GETS AN EMPTY GLOBAL VAR OF GNUMS AND BUILDS IT ACCORDING TO THE GNUMSRANGE LENGTH
// function resetNums() {
//     gNums = []
//     for (var i = 0; i < gNumsRange; i++) {
//         gNums.push(i + 1)
//     }
// }
// ///////////////////////////////////////////////////////////////////////////////////////////////
// //* DRAWS A RANDOM NUMBER FROM GNUMS ARRAY AND SPLICES THAT NUM SO IT WONT REPEAT ITSELF
// function drawNum() {
//     var randIdx = getRandomInt(0, gNums.length)
//     var num = gNums[randIdx]
//     gNums.splice(randIdx, 1)
//     return num
// }


// ///////////////////////////////////////////////////////////////////////////////////////////////
// //* INCASE WE NEED TO WORK/RENDER ON NEW MATRIX
// function copyMat(mat) {
//     var newMat = []
//     for (var i = 0; i < mat.length; i++) {
//         newMat[i] = []
//         for (var j = 0; j < mat[0].length; j++) {
//             newMat[i][j] = mat[i][j]
//         }
//     }
//     return newMat
// }

// ///////////////////////////////////////////////////////////////////////////////////////////////
// //* CREATE ANY ITEM
// function createBalloons(count) {
//     var balloons = []
//     for (var i = 0; i < count; i++) {
//         var balloon = createBalloon(i)
//         balloons.push(balloon)
//     }
//     return balloons
// }

// ///////////////////////////////////////////////////////////////////////////////////////////////
// function shuffle(items) {
//     var randIdx, keep, i;
//     for (i = items.length - 1; i > 0; i--) {
//         randIdx = getRandomInt(0, items.length - 1);

//         keep = items[i];
//         items[i] = items[randIdx];
//         items[randIdx] = keep;
//     }
//     return items;
// }


// ///////////////////////////////////////////////////////////////////////////////////////////////

// //* SHOW / HIDE ELEMENT
// function hideElement(selector) {
//     const el = document.querySelector(selector)
//     el.classList.add('hidden')
// }

// function showElement(selector) {
//     const el = document.querySelector(selector)
//     el.classList.remove('hidden')
// }

// ///////////////////////////////////////////////////////////////////////////////////////////////
// //* GET ANY CELL TO AN ARRAY
// function getEmptyCell(board) {
//     const emptyCells = []
//     for (var i = 0; i < board.length; i++) {
//         for (var j = 0; j < board[i].length; j++) {
//             var currCell = board[i][j]
//             if (currCell.gameElement === null && currCell.type !== WALL)
//                 emptyCells.push({ i: i, j: j })
//         }
//     }
//     //* CHOOSE A RANDOM INDEX FROM THAT ARRAY AND RETURN THE CELL ON THAT INDEX
//     const randomIdx = getRandomInt(0, emptyCells.length - 1)
//     return emptyCells[randomIdx]
// }

// ///////////////////////////////////////////////////////////////////////////////////////////////