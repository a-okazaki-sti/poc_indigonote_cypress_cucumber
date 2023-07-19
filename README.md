# poc_indigonote_cypress_cucumber

Cypress と Cucumber を利用して E2E テストの自動テスト実装環境を構築するサンプルをまとめました。

## セットアップ

### vscode extentions

[Cucumber (Gherkin) Full Support](https://marketplace.visualstudio.com/items?itemName=alexkrechik.cucumberautocomplete)
 Version: 2.15.2 のインストール

`settings` に 下記を追記
```
"cucumberautocomplete.steps": [
        "cypress/support/step_definitions/*.js"
        ]
```

ターミナルで `npm install` を実行すると package.json の dependencies 内のモジュールがインストールされる