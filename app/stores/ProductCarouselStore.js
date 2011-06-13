var ProductCarousel = foodtruck.stores.ProductCarouselStore = new Ext.data.Store({
	model: 'JSONFeed',
    storeId: 'ProductCarouselStore',
	autoLoad: false,
	proxy: {
        type: 'ajax',
        url : 'resources/default.json',
		reader: {
			type:'json',
			root: 'rss'
		}
    }
});
