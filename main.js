
function setPageLocationBanner () {
    var p = document.createElement("p");
    p.className = "js-location";

    var l = window.location.pathname.split("/");
    var pathBuilder = window.location.origin;

    var rootA = document.createElement("a");
    rootA.href = pathBuilder;
    rootA.text = "~";
    p.appendChild(rootA);

    l.forEach(element => {
        if (element != "") {
            var a = document.createElement("a");
            pathBuilder = `${pathBuilder}/${element}`;
    
            a.href = pathBuilder;
            a.text = element;
    
            p.appendChild(document.createTextNode(" / "));
            p.appendChild(a);
        }
    });

    document.body.insertBefore(p, document.getElementById("main"));
}


function setDirectoryContentsList () {
    var dirList = document.getElementById("dir");
    if (dirList === null) {
        console.log("not a dir");
        return;
    }

    let client = new XMLHttpRequest();
    client.open("GET", "/files.json");

    client.onload = function () {
        if (this.status === 200) {
            var data = JSON.parse(this.responseText);

            console.log(data);

            var dir = window.location.pathname.replace("/", "").replace("/", "");
            dir = "./" + dir;

            data[dir].forEach(element => {
                var li = document.createElement("li");
                var a = document.createElement("a");
                a.href = element;
                a.text = element;
                li.appendChild(a);
                dirList.appendChild(li);
            });

        }
    }
    
    client.send();
}


window.addEventListener('load', (event) => {
    setPageLocationBanner();
    setDirectoryContentsList();
    console.log("done");
});
