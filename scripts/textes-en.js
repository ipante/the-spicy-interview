const textes_en = {};

textes_en.commandeEspace = "Press SpaceBar";

textes_en.confianceEnSoiITF = "FAITH IN YOURSELF";

textes_en.confianceEnCandidatITF = "TRUST IN APPLICANT";

textes_en.textesIntroduction = [
   "You just replied to a job add from a handycraft company. Nothing to be happy with, but your loan is overdue and positions are almost inexistant in paleography.",
   'The appointment is set in a forest not far away from your neighborhood. Strange place for an interview, but "spicy encounters lead to spicy opportunities."',
   "At least, that's what Lydia said when she left you.",
];

textes_en.rencontreCastor = [
   "Anybody here ?",
   "I'm here for the...",
   "Work position ?",
   "I guess...",
   "Helloooooo !",
   "WHAT THE !!!",
   "Oh.",
   "Hi little beaver.",
   "You frightened me.",
   "Don't worry, I'm leaving.",
];

textes_en.faits = [
   // 1 prédateurs : ours loups
   "In Europe, beavers have had many wild predators for a very long time, including wolves, lynx and brown bears. In America, the main predators of the beaver are wolves, coyotes, bears and lynx. But its biggest predator remain humans, who have hunted it intensively.",
   // 2 travail en meute
   "The beaver is monogamous. It remains faithful to its partner throughout its life. Sexual maturity is reached around the age of three, when the young beavers are driven away from their family unit.",
   // 3 durée sous l'eau
   "The beaver is capable of staying under water for 4 to 5 minutes but its record is 15 minutes.",
   // 4 mobilité des castors (5 ans)
   "If necessary, beavers may abandon their dam to create another den in a more favorable area.",
   // 5 comment vous considérez-vous ?
   "beavers defend their territory vigorously and like to use their tail to make a loud noise to scare off predators.",
   // 6 deux ans de stage non payé
   "The young stay with the family for two years, the time to learn the techniques of construction (the art of dam building), territory defense and breeding.",
   // 7 activité du beaver
   "A beaver is never satisfied with his home. He is constantly rearranging it, adding new branches and twigs, enlarging or modifying it. The English expression says it all: 'to work like a beaver'.",
   // 8 les barrages nécessaires
   "Beaver dams can be up to two meters high. The average length is 20 meters; but the record is 850 meters.",
   // 9 le fonctionnement en famille
   " The beaver is monogamous. It remains faithful to its partner throughout its life. Sexual maturity is reached around the age of three, when the young beavers are driven away from their family unit.",
   // 10 rouge ou bleu ?
   "Hunted for its oil, meat and fur, the beaver was driven to the brink of extinction in the early twentieth century. It has since been reintroduced in various territories, including Switzerland.",
   // 11 gérer les urgences
   "The dams are built to regulate the water level so that the entrance to the burrow remains submerged and protected from predators.",
   // 12 ours prédateurs
   "Along with humans, bears are one of the main predators of beavers.",
   // 13 salaire argent trouvé
   "Beavers are the best allies against drought : dams created by beavers raise the water table and cause water to spread",
   // 14 ingénieur ou créatif
   "The beaver is an extraordinary master builder. For its dams, it fixes vertically on the bottom of the stream branches and cuts trunks, then stabilizes them with stones, mud, reeds and anything else that passes between its paws. With such constructions, beavers are more or less able to regulate a stream.",
   // 15 enfants & portées
   "A pair of beavers gives birth to one or two pups each year. After two years, they are then chased out of the den.",
   // 16 rôle de la queue
   "The beaver’s tail has many uses. It serves as a food reserve, helps it to move and propel itself under water, and also to stand upright. It also serves as a counterweight when carrying burdens, as a thermal regulator and as a sound deterrent when the beaver strikes it violently on the water.",
   // 17 animal nocturne
   "The beaver is a nocturnal animal. At dusk, it leaves its den and goes in search of food in its territory. During the day, the whole family retires to the den to sleep.",
   // 18 véganisme
   "The beaver is exclusively vegetarian. In summer, it adapts its meals to what is available. In winter, it becomes the specialist of willow bark.",
   // 19 caecotrophe
   "The beaver has adapted to digest plant fibers and bark: the pouch in its cecum is huge and contains different strains of bacteria. In a first cycle, the food enters this diverticulum and is predigested by the bacteria. The beaver then excretes a white vegetable pulp rich in proteins and vitamins and re-ingests it. During the second passage through the digestive system, it can finally extract the vital elements.",
   // 20 délocalisation
   " The beaver is monogamous. It remains faithful to its partner throughout its life. Sexual maturity is reached around the age of three, when the young beavers are driven away from their family unit.",
   // 21 taille du terrier
   "The entire beaver family inhabits a living area about one meter in diameter: the parents and two generations of young beavers.",
   // 22 hiérarchie
   "Beavers’ social system is unique among rodents. Each family occupies a discrete individual territory. Adults dominate the young and the young dominate the adults, each indicating their status through sounds, postures and gestures.",
   // 23 découverte de l'offre (quand visibles)
   "A totem animal for Native Americans, the Beaver has its symbolism in dreams. It reminds us that we must act persistently on our dreams to bring them to life.",
   // 24 unicité (big brain)
   "Their flat tail and webbed feet allow beavers to swim at speeds of up to 8 kilometres per hour.",
   // 25 beaver indicateur LAT
   "The beaver can serve as an indicator for good revitalization projects. If, after revitalization of a river, there are no or hardly any conflicts with the beaver, the framework conditions of the (Swiss) law have been well implemented.",
];

