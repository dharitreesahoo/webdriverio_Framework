describe("Selector Example", function() {
    it("get header val", function() {
        driver.url("https://www.freshworks.com");
        const header = $('h1')
       let txt = header.getText()
        console.log(txt)
        browser.pause(20000) 
    });
})