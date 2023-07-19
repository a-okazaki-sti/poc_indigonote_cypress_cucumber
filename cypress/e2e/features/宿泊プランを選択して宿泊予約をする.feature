Feature: HOTEL_PLANISPHEREのサイトで宿泊プランを選択して宿泊予約をする

    Scenario: 宿泊プランの一覧画面を表示する
        Given HOTEL_PLANISPHEREのサイトへアクセスする
        When 宿泊予約タブを選択して宿泊プラン一覧画面へ遷移する
        And おすすめの宿泊プランを選択して、予約ボタンを押下する
        # Then Start to type your Then step here
