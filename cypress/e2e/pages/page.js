module.exports = class Page {
    url = 'https://hotel.testplanisphere.dev/ja/index.html';

    visit(pass) {
        cy.visit(this.url + pass);
    }
}

