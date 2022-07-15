namespace VisualNovel {
    export async function Intro(): ƒS.SceneReturn {
      console.log("Intro");

      ƒS.Speech.hide();
      // show background
      await ƒS.Location.show(locations.dorfTag);
      await ƒS.update(transitions.vignette.duration, transitions.vignette.alpha, transitions.vignette.edge);
      //choose next location
      //return "dorfplatz";
      ƒS.Speech.hide();
    }
  }