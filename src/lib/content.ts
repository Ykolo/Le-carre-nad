export type Univers = {
  num: string;
  title: string;
  slot: string;
  placeholder: string;
  text: string;
  src?: string;
};

export type Prestation = {
  num: string;
  title: string;
  items: string[];
};

export const univers: Univers[] = [
  { num: "01", title: "Soins beauté", slot: "u-soins", placeholder: "Photo soins", text: "Soins du visage et esthétique, dans un espace calme." },
  { num: "02", title: "Femme", slot: "u-femme", placeholder: "Photo coiffure femme", text: "Coupe, couleur et coiffage, du quotidien aux grandes occasions." },
  { num: "03", title: "Homme", slot: "u-homme", placeholder: "Photo coiffure homme", text: "Coupes et barbe, nettes et précises." },
  { num: "04", title: "Onglerie", slot: "u-ongles", placeholder: "Photo onglerie", text: "Manucure, pose et nail art." },
];

export const prestations: Prestation[] = [
  { num: "01", title: "Femme", items: ["Coupe & brushing", "Brushing", "Coloration", "Mèches & balayage", "Soin profond", "Chignon & coiffure événement"] },
  { num: "02", title: "Homme", items: ["Coupe homme", "Coupe enfant", "Taille de barbe", "Rasage", "Coupe & barbe"] },
  { num: "03", title: "Soins beauté", items: ["Soin du visage", "Épilation", "Sourcils & restructuration", "Teinture cils et sourcils", "Maquillage"] },
  { num: "04", title: "Onglerie", items: ["Manucure", "Pose de vernis semi-permanent", "Pose gel / capsules", "Remplissage", "Nail art", "Beauté des pieds"] },
];

export const contactRows = [
  { label: "Adresse", value: ["19 Rue de Meaux", "75019 Paris"] },
  { label: "Métro", value: ["Jaurès · Laumière"] },
  { label: "Téléphone", value: ["[à compléter]"] },
  { label: "Horaires", value: ["[à compléter]"] },
];

export const mapsUrl =
  "https://www.google.com/maps/search/?api=1&query=19+Rue+de+Meaux+75019+Paris";
