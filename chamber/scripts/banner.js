function closeBanner() {
    document.getElementById('banner').style.display = 'none';
}

function showBanner() {
    const today = new Date();
    const day = today.getDay(); // 0: Sunday, 1: Monday, ..., 6: Saturday
    if (day >= 1 && day <= 3) { // Show on Monday (1), Tuesday (2), Wednesday (3)
        document.getElementById('banner').style.display = 'block';
    }
}

window.onload = showBanner;