textes_en.questionInitiale = {
   q: "I thought you were applying for the job.",
   rh1: "I am.",
   rc1: "Good. Let's start the interview.",
   sp1: 0,
   sc1: 0,
   rh2: "Am I crazy ?",
   rc2: "Let me be the judge of that. First question.",
   sp2: 0,
   sc2: 0,
};

/* rh1 : réponse humaine 1, rc : réponse castor, sp1 : score poste 1, sc1 : score confiance 1 */
textes_en.interviews = [
   {
      q: "Are you unconfortable with ethnic groups different from yours ?",
      rh1: "Only with bears and wolves.",
      rc1: "Bad answer, but I can relate.",
      sp1: -1,
      sc1: 1,
      rh2: "I enjoy and defend differences.",
      rc2: "Good, never forget you'll never be one of us.",
      sp2: 1,
      sc2: -1,
      idFact: 1,
   },
   {
      q: "The haze is highly competitive, how will you deal with it ?",
      rh1: "Leaving no one behind : helping the weak ones to improve.",
      rc1: "Good luck with that.",
      sp1: -1,
      sc1: -1,
      rh2: "With no mercy : selection is the reason we're here.",
      rc2: "That's the spirit.",
      sp2: 1,
      sc2: 1,
      idFact: 2,
   },
   {
      q: "Can you work under water (pressure)?",
      rh1: "I'm a Pisces.",
      rc1: "Oh wow, lucky us.",
      sp1: -1,
      sc1: -1,
      rh2: "I'll give my best on the ground.",
      rc2: "Knows his limits : good point.",
      sp2: 1,
      sc2: -1,
      idFact: 3,
   },
   {
      q: "Where do you see yourself in five years ?",
      rh1: "It depends on where you see YOURSELF in five years.",
      rc1: "Nice one, but watch your back.",
      sp1: 1,
      sc1: 2,
      rh2: "Where the company considers me the best.",
      rc2: "Good boy.",
      sp2: 2,
      sc2: -1,
      idFact: 4,
   },
   {
      q: "How do you consider yourself ?",
      rh1: "I just don't.",
      rc1: "Perfect.",
      sp1: 2,
      sc1: -1,
      rh2: "The missing piece of your company.",
      rc2: "Missing. I will think about that.",
      sp2: -1,
      sc2: -1,
      idFact: 5,
   },
   {
      q: "There's a two year trial. Apart from food, it's unpaid.",
      rh1: "I'll be happy to discover your cafeteria.",
      rc1: "The view is amazing.",
      sp1: 2,
      sc1: -1,
      rh2: "Full dedication comes with high salary.",
      rc2: "That's what she said.",
      sp2: -1,
      sc2: 1,
      idFact: 6,
   },
   {
      q: "You'll have to be on the field. No part-time, no distance (no remote working), full dedication.",
      rh1: "I have no life anyway.",
      rc1: "Perfect.",
      sp1: 2,
      sc1: -2,
      rh2: "Full dedication comes with high salary.",
      rc2: "That's what she said.",
      sp2: -1,
      sc2: 1,
      idFact: 7,
   },
   {
      q: "Dams are...",
      rh1: "A natural answer to climate crisis.",
      rc1: "Look who's talking.",
      sp1: 1,
      sc1: -1,
      rh2: "A kink.",
      rc2: "* Blushes *",
      sp2: 2,
      sc2: -1,
      idFact: 8,
   },
   {
      q: "How do you consider familial entrepreneurship ?",
      rh1: "A limit to expansion.",
      rc1: "Gross.",
      sp1: -2,
      sc1: 1,
      rh2: "The only way to go.",
      rc2: "Look who's talking.",
      sp2: 1,
      sc2: -1,
      idFact: 9,
   },
   {
      q: "Red or blue ?",
      rh1: "Red.",
      rc1: "Still not done with predatorship.",
      sp1: -1,
      sc1: 1,
      rh2: "Blue.",
      rc2: "Clever choice.",
      sp2: 1,
      sc2: 1,
      idFact: 10,
   },
   {
      q: "Every emergency is an occasion to...",
      rh1: "Take a step back and think.",
      rc1: "Say that again when the dam is breaking.",
      sp1: -2,
      sc1: -1,
      rh2: "Dive into action.",
      rc2: "True story bro.",
      sp2: 1,
      sc2: 1,
      idFact: 11,
   },
   {
      q: "Bears are...",
      rh1: "Part of the cycle of life.",
      rc1: "Disgustingly specist.",
      sp1: -2,
      sc1: 1,
      rh2: "A plague.",
      rc2: "Right after mankind, yes.",
      sp2: 1,
      sc2: 1,
      idFact: 12,
   },
   {
      q: "The salary depends on the money found in the river. Ok for you ?",
      rh1: "I'm used to the volatility of the market.",
      rc1: "Remember your answer.",
      sp1: 2,
      sc1: -2,
      rh2: "We can negotiate other advantages.",
      rc2: "Forget the fur.",
      sp2: -1,
      sc2: 1,
      idFact: 13,
   },
   {
      q: "When you have to build something, you...",
      rh1: "Follow the instructions strictly.",
      rc1: "Dambuilding is artistic mastercraft.",
      sp1: -1,
      sc1: 0,
      rh2: "Allow room for creativity.",
      rc2: "Dams are precisely engineered.",
      sp2: -1,
      sc2: 0,
      idFact: 14,
   },
   {
      q: "Do you plan to have children ?",
      rh1: "Only in my head.",
      rc1: "And that's how mankind ends.",
      sp1: -1,
      sc1: 1,
      rh2: "I plan to find a girlfriend.",
      rc2: "Stay away from my daughter.",
      sp2: 1,
      sc2: -1,
      idFact: 15,
   },
   {
      q: "How will you compensate your missing tail ?",
      rh1: "With my really long arms.",
      rc1: "They're just proportional.",
      sp1: 1,
      sc1: -1,
      rh2: "With my extreme willpower.",
      rc2: "We won't forget this.",
      sp2: 0,
      sc2: 1,
      idFact: 16,
   },
   {
      q: "Working nightly is...",
      rh1: "Better paid.",
      rc1: "You bet.",
      sp1: -1,
      sc1: 2,
      rh2: "Perfect for deep work.",
      rc2: "Finally, we agree on something.",
      sp2: 2,
      sc2: -1,
      idFact: 17,
   },
   {
      q: "Veganism is...",
      rh1: "The cannibalism of the weak.",
      rc1: "Ok, THAT is insulting.",
      sp1: -3,
      sc1: 0,
      rh2: "My religion.",
      rc2: "Oh, yeah, almost forgot humans have gods.",
      sp2: 1,
      sc2: 0,
      idFact: 18,
   },
   {
      q: "Eating your feces is...",
      rh1: "A proof I'm dreaming.",
      rc1: "Be ready to embrace your dreams then.",
      sp1: -2,
      sc1: 0,
      rh2: "A good occasion to check what you've missed the first time.",
      rc2: "Yes, and excellent for digestion too.",
      sp2: 3,
      sc2: -3,
      idFact: 19,
   },
   {
      q: "We may delocalize soon. Are you free to move ?",
      rh1: "I'll keep an eye on this place for you.",
      rc1: "Nah.",
      sp1: -1,
      sc1: 1,
      rh2: "Just take me with you.",
      rc2: "Cool down human.",
      sp2: 2,
      sc2: -1,
      idFact: 20,
   },
   {
      q: "Ten individuals sharing one meter diameter, is...",
      rh1: "A paradise called home.",
      rc1: "You'll get your corner.",
      sp1: 2,
      sc1: -1,
      rh2: "A hell called Hell.",
      rc2: "I hope you enjoy to be cursed.",
      sp2: -1,
      sc2: 0,
      idFact: 21,
   },
   {
      q: "Your manager is your manager because...",
      rh1: "Ask the manager, only he knows.",
      rc1: "So true.",
      sp1: 1,
      sc1: -1,
      rh2: "I've just started.",
      rc2: "Looks more like an end to me.",
      sp2: -1,
      sc2: 1,
      idFact: 22,
   },
   {
      q: "How did you hear about this position ?",
      rh1: "Must have been drunk. Could still be.",
      rc1: "Expect a hangover.",
      sp1: -1,
      sc1: -1,
      rh2: "I never miss a great opportunity.",
      rc2: "How not to answer 101.",
      sp2: -1,
      sc2: 1,
      idFact: 23,
   },
   {
      q: "What makes you unique ?",
      rh1: "My huge Brain.",
      rc1: "Nobody's perfect",
      sp1: -1,
      sc1: 1,
      rh2: "I can hold my breath for 120 seconds.",
      rc2: "That will be tested.",
      sp2: 1,
      sc2: 1,
      idFact: 24,
   },
   {
      q: "We're an architecture company. Should we follow the land planning legislation ?",
      rh1: "You rule.",
      rc1: "Yup.",
      sp1: 1,
      sc1: 1,
      rh2: "Dura lex, sed lex.",
      rc2: "Yes, ours.",
      sp2: 1,
      sc2: 1,
      idFact: 25,
   },
];

