const canvas = document.getElementById("myCanvas");
const context = canvas.getContext("2d");

function drawShape(numSides) {
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = 300; // Promijenite ovu vrijednost da biste prilagodili veličinu oblika

    context.beginPath();
    context.moveTo(centerX + radius * Math.cos(0), centerY + radius * Math.sin(0));

    const divs = document.querySelectorAll(".my-div");

    for (let i = 1; i <= numSides; i++) {
        const angle = (2 * Math.PI * i) / numSides;
        const x = centerX + radius * Math.cos(angle);
        const y = centerY + radius * Math.sin(angle);
        const div = divs[i - 1];

        div.style.left = x + "px";
        div.style.top = y + "px";

        context.lineTo(x, y);
    }

    context.closePath();
    context.stroke();
}

drawShape(8); // Pravilan osmougao
// drawShape(10); // Pravilan desetougao
