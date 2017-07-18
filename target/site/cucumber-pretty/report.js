$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 2,
  "name": "Login feature",
  "description": "",
  "id": "login-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 22,
      "value": "#\tAnd I close the default browser"
    }
  ],
  "line": 25,
  "name": "Verify Invalid Login for multiple users",
  "description": "",
  "id": "login-feature;verify-invalid-login-for-multiple-users",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 24,
      "name": "@regression-3"
    }
  ]
});
formatter.step({
  "line": 26,
  "name": "I enter \u003cusername\u003e into username text fields on home screen",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "I enter \u003cpassword\u003e into password text fields on home screen",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I click on login button on home screen",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I verify that i am an invalid login page",
  "keyword": "Then "
});
formatter.examples({
  "line": 31,
  "name": "",
  "description": "",
  "id": "login-feature;verify-invalid-login-for-multiple-users;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 32,
      "id": "login-feature;verify-invalid-login-for-multiple-users;;1"
    },
    {
      "cells": [
        "mohammad@technosoftacademy.io",
        "test1234"
      ],
      "line": 33,
      "id": "login-feature;verify-invalid-login-for-multiple-users;;2"
    },
    {
      "cells": [
        "chris@technosoftacademy.io",
        "abc123"
      ],
      "line": 34,
      "id": "login-feature;verify-invalid-login-for-multiple-users;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5468575413,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "comments": [
    {
      "line": 5,
      "value": "#\tGiven I open the default browser"
    }
  ],
  "line": 6,
  "name": "I am on home page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSD.iAmOnHomePage()"
});
formatter.result({
  "duration": 356597608,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "Verify Invalid Login for multiple users",
  "description": "",
  "id": "login-feature;verify-invalid-login-for-multiple-users;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    },
    {
      "line": 24,
      "name": "@regression-3"
    }
  ]
});
formatter.step({
  "line": 26,
  "name": "I enter mohammad@technosoftacademy.io into username text fields on home screen",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "I enter test1234 into password text fields on home screen",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I click on login button on home screen",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I verify that i am an invalid login page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "mohammad@technosoftacademy.io",
      "offset": 8
    },
    {
      "val": "username",
      "offset": 43
    }
  ],
  "location": "LoginSD.enterDataIntoTextFields(String,String)"
});
formatter.result({
  "duration": 273528730,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test1234",
      "offset": 8
    },
    {
      "val": "password",
      "offset": 22
    }
  ],
  "location": "LoginSD.enterDataIntoTextFields(String,String)"
});
formatter.result({
  "duration": 115203674,
  "status": "passed"
});
formatter.match({
  "location": "LoginSD.clickOnLoginButton()"
});
formatter.result({
  "duration": 926967023,
  "status": "passed"
});
formatter.match({
  "location": "LoginSD.verifyInvalidLoginPage()"
});
