
/*
function getGithubStuff() {
    let client = new XMLHttpRequest();
    client.open("GET", "https://api.github.com/users/casheww");

    client.onload = function() {
        if (this.status === 200) {
            var data = JSON.parse(this.responseText);
            document.getElementById("github-pfp").innerHTML = `<img src="${data["avatar_url"]}">`;
            document.getElementById("github-bio").innerText = data["bio"]
        }
    }
    client.send();
}

function stuff() {
    console.log("What are you doing here?");

    getGithubStuff();
    
}
*/
