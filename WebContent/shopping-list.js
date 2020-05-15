let addToCartButtons = document.querySelectorAll(".add");

let products = [
	{
		name: 'Golf Tees'
	},
	{
		name: 'Golf Glove'
	},
	{
		name: '3 Golf Balls'

	},
	{
		name: '1 Dozen Golf Balls'
	}
]

let prices = [
	{
		price: 1
	},
	{
		price: 6
	},
	{
		price: 15
	},
	{
		price: 40
	}
]

for (let i = 0; i < addToCartButtons.length; i++) {
	var button = addToCartButtons[i]
	button.addEventListener('click', function(event){
	addToCart(products[i], prices[i]);
	})
}
let checkOutButton = document.getElementById("check-out")
checkOutButton.addEventListener('click', function(event){
	checkOut();
	})
let total = 0;
function addToCart(product, price) {
	
}
function checkOut() {
}