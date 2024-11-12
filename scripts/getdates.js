const today = new Date();

currentyear.innerHTML = `<span>${today.getFullYear()}</span>`;
lastModified.innerHTML = `<span>Last modified in: ${document.lastModified}</span>`;

// alert(document.lastModified);