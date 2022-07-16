namespace VisualNovel {
    export async function TryAgain(): ƒS.SceneReturn {
        console.log("TryAgain")

        // Background
        await ƒS.Location.show(locations.dorfTag);

        //Sound
        //ƒS.Sound.fade(sound.intro, 0.2, 3, true);

        //Transition
        await ƒS.update(transitions.vignette.duration, transitions.vignette.alpha, transitions.vignette.edge);

        ƒS.Speech.hide();

    }
}