class User {
    name: string
    password: string

    constructor({ name, password }: { name: string, password: string }) {
        // passwordが6文字未満の場合Errorをthrowする
        if (password.length < 6) throw new Error("The password length must be at least 6 characters");
        this.name = name;
        this.password = password;
    }
}

it("creates a new user with a 6-character password", () => {
    expect(new User({ name: "hoge", password: "123456" })).toEqual(
        {
            name: "hoge",
            password: "123456"
        }
    )
})

it("throw Error when the length of password is less than 6", () => {
    expect(() => new User({ name: "hoge", password: "12345" })).toThrow(Error); // ErrorがThrowされたのかをチェック
})

it("throw Error when the length of password is less than 6", () => {
    expect(() => new User({ name: "hoge", password: "12345" })).toThrow()
    expect(() => new User({ name: "hoge", password: "12345" })).toThrow(Error) // 型のチェック
    expect(() => new User({ name: "hoge", password: "12345" })).toThrow("The password length must be at least 6 characters") // エラーメッセージのチェック
})