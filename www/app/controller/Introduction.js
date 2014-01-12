/*
 * File: app/controller/Introduction.js
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

Ext.define('FP.controller.Introduction', {
    extend: 'Ext.app.Controller',

    config: {
        routes: {
            'intro': 'showIntro'
        },

        control: {
            "button#skipIntro": {
                tap: 'onSkipIntroTap'
            },
            "button#addAccount": {
                tap: 'onAddAccountTap'
            }
        }
    },

    onSkipIntroTap: function(button, e, eOpts) {
        Ext.ComponentQuery.query('#toolbar')[0].show();
        this.redirectTo('accounts');
    },

    onAddAccountTap: function(button, e, eOpts) {
        Ext.ComponentQuery.query('#toolbar')[0].show();
        this.redirectTo('accountForm');
    },

    showIntro: function() {
        var main = Ext.getCmp('main'),
            intro = Ext.create('FP.view.Introduction');

        //Ext.ComponentQuery.query('#toolbar')[0].hide();
        //toolbar.hide();
        main.setActiveItem(intro);
    }

});