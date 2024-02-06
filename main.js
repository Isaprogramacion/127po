var random_number = Math.floor(Math.random() * quick_draw_data_set.length);
console.log("Dibujo a realizar: " + quick_draw_data_set[random_number].name);
var drawing_name = quick_draw_data_set[random_number].name;

var timer_counter = 0;
var timer_check = "";
var drawn_sketch = "";
var answer_holder = "";
var score = 0;
document.getElementById("drawing_name").innerHTML = "Dibujo a realizar: " + drawing_name;