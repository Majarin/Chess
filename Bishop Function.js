// Bishop Movement Logic
{
    const Color = turn === 0 ? 'L' : 'D'
    const currentPiece = document.getElementById(data)
    const currentSquare = currentPiece.parentElement
    const newSquare = ev.target.closest('.rute')
    const oldX = parseInt(currentSquare.dataset.X)
    const oldY = parseInt(currentSquare.dataset.Y)
    const newX = parseInt(newSquare.dataset.X)
    const newY = parseInt(newSquare.dataset.Y)


    if (currentPiece.matches('.Bishop, .Queen') && currentPiece.classList.contains(Color)) {
        const distanceX = Math.abs(newX - oldX)
        const distanceY = Math.abs(newY - oldY)
        const directionX = Math.sign(newX - oldX)
        const directionY = Math.sign(newY - oldY)

        if (distanceX > 0 && distanceX === distanceY) {
            let captured = false

            for (let index = 1; index <= distanceX; index++) {
                const targetX = oldX + index * directionX
                const targetY = oldY + index * directionY
                const targetSquare = document.getElementById(String.fromCharCode(96 + targetX) + targetY)
                const targetPiece = targetSquare.firstElementChild

                if (targetPiece) {
                    captured = true

                    currentPiece.appendChild(targetPiece)
                    targetSquare.appendChild(currentPiece)

                    break
                }
            }

            if (!captured) {
                Real = true
            }
        }
    }
}