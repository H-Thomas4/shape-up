const MAX = 601;
let shapeBox = document.getElementById("drawBox");
let info = document.getElementById("infoBox");
let shapeName = document.getElementById("shape-name");
let shapeWidth = document.getElementById("shape-width");
let shapeHeight = document.getElementById("shape-height");
let shapeArea = document.getElementById("shape-area");
let shapePeri = document.getElementById("shape-perimeter");
let shapeRadius = document.getElementById("shape-radius");

//global functions
function randomVal(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

//class Shape for all shapes
class Shape {
    constructor(height, width) {
        this.height = height;
        this.width = width;
        //draws the shapes into the containing div
        this.div = document.createElement('div');
        this.div.classList.add('shape');
        shapeBox.appendChild(this.div);
    }
    //generates a random location for the shapes
    randomLocation() {
        let xVal = randomVal(this.width, MAX);
        let yVal = randomVal(this.height, MAX);
        this.div.style.top = `${yVal}px`;
        this.div.style.left = `${xVal}px`;
    }
    //shows the shape, width, and height when clicked on
    describe(id, height, width) {
        shapeName.innerHTML = `Selected Shape: ${id}`;
        shapeWidth.innerHTML = `Width: ${width}`;
        shapeHeight.innerHTML = `Height: ${height}`;
    }
    //removes the shape from the shapeBox
    remove() {
        shapeBox.removeChild(this.div);
        shapeName.innerHTML = `Selected Shape: `;
        shapeWidth.innerHTML = `Width: `;
        shapeHeight.innerHTML = `Height: `;
        shapeArea.innerHTML = `Area: `;
        shapePeri.innerHTML = `Perimeter: `;
    }
}

class Rectangle extends Shape {
    constructor(height, width) {
        super(height, width);
        this.div.id = "rectangle";
        this.div.style.height = `${height}px`;
        this.div.style.width = `${width}px`;
        this.randomLocation();
        this.div.addEventListener("click", () => {
            this.describe(this.div.id, this.height, this.width);
            shapeArea.innerHTML = `Area: ${height * width}`;
            shapePeri.innerHTML = `Perimeter: ${(height * 2) + (width * 2)}`;

        });
        this.div.addEventListener("dblclick", () => {
            this.remove();
        });
    }
}

class Square extends Shape {
    constructor(sideLength) {
        super(sideLength, sideLength);
        this.sideLength = sideLength;
        this.div.id = "square";
        this.div.style.height = `${sideLength}px`;
        this.div.style.width = `${sideLength}px`;
        this.randomLocation();
        this.div.addEventListener("click", () => {
            this.describe(this.div.id, this.sideLength, this.sideLength);
            shapeArea.innerHTML = `Area: ${sideLength * sideLength}`;
            shapePeri.innerHTML = `Perimeter: ${sideLength * 4}`;
        });
        this.div.addEventListener("dblclick", () => {
            this.remove();
        });
    }
}

class Circle extends Shape {
    constructor(radius) {
        super(radius, radius);
        this.radius = radius;
        this.div.id = "circle";
        this.div.style.height = `${radius}px`;
        this.div.style.width = `${radius}px`;
        this.randomLocation();
        this.div.addEventListener("click", () => {
            this.describe(this.div.id, this.radius, this.radius);
            shapeWidth.innerHTML = `Diameter: ${radius * 2}`;
            shapeHeight.innerHTML = `Radius: ${radius}`;
            shapeArea.innerHTML = `Area: ${(radius * radius) * Math.PI}`;
            shapePeri.innerHTML = `Circumfrence: ${2 * Math.PI * radius}`;
        });
        this.div.addEventListener("dblclick", () => {
            this.remove();
        });
    }
}

class Triangle extends Shape {
    constructor(height) {
        super(height, height);
        this.div.id = "triangle";
        this.div.style.borderBottom = `${height}px solid #fff000`;
        this.div.style.borderRight = `${height}px solid transparent`;
        this.randomLocation();
        this.div.addEventListener("click", () => {
            this.describe(this.div.id, this.height, this.width);
            shapeArea.innerHTML = `Area: ${0.5 * height * height}`;
            shapePeri.innerHTML = `Perimeter: ${2 * height + Math.sqrt(2) * height}`;
        });
        this.div.addEventListener("dblclick", () => {
            this.remove();
        });
    }
}

let rectangleBtn = document.getElementById("btnRct");
rectangleBtn.addEventListener("click", function () {
    let rect = document.getElementById("rectangle-text").value;
    let rectArray = rect.split(" ");
    if (rectArray[0] >= 601 || rectArray[1] >= 601) {
        alert("Enter another number this one is too big!");
    } else {
        let sh = new Rectangle(rectArray[0], rectArray[1]);
    }
});

let squareBtn = document.getElementById("btnSq");
squareBtn.addEventListener("click", function () {
    let sq = document.getElementById("square-text").value;
    if (sq >= 601) {
        alert("Enter another number this one is too big!");
    } else {
        let squ = new Square(sq);
    }
});

let circleBtn = document.getElementById("btnC");
circleBtn.addEventListener("click", function () {
    let cir = document.getElementById("circle-text").value;
    if (cir >= 601) {
        alert("Enter another number this one is too big!");
    } else {
        let circ = new Circle(cir);
    }
});

let triangleBtn = document.getElementById("btnTri");
triangleBtn.addEventListener("click", function () {
    let tri = document.getElementById("triangle-text").value;
    if (tri >= 601) {
        alert("Enter another number this one is too big!");
    } else {
        let triang = new Triangle(tri);
    }
});
