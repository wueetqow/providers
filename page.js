const ids = {
    addAccountButton: 'add-account-button',
    addAccountError: 'add-account-error',
    addAccountForm: 'add-account-form',
    addAccountName: 'add-account-name',
    detailsContainer: 'details-container',
    missingBackbonesList: 'missing-backbones-list',
    yourAccountsList: 'your-accounts-list',
    yourBackbonesList: 'your-backbones-list'
}

const page = buildPage();

function buildPage(){
    let page = {};
    Object.keys(ids).forEach(key => {
        page[key] = document.getElementById(ids[key]);
    })

    return page;
}