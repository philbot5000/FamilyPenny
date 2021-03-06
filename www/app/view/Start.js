/*
 * File: app/view/Start.js
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

Ext.define('FP.view.Start', {
    extend: 'Ext.Container',

    config: {
        hideAnimation: 'fadeOut',
        itemId: 'start',
        padding: 20,
        style: 'background: #fff;',
        layout: {
            type: 'vbox'
        },
        items: [
            {
                xtype: 'image',
                height: 201,
                src: 'images/fp.png'
            },
            {
                xtype: 'button',
                itemId: 'loginButton',
                margin: '50 0 10 0',
                ui: 'action',
                text: 'Login'
            },
            {
                xtype: 'button',
                itemId: 'signUpButton',
                ui: 'confirm',
                text: 'Sign Up'
            }
        ]
    }

});