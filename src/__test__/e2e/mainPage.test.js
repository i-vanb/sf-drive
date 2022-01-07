import puppeteer from 'puppeteer'


describe('Main Page', ()=>{
    it('should display correctly without authorization', async () => {
        let browser = await puppeteer.launch({
            headless: false
        })
        let page = await browser.newPage()
        page.emulate({
            viewport: {
                width: 1400,
                height: 800
            },
            userAgent: ''
        })
        await page.goto('http://localhost:3000/')
        await page.waitForSelector('.header__authBtn')

        const html = await page.$eval('.header__authBtn', e => e.innerHTML)
        expect(html).toBe('Войти')

        browser.close()
    }, 160000);
    it('should display correctly with authorization', async () => {
        let browser = await puppeteer.launch({
            headless: false
        })
        let page = await browser.newPage()
        page.emulate({
            viewport: {
                width: 1400,
                height: 800
            },
            userAgent: ''
        })
        await page.goto('http://localhost:3000/')
        await page.evaluate(() => {
            localStorage.setItem('accessToken', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6ImFkbWluIiwidXNlcklEIjoxLCJpYXQiOjE2NDE1MDI2OTcsImV4cCI6MTY0MTUwMzg5N30.0gk_C8_DcBKe8YyhObSA6NDwXmh_Ci3w9Ybb4UkeAAs');
            localStorage.setItem('refreshToken', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6ImFkbWluIiwidXNlcklEIjoxLCJpYXQiOjE2NDE1MDI2OTcsImV4cCI6MTY0NDA5NDY5N30.NMdzHqJSlZO0iEiEexTxZaJe6eGqXD4TkoD4Po3xUSs');
        });
        await page.goto('http://localhost:3000/')

        await page.waitForSelector('.header__authBtn')

        const html = await page.$eval('.header__authBtn', e => e.innerHTML)
        expect(html).toBe('Выйти')

        browser.close()
    }, 160000);
    it('should display sign up menu when clicking on button sign up', async () => {
        let browser = await puppeteer.launch({
            headless: false
        })
        let page = await browser.newPage()
        page.emulate({
            viewport: {
                width: 1400,
                height: 800
            },
            userAgent: ''
        })
        await page.goto('http://localhost:3000/')
        await page.waitForSelector('.header__authBtn')
        await page.click('.header__authBtn')
        const regMenu = await page.waitForSelector('.sign__container')
        expect(regMenu).toBeDefined()

        browser.close()
    }, 160000);
    it('should display sign up menu when clicking on button sign up', async () => {
        let browser = await puppeteer.launch({
            headless: false
        })
        let page = await browser.newPage()
        page.emulate({
            viewport: {
                width: 1400,
                height: 800
            },
            userAgent: ''
        })
        await page.goto('http://localhost:3000/')
        await page.evaluate(() => {
            localStorage.setItem('accessToken', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6ImFkbWluIiwidXNlcklEIjoxLCJpYXQiOjE2NDE1MDI2OTcsImV4cCI6MTY0MTUwMzg5N30.0gk_C8_DcBKe8YyhObSA6NDwXmh_Ci3w9Ybb4UkeAAs');
            localStorage.setItem('refreshToken', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6ImFkbWluIiwidXNlcklEIjoxLCJpYXQiOjE2NDE1MDI2OTcsImV4cCI6MTY0NDA5NDY5N30.NMdzHqJSlZO0iEiEexTxZaJe6eGqXD4TkoD4Po3xUSs');
        });
        await page.goto('http://localhost:3000/')
        await page.waitForSelector('.header__authBtn')
        await page.click('.header__authBtn')
        const html = await page.$eval('.header__authBtn', e => e.innerHTML)
        expect(html).toBe('Войти')

        browser.close()
    }, 160000);
    it('should display sign up menu when clicking on button sign up', async () => {
        let browser = await puppeteer.launch({
            headless: false
        })
        let page = await browser.newPage()
        page.emulate({
            viewport: {
                width: 1400,
                height: 800
            },
            userAgent: ''
        })
        await page.goto('http://localhost:3000/')
        await page.waitForSelector('.header__authBtn')
        await page.click('.header__authBtn')
        const regMenu = await page.waitForSelector('.sign__form__button')
        await page.click('.sign__form__button')
        const err = await page.waitForSelector('.errorSign')
        const html = await page.$eval('.errorSign', e => e.innerHTML)
        expect(html).toBe('Не верное имя пользователя или пароль')

        browser.close()
    }, 160000);
})
