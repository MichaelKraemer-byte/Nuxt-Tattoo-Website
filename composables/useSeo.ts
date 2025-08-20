// ~/composables/useSeo.ts
import { useHead } from "#imports";

export function useSeoIndex() {
  useHead({
    title: "MKC Tattoo Art – Spiritual, Mythology & Folklore Tattoo Art",
    meta: [
      {
        name: "description",
        content:
          "MKC Tattoo Art erschafft einzigartige Tattoos inspiriert von Fantasy, Mythologie und Folklore. Kreaturen, spirituelle Ornamente und persönliche Kunstwerke auf deiner Haut – individuell und mit Liebe zum Detail.",
      },
      {
        name: "keywords",
        content:
          "Tattoo, Fantasy Tattoos, Mythologie, Folklore, Spirituelle Tattoos, MKC Tattoo Art, Tattoo Studio",
      },
      { name: "author", content: "MKC Tattoo Art" },
      {
        property: "og:title",
        content: "MKC Tattoo Art – Fantasy, Mythology & Folklore Tattoo Studio",
      },
      {
        property: "og:description",
        content:
          "Einzigartige Tattoos, die Kreaturen, Natur, Spiritualität und persönliche Geschichten auf deiner Haut vereinen. Willkommen bei MKC Tattoo Art.",
      },
      {
        property: "og:image",
        content: "https://mkc-tattooart.com/img/freshTattoos/15.webp",
      },
      {
        name: "twitter:image",
        content: "https://mkc-tattooart.com/img/freshTattoos/15.webp",
      },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  });
}

// ~/composables/useSeoGallery.ts

export function useSeoGallery() {
  useHead({
    title: "Galerie – MKC Tattoo Art",
    meta: [
      {
        name: "description",
        content:
          "Entdecke die Galerie von MKC Tattoo Art – einzigartige Tattoos inspiriert von Fantasy, Mythologie und Folklore. Lass dich von kreativen Kunstwerken und detailverliebten Designs begeistern.",
      },
      {
        name: "keywords",
        content:
          "Tattoo Galerie, Fantasy Tattoos, Mythologie Tattoos, Folklore Tattoos, MKC Tattoo Art, Tattoo Kunst",
      },
      { property: "og:title", content: "Galerie – MKC Tattoo Art" },
      {
        property: "og:description",
        content:
          "Eine Auswahl an atemberaubenden Tattoos von MKC Tattoo Art, die Kreaturen, Natur und spirituelle Motive kunstvoll vereinen.",
      },
      {
        property: "og:image",
        content: "https://mkc-tattooart.com/img/freshTattoos/15.webp",
      },
      {
        name: "twitter:image",
        content: "https://mkc-tattooart.com/img/freshTattoos/15.webp",
      },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  });
}

export function useSeoAbout() {
  useHead({
    title: "Über Mich – MKC Tattoo Art",
    meta: [
      {
        name: "description",
        content:
          "Lerne Mika kennen – Tätowierer, Künstler und Geschichtenerzähler bei MKC Tattoo Art. Erfahre mehr über seinen Werdegang, seine Inspirationen und seine besondere Verbindung zu Kunst und Gegenwärtigkeit.",
      },
      {
        name: "keywords",
        content:
          "Über Mika, Tätowierer, Künstler, MKC Tattoo Art, Kunst & Gegenwärtigkeit, Tattoo Studio",
      },
      { property: "og:title", content: "Über Mich – MKC Tattoo Art" },
      {
        property: "og:description",
        content:
          "Mika ist Künstler und Tätowierer mit einer tiefen Verbindung zu Spiritualität, Natur und Kunst. Erfahre mehr über seinen Weg und seine Philosophie bei MKC Tattoo Art.",
      },
      {
        property: "og:image",
        content: "https://mkc-tattooart.com/img/freshTattoos/15.webp",
      },
      {
        name: "twitter:image",
        content: "https://mkc-tattooart.com/img/freshTattoos/15.webp",
      },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  });
}
