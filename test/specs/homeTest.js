const homePage1 = require("../../test/pageobjects/homePage")

describe("home page verify", function() {
    it("verify homepage", function() {
        driver.url("https://www.freshworks.com");
        let txt = homePage1.getPageHeader().getText();
         console.log("Header printed as **********"+txt)
         console.log(homePage1.getSubHeader().getText());
         console.log(homePage1.getSupportLink().getText());

        
    });

});