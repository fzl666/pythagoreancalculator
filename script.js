function getNums() {
    var fname = document.getElementById("fname").value.toUpperCase()
    var lname = document.getElementById("lname").value.toUpperCase()
    var mname = document.getElementById("mname").value.toUpperCase()
    var bday = document.getElementById("birthday").value.match(/\d/g)
    var full=fname+mname+lname
    var list=full.split('')
    if(bday!==null){
    var date=bday.map(Number);
    var dtot=date.reduce(add, 0)
    if(dtot>21){
    arr=Array.from(String(Lnum), Number)
    Lnum=arr.reduce(add, 0)
    }else if(dtot<=21){
        Lnum=dtot
    }}
    else{var Lnum="Please fill in your birthday"}

    console.log(list)
    console.log(date)
    //document.getElementById("capName").innerHTML = [fname+" "+lname];
    var numList=[]
    var perList=[]
    for (var i = 0; i < list.length; i++) {  
    if(list[i]=="A"||list[i]=="J"||list[i]=="S")
    {
        if(list[i]=="J"||list[i]=="S")
    {
        perList.push(1)
    }
        numList.push(1)
    } 
    else if (list[i]=="B"||list[i]=="K"||list[i]=="T")
    {   perList.push(2)
        numList.push(2)
    }
    else if (list[i]=="C"||list[i]=="L"||list[i]=="U")
    {
        if(list[i]=="C"||list[i]=="L")
    {
        perList.push(3)
    }
        numList.push(3)
    }
    else if (list[i]=="D"||list[i]=="M"||list[i]=="V")
    {   perList.push(4)
        numList.push(4)
    }
    else if (list[i]=="E"||list[i]=="N"||list[i]=="W")
    {
        if(list[i]=="N"||list[i]=="W")
    {
        perList.push(5)
    }
        numList.push(5)
    }
    else if (list[i]=="F"||list[i]=="O"||list[i]=="X")
    {
        if(list[i]=="F"||list[i]=="X")
    {
        perList.push(6)
    } 
        numList.push(6)
    }
    else if (list[i]=="G"||list[i]=="P"||list[i]=="Y")
    {   perList.push(7)
        numList.push(7)
    }
    else if (list[i]=="H"||list[i]=="Q"||list[i]=="Z")
    {   perList.push(8)
        numList.push(8)
    }
    else if (list[i]=="I"||list[i]=="R")
    {
        if(list[i]=="R")
    {
        perList.push(9)
    }
        numList.push(9)
    }  
     }
     console.log(numList) 
     console.log(perList)
    
    var Nnum=oneDigit(numList.reduce(add, 0))//total=(numList.reduce(add, 0))
    var Pnum=oneDigit(perList.reduce(add, 0))
    var Cnum=compound(numList.reduce(add, 0))
    //
    var Dnum
    if (Cnum==11||compound(Cnum)==22){
        Dnum=Cnum
    }else if(compound(Cnum)==29){
        Dnum=11
    }else{
        Dnum=Nnum
    }

console.log(Dnum)
    //
    

    document.getElementById("nameNum").innerHTML = [Nnum];
    document.getElementById("compNum").innerHTML = [Cnum];
    document.getElementById("persNum").innerHTML = [Pnum];
    document.getElementById("lifeNum").innerHTML = [Lnum]


    }

function add(accumulator, value) {
    return accumulator + value;
    };

function oneDigit(n) {
    let sum = 0;
    sum  = n % 9 || 9
    return sum;
    }
    
function compound(n) {
    arr=Array.from(String(n), Number)
    nar=arr.reduce(add, 0)
    console.log(arr)
    if(nar<10){
        return "Not applicable"
    }
    else{return nar}
}
//
//
