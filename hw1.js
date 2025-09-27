/*
 Program Name: patient-form.html
 Name: Jasmine Wani
 Date Created: 2025-09-24
 Date Modified: 2025-09-26
 Version: 1.0
 Description: MIS 3371 Homework 1 Patient Form
*/
// dynamic date javascript code
const d = new Date();
let text = d.toLocaleDateString();
document.getElementById("today").innerHTML = text;

// name slider javascript code
let slider = document.getElementById("range");
let output = document.getElementById("range-slider");
output.innerHTML = slider.value;

slider.oninput = function () {output.innerHTML = this.value;};

console.log('Homework 1 JS loaded');