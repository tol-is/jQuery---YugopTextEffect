/**
 * @author Apostolos Christodoulou
 * ap-o.com
 * verson 0.1
 */

(function($)
{

	$.fn.yugopEff = function(label, time)
	{
		
		var _textanimDuration = time || 30;
		var _textanimTime = 0;
		var _self = $(this);
		var _strLength = $(this).html().length;
		var _newLabel = label;
	
		var _stop = false;
		
		if(_strLength==0){
			_strLength = _newLabel.length;
		}
		
		onFrame();
		
		function onFrame()
		{
			if(_stop) return;
			
			requestAnimationFrame( onFrame );
			draw();
			
		}
		
		function draw()
		{
				var _newString = "";
				
				if (_textanimDuration-_textanimTime<_strLength)
				{
					
					_newString = _newString+label.substr(0, _strLength-(_textanimDuration-_textanimTime));
				
					for (var i = 0; i<_textanimDuration-_textanimTime; i++)
					{
						rand = Math.floor((Math.random()*24)+1);
						_newString = _newString+String.fromCharCode(rand+97);
					}
					
				} 
				else
				{
				
					for (var i = 0; i<_strLength; i++)
					{
						rand = Math.floor((Math.random()*24)+1);
						_newString = _newString+String.fromCharCode(rand+97);
					}
				}
				
				_self.html(_newString);
				
				if (_textanimTime++>_textanimDuration)
				{
						_self.html(_newLabel);
						_textanimTime = 0;
						_stop=true;
				}
		
		}
			

	};
	
})(jQuery);
