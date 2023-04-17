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