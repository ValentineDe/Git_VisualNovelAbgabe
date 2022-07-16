namespace VisualNovel {
    export async function NextLocationChoice(): ƒS.SceneReturn {
        console.log("Es wird Nacht");

        //   let nextLocation = {
        //     hassoWald: "Zu Gabi in die Bücherei",
        //     vertreibung: "Zu Wilma an den Hafen",
        //     feier: "Zu Tante Elise ins Café",
        //     rostigesSchwert: "Zu Uwe in die Kneipe",
        //     schutzDorf: "",
        // };


        // background 
        await ƒS.Location.show(locations.dorfNacht);

        // transition
        await ƒS.update(transitions.vignette.duration, transitions.vignette.alpha, transitions.vignette.edge);

        // sound

        // saved Options for Endings
        if (dataForSave.heilerOption) {
            return "Schutzzauber";
        }
        if (dataForSave.seherinOption) {
            return "Unfall";
        }

        if (dataForSave.wolfshundOption) {
            return "Suche";
        }

        if (dataForSave.spionageOption) {
            return "Vertreibung";
        }

        if (dataForSave.schwertOption) {
            return "Hinterhalt";
        }

        if (dataForSave.anklageOption) {
            return "Vertreibung";
        }

        //   if (Object.entries(chooseNextLocationOptions).length == 0) {
        //     return "Outro";
        //   }

        //   let chooseNextLocation = await ƒS.Menu.getInput(nextLocation, "choice");

        //   switch (chooseNextLocation) {
        //     case chooseNextLocationOptions.library:
        //       return "Bücherei";
        //     case chooseNextLocationOptions.harbor:
        //       return "Hafen";
        //     case chooseNextLocationOptions.cafe:
        //       return "Café";
        //     case chooseNextLocationOptions.bar:
        //       return "Kneipe";
    }
}

