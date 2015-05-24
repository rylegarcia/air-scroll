#Air-Scroll

#Getting Started
You will need to add a couple of files onto your own files. Make sure you grab all of them to ensure that this plug-in works. 
Copy paste the: 1) images folder, 2) "airScroll.js" (into your scripts folder), and 3) "airScroll.css" (into your styles folder).

The images folder will contain an image called "hotAirBalloon.png", which you can place anywhere on your HTML document. For best results, place it before any of your content. Create a figure container for the image and call it "balloon-container".

			<figure class="balloon-container">
				<img src='images/hotAirBalloon.png'>
			</figure> 
		
Now call the function in your main.js and add the class of the parent container of your selected content to the ".airScroll()" method.

			$(function() {
				$('.articleOne').airScroll();
			});
		
Enjoy!



