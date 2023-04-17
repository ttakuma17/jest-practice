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
// toBe : プリミティブな値が等しいかを、オブジェクトについては同一インスタンスであるかを比較する
test("evaluates as equal for all the same primitive values when using the toBe function", () => {
    expect(numberValue).toBe(0);
    expect(stringValue).toBe("文字列");
    expect(booleanValue).toBe(true);
})

// toEqualでプリミティブな値を評価
// toEqual : プリミティブな値が等しいかを、オブジェクトについては全プロパティのプリミティブな値が等しいかを、再帰的に評価
test("evaluates as equal for all the same primitive values when using the toEqual function", () => {
    expect(numberValue).toEqual(0);
    expect(stringValue).toEqual("文字列");
    expect(booleanValue).toEqual(true);
})

// toStrictEqualでプリミティブな値を評価
// 未定義のぷろぱてぃとundefinedを値にもつプロパティとを区別する
// 配列中の未定義の要素（empty）と値がundefinedである要素とを区別する
// 生成もとのクラスを区別する
test("evaluates as equal for all the same primitive values when using the toStrictEqual function", () => {
    expect(numberValue).toStrictEqual(0);
    expect(stringValue).toStrictEqual("文字列");
    expect(booleanValue).toStrictEqual(true);
})