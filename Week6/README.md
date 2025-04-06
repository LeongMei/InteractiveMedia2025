# WEEK 6 - Sound & Data in p5

## @P5.JS SOUND LIBRARY SET UP
#### PROCESSING
	Step 1.  Enable the p5.js sound library
	* Set mode to p5.js
	* Go to Sketch > Import Libraries > p5.sound

	Step. 2  Edit the index.html
	* Edit the <index.html> file to load the sound library inside the <head> tag.
	* Copy the first script tag: <script language="javascript" type="text/javascript" src="libraries/p5.min.js"></script> 
	* Paste it right below & change the src (source) to  “libraries/p5.sound.min.js” 
	* Your <head> section should now look lie this: 
			<!-- PLEASE NO CHANGES BELOW THIS LINE (UNTIL I SAY SO) -->
			<script language="javascript" type="text/javascript" src="libraries/p5.min.js"></script>
			<script language="javascript" type="text/javascript" src="libraries/p5.sound.min.js"></script>
			<script language="javascript" type="text/javascript" src="sketchfilename.js"></script>
			<!-- OK, YOU CAN MAKE CHANGES BELOW THIS LINE AGAIN -->


#### VS CODE
	Step 1. Install the p5.js VS Code extension
	* Search for "p5.vscode" in the VS Code Extensions Marketplace and install it. 
	* In the command palette,  type ‘Create p5.js project’
	* This will create a new folder to house your p5 sketch, save the folder. 
	* The folder will automatically open a new sketch.js file
 
	Step 2. Install p5 sound library
	* In the command palette, search for ‘Install p5.js Contributor Library’ and select the link
	* In the command palette search p5 sound
	* Install p5 sound
	* This will add the p5 sound library into your html. 


## @FONT
	* IBM Plex Mono Medium is the demo font. 
	* Use True Type Fonts for p5.js. These fonts have the file extension ‘.ttf’
	* The full IBM Plex superfont family is free on Google Fonts


## @REFERENCES
* P5 Sound Reference https://p5js.org/reference/p5.sound/
* P5 sound was redesigned in late 2024. Download the most up to date version here: <br>
  https://p5js.org/download/ <br> 
