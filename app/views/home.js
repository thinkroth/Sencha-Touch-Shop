foodtruck.MasterPanel = Ext.extend(Ext.Panel, {
	layout: 'card',
	fullscreen: true,
	html: '<div id="wrapper"><div id="header"><img src="http://www.umamimototruck.com/images/logo.png" width="280px"></div>'+
		  '<p>Prowling the curbs of greater Cleveland serving Asian inspired food</p>'+
		  '<div class="breaker"></div>'+
		  'Follow us on twitter at <a href="http://twitter.com/umamimoto" class="twitter-follow-button">@umamimoto</a> for updates and to find out where we\'ll be.'+
		  '<div class="breaker"></div>'+
		  '<iframe src="http://www.facebook.com/plugins/like.php?href=http://www.umamimototruck.com/"scrolling="no" frameborder="0"style="border:none; width:280px; height:80px"><iframe></div>',
});

Ext.reg('foodtruck-masterpanel', foodtruck.MasterPanel);
