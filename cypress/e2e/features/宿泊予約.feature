Feature: HOTEL PLANISPHERE - 宿泊予約をする

    Background: HOTEL PLANISPHERE - ホームページを訪れる
        Given HOTEL PLANISPHEREのホームページを訪れる

    Scenario Outline: ホームページから 宿泊予約ページへ遷移して予約を行う
        Given 宿泊予約サイトのホーム画面へアクセスする
        When 宿泊予約のページへ遷移する
        Then おすすめなどが表示されていること

        Examples:
            | Header 1 | Header 2 | Header 3 |
            | Value 1  | Value 2  | Value 3  |

