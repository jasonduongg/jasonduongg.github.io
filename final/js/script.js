window.onload = function() {
    var sun = document.getElementById("sun");
    var rotation = 0;
    setInterval(function() {
        rotation += 0.25; 
        sun.style.transform = "rotate(" + rotation + "deg)";
    }, 12.5);

    var water = document.getElementById("water");
    var movingRight = true;
    var movementSpeed = 4;
    var timer = 0

    function moveWater() {
        console.log(timer)
        var currentPosition = parseFloat(water.style.left) || 0;
        if (movingRight) {
            currentPosition += movementSpeed;
            if (timer > 100) {
                movingRight = false;
                timer = 0
            }
        } else {
            currentPosition -= movementSpeed;
            if (timer > 100) {
                movingRight = true;
                timer = 0
            }
        }
        timer += 1
        water.style.left = currentPosition + 'px';
    }

    setInterval(moveWater, 30);

};
