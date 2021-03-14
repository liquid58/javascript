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
   var data=prompt("what is your no who u wanna check even or odd");
    if(data/2==0){
        alert("hello there, your no is even");
    }
    else{
        alert("hello there, your no is odd");}
}
