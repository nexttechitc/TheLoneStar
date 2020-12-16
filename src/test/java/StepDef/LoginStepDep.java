package StepDef;

import com.PageAction.qa.LoginPageAction;
import com.Util.qa.Base;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class LoginStepDep extends Base{
	
	LoginPageAction loginPageAction = new LoginPageAction();
	
	@Given("^Open \"([^\"]*)\"$")
	public void open(String URL) throws Throwable {
	    getURL(URL);
	}

	@Then("^Click Signin Link$")
	public void click_Signin_Link() throws Throwable {
		loginPageAction.ClickSigninLink();
	}

	@Then("^Click Signin Button$")
	public void click_Signin_Button() throws Throwable {
		loginPageAction.ClickSigninButton();
	}

	@Then("^Enter Email and Password$")
	public void enter_Email_and_Password() throws Throwable {
		loginPageAction.UserCredential(pro.getProperty("Username1"), pro.getProperty("Password1"));
	}

	@Then("^Click Signin(\\d+) Button$")
	public void click_Signin_Button(int arg1) throws Throwable {
	    loginPageAction.ClickSignin2Button();
	}

	@Then("^Verify User Login Successfully$")
	public void verify_User_Login_Successfully() throws Throwable {
	    loginPageAction.VerifyUserLoginSuccessfully();
	}
	@Then("^Enter product in search field$")
	public void Enter_product_in_search_field() throws Throwable {
		loginPageAction.Enterproductinsearchfield();
	}
	@Then("^Click on Search button$")
	public void Click_on_Search_button() throws Throwable {
		loginPageAction.ClickonSearchbutton();
	}
	@Then("^Verify Search result diplay$")
	public void Verify_Search_result_diplay() throws Throwable {
		loginPageAction.VerifySearchresultdiplay();
	}

	
	
	
}
