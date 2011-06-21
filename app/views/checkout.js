foodtruck.views.Checkout = Ext.extend(Ext.List, {
    cls: 'orders',
    allowDeselect: false,
    singleSelect: false,

    
    itemTpl: [
		'<div class="buy-button">',
		'Checkout with Paypal',
        '</div>',

    ],
 
    initComponent: function() {
        Ext.apply(this, {
            store: Ext.getStore('Items')
        });
        foodtruck.views.Checkout.superclass.initComponent.apply(this, arguments);
        
        this.enableBubble('selectionchange');
		this.on({
            scope: this
        });
    },

	onItemTap: function(){ //Cart is created on button tap
		Ext.dispatch({
	            controller: "storeCount",
	            action    : "cart"
	    });
	}
});

Ext.reg('Checkout', foodtruck.views.Checkout);