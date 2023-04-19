/**
 * 前後処理が実行されるタイミング
 * 
 * beforeAll : describe内で定義されているすべてのテストの実行前に1回実行される
 * 
 * beforeEach : describe内で定義されているそれぞれのテストの実行前に1回実行される
 * 
 * afterAll : describe内で定義されているすべてのテストの終了後に1回実行される
 * 
 * afterEach : describe内で定義されているそれぞれのテストの終了後に1回実行される
 */

// グループ1
describe("before/after timing", () => {
    // グループ1の前後処理
    beforeAll(() => console.log("1 - before All"))
    afterAll(() => console.log("1 - after All"))
    beforeEach(() => console.log("1 - before Each"))
    beforeEach(() => console.log("1 - after Each"))

    it("", () => console.log("1 - test"))

    // グループ2
    describe("Scoped / Nested block", () => {
        // グループ2の前後処理
        beforeAll(() => console.log("2 - before All"))
        afterAll(() => console.log("2 - after All"))
        beforeEach(() => console.log("2 - before Each"))
        beforeEach(() => console.log("2 - after Each"))
        // グループ2のテスト1
        it("", () => console.log("2 - test1"))
        // グループ2のテスト2
        it("", () => console.log("2 - test2"))
    })

})

/**
 * テストを並行で実行
 * 
 *  --maxWorkers
 * 
 *  テストの実行者であるワーカーの最大数を指定するかパーセンテージを指定する
 *  
 *  CIとかCPUやメモリのリソースが限られた環境では、このオプションを利用してワーカー数を増やしすぎないように調整する必要がある
 * 
 */


/**
 * テストをスキップ
 * 
 * describe.skip か xdescribe : グループ内のテストケースをすべてスキップ
 * test.skip or xtest / it.skip or xit : テストケースをスキップ
 */

const fetchData = () => { }

it.concurrent.skip.each(
    Array.from(new Array(100).keys()).map(n => ({
        n,
        expected: "lemon"
    })),
)("concurrent test $n", async ({ n, expected }) => {
    console.log(n)
    await expect(fetchData()).resolves.toBe(expected)
})