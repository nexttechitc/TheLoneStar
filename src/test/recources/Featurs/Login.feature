Feature: Login


# Tag - If we like to run any specific TC

@Jahan
Scenario: Verify User Login Successfully

Given Open "<URL>"
Then Click Signin Link
Then Click Signin Button
Then Enter Email and Password
Then Click Signin2 Button 
Then Verify User Login Successfully


@Jahan
Scenario: Verify search result

Given Open "<URL>"
Then Enter product in search field
Then Click on Search button
Then Verify Search result diplay

