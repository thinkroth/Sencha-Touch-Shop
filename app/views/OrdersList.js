/** 
 * This view class is mostly a wrapper around the List and Checkout Buttons. If List was able to accept dockedItems we would simply
 * add the toolbar to the List and could remove this class altogether.
 */
foodtruck.views.OrdersList = Ext.extend(Ext.Panel, {

    layout: 'fit',

    initComponent: function() {
        Ext.apply(this, {
            items: [
                {
                    xtype: 'ordersList' //Items in order
                }
            ],
            
            dockedItems: {
                dock   : 'top',
                xtype  : 'container',
                align  : 'stretch',
                height : 45,
                layout : {
					type: 'hbox',
					align: 'stretch'
				},
				items: [{
					xtype: 'Checkout'  //Checkout Button
				}]
            }
        });
    	this.on({
            scope: this
        });
        foodtruck.views.OrdersList.superclass.initComponent.apply(this, arguments);
    }
});

Ext.reg('ordersList', foodtruck.views.OrdersList);