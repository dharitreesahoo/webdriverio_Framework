describe("Selector Example", function() {
  xit("CSS Query Selector", function() {
      driver.url("https://lambdatest.github.io/sample-todo-app/");
      $("body > div.ng-scope > div > div > ul>li>input[name='li1']").click();    
      browser.pause(20000) 
  });
  xit("Open URL", function() { 
    driver.url("https://www.lambdatest.com/");  
    $("a=Automation").click();  
    browser.pause(20000) 
});
xit("Open URL", function() {
  driver.url("https://www.facebook.com/");
  $("[name = 'email']").setValue("123");
  browser.pause(20000) 
});
xit("Open URL", function() {
  driver.url("https://www.facebook.com/");
  $$("[name = 'email']").setValue("123");
  browser.pause(20000) 
});
xit("Open URL", function() {
  driver.url("https://www.google.com/");
  let links = $$("//a");
  links.forEach(element => {
    console.log(element.getText())
  });
  browser.pause(20000) 

.catch(function (err){
  setTimeout(function(){
      throw new err;
  }); 
});
})
  
  xit("Open URL", function() {
    driver.url("https://www.amazon.com/");
    const search =$('#twotabsearchtextbox')
    search.setValue('apple mac book')
     browser.pause(20000)
 
})
xit("Open URL", function() {
  driver.url("https://www.amazon.com/");
  const label = $('span.a-size-base.a-color-base')
  let text = label.getText();
  console.log(text)
  browser.pause(20000)

})
it("Click on a field", function() {
  driver.url("https://www.amazon.com/");
  const icon = $('input.nav-input')
  icon.click();
  browser.pause(20000)

})


})



 


