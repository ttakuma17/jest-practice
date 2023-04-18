// 配列の要素がプリミティブ型の場合
const fruitList = ["Apple", "Lemon", "Orange"]

// 1つの要素が含まれていることを検証
it("contains Apple in fruitList", () => {
    expect(fruitList).toContain("Apple");
})

// 複数の要素が含まれていることを検証
it("contains Apple and Orange in fruitList", () => {
    expect(fruitList).toEqual(expect.arrayContaining(["Apple", "Orange"]));
})

// 配列の要素がオブジェクト型の場合
const itemList = [
    { name: "Apple", price: 100 }, { name: "Lemon", price: 150 }, { name: "Orange", price: 100 }
]

// 1つの要素が含まれていることを検証
it("contains Apple in itemList", () => {
    expect(itemList).toContainEqual({ name: "Apple", price: 100 })
})

// 複数の要素が含まれていることを検証
it("contains Apple and Orange in itemList", () => {
    expect(itemList).toEqual(
        expect.arrayContaining([
            { name: "Apple", price: 100 },
            { name: "Orange", price: 100 }
        ])
    )
})

/**
 * 配列の値に対するテスト
 * 
 * toContain, toContainEqual , expect.arrayContaing　を使う
 * 
 * 要素がプリミティブ型の場合は toContain === を使用した要素の厳密な等価性のチェック
 * 要素がオブジェクトかたの場合は toContainEqualを利用する
 * 複数の要素を検証したい場合は expect.arrayContainig
 */
