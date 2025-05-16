// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "My publications.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-research",
          title: "Research",
          description: "A collection of my research projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "The CV website page is more interesting and you can also get the PDF version from the pdf icon.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-blog",
          title: "Blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "dropdown-timi",
              title: "Timi",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/timi/";
              },
            },{id: "dropdown-easter-egg",
              title: "Easter egg!",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/game/";
              },
            },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-attended-2nd-pyscf-conference",
          title: 'Attended 2nd PySCF Conference',
          description: "",
          section: "News",},{id: "news-attended-pcts-workshop-for-nonadiabatic-dynamics-electron-phonon-interactions-and-spin-phonon-couplings",
          title: 'Attended PCTS workshop for Nonadiabatic dynamics, electron-phonon interactions, and spin-phonon couplings',
          description: "",
          section: "News",},{id: "news-my-new-website-is-online-sparkles-smile",
          title: 'My new website is online! :sparkles: :smile:',
          description: "",
          section: "News",},{id: "projects-under-construction",
          title: 'Under construction',
          description: "coming soon!",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},];
