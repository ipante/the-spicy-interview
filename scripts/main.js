let scaleFactor = window.innerWidth / 1280;

let k = kaboom({
  background: [0, 0, 0],
  width : 1280,
  height : 720,
  letterbox : true,
  scale : scaleFactor
});

const liste_assets = [
   {type : "image", nom : "employe", extension : "png"},
   {type : "image", nom : "castor", extension : "png"},
   {type : "image", nom : "fond", extension : "jpg"},
   {type : "image", nom : "f1", extension : "jpg"},
   {type : "image", nom : "f2", extension : "jpg"},
   {type : "image", nom : "f3", extension : "jpg"},
   {type : "image", nom : "f4", extension : "jpg"},
   {type : "audio", nom : "feuilles", extension : "flac"},
   {type : "audio", nom : "sonsForet", extension : "mp3"},
   {type : "audio", nom : "etrangeForet", extension : "mp3"},
   {type : "audio", nom : "deception1", extension : "mp3"},
   {type : "audio", nom : "deception2", extension : "mp3"},
   {type : "audio", nom : "castorDecu1", extension : "m4a"},
   {type : "audio", nom : "castorDecu2", extension : "m4a"},
   {type : "audio", nom : "castorDecu2", extension : "m4a"},
   {type : "audio", nom : "musiqueDebut", extension : "ogg"},
   {type : "audio", nom : "succes", extension : "ogg"},
]

function toutCharger(tab_assets){
   tab_assets.forEach(a => {
      if(a.type === "image"){
         loadSprite(a.nom,`/assets/images/${a.nom}.${a.extension}`)
      }
      else if(a.type === "audio"){
         loadSound(a.nom,`/assets/audio/${a.nom}.${a.extension}`)
      }
   })
}

toutCharger(liste_assets)

// importation du localStorage
if (localStorage.getItem("tableauSucces") === null) {
   localStorage.setItem("tableauSucces", "");
}

// importation du localStorage
if (localStorage.getItem("tableauFins") === null) {
   localStorage.setItem("tableauFins", "");
}

// stocker les valeurs dans des variables (après avoir enlevé les doublons)
let tableauSucces = localStorage.getItem("tableauSucces").split(",");
let tableauFins = localStorage.getItem("tableauFins").split(",");

// netoyage des tableaux
nettoyer(tableauSucces);
nettoyer(tableauFins);

// nombre de questions
const nombreQuestions = 8;

// variables globales
let bulle, castor, perso, texte, fond;
let debut = true;

// variables globales audio
let langueChoisie;

let jaugesOK;
let jaugeConfiance, jaugePoste;

let progressionItw;
let espaceAutorise;
let questionPasPosee;
let nombreAutorise;

let scorePoste;
let scoreConfiance;

const scorePosteMax = 10;
const scoreConfianceMax = 10;

const EASING_BARRES = "easeOutCubic"

// sélectionner les questions
interviews = selectionnerQuestions(nombreQuestions);

scene("accueil", () => {
   if (langueChoisie == "fr") {
      textesIntroduction = textesIntroductionFR;
      rencontreCastor = rencontreCastorFR;
   }

   onKeyPress("c", () => {
      localStorage.removeItem("tableauSucces");
      localStorage.removeItem("tableauFins");
   });

   if (localStorage.tableauSucces != null) {
   }

   initialiserVariables();
   
   let compteur = 0;
   let titre = add([
      text("THE SPICY INTERVIEW", { size: 50, width: 600 }),
      anchor("center"),
      pos(center().x, 200)
   ]);

   let texte = add([
      text("Press SpaceBar", { size: 32, width: 600 }),
      anchor("center"),
      pos(center().x, 400)
   ]);

   onKeyPress("space", () => {
      if (compteur == 0) {
         destroy(titre);
      }
      if (compteur != textesIntroduction.length) {
         texte.text = textesIntroduction[compteur];
         if (compteur == 0) {
            m = play("etrangeForet");
         }
         compteur++;
      } else {
         stop(m);
         go("jeu");
      }
   });
});

