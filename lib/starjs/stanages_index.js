function init() {
  document.write("<!doctype html>")
  document.write("<html>")
  document.write("<head>")
  document.write("<link rel='icon' href='https://s3.ax1x.com/2021/02/10/ywejnf.png'/>")
  document.write("</head>")
  document.write("<body>")
  document.write("<script type='text/javascript' src='http://echarts.baidu.com/gallery/vendors/echarts/echarts.min.js'></script>")
  document.write("<center>");
  document.write("<li><a href='./work_details/1' style='text-decoration:none;'>Member</a></li>");
  document.write("<style>html{background-color:orangered;}</style>")
  document.write("</center>")
  document.write("</body>")
  document.write("</html>")
  document.title=("StarWorld Studio");
}

$(function (){
  $("#btn").click(function ()  {
    $.getJSON("lib/json/index.json", function (data){
      var $jsontip = $("#jsonTip");
      var strHtml = "123";
      //StorageData
      $jsontip.empty();
      //Clear
      $.each(data, function (infoIndex, info){
        strHtml += "<hr/>"
        strHtml += "Email:" + info["Email"] + "<br>";
        strHtml += "Tel:" + info["Tel"] + "<br>";
        strHtml += "Name:" + info["Name"] + "<br>";
      }) 
      $jsontip.html(strHtml);
      //displayData 
    }) 
  }) 
})
