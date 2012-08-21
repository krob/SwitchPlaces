	(function( $ ){

			$.fn.switchPlaces = function( el1, el2, options ) {
		  		
		  		var settings = $.extend(
		  			{
		  				'speed':1000,
		  				'path':'direct'
		  			},
		  			options
		  		);
		  		
		  		var $el1 = $( el1 );
		  		var $el1Clone = $el1.clone();
		  		
		  		var $el2 = $( el2 );
		  		var $el2Clone = $el2.clone();
		  		
		  		var el1Position = $el1.css( 'position' );
				var el2Position = $el2.css( 'position' );
			
				var el1Offset = $el1.offset();
				var el2Offset = $el2.offset();
			
				var animationDone = 0;
		  		
		  		function replaceElements()
		  		{
		  			animationDone++;
						
					if ( animationDone == 2 )
					{
						$el1.replaceWith( $el2Clone );
						$el2.replaceWith( $el1Clone );
								
						$el1.css( 'position', el2Position );
						$el2.css( 'position', el1Position );
					}
		  		}
		  		
				$el1.css( 'position', 'absolute' ).offset( el1Offset );
			
				$el2.css( 'position', 'absolute' ).offset( el2Offset );
				
				switch( settings.path )
				{
					case 'horizontal':
						$el1.animate(
							{
								left : el2Offset.left
							},
							settings.speed,
							function()
							{
								$el1.animate(
									{
										top: el2Offset.top
									},
									settings.speed,
									function()
									{
										replaceElements();
									}						
								);
							}
						);
						
						$el2.animate(
							{
								left : el1Offset.left
							},
							settings.speed,
							function()
							{
								$el2.animate(
									{
										top: el1Offset.top
									},
									settings.speed,
									function()
									{
										replaceElements();
									}						
								);
							}
						);
					break;
					
					case 'vertical':
						$el1.animate(
							{
								top : el2Offset.top
							},
							settings.speed,
							function()
							{
								$el1.animate(
									{
										left: el2Offset.left
									},
									settings.speed,
									function()
									{
										replaceElements();
									}						
								);
							}
						);
						
						$el2.animate(
							{
								top : el1Offset.top
							},
							settings.speed,
							function()
							{
								$el2.animate(
									{
										left: el1Offset.left
									},
									settings.speed,
									function()
									{
										replaceElements();
									}						
								);
							}
						);
					break;
					
					default:
						$el1.animate(
							{
								left : el2Offset.left,
								top : el2Offset.top
							},
							settings.speed,
							function()
							{
								replaceElements();
							}
						);
						
						$el2.animate(
							{
								left : el1Offset.left,
								top : el1Offset.top
							},
							settings.speed,
							function()
							{
								replaceElements();
							}
						);
				
				}
				
		  	};
		  	
		})( jQuery );