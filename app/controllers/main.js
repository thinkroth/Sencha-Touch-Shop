Ext.regController("main", {

    first: function() {		
		var store = Ext.getStore('ProductCarouselStore'),
			pfirst = store.first();
		
		if(!pfirst){
			var pstore = Ext.getStore('ProductInfoStore');
			pstore.load({
				callback: function(records){
					if(!pfirst){
						var defaultStore = records[0].jsonfeeds();
						store.loadData(defaultStore.getRange(0));
					}
					Ext.dispatch({
				            controller: "main",
				            action    : "show"
				    });
				}
			});
		} else {
			Ext.dispatch({
				            controller: "main",
				            action    : "show"
			});
		}

    },
    show: function() {
		var view = this.detailView;
        
        if (!view) {
            this.detailView = this.render({
                xtype: 'rssMain'
            }, Ext.getBody());
            
            view = this.detailView;
        }
	}	
});