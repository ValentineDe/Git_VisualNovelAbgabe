// namespace Template {
//   export import ƒ = FudgeCore;
//   export import ƒS = FudgeStory;

//   console.log("FudgeStory template starting");

//   window.addEventListener("load", start);
//   function start(_event: Event): void {
//     let scenes: ƒS.Scenes = [
//       { scene: Scene, name: "Scene" }
//     ];

//     // start the sequence
//     ƒS.Progress.go(scenes);
//   }
// }

namespace VisualNovel {
  export import ƒ = FudgeCore;
  export import ƒS = FudgeStory;

  console.log("Visual Novel starting");

  // **** DATA THAT WILL BE SAVED (GAME PROGRESS) ****
  export let dataForSave = {
    nameProtagonist: "",
    // aisakaScore: 0,
    // scoreForAisaka: "",
    // randomPoints: 0,
    // pickedAnimationScene: false,
    // pickedInventoryScene: false,
    // pickedMeterScene: false,
    // pickedChoice: false
  };


  window.addEventListener("load", start);
  function start(_event: Event): void {

    // //menu
     gameMenu = ƒS.Menu.create(inGameMenuButtons, buttonFunctionalities, "gameMenuCSSclass");
     buttonFunctionalities("Close");
   
    // **** SCENE HIERARCHY ****
    let scenes: ƒS.Scenes = [
      { scene: Intro, name: "Intro" },
      // { scene: HowToMakeChoices, name: "Choices" },
     // { scene: HowToMakeChoices2, name: "Choices" },
      // { scene: HowToMakeARadio, name: "Radio" },
      // { scene: HowToMakeAMeterBar, name: "Meter bar" },

      // The id field of "next" must be filled with the id of the next wished scene to play
      { id: "Dorfplatz", scene: Dorfplatz, name: "Dorfplatz", next: "gasthaus"},



      // { id: "Inventory Scene", scene: HowToMakeAnInventory, name: "Inventory", next: "Bad Ending" },

      // // Branching paths
      // { id: "Good Ending", scene: GoodEnding, name: "This is a good ending", next: "Empty Scene" },
      // { id: "Bad Ending", scene: BadEnding, name: "This is a bad ending", next: "Empty Scene" },

      // // Empty ending scene to stop the program
      // { id: "Empty Scene", scene: Empty, name: "END" }

    ];

    let uiElement: HTMLElement = document.querySelector("[type=interface]");
    dataForSave = ƒS.Progress.setData(dataForSave, uiElement);
  

    // start the sequence
    ƒS.Progress.go(scenes);
  }

}