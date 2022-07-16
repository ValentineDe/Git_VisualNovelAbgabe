namespace VisualNovel {

    // **** CHARACTERS ****

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

        werwolf: {
            name: "Werwolf",
            origin: ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                wuetend: "./Images/Characters/werwolf.png",
            },
        },

    };

    export async function changePose(character: ƒS.CharacterDefinition, pose: string, position: ƒ.Vector2) {
        await ƒS.Character.hide(character);
        await ƒS.Character.show(character, character.pose[pose], position);
        await ƒS.update(0.2);
    };

}