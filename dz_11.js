
function createBlueDiv(){
	var parentElem = document.body;
	var newDivElem = document.createElement('div');
	
	newDivElem.innerHTML = 'нечетное';
	newDivElem.style.border = '2px solid blue';
	parentElem.appendChild(newDivElem);	
}

function createRedDiv(){
	var parentElem = document.body;
	var newDivElem = document.createElement('div');
	
	newDivElem.innerHTML = 'четное';
	newDivElem.style.border = '2px solid red';
	parentElem.appendChild(newDivElem);	
}

function create20Div(){
	var a;
	for (a = 1; a <= 20; a++){
		if ((a % 2) !=0){			
			createRedDiv();			
		}
		else {
			createBlueDiv();
		}
		
	}
}

