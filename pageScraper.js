const scraperObject = {
    url: 'https://github.com/orgs/assldev/repositories',
    async scraper(browser){
        let page = await browser.newPage();
		// Navigate to the selected page
		console.log(`Navigating to ${this.url}...`);
		await page.goto(this.url);
		// Wait for the required DOM to be rendered
		console.log(`Waiting for DOM to render`);
		await page.waitForSelector('#org-repositories');
		console.log(`DOM rendered`);
		// Get the list of repositories
		let repositoryList = await page.$$eval('ul > li.Box-row', repositories => {
			// Extract the names from the data
			repositories = repositories.map(el => el.querySelector('h3 > a').href)
			return repositories;
		});
		console.log(repositoryList);
    }
}

module.exports = scraperObject;