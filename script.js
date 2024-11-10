document.getElementById('yes-button').addEventListener('click', function() {
    document.getElementById('response').innerText = "EBAAAAA! 🎉 TE AMOO";
    document.getElementById('response').classList.remove('hidden'); // Remove a classe 'hidden' para mostrar a resposta
    document.getElementById('yes-button').disabled = true; // Desabilita o botão "Sim"
    document.getElementById('no-button').disabled = true; // Desabilita o botão "Não"
});

document.getElementById('no-button').addEventListener('click', function() {
    // Move o botão "Não" para uma posição aleatória
    const button = this;
    const x = Math.random() * (window.innerWidth - button.offsetWidth);
    const y = Math.random() * (window.innerHeight - button.offsetHeight);
    
    button.style.position = 'absolute'; // Muda o posicionamento do botão
    button.style.left = `${x}px`; // Define a nova posição horizontal
    button.style.top = `${y}px`; // Define a nova posição vertical
});