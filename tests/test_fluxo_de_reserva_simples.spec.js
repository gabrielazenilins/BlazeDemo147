//Importar bibliotecas
    import {test, expect} from '@playwright/test';

// Funções ou Métodos
test ('Fluxo de Reserva - Script Simples', async ({page}) => {
    //Abrir o navegador
    await page.goto('https://www.blazedemo.com')
    //Seleciona a cidade de origem e de destino do vôo, e clica no botão Find Flights
    await page.locator('select[name="fromPort"]').selectOption('São Paolo')
    await page.locator('select[name="toPort"]').selectOption('London')
    await page.locator('.btn-primary').click()

    //Transição de página
    //Verificar se estamos na página certa baseado em um texto âncora

    await expect(page.locator('h3')).toHaveText('Flights from São Paolo to London:')
    //Selecionar o vôo desejado
   
    await page.getByRole('row',{name: 'Choose This Flight 234 United Airlines'}).getByRole('button').click()
    //Transição de Página
    //verificar se estamos na página certa baseado em parte da URL
    await expect(page).toHaveURL(/purchase\.php/)
    //Preencher a caixa de texto cujo id é inputName com o texto José
    await page.locator('#inputName').fill('José')
    //Selecionar a bandeira como Amex
    await page.locator('#cardType').selectOption('amex')
    //Selecionar o checkbox Remember Me
    await page.locator('#rememberMe').check()
    //Apertar o bbotão Purchase FLight
    await page.locator('.btn-primary').click()
    //Transição de página
   await expect(page).toHaveURL(/confirmation\.php/)
   await expect(page.locator('h1')).toHaveText('Thank you for your purchase today!')
   await expect(page.getByRole('row', {name: 'Amount 555 USD'})).toBeVisible()

})
