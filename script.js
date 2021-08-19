const formInput = document.getElementById('mail');
const formInputPswd = document.getElementById('pswd');
const btnLogin = document.getElementById('btn-login');
const checkBx = document.getElementById('agreement');
const btnSubmit = document.getElementById('submit-btn');
const formField = document.getElementById('evaluation-form');
const option = document.getElementById('house');

btnLogin.addEventListener('click', () => {
  if (formInput.value.match('tryber@teste.com') && (formInputPswd.value.match('123456'))) {
    const modal = document.getElementById('dialog-login-success');
    modal.showModal();
    document.getElementById('login-confirm').onclick = () => {
      modal.style.display = 'none';
      window.location.reload(true); 
    };
  } else {
    const modal2 = document.getElementById('dialog-error');
    modal2.showModal();
    document.getElementById('login-error').onclick = () => {
      modal2.style.display ='none';
      window.location.reload(true);
    }
  };
  });

// função que retorna valores automágicos dos checkbox e dos radio
function checkedBtn() {
  const fieldCheck = document.getElementsByName('content');
  const filled = Object.values(fieldCheck);
  let checkFill = []; // Tem que ser declarada para não dar undefined

  for (let i = 0; i < fieldCheck.length; i += 1) {
    if (filled[i].checked) {
      checkFill += ` ${filled[i].value}, `; // Usamos template Literals
    }
  }
  return checkFill;
}

function checkedRadio(component) {
  const fieldRadio = document.getElementsByName(component);
  const selectedRadio = Object.values(fieldRadio);
  let checkRd = '';
  for (let i = 0; i < fieldRadio.length; i += 1) {
    if (selectedRadio[i].checked) {
      checkRd = selectedRadio[i].value;
    }
  }
  return checkRd;
}

// ideia da função achamos aqui - https://www.javascripttutorial.net/javascript-dom/javascript-appendchild/
function createParagraph(name) {
  const p = document.createElement('p');
  p.textContent = name;
  return p;
}

function writeFields() {
  const frstName = document.getElementById('input-name').value;
  const lastName = document.getElementById('input-lastname').value;
  const email = document.getElementById('input-email').value;
  const opt = option.options[option.selectedIndex].value;
  const materias = checkedBtn();
  const rate = checkedRadio('rate');
  const choosedFamily = checkedRadio('family');
  const observ = document.getElementById('textarea').value;
  formField.innerHTML = '';
  formField.appendChild(createParagraph(`Nome: ${frstName} ${lastName}`));
  formField.appendChild(createParagraph(`Email: ${email}`));
  formField.appendChild(createParagraph(`Casa: ${opt}`));
  formField.appendChild(createParagraph(`Família: ${choosedFamily}`));
  formField.appendChild(createParagraph(`Matérias:${materias}.`));
  formField.appendChild(createParagraph(`Avaliação: ${rate}`));
  formField.appendChild(createParagraph(`Observações: ${observ}`));
}

// função que conta o número de caracteres corretos
function charCounter() {
  const textInput = document.querySelector('#textarea');
  const counter = document.querySelector('#counter');
  textInput.addEventListener('input', () => {
    counter.innerHTML = `${500 - textInput.value.length}`;
  });
}
charCounter();
// Função charCount implementada com o auxilio de:
// https://stackoverflow.com/questions/14086398/count-textarea-characters

checkBx.addEventListener('click', () => {
  if (btnSubmit.hasAttribute('disabled')) {
    btnSubmit.removeAttribute('disabled');
    document.getElementById("submit-btn").className = "nes-btn is-primary";
  } else {
    btnSubmit.setAttribute('disabled', true);
    document.getElementById("submit-btn").className = "nes-btn is-disabled";
  }
});

btnSubmit.addEventListener('click', (event) => {
  event.preventDefault();
  writeFields();
});
