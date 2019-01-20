function addAccount(accountName) {
    const matchingAccount = getAccount(accountName);
    if (matchingAccount) {
        const alreadyExists = yourAccounts.some(existingAccount => existingAccount.reseller === matchingAccount.reseller);
        if (!alreadyExists) {
            yourAccounts.push(matchingAccount);
            page.addAccountName.value = '';
            clearError(page.addAccountError);
        } else {
            addError(page.addAccountError, 'Account Already Added');
        }
    } else {
        addError(page.addAccountError, 'No matching account found');
    }
}

function getAccount(accountName) {
    const matchingAccounts = getAccounts().filter(account => {
        return account.reseller === accountName
    });

    if (matchingAccounts.length === 0) {
        return null;
    } else if (matchingAccounts.length === 1) {
        return matchingAccounts[0];
    } else {
        throw new Error('Unexpected number of matches!');
    }
}

function getAllAccountNames(){
    return getAccounts().map(account => account.reseller).sort();
}

function getYourAccountNames(){
    return yourAccounts.map(account => account.reseller).sort();
}
