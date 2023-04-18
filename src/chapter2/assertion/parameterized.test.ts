// パラメタライズどテストの書き方を練習
// test.each([
//     { a: 1, b: 1, expected: 2 },
//     { a: 1, b: 2, expected: 3 },
//     { a: 2, b: 1, expected: 3 }
// ])(".add($a+$b)", ({ a, b, expected }) => {
//     expect(a + b).toBe(expected)
// })

// 消費税計算する関数
const caluculateSalestax = (price: number) => price > 0 ? Math.floor((price / 100) * 10) : 0;


describe("消費税計算のテストケース", () => {
    it("caluculates the sales tax for a price equal to 100", () => {
        expect(caluculateSalestax(100)).toBe(10)
    })

    it("caluculates the sales tax for a price equal to 99", () => {
        expect(caluculateSalestax(99)).toBe(9)
    })

    it("caluculates the sales tax for a price equal to 1", () => {
        expect(caluculateSalestax(1)).toBe(0)
    })

    it("caluculates the sales tax for a price equal to 0.1", () => {
        expect(caluculateSalestax(0.1)).toBe(0)
    })

    it("caluculates the sales tax for a price equal to 0", () => {
        expect(caluculateSalestax(0)).toBe(0)
    })

    it("caluculates the sales tax for a price equal to -1", () => {
        expect(caluculateSalestax(-1)).toBe(0)
    })
})

// 上記のようにパラーメータに入る数字を変えるだけのテストであればパラメタライズどテストを利用した方がシンプルに記載できる

describe("消費税計算のテストケース", () => {
    it.each([
        { price: 100, expected: 10 },
        { price: 99, expected: 9 },
        { price: 1, expected: 0 },
        { price: 0.1, expected: 0 },
        { price: 0, expected: 0 },
        { price: -1, expected: 0 },
    ])("caluculates the sales tax for price equal to $price", ({ price, expected }) => {
        expect(caluculateSalestax(price)).toBe(expected)
    })
})



