MindFusion = {
	Charting: {
		Commands: {
			Command: function (manager) {
				/// <summary>Represents an action that modifies an object and whose effects can be undone.</summary>
				/// <param name="manager" type="UndoManager">Type: UndoManager&#10;The UndoManager that contains this command.</param>
			},
			CompositeCommand: function (manager) {
				/// <summary>Represents a set of Command instances as a single operation.Undoing or redoing the composite action, respectively undoes or redoes all its constituent subactions at the same time.</summary>
				/// <param name="manager" type="UndoManager">Type: UndoManager&#10;The UndoManager that contains this command.</param>
			},
			DisposableCommand: function (manager) {
				/// <summary>Represents a command that implements the IDisposable interface.</summary>
				/// <param name="manager" type="UndoManager">Type: UndoManager&#10;The UndoManager that contains this command.</param>
			},
			TrackChangesCommand: function () {
				/// <summary>Represents a command that can track and undo changes of INotifyPropertyValueChanged objects.</summary>
			},
			UndoEventArgs: function (command) {
				/// <summary>Contains the arguments passed to the ActionUndone and ActionRedone event handlers.</summary>
				/// <param name="command" type="Command">Type: Command&#10;The Command related to the event.</param>
			},
			__namespace: true
		},
		Components: {
			BorderComponent: function () {
				/// <summary>Represents a border UI component.</summary>
				/// <field name="borderBrush" type="MindFusion.Charting.Drawing.Brush">Gets or sets the Brush used to draw the border outlines.</field>
				/// <field name="borderThickness" type="MindFusion.Charting.Components.Number">Gets or sets the border thickness.</field>
				/// <field name="content" type="MindFusion.Charting.Components.Component">Gets or sets the Component displayed inside this border.</field>
				/// <field name="padding" type="MindFusion.Charting.Components.Number">Gets or sets the padding space between this border and its Content.</field>
			},
			ButtonComponent: function () {
				/// <summary>Represents a button UI component.</summary>
				/// <field name="clicked" type="MindFusion.Charting.Components.EventDispatcher<EventArgs>">Raised when the user clicks on this button.</field>
				/// <field name="content" type="MindFusion.Charting.Components.Component">Gets or sets the Component displayed inside this border.</field>
				/// <field name="customDraw" type="MindFusion.Charting.Components.ButtonDrawEventDispatcher">Raised to let you custom-draw button graphics.</field>
				/// <field name="padding" type="MindFusion.Charting.Components.Number">Gets or sets the padding space between this border and its Content.</field>
			},
			ButtonDrawEventArgs: function () {
				/// <summary>Contains arguments passed to the CustomDraw event of buttons.</summary>
				/// <field name="clipBounds" type="MindFusion.Drawing.Rect">Gets the current clip rectangle.</field>
				/// <field name="graphics" type="MindFusion.Charting.Drawing.Graphics">Gets the Graphics surface where the event handler should draw.</field>
			},
			ButtonDrawEventDispatcher: function () {
				/// <summary>Represents a dispatcher for ButtonDraw events.</summary>
			},
			Component: function () {
				/// <summary>Represents a user interface component.</summary>
				/// <field name="actualHeight" type="MindFusion.Charting.Components.Number">Gets a number value specifying the component's assigned height. Valid only after calling arrange.</field>
				/// <field name="actualWidth" type="MindFusion.Charting.Components.Number">Gets a number value specifying the component's assigned width. Valid only after calling arrange.</field>
				/// <field name="desiredHeight" type="MindFusion.Charting.Components.Number">Gets a nullable number value specifying the component's desired height. Valid only after calling measure.</field>
				/// <field name="desiredWidth" type="MindFusion.Charting.Components.Number">Gets a nullable number value specifying the component's desired width. Valid only after calling measure.</field>
				/// <field name="gridColumn" type="MindFusion.Charting.Components.Number">Gets or sets the column index of this component when placed inside a GridPanel.</field>
				/// <field name="gridRow" type="MindFusion.Charting.Components.Number">Gets or sets the row index of this component when placed inside a GridPanel.</field>
				/// <field name="height" type="MindFusion.Charting.Components.Number">Gets or sets a fixed height for this component.</field>
				/// <field name="hitTestVisibility" type="MindFusion.Charting.Components.HitTestVisibility">Gets or sets the hit-test visibility of this component.</field>
				/// <field name="horizontalAlignment" type="MindFusion.Charting.Components.LayoutAlignment">Gets or sets the horizontal alignment of this component inside the layout rectangle allocated by its parent panel.</field>
				/// <field name="margin" type="MindFusion.Charting.Components.Margins">Gets the margin space around this component relative to the layout rectangle allocated by its parent panel.</field>
				/// <field name="rectInParent" type="MindFusion.Charting.Components.Number">Gets the boundaries of this component relative to its parent.</field>
				/// <field name="toolTip" type="String">Gets or sets the component's tooltip text.</field>
				/// <field name="verticalAlignment" type="MindFusion.Charting.Components.LayoutAlignment">Gets or sets the vertical alignment of this component inside the layout rectangle allocated by its parent panel.</field>
				/// <field name="visibility" type="MindFusion.Charting.Components.Visibility">Gets or sets the visibility of this component.</field>
				/// <field name="width" type="MindFusion.Charting.Components.Number">Gets or sets a fixed width for this component.</field>
				/// <field name="xInParent" type="MindFusion.Charting.Components.Number">Gets a number value specifying the component's horizontal position relative to its parent.</field>
				/// <field name="yInParent" type="MindFusion.Charting.Components.Number">Gets a number value specifying the component's vertical position relative to its parent.</field>
			},
			ComponentVisitor: function () {
				/// <summary>Defines the base visitor class for hierarchy of Component objects.</summary>
			},
			GridColumn: function () {
				/// <summary>Represents a column in a GridPanel.</summary>
				/// <field name="lengthType" type="MindFusion.Charting.Components.LengthType">Gets or sets the column's sizing mode.</field>
				/// <field name="width" type="MindFusion.Charting.Components.Number">Gets or sets fixed width for this column.</field>
			},
			GridPanel: function () {
				/// <summary>Represents a layout panel that arranges its child components in a grid.</summary>
				/// <field name="columns" type="MindFusion.Charting.Collections.List<GridColumn>">Gets or sets a list of GridColumn objects specifying column attributes.</field>
				/// <field name="rows" type="MindFusion.Charting.Collections.List<GridRow>">Gets or sets a list of GridRow objects specifying row attributes.</field>
			},
			GridRow: function () {
				/// <summary>Represents a row in a GridPanel.</summary>
				/// <field name="height" type="MindFusion.Charting.Components.Number">Gets or sets fixed height for this row.</field>
				/// <field name="lengthType" type="MindFusion.Charting.Components.LengthType">Gets or sets the row's sizing mode.</field>
			},
			ImageComponent: function () {
				/// <summary>Represents a component that draws a bitmap image.</summary>
				/// <field name="autoSize" type="MindFusion.Charting.Components.Boolean">Gets or sets a value indicating whether the component should auto-size to match the dimensions of its Image.</field>
				/// <field name="imageAlign" type="MindFusion.Charting.Drawing.ImageAlign">Gets or sets the image alignment relative to the component.</field>
				/// <field name="location" type="String">Gets or sets Image by its file location.</field>
			},
			Panel: function () {
				/// <summary>Represents a component that contains multiple child components and manages their layout.</summary>
				/// <field name="children" type="MindFusion.Charting.Collections.ObservableCollection<Component>">Gets the list of child components of this panel.</field>
				/// <field name="parentControl" type="MindFusion.Charting.Components.RootControl">Gets or sets a reference to the control containing this panel.</field>
			},
			RangeSelector: function (axis, minValue, maxValue) {
				/// <summary>Represents a control that handles zooming and scrolling of axes.</summary>
				/// <param name="axis" type="void">Type: void&#10;</param>
				/// <param name="minValue" type="void">Type: void&#10;</param>
				/// <param name="maxValue" type="void">Type: void&#10;</param>
				/// <field name="axesSource" type="MindFusion.Charting.Components.SeriesContainer">Gets or sets the object whose Axes will be handled by this component.</field>
				/// <field name="axis" type="MindFusion.Charting.Components.Axis">Gets or sets the Axis that will be handled by this component.</field>
				/// <field name="brush" type="MindFusion.Charting.Components.Brush">Gets or sets the Brush used to paint the component's background.</field>
				/// <field name="handleBrush" type="MindFusion.Charting.Components.Brush">Gets or sets the Brush used to paint resize handles.</field>
				/// <field name="handleSize" type="MindFusion.Charting.Components.Number">Gets or sets the width or height of resize handles.</field>
				/// <field name="maxValue" type="MindFusion.Charting.Components.Number">Gets or sets the largest value of the displayed range.</field>
				/// <field name="minValue" type="MindFusion.Charting.Components.Number">Gets or sets the smallest value of the displayed range.</field>
				/// <field name="orientation" type="MindFusion.Charting.Components.Orientation">Gets or sets the orientation of the component.</field>
				/// <field name="size" type="MindFusion.Charting.Components.Number">Gets or sets the width or height of the component.</field>
				/// <field name="thumbBrush" type="MindFusion.Charting.Components.Brush">Gets or sets the Brush used to paint the thumb.</field>
			},
			SimplePanel: function () {
				/// <summary>Represents a layout panel that arranges its child components over each other.</summary>
			},
			StackPanel: function () {
				/// <summary>Represents a layout panel that arranges its child components in a stack.</summary>
				/// <field name="orientation" type="MindFusion.Charting.Components.Orientation">Gets or sets the stack orientation.</field>
			},
			TextComponent: function () {
				/// <summary>Represents a Component that draws text.</summary>
				/// <field name="fontName" type="String">Gets or sets the name of the font that should be used to draw the component's text.</field>
				/// <field name="fontSize" type="MindFusion.Charting.Components.Number">Gets or sets the size of the font that should be used to draw the component's text.</field>
				/// <field name="fontStyle" type="MindFusion.Charting.Drawing.FontStyle">Gets or sets the style of the font that should be used to draw the component's text.</field>
				/// <field name="styleHint" type="MindFusion.Charting.Components.TextStyleHint">Gets or sets a value indicating which attribute values this component should inherit from current Theme if its local text appearance properties are not set.</field>
				/// <field name="text" type="String">Gets or sets the text that should be drawn inside this component.</field>
				/// <field name="textBrush" type="MindFusion.Charting.Drawing.Brush">Gets or sets the Brush that should be used to draw the component's text.</field>
			},
			__namespace: true
		},
		Controls: {
			AreaChart: function (element, lineType, seriesRenderer) {
				/// <summary>A control used to draw area charts.</summary>
				/// <param name="element" type="HTMLCanvasElement">Type: HTMLCanvasElement&#10;The canvas DOM element to associate this chart with.</param>
				/// <param name="lineType" type="LineType" optional="true">Optional. Type: LineType&#10;A member of the LineType enumeration.</param>
				/// <param name="seriesRenderer" type="AreaRenderer" optional="true">Optional. Type: AreaRenderer&#10;An AreaRenderer used to draw chart's data series.</param>
				/// <field name="areaOpacity" type="MindFusion.Charting.Controls.Number">Gets or sets the opacity of area polygons.</field>
				/// <field name="lineType" type="MindFusion.Charting.Controls.LineType">Gets or sets what type of line segments to draw between data points.</field>
				/// <field name="series" type="MindFusion.Charting.Collections.ObservableCollection<Series>">BiaxialChart.Series override. Gets or sets the list of series whose data is drawn in this chart.</field>
			},
			BarChart: function (element, barLayout, seriesRenderer) {
				/// <summary>A control used to draw bar charts.</summary>
				/// <param name="element" type="HTMLCanvasElement">Type: HTMLCanvasElement&#10;The canvas DOM element to associate this chart with.</param>
				/// <param name="barLayout" type="BarLayout" optional="true">Optional. Type: BarLayout&#10;A member of the BarLayout enumeration.</param>
				/// <param name="seriesRenderer" type="Renderer2D" optional="true">Optional. Type: Renderer2D&#10;A Renderer2D used to draw chart's data series.</param>
				/// <field name="barLayout" type="MindFusion.Charting.Controls.BarLayout">Gets or sets how to arrange bars when rendering multiple series.</field>
				/// <field name="barSpacingRatio" type="MindFusion.Charting.Controls.Number">Gets or sets the ratio of empty space between bars to space occupied by bars.</field>
				/// <field name="horizontalBars" type="MindFusion.Charting.Controls.Boolean">Gets or sets a value identifying whether bars should be horizontal.</field>
				/// <field name="innerLabelRotation" type="MindFusion.Charting.Controls.Number">Gets the rotation angle of inner labels. If not specified, labels are rotated at predefiend angles depending on bars' orientation and layout.</field>
				/// <field name="outerLabelRotation" type="MindFusion.Charting.Controls.Number">Gets the rotation angle of outer labels. If not specified, labels are rotated at predefiend angles depending on bars' orientation and layout.</field>
				/// <field name="series" type="MindFusion.Charting.Collections.ObservableCollection<Series>">BiaxialChart.Series override. Gets or sets the list of series whose data is drawn in this chart.</field>
				/// <field name="stackOuterLabels" type="MindFusion.Charting.Controls.Boolean">Gets whether outer labels are displayed stacked on top of stacked bars, instead of showing them on the bar sides.</field>
			},
			BarChart3D: function (element, barLayout, barModel, seriesRenderer) {
				/// <summary>A control used to draw 3D bar charts.</summary>
				/// <param name="element" type="HTMLCanvasElement">Type: HTMLCanvasElement&#10;The canvas DOM element to associate this chart with.</param>
				/// <param name="barLayout" type="BarLayout" optional="true">Optional. Type: BarLayout&#10;A member of the BarLayout enumeration.</param>
				/// <param name="barModel" type="BarModel3D" optional="true">Optional. Type: BarModel3D&#10;A member of the BarModel3D enumeration.</param>
				/// <param name="seriesRenderer" type="Renderer2D" optional="true">Optional. Type: Renderer2D&#10;A Renderer2D used to draw chart's data series.</param>
				/// <field name="barLayout" type="MindFusion.Charting.Controls.BarLayout">Gets or sets how to arrange bars when rendering multiple series.</field>
				/// <field name="barModel" type="MindFusion.Charting.Controls.BarModel3D">Gets or sets how to visualize the bars when rendering multiple series.</field>
				/// <field name="series" type="MindFusion.Charting.Collections.ObservableCollection<Series>">BiaxialChart.Series override. Gets or sets the list of series whose data is drawn in this chart.</field>
			},
			BiaxialChart: function (element, seriesRenderer) {
				/// <summary>A base class for charts that display X and Y axes.</summary>
				/// <param name="element" type="HTMLCanvasElement">Type: HTMLCanvasElement&#10;The canvas DOM element to associate this chart with.</param>
				/// <param name="seriesRenderer" type="Renderer2D" optional="true">Optional. Type: Renderer2D&#10;A SeriesRenderer used to draw chart's data series.</param>
				/// <field name="allowPan" type="MindFusion.Charting.Controls.Boolean">Gets or sets a value indicating whether users are allowed to pan the chart's plot.</field>
				/// <field name="annotations" type="MindFusion.Charting.Collections.ObservableCollection<Series>">Gets or sets the list of series whose labels are drawn as annotations.</field>
				/// <field name="gridType" type="MindFusion.Charting.Controls.GridType">Gets or sets the type of grid to draw in this chart.</field>
				/// <field name="pinGrid" type="MindFusion.Charting.Controls.Boolean">Gets or sets a value indicating whether grid stripes should be pinned in place or scroll together with the plot when users pan it.</field>
				/// <field name="series" type="MindFusion.Charting.Collections.ObservableCollection<Series>">Gets or sets the list of series whose data is drawn in this chart.</field>
				/// <field name="showScatter" type="MindFusion.Charting.Controls.Boolean">Gets or sets a value indicating whether the chart should render scatter shapes.</field>
				/// <field name="showXCoordinates" type="MindFusion.Charting.Controls.Boolean">Gets or sets a value indicating whether to show X axis coordinates.</field>
				/// <field name="showXRangeSelector" type="MindFusion.Charting.Controls.Boolean">Gets or sets a value indicating whether to show a RangeSelector for the X axis, to let users scroll or resize the currently visible horizontal data window.</field>
				/// <field name="showXTicks" type="MindFusion.Charting.Controls.Boolean">Gets or sets a value indicating whether to show X axis ticks.</field>
				/// <field name="showYCoordinates" type="MindFusion.Charting.Controls.Boolean">Gets or sets a value indicating whether to show Y axis coordinates.</field>
				/// <field name="showYRangeSelector" type="MindFusion.Charting.Controls.Boolean">Gets or sets a value indicating whether to show a RangeSelector for the Y axis, to let users scroll or resize the currently visible vertical data window.</field>
				/// <field name="showYTicks" type="MindFusion.Charting.Controls.Boolean">Gets or sets a value indicating whether to show Y axis ticks.</field>
				/// <field name="xAxis" type="MindFusion.Charting.Axis">Gets or sets an Axis object representing horizontal data range.</field>
				/// <field name="xAxisLabelRotationAngle" type="MindFusion.Charting.Controls.Number">Gets or sets the rotation angle of the X axis labels.</field>
				/// <field name="xAxisTickLength" type="MindFusion.Charting.Controls.Number">Gets or sets the length of X axis ticks.</field>
				/// <field name="xScrollRangeMax" type="MindFusion.Charting.Controls.Number">Gets or sets the largest value allowed to scroll to using the X axis' RangeSelector.</field>
				/// <field name="xScrollRangeMin" type="MindFusion.Charting.Controls.Number">Gets or sets the smallest value allowed to scroll to using the X axis' RangeSelector.</field>
				/// <field name="yAxis" type="MindFusion.Charting.Axis">Gets or sets an Axis object representing vertical data range.</field>
				/// <field name="yAxisLabelRotationAngle" type="MindFusion.Charting.Controls.Number">Gets or sets the rotation angle of the Y axis labels.</field>
				/// <field name="yAxisTickLength" type="MindFusion.Charting.Controls.Number">Gets or sets the length of Y axis ticks.</field>
				/// <field name="yLabelAlignment" type="MindFusion.Charting.Drawing.StringAlignment">Gets the horizontal alignment of Y-axis labels.</field>
				/// <field name="yScrollRangeMax" type="MindFusion.Charting.Controls.Number">Gets or sets the largest value allowed to scroll to using the Y axis' RangeSelector.</field>
				/// <field name="yScrollRangeMin" type="MindFusion.Charting.Controls.Number">Gets or sets the smallest value allowed to scroll to using the Y axis' RangeSelector.</field>
			},
			BubbleChart: function (element, seriesRenderer) {
				/// <summary>A control used to draw bubble charts.</summary>
				/// <param name="element" type="HTMLCanvasElement">Type: HTMLCanvasElement&#10;The canvas DOM element to associate this chart with.</param>
				/// <param name="seriesRenderer" type="BubbleRenderer" optional="true">Optional. Type: BubbleRenderer&#10;A LineRenderer used to draw chart's data series.</param>
				/// <field name="labelAlignment" type="MindFusion.Charting.Controls.BubbleLabelAlignment">Gets or sets the alignment of labels relative to their associated bubbles.</field>
				/// <field name="series" type="MindFusion.Charting.Collections.ObservableCollection<Series>">BiaxialChart.Series override. Gets or sets the list of series whose data is drawn in this chart.</field>
			},
			CandlestickChart: function (element, seriesRenderer) {
				/// <summary>A control used to draw candlestick charts.</summary>
				/// <param name="element" type="HTMLCanvasElement">Type: HTMLCanvasElement&#10;The canvas DOM element to associate this chart with.</param>
				/// <param name="seriesRenderer" type="CandlestickRenderer" optional="true">Optional. Type: CandlestickRenderer&#10;A CandlestickRenderer used to draw chart's data series.</param>
				/// <field name="candlestickWidth" type="MindFusion.Charting.Controls.Number">Gets or sets the width of the candlesticks.</field>
				/// <field name="series" type="MindFusion.Charting.Collections.ObservableCollection<Series>">BiaxialChart.Series override. Gets or sets the list of series whose data is drawn in this chart.</field>
			},
			Chart: function (element, renderer) {
				/// <summary>A base class for chart controls.</summary>
				/// <param name="element" type="HTMLCanvasElement">Type: HTMLCanvasElement&#10;The canvas DOM element to associate this chart with.</param>
				/// <param name="renderer" type="SeriesRenderer" optional="true">Optional. Type: SeriesRenderer&#10;A SeriesRenderer used to draw chart's data series.</param>
				/// <field name="allowMoveLegend" type="MindFusion.Charting.Controls.Boolean">Gets or sets a value indicating whether users are allowed to move the legend.</field>
				/// <field name="chartPanel" type="MindFusion.Charting.Controls.GridPanel">Gets or sets the GridPanel that contains the chart's PlotPanel and axis renderers.</field>
				/// <field name="dataBoundSeries" type="MindFusion.Charting.Collections.List<Series>">Contains series generated from DataSource data.</field>
				/// <field name="dataSource" type="MindFusion.Charting.Controls.Object">Gets or sets the chart's data source.</field>
				/// <field name="innerLabelsDataFields" type="MindFusion.Charting.Collections.ObservableCollection<String>">Gets or sets the names of fields in the data source whose values are shown as inner labels of rendered graphical elements.</field>
				/// <field name="legendHorizontalAlignment" type="MindFusion.Charting.Controls.LayoutAlignment">Gets or sets the horizontal alignment of the legend.</field>
				/// <field name="legendMargin" type="MindFusion.Charting.Controls.Margins">Gets or sets the margin space around the legend.</field>
				/// <field name="legendRenderer" type="MindFusion.Charting.Controls.LegendRenderer">Gets the LegendRenderer component used to draw the chart's legend.</field>
				/// <field name="legendSpacing" type="MindFusion.Charting.Controls.Number">Gets the distance between adjacent entries in the legend.</field>
				/// <field name="legendTitle" type="String">Gets or sets the legend title.</field>
				/// <field name="legendVerticalAlignment" type="MindFusion.Charting.Controls.LayoutAlignment">Gets or sets the vertical alignment of the legend.</field>
				/// <field name="outerLabelsDataFields" type="MindFusion.Charting.Collections.ObservableCollection<String>">Gets or sets the names of fields in the data source whose values are shown as outer labels of rendered graphical elements.</field>
				/// <field name="plot" type="MindFusion.Charting.Controls.Plot">Gets the chart's Plot component.</field>
				/// <field name="plotImageAlign" type="MindFusion.Charting.Drawing.ImageAlign">Gets or sets the alignment of PlotImage relatively to the plot boundaries.</field>
				/// <field name="plotImageAutoSize" type="MindFusion.Charting.Controls.Boolean">Gets or sets whether auto-size mode is enabled for PlotImage.</field>
				/// <field name="plotImageLocation" type="String">Gets or sets the Image drawn inside chart's plot area.</field>
				/// <field name="plotPanel" type="MindFusion.Charting.Components.Panel">Gets the Panel that contains the chart's plot and associated elements.</field>
				/// <field name="showDataLabels" type="MindFusion.Charting.Controls.Boolean">Gets or sets what kind of labels from data series should be drawn.</field>
				/// <field name="showHighlight" type="MindFusion.Charting.Controls.Boolean">Gets a value indicating whether to show highlights on data items.</field>
				/// <field name="showLegend" type="MindFusion.Charting.Controls.Boolean">Gets or sets a value indicating whether the chart should draw a legend.</field>
				/// <field name="showLegendTitle" type="MindFusion.Charting.Controls.Boolean">Gets a value indicating whether to display the legend title.</field>
				/// <field name="showToolTips" type="MindFusion.Charting.Controls.Boolean">Gets a value indicating whether to show tooltips.</field>
				/// <field name="showZoomWidgets" type="MindFusion.Charting.Controls.Boolean">Gets or sets a value indicating whether the plot should show zoom buttons.</field>
				/// <field name="subtitle" type="String">Gets or sets the sub-title of this chart.</field>
				/// <field name="subtitleBrush" type="MindFusion.Charting.Drawing.Brush">Gets or sets the Brush used to draw chart's Subtitle.</field>
				/// <field name="subtitleFontName" type="String">Gets or sets the name of Font used to draw chart's Subtitle.</field>
				/// <field name="subtitleFontSize" type="MindFusion.Charting.Controls.Number">Gets or sets the size of Font used to draw chart's Subtitle.</field>
				/// <field name="subtitleFontStyle" type="MindFusion.Charting.Drawing.FontStyle">Gets or sets the style of Font used to draw chart's Subtitle.</field>
				/// <field name="subtitleMargin" type="MindFusion.Charting.Controls.Margins">Gets or sets the margin space around Subtitle.</field>
				/// <field name="title" type="String">Gets or sets the title of this chart.</field>
				/// <field name="titleBrush" type="MindFusion.Charting.Drawing.Brush">Gets or sets the Brush used to draw chart's Title.</field>
				/// <field name="titleFontName" type="String">Gets or sets the name of Font used to draw chart's Title.</field>
				/// <field name="titleFontSize" type="MindFusion.Charting.Controls.Number">Gets or sets the size of Font used to draw chart's Title.</field>
				/// <field name="titleFontStyle" type="MindFusion.Charting.Drawing.FontStyle">Gets or sets the style of Font used to draw chart's Title.</field>
				/// <field name="titleMargin" type="MindFusion.Charting.Controls.Margins">Gets or sets the margin space around Title.</field>
				/// <field name="toolTipsDataFields" type="MindFusion.Charting.Collections.ObservableCollection<String>">Gets or sets the names of fields in the data source whose values are shown as tooltips of rendered graphical elements.</field>
				/// <field name="xAxisLabelsDataFields" type="MindFusion.Charting.Collections.ObservableCollection<String>">Gets or sets the names of fields in the data source whose values are shown as X axis labels of rendered graphical elements.</field>
				/// <field name="xDataFields" type="MindFusion.Charting.Collections.ObservableCollection<String>">Gets or sets the names of fields in the data source whose values are assigned to X coordinates of rendered graphical elements.</field>
				/// <field name="yAxisLabelsDataFields" type="MindFusion.Charting.Collections.ObservableCollection<String>">Gets or sets the names of fields in the data source whose values are shown as Y axis labels of rendered graphical elements.</field>
				/// <field name="yDataFields" type="MindFusion.Charting.Collections.ObservableCollection<String>">Gets or sets the names of fields in the data source whose values are assigned to Y coordinates of rendered graphical elements.</field>
				/// <field name="zAxisLabelsDataFields" type="MindFusion.Charting.Collections.ObservableCollection<String>">Gets or sets the names of fields in the data source whose values are shown as Z axis labels of rendered graphical elements.</field>
				/// <field name="zDataFields" type="MindFusion.Charting.Collections.ObservableCollection<String>">Gets or sets the names of fields in the data source whose values are assigned to Z coordinates of rendered graphical elements.</field>
			},
			Dashboard: function (element) {
				/// <summary>A control that contains multiple chart plots and gauges</summary>
				/// <param name="element" type="HTMLCanvasElement">Type: HTMLCanvasElement&#10;The canvas DOM element to associate this dashboard with.</param>
				/// <field name="allowZoom" type="MindFusion.Charting.Controls.Boolean">Gets or sets a value indicating whether users are allowed to zoom into plots' data ranges.</field>
				/// <field name="backColor" type="MindFusion.Charting.Drawing.Color">Gets or sets dashboard's back color.</field>
				/// <field name="backgroundImageAlign" type="MindFusion.Charting.Drawing.ImageAlign">Gets or sets the alignment of BackgroundImage relatively to dashboard boundaries.</field>
				/// <field name="backgroundImageAutoSize" type="MindFusion.Charting.Controls.Boolean">Gets or sets whether auto-size mode is enabled for BackgroundImage.</field>
				/// <field name="backgroundImageLocation" type="String">Gets or sets dashboard's background image.</field>
				/// <field name="dataItemClicked" type="MindFusion.Charting.Controls.EventDispatcher<HitResult>">Raised when the user clicks on a data item inside a plot.</field>
				/// <field name="layoutBuilder" type="MindFusion.Charting.Controls.LayoutBuilder">Gets a LayoutBuilder instance that provides shortcut methods for building fragments of dashboard's user interface.</field>
				/// <field name="layoutPanel" type="MindFusion.Charting.Controls.StackPanel">Gets a Panel containing dashboard components that should participate in layout measurements and be arranged relatively to each other.</field>
				/// <field name="licenseKey" type="String">Gets or sets the license key of the control.</field>
				/// <field name="licenseLocation" type="String">Gets or sets the path to the license file.</field>
				/// <field name="rootPanel" type="MindFusion.Charting.Controls.Panel">Gets the root Panel in the hierarchy of dashboard components.</field>
				/// <field name="theme" type="MindFusion.Charting.Controls.Theme">Gets or sets a Theme specifying appearance of dashboard elements.</field>
			},
			FunnelChart: function (element, seriesRenderer) {
				/// <summary>A control used to draw funnel charts. Funnel charts represent the stages of a process and show relative values or measurements associated with each stage.</summary>
				/// <param name="element" type="HTMLCanvasElement">Type: HTMLCanvasElement&#10;The canvas DOM element to associate this chart with.</param>
				/// <param name="seriesRenderer" type="FunnelRenderer" optional="true">Optional. Type: FunnelRenderer&#10;A FunnelRenderer used to draw chart's data series.</param>
				/// <field name="dimension" type="MindFusion.Charting.Controls.Number">Gets or sets the dimension index that should be used to read data from the Series.</field>
				/// <field name="segmentSpacing" type="MindFusion.Charting.Controls.Number">Gets or sets the spacing between segments.</field>
				/// <field name="series" type="MindFusion.Charting.Controls.Series">Gets or sets the series whose data is drawn in this chart.</field>
				/// <field name="stemWidth" type="MindFusion.Charting.Controls.Number">Gets or sets the width of the funnel stem.</field>
			},
			LayoutBuilder: function (board) {
				/// <summary>Provides shortcut methods for building fragments of dashboard's user interface.</summary>
				/// <param name="board" type="Dashboard">Type: Dashboard&#10;A Dashboard instance.</param>
			},
			LineChart: function (element, seriesRenderer) {
				/// <summary>A control used to draw line charts.</summary>
				/// <param name="element" type="HTMLCanvasElement">Type: HTMLCanvasElement&#10;The canvas DOM element to associate this chart with.</param>
				/// <param name="seriesRenderer" type="LineRenderer" optional="true">Optional. Type: LineRenderer&#10;A LineRenderer used to draw chart's data series.</param>
				/// <field name="lineType" type="MindFusion.Charting.Controls.LineType">Gets or sets what type of line segments to draw between data points.</field>
				/// <field name="series" type="MindFusion.Charting.Collections.ObservableCollection<Series>">BiaxialChart.Series override. Gets or sets the list of series whose data is drawn in this chart.</field>
			},
			PieChart: function (element, seriesRenderer) {
				/// <summary>A control used to draw pie charts.</summary>
				/// <param name="element" type="HTMLCanvasElement">Type: HTMLCanvasElement&#10;The canvas DOM element to associate this chart with.</param>
				/// <param name="seriesRenderer" type="PieRenderer" optional="true">Optional. Type: PieRenderer&#10;A PieRenderer used to draw chart's data series.</param>
				/// <field name="allowRotate" type="MindFusion.Charting.Controls.Boolean">Gets or sets a value indicating whether users are allowed to rotate this chart.</field>
				/// <field name="chartPadding" type="MindFusion.Charting.Controls.Number">Gets or set padding space between the plot's border and series graphics.</field>
				/// <field name="detachedSlices" type="MindFusion.Charting.Controls.List<Number>">Gets or sets indices of detached slices.</field>
				/// <field name="doughnut" type="MindFusion.Charting.Controls.Boolean">Gets or sets a value indicating whether the pie should be rendered as a doughnut.</field>
				/// <field name="series" type="MindFusion.Charting.Controls.Series">Gets or sets the series whose data is drawn in this chart.</field>
				/// <field name="startAngle" type="MindFusion.Charting.Controls.Number">Gets or sets the angle where first data item of series should be drawn.</field>
			},
			RadarChart: function (element, seriesRenderer) {
				/// <summary>A control used to draw radar charts.</summary>
				/// <param name="element" type="HTMLCanvasElement">Type: HTMLCanvasElement&#10;The canvas DOM element to associate this chart with.</param>
				/// <param name="seriesRenderer" type="RadarRenderer" optional="true">Optional. Type: RadarRenderer&#10;A RadarRenderer used to draw chart's data series.</param>
				/// <field name="alignToAxis" type="MindFusion.Charting.Controls.Boolean">Gets or sets whether pie-radar sectors should be aligned to axes in the radar grid or centered around them.</field>
				/// <field name="allowRotate" type="MindFusion.Charting.Controls.Boolean">Gets or sets a value indicating whether users are allowed to rotate this chart.</field>
				/// <field name="areaOpacity" type="MindFusion.Charting.Controls.Number">Gets or sets the opacity of radar polygons.</field>
				/// <field name="axes" type="MindFusion.Charting.Collections.ObservableCollection<Axis>">Gets the list of Axis objects representing ranges of variables represented in the radar chart.</field>
				/// <field name="chartPadding" type="MindFusion.Charting.Controls.Number">Gets or set padding space between the plot's border and series graphics.</field>
				/// <field name="defaultAxis" type="MindFusion.Charting.Axis">Gets a default Axis object used when data item index does not have corresponding element in the Axes collection.</field>
				/// <field name="gridColor1" type="MindFusion.Charting.Drawing.Color">Gets or sets the main color of the grid.</field>
				/// <field name="gridColor2" type="MindFusion.Charting.Drawing.Color">Gets or sets the alternating color of the grid.</field>
				/// <field name="gridDivisions" type="MindFusion.Charting.Controls.Number">Gets or sets the number of grid divisions.</field>
				/// <field name="gridType" type="MindFusion.Charting.Controls.RadarGridType">Gets or sets the type of grid drawn in this chart.</field>
				/// <field name="radarType" type="MindFusion.Charting.Controls.RadarType">Gets or sets the type of radar graphics drawn in this chart.</field>
				/// <field name="series" type="MindFusion.Charting.Collections.ObservableCollection<Series>">Gets or sets the list of series whose data is drawn in this chart.</field>
				/// <field name="showCoordinates" type="MindFusion.Charting.Controls.Boolean">Gets or sets a value indicating whether the chart should show axis coordinates.</field>
				/// <field name="showScatter" type="MindFusion.Charting.Controls.Boolean">Gets or sets a value indicating whether the chart should render scatter shapes.</field>
				/// <field name="startAngle" type="MindFusion.Charting.Controls.Number">Gets or sets the angle where first data item of series should be drawn.</field>
				/// <field name="uniformScale" type="MindFusion.Charting.Controls.Boolean">Gets or sets a value indicating whether all axes should display same data range.</field>
			},
			ScatterChart: function (element, seriesRenderer) {
				/// <summary>A control used to draw scatter charts.</summary>
				/// <param name="element" type="HTMLCanvasElement">Type: HTMLCanvasElement&#10;The canvas DOM element to associate this chart with.</param>
				/// <param name="seriesRenderer" type="ScatterRenderer" optional="true">Optional. Type: ScatterRenderer&#10;A ScatterRenderer used to draw chart's data series.</param>
				/// <field name="series" type="MindFusion.Charting.Collections.ObservableCollection<Series>">BiaxialChart.Series override. Gets or sets the list of series whose data is drawn in this chart.</field>
				/// <field name="shape" type="MindFusion.Charting.Controls.ScatterType">Gets or sets the type of scatter shapes.</field>
				/// <field name="shapeSize" type="MindFusion.Charting.Controls.Number">Gets or sets the size of scatter shapes.</field>
			},
			__namespace: true
		},
		Gauges: {
			GaugeRenderer: function () {
				/// <summary>A Component that renders gauges in the dashboard.</summary>
				/// <field name="background" type="MindFusion.Charting.Drawing.Brush">Gets or sets a Brush used to draw the background of this gauge.</field>
				/// <field name="fontName" type="String">Gets or sets the name of font used to draw text in this gauge.</field>
				/// <field name="fontSize" type="MindFusion.Charting.Gauges.Number">Gets or sets the size of font used to draw text in this gauge.</field>
				/// <field name="fontStyle" type="MindFusion.Charting.Drawing.FontStyle">Gets or sets the style of font used to draw text in this gauge.</field>
				/// <field name="pointerBackground" type="MindFusion.Charting.Drawing.Brush">Gets or sets a Brush used to draw the background of gauge pointers.</field>
				/// <field name="pointerStroke" type="MindFusion.Charting.Drawing.Brush">Gets or sets a Brush used to stroke gauge pointers.</field>
				/// <field name="pointerStrokeThickness" type="MindFusion.Charting.Gauges.Number">Gets or sets the thickness of the Pen used to stroke the gauge pointers.</field>
				/// <field name="scaleBackground" type="MindFusion.Charting.Drawing.Brush">Gets or sets a Brush used to draw the background of the gauge scales.</field>
				/// <field name="scaleStroke" type="MindFusion.Charting.Drawing.Brush">Gets or sets a Brush used to stroke the gauge scales.</field>
				/// <field name="scaleStrokeThickness" type="MindFusion.Charting.Gauges.Number">Gets or sets the thickness of the Pen used to stroke the gauge scales.</field>
				/// <field name="stroke" type="MindFusion.Charting.Drawing.Brush">Gets or sets a Brush used to stroke this gauge.</field>
				/// <field name="strokeThickness" type="MindFusion.Charting.Gauges.Number">Gets or sets the thickness of the Pen used to stroke this gauge.</field>
				/// <field name="tickBackground" type="MindFusion.Charting.Drawing.Brush">Gets or sets a Brush used to draw the background of gauge ticks.</field>
				/// <field name="tickStroke" type="MindFusion.Charting.Drawing.Brush">Gets or sets a Brush used to stroke gauge ticks.</field>
				/// <field name="tickStrokeThickness" type="MindFusion.Charting.Gauges.Number">Gets or sets the thickness of the Pen used to stroke the gauge ticks.</field>
			},
			LinearGaugeController: function (r, context) {
				/// <summary>Controls user interaction with linear gauges.</summary>
				/// <param name="r" type="LinearGaugeRenderer">Type: LinearGaugeRenderer&#10;A LinearGaugeRenderer instance controlled by this object.</param>
				/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
				/// <field name="component" type="MindFusion.Charting.Gauges.Component">Implements ComponentController.Component. Gets the component modified by this controller.</field>
			},
			LinearGaugeRenderer: function (element) {
				/// <summary>A Component that renders linear gauges in the dashboard.</summary>
				/// <param name="element" type="void">Type: void&#10;</param>
				/// <field name="gauge" type="MindFusion.Charting.Gauges.object">Gets or sets the LinearGauge represented by this renderer.</field>
			},
			OvalGaugeController: function (r, context) {
				/// <summary>Controls user interaction with oval gauges.</summary>
				/// <param name="r" type="OvalGaugeRenderer">Type: OvalGaugeRenderer&#10;An OvalGaugeRenderer instance controlled by this object.</param>
				/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
				/// <field name="component" type="MindFusion.Charting.Gauges.Component">Implements ComponentController.Component. Gets the component modified by this controller.</field>
			},
			OvalGaugeRenderer: function (element) {
				/// <summary>A Component that renders oval gauges in the dashboard.</summary>
				/// <param name="element" type="void">Type: void&#10;</param>
				/// <field name="gauge" type="MindFusion.Charting.Gauges.object">Gets or sets the OvalGauge represented by this renderer.</field>
			},
			__namespace: true
		},
		ThreeD: {
			Label3D: function () {
				/// <summary>Represents a text label in 3D scene.</summary>
				/// <field name="bottomLeft" type="MindFusion.Charting.ThreeD.Point3D">Gets or sets the bottom-left corner of label's layout rectangle.</field>
				/// <field name="font" type="MindFusion.Drawing.Font">Gets or sets the label's font.</field>
				/// <field name="rotationAngle" type="MindFusion.Charting.ThreeD.Number">Gets or sets the label's rotation angle.</field>
				/// <field name="text" type="String">Gets or sets the label's text.</field>
				/// <field name="topRight" type="MindFusion.Charting.ThreeD.Point3D">Gets or sets the top-right corner of label's layout rectangle.</field>
			},
			LabelProjection: function (label, projTL, projBR) {
				/// <summary>Represents the projection of a Label3D on the projection plane.</summary>
				/// <param name="label" type="Label3D">Type: Label3D&#10;The projected Label3D.</param>
				/// <param name="projTL" type="Point3D">Type: Point3D&#10;Projection of top-left corner of Label3D's layout rectangle.</param>
				/// <param name="projBR" type="Point3D">Type: Point3D&#10;Projection of bottom-right corner of Label3D's layout rectangle.</param>
				/// <field name="label" type="MindFusion.Charting.ThreeD.Label3D">Gets or sets the projected Label3D.</field>
				/// <field name="projectionBottomRight" type="MindFusion.Charting.ThreeD.Point3D">Gets or sets the projection of bottom-right corner of label's layout rectangle.</field>
				/// <field name="projectionTopLeft" type="MindFusion.Charting.ThreeD.Point3D">Gets or sets the projection of top-left corner of label's layout rectangle.</field>
				/// <field name="zSort" type="MindFusion.Charting.ThreeD.Number">Gets or sets a value by which projections are sorted in depth buffer.</field>
			},
			Matrix3D: function (width, height) {
				/// <summary>Represents a a mathematical matrix, specialized in 3D transformations.</summary>
				/// <param name="width" type="number">Type: number&#10;The width of the matrix.</param>
				/// <param name="height" type="number">Type: number&#10;The height of the matrix.</param>
			},
			Mesh3D: function (facePoints, brush, normals) {
				/// <summary>Represents a 3D mesh.</summary>
				/// <param name="facePoints" type="MindFusion.Charting.Collections.List<List<Point3D>>">Type: List<List<Point3D>>&#10;Lists of points defining mesh faces.</param>
				/// <param name="brush" type="MindFusion.Charting.Drawing.Brush">Type: Brush&#10;The Brush used to paint this mesh.</param>
				/// <param name="normals" type="Array<Array<Vector3D>>" optional="true">Optional. Type: Array<Array<Vector3D>>&#10;An array with the normal vectors in each vertex.</param>
				/// <field name="faces" type="MindFusion.Charting.Collections.List<Polygon3D>">Gets or sets the mesh faces.</field>
			},
			Model3D: function (brush) {
				/// <summary>Represents a three-dimensional model.</summary>
				/// <param name="brush" type="MindFusion.Charting.Drawing.Brush" optional="true">Optional. Type: Brush&#10;The Brush used to fill this model's projection.</param>
			},
			Polygon3D: function (points, brush, normals) {
				/// <summary>Represents a polygon in 3D space.</summary>
				/// <param name="points" type="IEnumerable<Point3D>" optional="true">Optional. Type: IEnumerable<Point3D>&#10;A list of 3D points.</param>
				/// <param name="brush" type="MindFusion.Charting.Drawing.Brush" optional="true">Optional. Type: Brush&#10;A Brush used to fill the polygon.</param>
				/// <param name="normals" type="Array<Vector3D>" optional="true">Optional. Type: Array<Vector3D>&#10;An array with the normal vectors in each vertex.</param>
				/// <field name="points" type="MindFusion.Charting.Collections.List<Point3D>">Gets or sets the polygon's vertices.</field>
				/// <field name="zSort" type="MindFusion.Charting.ThreeD.Number">Gets or sets a value by which projections are sorted in depth buffer.</field>
			},
			Scene3D: function () {
				/// <summary>Represents a 3D scene.</summary>
				/// <field name="cameraOrientation" type="MindFusion.Charting.ThreeD.Point3D">Gets or sets the camera orientation.</field>
				/// <field name="cameraPosition" type="MindFusion.Charting.ThreeD.Point3D">Gets or sets the camera position.</field>
				/// <field name="focalLength" type="MindFusion.Charting.ThreeD.Number">Gets or sets the camera focal length.</field>
				/// <field name="models" type="MindFusion.Charting.Collections.List<Model3D>">Gets or sets a list of models in this scene.</field>
				/// <field name="projections" type="MindFusion.Charting.Collections.List<Projection>">Gets or sets a list of projections in this scene.</field>
				/// <field name="viewportCenter" type="MindFusion.Drawing.Point">Gets or sets the viewport center.</field>
			},
			Vector3D: function () {
				/// <summary>Represents a three-dimensional vector.</summary>
				/// <field name="x" type="MindFusion.Charting.ThreeD.Number">Gets or sets the X component of this vector.</field>
				/// <field name="y" type="MindFusion.Charting.ThreeD.Number">Gets or sets the Y component of this vector.</field>
				/// <field name="z" type="MindFusion.Charting.ThreeD.Number">Gets or sets the Z component of this vector.</field>
			},
			__namespace: true
		},
		AnnotationRenderer: function (series) {
			/// <summary>A SeriesRenderer that draws annotations in its containing plot.</summary>
			/// <param name="series" type="MindFusion.Charting.Collections.ObservableCollection<Series>">Type: ObservableCollection<Series>&#10;A list of Series that should be rendered as annotations.</param>
		},
		AreaRenderer: function (series) {
			/// <summary>A SeriesRenderer that draws each series as an area in its containing plot.</summary>
			/// <param name="series" type="MindFusion.Charting.Collections.ObservableCollection<Series>">Type: ObservableCollection<Series>&#10;A list of Series that should be rendered as areas.</param>
			/// <field name="areaOpacity" type="MindFusion.Charting.Number">Gets or sets the opacity of area polygons.</field>
		},
		AreaStackRenderer: function (series) {
			/// <summary>A SeriesRenderer that draws stacked areas in its containing plot.</summary>
			/// <param name="series" type="MindFusion.Charting.Collections.ObservableCollection<Series>">Type: ObservableCollection<Series>&#10;A list of Series that should be rendered as stacked areas.</param>
		},
		Axis: function () {
			/// <summary>Represents an Axis range.</summary>
			/// <field name="interval" type="MindFusion.Charting.Number">Gets or sets the size of axis intervals.</field>
			/// <field name="maxValue" type="MindFusion.Charting.Number">Gets or sets the largest value displayed on this axis.</field>
			/// <field name="minValue" type="MindFusion.Charting.Number">Gets or sets the smallest value displayed on this axis.</field>
			/// <field name="numberFormat" type="String">Gets or sets the number format of coordinate labels.</field>
			/// <field name="origin" type="MindFusion.Charting.Number">Gets or sets the origin of the Axis.</field>
			/// <field name="propertyChanged" type="MindFusion.Charting.PropertyChangedEventDispatcher">Occurs when a property value changes.</field>
			/// <field name="title" type="String">Gets or sets the axis title.</field>
		},
		AxisInfo: function () {
			/// <summary>Stores information about Axis ranges processed by this controller.</summary>
			/// <field name="origin" type="MindFusion.Charting.Number">The axis origin.</field>
			/// <field name="range" type="MindFusion.Charting.Number">The axis range.</field>
			/// <field name="resolution" type="MindFusion.Charting.Number">The axis resolution.</field>
		},
		AxisRenderer: function (axis) {
			/// <summary>A base class for components that render Axis ranges.</summary>
			/// <param name="axis" type="MindFusion.Charting.Axis">Type: Axis&#10;The Axis that will be drawn by this object.</param>
			/// <field name="axis" type="MindFusion.Charting.Axis">Gets or sets the Axis that will be drawn by this object.</field>
			/// <field name="axisStroke" type="MindFusion.Charting.Drawing.Brush">Gets or sets the Brush that should be used to draw axis lines.</field>
			/// <field name="axisStrokeDashStyle" type="MindFusion.Charting.Drawing.DashStyle">Gets or sets the dash style axis lines should be stroked with.</field>
			/// <field name="axisStrokeThickness" type="MindFusion.Charting.Number">Gets or sets the thickness axis lines should be stroked with.</field>
			/// <field name="labelBrush" type="MindFusion.Charting.Drawing.Brush">Gets or sets the Brush that should be used to draw axis labels.</field>
			/// <field name="labelFontName" type="String">Gets or sets the name of font that should be used to draw axis labels.</field>
			/// <field name="labelFontSize" type="MindFusion.Charting.Number">Gets or sets the size of font that should be used to draw axis labels.</field>
			/// <field name="labelFontStyle" type="MindFusion.Charting.Drawing.FontStyle">Gets or sets the style of font that should be used to draw axis labels.</field>
			/// <field name="labelPadding" type="MindFusion.Charting.Number">Gets or sets the padding space between the axis line and coordinate labels.</field>
			/// <field name="labelRotationAngle" type="MindFusion.Charting.Number">Gets or sets the rotation angle of the labels.</field>
			/// <field name="labelsSource" type="MindFusion.Charting.SeriesContainer">Gets or sets the object whose Series labels should be rendered along this axis.</field>
			/// <field name="pinLabels" type="MindFusion.Charting.Boolean">Gets or sets a value indicating whether coordinate labels should be pinned in place or scroll together with the plot when users pan it.</field>
			/// <field name="showCoordinates" type="MindFusion.Charting.Boolean">Gets or sets a value indicating whether this AxisRenderer should draw axis coordinates.</field>
			/// <field name="showSeriesLabels" type="MindFusion.Charting.Boolean">Gets or sets a value indicating whether this AxisRenderer should draw data labels.</field>
			/// <field name="showTicks" type="MindFusion.Charting.Boolean">Gets or sets a value indicating whether this AxisRenderer should draw axis ticks.</field>
			/// <field name="titleBrush" type="MindFusion.Charting.Drawing.Brush">Gets or sets the Brush that should be used to draw the axis Title.</field>
			/// <field name="titleFontName" type="String">Gets or sets the name of font that should be used to draw the axis Title.</field>
			/// <field name="titleFontSize" type="MindFusion.Charting.Number">Gets or sets the size of font that should be used to draw the axis Title.</field>
			/// <field name="titleFontStyle" type="MindFusion.Charting.Drawing.FontStyle">Gets or sets the style of font that should be used to draw the axis Title.</field>
		},
		BarOverlayRenderer: function (series) {
			/// <summary>A SeriesRenderer that draws overlaying bars in its containing plot.</summary>
			/// <param name="series" type="MindFusion.Charting.Collections.ObservableCollection<Series>">Type: ObservableCollection<Series>&#10;A list of Series that should be rendered as overlaying bars.</param>
			/// <field name="barSpacingRatio" type="MindFusion.Charting.Number">Gets or sets the ratio of empty space between adjacent bar groups to space occupied by bars.</field>
			/// <field name="horizontalBars" type="MindFusion.Charting.Boolean">Gets or sets a value identifying whether bars should be horizontal.</field>
		},
		BarOverlayRenderer3D: function (series) {
			/// <summary>A SeriesRenderer that draws a row of 3D bars for each series.</summary>
			/// <param name="series" type="MindFusion.Charting.Collections.ObservableCollection<Series>">Type: ObservableCollection<Series>&#10;A list of Series that should be rendered as rows of bars.</param>
		},
		BarRenderer: function (series) {
			/// <summary>A SeriesRenderer that draws bars in its containing plot.</summary>
			/// <param name="series" type="MindFusion.Charting.Collections.ObservableCollection<Series>">Type: ObservableCollection<Series>&#10;A list of Series that should be rendered as bars.</param>
			/// <field name="barSpacingRatio" type="MindFusion.Charting.Number">Gets or sets the ratio of empty space between adjacent bar groups to space occupied by bars.</field>
			/// <field name="horizontalBars" type="MindFusion.Charting.Boolean">Gets or sets a value identifying whether bars should be horizontal.</field>
			/// <field name="innerLabelRotation" type="MindFusion.Charting.Number">Gets the rotation angle of inner labels. If not specified, labels are rotated at predefiend angles depending on bars' orientation and layout.</field>
			/// <field name="outerLabelRotation" type="MindFusion.Charting.Number">Gets the rotation angle of outer labels. If not specified, labels are rotated at predefiend angles depending on bars' orientation and layout.</field>
			/// <field name="sameIndexSpacingRatio" type="MindFusion.Charting.Number">Gets or sets the ratio of empty space to occupied space in bar groups drawn for data items as same index in each series.</field>
			/// <field name="stackOuterLabels" type="MindFusion.Charting.Boolean">Gets whether outer labels are displayed stacked on top of stacked bars, instead of showing them on the bar sides.</field>
		},
		BarRenderer3D: function (series) {
			/// <summary>A SeriesRenderer that draws 3D bars in its containing plot.</summary>
			/// <param name="series" type="MindFusion.Charting.Collections.ObservableCollection<Series>">Type: ObservableCollection<Series>&#10;A list of Series that should be rendered as 3D bars.</param>
		},
		BarSeries: function () {
			/// <summary>Represents one-dimensional series defined by e list of data values and several lists of labels.</summary>
			/// <field name="innerLabels" type="MindFusion.Charting.Collections.List<String>">Gets or sets the inner labels.</field>
			/// <field name="supportedLabels" type="MindFusion.Charting.LabelKinds">SimpleSeries.SupportedLabels override. Returns a combination of InnerLabel, OuterLabel and XAxisLabel.</field>
			/// <field name="topLabels" type="MindFusion.Charting.Collections.List<String>">Gets or sets the top labels.</field>
			/// <field name="xAxisLabels" type="MindFusion.Charting.Collections.List<String>">Gets or sets the X axis labels.</field>
		},
		BarStackRenderer: function (series) {
			/// <summary>A SeriesRenderer that draws stacked bars in its containing plot.</summary>
			/// <param name="series" type="MindFusion.Charting.Collections.ObservableCollection<Series>">Type: ObservableCollection<Series>&#10;A list of Series that should be rendered as stacked bars.</param>
			/// <field name="barSpacingRatio" type="MindFusion.Charting.Number">Gets or sets the ratio of empty space between adjacent bar groups to space occupied by bars.</field>
			/// <field name="horizontalBars" type="MindFusion.Charting.Boolean">Gets or sets a value identifying whether bars should be horizontal.</field>
		},
		BarStackRenderer3D: function (series) {
			/// <summary>A SeriesRenderer that draws stacked 3D bars in its containing plot.</summary>
			/// <param name="series" type="MindFusion.Charting.Collections.ObservableCollection<Series>">Type: ObservableCollection<Series>&#10;A list of Series that should be rendered as stacked bars.</param>
		},
		BubbleRenderer: function (series) {
			/// <summary>A SeriesRenderer that draws bubbles representing data items in its containing plot.</summary>
			/// <param name="series" type="MindFusion.Charting.Collections.ObservableCollection<Series>">Type: ObservableCollection<Series>&#10;A list of Series that should be rendered as bubbles.</param>
			/// <field name="labelAlignment" type="MindFusion.Charting.BubbleLabelAlignment">Gets or sets the label alignment.</field>
		},
		CandlestickRenderer: function (series) {
			/// <summary>A SeriesRenderer that draws candlesticks in its containing plot.</summary>
			/// <param name="series" type="MindFusion.Charting.Collections.ObservableCollection<Series>">Type: ObservableCollection<Series>&#10;A list of Series that should be rendered by this object.</param>
			/// <field name="candlestickWidth" type="MindFusion.Charting.Number">Gets or sets the width of the candlesticks.</field>
			/// <field name="closeDimension" type="MindFusion.Charting.Number">Gets or sets the index of the dimension, containing close values.</field>
			/// <field name="highDimension" type="MindFusion.Charting.Number">Gets or sets the index of the dimension, containing high values.</field>
			/// <field name="lowDimension" type="MindFusion.Charting.Number">Gets or sets the index of the dimension, containing low values.</field>
			/// <field name="openDimension" type="MindFusion.Charting.Number">Gets or sets the index of the dimension, containing open values.</field>
		},
		CandlestickSeriesStyle: function (risingBrush, fallingBrush, stroke, strokeThickness, strokeDashStyle, renderer) {
			/// <summary>Defines appearance attributes for candlestick charts.</summary>
			/// <param name="risingBrush" type="void">Type: void&#10;</param>
			/// <param name="fallingBrush" type="void">Type: void&#10;</param>
			/// <param name="stroke" type="void">Type: void&#10;</param>
			/// <param name="strokeThickness" type="void">Type: void&#10;</param>
			/// <param name="strokeDashStyle" type="void">Type: void&#10;</param>
			/// <param name="renderer" type="void">Type: void&#10;</param>
			/// <field name="fallingBrush" type="MindFusion.Charting.Drawing.Brush">Gets or sets a Brush used to fill candlesticks, which open value is greater than its close value.</field>
			/// <field name="risingBrush" type="MindFusion.Charting.Drawing.Brush">Gets or sets a Brush used to fill candlesticks, which open value is smaller or equal to its close value.</field>
		},
		CurveAreaRenderer: function (series) {
			/// <summary>A SeriesRenderer that draws each series as an area with curved boundaries in its containing plot.</summary>
			/// <param name="series" type="MindFusion.Charting.Collections.ObservableCollection<Series>">Type: ObservableCollection<Series>&#10;A list of Series that should be rendered as areas.</param>
		},
		CurveAreaStackRenderer: function (series) {
			/// <summary>A SeriesRenderer that draws stacked areas in its containing plot.</summary>
			/// <param name="series" type="MindFusion.Charting.Collections.ObservableCollection<Series>">Type: ObservableCollection<Series>&#10;A list of Series that should be rendered as stacked areas.</param>
		},
		CurveRenderer: function (series) {
			/// <summary>A SeriesRenderer that draws series as a cardinal spline.</summary>
			/// <param name="series" type="MindFusion.Charting.Collections.ObservableCollection<Series>">Type: ObservableCollection<Series>&#10;A list of Series that should be rendered as a cardinal spline.</param>
		},
		DataBoundSeries: function () {
			/// <summary>Represents a series whose data items are retrieved from a data source.</summary>
			/// <field name="dataChanged" type="MindFusion.Charting.EventDispatcher<EventArgs>">Raised when the values in this series change.</field>
			/// <field name="dataSource" type="MindFusion.Charting.any">Gets or sets the data source this series is bound to.</field>
			/// <field name="dimensions" type="MindFusion.Charting.Number">Implements Series.Dimensions. Returns the number of X/Y/ZDataField properties set.</field>
			/// <field name="innerLabelsDataField" type="String">Gets or sets the name of inner labels data field in the data source.</field>
			/// <field name="outerLabelsDataField" type="String">Gets or sets the name of inner labels data field in the data source.</field>
			/// <field name="size" type="MindFusion.Charting.Number">Implements Series.Size. Gets the number of data items in the data source.</field>
			/// <field name="supportedLabels" type="MindFusion.Charting.LabelKinds">Implements Series.SupportedLabels. Result depends on which *LabelsDataField properties are set.</field>
			/// <field name="title" type="String">Implements Series.Title. Gets or sets the title of this series.</field>
			/// <field name="toolTipsDataField" type="String">Gets or sets the name of tooltips data field in the data source.</field>
			/// <field name="xAxisLabelsDataField" type="String">Gets or sets the name of X axis labels data field in the data source.</field>
			/// <field name="xDataField" type="String">Gets or sets the name of X data field in the data source.</field>
			/// <field name="yAxisLabelsDataField" type="String">Gets or sets the name of Y axis labels data field in the data source.</field>
			/// <field name="yDataField" type="String">Gets or sets the name of Y data field in the data source.</field>
			/// <field name="zAxisLabelsDataField" type="String">Gets or sets the name of Z axis labels data field in the data source.</field>
			/// <field name="zDataField" type="String">Gets or sets the name of Z data field in the data source.</field>
		},
		DateTimeSeries: function () {
			/// <summary>Represents a series that contains Date values as X coordinates and number values as Y coordinates.</summary>
			/// <field name="customDateTimeFormat" type="String">Gets or sets a custom format string for Date labels.</field>
			/// <field name="dataChanged" type="MindFusion.Charting.EventDispatcher<EventArgs>">Raised when the values in this series change.</field>
			/// <field name="dates" type="MindFusion.Charting.Collections.List<Date>">Gets or sets a list of Date values used as X coordinates of this series.</field>
			/// <field name="dateTimeFormat" type="String">Gets or sets a value indicating how to format Date values as labels.</field>
			/// <field name="dimensions" type="MindFusion.Charting.Number">Implements Series.Dimensions. Returns 2.</field>
			/// <field name="labelPrefix" type="String">Gets or sets a prefix added in front of formatted Date labels.</field>
			/// <field name="labelSuffix" type="String">Gets or sets a suffix appended to formatted Date labels.</field>
			/// <field name="maxDate" type="MindFusion.Charting.Date">Gets or sets the end of the time range.</field>
			/// <field name="maxValue" type="MindFusion.Charting.Number">Gets or sets the coordinate corresponding to MaxDate.</field>
			/// <field name="minDate" type="MindFusion.Charting.Date">Gets or sets the start of the time range.</field>
			/// <field name="minValue" type="MindFusion.Charting.Number">Gets or sets the coordinate corresponding to MinDate.</field>
			/// <field name="size" type="MindFusion.Charting.Number">Implements Series.Size. Returns the number of elements provided in Date list.</field>
			/// <field name="supportedLabels" type="MindFusion.Charting.LabelKinds">Implements Series.SupportedLabels. Returns LabelKinds.XAxisLabel.</field>
			/// <field name="title" type="String">Implements Series.Title. Gets or sets the title of this series.</field>
		},
		FunctionSeries: function (expression, size, minX, maxX) {
			/// <summary>Represents a series that calculates its values from provided formula.</summary>
			/// <param name="expression" type="function">Type: function&#10;function. The function used to evaluate the series at a specific X.</param>
			/// <param name="size" type="number">Type: number&#10;number. An integer value specifying the number of values to calculate.</param>
			/// <param name="minX" type="number">Type: number&#10;number. A double-precision number specifying the minimum value of function range.</param>
			/// <param name="maxX" type="number">Type: number&#10;number. A double-precision number specifying the maximum value of function range.</param>
			/// <field name="dimensions" type="Number">Gets the number of dimensions.</field>
			/// <field name="expression" type="String">Gets the function used to evaluate the series at a specific X.</field>
			/// <field name="size" type="Number">Gets the number of elements in Data list.</field>
			/// <field name="supportedLabels" type="String">Gets the type of supported labels.</field>
			/// <field name="title" type="String">Gets or sets the title of this series.</field>
			/// <field name="dataChanged" type="EventDispatcher.<EventArgs>">Raised when the values in this series change. Syntax: dataChanged.addEventListener( function(sender, args){} );</field>
		},
		FunnelRenderer: function (series, dimension) {
			/// <summary>Implements a SeriesRenderer used to draw funnel charts. Funnel charts represent the stages of a process and show relative values or measurements associated with each stage.</summary>
			/// <param name="series" type="Series">Type: Series&#10;The Series that should be rendered as a funnel.</param>
			/// <param name="dimension" type="Number" optional="true">Optional. Type: Number&#10;Specifies the Series dimension index that should be used to access data.</param>
			/// <field name="dimension" type="MindFusion.Charting.Number">Gets or sets the dimension index that should be used to read data from the Series.</field>
			/// <field name="segmentSpacing" type="MindFusion.Charting.Number">Gets or sets the spacing between segments.</field>
			/// <field name="series" type="MindFusion.Charting.Series">Gets or sets the Series drawn by this FunnelRenderer.</field>
			/// <field name="stemWidth" type="MindFusion.Charting.Number">Gets or sets the width of the funnel stem.</field>
		},
		HitResult: function (renderer, index, value, series) {
			/// <summary>Represents the result of a hit-test operation.</summary>
			/// <param name="renderer" type="SeriesRenderer">Type: SeriesRenderer&#10;A SeriesRenderer whose data item has been hit.</param>
			/// <param name="index" type="Number">Type: Number&#10;An integer index of the data item.</param>
			/// <param name="value" type="Number">The item's value.</param>
			/// <param name="series" type="Series">Type: Series&#10;The Series that contains the found item.</param>
			/// <field name="index" type="MindFusion.Charting.Number">Gets or sets the data item index within its Series.</field>
			/// <field name="plot" type="MindFusion.Charting.Plot">Gets or sets the Plot that has been hit.</field>
			/// <field name="renderer" type="MindFusion.Charting.SeriesRenderer">Gets or sets the SeriesRenderer that has been hit.</field>
			/// <field name="series" type="MindFusion.Charting.Series">Gets or sets the Series that has been hit.</field>
			/// <field name="value" type="MindFusion.Charting.Number">Gets or sets the data item value.</field>
		},
		LegendController: function (renderContext) {
			/// <summary>Lets users move a legend within the boundaries of its parent Panel.</summary>
			/// <param name="renderContext" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
		},
		LegendRenderer: function () {
			/// <summary>A component that renders chart legend.</summary>
			/// <field name="allowMove" type="MindFusion.Charting.Boolean">Gets or sets a value indicating whether users are allowed to move this legend.</field>
			/// <field name="background" type="MindFusion.Charting.Drawing.Brush">Gets or sets the Brush that should be used to fill the background of this legend.</field>
			/// <field name="borderStroke" type="MindFusion.Charting.Drawing.Brush">Gets or sets the Brush that should be used to stroke the borders of this legend.</field>
			/// <field name="borderStrokeDashStyle" type="MindFusion.Charting.Drawing.DashStyle">Gets or sets the stroke dash style of legend borders.</field>
			/// <field name="borderStrokeThickness" type="MindFusion.Charting.Number">Gets or sets the stroke thickness of legend borders.</field>
			/// <field name="content" type="MindFusion.Charting.Collections.ObservableCollection<SeriesRenderer>">Gets or sets a list of SeriesRenderer objects whose Series should be displayed in this legend.</field>
			/// <field name="elementLabelKind" type="MindFusion.Charting.LabelKinds">Gets or sets the type of label to show for series elements. This property is used only when showSeriesElements is set to true.</field>
			/// <field name="maxItemsPerColumn" type="MindFusion.Charting.Number">Gets or sets the maximum number ot items per display column.</field>
			/// <field name="padding" type="MindFusion.Charting.Number">Gets or sets the padding space between content and borders of this legend.</field>
			/// <field name="showSeriesElements" type="MindFusion.Charting.Boolean">Gets or sets a value, indicatating whether this legend will display individual series element labels instead of the series titles.</field>
			/// <field name="showTitle" type="MindFusion.Charting.Boolean">Gets or sets a value indicating whether to display the legend title.</field>
			/// <field name="spacing" type="MindFusion.Charting.Number">Gets or sets the distance between adjacent entries in the legend.</field>
			/// <field name="title" type="String">Gets or sets the legend's title.</field>
			/// <field name="titleBrush" type="MindFusion.Charting.Drawing.Brush">Gets or sets the Brush that should be used to draw the legend's Title.</field>
			/// <field name="titleFontName" type="String">Gets or sets the name of font that should be used to draw the legend's Title.</field>
			/// <field name="titleFontSize" type="MindFusion.Charting.Number">Gets or sets the size of font that should be used to draw the legend's Title.</field>
			/// <field name="titleFontStyle" type="MindFusion.Charting.Drawing.FontStyle">Gets or sets the style of font that should be used to draw the legend's Title.</field>
		},
		LineRenderer: function (series) {
			/// <summary>A SeriesRenderer that draws series as polylines.</summary>
			/// <param name="series" type="MindFusion.Charting.Collections.ObservableCollection<Series>">Type: ObservableCollection<Series>&#10;A list of Series that should be rendered as polylines.</param>
		},
		Margins: function (left, top, right, bottom) {
			/// <summary>Describes rectangular margins.</summary>
			/// <param name="left" type="void">Type: void&#10;</param>
			/// <param name="top" type="void">Type: void&#10;</param>
			/// <param name="right" type="void">Type: void&#10;</param>
			/// <param name="bottom" type="void">Type: void&#10;</param>
			/// <field name="bottom" type="MindFusion.Charting.Number">Gets or sets the width of the bottom side of the frame.</field>
			/// <field name="height" type="MindFusion.Charting.Number">Returns the sum of Top and Bottom margins.</field>
			/// <field name="left" type="MindFusion.Charting.Number">Gets or sets the width of the left side of the frame.</field>
			/// <field name="right" type="MindFusion.Charting.Number">Gets or sets the width of the right side of the frame.</field>
			/// <field name="top" type="MindFusion.Charting.Number">Gets or sets the width of the top side of the frame.</field>
			/// <field name="width" type="MindFusion.Charting.Number">Returns the sum of Left and Right margins.</field>
		},
		MixedSeriesStyle: function (fill, stroke, strokeThickness, strokeDashStyle) {
			/// <summary>Implements SeriesStyle using mixed per-element and uniform values for attributes.</summary>
			/// <param name="fill" type="MindFusion.Charting.Drawing.Brush" optional="true">Optional. Type: Brush&#10;A Brush used to fill all series elements.</param>
			/// <param name="stroke" type="MindFusion.Charting.Drawing.Brush" optional="true">Optional. Type: Brush&#10;A Brush used to stroke all series elements.</param>
			/// <param name="strokeThickness" type="Number" optional="true">Optional. Type: Number&#10;Uniform thickness of series elements' strokes.</param>
			/// <param name="strokeDashStyle" type="MindFusion.Charting.Drawing.DashStyle" optional="true">Optional. Type: DashStyle&#10;Uniform dash style of series elements' strokes.</param>
			/// <field name="commonFills" type="MindFusion.Charting.Collections.List<Brush>">Gets or sets a list of brushes, each Brush used to fill all elements of a series.</field>
			/// <field name="commonStrokeDashStyles" type="MindFusion.Charting.Drawing.DashStyle">Gets or sets a list of dash styles, each style applied to all elements of a series.</field>
			/// <field name="commonStrokes" type="MindFusion.Charting.Collections.List<Brush>">Gets or sets a list of brushes, each Brush used to stroke all elements of a series.</field>
			/// <field name="commonStrokeThicknesses" type="MindFusion.Charting.Number">Gets or sets a list of stroke thicknesses, each thickness applied to all elements of a series.</field>
			/// <field name="fills" type="MindFusion.Charting.Collections.List<List<Brush>>">Gets or sets a list of Brush lists, each list used to draw a different series, and each Brush used to fill individual elements of a series.</field>
			/// <field name="strokeDashStyles" type="MindFusion.Charting.Collections.List<List<DashStyle>>">Gets or sets a list of DashStyle lists, each list used to stroke a different series, and each DashStyle value specifying style of individual elements of a series.</field>
			/// <field name="strokes" type="MindFusion.Charting.Collections.List<List<Brush>>">Gets or sets a list of Brush lists, each list used to stroke a different series, and each Brush used to stroke individual elements of a series.</field>
			/// <field name="strokeThicknesses" type="MindFusion.Charting.Collections.List<List<number>>">Gets or sets a list of number lists, each list used to stroke a different series, and each number value specifying thickness of individual elements of a series.</field>
			/// <field name="uniformFill" type="MindFusion.Charting.Drawing.Brush">Gets or sets a Brush used to fill all elements of all series uniformly.</field>
			/// <field name="uniformStroke" type="MindFusion.Charting.Drawing.Brush">Gets or sets a Brush used to stroke all elements of all series uniformly.</field>
			/// <field name="uniformStrokeDashStyle" type="MindFusion.Charting.Drawing.DashStyle">Gets or sets uniform stroke dash style for all elements of all series.</field>
			/// <field name="uniformStrokeThickness" type="MindFusion.Charting.Number">Gets or sets uniform stroke thickness for all elements of all series.</field>
		},
		Pair: function (first, second) {
			/// <summary>Contains two values.</summary>
			/// <param name="first" type="void">Type: void&#10;The first value.</param>
			/// <param name="second" type="void">Type: void&#10;The second value.</param>
			/// <field name="first" type="MindFusion.Charting.T1">Gets or sets the first value.</field>
			/// <field name="second" type="MindFusion.Charting.T1">Gets or sets the second value.</field>
		},
		PanController: function (renderContext, vertical) {
			/// <summary>Represents a controller that pans its plot's data range.</summary>
			/// <param name="renderContext" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
			/// <param name="vertical" type="Boolean">Type: Boolean&#10;true to implement interaction along the Y axis, or false for the X axis.</param>
			/// <field name="enableAnimation" type="MindFusion.Charting.Boolean">Gets or sets whether to enable pan inertia.</field>
		},
		PanControllerAnimation: function () {
			/// <summary>Represents a controller that pans its plot's data range.</summary>
		},
		PerElementSeriesStyle: function (fills, strokes, strokeThicknesses, strokeDashStyles) {
			/// <summary>Implements SeriesStyle using different attributes for each data item.</summary>
			/// <param name="fills" type="MindFusion.Charting.Collections.List<List<Brush>>" optional="true">Optional. Type: List<List<Brush>>&#10;A list of Brush lists, each list used to draw a different series,and each Brush used to fill individual elements of a series.</param>
			/// <param name="strokes" type="MindFusion.Charting.Collections.List<List<Brush>>" optional="true">Optional. Type: List<List<Brush>>&#10;A list of Brush lists, each list used to stroke a different series,and each Brush used to stroke individual elements of a series.</param>
			/// <param name="strokeThicknesses" type="MindFusion.Charting.Collections.List<List<Number>>" optional="true">Optional. Type: List<List<Number>>&#10;A list of number lists, each list used to stroke a different series,and each number value specifying thickness of individual elements of a series.</param>
			/// <param name="strokeDashStyles" type="MindFusion.Charting.Collections.List<List<DashStyle>>" optional="true">Optional. Type: List<List<DashStyle>>&#10;A list of DashStyle lists, each list used to stroke a different series,and each DashStyle value specifying style of individual elements of a series.</param>
			/// <field name="fills" type="MindFusion.Charting.Collections.List<List<Brush>>">Gets or sets a list of Brush lists, each list used to draw a different series, and each Brush used to fill individual elements of a series.</field>
			/// <field name="strokeDashStyles" type="MindFusion.Charting.Collections.List<List<DashStyle>>">Gets or sets a list of DashStyle lists, each list used to stroke a different series, and each DashStyle value specifying style of individual elements of a series.</field>
			/// <field name="strokes" type="MindFusion.Charting.Collections.List<List<Brush>>">Gets or sets a list of Brush lists, each list used to stroke a different series, and each Brush used to stroke individual elements of a series.</field>
			/// <field name="strokeThicknesses" type="MindFusion.Charting.Collections.List<List<number>>">Gets or sets a list of number lists, each list used to stroke a different series, and each number value specifying thickness of individual elements of a series.</field>
		},
		PerSeriesStyle: function (fills, strokes, strokeThicknesses, strokeDashStyles) {
			/// <summary>Implements SeriesStyle using a different set of attributes for each series,where all elements in a single series have common appearance.</summary>
			/// <param name="fills" type="MindFusion.Charting.Collections.List<Brush>" optional="true">Optional. Type: List<Brush>&#10;A list of Brushes, each Brush used to fill all elements of a series.</param>
			/// <param name="strokes" type="MindFusion.Charting.Collections.List<Brush>" optional="true">Optional. Type: List<Brush>&#10;A list of Brushes, each Brush used to stroke all elements of a series.</param>
			/// <param name="strokeThicknesses" type="MindFusion.Charting.Collections.List<Number>" optional="true">Optional. Type: List<Number>&#10;A list of stroke thicknesses, each thickness applied to all elements of a series.</param>
			/// <param name="strokeDashStyles" type="MindFusion.Charting.Collections.List<DashStyle>" optional="true">Optional. Type: List<DashStyle>&#10;A list of dash styles, each style applied to all elements of a series.</param>
			/// <field name="fills" type="MindFusion.Charting.Collections.List<Brush>">Gets or sets a list of Brushes, each Brush used to fill all elements of a series.</field>
			/// <field name="strokeDashStyles" type="MindFusion.Charting.Collections.List<DashStyle>">Gets or sets a list of dash styles, each style applied to all elements of a series.</field>
			/// <field name="strokes" type="MindFusion.Charting.Collections.List<Brush>">Gets or sets a list of Brushes, each Brush used to stroke all elements of a series.</field>
			/// <field name="strokeThicknesses" type="MindFusion.Charting.Collections.List<Number>">Gets or sets a list of stroke thicknesses, each thickness applied to all elements of a series.</field>
		},
		PieRadarRenderer: function (series) {
			/// <summary>A SeriesRenderer that draws pie-radars, where data items are represented circular sectors of equal central angles, and the sector corresponding to a data item has radius proportional to its value.</summary>
			/// <param name="series" type="MindFusion.Charting.Collections.ObservableCollection<Series>">Type: ObservableCollection<Series>&#10;A list of Series that should be rendered by this object.</param>
			/// <field name="alignToAxis" type="MindFusion.Charting.Boolean">Gets or sets a value indicating whether sectors should be aligned to axes in the radar grid or centered around them.</field>
		},
		PieRenderer: function (series, dimension) {
			/// <summary>A SeriesRenderer that draws pies in its containing plot.</summary>
			/// <param name="series" type="Series">Type: Series&#10;The Series that should be rendered as a pie.</param>
			/// <param name="dimension" type="Number" optional="true">Optional. Type: Number&#10;Specifies the Series dimension index that should be used to access data.</param>
			/// <field name="dimension" type="MindFusion.Charting.Number">Gets or sets the dimension index that should be used to read data from the Series.</field>
			/// <field name="doughnut" type="MindFusion.Charting.Boolean">Gets or sets a value indicating whether the pie should be rendered as a doughnut.</field>
			/// <field name="series" type="MindFusion.Charting.Series">Gets or sets the Series drawn by this PieRenderer.</field>
		},
		PieSeries: function () {
			/// <summary>Represents one-dimensional series defined by e list of data values and lists of inner and outer labels, convenient for providing data to PieRenderer.</summary>
			/// <field name="detachedSlices" type="MindFusion.Charting.Collections.List<Number>">Gets or sets indices of detached slices.</field>
			/// <field name="innerLabels" type="MindFusion.Charting.Collections.List<String>">Gets or sets the inner labels.</field>
			/// <field name="outerLabels" type="MindFusion.Charting.Collections.List<String>">Gets or sets the outer labels.</field>
			/// <field name="supportedLabels" type="MindFusion.Charting.LabelKinds">Implements Series.SupportedLabels. Returns a combination of InnerLabel and OuterLabel.</field>
		},
		Plot: function () {
			/// <summary>The base class for components used to draw chart graphics.</summary>
			/// <field name="background" type="MindFusion.Charting.Drawing.Brush">Gets or sets the Brush that should be used to fill the background of this plot.</field>
			/// <field name="borderStroke" type="MindFusion.Charting.Drawing.Brush">Gets or sets the Brush that should be used to stroke the borders of this plot.</field>
			/// <field name="borderStrokeDashStyle" type="MindFusion.Charting.Drawing.DashStyle">Gets or sets the stroke dash style of plot borders.</field>
			/// <field name="borderStrokeThickness" type="MindFusion.Charting.Number">Gets or sets the stroke thickness of plot borders.</field>
			/// <field name="highlightedItem" type="MindFusion.Charting.HitResult">Gets or sets the data item that should be drawn highlighted.</field>
			/// <field name="highlightStroke" type="MindFusion.Charting.Drawing.Brush">Gets or sets the Brush used to stroke highlighted item.</field>
			/// <field name="highlightStrokeDashStyle" type="MindFusion.Charting.Drawing.DashStyle">Gets or sets the stroke dash style of highlighted item.</field>
			/// <field name="highlightStrokeThickness" type="MindFusion.Charting.Number">Gets or sets the stroke thickness of highlighted item.</field>
			/// <field name="seriesRenderers" type="MindFusion.Charting.Collections.ObservableCollection<SeriesRenderer>">Gets or sets the SeriesRenderer objects that should draw inside this plot.</field>
			/// <field name="seriesStyle" type="MindFusion.Charting.SeriesStyle">Gets or sets a SeriesStyle whose attributes should be used to draw series inside this plot, unless their own renderers have a local SeriesStyle value set for respective attribute.</field>
		},
		Plot2D: function () {
			/// <summary>A plot whose series are rendered relatively to a two-dimensional Cartesian coordinate system.</summary>
			/// <field name="allowPan" type="MindFusion.Charting.Boolean">Gets or sets a value indicating whether users are allowed to pan this plot.</field>
			/// <field name="gridColor1" type="MindFusion.Charting.Drawing.Color">Gets or sets the main color of the grid.</field>
			/// <field name="gridColor2" type="MindFusion.Charting.Drawing.Color">Gets or sets the alternating color of the grid.</field>
			/// <field name="gridType" type="MindFusion.Charting.GridType">Gets or sets the type of grid to draw in this plot.</field>
			/// <field name="isZoomed" type="MindFusion.Charting.Boolean">Gets or sets a value indicating whether the user has zoomed into this plot.</field>
			/// <field name="pinGrid" type="MindFusion.Charting.Boolean">Gets or sets a value indicating whether grid stripes should be pinned in place or scroll together with the plot when users pan it.</field>
			/// <field name="verticalScroll" type="MindFusion.Charting.Boolean">Specifies whether the plot should scroll vertically when panned.</field>
			/// <field name="xAxis" type="MindFusion.Charting.Axis">Gets or sets default Axis instance used to map X data coordinates of series rendered inside this plot to the plot's pixels.</field>
			/// <field name="yAxis" type="MindFusion.Charting.Axis">Gets or sets default Axis instance used to map Y data coordinates of series rendered inside this plot to the plot's pixels.</field>
			/// <field name="zoomChanged" type="MindFusion.Charting.EventDispatcher<EventArgs>">Raised when the user zooms into this plot's data range.</field>
		},
		Plot2DController: function (renderContext, vertical) {
			/// <summary>A base class for controllers that let users interact with Plot2D objects.</summary>
			/// <param name="renderContext" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
			/// <param name="vertical" type="Boolean">Type: Boolean&#10;true to implement interaction along the Y axis, or false for the X axis.</param>
			/// <field name="axisRanges" type="MindFusion.Charting.Dictionary<Axis, AxisInfo>">Contains information about Axis ranges processed by this controller.</field>
			/// <field name="vertical" type="MindFusion.Charting.Boolean">Gets or sets a value indicating whether interaction is done along the X or Y axis.</field>
		},
		Plot3D: function () {
			/// <summary>A plot whose series are rendered relatively to a three-dimensional Cartesian coordinate system.</summary>
			/// <field name="zAxis" type="MindFusion.Charting.Axis">Gets or sets default Axis instance used to map Z data coordinates of series rendered inside this plot to the plot's pixels.</field>
		},
		PlotController: function (renderContext) {
			/// <summary>A base class for controllers implementing user interaction with Plot components.</summary>
			/// <param name="renderContext" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
			/// <field name="component" type="MindFusion.Charting.Component">Gets the component controlled by this PlotController.</field>
		},
		Point3D: function (x, y, z) {
			/// <summary>Represents a point in 3D space.</summary>
			/// <param name="x" type="Number">Type: Number&#10;X coordinate of the point.</param>
			/// <param name="y" type="Number">Type: Number&#10;Y coordinate of the point.</param>
			/// <param name="z" type="Number">Type: Number&#10;Z coordinate of the point.</param>
			/// <field name="x" type="MindFusion.Charting.Number">Gets or sets the X coordinate of this point.</field>
			/// <field name="y" type="MindFusion.Charting.Number">Gets or sets the Y coordinate of this point.</field>
			/// <field name="z" type="MindFusion.Charting.Number">Gets or sets the Z coordinate of this point.</field>
		},
		PointSeries: function () {
			/// <summary>Represents a data series defined by a list of Point objects.</summary>
			/// <field name="dataChanged" type="MindFusion.Charting.EventDispatcher<EventArgs>">Raised when the values in this series change.</field>
			/// <field name="dimensions" type="MindFusion.Charting.Number">Implements Series.Dimensions. Returns 2.</field>
			/// <field name="labels" type="MindFusion.Charting.Collections.List<String>">Gets or sets the data labels.</field>
			/// <field name="points" type="MindFusion.Charting.Collections.List<Point>">Gets or sets the series' points.</field>
			/// <field name="size" type="MindFusion.Charting.Number">Implements Series.Size. Returns the number of elements in Points list.</field>
			/// <field name="supportedLabels" type="MindFusion.Charting.LabelKinds">Implements Series.SupportedLabels. Returns InnerLabel.</field>
			/// <field name="title" type="String">Implements Series.Title. Gets or sets the title of this series.</field>
		},
		PointSeries3D: function () {
			/// <summary>Represents a data series defined by a list of Point3D objects.</summary>
			/// <field name="dataChanged" type="MindFusion.Charting.EventDispatcher<EventArgs>">Raised when the values in this series change.</field>
			/// <field name="dimensions" type="MindFusion.Charting.Number">Implements Series.Dimensions. Returns 3.</field>
			/// <field name="labels" type="MindFusion.Charting.Collections.List<String>">Gets or sets the data labels.</field>
			/// <field name="points" type="MindFusion.Charting.Collections.List<Point3D>">Gets or sets the series' points.</field>
			/// <field name="size" type="MindFusion.Charting.Number">Implements Series.Size. Returns the number of elements in Points list.</field>
			/// <field name="supportedLabels" type="MindFusion.Charting.LabelKinds">Implements Series.SupportedLabels. Returns InnerLabel.</field>
			/// <field name="title" type="String">Implements Series.Title. Gets or sets the title of this series.</field>
		},
		PolarPlot: function () {
			/// <summary>A plot used to draw graphics in polar coordinate system.</summary>
			/// <field name="allowRotate" type="MindFusion.Charting.Boolean">Gets or sets a value indicating whether users are allowed to rotate this plot.</field>
			/// <field name="padding" type="MindFusion.Charting.Number">Gets or set padding space between the plot's border and series graphics.</field>
			/// <field name="startAngle" type="MindFusion.Charting.Number">Gets or set the angle where first data item of series should be drawn.</field>
		},
		RadarAxisOptions: function (axis) {
			/// <summary>Provides properties for customizing axis rendering in radar charts.</summary>
			/// <param name="axis" type="void">Type: void&#10;</param>
		},
		RadarPlot: function () {
			/// <summary>A plot containing radar-chart graphics.</summary>
			/// <field name="axes" type="MindFusion.Charting.Collections.ObservableCollection<Axis>">Gets the list of Axis objects representing ranges of variables represented in the radar chart.</field>
			/// <field name="axisOptions" type="MindFusion.Charting.RadarAxisOptions">Gets a RadarAxisOptions object providing properties for customizing axis rendering in radar charts.</field>
			/// <field name="defaultAxis" type="MindFusion.Charting.Axis">Sets a default Axis object used when data item index does not have corresponding element in the Axes collection.</field>
			/// <field name="gridColor1" type="MindFusion.Charting.Drawing.Color">Gets or sets the main color of the grid.</field>
			/// <field name="gridColor2" type="MindFusion.Charting.Drawing.Color">Gets or sets the alternating color of the grid.</field>
			/// <field name="gridDivisions" type="MindFusion.Charting.Number">Gets the number of concentric shapes to draw in the grid.</field>
			/// <field name="gridType" type="MindFusion.Charting.RadarGridType">Gets or sets the type of grid to draw in this plot.</field>
			/// <field name="showCoordinates" type="MindFusion.Charting.Boolean">Gets or sets a value indicating whether the grid should display axis coordinates.</field>
			/// <field name="uniformScale" type="MindFusion.Charting.Boolean">Gets or sets a value indicating whether all axes should display same data range.</field>
		},
		RadarRenderer: function (series) {
			/// <summary>A SeriesRenderer that draws series as polygons in polar coordinate system,where adjacent data points are at equal angular distances and radial coordinates correspond to magnitude of data item values.</summary>
			/// <param name="series" type="MindFusion.Charting.Collections.ObservableCollection<Series>">Type: ObservableCollection<Series>&#10;A list of Series that should be rendered by this object.</param>
			/// <field name="areaOpacity" type="MindFusion.Charting.Number">Gets or sets the opacity of radar polygons.</field>
			/// <field name="series" type="MindFusion.Charting.Collections.ObservableCollection<Series>">Gets or sets a list of Series drawn by this RadarRenderer.</field>
		},
		RadarScatterRenderer: function (series) {
			/// <summary>A SeriesRenderer that draws scatter in radar plots.</summary>
			/// <param name="series" type="MindFusion.Charting.Collections.ObservableCollection<Series>">Type: ObservableCollection<Series>&#10;A list of Series that should be rendered as scatter.</param>
		},
		RenderContext: function (clipRect, theme) {
			/// <summary>Provides contextual information about the dashboard to its child components when calling their draw, layout and user input methods.</summary>
			/// <param name="clipRect" type="Rect">Type: Rect&#10;A Rect specifying the clip rectangle.</param>
			/// <param name="theme" type="Theme">Type: Theme&#10;A Theme instance where appearance attributes should be derived from.</param>
			/// <field name="component" type="MindFusion.Charting.Component">Gets or sets the component currently being painted.</field>
			/// <field name="graphics" type="MindFusion.Charting.Drawing.Graphics">Gets or sets the current drawing surface.</field>
			/// <field name="theme" type="MindFusion.Charting.Theme">Gets or sets the Theme used to resolve appearance attributes.</field>
			/// <field name="xAxis" type="MindFusion.Charting.Axis">Gets the chart's XAxis.</field>
			/// <field name="yAxis" type="MindFusion.Charting.Axis">Gets the chart's YAxis.</field>
		},
		RenderContext2D: function (clipRect, theme) {
			/// <summary>Provides contextual information about the dashboard to its child components when calling their draw, layout and user input methods.</summary>
			/// <param name="clipRect" type="void">Type: void&#10;A RectD specifying the clip rectangle.</param>
			/// <param name="theme" type="void">Type: void&#10;A Theme instance where appearance attributes should be derived from.</param>
			/// <field name="chart" type="MindFusion.Charting.BiaxialChart">Gets the chart.</field>
			/// <field name="xAxis" type="MindFusion.Charting.Axis">Gets the chart's XAxis.</field>
			/// <field name="yAxis" type="MindFusion.Charting.Axis">Gets the chart's YAxis.</field>
		},
		Renderer2D: function (series) {
			/// <summary>A base class for series renderers that draw in two dimensional Cartesian coordinate system.</summary>
			/// <param name="series" type="MindFusion.Charting.Collections.ObservableCollection<Series>">Type: ObservableCollection<Series>&#10;A list of Series that should be rendered by this object.</param>
			/// <field name="series" type="MindFusion.Charting.Collections.ObservableCollection<Series>">Gets or sets a list of Series drawn by this Renderer2D.</field>
			/// <field name="xAxis" type="MindFusion.Charting.Axis">Gets the X axis associated with this Renderer2D.</field>
			/// <field name="yAxis" type="MindFusion.Charting.Axis">Gets the Y axis associated with this Renderer2D.</field>
		},
		RotationController: function (renderContext) {
			/// <summary>Represents a controller that rotates a polar plot by changing its StartAngle.</summary>
			/// <param name="renderContext" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
			/// <field name="enableAnimation" type="MindFusion.Charting.Boolean">Gets or sets whether to enable rotation inertia.</field>
		},
		RotationControllerAnimation: function () {
			/// <summary>Represents a controller that rotates a polar plot by changing its StartAngle.</summary>
		},
		ScatterRenderer: function (series) {
			/// <summary>A SeriesRenderer that draws scatter in its containing plot.</summary>
			/// <param name="series" type="MindFusion.Charting.Collections.ObservableCollection<Series>">Type: ObservableCollection<Series>&#10;A list of Series that should be rendered as scatter.</param>
			/// <field name="shape" type="MindFusion.Charting.ScatterType">Gets or sets the type of scatter shapes.</field>
			/// <field name="shapeSize" type="MindFusion.Charting.Number">Gets or sets the size of scatter shapes.</field>
		},
		Series2D: function () {
			/// <summary>Represents a data series defined by two lists of values containing respectively X and Y coordinates.</summary>
			/// <field name="dataChanged" type="MindFusion.Charting.EventDispatcher<EventArgs>">Raised when the values in this series change.</field>
			/// <field name="dimensions" type="MindFusion.Charting.Number">Implements Series.Dimensions. Returns 2.</field>
			/// <field name="labels" type="MindFusion.Charting.Collections.List<String>">Gets or sets the data labels.</field>
			/// <field name="size" type="MindFusion.Charting.Number">Implements Series.Size. Returns the number of elements in XData list.</field>
			/// <field name="supportedLabels" type="MindFusion.Charting.LabelKinds">Implements Series.SupportedLabels. Gets or sets the kind of labels reported as supported by this series.</field>
			/// <field name="title" type="String">Implements Series.Title. Gets or sets the title of this series.</field>
			/// <field name="xData" type="MindFusion.Charting.Collections.List<Number>">Gets or sets the X coordinates of data items.</field>
			/// <field name="yData" type="MindFusion.Charting.Collections.List<Number>">Gets or sets the Y coordinates of data items.</field>
		},
		Series3D: function () {
			/// <summary>Represents a data series defined by three lists of values containing respectively X, Y and Z coordinates.</summary>
			/// <field name="dataChanged" type="MindFusion.Charting.EventDispatcher<EventArgs>">Raised when the values in this series change.</field>
			/// <field name="dimensions" type="MindFusion.Charting.Number">Implements Series.Dimensions. Returns 3.</field>
			/// <field name="labels" type="MindFusion.Charting.Collections.List<String>">Gets or sets the data labels.</field>
			/// <field name="size" type="MindFusion.Charting.Number">Implements Series.Size. Returns the number of elements in XData list.</field>
			/// <field name="supportedLabels" type="MindFusion.Charting.LabelKinds">Implements Series.SupportedLabels. Returns InnerLabel.</field>
			/// <field name="title" type="String">Implements Series.Title. Gets or sets the title of this series.</field>
			/// <field name="xData" type="MindFusion.Charting.Collections.List<Number>">Gets or sets the X coordinates of data items.</field>
			/// <field name="yData" type="MindFusion.Charting.Collections.List<Number>">Gets or sets the Y coordinates of data items.</field>
			/// <field name="zData" type="MindFusion.Charting.Collections.List<Number>">Gets or sets the Z coordinates of data items.</field>
		},
		SeriesRenderer: function () {
			/// <summary>Base class for renderer objects that draw data series inside a Plot.</summary>
			/// <field name="labelBrush" type="MindFusion.Charting.Drawing.Brush">Gets or sets the Brush that should be used to draw labels of data items.</field>
			/// <field name="labelFontName" type="String">Gets or sets the name of font that should be used to draw labels of data items.</field>
			/// <field name="labelFontSize" type="MindFusion.Charting.Number">Gets or sets the size of font that should be used to draw labels of data items.</field>
			/// <field name="labelFontStyle" type="MindFusion.Charting.Drawing.FontStyle">Gets or sets the style of font that should be used to draw labels of data items.</field>
			/// <field name="propertyChanged" type="MindFusion.Charting.PropertyChangedEventDispatcher">Occurs when a property value changes.</field>
			/// <field name="seriesStyle" type="MindFusion.Charting.SeriesStyle">A SeriesStyle instance specifying the appearance of series associated with this renderer.</field>
			/// <field name="showDataLabels" type="MindFusion.Charting.Boolean">Gets or sets the kind of data labels to draw.</field>
			/// <field name="showHighlight" type="MindFusion.Charting.Boolean">Gets or sets a value indicating whether to show highlights on data items.</field>
			/// <field name="showToolTips" type="MindFusion.Charting.Boolean">Gets or sets a value indicating whether to show tooltips.</field>
		},
		SimpleSeries: function () {
			/// <summary>Represents one-dimensional series defined by e list of data values and a list of labels.</summary>
			/// <field name="data" type="MindFusion.Charting.Collections.List<Number>">Gets or sets the data values contained in this series.</field>
			/// <field name="dataChanged" type="MindFusion.Charting.EventDispatcher<EventArgs>">Raised when the values in this series change.</field>
			/// <field name="dimensions" type="MindFusion.Charting.Number">Implements Series.Dimensions. Returns 1.</field>
			/// <field name="size" type="MindFusion.Charting.Number">Implements Series.Size. Returns the number of elements in Data list.</field>
			/// <field name="supportedLabels" type="MindFusion.Charting.LabelKinds">Implements Series.SupportedLabels. Returns InnerLabel.</field>
			/// <field name="title" type="String">Implements Series.Title. Gets or sets the title of this series.</field>
		},
		StackRenderer: function (series) {
			/// <summary>A base SeriesRenderer for stacked graphics.</summary>
			/// <param name="series" type="MindFusion.Charting.Collections.ObservableCollection<Series>">Type: ObservableCollection<Series>&#10;</param>
		},
		StepAreaRenderer: function (series) {
			/// <summary>A SeriesRenderer that draws series as filled steps between data points.</summary>
			/// <param name="series" type="MindFusion.Charting.Collections.ObservableCollection<Series>">Type: ObservableCollection<Series>&#10;A list of Series that should be rendered by this object.</param>
			/// <field name="areaOpacity" type="MindFusion.Charting.Number">Sets or sets the opacity of area polygons.</field>
		},
		StepRenderer: function (series) {
			/// <summary>A SeriesRenderer that draws series as steps between data points.</summary>
			/// <param name="series" type="MindFusion.Charting.Collections.ObservableCollection<Series>">Type: ObservableCollection<Series>&#10;A list of Series that should be rendered by this object.</param>
		},
		StockPrice: function (open, close, low, high, date) {
			/// <summary>Represents a data object, containing open, close, low and high values for a certain date.</summary>
			/// <param name="open" type="Number">Type: Number&#10;The open value.</param>
			/// <param name="close" type="Number">Type: Number&#10;The close value.</param>
			/// <param name="low" type="Number">Type: Number&#10;The low value.</param>
			/// <param name="high" type="Number">Type: Number&#10;The high value.</param>
			/// <param name="date" type="Date" optional="true">Optional. Type: Date&#10;The corresponding date.</param>
		},
		StockPriceSeries: function () {
			/// <summary>Represents a data series defined by a list of StockPrice objects.</summary>
			/// <field name="customDateTimeFormat" type="String">Gets or sets a custom format string for DateTime labels.</field>
			/// <field name="dataChanged" type="MindFusion.Charting.EventDispatcher<EventArgs>">Raised when the values in this series change.</field>
			/// <field name="dateTimeFormat" type="MindFusion.Charting.DateTimeFormat">Gets or sets a value indicating how to format DateTime values as labels.</field>
			/// <field name="dimensions" type="MindFusion.Charting.Number">Implements Series.Dimensions. Returns 5.</field>
			/// <field name="labelPrefix" type="String">Gets or sets a prefix added in front of formatted DateTime labels.</field>
			/// <field name="labelSuffix" type="String">Gets or sets a suffix appended to formatted DateTime labels.</field>
			/// <field name="size" type="MindFusion.Charting.Number">Implements Series.Size. Returns the number of elements in Values list.</field>
			/// <field name="supportedLabels" type="MindFusion.Charting.LabelKinds">Implements Series.SupportedLabels. Returns InnerLabel.</field>
			/// <field name="title" type="String">Implements Series.Title. Gets or sets the title of this series.</field>
			/// <field name="values" type="MindFusion.Charting.Collections.List<StockPrice>">Gets or sets the series' points.</field>
		},
		TextRenderer: function (context, font, textBrush) {
			/// <summary>Draws text and labels inside chart components.</summary>
			/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
			/// <param name="font" type="MindFusion.Drawing.Font">Type: Font&#10;A Font instance.</param>
			/// <param name="textBrush" type="MindFusion.Charting.Drawing.Brush">Type: Brush&#10;A Brush instance.</param>
			/// <field name="labelFont" type="MindFusion.Drawing.Font">Gets or sets the Font used to draw labels.</field>
			/// <field name="textBrush" type="MindFusion.Charting.Drawing.Brush">Gets or sets the brush used to draw labels.</field>
		},
		TextStyle: function () {
			/// <summary>Defines text appearance attributes.</summary>
			/// <field name="fontName" type="String">Gets or sets font name.</field>
			/// <field name="fontSize" type="MindFusion.Charting.Number">Gets or sets font size.</field>
			/// <field name="fontStyle" type="MindFusion.Charting.Drawing.FontStyle">Gets or sets font style.</field>
			/// <field name="textBrush" type="MindFusion.Charting.Drawing.Brush">Gets or sets a Brush used to draw text.</field>
		},
		Theme: function (fill, stroke, strokeThickness, strokeDashStyle) {
			/// <summary>Represents a dashboard's theme defining all appearance attributes of its elements.</summary>
			/// <param name="fill" type="MindFusion.Charting.Drawing.Brush">Type: Brush&#10;A Brush used to fill all series elements.</param>
			/// <param name="stroke" type="MindFusion.Charting.Drawing.Brush">Type: Brush&#10;A Brush used to stroke all series elements.</param>
			/// <param name="strokeThickness" type="Number">Type: Number&#10;Uniform thickness of series elements' strokes.</param>
			/// <param name="strokeDashStyle" type="MindFusion.Charting.Drawing.DashStyle">Type: DashStyle&#10;Uniform dash style of series elements' strokes.</param>
			/// <field name="axisLabelsBrush" type="MindFusion.Charting.Drawing.Brush">Gets or sets the Brush used to draw axis labels.</field>
			/// <field name="axisLabelsFontName" type="String">Gets or sets the name of font used to draw axis labels.</field>
			/// <field name="axisLabelsFontSize" type="MindFusion.Charting.Number">Gets or sets the size of font used to draw axis labels.</field>
			/// <field name="axisLabelsFontStyle" type="MindFusion.Charting.Drawing.FontStyle">Gets or sets the style of font used to draw axis labels.</field>
			/// <field name="axisStroke" type="MindFusion.Charting.Drawing.Brush">Gets or sets a Brush used to stroke axis lines.</field>
			/// <field name="axisStrokeDashStyle" type="MindFusion.Charting.Drawing.DashStyle">Gets or sets the dash style of axis lines.</field>
			/// <field name="axisStrokeThickness" type="MindFusion.Charting.Number">Gets or sets the thickness of axis lines.</field>
			/// <field name="axisTitleBrush" type="MindFusion.Charting.Drawing.Brush">Gets or sets the Brush used to draw axis titles.</field>
			/// <field name="axisTitleFontName" type="String">Gets or sets the name of font used to draw axis titles.</field>
			/// <field name="axisTitleFontSize" type="MindFusion.Charting.Number">Gets or sets the size of font used to draw axis titles.</field>
			/// <field name="axisTitleFontStyle" type="MindFusion.Charting.Drawing.FontStyle">Gets or sets the style of font used to draw axis titles.</field>
			/// <field name="commonSeriesFills" type="MindFusion.Charting.Collections.List<Brush>">Gets or sets a list of brushes, each Brush used to fill all elements of a series.</field>
			/// <field name="commonSeriesStrokeDashStyles" type="MindFusion.Charting.Collections.List<DashStyle>">Gets or sets a list of dash styles, each style applied to all elements of a series.</field>
			/// <field name="commonSeriesStrokes" type="MindFusion.Charting.Collections.List<Brush>">Gets or sets a list of brushes, each Brush used to stroke all elements of a series.</field>
			/// <field name="commonSeriesStrokeThicknesses" type="MindFusion.Charting.Collections.List<Number>">Gets or sets a list of stroke thicknesses, each thickness applied to all elements of a series.</field>
			/// <field name="dataLabelsBrush" type="MindFusion.Charting.Drawing.Brush">Gets or sets the Brush used to draw data labels.</field>
			/// <field name="dataLabelsFontName" type="String">Gets or sets the name of font used to draw data labels.</field>
			/// <field name="dataLabelsFontSize" type="MindFusion.Charting.Number">Gets or sets the size of font used to draw data labels.</field>
			/// <field name="dataLabelsFontStyle" type="MindFusion.Charting.Drawing.FontStyle">Gets or sets the style of font used to draw data labels.</field>
			/// <field name="gaugeBackground" type="MindFusion.Charting.Drawing.Brush">Gets or sets a Brush used to draw gauge backgrounds.</field>
			/// <field name="gaugeFontName" type="String">Gets or sets the name of font used to draw text in gauges.</field>
			/// <field name="gaugeFontSize" type="MindFusion.Charting.Number">Gets or sets the size of font used to draw text in gauges.</field>
			/// <field name="gaugeFontStyle" type="MindFusion.Charting.Drawing.FontStyle">Gets or sets the style of font used to draw text in gauges.</field>
			/// <field name="gaugePointerBackground" type="MindFusion.Charting.Drawing.Brush">Gets or sets a Brush used to draw gauge pointer backgrounds.</field>
			/// <field name="gaugePointerStroke" type="MindFusion.Charting.Drawing.Brush">Gets or sets a Brush used to stroke gauge pointer borders.</field>
			/// <field name="gaugePointerStrokeThickness" type="MindFusion.Charting.Number">Gets or sets the thickness of gauge pointer borders.</field>
			/// <field name="gaugeScaleBackground" type="MindFusion.Charting.Drawing.Brush">Gets or sets a Brush used to draw gauge scale backgrounds.</field>
			/// <field name="gaugeScaleStroke" type="MindFusion.Charting.Drawing.Brush">Gets or sets a Brush used to stroke gauge scale borders.</field>
			/// <field name="gaugeScaleStrokeThickness" type="MindFusion.Charting.Number">Gets or sets the thickness of gauge scale borders.</field>
			/// <field name="gaugeStroke" type="MindFusion.Charting.Drawing.Brush">Gets or sets a Brush used to stroke gauge borders.</field>
			/// <field name="gaugeStrokeThickness" type="MindFusion.Charting.Number">Gets or sets the thickness of gauge borders.</field>
			/// <field name="gaugeTickBackground" type="MindFusion.Charting.Drawing.Brush">Gets or sets a Brush used to draw gauge tick backgrounds.</field>
			/// <field name="gaugeTickStroke" type="MindFusion.Charting.Drawing.Brush">Gets or sets a Brush used to stroke gauge tick borders.</field>
			/// <field name="gaugeTickStrokeThickness" type="MindFusion.Charting.Number">Gets or sets the thickness of gauge tick borders.</field>
			/// <field name="gridColor1" type="MindFusion.Charting.Drawing.Color">Gets or sets the main color of plot grid.</field>
			/// <field name="gridColor2" type="MindFusion.Charting.Drawing.Color">Gets or sets the alternating color of plot grid.</field>
			/// <field name="gridLineColor" type="MindFusion.Charting.Drawing.Color">Gets or sets the line color of plot grid.</field>
			/// <field name="gridLineStyle" type="MindFusion.Charting.Drawing.DashStyle">Gets or sets the style of plot grid lines.</field>
			/// <field name="gridLineThickness" type="MindFusion.Charting.Number">Gets or sets the thickness of plot grid lines.</field>
			/// <field name="highlightStroke" type="MindFusion.Charting.Drawing.Brush">Gets or sets a Brush used to stroke highlighted items.</field>
			/// <field name="highlightStrokeDashStyle" type="MindFusion.Charting.Drawing.DashStyle">Gets or sets the dash style of highlight strokes.</field>
			/// <field name="highlightStrokeThickness" type="MindFusion.Charting.Number">Gets or sets the thickness of highlight strokes.</field>
			/// <field name="legendBackground" type="MindFusion.Charting.Drawing.Brush">Gets or sets a Brush used to draw legend background.</field>
			/// <field name="legendBorderStroke" type="MindFusion.Charting.Drawing.Brush">Gets or sets a Brush used to draw legend borders.</field>
			/// <field name="legendBorderStrokeDashStyle" type="MindFusion.Charting.Drawing.DashStyle">Gets or sets the dash style of legend borders.</field>
			/// <field name="legendBorderStrokeThickness" type="MindFusion.Charting.Number">Gets or sets the thickness of legend borders.</field>
			/// <field name="legendLabelsBrush" type="MindFusion.Charting.Drawing.Brush">Gets or sets the Brush used to draw legend labels.</field>
			/// <field name="legendTitleFontName" type="String">Gets or sets the name of font used to draw legend titles.</field>
			/// <field name="legendTitleFontSize" type="MindFusion.Charting.Number">Gets or sets the size of font used to draw legend titles.</field>
			/// <field name="legendTitleFontStyle" type="MindFusion.Charting.Drawing.FontStyle">Gets or sets the style of font used to draw legend titles.</field>
			/// <field name="plotBackground" type="MindFusion.Charting.Drawing.Brush">Gets or sets a Brush used to draw the background of plots.</field>
			/// <field name="plotBorderStroke" type="MindFusion.Charting.Drawing.Brush">Gets or sets a Brush used to stroke plot borders.</field>
			/// <field name="plotBorderStrokeDashStyle" type="MindFusion.Charting.Drawing.DashStyle">Gets or sets the thickness of plot borders.</field>
			/// <field name="plotBorderStrokeThickness" type="MindFusion.Charting.Number">Gets or sets the thickness of plot borders.</field>
			/// <field name="propertyChanged" type="MindFusion.Charting.PropertyChangedEventDispatcher">Occurs when a property value changes.</field>
			/// <field name="seriesFills" type="MindFusion.Charting.Collections.List<List<Brush>>">Gets or sets a list of Brush lists, each list used to draw a different series, and each Brush used to fill individual elements of a series.</field>
			/// <field name="seriesStrokeDashStyles" type="MindFusion.Charting.Collections.List<List<DashStyle>>">Gets or sets a list of DashStyle lists, each list used to stroke a different series, and each DashStyle value specifying style of individual elements of a series.</field>
			/// <field name="seriesStrokes" type="MindFusion.Charting.Collections.List<List<Brush>>">Gets or sets a list of Brush lists, each list used to stroke a different series, and each Brush used to stroke individual elements of a series.</field>
			/// <field name="seriesStrokeThicknesses" type="MindFusion.Charting.Collections.List<List<number>>">Gets or sets a list of number lists, each list used to stroke a different series, and each number value specifying thickness of individual elements of a series.</field>
			/// <field name="subtitleBrush" type="MindFusion.Charting.Drawing.Brush">Gets or sets the Brush used to draw the chart sub-title.</field>
			/// <field name="subtitleFontName" type="String">Gets or sets the name of font used to draw the chart sub-title.</field>
			/// <field name="subtitleFontSize" type="MindFusion.Charting.Number">Gets or sets the size of font used to draw the chart sub-title.</field>
			/// <field name="subtitleFontStyle" type="MindFusion.Charting.Drawing.FontStyle">Gets or sets the style of font used to draw the chart sub-title.</field>
			/// <field name="titleBrush" type="MindFusion.Charting.Drawing.Brush">Gets or sets the Brush used to draw the chart title.</field>
			/// <field name="titleFontName" type="String">Gets or sets the name of font used to draw the chart title.</field>
			/// <field name="titleFontSize" type="MindFusion.Charting.Number">Gets or sets the size of font used to draw the chart title.</field>
			/// <field name="titleFontStyle" type="MindFusion.Charting.Drawing.FontStyle">Gets or sets the style of font used to draw the chart title.</field>
			/// <field name="uniformSeriesFill" type="MindFusion.Charting.Drawing.Brush">Gets or sets a Brush used to fill all elements of all series uniformly.</field>
			/// <field name="uniformSeriesStroke" type="MindFusion.Charting.Drawing.Brush">Gets or sets a Brush used to stroke all elements of all series uniformly.</field>
			/// <field name="uniformSeriesStrokeDashStyle" type="MindFusion.Charting.Drawing.DashStyle">Gets or sets uniform stroke dash style for all elements of all series.</field>
			/// <field name="uniformSeriesStrokeThickness" type="MindFusion.Charting.Number">Gets or sets uniform stroke thickness for all elements of all series.</field>
			/// <field name="widgetBrush" type="MindFusion.Charting.Drawing.Brush">Gets or sets the Brush used to draw text in UI widgets.</field>
			/// <field name="widgetFontName" type="String">Gets or sets the name of font used to draw text in UI widgets.</field>
			/// <field name="widgetFontSize" type="MindFusion.Charting.Number">Gets or sets the size of font used to draw text in UI widgets.</field>
			/// <field name="widgetFontStyle" type="MindFusion.Charting.Drawing.FontStyle">Gets or sets the style of font used to draw text in UI widgets.</field>
		},
		ToolTip: function () {
			/// <summary>Represents the current tooltip.</summary>
			/// <field name="brush" type="MindFusion.Charting.Drawing.Brush">Gets or sets the tooltip background brush.</field>
			/// <field name="font" type="MindFusion.Charting.Drawing.Font">Gets or sets the tooltip font.</field>
			/// <field name="horizontalOffset" type="MindFusion.Charting.Number">Gets or sets the horizontal offset from the pointer.</field>
			/// <field name="horizontalPadding" type="MindFusion.Charting.Number">Gets or sets the horizontal padding to the left and right of the tooltip text.</field>
			/// <field name="pen" type="MindFusion.Charting.Drawing.Pen">Gets or sets the tooltip border pen.</field>
			/// <field name="position" type="MindFusion.Drawing.Point">Gets or sets the tooltip position.</field>
			/// <field name="text" type="String">Gets or sets the tooltip text.</field>
			/// <field name="textBrush" type="MindFusion.Charting.Drawing.Brush">Gets or sets the tooltip text brush.</field>
			/// <field name="verticalOffset" type="MindFusion.Charting.Number">Gets or sets the horizontal offset from the pointer.</field>
			/// <field name="verticalPadding" type="MindFusion.Charting.Number">Gets or sets the vertical padding above and below the tooltip text.</field>
		},
		ToolTip: function () {
			/// <summary>Represents the current chart tooltip.</summary>
			/// <field name="brush" type="MindFusion.Charting.Drawing.Brush">Gets or sets the tooltip background brush.</field>
			/// <field name="font" type="MindFusion.Charting.Drawing.Font">&#160;Gets or sets the tooltip font.</field>
			/// <field name="horizontalOffset" type="MindFusion.Charting.Number">Gets or sets the horizontal offset from the pointer.</field>
			/// <field name="horizontalPadding" type="MindFusion.Charting.Number">Gets or sets the horizontal padding to the left and right of the tooltip text.</field>
			/// <field name="pen" type="MindFusion.Charting.Drawing.Pen">Gets or sets the tooltip border pen.</field>
			/// <field name="position" type="MindFusion.Drawing.Point">Gets or sets the tooltip position.</field>
			/// <field name="text" type="String">Gets or sets the tooltip text.</field>
			/// <field name="textBrush" type="MindFusion.Charting.Drawing.Brush">Gets or sets the tooltip text brush.</field>
			/// <field name="verticalOffset" type="MindFusion.Charting.Number">Gets or sets the horizontal offset from the pointer.</field>
			/// <field name="verticalPadding" type="MindFusion.Charting.Number">Gets or sets the vertical padding above and below the tooltip text.</field>
		},
		UniformSeriesStyle: function (fill, stroke, strokeThickness, strokeDashStyle) {
			/// <summary>Implements SeriesStyle using uniform attributes for all elements in all series.</summary>
			/// <param name="fill" type="MindFusion.Charting.Drawing.Brush" optional="true">Optional. Type: Brush&#10;A Brush used to fill all series elements.</param>
			/// <param name="stroke" type="MindFusion.Charting.Drawing.Brush" optional="true">Optional. Type: Brush&#10;A Brush used to stroke all series elements.</param>
			/// <param name="strokeThickness" type="Number" optional="true">Optional. Type: Number&#10;Uniform thickness of series elements' strokes.</param>
			/// <param name="strokeDashStyle" type="MindFusion.Charting.Drawing.DashStyle" optional="true">Optional. Type: DashStyle&#10;Uniform dash style of series elements' strokes.</param>
			/// <field name="uniformFill" type="MindFusion.Charting.Drawing.Brush">Gets or sets a Brush used to fill all elements of all series uniformly.</field>
			/// <field name="uniformStroke" type="MindFusion.Charting.Drawing.Brush">Gets or sets a Brush used to stroke all elements of all series uniformly.</field>
			/// <field name="uniformStrokeDashStyle" type="MindFusion.Charting.Drawing.DashStyle">Gets or sets uniform stroke dash style for all elements of all series.</field>
			/// <field name="uniformStrokeThickness" type="MindFusion.Charting.Number">Gets or sets uniform stroke thickness for all elements of all series.</field>
		},
		Vector: function (x, y) {
			/// <summary>Represents a two-dimensional vector.</summary>
			/// <param name="x" type="Number">Type: Number&#10;X component of the vector.</param>
			/// <param name="y" type="Number">Type: Number&#10;Y component of the vector.</param>
			/// <field name="length" type="MindFusion.Charting.Number">Gets the length of this vector.</field>
			/// <field name="lengthSquared" type="MindFusion.Charting.Number">Gets the squared length of this vector.</field>
			/// <field name="x" type="MindFusion.Charting.Number">Gets or sets the X component of this vector.</field>
			/// <field name="y" type="MindFusion.Charting.Number">Gets or sets the Y component of this vector.</field>
		},
		XAxisRenderer: function (axis) {
			/// <summary>A Component that renders horizontal Axis ranges.</summary>
			/// <param name="axis" type="MindFusion.Charting.Axis">Type: Axis&#10;The Axis that will be drawn by this object.</param>
			/// <field name="plotBottomSide" type="MindFusion.Charting.Boolean">Gets or sets whether this XAxisRenderer is shown at the bottom side of a plot.</field>
		},
		XmlPersistContext: function (document, fileVersion) {
			/// <summary>Contains methods that facilitate serializing and deserializing objects to and from XML documents.</summary>
			/// <param name="document" type="XMLDocument">Type: XMLDocument&#10;The associated XMLDocument.</param>
			/// <param name="fileVersion" type="number">Type: number&#10;Specifies the current file format number.</param>
		},
		YAxisRenderer: function (axis, xAxis) {
			/// <summary>A Component that renders vertical Axis ranges.</summary>
			/// <param name="axis" type="MindFusion.Charting.Axis">Type: Axis&#10;The Axis that will be drawn by this object.</param>
			/// <param name="xAxis" type="MindFusion.Charting.Axis" optional="true">Optional. Type: Axis&#10;The Axis used to check data item visibility.</param>
			/// <field name="plotLeftSide" type="MindFusion.Charting.Boolean">Gets or sets whether this YAxisRenderer is shown at the left side of a plot.</field>
		},
		ZoomController: function (renderContext, vertical) {
			/// <summary>Represents a controller that zooms into plot's data range.</summary>
			/// <param name="renderContext" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
			/// <param name="vertical" type="Boolean">Type: Boolean&#10;true to implement interaction along the Y axis, or false for the X axis.</param>
		},
		__namespace: true
	},
	Common: {
		Collections: {
			IEnumerable: function (items) {
				/// <summary>Represents an array of arbitrary objects.</summary>
				/// <param name="items" type="Array" optional="true">Optional. Type: Array&#10;Array. The underlying array data structure of the collection.</param>
			},
			List: function (items) {
				/// <summary>Represents an array of arbitrary objects.</summary>
				/// <param name="items" type="Array" optional="true">Optional. Type: Array&#10;Array. The underlying array data structure of the list.</param>
			},
			ObservableCollection: function (items) {
				/// <summary>Represents a collection of arbitrary objects.</summary>
				/// <param name="items" type="Array" optional="true">Optional. Type: Array&#10;Array. The underlying array data structure of the collection.</param>
				/// <field name="collectionChanged" type="EventDispatcher">Occurs when an item is added, removed, changed, moved, or the entire list is refreshed. Syntax: collectionChanged.addEventListener( function(sender, args){} );</field>
				/// <field name="collectionChanging" type="EventDispatcher">Occurs just before an item is added, removed, changed, moved, or the entire list is refreshed. Syntax: collectionChanging.addEventListener( function(sender, args){} );</field>
			},
			__namespace: true
		},
		Control: function (element) {
			/// <summary>A base class for UI controls.</summary>
			/// <param name="element" type="HTMLElement" optional="true">Optional. Type: HTMLElement&#10;HTMLElement. The control's associated Dom element.</param>
			/// <field name="bounds" type="MindFusion.Common.Rect">Gets the bounds of this control.</field>
			/// <field name="cssClass" type="String">Gets or sets the css class of the control.</field>
			/// <field name="data" type="Object">Gets or sets an object, holding custom user data.</field>
			/// <field name="element" type="HTMLElement">Gets a reference to the control's element.</field>
			/// <field name="enabled" type="Boolean">Gets or sets a value indicating whether user interactions are allowed for this control.</field>
			/// <field name="height" type="MindFusion.Common.Unit">Gets or sets the height of this control.</field>
			/// <field name="left" type="MindFusion.Common.Unit">Gets or sets the X-coordinate of the location of this control.</field>
			/// <field name="licenseLocation" type="String">Gets or sets the URL of the control's license file.</field>
			/// <field name="loaded" type="Boolean">Gets a value indicating whether this control is loaded and ready for interaction.</field>
			/// <field name="rect" type="MindFusion.Common.Rect">Gets the bounding rect of this control.</field>
			/// <field name="theme" type="String">Gets or sets the current theme of the control.</field>
			/// <field name="top" type="MindFusion.Common.Unit">Gets or sets the Y-coordinate of the location of this control.</field>
			/// <field name="visible" type="Boolean">Gets or sets the visibility of this control.</field>
			/// <field name="width" type="MindFusion.Common.Unit">Gets or sets the width of this control.</field>
			/// <field name="controlLoad" type="EventDispatcher">Raised when the control is loaded. Syntax: controlLoad.addEventListener( function(sender, args){} );</field>
			/// <field name="controlUnload" type="EventDispatcher">Raised when the control is unloaded. Syntax: controlUnload.addEventListener( function(sender, args){} );</field>
			/// <field name="focus" type="EventDispatcher">Raised when the control is focused. Syntax: focus.addEventListener( function(sender, args){} );</field>
		},
		DateFormats: function () {
			/// <summary>Defines format string for dates and time.</summary>
			/// <field name="dayMonth" type="String">Gets or sets the day-month format string.</field>
			/// <field name="longDate" type="String">Gets or sets the long date format string.</field>
			/// <field name="longDateTime" type="String">Gets or sets the long date-time format string.</field>
			/// <field name="longTime" type="String">Gets or sets the long time format string.</field>
			/// <field name="shortDate" type="String">Gets or sets the short date format string.</field>
			/// <field name="shortDateTime" type="String">Gets or sets the short date-time format string.</field>
			/// <field name="shortTime" type="String">Gets or sets the short time format string.</field>
			/// <field name="yearMonth" type="String">Gets or sets the year-month format string.</field>
		},
		DateSettings: function (localeId) {
			/// <summary>Defines properties that allow customization of date-specific information.</summary>
			/// <param name="localeId" type="String">Type: String&#10;String. The string identifier of the locale.</param>
			/// <field name="dateFormats" type="MindFusion.Common.DateFormats">Gets the DateFormats object used to hold date and time format strings.</field>
			/// <field name="dateSeparator" type="String">Gets or sets the date separator character.</field>
			/// <field name="dayPeriodAM" type="String">Gets or sets the before noon time designator.</field>
			/// <field name="dayPeriodPM" type="String">Gets or sets the after noon time designator.</field>
			/// <field name="dayPeriods" type="Object">Gets an object containing the time designators.</field>
			/// <field name="days" type="Object">Gets an object containing lists of day names.</field>
			/// <field name="firstDayOfWeek" type="Number">Gets or sets a value indicating the first day of the week to use.</field>
			/// <field name="longDays" type="Array">Gets or sets a list of long day names.</field>
			/// <field name="longMonths" type="Array">Gets or sets a list of long month names.</field>
			/// <field name="months" type="Object">Gets an object containing lists of month names.</field>
			/// <field name="narrowDays" type="Array">Gets or sets a list of narrow day names.</field>
			/// <field name="narrowMonths" type="Array">Gets or sets a list of narrow month names.</field>
			/// <field name="shortDays" type="Array">Gets or sets a list of short month names.</field>
			/// <field name="shortMonths" type="Array">Gets or sets a list of short month names.</field>
			/// <field name="timeSeparator" type="String">Gets or sets the time separator character.</field>
		},
		EventDispatcher: function () {
			/// <summary>Represents a dispatcher for an event.</summary>
		},
		IdGenerator: function () {
			/// <summary>Generates unique ids.</summary>
		},
		Locale: function (id) {
			/// <summary>Provides culture-specific information.</summary>
			/// <param name="id" type="String" optional="true">Optional. Type: String&#10;String. The string identifier of the locale.</param>
			/// <field name="dateFormats" type="MindFusion.Common.DateFormats">Gets the DateFormats object used to hold date and time format strings.</field>
			/// <field name="dateSettings" type="MindFusion.Common.DateSettings">Gets the DateSettings object used to hold date-specific information.</field>
			/// <field name="id" type="String">Gets the string identifier of the locale.</field>
			/// <field name="strings" type="Object">Gets or sets the dictionary of custom strings.</field>
		},
		NotifyCollectionChangedAction: function () {
			/// <summary>Specifies the type of the collection changed action.</summary>
		},
		NotifyCollectionChangedEventArgs: function (action, changes, index) {
			/// <summary>Provides data for CollectionChanged events.</summary>
			/// <param name="action" type="NotifyCollectionChangedAction">NotifyCollectionChangedAction. The action that caused the event.</param>
			/// <param name="changes" type="Array" optional="true">Optional. Type: Array&#10;Array. The items affected by the change.</param>
			/// <param name="index" type="Number" optional="true">Optional. Type: Number&#10;Number. The index where the change occurred.</param>
			/// <field name="action" type="MindFusion.Common.NotifyCollectionChangedAction">Gets the action that caused the event.</field>
			/// <field name="index" type="Number">Gets the index where the change occurred.</field>
			/// <field name="newItems" type="Array">Gets the list of new items involved in the change.</field>
			/// <field name="oldItems" type="Array">Gets the list of the items affected by a Remove action.</field>
		},
		NotifyCollectionChangingEventArgs: function (action, changes, index) {
			/// <summary>Provides data for CollectionChanging events.</summary>
			/// <param name="action" type="NotifyCollectionChangedAction">NotifyCollectionChangedAction. The action that caused the event.</param>
			/// <param name="changes" type="Array" optional="true">Optional. Type: Array&#10;Array. The items affected by the change.</param>
			/// <param name="index" type="Number" optional="true">Optional. Type: Number&#10;Number. The index where the change occurred.</param>
			/// <field name="action" type="MindFusion.Common.NotifyCollectionChangedAction">Gets the action that caused the event.</field>
			/// <field name="newItems" type="Array">Gets the list of new items involved in the change.</field>
			/// <field name="oldItems" type="Array">Gets the list of the items affected by a Remove action.</field>
		},
		PropertyEventArgs: function (propertyName, oldValue, newValue) {
			/// <summary>Provides data for PropertyValueChanged events.</summary>
			/// <param name="propertyName" type="String">Type: String&#10;String. The name of the property that changed.</param>
			/// <param name="oldValue" type="Object">Type: Object&#10;Object. The old value of the property.</param>
			/// <param name="newValue" type="Object">Type: Object&#10;Object. The new value of the property.</param>
			/// <field name="newValue" type="Object">Gets the current value of the property.</field>
			/// <field name="oldValue" type="Object">Gets the value of the property before the change.</field>
			/// <field name="propertyName" type="String">Gets the name of the property that changed.</field>
		},
		UIControl: function (element) {
			/// <summary>Initializes a new instance of the Control class.</summary>
			/// <param name="element" type="HTMLElement" optional="true">Optional. Type: HTMLElement&#10;HTMLElement. The control's associated Dom element.</param>
		},
		Unit: function (value, type) {
			/// <summary>Represents a length measurement.</summary>
			/// <param name="value" type="Number" optional="true">Optional. Type: Number&#10;Number. The value of the unit.</param>
			/// <param name="type" type="UnitType" optional="true">Optional. Type: UnitType&#10;UnitType. The type of the unit.</param>
			/// <field name="isEmpty" type="Boolean">Gets a value representing whether this Unit instance has a set value.</field>
			/// <field name="type" type="MindFusion.Common.UnitType">The unit type.</field>
			/// <field name="value" type="Number">The unit value.</field>
		},
		__namespace: true
	},
	Controls: {
		CancelEventArgs: function () {
			/// <summary>Provides a value to use with cancellable events.</summary>
			/// <field name="cancel" type="Boolean">Gets or sets a value indicating whether to allow the current operation.</field>
			/// <field name="handled" type="Boolean">Gets or sets a value indicating whether the event has been handled. Inherited from EventArgs.</field>
		},
		Canvas: function () {
			/// <summary>Handles drawing on a CanvasRenderingContext2D.</summary>
			/// <field name="bounds" type="MindFusion.Controls.Rect">Gets the underlying Canvas element's logical bounds.</field>
			/// <field name="measureUnit" type="MindFusion.Controls.GraphicsUnit">Gets or sets the unit of measure used for logical coordinates.</field>
			/// <field name="minVisibleFontSize" type="Number">Gets or sets a threshold value that hides text if scaled font sizes become smaller.</field>
			/// <field name="scale" type="Number">Gets the current scale of this Canvas.</field>
			/// <field name="element" type="HTMLElement">Returns a reference to the control's DOM element. Inherited from Disposable.</field>
			/// <field name="enabled" type="Boolean">Gets or sets whether mouse events are enabled. Inherited from Disposable.</field>
		},
		CanvasControl: function (element, canvas) {
			/// <summary>The CanvasControl class represents a wrapper class for the HTML5 Canvas element.</summary>
			/// <param name="element" type="HTMLCanvasElement">Type: HTMLCanvasElement&#10;HTMLCanvasElement. The Canvas DOM Element this CanvasControl is associated with.</param>
			/// <param name="canvas" type="Canvas" optional="true">Optional. Type: Canvas&#10;Canvas. The Canvas instance this CanvasControl is associated with.</param>
			/// <field name="measureUnit" type="MindFusion.Controls.GraphicsUnit">Gets the unit of measure used for logical coordinates.</field>
			/// <field name="element" type="HTMLElement">Returns a reference to the control's DOM element. Inherited from Disposable.</field>
			/// <field name="enabled" type="Boolean">Gets or sets whether mouse events are enabled. Inherited from Disposable.</field>
		},
		Control: function (element) {
			/// <summary>A base class for MindFusion controls.</summary>
			/// <param name="element" type="HTMLElement">Type: HTMLElement&#10;HTMLElement. The DOM Element this Control is associated with.</param>
			/// <field name="element" type="HTMLElement">Returns a reference to the control's DOM element.</field>
			/// <field name="enabled" type="Boolean">Gets or sets whether mouse events are enabled.</field>
		},
		Disposable: function () {
			/// <summary>Disposable abstract class.</summary>
			/// <field name="element" type="HTMLElement">Returns a reference to the control's DOM element.</field>
			/// <field name="enabled" type="Boolean">Gets or sets whether mouse events are enabled.</field>
		},
		DomUtils: function () {
			/// <summary>Contains DOM-related helper functions.</summary>
		},
		EventArgs: function () {
			/// <summary>The base type of classes that define arguments passed to event handler functions.</summary>
			/// <field name="handled" type="Boolean">Gets or sets a value indicating whether the event has been handled.</field>
		},
		Events: function () {
			/// <summary>Defines all events raised in the Controls namespace.</summary>
			/// <field name="controlLoaded" type="String">Raised when the control is loaded.</field>
		},
		ZoomControl: function (element) {
			/// <summary>The ZoomControl lets users zoom and pan a target view control interactively.</summary>
			/// <param name="element" type="HTMLCanvasElement">HTMLCanvasElement. The Canvas DOM Element this ZoomControl is associated with.</param>
			/// <field name="activeColor" type="String">Gets or sets the color used to render depressed buttons.</field>
			/// <field name="autoPostBack" type="Boolean">Gets or sets a value indicating whether the control will post back to the server when the control's value has changed.</field>
			/// <field name="backColor" type="String">Gets or sets the background color of the control.</field>
			/// <field name="borderColor" type="String">Gets or sets the color of ZoomControl elements' borders.</field>
			/// <field name="cornerRadius" type="Number">Gets or sets the corner radius of rounded child elements.</field>
			/// <field name="enabled" type="Boolean">Gets or sets whether mouse events are enabled.</field>
			/// <field name="fill" type="String">Gets or sets the color used to fill the ZoomControl elements.</field>
			/// <field name="innerColor" type="String">Gets or sets the color of plus, minus and arrow icons.</field>
			/// <field name="maxZoomFactor" type="Number">Gets or sets the maximum zoom level allowed to set through this control.</field>
			/// <field name="minZoomFactor" type="Number">Gets or sets the minimum zoom level allowed to set through this control.</field>
			/// <field name="padding" type="Number">Gets or sets the padding of the control's contents.</field>
			/// <field name="scrollStep" type="Number">Gets or sets the scroll offset added when users click the pan arrows.</field>
			/// <field name="shadowColor" type="String">Gets or sets the color of the control elements' shadow.</field>
			/// <field name="showLabel" type="Boolean">Gets or sets a value indicating whether the label that shows the current zoom level should be visible.</field>
			/// <field name="snapToZoomStep" type="Boolean">Gets or sets a value indicating whether the trackbar should snap to zoomStep values when dragged.</field>
			/// <field name="target" type="MindFusion.Controls.Control">Gets or sets the control modified by this ZoomControl.</field>
			/// <field name="textColor" type="String">Gets or sets the color of the the label that shows the current zoom level.</field>
			/// <field name="tickPosition" type="MindFusion.Controls.TickPosition">Gets or sets the current tick position of the trackbar.</field>
			/// <field name="zoomFactor" type="Number">Gets or sets the zoom factor.</field>
			/// <field name="zoomStep" type="Number">Gets or sets the amount by which to change zoom level when + and - buttons are clicked.</field>
			/// <field name="element" type="HTMLElement">Returns a reference to the control's DOM element. Inherited from Disposable.</field>
			/// <field name="measureUnit" type="MindFusion.Controls.GraphicsUnit">Gets the unit of measure used for logical coordinates. Inherited from CanvasControl.</field>
		},
		__namespace: true
	},
	Drawing: {
		Border3D: function (rect) {
			/// <summary>Represents a 3D border.</summary>
			/// <param name="rect" type="Rect">Type: Rect&#10;Rect. A Rect instance containing the border coordinates.</param>
		},
		Brush: function () {
			/// <summary>Represents a brush.</summary>
			/// <field name="color" type="MindFusion.Drawing.Color">Gets or sets the color of this Brush object.</field>
		},
		Color: function (value) {
			/// <summary>Represents a color.</summary>
			/// <param name="value" type="String">Type: String&#10;A string representation of the color.</param>
		},
		Component: function () {
			/// <summary>Represents components in CompositeNode visual tree.</summary>
			/// <field name="visibility" type="MindFusion.Drawing.Visibility">Gets or sets the visibility of this component. Inherited from ComponentBase.</field>
		},
		ComponentBase: function () {
			/// <summary>A base class for components in CompositeNode visual tree.</summary>
			/// <field name="visibility" type="MindFusion.Drawing.Visibility">Gets or sets the visibility of this component.</field>
		},
		Container: function () {
			/// <summary>Represents container components in drawing tree.</summary>
			/// <field name="visibility" type="MindFusion.Drawing.Visibility">Gets or sets the visibility of this component. Inherited from ComponentBase.</field>
		},
		DrawingUtils: function () {
			/// <summary>Contains drawing-related helper functions.</summary>
		},
		Ellipse: function (x, y, width, height) {
			/// <summary>Represents an Ellipse.</summary>
			/// <param name="x" type="Number">Type: Number&#10;Number. The X-coordinate of the top left corner of the Ellipse.</param>
			/// <param name="y" type="Number">Type: Number&#10;Number. The Y-coordinate of the top left corner of the Ellipse.</param>
			/// <param name="width" type="Number">Type: Number&#10;Number. The width of the Ellipse.</param>
			/// <param name="height" type="Number">Type: Number&#10;Number. The height of the Ellipse.</param>
			/// <field name="height" type="Number">Gets or sets the height of the ellipse.</field>
			/// <field name="width" type="Number">Gets or sets the width of the ellipse.</field>
			/// <field name="x" type="Number">Gets or sets the x-coordinate of the upper-left corner of the ellipse.</field>
			/// <field name="y" type="Number">Gets or sets the y-coordinate of the upper-left corner of the ellipse.</field>
		},
		Font: function (name, size, bold, italic, underline) {
			/// <summary>Represents a font.</summary>
			/// <param name="name" type="String">Type: String&#10;String. The font name.</param>
			/// <param name="size" type="Number" optional="true">Optional. Type: Number&#10;Number. The font size.</param>
			/// <param name="bold" type="Boolean | FontStyle" optional="true">Optional. Type: Boolean | FontStyle&#10;Boolean | FontStyle. true if this font is bold, or false otherwise.</param>
			/// <param name="italic" type="Boolean" optional="true">Optional. Type: Boolean&#10;Boolean. true if this font is italic, or false otherwise.</param>
			/// <param name="underline" type="Boolean" optional="true">Optional. Type: Boolean&#10;Boolean. true if this font is underlined, or false otherwise.</param>
			/// <field name="bold" type="Boolean">Gets whether the font is bold.</field>
			/// <field name="fontStyle" type="MindFusion.Drawing.FontStyle">Gets or sets the style of this font.</field>
			/// <field name="italic" type="Boolean">Gets whether the font is italic.</field>
			/// <field name="name" type="String">Gets or sets the name of this font.</field>
			/// <field name="size" type="Number">Gets or sets the size of this font.</field>
			/// <field name="underline" type="Boolean">Gets whether the font is underlined.</field>
		},
		Graphics: function (context) {
			/// <summary>Contains helper functions for drawing on a Canvas element.</summary>
			/// <param name="context" type="CanvasRenderingContext2D">Type: CanvasRenderingContext2D&#10;The CanvasRenderingContext2D drawing object.</param>
			/// <field name="context" type="MindFusion.Drawing.CanvasRenderingContext2D">Gets or sets the underlying CanvasRenderingContext2D drawing object.</field>
		},
		GraphicsUnit: function () {
			/// <summary>Specifies the unit of measure for length and size properties.</summary>
			/// <field name="Centimeter" type="Number">Specifies the centimeter as the unit of measure.</field>
			/// <field name="Display" type="Number">Specifies the display unit as the unit of measure.</field>
			/// <field name="Document" type="Number">Specifies the document unit as the unit of measure.</field>
			/// <field name="Inch" type="Number">Specifies the inch as the unit of measure.</field>
			/// <field name="Millimeter" type="Number">Specifies the millimeter as the unit of measure.</field>
			/// <field name="Percent" type="Number">Specifies the world coordinate system unit as the unit of measure.</field>
			/// <field name="Pixel" type="Number">Specifies the pixel unit as the unit of measure.</field>
			/// <field name="Point" type="Number">Specifies a printer's point as the unit of measure.</field>
			/// <field name="World" type="Number">Specifies the world coordinate system unit as the unit of measure.</field>
			/// <field name="WpfPoint" type="Number">Specifies the WpfPoint unit as the unit of measure.</field>
		},
		Image: function (bounds) {
			/// <summary>Represents an image.</summary>
			/// <param name="bounds" type="Rect">Type: Rect&#10;Rect. The bounds of the image.</param>
		},
		LinearGradientBrush: function () {
			/// <summary>Represents a linear gradient brush.</summary>
			/// <field name="angle" type="MindFusion.Drawing.Number">Gets or sets angle of gradient rotation.</field>
			/// <field name="endColor" type="MindFusion.Drawing.Color">Gets or sets the end color of the gradient.</field>
			/// <field name="startColor" type="MindFusion.Drawing.Color">Gets or sets the start color of the gradient.</field>
		},
		Path: function (pathString) {
			/// <summary>Represents a path.</summary>
			/// <param name="pathString" type="String" optional="true">Optional. Type: String&#10;String. A string representing the path figures.</param>
			/// <field name="brush" type="Object">Gets or sets the brush used to fill a closed path.</field>
			/// <field name="pen" type="Object">Gets or sets the pen used to draw the path.</field>
			/// <field name="text" type="String">Gets or sets the text displayed inside this path.</field>
		},
		Pen: function () {
			/// <summary>Represents a pen.</summary>
			/// <field name="color" type="MindFusion.Drawing.Color">Gets or sets the color of this Pen.</field>
			/// <field name="dashStyle" type="MindFusion.Drawing.DashStyle">Gets or sets the dash style of this Pen.</field>
			/// <field name="width" type="MindFusion.Drawing.Number">Gets or sets the width of this Pen.</field>
		},
		Point: function (x, y) {
			/// <summary>Represents a point.</summary>
			/// <param name="x" type="Number">The X-coordinate of the Point.</param>
			/// <param name="y" type="Number">The Y-coordinate of the Point.</param>
			/// <field name="x" type="Number">Gets or sets the x-coordinate of the point.</field>
			/// <field name="y" type="Number">Gets or sets the y-coordinate of the point.</field>
		},
		Rect: function () {
			/// <summary>Represents a rectangle.</summary>
			/// <field name="height" type="Number">Gets or sets the height of the rectangle.</field>
			/// <field name="width" type="Number">Gets or sets the width of the rectangle.</field>
			/// <field name="x" type="Number">Gets or sets the x-coordinate of the upper-left corner of the rectangle.</field>
			/// <field name="y" type="Number">Gets or sets the y-coordinate of the upper-left corner of the rectangle.</field>
		},
		Size: function (width, height) {
			/// <summary>Represents the size of 2D object.</summary>
			/// <param name="width" type="Number">Type: Number&#10;Number. Specifies width.</param>
			/// <param name="height" type="Number">Type: Number&#10;Number. Specifies height.</param>
			/// <field name="height" type="Number">Gets or sets the size height.</field>
			/// <field name="width" type="Number">Gets or sets the size width.</field>
		},
		StringFormat: function () {
			/// <summary>Encapsulates text layout information.</summary>
			/// <field name="alignment" type="MindFusion.Drawing.StringAlignment">Gets or sets the horizontal alignment of the text.</field>
			/// <field name="lineAlignment" type="MindFusion.Drawing.StringAlignment">Gets or sets the vertical alignment of the text.</field>
		},
		Text: function (text, bounds) {
			/// <summary>Represents a text container.</summary>
			/// <param name="text" type="String">Type: String&#10;String. The text to be displayed in the container.</param>
			/// <param name="bounds" type="Rect">Type: Rect&#10;Rect. The bounds of the container.</param>
			/// <field name="font" type="MindFusion.Drawing.Font">Gets or sets the font used to render text.</field>
			/// <field name="rotationAngle" type="Number">Gets a value indicating the rotation of the text container.</field>
			/// <field name="text" type="String">Gets or sets the text to render.</field>
		},
		Thickness: function () {
			/// <summary>Describes the thickness of a rectangular frame.</summary>
			/// <field name="bottom" type="Number">Gets or sets the width of the bottom side of the frame.</field>
			/// <field name="isRelative" type="Boolean">Gets or sets a flag indicating whether the thickness properties are expressed as relative or absolute quantities.</field>
			/// <field name="left" type="Number">Gets or sets the width of the left side of the frame.</field>
			/// <field name="right" type="Number">Gets or sets the width of the right side of the frame.</field>
			/// <field name="top" type="Number">Gets or sets the width of the top side of the frame.</field>
		},
		Vector: function (x, y) {
			/// <summary>Represents displacement in 2D space.</summary>
			/// <param name="x" type="Number">Type: Number&#10;Number. The X-coordinate of the Vector.</param>
			/// <param name="y" type="Number">Type: Number&#10;Number. The Y-coordinate of the Vector.</param>
		},
		Video: function (bounds) {
			/// <summary>A component that displays video stream.</summary>
			/// <param name="bounds" type="Rect">Type: Rect&#10;Rect. The bounds of the Video.</param>
			/// <field name="mediaLocation" type="String">Gets or sets URL of the video stream displayed in this component.</field>
		},
		__namespace: true
	},
	Gauges: {
		ArcArea: function () {
			/// <summary>Represents an ellipse visual.</summary>
			/// <field name="endAngle" type="Number">Gets or sets the end angle of the arc.</field>
			/// <field name="startAngle" type="Number">Gets or sets the start angle of the arc.</field>
		},
		ArcSegment: function () {
			/// <summary>Represents an elliptical arc between two points.</summary>
			/// <field name="isCounterclockwise" type="Boolean">Gets or sets a value that indicates whether the arc is drawn in counterclockwise or clockwise direction.</field>
			/// <field name="isLargeArc" type="Boolean">Gets or sets a value that indicates whether the arc should be greater than 180 degrees.</field>
			/// <field name="point" type="MindFusion.Gauges.Point">Gets or sets the endpoint of the elliptical arc.</field>
			/// <field name="rotationAngle" type="Number">Gets or sets the amount (in degrees) by which the ellipse is rotated about the x-axis.</field>
			/// <field name="size" type="MindFusion.Gauges.Size">Gets or sets the x- and y-radius of the arc as a Size structure.</field>
		},
		BaseGauge: function (element) {
			/// <summary>Represents the base class of linear and oval gauges.</summary>
			/// <param name="element" type="Object">Type: Object&#10;Object. The Div DOM element this gauge is associated with.</param>
			/// <field name="autoPostBack" type="Boolean">Gets or sets a value indicating whether the control will post back to the server when a pointer's value has changed.</field>
			/// <field name="licenseLocation" type="String">Gets or sets the URL of the gauge's license file.</field>
			/// <field name="scales" type="Array">Returns the array of all scales in this gauge.</field>
		},
		BaseScale: function (parent) {
			/// <summary>Represents a scale within a gauge control.</summary>
			/// <param name="parent" type="BaseGauge">Type: BaseGauge&#10;BaseGauge. The gauge control this scale belongs to.</param>
			/// <field name="customFunction" type="MindFusion.Gauges.FunctionDelegate">Gets or sets the function to be used for distribution of values along the scale when functionType is set to Custom.</field>
			/// <field name="functionArgument" type="Number">Gets or sets the argument passed to custom functions.</field>
			/// <field name="functionType" type="MindFusion.Gauges.FunctionType">Gets or sets the type of the function used to calculate the distribution of values along the scale.</field>
			/// <field name="logarithmBase" type="Number">Gets or sets the logarithm base when FunctionType is set to Logarithmic.</field>
			/// <field name="majorTickSettings" type="MindFusion.Gauges.MajorTickSettings">Gets the settings for the major ticks and their associated labels.</field>
			/// <field name="maxValue" type="Number">Gets or sets the maximal value displayed by the scale.</field>
			/// <field name="middleTickSettings" type="MindFusion.Gauges.MiddleTickSettings">Gets the settings for the middle ticks and their associated labels.</field>
			/// <field name="minorTickSettings" type="MindFusion.Gauges.MinorTickSettings">Gets the settings for the minor ticks and their associated labels.</field>
			/// <field name="minValue" type="Number">Gets or sets the minimal value displayed by the scale.</field>
			/// <field name="pointers" type="Array">Returns the array of all pointers in this scale.</field>
			/// <field name="ranges" type="Array">Returns the array of all ranges in this scale.</field>
			/// <field name="reversedCustomFunction" type="MindFusion.Gauges.FunctionDelegate">Gets or sets the reversed version of the function specified through customFunction.</field>
			/// <field name="startWidth" type="MindFusion.Gauges.Length">Gets or sets the width of the scale at its beginning.</field>
		},
		CenterPanel: function () {
			/// <summary>Represents a container which centers its children and makes them with square size.</summary>
		},
		CustomInterval: function () {
			/// <summary>Represents an interval with associated custom values for fill and stroke.</summary>
			/// <field name="fill" type="Object">Gets or sets the brush to apply as a background of the elements within the custom interval.</field>
			/// <field name="foreground" type="Object">Gets or sets the color to apply as a foreground to the elements within this custom interval.</field>
			/// <field name="maxValue" type="Number">Gets or sets the end of this custom interval.</field>
			/// <field name="minValue" type="Number">Gets or sets the start of this custom interval.</field>
			/// <field name="stroke" type="Object">Gets or sets the brush to apply as an outline of the elements within the custom interval.</field>
		},
		Ellipse: function () {
			/// <summary>Represents an ellipse visual.</summary>
		},
		Events: function () {
			/// <summary>Defines all events raised by the Gauge component.</summary>
			/// <field name="paintBackground" type="String">Raised when the gauge background is being painted.</field>
			/// <field name="paintForeground" type="String">Raised when the gauge foreground is being painted.</field>
			/// <field name="paintPointer" type="String">Raised when a gauge pointer is being painted.</field>
			/// <field name="paintScale" type="String">Raised when a gauge scale is being painted.</field>
			/// <field name="paintTick" type="String">Raised when a gauge tick is being painted.</field>
			/// <field name="prepaintBackground" type="String">Raised before the gauge background is painted.</field>
			/// <field name="prepaintForeground" type="String">Raised before the gauge foreground is painted.</field>
			/// <field name="prepaintPointer" type="String">Raised before a gauge pointer is painted.</field>
			/// <field name="prepaintScale" type="String">Raised before a gauge scale is painted.</field>
			/// <field name="prepaintTick" type="String">Raised before a gauge tick is painted.</field>
			/// <field name="valueChanged" type="String">Raised when the value of a pointer is being changed interactively.</field>
			/// <field name="valueChanging" type="String">Raised when the value of a pointer has changed interactively.</field>
		},
		GeometryFactory: function () {
			/// <summary>A factory class for various geometry objects.</summary>
		},
		Length: function (value, type) {
			/// <summary>Specifies distance expressed either absolutely, through pixels, or relatively, through a percentage of the container's size.</summary>
			/// <param name="value" type="Number">Type: Number&#10;Number. A number specifying the initial length value.</param>
			/// <param name="type" type="LengthType" optional="true">Optional. A member of the LengthType enumeration specifying the length type.</param>
			/// <field name="type" type="MindFusion.Gauges.LengthType">Gets or sets the type of this length.</field>
			/// <field name="value" type="Number">Gets or sets the value representing this length.</field>
		},
		LinearGauge: function (element) {
			/// <summary>Represents a linear gauge control.</summary>
			/// <param name="element" type="Object">The Div DOM Element this LinearGauge is associated with.</param>
			/// <field name="orientation" type="MindFusion.Gauges.Orientation">Gets or sets the orientation of the gauge.</field>
		},
		LinearScale: function (parent) {
			/// <summary>Represents a linear scale.</summary>
			/// <param name="parent" type="BaseGauge">Type: BaseGauge&#10;BaseGauge. The gauge control this scale belongs to.</param>
			/// <field name="left" type="MindFusion.Gauges.Length">Gets or sets the distance between the left of this scale and the left of its container.</field>
			/// <field name="orientation" type="MindFusion.Gauges.Orientation">Gets or sets the orientation of the scale.</field>
			/// <field name="scaleAlignment" type="MindFusion.Gauges.Alignment">Gets or sets the alignment of the scale.</field>
			/// <field name="scaleLength" type="MindFusion.Gauges.Length">Gets or sets the length of the scale.</field>
			/// <field name="top" type="MindFusion.Gauges.Length">Gets or sets the distance between the top of this scale and the top of its container.</field>
		},
		LineSegment: function () {
			/// <summary>Represents a line between two points.</summary>
			/// <field name="point" type="MindFusion.Gauges.Point">Gets or sets the end point of the line segment.</field>
		},
		MajorTickSettings: function (parent) {
			/// <summary>Provides settings for the major ticks and labels in a gauge scale.</summary>
			/// <param name="parent" type="BaseScale">Type: BaseScale&#10;BaseScale. The scale these settings belong to.</param>
		},
		MiddleTickSettings: function (parent) {
			/// <summary>Provides settings for the middle ticks and labels in a gauge scale.</summary>
			/// <param name="parent" type="BaseScale">Type: BaseScale&#10;BaseScale. The scale these settings belong to.</param>
		},
		MinorTickSettings: function (parent) {
			/// <summary>Provides settings for the minor ticks and labels in a gauge scale.</summary>
			/// <param name="parent" type="BaseScale">Type: BaseScale&#10;BaseScale. The scale these settings belong to.</param>
		},
		MouseInfo: function () {
			/// <summary>Provides mouse information when processing mouse events in the visual element hierarchy.</summary>
			/// <field name="action" type="MindFusion.Gauges.MouseAction">Gets the action that was performed.</field>
			/// <field name="point" type="MindFusion.Gauges.Point">Gets the mouse location.</field>
		},
		OvalGauge: function (element) {
			/// <summary>Represents a circular gauge control.</summary>
			/// <param name="element" type="Object">The Div DOM Element this OvalGauge is associated with.</param>
			/// <field name="style" type="MindFusion.Gauges.OvalGaugeStyle">Gets or sets the visual style of the gauge.</field>
		},
		OvalScale: function (parent) {
			/// <summary>Represents a radial scale.</summary>
			/// <param name="parent" type="BaseGauge">Type: BaseGauge&#10;BaseGauge. The gauge control this scale belongs to.</param>
			/// <field name="endAngle" type="Number">Gets or sets the end angle of the scale.</field>
			/// <field name="scaleRelativeCenter" type="MindFusion.Gauges.Point">Gets or sets the center of the scale relative to the scale bounds.</field>
			/// <field name="scaleRelativeRadius" type="Number">Gets or sets the radius of the scale relative to the scale bounds.</field>
			/// <field name="startAngle" type="Number">Gets or sets the start angle of the scale.</field>
		},
		PaintEventArgs: function () {
			/// <summary>Provides data for the various custom painting event.</summary>
			/// <field name="context" type="MindFusion.Gauges.CanvasRenderingContext2D">Gets the canvas rendering context.</field>
			/// <field name="element" type="MindFusion.Gauges.VisualElement">Gets or sets the element being custom drawn.</field>
		},
		PathFigure: function (data) {
			/// <summary>Represents a connected series of geometric segments.</summary>
			/// <param name="data" type="String">Type: String&#10;String. The path data string.</param>
		},
		Pointer: function () {
			/// <summary>Represents a needle (or arrow) within a gauge scale.</summary>
			/// <field name="alignment" type="MindFusion.Gauges.Alignment">Gets or sets the alignment of the pointer relative to the scale.</field>
			/// <field name="customShape" type="String">Gets or sets the definition of the pointer shape when Shape is set to Custom.</field>
			/// <field name="isDiscrete" type="Boolean">Gets or sets a value indicating whether the pointer value can be changed only discretely(the pointer Value can be only integer).</field>
			/// <field name="isInteractive" type="Boolean">Gets or sets a value indicating whether the pointer position should be affected by user interactions.</field>
			/// <field name="pointerHeight" type="MindFusion.Gauges.Length">Gets or sets the height of the pointer.</field>
			/// <field name="pointerOffset" type="MindFusion.Gauges.Length">Gets or sets the offset of the pointer along the direction it points to.</field>
			/// <field name="pointerWidth" type="MindFusion.Gauges.Length">Gets or sets the width of the pointer.</field>
			/// <field name="shape" type="MindFusion.Gauges.PointerShape">Gets or sets the shape of the pointer.</field>
			/// <field name="value" type="Number">Gets or sets the value this pointer points to.</field>
		},
		PrepaintEventArgs: function () {
			/// <summary>Provides data for various pre-paint events.</summary>
			/// <field name="cancelDefaultPainting" type="Boolean">Gets or sets a value indicating whether the default painting of this element should be performed.</field>
		},
		Range: function () {
			/// <summary>Represents a range within a gauge scale.</summary>
			/// <field name="alignment" type="MindFusion.Gauges.Alignment">Gets or sets the alignment of this range relative to the scale it is associated with.</field>
			/// <field name="autoSize" type="Boolean">Gets or sets a value indicating whether the start and end width of the range will be automatically adjusted to match the width of the scale.</field>
			/// <field name="capEnd" type="Boolean">Gets or sets a value indicating whether to draw a stroke in the end of this range.</field>
			/// <field name="capStart" type="Boolean">Gets or sets a value indicating whether to draw a stroke in the beginning of this range.</field>
			/// <field name="endWidth" type="MindFusion.Gauges.Length">Gets or sets the width of this range at its end.</field>
			/// <field name="maxValue" type="Number">Gets or sets the end value of this range.</field>
			/// <field name="minValue" type="Number">Gets or sets the start value of this range.</field>
			/// <field name="offset" type="MindFusion.Gauges.Length">Gets or sets the offset of the range from the position calculated according to its alignment.</field>
			/// <field name="startWidth" type="MindFusion.Gauges.Length">Gets or sets the width of this range at its start.</field>
			/// <field name="strokeInside" type="Boolean">Gets or sets a value indicating whether to draw a stroke at the inside of this range.</field>
			/// <field name="strokeOutside" type="Boolean">Gets or sets a value indicating whether to draw a stroke at the outside of this range.</field>
		},
		RoundRectangle: function () {
			/// <summary>Represents a rounded rectangle.</summary>
			/// <field name="roundness" type="Number">Gets or sets the relative roundness of this rectangle's corners.</field>
		},
		Segment: function () {
			/// <summary>Represents a segment of a PathFigure object.</summary>
			/// <field name="isStroked" type="Boolean">Gets or sets a value that indicates whether the segment is stroked.</field>
		},
		Tick: function (settings) {
			/// <summary>Represents a tick mark within a gauge scale.</summary>
			/// <param name="settings" type="TickSettings">The TickSettings object associated with this tick.</param>
			/// <field name="rawValue" type="Number">Gets the value associated with this tick before it was processed by any value distribution functions.</field>
			/// <field name="settings" type="MindFusion.Gauges.TickSettings">Gets the TickSettings object associated with this tick.</field>
			/// <field name="value" type="Number">Gets the value associated with this tick.</field>
		},
		TickLabel: function (settings) {
			/// <summary>Represents a tick label within a gauge scale.</summary>
			/// <param name="settings" type="TickSettings">Type: TickSettings&#10;TickSettings. The TickSettings object associated with this label.</param>
			/// <field name="foreground" type="MindFusion.Gauges.Color">Gets the foreground color of this label.</field>
			/// <field name="rawValue" type="Number">Gets the value associated with this tick before it was processed by any value distribution functions.</field>
			/// <field name="settings" type="MindFusion.Gauges.TickSettings">Gets the TickSettings object associated with this label.</field>
			/// <field name="value" type="Number">Gets the value associated with this label.</field>
		},
		TickSettings: function (parent) {
			/// <summary>Provides settings for the ticks and labels in a gauge scale.</summary>
			/// <param name="parent" type="BaseScale">Type: BaseScale&#10;BaseScale. The scale these settings belong to.</param>
			/// <field name="count" type="Number">Gets or sets the number of ticks and labels.</field>
			/// <field name="customIntervals" type="Array">Gets an array of CustomInterval objects, which can be used to customize the appearance of the ticks in a particular interval.</field>
			/// <field name="fill" type="Object">Gets or sets the fill brush of the ticks.</field>
			/// <field name="fontFamily" type="String">Gets or sets the font family of the labels.</field>
			/// <field name="fontSize" type="MindFusion.Gauges.Length">Gets or sets the font size of the labels.</field>
			/// <field name="fontStyle" type="String">Gets or sets the font style of the labels.</field>
			/// <field name="labelAlignment" type="MindFusion.Gauges.Alignment">Gets or sets the alignment of the labels relative to the scale.</field>
			/// <field name="labelForeground" type="Object">Gets or sets the brush used to paint label texts.</field>
			/// <field name="labelOffset" type="MindFusion.Gauges.Length">Gets or sets the offset of the labels relative to their calculated position.</field>
			/// <field name="labelRotation" type="MindFusion.Gauges.LabelRotation">Gets or sets the rotation mode of the labels.</field>
			/// <field name="numberPrecision" type="Number">Gets or sets the number recision of the labels.</field>
			/// <field name="showLabels" type="Boolean">Gets or sets a value indicating whether the labels are visible.</field>
			/// <field name="showMaxValueTick" type="Boolean">Gets or sets a value indicating whether to display a tick for the maxValue of the scale.</field>
			/// <field name="showTicks" type="Boolean">Gets or sets a value indicating whether the ticks are visible.</field>
			/// <field name="step" type="Number">Gets or sets the value between adjacent ticks and labels.</field>
			/// <field name="stroke" type="Object">Gets or sets the stroke brush of the ticks.</field>
			/// <field name="tickAlignment" type="MindFusion.Gauges.Alignment">Gets or sets the alignment of the ticks relative to the scale.</field>
			/// <field name="tickHeight" type="MindFusion.Gauges.Length">Gets or sets the height of a tick.</field>
			/// <field name="tickOffset" type="MindFusion.Gauges.Length">Gets or sets the offset of the ticks relative to their calculated position.</field>
			/// <field name="tickShape" type="MindFusion.Gauges.TickShape">Gets or sets the shape of the ticks.</field>
			/// <field name="tickWidth" type="MindFusion.Gauges.Length">Gets or sets the width of a tick.</field>
		},
		Utils: function () {
			/// <summary>Contains helper functions.</summary>
		},
		ValueChangedEventArgs: function () {
			/// <summary>Contains the arguments passed to value changed notification handlers.</summary>
			/// <field name="newValue" type="Object">Gets the new value of the changed property.</field>
			/// <field name="oldValue" type="Object">Gets the previous value of the changed property.</field>
		},
		ValueChangingEventArgs: function () {
			/// <summary>Contains the arguments passed to value changing notification handlers.</summary>
			/// <field name="newValue" type="Object">Gets the new value of the changing property.</field>
			/// <field name="oldValue" type="Object">Gets the previous value of the changing property.</field>
		},
		VisualElement: function () {
			/// <summary>Represents an object with outline and fill, which can render itself to a canvas.</summary>
			/// <field name="bounds" type="MindFusion.Gauges.Rect">Gets or sets the bounding rectangle of this element.</field>
			/// <field name="fill" type="Object">Gets or sets the fill of this element.</field>
			/// <field name="isVisible" type="Boolean">Gets or sets a value indicating whether this element is visible.</field>
			/// <field name="margin" type="MindFusion.Gauges.Thickness">Gets or sets the margin of this element.</field>
			/// <field name="name" type="String">Gets or sets the name of this element.</field>
			/// <field name="relativeCoordinates" type="Boolean">Gets or sets a value indicating whether the metrics of this element are expressed as relative or absolute quantities.</field>
			/// <field name="renderSize" type="MindFusion.Gauges.Size">Gets or sets the rendering size of the element.</field>
			/// <field name="stroke" type="Object">Gets or sets the stroke of this element.</field>
			/// <field name="x" type="Number">Gets or sets the normalized x position of this element, relative to its parent.</field>
			/// <field name="y" type="Number">Gets or sets the normalized y position of this element, relative to its parent.</field>
		},
		VisualElementContainer: function () {
			/// <summary>Represents a visual element which contains other visual elements.</summary>
		},
		__namespace: true
	},
	__namespace: true
};

MindFusion.Charting.Commands.Command.prototype = {
	commit: function() {
		/// <summary>A shortcut method for executing the command through the undo engine.</summary>
	}
};
MindFusion.Charting.Commands.Command.__class = true;

MindFusion.Charting.Commands.CompositeCommand.prototype = {
	execute: function() {
		/// <summary>DisposableCommand.Execute override.</summary>
	},
	redo: function() {
		/// <summary>Command.Redo override.</summary>
	},
	undo: function() {
		/// <summary>Command.Undo override.</summary>
	}
};
MindFusion.Charting.Commands.CompositeCommand.__class = true;

MindFusion.Charting.Commands.DisposableCommand.prototype = {
	cancel: function() {
		/// <summary>Cancels the command.</summary>
	},
	clean: function() {
		/// <summary>Disposes of this command.</summary>
	},
	dispose: function() {
		/// <summary>IDisposable.Dispose implementation.</summary>
	},
	execute: function() {
		/// <summary>Command.Execute override.</summary>
	},
	redo: function() {
		/// <summary>Command.Redo override.</summary>
	},
	undo: function() {
		/// <summary>Command.Undo override.</summary>
	}
};
MindFusion.Charting.Commands.DisposableCommand.__class = true;

MindFusion.Charting.Commands.TrackChangesCommand.prototype = {
	beginChange: function() {
		/// <summary>Called before undoing or redoing the command.</summary>
	},
	endChange: function() {
		/// <summary>Called after undoing or redoing the command.</summary>
	},
	redo: function() {
		/// <summary>DisposableCommand.Redo override.</summary>
	},
	undo: function() {
		/// <summary>DisposableCommand.Undo override.</summary>
	}
};
MindFusion.Charting.Commands.TrackChangesCommand.__class = true;

MindFusion.Charting.Commands.UndoEventArgs.prototype = {
};
MindFusion.Charting.Commands.UndoEventArgs.__class = true;

MindFusion.Charting.Components.BorderComponent.prototype = {
	arrange: function(x, y, w, h, context) {
		/// <summary>Component.Arrange override. Sets the location and size of this border and arranges its Content.</summary>
		/// <param name="x" type="Number">Type: Number&#10;A number value specifying horizontal position.</param>
		/// <param name="y" type="Number">Type: Number&#10;A number value specifying vertical position.</param>
		/// <param name="w" type="Number">Type: Number&#10;A number value specifying the component's width.</param>
		/// <param name="h" type="Number">Type: Number&#10;A number value specifying the component's height.</param>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
	},
	draw: function(context) {
		/// <summary>Component.Draw override. Draws this border in specified RenderContext.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
	},
	measure: function(maxWidth, maxHeight, context) {
		/// <summary>Component.Measure override. Measures the desired size of this border and its Content.</summary>
		/// <param name="maxWidth" type="Number">Type: Number&#10;The maximum width provided by parent component.</param>
		/// <param name="maxHeight" type="Number">Type: Number&#10;The maximum height provided by parent component.</param>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
	}
};
MindFusion.Charting.Components.BorderComponent.__class = true;

MindFusion.Charting.Components.ButtonComponent.prototype = {
	arrange: function(x, y, w, h, context) {
		/// <summary>Component.Arrange override. Sets the location and size of this button relatively to its parent.</summary>
		/// <param name="x" type="Number">Type: Number&#10;A number value specifying horizontal position.</param>
		/// <param name="y" type="Number">Type: Number&#10;A number value specifying vertical position.</param>
		/// <param name="w" type="Number">Type: Number&#10;A number value specifying the component's width.</param>
		/// <param name="h" type="Number">Type: Number&#10;A number value specifying the component's height.</param>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
	},
	createController: function(context) {
		/// <summary>Component.CreateController override. Returns a controller used to interact with this button.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
		/// <returns type="ComponentController">Type: ComponentController&#10;Instance of a ComponentController -derived class.</returns>
	},
	draw: function(context) {
		/// <summary>Component.Draw override. Draws this button in specified RenderContext.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
	},
	measure: function(maxWidth, maxHeight, context) {
		/// <summary>Component.Measure override. Measures the desired size of this button.</summary>
		/// <param name="maxWidth" type="Number">Type: Number&#10;The maximum width provided by parent component.</param>
		/// <param name="maxHeight" type="Number">Type: Number&#10;The maximum height provided by parent component.</param>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
	},
	onClicked: function(e) {
		/// <summary>Raises the Clicked event.</summary>
		/// <param name="e" type="EventArgs">Type: EventArgs&#10;An instance of the EventArgs class.</param>
	},
	onCustomDraw: function(e) {
		/// <summary>Raises the CustomDraw event.</summary>
		/// <param name="e" type="ButtonDrawEventArgs">Type: ButtonDrawEventArgs&#10;An instance of the ButtonDrawEventArgs class.</param>
	}
};
MindFusion.Charting.Components.ButtonComponent.__class = true;

MindFusion.Charting.Components.ButtonDrawEventArgs.prototype = {
};
MindFusion.Charting.Components.ButtonDrawEventArgs.__class = true;

MindFusion.Charting.Components.ButtonDrawEventDispatcher.prototype = {
};
MindFusion.Charting.Components.ButtonDrawEventDispatcher.__class = true;

MindFusion.Charting.Components.Component.prototype = {
	add: function(value1, value2) {
		/// <summary>Sums specified nullable number values.</summary>
		/// <param name="value1" type="Number">Type: Number&#10;The first term to sum.</param>
		/// <param name="value2" type="Number">Type: Number&#10;The second term to sum.</param>
		/// <returns type="Number">Type: Number&#10;A nullable number value representing the sum.</returns>
	},
	arrange: function(x, y, w, h, context) {
		/// <summary>Sets the location and size of this component relatively to its parent.</summary>
		/// <param name="x" type="Number">Type: Number&#10;A number value specifying horizontal position.</param>
		/// <param name="y" type="Number">Type: Number&#10;A number value specifying vertical position.</param>
		/// <param name="w" type="Number">Type: Number&#10;A number value specifying the component's width.</param>
		/// <param name="h" type="Number">Type: Number&#10;A number value specifying the component's height.</param>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
	},
	arrangeInRect: function(child, context, x, y, w, h) {
		/// <summary>Arranges a child component in specified layout rectangle.</summary>
		/// <param name="child" type="Component">Type: Component&#10;A Component instance specifying the child to arrange.</param>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
		/// <param name="x" type="Number">Type: Number&#10;Layout rectangle's horizontal position.</param>
		/// <param name="y" type="Number">Type: Number&#10;Layout rectangle's vertical position.</param>
		/// <param name="w" type="Number">Type: Number&#10;Layout rectangle's width.</param>
		/// <param name="h" type="Number">Type: Number&#10;Layout rectangle's height.</param>
	},
	createController: function(context) {
		/// <summary>Returns a ComponentController used to interact with this component.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
		/// <returns type="ComponentController">Type: ComponentController&#10;Instance of a ComponentController -derived class.</returns>
	},
	draw: function(context) {
		/// <summary>Draws this component in specified RenderContext.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
	},
	getCursorHint: function(x, y) {
		/// <summary>Invoked while the mouse is moved to let your application set the mouse cursor.</summary>
		/// <param name="x" type="Number">Type: Number&#10;A double value specifying the horizontal position of mouse pointer.</param>
		/// <param name="y" type="Number">Type: Number&#10;A double value specifying the vertical position of mouse pointer.</param>
		/// <returns type="CursorHint">Type: CursorHint&#10;A member of the CursorHint enumeration.</returns>
	},
	hitTest: function(x, y) {
		/// <summary>Returns the component containing specified point.</summary>
		/// <param name="x" type="Number">Type: Number&#10;X coordinate of the point to test.</param>
		/// <param name="y" type="Number">Type: Number&#10;Y coordinate of the point to test.</param>
		/// <returns type="Component">Type: Component&#10;A Component instance if one contains the point, or null otherwise.</returns>
	},
	invalidate: function(rect) {
		/// <summary>Invalidates the appearance of this component and calls its Draw method at next draw operation.</summary>
		/// <param name="rect" type="MindFusion.Drawing.Rect" optional="true">Optional. Type: Rect&#10;A RectD instance specifying the invalid rectangle.</param>
	},
	invalidateLayout: function() {
		/// <summary>Invalidates the current layout and runs a new layout pass before next draw operation.</summary>
	},
	localToRoot: function(point) {
		/// <summary>Transforms the specified point to the coordinate system of the root panel.</summary>
		/// <param name="point" type="MindFusion.Drawing.Point">Type: Point&#10;A Point instance containing coordinates local to this component.</param>
		/// <returns type="MindFusion.Drawing.Point">Type: Point&#10;A Point instance containing coordinates relative to the root panel.</returns>
	},
	max: function(value1, value2) {
		/// <summary>Returns the larger of specified values.</summary>
		/// <param name="value1" type="Number">Type: Number&#10;The first value to compare.</param>
		/// <param name="value2" type="Number">Type: Number&#10;The second value to compare.</param>
		/// <returns type="Number">Type: Number&#10;A nullable number value representing the larger value.</returns>
	},
	measure: function(maxWidth, maxHeight, context) {
		/// <summary>Measures the desired size of this component.</summary>
		/// <param name="maxWidth" type="Number">Type: Number&#10;The maximum width provided by parent component.</param>
		/// <param name="maxHeight" type="Number">Type: Number&#10;The maximum height provided by parent component.</param>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
	},
	rootToLocal: function(point) {
		/// <summary>Transforms the specified point to the coordinate system of this component.</summary>
		/// <param name="point" type="MindFusion.Drawing.Point">Type: Point&#10;A Point instance containing coordinates relative to the root panel.</param>
		/// <returns type="MindFusion.Drawing.Point">Type: Point&#10;A Point instance containing coordinates local to this component.</returns>
	},
	visit: function(visitor) {
		/// <summary>Implements the visitor design pattern.</summary>
		/// <param name="visitor" type="ComponentVisitor">Type: ComponentVisitor&#10;An instance of a ComponentVisitor -derived class.</param>
	}
};
MindFusion.Charting.Components.Component.__class = true;

MindFusion.Charting.Components.ComponentVisitor.prototype = {
	visitPanel: function(panel) {
		/// <summary>Visits a Panel component.</summary>
		/// <param name="panel" type="void">Type: void&#10;A Panel instance.</param>
	},
	visitPlot: function(plot) {
		/// <summary>Visits a Plot component.</summary>
		/// <param name="plot" type="Plot">Type: Plot&#10;A Plot instance.</param>
	}
};
MindFusion.Charting.Components.ComponentVisitor.__class = true;

MindFusion.Charting.Components.CursorHint = {
		/// <summary>Specifies what mouse cursor to display while a user interacts with the control.</summary>
		/// <field name="CounterDiagonalResize">Type: Int32&#10;Indicates the cursor specified by the CounterDiagonalResize property.</field>
		/// <field name="DiagonalResize">Type: Int32&#10;Indicates the cursor specified by the DiagonalResize property.</field>
		/// <field name="Disallow">Type: Int32&#10;Indicates the cursor specified by the DisallowCursor property.</field>
		/// <field name="DontChange">Type: Int32&#10;Indicates the cursor specified by the Cursor property.</field>
		/// <field name="HorizontalResize">Type: Int32&#10;Indicates the cursor specified by the HorizontalResizeCursor property.</field>
		/// <field name="Move">Type: Int32&#10;Indicates the cursor specified by the MoveCursor property.</field>
		/// <field name="Pointer">Type: Int32&#10;Indicates the cursor specified by the PointerCursor property.</field>
		/// <field name="Rotate">Type: Int32&#10;Indicates the cursor specified by the RotateCursor property.</field>
		/// <field name="VerticalResize">Type: Int32&#10;Indicates the cursor specified by the VerticalResize property.</field>
	CounterDiagonalResize: 0,
	DiagonalResize: 1,
	Disallow: 2,
	DontChange: 3,
	HorizontalResize: 4,
	Move: 5,
	Pointer: 6,
	Rotate: 7,
	VerticalResize: 8
}
MindFusion.Charting.Components.CursorHint.__enum = true;

MindFusion.Charting.Components.GridColumn.prototype = {
	measuredSize: function() {
		/// <summary>Returns the column's measured width.</summary>
		/// <returns type="Number">Type: Number&#10;A number value representing the column's width.</returns>
	},
	relativeSize: function() {
		/// <summary>Gets whether the column should be sized relatively to other columns in the grid panel.</summary>
		/// <returns type="Boolean">Type: Boolean&#10;true to apply relative size to this column, or false otherwise.</returns>
	},
	setPos: function(value) {
		/// <summary>Sets the column's position.</summary>
		/// <param name="value" type="Number">Type: Number&#10;X coordinate of the column.</param>
	}
};
MindFusion.Charting.Components.GridColumn.__class = true;

MindFusion.Charting.Components.GridPanel.prototype = {
	arrange: function(x, y, w, h, context) {
		/// <summary>Component.Arrange override. Sets the location and size of this panel and arranges its child components.</summary>
		/// <param name="x" type="void">Type: void&#10;A number value specifying horizontal position.</param>
		/// <param name="y" type="void">Type: void&#10;A number value specifying vertical position.</param>
		/// <param name="w" type="void">Type: void&#10;A number value specifying the component's width.</param>
		/// <param name="h" type="void">Type: void&#10;A number value specifying the component's height.</param>
		/// <param name="context" type="void">Type: void&#10;A RenderContext instance.</param>
	},
	measure: function(maxWidth, maxHeight, context) {
		/// <summary>Panel.Measure override. Measures the desired size of this panel and its child components.</summary>
		/// <param name="maxWidth" type="void">Type: void&#10;The maximum width provided by parent component.</param>
		/// <param name="maxHeight" type="void">Type: void&#10;The maximum height provided by parent component.</param>
		/// <param name="context" type="void">Type: void&#10;A RenderContext instance.</param>
	}
};
MindFusion.Charting.Components.GridPanel.__class = true;

MindFusion.Charting.Components.GridRow.prototype = {
	measuredSize: function() {
		/// <summary>Returns the row's measured height.</summary>
	},
	relativeSize: function() {
		/// <summary>Gets whether the row should be sized relatively to other rows in the grid panel.</summary>
	},
	setPos: function(value) {
		/// <summary>Sets the row's position.</summary>
		/// <param name="value" type="void">Type: void&#10;Y coordinate of the row.</param>
	}
};
MindFusion.Charting.Components.GridRow.__class = true;

MindFusion.Charting.Components.HitTestVisibility = {
		/// <summary>Identifies hit-test visibility of a component.</summary>
		/// <field name="Children">Type: Int32&#10;Only hit-test child components.</field>
		/// <field name="HitTestVisibility">Type: Int32&#10;Do not participate in hit-testing.</field>
		/// <field name="SelfAndChildren">Type: Int32&#10;Hit-test this component and its children.</field>
	Children: 0,
	HitTestVisibility: 1,
	SelfAndChildren: 2
}
MindFusion.Charting.Components.HitTestVisibility.__enum = true;

MindFusion.Charting.Components.ImageComponent.prototype = {
	draw: function(context) {
		/// <summary>Component.Draw override. Draws associated Image in specified RenderContext.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
	},
	measure: function(maxWidth, maxHeight, context) {
		/// <summary>Component.Measure override. Measures the desired size of this component.</summary>
		/// <param name="maxWidth" type="Number">Type: Number&#10;The maximum width provided by parent component.</param>
		/// <param name="maxHeight" type="Number">Type: Number&#10;The maximum height provided by parent component.</param>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
	}
};
MindFusion.Charting.Components.ImageComponent.__class = true;

MindFusion.Charting.Components.LayoutAlignment = {
		/// <summary>Indicates how child components are aligned within the layout rectangle allocated to them by their parent component.</summary>
		/// <field name="Center">Type: Int32&#10;Center the child component.</field>
		/// <field name="Far">Type: Int32&#10;Align the child component to the right or bottom side.</field>
		/// <field name="Near">Type: Int32&#10;Align the child component to the left or top side.</field>
		/// <field name="Stretch">Type: Int32&#10;Stretch the child component.</field>
	Center: 0,
	Far: 1,
	Near: 2,
	Stretch: 3
}
MindFusion.Charting.Components.LayoutAlignment.__enum = true;

MindFusion.Charting.Components.LengthType = {
		/// <summary>Indicates how GridPanel determines dimensions of its rows and columns.</summary>
		/// <field name="Auto">Type: Int32&#10;The row or column is auto-sized to fit its child components.</field>
		/// <field name="Relative">Type: Int32&#10;The size of relative elements is calculated from available space in the GridPanel proportionally to the number of other relative elements.</field>
	Auto: 0,
	Relative: 1
}
MindFusion.Charting.Components.LengthType.__enum = true;

MindFusion.Charting.Components.Orientation = {
		/// <summary>Identifies layout orientation.</summary>
		/// <field name="Horizontal">Type: Int32&#10;Horizontal orientation.</field>
		/// <field name="Vertical">Type: Int32&#10;Vertical orientation.</field>
	Horizontal: 0,
	Vertical: 1
}
MindFusion.Charting.Components.Orientation.__enum = true;

MindFusion.Charting.Components.Panel.prototype = {
	draw: function(context) {
		/// <summary>Component.Draw override. Draws child components in specified RenderContext.</summary>
		/// <param name="context" type="void">Type: void&#10;A RenderContext instance.</param>
	},
	hitTest: function(x, y) {
		/// <summary>Component.HitTest override. Returns the component containing specified point.</summary>
		/// <param name="x" type="Number">Type: Number&#10;X coordinate of the point to test.</param>
		/// <param name="y" type="Number">Type: Number&#10;Y coordinate of the point to test.</param>
		/// <returns type="Component">Type: Component&#10;A Component instance if one contains the point, or null otherwise.</returns>
	},
	invalidate: function(rect) {
		/// <summary>Component.Invalidate override. Invalidates the appearance this panel and calls its Draw method at next draw operation.</summary>
		/// <param name="rect" type="MindFusion.Drawing.Rect" optional="true">Optional. Type: Rect&#10;A Rect instance specifying the invalid rectangle.</param>
	},
	invalidateLayout: function() {
		/// <summary>Component.InvalidateLayout override. Invalidates the current layout and runs a new layout pass before next draw operation.</summary>
	},
	measure: function(maxWidth, maxHeight, context) {
		/// <summary>Component.Measure override. Measures the desired size of this panel and its child components.</summary>
		/// <param name="maxWidth" type="void">Type: void&#10;The maximum width provided by parent component.</param>
		/// <param name="maxHeight" type="void">Type: void&#10;The maximum height provided by parent component.</param>
		/// <param name="context" type="void">Type: void&#10;A RenderContext instance.</param>
	},
	visit: function(visitor) {
		/// <summary>Component.Visit override. Implements the visitor design pattern.</summary>
		/// <param name="visitor" type="void">Type: void&#10;An instance of a ComponentVisitor -derived class.</param>
	}
};
MindFusion.Charting.Components.Panel.__class = true;

MindFusion.Charting.Components.RangeSelector.prototype = {
	arrange: function(x, y, w, h, context) {
		/// <summary>Component.Arrange override. Sets the location and size of this component relatively to its parent.</summary>
		/// <param name="x" type="Number">Type: Number&#10;A number value specifying horizontal position.</param>
		/// <param name="y" type="Number">Type: Number&#10;A number value specifying vertical position.</param>
		/// <param name="w" type="Number">Type: Number&#10;A number value specifying the component's width.</param>
		/// <param name="h" type="Number">Type: Number&#10;A number value specifying the component's height.</param>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
	},
	createController: function(context) {
		/// <summary>Component.CreateController override. Returns a controller used to interact with this component.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
		/// <returns type="ComponentController">Type: ComponentController&#10;Instance of a ComponentController -derived class.</returns>
	},
	draw: function(context) {
		/// <summary>Component.Draw override. Draws this component in specified RenderContext.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
	},
	measure: function(maxWidth, maxHeight, context) {
		/// <summary>Component.Measure override. Measures the desired size of this component.</summary>
		/// <param name="maxWidth" type="Number">Type: Number&#10;The maximum width provided by parent component.</param>
		/// <param name="maxHeight" type="Number">Type: Number&#10;The maximum height provided by parent component.</param>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
	}
};
MindFusion.Charting.Components.RangeSelector.__class = true;

MindFusion.Charting.Components.SimplePanel.prototype = {
	arrange: function(x, y, w, h, context) {
		/// <summary>Component.Arrange override. Sets the location and size of this panel and arranges its child components.</summary>
		/// <param name="x" type="Number">Type: Number&#10;A number value specifying horizontal position.</param>
		/// <param name="y" type="Number">Type: Number&#10;A number value specifying vertical position.</param>
		/// <param name="w" type="Number">Type: Number&#10;A number value specifying the component's width.</param>
		/// <param name="h" type="Number">Type: Number&#10;A number value specifying the component's height.</param>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
	},
	measure: function(maxWidth, maxHeight, context) {
		/// <summary>Panel.Measure override. Measures the desired size of this panel and its child components.</summary>
		/// <param name="maxWidth" type="Number">Type: Number&#10;The maximum width provided by parent component.</param>
		/// <param name="maxHeight" type="Number">Type: Number&#10;The maximum height provided by parent component.</param>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
	}
};
MindFusion.Charting.Components.SimplePanel.__class = true;

MindFusion.Charting.Components.StackPanel.prototype = {
	arrange: function(x, y, w, h, context) {
		/// <summary>Component.Arrange override. Sets the location and size of this panel and arranges its child components.</summary>
		/// <param name="x" type="Number">Type: Number&#10;A number value specifying horizontal position.</param>
		/// <param name="y" type="Number">Type: Number&#10;A number value specifying vertical position.</param>
		/// <param name="w" type="Number">Type: Number&#10;A number value specifying the component's width.</param>
		/// <param name="h" type="Number">Type: Number&#10;A number value specifying the component's height.</param>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
	},
	measure: function(maxWidth, maxHeight, context) {
		/// <summary>Panel.Measure override. Measures the desired size of this panel and its child components.</summary>
		/// <param name="maxWidth" type="Number">Type: Number&#10;The maximum width provided by parent component.</param>
		/// <param name="maxHeight" type="Number">Type: Number&#10;The maximum height provided by parent component.</param>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
	}
};
MindFusion.Charting.Components.StackPanel.__class = true;

MindFusion.Charting.Components.TextComponent.prototype = {
	draw: function(context) {
		/// <summary>Component.Draw override. Draws associated Text in specified RenderContext.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
	},
	measure: function(maxWidth, maxHeight, context) {
		/// <summary>Component.Measure override. Measures the desired size of this component.</summary>
		/// <param name="maxWidth" type="Number">Type: Number&#10;The maximum width provided by parent component.</param>
		/// <param name="maxHeight" type="Number">Type: Number&#10;The maximum height provided by parent component.</param>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
	}
};
MindFusion.Charting.Components.TextComponent.__class = true;

MindFusion.Charting.Components.Visibility = {
		/// <summary>Identifies visibility of components.</summary>
		/// <field name="Collapsed">Type: Int32&#10;The component is hidden and does not participate in layout measurements.</field>
		/// <field name="Hidden">Type: Int32&#10;The component is hidden but participates in layout measurements.c</field>
		/// <field name="Visible">Type: Int32&#10;The component is visible.</field>
	Collapsed: 0,
	Hidden: 1,
	Visible: 2
}
MindFusion.Charting.Components.Visibility.__enum = true;

MindFusion.Charting.Controls.AreaChart.prototype = {
};
MindFusion.Charting.Controls.AreaChart.__class = true;

MindFusion.Charting.Controls.BarChart.prototype = {
	createPlot: function() {
		/// <summary>Chart.CreatePlot override. Creates the Plot type corresponding to this chart.</summary>
		/// <returns type="Plot">Type: Plot&#10;An instance of the Plot2D class.</returns>
	}
};
MindFusion.Charting.Controls.BarChart.__class = true;

MindFusion.Charting.Controls.BarChart3D.prototype = {
	createPlot: function() {
		/// <summary>Chart.CreatePlot override. Creates the Plot type corresponding to this chart.</summary>
		/// <returns type="Plot">Type: Plot&#10;An instance of the Plot3D class.</returns>
	}
};
MindFusion.Charting.Controls.BarChart3D.__class = true;

MindFusion.Charting.Controls.BiaxialChart.prototype = {
	createRenderContext: function(graphics, clipRect) {
		/// <summary>Dashboard.CreateRenderContext override. Creates a RenderContext instance.</summary>
		/// <param name="graphics" type="MindFusion.Charting.Drawing.Graphics">Type: Graphics&#10;An Graphics surface where dashboard elements should be rendered.</param>
		/// <param name="clipRect" type="MindFusion.Drawing.Rect">Type: Rect&#10;The current clip rectangle.</param>
		/// <returns type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</returns>
	},
	resetZoom: function() {
		/// <summary>Chart.resetZoom override. Resets zoom level to original data range.</summary>
	},
	zoomOut: function() {
		/// <summary>Chart.zoomOut override. Zooms out of current data range.</summary>
	}
};
MindFusion.Charting.Controls.BiaxialChart.__class = true;

MindFusion.Charting.Controls.BubbleChart.prototype = {
};
MindFusion.Charting.Controls.BubbleChart.__class = true;

MindFusion.Charting.Controls.CandlestickChart.prototype = {
};
MindFusion.Charting.Controls.CandlestickChart.__class = true;

MindFusion.Charting.Controls.Chart.prototype = {
	createPlot: function() {
		/// <summary>Creates the Plot type corresponding to this chart.</summary>
		/// <returns type="Plot">Type: Plot&#10;An instance of Plot -derived class.</returns>
	},
	onPaddingChanged: function(e) {
		/// <summary>Control.OnPaddingChanged override.</summary>
		/// <param name="e" type="EventArgs">Type: EventArgs&#10;An EventArgs instance.</param>
	},
	onSizeChanged: function(e) {
		/// <summary>Control.OnSizeChanged override.</summary>
		/// <param name="e" type="EventArgs">Type: EventArgs&#10;An EventArgs instance.</param>
	},
	resetZoom: function() {
		/// <summary>Resets zoom level to original data range.</summary>
	},
	zoomOut: function() {
		/// <summary>Zooms out of current data range.</summary>
	}
};
MindFusion.Charting.Controls.Chart.__class = true;

MindFusion.Charting.Controls.Dashboard.prototype = {
	createRenderContext: function(graphics, clipRect) {
		/// <summary>Creates a RenderContext instance.</summary>
		/// <param name="graphics" type="MindFusion.Charting.Drawing.Graphics">Type: Graphics&#10;A Graphics surface where dashboard elements should be rendered.</param>
		/// <param name="clipRect" type="MindFusion.Drawing.Rect">Type: Rect&#10;The current clip rectangle.</param>
		/// <returns type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</returns>
	},
	dataBind: function() {
		/// <summary>Binds the chart to current DataSource.</summary>
	},
	draw: function() {
		/// <summary>Draws the dashboard control.</summary>
	},
	fromJson: function(json) {
		/// <summary>Deserializes the control's data from JSON string.</summary>
		/// <param name="json" type="void">Type: void&#10;</param>
	},
	invalidate: function(rect, panel) {
		/// <summary>Implements RootControl.InvalidateLayout. Invalidates the specified region of a component.</summary>
		/// <param name="rect" type="RectD" optional="true">Optional. Type: RectD&#10;The area to invalidate and redraw.</param>
		/// <param name="panel" type="Components.Component" optional="true">Optional. Type: Component&#10;The reference Component.</param>
	},
	invalidateLayout: function(panel) {
		/// <summary>Implements RootControl.InvalidateLayout. Invalidates layout of specified component.</summary>
		/// <param name="panel" type="Components.Component">Type: Component&#10;The component to invalidate.</param>
	},
	onClick: function(e) {
		/// <summary>Raises the DataItemClicked event if the user has clicked on data element in a plot.</summary>
		/// <param name="e" type="MouseEvent">Type: MouseEvent&#10;A MouseEvent instance.</param>
	},
	onMouseDown: function(e) {
		/// <summary>Handles the HTMLCanvasElement mousedown event.</summary>
		/// <param name="e" type="MouseEvent">Type: MouseEvent&#10;A MouseEvent instance.</param>
	},
	onMouseMove: function(e) {
		/// <summary>Handles the HTMLCanvasElement mousemove event.</summary>
		/// <param name="e" type="MouseEvent">Type: MouseEvent&#10;A MouseEvent instance.</param>
	},
	onMouseUp: function(e) {
		/// <summary>Handles the HTMLCanvasElement mouseup event.</summary>
		/// <param name="e" type="MouseEvent">Type: MouseEvent&#10;A MouseEvent instance.</param>
	},
	onResize: function(e) {
		/// <summary>Control.OnResize override. Invalidates the layout of child components and runs a new layout pass.</summary>
		/// <param name="e" type="EventArgs">Type: EventArgs&#10;An EventArgs instance.</param>
	},
	toJson: function() {
		/// <summary>Serializes the control's data to JSON string.</summary>
	}
};
MindFusion.Charting.Controls.Dashboard.__class = true;

MindFusion.Charting.Controls.FunnelChart.prototype = {
};
MindFusion.Charting.Controls.FunnelChart.__class = true;

MindFusion.Charting.Controls.LayoutBuilder.prototype = {
	create1By2ColumnLayout: function(col1, col2row1, col2row2) {
		/// <summary>Creates a two-column stack panel whose first column is a vertical stack of two components.</summary>
		/// <param name="col1" type="Component">Type: Component&#10;The component in first column.</param>
		/// <param name="col2row1" type="Component">Type: Component&#10;The first component in second column.</param>
		/// <param name="col2row2" type="Component">Type: Component&#10;The second component in second column.</param>
		/// <returns type="StackPanel">Type: StackPanel&#10;A StackPanel instance.</returns>
	},
	create1By2RowLayout: function(row1, row2col1, row2col2) {
		/// <summary>Creates a two-row stack panel whose second row is a horizontal stack of two components.</summary>
		/// <param name="row1" type="Component">Type: Component&#10;The component on first row.</param>
		/// <param name="row2col1" type="Component">Type: Component&#10;The first component on second row.</param>
		/// <param name="row2col2" type="Component">Type: Component&#10;The second component on second row.</param>
		/// <returns type="StackPanel">Type: StackPanel&#10;A StackPanel instance.</returns>
	},
	create2By1ColumnLayout: function(col1row1, col1row2, col2) {
		/// <summary>Creates a two-column stack panel whose first column is a vertical stack of two components.</summary>
		/// <param name="col1row1" type="Component">Type: Component&#10;The first component in first column.</param>
		/// <param name="col1row2" type="Component">Type: Component&#10;The second component in first column.</param>
		/// <param name="col2" type="Component">Type: Component&#10;The component in second column.</param>
		/// <returns type="StackPanel">Type: StackPanel&#10;A StackPanel instance.</returns>
	},
	create2By1RowLayout: function(row1col1, row1col2, row2) {
		/// <summary>Creates a two-row stack panel whose first row is a horizontal stack of two components.</summary>
		/// <param name="row1col1" type="Component">Type: Component&#10;The first component on first row.</param>
		/// <param name="row1col2" type="Component">Type: Component&#10;The second component on first row.</param>
		/// <param name="row2" type="Component">Type: Component&#10;The component on first row.</param>
		/// <returns type="StackPanel">Type: StackPanel&#10;A StackPanel instance.</returns>
	},
	create2By2Layout: function(row1col1, row1col2, row2col1, row2col2) {
		/// <summary>Creates horizontal stack panels for components on same row and adds them to a vertical stack panel.</summary>
		/// <param name="row1col1" type="Component">Type: Component&#10;The first component on first row.</param>
		/// <param name="row1col2" type="Component">Type: Component&#10;The second component on first row.</param>
		/// <param name="row2col1" type="Component">Type: Component&#10;The first component on second row.</param>
		/// <param name="row2col2" type="Component">Type: Component&#10;The second component on second row.</param>
		/// <returns type="StackPanel">Type: StackPanel&#10;A StackPanel instance.</returns>
	},
	createAndAdd1By2ColumnLayout: function(col1, col2row1, col2row2) {
		/// <summary>Creates a two-column stack panel whose first column is a vertical stack of two components.The panel is automatically added to the dashboard's LayoutPanel.</summary>
		/// <param name="col1" type="Component">Type: Component&#10;The component in first column.</param>
		/// <param name="col2row1" type="Component">Type: Component&#10;The first component in second column.</param>
		/// <param name="col2row2" type="Component">Type: Component&#10;The second component in second column.</param>
		/// <returns type="StackPanel">Type: StackPanel&#10;A StackPanel instance.</returns>
	},
	createAndAdd1By2RowLayout: function(row1, row2col1, row2col2) {
		/// <summary>Creates a two-row stack panel whose second row is a horizontal stack of two components.The panel is automatically added to the dashboard's LayoutPanel.</summary>
		/// <param name="row1" type="Component">Type: Component&#10;The component on first row.</param>
		/// <param name="row2col1" type="Component">Type: Component&#10;The first component on second row.</param>
		/// <param name="row2col2" type="Component">Type: Component&#10;The second component on second row.</param>
		/// <returns type="StackPanel">Type: StackPanel&#10;A StackPanel instance.</returns>
	},
	createAndAdd2By1ColumnLayout: function(col1row1, col1row2, col2) {
		/// <summary>Creates a two-column stack panel whose first column is a vertical stack of two components.The panel is automatically added to the dashboard's LayoutPanel.</summary>
		/// <param name="col1row1" type="Component">Type: Component&#10;The first component in first column.</param>
		/// <param name="col1row2" type="Component">Type: Component&#10;The second component in first column.</param>
		/// <param name="col2" type="Component">Type: Component&#10;The component in second column.</param>
		/// <returns type="StackPanel">Type: StackPanel&#10;A StackPanel instance.</returns>
	},
	createAndAdd2By1RowLayout: function(row1col1, row1col2, row2) {
		/// <summary>Creates a two-row stack panel whose first row is a horizontal stack of two components.The panel is automatically added to the dashboard's LayoutPanel.</summary>
		/// <param name="row1col1" type="Component">Type: Component&#10;The first component on first row.</param>
		/// <param name="row1col2" type="Component">Type: Component&#10;The second component on first row.</param>
		/// <param name="row2" type="Component">Type: Component&#10;The component on first row.</param>
		/// <returns type="StackPanel">Type: StackPanel&#10;A StackPanel instance.</returns>
	},
	createAndAdd2By2Layout: function(row1col1, row1col2, row2col1, row2col2) {
		/// <summary>Creates horizontal stack panels for components on same row and adds them to a vertical stack panel.The panel is automatically added to the dashboard's LayoutPanel.</summary>
		/// <param name="row1col1" type="Component">Type: Component&#10;The first component on first row.</param>
		/// <param name="row1col2" type="Component">Type: Component&#10;The second component on first row.</param>
		/// <param name="row2col1" type="Component">Type: Component&#10;The first component on second row.</param>
		/// <param name="row2col2" type="Component">Type: Component&#10;The second component on second row.</param>
		/// <returns type="StackPanel">Type: StackPanel&#10;A StackPanel instance.</returns>
	},
	createAndAddPlotAndAxes: function(plot, top, left, bottom, right) {
		/// <summary>Creates a GridPanel containing the specified plot and axis renderers.The panel is automatically added to the dashboard's LayoutPanel.</summary>
		/// <param name="plot" type="Plot2D">Type: Plot2D&#10;A Plot2D instance.</param>
		/// <param name="top" type="XAxisRenderer">Type: XAxisRenderer&#10;An array of XAxisRenderer components that should be placed at top side of the plot.</param>
		/// <param name="left" type="YAxisRenderer">Type: YAxisRenderer&#10;An array of YAxisRenderer components that should be placed at left side of the plot.</param>
		/// <param name="bottom" type="XAxisRenderer">Type: XAxisRenderer&#10;An array of XAxisRenderer components that should be placed at bottom side of the plot.</param>
		/// <param name="right" type="YAxisRenderer">Type: YAxisRenderer&#10;An array of YAxisRenderer components that should be placed at right side of the plot.</param>
		/// <returns type="GridPanel">Type: GridPanel&#10;A GridPanel instance.</returns>
	},
	createAndAddPlotWithBottomAndLeftAxes: function(plot, bottom, left) {
		/// <summary>Creates a GridPanel containing the specified plot and axis renderers.The panel is automatically added to the dashboard's LayoutPanel.</summary>
		/// <param name="plot" type="Plot2D">Type: Plot2D&#10;A Plot2D instance.</param>
		/// <param name="bottom" type="XAxisRenderer">Type: XAxisRenderer&#10;An XAxisRenderer that should be placed at bottom side of the plot.</param>
		/// <param name="left" type="YAxisRenderer">Type: YAxisRenderer&#10;A YAxisRenderer that should be placed at left side of the plot.</param>
		/// <returns type="GridPanel">Type: GridPanel&#10;A GridPanel instance.</returns>
	},
	createAndAddPlotWithBottomAndRightAxes: function(plot, bottom, right) {
		/// <summary>Creates a GridPanel containing the specified plot and axis renderers.The panel is automatically added to the dashboard's LayoutPanel.</summary>
		/// <param name="plot" type="Plot2D">Type: Plot2D&#10;A Plot2D instance.</param>
		/// <param name="bottom" type="XAxisRenderer">Type: XAxisRenderer&#10;An XAxisRenderer that should be placed at bottom side of the plot.</param>
		/// <param name="right" type="YAxisRenderer">Type: YAxisRenderer&#10;A YAxisRenderer that should be placed at right side of the plot.</param>
		/// <returns type="GridPanel">Type: GridPanel&#10;A GridPanel instance.</returns>
	},
	createAndAddPlotWithTopAndLeftAxes: function(plot, top, left) {
		/// <summary>Creates a GridPanel containing the specified plot and axis renderers.The panel is automatically added to the dashboard's LayoutPanel.</summary>
		/// <param name="plot" type="Plot2D">Type: Plot2D&#10;A Plot2D instance.</param>
		/// <param name="top" type="XAxisRenderer">Type: XAxisRenderer&#10;An XAxisRenderer that should be placed at top side of the plot.</param>
		/// <param name="left" type="YAxisRenderer">Type: YAxisRenderer&#10;A YAxisRenderer that should be placed at left side of the plot.</param>
		/// <returns type="GridPanel">Type: GridPanel&#10;A GridPanel instance.</returns>
	},
	createAndAddPlotWithTopAndRightAxes: function(plot, top, right) {
		/// <summary>Creates a GridPanel containing the specified plot and axis renderers.The panel is automatically added to the dashboard's LayoutPanel.</summary>
		/// <param name="plot" type="Plot2D">Type: Plot2D&#10;A Plot2D instance.</param>
		/// <param name="top" type="XAxisRenderer">Type: XAxisRenderer&#10;An XAxisRenderer that should be placed at top side of the plot.</param>
		/// <param name="right" type="YAxisRenderer">Type: YAxisRenderer&#10;A YAxisRenderer that should be placed at right side of the plot.</param>
		/// <returns type="GridPanel">Type: GridPanel&#10;A GridPanel instance.</returns>
	},
	createLayout: function(horizontal, c1, c2, c3) {
		/// <summary>Creates a StackPanel for each array of components and adds it to a parent StackPanel with opposite orientation.</summary>
		/// <param name="horizontal" type="Boolean">Type: Boolean&#10;The orientation of the parent panel.</param>
		/// <param name="c1" type="Component">Type: Component&#10;The first stack of components.</param>
		/// <param name="c2" type="Component">Type: Component&#10;The second stack of components.</param>
		/// <param name="c3" type="Component">Type: Component&#10;The third stack of components.</param>
		/// <returns type="StackPanel">Type: StackPanel&#10;A StackPanel instance.</returns>
	},
	createPlotAndAxes: function(plot, top, left, bottom, right) {
		/// <summary>Creates a GridPanel containing the specified plot and axis renderers.</summary>
		/// <param name="plot" type="Plot2D">Type: Plot2D&#10;A Plot2D instance.</param>
		/// <param name="top" type="XAxisRenderer">Type: XAxisRenderer&#10;An array of XAxisRenderer components that should be placed at top side of the plot.</param>
		/// <param name="left" type="YAxisRenderer">Type: YAxisRenderer&#10;An array of YAxisRenderer components that should be placed at left side of the plot.</param>
		/// <param name="bottom" type="XAxisRenderer">Type: XAxisRenderer&#10;An array of XAxisRenderer components that should be placed at bottom side of the plot.</param>
		/// <param name="right" type="YAxisRenderer">Type: YAxisRenderer&#10;An array of YAxisRenderer components that should be placed at right side of the plot.</param>
		/// <returns type="GridPanel">Type: GridPanel&#10;A GridPanel instance.</returns>
	},
	createPlotWithBottomAndLeftAxes: function(plot, bottom, left) {
		/// <summary>Creates a GridPanel containing the specified plot and axis renderers.</summary>
		/// <param name="plot" type="Plot2D">Type: Plot2D&#10;A Plot2D instance.</param>
		/// <param name="bottom" type="XAxisRenderer">Type: XAxisRenderer&#10;An XAxisRenderer that should be placed at bottom side of the plot.</param>
		/// <param name="left" type="YAxisRenderer">Type: YAxisRenderer&#10;A YAxisRenderer that should be placed at left side of the plot.</param>
		/// <returns type="GridPanel">Type: GridPanel&#10;A GridPanel instance.</returns>
	},
	createPlotWithBottomAndRightAxes: function(plot, bottom, right) {
		/// <summary>Creates a GridPanel containing the specified plot and axis renderers.</summary>
		/// <param name="plot" type="Plot2D">Type: Plot2D&#10;A Plot2D instance.</param>
		/// <param name="bottom" type="XAxisRenderer">Type: XAxisRenderer&#10;An XAxisRenderer that should be placed at bottom side of the plot.</param>
		/// <param name="right" type="YAxisRenderer">Type: YAxisRenderer&#10;A YAxisRenderer that should be placed at right side of the plot.</param>
		/// <returns type="GridPanel">Type: GridPanel&#10;A GridPanel instance.</returns>
	},
	createPlotWithTopAndLeftAxes: function(plot, top, left) {
		/// <summary>Creates a GridPanel containing the specified plot and axis renderers.</summary>
		/// <param name="plot" type="Plot2D">Type: Plot2D&#10;A Plot2D instance.</param>
		/// <param name="top" type="XAxisRenderer">Type: XAxisRenderer&#10;An XAxisRenderer that should be placed at top side of the plot.</param>
		/// <param name="left" type="YAxisRenderer">Type: YAxisRenderer&#10;A YAxisRenderer that should be placed at left side of the plot.</param>
		/// <returns type="GridPanel">Type: GridPanel&#10;A GridPanel instance.</returns>
	},
	createPlotWithTopAndRightAxes: function(plot, top, right) {
		/// <summary>Creates a GridPanel containing the specified plot and axis renderers.</summary>
		/// <param name="plot" type="Plot2D">Type: Plot2D&#10;A Plot2D instance.</param>
		/// <param name="top" type="XAxisRenderer">Type: XAxisRenderer&#10;An XAxisRenderer that should be placed at top side of the plot.</param>
		/// <param name="right" type="YAxisRenderer">Type: YAxisRenderer&#10;A YAxisRenderer that should be placed at right side of the plot.</param>
		/// <returns type="GridPanel">Type: GridPanel&#10;A GridPanel instance.</returns>
	}
};
MindFusion.Charting.Controls.LayoutBuilder.__class = true;

MindFusion.Charting.Controls.LineChart.prototype = {
};
MindFusion.Charting.Controls.LineChart.__class = true;

MindFusion.Charting.Controls.PieChart.prototype = {
	createPlot: function() {
		/// <summary>Chart.CreatePlot override. Creates the Plot type corresponding to this chart.</summary>
		/// <returns type="Plot">Type: Plot&#10;An instance of the PolarPlot class.</returns>
	}
};
MindFusion.Charting.Controls.PieChart.__class = true;

MindFusion.Charting.Controls.RadarChart.prototype = {
	createPlot: function() {
		/// <summary>Chart.CreatePlot override. Creates the Plot type corresponding to this chart.</summary>
		/// <returns type="Plot">Type: Plot&#10;An instance of the RadarPlot class.</returns>
	}
};
MindFusion.Charting.Controls.RadarChart.__class = true;

MindFusion.Charting.Controls.ScatterChart.prototype = {
};
MindFusion.Charting.Controls.ScatterChart.__class = true;

MindFusion.Charting.Gauges.GaugeRenderer.prototype = {
	getDefaultPointerFill: function(pointer) {
		/// <summary>Gets the default pointer fill.</summary>
		/// <param name="pointer" type="void">Type: void&#10;</param>
	},
	getDefaultPointerStroke: function(pointer) {
		/// <summary>Gets the default pointer stroke.</summary>
		/// <param name="pointer" type="void">Type: void&#10;</param>
	}
};
MindFusion.Charting.Gauges.GaugeRenderer.__class = true;

MindFusion.Charting.Gauges.LinearGaugeController.prototype = {
	drawInteraction: function(graphics) {
		/// <summary>Implements ComponentController.DrawInteraction. Draws a representation of the current state of user interaction on specified IGraphics surface.</summary>
		/// <param name="graphics" type="IGraphics">A Graphics instance.</param>
	},
	getCursorHint: function(x, y) {
		/// <summary>For internal use.</summary>
		/// <param name="x" type="void">Type: void&#10;</param>
		/// <param name="y" type="void">Type: void&#10;</param>
		/// <returns type="CursorHint">Type: CursorHint&#10;A member of the CursorHint enumeration.</returns>
	},
	getRunningAnimation: function() {
		/// <summary>For internal use.</summary>
		/// <returns type="ComponentAnimation">Type: ComponentAnimation&#10;An instance of a ComponentAnimation -derived class.</returns>
	},
	onMouseDown: function(x, y) {
		/// <summary>Implements ComponentController.OnMouseDown. Called when the user presses a mouse button.</summary>
		/// <param name="x" type="Number">Type: Number&#10;A number value specifying the horizontal position of mouse pointer.</param>
		/// <param name="y" type="Number">Type: Number&#10;A number value specifying the vertical position of mouse pointer.</param>
	},
	onMouseMove: function(x, y) {
		/// <summary>Implements ComponentController.OnMouseMove. Called when the user moves the mouse.</summary>
		/// <param name="x" type="Number">Type: Number&#10;A number value specifying the horizontal position of mouse pointer.</param>
		/// <param name="y" type="Number">Type: Number&#10;A number value specifying the vertical position of mouse pointer.</param>
	},
	onMouseUp: function(x, y) {
		/// <summary>Implements ComponentController.OnMouseUp. Called when the user releases a mouse button.</summary>
		/// <param name="x" type="Number">Type: Number&#10;A number value specifying the horizontal position of mouse pointer.</param>
		/// <param name="y" type="Number">Type: Number&#10;A number value specifying the vertical position of mouse pointer.</param>
	},
	onMouseWheel: function(x, y, delta) {
		/// <summary>Implements ComponentController.OnMouseWheel. Called when the user scrolls with the middle mouse button.</summary>
		/// <param name="x" type="Number">Type: Number&#10;A number value specifying the horizontal position of mouse pointer.</param>
		/// <param name="y" type="Number">Type: Number&#10;A number value specifying the vertical position of mouse pointer.</param>
		/// <param name="delta" type="Number">Type: Number&#10;A number value specifying the amount and the direction for the mouse scroll.</param>
	}
};
MindFusion.Charting.Gauges.LinearGaugeController.__class = true;

MindFusion.Charting.Gauges.LinearGaugeRenderer.prototype = {
	arrange: function(x, y, w, h, context) {
		/// <summary>Component.Arrange override. Sets the location and size of this component relatively to its parent.</summary>
		/// <param name="x" type="Number">Type: Number&#10;A number value specifying horizontal position.</param>
		/// <param name="y" type="Number">Type: Number&#10;A number value specifying vertical position.</param>
		/// <param name="w" type="Number">Type: Number&#10;A number value specifying the component's width.</param>
		/// <param name="h" type="Number">Type: Number&#10;A number value specifying the component's height.</param>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
	},
	createController: function(context) {
		/// <summary>Component.CreateController override. Returns a ComponentController used to interact with this component.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
		/// <returns type="ComponentController">Type: ComponentController&#10;An instance of the LinearGaugeController class.</returns>
	},
	draw: function(context) {
		/// <summary>Component.Draw override. Draws this component in specified RenderContext.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
	},
	measure: function(maxWidth, maxHeight, context) {
		/// <summary>Component.Measure override. Measures the desired size of this component.</summary>
		/// <param name="maxWidth" type="Number">Type: Number&#10;The maximum width provided by parent component.</param>
		/// <param name="maxHeight" type="Number">Type: Number&#10;The maximum height provided by parent component.</param>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
	}
};
MindFusion.Charting.Gauges.LinearGaugeRenderer.__class = true;

MindFusion.Charting.Gauges.OvalGaugeController.prototype = {
	drawInteraction: function(graphics) {
		/// <summary>Implements ComponentController.DrawInteraction. Draws a representation of the current state of user interaction on specified IGraphics surface.</summary>
		/// <param name="graphics" type="IGraphics">A Graphics instance.</param>
	},
	getCursorHint: function(x, y) {
		/// <summary>For internal use.</summary>
		/// <param name="x" type="void">Type: void&#10;</param>
		/// <param name="y" type="void">Type: void&#10;</param>
		/// <returns type="CursorHint">Type: CursorHint&#10;A member of the CursorHint enumeration.</returns>
	},
	getRunningAnimation: function() {
		/// <summary>For internal use.</summary>
		/// <returns type="ComponentAnimation">Type: ComponentAnimation&#10;An instance of a ComponentAnimation -derived class.</returns>
	},
	onMouseDown: function(x, y) {
		/// <summary>Implements ComponentController.OnMouseDown. Called when the user presses a mouse button.</summary>
		/// <param name="x" type="Number">Type: Number&#10;A number value specifying the horizontal position of mouse pointer.</param>
		/// <param name="y" type="Number">Type: Number&#10;A number value specifying the vertical position of mouse pointer.</param>
	},
	onMouseMove: function(x, y) {
		/// <summary>Implements ComponentController.OnMouseMove. Called when the user moves the mouse.</summary>
		/// <param name="x" type="Number">Type: Number&#10;A number value specifying the horizontal position of mouse pointer.</param>
		/// <param name="y" type="Number">Type: Number&#10;A number value specifying the vertical position of mouse pointer.</param>
	},
	onMouseUp: function(x, y) {
		/// <summary>Implements ComponentController.OnMouseUp. Called when the user releases a mouse button.</summary>
		/// <param name="x" type="Number">Type: Number&#10;A number value specifying the horizontal position of mouse pointer.</param>
		/// <param name="y" type="Number">Type: Number&#10;A number value specifying the vertical position of mouse pointer.</param>
	},
	onMouseWheel: function(x, y, delta) {
		/// <summary>Implements ComponentController.OnMouseWheel. Called when the user scrolls with the middle mouse button.</summary>
		/// <param name="x" type="Number">Type: Number&#10;A number value specifying the horizontal position of mouse pointer.</param>
		/// <param name="y" type="Number">Type: Number&#10;A number value specifying the vertical position of mouse pointer.</param>
		/// <param name="delta" type="Number">Type: Number&#10;A number value specifying the amount and the direction for the mouse scroll.</param>
	}
};
MindFusion.Charting.Gauges.OvalGaugeController.__class = true;

MindFusion.Charting.Gauges.OvalGaugeRenderer.prototype = {
	arrange: function(x, y, w, h, context) {
		/// <summary>Component.Arrange override. Sets the location and size of this component relatively to its parent.</summary>
		/// <param name="x" type="Number">Type: Number&#10;A number value specifying horizontal position.</param>
		/// <param name="y" type="Number">Type: Number&#10;A number value specifying vertical position.</param>
		/// <param name="w" type="Number">Type: Number&#10;A number value specifying the component's width.</param>
		/// <param name="h" type="Number">Type: Number&#10;A number value specifying the component's height.</param>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
	},
	createController: function(context) {
		/// <summary>Component.CreateController override. Returns a ComponentController used to interact with this component.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
		/// <returns type="ComponentController">Type: ComponentController&#10;An instance of the OvalGaugeController class.</returns>
	},
	draw: function(context) {
		/// <summary>Component.Draw override. Draws this component in specified RenderContext.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
	},
	measure: function(maxWidth, maxHeight, context) {
		/// <summary>Component.Measure override. Measures the desired size of this component.</summary>
		/// <param name="maxWidth" type="Number">Type: Number&#10;The maximum width provided by parent component.</param>
		/// <param name="maxHeight" type="Number">Type: Number&#10;The maximum height provided by parent component.</param>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
	}
};
MindFusion.Charting.Gauges.OvalGaugeRenderer.__class = true;

MindFusion.Charting.ThreeD.Label3D.prototype = {
};
MindFusion.Charting.ThreeD.Label3D.__class = true;

MindFusion.Charting.ThreeD.LabelProjection.prototype = {
	drawAsProjection: function(context) {
		/// <summary>Draws this projection in specified RenderContext.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
	}
};
MindFusion.Charting.ThreeD.LabelProjection.__class = true;

MindFusion.Charting.ThreeD.Matrix3D.prototype = {
	fill: function(array) {
		/// <summary>Fills the matrix with an array, starting from the top left, filling horisontally.</summary>
		/// <param name="array" type="number">Type: number&#10;The array to be filled in the matrix.</param>
	},
	multiply: function(mat) {
		/// <summary>Multiplys the current matrix times a second matrix.</summary>
		/// <param name="mat" type="Matrix3D">Type: Matrix3D&#10;The right matrix.</param>
	},
	nullify: function() {
		/// <summary>Fills the matrix with zeros.</summary>
	},
};
MindFusion.Charting.ThreeD.Matrix3D.__class = true;

MindFusion.Charting.ThreeD.Matrix3D.Identety = function() {
	/// <summary>A 4x4 Identety Matrix</summary>
};
MindFusion.Charting.ThreeD.Matrix3D.multiply = function(m, n) {
	/// <summary>Multiplys 2 matrices.</summary>
	/// <param name="m" type="Matrix3D">Type: Matrix3D&#10;The left matrix.</param>
	/// <param name="n" type="Matrix3D">Type: Matrix3D&#10;The right matrix.</param>
};
MindFusion.Charting.ThreeD.Matrix3D.Perspective = function(filedOfView, aspectRatio, near, far) {
	/// <summary>A 4x4 matrix, allowing perspective and vercitile coordinates.</summary>
	/// <param name="filedOfView" type="number">Type: number&#10;The angle of the camera.</param>
	/// <param name="aspectRatio" type="number">Type: number&#10;The width devided by height of the viewing window.</param>
	/// <param name="near" type="number">Type: number&#10;The nearest coordinate, where the object will still be drawn.</param>
	/// <param name="far" type="number">Type: number&#10;The furthest coordinate, where the object will still be drawn.</param>
};
MindFusion.Charting.ThreeD.Matrix3D.RotateX = function(angle) {
	/// <summary>A 4x4 matrix, allowing rotation around the X axis.</summary>
	/// <param name="angle" type="number">Type: number&#10;The amount of rotation around the X axis in radians.</param>
};
MindFusion.Charting.ThreeD.Matrix3D.RotateY = function(angle) {
	/// <summary>A 4x4 matrix, allowing rotation around the Y axis.</summary>
	/// <param name="angle" type="number">Type: number&#10;The amount of rotation around the Y axis in radians.</param>
};
MindFusion.Charting.ThreeD.Matrix3D.RotateZ = function(angle) {
	/// <summary>A 4x4 matrix, allowing rotation around the Z axis.</summary>
	/// <param name="angle" type="number">Type: number&#10;The amount of rotation around the Z axis in radians.</param>
};
MindFusion.Charting.ThreeD.Matrix3D.Scale = function(width, height, depth) {
	/// <summary>A 4x4 matrix, allowing scaling.</summary>
	/// <param name="width" type="number">Type: number&#10;The amount of scaling on the X axis in percent/100.</param>
	/// <param name="height" type="number">Type: number&#10;The amount of scaling on the Y axis in percent/100.</param>
	/// <param name="depth" type="number">Type: number&#10;The amount of scaling on the Z axis in percent/100.</param>
};
MindFusion.Charting.ThreeD.Matrix3D.Translate = function(x, y, z) {
	/// <summary>A 4x4 matrix, allowing translation.</summary>
	/// <param name="x" type="number">Type: number&#10;The amount of translation on the X axis.</param>
	/// <param name="y" type="number">Type: number&#10;The amount of translation on the Y axis.</param>
	/// <param name="z" type="number">Type: number&#10;The amount of translation on the Z axis.</param>
};

MindFusion.Charting.ThreeD.Mesh3D.prototype = {
};
MindFusion.Charting.ThreeD.Mesh3D.__class = true;

MindFusion.Charting.ThreeD.Model3D.prototype = {
};
MindFusion.Charting.ThreeD.Model3D.__class = true;

MindFusion.Charting.ThreeD.Polygon3D.prototype = {
	drawAsProjection: function(context) {
		/// <summary>Draws this projection in specified RenderContext.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
	},
	midPoint: function() {
		/// <summary>Returns the polygon's middle point.</summary>
		/// <returns type="Point3D">Type: Point3D&#10;A Point3D instance representing the middle point.</returns>
	},
	normal: function() {
		/// <summary>Gets the polygon's normal vector.</summary>
		/// <returns type="Vector3D">Type: Vector3D&#10;A Vector3D representing the polygon's normal vector.</returns>
	},
	pointToPlaneDist: function(p) {
		/// <summary>Gets the distance from specified point to polygon's plane.</summary>
		/// <param name="p" type="Point3D">Type: Point3D&#10;A Point3D instance.</param>
		/// <returns type="Number">Type: Number&#10;A number value representing the distance.</returns>
	}
};
MindFusion.Charting.ThreeD.Polygon3D.__class = true;

MindFusion.Charting.ThreeD.Polygon3D.pointToPlaneDist = function(p, planePoint, planeNormal) {
	/// <summary>Gets the distance from specified point to specified plane.</summary>
	/// <param name="p" type="Point3D">Type: Point3D&#10;A Point3D instance.</param>
	/// <param name="planePoint" type="Point3D">Type: Point3D&#10;A point from the plane.</param>
	/// <param name="planeNormal" type="Vector3D">Type: Vector3D&#10;The plane's normal vector.</param>
	/// <returns type="Number">Type: Number&#10;A number value representing the distance.</returns>
};

MindFusion.Charting.ThreeD.Scene3D.prototype = {
	buildCuboid: function(x1, y1, z1, x2, y2, z2, brush) {
		/// <summary>Creates a cuboid model.</summary>
		/// <param name="x1" type="Number">Type: Number&#10;X coordinate of a corner point of the cuboid.</param>
		/// <param name="y1" type="Number">Type: Number&#10;Y coordinate of a corner point of the cuboid.</param>
		/// <param name="z1" type="Number">Type: Number&#10;Z coordinate of a corner point of the cuboid.</param>
		/// <param name="x2" type="Number">Type: Number&#10;X coordinate of diametrically opposite corner.</param>
		/// <param name="y2" type="Number">Type: Number&#10;Y coordinate of diametrically opposite corner.</param>
		/// <param name="z2" type="Number">Type: Number&#10;Z coordinate of diametrically opposite corner.</param>
		/// <param name="brush" type="MindFusion.Charting.Drawing.Brush">Type: Brush&#10;The Brush used to paint the cuboid model.</param>
		/// <returns type="Mesh3D">Type: Mesh3D&#10;A Mesh3D containing the cuboid faces.</returns>
	},
	draw: function(context) {
		/// <summary>Draws a projection of this scene in specified RenderContext.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
	}
};
MindFusion.Charting.ThreeD.Scene3D.__class = true;

MindFusion.Charting.ThreeD.Vector3D.prototype = {
	div: function(s) {
		/// <summary>Divides the vector by specified measure.</summary>
		/// <param name="s" type="Number">Type: Number&#10;A double value representing the divisor.</param>
		/// <returns type="Vector3D">Type: Vector3D&#10;A Vector3D representing the result.</returns>
	},
	length: function() {
		/// <summary>Calculates the length of this vector.</summary>
		/// <returns type="Number">Type: Number&#10;A double value representing the vector length.</returns>
	}
};
MindFusion.Charting.ThreeD.Vector3D.__class = true;

MindFusion.Charting.ThreeD.Vector3D.crossProduct = function(a, b) {
	/// <summary>Calculates the cross-product of two vectors.</summary>
	/// <param name="a" type="Vector3D">Type: Vector3D&#10;A Vector3D instance.</param>
	/// <param name="b" type="Vector3D">Type: Vector3D&#10;A Vector3D instance.</param>
	/// <returns type="Vector3D">Type: Vector3D&#10;A Vector3D representing the cross-product of specified vectors.</returns>
};

MindFusion.Charting.AnnotationRenderer.prototype = {
	draw: function(context) {
		/// <summary>SeriesRenderer.Draw override. Draws the series data in specified RenderContext.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
	}
};
MindFusion.Charting.AnnotationRenderer.__class = true;

MindFusion.Charting.AreaRenderer.prototype = {
	draw: function(context) {
		/// <summary>SeriesRenderer.Draw override. Draws the series data in specified RenderContext.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
	}
};
MindFusion.Charting.AreaRenderer.__class = true;

MindFusion.Charting.AreaStackRenderer.prototype = {
	draw: function(context) {
		/// <summary>SeriesRenderer.Draw override. Draws the series data in specified RenderContext.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
	}
};
MindFusion.Charting.AreaStackRenderer.__class = true;

MindFusion.Charting.Axis.prototype = {
	inRange: function(value) {
		/// <summary>Determines whether specified value is within the axis range.</summary>
		/// <param name="value" type="Number">Type: Number&#10;The number to check.</param>
		/// <returns type="Boolean">Type: Boolean&#10;true if value is inside the current axis range, or false otherwise.</returns>
	},
	mapValueToPixelX: function(value, viewSize) {
		/// <summary>Maps a value from this axis' coordinate system to a pixel position in specified view.</summary>
		/// <param name="value" type="Number">Type: Number&#10;A number value.</param>
		/// <param name="viewSize" type="Number">Type: Number&#10;The view size.</param>
		/// <returns type="Number">Type: Number&#10;X coordinate of pixel.</returns>
	},
	mapValueToPixelY: function(value, viewSize) {
		/// <summary>Maps a value from this axis' coordinate system to a pixel position in specified view.</summary>
		/// <param name="value" type="Number">Type: Number&#10;A number value.</param>
		/// <param name="viewSize" type="Number">Type: Number&#10;The view size.</param>
		/// <returns type="Number">Type: Number&#10;Y coordinate of pixel.</returns>
	},
	onPropertyChanged: function(propertyName) {
		/// <summary>Raises the PropertyChanged event.</summary>
		/// <param name="propertyName" type="String">Type: String&#10;Specifies the name of changed property.</param>
	}
};
MindFusion.Charting.Axis.__class = true;

MindFusion.Charting.AxisInfo.prototype = {
};
MindFusion.Charting.AxisInfo.__class = true;

MindFusion.Charting.AxisRenderer.prototype = {
	effectiveAxisDashStyle: function(context) {
		/// <summary>Gets the dash style of axis line strokes.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
		/// <returns type="MindFusion.Charting.Drawing.DashStyle">Type: DashStyle&#10;A member of the DashStyle enumeration.</returns>
	},
	effectiveAxisStroke: function(context) {
		/// <summary>Gets the Brush that should be used to stroke axis lines.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
		/// <returns type="MindFusion.Charting.Drawing.Brush">Type: Brush&#10;A Brush instance.</returns>
	},
	effectiveAxisStrokeThickness: function(context) {
		/// <summary>Gets the thickness of axis line strokes.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
		/// <returns type="Number">Type: Number&#10;A number value.</returns>
	},
	effectiveLabelBrush: function(context) {
		/// <summary>Gets the Brush that should be used to draw axis labels.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
		/// <returns type="SysBrush">Type: SysBrush&#10;A System.Brush instance.</returns>
	},
	effectiveLabelFont: function(context) {
		/// <summary>Gets the Font that should be used to draw axis labels.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
		/// <returns type="MindFusion.Drawing.Font">Type: Font&#10;A System.Drawing.Font instance.</returns>
	},
	effectivePen: function(context) {
		/// <summary>Gets the Pen that should be used to draw axis lines.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
		/// <returns type="MindFusion.Charting.Drawing.Pen">Type: Pen&#10;A System.Pen instance.</returns>
	},
	effectiveTitleBrush: function(context) {
		/// <summary>Gets the Brush that should be used to draw the axis Title.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
		/// <returns type="SysBrush">Type: SysBrush&#10;A System.Brush instance.</returns>
	},
	effectiveTitleFont: function(context) {
		/// <summary>Gets the Font that should be used to draw the axis Title.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
		/// <returns type="MindFusion.Drawing.Font">Type: Font&#10;A System.Drawing.Font instance.</returns>
	}
};
MindFusion.Charting.AxisRenderer.__class = true;

MindFusion.Charting.BarLayout = {
		/// <summary>Identifies supported bar placements when rendering multiple series.</summary>
		/// <field name="Overlay">Type: Int32&#10;Render elements at same index from all series as overlaid bars.</field>
		/// <field name="SideBySide">Type: Int32&#10;Render elements at same index from all series as a group of side-by-side bars.</field>
		/// <field name="Stack">Type: Int32&#10;Render elements at same index from all series as stacked bars.</field>
	Overlay: 0,
	SideBySide: 1,
	Stack: 2
}
MindFusion.Charting.BarLayout.__enum = true;

MindFusion.Charting.BarModel3D = {
		/// <summary>Identifies supported bar shapes when rendering multiple series.</summary>
		/// <field name="Bar">Type: Int32&#10;Draw bars as rectangular cuboids.</field>
		/// <field name="Cylinder">Type: Int32&#10;Draw bars as cylinders.</field>
	Bar: 0,
	Cylinder: 1
}
MindFusion.Charting.BarModel3D.__enum = true;

MindFusion.Charting.BarOverlayRenderer.prototype = {
	adjustDataRange: function(context) {
		/// <summary>seriesRenderer.AdjustDataRange override. Adjusts the data range of associated Axis objects after initial measure pass.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
	},
	backToFrontRatio: function() {
		/// <summary>Gets the ratio between widths of backmost and frontmost bars.</summary>
		/// <returns type="Number">Type: Number&#10;3</returns>
	},
	draw: function(context) {
		/// <summary>SeriesRenderer.Draw override. Draws the series data in specified RenderContext.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
	},
	drawHighlight: function(context, hitResult) {
		/// <summary>Renderer2D.DrawHighlight override. Draws highlighted bar in specified RenderContext.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
		/// <param name="hitResult" type="MindFusion.Charting.HitResult">Type: HitResult&#10;A HitResult instance identifying highlighted data item.</param>
	},
	enumVisibleOverlays: function(context, frontToBack, process) {
		/// <summary>Enumerates the bars visible in current data range.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
		/// <param name="frontToBack" type="Boolean">Type: Boolean&#10;true to enumerate from front bar to back bar, or false otherwise.</param>
		/// <param name="process" type="ProcessBars">Type: ProcessBars&#10;A ProcessBars callback.</param>
	},
	hitTest: function(context, location) {
		/// <summary>Renderer2D.HitTest override. Hit-tests the bar representations of data items.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
		/// <param name="location" type="MindFusion.Drawing.Point">Type: Point&#10;A Point specifying where to look for a bar.</param>
		/// <returns type="MindFusion.Charting.HitResult">Type: HitResult&#10;A HitResult instance identifying the found data item.</returns>
	},
	measureDataRange: function(context) {
		/// <summary>Renderer2D.MeasureDataRange override. Measures the data range of rendered series and assigns it to the associated Axis objects if their MinValue and MaxValue are not set.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
	}
};
MindFusion.Charting.BarOverlayRenderer.__class = true;

MindFusion.Charting.BarOverlayRenderer3D.prototype = {
	backToFrontRatio: function() {
		/// <summary>BarOverlayRenderer.BackToFrontRatio override. Gets the ratio between widths of backmost and frontmost bars.</summary>
		/// <returns type="Number">Type: Number&#10;1.</returns>
	},
	buildModels: function(scene, context) {
		/// <summary>Implements Renderer3D.BuildModels. Adds 3D bar models for the series data to specified scene.</summary>
		/// <param name="scene" type="Scene3D">Type: Scene3D&#10;A Scene3D instance.</param>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
	}
};
MindFusion.Charting.BarOverlayRenderer3D.__class = true;

MindFusion.Charting.BarRenderer.prototype = {
	adjustDataRange: function(context) {
		/// <summary>SeriesRenderer.AdjustDataRange override. Adjusts the data range of associated Axis objects after initial measure pass.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
	},
	draw: function(context) {
		/// <summary>SeriesRenderer.Draw override. Draws the series data in specified RenderContext.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
	},
	drawHighlight: function(context, hitResult) {
		/// <summary>Renderer2D.DrawHighlight override. Draws highlighted bar in specified RenderContext.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
		/// <param name="hitResult" type="MindFusion.Charting.HitResult">Type: HitResult&#10;A HitResult instance identifying highlighted data item.</param>
	},
	enumVisibleBars: function(context, process) {
		/// <summary>Enumerates the bars visible in current data range.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
		/// <param name="process" type="ProcessBars">Type: ProcessBars&#10;A ProcessBars callback.</param>
	},
	hitTest: function(context, location) {
		/// <summary>Renderer2D.HitTest override. Hit-tests the bar representations of data items.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
		/// <param name="location" type="MindFusion.Drawing.Point">Type: Point&#10;A Point specifying where to look for a bar.</param>
		/// <returns type="MindFusion.Charting.HitResult">Type: HitResult&#10;A HitResult instance identifying the found data item.</returns>
	},
	measureDataRange: function(context) {
		/// <summary>Renderer2D.MeasureDataRange override. Measures the data range of rendered series and assigns it to the associated Axis objects if their MinValue and MaxValue are not set.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
	}
};
MindFusion.Charting.BarRenderer.__class = true;

MindFusion.Charting.BarRenderer3D.prototype = {
	buildModels: function(scene, context) {
		/// <summary>Implements Renderer3D.BuildModels. Adds 3D bar models for the series data to specified scene.</summary>
		/// <param name="scene" type="Scene3D">Type: Scene3D&#10;A Scene3D instance.</param>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
	}
};
MindFusion.Charting.BarRenderer3D.__class = true;

MindFusion.Charting.BarSeries.prototype = {
	getLabel: function(index, kind) {
		/// <summary>SimpleSeries.GetLabel override. Returns an element of a labels list.</summary>
		/// <param name="index" type="Number">Type: Number&#10;An integer value specifying the index of a data item.</param>
		/// <param name="kind" type="MindFusion.Charting.LabelKinds">Type: LabelKinds&#10;A member of the LabelKinds enumeration.</param>
		/// <returns type="String">Type: String&#10;A string containing the item's label.</returns>
	}
};
MindFusion.Charting.BarSeries.__class = true;

MindFusion.Charting.BarStackRenderer.prototype = {
	adjustDataRange: function(context) {
		/// <summary>SeriesRenderer.AdjustDataRange override. Adjusts the data range of the associated Axis objects after initial measure pass.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">A RenderContext instance.</param>
	},
	draw: function(context) {
		/// <summary>SeriesRenderer.Draw override. Draws the series data in specified RenderContext.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
	},
	drawHighlight: function(context, hitResult) {
		/// <summary>Renderer2D.DrawHighlight override. Draws highlighted bar in specified RenderContext.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
		/// <param name="hitResult" type="MindFusion.Charting.HitResult">Type: HitResult&#10;A HitResult instance identifying highlighted data item.</param>
	},
	enumVisibleStackBars: function(context, process) {
		/// <summary>Enumerates the bars visible in current data range.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
		/// <param name="process" type="ProcessStackBars">Type: ProcessStackBars&#10;A ProcessStackBars callback.</param>
	},
	hitTest: function(context, location) {
		/// <summary>StackRenderer.HitTest override. Hit-tests the bar representations of data items.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
		/// <param name="location" type="MindFusion.Drawing.Point">Type: Point&#10;A Point specifying where to look for a bar.</param>
		/// <returns type="MindFusion.Charting.HitResult">Type: HitResult&#10;A HitResult instance identifying the found data item.</returns>
	},
	measureDataRange: function(context) {
		/// <summary>StackRenderer.MeasureDataRange override. Measures the data range of rendered series and assigns it to the associated Axis objects if their MinValue and MaxValue are not set.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
	}
};
MindFusion.Charting.BarStackRenderer.__class = true;

MindFusion.Charting.BarStackRenderer3D.prototype = {
	buildModels: function(scene, context) {
		/// <summary>Implements Renderer3D.BuildModels. Adds 3D bar models for the series data to specified scene.</summary>
		/// <param name="scene" type="Scene3D">Type: Scene3D&#10;A Scene3D instance.</param>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
	}
};
MindFusion.Charting.BarStackRenderer3D.__class = true;

MindFusion.Charting.BubbleLabelAlignment = {
		/// <summary>Specifies the alignment of a label relative to its associated bubble.</summary>
		/// <field name="Above">Type: Int32&#10;Indicates that the label is positioned above the bubble.</field>
		/// <field name="Below">Type: Int32&#10;Indicates that the label is positioned below the bubble.</field>
		/// <field name="Center">Type: Int32&#10;Indicates that the label is centered inside the bubble.</field>
		/// <field name="Left">Type: Int32&#10;Indicates that the label is positioned to the left of the bubble.</field>
		/// <field name="Right">Type: Int32&#10;Indicates that the label is positioned to the right of the bubble.</field>
	Above: 0,
	Below: 1,
	Center: 2,
	Left: 3,
	Right: 4
}
MindFusion.Charting.BubbleLabelAlignment.__enum = true;

MindFusion.Charting.BubbleRenderer.prototype = {
	draw: function(context) {
		/// <summary>SeriesRenderer.Draw override. Draws bubbles representing data items in specified RenderContext.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
	},
	drawHighlight: function(context, hitResult) {
		/// <summary>Renderer2D.DrawHighlight override. Draws highlighted bubble in specified RenderContext.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
		/// <param name="hitResult" type="MindFusion.Charting.HitResult">Type: HitResult&#10;A HitResult instance identifying highlighted data item.</param>
	},
	hitTest: function(context, location) {
		/// <summary>Renderer2D.HitTest override. Hit-tests the bubble representations of data items.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
		/// <param name="location" type="MindFusion.Drawing.Point">Type: Point&#10;A Point specifying where to look for a bubble.</param>
		/// <returns type="MindFusion.Charting.HitResult">Type: HitResult&#10;A HitResult instance identifying the found data item.</returns>
	}
};
MindFusion.Charting.BubbleRenderer.__class = true;

MindFusion.Charting.CandlestickRenderer.prototype = {
	draw: function(context) {
		/// <summary>SeriesRenderer.Draw override. Draws the series data in specified RenderContext.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
	},
	drawHighlight: function(context, hitResult) {
		/// <summary>Renderer2D.DrawHighlight override. Draws highlighted candlestick in specified RenderContext.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
		/// <param name="hitResult" type="MindFusion.Charting.HitResult">Type: HitResult&#10;A HitResult instance identifying highlighted data item.</param>
	},
	effectiveFill: function(seriesIndex, dataIndex, context) {
		/// <summary>Gets the brush that should be used to fill the representation of specified data item.</summary>
		/// <param name="seriesIndex" type="Number">Type: Number&#10;An integer index of a Series within the list of series rendered by this SeriesRenderer.</param>
		/// <param name="dataIndex" type="Number">Type: Number&#10;An integer index of the data item in specified series.</param>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
		/// <returns type="MindFusion.Charting.Drawing.Brush">Type: Brush&#10;A Brush instance.</returns>
	},
	enumVisibleCandlesticks: function(context, process) {
		/// <summary>Enumerates the candlesticks visible in current data range.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
		/// <param name="process" type="ProcessCandlesticks">Type: ProcessCandlesticks&#10;A ProcessBars callback.</param>
	},
	hitTest: function(context, location) {
		/// <summary>Renderer2D.HitTest override. Hit-tests the bar representations of data items.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
		/// <param name="location" type="MindFusion.Drawing.Point">Type: Point&#10;A Point specifying where to look for a candlestick.</param>
		/// <returns type="MindFusion.Charting.HitResult">Type: HitResult&#10;A HitResult instance identifying the found data item.</returns>
	},
	measureDataRange: function(context) {
		/// <summary>Renderer2D.MeasureDataRange override. Measures the data range of rendered series and assigns it to the associated Axis objects if their MinValue and MaxValue are not set.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
	}
};
MindFusion.Charting.CandlestickRenderer.__class = true;

MindFusion.Charting.CandlestickSeriesStyle.prototype = {
	fill: function(seriesIndex, dataIndex) {
		/// <summary>Implements SeriesStyle.Fill. Returns a Brush instance, depending on the series data.</summary>
		/// <param name="seriesIndex" type="Number">Type: Number&#10;An integer index of a Series.</param>
		/// <param name="dataIndex" type="Number">Type: Number&#10;An integer index of a data item in specified series.</param>
		/// <returns type="MindFusion.Charting.Drawing.Brush">Type: Brush&#10;A Brush instance.</returns>
	},
	stroke: function(seriesIndex, dataIndex) {
		/// <summary>Implements SeriesStyle.Stroke.</summary>
		/// <param name="seriesIndex" type="Number">Type: Number&#10;An integer index of a Series.</param>
		/// <param name="dataIndex" type="Number">Type: Number&#10;An integer index of a data item in specified series.</param>
		/// <returns type="MindFusion.Charting.Drawing.Brush">Type: Brush&#10;A Brush instance.</returns>
	},
	strokeDashStyle: function(seriesIndex, dataIndex) {
		/// <summary>Implements SeriesStyle.StrokeDashStyle.</summary>
		/// <param name="seriesIndex" type="Number">Type: Number&#10;An integer index of a Series.</param>
		/// <param name="dataIndex" type="Number">Type: Number&#10;An integer index of a data item in specified series.</param>
		/// <returns type="MindFusion.Charting.Drawing.DashStyle">Type: DashStyle&#10;A nullable DashStyle value specifying stroke dash style.</returns>
	},
	strokeThickness: function(seriesIndex, dataIndex) {
		/// <summary>Implements SeriesStyle.StrokeThickness.</summary>
		/// <param name="seriesIndex" type="Number">Type: Number&#10;An integer index of a Series.</param>
		/// <param name="dataIndex" type="Number">Type: Number&#10;An integer index of a data item in specified series.</param>
		/// <returns type="Number">Type: Number&#10;A nullable number value specifying stroke thickness.</returns>
	}
};
MindFusion.Charting.CandlestickSeriesStyle.__class = true;

MindFusion.Charting.CurveAreaRenderer.prototype = {
	draw: function(context) {
		/// <summary>AreaRenderer.Draw override. Draws the series data in specified RenderContext.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
	}
};
MindFusion.Charting.CurveAreaRenderer.__class = true;

MindFusion.Charting.CurveAreaStackRenderer.prototype = {
	draw: function(context) {
		/// <summary>SeriesRenderer.Draw override. Draws the series data in specified RenderContext.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
	}
};
MindFusion.Charting.CurveAreaStackRenderer.__class = true;

MindFusion.Charting.CurveRenderer.prototype = {
	draw: function(context) {
		/// <summary>LineRenderer.Draw override. Draws the series data in specified RenderContext.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
	}
};
MindFusion.Charting.CurveRenderer.__class = true;

MindFusion.Charting.DataBoundSeries.prototype = {
	getLabel: function(index, kind) {
		/// <summary>Implements Series.GetLabel. Returns a label for the specified data item in the data source.</summary>
		/// <param name="index" type="Number">Type: Number&#10;An integer value specifying the index of a data item.</param>
		/// <param name="kind" type="MindFusion.Charting.LabelKinds">Type: LabelKinds&#10;A member of the LabelKinds enumeration.</param>
		/// <returns type="String">Type: String&#10;A string containing the item's label.</returns>
	},
	getValue: function(index, dimension) {
		/// <summary>Implements Series.GetValue. Returns a value for the specified data item in the data source.</summary>
		/// <param name="index" type="Number">Type: Number&#10;An integer value specifying the index of a data item.</param>
		/// <param name="dimension" type="Number">Type: Number&#10;An integer value specifying the dimension whose coordinate to return.</param>
		/// <returns type="Number">Type: Number&#10;A double-precision number representing the value of a data item in the data source.</returns>
	},
	isEmphasized: function(index) {
		/// <summary>Implements Series.IsEmphasized. DataBoundSeries always returns false.</summary>
		/// <param name="index" type="Number">Type: Number&#10;An integer value specifying the index of a data item.</param>
		/// <returns type="Boolean">Type: Boolean&#10;true to emphasize the specified data item, or false otherwise.</returns>
	},
	isSorted: function(dimension) {
		/// <summary>Implements Series.IsSorted. Gets a value indicating whether the series values increase monotonously in specified dimension.</summary>
		/// <param name="dimension" type="Number">Type: Number&#10;An integer value identifying the dimension.</param>
		/// <returns type="Boolean">Type: Boolean&#10;true if the values are sorted in specified dimension, or false otherwise.</returns>
	},
	onDataChanged: function() {
		/// <summary>Raises the DataChanged event.</summary>
	}
};
MindFusion.Charting.DataBoundSeries.__class = true;

MindFusion.Charting.DateTimeFormat = {
		/// <summary>Specifies formats for DateTime values.</summary>
		/// <field name="CustomDateTime">Type: Int32&#10;Indicates that the number should be formatted as a DateTime value according to a custom set string.</field>
		/// <field name="FullDateTime">Type: Int32&#10;Indicates that the number should be formatted as a DateTime value with a full date pattern.</field>
		/// <field name="LongDate">Type: Int32&#10;Indicates that the number should be formatted as a DateTime value with a long date pattern.</field>
		/// <field name="LongTime">Type: Int32&#10;Indicates that the number should be formatted as a DateTime value with a long time pattern.</field>
		/// <field name="MonthDateTime">Type: Int32&#10;Indicates that the number should be formatted as a DateTime value with a month day pattern.</field>
		/// <field name="None">Type: Int32&#10;The DateTime value is not formatted</field>
		/// <field name="ShortDate">Type: Int32&#10;Indicates that the number should be formatted as a DateTime value with a short date pattern.</field>
		/// <field name="ShortTime">Type: Int32&#10;Indicates that the number should be formatted as a DateTime value with a short time pattern.</field>
		/// <field name="YearDateTime">Type: Int32&#10;Indicates that the number should be formatted as a DateTime value with a year month date pattern.</field>
	CustomDateTime: 0,
	FullDateTime: 1,
	LongDate: 2,
	LongTime: 3,
	MonthDateTime: 4,
	None: 5,
	ShortDate: 6,
	ShortTime: 7,
	YearDateTime: 8
}
MindFusion.Charting.DateTimeFormat.__enum = true;

MindFusion.Charting.DateTimeSeries.prototype = {
	getLabel: function(index, kind) {
		/// <summary>Implements Series.GetLabel. Returns Date value at specified index as an XAxisLabel.</summary>
		/// <param name="index" type="Number">Type: Number&#10;An integer value specifying the index of a data item.</param>
		/// <param name="kind" type="MindFusion.Charting.LabelKinds">Type: LabelKinds&#10;A member of the LabelKinds enumeration.</param>
		/// <returns type="String">Type: String&#10;A string containing the item's label.</returns>
	},
	getValue: function(index, dimension) {
		/// <summary>Implements Series.GetValue. Returns a value for the specified data item in this series.</summary>
		/// <param name="index" type="Number">Type: Number&#10;An integer value specifying the index of a data item.</param>
		/// <param name="dimension" type="Number">Type: Number&#10;An integer value specifying the dimension whose coordinate to return.</param>
		/// <returns type="Number">Type: Number&#10;A double-precision number representing the value of a data item in the series.</returns>
	},
	isEmphasized: function(index) {
		/// <summary>Implements Series.IsEmphasized. DateTimeSeries always returns false.</summary>
		/// <param name="index" type="Number">Type: Number&#10;An integer value specifying the index of a data item.</param>
		/// <returns type="Boolean">Type: Boolean&#10;true to emphasize the specified data item, or false otherwise.</returns>
	},
	isSorted: function(dimension) {
		/// <summary>Implements Series.IsSorted. DateTimeSeries always returns false.</summary>
		/// <param name="dimension" type="Number">Type: Number&#10;An integer value identifying the dimension.</param>
		/// <returns type="Boolean">Type: Boolean&#10;true if the values are sorted in specified dimension, or false otherwise.</returns>
	},
	onDataChanged: function() {
		/// <summary>Raises the DataChanged event.</summary>
	}
};
MindFusion.Charting.DateTimeSeries.__class = true;

MindFusion.Charting.FunctionSeries.prototype = {
	getLabel: function(index, kind) {
		/// <summary>Implements Series.GetLabel. Returns an element of the labels list.</summary>
		/// <param name="index" type="Number">Type: Number&#10;Number. An integer value specifying the index of a data item.</param>
		/// <param name="kind" type="MindFusion.Charting.LabelKinds">Type: LabelKinds&#10;MindFusion.Charting.LabelKinds. A member of the LabelKinds enumeration.</param>
		/// <returns type="String">Type: String&#10;String. A string containing the item's label.</returns>
	},
	getValue: function(index, dimension) {
		/// <summary>Implements Series.GetValue. Returns a value for the specified data item in this series.</summary>
		/// <param name="index" type="Number">Type: Number&#10;Number. An integer value specifying the index of a data item.</param>
		/// <param name="dimension" type="Number">Type: Number&#10;Number. An integer value specifying the dimension whose coordinate to return.</param>
		/// <returns type="Number">Type: Number&#10;Number. A double-precision number representing the value of a data item in the series.</returns>
	},
	isEmphasized: function(index) {
		/// <summary>Implements Series.IsEmphasized. Gets a value indicating whetherthe specified data item should be emphasized by the SeriesRenderer.</summary>
		/// <param name="index" type="Number">Type: Number&#10;Number. An integer value specifying the index of a data item.</param>
		/// <returns type="Boolean">Type: Boolean&#10;Boolean. true to emphasize the specified data item, or false otherwise.</returns>
	},
	isSorted: function(dimension) {
		/// <summary>Implements Series.IsSorted.</summary>
		/// <param name="dimension" type="Number">Type: Number&#10;Number. An integer value identifying the dimension.</param>
		/// <returns type="Boolean">Type: Boolean&#10;Boolean. true if the values are sorted in specified dimension, or false otherwise.</returns>
	},
	onDataChanged: function() {
		/// <summary>Raises the DataChanged event.</summary>
	}
};
MindFusion.Charting.FunctionSeries.__class = true;

MindFusion.Charting.FunnelRenderer.prototype = {
	draw: function(context) {
		/// <summary>SeriesRenderer.Draw override. Draws the series data in specified RenderContext.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
	},
	drawHighlight: function(context, hitResult) {
		/// <summary>SeriesRenderer.DrawHighlight override. Draws highlighted slice in specified RenderContext.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
		/// <param name="hitResult" type="MindFusion.Charting.HitResult">Type: HitResult&#10;A HitResult instance identifying highlighted data item.</param>
	},
	enumSegments: function(context, process) {
		/// <summary>Enumerates the segments of the funnel.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
		/// <param name="process" type="ProcessSegment">Type: ProcessSegment&#10;A ProcessSegment callback.</param>
	},
	enumSeries: function() {
		/// <summary>Implements the SeriesContainer interface.</summary>
		/// <returns type="IEnumerable<Series>">Type: IEnumerable<Series>&#10;An instance of the IEnumerable&amp;lt;Series&amp;gt; class.</returns>
	},
	hitTest: function(context, location) {
		/// <summary>SeriesRenderer.HitTest override. Hit-tests the slices representing data items.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
		/// <param name="location" type="MindFusion.Drawing.Point">Type: Point&#10;A Point specifying where to look for a pie slice.</param>
		/// <returns type="MindFusion.Charting.HitResult">Type: HitResult&#10;A HitResult instance identifying the found data item.</returns>
	}
};
MindFusion.Charting.FunnelRenderer.__class = true;

MindFusion.Charting.GridType = {
		/// <summary>Indicates Plot2D grid type.</summary>
		/// <field name="Crossed">Type: Int32&#10;Draw crossed stripes.</field>
		/// <field name="Horizontal">Type: Int32&#10;Draw horizontal stripes.</field>
		/// <field name="None">Type: Int32&#10;Do not draw grid.</field>
		/// <field name="Vertical">Type: Int32&#10;Draw vertical stripes.</field>
	Crossed: 0,
	Horizontal: 1,
	None: 2,
	Vertical: 3
}
MindFusion.Charting.GridType.__enum = true;

MindFusion.Charting.HitResult.prototype = {
};
MindFusion.Charting.HitResult.__class = true;

MindFusion.Charting.LabelKinds = {
		/// <summary>Identifies the various kinds of labels that can be drawn for data items.</summary>
		/// <field name="All">Type: Int32&#10;Draw all labels supported by a series.</field>
		/// <field name="InnerLabel">Type: Int32&#10;Draw inner label in graphic representation of data item.</field>
		/// <field name="None">Type: Int32&#10;Do not draw labels.</field>
		/// <field name="OuterLabel">Type: Int32&#10;Draw outer label nearby graphic representation of data item.</field>
		/// <field name="ToolTip">Type: Int32&#10;Show label as a tooltip.</field>
		/// <field name="XAxisLabel">Type: Int32&#10;Draw data label at X axis.</field>
		/// <field name="YAxisLabel">Type: Int32&#10;Draw data label at Y axis.</field>
		/// <field name="ZAxisLabel">Type: Int32&#10;Draw data label at Z axis.</field>
	All: 0,
	InnerLabel: 1,
	None: 2,
	OuterLabel: 3,
	ToolTip: 4,
	XAxisLabel: 5,
	YAxisLabel: 6,
	ZAxisLabel: 7
}
MindFusion.Charting.LabelKinds.__enum = true;

MindFusion.Charting.LegendController.prototype = {
	onMouseDown: function(x, y) {
		/// <summary>Implements ComponentController.OnMouseDown. Called when the user presses a mouse button.</summary>
		/// <param name="x" type="Number">Type: Number&#10;A number value specifying the horizontal position of mouse pointer.</param>
		/// <param name="y" type="Number">Type: Number&#10;A number value specifying the vertical position of mouse pointer.</param>
	},
	onMouseMove: function(x, y) {
		/// <summary>Implements ComponentController.OnMouseMove. Called when the user moves the mouse.</summary>
		/// <param name="x" type="Number">Type: Number&#10;A number value specifying the horizontal position of mouse pointer.</param>
		/// <param name="y" type="Number">Type: Number&#10;A number value specifying the vertical position of mouse pointer.</param>
	}
};
MindFusion.Charting.LegendController.__class = true;

MindFusion.Charting.LegendRenderer.prototype = {
	createController: function(context) {
		/// <summary>Component.CreateController override. Returns a ComponentController used to interact with this component.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
		/// <returns type="ComponentController">Type: ComponentController&#10;Instance of the LegendController class.</returns>
	},
	draw: function(context) {
		/// <summary>Component.Draw override. Draws legend elements in specified RenderContext.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
	},
	effectiveBorderPen: function(context) {
		/// <summary>Gets the Pen that should be used to draw the legend borders.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
		/// <returns type="MindFusion.Charting.Drawing.Pen">Type: Pen&#10;A Pen instance.</returns>
	},
	effectiveBorderStroke: function(context) {
		/// <summary>Gets the Brush that should be used to stroke the legend borders.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
		/// <returns type="MindFusion.Charting.Drawing.Brush">Type: Brush&#10;A Brush instance.</returns>
	},
	effectiveBorderStrokeThickness: function(context) {
		/// <summary>Gets the thickness of border strokes.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
		/// <returns type="Number">Type: Number&#10;A number value.</returns>
	},
	effectiveFill: function(context) {
		/// <summary>Gets the Brush that should be used to fill the legend background.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
		/// <returns type="MindFusion.Charting.Drawing.Brush">Type: Brush&#10;A Brush instance.</returns>
	},
	effectiveStrokeDashStyle: function(context) {
		/// <summary>Gets the dash style of border strokes.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
		/// <returns type="MindFusion.Charting.Drawing.DashStyle">Type: DashStyle&#10;A member of the DashStyle enumeration.</returns>
	},
	effectiveTitleBrush: function(context) {
		/// <summary>Gets the Brush that should be used to draw the legend's Title.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
		/// <returns type="SysBrush">Type: SysBrush&#10;A System.Brush instance.</returns>
	},
	effectiveTitleFont: function(context) {
		/// <summary>Gets the Font that should be used to draw the legend's Title.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
		/// <returns type="MindFusion.Drawing.Font">Type: Font&#10;A System.Drawing.Font instance.</returns>
	},
	measure: function(maxWidth, maxHeight, context) {
		/// <summary>Component.Measure override. Measures the desired size of this component.</summary>
		/// <param name="maxWidth" type="Number">Type: Number&#10;The maximum width provided by parent component.</param>
		/// <param name="maxHeight" type="Number">Type: Number&#10;The maximum height provided by parent component.</param>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
	}
};
MindFusion.Charting.LegendRenderer.__class = true;

MindFusion.Charting.LineRenderer.prototype = {
	draw: function(context) {
		/// <summary>SeriesRenderer.Draw override. Draws the series data in specified RenderContext.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
	}
};
MindFusion.Charting.LineRenderer.__class = true;

MindFusion.Charting.LineType = {
		/// <summary>Identifies how to connect adjacent data points in line and area charts.</summary>
		/// <field name="Curve">Type: Int32&#10;Connect points using a cardinal spline.</field>
		/// <field name="Polyline">Type: Int32&#10;Connect points using straight line segments.</field>
		/// <field name="Step">Type: Int32&#10;Connect points using steps.</field>
	Curve: 0,
	Polyline: 1,
	Step: 2
}
MindFusion.Charting.LineType.__enum = true;

MindFusion.Charting.Margins.prototype = {
};
MindFusion.Charting.Margins.__class = true;

MindFusion.Charting.MixedSeriesStyle.prototype = {
	fill: function(seriesIndex, dataIndex) {
		/// <summary>Implements SeriesStyle.Stroke. Returns a Brush instance fromFills, CommonFills or UniformFill properties.</summary>
		/// <param name="seriesIndex" type="Number">Type: Number&#10;An integer index of a Series.</param>
		/// <param name="dataIndex" type="Number">Type: Number&#10;An integer index of a data item in specified series.</param>
		/// <returns type="MindFusion.Charting.Drawing.Brush">Type: Brush&#10;A Brush instance.</returns>
	},
	stroke: function(seriesIndex, dataIndex) {
		/// <summary>Implements SeriesStyle.Stroke. Returns a Brush instance fromStrokes, CommonStrokes or UniformStroke properties.</summary>
		/// <param name="seriesIndex" type="Number">Type: Number&#10;An integer index of a Series.</param>
		/// <param name="dataIndex" type="Number">Type: Number&#10;An integer index of a data item in specified series.</param>
		/// <returns type="MindFusion.Charting.Drawing.Brush">Type: Brush&#10;A Brush instance.</returns>
	},
	strokeDashStyle: function(seriesIndex, dataIndex) {
		/// <summary>Implements SeriesStyle.StrokeDashStyle. Returns a value from StrokeDashStyles, CommonStrokeDashStyles or UniformStrokeDashStyle properties.</summary>
		/// <param name="seriesIndex" type="Number">Type: Number&#10;An integer index of a Series.</param>
		/// <param name="dataIndex" type="Number">Type: Number&#10;An integer index of a data item in specified series.</param>
		/// <returns type="MindFusion.Charting.Drawing.DashStyle">Type: DashStyle&#10;A nullable DashStyle value specifying stroke dash style.</returns>
	},
	strokeThickness: function(seriesIndex, dataIndex) {
		/// <summary>Implements SeriesStyle.StrokeThickness. Returns a value from StrokeThicknesses, CommonStrokeThicknesses or UniformStrokeThickness properties.</summary>
		/// <param name="seriesIndex" type="Number">Type: Number&#10;An integer index of a Series.</param>
		/// <param name="dataIndex" type="Number">Type: Number&#10;An integer index of a data item in specified series.</param>
		/// <returns type="Number">Type: Number&#10;A nullable number value specifying stroke thickness.</returns>
	}
};
MindFusion.Charting.MixedSeriesStyle.__class = true;

MindFusion.Charting.Pair.prototype = {
	toString: function() {
		/// <summary>Object.ToString override.</summary>
	}
};
MindFusion.Charting.Pair.__class = true;

MindFusion.Charting.PanController.prototype = {
	getRunningAnimation: function() {
		/// <summary>For internal use.</summary>
		/// <returns type="ComponentAnimation">Type: ComponentAnimation&#10;An instance of a ComponentAnimation -derived class.</returns>
	},
	onMouseDown: function(x, y) {
		/// <summary>Plot2DController.OnMouseDown override. Called when the user presses a mouse button.</summary>
		/// <param name="x" type="Number">Type: Number&#10;A number value specifying the horizontal position of mouse pointer.</param>
		/// <param name="y" type="Number">Type: Number&#10;A number value specifying the vertical position of mouse pointer.</param>
	},
	onMouseMove: function(x, y) {
		/// <summary>PlotController.OnMouseMove override. Called when the user moves the mouse.</summary>
		/// <param name="x" type="Number">Type: Number&#10;A number value specifying the horizontal position of mouse pointer.</param>
		/// <param name="y" type="Number">Type: Number&#10;A number value specifying the vertical position of mouse pointer.</param>
	},
	onMouseUp: function(x, y) {
		/// <summary>PlotController.OnMouseUp override. Called when the user releases a mouse button.</summary>
		/// <param name="x" type="Number">Type: Number&#10;A number value specifying the horizontal position of mouse pointer.</param>
		/// <param name="y" type="Number">Type: Number&#10;A number value specifying the vertical position of mouse pointer.</param>
	}
};
MindFusion.Charting.PanController.__class = true;

MindFusion.Charting.PanControllerAnimation.prototype = {
};
MindFusion.Charting.PanControllerAnimation.__class = true;

MindFusion.Charting.PerElementSeriesStyle.prototype = {
	fill: function(seriesIndex, dataIndex) {
		/// <summary>Implements SeriesStyle.Fill. Returns a Brush from the Fills list that matches specified series and data indices.</summary>
		/// <param name="seriesIndex" type="Number">Type: Number&#10;An integer index of a Series.</param>
		/// <param name="dataIndex" type="Number">Type: Number&#10;An integer index of a data item in specified series.</param>
		/// <returns type="MindFusion.Charting.Drawing.Brush">Type: Brush&#10;A Brush instance.</returns>
	},
	stroke: function(seriesIndex, dataIndex) {
		/// <summary>Implements SeriesStyle.Stroke. Returns a Brush from the Strokes list that matches specified series and data indices.</summary>
		/// <param name="seriesIndex" type="Number">Type: Number&#10;An integer index of a Series.</param>
		/// <param name="dataIndex" type="Number">Type: Number&#10;An integer index of a data item in specified series.</param>
		/// <returns type="MindFusion.Charting.Drawing.Brush">Type: Brush&#10;A Brush instance.</returns>
	},
	strokeDashStyle: function(seriesIndex, dataIndex) {
		/// <summary>Implements SeriesStyle.StrokeDashStyle. Returns a value from the StrokeDashStyles list that matches specified series and data indices.</summary>
		/// <param name="seriesIndex" type="Number">Type: Number&#10;An integer index of a Series.</param>
		/// <param name="dataIndex" type="Number">Type: Number&#10;An integer index of a data item in specified series.</param>
		/// <returns type="MindFusion.Charting.Drawing.DashStyle">Type: DashStyle&#10;A nullable DashStyle value specifying stroke dash style.</returns>
	},
	strokeThickness: function(seriesIndex, dataIndex) {
		/// <summary>Implements SeriesStyle.StrokeThickness. Returns a value from the StrokeThicknesses list that matches specified series and data indices.</summary>
		/// <param name="seriesIndex" type="Number">Type: Number&#10;An integer index of a Series.</param>
		/// <param name="dataIndex" type="Number">Type: Number&#10;An integer index of a data item in specified series.</param>
		/// <returns type="Number">Type: Number&#10;A nullable number value specifying stroke thickness.</returns>
	}
};
MindFusion.Charting.PerElementSeriesStyle.__class = true;

MindFusion.Charting.PerSeriesStyle.prototype = {
	fill: function(seriesIndex, dataIndex) {
		/// <summary>Implements SeriesStyle.Fill. Returns a Brush from the Fills list that matches specified series index.</summary>
		/// <param name="seriesIndex" type="Number">Type: Number&#10;An integer index of a Series.</param>
		/// <param name="dataIndex" type="Number">Type: Number&#10;An integer index of a data item in specified series.</param>
		/// <returns type="MindFusion.Charting.Drawing.Brush">Type: Brush&#10;A Brush instance.</returns>
	},
	stroke: function(seriesIndex, dataIndex) {
		/// <summary>Implements SeriesStyle.Stroke. Returns a Brush from the Strokes list that matches specified series index.</summary>
		/// <param name="seriesIndex" type="Number">Type: Number&#10;An integer index of a Series.</param>
		/// <param name="dataIndex" type="Number">Type: Number&#10;An integer index of a data item in specified series.</param>
		/// <returns type="MindFusion.Charting.Drawing.Brush">Type: Brush&#10;A Brush instance.</returns>
	},
	strokeDashStyle: function(seriesIndex, dataIndex) {
		/// <summary>Implements SeriesStyle.StrokeDashStyle. Returns a value from the StrokeDashStyles list that matches specified series index.</summary>
		/// <param name="seriesIndex" type="Number">Type: Number&#10;An integer index of a Series.</param>
		/// <param name="dataIndex" type="Number">Type: Number&#10;An integer index of a data item in specified series.</param>
		/// <returns type="MindFusion.Charting.Drawing.DashStyle">Type: DashStyle&#10;A nullable DashStyle value specifying stroke dash style.</returns>
	},
	strokeThickness: function(seriesIndex, dataIndex) {
		/// <summary>Implements SeriesStyle.StrokeThickness. Returns a value from the StrokeThicknesses list that matches specified series index.</summary>
		/// <param name="seriesIndex" type="Number">Type: Number&#10;An integer index of a Series.</param>
		/// <param name="dataIndex" type="Number">Type: Number&#10;An integer index of a data item in specified series.</param>
		/// <returns type="Number">Type: Number&#10;A nullable number value specifying stroke thickness.</returns>
	}
};
MindFusion.Charting.PerSeriesStyle.__class = true;

MindFusion.Charting.PieRadarRenderer.prototype = {
	draw: function(context) {
		/// <summary>RadarRenderer.Draw override. Draws the series data in specified RenderContext.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
	},
	drawHighlight: function(context, hitResult) {
		/// <summary>RadarRenderer.DrawHighlight override. Draws highlighted data item in specified RenderContext.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
		/// <param name="hitResult" type="MindFusion.Charting.HitResult">Type: HitResult&#10;A HitResult instance identifying highlighted data item.</param>
	},
	enumSectors: function(context, process) {
		/// <summary>Enumerates the pie-radar sectors corresponding to each series.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
		/// <param name="process" type="ProcessSectors">Type: ProcessSectors&#10;A ProcessSectors callback.</param>
	}
};
MindFusion.Charting.PieRadarRenderer.__class = true;

MindFusion.Charting.PieRenderer.prototype = {
	draw: function(context) {
		/// <summary>SeriesRenderer.Draw override. Draws the series data in specified RenderContext.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
	},
	drawHighlight: function(context, hitResult) {
		/// <summary>SeriesRenderer.DrawHighlight override. Draws highlighted slice in specified RenderContext.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
		/// <param name="hitResult" type="MindFusion.Charting.HitResult">Type: HitResult&#10;A HitResult instance identifying highlighted data item.</param>
	},
	enumSeries: function() {
		/// <summary>Implements the SeriesContainer interface.</summary>
		/// <returns type="IEnumerable<Series>">Type: IEnumerable<Series>&#10;An instance of the IEnumerable&amp;lt;Series&amp;gt; class.</returns>
	},
	enumSlices: function(context, process) {
		/// <summary>Enumerates the slices of the pie.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
		/// <param name="process" type="ProcessSlice">Type: ProcessSlice&#10;A ProcessBars callback.</param>
	},
	hitTest: function(context, location) {
		/// <summary>SeriesRenderer.HitTest override. Hit-tests the slices representing data items.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
		/// <param name="location" type="MindFusion.Drawing.Point">Type: Point&#10;A Point specifying where to look for a pie slice.</param>
		/// <returns type="MindFusion.Charting.HitResult">Type: HitResult&#10;A HitResult instance identifying the found data item.</returns>
	}
};
MindFusion.Charting.PieRenderer.__class = true;

MindFusion.Charting.PieSeries.prototype = {
	getLabel: function(index, kind) {
		/// <summary>SimpleSeries.GetLabel override. Returns an element of the inner or outer label lists.</summary>
		/// <param name="index" type="Number">Type: Number&#10;An integer value specifying the index of a data item.</param>
		/// <param name="kind" type="MindFusion.Charting.LabelKinds">Type: LabelKinds&#10;A member of the LabelKinds enumeration.</param>
		/// <returns type="String">Type: String&#10;A string containing the item's label.</returns>
	}
};
MindFusion.Charting.PieSeries.__class = true;

MindFusion.Charting.Plot.prototype = {
	adjustDataRanges: function(context) {
		/// <summary>Called at the end of data measurement pass.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
	},
	domainDimension: function(series) {
		/// <summary>Implements the SeriesContainer interface. Gets the index of the dimension whose set of values should be treated as domain of plotted function.</summary>
		/// <param name="series" type="Series">Type: Series&#10;A Series in this container.</param>
	},
	draw: function(context) {
		/// <summary>Component.Draw override. Draws a grid and all chart graphics represented by contained SeriesRenderer objects.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
	},
	drawGrid: function(context) {
		/// <summary>Draws the plot's grid.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
	},
	drawOrigins: function(context) {
		/// <summary>Draws the plot's axis origin lines.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">An instance of the&#160;RenderContext&#160;class.</param>
	},
	drawPlot: function(context) {
		/// <summary>Draws the plot's background and borders.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
	},
	effectiveBorder: function(context) {
		/// <summary>Gets the Pen that should be used to draw the plot's borders.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
		/// <returns type="MindFusion.Charting.Drawing.Pen">Type: Pen&#10;A Pen instance.</returns>
	},
	effectiveBorderStroke: function(context) {
		/// <summary>Gets the Brush that should be used to stroke the plot's borders.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
		/// <returns type="MindFusion.Charting.Drawing.Brush">Type: Brush&#10;A Brush instance.</returns>
	},
	effectiveBorderStrokeThickness: function(context) {
		/// <summary>Gets the thickness of border strokes.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
		/// <returns type="Number">Type: Number&#10;A number value.</returns>
	},
	effectiveFill: function(context) {
		/// <summary>Gets the Brush that should be used to fill the plot's background.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
		/// <returns type="MindFusion.Charting.Drawing.Brush">Type: Brush&#10;A Brush instance.</returns>
	},
	effectiveStrokeDashStyle: function(context) {
		/// <summary>Gets the dash style of border strokes.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
		/// <returns type="MindFusion.Charting.Drawing.DashStyle">Type: DashStyle&#10;A member of the DashStyle enumeration.</returns>
	},
	enumSeries: function() {
		/// <summary>Implements SeriesContainer.</summary>
		/// <returns type="IEnumerable<Series>">Type: IEnumerable<Series>&#10;An instance of the IEnumerable&amp;lt;Series&amp;gt; class.</returns>
	},
	measure: function(maxWidth, maxHeight, context) {
		/// <summary>Component.Measure override. Measures the desired size of this component.</summary>
		/// <param name="maxWidth" type="Number">Type: Number&#10;The maximum width provided by parent component.</param>
		/// <param name="maxHeight" type="Number">Type: Number&#10;The maximum height provided by parent component.</param>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
	},
	measureDataRanges: function(context) {
		/// <summary>Measures data of all SeriesRenderer objects drawn inside this plot.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
	},
	onRendererDataChanged: function(sender, e) {
		/// <summary>Called when a Series raises its DataChanged event.</summary>
		/// <param name="sender" type="Object">Type: Object&#10;The event sender.</param>
		/// <param name="e" type="EventArgs">Type: EventArgs&#10;An EventArgs instance.</param>
	},
	startMeasureData: function(context) {
		/// <summary>Called in the beginning of data measurement pass.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
	},
	unsubscribe: function(seriesRenderers) {
		/// <summary>Unsubscribes from DataChanged and PropertyChanged events of all SeriesRenderer objects in specified list.</summary>
		/// <param name="seriesRenderers" type="MindFusion.Charting.Collections.ObservableCollection<SeriesRenderer>">Type: ObservableCollection<SeriesRenderer>&#10;A list of SeriesRenderer objects.</param>
	}
};
MindFusion.Charting.Plot.__class = true;

MindFusion.Charting.Plot2D.prototype = {
	createController: function(context) {
		/// <summary>Component.CreateController override. Returns a ComponentController used to interact with this component.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
		/// <returns type="ComponentController">Type: ComponentController&#10;An instance of the PanController class.</returns>
	},
	drawGrid: function(context) {
		/// <summary>Plot.DrawGrid override. Draws the grid specified by GridType property.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
	},
	drawOrigins: function(context) {
		/// <summary>Plot.DrawOrigins override. Draws the plot's axis origin lines.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">An instance of the&#160;RenderContext class.</param>
	},
	resetZoom: function() {
		/// <summary>Resets the zoom level to original axis ranges.</summary>
	},
	visit: function(visitor) {
		/// <summary>Component.Visit override. Calls visitor's VisitPlot method.</summary>
		/// <param name="visitor" type="ComponentVisitor">Type: ComponentVisitor&#10;An instance of a ComponentVisitor -derived class.</param>
	},
	zoomOut: function(axes) {
		/// <summary>Zooms out from current data range.</summary>
		/// <param name="axes" type="IEnumerable<Axis>">Type: IEnumerable<Axis>&#10;The axes whose ranges should be scaled.</param>
	}
};
MindFusion.Charting.Plot2D.__class = true;

MindFusion.Charting.Plot2DController.prototype = {
	onMouseDown: function(x, y) {
		/// <summary>PlotController.OnMouseDown override. Called when the user presses a mouse button.</summary>
		/// <param name="x" type="Number">Type: Number&#10;A number value specifying the horizontal position of mouse pointer.</param>
		/// <param name="y" type="Number">Type: Number&#10;A number value specifying the vertical position of mouse pointer.</param>
	},
	plotToAxisValue: function(axis, value) {
		/// <summary>Converts a plot pixel position to a logical value from specified axis' coordinate system.</summary>
		/// <param name="axis" type="MindFusion.Charting.Axis">Type: Axis&#10;The target Axis.</param>
		/// <param name="value" type="Number">Type: Number&#10;The value to convert.</param>
		/// <returns type="Number">Type: Number&#10;The converted value.</returns>
	}
};
MindFusion.Charting.Plot2DController.__class = true;

MindFusion.Charting.Plot3D.prototype = {
	draw: function(context) {
		/// <summary>Plot.Draw override. Draws a projection of 3D models generated by contained Renderer3D objects.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
	}
};
MindFusion.Charting.Plot3D.__class = true;

MindFusion.Charting.PlotController.prototype = {
	drawInteraction: function(graphics) {
		/// <summary>Implements ComponentController.DrawInteraction. Draws a representation of the current state of user interaction on specified Graphics surface.</summary>
		/// <param name="graphics" type="IGraphics">A Graphics instance.</param>
	},
	getCursorHint: function(x, y) {
		/// <summary>For internal use.</summary>
		/// <param name="x" type="void">Type: void&#10;</param>
		/// <param name="y" type="void">Type: void&#10;</param>
		/// <returns type="CursorHint">Type: CursorHint&#10;A member of the CursorHint enumeration.</returns>
	},
	getRunningAnimation: function() {
		/// <summary>For internal use.</summary>
		/// <returns type="ComponentAnimation">Type: ComponentAnimation&#10;An instance of a ComponentAnimation -derived class.</returns>
	},
	onMouseDown: function(x, y) {
		/// <summary>Implements ComponentController.OnMouseDown. Called when the user presses a mouse button.</summary>
		/// <param name="x" type="Number">Type: Number&#10;A number value specifying the horizontal position of mouse pointer.</param>
		/// <param name="y" type="Number">Type: Number&#10;A number value specifying the vertical position of mouse pointer.</param>
	},
	onMouseMove: function(x, y) {
		/// <summary>Implements ComponentController.OnMouseMove. Called when the user moves the mouse.</summary>
		/// <param name="x" type="Number">Type: Number&#10;A number value specifying the horizontal position of mouse pointer.</param>
		/// <param name="y" type="Number">Type: Number&#10;A number value specifying the vertical position of mouse pointer.</param>
	},
	onMouseUp: function(x, y) {
		/// <summary>Implements ComponentController.OnMouseUp. Called when the user releases a mouse button.</summary>
		/// <param name="x" type="Number">Type: Number&#10;A number value specifying the horizontal position of mouse pointer.</param>
		/// <param name="y" type="Number">Type: Number&#10;A number value specifying the vertical position of mouse pointer.</param>
	},
	onMouseWheel: function(x, y, delta) {
		/// <summary>Implements ComponentController.onMouseWheel. Called when the user scrolls with the middle mouse button.</summary>
		/// <param name="x" type="Number">Type: Number&#10;A number value specifying the horizontal position of mouse pointer.</param>
		/// <param name="y" type="Number">Type: Number&#10;A number value specifying the vertical position of mouse pointer.</param>
		/// <param name="delta" type="Number">Type: Number&#10;A number value specifying the amount and the direction for the mouse scroll.</param>
	}
};
MindFusion.Charting.PlotController.__class = true;

MindFusion.Charting.Point3D.prototype = {
	distance: function(p) {
		/// <summary>Gets the distance to specified point.</summary>
		/// <param name="p" type="Point3D">Type: Point3D&#10;A Point3D instance.</param>
		/// <returns type="Number">Type: Number&#10;A number value representing the distance.</returns>
	},
	scale: function(scale) {
		/// <summary>Scales the point's coordinates by specified scale factor.</summary>
		/// <param name="scale" type="Number">Type: Number&#10;A number value by which to multiply point's coordinates.</param>
		/// <returns type="Point3D">Type: Point3D&#10;A Point3D containing scaled coordinates.</returns>
	},
	toString: function() {
		/// <summary>Returns a string representation of this point.</summary>
		/// <returns type="String">Type: String&#10;A string representation of this point.</returns>
	}
};
MindFusion.Charting.Point3D.__class = true;

MindFusion.Charting.Point3D.add = function(p1, p2) {
	/// <summary>Sums two points' coordinates.</summary>
	/// <param name="p1" type="Point3D">Type: Point3D&#10;The first point.</param>
	/// <param name="p2" type="Point3D">Type: Point3D&#10;The second point.</param>
	/// <returns type="Point3D">Type: Point3D&#10;A Point3D containing sum of coordinates.</returns>
};

MindFusion.Charting.PointSeries.prototype = {
	getLabel: function(index, kind) {
		/// <summary>Implements Series.GetLabel. Returns an element of the Labels list.</summary>
		/// <param name="index" type="Number">Type: Number&#10;An integer value specifying the index of a data item.</param>
		/// <param name="kind" type="MindFusion.Charting.LabelKinds">Type: LabelKinds&#10;A member of the LabelKinds enumeration.</param>
		/// <returns type="String">Type: String&#10;A string containing the item's label.</returns>
	},
	getValue: function(index, dimension) {
		/// <summary>Implements Series.GetValue. Returns a coordinate of specified point in this series.</summary>
		/// <param name="index" type="Number">Type: Number&#10;An integer value specifying the index of a data item.</param>
		/// <param name="dimension" type="Number">Type: Number&#10;An integer value specifying the dimension whose coordinate to return.</param>
		/// <returns type="Number">Type: Number&#10;A double-precision number representing the value of a data item in the series.</returns>
	},
	isEmphasized: function(index) {
		/// <summary>Implements Series.IsEmphasized. PointSeries always returns false.</summary>
		/// <param name="index" type="Number">Type: Number&#10;An integer value specifying the index of a data item.</param>
		/// <returns type="Boolean">Type: Boolean&#10;true to emphasize the specified data item, or false otherwise.</returns>
	},
	isSorted: function(dimension) {
		/// <summary>Implements Series.IsSorted. PointSeries always returns false.</summary>
		/// <param name="dimension" type="Number">Type: Number&#10;An integer value identifying the dimension.</param>
		/// <returns type="Boolean">Type: Boolean&#10;true if the values are sorted in specified dimension, or false otherwise.</returns>
	},
	onDataChanged: function() {
		/// <summary>Raises the DataChanged event.</summary>
	}
};
MindFusion.Charting.PointSeries.__class = true;

MindFusion.Charting.PointSeries3D.prototype = {
	getLabel: function(index, kind) {
		/// <summary>Implements Series.GetLabel. Returns an element of the Labels list.</summary>
		/// <param name="index" type="Number">Type: Number&#10;An integer value specifying the index of a data item.</param>
		/// <param name="kind" type="MindFusion.Charting.LabelKinds">Type: LabelKinds&#10;A member of the LabelKinds enumeration.</param>
		/// <returns type="String">Type: String&#10;A string containing the item's label.</returns>
	},
	getValue: function(index, dimension) {
		/// <summary>Implements Series.GetValue. Returns a coordinate of specified point in this series.</summary>
		/// <param name="index" type="Number">Type: Number&#10;An integer value specifying the index of a data item.</param>
		/// <param name="dimension" type="Number">Type: Number&#10;An integer value specifying the dimension whose coordinate to return.</param>
		/// <returns type="Number">Type: Number&#10;A double-precision number representing the value of a data item in the series.</returns>
	},
	isEmphasized: function(index) {
		/// <summary>Implements Series.IsEmphasized. PointSeries3D always returns false.</summary>
		/// <param name="index" type="Number">Type: Number&#10;An integer value specifying the index of a data item.</param>
		/// <returns type="Boolean">Type: Boolean&#10;true to emphasize the specified data item, or false otherwise.</returns>
	},
	isSorted: function(dimension) {
		/// <summary>Implements Series.IsSorted. PointSeries3D always returns false.</summary>
		/// <param name="dimension" type="Number">Type: Number&#10;An integer value identifying the dimension.</param>
		/// <returns type="Boolean">Type: Boolean&#10;true if the values are sorted in specified dimension, or false otherwise.</returns>
	},
	onDataChanged: function() {
		/// <summary>Raises the DataChanged event.</summary>
	}
};
MindFusion.Charting.PointSeries3D.__class = true;

MindFusion.Charting.PolarPlot.prototype = {
	createController: function(context) {
		/// <summary>Component.CreateController override. Returns a ComponentController used to interact with this component.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
		/// <returns type="ComponentController">Type: ComponentController&#10;An instance of the RotationController class.</returns>
	},
	rotatePoint: function(pointToRotate, centerPoint, angleInDegrees) {
		/// <summary>Rotates point around specified rotation center at specified angle.</summary>
		/// <param name="pointToRotate" type="MindFusion.Drawing.Point">Type: Point&#10;The point to rotate.</param>
		/// <param name="centerPoint" type="MindFusion.Drawing.Point">Type: Point&#10;The rotation center.</param>
		/// <param name="angleInDegrees" type="Number">Type: Number&#10;The rotation angle.</param>
		/// <returns type="MindFusion.Drawing.Point">Type: Point&#10;</returns>
	},
	visit: function(visitor) {
		/// <summary>Component.Visit override. Calls visitor's VisitPlot method.</summary>
		/// <param name="visitor" type="ComponentVisitor">Type: ComponentVisitor&#10;An instance of a ComponentVisitor -derived class.</param>
	}
};
MindFusion.Charting.PolarPlot.__class = true;

MindFusion.Charting.RadarAxisOptions.prototype = {
	draw: function(context) {
		/// <summary>AxisRenderer.Draw override.</summary>
		/// <param name="context" type="void">Type: void&#10;</param>
	},
	effectiveAxis: function(context) {
		/// <summary>AxisRenderer.EffectiveAxis override.</summary>
		/// <param name="context" type="void">Type: void&#10;</param>
	},
	measure: function(maxWidth, maxHeight, context) {
		/// <summary>AxisRenderer.Measure override.</summary>
		/// <param name="maxWidth" type="void">Type: void&#10;</param>
		/// <param name="maxHeight" type="void">Type: void&#10;</param>
		/// <param name="context" type="void">Type: void&#10;</param>
	}
};
MindFusion.Charting.RadarAxisOptions.__class = true;

MindFusion.Charting.RadarGridType = {
		/// <summary>Identifies the grid types supported by RadarPlot.</summary>
		/// <field name="Radar">Type: Int32&#10;Identifies radar grid consisting as concentric circles.</field>
		/// <field name="Spiderweb">Type: Int32&#10;Identifies spider-web grid consisting as concentric regular polygons.</field>
	Radar: 0,
	Spiderweb: 1
}
MindFusion.Charting.RadarGridType.__enum = true;

MindFusion.Charting.RadarPlot.prototype = {
	drawGrid: function(context) {
		/// <summary>Plot.DrawGrid override. Draws spiderweb of radial grid.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
	},
	getEffectiveAxis: function(index) {
		/// <summary>Gets the Axis representing the range for specified data variable index.</summary>
		/// <param name="index" type="Number">Type: Number&#10;An integer index of data items in series.</param>
		/// <returns type="MindFusion.Charting.Axis">Type: Axis&#10;The associated Axis.</returns>
	},
	startMeasureData: function(context) {
		/// <summary>Plot.StartMeasureData override. Called in the beginning of data measurement pass.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
	}
};
MindFusion.Charting.RadarPlot.__class = true;

MindFusion.Charting.RadarRenderer.prototype = {
	data: function(seriesIndex, dataIndex) {
		/// <summary>Returns the data value of specified series item.</summary>
		/// <param name="seriesIndex" type="Number">Type: Number&#10;An integer index of a Series within the list of series rendered by this Renderer2D.</param>
		/// <param name="dataIndex" type="Number">Type: Number&#10;An integer index of the data item in specified series.</param>
		/// <returns type="Number">Type: Number&#10;A number value.</returns>
	},
	draw: function(context) {
		/// <summary>SeriesRenderer.Draw override. Draws the series data in specified RenderContext.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
	},
	drawHighlight: function(context, hitResult) {
		/// <summary>SeriesRenderer.DrawHighlight override. Draws highlighted data item in specified RenderContext.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
		/// <param name="hitResult" type="MindFusion.Charting.HitResult">Type: HitResult&#10;A HitResult instance identifying highlighted data item.</param>
	},
	enumSeries: function() {
		/// <summary>Implement SeriesContainer.</summary>
		/// <returns type="IEnumerable<Series>">Type: IEnumerable<Series>&#10;An instance of the IEnumerable&amp;lt;Series&amp;gt; class.</returns>
	},
	enumVisibleRanges: function(context, process) {
		/// <summary>Enumerates each series once providing a list of all visible points at each iteration.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
		/// <param name="process" type="ProcessRange">Type: ProcessRange&#10;A ProcessRange callback.</param>
	},
	getMaxValue: function(index) {
		/// <summary>Gets the maximum value from all series located at specified index.</summary>
		/// <param name="index" type="Number">Type: Number&#10;An integer index of data element in the series.</param>
		/// <returns type="Number">Type: Number&#10;A number value representing the largest data element.</returns>
	},
	getMinValue: function(index) {
		/// <summary>Gets the minimum value from all series located at specified index.</summary>
		/// <param name="index" type="Number">Type: Number&#10;An integer index of data element in the series.</param>
		/// <returns type="Number">Type: Number&#10;A number value representing the smallest data element.</returns>
	},
	hitTest: function(context, location) {
		/// <summary>SeriesRenderer.HitTest override. Hit-tests the visual representation of the series for a data item.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
		/// <param name="location" type="MindFusion.Drawing.Point">Type: Point&#10;A Point specifying where to look for data items.</param>
		/// <returns type="MindFusion.Charting.HitResult">Type: HitResult&#10;A HitResult instance identifying the found data item.</returns>
	},
	measureDataRange: function(context) {
		/// <summary>SeriesRenderer.MeasureDataRange override. Measures the data range of rendered series and assigns it to the associated Axis objects if their MinValue and MaxValue are not set.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
	}
};
MindFusion.Charting.RadarRenderer.__class = true;

MindFusion.Charting.RadarScatterRenderer.prototype = {
	enumPoints: function(context, process) {
		/// <summary>ScatterRenderer.EnumPoints override. Enumerates the data values of rendered series mapped to plot's 2D coordinates.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
		/// <param name="process" type="ProcessPoint">Type: ProcessPoint&#10;A ProcessPoint callback.</param>
	},
	measureDataRange: function(context) {
		/// <summary>Renderer2D.MeasureDataRange override. Measures the data range of rendered series and assigns it to the associated Axis objects if their MinValue and MaxValue are not set.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
	}
};
MindFusion.Charting.RadarScatterRenderer.__class = true;

MindFusion.Charting.RadarType = {
		/// <summary>Identifies the type of radar-chart.</summary>
		/// <field name="Pie">Type: Int32&#10;Draw data items as circular sectors.</field>
		/// <field name="Polygon">Type: Int32&#10;Draw each series as a polygon.</field>
	Pie: 0,
	Polygon: 1
}
MindFusion.Charting.RadarType.__enum = true;

MindFusion.Charting.RenderContext.prototype = {
	getClipRect: function(relativeTo) {
		/// <summary>Gets the clip rectangle relative to specified Component.</summary>
		/// <param name="relativeTo" type="Component">Type: Component&#10;A Component instance.</param>
		/// <returns type="Rect">Type: Rect&#10;A Rect instance.</returns>
	},
	getXAxis: function(series) {
		/// <summary>Gets the X axis assigned to a Renderer2D or returns one from parent plot or chart.</summary>
		/// <param name="series" type="Renderer2D" optional="true">Optional. Type: Renderer2D&#10;A Renderer2D instance.</param>
		/// <returns type="Axis">Type: Axis&#10;An Axis instance.</returns>
	},
	getYAxis: function(series) {
		/// <summary>Gets the Y axis assigned to a Renderer2D or returns one from parent plot or chart.</summary>
		/// <param name="series" type="Renderer2D" optional="true">Optional. Type: Renderer2D&#10;A Renderer2D instance.</param>
		/// <returns type="Axis">Type: Axis&#10;An Axis instance.</returns>
	},
	textStyle: function(hint) {
		/// <summary>Gets a TextStyle from current Theme.</summary>
		/// <param name="hint" type="TextStyleHint">Type: TextStyleHint&#10;A member of the TextStyleHint enumeration.</param>
		/// <returns type="TextStyle">Type: TextStyle&#10;A TextStyle instance.</returns>
	}
};
MindFusion.Charting.RenderContext.__class = true;

MindFusion.Charting.RenderContext2D.prototype = {
};
MindFusion.Charting.RenderContext2D.__class = true;

MindFusion.Charting.Renderer2D.prototype = {
	domainData: function(seriesIndex, dataIndex) {
		/// <summary>Gets the domain axis coordinate (input value) of specified data item.</summary>
		/// <param name="seriesIndex" type="Number">Type: Number&#10;An integer index of a Series within the list of series rendered by this Renderer2D.</param>
		/// <param name="dataIndex" type="Number">Type: Number&#10;An integer index of the data item in specified series.</param>
		/// <returns type="Number">Type: Number&#10;A number value.</returns>
	},
	drawHighlight: function(context, hitResult) {
		/// <summary>SeriesRenderer.DrawHighlight override. Draws highlighted data item in specified RenderContext.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
		/// <param name="hitResult" type="MindFusion.Charting.HitResult">Type: HitResult&#10;A HitResult instance identifying highlighted data item.</param>
	},
	enumSeries: function() {
		/// <summary>Implements the SeriesContainer interface.</summary>
		/// <returns type="IEnumerable<Series>">Type: IEnumerable<Series>&#10;An instance of the IEnumerable&amp;lt;Series&amp;gt; class.</returns>
	},
	enumVisiblePointPairs: function(context, process) {
		/// <summary>Enumerates the data values of rendered series mapped to plot 2D coordinates.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
		/// <param name="process" type="ProcessPoints">Type: ProcessPoints&#10;A ProcessPoints callback.</param>
	},
	enumVisiblePoints: function(context, frontToBack, process) {
		/// <summary>Enumerates the data values of rendered series mapped to plot 2D coordinates.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
		/// <param name="frontToBack" type="Boolean">Type: Boolean&#10;true if the series list should be enumerated from front to back, or false otherwise.</param>
		/// <param name="process" type="ProcessPoint">Type: ProcessPoint&#10;A ProcessPoint callback.</param>
	},
	enumVisiblePoints1: function(context, process) {
		/// <summary>Enumerates the data values of rendered series mapped to plot 2D coordinates.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
		/// <param name="process" type="ProcessPoint">Type: ProcessPoint&#10;A ProcessPoint callback.</param>
	},
	enumVisibleRanges: function(context, process) {
		/// <summary>Enumerates each series once providing a list of all visible points at each iteration.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
		/// <param name="process" type="ProcessRange">Type: ProcessRange&#10;A ProcessRange callback.</param>
	},
	getMaxXSum: function() {
		/// <summary>Gets the maximum sum of X data values locates at same index in all series.</summary>
		/// <returns type="Number">Type: Number&#10;A number value containing the maximum sum.</returns>
	},
	getMaxYSum: function() {
		/// <summary>Gets the maximum sum of Y data values locates at same index in all series.</summary>
		/// <returns type="Number">Type: Number&#10;A number value containing the maximum sum.</returns>
	},
	getPixel: function(seriesIndex, dataIndex, xAxis, yAxis, component) {
		/// <summary>Gets the coordinates of specified data item when mapped to a Plot2D pixel.</summary>
		/// <param name="seriesIndex" type="Number">Type: Number&#10;An integer index of a Series within the list of series rendered by this Renderer2D.</param>
		/// <param name="dataIndex" type="Number">Type: Number&#10;An integer index of the data item in specified series.</param>
		/// <param name="xAxis" type="MindFusion.Charting.Axis">Type: Axis&#10;An Axis reference specifying the X axis.</param>
		/// <param name="yAxis" type="MindFusion.Charting.Axis">Type: Axis&#10;An Axis reference specifying the Y axis.</param>
		/// <param name="component" type="Components.Component">Type: Component&#10;An instance of Plot2D or derived class.</param>
		/// <returns type="MindFusion.Drawing.Point">Type: Point&#10;A Point containing Plot2D coordinates corresponding to specified data item.</returns>
	},
	getPixel1: function(valueX, xAxis, valueY, yAxis, component) {
		/// <summary>Gets the coordinates of specified data item when mapped to a Plot2D pixel.</summary>
		/// <param name="valueX" type="Number">Type: Number&#10;The X value of data item in logical coordinate system.</param>
		/// <param name="xAxis" type="MindFusion.Charting.Axis">Type: Axis&#10;The X Axis from which logical value is mapped to plot's actual width.</param>
		/// <param name="valueY" type="Number">Type: Number&#10;The Y value of data item in logical coordinate system.</param>
		/// <param name="yAxis" type="MindFusion.Charting.Axis">Type: Axis&#10;The Y Axis from which logical value is mapped to plot's actual height.</param>
		/// <param name="component" type="Components.Component">Type: Component&#10;An instance of Plot2D or derived class.</param>
		/// <returns type="MindFusion.Drawing.Point">Type: Point&#10;</returns>
	},
	hitTest: function(context, location) {
		/// <summary>SeriesRenderer.HitTest override. Hit-tests the visual representation of the series for a data item.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
		/// <param name="location" type="MindFusion.Drawing.Point">Type: Point&#10;A Point specifying where to look for data items.</param>
		/// <returns type="MindFusion.Charting.HitResult">Type: HitResult&#10;A HitResult instance identifying the found data item.</returns>
	},
	imageData: function(seriesIndex, dataIndex) {
		/// <summary>Gets the image axis coordinate (output value) of specified data item.</summary>
		/// <param name="seriesIndex" type="Number">Type: Number&#10;An integer index of a Series within the list of series rendered by this Renderer2D.</param>
		/// <param name="dataIndex" type="Number">Type: Number&#10;An integer index of the data item in specified series.</param>
		/// <returns type="Number">Type: Number&#10;A number value.</returns>
	},
	measureDataRange: function(context) {
		/// <summary>SeriesRenderer.MeasureDataRange override. Measures the data range of rendered series and assigns it to the associated Axis objects if their MinValue and MaxValue are not set.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
	},
	startMeasureData: function(context) {
		/// <summary>SeriesRenderer.StartMeasureData override. Called to reset measure accumulators at the beginning of a measure pass.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
	},
	xData: function(seriesIndex, dataIndex) {
		/// <summary>Gets the X value of specified data item.</summary>
		/// <param name="seriesIndex" type="Number">Type: Number&#10;An integer index of a Series within the list of series rendered by this Renderer2D.</param>
		/// <param name="dataIndex" type="Number">Type: Number&#10;An integer index of the data item in specified series.</param>
		/// <returns type="Number">Type: Number&#10;A number value.</returns>
	},
	xSorted: function(seriesIndex) {
		/// <summary>Gets a value indicating whether values of specified series increase monotonously in X dimension.</summary>
		/// <param name="seriesIndex" type="Number">Type: Number&#10;An integer index of a Series within the list of series rendered by this Renderer2D.</param>
		/// <returns type="Boolean">Type: Boolean&#10;true if specified series is sorted, or false otherwise.</returns>
	},
	yData: function(seriesIndex, dataIndex) {
		/// <summary>Gets the Y value of specified data item.</summary>
		/// <param name="seriesIndex" type="Number">Type: Number&#10;An integer index of a Series within the list of series rendered by this Renderer2D.</param>
		/// <param name="dataIndex" type="Number">Type: Number&#10;An integer index of the data item in specified series.</param>
		/// <returns type="Number">Type: Number&#10;A number value.</returns>
	},
	ySorted: function(seriesIndex) {
		/// <summary>Gets a value indicating whether values of specified series increase monotonously in Y dimension.</summary>
		/// <param name="seriesIndex" type="Number">Type: Number&#10;An integer index of a Series within the list of series rendered by this Renderer2D.</param>
		/// <returns type="Boolean">Type: Boolean&#10;true if specified series is sorted, or false otherwise.</returns>
	}
};
MindFusion.Charting.Renderer2D.__class = true;

MindFusion.Charting.RotationController.prototype = {
	getRunningAnimation: function() {
		/// <summary>For internal use.</summary>
		/// <returns type="ComponentAnimation">Type: ComponentAnimation&#10;An instance of a ComponentAnimation -derived class.</returns>
	},
	onMouseDown: function(x, y) {
		/// <summary>PlotController.OnMouseDown override. Called when the user presses a mouse button.</summary>
		/// <param name="x" type="Number">Type: Number&#10;A number value specifying the horizontal position of mouse pointer.</param>
		/// <param name="y" type="Number">Type: Number&#10;A number value specifying the vertical position of mouse pointer.</param>
	},
	onMouseMove: function(x, y) {
		/// <summary>PlotController.OnMouseMove override. Called when the user moves the mouse.</summary>
		/// <param name="x" type="Number">Type: Number&#10;A number value specifying the horizontal position of mouse pointer.</param>
		/// <param name="y" type="Number">Type: Number&#10;A number value specifying the vertical position of mouse pointer.</param>
	},
	onMouseUp: function(x, y) {
		/// <summary>PlotController.OnMouseUp override. Called when the user releases a mouse button.</summary>
		/// <param name="x" type="Number">Type: Number&#10;A number value specifying the horizontal position of mouse pointer.</param>
		/// <param name="y" type="Number">Type: Number&#10;A number value specifying the vertical position of mouse pointer.</param>
	}
};
MindFusion.Charting.RotationController.__class = true;

MindFusion.Charting.RotationControllerAnimation.prototype = {
};
MindFusion.Charting.RotationControllerAnimation.__class = true;

MindFusion.Charting.ScatterRenderer.prototype = {
	draw: function(context) {
		/// <summary>SeriesRenderer.Draw override. Draws the series data in specified RenderContext.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
	},
	drawHighlight: function(context, hitResult) {
		/// <summary>Renderer2D.DrawHighlight override. Draws highlighted shape in specified RenderContext.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
		/// <param name="hitResult" type="MindFusion.Charting.HitResult">Type: HitResult&#10;A HitResult instance identifying highlighted data item.</param>
	},
	enumPoints: function(context, process) {
		/// <summary>Enumerates the data values of rendered series mapped to plot 2D coordinates.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
		/// <param name="process" type="ProcessPoint">Type: ProcessPoint&#10;A ProcessPoint callback.</param>
	},
	hitTest: function(context, location) {
		/// <summary>Renderer2D.HitTest override. Hit-tests the scatter representations of data items.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
		/// <param name="location" type="MindFusion.Drawing.Point">Type: Point&#10;A Point specifying where to look for data items.</param>
		/// <returns type="MindFusion.Charting.HitResult">Type: HitResult&#10;A HitResult instance identifying the found data item.</returns>
	}
};
MindFusion.Charting.ScatterRenderer.__class = true;

MindFusion.Charting.ScatterType = {
		/// <summary>Identifies the shapes rendered by a ScatterRenderer.</summary>
		/// <field name="Circle">Type: Int32&#10;Draw circles.</field>
		/// <field name="Diamond">Type: Int32&#10;Draw diamonds.</field>
		/// <field name="None">Type: Int32&#10;Do not draw scatter.</field>
		/// <field name="Square">Type: Int32&#10;Draw squares.</field>
		/// <field name="Triangle">Type: Int32&#10;Draw triangles.</field>
	Circle: 0,
	Diamond: 1,
	None: 2,
	Square: 3,
	Triangle: 4
}
MindFusion.Charting.ScatterType.__enum = true;

MindFusion.Charting.Series2D.prototype = {
	getLabel: function(index, kind) {
		/// <summary>Implements Series.GetLabel. Returns an element of the Labels list.</summary>
		/// <param name="index" type="Number">Type: Number&#10;An integer value specifying the index of a data item.</param>
		/// <param name="kind" type="MindFusion.Charting.LabelKinds">Type: LabelKinds&#10;A member of the LabelKinds enumeration.</param>
		/// <returns type="String">Type: String&#10;A string containing the item's label.</returns>
	},
	getValue: function(index, dimension) {
		/// <summary>Implements Series.GetValue. Returns a value for the specified data item in this series.</summary>
		/// <param name="index" type="Number">Type: Number&#10;An integer value specifying the index of a data item.</param>
		/// <param name="dimension" type="Number">Type: Number&#10;An integer value specifying the dimension whose coordinate to return.</param>
		/// <returns type="Number">Type: Number&#10;A double-precision number representing the value of a data item in the series.</returns>
	},
	isEmphasized: function(index) {
		/// <summary>Implements Series.IsEmphasized. Series2D always returns false.</summary>
		/// <param name="index" type="Number">Type: Number&#10;An integer value specifying the index of a data item.</param>
		/// <returns type="Boolean">Type: Boolean&#10;true to emphasize the specified data item, or false otherwise.</returns>
	},
	isSorted: function(dimension) {
		/// <summary>Implements Series.IsSorted. Series2D always returns false.</summary>
		/// <param name="dimension" type="Number">Type: Number&#10;An integer value identifying the dimension.</param>
		/// <returns type="Boolean">Type: Boolean&#10;true if the values are sorted in specified dimension, or false otherwise.</returns>
	},
	onDataChanged: function() {
		/// <summary>Raises the DataChanged event.</summary>
	}
};
MindFusion.Charting.Series2D.__class = true;

MindFusion.Charting.Series3D.prototype = {
	getLabel: function(index, kind) {
		/// <summary>Implements Series.GetLabel. Returns an element of the Labels list.</summary>
		/// <param name="index" type="Number">Type: Number&#10;An integer value specifying the index of a data item.</param>
		/// <param name="kind" type="MindFusion.Charting.LabelKinds">Type: LabelKinds&#10;A member of the LabelKinds enumeration.</param>
		/// <returns type="String">Type: String&#10;A string containing the item's label.</returns>
	},
	getValue: function(index, dimension) {
		/// <summary>Implements Series.GetValue. Returns a value for the specified data item in this series.</summary>
		/// <param name="index" type="Number">Type: Number&#10;An integer value specifying the index of a data item.</param>
		/// <param name="dimension" type="Number">Type: Number&#10;An integer value specifying the dimension whose coordinate to return.</param>
		/// <returns type="Number">Type: Number&#10;A double-precision number representing the value of a data item in the series.</returns>
	},
	isEmphasized: function(index) {
		/// <summary>Implements Series.IsEmphasized. Series3D always returns false.</summary>
		/// <param name="index" type="Number">Type: Number&#10;An integer value specifying the index of a data item.</param>
		/// <returns type="Boolean">Type: Boolean&#10;true to emphasize the specified data item, or false otherwise.</returns>
	},
	isSorted: function(dimension) {
		/// <summary>Implements Series.IsSorted. Series3D always returns false.</summary>
		/// <param name="dimension" type="Number">Type: Number&#10;An integer value identifying the dimension.</param>
		/// <returns type="Boolean">Type: Boolean&#10;true if the values are sorted in specified dimension, or false otherwise.</returns>
	},
	onDataChanged: function() {
		/// <summary>Raises the DataChanged event.</summary>
	}
};
MindFusion.Charting.Series3D.__class = true;

MindFusion.Charting.SeriesRenderer.prototype = {
	adjustDataRange: function(context) {
		/// <summary>Adjusts the data range of associated Axis objects after initial measure pass.</summary>
		/// <param name="context" type="void">Type: void&#10;A RenderContext instance.</param>
	},
	domainDimension: function(series) {
		/// <summary>Implements the SeriesContainer interface. Gets the index of the dimension whose set of values should be treated as domain of plotted function.</summary>
		/// <param name="series" type="Series">Type: Series&#10;A Series in this container.</param>
	},
	draw: function(context) {
		/// <summary>Draws the series data in specified RenderContext.</summary>
		/// <param name="context" type="void">Type: void&#10;A RenderContext instance.</param>
	},
	drawHighlight: function(context, hitResult) {
		/// <summary>Draws highlighted data item in specified RenderContext.</summary>
		/// <param name="context" type="void">Type: void&#10;A RenderContext instance.</param>
		/// <param name="hitResult" type="void">Type: void&#10;A HitResult instance identifying highlighted data item.</param>
	},
	effectiveFill: function(seriesIndex, dataIndex, context) {
		/// <summary>Gets the brush that should be used to fill the representation of specified data item.</summary>
		/// <param name="seriesIndex" type="Number">Type: Number&#10;An integer index of a Series within the list of series rendered by this SeriesRenderer.</param>
		/// <param name="dataIndex" type="Number">Type: Number&#10;An integer index of the data item in specified series.</param>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
		/// <returns type="MindFusion.Charting.Drawing.Brush">Type: Brush&#10;A Brush instance.</returns>
	},
	effectiveLabelBrush: function(context) {
		/// <summary>Gets the System.Drawing.Brush that should be used to draw labels of data items.</summary>
		/// <param name="context" type="void">Type: void&#10;A RenderContext instance used to find styles and theme from dashboard hierarchy.</param>
	},
	effectiveLabelFont: function(context) {
		/// <summary>Gets the Font that should be used to draw labels of data items.</summary>
		/// <param name="context" type="void">Type: void&#10;A RenderContext instance used to find styles and theme from dashboard hierarchy.</param>
	},
	effectiveStroke: function(seriesIndex, dataIndex, context) {
		/// <summary>Gets the brush that should be used to stroke the representation of specified data item.</summary>
		/// <param name="seriesIndex" type="Number">Type: Number&#10;An integer index of a Series within the list of series rendered by this SeriesRenderer.</param>
		/// <param name="dataIndex" type="Number">Type: Number&#10;An integer index of the data item in specified series.</param>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
		/// <returns type="MindFusion.Charting.Drawing.Brush">Type: Brush&#10;A Brush instance.</returns>
	},
	effectiveStrokeDashStyle: function(seriesIndex, dataIndex, context) {
		/// <summary>Gets the dash style of the pen that should be used to stroke the representation of specified data item.</summary>
		/// <param name="seriesIndex" type="Number">Type: Number&#10;An integer index of a Series within the list of series rendered by this SeriesRenderer.</param>
		/// <param name="dataIndex" type="Number">Type: Number&#10;An integer index of the data item in specified series.</param>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
		/// <returns type="MindFusion.Charting.Drawing.DashStyle">Type: DashStyle&#10;A member of the DashStyle enumeration.</returns>
	},
	effectiveStrokePen: function(seriesIndex, dataIndex, context) {
		/// <summary>Gets the Pen that should be used to stroke the representation of specified data item.</summary>
		/// <param name="seriesIndex" type="Number">Type: Number&#10;An integer index of a Series within the list of series rendered by this SeriesRenderer.</param>
		/// <param name="dataIndex" type="Number">Type: Number&#10;An integer index of the data item in specified series.</param>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
		/// <returns type="MindFusion.Charting.Drawing.Pen">Type: Pen&#10;A Pen instance.</returns>
	},
	effectiveStrokeThickness: function(seriesIndex, dataIndex, context) {
		/// <summary>Gets the thickness of the pen that should be used to stroke the representation of specified data item.</summary>
		/// <param name="seriesIndex" type="Number">Type: Number&#10;An integer index of a Series within the list of series rendered by this SeriesRenderer.</param>
		/// <param name="dataIndex" type="Number">Type: Number&#10;An integer index of the data item in specified series.</param>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
		/// <returns type="Number">Type: Number&#10;A number value.</returns>
	},
	hitTest: function(context, location) {
		/// <summary>Hit-tests the visual representation of the series for a data item.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
		/// <param name="location" type="MindFusion.Drawing.Point">Type: Point&#10;A Point specifying where to look for data items.</param>
		/// <returns type="MindFusion.Charting.HitResult">Type: HitResult&#10;A HitResult instance identifying the found data item.</returns>
	},
	measureDataRange: function(context) {
		/// <summary>Measures the data range of rendered series and assigns it to the associated Axis objects if their MinValue and MaxValue are not set.</summary>
		/// <param name="context" type="void">Type: void&#10;A RenderContext instance.</param>
	},
	onPropertyChanged: function(propertyName) {
		/// <summary>Raises the PropertyChanged event.</summary>
		/// <param name="propertyName" type="void">Type: void&#10;Specifies the name of changed property.</param>
	},
	onSeriesDataChanged: function(sender, e) {
		/// <summary>Called when Series raise their DataChanged event.</summary>
		/// <param name="sender" type="Object">Type: Object&#10;The Series raising the event.</param>
		/// <param name="e" type="EventArgs">Type: EventArgs&#10;An EventArgs instance.</param>
	},
	searchStyle: function(check, context) {
		/// <summary>Returns a SeriesStyle object that meets specified criteria.</summary>
		/// <param name="check" type="void">Type: void&#10;A StyleCheck delegate that tests SeriesStyle for some criteria.</param>
		/// <param name="context" type="void">Type: void&#10;A RenderContext instance used to access styles and theme from the dashboard hierarchy.</param>
	},
	setToolTip: function(text, location) {
		/// <summary>Sets tooltip text and location.</summary>
		/// <param name="text" type="void">Type: void&#10;A string specifying tooltip text.</param>
		/// <param name="location" type="void">Type: void&#10;A Point specifying tooltip location.</param>
	},
	startMeasureData: function(context) {
		/// <summary>Called to reset measure accumulators at the beginning of a measure pass.</summary>
		/// <param name="context" type="void">Type: void&#10;A RenderContext instance.</param>
	},
	subscribe: function(series) {
		/// <summary>Subscribes to the DataChanged event of specified Series.</summary>
		/// <param name="series" type="Series">Type: Series&#10;A Series instance.</param>
	},
	unsubscribe: function(series) {
		/// <summary>Unsubscribes from the DataChanged event of specified Series.</summary>
		/// <param name="series" type="Series">Type: Series&#10;A Series instance.</param>
	}
};
MindFusion.Charting.SeriesRenderer.__class = true;

MindFusion.Charting.SimpleSeries.prototype = {
	getLabel: function(index, kind) {
		/// <summary>Implements Series.GetLabel. Returns an element of the labels list.</summary>
		/// <param name="index" type="Number">Type: Number&#10;An integer value specifying the index of a data item.</param>
		/// <param name="kind" type="MindFusion.Charting.LabelKinds">Type: LabelKinds&#10;A member of the LabelKinds enumeration.</param>
		/// <returns type="String">Type: String&#10;A string containing the item's label.</returns>
	},
	getValue: function(index, dimension) {
		/// <summary>Implements Series.GetValue. Returns a value for the specified data item in this series.</summary>
		/// <param name="index" type="Number">Type: Number&#10;An integer value specifying the index of a data item.</param>
		/// <param name="dimension" type="Number">Type: Number&#10;An integer value specifying the dimension whose coordinate to return.</param>
		/// <returns type="Number">Type: Number&#10;A double-precision number representing the value of a data item in the series.</returns>
	},
	isEmphasized: function(index) {
		/// <summary>Implements Series.IsEmphasized. Gets a value indicating whether the specified data item should be emphasized by the SeriesRenderer.</summary>
		/// <param name="index" type="Number">Type: Number&#10;An integer value specifying the index of a data item.</param>
		/// <returns type="Boolean">Type: Boolean&#10;true to emphasize the specified data item, or false otherwise.</returns>
	},
	isSorted: function(dimension) {
		/// <summary>Implements Series.IsSorted. SimpleSeries always returns false.</summary>
		/// <param name="dimension" type="Number">Type: Number&#10;An integer value identifying the dimension.</param>
		/// <returns type="Boolean">Type: Boolean&#10;true if the values are sorted in specified dimension, or false otherwise.</returns>
	},
	onDataChanged: function() {
		/// <summary>Raises the DataChanged event.</summary>
	}
};
MindFusion.Charting.SimpleSeries.__class = true;

MindFusion.Charting.StackRenderer.prototype = {
	enumVisibleStackPoints: function(context, process) {
		/// <summary>Enumerates the data values of rendered series mapped to plot 2D coordinates.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
		/// <param name="process" type="ProcessStackPoint">Type: ProcessStackPoint&#10;A ProcessStackPoint callback.</param>
	},
	enumVisibleStackRanges: function(context, process) {
		/// <summary>Enumerates each series once providing a list of all visible points at each iteration.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
		/// <param name="process" type="ProcessStackRange">Type: ProcessStackRange&#10;A ProcessStackRange callback.</param>
	},
	getPixel: function(seriesIndex, dataIndex, xAxis, yAxis, component) {
		/// <summary>Gets the coordinates of specified data item when mapped to a Plot2D pixel.</summary>
		/// <param name="seriesIndex" type="Number">Type: Number&#10;An integer index of a Series within the list of series rendered by this Renderer2D.</param>
		/// <param name="dataIndex" type="Number">Type: Number&#10;An integer index of the data item in specified series.</param>
		/// <param name="xAxis" type="MindFusion.Charting.Axis">Type: Axis&#10;An Axis reference specifying the X axis.</param>
		/// <param name="yAxis" type="MindFusion.Charting.Axis">Type: Axis&#10;An Axis reference specifying the Y axis.</param>
		/// <param name="component" type="Components.Component">Type: Component&#10;An instance of Plot2D or derived class.</param>
		/// <returns type="MindFusion.Drawing.Point">Type: Point&#10;A Point containing Plot2D coordinates corresponding to specified data item.</returns>
	},
	hitTest: function(context, location) {
		/// <summary>Renderer2D.HitTest override. Hit-tests the stack representations of data items.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
		/// <param name="location" type="MindFusion.Drawing.Point">Type: Point&#10;A Point specifying where to look for a data point.</param>
		/// <returns type="MindFusion.Charting.HitResult">Type: HitResult&#10;A HitResult instance identifying the found data item.</returns>
	},
	measureDataRange: function(context) {
		/// <summary>Renderer2D.MeasureDataRange override. Measures the data range of rendered series and assigns it to the associated Axis objects if their MinValue and MaxValue are not set.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
	}
};
MindFusion.Charting.StackRenderer.__class = true;

MindFusion.Charting.StepAreaRenderer.prototype = {
	draw: function(context) {
		/// <summary>SeriesRenderer.Draw override. Draws the series data in specified RenderContext.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
	}
};
MindFusion.Charting.StepAreaRenderer.__class = true;

MindFusion.Charting.StepRenderer.prototype = {
	draw: function(context) {
		/// <summary>SeriesRenderer.Draw override. Draws the series data in specified RenderContext.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
	}
};
MindFusion.Charting.StepRenderer.__class = true;

MindFusion.Charting.StockPrice.prototype = {
};
MindFusion.Charting.StockPrice.__class = true;

MindFusion.Charting.StockPriceSeries.prototype = {
	getLabel: function(index, kind) {
		/// <summary>Implements Series.GetLabel. Returns DateTime value at specified index as an XAxisLabel.</summary>
		/// <param name="index" type="Number">Type: Number&#10;An integer value specifying the index of a data item.</param>
		/// <param name="kind" type="MindFusion.Charting.LabelKinds">Type: LabelKinds&#10;A member of the LabelKinds enumeration.</param>
		/// <returns type="String">Type: String&#10;A string containing the item's label.</returns>
	},
	getValue: function(index, dimension) {
		/// <summary>Implements Series.GetValue. Returns a coordinate of specified point in this series.</summary>
		/// <param name="index" type="Number">Type: Number&#10;An integer value specifying the index of a data item.</param>
		/// <param name="dimension" type="Number">Type: Number&#10;An integer value specifying the dimension whose coordinate to return.</param>
		/// <returns type="Number">Type: Number&#10;A double-precision number representing the value of a data item in the series.</returns>
	},
	isEmphasized: function(index) {
		/// <summary>Implements Series.IsEmphasized. StockPriceSeries always returns false.</summary>
		/// <param name="index" type="Number">Type: Number&#10;An integer value specifying the index of a data item.</param>
		/// <returns type="Boolean">Type: Boolean&#10;true to emphasize the specified data item, or false otherwise.</returns>
	},
	isSorted: function(dimension) {
		/// <summary>Implements Series.IsSorted. StockPriceSeries always returns false.</summary>
		/// <param name="dimension" type="Number">Type: Number&#10;An integer value identifying the dimension.</param>
		/// <returns type="Boolean">Type: Boolean&#10;true if the values are sorted in specified dimension, or false otherwise.</returns>
	},
	onDataChanged: function() {
		/// <summary>Raises the DataChanged event.</summary>
	}
};
MindFusion.Charting.StockPriceSeries.__class = true;

MindFusion.Charting.TextRenderer.prototype = {
	drawLabelAtPoint: function(series, index, point, labelKind, format) {
		/// <summary>Draws the specified label centered at specified location.</summary>
		/// <param name="series" type="Series">Type: Series&#10;A Series whose label to draw.</param>
		/// <param name="index" type="Number">Type: Number&#10;An integer index of the label.</param>
		/// <param name="point" type="MindFusion.Drawing.Point">Type: Point&#10;A Point specifying the label's location.</param>
		/// <param name="labelKind" type="MindFusion.Charting.LabelKinds">Type: LabelKinds&#10;A member of the LabelKinds enumeration.</param>
		/// <param name="format" type="MindFusion.Charting.Drawing.StringFormat" optional="true">Optional. Type: StringFormat&#10;A StringFormat instance.</param>
	},
	drawLabelInRect: function(series, index, bounds, labelKind, format) {
		/// <summary>Draws the specified label in specified layout rectangle.</summary>
		/// <param name="series" type="Series">Type: Series&#10;A Series whose label to draw.</param>
		/// <param name="index" type="Number">Type: Number&#10;An integer index of the label.</param>
		/// <param name="bounds" type="MindFusion.Drawing.Rect">Type: Rect&#10;A RectangleF specifying the layout rectangle.</param>
		/// <param name="labelKind" type="MindFusion.Charting.LabelKinds">Type: LabelKinds&#10;A member of the LabelKinds enumeration.</param>
		/// <param name="format" type="MindFusion.Charting.Drawing.StringFormat" optional="true">Optional. Type: StringFormat&#10;A StringFormat instance.</param>
	},
	drawLeftFromPoint: function(series, index, point, labelKind) {
		/// <summary>Draws the specified label on the left side of the specified point.</summary>
		/// <param name="series" type="Series">Type: Series&#10;A Series whose label to draw.</param>
		/// <param name="index" type="Number">Type: Number&#10;An integer index of the label.</param>
		/// <param name="point" type="MindFusion.Drawing.Point">Type: Point&#10;A Point specifying the label's location.</param>
		/// <param name="labelKind" type="MindFusion.Charting.LabelKinds">Type: LabelKinds&#10;A member of the LabelKinds enumeration.</param>
	},
	drawRightFromPoint: function(series, index, point, labelKind) {
		/// <summary>Draws the specified label on the right side of specified point.</summary>
		/// <param name="series" type="Series">Type: Series&#10;A Series whose label to draw.</param>
		/// <param name="index" type="Number">Type: Number&#10;An integer index of the label.</param>
		/// <param name="point" type="MindFusion.Drawing.Point">Type: Point&#10;A Point specifying the label's location.</param>
		/// <param name="labelKind" type="MindFusion.Charting.LabelKinds">Type: LabelKinds&#10;A member of the LabelKinds enumeration.</param>
	}
};
MindFusion.Charting.TextRenderer.__class = true;

MindFusion.Charting.TextStyle.prototype = {
};
MindFusion.Charting.TextStyle.__class = true;

MindFusion.Charting.TextStyleHint = {
		/// <summary>Identifies text styles that can be accessed through RenderContent.</summary>
		/// <field name="AxisLabels">Type: Int32&#10;Identifies style used to draw axis labels.</field>
		/// <field name="AxisTitle">Type: Int32&#10;Identifies style used to draw axis title.</field>
		/// <field name="DataLabels">Type: Int32&#10;Identifies style used to draw data labels.</field>
		/// <field name="LegendTitle">Type: Int32&#10;Identifies style used to draw legend title.</field>
		/// <field name="Subtitle">Type: Int32&#10;Identifies style used to draw chart's sub-title.</field>
		/// <field name="Title">Type: Int32&#10;Identifies style used to draw chart's title.</field>
		/// <field name="Widget">Type: Int32&#10;Identifies style used to draw text in UI widgets.</field>
	AxisLabels: 0,
	AxisTitle: 1,
	DataLabels: 2,
	LegendTitle: 3,
	Subtitle: 4,
	Title: 5,
	Widget: 6
}
MindFusion.Charting.TextStyleHint.__enum = true;

MindFusion.Charting.Theme.prototype = {
	loadFrom: function(fileUrl) {
		/// <summary>Loads the theme values from an XML file.</summary>
		/// <param name="fileUrl" type="String">Type: String&#10;The URL of an XML file where the data should be read from.</param>
	},
	saveTo: function(fileUrl) {
		/// <summary>Saves the theme values to specified file.</summary>
		/// <param name="fileUrl" type="String">Type: String&#10;The URL where the theme's XML should be posted to.</param>
	}
};
MindFusion.Charting.Theme.__class = true;

MindFusion.Charting.ToolTip.prototype = {
};
MindFusion.Charting.ToolTip.__class = true;

MindFusion.Charting.ToolTip.prototype = {
};
MindFusion.Charting.ToolTip.__class = true;

MindFusion.Charting.UniformSeriesStyle.prototype = {
	fill: function(seriesIndex, dataIndex) {
		/// <summary>Implements SeriesStyle.Fill. Returns UniformFill for any data item.</summary>
		/// <param name="seriesIndex" type="Number">Type: Number&#10;An integer index of a Series.</param>
		/// <param name="dataIndex" type="Number">Type: Number&#10;An integer index of a data item in specified series.</param>
		/// <returns type="MindFusion.Charting.Drawing.Brush">Type: Brush&#10;A Brush instance.</returns>
	},
	stroke: function(seriesIndex, dataIndex) {
		/// <summary>Implements SeriesStyle.Stroke. Returns UniformStroke for any data item.</summary>
		/// <param name="seriesIndex" type="Number">Type: Number&#10;An integer index of a Series.</param>
		/// <param name="dataIndex" type="Number">Type: Number&#10;An integer index of a data item in specified series.</param>
		/// <returns type="MindFusion.Charting.Drawing.Brush">Type: Brush&#10;A Brush instance.</returns>
	},
	strokeDashStyle: function(seriesIndex, dataIndex) {
		/// <summary>Implements SeriesStyle.StrokeDashStyle. Returns UniformStrokeDashStyle for any data item.</summary>
		/// <param name="seriesIndex" type="Number">Type: Number&#10;An integer index of a Series.</param>
		/// <param name="dataIndex" type="Number">Type: Number&#10;An integer index of a data item in specified series.</param>
		/// <returns type="MindFusion.Charting.Drawing.DashStyle">Type: DashStyle&#10;A nullable DashStyle value specifying stroke dash style.</returns>
	},
	strokeThickness: function(seriesIndex, dataIndex) {
		/// <summary>Implements SeriesStyle.StrokeThickness. Returns UniformStrokeThickness for any data item.</summary>
		/// <param name="seriesIndex" type="Number">Type: Number&#10;An integer index of a Series.</param>
		/// <param name="dataIndex" type="Number">Type: Number&#10;An integer index of a data item in specified series.</param>
		/// <returns type="Number">Type: Number&#10;A nullable double value specifying stroke thickness.</returns>
	}
};
MindFusion.Charting.UniformSeriesStyle.__class = true;

MindFusion.Charting.Vector.prototype = {
	negate: function() {
		/// <summary>Reverses the direction of this vector.</summary>
	},
	normalize: function() {
		/// <summary>Makes this vector a unit vector.</summary>
	},
};
MindFusion.Charting.Vector.__class = true;

MindFusion.Charting.Vector.add = function(vector1, vector2) {
	/// <summary>Adds two vectors.</summary>
	/// <param name="vector1" type="MindFusion.Charting.Vector">Type: Vector&#10;The first vector.</param>
	/// <param name="vector2" type="MindFusion.Charting.Vector">Type: Vector&#10;The second vector.</param>
	/// <returns type="MindFusion.Charting.Vector">Type: Vector&#10;A vector representing the sum of specified vectors.</returns>
};
MindFusion.Charting.Vector.addPoint = function(vector, point) {
	/// <summary>Translates point by a vector.</summary>
	/// <param name="vector" type="MindFusion.Charting.Vector">Type: Vector&#10;The vector to add.</param>
	/// <param name="point" type="MindFusion.Drawing.Point">Type: Point&#10;The reference point.</param>
	/// <returns type="MindFusion.Drawing.Point">Type: Point&#10;The translated point.</returns>
};
MindFusion.Charting.Vector.angleBetween = function(vector1, vector2) {
	/// <summary>Determines the angle between two vectors.</summary>
	/// <param name="vector1" type="MindFusion.Charting.Vector">Type: Vector&#10;The first vector.</param>
	/// <param name="vector2" type="MindFusion.Charting.Vector">Type: Vector&#10;The second vector.</param>
	/// <returns type="Number">Type: Number&#10;The angle between specified vectors.</returns>
};
MindFusion.Charting.Vector.crossProduct = function(vector1, vector2) {
	/// <summary>Returns the size of cross-product of two vectors.</summary>
	/// <param name="vector1" type="MindFusion.Charting.Vector">Type: Vector&#10;The first vector.</param>
	/// <param name="vector2" type="MindFusion.Charting.Vector">Type: Vector&#10;The second vector.</param>
	/// <returns type="Number">Type: Number&#10;The size of cross-product.</returns>
};
MindFusion.Charting.Vector.determinant = function(vector1, vector2) {
	/// <summary>Finds the determinant of two vectors.</summary>
	/// <param name="vector1" type="MindFusion.Charting.Vector">Type: Vector&#10;The first vector.</param>
	/// <param name="vector2" type="MindFusion.Charting.Vector">Type: Vector&#10;The second vector.</param>
	/// <returns type="Number">Type: Number&#10;The determinant.</returns>
};
MindFusion.Charting.Vector.divide = function(vector, scalar) {
	/// <summary>Divides a vector by a scalar.</summary>
	/// <param name="vector" type="MindFusion.Charting.Vector">Type: Vector&#10;The vector to divide.</param>
	/// <param name="scalar" type="Number">Type: Number&#10;The scalar value.</param>
	/// <returns type="MindFusion.Charting.Vector">Type: Vector&#10;A vector containing the division result.</returns>
};
MindFusion.Charting.Vector.multiply = function(vector1, vector2) {
	/// <summary>Returns the dot product of two vectors.</summary>
	/// <param name="vector1" type="MindFusion.Charting.Vector">Type: Vector&#10;The first vector.</param>
	/// <param name="vector2" type="MindFusion.Charting.Vector">Type: Vector&#10;The second vector.</param>
	/// <returns type="Number">Type: Number&#10;The dot product.</returns>
};
MindFusion.Charting.Vector.multiplyScalarAndVector = function(scalar, vector) {
	/// <summary>Multiplies vector by a scalar.</summary>
	/// <param name="scalar" type="Number">Type: Number&#10;The scalar value.</param>
	/// <param name="vector" type="MindFusion.Charting.Vector">Type: Vector&#10;The vector to multiply.</param>
	/// <returns type="MindFusion.Charting.Vector">Type: Vector&#10;A vector containing the multiplication result.</returns>
};
MindFusion.Charting.Vector.multiplyVectorAndScalar = function(vector, scalar) {
	/// <summary>Multiplies vector by a scalar.</summary>
	/// <param name="vector" type="MindFusion.Charting.Vector">Type: Vector&#10;The vector to multiply.</param>
	/// <param name="scalar" type="Number">Type: Number&#10;The scalar value.</param>
	/// <returns type="MindFusion.Charting.Vector">Type: Vector&#10;A vector containing the multiplication result.</returns>
};
MindFusion.Charting.Vector.subtract = function(vector1, vector2) {
	/// <summary>Subtracts two vectors.</summary>
	/// <param name="vector1" type="MindFusion.Charting.Vector">Type: Vector&#10;The first vector.</param>
	/// <param name="vector2" type="MindFusion.Charting.Vector">Type: Vector&#10;The second vector.</param>
	/// <returns type="MindFusion.Charting.Vector">Type: Vector&#10;A vector representing the difference between specified vectors.</returns>
};

MindFusion.Charting.XAxisRenderer.prototype = {
	draw: function(context) {
		/// <summary>Component.draw override. Draws this component in specified RenderContext.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
	},
	effectiveAxis: function(context) {
		/// <summary>AxisRenderer.effectiveAxis override. Gets the effective horizontal Axis in current context,getting one from Plot2D or chart control if there's no local Axis associated with this renderer.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
		/// <returns type="MindFusion.Charting.Axis">Type: Axis&#10;An Axis instance.</returns>
	},
	measure: function(maxWidth, maxHeight, context) {
		/// <summary>Component.measure override. Measures the desired size of this component.</summary>
		/// <param name="maxWidth" type="Number">Type: Number&#10;The maximum width provided by parent component.</param>
		/// <param name="maxHeight" type="Number">Type: Number&#10;The maximum height provided by parent component.</param>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
	}
};
MindFusion.Charting.XAxisRenderer.__class = true;

MindFusion.Charting.XmlPersistContext.prototype = {
	addChildElement: function(elementName, parentElement, innerText) {
		/// <summary>Adds a new child node with the specified name andvalue to the specified parent node.</summary>
		/// <param name="elementName" type="void">Type: void&#10;</param>
		/// <param name="parentElement" type="void">Type: void&#10;</param>
		/// <param name="innerText" type="void">Type: void&#10;</param>
	},
	readBool: function(elementName, parentElement, defaultValue) {
		/// <summary>Reads a boolean value with the specified name.</summary>
		/// <param name="elementName" type="void">Type: void&#10;</param>
		/// <param name="parentElement" type="void">Type: void&#10;</param>
		/// <param name="defaultValue" type="void">Type: void&#10;</param>
	},
	readBrush: function(elementName, parentElement, defaultValue) {
		/// <summary>Reads a MindFusion.Charting.Drawing.Brush object with the specified name.</summary>
		/// <param name="elementName" type="void">Type: void&#10;</param>
		/// <param name="parentElement" type="void">Type: void&#10;</param>
		/// <param name="defaultValue" type="void">Type: void&#10;</param>
	},
	readBrushes: function(parentElement) {
		/// <summary>Reads all brushes.</summary>
		/// <param name="parentElement" type="void">Type: void&#10;</param>
	},
	readBrushList: function(elementName, subElementName, parentElement) {
		/// <summary>Reads a list of brushes.</summary>
		/// <param name="elementName" type="void">Type: void&#10;</param>
		/// <param name="subElementName" type="void">Type: void&#10;</param>
		/// <param name="parentElement" type="void">Type: void&#10;</param>
	},
	readColor: function(elementName, parentElement, defaultValue) {
		/// <summary>Reads a color with the specified name.</summary>
		/// <param name="elementName" type="void">Type: void&#10;</param>
		/// <param name="parentElement" type="void">Type: void&#10;</param>
		/// <param name="defaultValue" type="void">Type: void&#10;</param>
	},
	readDashStyleList: function(elementName, subElementName, parentElement) {
		/// <summary>Reads a list of dash styles.</summary>
		/// <param name="elementName" type="void">Type: void&#10;</param>
		/// <param name="subElementName" type="void">Type: void&#10;</param>
		/// <param name="parentElement" type="void">Type: void&#10;</param>
	},
	readEnum: function(elementName, parentElement, defaultValue) {
		/// <summary>Reads an enum value with the specified name.</summary>
		/// <param name="elementName" type="void">Type: void&#10;</param>
		/// <param name="parentElement" type="void">Type: void&#10;</param>
		/// <param name="defaultValue" type="void">Type: void&#10;</param>
	},
	readFloat: function(elementName, parentElement, defaultValue) {
		/// <summary>Reads a float value with the specified name.</summary>
		/// <param name="elementName" type="void">Type: void&#10;</param>
		/// <param name="parentElement" type="void">Type: void&#10;</param>
		/// <param name="defaultValue" type="void">Type: void&#10;</param>
	},
	readFloatList: function(elementName, subElementName, parentElement) {
		/// <summary>Reads a list of floats.</summary>
		/// <param name="elementName" type="void">Type: void&#10;</param>
		/// <param name="subElementName" type="void">Type: void&#10;</param>
		/// <param name="parentElement" type="void">Type: void&#10;</param>
	},
	readInt: function(elementName, parentElement, defaultValue) {
		/// <summary>Reads an integer value with the specified name.</summary>
		/// <param name="elementName" type="void">Type: void&#10;</param>
		/// <param name="parentElement" type="void">Type: void&#10;</param>
		/// <param name="defaultValue" type="void">Type: void&#10;</param>
	},
	readObject: function(elementName, parentElement) {
		/// <summary>Reads an object with the specified name.</summary>
		/// <param name="elementName" type="void">Type: void&#10;</param>
		/// <param name="parentElement" type="void">Type: void&#10;</param>
	},
	readString: function(elementName, parentElement, defaultValue) {
		/// <summary>Reads a string value with the specified name.</summary>
		/// <param name="elementName" type="void">Type: void&#10;</param>
		/// <param name="parentElement" type="void">Type: void&#10;</param>
		/// <param name="defaultValue" type="void">Type: void&#10;</param>
	},
	readStringFormat: function(elementName, parentElement, defultFormat) {
		/// <summary>Reads a StringFormat object with the specified name.</summary>
		/// <param name="elementName" type="void">Type: void&#10;</param>
		/// <param name="parentElement" type="void">Type: void&#10;</param>
		/// <param name="defultFormat" type="void">Type: void&#10;</param>
	},
	writeBool: function(boolValue, elementName, parentElement) {
		/// <summary>Writes a boolean value with the specified name.</summary>
		/// <param name="boolValue" type="void">Type: void&#10;</param>
		/// <param name="elementName" type="void">Type: void&#10;</param>
		/// <param name="parentElement" type="void">Type: void&#10;</param>
	},
	writeBrush: function(brush, elementName, parentElement) {
		/// <summary>Writes a reference to the specified brush. The brushis registered within the internal hashtable forsubsequent serialization.</summary>
		/// <param name="brush" type="void">Type: void&#10;</param>
		/// <param name="elementName" type="void">Type: void&#10;</param>
		/// <param name="parentElement" type="void">Type: void&#10;</param>
	},
	writeBrushes: function(parentElement) {
		/// <summary>Writes all currently accumulated brushes.</summary>
		/// <param name="parentElement" type="void">Type: void&#10;</param>
	},
	writeBrushList: function(list, elementName, subElementName, parentElement) {
		/// <summary>Writes a list of brushes.</summary>
		/// <param name="list" type="void">Type: void&#10;</param>
		/// <param name="elementName" type="void">Type: void&#10;</param>
		/// <param name="subElementName" type="void">Type: void&#10;</param>
		/// <param name="parentElement" type="void">Type: void&#10;</param>
	},
	writeColor: function(color, elementName, parentElement) {
		/// <summary>Writes the specified color.</summary>
		/// <param name="color" type="void">Type: void&#10;</param>
		/// <param name="elementName" type="void">Type: void&#10;</param>
		/// <param name="parentElement" type="void">Type: void&#10;</param>
	},
	writeColorList: function(list, elementName, subElementName, parentElement) {
		/// <summary>Writes a list of colors.</summary>
		/// <param name="list" type="void">Type: void&#10;</param>
		/// <param name="elementName" type="void">Type: void&#10;</param>
		/// <param name="subElementName" type="void">Type: void&#10;</param>
		/// <param name="parentElement" type="void">Type: void&#10;</param>
	},
	writeDashStyleList: function(list, elementName, subElementName, parentElement) {
		/// <summary>Writes a list of dash styles.</summary>
		/// <param name="list" type="void">Type: void&#10;</param>
		/// <param name="elementName" type="void">Type: void&#10;</param>
		/// <param name="subElementName" type="void">Type: void&#10;</param>
		/// <param name="parentElement" type="void">Type: void&#10;</param>
	},
	writeEnum: function(enumValue, elementName, parentElement) {
		/// <summary>Writes the specified enum value.</summary>
		/// <param name="enumValue" type="void">Type: void&#10;</param>
		/// <param name="elementName" type="void">Type: void&#10;</param>
		/// <param name="parentElement" type="void">Type: void&#10;</param>
	},
	writeFloat: function(floatValue, elementName, parentElement) {
		/// <summary>Writes a float value with the specified name.</summary>
		/// <param name="floatValue" type="void">Type: void&#10;</param>
		/// <param name="elementName" type="void">Type: void&#10;</param>
		/// <param name="parentElement" type="void">Type: void&#10;</param>
	},
	writeFloatList: function(list, elementName, subElementName, parentElement) {
		/// <summary>Writes a list of floating-point numbers.</summary>
		/// <param name="list" type="void">Type: void&#10;</param>
		/// <param name="elementName" type="void">Type: void&#10;</param>
		/// <param name="subElementName" type="void">Type: void&#10;</param>
		/// <param name="parentElement" type="void">Type: void&#10;</param>
	},
	writeInt: function(intValue, elementName, parentElement) {
		/// <summary>Writes an integer value with the specified name.</summary>
		/// <param name="intValue" type="void">Type: void&#10;</param>
		/// <param name="elementName" type="void">Type: void&#10;</param>
		/// <param name="parentElement" type="void">Type: void&#10;</param>
	},
	writeObject: function(objectValue, elementName, parentElement) {
		/// <summary>Writes the specified object under the specified name.</summary>
		/// <param name="objectValue" type="void">Type: void&#10;</param>
		/// <param name="elementName" type="void">Type: void&#10;</param>
		/// <param name="parentElement" type="void">Type: void&#10;</param>
	},
	writeString: function(stringValue, elementName, parentElement) {
		/// <summary>Writes a string value with the specified name.</summary>
		/// <param name="stringValue" type="void">Type: void&#10;</param>
		/// <param name="elementName" type="void">Type: void&#10;</param>
		/// <param name="parentElement" type="void">Type: void&#10;</param>
	}
};
MindFusion.Charting.XmlPersistContext.__class = true;

MindFusion.Charting.YAxisRenderer.prototype = {
	draw: function(context) {
		/// <summary>Component.draw override. Draws this component in specified RenderContext.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
	},
	effectiveAxis: function(context) {
		/// <summary>AxisRenderer.effectiveAxis override. Gets the effective vertical Axis in current context,getting one from Plot2D or chart control if there's no local Axis associated with this renderer.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
		/// <returns type="MindFusion.Charting.Axis">Type: Axis&#10;An Axis instance.</returns>
	},
	measure: function(maxWidth, maxHeight, context) {
		/// <summary>Component.measure override. Measures the desired size of this component.</summary>
		/// <param name="maxWidth" type="Number">Type: Number&#10;The maximum width provided by parent component.</param>
		/// <param name="maxHeight" type="Number">Type: Number&#10;The maximum height provided by parent component.</param>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
	}
};
MindFusion.Charting.YAxisRenderer.__class = true;

MindFusion.Charting.ZoomController.prototype = {
	drawInteraction: function(graphics) {
		/// <summary>PlotController.drawInteraction override. Draws the currently selected data range that that controller will zoom into when the user releases the mouse button.</summary>
		/// <param name="graphics" type="MindFusion.Charting.Drawing.Graphics">Type: Graphics&#10;A Graphics instance.</param>
	},
	onMouseDown: function(x, y) {
		/// <summary>Plot2DController.OnMouseDown override. Called when the user presses a mouse button.</summary>
		/// <param name="x" type="Number">Type: Number&#10;A number value specifying the horizontal position of mouse pointer.</param>
		/// <param name="y" type="Number">Type: Number&#10;A number value specifying the vertical position of mouse pointer.</param>
	},
	onMouseMove: function(x, y) {
		/// <summary>PlotController.OnMouseMove override. Called when the user moves the mouse.</summary>
		/// <param name="x" type="Number">Type: Number&#10;A number value specifying the horizontal position of mouse pointer.</param>
		/// <param name="y" type="Number">Type: Number&#10;A number value specifying the vertical position of mouse pointer.</param>
	},
	onMouseUp: function(x, y) {
		/// <summary>PlotController.OnMouseUp override. Called when the user releases a mouse button.</summary>
		/// <param name="x" type="Number">Type: Number&#10;A number value specifying the horizontal position of mouse pointer.</param>
		/// <param name="y" type="Number">Type: Number&#10;A number value specifying the vertical position of mouse pointer.</param>
	},
	onMouseWheel: function(x, y, delta) {
		/// <summary>PlotController.OnMouseWheel override. Called when the user releases a mouse button.</summary>
		/// <param name="x" type="Number">Type: Number&#10;A number value specifying the horizontal position of mouse pointer.</param>
		/// <param name="y" type="Number">Type: Number&#10;A number value specifying the vertical position of mouse pointer.</param>
		/// <param name="delta" type="Number">Type: Number&#10;A number value specifying the direction and the amount of scrolling needed.</param>
	}
};
MindFusion.Charting.ZoomController.__class = true;

MindFusion.Common.Collections.IEnumerable.prototype = {
	add: function(item) {
		/// <summary>Adds an object to the end of the collection.</summary>
		/// <param name="item" type="Object">Type: Object&#10;Object. The object to add.</param>
	},
	addRange: function(range) {
		/// <summary>Adds a range of elements to the end of the collection.</summary>
		/// <param name="range" type="Array">Type: Array&#10;Array. The range to add.</param>
	},
	clear: function() {
		/// <summary>Clears the collection.</summary>
	},
	clone: function() {
		/// <summary>Creates a copy of the collection.</summary>
		/// <returns type="IEnumerable">IEnumerable. A copy of this collection.</returns>
	},
	contains: function(item) {
		/// <summary>Checks if the given element is present in the collection.</summary>
		/// <param name="item" type="Object">Type: Object&#10;Object. The object to check for.</param>
		/// <returns type="Boolean">Type: Boolean&#10;Boolean. True if the element is found, otherwise false.</returns>
	},
	copyTo: function(destination, length, sourceIndex, destinationIndex) {
		/// <summary>Copies a range of elements from this collection to a destination collection.</summary>
		/// <param name="destination" type="IEnumerable">IEnumerable. The destination collection.</param>
		/// <param name="length" type="Number">Type: Number&#10;Number. The length of the range to copy.</param>
		/// <param name="sourceIndex" type="Number" optional="true">Optional. Type: Number&#10;Number. The starting index of the range to copy.</param>
		/// <param name="destinationIndex" type="Number" optional="true">Optional. Type: Number&#10;Number. The index at which the range should be copied.</param>
	},
	count: function() {
		/// <summary>Gets the number of elements.</summary>
		/// <returns type="Number">Type: Number&#10;Number. The number of elements.</returns>
	},
	first: function() {
		/// <summary>Returns the first element in the collection.</summary>
		/// <returns type="Object">Type: Object&#10;Object. The first element in the collection.</returns>
	},
	forEach: function(callback, context) {
		/// <summary>Executes a provided function once for each element.</summary>
		/// <param name="callback" type="function">Type: function&#10;function. A function to execute for each element.</param>
		/// <param name="context" type="Object">Type: Object&#10;Object. The invokation context.</param>
	},
	indexOfItem: function(obj, fromIndex) {
		/// <summary>Gets the index of a given object in a collection.</summary>
		/// <param name="obj" type="Object">Type: Object&#10;Object. The object to look for.</param>
		/// <param name="fromIndex" type="Number" optional="true">Optional. Type: Number&#10;Number. The starting index to search from.</param>
		/// <returns type="Number">Type: Number&#10;Number. The index of the object, or -1 if the object is not present in the collection.</returns>
	},
	insert: function(index, item) {
		/// <summary>Adds an element to the collection at the specified index.</summary>
		/// <param name="index" type="Number">Type: Number&#10;Number. The index.</param>
		/// <param name="item" type="Object">Type: Object&#10;Object. The object to add.</param>
	},
	item: function(index) {
		/// <summary>Gets the element at the given index.</summary>
		/// <param name="index" type="Number">Type: Number&#10;Number. The index.</param>
		/// <returns type="Object">Type: Object&#10;Object. The element at the given index.</returns>
	},
	items: function() {
		/// <summary>Gets the collection as an array.</summary>
		/// <returns type="Array">Type: Array&#10;Array. The underlying array data structure of the collection.</returns>
	},
	last: function() {
		/// <summary>Returns the last element in the collection.</summary>
		/// <returns type="Object">Type: Object&#10;Object. The last element in the collection.</returns>
	},
	max: function(selector) {
		/// <summary>Invokes a transform function on each item and returns the maximum value in a sequence of numbers.</summary>
		/// <param name="selector" type="function">Type: function&#10;function. A transform function to invoke on each element.</param>
		/// <returns type="Number">Type: Number&#10;Number. The maximum number in the sequence.</returns>
	},
	min: function(selector) {
		/// <summary>Invokes a transform function on each item and returns theminimum value in a sequence of numbers.</summary>
		/// <param name="selector" type="function">Type: function&#10;function. A transform function to invoke on each element.</param>
		/// <returns type="Number">Type: Number&#10;Number. The minimum number in the sequence.</returns>
	},
	remove: function(item) {
		/// <summary>Removes an element from the collection.</summary>
		/// <param name="item" type="Object">Type: Object&#10;Object. The object to remove.</param>
	},
	removeAt: function(index) {
		/// <summary>Removes the element at the given index.</summary>
		/// <param name="index" type="Number">Type: Number&#10;Number. The index.</param>
	},
	removeRange: function(index, count) {
		/// <summary>Removes a range of elements starting from the given index.</summary>
		/// <param name="index" type="Number">Type: Number&#10;Number. The starting index of the range.</param>
		/// <param name="count" type="Number">Type: Number&#10;Number. The length of the range.</param>
	},
	reverse: function() {
		/// <summary>Gets the collection as an array in reverse order.</summary>
		/// <returns type="Array">Type: Array&#10;Array. The underlying array data structure of the collection in reverse order.</returns>
	},
	select: function(selector) {
		/// <summary>Projects each element of a sequence into a new form.</summary>
		/// <param name="selector" type="function">Type: function&#10;function. A transform function to invoke on each element.</param>
		/// <returns type="IEnumerable">Type: IEnumerable&#10;IEnumerable. An collection whose elements are the resultof invoking the transform function on each element.</returns>
	},
	sort: function(compareFn) {
		/// <summary>Sorts the underlying array.</summary>
		/// <param name="compareFn" type="function" optional="true">Optional. Type: function&#10;function. The comparing function.</param>
	},
	sum: function(selector) {
		/// <summary>Computes the sum of the sequence of number values that are obtained by invoking a transform function on each element.</summary>
		/// <param name="selector" type="function">Type: function&#10;function. A transform function to invoke on each element.</param>
		/// <returns type="Number">Type: Number&#10;Number. The sum of the number values in the sequence.</returns>
	},
	toArray: function() {
		/// <summary>Returns a new Object array, containing the contents of the collection.</summary>
		/// <returns type="Array">Type: Array&#10;Array. The array.</returns>
	},
	where: function(selector) {
		/// <summary>Filters a sequence of values based on a predicate.</summary>
		/// <param name="selector" type="function">Type: function&#10;function. A function to test each element for a condition.</param>
		/// <returns type="IEnumerable">IEnumerable. An collection that contains elements from the input sequence that satisfy the condition.</returns>
	}
};
MindFusion.Common.Collections.IEnumerable.__class = true;

MindFusion.Common.Collections.List.prototype = {
	add: function(item) {
		/// <summary>Adds an object to the end of the collection. Inherited from IEnumerable.</summary>
		/// <param name="item" type="Object">Type: Object&#10;Object. The object to add.</param>
	},
	addRange: function(range) {
		/// <summary>Adds a range of elements to the end of the collection. Inherited from IEnumerable.</summary>
		/// <param name="range" type="Array">Type: Array&#10;Array. The range to add.</param>
	},
	clear: function() {
		/// <summary>Clears the collection. Inherited from IEnumerable.</summary>
	},
	clone: function() {
		/// <summary>Creates a copy of the collection. Inherited from IEnumerable.</summary>
		/// <returns type="IEnumerable">IEnumerable. A copy of this collection.</returns>
	},
	contains: function(item) {
		/// <summary>Checks if the given element is present in the collection. Inherited from IEnumerable.</summary>
		/// <param name="item" type="Object">Type: Object&#10;Object. The object to check for.</param>
		/// <returns type="Boolean">Type: Boolean&#10;Boolean. True if the element is found, otherwise false.</returns>
	},
	copyTo: function(destination, length, sourceIndex, destinationIndex) {
		/// <summary>Copies a range of elements from this collection to a destination collection. Inherited from IEnumerable.</summary>
		/// <param name="destination" type="IEnumerable">IEnumerable. The destination collection.</param>
		/// <param name="length" type="Number">Type: Number&#10;Number. The length of the range to copy.</param>
		/// <param name="sourceIndex" type="Number" optional="true">Optional. Type: Number&#10;Number. The starting index of the range to copy.</param>
		/// <param name="destinationIndex" type="Number" optional="true">Optional. Type: Number&#10;Number. The index at which the range should be copied.</param>
	},
	count: function() {
		/// <summary>Gets the number of elements. Inherited from IEnumerable.</summary>
		/// <returns type="Number">Type: Number&#10;Number. The number of elements.</returns>
	},
	first: function() {
		/// <summary>Returns the first element in the collection. Inherited from IEnumerable.</summary>
		/// <returns type="Object">Type: Object&#10;Object. The first element in the collection.</returns>
	},
	forEach: function(callback, context) {
		/// <summary>Executes a provided function once for each element. Inherited from IEnumerable.</summary>
		/// <param name="callback" type="function">Type: function&#10;function. A function to execute for each element.</param>
		/// <param name="context" type="Object">Type: Object&#10;Object. The invokation context.</param>
	},
	indexOfItem: function(obj, fromIndex) {
		/// <summary>Gets the index of a given object in a collection. Inherited from IEnumerable.</summary>
		/// <param name="obj" type="Object">Type: Object&#10;Object. The object to look for.</param>
		/// <param name="fromIndex" type="Number" optional="true">Optional. Type: Number&#10;Number. The starting index to search from.</param>
		/// <returns type="Number">Type: Number&#10;Number. The index of the object, or -1 if the object is not present in the collection.</returns>
	},
	insert: function(index, item) {
		/// <summary>Adds an element to the collection at the specified index. Inherited from IEnumerable.</summary>
		/// <param name="index" type="Number">Type: Number&#10;Number. The index.</param>
		/// <param name="item" type="Object">Type: Object&#10;Object. The object to add.</param>
	},
	item: function(index) {
		/// <summary>Gets the element at the given index. Inherited from IEnumerable.</summary>
		/// <param name="index" type="Number">Type: Number&#10;Number. The index.</param>
		/// <returns type="Object">Type: Object&#10;Object. The element at the given index.</returns>
	},
	items: function() {
		/// <summary>Gets the collection as an array. Inherited from IEnumerable.</summary>
		/// <returns type="Array">Type: Array&#10;Array. The underlying array data structure of the collection.</returns>
	},
	last: function() {
		/// <summary>Returns the last element in the collection. Inherited from IEnumerable.</summary>
		/// <returns type="Object">Type: Object&#10;Object. The last element in the collection.</returns>
	},
	max: function(selector) {
		/// <summary>Invokes a transform function on each item and returns the maximum value in a sequence of numbers. Inherited from IEnumerable.</summary>
		/// <param name="selector" type="function">Type: function&#10;function. A transform function to invoke on each element.</param>
		/// <returns type="Number">Type: Number&#10;Number. The maximum number in the sequence.</returns>
	},
	min: function(selector) {
		/// <summary>Invokes a transform function on each item and returns theminimum value in a sequence of numbers. Inherited from IEnumerable.</summary>
		/// <param name="selector" type="function">Type: function&#10;function. A transform function to invoke on each element.</param>
		/// <returns type="Number">Type: Number&#10;Number. The minimum number in the sequence.</returns>
	},
	remove: function(item) {
		/// <summary>Removes an element from the collection. Inherited from IEnumerable.</summary>
		/// <param name="item" type="Object">Type: Object&#10;Object. The object to remove.</param>
	},
	removeAt: function(index) {
		/// <summary>Removes the element at the given index. Inherited from IEnumerable.</summary>
		/// <param name="index" type="Number">Type: Number&#10;Number. The index.</param>
	},
	removeRange: function(index, count) {
		/// <summary>Removes a range of elements starting from the given index. Inherited from IEnumerable.</summary>
		/// <param name="index" type="Number">Type: Number&#10;Number. The starting index of the range.</param>
		/// <param name="count" type="Number">Type: Number&#10;Number. The length of the range.</param>
	},
	reverse: function() {
		/// <summary>Gets the collection as an array in reverse order. Inherited from IEnumerable.</summary>
		/// <returns type="Array">Type: Array&#10;Array. The underlying array data structure of the collection in reverse order.</returns>
	},
	select: function(selector) {
		/// <summary>Projects each element of a sequence into a new form. Inherited from IEnumerable.</summary>
		/// <param name="selector" type="function">Type: function&#10;function. A transform function to invoke on each element.</param>
		/// <returns type="IEnumerable">Type: IEnumerable&#10;IEnumerable. An collection whose elements are the resultof invoking the transform function on each element.</returns>
	},
	sort: function(compareFn) {
		/// <summary>Sorts the underlying array. Inherited from IEnumerable.</summary>
		/// <param name="compareFn" type="function" optional="true">Optional. Type: function&#10;function. The comparing function.</param>
	},
	sum: function(selector) {
		/// <summary>Computes the sum of the sequence of number values that are obtained by invoking a transform function on each element. Inherited from IEnumerable.</summary>
		/// <param name="selector" type="function">Type: function&#10;function. A transform function to invoke on each element.</param>
		/// <returns type="Number">Type: Number&#10;Number. The sum of the number values in the sequence.</returns>
	},
	toArray: function() {
		/// <summary>Returns a new Object array, containing the contents of the collection. Inherited from IEnumerable.</summary>
		/// <returns type="Array">Type: Array&#10;Array. The array.</returns>
	},
	where: function(selector) {
		/// <summary>Filters a sequence of values based on a predicate. Inherited from IEnumerable.</summary>
		/// <param name="selector" type="function">Type: function&#10;function. A function to test each element for a condition.</param>
		/// <returns type="IEnumerable">IEnumerable. An collection that contains elements from the input sequence that satisfy the condition.</returns>
	}
};
MindFusion.Common.Collections.List.__class = true;

MindFusion.Common.Collections.ObservableCollection.prototype = {
	add: function(item) {
		/// <summary>Adds an item to the collection.</summary>
		/// <param name="item" type="Object">Type: Object&#10;Object. The item to add.</param>
	},
	clear: function() {
		/// <summary>Clears the collection.</summary>
	},
	insert: function(index, item) {
		/// <summary>Adds an item to the collection at the specified index.</summary>
		/// <param name="index" type="Number">Type: Number&#10;Number. The index.</param>
		/// <param name="item" type="Object">Type: Object&#10;Object. The object to add.</param>
	},
	remove: function(item) {
		/// <summary>Deletes an item from the collection.</summary>
		/// <param name="item" type="Object">Type: Object&#10;Object. The item to remove.</param>
	},
	removeAt: function(itemIndex) {
		/// <summary>Deletes the item at the specified index.</summary>
		/// <param name="itemIndex" type="Number">Type: Number&#10;Number. The index to remove at.</param>
	},
	removeRange: function(index, count) {
		/// <summary>Deletes a range of items from the collection.</summary>
		/// <param name="index" type="Number">Type: Number&#10;Number. The starting index of the range to remove.</param>
		/// <param name="count" type="Number">Type: Number&#10;Number. The length of the range to remove.</param>
	},
	addRange: function(range) {
		/// <summary>Adds a range of elements to the end of the collection. Inherited from IEnumerable.</summary>
		/// <param name="range" type="Array">Type: Array&#10;Array. The range to add.</param>
	},
	clone: function() {
		/// <summary>Creates a copy of the collection. Inherited from IEnumerable.</summary>
		/// <returns type="IEnumerable">IEnumerable. A copy of this collection.</returns>
	},
	contains: function(item) {
		/// <summary>Checks if the given element is present in the collection. Inherited from IEnumerable.</summary>
		/// <param name="item" type="Object">Type: Object&#10;Object. The object to check for.</param>
		/// <returns type="Boolean">Type: Boolean&#10;Boolean. True if the element is found, otherwise false.</returns>
	},
	copyTo: function(destination, length, sourceIndex, destinationIndex) {
		/// <summary>Copies a range of elements from this collection to a destination collection. Inherited from IEnumerable.</summary>
		/// <param name="destination" type="IEnumerable">IEnumerable. The destination collection.</param>
		/// <param name="length" type="Number">Type: Number&#10;Number. The length of the range to copy.</param>
		/// <param name="sourceIndex" type="Number" optional="true">Optional. Type: Number&#10;Number. The starting index of the range to copy.</param>
		/// <param name="destinationIndex" type="Number" optional="true">Optional. Type: Number&#10;Number. The index at which the range should be copied.</param>
	},
	count: function() {
		/// <summary>Gets the number of elements. Inherited from IEnumerable.</summary>
		/// <returns type="Number">Type: Number&#10;Number. The number of elements.</returns>
	},
	first: function() {
		/// <summary>Returns the first element in the collection. Inherited from IEnumerable.</summary>
		/// <returns type="Object">Type: Object&#10;Object. The first element in the collection.</returns>
	},
	forEach: function(callback, context) {
		/// <summary>Executes a provided function once for each element. Inherited from IEnumerable.</summary>
		/// <param name="callback" type="function">Type: function&#10;function. A function to execute for each element.</param>
		/// <param name="context" type="Object">Type: Object&#10;Object. The invokation context.</param>
	},
	indexOfItem: function(obj, fromIndex) {
		/// <summary>Gets the index of a given object in a collection. Inherited from IEnumerable.</summary>
		/// <param name="obj" type="Object">Type: Object&#10;Object. The object to look for.</param>
		/// <param name="fromIndex" type="Number" optional="true">Optional. Type: Number&#10;Number. The starting index to search from.</param>
		/// <returns type="Number">Type: Number&#10;Number. The index of the object, or -1 if the object is not present in the collection.</returns>
	},
	item: function(index) {
		/// <summary>Gets the element at the given index. Inherited from IEnumerable.</summary>
		/// <param name="index" type="Number">Type: Number&#10;Number. The index.</param>
		/// <returns type="Object">Type: Object&#10;Object. The element at the given index.</returns>
	},
	items: function() {
		/// <summary>Gets the collection as an array. Inherited from IEnumerable.</summary>
		/// <returns type="Array">Type: Array&#10;Array. The underlying array data structure of the collection.</returns>
	},
	last: function() {
		/// <summary>Returns the last element in the collection. Inherited from IEnumerable.</summary>
		/// <returns type="Object">Type: Object&#10;Object. The last element in the collection.</returns>
	},
	max: function(selector) {
		/// <summary>Invokes a transform function on each item and returns the maximum value in a sequence of numbers. Inherited from IEnumerable.</summary>
		/// <param name="selector" type="function">Type: function&#10;function. A transform function to invoke on each element.</param>
		/// <returns type="Number">Type: Number&#10;Number. The maximum number in the sequence.</returns>
	},
	min: function(selector) {
		/// <summary>Invokes a transform function on each item and returns theminimum value in a sequence of numbers. Inherited from IEnumerable.</summary>
		/// <param name="selector" type="function">Type: function&#10;function. A transform function to invoke on each element.</param>
		/// <returns type="Number">Type: Number&#10;Number. The minimum number in the sequence.</returns>
	},
	reverse: function() {
		/// <summary>Gets the collection as an array in reverse order. Inherited from IEnumerable.</summary>
		/// <returns type="Array">Type: Array&#10;Array. The underlying array data structure of the collection in reverse order.</returns>
	},
	select: function(selector) {
		/// <summary>Projects each element of a sequence into a new form. Inherited from IEnumerable.</summary>
		/// <param name="selector" type="function">Type: function&#10;function. A transform function to invoke on each element.</param>
		/// <returns type="IEnumerable">Type: IEnumerable&#10;IEnumerable. An collection whose elements are the resultof invoking the transform function on each element.</returns>
	},
	sort: function(compareFn) {
		/// <summary>Sorts the underlying array. Inherited from IEnumerable.</summary>
		/// <param name="compareFn" type="function" optional="true">Optional. Type: function&#10;function. The comparing function.</param>
	},
	sum: function(selector) {
		/// <summary>Computes the sum of the sequence of number values that are obtained by invoking a transform function on each element. Inherited from IEnumerable.</summary>
		/// <param name="selector" type="function">Type: function&#10;function. A transform function to invoke on each element.</param>
		/// <returns type="Number">Type: Number&#10;Number. The sum of the number values in the sequence.</returns>
	},
	toArray: function() {
		/// <summary>Returns a new Object array, containing the contents of the collection. Inherited from IEnumerable.</summary>
		/// <returns type="Array">Type: Array&#10;Array. The array.</returns>
	},
	where: function(selector) {
		/// <summary>Filters a sequence of values based on a predicate. Inherited from IEnumerable.</summary>
		/// <param name="selector" type="function">Type: function&#10;function. A function to test each element for a condition.</param>
		/// <returns type="IEnumerable">IEnumerable. An collection that contains elements from the input sequence that satisfy the condition.</returns>
	}
};
MindFusion.Common.Collections.ObservableCollection.__class = true;

MindFusion.Common.Control.prototype = {
	attach: function() {
		/// <summary>Attach control event handlers.</summary>
	},
	detach: function() {
		/// <summary>Detach control event handlers.</summary>
	},
	dispose: function() {
		/// <summary>Dispose the control.</summary>
	},
	draw: function() {
		/// <summary>Draws the control.</summary>
		/// <returns type="HTMLElement">Type: HTMLElement&#10;HTMLElement. The control DOM element.</returns>
	},
	render: function() {
		/// <summary>Draws the control and prepares it for user interaction.</summary>
	}
};
MindFusion.Common.Control.__class = true;

MindFusion.Common.Control.find = function(id) {
	/// <summary>Returns the control with the specified ID.</summary>
	/// <param name="id" type="String">Type: String&#10;String. The ID.</param>
	/// <returns type="Control">Control. The control with the specified ID, if found; otherwise, null.</returns>
};

MindFusion.Common.DateFormats.prototype = {
};
MindFusion.Common.DateFormats.__class = true;

MindFusion.Common.DateSettings.prototype = {
	fromJson: function(json) {
		/// <summary>Deserializes the settings from a JSON string.</summary>
		/// <param name="json" type="String">Type: String&#10;String. A string containing data for the settings.</param>
	}
};
MindFusion.Common.DateSettings.__class = true;

MindFusion.Common.EventDispatcher.prototype = {
	addEventListener: function(handler) {
		/// <summary>Subcribes an event listener to this event.</summary>
		/// <param name="handler" type="function">Type: function&#10;function. The handler function.</param>
	},
	raiseEvent: function(sender, args) {
		/// <summary>Raises this event.</summary>
		/// <param name="sender" type="Object">Type: Object&#10;Object. The source of the event.</param>
		/// <param name="args" type="Object">Type: Object&#10;Object. An object, containing event data.</param>
	},
	removeEventListener: function(handler) {
		/// <summary>Removes an event listener from this event.</summary>
		/// <param name="handler" type="function">Type: function&#10;function. The handler function.</param>
	}
};
MindFusion.Common.EventDispatcher.__class = true;

MindFusion.Common.IdGenerator.prototype = {
};
MindFusion.Common.IdGenerator.__class = true;

MindFusion.Common.IdGenerator.generate = function(prefix) {
	/// <summary>Generates a new id that starts with the specified prefix.</summary>
	/// <param name="prefix" type="String">Type: String&#10;String. A prefix to insert at the beginning of the identifier.</param>
	/// <returns type="String">Type: String&#10;String. A string containing the generated identifier.</returns>
};

MindFusion.Common.Locale.prototype = {
	fromJson: function(dateSettingsJson) {
		/// <summary>Deserializes the locale from a JSON string.</summary>
		/// <param name="dateSettingsJson" type="String">Type: String&#10;String. A string containing data for the date settings.</param>
	}
};
MindFusion.Common.Locale.__class = true;

MindFusion.Common.Locale.default = function() {
	/// <summary>Returns a default Locale object.</summary>
	/// <returns type="Locale">Type: Locale&#10;Locale. A locale object with default settings.</returns>
};

MindFusion.Common.NotifyCollectionChangedAction.prototype = {
};
MindFusion.Common.NotifyCollectionChangedAction.__class = true;

MindFusion.Common.NotifyCollectionChangedEventArgs.prototype = {
};
MindFusion.Common.NotifyCollectionChangedEventArgs.__class = true;

MindFusion.Common.NotifyCollectionChangingEventArgs.prototype = {
};
MindFusion.Common.NotifyCollectionChangingEventArgs.__class = true;

MindFusion.Common.PropertyEventArgs.prototype = {
};
MindFusion.Common.PropertyEventArgs.__class = true;

MindFusion.Common.UIControl.prototype = {
	draw: function() {
		/// <summary>Draws the UIControl.</summary>
		/// <returns type="HTMLElement">Type: HTMLElement&#10;HTMLElement. The control DOM element.</returns>
	}
};
MindFusion.Common.UIControl.__class = true;

MindFusion.Common.Unit.prototype = {
	toString: function() {
		/// <summary>Returns a string representation of this Unit.</summary>
		/// <returns type="String">Type: String&#10;String. The string representation.</returns>
	}
};
MindFusion.Common.Unit.__class = true;

MindFusion.Common.Unit.empty = function() {
	/// <summary>Creates an empty Unit instance.</summary>
	/// <returns type="Unit">Unit. The new Unit.</returns>
};
MindFusion.Common.Unit.parse = function(value) {
	/// <summary>Creates a Unit instance from a string representation.</summary>
	/// <param name="value" type="String">Type: String&#10;String. The string representation of the unit.</param>
	/// <returns type="Unit">Unit. The new Unit, or null if the string is invalid.</returns>
};
MindFusion.Common.Unit.percentage = function(value) {
	/// <summary>Creates a Unit instance with the specified value and UnitType.Percent.</summary>
	/// <param name="value" type="Number">Type: Number&#10;Number. The value of the unit.</param>
	/// <returns type="Unit">Type: Unit&#10;Unit. The new Unit.</returns>
};
MindFusion.Common.Unit.pixel = function(value) {
	/// <summary>Creates a Unit instance with the specified value and UnitType.Pixel.</summary>
	/// <param name="value" type="Number">Type: Number&#10;Number. The value of the unit.</param>
	/// <returns type="Unit">Unit. The new Unit.</returns>
};

MindFusion.Common.UnitType = {
		/// <summary>Specifies a unit of measurement.</summary>
		/// <field name="Percent">Type: Int32&#10;The measurement is a percentage relative to the parent element.</field>
		/// <field name="Pixel">Type: Int32&#10;The measurement is in pixels.</field>
	Percent: 2,
	Pixel: 1
}
MindFusion.Common.UnitType.__enum = true;

MindFusion.Controls.Alignment = {
		/// <summary>Specifies the alignment of text relative to its layout rectangle.</summary>
		/// <field name="Center">Type: Int32&#10;The text is drawn in the center of the layout rectangle.</field>
		/// <field name="Far">Type: Int32&#10;The text is drawn in the far corner of the layout rectangle.</field>
		/// <field name="Near">Type: Int32&#10;The text is drawn in the near corner of the layout rectangle.</field>
	Center: 1,
	Far: 2,
	Near: 0
}
MindFusion.Controls.Alignment.__enum = true;

MindFusion.Controls.CancelEventArgs.prototype = {
};
MindFusion.Controls.CancelEventArgs.__class = true;

MindFusion.Controls.Canvas.prototype = {
	dispose: function() {
		/// <summary>Overrides Disposable.dispose</summary>
	},
	invalidate: function(rect, force) {
		/// <summary>Invalidates the canvas or a region of the canvas, causing it to be repainted.</summary>
		/// <param name="rect" type="Rect" optional="true">Optional. Rect. A Rect instance specifying the region that should be repainted. If not specified, the whole diagram will be repainted.</param>
		/// <param name="force" type="Boolean" optional="true">Optional. Boolean. true to force redraw even if currently painting, or false otherwise.</param>
	},
	repaint: function(printOptions) {
		/// <summary>Repaints the canvas.</summary>
		/// <param name="printOptions" type="Object" optional="true">Optional. Object. For internal use.</param>
	},
	addEventListener: function(eventName, handler, element) {
		/// <summary>Registers a single event listener on the instance. Inherited from Disposable.</summary>
		/// <param name="eventName" type="String">Type: String&#10;String. The name of the event.</param>
		/// <param name="handler" type="Method">Type: Method&#10;Method. Represents the method that will handle the event specified with eventName.</param>
		/// <param name="element" type="Object" optional="true">Optional. Type: Object&#10;Object. For internal use.</param>
	},
	raiseEvent: function(eventName, args, element) {
		/// <summary>Raises an event. Inherited from Disposable.</summary>
		/// <param name="eventName" type="String">Type: String&#10;String. The name of the event to raise.</param>
		/// <param name="args" type="EventArgs">Type: EventArgs&#10;EventArgs. An instance of type EventArgs that holds data for the event specified with eventName.</param>
		/// <param name="element" type="Object" optional="true">Optional. Type: Object&#10;Object. For internal use.</param>
	},
	removeEventListener: function(eventName, handler, element) {
		/// <summary>Removes a single event listener attached to the instance. Inherited from Disposable.</summary>
		/// <param name="eventName" type="String">Type: String&#10;String. The name of the event.</param>
		/// <param name="handler" type="Method">Type: Method&#10;Method. Represents the method that handles the event specified with eventName.</param>
		/// <param name="element" type="Object" optional="true">Optional. Type: Object&#10;Object. For internal use.</param>
	}
};
MindFusion.Controls.Canvas.__class = true;

MindFusion.Controls.CanvasControl.prototype = {
	clientToDoc: function(point) {
		/// <summary>Transforms a point from client to document coordinates.</summary>
		/// <param name="point" type="Point">Type: Point&#10;Point. The point to transform.</param>
		/// <returns type="Point">Type: Point&#10;Point. The transformed point.</returns>
	},
	docToClient: function(point) {
		/// <summary>Transforms a point from document to client coordinates.</summary>
		/// <param name="point" type="Point">Type: Point&#10;Point. The point to transform.</param>
		/// <returns type="Point">Type: Point&#10;Point. The transformed point.</returns>
	},
	addEventListener: function(eventName, handler, element) {
		/// <summary>Registers a single event listener on the instance. Inherited from Disposable.</summary>
		/// <param name="eventName" type="String">Type: String&#10;String. The name of the event.</param>
		/// <param name="handler" type="Method">Type: Method&#10;Method. Represents the method that will handle the event specified with eventName.</param>
		/// <param name="element" type="Object" optional="true">Optional. Type: Object&#10;Object. For internal use.</param>
	},
	raiseEvent: function(eventName, args, element) {
		/// <summary>Raises an event. Inherited from Disposable.</summary>
		/// <param name="eventName" type="String">Type: String&#10;String. The name of the event to raise.</param>
		/// <param name="args" type="EventArgs">Type: EventArgs&#10;EventArgs. An instance of type EventArgs that holds data for the event specified with eventName.</param>
		/// <param name="element" type="Object" optional="true">Optional. Type: Object&#10;Object. For internal use.</param>
	},
	removeEventListener: function(eventName, handler, element) {
		/// <summary>Removes a single event listener attached to the instance. Inherited from Disposable.</summary>
		/// <param name="eventName" type="String">Type: String&#10;String. The name of the event.</param>
		/// <param name="handler" type="Method">Type: Method&#10;Method. Represents the method that handles the event specified with eventName.</param>
		/// <param name="element" type="Object" optional="true">Optional. Type: Object&#10;Object. For internal use.</param>
	},
	registerForSubmit: function(id) {
		/// <summary>Registers an onsubmit handler for the Control's parent html form to flush postback data. Inherited from Control.</summary>
		/// <param name="id" type="String">Type: String&#10;String. The id of the hidden field to flush the data to.</param>
	},
	attach: function() {
		/// <summary>Attach control event handlers. Inherited from Control.</summary>
	},
	detach: function() {
		/// <summary>Detach control event handlers. Inherited from Control.</summary>
	},
	dispose: function() {
		/// <summary>Dispose the control. Inherited from Control.</summary>
	},
	draw: function() {
		/// <summary>Draws the control. Inherited from Control.</summary>
		/// <returns type="HTMLElement">Type: HTMLElement&#10;HTMLElement. The control DOM element.</returns>
	},
	render: function() {
		/// <summary>Draws the control and prepares it for user interaction. Inherited from Control.</summary>
	}
};
MindFusion.Controls.CanvasControl.__class = true;

MindFusion.Controls.CanvasControl.addHandlers = function() {
	/// <summary>Adds an event listener to a DOM element. Inherited from Control.</summary>
};
MindFusion.Controls.CanvasControl.clearHandlers = function() {
	/// <summary>Removes all event listeners from a DOM element. Inherited from Control.</summary>
};
MindFusion.Controls.CanvasControl.fromJson = function() {
	/// <summary>Constructs a JavaScript object from a JSON string. Inherited from Control.</summary>
	/// <returns type="Object">Type: Object&#10;Object. object The corresponding to the given JSON text.</returns>
};
MindFusion.Controls.CanvasControl.toJson = function(object) {
	/// <summary>Converts a JavaScript object to a JSON string. Inherited from Control.</summary>
	/// <param name="object" type="Object">Type: Object&#10;Object. The object to stringify.</param>
	/// <returns type="String">Type: String&#10;String. The JSON string.</returns>
};
MindFusion.Controls.CanvasControl.find = function(id) {
	/// <summary>Returns the control with the specified ID. Inherited from Control.</summary>
	/// <param name="id" type="String">Type: String&#10;String. The ID.</param>
	/// <returns type="Control">Control. The control with the specified ID, if found; otherwise, null.</returns>
};

MindFusion.Controls.Control.prototype = {
	registerForSubmit: function(id) {
		/// <summary>Registers an onsubmit handler for the Control's parent html form to flush postback data.</summary>
		/// <param name="id" type="String">Type: String&#10;String. The id of the hidden field to flush the data to.</param>
	},
	addEventListener: function(eventName, handler, element) {
		/// <summary>Registers a single event listener on the instance. Inherited from Disposable.</summary>
		/// <param name="eventName" type="String">Type: String&#10;String. The name of the event.</param>
		/// <param name="handler" type="Method">Type: Method&#10;Method. Represents the method that will handle the event specified with eventName.</param>
		/// <param name="element" type="Object" optional="true">Optional. Type: Object&#10;Object. For internal use.</param>
	},
	raiseEvent: function(eventName, args, element) {
		/// <summary>Raises an event. Inherited from Disposable.</summary>
		/// <param name="eventName" type="String">Type: String&#10;String. The name of the event to raise.</param>
		/// <param name="args" type="EventArgs">Type: EventArgs&#10;EventArgs. An instance of type EventArgs that holds data for the event specified with eventName.</param>
		/// <param name="element" type="Object" optional="true">Optional. Type: Object&#10;Object. For internal use.</param>
	},
	removeEventListener: function(eventName, handler, element) {
		/// <summary>Removes a single event listener attached to the instance. Inherited from Disposable.</summary>
		/// <param name="eventName" type="String">Type: String&#10;String. The name of the event.</param>
		/// <param name="handler" type="Method">Type: Method&#10;Method. Represents the method that handles the event specified with eventName.</param>
		/// <param name="element" type="Object" optional="true">Optional. Type: Object&#10;Object. For internal use.</param>
	}
};
MindFusion.Controls.Control.__class = true;

MindFusion.Controls.Control.addHandlers = function() {
	/// <summary>Adds an event listener to a DOM element.</summary>
};
MindFusion.Controls.Control.clearHandlers = function() {
	/// <summary>Removes all event listeners from a DOM element.</summary>
};
MindFusion.Controls.Control.fromJson = function() {
	/// <summary>Constructs a JavaScript object from a JSON string.</summary>
	/// <returns type="Object">Type: Object&#10;Object. object The corresponding to the given JSON text.</returns>
};
MindFusion.Controls.Control.toJson = function(object) {
	/// <summary>Converts a JavaScript object to a JSON string.</summary>
	/// <param name="object" type="Object">Type: Object&#10;Object. The object to stringify.</param>
	/// <returns type="String">Type: String&#10;String. The JSON string.</returns>
};

MindFusion.Controls.Disposable.prototype = {
	addEventListener: function(eventName, handler, element) {
		/// <summary>Registers a single event listener on the instance.</summary>
		/// <param name="eventName" type="String">Type: String&#10;String. The name of the event.</param>
		/// <param name="handler" type="Method">Type: Method&#10;Method. Represents the method that will handle the event specified with eventName.</param>
		/// <param name="element" type="Object" optional="true">Optional. Type: Object&#10;Object. For internal use.</param>
	},
	raiseEvent: function(eventName, args, element) {
		/// <summary>Raises an event.</summary>
		/// <param name="eventName" type="String">Type: String&#10;String. The name of the event to raise.</param>
		/// <param name="args" type="EventArgs">Type: EventArgs&#10;EventArgs. An instance of type EventArgs that holds data for the event specified with eventName.</param>
		/// <param name="element" type="Object" optional="true">Optional. Type: Object&#10;Object. For internal use.</param>
	},
	removeEventListener: function(eventName, handler, element) {
		/// <summary>Removes a single event listener attached to the instance.</summary>
		/// <param name="eventName" type="String">Type: String&#10;String. The name of the event.</param>
		/// <param name="handler" type="Method">Type: Method&#10;Method. Represents the method that handles the event specified with eventName.</param>
		/// <param name="element" type="Object" optional="true">Optional. Type: Object&#10;Object. For internal use.</param>
	}
};
MindFusion.Controls.Disposable.__class = true;

MindFusion.Controls.DomUtils.prototype = {
};
MindFusion.Controls.DomUtils.__class = true;

MindFusion.Controls.DomUtils.formatString = function() {
	/// <summary>Formats the specified string according to the specified parameters.</summary>
};
MindFusion.Controls.DomUtils.getBounds = function(element, parent, includeScroll) {
	/// <summary>Gets the bounds of the specified element.</summary>
	/// <param name="element" type="HTMLElement">Type: HTMLElement&#10;HTMLElement. The element to check.</param>
	/// <param name="parent" type="HTMLElement" optional="true">Optional. Type: HTMLElement&#10;HTMLElement. The parent of the element. If supplied, the returned bounds will be relative to the parent element bounds.</param>
	/// <param name="includeScroll" type="Boolean" optional="true">Optional. Type: Boolean&#10;Boolean. For internal use.</param>
	/// <returns type="Rect">Type: Rect&#10;Rect. The bounding rectangle.</returns>
};
MindFusion.Controls.DomUtils.getElementAttributes = function() {
	/// <summary>Gets an object containing element attributes that have values.</summary>
};
MindFusion.Controls.DomUtils.HTMLtoXHTML = function(html) {
	/// <summary>Converts HTML to XHMTL.</summary>
	/// <param name="html" type="String">Type: String&#10;String. The HTML to convert.</param>
	/// <returns type="String">Type: String&#10;String. The resulting XHTML.</returns>
};
MindFusion.Controls.DomUtils.loadImageList = function(images) {
	/// <summary>Loads the images from the specified list of image url-s.</summary>
	/// <param name="images" type="Array">Type: Array&#10;Array. An array of image url-s.</param>
	/// <returns type="Promise">Type: Promise&#10;Promise. Promise object contaning an array of images in base64 format.</returns>
};
MindFusion.Controls.DomUtils.setBounds = function(element, bounds) {
	/// <summary>Sets the bounds of the specified element.</summary>
	/// <param name="element" type="HTMLElement">Type: HTMLElement&#10;HTMLElement. The element.</param>
	/// <param name="bounds" type="Rect">Type: Rect&#10;Rect. The bounding rectangle.</param>
};
MindFusion.Controls.DomUtils.setSize = function(element, size) {
	/// <summary>Sets the size of the specified element.</summary>
	/// <param name="element" type="HTMLElement">Type: HTMLElement&#10;HTMLElement. The element.</param>
	/// <param name="size" type="Size">Type: Size&#10;Size. The new size.</param>
};
MindFusion.Controls.DomUtils.toDataUrl = function(url, callback) {
	/// <summary>Converts an image to base64 string.</summary>
	/// <param name="url" type="String">Type: String&#10;String. The url of the image.</param>
	/// <param name="callback" type="function">Type: function&#10;function. The callback function.</param>
	/// <returns type="String">Type: String&#10;String. The base64-encoded string, representing the image.</returns>
};

MindFusion.Controls.EventArgs.prototype = {
};
MindFusion.Controls.EventArgs.__class = true;

MindFusion.Controls.Events.prototype = {
};
MindFusion.Controls.Events.__class = true;

MindFusion.Controls.MouseButton = {
		/// <summary>Specifies which button was pressed to trigger the event.</summary>
		/// <field name="Auxiliary">Type: Int32&#10;Auxiliary button pressed, usually the wheel button or the middle button.</field>
		/// <field name="Fifth">Type: Int32&#10;Fifth button, typically the Browser Forward button.</field>
		/// <field name="Fourth">Type: Int32&#10;Fourth button, typically the Browser Back button.</field>
		/// <field name="Main">Type: Int32&#10;Main button pressed, usually the left button or the un-initialized state.</field>
		/// <field name="Secondary">Type: Int32&#10;Secondary button pressed, usually the right button.</field>
	Auxiliary: 1,
	Fifth: 4,
	Fourth: 3,
	Main: 0,
	Secondary: 2
}
MindFusion.Controls.MouseButton.__enum = true;

MindFusion.Controls.MouseCursors = {
		/// <summary>Specifies the type of the mouse cursor.</summary>
}
MindFusion.Controls.MouseCursors.__enum = true;

MindFusion.Controls.TickPosition = {
		/// <summary>Specifies the position of trackbar ticks.</summary>
		/// <field name="Both">Type: Int32&#10;Ticks are rendered on both sides of the trackbar.</field>
		/// <field name="Left">Type: Int32&#10;Ticks are rendered on the left side of the trackbar.</field>
		/// <field name="None">Type: Int32&#10;There are no ticks rendered.</field>
		/// <field name="Right">Type: Int32&#10;Ticks are rendered on the right side of the trackbar.</field>
	Both: 3,
	Left: 1,
	None: 0,
	Right: 2
}
MindFusion.Controls.TickPosition.__enum = true;

MindFusion.Controls.ZoomControl.prototype = {
	addEventListener: function(eventName, handler, element) {
		/// <summary>Registers a single event listener on the instance. Inherited from Disposable.</summary>
		/// <param name="eventName" type="String">Type: String&#10;String. The name of the event.</param>
		/// <param name="handler" type="Method">Type: Method&#10;Method. Represents the method that will handle the event specified with eventName.</param>
		/// <param name="element" type="Object" optional="true">Optional. Type: Object&#10;Object. For internal use.</param>
	},
	raiseEvent: function(eventName, args, element) {
		/// <summary>Raises an event. Inherited from Disposable.</summary>
		/// <param name="eventName" type="String">Type: String&#10;String. The name of the event to raise.</param>
		/// <param name="args" type="EventArgs">Type: EventArgs&#10;EventArgs. An instance of type EventArgs that holds data for the event specified with eventName.</param>
		/// <param name="element" type="Object" optional="true">Optional. Type: Object&#10;Object. For internal use.</param>
	},
	removeEventListener: function(eventName, handler, element) {
		/// <summary>Removes a single event listener attached to the instance. Inherited from Disposable.</summary>
		/// <param name="eventName" type="String">Type: String&#10;String. The name of the event.</param>
		/// <param name="handler" type="Method">Type: Method&#10;Method. Represents the method that handles the event specified with eventName.</param>
		/// <param name="element" type="Object" optional="true">Optional. Type: Object&#10;Object. For internal use.</param>
	},
	registerForSubmit: function(id) {
		/// <summary>Registers an onsubmit handler for the Control's parent html form to flush postback data. Inherited from Control.</summary>
		/// <param name="id" type="String">Type: String&#10;String. The id of the hidden field to flush the data to.</param>
	},
	attach: function() {
		/// <summary>Attach control event handlers. Inherited from Control.</summary>
	},
	detach: function() {
		/// <summary>Detach control event handlers. Inherited from Control.</summary>
	},
	dispose: function() {
		/// <summary>Dispose the control. Inherited from Control.</summary>
	},
	draw: function() {
		/// <summary>Draws the control. Inherited from Control.</summary>
		/// <returns type="HTMLElement">Type: HTMLElement&#10;HTMLElement. The control DOM element.</returns>
	},
	render: function() {
		/// <summary>Draws the control and prepares it for user interaction. Inherited from Control.</summary>
	},
	clientToDoc: function(point) {
		/// <summary>Transforms a point from client to document coordinates. Inherited from CanvasControl.</summary>
		/// <param name="point" type="Point">Type: Point&#10;Point. The point to transform.</param>
		/// <returns type="Point">Type: Point&#10;Point. The transformed point.</returns>
	},
	docToClient: function(point) {
		/// <summary>Transforms a point from document to client coordinates. Inherited from CanvasControl.</summary>
		/// <param name="point" type="Point">Type: Point&#10;Point. The point to transform.</param>
		/// <returns type="Point">Type: Point&#10;Point. The transformed point.</returns>
	}
};
MindFusion.Controls.ZoomControl.__class = true;

MindFusion.Controls.ZoomControl.create = function(element) {
	/// <summary>Creates and initializes a new ZoomControl from the specified element. This method is static and can be called without creating an instance of the class.</summary>
	/// <param name="element" type="HTMLCanvasElement">Type: HTMLCanvasElement&#10;HTMLCanvasElement. The DOM element that the zoomControl should be attached to.</param>
	/// <returns type="ZoomControl">A ZoomControl object that represents the newly created zoom control.</returns>
};
MindFusion.Controls.ZoomControl.find = function(id) {
	/// <summary>Returns the specified ZoomControl object. This member is static and can be invoked without creating an instance of the class.</summary>
	/// <param name="id" type="String">String. The id of the ZoomControl's DOM element.</param>
	/// <returns type="ZoomControl">A ZoomControl object with the specified id, if found, or&#160;null otherwise.</returns>
};
MindFusion.Controls.ZoomControl.addHandlers = function() {
	/// <summary>Adds an event listener to a DOM element. Inherited from Control.</summary>
};
MindFusion.Controls.ZoomControl.clearHandlers = function() {
	/// <summary>Removes all event listeners from a DOM element. Inherited from Control.</summary>
};
MindFusion.Controls.ZoomControl.fromJson = function() {
	/// <summary>Constructs a JavaScript object from a JSON string. Inherited from Control.</summary>
	/// <returns type="Object">Type: Object&#10;Object. object The corresponding to the given JSON text.</returns>
};
MindFusion.Controls.ZoomControl.toJson = function(object) {
	/// <summary>Converts a JavaScript object to a JSON string. Inherited from Control.</summary>
	/// <param name="object" type="Object">Type: Object&#10;Object. The object to stringify.</param>
	/// <returns type="String">Type: String&#10;String. The JSON string.</returns>
};

MindFusion.Drawing.Border3D.prototype = {
};
MindFusion.Drawing.Border3D.__class = true;

MindFusion.Drawing.Brush.prototype = {
	apply: function(context) {
		/// <summary>Applies the brush properties to a CanvasRenderingContext2D drawing object.</summary>
		/// <param name="context" type="CanvasRenderingContext2D">Type: CanvasRenderingContext2D&#10;The CanvasRenderingContext2D drawing object.</param>
	},
	clone: function() {
		/// <summary>Creates a copy of this brush.</summary>
		/// <returns type="MindFusion.Drawing.Brush">Type: Brush&#10;The copy of this brush.</returns>
	},
	equals: function(The) {
		/// <summary>Determines whether the specified object is equal to this Brush.</summary>
		/// <param name="The" type="Object">Type: Object&#10;object to compare with.</param>
		/// <returns type="Boolean">Type: Boolean&#10;true if the specified object is equal to this Brush; otherwise, false.</returns>
	},
	toObject: function() {
		/// <summary>Returns a JSON object describing this brush.</summary>
		/// <returns type="Object">Type: Object&#10;The object describing this brush.</returns>
	}
};
MindFusion.Drawing.Brush.__class = true;

MindFusion.Drawing.Brush.fromObject = function(obj) {
	/// <summary>Returns a Brush from a JSON object or string describing this brush.</summary>
	/// <param name="obj" type="void">Type: void&#10;</param>
	/// <returns type="Brush">Type: Brush&#10;The brush object.</returns>
};

MindFusion.Drawing.Color.prototype = {
};
MindFusion.Drawing.Color.__class = true;

MindFusion.Drawing.Color.fromArgb = function(alpha, red, green, blue) {
	/// <summary>Creates a Color instance from alpha, red, green and blue values.</summary>
	/// <param name="alpha" type="Number">Type: Number&#10;The alpha value.</param>
	/// <param name="red" type="Number">Type: Number&#10;The red value.</param>
	/// <param name="green" type="Number">Type: Number&#10;The green value.</param>
	/// <param name="blue" type="Number">Type: Number&#10;The blue value.</param>
	/// <returns type="MindFusion.Drawing.Color">Type: Color&#10;The new Color instance.</returns>
};


MindFusion.Drawing.Color.knownColors = function() {
	/// <summary>The list of color names as defined by the CSS specification.</summary>
};

MindFusion.Drawing.Component.prototype = {
};
MindFusion.Drawing.Component.__class = true;

MindFusion.Drawing.ComponentBase.prototype = {
};
MindFusion.Drawing.ComponentBase.__class = true;

MindFusion.Drawing.Container.prototype = {
	add: function(value1, value2) {
		/// <summary>Sums specified nullable number values. Inherited from Component.</summary>
		/// <param name="value1" type="Number">Type: Number&#10;The first term to sum.</param>
		/// <param name="value2" type="Number">Type: Number&#10;The second term to sum.</param>
		/// <returns type="Number">Type: Number&#10;A nullable number value representing the sum.</returns>
	},
	arrange: function(x, y, w, h, context) {
		/// <summary>Sets the location and size of this component relatively to its parent. Inherited from Component.</summary>
		/// <param name="x" type="Number">Type: Number&#10;A number value specifying horizontal position.</param>
		/// <param name="y" type="Number">Type: Number&#10;A number value specifying vertical position.</param>
		/// <param name="w" type="Number">Type: Number&#10;A number value specifying the component's width.</param>
		/// <param name="h" type="Number">Type: Number&#10;A number value specifying the component's height.</param>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
	},
	arrangeInRect: function(child, context, x, y, w, h) {
		/// <summary>Arranges a child component in specified layout rectangle. Inherited from Component.</summary>
		/// <param name="child" type="Component">Type: Component&#10;A Component instance specifying the child to arrange.</param>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
		/// <param name="x" type="Number">Type: Number&#10;Layout rectangle's horizontal position.</param>
		/// <param name="y" type="Number">Type: Number&#10;Layout rectangle's vertical position.</param>
		/// <param name="w" type="Number">Type: Number&#10;Layout rectangle's width.</param>
		/// <param name="h" type="Number">Type: Number&#10;Layout rectangle's height.</param>
	},
	createController: function(context) {
		/// <summary>Returns a ComponentController used to interact with this component. Inherited from Component.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
		/// <returns type="ComponentController">Type: ComponentController&#10;Instance of a ComponentController -derived class.</returns>
	},
	draw: function(context) {
		/// <summary>Draws this component in specified RenderContext. Inherited from Component.</summary>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
	},
	getCursorHint: function(x, y) {
		/// <summary>Invoked while the mouse is moved to let your application set the mouse cursor. Inherited from Component.</summary>
		/// <param name="x" type="Number">Type: Number&#10;A double value specifying the horizontal position of mouse pointer.</param>
		/// <param name="y" type="Number">Type: Number&#10;A double value specifying the vertical position of mouse pointer.</param>
		/// <returns type="CursorHint">Type: CursorHint&#10;A member of the CursorHint enumeration.</returns>
	},
	hitTest: function(x, y) {
		/// <summary>Returns the component containing specified point. Inherited from Component.</summary>
		/// <param name="x" type="Number">Type: Number&#10;X coordinate of the point to test.</param>
		/// <param name="y" type="Number">Type: Number&#10;Y coordinate of the point to test.</param>
		/// <returns type="Component">Type: Component&#10;A Component instance if one contains the point, or null otherwise.</returns>
	},
	invalidate: function(rect) {
		/// <summary>Invalidates the appearance of this component and calls its Draw method at next draw operation. Inherited from Component.</summary>
		/// <param name="rect" type="MindFusion.Drawing.Rect" optional="true">Optional. Type: Rect&#10;A RectD instance specifying the invalid rectangle.</param>
	},
	invalidateLayout: function() {
		/// <summary>Invalidates the current layout and runs a new layout pass before next draw operation. Inherited from Component.</summary>
	},
	localToRoot: function(point) {
		/// <summary>Transforms the specified point to the coordinate system of the root panel. Inherited from Component.</summary>
		/// <param name="point" type="MindFusion.Drawing.Point">Type: Point&#10;A Point instance containing coordinates local to this component.</param>
		/// <returns type="MindFusion.Drawing.Point">Type: Point&#10;A Point instance containing coordinates relative to the root panel.</returns>
	},
	max: function(value1, value2) {
		/// <summary>Returns the larger of specified values. Inherited from Component.</summary>
		/// <param name="value1" type="Number">Type: Number&#10;The first value to compare.</param>
		/// <param name="value2" type="Number">Type: Number&#10;The second value to compare.</param>
		/// <returns type="Number">Type: Number&#10;A nullable number value representing the larger value.</returns>
	},
	measure: function(maxWidth, maxHeight, context) {
		/// <summary>Measures the desired size of this component. Inherited from Component.</summary>
		/// <param name="maxWidth" type="Number">Type: Number&#10;The maximum width provided by parent component.</param>
		/// <param name="maxHeight" type="Number">Type: Number&#10;The maximum height provided by parent component.</param>
		/// <param name="context" type="MindFusion.Charting.RenderContext">Type: RenderContext&#10;A RenderContext instance.</param>
	},
	rootToLocal: function(point) {
		/// <summary>Transforms the specified point to the coordinate system of this component. Inherited from Component.</summary>
		/// <param name="point" type="MindFusion.Drawing.Point">Type: Point&#10;A Point instance containing coordinates relative to the root panel.</param>
		/// <returns type="MindFusion.Drawing.Point">Type: Point&#10;A Point instance containing coordinates local to this component.</returns>
	},
	visit: function(visitor) {
		/// <summary>Implements the visitor design pattern. Inherited from Component.</summary>
		/// <param name="visitor" type="ComponentVisitor">Type: ComponentVisitor&#10;An instance of a ComponentVisitor -derived class.</param>
	}
};
MindFusion.Drawing.Container.__class = true;

MindFusion.Drawing.DashStyle = {
		/// <summary>Specifies the dash pattern of lines.</summary>
		/// <field name="Custom">Type: Int32&#10;Custom pattern.</field>
		/// <field name="Dash">Type: Int32&#10;Draw dashed line.</field>
		/// <field name="DashDot">Type: Int32&#10;Draw dash-dot pattern.</field>
		/// <field name="DashDotDot">Type: Int32&#10;Draw dash-dot-dot pattern.</field>
		/// <field name="Dot">Type: Int32&#10;Draw dotted line.</field>
		/// <field name="Solid">Type: Int32&#10;Draw solid line.</field>
	Custom: 5,
	Dash: 1,
	DashDot: 3,
	DashDotDot: 4,
	Dot: 2,
	Solid: 0
}
MindFusion.Drawing.DashStyle.__enum = true;

MindFusion.Drawing.DrawingUtils.prototype = {
};
MindFusion.Drawing.DrawingUtils.__class = true;

MindFusion.Drawing.DrawingUtils.approximateBezier = function(points, quality, start) {
	/// <summary>Approximates a Bezier curve with the given quality and by a series of line segments.</summary>
	/// <param name="points" type="Array">Type: Array&#10;Array. A list of Bezier control points.</param>
	/// <param name="quality" type="Number">Type: Number&#10;Number. Specifies the approximation quality.</param>
	/// <param name="start" type="Number">Type: Number&#10;Number. Specifies the start point index.</param>
	/// <returns type="Array">Type: Array&#10;Array. A list of points that approximate the curve as a series of straight line segments.</returns>
};
MindFusion.Drawing.DrawingUtils.checkIntersect = function(point, rect, rad) {
	/// <summary>Checks if the specified rectangle and circle intersect.</summary>
	/// <param name="point" type="Point">Type: Point&#10;Point. The center of the circle.</param>
	/// <param name="rect" type="Rect">Type: Rect&#10;Rect. The rectangle.</param>
	/// <param name="rad" type="Number">Type: Number&#10;Number. The radius of the circle.</param>
	/// <returns type="Boolean">Type: Boolean&#10;Boolean. true if the rectangle and the circle intersect; otherwise, false.</returns>
};
MindFusion.Drawing.DrawingUtils.degrees = function(radians) {
	/// <summary>Converts the specified value from radians to degrees.</summary>
	/// <param name="radians" type="Number">Type: Number&#10;Number. The radians to convert.</param>
	/// <returns type="Number">Type: Number&#10;Number. The converted angle.</returns>
};
MindFusion.Drawing.DrawingUtils.distToPolyline = function() {
	/// <summary>Calculates the shortest distance from the specified point to the specified polyline, also returning the index of the segment the point is closest to.</summary>
};
MindFusion.Drawing.DrawingUtils.distToRectPoint = function(point, rect) {
	/// <summary>Returns the point that lies on the outline of a rectangle and is nearest to the given point.</summary>
	/// <param name="point" type="Point">Type: Point&#10;Point. The point to consider.</param>
	/// <param name="rect" type="Rect">Type: Rect&#10;Rect. The rectangle to consider.</param>
	/// <returns type="Number">Type: Number&#10;Number. The nearest point.</returns>
};
MindFusion.Drawing.DrawingUtils.getCenter = function(rect) {
	/// <summary>Returns the center of the specified rectangle.</summary>
	/// <param name="rect" type="Rect">Type: Rect&#10;Rect. The rectangle.</param>
	/// <returns type="Point">Type: Point&#10;Point. The center.</returns>
};
MindFusion.Drawing.DrawingUtils.getPointsBounds = function(points) {
	/// <summary>Calculates the bounding rect of the specified polyline.</summary>
	/// <param name="points" type="Array">Type: Array&#10;Array. An array of points.</param>
	/// <returns type="Rect">Type: Rect&#10;Rect. The bounding rect.</returns>
};
MindFusion.Drawing.DrawingUtils.getSegmentIntersection = function(p1, p2, p3, p4) {
	/// <summary>Checks whether the segments defined by the specified point pairs intersect and returns the intersection point.</summary>
	/// <param name="p1" type="Point">Type: Point&#10;Point. The start of the first segment.</param>
	/// <param name="p2" type="Point">Type: Point&#10;Point. The end of the first segment.</param>
	/// <param name="p3" type="Point">Type: Point&#10;Point. The start of the second segment.</param>
	/// <param name="p4" type="Point">Type: Point&#10;Point. The end of the second segment.</param>
	/// <returns type="Boolean">Type: Boolean&#10;Boolean. true if the segments intersect, false if not.</returns>
};
MindFusion.Drawing.DrawingUtils.inflate = function(rect, x, y) {
	/// <summary>Creates and returns an enlarged copy of a Rect instance.</summary>
	/// <param name="rect" type="Rect">Type: Rect&#10;Rect. The Rect instance to inflate.</param>
	/// <param name="x" type="Number">Type: Number&#10;Number. The amount to inflate horizontally.</param>
	/// <param name="y" type="Number">Type: Number&#10;Number. The amount to inflate vertically.</param>
	/// <returns type="Rect">Type: Rect&#10;Rect. The inflated Rect.</returns>
};
MindFusion.Drawing.DrawingUtils.intersect = function(p1, p2, p3, p4) {
	/// <summary>Determines whether the specified line segments intersect.</summary>
	/// <param name="p1" type="Point">Type: Point&#10;Point. The start of the first line segment.</param>
	/// <param name="p2" type="Point">Type: Point&#10;Point. The end of the first line segment.</param>
	/// <param name="p3" type="Point">Type: Point&#10;Point. The start of the second line segment.</param>
	/// <param name="p4" type="Point">Type: Point&#10;Point. The end of the second line segment.</param>
	/// <returns type="Boolean">Type: Boolean&#10;Boolean. true if the segments intersect, false if not.</returns>
};
MindFusion.Drawing.DrawingUtils.minDistToRect = function(point, rect) {
	/// <summary>Calculates the minimum distance between a given point and a given rectangle.</summary>
	/// <param name="point" type="Point">Type: Point&#10;Point. The point.</param>
	/// <param name="rect" type="Rectabgle">Type: Rectabgle&#10;Rectabgle. The rectangle.</param>
	/// <returns type="Number">Type: Number&#10;Number. The minimum distance.</returns>
};
MindFusion.Drawing.DrawingUtils.pointInCircle = function(point, center, radius) {
	/// <summary>Checks whether the specified circle contains the specified point.</summary>
	/// <param name="point" type="Point">Type: Point&#10;Point. The point to check.</param>
	/// <param name="center" type="Point">Type: Point&#10;Point. The center of the circle.</param>
	/// <param name="radius" type="Number">Type: Number&#10;Number. The radius of the circle.</param>
	/// <returns type="Boolean">Type: Boolean&#10;Boolean. true if the circle contains the specified point, false if not.</returns>
};
MindFusion.Drawing.DrawingUtils.pointInEllipse = function(point, rect) {
	/// <summary>Checks whether the specified ellipse contains the specified point.</summary>
	/// <param name="point" type="Point">Type: Point&#10;Point. The point to check.</param>
	/// <param name="rect" type="Rect">Type: Rect&#10;Rect. The bounds of the ellipse.</param>
	/// <returns type="Boolean">Type: Boolean&#10;Boolean. true if the ellipse contains the specified point, false if not.</returns>
};
MindFusion.Drawing.DrawingUtils.pointInPolygon = function(point, polygon) {
	/// <summary>Checks whether the specified rectangle contains the specified point.</summary>
	/// <param name="point" type="Point">Type: Point&#10;Point. The point to check.</param>
	/// <param name="polygon" type="Array">Type: Array&#10;Array. An array with the points that define the polygon.</param>
	/// <returns type="Boolean">Type: Boolean&#10;Boolean. true if the polygon contains the specified point, false if not.</returns>
};
MindFusion.Drawing.DrawingUtils.radians = function(degrees) {
	/// <summary>Converts the specified value from degrees to radians.</summary>
	/// <param name="degrees" type="Number">Type: Number&#10;Number. The degrees to convert.</param>
	/// <returns type="Number">Type: Number&#10;Number. The converted angle.</returns>
};
MindFusion.Drawing.DrawingUtils.unionRects = function(rect1, rect2) {
	/// <summary>Returns the smallest possible rectangle containing both of the specified rectangles.</summary>
	/// <param name="rect1" type="Rect">Type: Rect&#10;Rect. The first rectangle.</param>
	/// <param name="rect2" type="Rect">Type: Rect&#10;Rect. The second rectangle.</param>
	/// <returns type="Rect">Type: Rect&#10;Rect. A Rect instance that represents the union of the specified arguments.</returns>
};

MindFusion.Drawing.Ellipse.prototype = {
	clone: function() {
		/// <summary>Creates a Ellipse object identical to the current object.</summary>
		/// <returns type="Ellipse">The newly created Ellipse object.</returns>
	}
};
MindFusion.Drawing.Ellipse.__class = true;

MindFusion.Drawing.Font.prototype = {
	apply: function(context) {
		/// <summary>Applies the font properties to a CanvasRenderingContext2D drawing object.</summary>
		/// <param name="context" type="CanvasRenderingContext2D">Type: CanvasRenderingContext2D&#10;CanvasRenderingContext2D. The CanvasRenderingContext2D drawing object.</param>
	},
	toObject: function() {
		/// <summary>Returns a JSON object describing this font.</summary>
		/// <returns type="Object">Type: Object&#10;Object. The object describing this font.</returns>
	}
};
MindFusion.Drawing.Font.__class = true;

MindFusion.Drawing.Font.fromObject = function() {
	/// <summary>Returns a Font from a JSON object or string describing this font.</summary>
	/// <returns type="Font">Type: Font&#10;Font. The font object.</returns>
};

MindFusion.Drawing.FontStyle = {
		/// <summary>Specifies font style attributes.</summary>
		/// <field name="Bold">Type: Int32&#10;Bold text.</field>
		/// <field name="Italic">Type: Int32&#10;Italic text.</field>
		/// <field name="Regular">Type: Int32&#10;Normal text.</field>
		/// <field name="Strikeout">Type: Int32&#10;Striked text.</field>
		/// <field name="Underline">Type: Int32&#10;Underlined text.</field>
	Bold: 1,
	Italic: 2,
	Regular: 0,
	Strikeout: 8,
	Underline: 4
}
MindFusion.Drawing.FontStyle.__enum = true;

MindFusion.Drawing.Graphics.prototype = {
	beginFigure: function(pen, brush, bounds) {
		/// <summary>Starts a new figure.</summary>
		/// <param name="pen" type="MindFusion.Drawing.Pen" optional="true">Optional. Type: Pen&#10;The pen to stroke the figure with.</param>
		/// <param name="brush" type="MindFusion.Drawing.Brush" optional="true">Optional. Type: Brush&#10;The brush to fill the figure with.</param>
		/// <param name="bounds" type="MindFusion.Drawing.Rect" optional="true">Optional. Type: Rect&#10;The bounds to which the brush should be applied.</param>
	},
	clear: function() {
		/// <summary>Clears the canvas.</summary>
	},
	clip: function(rect) {
		/// <summary>Sets the clip rectangle.</summary>
		/// <param name="rect" type="MindFusion.Drawing.Rect">Type: Rect&#10;The clip rectangle</param>
	},
	closeFigure: function(pen, brush, bounds) {
		/// <summary>Closes the current figure.</summary>
		/// <param name="pen" type="MindFusion.Drawing.Pen" optional="true">Optional. Type: Pen&#10;The pen to stroke the figure with.</param>
		/// <param name="brush" type="MindFusion.Drawing.Brush" optional="true">Optional. Type: Brush&#10;The brush to fill the figure with.</param>
		/// <param name="bounds" type="MindFusion.Drawing.Rect" optional="true">Optional. Type: Rect&#10;The bounds to which the brush should be applied.</param>
	},
	drawCurve: function(pen, points) {
		/// <summary>Draws a spline curve.</summary>
		/// <param name="pen" type="MindFusion.Drawing.Pen">Type: Pen&#10;The pen to stroke the curve with.</param>
		/// <param name="points" type="MindFusion.Drawing.Point">Type: Point&#10;The points describing the curve.</param>
	},
	drawEllipse: function(pen, rect) {
		/// <summary>Draws an ellipse.</summary>
		/// <param name="pen" type="MindFusion.Drawing.Pen">Type: Pen&#10;The pen to stroke the ellipse with.</param>
		/// <param name="rect" type="MindFusion.Drawing.Rect">Type: Rect&#10;The rectangle describing the ellipse.</param>
	},
	drawImage: function(image, rect, align) {
		/// <summary>Draws an image.</summary>
		/// <param name="image" type="HTMLImageElement">Type: HTMLImageElement&#10;The image to draw.</param>
		/// <param name="rect" type="MindFusion.Drawing.Rect">Type: Rect&#10;The bounds of the image.</param>
		/// <param name="align" type="MindFusion.Drawing.ImageAlign">Type: ImageAlign&#10;The align to use.</param>
	},
	drawLines: function(pen, points) {
		/// <summary>Draws a series of straight lines.</summary>
		/// <param name="pen" type="MindFusion.Drawing.Pen">Type: Pen&#10;The pen to draw the lines with.</param>
		/// <param name="points" type="MindFusion.Drawing.Point">Type: Point&#10;The points of the lines to draw.</param>
	},
	drawPie: function(pen, rect, radius, startAngle, endAngle, doughnut) {
		/// <summary>Draws a pie.</summary>
		/// <param name="pen" type="MindFusion.Drawing.Pen">Type: Pen&#10;The pen to stroke the pie with.</param>
		/// <param name="rect" type="MindFusion.Drawing.Rect">Type: Rect&#10;The bounds of the pie.</param>
		/// <param name="radius" type="Number">Type: Number&#10;The radius of the pie.</param>
		/// <param name="startAngle" type="Number">Type: Number&#10;The startAngle of the pie.</param>
		/// <param name="endAngle" type="Number">Type: Number&#10;The endAngle of the pie.</param>
		/// <param name="doughnut" type="Boolean" optional="true">Optional. Type: Boolean&#10;True if the pie should be a doughnut, otherwise false.</param>
	},
	drawPolygon: function(pen, points) {
		/// <summary>Draws a polygon.</summary>
		/// <param name="pen" type="MindFusion.Drawing.Pen">Type: Pen&#10;The pen to draw the polygon with.</param>
		/// <param name="points" type="MindFusion.Drawing.Point">Type: Point&#10;The points describing the polygon.</param>
	},
	drawRectangle: function(pen, rect) {
		/// <summary>Draws a rectangle.</summary>
		/// <param name="pen" type="MindFusion.Drawing.Pen">Type: Pen&#10;The pen to stroke the rectangle with.</param>
		/// <param name="rect" type="MindFusion.Drawing.Rect">Type: Rect&#10;The rectangle to draw.</param>
	},
	drawString: function(text, font, brush, location, format) {
		/// <summary>Draws&#160;the specified&#160;string with the specified font and brush at the specified location.</summary>
		/// <param name="text" type="String">Type: String&#10;The string to draw.</param>
		/// <param name="font" type="MindFusion.Drawing.Font">Type: Font&#10;The font to use.</param>
		/// <param name="brush" type="MindFusion.Drawing.Brush">Type: Brush&#10;The brush to use.</param>
		/// <param name="location" type="Point, Rect">Type: Point, Rect&#10;The position at which to draw.</param>
		/// <param name="format" type="MindFusion.Drawing.StringFormat" optional="true">Optional. Type: StringFormat&#10;The format to use.</param>
	},
	drawString: function(text, font, brush, location, format) {
		/// <summary>Draws&#160;the specified string&#160;with the specified font and brush at the speciied location.</summary>
		/// <param name="text" type="String">Type: String&#10;The string to draw.</param>
		/// <param name="font" type="MindFusion.Drawing.Font">Type: Font&#10;The font to use.</param>
		/// <param name="brush" type="MindFusion.Drawing.Brush">Type: Brush&#10;The brush to use.</param>
		/// <param name="location" type="Point|Rect">Type: Point|Rect&#10;The position at which to draw.</param>
		/// <param name="format" type="MindFusion.Drawing.StringFormat" optional="true">Optional. Type: StringFormat&#10;The format to use.</param>
	},
	fillEllipse: function(brush, rect) {
		/// <summary>Fills an ellipse.</summary>
		/// <param name="brush" type="MindFusion.Drawing.Brush">Type: Brush&#10;The brush to fill the ellipse with.</param>
		/// <param name="rect" type="MindFusion.Drawing.Rect">Type: Rect&#10;The rectangle describing the ellipse.</param>
	},
	fillPie: function(brush, rect, radius, startAngle, endAngle, doughnut) {
		/// <summary>Fills a pie.</summary>
		/// <param name="brush" type="MindFusion.Drawing.Brush">Type: Brush&#10;The brush to fill the pie with.</param>
		/// <param name="rect" type="MindFusion.Drawing.Rect">Type: Rect&#10;The bounds of the pie.</param>
		/// <param name="radius" type="Number">Type: Number&#10;The radius of the pie.</param>
		/// <param name="startAngle" type="Number">Type: Number&#10;The startAngle of the pie.</param>
		/// <param name="endAngle" type="Number">Type: Number&#10;The endAngle of the pie.</param>
		/// <param name="doughnut" type="Boolean" optional="true">Optional. Type: Boolean&#10;True if the pie should be a doughnut, otherwise false.</param>
	},
	fillPolygon: function(brush, points) {
		/// <summary>Fills a polygon.</summary>
		/// <param name="brush" type="MindFusion.Drawing.Brush">Type: Brush&#10;The brush to fill the polygon with.</param>
		/// <param name="points" type="MindFusion.Drawing.Point">Type: Point&#10;The points describing the polygon.</param>
	},
	fillRectangle: function(brush, rect) {
		/// <summary>Fills a rectangle.</summary>
		/// <param name="brush" type="MindFusion.Drawing.Brush">Type: Brush&#10;The pen to fill the rectangle with.</param>
		/// <param name="rect" type="MindFusion.Drawing.Rect">Type: Rect&#10;The rectangle to fill.</param>
	},
	measureString: function(text, font, width) {
		/// <summary>Gets the size of the specified string.</summary>
		/// <param name="text" type="String">Type: String&#10;The string to measure.</param>
		/// <param name="font" type="MindFusion.Drawing.Font">Type: Font&#10;The font to use.</param>
		/// <param name="width" type="Number" optional="true">Optional. Type: Number&#10;The maximum width.</param>
		/// <returns type="MindFusion.Drawing.Size">Type: Size&#10;The size of the given string when drawn with the given font.</returns>
	},
	pointInPie: function(point, rect, radius, startAngle, endAngle, doughnut) {
		/// <summary>Checks if the given point is within the bounds of the given pie.</summary>
		/// <param name="point" type="MindFusion.Drawing.Point">Type: Point&#10;The point to check.</param>
		/// <param name="rect" type="MindFusion.Drawing.Rect">Type: Rect&#10;The bounds of the pie.</param>
		/// <param name="radius" type="Number">Type: Number&#10;The radius of the pie.</param>
		/// <param name="startAngle" type="Number">Type: Number&#10;The startAngle of the pie.</param>
		/// <param name="endAngle" type="Number">Type: Number&#10;The endAngle of the pie.</param>
		/// <param name="doughnut" type="Boolean" optional="true">Optional. Type: Boolean&#10;True if the pie is a doughnut, otherwise false.</param>
		/// <returns type="Boolean">Type: Boolean&#10;True if the point lies within pie bounds, otherwise false.</returns>
	},
	pointInPoly: function(point, poly) {
		/// <summary>Checks if the given point is within the bounds of the given polygon.</summary>
		/// <param name="point" type="MindFusion.Drawing.Point">Type: Point&#10;The point to check.</param>
		/// <param name="poly" type="MindFusion.Drawing.Point">Type: Point&#10;The points describing the polygon.</param>
	},
	restore: function() {
		/// <summary>Restores to a previously saved graphics state.</summary>
	},
	save: function() {
		/// <summary>Saves the current graphics state.</summary>
	},
	setTransform: function(transform) {
		/// <summary>Sets a transform.</summary>
		/// <param name="transform" type="MindFusion.Drawing.Matrix">Type: Matrix&#10;The transform matrix.</param>
	}
	translate: function(x, y) {
		/// <summary>Sets a translate transform.</summary>
		/// <param name="x" type="Number">Type: Number&#10;The distance to translate along the x-axis.</param>
		/// <param name="y" type="Number">Type: Number&#10;The distance to translate along the y-axis.</param>
	},
};
MindFusion.Drawing.Graphics.__class = true;

MindFusion.Drawing.GraphicsUnit.prototype = {
};
MindFusion.Drawing.GraphicsUnit.__class = true;

MindFusion.Drawing.Image.prototype = {
};
MindFusion.Drawing.Image.__class = true;

MindFusion.Drawing.ImageAlign = {
		/// <summary>Specifies the position and alignment of a picture in a node, or that of the background image.</summary>
		/// <field name="BottomCenter">Type: Int32&#10;The image is centered horizontally and aligned to the bottom side.</field>
		/// <field name="BottomLeft">Type: Int32&#10;The image is aligned to the bottom left corner of the node or the diagram.</field>
		/// <field name="BottomRight">Type: Int32&#10;The image is aligned to the bottom right corner of the node or the diagram.</field>
		/// <field name="Center">Type: Int32&#10;The image is centered in the node or diagram.</field>
		/// <field name="Fit">Type: Int32&#10;The image is resized to fit the size of the object or the component's client area.</field>
		/// <field name="FitBottom">Type: Int32&#10;The image is resized to fit the size of the object and aligned to bottom side.</field>
		/// <field name="FitLeft">Type: Int32&#10;The image is resized to fit the size of the object and aligned to left side.</field>
		/// <field name="FitRight">Type: Int32&#10;The image is resized to fit the size of the object and aligned to right side.</field>
		/// <field name="FitTop">Type: Int32&#10;The image is resized to fit the size of the object and aligned to top side.</field>
		/// <field name="MiddleLeft">Type: Int32&#10;The image is centered vertically and aligned to the left-hand side.</field>
		/// <field name="MiddleRight">Type: Int32&#10;The image is centered vertically and aligned to the right-hand side.</field>
		/// <field name="Stretch">Type: Int32&#10;The image is stretched to fill the object or the component's client area.</field>
		/// <field name="Tile">Type: Int32&#10;The image is tiled to cover the node or the diagram.</field>
		/// <field name="TopCenter">Type: Int32&#10;The image is centered horizontally and aligned to the top side.</field>
		/// <field name="TopLeft">Type: Int32&#10;The image is aligned to the top left corner of the node or the diagram.</field>
		/// <field name="TopRight">Type: Int32&#10;The image is aligned to the top right corner of the node or the diagram.</field>
	BottomCenter: 9,
	BottomLeft: 5,
	BottomRight: 7,
	Center: 0,
	Fit: 1,
	FitBottom: 15,
	FitLeft: 12,
	FitRight: 14,
	FitTop: 13,
	MiddleLeft: 10,
	MiddleRight: 11,
	Stretch: 2,
	Tile: 3,
	TopCenter: 8,
	TopLeft: 4,
	TopRight: 6
}
MindFusion.Drawing.ImageAlign.__enum = true;

MindFusion.Drawing.LayoutAlignment = {
		/// <summary>Specifies alignment of components.</summary>
		/// <field name="Center">Type: Int32&#10;Center alignment.</field>
		/// <field name="Far">Type: Int32&#10;Right ot bottom alignment</field>
		/// <field name="Near">Type: Int32&#10;Left or top alignment.</field>
		/// <field name="Stretch">Type: Int32&#10;Stretch the component.</field>
	Center: 1,
	Far: 2,
	Near: 0,
	Stretch: 3
}
MindFusion.Drawing.LayoutAlignment.__enum = true;

MindFusion.Drawing.LinearGradientBrush.prototype = {
	apply: function(context, bounds) {
		/// <summary>Applies the brush properties to a CanvasRenderingContext2D drawing object.</summary>
		/// <param name="context" type="CanvasRenderingContext2D">Type: CanvasRenderingContext2D&#10;The CanvasRenderingContext2D drawing object.</param>
		/// <param name="bounds" type="MindFusion.Drawing.Rect">Type: Rect&#10;The bounds of the gradient.</param>
	},
	clone: function() {
		/// <summary>Creates a copy of this brush.</summary>
		/// <returns type="LinearGradientBrush">Type: LinearGradientBrush&#10;The copy of this brush.</returns>
	},
	equals: function(The) {
		/// <summary>Determines whether the specified object is equal to this LinearGradientBrush.</summary>
		/// <param name="The" type="Object">Type: Object&#10;object to compare with.</param>
		/// <returns type="Boolean">Type: Boolean&#10;true if the specified object is equal to this LinearGradientBrush; otherwise, false.</returns>
	},
	toObject: function() {
		/// <summary>Returns a JSON object describing this brush.</summary>
		/// <returns type="Object">Type: Object&#10;The object describing this brush.</returns>
	}
};
MindFusion.Drawing.LinearGradientBrush.__class = true;

MindFusion.Drawing.LinearGradientBrush.fromObject = function(obj) {
	/// <summary>Returns a LinearGradientBrush from a JSON object or string describing this brush.</summary>
	/// <param name="obj" type="void">Type: void&#10;</param>
	/// <returns type="LinearGradientBrush">Type: LinearGradientBrush&#10;The brush object.</returns>
};

MindFusion.Drawing.LineJoin = {
		/// <summary>Specifies how to join consecutive line or curve segments in a figure.</summary>
		/// <field name="Bevel">Type: Int32&#10;Produces a diagonal corner.</field>
		/// <field name="Miter">Type: Int32&#10;Produces a sharp corner or a clipped corner, depending on whether the length of the miter exceeds the miter limit.</field>
		/// <field name="Round">Type: Int32&#10;Produces a smooth, circular arc between the lines.</field>
	Bevel: 1,
	Miter: 0,
	Round: 2
}
MindFusion.Drawing.LineJoin.__enum = true;

MindFusion.Drawing.Path.prototype = {
	addEllipse: function(x, y, width, height) {
		/// <summary>Adds an ellipse figure to the path.</summary>
		/// <param name="x" type="Number">Type: Number&#10;Number. The x-coordinate of the center of the ellipse.</param>
		/// <param name="y" type="Number">Type: Number&#10;Number. The y-coordinate of the center of the ellipse.</param>
		/// <param name="width" type="Number">Type: Number&#10;Number. The width of the ellipse.</param>
		/// <param name="height" type="Number">Type: Number&#10;Number. The height of the ellipse.</param>
	},
	addRect: function(x, y, width, height) {
		/// <summary>Adds a rectangle figure to the path.</summary>
		/// <param name="x" type="Number">Type: Number&#10;Number. The x-coordinate of the rectangle.</param>
		/// <param name="y" type="Number">Type: Number&#10;Number. The y-coordinate of the rectangle.</param>
		/// <param name="width" type="Number">Type: Number&#10;Number. The width of the rectangle.</param>
		/// <param name="height" type="Number">Type: Number&#10;Number. The height of the rectangle.</param>
	},
	arcTo: function(x, y, radius, startAngle, endAngle, anticlockwise) {
		/// <summary>Draws an arc.</summary>
		/// <param name="x" type="Number">Type: Number&#10;Number. The x-coordinate of the center of the circle.</param>
		/// <param name="y" type="Number">Type: Number&#10;Number. The y-coordinate of the center of the circle.</param>
		/// <param name="radius" type="Number">Type: Number&#10;Number. The radius of the circle</param>
		/// <param name="startAngle" type="Number">Type: Number&#10;Number. The starting angle in radians.</param>
		/// <param name="endAngle" type="Number">Type: Number&#10;Number. The ending angle in radians.</param>
		/// <param name="anticlockwise" type="Boolean">Type: Boolean&#10;Boolean. Specifies whether the drawing should be counterclockwise or clockwise.</param>
	},
	bezierTo: function(x1, y1, x2, y2, x3, y3) {
		/// <summary>Draws a cubic bezier curve.</summary>
		/// <param name="x1" type="Number">Type: Number&#10;Number. The x-coordinate of the first bezier control point.</param>
		/// <param name="y1" type="Number">Type: Number&#10;Number. The y-coordinate of the first bezier control point.</param>
		/// <param name="x2" type="Number">Type: Number&#10;Number. The x-coordinate of the second bezier control point.</param>
		/// <param name="y2" type="Number">Type: Number&#10;Number. The y-coordinate of the second bezier control point.</param>
		/// <param name="x3" type="Number">Type: Number&#10;Number. The x-coordinate of the ending point.</param>
		/// <param name="y3" type="Number">Type: Number&#10;Number. The y-coordinate of the ending point.</param>
	},
	clone: function() {
		/// <summary>Creates a Path object identical to the current object.</summary>
		/// <returns type="Path">The newly created Path object.</returns>
	},
	close: function() {
		/// <summary>Closes the path.</summary>
	},
	done: function() {
		/// <summary>Ends the path definition.</summary>
	},
	empty: function() {
		/// <summary>Gets a value indicating whether this Path is empty.</summary>
		/// <returns type="Boolean">true if the path does not contain any figures; otherwise, false.</returns>
	},
	getBounds: function() {
		/// <summary>Gets the bounding rect of the path.</summary>
		/// <returns type="Rect">Type: Rect&#10;Rect. The bounding rect.</returns>
	},
	init: function() {
		/// <summary>Begins a path or resets the current path.</summary>
	},
	lineTo: function(x, y) {
		/// <summary>Draws a line from the current point to the specified location.</summary>
		/// <param name="x" type="Number">Type: Number&#10;Number. The x-coordinate of the point.</param>
		/// <param name="y" type="Number">Type: Number&#10;Number. The y-coordinate of the point.</param>
	},
	moveTo: function(x, y) {
		/// <summary>Moves the path to the specified location.</summary>
		/// <param name="x" type="Number">Type: Number&#10;Number. The x-coordinate of the point.</param>
		/// <param name="y" type="Number">Type: Number&#10;Number. The y-coordinate of the point.</param>
	},
	quadraticCurveTo: function(x1, y1, x, y) {
		/// <summary>Draws a quadratic bezier curve.</summary>
		/// <param name="x1" type="Number">Type: Number&#10;Number. The x-coordinate of the bezier control point.</param>
		/// <param name="y1" type="Number">Type: Number&#10;Number. The y-coordinate of the bezier control point.</param>
		/// <param name="x" type="Number">Type: Number&#10;Number. The x-coordinate of the ending point.</param>
		/// <param name="y" type="Number">Type: Number&#10;Number. The y-coordinate of the ending point.</param>
	}
};
MindFusion.Drawing.Path.__class = true;

MindFusion.Drawing.Pen.prototype = {
	apply: function(context) {
		/// <summary>Applies the pen properties to a CanvasRenderingContext2D drawing object.</summary>
		/// <param name="context" type="CanvasRenderingContext2D">Type: CanvasRenderingContext2D&#10;The CanvasRenderingContext2D drawing object.</param>
	},
	equals: function(The) {
		/// <summary>Determines whether the specified object is equal to this LinearGradientBrush.</summary>
		/// <param name="The" type="Object">Type: Object&#10;object to compare with.</param>
		/// <returns type="Boolean">Type: Boolean&#10;true if the specified object is equal to this LinearGradientBrush; otherwise, false.</returns>
	},
	toString: function() {
		/// <summary>Returns a string representation of this pen.</summary>
		/// <returns type="String">Type: String&#10;The string representation of this pen.</returns>
	}
};
MindFusion.Drawing.Pen.__class = true;

MindFusion.Drawing.Pen.fromObject = function(obj) {
	/// <summary>Returns a Pen from a string describing this pen.</summary>
	/// <param name="obj" type="void">Type: void&#10;</param>
	/// <returns type="Pen">Type: Pen&#10;The pen object.</returns>
};

MindFusion.Drawing.Point.prototype = {
	empty: function() {
		/// <summary>Gets a value indicating whether this Point is empty.</summary>
		/// <returns type="Boolean">true if both&#160;x and&#160;y are 0; otherwise, false.</returns>
	},
	equals: function(point) {
		/// <summary>Specifies whether this Point contains the same coordinates as the specified point.</summary>
		/// <param name="point" type="Point" optional="true">Optional. The Point to test.</param>
		/// <returns type="Boolean">true if point is a Point and has the same coordinates as this Point.</returns>
	}
};
MindFusion.Drawing.Point.__class = true;

MindFusion.Drawing.Rect.prototype = {
	bottom: function() {
		/// <summary>Gets the y-coordinate that is the sum of the&#160;y and height values of this Rect object.</summary>
		/// <returns type="Number">The y-coordinate that is the sum of&#160;y and height of this Rect.</returns>
	},
	bottomLeft: function() {
		/// <summary>Gets the bottom-left edge of this Rect object.</summary>
		/// <returns type="Point">The bottom-left edge, which is a Point with&#160;x that is equal to&#160;x and with&#160;y that is the sum of&#160;y and height.</returns>
	},
	bottomRight: function() {
		/// <summary>Gets the bottom-right edge of this Rect object.</summary>
		/// <returns type="Point">The bottom-right edge, which is a Point with&#160;x that is the sum of&#160;x and width and with&#160;y that is the sum of&#160;y and height.</returns>
	},
	center: function() {
		/// <summary>Gets the center of this Rect object.</summary>
		/// <returns type="Point">The center, which is a Point with&#160;x that is the sum of&#160;x and half of width and with&#160;y that is the sum of&#160;y and half of height.</returns>
	},
	clone: function() {
		/// <summary>Creates a Rect object identical to the current object.</summary>
		/// <returns type="Rect">Type: Rect&#10;Rect. The newly created Rect object.</returns>
	},
	contains: function(rect) {
		/// <summary>Determines if the rectangular region represented by rect is entirely contained within this Rect object.</summary>
		/// <param name="rect" type="Rect">The Rect to test.</param>
		/// <returns type="Boolean">true if the rectangular region represented by rect is entirely contained within this Rect; otherwise, false.</returns>
	},
	containsPoint: function(point) {
		/// <summary>Determines if the specified point is contained within this Rect object.</summary>
		/// <param name="point" type="Point">Type: Point&#10;Point. The point to check.</param>
		/// <returns type="Boolean">true if point is contained within the Rect; otherwise, false.</returns>
	},
	equals: function(rect) {
		/// <summary>Specifies whether this Rect contains the same coordinates as the specified rectangle.</summary>
		/// <param name="rect" type="Rect">Type: Rect&#10;Rect. The Rect to test.</param>
		/// <returns type="Boolean">Type: Boolean&#10;Boolean. true if rect has the same coordinates as this Rect.</returns>
	},
	intersect: function(rect) {
		/// <summary>Returns a Rect object representing the intersection of the current rectangle with the specified rectangle.</summary>
		/// <param name="rect" type="Rect">Type: Rect&#10;Rect. The rectangle to intersect.</param>
		/// <returns type="Rect">A Rect object representing the intersection of the two rectangles.</returns>
	},
	intersectsWith: function(rect) {
		/// <summary>Checks if this Rect intersects with the specified rect.</summary>
		/// <param name="rect" type="Rect">The other Rect.</param>
		/// <returns type="Boolean">true if this Rect and the specified Rect intersect; otherwise, false.</returns>
	},
	isEmpty: function() {
		/// <summary>Gets a value indicating whether this Rect is empty.</summary>
		/// <returns type="Boolean">true if both width and height are 0; otherwise, false.</returns>
	},
	left: function() {
		/// <summary>Gets the x-coordinate of the left edge of this Rect object.</summary>
		/// <returns type="Number">The x-coordinate of the left edge of this Rect object.</returns>
	},
	right: function() {
		/// <summary>Gets the x-coordinate that is the sum of x and width values of this Rect.</summary>
		/// <returns type="Number">The x-coordinate that is the sum of x and width of this rectangle.</returns>
	},
	setCenter: function(point) {
		/// <summary>Sets the center of this Rect object.</summary>
		/// <param name="point" type="Point">The center of this Rect.</param>
	},
	setLocation: function(point) {
		/// <summary>Sets the top-left edge of this Rect object.</summary>
		/// <param name="point" type="Point">The top-left edge of the Rect.</param>
	},
	top: function() {
		/// <summary>Gets the y-coordinate of the top edge of this Rect object.</summary>
		/// <returns type="Number">Type: Number&#10;Number. The y-coordinate of the top edge of this Rect object.</returns>
	},
	topLeft: function() {
		/// <summary>Gets the top-left edge of this Rect.</summary>
		/// <returns type="Point">The top-left edge of this Rect.</returns>
	},
	topMiddle: function() {
		/// <summary>Gets the top-middle of this Rect object.</summary>
		/// <returns type="Point">The top-middle coordinate, which is a Point with x that is the sum of x and half of width and with y equal to y.</returns>
	},
	topRight: function() {
		/// <summary>Gets the top-right edge of this Rect object.</summary>
		/// <returns type="Point">The top-right edge, which is a Point with x that is the sum of x and width and with y equal to y.</returns>
	},
	union: function(rect) {
		/// <summary>Returns a Rect object representing the union of the current rectangle with the specified rectangle.</summary>
		/// <param name="rect" type="Rect">Type: Rect&#10;Rect. The rectangle to union.</param>
		/// <returns type="Rect">A Rect object that bounds the union of the two rectangles.</returns>
	}
};
MindFusion.Drawing.Rect.__class = true;

MindFusion.Drawing.Rect.fromLTRB = function(l, t, r, b) {
	/// <summary>Creates a Rect object with the specified edge locations.</summary>
	/// <param name="l" type="Number">Type: Number&#10;Number. The x-coordinate of the upper-left corner of this Rect.</param>
	/// <param name="t" type="Number">Type: Number&#10;Number. The y-coordinate of the upper-left corner of this Rect.</param>
	/// <param name="r" type="Number">Type: Number&#10;Number. The x-coordinate of the lower-right corner of this Rect.</param>
	/// <param name="b" type="Number">Type: Number&#10;Number. The y-coordinate of the lower-right corner of this Rect.</param>
	/// <returns type="Rect">Type: Rect&#10;Rect. A rectangle with the specified coordinates.</returns>
};

MindFusion.Drawing.Size.prototype = {
	empty: function() {
		/// <summary>Gets a value indicating whether this Size is empty.</summary>
		/// <returns type="Boolean">Type: Boolean&#10;Boolean. true if both width and height are 0; otherwise, false.</returns>
	}
};
MindFusion.Drawing.Size.__class = true;

MindFusion.Drawing.StringAlignment = {
		/// <summary>Specifies the alignment of a text string relative to its layout rectangle.</summary>
		/// <field name="Center">Type: Int32&#10;The text is drawn in the center of the layout rectangle.</field>
		/// <field name="Far">Type: Int32&#10;The text is drawn in the far corner of the layout rectangle.le.</field>
		/// <field name="Near">Type: Int32&#10;The text is drawn in the near corner of the layout rectangle.</field>
	Center: 1,
	Far: 2,
	Near: 0
}
MindFusion.Drawing.StringAlignment.__enum = true;

MindFusion.Drawing.StringFormat.prototype = {
};
MindFusion.Drawing.StringFormat.__class = true;

MindFusion.Drawing.Text.prototype = {
	clone: function() {
		/// <summary>Creates a Text object identical to the current object.</summary>
		/// <returns type="Text">The newly created Text object.</returns>
	},
	getBounds: function() {
		/// <summary>Gets a value indicating the bounding rectangle of the text container.</summary>
		/// <returns type="Rect">Type: Rect&#10;Rect. The bounding rectangle.</returns>
	},
	setBounds: function(bounds, angle) {
		/// <summary>Sets a value indicating the bounding rectangle of the text container.</summary>
		/// <param name="bounds" type="Rect">Type: Rect&#10;Rect. The bounding rectangle.</param>
		/// <param name="angle" type="Number" optional="true">Optional. Type: Number&#10;Number. The rotation angle to be applied to the bounding rectangle.</param>
	}
};
MindFusion.Drawing.Text.__class = true;

MindFusion.Drawing.Thickness.prototype = {
	addToRect: function(rect) {
		/// <summary>Applies the current thickness to the specified rectangle by inflating the rectangle.</summary>
		/// <param name="rect" type="Rect">Type: Rect&#10;Rect. The rectangle to inflate.</param>
	},
	applyTo: function(rect) {
		/// <summary>Applies the current thickness to the specified rectangle by deflating the rectangle.</summary>
		/// <param name="rect" type="Rect">Type: Rect&#10;Rect. The rectangle to deflate.</param>
	},
	toAbsolute: function() {
		/// <summary>Converts the current thickness to absolute value relative to the specified size.</summary>
	}
};
MindFusion.Drawing.Thickness.__class = true;

MindFusion.Drawing.Vector.prototype = {
};
MindFusion.Drawing.Vector.__class = true;

MindFusion.Drawing.Video.prototype = {
	clone: function() {
		/// <summary>Creates a Video object identical to the current object.</summary>
		/// <returns type="Video">Type: Video&#10;</returns>
	},
	isPlaying: function() {
		/// <summary>Detects if video is playing.</summary>
	},
	pause: function() {
		/// <summary>Pauses the video.</summary>
	},
	play: function() {
		/// <summary>Starts playing the video stream.</summary>
	}
};
MindFusion.Drawing.Video.__class = true;

MindFusion.Drawing.Visibility = {
		/// <summary>Specifies visibility for components.</summary>
		/// <field name="Collapsed">Type: Int32&#10;Specifies that the component is hidden, and the space it occupies in the layout is not preserved.</field>
		/// <field name="Hidden">Type: Int32&#10;Specifies that the component is hidden, but the space it occupies in the layout is preserved.</field>
		/// <field name="Visible">Type: Int32&#10;Specifies that the component is visible.</field>
	Collapsed: 1,
	Hidden: 0,
	Visible: 2
}
MindFusion.Drawing.Visibility.__enum = true;

MindFusion.Gauges.Alignment = {
		/// <summary>Indicates an alignment of an object relative to the scale. In the descriptionsbelow 'outbound' refers to an element's outer outline, 'inbound' refers to anelement's inner outline and 'center' refers to en element's center, that is,the middle of the inbound and outbound.</summary>
		/// <field name="CenterInside">Type: Int32&#10;Specifies that the outbound of an object is aligned with the center of the scale.</field>
		/// <field name="CenterOutside">Type: Int32&#10;Specifies that the inbound of an object is aligned with the center of the scale.</field>
		/// <field name="InnerCenter">Type: Int32&#10;Specifies that the center of an object is aligned with the inbound of the scale.</field>
		/// <field name="InnerInside">Type: Int32&#10;Specifies that the outbound of an object is aligned with the inbound of the scale.</field>
		/// <field name="InnerOutside">Type: Int32&#10;Specifies that the inbound of an object is aligned with the inbound of the scale.</field>
		/// <field name="OuterCenter">Type: Int32&#10;Specifies that the center of an object is aligned with the outbound of the scale.</field>
		/// <field name="OuterInside">Type: Int32&#10;Specifies that the outbound of an object is aligned with the outbound of the scale.</field>
		/// <field name="OuterOutside">Type: Int32&#10;Specifies that the inbound of an object is aligned with the outbound of the scale.</field>
		/// <field name="TrueCenter">Type: Int32&#10;Specifies that the center of an object is aligned with the center of the scale.</field>
	CenterInside: 6,
	CenterOutside: 8,
	InnerCenter: 1,
	InnerInside: 0,
	InnerOutside: 2,
	OuterCenter: 4,
	OuterInside: 3,
	OuterOutside: 5,
	TrueCenter: 7
}
MindFusion.Gauges.Alignment.__enum = true;

MindFusion.Gauges.ArcArea.prototype = {
};
MindFusion.Gauges.ArcArea.__class = true;

MindFusion.Gauges.ArcSegment.prototype = {
	addTo: function() {
		/// <summary>Segment.addTo override.</summary>
	}
};
MindFusion.Gauges.ArcSegment.__class = true;

MindFusion.Gauges.BaseGauge.prototype = {
	addScale: function(scale) {
		/// <summary>Adds a scale to the gauge.</summary>
		/// <param name="scale" type="BaseScale">Type: BaseScale&#10;BaseScale. The scale to add.</param>
	},
	getElementByName: function(name) {
		/// <summary>Returns the VisualElement object corresponding to the specified name.</summary>
		/// <param name="name" type="String">Type: String&#10;String. The name of the object to find.</param>
	},
	removeScale: function(scale) {
		/// <summary>Removes a scale from the gauge.</summary>
		/// <param name="scale" type="BaseScale">Type: BaseScale&#10;BaseScale. The scale to remove.</param>
	},
	fromJson: function(json) {
		/// <summary>Deserializes the gauge from a JSON string.</summary>
		/// <param name="json" type="String">Type: String&#10;String. A string created by the toJson method.</param>
	},
	toJson: function() {
		/// <summary>Serializes the gauge into a JSON string.</summary>
		/// <returns type="String">Type: String&#10;String. A string containing the view's JSON representation.</returns>
	}
};
MindFusion.Gauges.BaseGauge.__class = true;

MindFusion.Gauges.BaseScale.prototype = {
	addPointer: function(pointer) {
		/// <summary>Adds a Pointer object to the pointers collection.</summary>
		/// <param name="pointer" type="Pointer">Pointer. The pointer to add.</param>
	},
	addRange: function(range) {
		/// <summary>Adds a Range object to the ranges collection.</summary>
		/// <param name="range" type="Range">Range. The range to add.</param>
	},
	removePointer: function(pointer) {
		/// <summary>Removes a Pointer object from the pointers collection.</summary>
		/// <param name="pointer" type="Pointer">Pointer. The pointer to remove.</param>
	},
	removeRange: function(range) {
		/// <summary>Removes a Range object from the ranges collection.</summary>
		/// <param name="range" type="Range">Range. The ranges to remove.</param>
	}
};
MindFusion.Gauges.BaseScale.__class = true;

MindFusion.Gauges.CenterPanel.prototype = {
};
MindFusion.Gauges.CenterPanel.__class = true;

MindFusion.Gauges.CustomInterval.prototype = {
	contains: function() {
		/// <summary>Checks whether the specified value falls within this interval.</summary>
	}
};
MindFusion.Gauges.CustomInterval.__class = true;

MindFusion.Gauges.DisplayType = {
		/// <summary>Specifies a display condition.</summary>
		/// <field name="Always">Type: Int32&#10;Indicates that the the element should always be displayed.</field>
		/// <field name="Auto">Type: Int32&#10;Indicates that the visibility of an element should be determined automatically.</field>
		/// <field name="Never">Type: Int32&#10;Indicates that the the element should always be hidden.</field>
	Always: 1,
	Auto: 0,
	Never: 2
}
MindFusion.Gauges.DisplayType.__enum = true;

MindFusion.Gauges.Ellipse.prototype = {
};
MindFusion.Gauges.Ellipse.__class = true;

MindFusion.Gauges.Events.prototype = {
};
MindFusion.Gauges.Events.__class = true;

MindFusion.Gauges.FunctionType = {
		/// <summary>Indicates the type of function that will be used to distribute values along the gauge scale.</summary>
		/// <field name="Custom">Type: Int32&#10;Specifies a user defined function, which will be supplied by the CustomFunction property.</field>
		/// <field name="Linear">Type: Int32&#10;Specifies that the values will be distributed linearly.</field>
		/// <field name="Logarithmic">Type: Int32&#10;Specifies a logarithmic function with base specified by the LogarithmBase property.</field>
	Custom: 2,
	Linear: 0,
	Logarithmic: 1
}
MindFusion.Gauges.FunctionType.__enum = true;

MindFusion.Gauges.GeometryFactory.prototype = {
};
MindFusion.Gauges.GeometryFactory.__class = true;

MindFusion.Gauges.GeometryFactory.createLinearGeometry = function(centerX, centerY, startInnerOffset, startOuterOffset, endInnerOffset, endOuterOffset, length, isVertical, capStart, capEnd, strokeInner, strokeOuter) {
	/// <summary>Generates a linear bar geometry with the specified parameters.</summary>
	/// <param name="centerX" type="Number">Type: Number&#10;Number. The x-coordinate of the generated geometry.</param>
	/// <param name="centerY" type="Number">Type: Number&#10;Number. The y-coordinate of the generated geometry.</param>
	/// <param name="startInnerOffset" type="Number">Type: Number&#10;Number. The start inner offset of the generated geometry relative to the specified center.</param>
	/// <param name="startOuterOffset" type="Number">Type: Number&#10;Number. The start outer offset of the generated geometry relative to the specified center.</param>
	/// <param name="endInnerOffset" type="Number">Type: Number&#10;Number. The end inner offset of the generated geometry relative to the specified center.</param>
	/// <param name="endOuterOffset" type="Number">Type: Number&#10;Number. The end outer offset of the generated geometry relative to the specified center.</param>
	/// <param name="length" type="Number">Type: Number&#10;Number. The length of the generated geometry.</param>
	/// <param name="isVertical" type="Boolean">Type: Boolean&#10;Boolean. A flag indicating whether the generated geometry is vertical.</param>
	/// <param name="capStart" type="Boolean">Type: Boolean&#10;Boolean. A flag indicating whether to draw a stroke at the start of the bar.</param>
	/// <param name="capEnd" type="Boolean">Type: Boolean&#10;Boolean. A flag indicating whether to draw a stroke at the end of the bar.</param>
	/// <param name="strokeInner" type="Boolean">Type: Boolean&#10;Boolean. A flag indicating whether to draw a stroke at the inner side of the bar.</param>
	/// <param name="strokeOuter" type="Boolean">Type: Boolean&#10;Boolean. A flag indicating whether to draw a stroke at the outer side of the bar.</param>
	/// <returns type="PathFigure">A PathFigure representing a linear bar with the specified parameters.</returns>
};
MindFusion.Gauges.GeometryFactory.createRadialGeometry = function(centerX, centerY, startInnerRadius, startOuterRadius, endInnerRadius, endOuterRadius, startAngle, endAngle, capStart, capEnd, strokeInner, strokeOuter) {
	/// <summary>Generates a radial bar geometry with the specified parameters.</summary>
	/// <param name="centerX" type="Number">Type: Number&#10;Number. The x-coordinate of the generated geometry.</param>
	/// <param name="centerY" type="Number">Type: Number&#10;Number. The y-coordinate of the generated geometry.</param>
	/// <param name="startInnerRadius" type="Number">Type: Number&#10;Number. The radius of the start point of the inner outline of the bar.</param>
	/// <param name="startOuterRadius" type="Number">Type: Number&#10;Number. The radius of the start point of the outer outline of the bar.</param>
	/// <param name="endInnerRadius" type="Number">Type: Number&#10;Number. The radius of the end point of the inner outline of the bar.</param>
	/// <param name="endOuterRadius" type="Number">Type: Number&#10;Number. The radius of the end point of the outer outline of the bar.</param>
	/// <param name="startAngle" type="Number">Type: Number&#10;Number. The start angle of the radial bar.</param>
	/// <param name="endAngle" type="Number">Type: Number&#10;Number. The end angle of the radial bar.</param>
	/// <param name="capStart" type="Boolean">Type: Boolean&#10;Boolean. A flag indicating whether to draw a stroke at the start of the bar.</param>
	/// <param name="capEnd" type="Boolean">Type: Boolean&#10;Boolean. A flag indicating whether to draw a stroke at the end of the bar.</param>
	/// <param name="strokeInner" type="Boolean">Type: Boolean&#10;Boolean. A flag indicating whether to draw a stroke at the inner curve of the bar.</param>
	/// <param name="strokeOuter" type="Boolean">Type: Boolean&#10;Boolean. A flag indicating whether to draw a stroke at the outer curve of the bar.</param>
	/// <returns type="PathFigure">A PathFigure representing a radial bar with the specified parameters.</returns>
};

MindFusion.Gauges.LabelRotation = {
		/// <summary>Indicates the rotation of a label within a scale.</summary>
		/// <field name="Auto">Type: Int32&#10;Specifies that the labels are automatically rotated so that their baseline always points downwards.</field>
		/// <field name="BaselineAwayFromCenter">Type: Int32&#10;Specifies that the labels are rotated so that their baseline points away from the center of the scale.</field>
		/// <field name="BaselineToCenter">Type: Int32&#10;Specifies that the labels are rotated so that their baseline points towards the center of the scale.</field>
		/// <field name="None">Type: Int32&#10;Specifies no rotation.</field>
		/// <field name="Sideways">Type: Int32&#10;Specifies that the labels are aligned sideways to the scale.</field>
	Auto: 1,
	BaselineAwayFromCenter: 3,
	BaselineToCenter: 2,
	None: 0,
	Sideways: 4
}
MindFusion.Gauges.LabelRotation.__enum = true;

MindFusion.Gauges.Length.prototype = {
	getAbsoluteLength: function() {
		/// <summary>Calculates the absolute length corresponding to the specified argument, relative to the the specified area.</summary>
	}
};
MindFusion.Gauges.Length.__class = true;

MindFusion.Gauges.LengthType = {
		/// <summary>Indicates the type of the units of a Length object.</summary>
		/// <field name="Absolute">Type: Int32&#10;Specifies absolute length, expressed in pixels.</field>
		/// <field name="Relative">Type: Int32&#10;Specifies relative length, expressed as a percentage of the container's size.</field>
	Absolute: 0,
	Relative: 1
}
MindFusion.Gauges.LengthType.__enum = true;

MindFusion.Gauges.LinearGauge.prototype = {
};
MindFusion.Gauges.LinearGauge.__class = true;

MindFusion.Gauges.LinearGauge.create = function(element, ignoreMouseEvents) {
	/// <summary>Creates and initializes a new LinearGauge from the specified element. This method is static and can be called without creating an instance of the class.</summary>
	/// <param name="element" type="Object">Type: Object&#10;Object. The DOM element that the LinearGauge should be attached to.</param>
	/// <param name="ignoreMouseEvents" type="Boolean" optional="true">Optional. Type: Boolean&#10;Boolean. Optional.</param>
	/// <returns type="LinearGauge">Type: LinearGauge&#10;LinearGauge. A LinearGauge object that represents the newly created gauge.</returns>
};
MindFusion.Gauges.LinearGauge.find = function(id) {
	/// <summary>Returns the specified LinearGauge object. This member is static and can be invoked without creating an instance of the class.</summary>
	/// <param name="id" type="String">Type: String&#10;String. A string that contains the ID of the LinearGauge to find.</param>
	/// <returns type="LinearGauge">Type: LinearGauge&#10;LinearGauge. A LinearGauge object that contains the gauge requested by id, if found; otherwise, null.</returns>
};

MindFusion.Gauges.LinearScale.prototype = {
	getValueFromPoint: function(point) {
		/// <summary>BaseScale.getValueFromPoint override.</summary>
		/// <param name="point" type="Point">Type: Point&#10;Point. The point to test.</param>
		/// <returns type="Number">Type: Number&#10;Number. The value from the scale, corresponding to the point, possibly MinValue orMaxValue if the specified point cannot be associated with a value.</returns>
	}
};
MindFusion.Gauges.LinearScale.__class = true;

MindFusion.Gauges.LineSegment.prototype = {
	addTo: function() {
		/// <summary>Segment.addTo override.</summary>
	}
};
MindFusion.Gauges.LineSegment.__class = true;

MindFusion.Gauges.MajorTickSettings.prototype = {
};
MindFusion.Gauges.MajorTickSettings.__class = true;

MindFusion.Gauges.MiddleTickSettings.prototype = {
};
MindFusion.Gauges.MiddleTickSettings.__class = true;

MindFusion.Gauges.MinorTickSettings.prototype = {
};
MindFusion.Gauges.MinorTickSettings.__class = true;

MindFusion.Gauges.MouseAction = {
		/// <summary>Specifies an action performed with the mouse.</summary>
		/// <field name="Down">Type: Int32&#10;Indicates the press of a mouse button.</field>
		/// <field name="Move">Type: Int32&#10;Indicates the move of a mouse.</field>
		/// <field name="Up">Type: Int32&#10;Indicates the release of a mouse button.</field>
	Down: 1,
	Move: 2,
	Up: 0
}
MindFusion.Gauges.MouseAction.__enum = true;

MindFusion.Gauges.MouseInfo.prototype = {
};
MindFusion.Gauges.MouseInfo.__class = true;

MindFusion.Gauges.Orientation = {
		/// <summary>Specifies the orientation of elements.</summary>
		/// <field name="Horizontal">Type: Int32&#10;The element is oriented horizontally.</field>
		/// <field name="Vertical">Type: Int32&#10;The element is oriented vertically.</field>
	Horizontal: 0,
	Vertical: 1
}
MindFusion.Gauges.Orientation.__enum = true;

MindFusion.Gauges.OvalGauge.prototype = {
};
MindFusion.Gauges.OvalGauge.__class = true;

MindFusion.Gauges.OvalGauge.create = function(element, ignoreMouseEvents) {
	/// <summary>Creates and initializes a new OvalGauge from the specified element. This method is static and can be called without creating an instance of the class.</summary>
	/// <param name="element" type="Object">Type: Object&#10;Object. The DOM element that the OvalGauge should be attached to.</param>
	/// <param name="ignoreMouseEvents" type="Boolean" optional="true">Optional. Type: Boolean&#10;Boolean. Optional.</param>
	/// <returns type="OvalGauge">Type: OvalGauge&#10;OvalGauge. A OvalGauge object that represents the newly created gauge.</returns>
};
MindFusion.Gauges.OvalGauge.find = function(id) {
	/// <summary>Returns the specified OvalGauge object. This member is static and can be invoked without creating an instance of the class.</summary>
	/// <param name="id" type="String">Type: String&#10;String. A string that contains the ID of the OvalGauge to find.</param>
	/// <returns type="OvalGauge">Type: OvalGauge&#10;OvalGauge. A OvalGauge object that contains the gauge requested by id, if found; otherwise, null.</returns>
};

MindFusion.Gauges.OvalGaugeStyle = {
		/// <summary>Specifies the appearance of an oval gauge.</summary>
		/// <field name="Circular">Type: Int32&#10;Indicates a regular circular appearance.</field>
		/// <field name="QuadraticNE">Type: Int32&#10;Indicates a quadratic appearance with the scales oriented towards North-East.</field>
		/// <field name="QuadraticNW">Type: Int32&#10;Indicates a quadratic appearance with the scales oriented towards North-West.</field>
		/// <field name="QuadraticSE">Type: Int32&#10;Indicates a quadratic appearance with the scales oriented towards South-East.</field>
		/// <field name="QuadraticSW">Type: Int32&#10;Indicates a quadratic appearance with the scales oriented towards South-West.</field>
		/// <field name="SemicircleE">Type: Int32&#10;Indicates a semi-circular appearance with the scales oriented towards East.</field>
		/// <field name="SemicircleN">Type: Int32&#10;Indicates a semi-circular appearance with the scales oriented towards North.</field>
		/// <field name="SemicircleS">Type: Int32&#10;Indicates a semi-circular appearance with the scales oriented towards South.</field>
		/// <field name="SemicircleW">Type: Int32&#10;Indicates a semi-circular appearance with the scales oriented towards West.</field>
	Circular: 0,
	QuadraticNE: 1,
	QuadraticNW: 2,
	QuadraticSE: 3,
	QuadraticSW: 4,
	SemicircleE: 6,
	SemicircleN: 5,
	SemicircleS: 7,
	SemicircleW: 8
}
MindFusion.Gauges.OvalGaugeStyle.__enum = true;

MindFusion.Gauges.OvalScale.prototype = {
	getValueFromPoint: function(point) {
		/// <summary>BaseScale.getValueFromPoint override.</summary>
		/// <param name="point" type="Point">Type: Point&#10;Point. The point to test.</param>
		/// <returns type="Number">Type: Number&#10;Number. The value from the scale, corresponding to the point, possibly MinValue orMaxValue if the specified point cannot be associated with a value.</returns>
	}
};
MindFusion.Gauges.OvalScale.__class = true;

MindFusion.Gauges.PaintEventArgs.prototype = {
	paintVisualElement: function(element, constraint) {
		/// <summary>Paints the specified visual element to the underlying canvas.</summary>
		/// <param name="element" type="VisualElement">Type: VisualElement&#10;VisualElement. The VisualElement to paint.</param>
		/// <param name="constraint" type="Size">Type: Size&#10;Size. The available size.</param>
	}
};
MindFusion.Gauges.PaintEventArgs.__class = true;

MindFusion.Gauges.PathFigure.prototype = {
};
MindFusion.Gauges.PathFigure.__class = true;

MindFusion.Gauges.Pointer.prototype = {
};
MindFusion.Gauges.Pointer.__class = true;

MindFusion.Gauges.PointerShape = {
		/// <summary>Indicates the shape of a pointer.</summary>
		/// <field name="Custom">Type: Int32&#10;Specifies a custom shape.</field>
		/// <field name="Ellipse">Type: Int32&#10;Specifies an elliptical shape.</field>
		/// <field name="Needle">Type: Int32&#10;Specifies a sharp pointer with a circle at its base.</field>
		/// <field name="Needle2">Type: Int32&#10;Specifies a sharp pointer with a circle at its base.</field>
		/// <field name="None">Type: Int32&#10;Specifies an empty shape, that is, the pointer is not displayed.</field>
		/// <field name="Rectangle">Type: Int32&#10;Specifies a rectangular shape.</field>
	Custom: 1,
	Ellipse: 4,
	Needle: 2,
	Needle2: 3,
	None: 0,
	Rectangle: 5
}
MindFusion.Gauges.PointerShape.__enum = true;

MindFusion.Gauges.PrepaintEventArgs.prototype = {
};
MindFusion.Gauges.PrepaintEventArgs.__class = true;

MindFusion.Gauges.Range.prototype = {
};
MindFusion.Gauges.Range.__class = true;

MindFusion.Gauges.RoundRectangle.prototype = {
};
MindFusion.Gauges.RoundRectangle.__class = true;

MindFusion.Gauges.Segment.prototype = {
	addTo: function() {
		/// <summary>Adds the segment to the specified graphics path.</summary>
	}
};
MindFusion.Gauges.Segment.__class = true;

MindFusion.Gauges.Tick.prototype = {
};
MindFusion.Gauges.Tick.__class = true;

MindFusion.Gauges.TickLabel.prototype = {
};
MindFusion.Gauges.TickLabel.__class = true;

MindFusion.Gauges.TickSettings.prototype = {
	addCustomInterval: function(interval) {
		/// <summary>Adds a CustomInterval object to these settings' customIntervals collection.</summary>
		/// <param name="interval" type="CustomInterval">Type: CustomInterval&#10;CustomInterval. The interval to add.</param>
	},
	removeCustomInterval: function(interval) {
		/// <summary>Removes a CustomInterval object from these settings' customIntervals collection.</summary>
		/// <param name="interval" type="CustomInterval">Type: CustomInterval&#10;CustomInterval. The interval to remove.</param>
	}
};
MindFusion.Gauges.TickSettings.__class = true;

MindFusion.Gauges.TickShape = {
		/// <summary>Indicates the shape of a scale tick.</summary>
		/// <field name="Arrow1">Type: Int32&#10;Specifies an arrow shape.</field>
		/// <field name="Arrow2">Type: Int32&#10;Specifies an arrow shape.</field>
		/// <field name="Arrow3">Type: Int32&#10;Specifies an arrow shape.</field>
		/// <field name="Custom">Type: Int32&#10;Specifies a custom shape.</field>
		/// <field name="Ellipse">Type: Int32&#10;Specifies an elliptical shape.</field>
		/// <field name="Line">Type: Int32&#10;Specifies a line as a shape.</field>
		/// <field name="None">Type: Int32&#10;Specifies an empty shape, that is, the tick is not displayed.</field>
		/// <field name="Rectangle">Type: Int32&#10;Specifies a rectangular shape.</field>
		/// <field name="Rhombus">Type: Int32&#10;Specifies a rhombus as a shape.</field>
		/// <field name="RoundRect">Type: Int32&#10;Specifies a rounded rectangle as a shape.</field>
		/// <field name="Triangle">Type: Int32&#10;Specifies a triangular shape.</field>
	Arrow1: 8,
	Arrow2: 9,
	Arrow3: 10,
	Custom: 1,
	Ellipse: 2,
	Line: 6,
	None: 0,
	Rectangle: 3,
	Rhombus: 5,
	RoundRect: 4,
	Triangle: 7
}
MindFusion.Gauges.TickShape.__enum = true;

MindFusion.Gauges.TickType = {
		/// <summary>Indicates the type of a scale tick.</summary>
		/// <field name="Major">Type: Int32&#10;Specifies a major tick.</field>
		/// <field name="Middle">Type: Int32&#10;Specifies a middle tick.</field>
		/// <field name="Minor">Type: Int32&#10;Specifies a minor tick.</field>
		/// <field name="None">Type: Int32&#10;Specifies ticks of an unknown type.</field>
	Major: 1,
	Middle: 2,
	Minor: 3,
	None: 0
}
MindFusion.Gauges.TickType.__enum = true;

MindFusion.Gauges.Utils.prototype = {
};
MindFusion.Gauges.Utils.__class = true;

MindFusion.Gauges.Utils.createLinearGradient = function() {
	/// <summary>Creates a linear gradient brush with the specified data.</summary>
	/// <returns type="Object">Type: Object&#10;Object. The brush.</returns>
};
MindFusion.Gauges.Utils.createRadialGradient = function() {
	/// <summary>Creates a radial gradient brush with the specified data.</summary>
	/// <returns type="Object">Type: Object&#10;Object. The brush.</returns>
};

MindFusion.Gauges.ValueChangedEventArgs.prototype = {
};
MindFusion.Gauges.ValueChangedEventArgs.__class = true;

MindFusion.Gauges.ValueChangingEventArgs.prototype = {
};
MindFusion.Gauges.ValueChangingEventArgs.__class = true;

MindFusion.Gauges.VisualElement.prototype = {
	getSize: function() {
		/// <summary>Gets the size of this element.</summary>
		/// <returns type="Size">Type: Size&#10;Size. The size of this element.</returns>
	}
};
MindFusion.Gauges.VisualElement.__class = true;

MindFusion.Gauges.VisualElementContainer.prototype = {
};
MindFusion.Gauges.VisualElementContainer.__class = true;
