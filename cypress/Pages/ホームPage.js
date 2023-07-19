<reference types="cypress" />

class HomePage {
    elements = {
        宿泊予約一覧ページTab: () => {
            cy.get("li:nth-of-type(2) > .nav-link")
        },
        会員登録フォームページTab: () => {
            cy.get("li#signup-holder > .nav-link")
        },
        ログインページBtn: () => {
            cy.get("li#login-holder > a[role='button']")
        }

    }

    ログインページへ遷移する() {
        this.ログインBtn.click;
    }
}