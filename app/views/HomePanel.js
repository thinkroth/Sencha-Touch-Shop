foodtruck.HomePanel = Ext.extend(Ext.TabPanel, {
	cls:'rssreader',
	layout: 'card',
	fullscreen: true,
		
	initComponent: function(){
		foodtruck.masterPanel = new foodtruck.MasterPanel({
			title: 'Home',
			iconCls: 'home'
		});
		foodtruck.jsonfeedsPanel = new foodtruck.JSONFeedPanel({
			title: 'Menu/Order',
			iconCls:'favorites'
		});
		foodtruck.ordersList = new foodtruck.views.SearchBar({
			title: 'Checkout',
			iconCls:'favorites'
		});
		
		Ext.apply(this, {
			items: [foodtruck.masterPanel, foodtruck.jsonfeedsPanel, foodtruck.ordersList],
			tabBar: {
				dock : 'bottom',
				ui: 'dark',
				layout: {
	                pack: 'center'
		        }
			}
		});		
		foodtruck.HomePanel.superclass.initComponent.apply(this, arguments);	
	}
});

Ext.reg('Main', foodtruck.HomePanel);