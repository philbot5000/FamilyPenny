/*
 * File: app/view/Introduction.js
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

Ext.define('FP.view.Introduction', {
    extend: 'Ext.Container',

    config: {
        padding: 15,
        layout: {
            type: 'vbox'
        },
        items: [
            {
                xtype: 'carousel',
                flex: 1,
                items: [
                    {
                        xtype: 'container',
                        html: 'Intro duction to',
                        style: 'font-size: 4em;'
                    },
                    {
                        xtype: 'container',
                        html: 'Family Penny',
                        style: 'font-size: 4em;'
                    },
                    {
                        xtype: 'container',
                        html: 'goes here ?',
                        items: [
                            {
                                xtype: 'button',
                                itemId: 'addAccount',
                                text: 'Add Account'
                            }
                        ]
                    }
                ]
            },
            {
                xtype: 'container',
                height: 60,
                padding: 15,
                items: [
                    {
                        xtype: 'button',
                        border: 1,
                        itemId: 'skipIntro',
                        style: 'border: 1px solid #000;',
                        ui: 'plain',
                        iconAlign: 'right',
                        text: 'Skip'
                    }
                ]
            }
        ]
    }

});