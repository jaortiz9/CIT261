//Works for Google Chrome
function makeRequest(){
		var parser, xmlDoc;
			var text = "<students><student>"+
						"<name>Janine Ortiz</name>"+
						"<age>27</age>"+
						"<city>Annandale</city>"+
						"<major>Software Engineering</major>"+"</student></student>";
	
		
			parser = new DOMParser();
			xmlDoc = parser.parseFromString(text, "text/xml");
	
	document.getElementById("name").innerHTML = xmlDoc.getElementsByTagName("name")[0].childNodes[0].nodeValue;

	document.getElementById("age").innerHTML = xmlDoc.getElementsByTagName("age")[0].childNodes[0].nodeValue;

	document.getElementById("city").innerHTML = xmlDoc.getElementsByTagName("city")[0].childNodes[0].nodeValue;

	document.getElementById("major").innerHTML = xmlDoc.getElementsByTagName("major")[0].childNodes[0].nodeValue;

	document.getElementById("one").style.visibility = "visible";
}

//Works for Firefox
function loadXMLDoc() {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      myFunction(this);
    }
  };
  xmlhttp.open("GET", "studentExample.xml", true);
  xmlhttp.send();
}

function myFunction(xml) {
	var x, y, z, a, i, xmlDoc, txt, txt2, txt3, txt4;
	xmlDoc = xml.responseXML;
  	txt = "";
	txt2 = "";
	txt3 = "";
	txt4 = "";
	
	x = xmlDoc.getElementsByTagName("NAME");
	for (i = 0; i< x.length; i++) {
		txt += x[i].childNodes[0].nodeValue + "<br>";
	}
	document.getElementById("NAME").innerHTML = txt;
	
	y = xmlDoc.getElementsByTagName("age");
	for (i = 0; i< y.length; i++) {
		txt2 += y[i].childNodes[0].nodeValue + "<br>";
	}
	document.getElementById("AGE").innerHTML = txt2;
  
	z = xmlDoc.getElementsByTagName("city");
	  for (i = 0; i< z.length; i++) {
		txt3 += z[i].childNodes[0].nodeValue + "<br>";
	  }
	document.getElementById("CITY").innerHTML = txt3;
	
	a = xmlDoc.getElementsByTagName("major");
	  for (i = 0; i< a.length; i++) {
		txt4 += a[i].childNodes[0].nodeValue + "<br>";
	  }
	document.getElementById("MAJOR").innerHTML = txt4;
	document.getElementById("two").style.visibility = "visible";
}
	
