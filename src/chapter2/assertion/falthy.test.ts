// toBeTruthy 
test("0はTruthyである", () => {
    expect("0").toBeTruthy()
})

// toBeFalsy
test("0はFalsyである", () => {
    expect(0).toBeFalsy()
})

/*

---
偽(falsy)として評価される値
---

false
0
-0
0n
""
null
undefined
NaN

*/

/* 
---
null / undefined の評価
---

*/

test("should be null", () => {
    expect(null).toBe(null)
    expect(null).toBeNull()
})

test("should be undefined", () => {
    expect(undefined).toBe(undefined)
    expect(undefined).toBeUndefined()
})

test("should be undefined", () => {
    let a; // undefined
    expect(a == null).toBe(true);
    a = null;
    expect(a === null).toBe(true)
})

/*
曖昧な結果の評価

テストでエラーが出ないことを確認したい
ある特定の値に何らかの値が含まれることを確認したい場合に expect.anyhing、expect.any

*/

const hoge = () => ({ hoge: "hoge", number: 0 })
it("hoge return anything", () => {
    // 期待値がnullやundefinedではないことを評価
    expect(hoge()).toEqual(expect.anything())
    // 期待値の一部のプロパティがnullやundefinedではないことを評価
    expect(hoge()).toEqual({
        hoge: "hogehoge",
        number: expect.anything(),
    })
    // 期待値の一部のプロパティがnumberがNumber型であることを評価
    expect(hoge()).toEqual({
        hoge: "hogehoge",
        number: expect.any(Number),
    })
})
