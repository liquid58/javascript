function myfunction(){
    var a= parseInt(document.getElementById('firstno').value);
    var b= parseInt(document.getElementById('secno').value);
    var result=a+b;
    alert(result);

  }


function myfunction2(){
  var fno=parseInt(document.getElementById('fno').value);
  var sno=parseInt(document.getElementById('sno').value);
  var result=fno+sno;
  document.getElementById('result').value=result;
}
function promptfunction(){
   var no=prompt("what is your no who u wanna check even or odd");
    if(no % 2==0){
        alert("hello there, your no is even");
    }
    else{
        alert("hello there, your no is odd");
    }
}


function lastfun(){
    alert("total marks is:- 500, click okay for next.");
    var no1=500;
   var no2=prompt("give your obtain marks for check grade.");
    if(no2*100/no1==90%){
        alert("your grade is A+");
    }
    else if(no2*100/no1==80){
    alert("your grade is A");
    }
    else if(no2*100/no1==65){
    alert("your grade is B+");
    }
    else if(no2*100/no1==55){
    alert("your grade is B");
    }
    else if(no2*100/no1==45){
    alert("your grade is C");
    }
    else if(no2*100/no1==33){
    alert("your grade is D");
    }
    else{
    alert("you are fail");
    }
}



