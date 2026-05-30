import { test, expect } from '@playwright/test';

test('Lead End To End Functionality', async ({ page }) => {
  await page.goto('http://localhost:100');
  await page.locator("//input[@name='user_name']").fill("admin");
  await page.locator("//input[@name='user_password']").fill("admin");
  await page.locator("//select[contains(@name,'login_theme')]").selectOption("orange");
  await page.locator("//input[@name='Login']").click();
  await page.waitForTimeout(1000); // 1 seconds
  await page.locator("//a[text()='New Lead']").click();
  await page.locator("select[name='salutationtype']").selectOption("Mr.");
  await page.locator("//input[starts-with(@name,'firstname')]").fill("Sachin");
  await page.locator("//input[starts-with(@name,'lastname')]").fill("Tendulkar");
  await page.locator("//input[starts-with(@name,'company')]").fill("Mumbai Indians");
  await page.locator("input[name='designation']").fill("Batsman");
  await page.locator("select[name='leadsource']").selectOption({ label: 'Partner' });
  await page.locator("select[name='industry']").selectOption("Media");
  await page.locator("//input[@name='annualrevenue'][@type='text']").fill("500000");
  await page.locator("//input[@name='noofemployees']").fill("11");
  await page.locator("//input[@name='yahooid']").fill("sachin1972@yahoo.com");
  await page.locator("//input[@name='phone']").fill("101010");
  await page.locator("//input[@name='mobile']").fill("9810998109");
  await page.locator("//input[@name='fax']").fill("fax_123");
  await page.locator("//input[@name='email']").fill("sachin72@gmail.com");
  await page.locator("//input[@name='website']").fill("www.sachin.com");
  await page.locator("//select[@name='leadstatus']").selectOption("Contact in Future");
  await page.locator("//select[@name='rating']").selectOption("Shutdown");
  await page.locator("//input[@type='radio'][@value='T']").check();
  await page.waitForTimeout(1000); // 1 seconds
  await page.locator("//textarea[@name='lane']").fill("MG Road");
  await page.locator("//input[@name='code']").fill("411001");
  await page.locator("//input[@name='city']").fill("Mumbai");
  await page.locator("//input[@name='country']").fill("India");
  await page.locator("//input[@name='state']").fill("Maharashtra");
  await page.waitForTimeout(1000); // 1 seconds
  await page.locator("//textarea[@name='description']").fill("God Of Cricket");
  await page.locator("//input[@name='button']").nth(2).click();
  await page.waitForTimeout(2000);
  await page.locator("//a[text()='Leads']").nth(0).click();
  await page.locator("//input[@name='lastname']").nth(1).fill("Tendulkar");
  await page.locator(".dataLabel+td input[name='company']").fill("Mumbai Indians");
  await page.locator("//input[@value='Search'][@accesskey='Q']").click();
  await page.locator('input[name="selectall"]').click();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Delete' }).click();
  await page.waitForTimeout(1000);
  await page.locator("//a[@href='index.php?module=Users&action=Logout']").click();
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/vtiger CRM/);
});