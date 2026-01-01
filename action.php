<!DOCTYPE html><html><head><style>
body {background-color: #cccccc;} 
W3 {background-color:#ffffff; border-radius: 60px; padding: 3px; font-size:37px; opacity: 0.90;}
W2 {background-color:#f2f2f2; border-radius: 50px; padding: 2px; font-size:36px; opacity: 0.70;}
W1 {background-color:#e6e6e6; border-radius: 40px; padding: 1px; font-size:35px; opacity: 0.90;}
C2 {background-color:#ff66ff; border-radius: 6px; padding: 1px; font-size:34px; font-family: Arial, Helvetica, sans-serif;}
C1 {background-color:#8080ff; border-radius: 4px; padding: 1px; font-size:32px; font-family: Arial, Helvetica, sans-serif; opacity: 0.95;}
B2 {background-color:#83e283; border-radius: 2px; padding: 1px; font-size:28px; font-family: Arial, Helvetica, sans-serif; opacity: 0.90;}
B1 {background-color:#d98c8c; font-size:24px; font-family: Arial, Helvetica, sans-serif; opacity: 0.85;}
A2 {background-color:#b1dede; font-size:20px; font-family: Arial, Helvetica, sans-serif; opacity: 0.80;}
A1 {font-size:16px; font-family: Arial, Helvetica, sans-serif; background-color:#ddc6a1; opacity: 0.70;}
vb1	{color: #006600; font-weight: bold; font-size:28px;}
N1 {font-size:16px; color: #805300; font-family: Arial, Helvetica, sans-serif;}
a {color:inherit; }
* {
  box-sizing: border-box;
}

/* Create two unequal columns that floats next to each other */
.column {
  float: left;
  padding: 10px;

}

.left {
  width: 65%;
}

.right {
  width: 35%;
}

/* Clear floats after the columns */ 
.row:after {
  content: "";
  display: table;
  clear: both;
}
</style><script type="text/javascript" charset="UTF-8" src="https://www.gstatic.com/charts/51/loader.js"></script><link id="load-css-0" rel="stylesheet" type="text/css" href="https://www.gstatic.com/charts/51/css/core/tooltip.css"><link id="load-css-1" rel="stylesheet" type="text/css" href="https://www.gstatic.com/charts/51/css/util/util.css"><script type="text/javascript" charset="UTF-8" src="https://www.gstatic.com/charts/51/js/jsapi_compiled_default_module.js"></script><script type="text/javascript" charset="UTF-8" src="https://www.gstatic.com/charts/51/js/jsapi_compiled_graphics_module.js"></script><script type="text/javascript" charset="UTF-8" src="https://www.gstatic.com/charts/51/js/jsapi_compiled_ui_module.js"></script><script type="text/javascript" charset="UTF-8" src="https://www.gstatic.com/charts/51/js/jsapi_compiled_corechart_module.js"></script></head><body>
<h1><a href="index.html">EnglishGrammar.Pro</a></h1>
<div class="row">
  <div class="column left">
<form action="action.php" method="post"><textarea id="MT" name="name" rows="10" cols="60" onkeyup="myFunction()"></textarea><br><input type="submit"></form><br><br><br><p id="demo"></p>
<button onclick="myFunction()">Remove A1</button>
<button onclick="myFunction2()">A2</button>
<button onclick="myFunction3()">B1</button>
<button onclick="myFunction4()">B2</button>
<button onclick="myFunction5()">C1</button>
<button onclick="myFunction6()">C2</button>
<button onclick="myFunction7()">Academic highlights</button>
<script>
function myFunction() {
  var str = document.getElementById("demo").innerHTML; 
  var res = str.replace(/<A1>/gi, "");
  document.getElementById("demo").innerHTML = res;
}
function myFunction2() {
  var str = document.getElementById("demo").innerHTML; 
  var res = str.replace(/<A2>/gi, "");
  document.getElementById("demo").innerHTML = res;
}
function myFunction3() {
  var str = document.getElementById("demo").innerHTML; 
  var res = str.replace(/<B1>/gi, "");
  document.getElementById("demo").innerHTML = res;
}
function myFunction4() {
  var str = document.getElementById("demo").innerHTML; 
  var res = str.replace(/<B2>/gi, "");
  document.getElementById("demo").innerHTML = res;
}
function myFunction5() {
  var str = document.getElementById("demo").innerHTML; 
  var res = str.replace(/<C1>/gi, "");
  document.getElementById("demo").innerHTML = res;
}
function myFunction6() {
  var str = document.getElementById("demo").innerHTML; 
  var res = str.replace(/<C2>/gi, "");
  document.getElementById("demo").innerHTML = res;
}
function myFunction7() {
  var str = document.getElementById("demo").innerHTML; 
  var res = str.replace(/<W1>|<W2>|<W3>/gi, "");
  document.getElementById("demo").innerHTML = res;
}
</script>
<p></p>
  </div>
    <div class="column right">
  <p>
</p><div id="piechart"><div style="position: relative;"><div dir="ltr" style="position: relative; width: 550px; height: 400px;"><div aria-label="A chart." style="position: absolute; left: 0px; top: 0px; width: 100%; height: 100%;"><svg width="550" height="400" aria-label="A chart." style="overflow: hidden;"><defs id="_ABSTRACT_RENDERER_ID_0"></defs><rect x="0" y="0" width="550" height="400" stroke="none" stroke-width="0" fill="#cccccc"></rect><g></g></svg><div aria-label="A tabular representation of the data in the chart." style="position: absolute; left: -10000px; top: auto; width: 1px; height: 1px; overflow: hidden;"><table><thead><tr><th>Level</th><th>Percent</th></tr></thead><tbody><tr><td>A1 Elementary</td><td>0</td></tr><tr><td>A2 Pre-Intermediate</td><td>0</td></tr><tr><td>B1 Intermediate IELTS 4-5</td><td>0</td></tr><tr><td>B2 Upper-Intermediate - IELTS 5.5-6.5</td><td>0</td></tr><tr><td>C1 Advanced - IELTS 7</td><td>0</td></tr><tr><td>C2 Proficient - IELTS 8+</td><td>0</td></tr><tr><td>Most common academic words</td><td>0</td></tr><tr><td>Academic collocation</td><td>0</td></tr><tr><td>Academic words</td><td>0</td></tr></tbody></table></div></div></div><div aria-hidden="true" style="display: none; position: absolute; top: 410px; left: 560px; white-space: nowrap; font-family: Arial; font-size: 8px;">-._.-*^*-._.-*^*-._.-</div><div></div></div></div>

<script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>

<script type="text/javascript">
// Load google charts
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

// Draw the chart and set the chart values
function drawChart() {
  var data = google.visualization.arrayToDataTable([
  ['Level', 'Percent'],
  ['A1 Elementary', 0],
  ['A2 Pre-Intermediate', 0],
  ['B1 Intermediate IELTS 4-5', 0],
  ['B2 Upper-Intermediate - IELTS 5.5-6.5', 0],
  ['C1 Advanced - IELTS 7', 0],
  ['C2 Proficient - IELTS 8+', 0],
  ['Most common academic words', 0],
  ['Academic collocation', 0],
  ['Academic words', 0],
]);
  // Optional; add a title and set the width and height of the chart
  var options = {'width':550,'height':400, colors: ['#ddc6a1', '#b1dede', '#d98c8c', '#83e283', '#8080ff', '#ff66ff', '#e6e6e6', '#f2f2f2', '#ffffff'],backgroundColor: '#cccccc',
    is3D: true};
	  // Display the chart inside the <div> element with id="piechart"
  var chart = new google.visualization.PieChart(document.getElementById('piechart'));
  chart.draw(data, options);
  }
</script>
<p></p>
  </div>
</div>

</body></html>