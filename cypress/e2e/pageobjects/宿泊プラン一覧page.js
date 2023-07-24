const Page = require("./Page");

class 宿泊プラン一覧Page extends Page {
    elements = {
        おすすめプラン_そのプランで予約Btn: () => cy.contains('このプランで予約') //TODO このボタンを特定できるように要リファクタ
    }

    おすすめプランの予約を選択する() {
        this.elements.おすすめプラン_そのプランで予約Btn().invoke('removeAttr', "target").click();
    }
}

module.exports = new 宿泊プラン一覧Page();
