/* CONSEGNA
Dato un array di oggetti rappresentante un team di un’azienda, creare una pagina dedicata in cui mostrare una card per ciascun componente.

Bonus
1. Rendere l’esercizio responsive, mandando a capo le card
2. Aggiungere un form di agginta membri che permetta di visualizzare il nuovo membro sulla pagina */

const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "./assets/img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "./assets/img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "./assets/img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "./assets/img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "./assets/img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "./assets/img/female3.png"
  }
];

/* DOM nodes */

const cardsEl = document.getElementById("cards")

/* functions */

console.log(teamMembers);
pushMember(teamMembers)

function inputMembers(object) {
  const { name, role, email, img } = object
  let markup = `
    <div class="p-1">
                <div class=" bg-dark text-bg-dark d-flex">
                        <img src="${img}" alt="" class="flex-shrink-0 flex-grow-0">
                        <div class="p-3">
                            <h3>${name}</h3>
                        <P>${role}</P>
                        <P class="text-primary">${email}</P>
                        </div>
                </div>
            </div>`
  return markup
}

function pushMember(defaultObject) {
  for (let i = 0; i < defaultObject.length; i++) {
    const thisObject = defaultObject[i];
    console.log(thisObject);
    cardsEl.innerHTML += inputMembers(thisObject)
  }
}


/* for (let i = 0; i < teamMembers.length; i++) {
  const element = teamMembers[i];
  console.log(element);
  cardsEl.innerHTML += `
    <div class="p-1">
        <div class="card bg-dark text-bg-dark d-flex">
            <div class="card-body">
                <img src=${Image} alt="" class="card-img-top">
                <h3>${Name}</h3>
                <P>${Job}</P>
                <P class="text-primary">${email}</P>
            </div>
        </div>
    </div>`
}
 */