scene("jeu", () => {
   let progression = 0;
   let progressionItw = 0;

   play("sonsForet");

   fond = add([
      sprite("fond"),
      pos(width() / 2, height() / 2),
      z(1),
      scale(2.5),
      color(120, 70, 210),
      anchor("center"),
      stay(),
      "tout",
   ]);

   perso = add([
      sprite("employe"),
      pos(10, height() - 700),
      z(2),
      scale(22),
      stay(),
   ]);

   castor = add([
      sprite("castor"),
      pos(width() * 0.7, height() - 440),
      z(2),
      scale(9),
      opacity(0),
      stay(),
   ]);

   bulle = add([
      rect(width(), height() * 0.4),
      anchor("center"),
      color(120, 10, 0),
      pos(center().x, height() - 100),
      outline(2),
      z(3),
      stay(),
   ]);

   texte = add([
      text("Hello ?", { size: 32, width: width() - 230 }),
      pos(bulle.pos),
      anchor("center"),
      z(3),
      stay(),
   ]);
   console.log("texte", texte);

   onKeyPress("space", () => {
      if (progression != rencontreCastor.length) {
         if (progression == 5) {
            play("feuilles");
            shake(2);
            castor.opacity = 1;
         }
         texte.text = rencontreCastor[progression];
         progression++;
      } else {
         go("interview");
      }
   });
});

scene("interview", () => {
   poserQuestion();

   onKeyPress("1", () => {
      if (nombreAutorise) {
         // mise à jour du tableau de faits & localStorage
         tableauSucces.push(interviews[progressionItw].idFact);

         localStorage.tableauSucces = String(tableauSucces);

         texte.text = interviews[progressionItw].rc1;
         fondCastor();

         espaceAutorise = true;
         questionPasPosee = true;

         if (progressionItw - 1 == interviews.length) {
            go("bilan");
            return;
         }
         nombreAutorise = false;

         let sc = interviews[progressionItw].sc1;
         let sp = interviews[progressionItw].sp1;

         reactions(sc, sp);

         scoreConfiance += sc;
         scorePoste += sp;

         if (jaugesOK) {
            recalculerJauges(
               scoreConfiance,
               scorePoste,
               scoreConfianceMax,
               scorePosteMax
            );
         }
         progressionItw++;
      }
   });
   onKeyPress("2", () => {
      if (nombreAutorise) {
         // mise à jour du tableau de faits & localStorage
         tableauSucces.push(interviews[progressionItw].idFact);
         localStorage.tableauSucces = String(tableauSucces);

         texte.text = interviews[progressionItw].rc2;
         fondCastor();

         espaceAutorise = true;
         questionPasPosee = true;

         if (progressionItw == interviews.length) {
            go("bilan");
            return;
         }
         nombreAutorise = false;

         let sc = interviews[progressionItw].sc2;
         let sp = interviews[progressionItw].sp2;

         reactions(sc, sp);

         scoreConfiance += sc;
         scorePoste += sp;

         scoreConfiance += interviews[progressionItw].sc2;
         scorePoste += interviews[progressionItw].sp2;

         if (jaugesOK) {
            recalculerJauges(
               scoreConfiance,
               scorePoste,
               scoreConfianceMax,
               scorePosteMax
            );
         }
         progressionItw++;
      }
   });

   onKeyPress("space", () => {
      if (progressionItw == interviews.length) {
         go("bilan");
      } else {
         if (espaceAutorise) {
            if (questionPasPosee) {
               poserQuestion();
            } else {
               nombreAutorise = true;
               fondHumain();
               texte.text =
                  "[1]" +
                  interviews[progressionItw].rh1 +
                  "\n" +
                  "[2]" +
                  interviews[progressionItw].rh2;
               fond.color.r += 2;
            }
         }
      }
   });

   function poserQuestion() {
      if (progressionItw === 1) {
         m = play("musiqueDebut", { volume: 0.3 });
         ajouterInterfaceItw();
         recalculerJauges(
            scoreConfiance,
            scorePoste,
            scoreConfianceMax,
            scorePosteMax
         );
         jaugesOK = true;
      }
      texte.text = interviews[progressionItw].q;
      espaceAutorise = true;
      fondCastor();
      questionPasPosee = false;
      fond.color.r += 5;
   }
});

