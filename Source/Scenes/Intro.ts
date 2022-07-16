namespace VisualNovel {
  export async function Intro(): ƒS.SceneReturn {
    console.log("Intro")

    // Background
    await ƒS.Location.show(locations.dorfTag);

    // Sound
    //ƒS.Sound.fade(sound.intro, 0.2, 3, true);

    // Transition
    await ƒS.update(transitions.vignette.duration, transitions.vignette.alpha, transitions.vignette.edge);

    ƒS.Speech.hide();

    // novel page
    ƒS.Text.setClass("page");
    await ƒS.Text.print("Es war einmal ein namenloses kleines Dorf versteckt im tiefen dunklen Schwarzwald. Dessen Dorfbewohner waren ein frommes und tüchtiges Völkchen. Bei Tage arbeiteten sie hart für ihren Lebensunterhalt und erfreuten sich an ihrem unerschütterlichen Zusammenhalt.Bei Nacht jedoch ergab es sich, dass eines Tages ein schreckliches Unheil sie traf. Die düsteren und dunklen Ecken des Schwarzwaldes brachten solch furchtbare und schreckliche Kreaturen wie die Werwölfe hervor. Fortan begab es sich nun, dass solch ein wildes und gar erbarmungsloses Rudel jede Nacht das Dorf heimsuchte und sich einen Dorfbewohner zum Fraße nahm. Angst und Verzweiflung trieben die Dorfbewohner dazu sich Hilfe von Außerhalb zu holen, um dem Schrecken ein Ende zu bereiten.");
    await ƒS.Text.print("So hörten sie nun von euch (Name eingeben) und von euren glorreichen Taten und Kenntnissen der Monster Jagd. Nun liegt es ganz an euch über Glück oder Verderben der Dorfbewohner zu verfügen, wählet weise und findet das Werwolfsrudel bevor ein weiteres Mal die Nacht über das Dorf heranbricht.");

    //dialog
    await ƒS.Speech.tell(characters.narrator, "Ich muss mich wirklich beeilen. Der Tag ist kurz, die Nacht umso länger. Ich denke ich höre mich mal im Dorf nach Hinweisen um. Aber wohin geht es zuerst?");

    // choose first location
    let chooseLocationOptions = {
      dorfplatz: "Mit Dorfdeppp reden",
      gasthaus: "Mit Hauptmann reden",
      haus: "Mit dem Alten reden",
    };

    let chooseLocation = await ƒS.Menu.getInput(chooseLocationOptions, "choicesCSSclass");


    switch (chooseLocation) {
      case chooseLocationOptions.dorfplatz:
        return "Dorfplatz";
      case chooseLocationOptions.gasthaus:
        return "Gasthaus";
      case chooseLocationOptions.haus:
        return "Haus";
    }
  }
}