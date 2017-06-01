function exampleParse() {
	
	"use strict";

	var myCar = '{"make": "Mazda", "model": "Protege", "year": 2004,  "color": "Silver","available":"2017-05-25"}';
	
	var objectCar = JSON.parse(myCar);

	document.getElementById("cars").innerHTML = objectCar.make + " " + objectCar.model;
	
	// Parsing dates
	objectCar.available = new Date(objectCar.available);
	document.getElementById("date").innerHTML = objectCar.available;
}


function exampleStringify() {
	
	"use strict";

	var objCar = {"make" : "Mazda", "model" : "Protege", "year" : 2004, "color" : "Silver", "today": new Date()};
	
	// Obj stringified
	var carJSON = JSON.stringify(objCar);
	document.getElementById("carString").innerHTML = carJSON;

	
	//JSON string from JS array
	var array = ["Mazda", "Honda", "Lexus", "Acura"];
	var myJSON = JSON.stringify(array);
	document.getElementById("makes").innerHTML = myJSON;

}