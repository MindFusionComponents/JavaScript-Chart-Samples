﻿import m = require('Scripts/MindFusion.Charting');

var Charting = m.MindFusion.Charting;
var Controls = m.MindFusion.Charting.Controls;
var Collections = m.MindFusion.Charting.Collections;
var Drawing = m.MindFusion.Charting.Drawing;
var Components = m.MindFusion.Charting.Components;

let chartEl = <HTMLCanvasElement>document.getElementById('barChart');
chartEl.width = chartEl.offsetParent.clientWidth;
chartEl.height = chartEl.offsetParent.clientHeight;
let barChart = new Controls.Dashboard(chartEl);

// create sample data
var series = new Collections.ObservableCollection<m.MindFusion.Charting.Series>();
for (let i = 0; i < 4; i++)
{
				if (i == 0) {
					series.add(new Charting.BarSeries(
						new Collections.List<number>([20, 60, 40, 55]),
						new Collections.List<string>(["Acer", "Biostar", "Foxconn", "Supermicro"]),
						new Collections.List<string>(["", "", "", ""])));
				}
				if (i == 1) {
					series.add(new Charting.BarSeries(
						new Collections.List<number>([30, 70, 65, 19]),
				new Collections.List<string>(["Biostar", "Intel", "Nvidia", "VIA Technologies"]),
				new Collections.List<string>(["", "", "", ""])));
				}
				if (i == 2) {
					series.add(new Charting.BarSeries(
						new Collections.List<number>([22, 44, 33, 66]),
				new Collections.List<string>(["Foxconn", "Nvidia", "Marvell", "NexGen"]),
				new Collections.List<string>(["", "", "", ""])));
				}
				if (i == 3) {
					series.add(new Charting.BarSeries(
						new Collections.List<number>([12, 45, 77, 90]),
						new Collections.List<string>(["Supermicro", "VIA Technologies", "NexGen", "Toshiba"]),
						new Collections.List<string>(["", "", "", ""])));
				}
}

// create labels data
var annotations = new Collections.ObservableCollection<m.MindFusion.Charting.Series>();
annotations.add(new Charting.BarSeries(
				new Collections.List<number>([0, 0, 0, 0]),
				new Collections.List<string>(["", "", "", ""]),
				new Collections.List<string>(["", "", "", ""]),
				new Collections.List<string>(["Motherboards", "Chipsets", "CPU", "HDD"])));

var mainGrid = new Components.GridPanel();
mainGrid.horizontalAlignment = Components.LayoutAlignment.Stretch;
mainGrid.verticalAlignment = Components.LayoutAlignment.Stretch;
mainGrid.columns.add(new Components.GridColumn());
mainGrid.rows.add(new Components.GridRow());
barChart.rootPanel.children.add(mainGrid);

// add plot
var plot1 = new Charting.Plot2D();
plot1.gridColumn = 1;
plot1.gridRow = 0;
plot1.verticalScroll = false;
plot1.xAxis = new Charting.Axis();
plot1.yAxis = new Charting.Axis();
plot1.yAxis.minValue = 0;
plot1.yAxis.maxValue = 100;
mainGrid.children.add(plot1);

// add renderer
var barRenderer = new Charting. BarRenderer(series);
barRenderer.labelBrush = new Drawing.Brush("gray");
barRenderer.labelFontStyle = Drawing.FontStyle.Italic;
plot1.seriesRenderers.add(barRenderer);

// add labels renderer
var annotationRenderer = new Charting.AnnotationRenderer(annotations);
plot1.seriesRenderers.add(annotationRenderer);

// create axes
var yAxis = new Charting.YAxisRenderer(plot1.yAxis, plot1.xAxis);
yAxis.plotLeftSide = true;
yAxis.gridColumn = 0;
yAxis.labelsSource = plot1;
mainGrid.children.add(yAxis);

var xAxis = new Charting.XAxisRenderer(plot1.xAxis);
xAxis.gridRow = 1;
xAxis.gridColumn = 1;
xAxis.labelsSource = plot1;
xAxis.showCoordinates = false;
xAxis.labelFontStyle = Drawing.FontStyle.Underline;
mainGrid.children.add(xAxis);

// styles
plot1.gridType = Charting.GridType.Crossed;
plot1.xAxis.title = "";
plot1.yAxis.title = "";
plot1.gridColor1 = new Drawing.Color("white");
barChart.backColor = new Drawing.Color("gray");

barChart.theme.commonSeriesFills = getFills();
barChart.theme.axisStroke = barChart.theme.axisLabelsBrush = new Drawing.Brush("white");
barChart.theme.uniformSeriesStroke = new Drawing.Brush("white");
barChart.theme.highlightStroke = new Drawing.Brush("gray");
barChart.theme.highlightStrokeThickness = 1;
barChart.theme.plotBackground = new Drawing.Brush("black");

barChart.draw();


function getFills(): m.MindFusion.Charting.Collections.List<m.MindFusion.Charting.Drawing.Brush> 
{
	let fills = new Collections.List<m.MindFusion.Charting.Drawing.LinearGradientBrush>();

	fills.add(new Drawing.LinearGradientBrush("lightGray", "white"));
	fills.add(new Drawing.LinearGradientBrush("white", "paleGreen"));
	fills.add(new Drawing.LinearGradientBrush("white", "orange"));
	fills.add(new Drawing.LinearGradientBrush("white", "powderBlue"));


	return fills;
}
