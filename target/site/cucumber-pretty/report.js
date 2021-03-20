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
      "name": "@Jahan"
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
  "duration": 2515693900,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDep.click_Signin_Link()"
});
formatter.result({
  "duration": 382685400,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDep.click_Signin_Button()"
});
formatter.result({
  "duration": 2103836300,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDep.enter_Email_and_Password()"
});
formatter.result({
  "duration": 438161200,
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
  "duration": 206721800,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDep.verify_User_Login_Successfully()"
});
formatter.result({
  "duration": 2495259100,
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
      "name": "@Jahan"
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
  "duration": 1106694900,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDep.Enter_product_in_search_field()"
});
formatter.result({
  "duration": 111053900,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDep.Click_on_Search_button()"
});
formatter.result({
  "duration": 2476575800,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDep.Verify_Search_result_diplay()"
});
formatter.result({
  "duration": 40166234000,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//a[text()\u003d\u0027Designed to be the best.\u0027]\"}\n  (Session info: chrome\u003d89.0.4389.90)\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027DESKTOP-3ROKAB7\u0027, ip: \u0027192.168.254.12\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002714.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 89.0.4389.90, chrome: {chromedriverVersion: 89.0.4389.23 (61b08ee2c5002..., userDataDir: C:\\Users\\nextt\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:51628}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: b7cd6a1827ca7bb91846f29488e39e56\n*** Element info: {Using\u003dxpath, value\u003d//a[text()\u003d\u0027Designed to be the best.\u0027]}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:322)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:424)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:314)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy23.isDisplayed(Unknown Source)\r\n\tat com.PageAction.qa.LoginPageAction.VerifySearchresultdiplay(LoginPageAction.java:54)\r\n\tat StepDef.LoginStepDep.Verify_Search_result_diplay(LoginStepDep.java:52)\r\n\tat ✽.Then Verify Search result diplay(Login.feature:23)\r\n",
  "status": "failed"
});
});