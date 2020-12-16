package com.TestRunnnner.qa;

import org.testng.annotations.AfterTest;
import org.testng.annotations.BeforeTest;

import com.Util.qa.Base;

import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;

@CucumberOptions(features = {"src/test/recources/Featurs"} , 
format = {"json:target/cucumber.json", "html:target/site/cucumber-pretty"},
glue = "StepDef",tags= {"@Tanvir"})


public class TestRnnuer extends AbstractTestNGCucumberTests {
	//Cucumber Hooks
	@BeforeTest
	public void Setup() {
	
		Base test = new Base();
		
		test.initili();
		
		
	}
	
	
	@AfterTest
	public void teardown() {
		Base test = new Base();
		test.driver.quit();
		
		
		
	}
	
	
	
	

}
