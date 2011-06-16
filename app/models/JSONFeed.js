Ext.regModel('JSONFeed', {
    fields: [
		{name: "id",    type: 'int'},
		{name: 'name', type: 'string'},
		{name: 'source', type:'string'},
		{name: 'paypalQuery', type: 'string'},
		{name: 'product', type: 'string'},
		{name: 'price', type: 'int'},
		{name: 'dishInfo', type: 'string'},
		{name: 'image', type: 'string'}

	],
	associations: [
        {type: 'hasMany', model: 'JSONFeed', name: 'jsonfeeds'}
    ]
});