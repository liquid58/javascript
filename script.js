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