// interview terminée : c'est l'heure du bilan
scene("bilan", () => {
   stop(m);
   let mef = play("etrangeForet");
   destroyAll("itw")
   let compteurCastor = 0;
   let compteurHumain = 0;

   let monologueFinal;
   scorePoste > scorePosteMax / 2 + 1
      ? (monologueFinal = engage)
      : (monologueFinal = recale);

   fondCastor();

   onKeyPress("space", () => {
      if (compteurCastor < monologueFinal.length) {
         texte.text = monologueFinal[compteurCastor];
         compteurCastor++;
      } else if (compteurCastor == monologueFinal.length) {
         play("feuilles");
         destroy(castor);
         compteurCastor++;
      } else {
         stop(mef);
         go("fin");
      }
   });
});

scene("succes", () => {
   creerGrilleFaits();
   onKeyPress("space", () => go("accueil"));
});

scene("fin", () => {
   let compteurCloture = 0;
   let fin;
   let nomFIn;

   destroy(perso);
   destroy(fond);
   destroy(bulle);

   let texteFinal = add([
      text("", { size: 32, width: width() - 230 }),
      pos(width() / 2, height() / 2),
      anchor("center"),
   ]);

   if (scorePoste < scorePosteMax / 2) {
      if (scoreConfiance < scoreConfianceMax / 2) {
         fin = pnen;
         nomFin = "1";
      } else {
         fin = ppen;
         nomFin = "2";
      }
   } else {
      if (scoreConfiance < scoreConfianceMax / 2) {
         fin = pnep;
         nomFin = "3";
      } else {
         fin = ppep;
         nomFin = "4";
      }
   }

   if (!tableauFins.includes(nomFin)) tableauFins.push(nomFin);

   localStorage.tableauFins = String(tableauFins);

   onKeyPress("space", () => {
      if (compteurCloture < fin.length) {
         texte.text = fin[compteurCloture];
         compteurCloture++;
      } else if (compteurCloture == fin.length) {
         compteurCloture++;
      } else if (compteurCloture == fin.length + 1) {
         compteurCloture++;
         destroy(texte);

         play("succes");

         let texteSucces = add([
            text(`ENDING ${nomFin}/4 UNLOCKED`, { size: 40 }),
            pos(width() / 2, 40),
            anchor("center"),
         ]);

         let imageFinale = add([
            sprite(`f${nomFin}`),
            pos(width() / 2, 400),
            anchor("center"),
         ]);
      } else {
         go("succes");
      }
   });
});

function fondHumain() {
   bulle.color.r = 120;
   bulle.color.g = 10;
   bulle.color.b = 0;
}

function fondCastor() {
   bulle.color.r = 139;
   bulle.color.g = 69;
   bulle.color.b = 19;
}

function recalculerJauges(
   scoreConfiance,
   scorePoste,
   scoreConfianceMax,
   scorePosteMax
) {
   tjc = mapc(scoreConfiance, 0, scoreConfianceMax, 0, 300);
   tjp = mapc(scorePoste, 0, scorePosteMax, 0, 300);
   if(debut){
      jaugeConfiance.width = mapc(scoreConfiance, 0, scoreConfianceMax, 0, 300);
      jaugePoste.width = mapc(scorePoste, 0, scorePosteMax, 0, 300);
   }
   else{
      tween(jaugeConfiance.width,tjc, 1, (p) => jaugeConfiance.width = p, easings.EASING_BARRES)
      tween(jaugePoste.width,tjp, 1, (p) => jaugePoste.width = p, easings.EASING_BARRES)
   }
}

