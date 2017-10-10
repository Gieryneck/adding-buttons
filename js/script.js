var uList = document.getElementById('list'),
	listItems = uList.getElementsByTagName('li'),
	addButton = document.getElementById('addElem');
	
addButton.addEventListener('click', function(e){

	var newItem = document.createElement('li');
	newItem.innerHTML = 'item ' + listItems.length;
	uList.appendChild(newItem);
	
});