const pedra = document.querySelector('#pedra');
const papel = document.querySelector('#papel');
const tesoura = document.querySelector('#tesoura');
let round = 0;
const victory_pc = document.querySelector('#Number_winner_computer');
const victory_user = document.querySelector('#Number_winner_user');
let vencendor_user = 0;
let vencendor_computer = 0;
let sorteio = 0;

function Computer() {
  let escolha_do_pc = document.querySelector('#img')
  sorteio = Math.floor(Math.random() * 3);
  switch (sorteio) {
    case 0:
      escolha_do_pc.src = ('img/pedra.jpeg');
      break;
    case 1:
      escolha_do_pc.src = ('img/papel.jpeg');
      break;
    case 2:
      escolha_do_pc.src = ('img/tesoura.jpeg');
      break;
  };

  function Round() {
    const mostrar_round = document.querySelector('#Number_rounds');
    mostrar_round.innerHTML = `${round += 1}`;
  };
  Round()
};



pedra.addEventListener('click', function() {
  Computer()
  if (sorteio == 0) {
    alert('A tie!');
  }

  if (sorteio == 1) {
    victory_pc.innerHTML = `${vencendor_computer += 1}`;
    alert("Computer's Victory");
  }

  if (sorteio == 2) {
    victory_user.innerHTML = `${vencendor_user += 1}`;
    alert("User's Victory!");
  }

});

papel.addEventListener('click', function() {
  Computer()
  if (sorteio == 0) {
    victory_user.innerHTML = `${vencendor_user += 1}`;
    alert("User's Victory!");
  }

  if (sorteio == 1) {
    alert('A tie!');
  }

  if (sorteio == 2) {
    victory_pc.innerHTML = `${vencendor_computer += 1}`;
    alert("Computer's Victory");
  }

});

tesoura.addEventListener('click', function() {
  Computer()
  if (sorteio == 0) {
    victory_pc.innerHTML = `${vencendor_computer += 1}`;
    alert("Computer's Victory");
  }

  if (sorteio == 1) {
    victory_user.innerHTML = `${vencendor_user += 1}`;
    alert("User's Victory!");
  }

  if (sorteio == 2) {
    alert('A tie!');
  }

});
