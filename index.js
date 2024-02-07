function superbowlWin(array){
    let winningYear = array.find(object => object.result === `W`)
    if (winningYear) {
        return winningYear.year
    } else {
        return undefined
    }
}

