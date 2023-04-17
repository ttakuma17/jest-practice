import { sum } from "./sum"
test("1+2 equals 3", () => {
    // sum(1,2)を実行した結果が3になることを検証
    expect(sum(1, 2)).toBe(3);
})
