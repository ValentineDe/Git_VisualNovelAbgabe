namespace VisualNovel {
//   // **** CHARACTERS ****
//   // characters is declared here as well as initialized
//   export let characters = {
//     narrator: {
//       name: ""
//     },
//     protagonist: {
//       name: ""
//     },
//     aisaka: {
//       name: "Aisaka",
//       origin: ƒS.ORIGIN.BOTTOMCENTER,
//       pose: {
//         angry: "Images/Characters/aisaka_angry.png",
//         happy: "Images/Characters/aisaka_happy.png",
//         upset: ""
//       }
//     },
//     kohana: {
//       name: "Kohana",
//       origin: ƒS.ORIGIN.BOTTOMCENTER,
//       pose: {
//         angry: "",
//         happy: "Images/Characters/kohana_happy.png",
//         upset: "Images/Characters/kohana_upset.png"
//       }
//     }
//   };

   

    export let characters = {

        narrator: {
            name: "",
            origin: ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
            }
        },

        alte: {
            name: "Der Alte",
            origin: ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                neutral: "./Images/Characters/alte_neutral.png",
                belehrend: "./Images/Characters/alte_belehrend.png",
                nachdenklich: "./Images/Characters/alte_nachdenklich.png",
            },
        },

        dorfdepp: {
            name: "Dorfdepp",
            origin: ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                neutral: "./Images/Characters/dorfdepp_neutral.png",
                wuetend: "./Images/Characters/dorfdepp_wütend.png",
                nachdenklich: "./Images/Characters/dorfdepp_nachdenklich.png",
            },
        },

        hauptmann: {
            name: "Hauptmann",
            origin: ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                neutral: "./Images/Characters/hauptmann_neutral.png",
                wuetend: "./Images/Characters/hauptmann_wütend.png",
                besorgt: "./Images/Characters/hauptmann_besorgt.png",

            },
        },

    };

    export async function changePose(character: ƒS.CharacterDefinition, pose: string, position: ƒ.Vector2) {
        await ƒS.Character.hide(character);
        await ƒS.Character.show(character, character.pose[pose], position);
        await ƒS.update(0.2);
    };

}