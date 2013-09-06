/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var file_path;
function setFilePath() {
    if(detectAndroid()) {   
        file_path = "file:///android_asset/www/res/db/";
        //4 Android
    } else {
        file_path = "res//db//";
        //4 apache//iOS/desktop
    }
}

function download(){
	setFilePath();
	var fileTransfer = new FileTransfer();
	var uri = encodeURI("http://www.cardtek.com/files/2013/09/sample.pdf");
	
	fileTransfer.download(
		uri,
		file_path,
		function(entry) {
			$("#res").text("download complete: " + entry.fullPath);
		},
		function(error) {
			$("#res").text("download error source " + error.source);
			$("#res").text("download error target " + error.target);
			$("#res").text("upload error code" + error.code);
		},
		false,
		{
			headers: {
				"Authorization": "Basic dGVzdHVzZXJuYW1lOnRlc3RwYXNzd29yZA=="
			}
		}
	);
};

$( "#btn_download" ).click(function() {
	download();
});