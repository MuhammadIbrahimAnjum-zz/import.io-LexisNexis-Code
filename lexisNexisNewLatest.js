async function linkExpandFun() {
    async function clickButton(callBack) {
        for (let i = 0; i <= 2; i++) {// this loop is to open all buttons till third step
            const sleep = (milliseconds) => {
                return new Promise(resolve => setTimeout(resolve, milliseconds))
            } // sleep function to pause some actions in code like click and for next loop
            let titleList = [];
            let getTitle = document.querySelectorAll(".js-node");
            for (let l = 0; l < getTitle.length; l++) {
                titleList[l] = getTitle[l].getAttribute("data-title");
                if (titleList[l] == "TITLE 8. HEALTH" || titleList[l] == "TITLE 10. HUMAN SERVICES") {
                    let btnClick = getTitle[l].querySelectorAll(".context-menu-button");// get all buttons that only has this class > .context-menu-button
                    for (let x = 0; x < btnClick.length; x++) {
                        var evt = new MouseEvent("click", {
                            view: window,
                            bubbles: true,
                            cancelable: true,
                            clientX: 20,
                        });// function for clicking that buttons 
                        btnClick[x].dispatchEvent(evt);
                        btnClick[x].classList.remove("context-menu-button");
                        await sleep(1000); // pause of one second in clicking each button
                    }
                }
            }
            await sleep(3000); // pause of 30 sec after every loop
        }
        callBack(); // callBack function after all buttons expanded then it will right click all the links so that links get href in them and the append them to the top of the webpage
    }
    clickButton(myFunction);

    function myFunction() {
        let header = document.querySelector(".container").style.visibility = "hidden";

        let linksUrls = [];
        let newTable = "<table>";
        let docLinks = document.getElementsByClassName("toc-tree__title");
        let linksNeeded = [];
        for (let i = 0; i < docLinks.length; i++) {
            linksNeeded[i] = docLinks[i].querySelector("a");
            if (linksNeeded[i]) {
                let line = "<tr>"; // creating Row
                //getting Urls
                var clickEvnt = new MouseEvent("contextmenu", {
                    bubbles: true,
                    cancelable: false,
                    view: window,
                    button: 2,
                    buttons: 0,
                    clientX: linksNeeded[i].children[0].getBoundingClientRect().x,
                    clientY: linksNeeded[i].children[0].getBoundingClientRect().y
                });
                linksNeeded[i].dispatchEvent(clickEvnt);

                linksUrls[i] = linksNeeded[i].getAttribute("href");
                line += "<td>" + "https://advance.lexis.com" + linksUrls[i] + " </td>";
                line += "</tr>";
                newTable += line;
            }
        }
        newTable += "</table>";
        console.log(newTable);
        document.body.insertAdjacentHTML('afterbegin', newTable);
    }

}
linkExpandFun();
