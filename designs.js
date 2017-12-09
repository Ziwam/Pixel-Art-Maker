// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

let color;

function getColor(){
	color = $('#colorPicker').val();
	console.log(color);
}

$('#sizePicker').submit(function makeGrid(ev) {
	ev.preventDefault();
// Your code goes here!
	let canvas, ht, wd;
	canvas = $('#pixel_canvas');
	ht = $('#input_height').val();
	wd = $('#input_width').val();
	getColor();

	canvas.empty();

	for (let i = 0; i < ht; i++) {
		const trr = $("<tr></tr>");
		canvas.append(trr);
		for (let i = 0; i < wd; i++) {
			const tdd = $("<td bgcolor=\"#ffffff\"></td>");
			trr.append(tdd);
			tdd.on('click',function(){
				$(this).attr('bgcolor',color);
			});
		}
	}
});

$('#colorPicker').change(function(){
	color = $('#colorPicker').val();
});