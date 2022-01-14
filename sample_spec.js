describe('My first test', function () {
    it('Finds an element', () => {
        cy.visit('http://automationpractice.com/index.php')
        cy.contains('Contact us').click()

        cy.url().should('include','?controller=contact') 

        cy.get('select').select('Webmaster')
        cy.get('#email').type('leo.fon@gmail.com').should('have.value', 'leo.fon@gmail.com')
        cy.get('#id_order').type('1111').should('have.value', '1111')
        cy.get('#message').type('My name is Leon').should('have.value', 'My name is Leon')
        cy.get("button[id='submitMessage'] span").click()
    })
    /*it('Upload file', () => {
        const filepatch = 'integration/pillar-hero-cypress.png'
        cy.get('input[type="file"]').attachFile(filepatch)
        cy.get('#fileUpload').click().contains('pillar-hero-cypress.png')
    }) */
})
describe('Task #2', function () {
    it('Sign in', () => {
        cy.visit('http://automationpractice.com/index.php')
        cy.contains('Sign in').click()
        cy.url().should('include','?controller=authentication&back=my-account')
        cy.get('#email').type('leo.fon@gmail.com').should('have.value', 'leo.fon@gmail.com')
        cy.get('#passwd').type('Leon1987').should('have.value', 'Leon1987')
        cy.get("button[id='SubmitLogin'] span").click()
    
        cy.get("a[title='My wishlists'] span").click()
        cy.contains('Sign out').click()
    })
})
describe('Sign in & Sign out', () => {
    

    it('Run test', () => {
        cy.visit('http://automationpractice.com/index.php')
        cy.contains('Sign in').click()
      
        cy.get('#email').type('leo.fon@gmail.com').should('have.value', 'leo.fon@gmail.com')
        cy.get('#passwd').type('Leon1987').should('have.value', 'Leon1987')
        cy.get("button[id='SubmitLogin'] span").click()
      
        cy.get('#search_query_top').type('faded short sleeve t-shirts').should('have.value', 'faded short sleeve t-shirts')
        cy.get("button[name='submit_search']").click()
        cy.get("a[title='Add to cart'] span").click()
      
        cy.get("span[title='Continue shopping'] span:nth-child(1)").click()
        cy.contains('Sign out').click() 
      })
})
/* before(() => {
        cy.visit('http://automationpractice.com/index.php')
        cy.contains('Sign in').click()
    })
    beforeEach(() => {
        cy.get('#email').type('leo.fon@gmail.com').should('have.value', 'leo.fon@gmail.com')
        cy.get('#passwd').type('Leon1987').should('have.value', 'Leon1987')
        cy.get("button[id='SubmitLogin'] span").click()
    }) */