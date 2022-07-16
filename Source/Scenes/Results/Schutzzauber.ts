namespace VisualNovel {
  export async function Schutzzauber(): ƒS.SceneReturn {
    console.log("Schutzzauber")

    // Background
    await ƒS.Location.show(locations.dorfSchutz);

    //Sound
    //ƒS.Sound.fade(sound.intro, 0.2, 3, true);

    //Transition
    await ƒS.update(transitions.vignette.duration, transitions.vignette.alpha, transitions.vignette.edge);

    ƒS.Speech.hide();

    // novel page
    ƒS.Text.setClass("page");
    await ƒS.Text.print("<stron>Gut gemacht!</strong><br\> Dank des schützenden Heiltrankes konnte das Dorf und seine Bewohner diese Nacht vor dem Unheil bewahrt werden. Alle haben überlebt.<br\><br\><br\><br\> Aber was ist mit der kommenden Nacht? Der Heiltrank ist aufgebraucht und du hast keinerlei Waren mehr, die du dem Heiler zum Tausch anbieten könntest. Vielleicht solltest du jetzt lieber mit anderen Dorfbewohnern sprechen?");

    // choose to TryAgain or to end the Novel
    let gamePlayOptions = {
      end: "Beenden",
      tryAgain: "Nochmal spielen"
    };

    let gamePlayDecision = await ƒS.Menu.getInput(gamePlayOptions, "choice");

    switch (gamePlayDecision) {
      case gamePlayOptions.end:
        return EndOfNovel();
      case gamePlayOptions.tryAgain:
        return Intro();
    };
  }
}