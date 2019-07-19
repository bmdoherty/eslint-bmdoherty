/**
 * @fileoverview Prevent use of _get
 * @author bmdoherty
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/no-lodash-get"),
    RuleTester = require("eslint").RuleTester;

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("no-lodash-get", rule, {
    valid: [`a = getObject(this.props, 'a')`],

    invalid: [
        {
            code: `a = _get(this.props, 'a')`,
            errors: [
                {
                    message: "_get is depecated, use getObject.",
                    type: "CallExpression"
                }
            ]
        }
    ]
});
