
function renderPage() {
    if (yourAccounts.length > 0) {
        show(page.detailsContainer);
    } else {
        hide(page.detailsContainer);
    }
    renderList(page.yourAccountsList, getYourAccountNames());
    renderList(page.yourBackbonesList, getYourBackboneNames());
    renderList(page.missingBackbonesList, getMissingBackboneNames());
}

function renderList(list, listItems) {
    show(list);
    clearList(list);
    listItems.forEach(listItem => addListItem(list, listItem));
}

function show(element) {
    element.hidden = false;
}

function hide(element) {
    element.hidden = true;
}

function addError(error, errorText) {
    error.innerText = errorText;
    show(error);
}

function clearError(error) {
    error.innerText = '';
    hide(error);
}

function addListItem(list, listItemText) {
    const listItem = document.createElement('li');
    listItem.classList.add('list-group-item');
    listItem.appendChild(document.createTextNode(listItemText));
    list.appendChild(listItem);
}

function clearList(list) {
    list.innerHTML = '';
}