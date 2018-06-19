var pins_config = {
	'default':{
		'pinShadow':'#000', //shadow color below the points
		'pinShadowOpacity':'50', //shadow opacity, value, 0-100
	},
	'points':[
	{
		'shape':'rectangle',//choose the shape of the pin circle or rectangle
		'hover': '<u><b>Sydney</b></u>',//the content of the hover popup
		'pos_X':493,//location of the pin on X axis
		'pos_Y':337,//location of the pin on Y axis
		'width':12,//width of the rectangle
		'height':12,//height of the rectangle
		'outline':'#D2D2FF',//outline color of the pin
		'thickness':1,//thickness of the line (0 to hide the line)
		'upColor':'#0000FF',//color of the pin when map loads
		'overColor':'#3399ff',//color of the pin when mouse hover
		'downColor':'#00ffff',//color of the pin when clicked 
		//(trick, if you make this pin un-clickable > make the overColor and downColor the same)
		'url':'http://www.html5interactivemaps.com',//URL of this pin
		'target':'same_window',//'new_window' opens URL in new window//'same_window' opens URL in the same window //'none' pin is not clickable
		'enable':true,//true/false to enable/disable this pin
	},
	{
		'shape':'circle',
		'hover': 'Melbourne',
		'pos_X':417,
		'pos_Y':398,
		'diameter':8,
		'outline':'#FFCECE',
		'thickness':1,
		'upColor':'#FF0000',
		'overColor':'#990000',
		'downColor':'#00ffff',
		'url':'http://www.html5interactivemaps.com',
		'target':'same_window',
		'enable':true,
	},
	{
		'shape':'circle',
		'hover': 'Brisbane',
		'pos_X':524,
		'pos_Y':237,
		'diameter':8,
		'outline':'#FFCECE',
		'thickness':1,
		'upColor':'#FF0000',
		'overColor':'#990000',
		'downColor':'#00ffff',
		'url':'http://www.html5interactivemaps.com',
		'target':'same_window',
		'enable':true,
	},
	{
		'shape':'circle',
		'hover': '<u><b>Perth</b></u><br>This pin when clicked will open<br>the URL in a <span style="color:black; background-color:#a9f038;"><b>NEW</b></span> window.',
		'pos_X':47,
		'pos_Y':308,
		'diameter':8,
		'outline':'#FFCECE',
		'thickness':1,
		'upColor':'#FF0000',
		'overColor':'#990000',
		'downColor':'#00ffff',
		'url':'http://www.html5interactivemaps.com',
		'target':'new_window',
		'enable':true,
	},
	{
		'shape':'circle',
		'hover': 'Adelaide',
		'pos_X':338,
		'pos_Y':349,
		'diameter':8,
		'outline':'#FFCECE',
		'thickness':1,
		'upColor':'#FF0000',
		'overColor':'#990000',
		'downColor':'#00ffff',
		'url':'http://www.html5interactivemaps.com',
		'target':'same_window',
		'enable':true,
	},
	{
		'shape':'circle',
		'hover': 'Hobart',
		'pos_X':448,
		'pos_Y':481,
		'diameter':8,
		'outline':'#FFCECE',
		'thickness':1,
		'upColor':'#FF0000',
		'overColor':'#990000',
		'downColor':'#00ffff',
		'url':'http://www.html5interactivemaps.com',
		'target':'same_window',
		'enable':true,
	},
	{
		'shape':'circle',
		'hover': '<u><b>Darwin</b></u><br><img src="example.png">Here you can write some <b>HTML</b><br>formated text.<br>This pin when clicked will open<br>the URL in the <span style="color:black; background-color:#a9f038;"><b>SAME</b></span> window.',
		'pos_X':237,
		'pos_Y':34,
		'diameter':8,
		'outline':'#FFCECE',
		'thickness':1,
		'upColor':'#FF0000',
		'overColor':'#990000',
		'downColor':'#00ffff',
		'url':'http://www.html5interactivemaps.com',
		'target':'same_window',
		'enable':true,
	},
	{
		'shape':'circle',
		'hover': 'Newcastle',
		'pos_X':506,
		'pos_Y':317,
		'diameter':8,
		'outline':'#FFCECE',
		'thickness':1,
		'upColor':'#FF0000',
		'overColor':'#990000',
		'downColor':'#00ffff',
		'url':'http://www.html5interactivemaps.com',
		'target':'same_window',
		'enable':true,
	},
	{
		'shape':'circle',
		'hover': '<b>Townsville</b><br><span style="color:yellow;">*This pin is not clickable*</span>',
		'pos_X':443,
		'pos_Y':127,
		'diameter':8,
		'outline':'#FFCECE',
		'thickness':1,
		'upColor':'orange',
		'overColor':'#990000',
		'downColor':'#990000',
		'url':'http://www.html5interactivemaps.com',
		'target':'none',
		'enable':true,
	},
	]
}
