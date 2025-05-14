// Satt opp funksjon som henter inn color som enten 'D' eller 'L'
function checked(color) {
    // Lager constanten otherColor for å vite kva farge det ikkje er
    const otherColor = color == 'D' ? 'L' : 'D';
    // Bytter ut KingD og KingL med ein felles king. Kan være KingD og KingL må definerast gjennom funskjonen.
    const king = color == 'D' ? KingD : KingL;
    // Dei fleste plasser der det står ting som tempDX er D tatt vekk.
    let tempX = parseInt(king.parentNode.dataset.X)
    let tempY = parseInt(king.parentNode.dataset.Y)
    // checkD og numD er endra til check og num. Eg er usikker på om desse er satt utforbi, kan hende dei må bli plassert inn via funksjonen
    check = color == 'D' ? checkD : checkL;
    // Usikker på kva D1 gjor, så det fekk bli U1 for nå
    var U1 = false
    let X = 0
    let Y = 0
    // Sjå check
    num = 0
    do 
    {
        
        Y++
        let KingY = document.getElementById(String.fromCharCode(96 + tempX) + Y)
        
        if (KingY.hasChildNodes() == true)
        {
            // Bruker color og otherColor istadenfor "D" og "L"
            if (BlockTime1 == true && CheckBlock[0] == false && ((KingY.firstElementChild.classList.contains("Rook") == false && KingY.firstElementChild.classList.contains("Queen") == false  && KingY.firstElementChild.classList.contains(otherColor)) || KingY.firstElementChild.classList.contains(color)))
            {
                CheckBlock[0] = true
                console.log("AAAAA")
            }
            // Endra ".King.D" til ".King." + color siden color er enten "D" eller "L"
            if (KingY.firstElementChild.matches(".King." + color))
            {
                BlockTime2 = false
                BlockTime1 = true
            }
            if (BlockTime2 == true && CheckBlock[4] == false && ((KingY.firstElementChild.classList.contains("Rook") == false && KingY.firstElementChild.classList.contains("Queen") == false  && KingY.firstElementChild.classList.contains(otherColor)) || KingY.firstElementChild.classList.contains(color)))
            {
                CheckBlock[4] = true
                num--
                check[num] = ("")
                console.log("UUUUU")
            }
            if ((KingY.firstElementChild.classList.contains("Rook") || KingY.firstElementChild.classList.contains("Queen")) && KingY.firstElementChild.classList.contains(otherColor))
            {
                if (CheckBlock[0] != true)
                {
                check[num] = (String.fromCharCode(96 + tempX) + Y)
                num++
                }
                if (BlockTime1 == false)
                {
                BlockTime2 = true
                }
            }

        }
        console.log(KingY)
    }while (Y != 8)
    BlockTime1 = false
    BlockTime2 = false
    do 
    {
        X++
        let KingX = document.getElementById(String.fromCharCode(96 + X) + tempY)
        if (KingX.hasChildNodes() == true)
        {
            if (BlockTime1 == true && CheckBlock[2] == false && ((KingX.firstElementChild.classList.contains("Rook") == false && KingX.firstElementChild.classList.contains("Queen") == false  && KingX.firstElementChild.classList.contains(otherColor)) || KingX.firstElementChild.classList.contains(color)))
            {
                CheckBlock[2] = true
                console.log("ZZZZZ")
            }
            if (KingX.firstElementChild.matches(".King." + color))
            {
                BlockTime2 = false
                BlockTime1 = true
            }
            if (BlockTime2 == true && CheckBlock[6] == false && ((KingX.firstElementChild.classList.contains("Rook") == false && KingX.firstElementChild.classList.contains("Queen") == false  && KingX.firstElementChild.classList.contains(otherColor)) || KingX.firstElementChild.classList.contains(color)))
            {
                CheckBlock[6] = true
                num--
                check[num] = ("")
                console.log("CCCCC")
            }
            if ((KingX.firstElementChild.classList.contains("Rook") || KingX.firstElementChild.classList.contains("Queen")) && KingX.firstElementChild.classList.contains(otherColor))
            {        
                if (CheckBlock[2] == false)           
                {
                check[num] = String.fromCharCode(96 + X) + tempY
                num++
                }
                if (BlockTime1 == false)
                {
                BlockTime2 = true
                }
            }
        }     
        console.log(KingX)       
    }while (X != 8)
    BlockTime1 = false
    BlockTime2 = false
        X = tempX
        Y = tempY
    do
    {
        if (X == 1 || Y == 1)
        {
            do
            {
                let KingSqare = document.getElementById(String.fromCharCode(96 + X) + Y)
                if (KingSqare.hasChildNodes() == true)
                {
                    if (BlockTime1 == true && CheckBlock[1] == false && ((KingSqare.firstElementChild.classList.contains("Bishop") == false && KingSqare.firstElementChild.classList.contains("Queen") == false  && KingSqare.firstElementChild.classList.contains(otherColor)) || KingSqare.firstElementChild.classList.contains(color)))
                    {
                        CheckBlock[1] = true
                        console.log("ZZZZZAAAAA")
                    }
                    if (KingSqare.firstElementChild.matches(".King." + color))
                    {
                        BlockTime2 = false
                        BlockTime1 = true
                    }
                    if (BlockTime2 == true && CheckBlock[5] == false && ((KingSqare.firstElementChild.classList.contains("Bishop") == false && KingSqare.firstElementChild.classList.contains("Queen") == false  && KingSqare.firstElementChild.classList.contains(otherColor)) || KingSqare.firstElementChild.classList.contains(color)))
                    {
                        CheckBlock[5] = true
                        num--
                        check[num] = ("")
                        console.log("CCCCCUUUUU")
                    }
                    if ((KingSqare.firstElementChild.classList.contains("Bishop") || KingSqare.firstElementChild.classList.contains("Queen")) && KingSqare.firstElementChild.classList.contains(otherColor))
                    {   
                        if(CheckBlock[1] == false)
                        {                
                        check[num] = String.fromCharCode(96 + X) + Y
                        num++
                        }
                        if (BlockTime1 == false)
                        {
                        BlockTime2 = true
                        }
                    }
                }
                if (X == 8 || Y == 8) 
                    {
                        U1 = true
                    }
                X++
                Y++
                console.log(KingSqare)
            }while (U1 == false)  
        }
        else if (U1 == false)
        {
            X--
            Y-- 
        }
    }while (U1 == false)
    BlockTime1 = false
    BlockTime2 = false
    X = tempX
    Y = tempY
    U1 = false
    do
    {
        if (X == 8 || Y == 1)
        {
            do
            {
                let KingSqare = document.getElementById(String.fromCharCode(96 + X) + Y)
                if (KingSqare.hasChildNodes() == true)
                {
                    if (BlockTime1 == true && CheckBlock[1] == false && ((KingSqare.firstElementChild.classList.contains("Bishop") == false && KingSqare.firstElementChild.classList.contains("Queen") == false  && KingSqare.firstElementChild.classList.contains(otherColor)) || KingSqare.firstElementChild.classList.contains(color)))
                        {
                            CheckBlock[7] = true
                            console.log("AAAAAZZZZZ")
                        }
                        if (KingSqare.firstElementChild.matches(".King." + color))
                        {
                            BlockTime2 = false
                            BlockTime1 = true
                        }
                        if (BlockTime2 == true && CheckBlock[5] == false && ((KingSqare.firstElementChild.classList.contains("Bishop") == false && KingSqare.firstElementChild.classList.contains("Queen") == false  && KingSqare.firstElementChild.classList.contains(otherColor)) || KingSqare.firstElementChild.classList.contains(color)))
                        {
                            CheckBlock[3] = true
                            num--
                            check[num] = ("")
                            console.log("UUUUUZZZZZ")
                        }
                    if ((KingSqare.firstElementChild.classList.contains("Bishop") || KingSqare.firstElementChild.classList.contains("Queen")) && KingSqare.firstElementChild.classList.contains(otherColor))
                    {                   
                        if(CheckBlock[7] == false)
                        {                
                        check[num] = String.fromCharCode(96 + X) + Y
                        num++
                        }
                        if (BlockTime1 == false)
                        {
                        BlockTime2 = true
                        }
                    }
                }
                if (X == 1 || Y == 8) 
                {
                    U1 = true
                }
                Y++
                X--
                console.log(KingSqare)
            }while(U1 == false)
        }
        else if (U1 == false)
        {
            X++
            Y--
        }
    }while (U1 == false)
}