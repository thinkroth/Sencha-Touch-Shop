Ext.regController("storeCount", {

    count: function(){ 
		store = Ext.getStore('Items');
		store.load();
		storeCount = store.data.items.length;
		orderPrice = 0;
		totalOrder = "";
		for (i=0; i<storeCount; i++){
			orderPrice = orderPrice + store.data.items[i].data.listPrice;
			if (totalOrder !== ""){
				totalOrder = totalOrder + ',' + store.data.items[i].data.paypalQuery;
			}
			if (totalOrder === ""){
			totalOrder = store.data.items[i].data.paypalQuery;
		}	
	}
	return (orderPrice, totalOrder);
	},

	cart: function(){
		simpleCart.empty(); //empties cart to start fresh

       //NEEDS FIXED! price and quantity done in simplecart.js for now
		var productsForCart = "name="+totalOrder;
		simpleCart.add( productsForCart );
		simpleCart.checkout();
		sessionStorage.clear();
	}		
});