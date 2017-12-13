let color = document.getElementById("colorPicker");

$('#sizePicker').submit(makeGrid);

function makeGrid(event) {
	event.preventDefault();

	let canvas = $('#pixel_canvas');
	let height = $('#input_height').val();
	let width = $('#input_width').val();

	canvas.empty();

	for (let i = 0; i < height; i++) {
		const row = $("<tr></tr>");
		canvas.append(row);
		for (let j = 0; j < width; j++) {
			const cell = $("<td bgcolor=\"#ffffff\"></td>");
			row.append(cell);
			cell.on('click',function(){
				$(this).attr('bgcolor',color.value);
			});
		}
	}
}