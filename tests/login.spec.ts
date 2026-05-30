import { test, expect } from '@playwright/test';

test('Valid Username And Valid Password', async ({ page }) => {
  await page.goto('http://localhost:100');
  await page.locator("//input[@name='user_name']").fill("admin");
  await page.locator("//input[@name='user_password']").fill("admin");
  await page.locator("//input[@name='Login']").click();
  await page.locator("//a[@href='index.php?module=Users&action=Logout']").click();
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/vtiger CRM/);
});

test('valid Username And InValid Password', async ({ page }) => {
  await page.goto('http://localhost:100');
  await page.locator("//input[@name='user_name']").fill("admin");
  await page.locator("//input[@name='user_password']").fill("admin123");
  await page.locator("//input[@name='Login']").click();
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/vtiger CRM/);
});

test('Vtiger create lead', async ({ page }) => {
  await page.goto('http://localhost:100');
  await page.locator("//input[@name='user_name']").fill("admin");
  await page.locator("//input[@name='user_password']").fill("admin");
  await page.locator("//input[@name='Login']").click();
  await page.locator("//a[@href='index.php?module=Leads&action=EditView&return_module=Leads&return_action=DetailView']").click();
  await page.locator("//input[@name='lastname']").fill("None");
  await page.locator("//input[@name='company']").fill("NA");
  await page.locator("//input[@name='button']").nth(0).click();
  // Expect a title "to contain" a substring.
//  await expect(page).toHaveTitle(/vtiger CRM/);
});

test('Vtiger create lead & Search lead', async ({ page }) => {
  await page.goto('http://localhost:100');
  await page.locator("//input[@name='user_name']").fill("admin");
  await page.locator("//input[@name='user_password']").fill("admin");
  await page.locator("//input[@name='Login']").click();
  await page.locator("//a[@href='index.php?module=Leads&action=EditView&return_module=Leads&return_action=DetailView']").click();
  await page.locator("//input[@name='lastname']").fill("None");
  await page.locator("//input[@name='company']").fill("NA");
 // await page.locator("//input[@name='button']").nth(0).click();
  await page.locator("//select[@name='leadsource']").selectOption('Employee')
  await expect(page.locator("//select[@name='leadsource']")).toHaveValue('Employee');
  let allOptions:string[]=await page.locator('select[name=leadsource]>option').allInnerTexts();
/*  for(let option in allOptions){
    console.log(allOptions[option]);
  }
    */
 /* for (let i=0; i<allOptions.length; i++){
    console.log(allOptions[i]);
  }
*/
  for(let option of allOptions ){
    console.log(option);
  }
//  console.log(allOptions);
  await page.pause();
  await page.locator("//a[@href='index.php?module=Leads&action=index']").nth(0).click();
  await page.locator("//input[@name='lastname']").nth(1).fill("None");
  await page.locator(".dataLabel+td input[name='company']").fill("NA");
  await page.getByRole('button', { name: 'Search' }).click();
  await page.locator('input[name="selectall"]').click();
  await page.pause();
  await page.getByRole('button', { name: 'Delete' }).click();
  await page.pause();
  // Expect a title "to contain" a substring.
//  await expect(page).toHaveTitle(/vtiger CRM/);
});