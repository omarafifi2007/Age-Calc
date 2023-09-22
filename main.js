let Days = document.getElementById("Days");
let Month = document.getElementById("Month");
let Years = document.getElementById("Years");
document.getElementById("Image").onclick = function ()
{
    document.getElementById("Image").style.backgroundColor = "blueviolet";
    if(Days.value === "" && Month.value === "" && Years.value === "")
    {
        document.getElementById("P1").style.display = "block";
        document.getElementById("P2").style.display = "block";
        document.getElementById("P3").style.display = "block";
        document.getElementById("Days").style.border = '2px solid red';
        document.getElementById("Month").style.border = '2px solid red';
        document.getElementById("Years").style.border = '2px solid red';
    }
    else
    {
        Years = Years.value * 365;
        Month = Years * 30;
        Days = Month * 24;
        document.getElementById("1").innerHTML = Years;
        document.getElementById("2").innerHTML = Month;
        document.getElementById("3").innerHTML = Days;
    }
}
