namespace VisualNovel {
    export async function BadEnding(): ƒS.SceneReturn {
        console.log("BadEnding")

        // Background
        await ƒS.Location.show(locations.dorfNacht);

        //Sound
        //ƒS.Sound.fade(sound.intro, 0.2, 3, true);

        //Transition
        await ƒS.update(transitions.vignette.duration, transitions.vignette.alpha, transitions.vignette.edge);

        //Werwolf appears
        await ƒS.Character.show(characters.werwolf, characters.werwolf.pose.wuetend, ƒS.positionPercent(70, 100));

        ƒS.Speech.hide();

    }
}