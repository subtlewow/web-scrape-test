document.getElementById("helloButton").addEventListener('click', () => {
    const newText = document.createElement('p');
    const container = document.getElementById('container');
    newText.innerHTML = '<p>Pressed at ' + new Date().toLocaleString() + '</p>';
    container.appendChild(newText)
})