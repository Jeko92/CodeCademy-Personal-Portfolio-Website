const seeAllBtn = document.querySelector(".btn-see-more");
const projectCards = document.querySelector(".project-cards");
const allProjects = [
  {
    name: "The summit",
    href: "6-The-Summit",
    imgSrc: "thesummit.png",
    imgDescription: "The Summit Landing Page",
    description: "Links ans Buttons",
    technologies: ["html5", "css3"],
  },
  {
    name: "Web Design System",
    href: "7-Website-Design-System",
    imgSrc: "webdesignsystem.png",
    imgDescription: "Web Design System Landing Page",
    description: "CSS3 Fundamentals",
    technologies: ["html5", "css3"],
  },
  {
    name: "Journey Around The World",
    href: "8-Journey-Around-The-World",
    imgSrc: "journeyaroundtheworld.png",
    imgDescription: "Journey Around The World Landing Page",
    description: "Color Theory",
    technologies: ["html5", "css3"],
  },
  {
    name: "Pinpoint E-Commerce",
    href: "9-Pinpoint-E-Commerce",
    imgSrc: "pinpoint.png",
    imgDescription: "Pinpoint E-commerce Landing Page",
    description: "UI Components",
    technologies: ["html5", "css3"],
  },
  {
    name: "Reel Good Reviews",
    href: "10-Reel-Good-Reviews",
    imgSrc: "reelgoodreviews.png",
    imgDescription: "Reel Good Revievs Landing Page",
    description: "Text Design",
    technologies: ["html5", "css3"],
  },
  {
    name: "The Tea Cozy",
    href: "11-The-Tea-Cozy",
    imgSrc: "theteacozy.png",
    imgDescription: "The Tea Cozy Landing Page",
    description: "CSS Flexbox practice",
    technologies: ["html5", "css3"],
  },
  {
    name: "Pup Spa",
    href: "12-PupSpa",
    imgSrc: "pupspa.png",
    imgDescription: "Pup Spa Landing Page",
    description: "CSS Grid practice",
    technologies: ["html5", "css3"],
  },
  {
    name: "Task Board",
    href: "13-Task-Board",
    imgSrc: "taskboard.png",
    imgDescription: "Task Board Landing Page",
    description: "CSS Grid practice",
    technologies: ["html5", "css3"],
  },
  {
    name: "Tsunami Coffee",
    href: "14-Tsunami-Coffee",
    imgSrc: "tsunamicoffee.png",
    imgDescription: "Tsunami Coffee Landing Page",
    description: "Media Queries practice",
    technologies: ["html5", "css3"],
  },
  {
    name: "Fotomatic",
    href: "15-Fotomatic",
    imgSrc: "fotomatic.png",
    imgDescription: "Fotomatic Landing Page",
    description: "Debugging practice",
    technologies: ["html5", "css3"],
  },
  {
    name: "Company Home Page",
    href: "16-Company-Home-Page",
    imgSrc: "companyhomepage.png",
    imgDescription: "The StayWise Landing Page",
    description: "Responsive Design practice",
    technologies: ["html5", "css3"],
  },
  {
    name: "Cue Masters",
    href: "17-Responsive-Club-Website",
    imgSrc: "cuemasters.png",
    imgDescription: "Cue Masters Landing Page",
    description: "Responsive Design practice",
    technologies: ["html5", "css3"],
  },
];

const createCards = (cardsArr) => {
  let cardTemplate = "";
  cardsArr.forEach((card) => {
    // console.log(card.name, card.href);
    const cardContainer = document.createElement("div");
    cardContainer.classList.add("project-card", "generated"), "visible";
    cardContainer.innerHTML = `
              <a href="./Projects/${card.href}/index.html"
                ><img
                  src="./Projects/${card.href}/${card.imgSrc}"
                  alt=${card.imgDescription}
                />
              </a>
              <h3>${card.name}</h3>
              <ul>
                <li>${card.description}</li>
                <li>
                  <img
                    src="./assets/icons/SVG/html5.svg"
                    alt="HTML5"
                    class="used-technologie"
                  />
                  <img
                    src="./assets/icons/SVG/css3.svg"
                    alt="CSS3"
                    class="used-technologie"
                  />
                </li>
              </ul>
    `;
    projectCards.appendChild(cardContainer);
    // cardTemplate = "";
  });
  //   console.log(cardTemplate);
};

const hideCards = () => {
  const generatedCards = document.querySelectorAll(".generated");
  //   console.log(generatedCards);
  Array.from(generatedCards);
  for (const card of generatedCards) {
    // console.log(card.classList);
    if (card.classList.contains("generated")) {
      card.classList.add("hidden");
    }
  }
};

const toggleProjects = (e) => {
  //   console.log(e.target.innerHTML);
  if (e.target.innerHTML === "See more Projects") {
    e.target.innerHTML = "See Less";
    createCards(allProjects);
  } else {
    e.target.innerHTML = "See more Projects";
    hideCards();
  }
};

seeAllBtn.addEventListener("click", toggleProjects);
