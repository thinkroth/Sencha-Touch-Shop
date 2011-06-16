Ext.regController("main", {

    first: function() {		
		var store = Ext.getStore('ProductCarouselStore'),
			first = store.first();
		
		if(!first){
			store.load({
				callback: function(records){
					store.loadData(records[0].jsonfeedsStore.data.items);
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
                xtype: 'Main'
            }, Ext.getBody());
            
            view = this.detailView;
        }
	}	
});