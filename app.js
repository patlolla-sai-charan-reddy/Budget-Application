//Budget Controller

var budgetController = (function() {
	
	
	
	
})();


//UI Controller

var UIController = (function() {

	var DOMstrings= {
		inputType: '.add__type',
		inputDescription: '.add__description',
		inputValue: '.add__value',
		inputBtn: '.add__btn'
	};
	
	return {
		getInput: function() {
			
			return {
				
			type: document.querySelector(DOMstrings.inputType).value,
			description: document.querySelector(DOMstrings.inputDescription).value,
			value: document.querySelector(DOMstrings.inputValue).value
				
			}	
		},
		
		//Exposing to public
		
		getDOMstrings: function() {
			
			return DOMstrings;
			
		}
	};
	
	
})();


//Global App Controller

var controller = (function(budgetCtrl, UICtrl){
	
	var DOM = UICtrl.getDOMstrings();
	
	//As Part of DRY
	
	var ctrlAddItem = function() {
		
		//1. Get the field Input Data
		
			var input = UICtrl.getInput();
			
			console.log(input);
			
		
		//2. Add the Item to the Budget Controller
		
		
		
		
		
		//3. Add the item to the UI
		
		
		
		
		//4.Calculate the budget
		
		
		
		
		
		//5.Display the Budget on the UI
		
		
	}

	document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);
	
	
	//When user press Enter or Return key
	
	document.addEventListener('keypress', function(event) {
		
		if(event.keyCode === 13 || event.which === 13) {
			
			ctrlAddItem();
		}
		
		
		
		
	});
	
	
	
})(budgetController, UIController);















