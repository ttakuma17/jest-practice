/**
 * Promiseを返す関数の場合、doneではなく resolves とrejectsを利用する
 */

const doSomeThingAsync = () => {
    return new Promise((resolve, reject) => {
        // 非同期の処理が成功した時には resolve() を呼ぶ
        setTimeout(() => { resolve(true) }, 1000)
        // 非同期の処理が失敗した時には reject() を呼ぶ
        setTimeout(() => { reject(false) }, 1000)
    })
}

const successCallBack = () => { console.log("成功した") }
const failureCallBack = () => { console.log("失敗した") }

// thenとcacthを利用した例
doSomeThingAsync().then(successCallBack).catch(failureCallBack);

// thenのみを利用した例
doSomeThingAsync().then(successCallBack, failureCallBack);
