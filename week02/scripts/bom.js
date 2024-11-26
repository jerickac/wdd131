const ipt = document.querySelector("#favchap");
const btn = document.querySelector("button");
const list = document.querySelector("#list");   

btn.addEventListener('click', () => {
    const favoriteScript = ipt.value;
    ipt.value = "";

    if (favoriteScript.trim() !== '') {
    
        const scriptInList = document.createElement("li");
        const span = document.createElement("span");
        const deleteBtn = document.createElement("button");        
    
        scriptInList.appendChild(span);
        span.textContent = favoriteScript;

        scriptInList.appendChild(deleteBtn);
        deleteBtn.textContent = "❌";

        list.appendChild(scriptInList);

        deleteBtn.addEventListener('click', () => {
            list.removeChild(scriptInList);
        })
    } else {
        alert("Please type a scripture reference");
    }


    ipt.focus();
    // scriptInList.appendChild(favoriteScript);

});