itemmodel = Ext.regModel("Item", {
    fields: [
        {name: "id",    type: "int"},
        {name: "query", type: "string"},
		{name: "paypalQuery", type: "string"},
		{name: "price", type: "string"},
		{name: "listPrice", type: "float"}
    ],
    
    proxy: {
        type: 'sessionstorage',
        id  : 'foodtruck-orders'
    }
});
