var turn = 0;
var grid = loadGrid()


function loadGrid()
{
	var grid = new Array(3)
	for (var i = 0; i < grid.length; i++)
	{
		grid[i] = new Array(3)
		for (var j = 0; j < grid[i].length; j++)
		{
			grid[i][j] = " "
		}
	}
	return grid
}

function renderGrid(grid)
{
	for (var i = 0; i < grid.length; i++)
	{
		for (var j = 0; j < grid[i].length; j++)
		{
			var currentID = "grid" + i + j
			var currentElement = document.getElementById(currentID)
			if (grid[i][j] == " ")
			{
				currentElement.children[0].src = "empty.png"
				currentElement.children[0].addEventListener("click", move, false)

				currentElement.className = "empty"
			}
			else if (grid[i][j] == "O")
			{
				currentElement.children[0].src = "O.jpg"            
				currentElement.className = "O"
			}
			else if (grid[i][j] == "X")
			{
				currentElement.children[0].src = "X.png"                         
				currentElement.className = "X"
			}
		}
	}
}

function move()
{
	if (this.parentElement.className == "empty")
	{
		var i = this.parentElement.id[4]
		var j = this.parentElement.id[5]
		if (!turn)
		{
			grid[i][j] = "O"
		}
		else
		{
			grid[i][j] = "X"
		}
		renderGrid(grid)
		if (checkWin(this))
		{
			if (!turn)
			{
				alert("O Wins!")
			}
			else
			{
				alert("X Wins!")
			}
		}
		if (checkTie())
		{
			alert("Tie game!")
		}
		turn = !turn
	}
	else
	{
		alert("Tile has to be empty!")
	}
}

function checkTie()
{
	if (document.getElementsByClassName("empty").length == 0)
	{
		return true
	}
	else 
	{
		return false
	}
}

function checkWin(tile)
{
	var i = tile.parentElement.id[4]
	var j = tile.parentElement.id[5]
	if (checkVertical(j) || checkHorizontal(i) || checkDiagonal())
	{
		return true
	}
	else 
	{
		return false
	}
}

function checkVertical(col)
{
	if ((grid[0][col] == grid[1][col]) && (grid[1][col] == grid[2][col]))
	{
		return true
	}
	else
	{
		return false
	}
}

function checkHorizontal(row)
{
	if ((grid[row][0] == grid[row][1]) && (grid[row][1] == grid[row][2]))
	{
		return true
	}
	else
	{
		return false
	}
}

function checkDiagonal()
{
	if (((grid[0][0] == grid[1][1]) && (grid[1][1] == grid[2][2]) || (grid[0][2] == grid[1][1]) && (grid[1][1] == grid[2][0])) && (grid[1][1] != " "))
	{
		return true
	}
	else
	{
		return false
	}
}


document.addEventListener("DOMContentLoaded", function()
{
	renderGrid(grid)
});
