
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

}


window.addEventListener('load', (event) => {
    setPageLocationBanner();
    setDirectoryContentsList();
    console.log("done");
});
