/**
 * @fileoverview Prevent use of _get
 * @author bmdoherty
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "Prevent use of _get",
            category: "Fill me in",
            recommended: false
        },
        fixable: null, // or "code" or "whitespace"
        schema: [
            // fill in your schema
        ]
    },

    create: function(context) {
        // variables should be defined here

        //----------------------------------------------------------------------
        // Helpers
        //----------------------------------------------------------------------

        // any helper functions should go here or else delete this section

        //----------------------------------------------------------------------
        // Public
        //----------------------------------------------------------------------

        return {
            CallExpression: function(node) {
                var callee = node.callee;
                if (callee.name === "_get") {
                    context.report(node, "_get is depecated, use getObject.");
                }
            }
        };
    }
};
