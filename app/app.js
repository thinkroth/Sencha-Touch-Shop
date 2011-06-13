var	orderPrice = 0;
var	totalOrder = "";
Ext.regApplication({
    name: "foodtruck",
    defaultUrl:'main/first',	
    icon: 'resources/images/kiva.png',
    glossOnIcon: false,
    tabletStartupScreen: 'resources/images/tablet_startup.png'

    launch: function() {
		Ext.dispatch({
            controller: 'main',
            action    : 'first'
        });
    }
});