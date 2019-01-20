function getAllBackboneNames() {
    const allBackboneNames = [];

    getAccounts().forEach(account => {
        if (!allBackboneNames.includes(account.backbone.name)) {
            allBackboneNames.push(account.backbone.name);
        }
    });

    return allBackboneNames.sort();
}

function getYourBackboneNames() {
    return yourAccounts.map(account => account.backbone.name).sort();
}

function getMissingBackboneNames() {
    const yourBackboneNames = getYourBackboneNames();
    const allBackboneNames = getAllBackboneNames();

    const missingBackboneNames = allBackboneNames.filter(name => {
        return !yourBackboneNames.includes(name);
    })

    return missingBackboneNames;
}