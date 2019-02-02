
function renderPage() {
    if (yourAccounts.length > 0) {
        show(page.detailsContainer);
    } else {
        hide(page.detailsContainer);
    }
    renderList(page.yourAccountsList, getYourAccountNames());
    renderList(page.yourBackbonesList, getYourBackboneNames());
    renderMissingBackbones();
    renderProvidersSublists();
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

function renderBackbonePanel(backbone) {
    const backboneId = backbone.replace(" ", "_");
    const template = `
<div class="panel panel-default">
    <div class="panel-heading">
        <h4 class="panel-title">
            <a data-toggle="collapse" href="#${backboneId}-providers-list-panel">${backbone}</a>
        </h4>
    </div>
    <div id="${backboneId}-providers-list-panel" class="panel-collapse collapse">
        <ul id="${backboneId}-providers-list" class="list-group backbone-providers-list">
        </ul>
    </div>
</div>`
    const panel = document.createElement('div');
    panel.classList.add(['panel', 'panel-default']);
    panel.innerHTML = template;
    document.getElementById("missing-backbones-list").appendChild(panel)


}

function renderMissingBackbones() {
    clearList(document.getElementById("missing-backbones-list"));
    getMissingBackboneNames().map(renderBackbonePanel);
}

function renderProvidersSublists() {
    const sublists = document.getElementsByClassName("backbone-providers-list");
    for(let i =0; i< sublists.length; i++){
        const backboneProvidersList = sublists[i];
        const backbone = backboneProvidersList.getAttribute("id").replace("-providers-list", "").replace("_", " ");
        renderList(backboneProvidersList, getAccountNamesForBackbone(backbone));

    }
}

function clearList(list) {
    list.innerHTML = '';
}