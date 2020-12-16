package com.Util.qa;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Properties;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;



public class Base {
	
	// Base class is parent class
	// WebDriver Global
	// Properties class 
	// Fileinputstrem
	
	// constructor
	// we will create method for our browser
	// we will create method for luanching browser
	
	public static WebDriver driver;
	public static Properties pro; 
	
	
	public Base() {
		try {
			pro= new Properties();
			FileInputStream fls = new FileInputStream(System.getProperty("user.dir")+"\\src\\test\\java\\com\\config\\qa\\config.properties");
			pro.load(fls);
		} catch (FileNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		
		
	}
	public void initili() {
		
		String browsername= pro.getProperty("Browser");
		
		if(browsername.equalsIgnoreCase("Chrome")) {
			
			System.setProperty("webdriver.chrome.driver",System.getProperty("user.dir")+ "\\NewDriver\\chromedriver.exe" );
			driver = new ChromeDriver();
			driver.manage().window().maximize();
			driver.manage().timeouts().pageLoadTimeout(Utiliuty.implicitly_Wait, TimeUnit.SECONDS);
			driver.manage().timeouts().implicitlyWait(Utiliuty.page_Load_Timeout, TimeUnit.SECONDS);  
			
		}
		else if(browsername.equals("FF"));
	
	

}
	public static void getURL(String URL) {
		
		driver.get(pro.getProperty("QAURL"));
		
	}
}
