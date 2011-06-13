var ProductInfo = foodtruck.stores.ProductInfoStore = new Ext.data.Store({
	model: 'ProductInfo',
    storeId: 'ProductInfoStore',
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
