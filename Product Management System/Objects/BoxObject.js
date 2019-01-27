class Box
{
	constructor(posX, posY, sizeX, sizeY)
	{
		this.Pos = createVector(posX, posY);	
		this.Vel = createVector(1, 1);
		this.Acc = createVector();

		this.SizeX = sizeX;
		this.SizeY = sizeY;

		this.CanExecute = true;
		this.ID = 0;
		this.Table;
		this.Storage = [];
	}

	ApplyForce(force)
	{
		this.Acc.add(force);
	}

	DistLine(endposX, endposY)
	{
		stroke(255);
		line(this.Pos.x + this.SizeX/2, this.Pos.y + this.SizeY/2, endposX, endposY);	
	}

	Update()
	{
		this.Vel.add(this.Acc);
		this.Pos.add(this.Vel);
		this.Acc.mult(0);
	}


	AddProduct(product)
	{
		this.Storage.push(product);
	}

	Show()
	{
		fill(14, 142, 0);
		noStroke();
		rect(this.Pos.x, this.Pos.y, this.SizeX, this.SizeY);
	}

	Click(px, py)
	{
		if (px > this.Pos.x &&  px < this.Pos.x + this.SizeX && py > this.Pos.y &&  py < this.Pos.y + this.SizeY)
		{
			
			if(this.CanExecute)
			{
				this.CanExecute = false;
				this.ShowInfo();
				console.log("Hovered");
			}
		}
		else
		{
			this.CanExecute = true;
			if(this.Table != null) 
			{
				this.Table = null;
				var el = document.getElementById(`Table${this.ID}`);
				el.remove();
			}					
		}
	}

	ShowInfo()
	{
		let Div = document.createElement("div");		
		Div.setAttribute("id", "Table" + this.ID);

		this.Table = document.createElement("table");
		this.Table.setAttribute("width", "350");

		let Row1 = document.createElement("tr");

		let Column1A = document.createElement("td");
		let Column1AText = document.createTextNode("Name");
		Column1A.appendChild(Column1AText);
		Row1.appendChild(Column1A);

		let Column1B = document.createElement("td");
		let Column1BText = document.createTextNode("Type");
		Column1B.appendChild(Column1BText);
		Row1.appendChild(Column1B);

		let Column1C = document.createElement("td");
		let Column1CText = document.createTextNode("Price");
		Column1C.appendChild(Column1CText);
		Row1.appendChild(Column1C);

		let Column1D = document.createElement("td");
		let Column1DText = document.createTextNode("Amount");
		Column1D.appendChild(Column1DText);
		Row1.appendChild(Column1D);

		this.Table.appendChild(Row1);

		for (let i = 0; i < this.Storage.length; i++)
		{
			let Row2 = document.createElement("tr");

			let Column2A = document.createElement("td");
			let Column2AText = document.createTextNode(this.Storage[i].Name);
			Column2A.appendChild(Column2AText);
			Row2.appendChild(Column2A);

			let Column2B = document.createElement("td");
			let Column2BText = document.createTextNode(this.Storage[i].Type);
			Column2B.appendChild(Column2BText);
			Row2.appendChild(Column2B);

			let Column2C = document.createElement("td");
			let Column2CText = document.createTextNode(this.Storage[i].Price);
			Column2C.appendChild(Column2CText);
			Row2.appendChild(Column2C);

			let Column2D = document.createElement("td");
			let Column2DText = document.createTextNode(this.Storage[i].Amount);
			Column2D.appendChild(Column2DText);
			Row2.appendChild(Column2D);

			this.Table.appendChild(Row2);
		}

		Div.appendChild(this.Table)
		document.body.appendChild(Div);	
	}
}