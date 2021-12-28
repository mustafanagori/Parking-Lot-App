var p1 = document.getElementById("p1");
var p2 = document.getElementById("p2");
var p3 = document.getElementById("p3");
var p4 = document.getElementById("p4");
var p5 = document.getElementById("p5");
var p6 = document.getElementById("p6");
var p7 = document.getElementById("p7");
var p8 = document.getElementById("p8");
var p9 = document.getElementById("p9");
var p10 = document.getElementById("p10");
var p11 = document.getElementById("p11");
var p12 = document.getElementById("p12");
var lot = [
    {
        carId : "",
        available: true,
        parkingNo:  p1
    },
    {
        carId : "" ,
        available: true,
        parkingNo:  p2
    },
    {
        carId : "" ,
        available: true,
        parkingNo:  p3
    },
    {
        carId : "" ,
        available: true,
        parkingNo:  p4
    },
    {
        carId : "" ,
        available: true,
        parkingNo:  p5
    },
    {
        carId : "" ,
        available: true,
        parkingNo:  p6
    },
    {
        carId : "" ,
        available: true,
        parkingNo:  p7
    },
    {
        carId : "" ,
        available: true,
        parkingNo:  p8
    },
    {
        carId : "" ,
        available: true,
        parkingNo:  p9
    },
    {
        carId : "" ,
        available: true,
        parkingNo:  p10
    },
    {
        carId : "" ,
        available: true,
        parkingNo:  p11
    },
    {
        carId : "" ,
        available: true,
        parkingNo:  p12
    }
 
]



function assign()
{
    var flag = true;
    var carNo = prompt("enter car number");
    for(var i=0 ; i< lot.length ; i++)
    {
        if(lot[i].available == true)
        {
            flag = false;
            lot[i].parkingNo.innerText = carNo;
            lot[i].parkingNo.className =  "red";
            lot[i].carId = carNo;
            lot[i].available = false;
            break;
        }
    }
    if(flag)
    {
        alert("parking lot is not available")
    }
}

function checkOut()
{
    var flag = true;
    var check = prompt("enter your car Number : ");
    for( var i = 0 ; i < lot.length ; i++)
    {
        if(lot[i].carId == check)
        {
            flag = false;
            lot[i].parkingNo.className = "green";
            lot[i].parkingNo.innerText = "available";
            lot[i].carId = "";
            lot[i].available = true;
        }

    }
    if(flag)
        {
            alert("your car is not in this parking")
        }
  
}