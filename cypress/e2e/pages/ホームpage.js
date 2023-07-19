class ホームPage {
    elements = {
        宿泊予約Tab: () => cy.contains("宿泊予約")
    }

    宿泊予約Tabを選択する() {
        this.elements.宿泊予約Tab().click();
    }
}

module.exports = new ホームPage();
