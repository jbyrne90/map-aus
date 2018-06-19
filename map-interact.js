// Quick feature detection
function isTouchEnabled() {
	return (('ontouchstart' in window)
		|| (navigator.MaxTouchPoints > 0)
		|| (navigator.msMaxTouchPoints > 0));
}

$(function(){
	addEvent('map_1');
	addEvent('map_2');
	addEvent('map_3');
	addEvent('map_4');
	addEvent('map_5');
	addEvent('map_6');
	addEvent('map_7');
	addEvent('map_8');
})
$(function(){
	if($('#map-shadow').find('path').eq(0).attr('fill') != 'undefined'){
		$('#map-shadow').find('path').attr({'fill':map_config['default']['mapShadow']});
	}
});

function addEvent(id,relationId){
	var _obj = $('#'+id);
	var _Textobj = $('#'+id+','+'#'+map_config[id]['namesId']);
	$('#'+['text-abb']).attr({'fill':map_config['default']['namesColor']});

	_obj.attr({'fill':map_config[id]['upColor'],'stroke':map_config['default']['borderColor']});
	_Textobj.attr({'cursor':'default'});
	if(map_config[id]['enable'] == true){
		if (isTouchEnabled()) {
			_Textobj.on('touchstart', function(e){
				var touch = e.originalEvent.touches[0];
				var x=touch.pageX+10, y=touch.pageY+15;
				var tipw=$('#map-tip').outerWidth(), tiph=$('#map-tip').outerHeight(), 
				x=(x+tipw>$(document).scrollLeft()+$(window).width())? x-tipw-(20*2) : x
				y=(y+tiph>$(document).scrollTop()+$(window).height())? $(document).scrollTop()+$(window).height()-tiph-10 : y
				$('#'+id).css({'fill':map_config[id]['downColor']});
				$('#map-tip').show().html(map_config[id]['hover']);
				$('#map-tip').css({left:x, top:y})
			})
			_Textobj.on('touchend', function(){
				$('#'+id).css({'fill':map_config[id]['upColor']});
				if(map_config[id]['target'] == 'new_window'){
					window.open(map_config[id]['url']);	
				}else if(map_config[id]['target'] == 'same_window'){
					window.parent.location.href=map_config[id]['url'];
				}
			})
		}
		_Textobj.attr({'cursor':'pointer'});
		_Textobj.hover(function(){
			$('#map-tip').show().html(map_config[id]['hover']);
			_obj.css({'fill':map_config[id]['overColor']})
		},function(){
			$('#map-tip').hide();
			$('#'+id).css({'fill':map_config[id]['upColor']});
		})
		_Textobj.mousedown(function(){
			$('#'+id).css({'fill':map_config[id]['downColor']});
		})
		_Textobj.mouseup(function(){
			$('#'+id).css({'fill':map_config[id]['overColor']});
			if(map_config[id]['target'] == 'new_window'){
				window.open(map_config[id]['url']);	
			}else if(map_config[id]['target'] == 'same_window'){
				window.parent.location.href=map_config[id]['url'];
			}
		})
		_Textobj.mousemove(function(e){
			var x=e.pageX+10, y=e.pageY+15;
			var tipw=$('#map-tip').outerWidth(), tiph=$('#map-tip').outerHeight(), 
			x=(x+tipw>$(document).scrollLeft()+$(window).width())? x-tipw-(20*2) : x
			y=(y+tiph>$(document).scrollTop()+$(window).height())? $(document).scrollTop()+$(window).height()-tiph-10 : y
			$('#map-tip').css({left:x, top:y})
		})
	}	
}

