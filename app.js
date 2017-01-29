"use strict";

//Budget Controller

var budgetController = (function() {
	
	//Function Constructor
	
	var Expense = function(id, description, value) {
		this.id = id;
		this.description = description;
		this.value = value;
	};
	
	var Income = function(id, description, value) {
		this.id = id;
		this.description = description;
		this.value = value;
	};
	
	
	
	
	//Data Structure
	
	var data = {
		allItems: {
			exp: [],
			inc: []
		},
		totals: {
			exp:0,
			inc:0
		}
	};
	
	return {
		addItem: function(type, des, val) {
			
			var newItem, ID;
			
			ID = data.allItems[type][data.allItems[type].length -1];
			
			if(type === 'exp') {
				
				newItem = new Expense(ID, des, val);
			
			} else if(type === 'inc') {
				newItem = new Income(ID, des, val);
			}
			
			data.allItems[type].push(newItem);
			return newItem;
			
		}
	};
		
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
	
	var setupEventListeners = function() {
		
		var DOM = UICtrl.getDOMstrings();
		
		document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);
	
	
	//When user press Enter or Return key
	
		document.addEventListener('keypress', function(event) {
		
		if(event.keyCode === 13 || event.which === 13) {
			
			ctrlAddItem();
		}
		

	});
		
	};
	
	
	
	
	//As Part of DRY
	
	var ctrlAddItem = function() {
		
		//1. Get the field Input Data
		
			var input = UICtrl.getInput();
			
			
		
		//2. Add the Item to the Budget Controller
		
		
		
		
		
		//3. Add the item to the UI
		
		
		
		
		//4.Calculate the budget
		
		
		
		
		
		//5.Display the Budget on the UI
		
		
	};

	return {
		init: function() {
			console.log('Application has started.');
			setupEventListeners();
		}
	};
	
	
})(budgetController, UIController);


controller.init();












