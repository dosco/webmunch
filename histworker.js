onmessage = function (event)
{
	var hist = new Array(256);
	for (var i = 0; i < hist.length; i++)
	{
		hist[i] = 0;
	}

	var data = event.data;
	var len = data.length;
	for (var i = 0; i < len; i += 4)
	{
		val = (data[i] + data[i + 1] + data[i + 2]) / 3;
		hist[Math.floor(val)]++;
	}


	postMessage(hist);
}