var txt = "L"
var turn = 0
var StrangeL 
var StrangeD 
var KingMoveL = false
var RookmoveL1 = false
var RookmoveL2 = false
var KingMoveD = false
var RookmoveD1 = false
var RookmoveD2 = false
var checkL = []
var checkD = []
var KingL = document.getElementById("Piece29")
var KingD = document.getElementById("Piece5")
var DK = true
var LK = true
var GD = false
var Winner = ""
const KnightLog= 
[
    [1, 2],
    [2, 1],
    [-1, 2],
    [-2, 1],
    [-1, -2],
    [-2, -1],
    [1, -2],
    [2, -1]
]
//ca a az
//c     z
//cu u uz 

{

var totalTime = 10 * 60 * 1000; // 10 minutes in milliseconds
var countDownDate = new Date().getTime() + totalTime;
var paused = false;
var remainingTime = totalTime;
var interval;



function startTimer(duration)
{
    var start = new Date().getTime();
    countDownDate = start + duration;

    interval = setInterval(function () 
    {
        if (!paused)
        {
            var now = new Date().getTime();
            var distance = countDownDate - now;

            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);

            document.getElementById("demo").innerHTML = "Light " + minutes + "m " + seconds + "s ";

            if (distance <= 0) 
            {
                clearInterval(interval);
                document.getElementById("demo").innerHTML = "EXPIRED";
                var Winner = document.getElementById("Winner")
                Winner.innerHTML = "The Winner Is    Dark"
                Winner.style.display = ""
                LK = false
            }
        }
    }, 1000);
}



var totalTime1 = 10 * 60 * 1000; // 10 minutes in milliseconds
var countDownDate1 = new Date().getTime() + totalTime1;
var paused1 = false;
var remainingTime = totalTime1;
var interval1;



function startTimer1(duration1)
{
    var start1 = new Date().getTime();
    countDownDate1 = start1 + duration1;

    interval1 = setInterval(function () 
    {
        if (!paused1)
        {
            var now1 = new Date().getTime();
            var distance1 = countDownDate1 - now1;

            var minutes1 = Math.floor((distance1 % (1000 * 60 * 60)) / (1000 * 60));
            var seconds1 = Math.floor((distance1 % (1000 * 60)) / 1000);

            document.getElementById("demo1").innerHTML ="Dark " + minutes1 + "m " + seconds1 + "s ";

            if (distance1 <= 0) 
            {
                clearInterval(interval1);
                document.getElementById("demo1").innerHTML = "EXPIRED";
                var Winner = document.getElementById("Winner")
                Winner.style.display = ""
                Winner.innerHTML = "The Winner Is    Light"
                DK = false
            }
        }
    }, 1000);
}

}

//Rook
function rook(Color)
{
    const otherColor = Color == 'D' ? 'L' : 'D';
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
    
}//Rook


startTimer(totalTime);

var now1 = new Date().getTime();
remainingTime1 = countDownDate1 - now1;
var now = new Date().getTime();
remainingTime = countDownDate - now;



function myDunction()
{
    if (turn == 0)
    {
        txt = "Turn D"
        turn = 1
        paused = true;
        paused1 = false;
        clearInterval(interval);
        var now = new Date().getTime();
        remainingTime = countDownDate - now;
        startTimer1(remainingTime1);
    }else if (turn == 1)
    {
        txt = "Turn L"
        turn = 0
        paused = false;
        paused1 = true;
        startTimer(remainingTime);
        clearInterval(interval1);
        var now1 = new Date().getTime();
        remainingTime1 = countDownDate1 - now1;
    }
    document.getElementById("test").innerHTML = txt;
}

