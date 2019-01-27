let ProductList = 
[
	["Apple", "Fruit", "5.00", 1],
	["Skittles", "Candy", "2.00", 1],
	["Tomato", "Vegetable", "3.00", 1],
	["Sprite", "Drink", "4.00", 1]
];

let ProductObj =[];
let NewBox = [];
let BoxPos = [50, 100, 150, 200, 250, 300];

let WPosX = 100;
let WPosY = 100;

function setup() 
{
	createCanvas(700, 600);
	NewBox[0] = new Box(200, 200, 50, 50);
}

function draw() 
{
	background(51);
	fill(0, 124, 106);
	noStroke();
	rect(WPosX, WPosY, 50, 50);

	NewBox[0].Show();
	NewBox[0].Update();
	NewBox[0].DistLine(WPosX + 25, WPosY + 25);

}

function mousePressed()
{
	NewBox[0].Click(mouseX, mouseY);
}


function AddAmount() 
{
	NewBox[0].Storage[0].Amount = 10;
}