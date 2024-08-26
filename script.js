const CardData = [
    {
      body: "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
    },
    {
      body: "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
    },
    {
      body: "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
    },
  ];
  const postContainer = document.querySelector(".container");
  const postMethods = () => {
    CardData.map((postData) => {
      const postElement = document.createElement("main");
      postElement.classList.add("container");
      postElement.innerHTML = `<div class="container1"><img class="container2" src="photo.jpg" alt=""><p class="container4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate, saepe.</p><img class="container3" src="photo1.jpg" alt=""></div> `;
      postContainer.appendChild(postElement);
    });
  };
  postMethods();
