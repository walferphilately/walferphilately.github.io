/* =====================================================================
   ÉVÉNEMENTS DU CERCLE PHILATÉLIQUE WALFERDANGE
   =====================================================================

   COMMENT AJOUTER UN ÉVÉNEMENT ?
   1. Copiez un bloc { ... } complet ci-dessous (d'une accolade à l'autre).
   2. Collez-le juste après le crochet [ ci-dessous (en haut de la liste).
   3. Modifiez les valeurs entre guillemets "...".
   4. N'oubliez PAS la virgule , après l'accolade fermante } de chaque bloc.
   5. Enregistrez le fichier. C'est tout !

   EXPLICATION DES CHAMPS :
   - date         : la date « invisible » qui sert à trier (format AAAA-MM-JJ).
   - upcoming     : true = événement à venir  /  false = événement passé.
   - highlight    : true = affiché aussi sur la page d'accueil (mettez-en 2 ou 3).
   - date_fr / date_en : la date telle qu'AFFICHÉE aux visiteurs.
   - title_fr / title_en : le titre (français / anglais).
   - place_fr / place_en : le lieu.
   - image        : nom d'une image placée dans le dossier images/uploads/
                     (laissez "" pour utiliser un visuel par défaut).
   - body_fr / body_en : le texte de description.

   ⚠️ Astuce : gardez toujours les guillemets " " et les virgules aux bons
   endroits. Si le site n'affiche plus rien, c'est souvent une virgule ou un
   guillemet oublié dans ce fichier.
   ===================================================================== */

window.CPW_EVENTS = [

  {
    date:      "2026-09-21",
    upcoming:  true,
    highlight: true,
    date_fr:   "21 septembre 2026",
    date_en:   "21 September 2026",
    title_fr:  "Réunion mensuelle",
    title_en:  "Weekly Meeting",
    place_fr:  "Centre Prince Henri, Walferdange - Salle 1",
    place_en:  "Centre Prince Henri, Walferdange - Room 1",
    image:     "logo-fonde-1970.jpg",
    body_fr:   "Venez échanger avec les membres. Entrée libre.",
    body_en:   "Meet and chat wuth our members. Free entry."
  },

  {
    date:      "2027-05-08",
    upcoming:  true,
    highlight: true,
    date_fr:   "8 – 9 mai 2027",
    date_en:   "8 – 9 May 2027",
    title_fr:  "Exposition philatélique",
    title_en:  "Philatelic exhibition",
    place_fr:  "Centre Prince Henri, Walferdange",
    place_en:  "Centre Prince Henri, Walferdange",
    image:     "logo-fonde-1970.jpg",
    body_fr:   "Détails à venir. Entrée libre.",
    body_en:   "To be detailed. Free entry."
  },

  {
    date:      "2026-09-21",
    upcoming:  true,
    highlight: true,
    date_fr:   "Chaque mois",
    date_en:   "Every month",
    title_fr:  "Réunion mensuelle",
    title_en:  "Monthly meeting",
    place_fr:  "Salle N°1, Centre Prince Henri — dès 19h00",
    place_en:  "Room N°1, Centre Prince Henri — from 7:00 pm",
    image:     "logo-fonde-1970.jpg",
    body_fr:   "Tout au long de l'année, nous nous retrouvons pour nos réunions mensuelles le troisième lundi de chaque mois (sauf en juillet et août). Un moment convivial d'échange, d'entraide et de partage autour du timbre. Visiteurs bienvenus.",
    body_en:   "Throughout the year we gather for our monthly meetings every third Monday of each month (except in july and august). A friendly moment of exchange, mutual help and sharing around stamps. Visitors welcome."
  },

  {
    date:      "2025-03-17",
    upcoming:  false,
    highlight: false,
    date_fr:   "Lundi 17 mars 2025",
    date_en:   "Monday 17 March 2025",
    title_fr:  "Assemblée générale annuelle",
    title_en:  "Annual General Meeting",
    place_fr:  "Salle N°1, Centre Prince Henri — 19h30",
    place_en:  "Room N°1, Centre Prince Henri — 7:30 pm",
    image:     "logo-fonde-1970.jpg",
    body_fr:   "Réunion statutaire annuelle : bilan de l'année écoulée, présentation des comptes, projets à venir et élection du comité.",
    body_en:   "Annual statutory meeting: review of the past year, presentation of accounts, upcoming projects and election of the committee."
  },

  {
    date:      "2025-06-21",
    upcoming:  false,
    highlight: false,
    date_fr:   "21 – 28 juin 2025",
    date_en:   "21 – 28 June 2025",
    title_fr:  "175ᵉ anniversaire de la commune de Walferdange",
    title_en:  "175th anniversary of municipality of Walferdange",
    place_fr:  "Hall Omnisport, Walferdange",
    place_en:  "Sports Center, Walferdange",
    image:     "timbre175.jpg",
    body_fr:   "Le Cercle a organisée une exposition locale dans le cadre des festivités pour le 175ᵉ anniversaire de la commune de Walferdange. Un timbre, carte postale, carte maxima et cachet spécial ont été émis à l'occasion.",
    body_en:   "The Cercle organized a local exhibition as part of the festivities marking the 175th anniversary of the municipality of Walferdange. A stamp, postcard, maximum card, and special cancellation were issued for the occasion."
  },

  {
    date:      "2021-12-19",
    upcoming:  false,
    highlight: false,
    date_fr:   "27 – 28 novembre 2021",
    date_en:   "27 – 28 November 2021",
    title_fr:  "50ᵉ anniversaire du CPW — Exposition",
    title_en:  "50th anniversary of the CPW — Exhibition",
    place_fr:  "Centre Prince Henri, Walferdange",
    place_en:  "Centre Prince Henri, Walferdange",
    image:     "exposition-flyer-50.png",
    body_fr:   "Le Cercle a célébré ses 50 ans d'existence par une exposition spéciale retraçant un demi-siècle de passion philatélique à Walferdange.",
    body_en:   "The society celebrated its 50 years with a special exhibition retracing half a century of philatelic passion in Walferdange."
  }

];
