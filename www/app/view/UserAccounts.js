/*
 * File: app/view/UserAccounts.js
 *
 * This file was generated by Sencha Architect version 2.2.3.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.3.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.3.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('FP.view.UserAccounts', {
    extend: 'Ext.dataview.List',

    config: {
        itemId: 'userAccounts',
        emptyText: 'add Accounts',
        pressedCls: 'fp-item-pressed',
        store: 'userAccounts',
        grouped: true,
        hideAnimation: {
            type: 'slideOut',
            direction: 'right',
            reveal: true
        },
        itemTpl: Ext.create('Ext.XTemplate', 
            '<span style="font-size: 1.4em;">{name}</span>',
            '',
            '<tpl if="balance &gt; 0">',
            '    <span class="positive" style="float: right;">{[this.displayBalance(values.balance)]}</span>',
            '<tpl elseif="balance &lt; 0">',
            '    <span class="negative" style="float: right;">{[this.displayBalance(values.balance)]}</span>',
            '<tpl else>',
            '    <span class="zero" style="float: right;">{[this.displayBalance(values.balance)]}</span>',
            '</tpl>',
            {
                displayBalance: function(balance) {
                    if(balance < 0) {
                        return '($'+Math.abs(balance).toFixed(2)+')';
                    } else {
                        return '$'+balance.toFixed(2);
                    }
                }
            }
        )
    }

});