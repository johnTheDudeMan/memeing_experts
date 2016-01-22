// to do: create grid under inputs for a grid of templates - DONE
// to do: templates change the deafult text to their intent schema 
// above fold grid updates to most used icons - no longer wanted as it looks better below fold
// to do: canvas is saving background color too, figure out how to autosize the preview div - DONE
// to do: fix bottom text shading - done ( html2canvas was not shading multiple eliments so i wrote my own function draw canvas)
// to do: mouse hover over thumbnail memes will preview them with meme syntax - DONE - text in thumbnail does not look good
// to do: option to not show dialog again as memes generated will be at the bottom
// to do: make an upload option - DONE
// to do: make a copy img from clipboard option
// to do: alert if text is too long "memes should not be that long"


var main = function() {
	var memePreview = document.getElementById("memePreview");
    var memeImg = document.getElementById("memeImg");
    var memesGenerated = document.getElementById("memesGenerated");
	var memeSaves = 1;
	var topTextDiv = document.getElementById("topTextDiv");
	var bottomTextDiv = document.getElementById("bottomTextDiv");
	var showWarning = true;
	var dialogShow = true;

	var imgResizer = function (image) {
		image.style.height = "'" + ((image.height / image.width) * 500) + "px" + "'";
		image.style.width = "500px";
		memePreview.style.width = "506px";
		memePreview.style.height = "'" + ((image.height / image.width) * 500) + 6 + "px" + "'";
		topTextDiv.setAttribute("style","width:" + image.width + "px");
		bottomTextDiv.setAttribute("style","width:" + image.width + "px");
	};
	imgResizer(memeImg);

	console.log($(window).width());

	var topCopy = "";
	$("#topTextInput").keyup(function() {
    	var top = $(this).val();
        topCopy = top.toUpperCase();
		$(".topLine").text(top);
	});
	
	var bottomCopy = "";
	$("#bottomTextInput").keyup(function() {
		var bottom = $(this).val();
		bottomCopy = bottom.toUpperCase();
		$(".bottomLine").text(bottom);
	});
	
	$("#urlInput").keyup(function() {
		var img = $(this).val();
		$("#memeImg").attr("src", img);
		imgResizer(memeImg);
	});

	var textReplace = function (top, bottom) {
		$(".topLine").text(top);
		$(".bottomLine").text(bottom);
	};
	
	$(".img-rounded").click(function(event) {
		// I do apologize if some of these pepes are nsfw (I did not screen them all)
		if (this.id === "peperandom") {
			if (showWarning) {
				alert("::: NSFW :::\n\nThe library of pepes were pulled from the web and some may be graphic in nature.\n\nView at your own risk !!!");
				showWarning = false;
			};
			var randomImg = Math.floor((Math.random() * 1219) + 1);
			if (randomImg < 500) {
				memeImg.src = 'assets/pepe/pepe1_499/pepe' + randomImg + '.png';
			} else if (randomImg >= 500 && randomImg < 1000) {
				memeImg.src = 'assets/pepe/pepe500_999/pepe' + randomImg + '.png';
			} else if (randomImg >= 1000) {
				memeImg.src = 'assets/pepe/pepe1000_1500/pepe' + randomImg + '.png';
			};
			textReplace("", "");
		} else {
			var img = $(event.currentTarget).attr('src');
			memeImg.setAttribute('src', img.substring(0,6) + "/fullsize/" + img.substring(7));
			imgResizer(memeImg);
			switch (this.id) {
				case "fry":
					textReplace("not sure if...", "or...");
					break;
				case "goodGuyGreg":
					textReplace("Person observes something ...", "Then does something good");
					break;
				case "zoidberg":
					textReplace("Options ...", "Why not Zoidberg?");
					break;
				case "confusedgirl":
					textReplace("Someone does or says something", "i'm like this (reaction)");
					break;
				case "picardwtf":
					textReplace("WTF", "why/who/what are/is so and so");
					break;
				case "ancientaliens":
					textReplace("Some statement", "is a far fetched conspiracy or it was aliens");
					break;
				case "scumbagsteve":
					textReplace("something happens", "guy does scumbag thing");
					break;
				case "thirdworldskepticalkid":
					textReplace("You're telling me (first world privilage thing)", "but you so and so (take for granted)");
					break;
				case "whatifitoldyou":
					textReplace("what if I told you", "option/something most people don't consider");
					break;
				case "yallgotanymore":
					textReplace("Y'all got anymore", "of them memes");
					break;
				case "10guy":
					textReplace("Says or is asked soemthing", "(stoner response)");
					break;
				case "badluckbrian":
					textReplace("Does something", "bad luck thing happens");
					break;
				case "braceyourselves":
					textReplace("Brace yourselves", "something is coming");
					break;
				case "collegeliberal":
					textReplace("Is supporting something", "does/supports something contradictory");
					break;
				case "firstworldproblems":
					textReplace("privilaged of something", "something happens to make it a first world problem");
					break;
				case "insanitywolf":
					textReplace("Do something", "do it insane like");
					break;
				case "josephducreux":
					textReplace("Gentlemen, I inquire", "who hath released the hounds");
					break;
				case "onedoesnotsimply":
					textReplace("One does not simply", "do something that seems simple");
					break;
				case "philosoraptor":
					textReplace("metaphysical inquiry", "unraveling quirky paradox");
					break;
				case "redditorswife":
					textReplace("I asked/told him ...", "responds with something aquired from reddit");
					break;
				case "successkid":
					textReplace("something done or did", "outcome: unexpected sucess");
					break;
				case "themostinterestingcat":
					textReplace("I don't always (cat thing)", "but when I do... (cat action)");
					break;
				case "themostinterestingman":
					textReplace("I don't always ...", "but when I do ...");
					break;
				case "thirdworldsuccess":
					textReplace("Something not so good happens", "turns out sucessful in third world");
					break;
				case "wonka":
					textReplace("condescendingly asks soemthing", "condescending follows up");
					break;
				case "ermahgerd":
					textReplace("ermahgerd (oh my god)", "gersberms");
					break;
				case "sophisticatedcat":
					textReplace("I should ...", " ");
					break;
				case "overlyattachedgirlfriend":
					textReplace("something something something", "(did some crazy girlfriend thing)");
					break;
				case "notgoingtohappen":
					textReplace("stop trying to make x happen", "its not going to happen");
					break;
				case "grumpycat":
					textReplace("something happend", "grumpy response");
					break;
				case "grindsmygears":
					textReplace("you know what grinds my gears", "thing that grinds gears");
					break;
				case "confessionkid":
					textReplace("when i was a kid", "I used to think ... ");
					break;
				case "confessionbear":
					textReplace("Some statement", "controversial confession");
					break;
				case "minormistakemarvin":
					textReplace("Does something", "forgets a crucial part");
					break;
				case "pepebacieyes":
					textReplace("I like this guy's meme generator page", "I'm sad we already hired Steve's referral");
					break;
				default:
					textReplace("bla bla bla", "bottom line is more bla bla bla");
			}
		}
	});
	
	function drawCanvas(canvasElem, image, topText, bottomText) {
		var ctx = canvasElem.getContext("2d");
		ctx.drawImage(image,0,0, image.width, image.height);
		ctx.fillStyle = 'white';
		ctx.strokeStyle = 'black';
		ctx.lineWidth =  2;
		ctx.font = '22pt Impact';
		if(topText){
			ctx.textAlign="center";
			var words = topText.split(" ");
			var line = '';
			var x = image.width / 2;
			var y = 40;
			for (var n = 0; n < words.length; n++) {
				var testLine = line + words[n] + " ";
				var metrics = ctx.measureText(testLine);
				var testWidth = metrics.width;
				if (testWidth > canvasElem.width && n > 0) {
					ctx.fillText(line, x, y);
					ctx.strokeText(line, x, y);
					line = words[n] + " ";
					y += 30;
				} else {
					line = testLine;
				}
			}
			ctx.fillText(line, x, y);
			ctx.strokeText(line, x, y);
		}
		if(bottomText){
			ctx.textAlign="center";
			var words = bottomText.split(" ");
			var line = '';
			var x = image.width / 2;
			var y = image.height - 15;
			for (var n = 0; n < words.length; n++) {
				var testLine = line + words[n] + " ";
				var metrics = ctx.measureText(testLine);var testWidth = metrics.width;
				if (testWidth > canvasElem.width && n > 0) {
					y -= 30;
					ctx.fillText(line, x, y);
					ctx.strokeText(line, x, y);
					line = words[n] + " ";
					y += 30;
				} else {
					line = testLine;
				}
			}
			ctx.fillText(line, x, y);
			ctx.strokeText(line, x, y);
		}
	};

	var memeDialog = function () {
		var dialogDiv = document.createElement('div');
		var dialogP = document.createElement('p');
		var canvasDialog = document.createElement('canvas');
		canvasDialog.width = memeImg.width;
		canvasDialog.height = memeImg.height;
		$(dialogP).html("A collection of all your memes will be dispayled at the bottom of the page, <br>as long as you remain on the page.");
		dialogDiv.appendChild(dialogP);
		dialogDiv.appendChild(canvasDialog);
		var ctx = canvasDialog.getContext("2d");
		ctx.drawImage(memeImg,0,0, memeImg.width, memeImg.height);
		ctx.fillStyle = 'white';
		ctx.strokeStyle = 'black';
		ctx.lineWidth =  2;
		ctx.font = '22pt Impact';
		if(topCopy){
			ctx.textAlign="center";
			var words = topCopy.split(" ");
			var line = '';
			var x = memeImg.width / 2;
			var y = 40;
			for (var n = 0; n < words.length; n++) {
				var testLine = line + words[n] + " ";
				var metrics = ctx.measureText(testLine);
				var testWidth = metrics.width;
				if (testWidth > canvasDialog.width && n > 0) {
					ctx.fillText(line, x, y);
					ctx.strokeText(line, x, y);
					line = words[n] + " ";
					y += 30;
				} else {
					line = testLine;
				}
			}
			ctx.fillText(line, x, y);
			ctx.strokeText(line, x, y);
		}
		if(bottomCopy){
			ctx.textAlign="center";
			var words = bottomCopy.split(" ");
			var line = '';
			var x = memeImg.width / 2;
			var y = memeImg.height - 15;
			for (var n = 0; n < words.length; n++) {
				var testLine = line + words[n] + " ";
				var metrics = ctx.measureText(testLine);var testWidth = metrics.width;
				if (testWidth > canvasDialog.width && n > 0) {
					y -= 30;
					ctx.fillText(line, x, y);
					ctx.strokeText(line, x, y);
					line = words[n] + " ";
					y += 30;
				} else {
					line = testLine;
				}
			}
			ctx.fillText(line, x, y);
			ctx.strokeText(line, x, y);
		};

		$(dialogDiv).dialog({
			position: { my: "center top", at: "left top", of: document.getElementById("logo") },
			width: 'auto',
			height: 'auto',
			title: "meme at your own risk",
			create: function (event, ui) {
				var pane = $(this).dialog("widget").find(".ui-dialog-buttonpane");
            	$("<label><input id='dontShowAgain' type='checkbox'/> Don't open again, memes generated will save at the bottom</label>").prependTo(pane)
			},
			buttons: {
				"close": function () {
					if ($('#dontShowAgain').checked === true) {
						console.log("im in here")
						dialogShow = false;
					};
					$(this).dialog('close');
					console.log("poop" + dialogShow);
				}
			}
		});
	};

	$('#generateMeme').click(function() {
        
        var newCanvas = document.createElement('canvas');
        newCanvas.id = "meme_" + memeSaves;
        newCanvas.className = "generatedMemes";
        memeSaves ++;
        newCanvas.width = memeImg.width;
        newCanvas.height = memeImg.height;
        memesGenerated.appendChild(newCanvas);
        drawCanvas(newCanvas, memeImg, topCopy, bottomCopy);
        memeDialog();
	});

	$(".btn").mouseup(function(){
		$(this).blur();
	});

	document.getElementById("upload").onchange = function() {
		if (this.files && this.files[0]) {
            var reader = new FileReader();
            reader.onload = imageIsLoaded;
            reader.readAsDataURL(this.files[0]);
        }
    };

    function imageIsLoaded(e) {
    	$('#memeImg').attr('src', e.target.result);
    	imgResizer(memeImg);
    };	
};
 
$(document).ready(main);