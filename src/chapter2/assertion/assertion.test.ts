test("testを利用してテストケースを作成する", () => {
    const result = true; // テスト結果
    const expected = true; // 期待値
    expect(result).toBe(expected); // expect関数とtoBe関数を利用して結果を評価する
})

it("itを利用してテストケースを作成する", () => {
    expect(true).toBe(true)
})

const numberValue = 0;
const stringValue = "文字列";
const booleanValue = true;

// toBe でプリミティブな値を評価
test("evaluates as equal for all the same primitive values when using the toBe function", () => {

})