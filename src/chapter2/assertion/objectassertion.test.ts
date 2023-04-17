// canの型を定義 
type CanType = {
    flavor: string
    ounces: number
}
// can1とcan2はそれぞれ同じプロパティと同じ値を持つ 
const can1: CanType = {
    flavor: 'grapefruit',
    ounces: 12,
}

const can2: CanType = {
    flavor: 'grapefruit',
    ounces: 12,
}
// can3はcan2の参照を持つ 
const can3: CanType = can2

// Canクラス 
class Can {
    flavor: string
    ounces: number
    constructor({ flavor, ounces }: CanType) {
        this.flavor = flavor
        this.ounces = ounces
    }
}
// can4はCanクラスで生成されたオブジェクトでcan1、can2と同じプロパティを持つ 
const can4 = new Can({
    flavor: 'grapefruit',
    ounces: 12,
})

// toBe　は Object.is　でオブジェクトの参照値が正しいかまでチェックする
// can1 と can2 は等しくないと評価される
test("can1とcan2は異なるインスタンス", () => {
    expect(can1).not.toBe(can2);
})

// can2とcan3　は等しいと評価される
test("can2とcan3は同じインスタンス", () => {
    expect(can2).toBe(can3)
})


// can1 と can2 は等しいと評価
test("can1とcan2は同じプロパティを持つ", () => {
    expect(can1).toEqual(can2)
})

// can2 と can4は等しいと評価
test("can2とcan4は同じプロパティを持つ", () => {
    expect(can2).toEqual(can4)
})

// toEqual は異なるインスタンスでも同じプロパティ、同じ値を持っている場合に等しいと評価
// 例外としては、Errorオブジェクトを比較する場合に toEqual関数ではmessageプロパティのみ評価する
// Errorオブジェクトの評価の際には toThrowを使うこと