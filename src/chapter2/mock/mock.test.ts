describe("jest fn", () => {
    it("mock object specification", () => {
        const mockFunction = jest.fn();

        // mockFunction関数の結果はundefined
        expect(mockFunction("foo", "bar")).toBe(undefined);

        // mockプロパティを持っている
        expect(mockFunction).toHaveProperty("mock");

        // callsプロパティを持っている
        expect(mockFunction).toHaveProperty("calls");

        // 1回呼び出された
        expect(mockFunction.mock.calls).toHaveLength(1);

        // 1回呼び出された際に、引数は"foo"と"bar"だった
        expect(mockFunction.mock.calls[0]).toEqual(["foo", "bar"]);

        // mockはresultsプロパティを持っている
        expect(mockFunction).toHaveProperty("results");

        // 1回呼び出された
        expect(mockFunction.mock.results).toHaveLength(1);

        // 1回目の返り値はundfined
        expect(mockFunction.mock.results[0].value).toBe(undefined);

        // 1回目の呼び出しは正常終了
        expect(mockFunction.mock.results[0].type).toBe("return");

        /**
         * モックオブジェクトであるmockFunctionには mockプロパティが付与される
         * 
         * mockプロパティにはcalls と results のプロパティが含まれることが確認できる
         * 
         * mock.resultsに含まれるオブジェクトのtypeプロパティに含まれる値
         * 
         * return  : 正常終了 モックオブジェクトの実行が正常終了した
         * throw : 異常終了　モックオブジェクトの実行が失敗、エラーがthrow
         * incomplete : 実行中 モックオブジェクトの実行が完了してない
         * 
         */

    })
})