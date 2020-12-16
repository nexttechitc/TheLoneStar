$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "line": 1,
  "name": "Login",
  "description": "",
  "id": "login",
  "keyword": "Feature"
});
formatter.scenario({
  "comments": [
    {
      "line": 4,
      "value": "# Tag - If we like to run any specific TC"
    }
  ],
  "line": 7,
  "name": "Verify User Login Successfully",
  "description": "",
  "id": "login;verify-user-login-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 6,
      "name": "@Tanvir"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "Open \"\u003cURL\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "Click Signin Link",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Click Signin Button",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Enter Email and Password",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "Click Signin2 Button",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "Verify User Login Successfully",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cURL\u003e",
      "offset": 6
    }
  ],
  "location": "LoginStepDep.open(String)"
});
formatter.result({
  "duration": 6022404400,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDep.click_Signin_Link()"
});
formatter.result({
  "duration": 213700000,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDep.click_Signin_Button()"
});
formatter.result({
  "duration": 4733224600,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDep.enter_Email_and_Password()"
});
formatter.result({
  "duration": 276411800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 12
    }
  ],
  "location": "LoginStepDep.click_Signin_Button(int)"
});
formatter.result({
  "duration": 192439500,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDep.verify_User_Login_Successfully()"
});
formatter.result({
  "duration": 3404333900,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Verify search result",
  "description": "",
  "id": "login;verify-search-result",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 17,
      "name": "@Tanvir"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "Open \"\u003cURL\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "Enter product in search field",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "Click on Search button",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "Verify Search result diplay",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cURL\u003e",
      "offset": 6
    }
  ],
  "location": "LoginStepDep.open(String)"
});
formatter.result({
  "duration": 1627595200,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDep.Enter_product_in_search_field()"
});
formatter.result({
  "duration": 109514400,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDep.Click_on_Search_button()"
});
formatter.result({
  "duration": 5184385200,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDep.Verify_Search_result_diplay()"
});
formatter.result({
  "duration": 2187054200,
  "status": "passed"
});
});