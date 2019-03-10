"use strict";

var template = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        { className: "Title" },
        "To do List"
    ),
    React.createElement("input", { type: "text", id: "inputtxt" }),
    React.createElement("ul", { id: "ulist" }),
    React.createElement(
        "button",
        { onClick: addClicked, id: "btnadd" },
        "add"
    )
);
var appDiv = document.getElementById('app');

ReactDOM.render(template, appDiv);

var ul = document.getElementById("ulist");

document.addEventListener('DOMContentLoaded', function () {
    ul.addEventListener("click", function (e) {
        console.log(e.target);
        if (e.target.classList[1] === "fa-times") {
            var parentPara = e.target.parentNode.parentNode;
            console.log(parentPara);
            parentPara.parentNode.removeChild(parentPara);
        } else if (e.target.classList[1] === "fa-pencil-square-o") {
            var btns = e.target.parentNode;
            var text = btns.previousElementSibling;
            var input = btns.nextElementSibling;
            input.value = text.textContent;

            document.addEventListener("keypress", function (e) {
                if (e.keyCode === 13) {
                    text.textContent = input.value;
                }
            });
            console.log(text);
        }
    });
});

function addClicked() {
    // console.log(e);
    var addinput = document.getElementById("inputtxt");

    if (addinput.value !== "") {

        var li = document.createElement("li");
        var paraFirst = document.createElement("p");
        var paraSecound = document.createElement("p");
        var iconDelete = document.createElement("button");
        var iconEdit = document.createElement("button");
        var input = document.createElement("input");
        var _ul = document.getElementById("ulist");

        iconDelete.innerHTML = "Edit";
        iconDelete.className = "fa fa-pencil-square-o";
        iconEdit.innerHTML = "Delete";
        iconEdit.className = "fa fa-times";

        input.className = "edit-note";
        input.setAttribute('type', 'text');

        paraFirst.textContent = addinput.value;
        paraSecound.appendChild(iconDelete);
        paraSecound.appendChild(iconEdit);

        li.appendChild(paraFirst);
        li.appendChild(paraSecound);
        li.appendChild(input);

        _ul.appendChild(li);
        addinput.value = "";
    }
}
