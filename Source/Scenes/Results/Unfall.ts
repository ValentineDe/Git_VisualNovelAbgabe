namespace VisualNovel {
    export async function Unfall(): ƒS.SceneReturn {
      console.log("Unfall")
  
      // Background
      await ƒS.Location.show(locations.dorfSchutz);

      //Sound
      //ƒS.Sound.fade(sound.intro, 0.2, 3, true);

      //Transition
      await ƒS.update(transitions.vignette.duration, transitions.vignette.alpha, transitions.vignette.edge);
      
      ƒS.Speech.hide();

    let pages: string[] = ["<strong>Gut gemacht!</strong><br\>Dank des schützenden Heiltrankes konnte das Dorf diese Nacht vor dem Unheil bewahrt werden. Alle haben überlebt. Aber was ist mit der kommenden Nacht? Der Heiltrank ist aufgebraucht und du hast keinerlei Waren mehr, die du dem Heiler zum Tausch anbieten könntest. Vielleicht solltest du jetzt lieber mit anderen Dorfbewohnern sprechen?<br\><br\><br\><br\><br\><br\><br\>"];
    let current: number = 0;
    let flip = { back: "Dorfdepp", next: "Haptmann", Close: "Close" };
    let choice: string;
    ƒS.Text.addClass("flip");
      switch (choice) {
        case flip.back: current = Math.max(0, current - 1); break;
        case flip.next: current = Math.min(2, current + 1); break;
      }
    ƒS.Text.close();
      
      // next location
      return "TryAgain";
    }
  }