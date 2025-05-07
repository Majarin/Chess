
    let i = 0
    CheckBlock.forEach((element) => { 
        CheckBlock[i] = false
        i++
        });

let tempDX = parseInt(KingD.parentNode.dataset.X)
let tempDY = parseInt(KingD.parentNode.dataset.Y)
checkD = []
var D1 = false
let DX = 0
let DY = 0

BlockTime1 = false
BlockTime2 = false
numD = 0
do 
{
    
    DY++
    let KingDY = document.getElementById(String.fromCharCode(96 + tempDX) + DY)
    
    if (KingDY.hasChildNodes() == true)
    {

        if (BlockTime1 == true && CheckBlock[0] == false && ((KingDY.firstElementChild.classList.contains("Rook") == false && KingDY.firstElementChild.classList.contains("Queen") == false  && KingDY.firstElementChild.classList.contains("D")) || KingDY.firstElementChild.classList.contains("L")))
        {
            CheckBlock[0] = true
            console.log("AAAAA")
        }
        if (KingDY.firstElementChild.matches(".King.D"))
        {
            BlockTime2 = false
            BlockTime1 = true
        }
        if (BlockTime2 == true && CheckBlock[4] == false && ((KingDY.firstElementChild.classList.contains("Rook") == false && KingDY.firstElementChild.classList.contains("Queen") == false  && KingDY.firstElementChild.classList.contains("D")) || KingDY.firstElementChild.classList.contains("L")))
        {
            CheckBlock[4] = true
            numD--
            checkD[numD] = ("")
            console.log("UUUUU")
        }
        if ((KingDY.firstElementChild.classList.contains("Rook") || KingDY.firstElementChild.classList.contains("Queen")) && KingDY.firstElementChild.classList.contains("L"))
        {
            if (CheckBlock[0] != true)
            {
            checkD[numD] = (String.fromCharCode(96 + tempDX) + DY)
            numD++
            }
            if (BlockTime1 == false)
            {
            BlockTime2 = true
            console.warn("aaaaaaaa")
            }
        }

    }
    console.log(KingDY)
}while (DY != 8)
BlockTime1 = false
BlockTime2 = false
do 
{
    DX++
    let KingDX = document.getElementById(String.fromCharCode(96 + DX) + tempDY)
    if (KingDX.hasChildNodes() == true)
    {
        if (BlockTime1 == true && CheckBlock[2] == false && ((KingDX.firstElementChild.classList.contains("Rook") == false && KingDX.firstElementChild.classList.contains("Queen") == false  && KingDX.firstElementChild.classList.contains("D")) || KingDX.firstElementChild.classList.contains("L")))
        {
            CheckBlock[2] = true
            console.log("ZZZZZ")
        }
        if (KingDX.firstElementChild.matches(".King.D"))
        {
            BlockTime2 = false
            BlockTime1 = true
        }
        if (BlockTime2 == true && CheckBlock[6] == false && ((KingDX.firstElementChild.classList.contains("Rook") == false && KingDX.firstElementChild.classList.contains("Queen") == false  && KingDX.firstElementChild.classList.contains("D")) || KingDX.firstElementChild.classList.contains("L")))
        {
            CheckBlock[6] = true
            numD--
            checkD[numD] = ("")
            console.log("CCCCC")
        }
        if ((KingDX.firstElementChild.classList.contains("Rook") || KingDX.firstElementChild.classList.contains("Queen")) && KingDX.firstElementChild.classList.contains("L"))
        {        
            if (CheckBlock[2] == false)           
            {
            checkD[numD] = String.fromCharCode(96 + DX) + tempDY
            numD++
            }
            if (BlockTime1 == false)
            {
            BlockTime2 = true
            }
        }
    }     
    console.log(KingDX)       
}while (DX != 8)
BlockTime1 = false
BlockTime2 = false
    DX = tempDX
    DY = tempDY
