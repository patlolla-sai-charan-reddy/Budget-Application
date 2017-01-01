//Budget Controller

var budgetController = (function() {
	
	
	
	
})();


//UI Controller

var UIController = (function() {

	
	
	
})();


//Global App Controller

var controller = (function(budgetCtrl, UICtrl){
	
	//As Part of DRY
	
	var ctrlAddItem = function() {
		
		
	}

	document.querySelector('.add__btn').addEventListener('click', function() {
		
		//1. Get the field Input Data
		
		
		
		
		
		//2. Add the Item to the Budget Controller
		
		
		
		
		
		//3. Add the item to the UI
		
		
		
		
		
		//4.Calculate the budget
		
		
		
		
		
		//5.Display the Budget on the UI
		
		
		
		
	});
	
	//When you press Enter or Return key
	
	document.addEventListener('keypress', function(event) {
		
		if(event.keyCode === 13 || event.which === 13) {
			console.log("ENTER was pressed.");
		}
		
	});
	
	
	
})(budgetController, UIController);















