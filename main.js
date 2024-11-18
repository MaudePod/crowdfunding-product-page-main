const mainInputsIdsToDialogRadioIds = {
    "select-reward-25": "pledge-select-25",
    "select-reward-75": "pledge-select-75",
    "select-reward-200": "pledge-select-200"
}
document.querySelector("button[id='back-this-project']").addEventListener('click', () => {
    document.querySelector("#pledge-dialog").showModal();
})
document.querySelector('input[id="close-pledge-dialog"]').addEventListener('click', () => {
    document.querySelector("#pledge-dialog").showModal();
})
document.querySelectorAll('.select-rewards').forEach(
    element => {
        element.addEventListener('click', (e) => {
            document.querySelector("#pledge-dialog").showModal();
            document.querySelector(`#${mainInputsIdsToDialogRadioIds[e.target.id]}`).click();
        })
    });
document.querySelectorAll(".pledge-submit").forEach(element => {
    element.addEventListener('click', () => {
        document.querySelector("#pledge-dialog").close();
        document.querySelector("#completed-dialog").showModal();
    })
});
document.querySelectorAll("input[name='pledge'").forEach(element => {
    document.querySelector('#reset-form').click();
})
