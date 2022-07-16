namespace VisualNovel {
  export import ƒ = FudgeCore;
  export import ƒS = FudgeStory;

  console.log("Visual Novel starting");

  // **** DATA THAT WILL BE SAVED (GAME PROGRESS) ****
  export let dataForSave = {
    nameProtagonist: "",
    
    // sceneHaus: false,
    // sceneDorfplatz: false,
    // sceneGasthaus: false,

    //Story Options
    heilerOption: false,
    seherinOption: false,
    wolfshundOption: false,
    spionageOption: false,
    schwertOption: false,
    anklageOption: false,
  };


  window.addEventListener("load", start);

  function start(_event: Event): void {

    //menu
     gameMenu = ƒS.Menu.create(inGameMenuButtons, buttonFunctionalities, "gameMenu");
    
   
    // **** SCENE HIERARCHY ****
    let scenes: ƒS.Scenes = [
      { scene: Dorfplatz, name: "Intro" },

      // The id field of "next" must be filled with the id of the next wished scene to play
      { id: "Dorfplatz", scene: Dorfplatz, name: "Dorfplatz"},
      { id: "Gasthaus", scene: Gasthaus, name: "Gasthaus"},
      { id: "Haus", scene: Haus, name: "Haus"},
    
      // // Branching paths (Results)
      { id: "Schutzzauber", scene: Schutzzauber, name: "This is a good result" },
      { id: "Suche", scene: Suche, name: "This is a good result"},
      { id: "Unfall", scene: Unfall, name: "This is a bad result"},
      { id: "Vertreibung", scene: Suche, name: "This is a bad result"},

      // // Branching paths (Endings)
      { id: "BadEnding", scene: BadEnding, name: "This is a bad ending", next: "EndOfNovel"},
      { id: "HappyEnding", scene: BadEnding, name: "This is a good ending", next: "EndOfNovel"},
      { id: "TryAgain", scene: BadEnding, name: "You get a new Chance", next: "Intro"},
      
      // // Empty ending scene to stop the program
      { id: "EndOfNovel", scene: EndOfNovel, name: "END" },

    ];

    let uiElement: HTMLElement = document.querySelector("[type=interface]");
    dataForSave = ƒS.Progress.setData(dataForSave, uiElement);
  

    // start the sequence
    ƒS.Progress.go(scenes);
  }

}