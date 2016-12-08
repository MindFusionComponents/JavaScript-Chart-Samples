﻿import m = require('Scripts/MindFusion.Charting');

var Charting = m.MindFusion.Charting;
var Controls = m.MindFusion.Charting.Controls;
var Collections = m.MindFusion.Charting.Collections;
var Drawing = m.MindFusion.Charting.Drawing;

let chartEl = <HTMLCanvasElement>document.getElementById('lineChart');
chartEl.width = chartEl.offsetParent.clientWidth;
chartEl.height = chartEl.offsetParent.clientHeight;
// create the chart
let lineChart = new Controls.LineChart(chartEl);

// create line brushes
let firstBrush = new Drawing.Brush("skyBlue");
let secondBrush = new Drawing.Brush("deepPink");
let thirdBrush = new Drawing.Brush("green");

lineChart.legendRenderer.background = new Drawing.Brush("khaki");

lineChart.showZoomWidgets = true;
// create sample data series
let labels = new Collections.List<string>([
	"one", "two", "three", "four", "five", "six",
	"seven", "eight", "nine", "ten", "eleven", "twelve"
]);

let series1 = new Charting.Series2D(
	new Collections.List<number>([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]),
	new Collections.List<number>([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
	labels
);
series1.title = "Series 1";
lineChart.series.add(series1);
				
let series2 = new Charting.Series2D(
	new Collections.List < number > ([ 0,1,2,3,4,5,6,7,8,9,10,11 ]),
new Collections.List<number>([ 2,4,6,8,10,12,14,16,18,20,22,24 ]),
	labels
);
series2.title = "Series 2";
lineChart.series.add(series2);
		
//lineChart.Series.Add(
//				new FunctionSeries("x*Sin(x)+x+5", 12, 12)
//				{ Title = "Series 3" });

lineChart.xAxis.interval = 1;


// assign one brush per series
let style = new Charting.MixedSeriesStyle();
style.commonFills = new Collections.List<m.MindFusion.Charting.Drawing.Brush>([firstBrush, secondBrush, thirdBrush]);
style.commonStrokes = new Collections.List<m.MindFusion.Charting.Drawing.Brush>([firstBrush, secondBrush, thirdBrush]);
style.uniformStrokeThickness = 5;
lineChart.plot.seriesStyle = style;

lineChart.draw();

// handlers
let gridType = document.getElementById('gridType') as HTMLSelectElement;
gridType.selectedIndex = lineChart.gridType;
gridType.onchange = () => {
	lineChart.gridType = gridType.selectedIndex;
	lineChart.draw();
};

let lineType = document.getElementById('lineType') as HTMLSelectElement;
lineType.selectedIndex = lineChart.lineType;
lineType.onchange = () => {
	lineChart.lineType = lineType.selectedIndex;
	lineChart.draw();
};

let xAxisMin = document.getElementById('xAxisMin') as HTMLInputElement;
xAxisMin.valueAsNumber = lineChart.xAxis.effectiveMinValue;
xAxisMin.onchange = () => {
	lineChart.xAxis.minValue = xAxisMin.valueAsNumber;
	lineChart.draw();
};

let xAxisMax = document.getElementById('xAxisMax') as HTMLInputElement;
xAxisMax.valueAsNumber = lineChart.xAxis.effectiveMaxValue;
xAxisMax.onchange = () => {
	lineChart.xAxis.maxValue = xAxisMax.valueAsNumber;
	lineChart.draw();
};

let yAxisMin = document.getElementById('yAxisMin') as HTMLInputElement;
yAxisMin.valueAsNumber = lineChart.yAxis.effectiveMinValue;
yAxisMin.onchange = () => {
	lineChart.yAxis.minValue = yAxisMin.valueAsNumber;
	lineChart.draw();
};

let yAxisMax = document.getElementById('yAxisMax') as HTMLInputElement;
yAxisMax.valueAsNumber = lineChart.yAxis.effectiveMaxValue;
yAxisMax.onchange = () => {
	lineChart.yAxis.maxValue = yAxisMax.valueAsNumber;
	lineChart.draw();
};

let showXticks = document.getElementById('showXticks') as HTMLInputElement;
showXticks.checked = lineChart.showXTicks;
showXticks.onchange = () => {
	lineChart.showXTicks = showXticks.checked;
	lineChart.draw();
};

let showYticks = document.getElementById('showYticks') as HTMLInputElement;
showYticks.checked = lineChart.showYTicks;
showYticks.onchange = () => {
	lineChart.showYTicks = showYticks.checked;
	lineChart.draw();
};

let showXCoords = document.getElementById('showXCoords') as HTMLInputElement;
showXCoords.checked = lineChart.showXCoordinates;
showXCoords.onchange = () => {
	lineChart.showXCoordinates = showXCoords.checked;
	lineChart.draw();
};

let showYCoords = document.getElementById('showYCoords') as HTMLInputElement;
showYCoords.checked = lineChart.showYCoordinates;
showYCoords.onchange = () => {
	lineChart.showYCoordinates = showYCoords.checked;
	lineChart.draw();
};

let showLegend = document.getElementById('showLegend') as HTMLInputElement;
showLegend.checked = lineChart.showLegend;
showLegend.onchange = () => {
	lineChart.showLegend = showLegend.checked;
	lineChart.draw();
};

let scrollGrid = document.getElementById('scrollGrid') as HTMLInputElement;
scrollGrid.checked = lineChart.pinGrid;
scrollGrid.onchange = () => {
	lineChart.pinGrid = scrollGrid.checked;
	lineChart.draw();
};

let showDataLabels = document.getElementById('showDataLabels') as HTMLInputElement;
showDataLabels.checked = lineChart.showDataLabels == Charting.LabelKinds.All;
showDataLabels.onchange = () => {
	if (showDataLabels.checked)
		lineChart.showDataLabels = Charting.LabelKinds.All;
	else
		lineChart.showDataLabels = Charting.LabelKinds.None;
	lineChart.draw();
};



