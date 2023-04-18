const fetchDataWithPromiseResolve = () => {
    new Promise(resolve => setTimeout(resolve, 1000, "lemon"))
}

// resolves を利用して成功時の値を受け取る
it("return lemon", () => {
    return expect(fetchDataWithPromiseResolve()).resolves.toBe("lemon")
})

// async/awaitを利用した例
it("return lemon with async/ await", async () => {
    await expect(fetchDataWithPromiseResolve()).resolves.toBe("lemon")
})

const fetchDataWithPromiseReject = () => new Promise(reject => setTimeout(reject, 1000, new Error("lemon does not exist")))

// .rejects を利用して失敗時の値を受け取る
it("failed to return lemon", () => {
    return expect(fetchDataWithPromiseReject()).rejects.toThrow("lemon does not exist")
})

// async / await を利用する
it("failed to return lemon", async () => {
    await expect(fetchDataWithPromiseReject()).rejects.toThrow("lemon does not exist")
})
