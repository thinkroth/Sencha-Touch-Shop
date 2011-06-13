foodtruck.views.Items = Ext.extend(Ext.List, {
    cls: 'orders',
    allowDeselect: false,
    singleSelect: true,
    

    activeCls: 'search-item-active',
    
    itemTpl: [
        '<div class="search-item">',
            '<div class="action delete x-button">Delete</div>',
            '<span>{query}<br /> ${price}</span>',
        '</div>'
    ],
    
    initComponent: function() {
        Ext.apply(this, {
            store: Ext.getStore('Items')
        });
    
        foodtruck.views.Items.superclass.initComponent.apply(this, arguments);
        
        this.enableBubble('selectionchange');
        
        this.on({
            scope: this,
            itemswipe: this.onItemSwipe,
            containertap: this.deactivateAll,
        });
    },
    
    onItemTap: function(item, index, e) {
        if (e.getTarget('.' + this.activeCls + ' div.delete')) {
            var store    = this.store;
            store.removeAt(index);
            store.sync();

			Ext.dispatch({
			         controller: "storeCount",
			         action    : "count"
			 });
            
        } else {
            this.deactivateAll();
            
            return foodtruck.views.Items.superclass.onItemTap.apply(this, arguments);
        }
    },
    
    deactivateAll: function() {
        Ext.select('div.search-item', this.el.dom).removeCls(this.activeCls);
    },

    onItemSwipe: function(list, index, node) {
        var el        = Ext.get(node),
            activeCls = this.activeCls,
            hasClass  = el.hasCls(activeCls);
        
        this.deactivateAll();
        
        if (hasClass) {
            el.removeCls(activeCls);
        } else {
            el.addCls(activeCls);
        }
    }
});

Ext.reg('ordersList', foodtruck.views.Items);