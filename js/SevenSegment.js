// SevenSegment.js
(function(ext) {
  var device = null;
  var _rxBuf = [];
	var values = {};
	var indexs = [];
	var lines = [""];
	var nextID = 0;
	var startTimer = 0;
	var versionIndex = 0xAA;
	var isReceived = false;
	var lastLine = "";
  var potentialDevices = [];

  ext.resetAll = function(){};

   function deviceOpened(dev) {};
   
  ext.setPins = function() {};
 
  ext.ShowNumber = function(s){
	 var value;
     if(s == 0){
         value = 0;
     }
     if(s == 1){
         value = 1;
     }
   return value;
  	}

  ext._deviceRemoved = function(dev) {
      if(device != dev) return;
      device = null;
  };

  ext._shutdown = function() {
      if(device) device.close();
      device = null;
  };

  ext._getStatus = function() {
      if(!device) return {status: 1, msg: 'Serial disconnected'};
      return {status: 2, msg: 'Serial connected'};
  };

  var descriptor = {
  };

	ScratchExtensions.register('7Segment', descriptor, ext, {type: 'serial'});
})({});
