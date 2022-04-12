(function() {

    const adviceArea = document.querySelector('.advice');
    const adviceId = document.querySelector('.number');
    const diceBtn = document.querySelector('.dice');

    function generateAdvice() {
        const url = 'https://api.adviceslip.com/advice';
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.onload = function() {
            if (this.status === 200) {
                const data = JSON.parse(xhr.response);
                console.log(data);

                adviceId.innerText = '#' + data.slip.id;
                adviceArea.innerText = data.slip.advice;
            }
        }
        xhr.send();
    }

    diceBtn.addEventListener('click', function() {
        // alert('Huraaaaaaaayyyyyy ... ')
        generateAdvice();
    })

}());