
const counterNumber = document.querySelector('#counterNumber');
const butadd = document.querySelector('#butadd');
const butmin = document.querySelector('#butmin');
const butres = document.querySelector('#butres');

let contador = 0;

butadd.addEventListener("click", () => {
    contador++
    counterNumber.textContent = contador;
});

butmin.addEventListener("click", () => {
    if(contador > 0) {
        contador--
        counterNumber.textContent = contador;
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'You can\'t count less than zero!',
          })
    }
});

butres.addEventListener("click", () => {
    contador = 0;
    counterNumber.textContent = contador;
});
