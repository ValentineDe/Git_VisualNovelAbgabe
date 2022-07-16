namespace VisualNovel {
    
    // **** MENÜ ****
  // Buttons
 export let inGameMenuButtons = {
    save: "Save",
    load: "Load",
    close: "Close",
    credits: "Credits"
  };

  export let gameMenu: ƒS.Menu;

  // true = offen; false = geschlossen
  export let menuIsOpen: boolean = true;


  export async function buttonFunctionalities(_option: string): Promise<void> {
    console.log(_option);
    switch (_option) {
      case inGameMenuButtons.save:
        await ƒS.Progress.save();
        break;
      case inGameMenuButtons.load:
        await ƒS.Progress.load();
        break;
      case inGameMenuButtons.close:
        gameMenu.close();
        menuIsOpen = false;
        break;
      case inGameMenuButtons.credits:
        showCredits();
    }
  }

  // Menu shortcuts
  document.addEventListener("keydown", hndKeyPress);
  async function hndKeyPress(_event: KeyboardEvent): Promise<void> {
    switch (_event.code) {
      case ƒ.KEYBOARD_CODE.F8:
        console.log("Save");
        await ƒS.Progress.save();
        break;
      case ƒ.KEYBOARD_CODE.F9:
        console.log("Load");
        await ƒS.Progress.load();
        break;
      case ƒ.KEYBOARD_CODE.M:
        if (menuIsOpen) {
          console.log("Close");
          gameMenu.close();
          menuIsOpen = false;
        }
        else {
          console.log("Open");
          gameMenu.open();
          menuIsOpen = true;
        }
        break;


    //   // Inventory shortcuts
    //   case ƒ.KEYBOARD_CODE.I:
    //     console.log("open inventory");
    //     await ƒS.Inventory.open();
    //     break;
    //   case ƒ.KEYBOARD_CODE.ESC:
    //     console.log("close inventory");
    //     await ƒS.Inventory.open();
    //     ƒS.Inventory.close();
    //     break;
    }
  }
}