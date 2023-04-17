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

