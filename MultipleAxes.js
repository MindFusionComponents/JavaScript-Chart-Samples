define(["require", "exports", 'Scripts/MindFusion.Charting'], function (require, exports, m) {
    "use strict";
    var Charting = m.MindFusion.Charting;
    var Controls = m.MindFusion.Charting.Controls;
    var Collections = m.MindFusion.Charting.Collections;
    var Drawing = m.MindFusion.Charting.Drawing;
    var Components = m.MindFusion.Charting.Components;
    // create the dashboard
    var dashboardEl = document.getElementById('dashboard');
    dashboardEl.width = dashboardEl.offsetParent.clientWidth;
    dashboardEl.height = dashboardEl.offsetParent.clientHeight;
    var dashboard = new Controls.Dashboard(dashboardEl);
    var plot = new Charting.Plot2D();
    // sample temperature data for bar graphics
    var barSeries = new Charting.Series2D(new Collections.List([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]), //x
    new Collections.List([-3, -7, 10, 12, 20, 29, 33, 30, 24, 15, 2, -8]), //y
    new Collections.List(["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]));
    barSeries.title = "Temperature";
    barSeries.supportedLabels = Charting.LabelKinds.XAxisLabel;
    // sample pressure data for line graphics
    var lineSeries = new Charting.Series2D(new Collections.List([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]), //x
    new Collections.List([100120, 101044, 101503, 103499, 102122, 100593, 95542, 102223, 103002, 102994, 102843, 101332]), //right-y
    null);
    lineSeries.title = "Pressure";
    // draw bars
    var barRenderer = new Charting.BarRenderer(new Collections.ObservableCollection([barSeries]));
    barRenderer.seriesStyle = new Charting.UniformSeriesStyle(new Drawing.Brush("lightSkyBlue"), new Drawing.Brush("black"), 2);
    // draw lines
    var lineRenderer = new Charting.LineRenderer(new Collections.ObservableCollection([lineSeries]));
    lineRenderer.seriesStyle = new Charting.UniformSeriesStyle(new Drawing.Brush("darkOliveGreen"), new Drawing.Brush("darkOliveGreen"), 4);
    // add graphics to plot
    plot.seriesRenderers.add(barRenderer);
    plot.seriesRenderers.add(lineRenderer);
    // draw annotations
    var annotations = new Charting.Series2D(new Collections.List([7]), //x
    new Collections.List([95542]), //right-y
    new Collections.List(["TORNADO"]));
    var annotationRenderer = new Charting.AnnotationRenderer(new Collections.ObservableCollection([annotations]));
    plot.seriesRenderers.add(annotationRenderer);
    // create axes
    var celsiusAxis = new Charting.Axis();
    celsiusAxis.interval = 5;
    celsiusAxis.minValue = -20;
    celsiusAxis.maxValue = 50;
    celsiusAxis.title = "Celsius";
    var fahrenheitAxis = new Charting.Axis();
    fahrenheitAxis.minValue = -20 * 1.8 + 32;
    fahrenheitAxis.maxValue = 50 * 1.8 + 32;
    fahrenheitAxis.interval = 10;
    fahrenheitAxis.title = "Fahrenheit";
    var kelvinAxis = new Charting.Axis();
    kelvinAxis.minValue = -20 + 273.15;
    kelvinAxis.maxValue = 50 + 273.15;
    kelvinAxis.interval = 5;
    kelvinAxis.title = "Kelvin";
    var monthAxis = new Charting.Axis();
    monthAxis.interval = 1;
    monthAxis.minValue = 0;
    monthAxis.maxValue = 12;
    monthAxis.title = "Months";
    var pascals = new Charting.Axis();
    pascals.minValue = 90000;
    pascals.maxValue = 106000;
    pascals.interval = 1000;
    pascals.title = "Pressure";
    plot.yAxis = celsiusAxis;
    plot.xAxis = monthAxis;
    lineRenderer.yAxis = annotationRenderer.yAxis = pascals;
    // add legend
    var legendRenderer = new Charting.LegendRenderer();
    legendRenderer.content = new Collections.ObservableCollection([barRenderer, lineRenderer]);
    legendRenderer.background = new Drawing.Brush("lightYellow");
    dashboard.rootPanel.children.add(legendRenderer);
    // create dashboard layout
    var xAxisRenderer = new Charting.XAxisRenderer(monthAxis);
    xAxisRenderer.labelsSource = plot;
    dashboard.layoutBuilder.createAndAddPlotAndAxes(plot, null, [new Charting.YAxisRenderer(celsiusAxis),
        new Charting.YAxisRenderer(fahrenheitAxis),
        new Charting.YAxisRenderer(kelvinAxis)], [xAxisRenderer], [new Charting.YAxisRenderer(pascals)]);
    dashboard.draw();
});
//# sourceMappingURL=MultipleAxes.js.map