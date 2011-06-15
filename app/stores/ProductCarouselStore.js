var ProductCarousel = foodtruck.stores.ProductCarouselStore = new Ext.data.Store({
	model: 'JSONFeed',
    storeId: 'ProductCarouselStore',
	autoLoad: false,
	proxy: {
        type: 'scripttag',
        url : 'resources/default.json',
		reader: {
			type:'json',
			root: 'rss'
		}
    }
});
