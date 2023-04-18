// 浮動小数点
test("0.1 + 0.2 returns 0.3", () => {
    expect(0.1 + 0.2).toBe(0.3)
})

// 数値の比較
// toBeGreaterThan
it("0.1+0.2 は0.3よりも大きい", () => {
    expect(0.1 + 0.2).toBeGreaterThan(0.3);
    expect(0.1 + 0.2 > 0.3).toBe(true);

})

// toBeGreaterThanOrEqual
it("0.1+0.2は0.3よりも大きい、または、0.3000000000004と等しい", () => {
    expect(0.1 + 0.2).toBeGreaterThanOrEqual(0.3);
    expect(0.1 + 0.2).toBeGreaterThanOrEqual(0.30000000000000004);
    expect(0.1 + 0.2 >= 0.3).toBe(true);
    expect(0.1 + 0.2 >= 0.30000000000000004).toBe(true);
})

it("0.1+0.2 is less than 0.4", () => {
    expect(0.1 + 0.2).toBeLessThan(0.4);
    expect(0.1 + 0.2 < 0.4).toBe(true);
})

it("0.1 + 0.2 is less than 0.4 or 0.1 + 0.2 equals to 0.30000000000000004", () => {
    expect(0.1 + 0.2).toBeLessThanOrEqual(0.4);
    expect(0.1 + 0.2).toBeLessThanOrEqual(0.30000000000000004);
    expect(0.1 + 0.2 <= 0.4).toBe(true);
    expect(0.1 + 0.2 <= 0.30000000000000004).toBe(true);
})