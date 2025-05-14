function rook(Color)
{
    let X = 0
    let Y = 0


    if ((oldX != newX || oldY != newY) && Info.id == Piece25)
    {
        RookmoveL1 = true
    }
    if ((oldX != newX || oldY != newY) && Info.id == Piece32)
    {
        RookmoveL2 = true
    }
    if (newY == oldY || newX == oldX)
    {
        if (newY != oldY)
        {
            Y = oldY
            do{
                if (newY > Y)
                {
                    Y = Y + 1
                }
                else if (newY < Y )
                {
                    Y = Y - 1
                }
                let squere = document.getElementById(String.fromCharCode(96 + oldX) + Y)
                if (squere.hasChildNodes())
                {
                    RookmoveL = true
                    let ChildNode = squere.childNodes[0];
                    let ChildID = ChildNode.id
                    Info.appendChild(document.getElementById(ChildID));
                    squere.appendChild(Info);
                    newY = Y
                    appended = true
                    Real = false
                }else if (appended == false)
                {
                    Real = true
                }

            }while (Y != newY) 
        }
        if (newX != oldX)
        {
            X = oldX

            do{
                if (newX > X) 
                {
                    X = X + 1
                }
                else if (newX < X )
                {
                    X = X - 1
                }
                let squere = document.getElementById(String.fromCharCode(96 + X) + oldY)
                if (squere.hasChildNodes())
                {
                    RookmoveL = true
                    let ChildNode = squere.childNodes[0];
                    let ChildID = ChildNode.id
                    Info.appendChild(document.getElementById(ChildID));
                    squere.appendChild(Info);
                    newX = X
                    appended = true
                    Real = false
                }else if (appended == false)
                {
                    Real = true
                }
            }while (X != newX) 
        }
    }
    if (ev.target.parentNode.dataset.Y == oldY || ev.target.parentNode.dataset.X == oldX)
    {
        if (newTY != oldY)
        {
            Y = oldY
            do{
                if (newTY > Y)
                {
                    Y = Y + 1
                }
                else if (newTY < Y )
                {
                    Y = Y - 1
                }
                let squere = document.getElementById(String.fromCharCode(96 + oldX) + Y)
                if (squere.hasChildNodes())
                {
                    RookmoveL = true
                    let ChildNode = squere.childNodes[0];
                    let ChildID = ChildNode.id
                    Info.appendChild(document.getElementById(ChildID));
                    squere.appendChild(Info);
                    newTY = Y
                    appended = true
                    Real = false
                }else if (appended == false)
                {
                    Real = true
                }
            }while (Y != newTY) 
        }
        if (newX != oldX)
        {
            X = oldX

            do{
                if (newTX > X)
                {
                    X = X + 1
                }
                else if (newTX < X )
                {
                    X = X - 1
                }
                let squere = document.getElementById(String.fromCharCode(96 + X) + oldY)
                if (squere.hasChildNodes())
                {
                    if (newTX != oldX)
                    {
                        RookmoveL = true
                        let ChildNode = squere.childNodes[0];
                        let ChildID = ChildNode.id
                        Info.appendChild(document.getElementById(ChildID));
                        squere.appendChild(Info);
                        newTX = X
                        appended = true
                        Real = false
                    }
                }else if (appended == false)
                {
                    Real = true
                }
            }while (X != newTX) 
        }
    }
    
}