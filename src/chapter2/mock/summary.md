# モックを利用したテスト

Jestでは3つの関数を利用してモック化する
jest.fn() は  Mock Object: テスト対象の一部の機能を模倣した代替オブジェクトを作成する
jest.mock() は　オブジェクト全体やオブジェクトの一部のメソッドをモック化する → 外部パッケージを利用する際によく使う
jest.spyOn()　は オブジェクトの一部のメソッドをモック化する

# テストダブル

テストダブル - テスト対象が依存しているコンポーネントを置き換える代用品

サブクラスとして以下のような違いがある

Dummy

Stub

Spy

Mock

Fake

詳しくは P67

なお、jestのメソッドについては一般的なサブクラスの概念に閉じたものではない
jest.mock()とあってもmock以外の役割を持つこともある

