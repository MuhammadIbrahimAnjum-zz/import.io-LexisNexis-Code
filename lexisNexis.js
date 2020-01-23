   async function linkExpandFun() {

       for (let i = 0; i < 3; i++) {
           async function clickButton() {
               for (let i = 0; i < 3; i++) {
                   const sleep = (milliseconds) => {
                       return new Promise(resolve => setTimeout(resolve, milliseconds))
                   }
                   let titleList = [];
                   let getTitle = document.querySelectorAll(".js-node");
                   for (let l = 0; l < getTitle.length; l++) {
                       titleList[l] = getTitle[l].getAttribute("data-title");
                       if (titleList[l] == "TITLE 8. HEALTH" || titleList[l] == "TITLE 10. HUMAN SERVICES") {
                           let btnClick = getTitle[l].querySelectorAll(".context-menu-button");
                           for (let x = 0; x < btnClick.length; x++) {
                               var evt = new MouseEvent("click", {
                                   view: window,
                                   bubbles: true,
                                   cancelable: true,
                                   clientX: 20,
                               });
                               btnClick[x].dispatchEvent(evt);
                               btnClick[x].classList.remove("context-menu-button");
                               await sleep(1000);
                           }
                       }
                   }
               }
           }
           clickButton();
       }
   }
   linkExpandFun();

 