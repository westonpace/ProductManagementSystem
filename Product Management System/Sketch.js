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

function setup() 
{
	createCanvas(700, 600);

	for (var i = 0; i < 4; i++) 
	{
		NewBox[i] = new Box(BoxPos[i], BoxPos[i], 50, 50);
		NewBox[i].ID = i;

		for (var j = 0; j < ProductList.length; j++)
		{
			NewBox[i].AddProduct(new Product(ProductList[j][0], ProductList[j][1], ProductList[j][2], ProductList[j][3]));
		}
	}
	
}

function draw() 
{
	background(51);
	
	for (let i = 0; i < NewBox.length; i++) 
	{
		NewBox[i].Show();
	}
}

function mousePressed()
{
	for (let i = 0; i < NewBox.length; i++) 
	{
		NewBox[i].Hovered(mouseX, mouseY);
	}

}


function AddAmount() 
{
	NewBox[0].Storage[0].Amount = 10;
}