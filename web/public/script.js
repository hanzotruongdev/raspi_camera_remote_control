
function captureImage(){
	console.log("caputureImage");
	var d = new Date();
	writeData('capture', d.getTime())
}

function recordVideo() {
	console.log("record video event");
	// body...
	record_button = $('#record-button');
	console.log(record_button);
	if (record_button.text() == "STOP") {
		writeData('record', 2);
		record_button.text('RECORD');
		console.log("end stop");
	} else {
		writeData('record', 1)
		record_button.text('STOP');
		console.log("end start");
	}
}

function writeData(key, value) {
  firebase.database().ref('control/' + key).set(value);
}

function readData(key) {
	// body...
}

// get url from the hosted
function getImage() {
	var url = "";
	return url;
}