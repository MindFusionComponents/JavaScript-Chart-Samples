﻿import m = require('Scripts/MindFusion.Charting');

var Charting = m.MindFusion.Charting;
var Controls = m.MindFusion.Charting.Controls;
var Collections = m.MindFusion.Charting.Collections;
var Drawing = m.MindFusion.Charting.Drawing;
var Components = m.MindFusion.Charting.Components;

let barChartEl = <HTMLCanvasElement>document.getElementById('barChart');
barChartEl.width = barChartEl.offsetParent.clientWidth;
barChartEl.height = barChartEl.offsetParent.clientHeight;

// create the BarChart
let barChart = new Controls.BarChart(barChartEl);
barChart.series = getSeriesCollection();

barChart.allowZoom = true;
barChart.allowPan = true;
barChart.allowMoveLegend = true;

barChart.xAxis.title = "";
barChart.xAxis.minValue = 0;
barChart.xAxis.maxValue = 3;
barChart.yAxis.title = "";
barChart.yAxis.minValue = 0;
barChart.yAxis.maxValue = 100;

barChart.showLegend = true;
barChart.legendHorizontalAlignment = Components.LayoutAlignment.Near;
barChart.legendVerticalAlignment = Components.LayoutAlignment.Near;

barChart.theme = new Charting.Theme();
barChart.theme.commonSeriesFills = getBarFills();
barChart.theme.commonSeriesStrokes = getBarFills();
barChart.theme.legendBackground = new Drawing.Brush("whiteSmoke");
barChart.theme.legendBorderStroke = new Drawing.Brush("teal");
barChart.theme.highlightStroke = new Drawing.Brush("cadetBlue"); 

// create the PieChart
let pieChartEl = <HTMLCanvasElement>document.getElementById('pieChart');
pieChartEl.width = pieChartEl.offsetParent.clientWidth;
pieChartEl.height = pieChartEl.offsetParent.clientHeight;
let pieChart = new Controls.PieChart(pieChartEl);

pieChart.series = new Charting.PieSeries(
				new Collections.List<number>([20, 60, 40, 55]),
				new Collections.List<string>(["January", "February", "March", "April"]),
				new Collections.List<string>(["January", "February", "March", "April"]));
pieChart.series.title = "Pie Series";

pieChart.allowZoom = true;
pieChart.allowRotate = true;

pieChart.showLegend = false;
pieChart.showDataLabels = Charting.LabelKinds.OuterLabel;

pieChart.theme = new Charting.Theme();
pieChart.theme.seriesFills = getPieFills();
pieChart.theme.uniformSeriesStroke = new Drawing.Brush("lightGray");
pieChart.theme.seriesStrokeThicknesses = new Collections.List<m.MindFusion.Charting.Collections.List<number>>([new Collections.List<number>([15])]);
pieChart.theme.highlightStroke = new Drawing.Brush("white");
pieChart.theme.highlightStrokeThickness = 10;


function getSeriesCollection(): m.MindFusion.Charting.Collections.ObservableCollection<m.MindFusion.Charting.Series> 
{
	let collection = new Collections.ObservableCollection<m.MindFusion.Charting.Series>();
	for (let i = 0; i < 3; i++)
	{
		if (i == 0) {
			let series1 = new Charting.Series2D(new Collections.List<number>([0, 1, 2, 3]),
				new Collections.List<number>([20, 60, 40, 55]),
				new Collections.List<string>(["January", "February", "March", "April"]));
			series1.title = "Series 1";
			collection.add(series1);
		}
		if (i == 1) {
			let series2 = new Charting.Series2D(new Collections.List<number>([0, 1, 2, 3]),
				new Collections.List<number>([30, 70, 65, 19]),
				new Collections.List<string>([ "May", "June", "July", "August" ]));
			series2.title = "Series 2";
			collection.add(series2);
		}
		if (i == 2) {
			let series3 = new Charting.Series2D(new Collections.List<number>([0, 1, 2, 3]),
				new Collections.List<number>([22, 44, 33, 66]),
				new Collections.List<string>(["September", "October", "November", "December"]));
			series3.title = "Series 3";
			collection.add(series3);
		}
	}
	return collection;
}

function getBarFills(): m.MindFusion.Charting.Collections.List<m.MindFusion.Charting.Drawing.Brush>
{
	var fills = new Collections.List<m.MindFusion.Charting.Drawing.Brush>();

	fills.add(new Drawing.Brush("skyBlue"));
	fills.add(new Drawing.Brush("teal"));
	fills.add(new Drawing.Brush("powderBlue"));

	return fills;
}

function getPieFills(): m.MindFusion.Charting.Collections.List<m.MindFusion.Charting.Collections.List<m.MindFusion.Charting.Drawing.Brush>>
{
	var fills = new Collections.List<m.MindFusion.Charting.Collections.List<m.MindFusion.Charting.Drawing.Brush>>();

	fills.add(new Collections.List<m.MindFusion.Charting.Drawing.Brush>([
		new Drawing.Brush("rosyBrown"),
		new Drawing.Brush("coral"),
		new Drawing.Brush("crimson"),
		new Drawing.Brush("darkRed"),
	]));

	return fills;
}

// handlers
let chart = document.getElementById('chart') as HTMLSelectElement;
chart.onchange = () => {
	let bardiv = document.getElementById('bar') as HTMLDivElement;
	let piediv = document.getElementById('pie') as HTMLDivElement;

	piediv.style.visibility = "visible";
	if (chart.selectedIndex == 0)
	{
		bardiv.style.display = "block";
		piediv.style.display = "none";
	}
	else if (chart.selectedIndex == 1) {
		bardiv.style.display = "none";
		piediv.style.display = "block";
	}
};

window.onload = () => {
	let chart = document.getElementById('chart') as HTMLSelectElement;
	chart.onchange(null);
}