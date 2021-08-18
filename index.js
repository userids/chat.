function adduser() {
    if (document.getElementById('username').value == '') {
        document.getElementById("user_name").placeholder = "cannot login without username"
    } else {
        const user_name = document.getElementById("username").value;

        localStorage.setItem("user_name", user_name);

        window.location = "index2.html"
    };

}

const inputs = document.querySelectorAll(".input");


function addcl() {
    let parent = this.parentNode.parentNode;
    parent.classList.add("focus");
}

function remcl() {
    let parent = this.parentNode.parentNode;
    if (this.value == "") {
        parent.classList.remove("focus");
    }
}


inputs.forEach(input => {
    input.addEventListener("focus", addcl);
    input.addEventListener("blur", remcl);
});