function ajouterInterfaceItw() {
   const jcPos = vec2(20, 20);
   const jpPos = vec2(width() - 320, 20);

   const jaugeConfianceMax = add([
      rect(300, 40),
      pos(jcPos),
      color(120, 0, 0),
      outline(4),
      z("interface"),
      "itw",
      "jauge",
   ]);

   jaugeConfiance = add([
      rect(300, 40),
      pos(jcPos),
      color(0, 120, 120),
      outline(4),
      z("interface"),
      "itw",
      "jauge",
   ]);

   const foiJ = add([
      text("FAITH IN YOURSELF", { size: 28 }),
      pos(jaugeConfiance.pos.x, jaugeConfiance.pos.y + 5),
      z("interface"),
      stay(),
      "itw",
   ]);

   const jaugePosteMax = add([
      rect(300, 40),
      pos(jpPos),
      color(120, 0, 0),
      outline(4),
      z("interface"),
      "itw",
   ]);

   jaugePoste = add([
      rect(300, 40),
      pos(jpPos),
      color(0, 120, 120),
      outline(4),
      z("interface"),
      "itw",
      "jauge",
   ]);

   const foiC = add([
      text("TRUST IN APPLICANT", { size: 28 }),
      pos(jaugePoste.pos.x, jaugePoste.pos.y + 5),
      z("interface"),
      stay(),
      "itw",
   ]);
}

// composer le tableau de questions
function selectionnerQuestions(nombreQuestions) {
   // copier le tableau
   let tmp = interviews.slice(interviews);
   let selectionQuestions = [];

   for (let i = 0; i < nombreQuestions; i++) {
      let index = Math.floor(Math.random() * tmp.length);
      let removed = tmp.splice(index, 1);
      selectionQuestions.push(removed[0]);
   }
   // ajouter la première question
   selectionQuestions.unshift(questionInitiale);
   return selectionQuestions;
}

function initialiserVariables() {
   jaugesOK = false;
   progressionItw = 0;
   espaceAutorise = true;
   questionPasPosee;
   nombreAutorise = false;
   scorePoste = 5;
   scoreConfiance = 5;
}

function creerGrilleFaits() {
   add([
      text("FUN FACTS UNLOCKED (HOVER THE GREENS)", {
         size: 45,
         width: width() - 230,
      }),
      pos(200, 50),
   ]);

   add([
      text("PRESS SPACEBAR TO PLAY AGAIN", {
         size: 40,
         width: width() - 230,
      }),
      pos(300, 650),
   ]);

   const tailleCarre = 60;
   const posHor = width() / 2 - 150;
   const posVer = height() / 2 - 150;

   // créer la grille de faits
   let nombreFait = 0;

   // bloc de texte modal
   let modal = add([text("", { width: 400, size: 27 }), pos(50, 120)]);

   // création de la grille
   for (i = 1; i < 6; i++) {
      for (j = 1; j < 6; j++) {
         nombreFait++;
         let bloc = add([
            rect(tailleCarre, tailleCarre),
            pos(posHor + j * tailleCarre, posVer + i * tailleCarre),
            color(150, 160, 170),
            outline(2, 120, 255, 255),
            area(),
            anchor("center"),
            z("interface"),
            "bloc",
            "grilleFaits",
            { idFait: i + j - 1 },
         ]);

         bloc.add([
            text(nombreFait, { size: 30 })
         ])

         if (tableauSucces.includes(nombreFait)) {
            bloc.color.r = 0;
            bloc.color.g = 255;
            bloc.color.b = 0;
         } else {
            bloc.color.r = 255;
            bloc.color.g = 0;
            bloc.color.b = 0;
         }
      }
   }

   onHover("bloc", (b) => {
      if (b.color.g == 255) {
         modal.text = faits[b.idFait];
      }
   });
}

function reactions(sc, sp) {
   let forceFrappe = 0;
   if (sc < 0) {
      forceFrappe += 5 * sc;
      play(choose(["deception2"]), {
         volume: 6,
         speed: 2,
      });
   }
   if (sp < 0) {
      forceFrappe += 5 * sp;
      play(choose(["castorDecu1", "castorDecu2", "castorDecu3"]), {
         volume: 3,
         speed: 3,
      });
   }
   shake(forceFrappe);
}

// nettoyage de tableau
function nettoyer(tab) {
   // enlever les vides
   tab.forEach((v, i) => {
      if (v == "" || v == ",") {
         tab.splice(i, 1);
      }
   });
}

go("accueil");

// window.addEventListener("resize", (event) => {
//    scaleFactor = window.innerWidth / 1280
//    k.scale = scaleFactor
//    console.log(k.scale)
// });