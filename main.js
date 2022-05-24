canvas = new fabric.Canvas('myCanvas');
x= document.getElementById("myAudio");
var img_obj = "";

function new_image()
{
	fabric.Image.fromURL("BirthdayImage.jpg" , function(Img){
        img_obj = Img;

        img_obj.scaleToWidth(700);
        img_obj.scaleToHeight(510);

        img_obj.set({
            top:0 , left:0
        });
        canvas.add(img_obj);
    });
	
}

function playSound(){
	x.play();
}
