// (C) Зингер 2015
/* Если хватит терпения, скрипт можно повесить в бесконечном while, когда пустых мест для еды не останется :) */

scoretext = document.getElementById('scores');
cnv = document.getElementById('cnv');
g = cnv.getContext('2d');

var Cell  = new Image(); Cell.src  = 'http://37.153.35.236/snake/cell.png'; 
var Body  = new Image(); Body.src  = 'http://37.153.35.236/snake/body.png';
var Fruit = new Image(); Fruit.src = 'http://37.153.35.236/snake/fruit.png';
var Head  = new Image(); Head.src  = 'http://37.153.35.236/snake/head.png';

w = 32; h = 32;
cellside = 20;
cnv.width  = w * cellside;
cnv.height = h * cellside;
//cnv.style.border = '1px dotted black';

snake = [[0,0]];

inputlock = false;
running = true;

x = 0; y = 0; lx = 0; ly = 0;
dirX = 1;
dirY = 0;

FruitX = w / 2;
FruitY = h / 2;

snake[0][0] = x;
snake[0][1] = y;

map = new Array(w);
score = 1;

Cell.onload = function()
{
    for (i = 0; i < w; i++)
    {
        map[i] = new Array(h);
        for (k = 0; k < h; k++)
        {
            map[i][k] = 0;
            g.drawImage(Cell, i * cellside, k * cellside);
        }
    }
}

Fruit.onload = function() { g.drawImage(Fruit, FruitX * cellside, FruitY * cellside); }

var intervalHandler = setInterval(updater, 125); 

document.onkeydown = function(e)
{
    c = e.keyCode;

    if (c == 81) { running = !running; return; }	

    if (inputlock) { return; } else { inputlock = true; }

    if (!running) { return; }

    switch (c)
    {
        case 65:
            if (dirX != 1) { dirX = -1; dirY = 0; };
        break;
        case 68:
            if (dirX != -1) { dirX = 1; dirY = 0; };
        break;
        case 87:
            if (dirY != 1) { dirY = -1; dirX = 0; };
        break;
        case 83:
            if (dirY != -1) { dirY = 1; dirX = 0; };
        break;
    } 
}

function updater()
{
    if (!running) { return; }

    snakelen = snake.length;
    lx = snake[snakelen - 1][0];
    ly = snake[snakelen - 1][1];
    map[lx][ly] = 0;
    
    g.drawImage(Body, x * cellside, y * cellside);
    
    x += dirX;
    y += dirY;

    inputlock = false;

    if      (x < 0)  { x = w - 1; }
    else if (x == w) { x = 0; }
      
    if      (y < 0)  { y = h - 1; }
    else if (y == h) { y = 0; }

    for (i = snakelen - 1; i > 0; i--)
    {
        snake[i][0] = snake[i - 1][0];
        snake[i][1] = snake[i - 1][1];
    }

    snake[0][0] = x;
    snake[0][1] = y;

    if (map[x][y] == 1) { endGame(); return; }

    map[x][y] = 1;

    if (x == FruitX &&
        y == FruitY)
    {
        snake.push([lx, ly]);
        map[lx][ly] = 1;
        g.drawImage(Body, lx * cellside, ly * cellside);

        while (map[FruitX][FruitY] == 1)
        {
            FruitX = Rand(w);
            FruitY = Rand(h);    
        }
        
        g.drawImage(Fruit, FruitX * cellside, FruitY * cellside);
        score++;
        scoretext.innerHTML = score; 
    }
    else
    {
        g.drawImage(Cell, lx * cellside, ly * cellside); 
    }
    
    g.drawImage(Head, x * cellside, y * cellside);
}

function Rand(max) { return Math.floor(Math.random() * (max)); }

function endGame()
{
	clearInterval(intervalHandler);

	params = "score=" + score;

	request = new ajaxRequest()
	request.open("POST", "newsnakeresult.php", true)
	request.setRequestHeader("Content-type", "application/x-www-form-urlencoded")
	request.setRequestHeader("Content-length", params.length)
	request.setRequestHeader("Connection", "close")

	request.send(params);

	setTimeout('window.location.href = "http://37.153.35.236/snakeresults.php";', 2500);
}

function ajaxRequest()
{
	try { var request = new XMLHttpRequest() }
	catch(e1){
		try { request = new XMLActiveXObject("Msxml2.XMLHTTP") }
		catch(e2){
			try { request = new ActiveXObject("Microsoft.XMLHTTP") }
			catch(e3) {
				request = false
	}}}
	return request
}
























