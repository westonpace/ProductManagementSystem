class Box
{
	constructor(posX, posY, sizeX, sizeY)
	{
		this.PosX = posX;
		this.PosY = posY
		this.SizeX = sizeX;
		this.SizeY = sizeY;
		this.CanExecute = true;
		this.ID = 0;
		this.Table;
		this.Storage = [];
	}

	AddProduct(product)
	{
		this.Storage.push(product);
	}

	Show()
	{
		fill(14, 142, 0);
		noStroke();
		rect(this.PosX, this.PosY, this.SizeX, this.SizeY);
	}

	Hovered(px, py)
	{
		if (px > this.PosX &&  px < this.PosX + this.SizeX && py > this.PosY &&  py < this.PosY + this.SizeY)
		{
			
			if(this.CanExecute)
			{
				this.CanExecute = false;
				this.ShowInfo();
				console.log("Hovered");
				document.getElementById(`Table${this.ID}`).style.position = "absolute";
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
		this.Table = document.createElement("table");
		this.Table.setAttribute("id", "Table" + this.ID);

		Div.setAttribute("id", "DTable0");

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

		/*let Row1 = document.createElement("tr");
		let Row2 = document.createElement("tr");
		let Row3 = document.createElement("tr");
		let Row4 = document.createElement("tr");
		
		let Column1A = document.createElement("td");
		let Column1B = document.createElement("td");

		let Column1AText = document.createTextNode("Name:");
		let Column1BText = document.createTextNode(this.Storage[0].Name);

		Column1A.appendChild(Column1AText);
		Column1B.appendChild(Column1BText);

		Row1.appendChild(Column1A);
		Row1.appendChild(Column1B); */

	
	}
}