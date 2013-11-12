Ext.define('FP.config.Runtime', {
	singleton: true,
	config: {
		account: null,
		userAccount: null,
		accountBalance: null,
		userAccountData: [
			{
				"name":"Cash",
				"type":"Cash Account",
				"balance":"1.26"
			},
			{
				"name":"College",
				"type":"Savings Account",
				"balance":"435.00"
			},
			{
				"name":"Bike Savings",
				"type":"Savings Account",
				"balance":"26.50"
			},
			{
				"name":"Fixie",
				"type":"Credit Account",
				"balance":"-75.00"
			},
			{
				"name":"Ski Wax Business",
				"type":"Loan Account",
				"balance":"-67.50"
			}
			],
			accountBalanceData: [
			{
			"date": "9/2/2013",
			"description": "Lax Mouthgard",
			"category": "Sports",
			"amount": -19.95
			},
			{
			"date": "9/3/2013",
			"description": "Soda",
			"category": "Food",
			"amount": -4.95
			},
			{
			"date": "9/7/2013",
			"description": "Allowance",
			"category": "Income",
			"amount": 14.00
			},
			{
			"date": "9/7/2013",
			"description": "Transfer to savings",
			"category": "Transfer",
			"amount": -3.00
			}
			]
	}
	
});