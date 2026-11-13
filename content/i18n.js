/* =====================================================================
   TRADUCTIONS DE L'INTERFACE  (menus, boutons, titres fixes)
   ---------------------------------------------------------------------
   Chaque ligne a une version française (fr) et une version anglaise (en).
   Pour changer un texte de menu ou de bouton, modifiez ici.
   Ne touchez pas aux mots-clés à gauche des deux-points (ex: "nav_home").
   ===================================================================== */
window.CPW_I18N = {
  fr: {
    // Navigation
    nav_home:      "Accueil",
    nav_events:    "Événements",
    nav_reports:   "Rapports annuels",
    nav_history:   "Walferdange dans la philatélie",
    nav_contact:   "Contact",
    brand_sub:     "Fondé en 1970",
    site_construction: "🚧 Ce site est en construction — certaines informations sont encore incomplètes.",

    // Accueil
    hero_lead:     "Association philatélique de Walferdange, au Luxembourg. Depuis 1970, nous réunissons les passionnés du timbre — débutants comme collectionneurs chevronnés.",
    hero_cta1:     "Nous découvrir",
    hero_cta2:     "Nos événements",

    about_eyebrow: "L'association",
    about_title:   "Le plaisir du timbre, partagé depuis 1970",
    read_more:     "En savoir plus",

    events_eyebrow:"Agenda",
    events_title:  "Événements à la une",
    events_all:    "Voir tous les événements",

    practical_title: "Informations pratiques",
    practical_when:  "Quand nous rencontrer",
    practical_where: "Où nous trouver",
    practical_contact: "Nous contacter",

    // Événements
    events_upcoming: "À venir",
    events_past:     "Événements passés",
    tag_upcoming:    "À venir",
    tag_past:        "Passé",
    no_upcoming:     "Aucun événement à venir n'est programmé pour le moment. Consultez nos réunions mensuelles ci-dessous.",

    // Rapports
    reports_intro:   "Retrouvez ici les rapports d'activité et documents de l'association. Cliquez pour télécharger (format PDF).",
    download:        "Télécharger",

    // Histoire
    history_intro:   "Découvrez Walferdange à travers la philatélie : timbres, cachets, cartes postales et histoire postale de la commune.",

    // Contact
    contact_intro:   "Une question, l'envie de nous rejoindre ou d'assister à une réunion ? Écrivez-nous.",
    contact_name:    "Nom",
    contact_email:   "Adresse e-mail",
    contact_message: "Message",
    contact_send:    "Envoyer",
    contact_join_title: "Devenir membre",
    contact_join_text:  "Les nouveaux membres et les visiteurs sont les bienvenus à nos réunions. N'hésitez pas à venir nous rencontrer !",

    // Pied de page
    footer_about:    "Cercle Philatélique Walferdange — association sans but lucratif réunissant les amateurs de philatélie de la région depuis 1970.",
    footer_nav:      "Navigation",
    footer_contact:  "Contact",
    footer_rights:   "Tous droits réservés.",
    made_note:       "Site de l'association"
  },

  en: {
    nav_home:      "Home",
    nav_events:    "Events",
    nav_reports:   "Annual reports",
    nav_history:   "Walferdange in philately",
    nav_contact:   "Contact",
    brand_sub:     "Founded in 1970",
    site_construction: "🚧 This website is under construction — some information is still incomplete.",

    hero_lead:     "Philatelic society of Walferdange, Luxembourg. Since 1970 we have brought together stamp enthusiasts — from beginners to seasoned collectors.",
    hero_cta1:     "About us",
    hero_cta2:     "Our events",

    about_eyebrow: "The society",
    about_title:   "The joy of stamps, shared since 1970",
    read_more:     "Read more",

    events_eyebrow:"What's on",
    events_title:  "Featured events",
    events_all:    "See all events",

    practical_title: "Practical information",
    practical_when:  "When we meet",
    practical_where: "Where to find us",
    practical_contact: "Get in touch",

    events_upcoming: "Upcoming",
    events_past:     "Past events",
    tag_upcoming:    "Upcoming",
    tag_past:        "Past",
    no_upcoming:     "No upcoming events are scheduled at the moment. See our monthly meetings below.",

    reports_intro:   "Find here the society's activity reports and documents. Click to download (PDF format).",
    download:        "Download",

    history_intro:   "Discover Walferdange through philately: stamps, postmarks, postcards and the postal history of the commune.",

    contact_intro:   "A question, or would you like to join us or attend a meeting? Write to us.",
    contact_name:    "Name",
    contact_email:   "E-mail address",
    contact_message: "Message",
    contact_send:    "Send",
    contact_join_title: "Become a member",
    contact_join_text:  "New members and visitors are always welcome at our meetings. Come and meet us!",

    footer_about:    "Cercle Philatélique Walferdange — a non-profit society bringing together stamp lovers of the region since 1970.",
    footer_nav:      "Navigation",
    footer_contact:  "Contact",
    footer_rights:   "All rights reserved.",
    made_note:       "Society website"
  }
};

/* -----------------------------------------------------------------
   COORDONNÉES DE L'ASSOCIATION  (utilisées un peu partout sur le site)
   Modifiez ces informations selon vos besoins.
   ----------------------------------------------------------------- */
window.CPW_INFO = {
  // L'adresse e-mail est volontairement coupée en deux (avant / après le @)
  // pour la protéger des robots collecteurs de spam. Le site la réassemble tout seul.
  // Pour la modifier : email_user = ce qui est AVANT le @, email_domain = ce qui est APRÈS.
  email_user:   "cpwalferdange",              // <-- avant le @
  email_domain: "gmail.com",                  // <-- après le @
  meetings_fr: "Réunions mensuelles le lundi à 19h15, ateliers philatéliques le mercredi.",
  meetings_en: "Monthly meetings on Mondays at 7:15 pm, philatelic workshops on Wednesdays.",
  address_fr:  "Salle N°1, Centre Prince Henri, Walferdange (Luxembourg)",
  address_en:  "Room N°1, Centre Prince Henri, Walferdange (Luxembourg)"
};
