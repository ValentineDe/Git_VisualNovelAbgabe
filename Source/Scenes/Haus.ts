namespace VisualNovel {
    export async function Haus(): ƒS.SceneReturn {
        console.log("Haus");

        // actual location
        dataForSave.sceneHaus = true;

        // background 
        await ƒS.Location.show(locations.hausAlte);

        // transition
        await ƒS.update(transitions.vignette.duration, transitions.vignette.alpha, transitions.vignette.edge);

        //sound

        // character der Alte
        await ƒS.Character.show(characters.alte, characters.alte.pose.neutral, ƒS.positionPercent(70, 100));
        ƒS.update();

        // dialog
        await ƒS.Speech.tell(characters.alte, "Ah du musst .. sein. Wir haben schon viel über dich gehört. Ich hoffe du kannst uns von dieser Plage befreien");
        await ƒS.Speech.tell(characters.narrator, "Kannst du mir vielleicht einen Rat geben, wo ich anfangen soll zu suchen?");

        // change pose Alte
        await changePose(characters.alte, "belehrend", ƒS.positionPercent(25, 100));

        // dialog
        await ƒS.Speech.tell(characters.alte, "Ich würde nicht versuchen den Helden zu spielen.");
        await ƒS.Speech.tell(characters.alte, "Werwölfe fürchten weder Axt noch Schwert. Sie sind in der Nacht aktiv, sehen besser, hören besser als jeder Mensch. Blitzschnell greifen sie an und ehe man es sich versieht, ist es zu Ende mit einem.");
        await ƒS.Speech.tell(characters.alte, "Du hast keine Chance.");

        // change pose Alte
        await changePose(characters.alte, "neutral", ƒS.positionPercent(25, 100));

        // dialog
        await ƒS.Speech.tell(characters.narrator, "Irgendwie muss ich sie aber zur Strecke bringen! Sie werden sich sonst heute Nacht einen weiteren holen!");

        // change pose Alte
        await changePose(characters.alte, "nachdenklich", ƒS.positionPercent(25, 100));

        // dialog
        await ƒS.Speech.tell(characters.alte, "Mit reiner Muskelkraft kommst du nicht weit, aber mit List und Tücke ist dir geholfen.");
        await ƒS.Speech.tell(characters.alte, "Was fürchtet der Werwolf mehr denn je?");
        await ƒS.Speech.tell(characters.alte, "Ist es nicht das Silber?");

        // change pose Alte
        await changePose(characters.alte, "belehrend", ƒS.positionPercent(25, 100));

        // dialog
        await ƒS.Speech.tell(characters.alte, "Ein mit Silber versetzter Zaubertrank könnte uns für diese Nacht schützen, doch nur einer vermag solch einen Trank zuzubereiten.");
        await ƒS.Speech.tell(characters.alte, "Der Heiler am Dorfplatz bietet seine Dienste jedoch nicht umsonst an. Deine Waffen und dein teures Gewand sollten aber ausreichend sein.");

        // change pose Alte
        await changePose(characters.alte, "neutral", ƒS.positionPercent(25, 100));

        //dialog
        await ƒS.Speech.tell(characters.alte, "Bist du bereit diese abzugeben?");
        await ƒS.Speech.tell(characters.narrator, "Gibt es denn nur diese eine Lösung guter Mann?");
        await ƒS.Speech.tell(characters.narrator, "Ungern würde ich mich entblößt und wehrlos dem Rudel entgegen stellen...");

        // change pose Alte
        await changePose(characters.alte, "nachdenklich", ƒS.positionPercent(25, 100));

        // dialog
        await ƒS.Speech.tell(characters.alte, "Vielleicht kann dir die alte Seherin helfen? Sie sieht und weiß alles.");
        await ƒS.Speech.tell(characters.alte, "Sie könnte dir sagen wo das Rudel haust. Am Tag könntest du das wehrlose Pack in seinem Bau dann überraschen.");
        await ƒS.Speech.tell(characters.alte, "Doch es gibt ein Problem:");
        await ƒS.Speech.tell(characters.alte, "Das Haus der Seherin liegt einen weiten Fußmarsch von hier entfernt am Waldesrand. ");
        await ƒS.Speech.tell(characters.alte, "Wenn du dich beeilst, könntest du es noch vor der Nacht schaffen, aber gewiss ist das nicht. Wofür vermagst du dich nun zu entscheiden?");

        // change pose Alte
        await changePose(characters.alte, "neutral", ƒS.positionPercent(25, 100));

        // dialog
        await ƒS.Speech.tell(characters.alte, "Wofür vermagst du dich nun zu entscheiden?");

        let dialogueElementAnswersHaus = {
            iChooseOptionA: "Heiler besuchen und um Schutz für das Dorf bitten.",
            iChooseOptionB: "Versuchen das Haus der Seherin rechtzeitig zu erreichen.",
        };

        // choosing dialog options

        let dialogueElementHaus = await ƒS.Menu.getInput(dialogueElementAnswersHaus, "choicesCSSclass");

        switch (dialogueElementHaus) {
            case dialogueElementAnswersHaus.iChooseOptionA:
                // continue path here
                dataForSave.heilerOption = true;
                console.log(dataForSave.heilerOption);
                ƒS.Speech.clear();
                return "Nacht";
                break;

            case dialogueElementAnswersHaus.iChooseOptionB:
                // continue path here
                dataForSave.seherinOption = true;
                console.log(dataForSave.seherinOption);
                ƒS.Speech.clear();
                return "Nacht";
                break;
        }



    }
}