function allowDrop(ev) 
{
    if((ev.target.classList.contains("rute") || ev.target.classList.contains("Pice")) && DK == true && LK == true )
    {
        ev.preventDefault();
    }
 }

  function drag(ev) 
  {
    ev.dataTransfer.setData("text", ev.target.id);
  }
  
  function drop(ev) 
  {  
    var Real = false
    DK = false
    LK = false
    var data = ev.dataTransfer.getData("text");
    var Info = (document.getElementById(data));
    var oldY = parseInt(Info.parentNode.dataset.Y)
    var newY = parseInt(ev.target.dataset.Y)
    var newTY = parseInt(ev.target.parentNode.dataset.Y)
    var oldX = parseInt(Info.parentNode.dataset.X)
    var newX = parseInt(ev.target.dataset.X)
    var newTX = parseInt(ev.target.parentNode.dataset.X)
    const CheckBlock = new Array(8).fill(false)
    var BlockTime1 = false
    var BlockTime2 = false

    var appended = false
    
    if (ev.target.dataset.Y != null && ev.target.dataset.X != null)
    {
    } else if (ev.target.parentNode.dataset.Y != null && ev.target.parentNode.dataset.X != null)
    {
    }
    
    if (turn == 0 && StrangeL != null && StrangeL.classList.contains("Strange") && StrangeL.classList.contains("L"))
    {
        StrangeL.classList.remove("Strange")
    } 
    if (turn == 1 && StrangeD != null && StrangeD.classList.contains("Strange") && StrangeD.classList.contains("D"))
    {
        StrangeD.classList.remove("Strange")
    } 
//Movement Logic
{

    // Light Pawn Movement Logic
    if (Info.classList.contains("Pawn") && Info.classList.contains("L") && turn == 0)
    {
        if (newY == oldY + 2 && oldY == 2  && newX == oldX)
        {
           
            if (document.getElementById(String.fromCharCode(96 + oldX) + 3).hasChildNodes() == false)
            {
                Real = true
                Info.classList.add("Strange")
                StrangeL = Info
            }
        }
        else if (newY == oldY + 1 && newX == oldX)
        {
        Real = true
        }

        if (ev.target.parentNode.dataset.Y == oldY + 1 && ev.target.classList.contains("Pice") && (ev.target.parentNode.dataset.X == oldX - 1 ||ev.target.parentNode.dataset.X == oldX + 1) )
        {
            Real = true
            
        }
        if (StrangeD != null)
        {
            if (StrangeD.parentNode.dataset.Y == Info.parentNode.dataset.Y && StrangeD.classList.contains("Strange") && Math.abs(Info.parentNode.dataset.X - StrangeD.parentNode.dataset.X) == 1 && newY == oldY + 1 && newX == StrangeD.parentNode.dataset.X)
                {
                    Real = true
                    Info.appendChild(StrangeD);
                }
        }
        if ((ev.target.parentNode.dataset.Y == 8 || newY == 8 ) && Real == true )
        {
            
            Info.src = "LightQueen.png";
            Info.classList.remove("Pawn")
            Info.classList.add("Queen")
        }
    }
    // Light Rook Movement Logic
    if ((Info.classList.contains("Rook") || Info.classList.contains("Queen") ) && Info.classList.contains("L") && turn == 0)
    {
        rook("L")
    }
    // Light Knight Movement Logic
    if (Info.classList.contains("Knight") && Info.classList.contains("L") && turn == 0)
    {
        if (Math.abs(newX-oldX) == 1 && Math.abs(newY-oldY) == 2 || Math.abs(newX-oldX) == 2 && Math.abs(newY-oldY) == 1)
        {
            Real = true 
        }else if (Math.abs(newTX-oldX) == 1 && Math.abs(newTY-oldY) == 2 || Math.abs(newTX-oldX) == 2 && Math.abs(newTY-oldY) == 1)
        {
            Real = true
        }   
    }
    // Light Bishop Movement Logic
    if ((Info.classList.contains("Bishop") || Info.classList.contains("Queen")) && Info.classList.contains("L") && turn == 0)
    {
        
        
        if (oldX != newX && oldY != newY && ! ev.target.classList.contains("Pice"))
        {
            tempX = oldX
            tempY = oldY
            
            
            do{

                if (tempX < newX)
                {
                    tempX++
                }else if (tempX > newX)
                {
                    tempX--
                }
                if (tempY < newY)
                {
                    tempY++
                }else if (tempY > newY)
                {
                    tempY--
                }
                let squere = document.getElementById(String.fromCharCode(96 + tempX) + tempY)
                if (squere.hasChildNodes()) 
                {
                    let ChildNode = squere.childNodes[0];
                    let ChildID = ChildNode.id
                    let Child = document.getElementById(ChildID)
                    


                    Info.appendChild(Child);
                    squere.appendChild(Info);
                    
                    tempY = newY
                    tempX = newX

                }else if (tempX == newX && tempY == newY)
                {
                    Real = true
                }
            }while (tempX != newX && tempY != newY)
        }
        if (ev.target.parentNode.dataset.Y != oldY && ev.target.parentNode.dataset.X != oldX && ev.target.classList.contains("Pice"))
        {
            tempX = oldX
            tempY = oldY
            do{
                
            if (tempX < newTX)
            {
                tempX++
            }else if (tempX > newTX)
            {
                tempX--
            }
            if (tempY < newTY)
            {
                tempY++
            }else if (tempY > newTY)
            {
                tempY--
            }
            let squere = document.getElementById(String.fromCharCode(96 + tempX) + tempY)

            if (squere.hasChildNodes()) 
            {
                if (oldX != newTX && oldY != newTY)
                {
                    let ChildNode = squere.childNodes[0];
                    let ChildID = ChildNode.id
                    let Child = document.getElementById(ChildID)
    
                        
                    Info.appendChild(Child);
                    squere.appendChild(Info);
                    
                    tempY = newTY
                    tempX = newTX
    
                }
            }
    

            }while (tempX != newTX && tempY != newTY)
        } 
 
        

    }
    // Light Queen Movement Logic
            // it is litaraly just a bishop and a rook
    // Light King Movement Logic
    if (Info.classList.contains("King") && Info.classList.contains("L") && turn == 0)
    {
        if (ev.target.id == "Piece25" && KingMoveL == false && RookmoveL1 == false && document.getElementById("b1").hasChildNodes() != true && document.getElementById("c1").hasChildNodes() != true && document.getElementById("d1").hasChildNodes() != true)
        {
            document.getElementById("c1").appendChild(Info)
            document.getElementById("d1").appendChild(document.getElementById("Piece25"))
            KingMoveL = true
        }
        if (ev.target.id == "Piece32" && KingMoveL == false && RookmoveL2 == false && document.getElementById("f1").hasChildNodes() != true && document.getElementById("g1").hasChildNodes() != true)
        {
            document.getElementById("g1").appendChild(Info)
            document.getElementById("f1").appendChild(document.getElementById("Piece32"))
            KingMoveL = true
        }
        var tempX = oldX
        var tempY = oldY
        //document.getElementById(String.fromCharCode(96 + tempX) + tempY)
        if (Math.abs(oldX-newX) <= 1 && Math.abs(oldY-newY) <= 1)
        {
            Real = true
            KingMoveL = true
        }
        if (Math.abs(oldX-newTX) <= 1 && Math.abs(oldY-newTY) <= 1)
        {
            Real = true
            KingMoveL = true
        }
    }


    // Dark Pawn Movement Logic
    if (Info.classList.contains("Pawn") && Info.classList.contains("D") && turn == 1)
    {
        
        if (newY == oldY - 2 && oldY == 7  && newX == oldX)
        {
            if (document.getElementById(String.fromCharCode(96 + oldX) + 6).hasChildNodes() == false)
            {   
            Real = true
            Info.classList.add("Strange")
            StrangeD = Info
            }
        }
        else if (newY == oldY - 1 && newX == oldX)
        {
        Real = true
        }
        if (StrangeL != null)
        {
            if (StrangeL.parentNode.dataset.Y == Info.parentNode.dataset.Y && StrangeL.classList.contains("Strange") && Math.abs(Info.parentNode.dataset.X - StrangeL.parentNode.dataset.X) == 1 && newY == oldY - 1 && newX == StrangeL.parentNode.dataset.X)
                {
                    Real = true
                    Info.appendChild(StrangeL);
                }
        }
        if (ev.target.parentNode.dataset.Y == oldY - 1 && ev.target.classList.contains("Pice") && (ev.target.parentNode.dataset.X == oldX - 1 ||ev.target.parentNode.dataset.X == oldX + 1) )
        {
            Real = true
            
        }
        if ((ev.target.parentNode.dataset.Y == 1 || newY == 1 ) && Real == true )
        {
            Info.src = "DarkQueen.png";
            Info.classList.remove("Pawn")
            Info.classList.add("Queen")
        }
    }     
    // Dark Rook Movement Logic
    if ((Info.classList.contains("Rook") || Info.classList.contains("Queen")) && Info.classList.contains("D") && turn == 1)
        {
            if ((oldX != newX || oldY != newY) && Info.id == Piece1)
                {
                    RookmoveD1 = true
                }
            if ((oldX != newX || oldY != newY) && Info.id == Piece8)
                {
                    RookmoveD2 = true
                }
            if (newY == oldY || newX == oldX)
            {
                if (newY != oldY)
                {
                    tempY = oldY
                    do{
                        if (newY > tempY)
                        {
                            tempY = tempY + 1
                        }
                        else if (newY < tempY )
                        {
                            tempY = tempY - 1
                        }
                        let squere = document.getElementById(String.fromCharCode(96 + oldX) + tempY)
                        if (squere.hasChildNodes())
                        {
                            RookmoveD = true
                            let ChildNode = squere.childNodes[0];
                            let ChildID = ChildNode.id
                            Info.appendChild(document.getElementById(ChildID));
                            squere.appendChild(Info);
                            newY = tempY
                            appended = true
                            Real = false
                        }else if (appended == false)
                        {
                            Real = true
                        }
    
                    }while (tempY != newY) 
                }
                if (newX != oldX)
                {
                    tempX = oldX
    
                    do{
                        if (newX > tempX) 
                        {
                            tempX = tempX + 1
                        }
                        else if (newX < tempX )
                        {
                            tempX = tempX - 1
                        }
                        let squere = document.getElementById(String.fromCharCode(96 + tempX) + oldY)
                        if (squere.hasChildNodes())
                        {
                            RookmoveD = true
                            let ChildNode = squere.childNodes[0];
                            let ChildID = ChildNode.id
                            Info.appendChild(document.getElementById(ChildID));
                            squere.appendChild(Info);
                            newX = tempX
                            appended = true
                            Real = false
                        }else if (appended == false)
                            {
                                Real = true
                            }
                    }while (tempX != newX) 
                }
            }
            if (ev.target.parentNode.dataset.Y == oldY || ev.target.parentNode.dataset.X == oldX)
            {
                if (newTY != oldY)
                {
                    tempY = oldY
                    do{
                        if (newTY > tempY)
                        {
                            tempY = tempY + 1
                        }
                        else if (newTY < tempY )
                        {
                            tempY = tempY - 1
                        }
                        let squere = document.getElementById(String.fromCharCode(96 + oldX) + tempY)
                        if (squere.hasChildNodes())
                        {
                            RookmoveD = true
                            let ChildNode = squere.childNodes[0];
                            let ChildID = ChildNode.id
                            Info.appendChild(document.getElementById(ChildID));
                            squere.appendChild(Info);
                            newTY = tempY
                            appended = true
                            Real = false
                        }else if (appended == false)
                            {
                                Real = true
                            }
                    }while (tempY != newTY) 
                }
                if (newX != oldX)
                {
                    tempX = oldX
    
                    do{
                        if (newTX > tempX)
                        {
                            tempX = tempX + 1
                        }
                        else if (newTX < tempX )
                        {
                            tempX = tempX - 1
                        }
                        let squere = document.getElementById(String.fromCharCode(96 + tempX) + oldY)
                        if (squere.hasChildNodes())
                        {
                            if (newTX != oldX)
                            {
                            RookmoveD = true
                            let ChildNode = squere.childNodes[0];
                            let ChildID = ChildNode.id
                            Info.appendChild(document.getElementById(ChildID));
                            squere.appendChild(Info);
                            newTX = tempX
                            appended = true
                            Real = false
                            }
                        }else if (appended == false)
                            {
                                Real = true
                            }
                    }while (tempX != newTX) 
                }
            }
    }
    // Dark Knight Movement Logic
    if (Info.classList.contains("Knight") && Info.classList.contains("D") && turn == 1)
    {
        
        if (Math.abs(newX-oldX) == 1 && Math.abs(newY-oldY) == 2 || Math.abs(newX-oldX) == 2 && Math.abs(newY-oldY) == 1)
            {
                Real = true 
            }else if (Math.abs(newTX-oldX) == 1 && Math.abs(newTY-oldY) == 2 || Math.abs(newTX-oldX) == 2 && Math.abs(newTY-oldY) == 1)
            {
                Real = true
            }   
    }
    // Dark Bishop Movement Logic
    if ((Info.classList.contains("Bishop") || Info.classList.contains("Queen")) && Info.classList.contains("D") && turn == 1)
    {

        
        if (oldX != newX && oldY != newY && ! ev.target.classList.contains("Pice"))
        {
            tempX = oldX
            tempY = oldY
            
            
            do{

            if (tempX < newX)
            {
                tempX++
            }else if (tempX > newX)
            {
                tempX--
            }
            if (tempY < newY)
            {
                tempY++
            }else if (tempY > newY)
            {
                tempY--
            }
            let squere = document.getElementById(String.fromCharCode(96 + tempX) + tempY)
            if (squere.hasChildNodes() != null)
            {
                if (squere.hasChildNodes()) 
                {
                    let ChildNode = squere.childNodes[0];
                    let ChildID = ChildNode.id
                    let Child = document.getElementById(ChildID)
                    
                    
                    Info.appendChild(Child);
                    squere.appendChild(Info);

                    tempY = newY
                    tempX = newX
                }else if (tempX == newX && tempY == newY)
                {
                    Real = true
                }
            }
            }while (tempX != newX && tempY != newY)
        }
        if (ev.target.parentNode.dataset.Y != oldY && ev.target.parentNode.dataset.X != oldX && ev.target.classList.contains("Pice"))
            {
                tempX = oldX
                tempY = oldY
                do{
    
                if (tempX < newTX)
                {
                    tempX++
                }else if (tempX > newTX)
                {
                    tempX--
                }
                if (tempY < newTY)
                {
                    tempY++
                }else if (tempY > newTY)
                {
                    tempY--
                }
                let squere = document.getElementById(String.fromCharCode(96 + tempX) + tempY)

                
                if (squere.hasChildNodes()) 
                    {
                        if (oldX != newTX && oldY != newTY)
                        {
                            let ChildNode = squere.childNodes[0];
                            let ChildID = ChildNode.id
                            let Child = document.getElementById(ChildID)
            
                                
                            Info.appendChild(Child);
                            squere.appendChild(Info);
                            
                            tempY = newTY
                            tempX = newTX
            
                        }
                    }

                }while (tempX != newTX && tempY != newTY)
            } 
    
        

    }
    // Dark Queen Movement Logic
            // it is litaraly just a bishop and a rook
    // Dark King Movement Logic
    if (Info.classList.contains("King") && Info.classList.contains("D") && turn == 1)
        {
            if (ev.target.id == "Piece1" && KingMoveD == false && RookmoveD1 == false && document.getElementById("b8").hasChildNodes() != true && document.getElementById("c8").hasChildNodes() != true && document.getElementById("d8").hasChildNodes() != true)
                {
                    document.getElementById("c8").appendChild(Info)
                    document.getElementById("d8").appendChild(document.getElementById("Piece1"))
                    KingMoveD = true
                }
                if (ev.target.id == "Piece8" && KingMoveD == false && RookmoveD2 == false && document.getElementById("f8").hasChildNodes() != true && document.getElementById("g8").hasChildNodes() != true)
                {
                    document.getElementById("g8").appendChild(Info)
                    document.getElementById("f8").appendChild(document.getElementById("Piece8"))
                    KingMoveD = true
                }
            var tempX = oldX
            var tempY = oldY
            //document.getElementById(String.fromCharCode(96 + tempX) + tempY)
            if (Math.abs(oldX-newX) <= 1 && Math.abs(oldY-newY) <= 1)
            {
                Real = true
                KingMoveD = true
            }
            if (Math.abs(oldX-newTX) <= 1 && Math.abs(oldY-newTY) <= 1)
            {
                Real = true
                KingMoveD = true
            }
            
    }
}
//Real logic
{
    if (ev.target.classList.contains("rute") && Real == true)
    {
        ev.target.appendChild(document.getElementById(data));
    }
    else if (ev.target.classList.contains("Pice") && Real == true) 
    {
        if(newTX != oldX || newTY != oldY)
        {
        let Capture_Space = ev.target.parentNode
        document.getElementById(data).appendChild(ev.target);
        Capture_Space.appendChild(document.getElementById(data));
        }
    }
    if (document.getElementById("a1").hasChildNodes == false)
    {
        RookmoveL1 = true
    }
    if (document.getElementById("h1").hasChildNodes == false)
    {
        RookmoveL2 = true
    }
    if (document.getElementById("a8").hasChildNodes == false)
    {
        RookmoveD1 = true
    }
    if (document.getElementById("h8").hasChildNodes == false)
    {
        RookmoveD2 = true
    }

    if (Real == true)
    {
        ev.preventDefault();
         
    }
    if (oldX == newX && oldY == newY)
        {
            moved = false
        }
    if (Info.classList.contains("L") && turn == 0 && (oldX != newTX || oldY != newTY))
    {
        turn = 1
        txt = "Turn D"
        document.getElementById("test").innerHTML = txt;
        paused = true;
        paused1 = false;
        clearInterval(interval);
        var now = new Date().getTime();
        remainingTime = countDownDate - now;
        startTimer1(remainingTime1);   
    }
    if (Info.classList.contains("D") && turn == 1 && (oldX != newTX || oldY != newTY))
    {
        turn = 0
        txt = "Turn L"
        document.getElementById("test").innerHTML = txt;
        paused = false;
        paused1 = true;
        startTimer(remainingTime);
        clearInterval(interval1);
        var now1 = new Date().getTime();
        remainingTime1 = countDownDate1 - now1;
    }
}
//Winner Logic
{
    for (let i = 8; i > 0; i--)
    {
        for(let i1 = 8; i1 > 0; i1--)
        {
            let GameOver = document.getElementById(String.fromCharCode(96 + i1) + i)
            if (GameOver.hasChildNodes())
            {
                if (GameOver.childNodes[0].classList.contains("King") && GameOver.childNodes[0].classList.contains("D"))
                {
                    DK = true
                }
                if (GameOver.childNodes[0].classList.contains("King") && GameOver.childNodes[0].classList.contains("L"))
                {
                    LK =true
                }
            }
        }
    }
    var Winner = document.getElementById("Winner")
    if (LK == false)
    {
        Winner.innerHTML = "The Winner Is    Dark"
        Winner.style.display = ""
    }
    if (DK == false)
    {
        Winner.style.display = ""
        Winner.innerHTML = "The Winner Is    Light"
    }
}
//Chec logic
//C Light
{
    //-----------------------------------------
    let tempLX = parseInt(KingL.parentNode.dataset.X)
    let tempLY = parseInt(KingL.parentNode.dataset.Y)
    checkL = []
    var L1 = false
    let LX = 0
    let LY =0
    numL = 0
    do 
    {
        
        LY++
        let KingLY = document.getElementById(String.fromCharCode(96 + tempLX) + LY)
        
        if (KingLY.hasChildNodes() == true)
        {

            if (BlockTime1 == true && CheckBlock[0] == false && ((KingLY.firstElementChild.classList.contains("Rook") == false && KingLY.firstElementChild.classList.contains("Queen") == false  && KingLY.firstElementChild.classList.contains("D")) || KingLY.firstElementChild.classList.contains("L")))
            {
                CheckBlock[0] = true
            }
            if (KingLY.firstElementChild.matches(".King.L"))
            {
                BlockTime2 = false
                BlockTime1 = true
            }
            if (BlockTime2 == true && CheckBlock[4] == false && ((KingLY.firstElementChild.classList.contains("Rook") == false && KingLY.firstElementChild.classList.contains("Queen") == false  && KingLY.firstElementChild.classList.contains("D")) || KingLY.firstElementChild.classList.contains("L")))
            {
                CheckBlock[4] = true
                numL--
                checkL[numL] = ("")
            }
            if ((KingLY.firstElementChild.classList.contains("Rook") || KingLY.firstElementChild.classList.contains("Queen")) && KingLY.firstElementChild.classList.contains("D"))
            {
                if (CheckBlock[0] != true)
                {
                checkL[numL] = (String.fromCharCode(96 + tempLX) + LY)
                numL++
                }
                if (BlockTime1 == false)
                {
                BlockTime2 = true
                }
            }

        }
    }while (LY != 8)
    BlockTime1 = false
    BlockTime2 = false
    do 
    {
        LX++
        let KingLX = document.getElementById(String.fromCharCode(96 + LX) + tempLY)
        if (KingLX.hasChildNodes() == true)
        {
            if (BlockTime1 == true && CheckBlock[2] == false && ((KingLX.firstElementChild.classList.contains("Rook") == false && KingLX.firstElementChild.classList.contains("Queen") == false  && KingLX.firstElementChild.classList.contains("D")) || KingLX.firstElementChild.classList.contains("L")))
            {
                CheckBlock[2] = true
            }
            if (KingLX.firstElementChild.matches(".King.L"))
            {
                BlockTime2 = false
                BlockTime1 = true
            }
            if (BlockTime2 == true && CheckBlock[6] == false && ((KingLX.firstElementChild.classList.contains("Rook") == false && KingLX.firstElementChild.classList.contains("Queen") == false  && KingLX.firstElementChild.classList.contains("D")) || KingLX.firstElementChild.classList.contains("L")))
            {
                CheckBlock[6] = true
                numL--
                checkL[numL] = ("")
            }
            if ((KingLX.firstElementChild.classList.contains("Rook") || KingLX.firstElementChild.classList.contains("Queen")) && KingLX.firstElementChild.classList.contains("D"))
            {        
                if (CheckBlock[2] == false)           
                {
                checkL[numL] = String.fromCharCode(96 + LX) + tempLY
                numL++
                }
                if (BlockTime1 == false)
                {
                BlockTime2 = true
                }
            }
        }            
    }while (LX != 8)
    BlockTime1 = false
    BlockTime2 = false
        LX = tempLX
        LY = tempLY
    do
    {
        if (LX == 1 || LY == 1)
        {
            do
            {
                let KingLSqare = document.getElementById(String.fromCharCode(96 + LX) + LY)
                if (KingLSqare.hasChildNodes() == true)
                {
                    if (BlockTime1 == true && CheckBlock[1] == false && ((KingLSqare.firstElementChild.classList.contains("Bishop") == false && KingLSqare.firstElementChild.classList.contains("Queen") == false  && KingLSqare.firstElementChild.classList.contains("D")) || KingLSqare.firstElementChild.classList.contains("L")))
                    {
                        CheckBlock[1] = true
                    }
                    if (KingLSqare.firstElementChild.matches(".King.L"))
                    {
                        BlockTime2 = false
                        BlockTime1 = true
                    }
                    if (BlockTime2 == true && CheckBlock[5] == false && ((KingLSqare.firstElementChild.classList.contains("Bishop") == false && KingLSqare.firstElementChild.classList.contains("Queen") == false  && KingLSqare.firstElementChild.classList.contains("D")) || KingLSqare.firstElementChild.classList.contains("L")))
                    {
                        CheckBlock[5] = true
                        numL--
                        checkL[numL] = ("")
                    }
                    if ((KingLSqare.firstElementChild.classList.contains("Bishop") || KingLSqare.firstElementChild.classList.contains("Queen")) && KingLSqare.firstElementChild.classList.contains("D"))
                    {   
                        if(CheckBlock[1] == false)
                        {                
                        checkL[numL] = String.fromCharCode(96 + LX) + LY
                        numL++
                        }
                        if (BlockTime1 == false)
                        {
                        BlockTime2 = true
                        }
                    }
                }
                if (LX == 8 || LY == 8) 
                    {
                        L1 = true
                    }
                LX++
                LY++
            }while (L1 == false)  
        }
        else if (L1 == false)
        {
            LX--
            LY-- 
        }
    }while (L1 == false)
    BlockTime1 = false
    BlockTime2 = false
    LX = tempLX
    LY = tempLY
    L1 = false
    do
    {
        if (LX == 8 || LY == 1)
        {
            do
            {
                let KingLSqare = document.getElementById(String.fromCharCode(96 + LX) + LY)
                if (KingLSqare.hasChildNodes() == true)
                {
                    if (BlockTime1 == true && CheckBlock[1] == false && ((KingLSqare.firstElementChild.classList.contains("Bishop") == false && KingLSqare.firstElementChild.classList.contains("Queen") == false  && KingLSqare.firstElementChild.classList.contains("D")) || KingLSqare.firstElementChild.classList.contains("L")))
                        {
                            CheckBlock[7] = true
                        }
                        if (KingLSqare.firstElementChild.matches(".King.L"))
                        {
                            BlockTime2 = false
                            BlockTime1 = true
                        }
                        if (BlockTime2 == true && CheckBlock[5] == false && ((KingLSqare.firstElementChild.classList.contains("Bishop") == false && KingLSqare.firstElementChild.classList.contains("Queen") == false  && KingLSqare.firstElementChild.classList.contains("D")) || KingLSqare.firstElementChild.classList.contains("L")))
                        {
                            CheckBlock[3] = true
                            numL--
                            checkL[numL] = ("")
                        }
                    if ((KingLSqare.firstElementChild.classList.contains("Bishop") || KingLSqare.firstElementChild.classList.contains("Queen")) && KingLSqare.firstElementChild.classList.contains("D"))
                    {                   
                        if(CheckBlock[7] == false)
                        {                
                        checkL[numL] = String.fromCharCode(96 + LX) + LY
                        numL++
                        }
                        if (BlockTime1 == false)
                        {
                        BlockTime2 = true
                        }
                    }
                }
                if (LX == 1 || LY == 8) 
                {
                    L1 = true
                }
                LY++
                LX--
            }while(L1 == false)
        }
        else if (L1 == false)
        {
            LX++
            LY--
        }
    }while (L1 == false)
        //Knight Check
        LX = tempLX
        LY = tempLY
        LY++
        LX++
        L1 = false
        for(let i = 0; i < KnightLog.length; i++)
        {
            
            LX = tempLX
            LY = tempLY
            LX += KnightLog[i][0]
            LY += KnightLog[i][1]
            console.log(KnightLog[i], LX, LY)
            if (LX > 8 || LX < 1 || LY > 8 || LY < 1 )
            {
                console.log("BAL")
            }
            else
            {
                KingLSqare1 = document.getElementById(String.fromCharCode(96 + LX) + LY)
                console.log(KingLSqare1)
                if (KingLSqare1.hasChildNodes() == true)
                {
                    if (KingLSqare1.firstElementChild.classList.contains("Knight") && KingLSqare1.firstElementChild.classList.contains("D"))
                    {
                        
                        console.log("Langer")
                        checkL[numL] = String.fromCharCode(96 + LX) + LY
                        numL++
    
                    } 
                }
            }
    
        }
    //Knight End


}
//C Dark
{ 
    let tempDX = parseInt(KingD.parentNode.dataset.X)
    let tempDY = parseInt(KingD.parentNode.dataset.Y)
    checkD = []
    var D1 = false
    let DX = 0
    let DY =0
    numD = 0
    do 
    {
        DY++
        let KingDY = document.getElementById(String.fromCharCode(96 + tempDX) + DY)
        if (KingDY.hasChildNodes())
        {
            if ((KingDY.firstElementChild.classList.contains("Rook") || KingDY.firstElementChild.classList.contains("Queen")) && KingDY.firstElementChild.classList.contains("L"))
            {
                checkD[numD] = (String.fromCharCode(96 + tempDX) + DY)
                numD++
            }
        }
    }while (DY != 8)
    do 
    {
        DX++
        let KingDX = document.getElementById(String.fromCharCode(96 + DX) + tempDY)
        if (KingDX.hasChildNodes())
        {
            if ((KingDX.firstElementChild.classList.contains("Rook") || KingDX.firstElementChild.classList.contains("Queen")) && KingDX.firstElementChild.classList.contains("L"))
            {                   
                checkD[numD] = String.fromCharCode(96 + DX) + tempDY
                numD++
            }
        }            
    }while (DX != 8)
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
                    if ((KingDSqare.firstElementChild.classList.contains("Bishop") || KingDSqare.firstElementChild.classList.contains("Queen")) && KingDSqare.firstElementChild.classList.contains("L"))
                    {                   
                        checkD[numD] = String.fromCharCode(96 + DX) + DY
                        numD++
                    }
                }
                if (DX == 8 || DY == 8) 
                    {
                        D1 = true
                    }
                DX++
                DY++
            }while (D1 == false)  
        }
        else if (D1 == false)
        {
            DX--
            DY-- 
        }
    }while (D1 == false)
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
                    if ((KingDSqare.firstElementChild.classList.contains("Bishop") || KingDSqare.firstElementChild.classList.contains("Queen")) && KingDSqare.firstElementChild.classList.contains("L"))
                    {                   
                        checkD[numD] = String.fromCharCode(96 + DX) + DY
                        numD++
                    }
                }
                if (DX == 1 || DY == 8) 
                {
                    D1 = true
                }
                DY++
                DX--
            }while(D1 == false)
        }
        else if (D1 == false)
        {
            DX++
            DY--
        }
    }while (D1 == false)
    DX = tempDX
    DY = tempDY
    DY--
    DX++
    D1 = false
    
    if ((DX || DY) > 8)
    {
        D1 = true
    }
    if (D1 == false)
    {
        let KingDSqare = document.getElementById(String.fromCharCode(96 + DX) + DY)
        if (KingDSqare.hasChildNodes() == true)
        {
            if (KingDSqare.firstElementChild.classList.contains("Pawn") && KingDSqare.firstElementChild.classList.contains("L"))
            {                   
                checkD[numD] = String.fromCharCode(96 + DX) + DY
                numD++
            }
        }
    }
    
    DX = tempDX
    DY = tempDY
    DY--
    DX--
    D1 = false
    if (DX < 1 || DY > 8)
    {
        D1 = true
    }
    if (D1 == false)
    {
        KingDSqare = document.getElementById(String.fromCharCode(96 + DX) + DY)
        if (KingDSqare.hasChildNodes() == true)
        {
            if (KingDSqare.firstElementChild.classList.contains("Pawn") && KingDSqare.firstElementChild.classList.contains("L"))
            {                   
                checkD[numD] = String.fromCharCode(96 + DX) + DY
                numD++
            }
        }
    }
