namespace VisualNovel {
  // **** ANIMATIONS ****
  export function ghostAnimation(): ƒS.AnimationDefinition {
    return {
      start: { translation: ƒS.positionPercent(70, 100), color: ƒS.Color.CSS("lightblue", 1) },
      end: { translation: ƒS.positionPercent(80, 100), color: ƒS.Color.CSS("lightblue", 0) },
      duration: 3,
      playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
    };
  }
  export function leftToRight(): ƒS.AnimationDefinition {
    return {
      start: { translation: ƒS.positionPercent(70, 100) },
      end: { translation: ƒS.positionPercent(80, 100) },
      duration: 2,
      playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
    };
  }

  // export function getAnimation(): ƒS.AnimationDefinition {
  //   return {
  //     start: { translation: ƒS.positions.bottomleft, rotation: -20, scaling: new ƒS.Position(0.5, 1.5), color: ƒS.Color.CSS("white", 0.3) },
  //     end: { translation: ƒS.positions.bottomright, rotation: 20, scaling: new ƒS.Position(1.5, 0.5), color: ƒS.Color.CSS("red") },
  //     duration: 1,
  //     playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
  //   };
  // }
}