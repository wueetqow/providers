page.addAccountForm.addEventListener("submit", handleAddAccountForm, false);

function handleAddAccountForm(e) {
    e.preventDefault();
    addAccount(page.addAccountName.value);
    renderPage();
}