const ciBuild = {
    number: 1,
    duration: 12000,
    state: "success",
    triggerParameters: {
        is_scheduled: true,
    },
    type: "scheduled_pipeline",
    actor: {
        login: "Taka",
    },
}

// 1つのプロパティを検証
it("build state should be success", () => {
    expect(ciBuild).toHaveProperty("state", "success");
    // expect(ciBuild).toHaveProperty("actor.login", "Taka");
})

// ネストしたプロパティを検証
it("actor should be Taka", () => {
    expect(ciBuild).toHaveProperty("actor.login", "Taka");
})

// 複数のプロパティを検証
it("triggered by the scheduled pipeline", () => {
    expect(ciBuild).toEqual(
        expect.objectContaining({
            triggerParameters: expect.objectContaining({ is_scheduled: true }),
            type: "scheduled_pipeline"
        }),
    )
})