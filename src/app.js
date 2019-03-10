
let template = (
    <div>
        <h1 className="Title" >To do List</h1>
        <input type="text" id="inputtxt" />
        <ul id="ulist"></ul>
        <button onClick={addClicked} id="btnadd">add</button>
    </div>
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
        }
        else if (e.target.classList[1] === "fa-pencil-square-o") {
            var btns = e.target.parentNode;
            var text = btns.previousElementSibling;
            var input = btns.nextElementSibling;
            input.value = text.textContent;

            document.addEventListener("keypress", function (e) {
                if (e.keyCode === 13) {
                    text.textContent = input.value;
                }
            })
            console.log(text);
        }
    })
});





function addClicked() {
    // console.log(e);
    let addinput = document.getElementById("inputtxt")

    if (addinput.value !== "") {

        let li = document.createElement("li");
        let paraFirst = document.createElement("p");
        let paraSecound = document.createElement("p");
        let iconDelete = document.createElement("button");
        let iconEdit = document.createElement("button");
        let input = document.createElement("input");
        let ul = document.getElementById("ulist");


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

        ul.appendChild(li);
        addinput.value = "";
    }

}

