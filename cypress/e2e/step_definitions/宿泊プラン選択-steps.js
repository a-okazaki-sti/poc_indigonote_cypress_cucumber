import { When } from "@badeball/cypress-cucumber-preprocessor";
import 宿泊プラン一覧Page from "../pages/宿泊プラン一覧page";

When('おすすめの宿泊プランを選択して、予約ボタンを押下する', () => {
    宿泊プラン一覧Page.おすすめプランの予約を選択する();
})
