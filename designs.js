let color = document.getElementById("colorPicker");

$('#sizePicker').submit(makeGrid);

// Creates grid and populates it with cells based on input
function makeGrid(event) {
	// Prevents event from refreshing page
	event.preventDefault();

	let canvas = $('#pixel_canvas');
	let height = $('#input_height').val();
	let width = $('#input_width').val();

	// Empties canvas of cells if any
	canvas.empty();

	// Populates canvas with cells from height and width values
	for (let i = 0; i < height; i++) {
		// Creates row element
		const row = $("<tr></tr>");
		canvas.append(row);
		for (let j = 0; j < width; j++) {
			// Creates cell element
			const cell = $("<td bgcolor=\"#ffffff\"></td>");
			row.append(cell);
			// Cell onClick action
			cell.on('click',function(){
				$(this).attr('bgcolor',color.value);
			});
		}
	}
}