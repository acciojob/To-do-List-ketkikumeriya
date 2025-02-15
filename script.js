//your code here
document.getElementById('addTodoBtn').addEventListener('click',function(){
	va value =document.getElementById('newTodoInput').value;
	if(value){
		additem(value);
		document.getElementById('newTodoInput').value='';
	}
});
function addItem(text){
	var list =document.getElementById('todoList');
	var item =document.createElement('li');
	item.innerText = text;
	list.appendChild(item);
}