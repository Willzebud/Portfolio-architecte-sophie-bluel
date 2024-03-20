function recupererCategories() {
    fetch('http://localhost:5678/api/categories')
    .then(response => response.json())
    .then(data => {
      // Supposons que l'API renvoie un tableau d'objets catégorie, où chaque catégorie a une propriété 'name'
      const categories = new Set(data.map(categorie => categorie.name));
      // Ajoute "Tous" comme option de filtrage
      categories.add("Tous");
      creerMenuFiltres(categories);
    })
    .catch(error => console.error('Erreur lors de la récupération des catégories:', error));
}

const projetsFiltres = [
    { id: "1", name: "Objets" },
    { id: "2", name: "Appartements" },
    { id: "3", name: "Hotels & restaurants" },
    ];

function creerMenuFiltres(categories) {
  const menuFiltres = document.getElementById('menu-filtres'); // Assure-toi d'avoir cet élément dans ton HTML

  categories.forEach(categorie => {
    const bouton = document.createElement('button');
    bouton.innerText = categorie;
    bouton.addEventListener('click', () => filtrerProjetsParCategorie(categorie));
    menuFiltres.appendChild(bouton);
  });
}

function filtrerProjetsParCategorie(categorieSelectionnee) {
    const projetsFiltres = travaux.filter(travail => {
      return categorieSelectionnee === "Tous" || travail.categorie === categorieSelectionnee;
    });
    ajouterTravauxALaGalerie(projetsFiltres);
  }

recupererCategories();

