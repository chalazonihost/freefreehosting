<html xmlns="http://www.w3.org/1999/xhtml"><head>

<meta content='IE=9,chrome=1' http-equiv='X-UA-Compatible'>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" >
<link rel="stylesheet" href="http://www.caranddriver.gr/style.css" type="text/css"/>
<link rel="stylesheet" href="http://www.caranddriver.gr/article.css" type="text/css"/>
<style>body {background-color: #b3dfee;}</style>
</head>


<body>
<script type="text/javascript">
function leaveChange() {

    var vtime = document.getElementById("date_of_purchase").value;
    document.getElementById("message").innerHTML = " ";

    if (vtime != '0'){

      document.getElementById('be').style.display = 'none'; 
      document.getElementById('af').style.display = 'none'; 
   
      document.getElementById(vtime).style.display = 'block'; 
    }



    if (vtime == '0'){

      document.getElementById('be').style.display = 'none'; 
      document.getElementById('af').style.display = 'none'; 
    }


}

function findteli() {

var finalpay = 0;
var finalpay2 = 0;

if (document.getElementById("date_of_purchase").value == 'be'){
  var var2 = document.getElementById("t2").value;
  finalpay = 22; 
  if(var2 > 300){
      finalpay = 55; 
  }
  if(var2 > 785){
      finalpay = 120; 
  }
  if(var2 > 1071){
      finalpay = 135; 
  }
  if(var2 > 1357){
      finalpay = 240; 
  }
  if(var2 > 1548){
      finalpay = 265; 
  }
  if(var2 > 1738){
      finalpay = 300; 
  }
  if(var2 > 1928){
      finalpay = 660; 
  }
  if(var2 > 2357){
      finalpay = 880; 
  }
  if(var2 > 3000){
      finalpay = 1100; 
  }
  if(var2 > 4000){
      finalpay = 1320; 
  }

}

if (document.getElementById("date_of_purchase").value == 'af'){
  var var2 = document.getElementById("t1").value;

  if(var2 > 100){
      finalpay2 = 0.9; 
  }
  if(var2 > 120){
      finalpay2 = 1.1; 
  }
  if(var2 > 140){
      finalpay2 = 1.7; 
  }
  if(var2 > 160){
      finalpay2 = 2.25; 
  }
  if(var2 > 180){
      finalpay2 = 2.55; 
  }
  if(var2 > 200){
      finalpay2 = 2.8; 
  }
  if(var2 > 250){
      finalpay2 = 3.4; 
  }

 finalpay = (Math.ceil((finalpay2 * var2) * 10)) / 10; 
 //finalpay = Math.ceil(finalpay2 * var2);
  //alert (finalpay + " = " + finalpay2 + "*" + var2);
}

document.getElementById("message").innerHTML = "�� ���� ����������� ��� �� ��������� ��� �� 2015 ���������� �� " + finalpay + " euro.";
}
</script>

<h1>���������� �� ���� �����������</h1>

  <label>���������� �� �� ��� </label>
<select name="date_of_purchase" onchange="leaveChange()" id="date_of_purchase">
<option value="0">��������</option>
<option value="af">���� ��� �������� ��� 2010</option>
<option value="be">���� ��� �������� ��� 2010</option>
</select>	

<div style="display:none" id="af">
  <label>�� ����� CO<sub>2</sub> ��� �������� �� �� ������� �� ��� ����� ����������� ����� </label>
  <input type="text" name="rypoi" value="" id="t1" />��/���
  <input type="button" value="�����������" onClick="findteli();" />
</div>

<div style="display:none" id="be">
  <label>� �������� ��� �������� (���������� - �����������) ����� </label>
  <input type="text" name="kibika" value="" id="t2" />������ �������� (���� ����������� ���� ����� �����������)
  <input type="button" value="�����������" onClick="findteli();" /><br />chalazoni.blogspot
</div>

<br/><br/>


<div id="message"></div>


</body>