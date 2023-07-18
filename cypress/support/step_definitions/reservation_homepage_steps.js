/// <reference types="cypress" />

import { Given } from "@badeball/cypress-cucumber-preprocessor";

const url = "https://hotel.testplanisphere.dev/ja/index.html";

    Given('宿泊予約サイトのホーム画面へアクセスする', () => {
        cy.visit(url);
})