do
{
    if (DX == 1 || DY == 1)
    {
        do
        {
            let KingDSqare = document.getElementById(String.fromCharCode(96 + DX) + DY)
            if (KingDSqare.hasChildNodes() == true)
            {
                if (BlockTime1 == true && CheckBlock[1] == false && ((KingDSqare.firstElementChild.classList.contains("Bishop") == false && KingDSqare.firstElementChild.classList.contains("Queen") == false  && KingDSqare.firstElementChild.classList.contains("D")) || KingDSqare.firstElementChild.classList.contains("L")))
                {
                    CheckBlock[1] = true
                    console.log("ZZZZZAAAAA")
                }
                if (KingDSqare.firstElementChild.matches(".King.D"))
                {
                    BlockTime2 = false
                    BlockTime1 = true
                }
                if (BlockTime2 == true && CheckBlock[5] == false && ((KingDSqare.firstElementChild.classList.contains("Bishop") == false && KingDSqare.firstElementChild.classList.contains("Queen") == false  && KingDSqare.firstElementChild.classList.contains("D")) || KingDSqare.firstElementChild.classList.contains("L")))
                {
                    CheckBlock[5] = true
                    numD--
                    checkD[numD] = ("")
                    console.log("CCCCCUUUUU")
                }
                if ((KingDSqare.firstElementChild.classList.contains("Bishop") || KingDSqare.firstElementChild.classList.contains("Queen")) && KingDSqare.firstElementChild.classList.contains("L"))
                {   
                    if(CheckBlock[1] == false)
                    {                
                    checkD[numD] = String.fromCharCode(96 + DX) + DY
                    numD++
                    }
                    if (BlockTime1 == false)
                    {
                    BlockTime2 = true
                    }
                }
            }
            if (DX == 8 || DY == 8) 
                {
                    D1 = true
                }
            DX++
            DY++
            console.log(KingDSqare)
        }while (D1 == false)  
    }
    else if (D1 == false)
    {
        DX--
        DY-- 
    }
}while (D1 == false)
BlockTime1 = false
BlockTime2 = false
DX = tempDX
DY = tempDY
D1 = false
do
{
    if (DX == 8 || DY == 1)
    {
        do
        {
            let KingDSqare = document.getElementById(String.fromCharCode(96 + DX) + DY)
            if (KingDSqare.hasChildNodes() == true)
            {
                if (BlockTime1 == true && CheckBlock[1] == false && ((KingDSqare.firstElementChild.classList.contains("Bishop") == false && KingDSqare.firstElementChild.classList.contains("Queen") == false  && KingDSqare.firstElementChild.classList.contains("D")) || KingDSqare.firstElementChild.classList.contains("L")))
                    {
                        CheckBlock[7] = true
                        console.log("AAAAAZZZZZ")
                    }
                    if (KingDSqare.firstElementChild.matches(".King.D"))
                    {
                        BlockTime2 = false
                        BlockTime1 = true
                    }
                    if (BlockTime2 == true && CheckBlock[5] == false && ((KingDSqare.firstElementChild.classList.contains("Bishop") == false && KingDSqare.firstElementChild.classList.contains("Queen") == false  && KingDSqare.firstElementChild.classList.contains("D")) || KingDSqare.firstElementChild.classList.contains("L")))
                    {
                        CheckBlock[3] = true
                        numD--
                        checkD[numD] = ("")
                        console.log("UUUUUZZZZZ")
                    }
                if ((KingDSqare.firstElementChild.classList.contains("Bishop") || KingDSqare.firstElementChild.classList.contains("Queen")) && KingDSqare.firstElementChild.classList.contains("L"))
                {                   
                    if(CheckBlock[7] == false)
                    {                
                    checkD[numD] = String.fromCharCode(96 + DX) + DY
                    numD++
                    }
                    if (BlockTime1 == false)
                    {
                    BlockTime2 = true
                    }
                }
            }
            if (DX == 1 || DY == 8) 
            {
                D1 = true
            }
            DY++
            DX--
            console.log(KingDSqare)
        }while(D1 == false)
    }
    else if (D1 == false)
    {
        DX++
        DY--
    }
}while (D1 == false)