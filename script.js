function showAlert(message) {
    alert(message);
    console.log("User action: " + message);
}

// Background animation effect (Optional)
document.addEventListener('mousemove', (e) => {
    const moveX = (e.clientX * -0.05);
    const moveY = (e.clientY * -0.05);
    document.querySelector('.container').style.transform = `translate(${moveX}px, ${moveY}px)`;
});
