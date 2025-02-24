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
            <div class="p-2">
                <div class=" bg-dark text-bg-dark d-flex">
                    <img src="${img}" alt="" width="100" height="100" class="flex-shrink-0 flex-grow-0">
                    <div class="px-2 pt-1">
                        <h4>${name}</h4>
                        <p>${role} <br> 
                        <span class="text-primary">${email}</span>
                        </p>
                        
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