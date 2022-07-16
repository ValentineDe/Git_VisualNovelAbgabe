namespace VisualNovel {
    export async function Dorfplatz(): ƒS.SceneReturn {
        console.log("Dorfplatz");

        // actual location
       // dataForSave.sceneDorfplatz = true;

        // background 
        await ƒS.Location.show(locations.dorfplatz);

        // transition
        await ƒS.update(transitions.vignette.duration, transitions.vignette.alpha, transitions.vignette.edge);

        //sound

        // character Dorfdepp
        await ƒS.Character.show(characters.dorfdepp, characters.dorfdepp.pose.neutral, ƒS.positionPercent(70, 100));
        ƒS.update();

        // dialog
        await ƒS.Speech.tell(characters.dorfdepp, "Ah unser Werwolf Schlächter!");
        await ƒS.Speech.tell(characters.dorfdepp, "Habt Ihr denn schon einen Plan wie man das Untier an die Leine bringt? Schon mal mit „Hier, Sitz und Platz versucht?");      
        await ƒS.Speech.tell(characters.narrator, "Noch nicht.");
        await ƒS.Speech.tell(characters.dorfdepp, "Ich sag ja schon immer, dass man mal Bauer Heinrich und seiner Töle von Hund genauer unter die Lupe nehmen sollte.");     
        await ƒS.Speech.tell(characters.dorfdepp, "Das weiß doch selbst ich: der Hund stammt vom Wolf ab! Und dieser Hasso ist ein besonderer Satansbraten! Der macht bestimmt gemeinsame Sache mit denen!");
        
        // show item Pudel
        await ƒS.Character.show(items.pudel, items.pudel.pose.speechbubble, ƒS.positionPercent(70, 100));
        ƒS.update();

        // dialog
        await ƒS.Speech.tell(characters.narrator, "Der sieht mir aber nicht gefährlich aus?");

        // hide item Pudel
        await ƒS.Character.hide(items.pudel);

        // change pose Dorfdepp
        await changePose(characters.dorfdepp, "wuetend", ƒS.positionPercent(25, 100));

        // dialog
        await ƒS.Speech.tell(characters.dorfdepp, "Das ist alles nur Tarnung …man… der hat mich doch glatt gebissen als ich mir Bauer Heinrichs Schinken…äh…");

        // change pose Dorfdepp
        await changePose(characters.dorfdepp, "nachdenklich", ƒS.positionPercent(25, 100));

        // dialog
        await ƒS.Speech.tell(characters.dorfdepp, "…“geborgt“ hatte.");

        // change pose Dorfdepp
        await changePose(characters.dorfdepp, "neutral", ƒS.positionPercent(25, 100));

        // dialog
        await ƒS.Speech.tell(characters.dorfdepp, "Ein richtiger Wolfshund eben. Der weiß bestimmt, wo sich das Rudel aufhält.");
        await ƒS.Speech.tell(characters.narrator, "Ok außer der Wolfshund Theorie…. Hast du noch andere Hinweise für mich?");

        // change pose Dorfdepp
        await changePose(characters.dorfdepp, "wuetend", ƒS.positionPercent(25, 100));

        // dialog
        await ƒS.Speech.tell(characters.dorfdepp, "He? Wer ist denn nun der Profi hier? Ich oder du?");

        // change pose Dorfdepp
        await changePose(characters.dorfdepp, "neutral", ƒS.positionPercent(25, 100));
        
        // dialog
        await ƒS.Speech.tell(characters.dorfdepp, "Naja, ich will ja mal nicht so sein, nicht? Du scheinst mir ja ziemlich hilflos zu sein.");
        await ƒS.Speech.tell(characters.dorfdepp, "Du scheinst mir ja ziemlich hilflos zu sein.");

        // change pose Dorfdepp
        await changePose(characters.dorfdepp, "nachdenklich", ƒS.positionPercent(25, 100));

        // dialog
        await ƒS.Speech.tell(characters.dorfdepp, "Frag doch mal das kleine Mädchen da, ob sie für dich in der Nacht die Augen aufhält.");
        await ƒS.Speech.tell(characters.dorfdepp, "Die Göre spioniert nachts gerne mal rum und ist flink wie ein gerissenes Wiesel. Erwischt wurde sie noch nie.");
      
        // change pose Alte
        await changePose(characters.dorfdepp, "neutral", ƒS.positionPercent(25, 100));

        // dialog
         await ƒS.Speech.tell(characters.dorfdepp,"Aber wie du willst.");

        let dialogueElementAnswersDorfplatz = {
            iChooseOptionA: "Hasso den „Wolfshund“ aufsuchen und beobachten.",
            iChooseOptionB: "Das kleine Mädchen bitten die Nacht über zu spionieren.",
        };

        // choosing dialog options

        let dialogueElementDorfplatz = await ƒS.Menu.getInput(dialogueElementAnswersDorfplatz, "choicesCSSclass");

        switch (dialogueElementDorfplatz) {
            case dialogueElementAnswersDorfplatz.iChooseOptionA:
                // continue path here
                dataForSave.wolfshundOption = true;
                console.log(dataForSave.wolfshundOption);
                ƒS.Speech.clear();
                return "Nacht";
                break;

            case dialogueElementAnswersDorfplatz.iChooseOptionB:
                // continue path here
                dataForSave.spionageOption = true;
                console.log(dataForSave.spionageOption);
                ƒS.Speech.clear();
                return "Nacht";
                break;
        }


    };
}