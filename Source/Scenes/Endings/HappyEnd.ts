namespace VisualNovel {
    export async function HappyEnding(): ƒS.SceneReturn {
        console.log("HapppyEnding")

        // Background
        await ƒS.Location.show(locations.feier);

        //Sound
        //ƒS.Sound.fade(sound.intro, 0.2, 3, true);

        //Transition
        await ƒS.update(transitions.vignette.duration, transitions.vignette.alpha, transitions.vignette.edge);

        ƒS.Speech.hide();

    }
}