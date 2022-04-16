var gVal = 4.5;

var data = [
	{
		domain: { x: [0, 1], y: [0, 1] },
		value: gVal,
		title: { text: "Mean Sentiment of Users associated with the Brand" },
		type: "indicator",
		mode: "gauge+number",
        gauge: {
            axis:{ range : [null, 5] }
        }
	}
];

var layout = { width: 600, height: 500, margin: { t: 0, b: 0 } };
Plotly.newPlot('gauge', data, layout);