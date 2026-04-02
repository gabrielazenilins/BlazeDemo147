// Importações \ Bibliotecas \ Frameworks

import { test, expect } from '@playwright/test'; // Importação de bibliotecas


// Função ou método
test('Fluxo de Reserva com Cenario Positivo', async ({ page }) => {
  await page.goto('https://blazedemo.com/'); // Ir ao site
  await page.locator('select[name="fromPort"]').selectOption('São Paolo'); // Achar o elemento e controlar, seleciona a origem como Sao Paolo
  await page.locator('select[name="toPort"]').selectOption('London'); // Seleciona o destino como London
  // await page.locator ('.btn.btn-primary').click(); // exemplo de alternativa para o click
  await page.getByRole('button', { name: 'Find Flights' }).click(); //Clicar no botão find flights
  await expect(page.getByRole('heading')).toContainText('Flights from São Paolo to London:');
  await page.getByRole('row', { name: 'Choose This Flight 43 Virgin' }).getByRole('button').click();
  await page.getByRole('textbox', { name: 'Name', exact: true }).click();
  await page.getByRole('textbox', { name: 'Name', exact: true }).fill('Jose');
  await page.locator('#cardType').selectOption('amex');
  await page.getByRole('checkbox', { name: 'Remember me' }).check();
  await page.getByRole('button', { name: 'Purchase Flight' }).click();
  await expect(page.getByRole('heading')).toContainText('Thank you for your purchase today!');
  await expect(page.locator('tbody')).toContainText('555 USD');
});