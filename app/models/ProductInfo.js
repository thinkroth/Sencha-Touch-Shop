Ext.regModel('ProductInfo', {
    fields: [ 'id', 'name'],
	
	associations: [
        {type: 'hasMany', model: 'JSONFeed', name: 'jsonfeeds'}
    ]
	
});
