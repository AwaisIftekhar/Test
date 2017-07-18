package stepdefinition;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class SharedSD {

	private static final String URL = "https://facebook.com/";
	private static WebDriver driver = null;

//	@Given("^I open the default browser$")
	@Before
	public static void before() {

		System.setProperty("webdriver.chrome.driver",
				"/Users/awaisiftekhar/Documents/jarlib/chromedriver");
		driver = new ChromeDriver();

		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		driver.get(URL);
	}

	//@Then("^I close the default browser$")
	@After
	public static void after() {
		if (driver != null) {
			driver.manage().deleteAllCookies();
			driver.quit();
		}
	}

	public static WebDriver getDriver() {
		return driver;
	}
}
