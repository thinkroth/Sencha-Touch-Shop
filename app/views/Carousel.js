foodtruck.Carousel = Ext.extend(Ext.Carousel, {
	defaults: { cls: 'carousel' },
	id:'feeds-carousel',

	
	initComponent: function(){
		var citems=[];
		
		Ext.getStore('ProductCarouselStore').each(function(){
			citems.push({
				xtype:'container',
				layout:'card',
				id:this.data.name	
			});
		});
		Ext.apply(this, {
			items: citems		
		});
		foodtruck.Carousel.superclass.initComponent.apply(this, arguments);
	}
});

Ext.reg("foodtruck-carousel", foodtruck.Carousel);
