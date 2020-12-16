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
  "duration": 1276637900,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDep.click_Signin_Link()"
});
formatter.result({
  "duration": 485611700,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDep.click_Signin_Button()"
});
formatter.result({
  "duration": 1989893500,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDep.enter_Email_and_Password()"
});
formatter.result({
  "duration": 430733500,
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
  "duration": 203238700,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDep.verify_User_Login_Successfully()"
});
formatter.result({
  "duration": 3222580800,
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
  "duration": 1201519000,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDep.Enter_product_in_search_field()"
});
formatter.result({
  "duration": 96620200,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDep.Click_on_Search_button()"
});
formatter.result({
  "duration": 467895700,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDep.Verify_Search_result_diplay()"
});
formatter.result({
  "duration": 14289532900,
  "error_message": "java.lang.NullPointerException: Cannot invoke \"Object.getClass()\" because \"obj\" is null\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:557)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\r\n\tat com.sun.proxy.$Proxy23.isDisplayed(Unknown Source)\r\n\tat com.PageAction.qa.LoginPageAction.VerifySearchresultdiplay(LoginPageAction.java:54)\r\n\tat StepDef.LoginStepDep.Verify_Search_result_diplay(LoginStepDep.java:52)\r\n\tat ✽.Then Verify Search result diplay(Login.feature:23)\r\n",
  "status": "failed"
});
});