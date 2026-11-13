/* =====================================================================
   RAPPORTS ANNUELS & DOCUMENTS
   =====================================================================

   COMMENT AJOUTER UN RAPPORT ?
   1. Placez votre fichier PDF dans le dossier  reports/
      (par exemple : reports/Rapport_2024.pdf)
   2. Copiez un bloc { ... } ci-dessous et collez-le en haut de la liste.
   3. Modifiez l'année, le titre et le nom du fichier.
   4. N'oubliez pas la virgule , après chaque accolade fermante }.
   5. Enregistrez.

   CHAMPS :
   - year      : l'année (sert aussi au tri, la plus récente en haut).
   - title_fr / title_en : titre affiché.
   - desc_fr / desc_en   : courte description (facultatif, laissez "" si inutile).
   - file      : chemin du PDF, toujours sous la forme  "reports/NomDuFichier.pdf"
   ===================================================================== */

window.CPW_REPORTS = [

  {
    year:     2020,
    title_fr: "Calendrier des réunions 2020",
    title_en: "2020 meetings calendar",
    desc_fr:  "Calendrier des réunions mensuelles et ateliers philatéliques de l'année 2020.",
    desc_en:  "Calendar of the monthly meetings and philatelic workshops for the year 2020.",
    file:     "reports/CPW_Calendrier_2020.pdf"
  }

  /* ---- Exemple de rapport à ajouter (retirez les // pour l'activer) ----
  ,{
    year:     2024,
    title_fr: "Rapport d'activité 2024",
    title_en: "2024 activity report",
    desc_fr:  "Bilan de l'année écoulée présenté à l'assemblée générale.",
    desc_en:  "Review of the past year presented at the general meeting.",
    file:     "reports/Rapport_2024.pdf"
  }
  ------------------------------------------------------------------------ */

];