//The pins code
$(function(){
	var points_len = pins_config['points'].length;
	if( points_len > 0){
		var xmlns = "http://www.w3.org/2000/svg";
		var tsvg_obj = document.getElementById("map_points");
		var svg_circle,svg_rect;
		for(var i=0;i<points_len;i++){
			if (pins_config['points'][i]['shape']=="circle"){
				svg_circle = document.createElementNS(xmlns, "circle");
				svg_circle.setAttributeNS(null, "cx", pins_config['points'][i]['pos_X']+1);
				svg_circle.setAttributeNS(null, "cy", pins_config['points'][i]['pos_Y']+1);
				svg_circle.setAttributeNS(null, "r", pins_config['points'][i]['diameter']/2);
				svg_circle.setAttributeNS(null, "fill", pins_config['default']['pinsShadow']);
				tsvg_obj.appendChild(svg_circle);
				svg_circle = document.createElementNS(xmlns, "circle");
				svg_circle.setAttributeNS(null, "cx", pins_config['points'][i]['pos_X']);
				svg_circle.setAttributeNS(null, "cy", pins_config['points'][i]['pos_Y']);
				svg_circle.setAttributeNS(null, "r", pins_config['points'][i]['diameter']/2);
				svg_circle.setAttributeNS(null, "fill", pins_config['points'][i]['upColor']);
				svg_circle.setAttributeNS(null, "stroke",pins_config['points'][i]['outline']);
				svg_circle.setAttributeNS(null, "stroke-width",pins_config['points'][i]['thickness']);
				svg_circle.setAttributeNS(null, "id",'map_points_'+i);
				tsvg_obj.appendChild(svg_circle);
				dynamicAddEvent(i);
			}
			else if(pins_config['points'][i]['shape']=="rectangle"){
				svg_rect = document.createElementNS(xmlns, "rect");
				svg_rect.setAttributeNS(null, "x", pins_config['points'][i]['pos_X']- pins_config['points'][i]['width']/2+1);
				svg_rect.setAttributeNS(null, "y", pins_config['points'][i]['pos_Y']- pins_config['points'][i]['height']/2+1);
				svg_rect.setAttributeNS(null, "width", pins_config['points'][i]['width']);
				svg_rect.setAttributeNS(null, "height", pins_config['points'][i]['height']);
				svg_rect.setAttributeNS(null, "fill", pins_config['default']['pinsShadow']);
				tsvg_obj.appendChild(svg_rect);
				svg_rect = document.createElementNS(xmlns, "rect");
				svg_rect.setAttributeNS(null, "x", pins_config['points'][i]['pos_X']- pins_config['points'][i]['width']/2);
				svg_rect.setAttributeNS(null, "y", pins_config['points'][i]['pos_Y']- pins_config['points'][i]['height']/2);
				svg_rect.setAttributeNS(null, "width", pins_config['points'][i]['width']);
				svg_rect.setAttributeNS(null, "height", pins_config['points'][i]['height']);
				svg_rect.setAttributeNS(null, "fill", pins_config['points'][i]['upColor']);
				svg_rect.setAttributeNS(null, "stroke",pins_config['points'][i]['outline']);
				svg_rect.setAttributeNS(null, "stroke-width",pins_config['points'][i]['thickness']);
				svg_rect.setAttributeNS(null, "id",'map_points_'+i);
				tsvg_obj.appendChild(svg_rect);
				dynamicAddEvent(i);
			}
		}
	}
});

function dynamicAddEvent(id){
	var obj = $('#map_points_'+id);

	if(pins_config['points'][id]['enable'] == true){
		if (isTouchEnabled()) {
			obj.on('touchstart', function(e){
				var touch = e.originalEvent.touches[0];
				var x=touch.pageX+10, y=touch.pageY+15;
				var tipw=$('#map-tip').outerWidth(), tiph=$('#map-tip').outerHeight(),
				x=(x+tipw>$(document).scrollLeft()+$(window).width())? x-tipw-(20*2) : x
				y=(y+tiph>$(document).scrollTop()+$(window).height())? $(document).scrollTop()+$(window).height()-tiph-10 : y
				$('#'+id).css({'fill':pins_config['points'][id]['downColor']});
				$('#map-tip').show().html(pins_config['points'][id]['hover']);
				$('#map-tip').css({left:x, top:y})
			})
			obj.on('touchend', function(){
				$('#'+id).css({'fill':pins_config['points'][id]['upColor']});
				if(pins_config['points'][id]['target'] == 'new_window'){
					window.open(pins_config['points'][id]['url']);
				}else if(pins_config['points'][id]['target'] == 'same_window'){
					window.parent.location.href=pins_config['points'][id]['url'];
				}
			})
		}
		obj.attr({'cursor':'pointer'});
		obj.hover(function(){
			$('#map-tip').show().html(pins_config['points'][id]['hover']);
			obj.css({'fill':pins_config['points'][id]['overColor']})
		},function(){
			$('#map-tip').hide();
			obj.css({'fill':pins_config['points'][id]['upColor']});
		})
		//clicking effect
		obj.mousedown(function(){
			obj.css({'fill':pins_config['points'][id]['downColor']});
		})
		obj.mouseup(function(){
			obj.css({'fill':pins_config['points'][id]['overColor']});
			if(pins_config['points'][id]['target'] == 'new_window'){
				window.open(pins_config['points'][id]['url']);	
			}else if(pins_config['points'][id]['target'] == 'same_window'){
				window.parent.location.href=pins_config['points'][id]['url'];
			}
		})
		obj.mousemove(function(e){
				var x=e.pageX+10, y=e.pageY+15;
				var tipw=$('#map-tip').outerWidth(), tiph=$('#map-tip').outerHeight(), 
				x=(x+tipw>$(document).scrollLeft()+$(window).width())? x-tipw-(20*2) : x
				y=(y+tiph>$(document).scrollTop()+$(window).height())? $(document).scrollTop()+$(window).height()-tiph-10 : y
				$('#map-tip').css({left:x, top:y})
		})
	}	
}
