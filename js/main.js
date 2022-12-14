let dataGlasses = [
  {
    id: "G1",
    src: "./img/g1.jpg",
    virtualImg: "./img/v1.png",
    brand: "Armani Exchange",
    name: "Bamboo wood",
    color: "Brown",
    price: 150,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ea voluptates officiis? ",
  },
  {
    id: "G2",
    src: "./img/g2.jpg",
    virtualImg: "./img/v2.png",
    brand: "Arnette",
    name: "American flag",
    color: "American flag",
    price: 150,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In assumenda earum eaque doloremque, tempore distinctio.",
  },
  {
    id: "G3",
    src: "./img/g3.jpg",
    virtualImg: "./img/v3.png",
    brand: "Burberry",
    name: "Belt of Hippolyte",
    color: "Blue",
    price: 100,
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
  },
  {
    id: "G4",
    src: "./img/g4.jpg",
    virtualImg: "./img/v4.png",
    brand: "Coarch",
    name: "Cretan Bull",
    color: "Red",
    price: 100,
    description: "In assumenda earum eaque doloremque, tempore distinctio.",
  },
  {
    id: "G5",
    src: "./img/g5.jpg",
    virtualImg: "./img/v5.png",
    brand: "D&G",
    name: "JOYRIDE",
    color: "Gold",
    price: 180,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error odio minima sit labore optio officia?",
  },
  {
    id: "G6",
    src: "./img/g6.jpg",
    virtualImg: "./img/v6.png",
    brand: "Polo",
    name: "NATTY ICE",
    color: "Blue, White",
    price: 120,
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
  },
  {
    id: "G7",
    src: "./img/g7.jpg",
    virtualImg: "./img/v7.png",
    brand: "Ralph",
    name: "TORTOISE",
    color: "Black, Yellow",
    price: 120,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sint nobis incidunt non voluptate quibusdam.",
  },
  {
    id: "G8",
    src: "./img/g8.jpg",
    virtualImg: "./img/v8.png",
    brand: "Polo",
    name: "NATTY ICE",
    color: "Red, Black",
    price: 120,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, unde enim.",
  },
  {
    id: "G9",
    src: "./img/g9.jpg",
    virtualImg: "./img/v9.png",
    brand: "Coarch",
    name: "MIDNIGHT VIXEN REMIX",
    color: "Blue, Black",
    price: 120,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit consequatur soluta ad aut laborum amet.",
  },
];

const getElements = (id) => document.getElementById(id);

// Hi???n th??? danh s??ch k??nh b??n tr??i
const showGlasses = () => {
  let id = 1;

  const html = dataGlasses.reduce((value, data) => {
    return (value += `
    <div class = "col-4">
        <img src = "${
          data.src
        }" alt= "" class = "vglasses__items" id= "G${id++}">
    </div>
`);
  }, "");

  getElements("vglassesList").innerHTML = html;
};

showGlasses();

// L???y danh s??ch k??nh th??? b??n tr??i
const items = document.querySelectorAll("#vglassesList .col-4 img");

items.forEach((item) => {
  // B???t s??? ki???n click
  item.onclick = () => {
    // Reset ???nh th??? b??n ph???i
    removeGlasses(true);

    // T??m id k??nh ???????c click trong dataGlasses
    const glassFind = dataGlasses.find((val) => val.id === item.id);

    // G???n k??nh v??o h??nh m???u n??? v?? hi???n th??? th??ng tin k??nh
    innerGlass(glassFind);
  };
});

/**
 * Hi???n th??? ???nh v?? th??ng tin k??nh v??o h??nh m???u n??? b??n ph???i
 * @param {*} glass K??nh ???????c ch???n ????? hi???n th???
 */
const innerGlass = (glass) => {
  let model = "";
  let infor = "";

  model = `
        <img src="${glass.virtualImg}" alt="" />
    `;

  infor = `
    <h1>${glass.name} - ${glass.brand}(${glass.color})</h1>
    <div class="price">
      <span>$${glass.price}</span>
      <nav>Stocking</nav>
    </div>
    <p>
      ${glass.description}
    </p>
    `;

  getElements("avatar").innerHTML = model;
  getElements("glassesInfo").innerHTML = infor;
  getElements("glassesInfo").style.display = "block";
};

/**
 * X??a ???nh v?? th??ng tin k??nh
 * @param {*} bool N???u true s??? x??a, n???u false s??? kh??ng x??a
 */
window.removeGlasses = (bool) => {
  if (bool) {
    getElements("avatar").innerHTML = "";
    getElements("glassesInfo").innerHTML = "";
    getElements("glassesInfo").style.display = "none";
  }
};
