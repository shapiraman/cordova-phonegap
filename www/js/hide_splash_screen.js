document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
	localStorage.PLATFORM = device.platform;
	localStorage.UUID = device.uuid;
	// var push = PushNotification.init({ 
	// 	"android": {"senderID": PROJECT_NUMBER},
    //     "ios": {}
	// });
	// push.on('registration', function(data) {
	// 	localStorage.REG_ID = data.registrationId;
	// 	if (localStorage.TYPE_OF_USER == "new") {
	// 		var service = "ajax/addnewuser.php";
	// 		var url = SERVER_URL + service;
	// 		var method = "POST";
	// 		var params = "reg_id=" + data.registrationId;
	// 		params += "&platform=" + device.platform;
	// 		params += "&uuid=" + device.uuid;
	// 		var request = new XMLHttpRequest();
	// 		request.open(method, url, true);
	// 		request.setRequestHeader("Content-type","application/x-www-form-urlencoded");
	// 		request.send(params);
	// 	} else if (localStorage.USER) {
	// 		var service = "ajax/updateuser.php";
	// 		var url = SERVER_URL + service;
	// 		var method = "POST";
	// 		var user = JSON.parse(localStorage.USER);
	// 		var params = "reg_id=" + data.registrationId;
	// 		params += "&user_id=" + user.id;
	// 		params += "&platform=" + device.platform;
	// 		var request = new XMLHttpRequest();
	// 		request.open(method, url, true);
	// 		request.setRequestHeader("Content-type","application/x-www-form-urlencoded");
	// 		request.send(params);
	// 	}
	// });
	// push.on('notification', function(data) {
	// 	if (data.message) {
	// 		var CURRENT_LANGUAGE = "hebrew";
	// 		navigator.notification.alert(data.message, null, dictionary[CURRENT_LANGUAGE]["appName"], dictionary[CURRENT_LANGUAGE]["networkErrorButton"]);
	// 	}
    // });
	
	//var domElement = document.getElementById("htmlDOM");
    //angular.bootstrap(domElement, ["sherFitness"]);
	
	navigator.splashscreen.hide();
}