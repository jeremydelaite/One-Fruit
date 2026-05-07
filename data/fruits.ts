import type { DevilFruit } from "@/types/fruit"

// Devil fruits
export const fruits: DevilFruit[] = [
  {
    id: "gomu-gomu-no-mi",
    names: {
      japanese: "Gomu Gomu no Mi",
      english: "Gum-Gum Fruit",
      french: "Fruit du Caoutchouc",
    },
    type: "Paramecia",
    zoanSubtype: null,
    element: "Caoutchouc",
    status: "acquis",
    users: [
      {
        name: "Monkey D. Luffy",
        nameEn: "Monkey D. Luffy",
        isCurrent: true,
        chapter: 1,
      },
    ],
    abilities: {
      fr: "Transforme le corps en caoutchouc, rendant l'utilisateur insensible aux chocs et capable d'étirer ses membres à l'infini.",
      en: "Transforms the body into rubber, making the user immune to blunt attacks and able to stretch their limbs infinitely.",
    },
    firstAppearance: { chapter: 1, arc: "Romance Dawn" },
    isAwakened: true,
    spoiler: false,
  },
  {
    id: "mera-mera-no-mi",
    names: {
      japanese: "Mera Mera no Mi",
      english: "Flame-Flame Fruit",
      french: "Fruit du Feu",
    },
    type: "Logia",
    zoanSubtype: null,
    element: "Feu",
    status: "acquis",
    users: [
      {
        name: "Portgas D. Ace",
        nameEn: "Portgas D. Ace",
        isCurrent: false,
        chapter: 159,
      },
      {
        name: "Sabo",
        nameEn: "Sabo",
        isCurrent: true,
        chapter: 731,
      },
    ],
    abilities: {
      fr: "Permet de créer, contrôler et se transformer en feu à volonté.",
      en: "Allows the user to create, control and transform into fire at will.",
    },
    firstAppearance: { chapter: 71, arc: "Loguetown" },
    isAwakened: false,
    spoiler: false,
  },
  {
    id: "hito-hito-no-mi-nika",
    names: {
      japanese: "Hito Hito no Mi, Model: Nika",
      english: "Human-Human Fruit, Model: Nika",
      french: "Fruit Humain, Modèle : Nika",
    },
    type: "Zoan",
    zoanSubtype: "Mythique",
    element: null,
    status: "acquis",
    users: [
      {
        name: "Monkey D. Luffy",
        nameEn: "Monkey D. Luffy",
        isCurrent: true,
        chapter: 1044,
      },
    ],
    abilities: {
      fr: "Confère les pouvoirs du dieu du soleil Nika, transformant le corps en caoutchouc avec une liberté absolue et une puissance illimitée.",
      en: "Grants the powers of the sun god Nika, turning the body to rubber with absolute freedom and limitless power.",
    },
    firstAppearance: { chapter: 1044, arc: "Wano" },
    isAwakened: true,
    spoiler: true,
  },
  {
    id: "yami-yami-no-mi",
    names: {
      japanese: "Yami Yami no Mi",
      english: "Dark-Dark Fruit",
      french: "Fruit des Ténèbres",
    },
    type: "Logia",
    zoanSubtype: null,
    element: "Ténèbres",
    status: "acquis",
    users: [
      {
        name: "Marshall D. Teach",
        nameEn: "Marshall D. Teach",
        isCurrent: true,
        chapter: 440,
      },
    ],
    abilities: {
      fr: "Contrôle les ténèbres et la gravité, capable d'annuler les pouvoirs des autres fruits du démon au contact.",
      en: "Controls darkness and gravity, capable of nullifying other Devil Fruit powers on contact.",
    },
    firstAppearance: { chapter: 440, arc: "Impel Down" },
    isAwakened: false,
    spoiler: false,
  },
  {
    id: "ope-ope-no-mi",
    names: {
      japanese: "Ope Ope no Mi",
      english: "Op-Op Fruit",
      french: "Fruit de l'Opération",
    },
    type: "Paramecia",
    zoanSubtype: null,
    element: "Espace opératoire",
    status: "acquis",
    users: [
      {
        name: "Trafalgar D. Water Law",
        nameEn: "Trafalgar D. Water Law",
        isCurrent: true,
        chapter: 498,
      },
    ],
    abilities: {
      fr: "Crée une sphère opératoire dans laquelle l'utilisateur peut manipuler tout ce qui s'y trouve, déplacer organes et corps à volonté.",
      en: "Creates an operating sphere in which the user can manipulate everything inside, moving organs and bodies at will.",
    },
    firstAppearance: { chapter: 498, arc: "Sabaody" },
    isAwakened: false,
    spoiler: false,
  },
]