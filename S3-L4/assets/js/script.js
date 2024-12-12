
    const grid = document.getElementById('grid');
    const numbers = [];

   
    for (let i = 1; i <= 76; i++) {
        const div = document.createElement('div');
        div.textContent = i;
        div.id = `numero-${i}`;
        console.dir(div)
        grid.appendChild(div);
        numbers.push(i);
    }

    function extractNumber() {
        if (numbers.length === 0) {
            alert('Tutti i numeri sono stati estratti!');
            return;
        }
        const randomIndex = Math.floor(Math.random() * numbers.length);
        const extractedNumber = numbers.splice(randomIndex, 1)[0];
        document.getElementById(`numero-${extractedNumber}`).classList.add('selected');
    }