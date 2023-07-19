import { Given, When } from "@badeball/cypress-cucumber-preprocessor";
import ホームPage from "../pages/ホームpage";

const url = 'https://hotel.testplanisphere.dev/ja/index.html';

Given('HOTEL_PLANISPHEREのサイトへアクセスする', () => {
    cy.visit(url);
})

When('宿泊予約タブを選択して宿泊プラン一覧画面へ遷移する', () => {
    ホームPage.宿泊予約Tabを選択する();
})
