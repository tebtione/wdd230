function initializeDate() {
    document.getElementById('hiddenDate').value = Date.now();
}

window.onload = initializeDate;