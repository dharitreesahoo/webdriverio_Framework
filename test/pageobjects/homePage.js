class HomePage{
    getPageHeader(){return $('h1')}
    getSubHeader(){return $('div.banner-text-content>p.sub-text')}
    getSupportLink(){return $("//span[text()='Support']")}

}
module.exports =  new HomePage();