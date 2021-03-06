/*
 * File: app/controller/UserAccounts.js
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

Ext.define('FP.controller.UserAccounts', {
    extend: 'Ext.app.Controller',

    config: {
        routes: {
            'userAccounts': 'showUserAccounts'
        },

        control: {
            "list#userAccounts": {
                itemtap: 'onUserAccountsItemTap',
                initialize: 'onUserAccountsInitialize',
                deactivate: 'onUserAccountsDeactivate',
                show: 'onUserAccountsShow'
            }
        }
    },

    onUserAccountsItemTap: function(dataview, index, target, record, e, eOpts) {
        FP.config.Runtime.setUserAccount(record.data);
        console.log(record.data);
        this.redirectTo('accountBalance');
    },

    onUserAccountsInitialize: function(component, eOpts) {
        component.setScrollable({ directionLock: true, scroll: 'vertical' });

        // List spacer for bottom toolbar.
        component.add({xtype:'component', height:60, scrollDock: 'bottom'});

        component.getStore().filter('account_id', FP.config.Runtime.getAccount().id, false, true);
    },

    onUserAccountsDeactivate: function(oldActiveItem, container, newActiveItem, eOpts) {
        var main = Ext.getCmp('main');

        //main.query('#accountMenu')[0].hide();

    },

    onUserAccountsShow: function(component, eOpts) {
        /*component.on('hide', function() {
        setTimeout(function() {
        component.destroy();
        }, 1000);
        });
        */
        Ext.ComponentQuery.query('#accountMenu')[0].show();
    },

    showUserAccounts: function() {
        var main = Ext.getCmp('main'),
            record = FP.config.Runtime.getAccount(),
            userAccounts = Ext.create('FP.view.UserAccounts'),
            back = main.query('#back')[0],
            menuButton = main.query('#menuButton')[0],
            addUserButton = main.query('#addUser')[0],
            editUserButton = main.query('#editUser')[0],
            toolbar = main.query('#toolbar')[0];

        toolbar.setTitle(record.firstName);

        back.view = '#userAccounts';
        back.show();
        editUserButton.setText('Edit');
        editUserButton.show();
        menuButton.hide();
        addUserButton.hide();

        main.setActiveItem(userAccounts);
    }

});