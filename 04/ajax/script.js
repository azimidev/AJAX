var request = new XMLHttpRequest();
request.open('GET', 'data.txt');
request.onreadystatechange = function() {
	if ((request.status === 200) && (request.readyState === 4)) {
		console.log(request);
		document.writeln(request.responseText);
	}
}
request.send();
