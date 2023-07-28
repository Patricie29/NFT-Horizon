export interface ExploreNFT {
    id: string;
    imgUrl: string;
    title: string;
}

export interface NewFeature {
    imgUrl: string;
    title: string;
    subtitle: string;
}

export interface Insight {
    imgUrl: string;
    title: string;
    subtitle: string;
}

export interface Social {
    name: string;
    url: string;
}

export const exploreWorlds: ExploreNFT[] = [
    {
        id: "nft-1",
        imgUrl: "/nft/jrny.jpeg",
        title: "Villagers of XOLO",
    },
    {
        id: "nft-2",
        imgUrl: "/nft/bayc.png",
        title: "Bored Ape Yacht Club",
    },
    {
        id: "nft-3",
        imgUrl: "/nft/mph.jpeg",
        title: "My Pet Hooligan",
    },
    {
        id: "nft-5",
        imgUrl: "/nft/neotokyo.png",
        title: "Neo Tokyo Citizens",
    },
    {
        id: "nft-4",
        imgUrl: "/nft/impostor.jpeg",
        title: "Impostors Genesis Aliens",
    },
    // {
    //   id: "nft-5",
    //   imgUrl: "/mutantApe2.png",
    //   title: "Mutant Ape Yacht Club",
    // },

];

export const startingFeatures: string[] = [
    "Find a world that suits you and you want to enter",
    "Enter the world by reading basmalah to be safe",
    "No need to beat around the bush, just stay on the gas and have fun",
];

export const newFeatures: NewFeature[] = [
    {
        imgUrl: "/vrpano.svg",
        title: "A new world",
        subtitle:
            "we have the latest update with new world for you to try never mind",
    },
    {
        imgUrl: "/headset.svg",
        title: "More realistic",
        subtitle:
            "In the latest update, your eyes are narrow, making the world more realistic than ever",
    },
];

export const insights: Insight[] = [
    {
        imgUrl: "/planet-06.png",
        title: "The launch of the Metaverse makes Elon musk ketar-ketir",
        subtitle:
            "Magna etiam tempor orci eu lobortis elementum nibh tellus molestie. Diam maecenas sed enim ut sem viverra alique.",
    },
    {
        imgUrl: "/planet-07.png",
        title: "7 tips to easily master the madness of the Metaverse",
        subtitle:
            "Vitae congue eu consequat ac felis donec. Et magnis dis parturient montes nascetur ridiculus mus. Convallis tellus id interdum",
    },
    {
        imgUrl: "/planet-08.png",
        title: "With one platform you can explore the whole world virtually",
        subtitle:
            "Quam quisque id diam vel quam elementum. Viverra nam libero justo laoreet sit amet cursus sit. Mauris in aliquam sem",
    },
];

export const socials: Social[] = [
    {
        name: "twitter",
        url: "/twitter.svg",
    },
    {
        name: "linkedin",
        url: "/linkedin.svg",
    },
    {
        name: "instagram",
        url: "/instagram.svg",
    },
    {
        name: "facebook",
        url: "/facebook.svg",
    },
];
