/** 
 * callback関数
 * 
 * コールバック関数で単純にexpectを実行すると、テストが終了せずにTimeoutエラーでテストは失敗してしまう
 * 
 * */

const fetchDataWithCallback = callback => {
    setTimeout(callback, 3000, "lemon")
}

it("returun lemon", done => {
    const callback = data => {
        expect(data).toBe("lemon")
        done(); // テストの終了を宣言する
    }
    fetchDataWithCallback(callback)
})