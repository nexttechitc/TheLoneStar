package com.PageAction.qa;

import com.PageLocator.qa.LoginPageLocator;
import com.Util.qa.Base;
import com.Util.qa.Utiliuty;

import junit.framework.Assert;

public class LoginPageAction extends Base{
	
	
	LoginPageLocator loginPageLocator = new LoginPageLocator();
	
	public void ClickSigninLink() {
		loginPageLocator.SigninLink.click();
		
	}
	
	public void ClickSigninButton() {
		loginPageLocator.SigninButton.click();
		
	}
	
	public void UserCredential(String e, String p) {
		
		loginPageLocator.Email.sendKeys(e);
		loginPageLocator.Password.sendKeys(p);
		
	}
	public void ClickSignin2Button() {
		loginPageLocator.SigninButton2.click();
		
		
	}
	public void VerifyUserLoginSuccessfully() {
		
		boolean result =loginPageLocator.VerifyLogin.isDisplayed();
		
		Assert.assertTrue(result);
		
		Utiliuty.takescreenshot(driver, "Verify Login");
		
	}
	public void Enterproductinsearchfield() {
		loginPageLocator.SearchField.sendKeys("XPS");
		
	}
	public void ClickonSearchbutton() {
		loginPageLocator.SearchButton.click();
		
	}
	public void VerifySearchresultdiplay() {
		
boolean result2 =loginPageLocator.VerifySearchResult.isDisplayed();
		
		Assert.assertTrue(result2);
		Utiliuty.takescreenshot(driver, "Search Page");
	}
	

}
