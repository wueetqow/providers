const accountNames = getAllAccountNames();

function search(query, callback) {
    callback(
        getAllAccountNames().filter(account => {
            return account.toLowerCase().includes(query.toLowerCase());
        })
    );
}

autocomplete('#add-account-name', { autoselect: true, autoselectOnBlur: true, openOnFocus: true}, [
    {
        source: search,
        displayKey: 'my_attribute',
        templates: {
            suggestion: function (suggestion) {
                return suggestion;
            }
        }
    }
]).on('autocomplete:selected', function (event, suggestion, dataset, context) {
    console.log(event, suggestion, dataset, context);
    page.addAccountName.value = suggestion;
    page.addAccountButton.click();
});