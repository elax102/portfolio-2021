var colors = ["#C62828", "#AD1457", "#8E24AA", "#3949AB", "#006064", "#2E7D32", "#BF360C"]
var currentColor = colors[Math.floor(Math.random() * colors.length)];
document.getElementsByTagName("body")[0].style.backgroundColor = currentColor;