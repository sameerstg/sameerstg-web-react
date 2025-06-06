"use server";
import prisma from "@/lib/prisma";
export const titles = [
  { title: "VR Apps", link: "/" },
  {
    title: "My Games",
    link: "https://play.google.com/store/apps/developer?id=Sameerstg",
  },
  { title: "3D Models", link: "/" },
  {
    title: "Vr Games Of Which I Was Part Of",
    link: "https://play.google.com/store/apps/developer?id=Sameerstg",
  },
  {
    title: "Games Of Which I Was Part Of",
    link: "https://play.google.com/store/apps/developer?id=Sameerstg",
  },
  { title: "My Arts", link: "https://www.artstation.com/sameerstg5" },
  { title: "3D Render", link: "/" },
];
export const games = [
  {
    image:
      "https://play-lh.googleusercontent.com/fSk5Assdc6kdjk7s8DS34Q87pa1N8HrklYe6AFYdQjLCWp8GaSi2ZZKrdwAZzJthyg=w2560-h1440-rw",
    link: "https://play.google.com/store/apps/details?id=com.Sameerstg.numberPuzzleGame",
  },
  {
    image: "https://i.imgur.com/Z82HRmb.png",
    link: "https://sameerstg.itch.io/crypto-jakk",
  },
  {
    image:
      "https://play-lh.googleusercontent.com/q_gbKbYMl7pcaQCwEdwgcCVOclBjtHQPTAA6-rTfY9Z2Y8hITCGLY-FeQISc4cfUXA=w2560-h1440-rw",
    link: "https://play.google.com/store/apps/details?id=com.Sameerstg.BeLeet",
  },
  {
    image: "https://i.imgur.com/9PVFvXF.png",
    link: "https://drive.google.com/file/d/1ElwWHQlg3e_n2CrdOtZc_oZwu3iRrnae/view?usp=sharing",
  },
  {
    image: "https://i.imgur.com/2b0zyuQ.png",
    link: "https://sameerstg.itch.io/card-game",
  },
  {
    image:
      "https://play-lh.googleusercontent.com/q_gbKbYMl7pcaQCwEdwgcCVOclBjtHQPTAA6-rTfY9Z2Y8hITCGLY-FeQISc4cfUXA=w2560-h1440-rw",
    link: "https://play.google.com/store/apps/details?id=com.Sameerstg.BeLeet",
  },
  {
    image:
      "https://play-lh.googleusercontent.com/nwf3-CXdv6f4Ap1Z1NimoBVvsl-ufCctTiiOw6ykCJXoUc_6YYpRfXyD43xE-E2cUUY=w2560-h1440-rw",
    link: "https://play.google.com/store/apps/details?id=com.sameerstg",
  },
  {
    image: "https://i.imgur.com/E3qIUDf.png",
    link: "https://sameerstg.itch.io/bog",
  },
];
export const arts = [
  {
    image:
      "https://cdna.artstation.com/p/assets/images/images/060/431/348/large/sameerstg-danucd-2.jpg?1678552654",
    link: "https://www.artstation.com/artwork/lDR1lO",
  },
  {
    image:
      "https://cdnb.artstation.com/p/assets/images/images/060/431/169/large/sameerstg-maggie.jpg?1678552359",
    link: "https://www.artstation.com/artwork/JveaOD",
  },
  {
    image:
      "https://cdna.artstation.com/p/assets/images/images/060/431/084/large/sameerstg-lurart.jpg?1678552171",
    link: "https://www.artstation.com/artwork/PXeaG1",
  },
  {
    image:
      "https://cdnb.artstation.com/p/assets/images/images/060/431/021/large/sameerstg-room.jpg?1678552065",
    link: "https://www.artstation.com/artwork/49Xoyk",
  },
];
export const partOfGames = [
  {
    image:
      "https://play-lh.googleusercontent.com/aMejqYrj5ENS1rivYn_cmX2mQdmmg-GnHuFl8vK8KWQCE1qgvGjopqcrI5s5Ro5MBGo=w2560-h1440-rw",
    link: "https://play.google.com/store/apps/developer?id=Eviar&hl=en&gl=US",
  },
  {
    image:
      "https://play-lh.googleusercontent.com/TEOxhBWGCWdLWv1Z6xhAiHgVAkPjIo7QiaoDz4D13CdPe8qx_XICo8ozDlvBt-xx9Q=w2560-h1440-rw",
    link: "https://play.google.com/store/apps/details?id=com.Eviar.Freeziar&hl=en&gl=US",
  },
];

export const vrPartOfGames = [
  {
    image: "https://i.imgur.com/KUxHOVS.png",
    link: "https://www.meta.com/experiences/7159569204093541/#?",
  },
];
export const renderIds = ["5mHIdHsT7AE"];
export const vrApps = ["-mbLgfKteow"];
export const models = [
  "https://sketchfab.com/models/c8126f28638d4c6c9670e37f8a03231a/embed",
  "https://sketchfab.com/models/95dd9c5d733643289c40ea0cd121e539/embed",
  "https://sketchfab.com/models/5f2e511826954fe29e294ed1f0dca24c/embed",
  "https://sketchfab.com/models/c4d144d532f943a38072c0bf5912037c/embed",
];
export async function seed() {
  console.log("seeding....");
  
  // return;
  for (const item of titles) {
    await prisma.portfolio.create({ data: item });
  }
  games.forEach(async (game) => {
    await prisma.portfolioItem.create({
      data: {
        link: game.link,
        content: game.image,
        type: "Image",
        Portfolio: {
          connect: {
            title: "My Games",
          },
        },
      },
    });
  });
  arts.forEach(async (art) => {
    await prisma.portfolioItem.create({
      data: {
        link: art.link,
        content: art.image,
        type: "Image",
        Portfolio: {
          connect: {
            title: "My Arts",
          },
        },
      },
    });
  });
  partOfGames.forEach(async (partOfGame) => {
    await prisma.portfolioItem.create({
      data: {
        link: partOfGame.link,
        content: partOfGame.image,
        type: "Image",
        Portfolio: {
          connect: {
            title: "Games Of Which I Was Part Of",
          },
        },
      },
    });
  });
  vrPartOfGames.forEach(async (vr) => {
    await prisma.portfolioItem.create({
      data: {
        link: vr.link,
        content: vr.image,
        type: "Image",
        Portfolio: {
          connect: {
            title: "Vr Games Of Which I Was Part Of",
          },
        },
      },
    });
  });
  renderIds.forEach(async (render) => {
    await prisma.portfolioItem.create({
      data: {
        link: "/",
        content: render,
        type: "Video",
        Portfolio: {
          connect: {
            title: "3D Render",
          },
        },
      },
    });
  });
  vrApps.forEach(async (vr) => {
    await prisma.portfolioItem.create({
      data: {
        link: "/",
        content: vr,
        type: "Video",
        Portfolio: {
          connect: {
            title: "VR Apps",
          },
        },
      },
    });
  });
  models.forEach(async (vr) => {
    await prisma.portfolioItem.create({
      data: {
        link: "/",
        content: vr,
        type: "3D Model",
        Portfolio: {
          connect: {
            title: "3D Models",
          },
        },
      },
    });
  });
}
export async function main() {
  seed();
}
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
