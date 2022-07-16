namespace VisualNovel {
        export async function Gasthaus(): ƒS.SceneReturn {
            console.log("Gasthaus");
    
            // actual location
            //dataForSave.sceneGasthaus = true;
    
            // background 
            await ƒS.Location.show(locations.gasthaus);
    
            // transition
            await ƒS.update(transitions.vignette.duration, transitions.vignette.alpha, transitions.vignette.edge);
    
            //sound
    
            // character Hauptmann
            await ƒS.Character.show(characters.hauptmann, characters.hauptmann.pose.neutral, ƒS.positionPercent(70, 100));
            ƒS.update();
    
            // dialog
            await ƒS.Speech.tell(characters.hauptmann, "Ah da bist du ja endlich! Wir alle setzten große Hoffnung in dich!");
            await ƒS.Speech.tell(characters.narrator, "Ich werde mein Bestes geben.");
            await ƒS.Speech.tell(characters.hauptmann, "Das will ich meinen.");
            await ƒS.Speech.tell(characters.hauptmann, "Wenn ich mir dich aber so anschaue, bin ich mir nicht sicher, ob du dieser Aufgabe gewachsen bist.");
            await ƒS.Speech.tell(characters.hauptmann, "Mit diesen Waffen wirst du keinen großen Schaden anrichten können. Die machen vielleicht optisch viel her, aber sonst taugen die doch nichts.");
            await ƒS.Speech.tell(characters.hauptmann, "Die Haut eines Werwolfes ist zäh und heilt schnell.");

            // change pose Hauptmann
            await changePose(characters.dorfdepp, "besorgt", ƒS.positionPercent(25, 100));
            
            //dialog
            await ƒS.Speech.tell(characters.hauptmann, "Vielleicht sollten wir doch jemand anderen fragen.");
            await ƒS.Speech.tell(characters.narrator, "Vielleicht kannst du mir ja helfen? Als Hauptmann hast du bestimmt viel Erfahrung.");
            
            // change pose Hauptmann
            await changePose(characters.hauptmann, "neutral", ƒS.positionPercent(25, 100));

             //dialog
             await ƒS.Speech.tell(characters.hauptmann, "Lass dein Schwert rosten.");
             await ƒS.Speech.tell(characters.hauptmann, "Das meine ich ernst.");
            
             // show item rostiges Schwert
            await ƒS.Character.show(items.rostigesSchwert, items.rostigesSchwert.pose.speechbubble, ƒS.positionPercent(70, 100));
            ƒS.update();
            
            //dialog
            await ƒS.Speech.tell(characters.hauptmann, "Rostige Schwerter schneiden nicht gut, aber sie sind heimtückische Waffen.");
            await ƒS.Speech.tell(characters.hauptmann, "Sie infizieren den Werwolf mit einer schrecklichen Krankheit und schwächen diesen. Dann sind sie verwundbar und ein leichtes Ziel.");
            
            // hide item rostiges Schwert
            await ƒS.Character.hide(items.rostigesSchwert);
            
            await ƒS.Speech.tell(characters.narrator, "Mein gutes scharfes Schwert verrosten lassen?");
            await ƒS.Speech.tell(characters.narrator, "Das klingt mir doch reichlich unsinnig. Sie müssen doch noch eine andere Lösung haben?");
            await ƒS.Speech.tell(characters.narrator, "Kommt Ihnen vielleicht etwas verdächtig vor? Man sagte mir, dass sie einen Verdacht hegen?");

            // change pose Hauptmann
            await changePose(characters.hauptmann, "wuetend", ƒS.positionPercent(25, 100));
            
            //dialog
            await ƒS.Speech.tell(characters.hauptmann, "Ich sage das nur ungern, aber unser Wirt bereitet mir große Sorgen. Diesem Trunkenbold habe ich noch nie viel zugetraut und ich fürchte nun, dass er sich mit den dunklen Mächten verbündet hat.");
            await ƒS.Speech.tell(characters.hauptmann, "Ich hatte diesbezüglich schon einmal meine Bedenken geäußert.");
           
            // change pose Hauptmann
            await changePose(characters.hauptmann, "besorgt", ƒS.positionPercent(25, 100));

            await ƒS.Speech.tell(characters.hauptmann, "Es liegt nun an dir zu entscheiden.");

            // change pose Hauptmann
            await changePose(characters.hauptmann, "neutral", ƒS.positionPercent(25, 100));



            let dialogueElementAnswersGasthaus = {
                iChooseOptionA: "Rostiges Schwert erschaffen.",
                iChooseOptionB: "Den Wirt anklagen.",
            };
    
            // choosing dialog options
    
            let dialogueElementGasthaus = await ƒS.Menu.getInput(dialogueElementAnswersGasthaus, "choicesCSSclass");
    
            switch (dialogueElementGasthaus) {
                case dialogueElementAnswersGasthaus.iChooseOptionA:
                    // continue path here
                    dataForSave.schwertOption = true;
                    console.log(dataForSave.schwertOption);
                    ƒS.Speech.clear();
                    return "Nacht";
                    break;
    
                case dialogueElementAnswersGasthaus.iChooseOptionB:
                    // continue path here
                    dataForSave.anklageOption = true;
                    console.log(dataForSave.anklageOption);
                    ƒS.Speech.clear();
                    return "Nacht";
                    break;
            }
    
        };
    }