textes_en.engage = [
   "Ok M. Human.",
   "We're done.",
   "We're really happy with your answers.",
   "Welcome to the company.",
   "Follow me to the burrow.",
   "Hem... Your office.",
   "",
];

textes_en.recale = [
   "Ok M. Human.",
   "We're done.",
   "Sorry you didn't make it.",
   "Shouldn't be a surprise, I guess.",
   "Many thanks for your interest in our company.",
   "This path will bring you back to the so called 'civilization'.",
   "",
];

textes_en.reponseHumain = ["Wow.", "I can't believe it."];

// perso positif, entreprise positive : fond jaune
textes_en.ppep = [
   "There it is : the spicy life you were looking for.",
   "Peter Gabriel was so right : 'Down to the ground. There's no better place to go.'",
   "With your wide arms, you help the beavers fortify the dams, keep the predators away, swim with them in the river.",
   "You're doing it since...",
   "Who cares ?",
   "Since the last births in the haze, it's not a company anymore",
   "It's a family.",
];

// perso positif, entreprise négative : fond vert
textes_en.ppen = [
   "Coming back through the forest, you're strangely full of energy.",
   "Beaver's Comp. rejected you, just as Lydia did.",
   "You know what ?",
   "Good news.",
   "Maybe it's time for you to stop knocking on every door, looking for approval.",
   "You'll get back to your flat, pack some stuff and go on a trip.",
   "You'll spice up your life by yourself.",
   "You're not a looser.",
   "You've nothing to loose.",
   "You look at the stars.",
   "You're way richer than you think.",
];
// perso négatif, entreprise positive : fond rouge
textes_en.pnep = [
   "It's been three month now. The company is really happy with your results.",
   "Spicy times, for sure.",
   "As a matter of fact, they found any single way to overuse you.",
   "A night with three hours of sleep is a feast, food is horrendous and you're now sure of one thing.",
   "You'll never be one of them.",
   "But deep inside, you know that's justice.",
   "Your species was so hard on them.",
   "Better stay here. Nowadays, all the companies are equal.",
   "What did Thomas Bernhard say again ?",
   "Oh yes.",
   "It doesn’t matter.",
   "It all doesn’t matter.",
];

// perso négatif, entreprise négative : fond sombre
textes_en.pnen = [
   "You tried to spice up your life but it's crystal clear now : there's no way out.",
   "There never was.",
   "Everybody rejects you.",
   "Lydia last month, Beaver company now.",
   "For strange reasons, you're doomed to make the worst choice every-single-time.",
   "What will you do now ?",
   "Go home ?",
   "Your flat is no home to you.",
   "It's a mess, a threat.",
   "You look at the stars, the sky is cloudy.",
   "You only see dark branches.",
   "You touch your tie.",
   "Here's your way out.",
];