//Knight Check
    for(let i = 0; i < KnightLog.length; i++)
    {
        
        DX = tempDX
        DY = tempDY
        DX += KnightLog[i][0]
        DY += KnightLog[i][1]
        console.log(KnightLog[i], DX, DY)
        if (DX > 8 || DX < 1 || DY > 8 || DY < 1 )
        {
            console.log("BAD")
        }
        else
        {
            KingDSqare1 = document.getElementById(String.fromCharCode(96 + DX) + DY)
            console.log(KingDSqare1)
            if (KingDSqare1.hasChildNodes() == true)
            {
                if (KingDSqare1.firstElementChild.classList.contains("Knight") && KingDSqare1.firstElementChild.classList.contains("L"))
                {
                    
                    console.log("Danger")
                    checkD[numD] = String.fromCharCode(96 + DX) + DY
                    numD++

                } 
            }
        }

    }
//Knight end
    let i = 0
    CheckBlock.forEach((element) => { 
        CheckBlock[i] = false
        i++
        });
        BlockTime1 = false
        BlockTime2 = false

         tempDX = parseInt(KingD.parentNode.dataset.X)
         tempDY = parseInt(KingD.parentNode.dataset.Y)
        //checkD = []
        var D1 = false
         DX = 0
         DY =0
        numD = 0
        do 
        {
            
            DY++
            let KingDY = document.getElementById(String.fromCharCode(96 + tempDX) + DY)
            
            if (KingDY.hasChildNodes() == true)
            {
    
                if (BlockTime1 == true && CheckBlock[0] == false && ((KingDY.firstElementChild.classList.contains("Rook") == false && KingDY.firstElementChild.classList.contains("Queen") == false  && KingDY.firstElementChild.classList.contains("L")) || KingDY.firstElementChild.classList.contains("D")))
                {
                    CheckBlock[0] = true
                }
                if (KingDY.firstElementChild.matches(".King.D"))
                {
                    BlockTime2 = false
                    BlockTime1 = true
                }
                if (BlockTime2 == true && CheckBlock[4] == false && ((KingDY.firstElementChild.classList.contains("Rook") == false && KingDY.firstElementChild.classList.contains("Queen") == false  && KingDY.firstElementChild.classList.contains("L")) || KingDY.firstElementChild.classList.contains("D")))
                {
                    console.log(checkD)
                    CheckBlock[4] = true
                    numD--
                    checkD[numD] = ("")
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
                    }
                }
                console.log(checkD)
            }
        }while (DY != 8)
        BlockTime1 = false
        BlockTime2 = false
        do 
        {
            DX++
            let KingDX = document.getElementById(String.fromCharCode(96 + DX) + tempDY)
            if (KingDX.hasChildNodes() == true)
            {
                if (BlockTime1 == true && CheckBlock[2] == false && ((KingDX.firstElementChild.classList.contains("Rook") == false && KingDX.firstElementChild.classList.contains("Queen") == false  && KingDX.firstElementChild.classList.contains("L")) || KingDX.firstElementChild.classList.contains("D")))
                {
                    CheckBlock[2] = true
                }
                if (KingDX.firstElementChild.matches(".King.D"))
                {
                    BlockTime2 = false
                    BlockTime1 = true
                }
                if (BlockTime2 == true && CheckBlock[6] == false && ((KingDX.firstElementChild.classList.contains("Rook") == false && KingDX.firstElementChild.classList.contains("Queen") == false  && KingDX.firstElementChild.classList.contains("L")) || KingDX.firstElementChild.classList.contains("D")))
                {
                    CheckBlock[6] = true
                    numD--
                    checkD[numD] = ("")
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
                        if (BlockTime1 == true && CheckBlock[1] == false && ((KingDSqare.firstElementChild.classList.contains("Bishop") == false && KingDSqare.firstElementChild.classList.contains("Queen") == false  && KingDSqare.firstElementChild.classList.contains("L")) || KingDSqare.firstElementChild.classList.contains("D")))
                        {
                            CheckBlock[1] = true
                        }
                        if (KingDSqare.firstElementChild.matches(".King.D"))
                        {
                            BlockTime2 = false
                            BlockTime1 = true
                        }
                        if (BlockTime2 == true && CheckBlock[5] == false && ((KingDSqare.firstElementChild.classList.contains("Bishop") == false && KingDSqare.firstElementChild.classList.contains("Queen") == false  && KingDSqare.firstElementChild.classList.contains("L")) || KingDSqare.firstElementChild.classList.contains("D")))
                        {
                            CheckBlock[5] = true
                            numD--
                            checkD[numD] = ("")
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
                        if (BlockTime1 == true && CheckBlock[1] == false && ((KingDSqare.firstElementChild.classList.contains("Bishop") == false && KingDSqare.firstElementChild.classList.contains("Queen") == false  && KingDSqare.firstElementChild.classList.contains("L")) || KingDSqare.firstElementChild.classList.contains("D")))
                            {
                                CheckBlock[7] = true
                            }
                            if (KingDSqare.firstElementChild.matches(".King.D"))
                            {
                                BlockTime2 = false
                                BlockTime1 = true
                            }
                            if (BlockTime2 == true && CheckBlock[5] == false && ((KingDSqare.firstElementChild.classList.contains("Bishop") == false && KingDSqare.firstElementChild.classList.contains("Queen") == false  && KingDSqare.firstElementChild.classList.contains("L")) || KingDSqare.firstElementChild.classList.contains("D")))
                            {
                                CheckBlock[3] = true
                                numD--
                                checkD[numD] = ("")
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
                }while(D1 == false)
            }
            else if (D1 == false)
            {
                DX++
                DY--
            }
        }while (D1 == false)
    document.getElementById("check").innerHTML = "Light Check: " + checkL + " Dark Check: " + checkD;
}
    //console.log("a: "+ checkL)



}


var go = 1
var run = 1
var swap = 1
var Timer = 32

//Lagger brettet
for (let index = 8; index > 0; index-- ) 
{
    let row = document.createElement("div")
    row.classList.add("row")
    row.id = "row" + index
    for (let index1 = 0; index1 < 8; index1++ ) 
    {
        let rute = document.createElement("div")
        rute.id = String.fromCharCode(97 + index1) + index
        rute.classList.add("rute")
        rute.dataset.Y = index
        rute.dataset.X = index1 + 1
        if (swap == 2){
            rute.classList.add("DS")
            swap = 1
        }else{
            rute.classList.add("LS")
            swap++
        }
        if (run <= 16 ){
            let Brikke = document.getElementById("Piece" + go)
            go++
            run++
            rute.appendChild(Brikke)
        }else{
            Timer--
        }
        if (Timer == 0){
            run = 1
        }
        rute.addEventListener('drop',drop)
        rute.addEventListener('dragover',allowDrop)
        row.appendChild(rute)   
    } 
    document.body.appendChild(row)

    if (swap == 1){
        swap ++
    }else if (swap == 2){
        swap = 1
    }
}// I am Sorry