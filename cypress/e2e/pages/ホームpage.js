const Page = require("./Page");

class ホームPage extends Page {
    elements = {
        宿泊予約Tab: () => cy.contains("宿泊予約"),
        会員登録Tab: () => cy.contains("会員登録"),
        ログインBtn: () => cy.contains("ログイン")
    }

    宿泊予約Tabを選択する() {
        this.elements.宿泊予約Tab().click();
    }

    会員登録Tabを選択する() {
        this.elements.会員登録Tab().click();
    }
}

module.exports = new ホームPage();
