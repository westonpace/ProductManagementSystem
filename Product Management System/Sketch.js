let Products = 
[
	["Apple", "Fruit", "5.00", 1],
	["Skittles", "Candy", "2.00", 1],
	["Tomato", "Vegetable", "3.00", 1]
];
let NewBox;
function setup() 
{
	createCanvas(700, 600);

	NewBox = new Box(width/2, height/2, 50, 50);

	for (let i = 0; i < Products.length; i++)
	{
		let NewProduct = new Product(Products[i][0], Products[i][1], Products[i][2], Products[i][3]);
		NewBox.AddProduct(NewProduct);
	}
	console.log(NewBox);
}

function draw() 
{
	background(51);
	NewBox.Show();
	NewBox.Hovered(mouseX, mouseY);
	 
}

function Destroy() 
{
	
}