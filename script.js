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
    var a=prompt("percentage")
   if(a>85)
    {//if percent > 85 --A
      document.write('Grade - A');}
else if(a<=85 && a>80)
    {//80<percent80=85  --A
      document.write('Grade - A-');}
else if(a>70 && a<=80)
    {//70<percent<=80 --B
      document.write('Grade - B');}
else if(a>60 && a<=70)
    {//60<percent<=70  --C
      document.write('Grade - C');}
else if(a>40 && a<=60)
    {//40<percent<=60  --D
      document.write('Grade - D');}
else if(a<=40)
    {//percent<=40  --E
      if(a<=35)
        {//failed condition
          document.write('Grade - E Candidate failed');}
      else
        {document.write('Grade - E');}}


