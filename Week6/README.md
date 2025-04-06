# WEEK 6 - Sound & Data in p5

## @P5.JS SOUND LIBRARY SET UP
#### PROCESSING
<strong> Step 1.  Enable the p5.js sound library </stromg>
	* Set mode to p5.js
	* Go to Sketch > Import Libraries > p5.sound

<strong>Step. 2  Edit the index.html</strong>
	* Edit the <index.html> file to load the sound library inside the <head> 	tag.
	* Copy the first script tag: 
 ```<script language="javascript" type="text/javascript" src="libraries/p5.min.js"></script>
````
* Paste it right below & change the src (source) to “libraries/p5.sound.min.js” 
* Your <head> section should now look lie this:

  ```
  <!-- PLEASE NO CHANGES BELOW THIS LINE (UNTIL I SAY SO) -->
  <script language="javascript" type="text/javascript" src="libraries/p5.min.js </script>
	<script language="javascript" type="text/javascript"src="libraries/p5.sound.min.js"></script>
			<script language="javascript" type="text/javascript" src="sketchfilename.js"></script>
			<!-- OK, YOU CAN MAKE CHANGES BELOW THIS LINE AGAIN -->```
#### VS CODE

<strong> Step 1. Install the p5.js VS Code extension </strong>
* Search for "p5.vscode" in the VS Code Extensions Marketplace and install it. 
* In the command palette,  type ‘Create p5.js project’
* This will create a new folder to house your p5 sketch, save the folder. 
* The folder will automatically open a new sketch.js file

<strong> Step 2. Link the p5.js & p5 sound libraries in your HTML </strong>
* To include javacript files, use the script tag with the attribute src to specify the url to your external file. 
``` <script src ="..." </script> ````

* In the index.html, under the <head> element add a two script tags 		withlinking the CDN for p5.js and the p5 sound library. 

*The set up should look something like this:
	
```
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<script src="https://cdn.jsdelivr.net/npm/p5@1.11.3/lib/p5.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.11.3/addons/p5.sound.min.js"</script>
<script src="sketch.js"></script>
</head>
```


## @FONT
* IBM Plex Mono Medium is the demo font. 
* Use True Type Fonts for p5.js. These fonts have the file extension ‘.ttf’
* The full IBM Plex superfont family is free on Google Fonts


## @REFERENCES
* P5 Sound Reference https://p5js.org/reference/p5.sound/
* P5 sound was redesigned in late 2024. Download the most up to date version here: <br>
https://p5js.org/download/ <br>



