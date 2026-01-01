//copyright EnglishGrammar.Pro 2020.  The tagger was created by JOHN BOZINOV for EnglishGrammar.Pro 
//If you use this javascript file, please place an active link back to http://englishgrammar.pro in appreciation.
function myFunction(){
//remove carriage return
var str = document.getElementById("MT").value; 
var res = str.replace(/([\r\n])/ig, " ");
document.getElementById("MT").value = res;
//this is catching now incorrectly//keeps changing to noun.
var str = document.getElementById("MT").value;
var res = str.replace(/\b(RUn)\s/ig, "$1_NN1_VV0_VVN ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(acquaintance|applicant|businessm\wn|\w+room|chaos|chemistry|compass|column|decor|formula|friendship|gadget|guest|guidance|hatred|horn|incident|intellect|initiative|intercourse|lung|mall|malnutrition|marijuana|meal|onset|pasta|psyche|policeman|rubble|sauce|self-esteem|self-assurance|self-awareness|self-confidence|self-control|self-discipline|self-reliance|self-respect|strawberry|THING|tooth|vase|well\-being|wheelchair)\s/ig, "$1_NN1 ");//classroom 
document.getElementById("MT").value = res;
//brackets from CLAWS ( _( see_VV0 below_RL )_ ) ._. cant get this to work!!! the space stays.  probably some spacing somewhere... not worth messing with.
//let_VVI my_APPGE imagination_NN1 run_VVN wild_JJ ._. Let_VV0 it_PPH1 run_VVI ._.
var str = document.getElementById("MT").value;
var res = str.replace(/(lett?s?i?n?g?_V\w+ \w+_A\w+ \w+_N\w+ \w+)_NN1(_VV)\w+\s/ig, "$1$2I ");//this is not perfect but most common.
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/(_VB\w+ \w+_NN1)_VV0(_VVN)\s/ig, "$1$2 ");//this is not perfect but most common.
document.getElementById("MT").value = res;
//_VVN over_II_RG_RP run over
var str = document.getElementById("MT").value;
var res = str.replace(/(_VV\w+ \w+)_II_RG(_RP)\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
//no idea why I cant change this//thing_VVG
var str = document.getElementById("MT").value;
var res = str.replace(/(thing_)VVG\s/ig, "$1NN1 ");
document.getElementById("MT").value = res;
//not more than one space
var str = document.getElementById("MT").value;
var res = str.replace(/(  )/ig, " ");
document.getElementById("MT").value = res;
////I’d (notice the slant on the apostrophe!
var str = document.getElementById("MT").value;
var res = str.replace(/’/g, "'");
document.getElementById("MT").value = res;
//“
var str = document.getElementById("MT").value;
var res = str.replace(/(“|”)/g, "\"");
document.getElementById("MT").value = res;
//‘Was_VBDZ it_PPH1 ,_, ' he_PPHS1 asked_VVD ,_, ‘the_AT first_MD time_NNT1 you_PPY had_VHD spoken_VVN to_II Mrs_NP1 Dalton_NP1 ?_? '  //sadly I can't space out the ' because of contractions!
var str = document.getElementById("MT").value;
var res = str.replace(/(‘)/g, "\'");
document.getElementById("MT").value = res;
// (the_AT amount_VV0 we_PPIS2 spend_VV0 per person_NN1) 
var str = document.getElementById("MT").value;
var res = str.replace(/(\()(\w)/g, "$1 $2");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/(\w)(\))/g, "$1 $2");
document.getElementById("MT").value = res;
//punctuation//not working something above is changing it. maybe the \b? T_NP1 ._. V_NP1 ._. 
var str = document.getElementById("MT").value;
var res = str.replace(/(T)\.(V)\.\s/ig, "$1$2_NN1 "); 
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/T_NP1 ._. V_NP1 ._.\s/ig, "TV_NN1 "); 
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b([AP])\.(M)\.\s/ig, "$1$2_RA "); 
document.getElementById("MT").value = res;
//u.s.a // m.b.a (all these cause massive problems - so solution is remove full stops.
var str = document.getElementById("MT").value;
var res = str.replace(/\b([A-Z]+)\.([A-Z]+)\.\s/g, "$1$2_NP1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b([A-Z]+)\.([A-Z]+)\.([A-Z]+)\.\s/g, "$1$2$3_NP1 ");
document.getElementById("MT").value = res;
//Ms_NP1 ._. _NNB 
var str = document.getElementById("MT").value;
var res = str.replace(/\b(Ms\.)\s/g, "$1_NNB ");
document.getElementById("MT").value = res;
////THIS IS A BIG PROBLEM $1_NNU ._. 1_MC = $1.1_NNU
var str = document.getElementById("MT").value;
var res = str.replace(/\b(\d+[\.\,]\d+)\s/ig, "$1_NNU ");
document.getElementById("MT").value = res;
//2024.
var str = document.getElementById("MT").value;
var res = str.replace(/\b(\d+[\.\,]*\d+)(\.|\,|\?|:|!|;|\")\s/ig, "$1_MC $2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/([A-Za-z]+)(\.|\,|\?|:|!|;|\")/, "$1 $2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/(\.|\,|\?|:|!|;|\")([A-Za-z]+)/, "$1 $2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\s(\.|\,|\?|:|!|;|\")\s/, " $1_$1 ");
document.getElementById("MT").value = res;
//' d
var str = document.getElementById("MT").value;
var res = str.replace(/\s(') (d_)/, " $1$2");
document.getElementById("MT").value = res;
//going first! 
//I_PPIS1 _PPIS1 I can't work out why sometimes there is a double throwing off tags! this is to delete any unattached...
var str = document.getElementById("MT").value;
var res = str.replace(/\s_[A-Z\d]+\s/g, " ");
document.getElementById("MT").value = res;
//those_DD2 films_NN2_VVZ 
var str = document.getElementById("MT").value;
var res = str.replace(/(_\w+2 \w+_NN2)_VVZ/ig, "$1");
document.getElementById("MT").value = res;
// turns_NN2_VVZ out_RP
var str = document.getElementById("MT").value;
var res = str.replace(/_NN2(_VVZ \w+_RP)/ig, "$1");
document.getElementById("MT").value = res;
//suffix ians nn2
var str = document.getElementById("MT").value;
var res = str.replace(/\b([a-z]+ians)\s/ig, "$1_NN2 ");
document.getElementById("MT").value = res;
//// ELITE (JJ@_NN1) - higher to avoid 'in' being first.
var str = document.getElementById("MT").value;
var res = str.replace(/\b(ELIte|gourmet|KIND|mass|Renaissance)\s/ig, "$1_JJ_NN1 ");
document.getElementById("MT").value = res;
//what_DDQ fun_JJ_NN1 it_PPH1 would_VM
var str = document.getElementById("MT").value;
var res = str.replace(/(_DDQ \w+)_JJ(_NN1 \w+_P\w+)\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
//_GE English_JJ_NN1 ._.
var str = document.getElementById("MT").value;
var res = str.replace(/(_GE \w+)_JJ(_NN1 ._.)\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
//patient_JJ_NN1 ,_, good-natured_JJ
var str = document.getElementById("MT").value;
var res = str.replace(/(_JJ)_NN1 (,_, [\w\-]+_JJ)\s/ig, "$1 $2 ");
document.getElementById("MT").value = res;
//generalize_VV0 Japanese_JJ_NN1 by_II31
//give_VVI concrete_JJ_NN1 the_AT
var str = document.getElementById("MT").value;
var res = str.replace(/(_VV\w+ \w+)_JJ(_NN1 \w+_[IA]\w+)\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
////adjective list//hyphens need to go earlier to stop clashing nouns
var str = document.getElementById("MT").value;
var res = str.replace(/\b(ACTIVE|advisable|ambitious|ashamed|artificial|bothersome|dumb|exciteable|foolish|FUSSY|hardy|inappropriate|marvelous|overcrowded|pale|picky|precautionary|privileged|prudent|resilient|rude|sour|suburban|twee|up-to-date|unsatisfying|unwise|viral|vicious|worthwhile|worthy|short-term|long-term|so-called|traumatic|unfair|well-off|dine-in|long-lost)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
//The_AT air-conditioning_JJ_NN1 in_II
var str = document.getElementById("MT").value;
var res = str.replace(/(_A\w+ \w+-\w+)_JJ(_NN1 \w+_II)\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
//keep_VVI safe_JJ_NN1
var str = document.getElementById("MT").value;
var res = str.replace(/(kee?pt?_V\w+ \w+_JJ)_NN1\s/ig, "$1 ");
document.getElementById("MT").value = res;
//study_VVI English_JJ_NN1 because_CS English_JJ_NN1 is_VBZ
var str = document.getElementById("MT").value;
var res = str.replace(/(_VV\w+ \w+)_JJ(_NN1 \w+_CS[\w\s]*._.)\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
//the_AT hell  ' s wrong_JJ_RR ?_?//not working
var str = document.getElementById("MT").value;
var res = str.replace(/(_A\w+ [a-z]+)  (\' s \w+_JJ_RR ._.)\s/ig, "$1_NN1 $2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/(_CS \w+)_JJ(_NN1 \w+_V\w+)\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(BEING)\s/ig, "$1_VBG ");
document.getElementById("MT").value = res; 
//some reason this gets lost being_VVG VBG
var str = document.getElementById("MT").value;
var res = str.replace(/(being_V)VG\s/ig, "$1BG ");
document.getElementById("MT").value = res; 
//moving this up because not working for some reason lower
var res = str.replace(/\b(BEST)\s/ig, "$1_JJT_RRT ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(activist|anxiety|\w*CONFIDENCE|baggage|bingo|bus|checker|conversation|cow|dollar|gap|hat|hobby|ingredient|refrigerator|grocery|cupboard|entertainment|era|forest|genetics|housework|injustice|latino|liquor|loyalty|malaria|mineral|opponent|overconfidence|penalty|playground|pastry|password|plate|pork|proof|YOGh?URT|resemblance|reliever|robot|traitor|trailer|seeker|self|sister|suicide|survival|synthesis|term|tobacco|van|peanut|butter|zinc)\s/ig, "$1_NN1 "); 
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(artworks|attitudes|bits|blizzards|breakfasts|citizens|circles|ecosystems|fats|heels|masses|memories|pathways|payoffs|penalties|chores|cows|facts|fellas|fireworks|folks|genes|greens|guns|patterns|reds|yellows|hats|injustices|insects|pills|odds|opponents|PANCAKES|passwords|expenses|responses|restraints|robots|teens|things|troops|weapons)\s/ig, "$1_NN2 "); 
document.getElementById("MT").value = res;
//'s is very hard!!!
var str = document.getElementById("MT").value;
var res = str.replace(/(\w+)('s)\s/ig, "$1 $2 ");
document.getElementById("MT").value = res;
//was_VBDZ Luke_NP1 's ,_,
var str = document.getElementById("MT").value;
var res = str.replace(/(_N\w+ 's) ((?:._.|\w+_[CI]\w+))\s/ig, "$1_GE $2 ");
document.getElementById("MT").value = res;
// is_VBZ the_AT use_NN1 of_IO another_DD1 's
var str = document.getElementById("MT").value;
var res = str.replace(/(_VB\w+ \w+_A\w+ \w+_N\w+ \w+_I\w+ \w+_DD1 's)\s/ig, "$1_GE ");
document.getElementById("MT").value = res;
//That_DD1 's not_XX
var str = document.getElementById("MT").value;
var res = str.replace(/(_(?:D\w+|RT) 's) (\w+_X\w+ \w+J\w+)\s/ig, "$1_VBZ $2 ");
document.getElementById("MT").value = res;
//Now_RT 's not_XX
var str = document.getElementById("MT").value;
var res = str.replace(/(_RT 's)\s/ig, "$1_VBZ "); 
document.getElementById("MT").value = res;
//Someone_PN1 's in_II 
var str = document.getElementById("MT").value;
var res = str.replace(/([A-Z]\w+_PN1 's) (\w+_II)\s/g, "$1_VBZ $2 "); 
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/(_D\w+ 's)\s/ig, "$1_VBZ_VHZ ");
document.getElementById("MT").value = res;
//_VBZ_VHZ kind_RR21 of_RR22 a_AT1 //this is not always the case.
var str = document.getElementById("MT").value;
var res = str.replace(/(_VBZ)_VHZ (\w+_RR21 \w+_RR22 a_AT1)\s/ig, "$1 $2 ");
document.getElementById("MT").value = res;
// job_NN1 's_VBZ_VHZ done_VDN ._. // is done not always...
var str = document.getElementById("MT").value;
var res = str.replace(/(_VBZ)_VHZ (\w+_VDN ._.)\s/ig, "$1 $2 ");
document.getElementById("MT").value = res;
//_VBZ_VHZ Annabel_NP1 got_VVN
var str = document.getElementById("MT").value;
var res = str.replace(/_VBZ(_VHZ \w+_N\w+ \w+)_VVD(_VVN)\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
//The station is just a five-minute walk from the house.
var str = document.getElementById("MT").value;
var res = str.replace(/(_VB\w+ just_)JJ (\w+_A\w+)\s/ig, "$1RR $2 ");
document.getElementById("MT").value = res;
// 's_VBZ_VHZ just_JJ as_CSA well_JJ_NN1
var str = document.getElementById("MT").value;
var res = str.replace(/(_VBZ)_VHZ (just_)JJ (as_)CSA (well_JJ)_NN1\s/ig, "$1 $2RR $3RG $4 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/(_VBZ) (just_)JJ (as_)CSA (well_JJ)_NN1\s/ig, "$1 $2RR $3RG $4 ");
document.getElementById("MT").value = res;
//_VBZ_VHZ just_RR as_RG well_JJ_NN1
var str = document.getElementById("MT").value;
var res = str.replace(/(_VBZ)_VHZ (just_RR as_RG well_JJ)_NN1\s/ig, "$1 $2 ");
document.getElementById("MT").value = res;
//Charlie_NP1 's_GE up_RPnext_MD//there is a space mssing somewhere.
var str = document.getElementById("MT").value;
var res = str.replace(/(_NP1 's_)GE (\w+_RP)(\w+)\s/ig, "$1VBZ $2 $3 ");
document.getElementById("MT").value = res;
//_VBZ_VHZ up
var str = document.getElementById("MT").value;
var res = str.replace(/(_VBZ)_VHZ (up_\w+)\s/ig, "$1 $2 ");
document.getElementById("MT").value = res;
//_VBZ_VHZ not_XX even_RR close_JJ
var str = document.getElementById("MT").value;
var res = str.replace(/(_VBZ)_VHZ ([\w\']+_XX \w+_RR \w+_JJ)\s/ig, "$1 $2 ");
document.getElementById("MT").value = res;
//what_DDQ 's_VBZ_VHZ more_RRR ,_,
var str = document.getElementById("MT").value;
var res = str.replace(/(what_DDQ 's_VBZ)_VHZ (more_RRR ,_,)\s/ig, "$1 $2 ");
document.getElementById("MT").value = res;
//'s_VBZ_VHZ not_XX for_IF
var str = document.getElementById("MT").value;
var res = str.replace(/(_VBZ)_VHZ ([\'\w]+_XX \w+_I\w+)\s/ig, "$1 $2 ");
document.getElementById("MT").value = res;
//'s_VBZ_VHZ only_RR going_VVGK//_VBZ_VHZ gon_VVGK
var str = document.getElementById("MT").value;
var res = str.replace(/(_VBZ)_VHZ (\w+_RR \w+_VVG\w*)\s/ig, "$1 $2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/(_VBZ)_VHZ (\w+_VVGK\w*)\s/ig, "$1 $2 ");
document.getElementById("MT").value = res;
//_VBZ_VHZ even_RR larger_JJR ._. 
var str = document.getElementById("MT").value;
var res = str.replace(/(_VBZ)_VHZ (\w+_RR \w+_JJR ._.)\s/ig, "$1 $2 ");
document.getElementById("MT").value = res;
//_VBZ_VHZ not_XX any_DD
var str = document.getElementById("MT").value;
var res = str.replace(/(_VBZ)_VHZ (n.t_XX \w+_DD)\s/ig, "$1 $2 ");
document.getElementById("MT").value = res;
//That_DD1 's all_DB
var str = document.getElementById("MT").value;
var res = str.replace(/(_D\w+ 's) (\w+_D\w+)\s/ig, "$1_VBZ $2 ");
document.getElementById("MT").value = res;
//_CST ' s_VBZ
var str = document.getElementById("MT").value;
var res = str.replace(/(that_)CST ' (s_VBZ)\s/ig, "$1DD1 '$2 ");
document.getElementById("MT").value = res;
//'s_VBZ_VHZ not_XX as_CSA
var str = document.getElementById("MT").value;
var res = str.replace(/(_VBZ)_VHZ (\w+_XX \w+_C)\s/ig, "$1 $2 ");
document.getElementById("MT").value = res;
//_VBZ_VHZ being_VBG// 's_VBZ_VHZ quite_RG
var str = document.getElementById("MT").value;
var res = str.replace(/(_VBZ)_VHZ (\w+_(?:V.|R)G)\s/ig, "$1 $2 ");
document.getElementById("MT").value = res;
// 's_VBZ_VHZ really_RR good_JJ ._. //'s_VBZ_VHZ more_RGR likely_JJ 
var str = document.getElementById("MT").value;
var res = str.replace(/(_VBZ)_VHZ (\w+_R\w+ \w+_JJ ._.)\s/ig, "$1 $2 ");
document.getElementById("MT").value = res;
//not a noun
var str = document.getElementById("MT").value;
var res = str.replace(/(_VBZ)_VHZ (\w+_R\w+ \w+_JJ \w+_[^N]\w+)\s/ig, "$1 $2 ");
document.getElementById("MT").value = res;
//'s_VBZ_VHZ really_RR not_XX enough_RR to_TO
var str = document.getElementById("MT").value;
var res = str.replace(/(_VBZ)_VHZ (\w+_R\w+ \w+_XX \w+_R\w+ \w+_TO)\s/ig, "$1 $2 ");
document.getElementById("MT").value = res;
//'s_VBZ_VHZ one_MC1 of_IO
var str = document.getElementById("MT").value;
var res = str.replace(/(_VBZ)_VHZ (\w+_M\w+)\s/ig, "$1 $2 ");
document.getElementById("MT").value = res;
// 's_VBZ_VHZ on_II the_AT collective_JJ
var str = document.getElementById("MT").value;
var res = str.replace(/(_VBZ)_VHZ (\w+_I\w+ \w+_A\w+ \w+_JJ)\s/ig, "$1 $2 ");
document.getElementById("MT").value = res;
//it_PPH1 's_VBZ_VHZ not_XX enough_RR ._.
var str = document.getElementById("MT").value;
var res = str.replace(/(_\w+1 's_VBZ)_VHZ (not_XX \w+_RR ._.)\s/ig, "$1 $2 ");
document.getElementById("MT").value = res;
//she_PPHS1 's
var str = document.getElementById("MT").value;
var res = str.replace(/(_PP\w* 's)\s/ig, "$1_VBZ_VHZ ");
document.getElementById("MT").value = res;
//
var str = document.getElementById("MT").value;
var res = str.replace(/([A-Z]+\w+_NP1\w*) ('s) (\w+)\s/g, "$1 $2_GE $3");
document.getElementById("MT").value = res;
//a space creeped in
var str = document.getElementById("MT").value;
var res = str.replace(/\s(')\s(s)\s/ig, " $1$2 ");
document.getElementById("MT").value = res;
//_VBZ_VHZ thought_NN1_VVN//causing so many problems!//remove pronoun P
var str = document.getElementById("MT").value;
var res = str.replace(/(\w+_N\w*) ('s)\w* (\w+_N\w*)\s/ig, "$1 $2_GE $3 ");
document.getElementById("MT").value = res;
//its just an impossible grammar: _VBZ thought_VVN to_TO 
var str = document.getElementById("MT").value;
var res = str.replace(/(_VBZ)_VHZ (thought_VVN to_TO)\s/ig, "$1 $2 ");
document.getElementById("MT").value = res;
//this causing errors with one's best.//I can't think of how to change this except to avoid o for one. didnt work so now avoid PN1.//there must be later changer somewhere.
var str = document.getElementById("MT").value;
var res = str.replace(/\b(\w+_[NP]\w*) ('s) (\w+_[AJ]\w*)\s/ig, "$1 $2_VBZ $3 ");
document.getElementById("MT").value = res;
//_MC1_PN1 's best_JJT
var str = document.getElementById("MT").value;
var res = str.replace(/_MC1(_PN1 's) (\w+_JJT)\s/ig, "$1_GE $2 ");
document.getElementById("MT").value = res;
//
var str = document.getElementById("MT").value;
var res = str.replace(/(\w+_[NP]\w*) ('s)\w* (going)_\w* (to_TO) (\w+_V\wI)\s/ig, "$1 $2_VBZ $3_VVGK $4 $5 ");
document.getElementById("MT").value = res;
//
var str = document.getElementById("MT").value;
var res = str.replace(/(there)\s/ig, "$1_EX_RL "); 
document.getElementById("MT").value = res;
//there_EX_RL 's_VBZ virtually_RR nothing_PN1 
var str = document.getElementById("MT").value;
var res = str.replace(/(_EX)_RL( 's_VBZ \w+_RR \w+_[PN]\w+)\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
//he_PPHS1 was_VBDZ there_EX // his_APPGE wife_NN1 was_VBDZ there_EX and_CC 
var str = document.getElementById("MT").value;
var res = str.replace(/(_[NPD]\w+ \w+_VB\w+ \w+)_EX(_RL)\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
//walk_VV0 by_II there_EX_RL
var str = document.getElementById("MT").value;
var res = str.replace(/(_V\w+ \w+_II \w+)_EX(_RL)\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
//There_NP1 's
var str = document.getElementById("MT").value;
var res = str.replace(/(There)_NP1 (\'s)\s/g, "$1_EX $2_VBZ ");
document.getElementById("MT").value = res;
//is_VBZ there_EX_RL
var str = document.getElementById("MT").value;
var res = str.replace(/(_VB\w+ there_EX)_RL\s/ig, "$1 ");
document.getElementById("MT").value = res;
//there_RL has_VHZ to_TO be_VBI
var str = document.getElementById("MT").value;
var res = str.replace(/(_EX)_RL ([\w\s]+\w+_VB\w+)\s/ig, "$1 $2 ");
document.getElementById("MT").value = res;
//still not catching so:
var str = document.getElementById("MT").value;
var res = str.replace(/(there)_RL ([\w\s]+\w+_VB\w+)\s/ig, "$1_EX $2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/(_EX)_RL ('s)\s/ig, "$1 $2_VBZ ");
document.getElementById("MT").value = res;
//there is_VBZ
var str = document.getElementById("MT").value;
var res = str.replace(/(_EX)_RL (is)\s/ig, "$1 $2_VBZ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/(it_\w*) ('s)\s/ig, "$1 $2_VBZ_VHZ ");
document.getElementById("MT").value = res;
//_VBZ_VHZ not_XX a_AT1
var str = document.getElementById("MT").value;
var res = str.replace(/(_VBZ)_VHZ (\w+_XX \w+_A\w+)\s/ig, "$1 $2 ");
document.getElementById("MT").value = res;
//modal or be after there
var str = document.getElementById("MT").value;
var res = str.replace(/(_EX)_RL (\w+_V[BM]\w*)\s/ig, "$1 $2 ");
document.getElementById("MT").value = res;
//if not EX then there is always RL
var str = document.getElementById("MT").value;
var res = str.replace(/_EX(_RL) (\w+_\w[^B]\w*)\s/ig, "$1 $2 "); 
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/_EX(_RL) (\W+_\W+)\s/ig, "$1 $2 "); 
document.getElementById("MT").value = res;
//
var str = document.getElementById("MT").value;
var res = str.replace(/\b(\'re)\s/ig, " $1_VBR ");//must go before pronouns
document.getElementById("MT").value = res;
//' re_VBR
var str = document.getElementById("MT").value;
var res = str.replace(/(') (re_VBR)\s/ig, " $1$2 ");//must go before pronouns
document.getElementById("MT").value = res;
//
var str = document.getElementById("MT").value;
var res = str.replace(/(\')\s*(LL)\s/ig, " $1$2_VM ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/(\')\s*(M)\s/ig, " $1$2_VBM ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/(\')\s*(RE)\s/ig, " $1$2_VBR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/(\')\s*(VE) /ig, " $1$2_VH0 ");
document.getElementById("MT").value = res;
//space is weird ' ve
var str = document.getElementById("MT").value;
var res = str.replace(/(') (ve_VH0)\s/ig, " $1$2 ");
document.getElementById("MT").value = res;
//_TO always_RR have_VH0
var str = document.getElementById("MT").value;
var res = str.replace(/(_TO \w+_RR have_VH)0\s/ig, " $1I ");
document.getElementById("MT").value = res;
//not sure about the spacing here.
var str = document.getElementById("MT").value;
var res = str.replace(/(\')\s*(d)\s/ig, " $1$2_VHD_VM ");
document.getElementById("MT").value = res;
//_VHD_VM rather
var str = document.getElementById("MT").value;
var res = str.replace(/_VHD(_VM rather_RR)\s/ig, "$1 ");
document.getElementById("MT").value = res;
// 'd_VHD_VM rather_RR have_VHI 
var str = document.getElementById("MT").value;
var res = str.replace(/_VHD(_VM \w+_RR \w+_V.I)\s/ig, " $1 ");
document.getElementById("MT").value = res;
// 'd_VHD sooner_RRR 
var str = document.getElementById("MT").value;
var res = str.replace(/_VHD(_VM sooner_RRR)\s/ig, "$1 ");
document.getElementById("MT").value = res;
//_VHD_VM better_JJR_RRR
var str = document.getElementById("MT").value;
var res = str.replace(/(_VHD)_VM (\w+)_JJR(_RRR)\s/ig, "$1 $2$3 ");
document.getElementById("MT").value = res;
//would_VM later_JJR_RRR 
var str = document.getElementById("MT").value;
var res = str.replace(/(_VM \w+)_JJR(_RRR)\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
//_VHD_VM better_RRR 
var str = document.getElementById("MT").value;
var res = str.replace(/(_VHD)_VM (\w+_RRR)\s/ig, "$1 $2 "); 
document.getElementById("MT").value = res;
//had_VHD better_RRR get_VV0
var str = document.getElementById("MT").value;
var res = str.replace(/(_VHD \w+_RRR \w+_VV)0\s/ig, "$1I ");
document.getElementById("MT").value = res;
//'d_ VHD_VM just_RR pull_VVI
//'d_VHD_VM always_RR ask_VVI 
var str = document.getElementById("MT").value;
var res = str.replace(/('d)_VHD(_VM) (\w+_R\w* \w+_VVI)\s/ig, "$1$2 $3 ");
document.getElementById("MT").value = res;
//'d_VHD_VM rather_RG_RR we_PPIS2
var str = document.getElementById("MT").value;
var res = str.replace(/_VHD(_VM \w+)_RG(_RR \w+_[PNED]\w+)\s/ig, "$1$2 "); 
document.getElementById("MT").value = res;
//_RG_RR not_XX
var str = document.getElementById("MT").value;
var res = str.replace(/_RG(_RR \w+_XX)\s/ig, "$1 "); 
document.getElementById("MT").value = res;
//is_VBZ the_AT class_NN1 just_JJ for_IF // this is not a good code... can go both ways
var str = document.getElementById("MT").value;
var res = str.replace(/(_V\w+ \w+_A\w+ \w+_N\w+ \w+)_JJ(_RR \w+_I\w+)\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
//the_AT 15-passenger van_NN1
var str = document.getElementById("MT").value;
var res = str.replace(/(_A\w+ [\w\d]+-[a-z]+) (\w+_N\w+)\s/ig, "$1_JJ $2 ");
document.getElementById("MT").value = res;
//cousins'.
var str = document.getElementById("MT").value;
var res = str.replace(/\b([a-z]+[^n])(\')/ig, "$1 $2 ");
document.getElementById("MT").value = res;
//cousins_NN2 '
var str = document.getElementById("MT").value;
var res = str.replace(/(_NN2 \')\s/ig, "$1_GE ");
document.getElementById("MT").value = res;
//GE np1 _II New_NP1 Zealand_NP1 's after prepostion
var str = document.getElementById("MT").value;
var res = str.replace(/(_I\w+ \w+_N\w+ 's)\s/ig, "$1_GE ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/(_I\w+ \w+_N\w+ \w+_N\w+ 's)\s/ig, "$1_GE ");
document.getElementById("MT").value = res;
//_VBZ_VHZ time_NNT1 we_PPIS2
var str = document.getElementById("MT").value;
var res = str.replace(/(_VBZ)_VHZ (\w+_N\w+ \w+_[NPEDA]\w+)\s/ig, "$1 $2 ");
document.getElementById("MT").value = res;
//_DD1 's the_AT
var str = document.getElementById("MT").value;
var res = str.replace(/(_DD1 's) (\w+_A\w*)\s/ig, "$1_VBZ $2 ");
document.getElementById("MT").value = res;
//all_DB 's well_RR ._. 
var str = document.getElementById("MT").value;
var res = str.replace(/(_DB 's) (well_RR)\s/ig, "$1_VBZ $2 ");
document.getElementById("MT").value = res;
// 's never_RR going_VVG
var str = document.getElementById("MT").value;
var res = str.replace(/('s) (\w+_R\w* \w+_V\wG)\s/ig, "$1_VBZ $2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(WO|CA)\s/ig, "$1_VM ");
document.getElementById("MT").value = res;
//
var str = document.getElementById("MT").value;
var res = str.replace(/(\w)(n't)\s/ig, "$1 $2_XX ");
document.getElementById("MT").value = res;
//
//pronouns
//her is special
//1		  HER ()	10859688	2		  HER ()	4092639
var str = document.getElementById("MT").value;
var res = str.replace(/\b(her)\s/ig, "$1_APPGE_PPHO1 ");
document.getElementById("MT").value = res;
//her_APPGE_PPHO1 hard-earned_JJ cash_NN1
// her_PPHO1 being_VBG
var str = document.getElementById("MT").value;
var res = str.replace(/(_APPGE)_PPHO1 ([\w-]+_JJ\w*)\s/ig, "$1 $2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/(_APPGE)_PPHO1 (\w+_V\wG)\s/ig, "$1 $2 ");
document.getElementById("MT").value = res; 
var str = document.getElementById("MT").value;
var res = str.replace(/_APPGE(_PPHO1 \w+_[^N]\w*)\s/ig, "$1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/_APPGE(_PPHO1 ._.)\s/ig, "$1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/(_APPGE)_PPHO1 (\w+_[JN]\w*)\s/ig, "$1 $2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(you)\s/ig, "$1_PPY ");
document.getElementById("MT").value = res;
//information tech
var str = document.getElementById("MT").value;
var res = str.replace(/\b(bit|cousin|diabetes|fable|grammar|gym|script|yoga)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(IT)\s/g, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(it)\s/ig, "$1_PPH1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(we)\s/ig, "$1_PPIS2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(I)\s/g, "$1_PPIS1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(they)\s/ig, "$1_PPHS2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(them)\s/ig, "$1_PPHO2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(he|she)\s/ig, "$1_PPHS1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(me)\s/ig, "$1_PPIO1 ");
document.getElementById("MT").value = res;
//VERB BE
var str = document.getElementById("MT").value;
var res = str.replace(/\b(am)\s/ig, "$1_VBM ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(\'m)\s/ig, "$1_VBM ");
document.getElementById("MT").value = res;
//' m_VBM
var str = document.getElementById("MT").value;
var res = str.replace(/(\') (m_VBM)\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(is)\s/ig, "$1_VBZ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(are)\s/ig, "$1_VBR ");
document.getElementById("MT").value = res;
//VB0//  imperative
var str = document.getElementById("MT").value;
var res = str.replace(/(Be)\s/g, "$1_VB0 "); //be
document.getElementById("MT").value = res;
//so_CS_RG_RR // Be_VB0 _CS_RG_RR kind_JJ_NN1 
var str = document.getElementById("MT").value;
var res = str.replace(/(_VB0 \w+)_CS(_RG)_RR (\w+_JJ)_NN1\s/ig, "$1$2 $3 "); 
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(be)\s/ig, "$1_VBI "); //be
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(was)\s/ig, "$1_VBDZ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(BEEN)\s/ig, "$1_VBN "); //been make sure to escape!!!!
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(WERE)\s/ig, "$1_VBDR ");
document.getElementById("MT").value = res;
//VM modal
var str = document.getElementById("MT").value;
var res = str.replace(/\b(WOULD|will|can|MAY|SHOULD|COULD|MUST|MIGHT|SHALL)\s/ig, "$1_VM ");
document.getElementById("MT").value = res;
//removed insensitive
var str = document.getElementById("MT").value;
var res = str.replace(/(_[ADJ]\w+ [wMcm]\w+)_VM (\w+_VB[^I]\w+)\s/g, "$1_NN1 $2 ");
document.getElementById("MT").value = res;
//to_II his_PPGE will_VM ,_,
var str = document.getElementById("MT").value;
var res = str.replace(/(_II \w+_PPGE [wMcm]\w+)_VM (._.)\s/ig, "$1_NN1 $2 ");
document.getElementById("MT").value = res;
//alphabetical by first word
var str = document.getElementById("MT").value;
var res = str.replace(/\b(A|AN|EVERY)\s/ig, "$1_AT1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b((?:ISLAND|co-worker|\d+\-\w+\-old)s)\s/ig, "$1_NN2 ");//10-year-olds
document.getElementById("MT").value = res;
//a_AT1 five-year-old_JJ would_VM
var str = document.getElementById("MT").value;
var res = str.replace(/(_A\w+ \w+\-\w+\-old) (\w+_V\w+|\._\.)\s/ig, "$1_NN1 $2 ");//a 10-year-old
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/(_A\w+ \d+\-\w+\-old) (\w+_V\w+|\._\.)\s/ig, "$1_NN1 $2 ");//a 10-year-old
document.getElementById("MT").value = res;
//a_AT1 bit_NN1 of_IO
var str = document.getElementById("MT").value;
var res = str.replace(/\b(A)_\w* (bit)_\w* (\w+_\w[^O]\w*)\s/ig, "$1_RR21 $2_RR22 $3 ");
document.getElementById("MT").value = res;
//no longer
var str = document.getElementById("MT").value;
var res = str.replace(/\b(no|any)_[^R]\w* (longer)_\w*\s/ig, "$1_RR21 $2_RR22 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(once)_\w* (more)_\w*\s/ig, "$1_RR21 $2_RR22 ");
document.getElementById("MT").value = res;
//sort_VV0 of_IO warped_VVD
var str = document.getElementById("MT").value;
var res = str.replace(/(sort)_\w+ (of)_IO (\w+_V\w+)\s/ig, "$1_RR21 $2_RR22 $3 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(just)_RR (about)_\w*\s/ig, "$1_RR21 $2_RR22 ");
document.getElementById("MT").value = res;
//cannot
var str = document.getElementById("MT").value;
var res = str.replace(/\b(can)(not)\s/ig, "$1_VM $2 ");
document.getElementById("MT").value = res; 
var str = document.getElementById("MT").value;
var res = str.replace(/\b(all)\s/ig, "$1_DB ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(all)_[^R]\w* (the)_\w* (same)_\w*\s/ig, "$1_RR31 $2_RR32 $3_RR33 ");
document.getElementById("MT").value = res;
//so_RR31 much_RR32 as_RR33//mostly tagged this way but not always.
var str = document.getElementById("MT").value;
var res = str.replace(/\b(so)_\w* (much)_\w* (as)_\w*\s/ig, "$1_RR31 $2_RR32 $3_RR33 ");
document.getElementById("MT").value = res;
//at_II long_RR last_MD_VV0
var str = document.getElementById("MT").value;
var res = str.replace(/\b(at)_[^R]\w* (long)_\w* (last)_\w*\s/ig, "$1_RR31 $2_RR32 $3_RR33 ");
document.getElementById("MT").value = res;
//by_II no_AT means_NN_VVZ
var str = document.getElementById("MT").value;
var res = str.replace(/\b(by_)II( no_)AT( means_)NN_VVZ*\s/ig, "$1RR31$2RR32$3RR33 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(and)_[^R]\w* (so)_\w* (forth)_\w*\s/ig, "$1_RR31 $2_RR32 $3_RR33 "); 
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(every)_[^R]\w* (so)_\w* (often)_\w*\s/ig, "$1_RR31 $2_RR32 $3_RR33 ");
document.getElementById("MT").value = res;
//a_AT1 little_DA1_JJ bit_NN1 - this cannot accept if 'of' is following.
var str = document.getElementById("MT").value;
var res = str.replace(/\b(a)_A\w* (little)_\w* (bit)_\w* (\w+_[^I][^O]\w*)\s/ig, "$1_RR31 $2_RR32 $3_RR33 $4 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(a)_A\w* (little)_\w* (bit)_\w* (._.)\s/ig, "$1_RR31 $2_RR32 $3_RR33 $4 ");
document.getElementById("MT").value = res;
//it_PPH1 daily_JJ_RR ._. 
var str = document.getElementById("MT").value;
var res = str.replace(/(_PPH\w+ \w+)_JJ(_RR ._.)\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
//stay_VVI up_RP late_JJ_RR ._. 
var str = document.getElementById("MT").value;
var res = str.replace(/(_VV\w+ \w+ \w+)_JJ(_RR ._.)\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
//just_JJ_RR a_RR31//are_VBR just_JJ a_AT1 
var str = document.getElementById("MT").value;
var res = str.replace(/_JJ(_RR \w+_RR31)\s/ig, "$1 ");
document.getElementById("MT").value = res;
//Just_JJ_RR the_AT//removed insensitive 
var str = document.getElementById("MT").value;
var res = str.replace(/\b(Just)_JJ(_RR)\s/g, "$1$2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(Just)_JJ(_RR \w+_JJ)\s/ig, "$1$2 "); 
document.getElementById("MT").value = res;
//just amazing
var str = document.getElementById("MT").value;
var res = str.replace(/\b(Just)_JJ (\w+_JJ)\s/ig, "$1_RR $2 "); 
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(all)_[^R]\w* (at)\w* (once)\w*\s/ig, "$1_RR31 $2_RR32 $3_RR33 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(lo)\w* (and)_[^R]\w* (behold)\w*\s/ig, "$1_UH31 $2_UH32 $3_UH33 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(and|nor)\s/ig, "$1_CC ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(but)\s/ig, "$1_CCB ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(ONCE)\s/ig, "$1_CS_RR "); 
document.getElementById("MT").value = res;
//once_CS_RR ._.
var str = document.getElementById("MT").value;
var res = str.replace(/_CS(_RR \._.)\s/ig, "$1 "); 
document.getElementById("MT").value = res;
//I_PPIS1 once_CS_RR asked_VVD// they once knew//doesnt need capital
var str = document.getElementById("MT").value;
var res = str.replace(/(_[PN]\w+ \w+)_CS(_RR \w+_V\w+)\s/ig, "$1$2 "); 
document.getElementById("MT").value = res;
//update_VVI my_APPGE application_NN1 once_CS it_PPH1 has_VHZ
var str = document.getElementById("MT").value;
var res = str.replace(/(_V[\w\s]+_CS)_RR ([\w\s\']+_V\w+)\s/ig, "$1 $2 "); 
document.getElementById("MT").value = res;
//and_CC so_CS_RR did_VDD we_PPIS2 ._.  
var str = document.getElementById("MT").value;
var res = str.replace(/(_CC \w+)_CS(_RR \w+_V[BHDM]\w+ \w+_P\w+ ._.)\s/ig, "$1$2 "); 
document.getElementById("MT").value = res;
//argued_VVN though_CS_RR that_CST 
var str = document.getElementById("MT").value;
var res = str.replace(/(_V\w+ \w+)_CS(_RR \w+_CS\w+)\s/ig, "$1$2 "); 
document.getElementById("MT").value = res;
//just once_CS_RR ,_,
var str = document.getElementById("MT").value;
var res = str.replace(/_CS(_RR ,_,)\s/ig, "$1 "); 
document.getElementById("MT").value = res;
//once_CS_RR or_CC twice_RR
var str = document.getElementById("MT").value;
var res = str.replace(/_CS(_RR \w+_CC \w+_RR)\s/ig, "$1 "); 
document.getElementById("MT").value = res;
//once_CS_RR was_VBDZ ._. 
var str = document.getElementById("MT").value;
var res = str.replace(/_CS(_RR \w+_V\w+ ._.)\s/g, "$1 ");
document.getElementById("MT").value = res;
//,_, though_CS_RR ,_, 
var str = document.getElementById("MT").value;
var res = str.replace(/(,_, \w+_CS)_RR (,_,)\s/g, "$1 $2 ");
document.getElementById("MT").value = res;
//Once_CS_RR you_PPY 
var str = document.getElementById("MT").value;
var res = str.replace(/\b([A-Z]+\w+_CS)_RR\s/g, "$1 "); 
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(once)_\w* (and)_\w* (for)\w* (all)\w*\s/ig, "$1_RR41 $2_RR42 $3_RR43 $4_RR44 ");
document.getElementById("MT").value = res;
//from_II time_NNT1 to_II time_NNT1
var str = document.getElementById("MT").value;
var res = str.replace(/(from)_I\w* (time)_N\w* (to)_\w* (time)_\w*\s/ig, "$1_RR41 $2_RR42 $3_RR43 $4_RR44 ");
document.getElementById("MT").value = res;
//All_RR41 of_RR42 a_RR43 sudden_RR44
var str = document.getElementById("MT").value;
var res = str.replace(/\b(all)_\w* (of)_\w* (a)_\w* (sudden)\w*\s/ig, "$1_RR41 $2_RR42 $3_RR43 $4_RR44 ");
document.getElementById("MT").value = res;
//The_AT one_PN1 that_DD1 comes_VVZ // The_AT ones_NN2 that_DD1 make_VV0
var str = document.getElementById("MT").value;
var res = str.replace(/(_A\w+ \w+_[PN]\w+ that_CST)_DD1 (\w+_V\w+)\s/ig, "$1 $2 ");
document.getElementById("MT").value = res;
// come - moved up 
var str = document.getElementById("MT").value;
var res = str.replace(/\b(overcome|come)\s/ig, "$1_VV0_VVN ");
document.getElementById("MT").value = res;
//have_VHI come_VV0_VVN
var str = document.getElementById("MT").value;
var res = str.replace(/(_V[BH]\w* \w+)_VV0(_VVN)\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
//this is risky - but rare - as catching this is too long! that_CST_DD1 once_CS_RR//that_CST that_CST_DD1
var str = document.getElementById("MT").value;
var res = str.replace(/(_CST that)_CST(_DD1)\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/(_CST)_DD1 (\w+_CS)_RR\s/ig, "$1 $2 ");
document.getElementById("MT").value = res;
//that_CST_DD1 do_VD0
var str = document.getElementById("MT").value;
var res = str.replace(/(_CST)_DD1 (\w+_V.0)\s/ig, "$1 $2 ");
document.getElementById("MT").value = res;
//so_CS_RG_RR that_CST_DD1
var str = document.getElementById("MT").value;
var res = str.replace(/_CS_RG(_RR that_CST)_DD1\s/ig, "$1 ");
document.getElementById("MT").value = res;
//so_CS_RG_RR // kind_JJ_NN1
var str = document.getElementById("MT").value;
var res = str.replace(/_CS(_RG)_RR (\w+_JJ)_NN1\s/ig, "$1 $2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;//im so glad
var res = str.replace(/(_VB[\w\'\s]+\w+)_CS(_RG)_RR (\w+_JJ)\s/ig, "$1 $2 ");
document.getElementById("MT").value = res;
//get_VV0 the_AT first_MD action_NN1 right_JJ_NN1 !_! 
var str = document.getElementById("MT").value;
var res = str.replace(/(g[eo]t\w*_V\w+ [\w\s]+_JJ)_NN1 (._.)\s/ig, "$1 $2 ");
document.getElementById("MT").value = res;
//right_JJ_NN1_RR now_RT
var str = document.getElementById("MT").value;
var res = str.replace(/_JJ_NN1(_RR \w+_RT)\s/ig, "$1 ");
document.getElementById("MT").value = res;
//,_, that_CST_DD1 's_VBZ
var str = document.getElementById("MT").value;
var res = str.replace(/(,_, that)_CST(_DD1 's_VBZ)\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
//not_XX that_DD1 easy_JJ
var str = document.getElementById("MT").value;
var res = str.replace(/(_XX \w+_CST)_DD1 (\w+_JJ)\s/ig, "$1 $2 "); 
document.getElementById("MT").value = res;
//video_NN1 that_DD1 shows_NN2
var str = document.getElementById("MT").value;
var res = str.replace(/(_N\w+ \w+_CST)_DD1 (\w+_N\w+)\s/ig, "$1 $2 ");
document.getElementById("MT").value = res;
//that_DD1 perhaps_RR we_PPIS2 should_VM
var str = document.getElementById("MT").value;
var res = str.replace(/(_CST)_DD1 (\w+_RR \w+_P\w+ \w+_V\w+)\s/ig, "$1 $2 ");
document.getElementById("MT").value = res;
//clear_JJ that_DD1 autism_NN1
var str = document.getElementById("MT").value;
var res = str.replace(/(_JJ \w+_CST)_DD1 (\w+_N\w+)\s/ig, "$1 $2 ");
document.getElementById("MT").value = res;
//eighth-grade
var str = document.getElementById("MT").value;
var res = str.replace(/(\w+th-grade)_\w+ (\w+_N\w+)\s/ig, "$1_JJ $2 ");
document.getElementById("MT").value = res;
//that_DD1 offers_NN2
var str = document.getElementById("MT").value;
var res = str.replace(/(_CST)_DD1 (\w+)_NN2(_V\wZ)\s/ig, "$1 $2$3 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/(_N\w+ \w+_CST \w+)_NN2(_VVZ)\s/ig, "$1$2 "); 
document.getElementById("MT").value = res;
//I_PPIS1 suggest_VV0 that_CST_DD1 people_NN who_PNQS have_VH0 synesthesia_NN1 must_VM
var str = document.getElementById("MT").value;
var res = str.replace(/(_P\w+ \w+_V\w+ \w+_CST)_DD1 (\w+_N\w* \w+_P\w* \w+_V\w*)\s/ig, "$1 $2 ");
document.getElementById("MT").value = res;
//Should_VM I_PPIS1 visit_VV0
var str = document.getElementById("MT").value;
var res = str.replace(/(_VM \w+_[NP]\w+ \w+_VV)0\s/ig, "$1I ");
document.getElementById("MT").value = res;
//that_CST_DD1 ,_, //this seems wrong - unless its like reported speech? //so turning off.
//var str = document.getElementById("MT").value;
//var res = str.replace(/(_CS\w*)_DD1 (\W+_\W+)\s/ig, "$1 $2 ");
//document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(and)_[^R]\w* (so)\w* (on)\w*\s/ig, "$1_RR31 $2_RR32 $3_RR33 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(time)_[^R]\w* (and)\w* (again)\w*\s/ig, "$1_RR31 $2_RR32 $3_RR33 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(beneath|by|from|at|per|versus)\s/ig, "$1_II ");
document.getElementById("MT").value = res;
//(RR21) + (LEAST|ALL|FIRST|ONCE|BEST|PRESENT|LAST|LARGE|MOST|RANDOM|LENGTH|WORST) (RR22)
var str = document.getElementById("MT").value;
var res = str.replace(/\b(at)_I\w* (LEAST|ALL|FIRST|ONCE|BEST|PRESENT|LAST|LARGE|MOST|RANDOM|LENGTH|WORST)_\w*\s/ig, "$1_RR21 $2_RR22 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(for)_\w* (once)_\w*\s/ig, "$1_RR21 $2_RR22 ");
document.getElementById("MT").value = res;
//at_II all_DB hours_NNT2
var str = document.getElementById("MT").value;
var res = str.replace(/\b(at)_R\w+ (all)_R\w+ (\w+_N\w+)\s/ig, "$1_II $2_DB $3 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(BECOME|read)\s/ig, "$1_VV0_VVD_VVN ");
document.getElementById("MT").value = res;
//gets_VVZ flustered_VVD_VVN
var str = document.getElementById("MT").value;
var res = str.replace(/\b(get\w*_V\w+ \w+)_VVD(_VVN)\s/ig, "$1$2 ");
document.getElementById("MT").value = res; 
//collected_VVD stuffed_JJ animals_NN2 from_II people_NN in_II the_AT community_NN1 and_CC he_PPHS1 put_VV0_VVD
//are_VBR more_RGR powerfully_RR influenced_VVD
var str = document.getElementById("MT").value;
var res = str.replace(/(_VVD [\w\s]+)_VV0(_VVD)\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/(_V[BH]\w+ \w+_R\w+ \w+_R\w+ \w+)_VVD(_VVN)\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
//_VH0 become_VV0
var str = document.getElementById("MT").value;
var res = str.replace(/(_VH\w+ \w+)_VV0_VVD(_VVN)\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
//Read_VV0_VVD_VVN
var str = document.getElementById("MT").value;
var res = str.replace(/([A-Z]\w+_VV0)_VVD_VVN\s/ig, "$1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/(VH\w+ \w+)_VV0_VVD(_VVN )\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
//would_VM eventually_RR become_VV0_VVD
var str = document.getElementById("MT").value;
var res = str.replace(/(_VM \w+_RR \w+_VV)0_VVD_VVN\s/ig, "$1I ");
document.getElementById("MT").value = res;
//_VBZ_VHZ become_VVN//weird this wont accept 's//weird!!!!!reversing.
var str = document.getElementById("MT").value;
var res = str.replace(/('s)_VBZ(_VHZ become_VVN)\s/ig, "$1$2 "); 
document.getElementById("MT").value = res;
//_VBZ become_VVN
var str = document.getElementById("MT").value;
var res = str.replace(/(_V)B(Z become_VVN)\s/ig, "$1H$2 ");
document.getElementById("MT").value = res;
////have_VH0 n't_XX read_VVI// apostrophe is causing havoc.
var str = document.getElementById("MT").value;
var res = str.replace(/(_V[BH]\w+ [\'\w]+_XX \w+)_VV0_VVD(_VVN)\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
// do_VD0 n't_XX read_VV0_VVD_VVN//this should be delayed because it could have other verbs
var str = document.getElementById("MT").value;
var res = str.replace(/(_XX \w+_VV)0_VVD_VVN ([\w\s]*._.)\s/ig, "$1I $2 ");
document.getElementById("MT").value = res;
//shall_VM I_PPIS1 do_VD0
var str = document.getElementById("MT").value;
var res = str.replace(/(_VM \w+_[NPD]\w+ \w+_V[HD])0\s/ig, "$1I ");
document.getElementById("MT").value = res;
//had_VHD become_VV0_VVN // I had to raise this to stop clashing...
var str = document.getElementById("MT").value;
var res = str.replace(/\b(\w+_V[BH]\w* \w+)_VV0_VVD(_VVN)\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
//Come_VV0_VVN
var str = document.getElementById("MT").value;
var res = str.replace(/([A-Z]+\w+_VV0)_VVN\s/ig, "$1 ");
document.getElementById("MT").value = res;
//have_VH0 become_VV0_VVN
var str = document.getElementById("MT").value;
var res = str.replace(/(_VH\w+ \w+)_VV0(_VVN)\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
//last
var str = document.getElementById("MT").value;
var res = str.replace(/\b(last)\s/ig, "$1_MD_VV0 ");
document.getElementById("MT").value = res;
//the_AT last_MD_VV0
var str = document.getElementById("MT").value;
var res = str.replace(/(_A\w+ \w+_MD)_VV0\s/ig, "$1 ");
document.getElementById("MT").value = res;
//last_MD_VVI week_NNT1
var str = document.getElementById("MT").value;
var res = str.replace(/(_MD)_VV[I0] (\w+_NN\w+)\s/ig, "$1 $2 ");
document.getElementById("MT").value = res;
//to_TO last_MD_VVI
var str = document.getElementById("MT").value;
var res = str.replace(/(_TO \w+)_MD(_VV[0I] \w+_[AD]\w+)\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(by)_[^R]\w* (and)\w* (large|by)\w*\s/ig, "$1_RR31 $2_RR32 $3_RR33 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(by)_[^R]\w* (the|and)\w* (by)\w*\s/ig, "$1_RR31 $2_RR32 $3_RR33 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(for)_[^R]\w* (the)\w* (time)\w* (BEING)\w*\s/ig, "$1_RT41 $2_RT42 $3_RT43 $4_RT44 ");
document.getElementById("MT").value = res;
//as_CSA seriously_RR = as RG 1 AS (CSA) 23605435 3 AS (II)  8260590 6 AS (RG) 4642980
var str = document.getElementById("MT").value; 
var res = str.replace(/\b(AS)\s/ig, "$1_CSA_II_RG ");
document.getElementById("MT").value = res;
//as_CSA_II_RG you_PPY know_VV0
var str = document.getElementById("MT").value;
var res = str.replace(/(_CSA)_II_RG ([\w\s\']+_V\w+)\s/ig, "$1 $2 ");
document.getElementById("MT").value = res;
//As_RG simple_JJ
var str = document.getElementById("MT").value;
var res = str.replace(/_CSA_II(_RG \w+_JJ)\s/ig, "$1 ");
document.getElementById("MT").value = res;
//AS (CS31) SOON (CS32) AS (CS33) As_RG soon_RR as_CSA_II_RG
// as_RG long_JJ_RR_VV0 as_CSA//as far as.
//THIS IS WRONG AS HAPPY AS (IS NOT A CONJUNCTION!)//SO MUST DO INDIVIDUALLY.//many of these can change depending if they are followed by clauses.
var str = document.getElementById("MT").value;
var res = str.replace(/\b(As)_\w* (far|long|soon)_\w* (as)_\w* (\w+_[PND]\w+ \'?\w+_V\w+)\s/ig, "$1_CS31 $2_CS32 $3_CS33 $4 ");
document.getElementById("MT").value = res;
//for_IF long_JJ_RR_VV0 walks_NN2 ._
var str = document.getElementById("MT").value;
var res = str.replace(/(_I\w+ \w+_JJ)_RR_VV0 (\w+_N\w+)\s/ig, "$1 $2 ");
document.getElementById("MT").value = res;
//as_CS31 well_CS32 as_CS33 in_II 
var str = document.getElementById("MT").value;
var res = str.replace(/\b(As_)\w* (\w+_)[CJRV0I_]+\w* (as_)\w* (\w+_I\w+)\s/ig, "$1II31 $2II32 $3II33 $4 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(As_)\w* (opposed_)V\w* (to_)\w*\s/ig, "$1II31 $2II32 $3II33 ");
document.getElementById("MT").value = res;
//by_II means_NN_VVZ of_IO
var str = document.getElementById("MT").value;
var res = str.replace(/\b(by_II) (means_)\w* (of_)IO\w*\s/ig, "$131 $2II32 $3II33 ");
document.getElementById("MT").value = res;
//a_AT1 long_JJ_RR_VV0
var str = document.getElementById("MT").value;
var res = str.replace(/(_A\w* \w+_JJ)_RR_VV0\s/ig, "$1 ");
document.getElementById("MT").value = res;
//so_RR long_JJ_RR_VVI ago_RA
var str = document.getElementById("MT").value;
var res = str.replace(/_JJ(_RR)_VVI (\w+_RA)\s/ig, "$1 $2 ");
document.getElementById("MT").value = res;
//so_RR long_JJ_RR_VV0 as_CSA
var str = document.getElementById("MT").value;
var res = str.replace(/(_RR \w+)_JJ(_RR)_VV0 (\w+_CS\w+)\s/ig, "$1$2 $3 ");
document.getElementById("MT").value = res;
//Not_XX so_RR long_RR
var str = document.getElementById("MT").value;
var res = str.replace(/(so_R)R (\w+_RR)\s/ig, "$1G $2 ");
document.getElementById("MT").value = res;
//as_CSA_II_RG seriously_RR
var str = document.getElementById("MT").value;
var res = str.replace(/\b(\w+)_CS\w*_II(_RG) (\w+_R\w*)\s/ig, "$1$2 $3 ");
document.getElementById("MT").value = res;
//clause
var str = document.getElementById("MT").value;
var res = str.replace(/\b(\w+)(_CS\w*)_II_RG ([\w\s]*\w+_V\w+\s[\w\s]*\W+_\W+)\s/ig, "$1$2 $3 ");
document.getElementById("MT").value = res;
//as article - preposition //as_CSA_II_RG a_AT1 result_NN1 ._.
var str = document.getElementById("MT").value;
var res = str.replace(/\b(AS)_CSA(_II)_RG (\w+_(?:AT|PN|I)\w*[\w\s]*\w+_[^V]\w+\s[\w\s\-]*\W+_\W+)\s/ig, "$1$2 $3");
document.getElementById("MT").value = res;
//JJ RG RL RR
var str = document.getElementById("MT").value;
var res = str.replace(/\b(far)\s/ig, "$1_JJ_RG_RL_RR ");
document.getElementById("MT").value = res;
//Far_JJ_RG_RL_RR too_RG
var str = document.getElementById("MT").value;
var res = str.replace(/_JJ_RG_RL(_RR \w+_RG)\s/ig, "$1 ");
document.getElementById("MT").value = res;
//the_AT far_JJ_RG_RL_RR end_NN1
var str = document.getElementById("MT").value;
var res = str.replace(/(_A\w+ \w+_JJ)_RG_RL_RR (\w+_N\w+)\s/ig, "$1 $2 ");
document.getElementById("MT").value = res;
//So_CS_RG far_JJ_RG_RL_RR
var str = document.getElementById("MT").value;
var res = str.replace(/(so)_CS(_RG \w+)_JJ_RG_RL(_RR)\s/ig, "$1$2$3 ");
document.getElementById("MT").value = res;
//far_JJ_RG_RL_RR away_JJ_RL_RP
var str = document.getElementById("MT").value;
var res = str.replace(/_JJ_RG_RL(_RR \w+)_JJ(_RL)_RP\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
//very_JJ_RG ,_,
var str = document.getElementById("MT").value;
var res = str.replace(/_JJ(_RG ,_,)\s/ig, "$1 ");
document.getElementById("MT").value = res;
//very well //well_JJ_NN1_RR
var str = document.getElementById("MT").value;
var res = str.replace(/(_VB \w+)_JJ(_RG \w+_JJ)_NN1_RR\s/ig, "$1 $2 ");
document.getElementById("MT").value = res;
// is_VBZ way_NN1_RR too_RG hot_JJ
var str = document.getElementById("MT").value;
var res = str.replace(/(_VB\w+ \w+)_NN1(_RR \w+_RG \w+_JJ)\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
//not catching all very_JJ well_JJ_NN1
var str = document.getElementById("MT").value;
var res = str.replace(/(_DB very_)JJ (well_)JJ_NN1\s/ig, "$1RG $2JJ ");
document.getElementById("MT").value = res;
//could_VM n't_XX very_JJ_RG
var str = document.getElementById("MT").value;
var res = str.replace(/(_VM n.t_XX \w+)_JJ(_RG)\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
//_VM n't_XX very_RG well_JJ_NN1_RR
var str = document.getElementById("MT").value;
var res = str.replace(/(_VM n.t_XX \w+_RG \w+)_JJ_NN1(_RR)\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
//_VM n't_XX very_RG well_RR tell_VV0
var str = document.getElementById("MT").value;
var res = str.replace(/(_VM n.t_XX \w+_R\w+ \w+_R\w+ \w+_VV)0\s/ig, "$1I ");
document.getElementById("MT").value = res;
//very_JJ_RG few_DA2 have_V //I think the noun doesnt matter.
//very_JJ_RG few_DA2 _n //very_JJ_RG same_DA 
var str = document.getElementById("MT").value;
var res = str.replace(/_JJ(_RG \w+_DA\w* \w+_[VN]\w+)\s/ig, "$1 ");
document.getElementById("MT").value = res;
// live_VV0 far_JJ_RG_RL_RR from_II//is not far from 
var str = document.getElementById("MT").value;
var res = str.replace(/_JJ_RG_RL(_RR \w+_II)\s/ig, "$1 ");
document.getElementById("MT").value = res;
//by_RR21 far_RR22
var str = document.getElementById("MT").value;
var res = str.replace(/\b(BY)_\w* (far)_\w*\s/ig, "$1_RR21 $2_RR22 "); 
document.getElementById("MT").value = res;
//by_RR21 far_RR22 and_CC away_JJ_RL_RP
var str = document.getElementById("MT").value;
var res = str.replace(/(by)_\w+ (far)_\w+ (and)_C\w+ (away)_\w+\s/ig, "$1_RR41 $2_RR42 $3_RR43 $4_RR44 "); 
document.getElementById("MT").value = res;
//kind_RR21 of_RR22//this is wrong big time... it requires grammar.  must not be an A before.
var str = document.getElementById("MT").value;
var res = str.replace(/\b(\w+_[VPN]\w+ kind)_\w* (of)_\w*\s/ig, "$1_RR21 $2_RR22 "); 
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(\w+_V\w+ all)_\w* (but)_\w*\s/ig, "$1_RR21 $2_RR22 "); 
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(once)_\w* (again)_\w*\s/ig, "$1_RR21 $2_RR22 ");
document.getElementById("MT").value = res;
// for_IF long_JJ_RR_VV0 for long
var str = document.getElementById("MT").value;
var res = str.replace(/\b(for)_IF\w* (long)_\w* (._.)\s/ig, "$1_RR21 $2_RR22 $3 ");
document.getElementById("MT").value = res;
//no verb as_CSA one_PN1 of_IO the_AT greatest_JJT footballers_NN2 of_IO all_DB time_NNT1 ,_,
var str = document.getElementById("MT").value;
var res = str.replace(/\b(in_)\w* (so_)\w* (far_)\w* (as_)\w*\s/ig, "$1CS41 $2CS42 $3CS43 $4CS44 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(in_)\w* (as_)\w* (much_)\w* (as_)\w*\s/ig, "$1CS41 $2CS42 $3CS43 $4CS44 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(insofar)\w* (as)\w*\s/ig, "$1_CS21 $2_CS22 ");
document.getElementById("MT").value = res;
//so_RR that_CST you_PPY can_VM
var str = document.getElementById("MT").value;
var res = str.replace(/\b(so)_\w+ (that)_\w+ ([\w\s\']+_V\w+)\s/ig, "$1_CS21 $2_CS22 $3 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(given)_V\w+ (that)_C\w+ ([\w\s\']+_V\w+)\s/ig, "$1_CS21 $2_CS22 $3 ");
document.getElementById("MT").value = res;
//Even_CS21 if_CS22
var str = document.getElementById("MT").value;
var res = str.replace(/\b(even)\w* (if)\w*\s/ig, "$1_CS21 $2_CS22 ");
document.getElementById("MT").value = res;
//in case (1		  IN (CS21) CASE (CS22)	361695			  IN (II31) CASE (II32)	106214	3		  IN (RR21@) CASE (RR22@)	23606)
var str = document.getElementById("MT").value;
var res = str.replace(/\b(in)_\w* (case)_\w*\s/ig, "$1_CS21 $2_CS22 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(as)_\w* (if|though)_\w*\s/ig, "$1_CS21 $2_CS22 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(in)_\w* (aid|case|front|spite|view)_\w* (of)_\w*\s/ig, "$1_II31 $2_II32 $3_II33 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(on)_\w* (account)_\w* (of)_\w*\s/ig, "$1_II31 $2_II32 $3_II33 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(by)_\w* (way)_N\w* (of)_\w*\s/ig, "$1_II31 $2_II32 $3_II33 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/(for)_I\w+ (fear)_\w* (of)_I\w+\s/ig, "$1_II31 $2_II32 $3_II33 ");
document.getElementById("MT").value = res;
//in_II31 accordance_II32 with_II33
var str = document.getElementById("MT").value;
var res = str.replace(/\b(in)_\w* (accordance)_\w* (with)_\w*\s/ig, "$1_II31 $2_II32 $3_II33 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(in|with)_\w* (RELATION|regard)_\w* (TO)_\w*\s/ig, "$1_II31 $2_II32 $3_II33 ");
document.getElementById("MT").value = res;
//as_II31 well_II32 as_II33 learning_VVG
var str = document.getElementById("MT").value;
var res = str.replace(/\b(as)_\w* (well)_\w* (as)_\w* (\w+_VVG[\w\s]*._.)\s/ig, "$1_II31 $2_II32 $3_II33 $4 ");
document.getElementById("MT").value = res;
//
var str = document.getElementById("MT").value;
var res = str.replace(/\b(in)_[^R]\w* (the)\w* (main)\w* (\W+_\W+)\s/ig, "$1_RR31 $2_RR32 $3_RR33 $4 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(NONE|plenty)\s/ig, "$1_PN ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(none)_[^R]\w* (the)\w* (\w+_JJR)\s/ig, "$1_RR21 $2_RR22 $3 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(TIME|lifetime|MINUTE|meantime)\s/ig, "$1_NNT1 "); 
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(THE)\s/ig, "$1_AT ");//1
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(TO)\s/ig, "$1_TO ");
document.getElementById("MT").value = res;
//to_TO function_NN1_VV0
var str = document.getElementById("MT").value;
var res = str.replace(/(_TO \w+)_NN1(_VV)0\s/ig, "$1$2I ");
document.getElementById("MT").value = res;
//call_NN1_VV0 911_MC
var str = document.getElementById("MT").value;
var res = str.replace(/(call)_NN1(_VV0 \w+_MC)\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
//exercise_NN1_VV0 can_VM
var str = document.getElementById("MT").value;
var res = str.replace(/(_NN1)_VV0 (\w+_V\w+)\s/ig, "$1 $2 ");
document.getElementById("MT").value = res;
//to_TO not_XX
//var str = document.getElementById("MT").value;
//var res = str.replace(/\b(TO)\s/ig, "$1_TO ");
//document.getElementById("MT").value = res;
//TO infinitive list verbs that can be nouns but are verbs after to(confusing preposition)//this caused problems because no _ between TO)\w
var str = document.getElementById("MT").value;
var res = str.replace(/\b(TO)_\w* (call|record|drink|start)\s/ig, "$1_TO $2_VVI ");
document.getElementById("MT").value = res;
//this preposition one below is causing problems.
var str = document.getElementById("MT").value;
var res = str.replace(/\b(TO)_[^I]\w* (\w+_[^VX]\w*)\s/ig, "$1_II $2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(TO)_[^R]\w* (and)\w* (FRO)\w*\s/ig, "$1_RL31 $2_RL32 $3_RL33 ");
document.getElementById("MT").value = res; 
var str = document.getElementById("MT").value;
var res = str.replace(/\b(TO_TO) (\w+_V[BDHV])0\s/ig, "$1 $2I ");
document.getElementById("MT").value = res;
//extremly rare to have to_II + RR //still this seems a patch...
var str = document.getElementById("MT").value;
var res = str.replace(/\b(TO)_II (\w+_RR\w*)\s/ig, "$1_TO $2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/(where_RRQ [\w\s\']+to_)TO (._.)\s/ig, "$1II $2 ");
document.getElementById("MT").value = res;
//Where_RRQ 's_VHZ Annabel_NP1 got_VVN to_TO ?_?
//because_CS we_PPIS2 both_DB2_RR like_II_VV0 the_AT outdoors_NN2 ._. 
var str = document.getElementById("MT").value; 
var res = str.replace(/(_DB2)_RR (\w+)_II(_VV0)\s/ig, "$1 $2$3 "); 
document.getElementById("MT").value = res;
//
var str = document.getElementById("MT").value;
var res = str.replace(/\b(for)_[^R]\w* (the)_\w* (most)_\w* (part)_\w*\s/ig, "$1_RR41 $2_RR42 $3_RR43 $4_RR44 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(up)\w* (to)_[^J]\w* (the)\w* (minute)\w*\s/ig, "$1_JJ41 $2_JJ42 $3_JJ43 $4_JJ44 ");
document.getElementById("MT").value = res;
//per_JJ21 capita_JJ22 consumption_NN1
var str = document.getElementById("MT").value;
var res = str.replace(/\b(per)\w* (capita)\w* (\w+_N\w*)\s/ig, "$1_JJ21 $2_JJ22 $3 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(for)\s/ig, "$1_IF ");//8
document.getElementById("MT").value = res;
//DAT RGT
var str = document.getElementById("MT").value;
var res = str.replace(/\b(fewest)\s/ig, "$1_DAT_RGT "); 
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(most|least)\s/ig, "$1_DAT_RGT_RRT "); 
document.getElementById("MT").value = res;
//The_AT least_DAT_RGT_RRT important_JJ
//The_AT least_DAT_RGT you_PPY 
//for_IF most_DAT_RGT_RRT of_IO
var str = document.getElementById("MT").value;
var res = str.replace(/(_DAT)_RGT_RRT (\w+_I\w+)\s/ig, "$1 $2 "); 
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/(_AT \w+)_DAT(_RGT)_RRT (\w+_[JPR]\w+)\s/ig, "$1$2 $3 ");
document.getElementById("MT").value = res;
//and_CC most_DAT_RGT are_VBR
var str = document.getElementById("MT").value;
var res = str.replace(/(_CC \w+_DAT)_RGT (\w+_V\w+)\s/ig, "$1 $2 "); 
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/([A-Z]\w+_DAT)_RGT (\w+_V\w+)\s/g, "$1 $2 "); 
document.getElementById("MT").value = res;
//_DAT_RGT At_II the_AT very_RG least_DAT_RGT ,_, 
var str = document.getElementById("MT").value;
var res = str.replace(/_DAT(_R)G(T ._.)\s/ig, "$1R$2 "); 
document.getElementById("MT").value = res;
//  THE (AT) MOST (RGT) IMPORTANT (JJ) 
var str = document.getElementById("MT").value;
var res = str.replace(/\b(\w+_A\w*) (\w+)_DAT(_RGT) (\w+_J\w*)\s/ig, "$1 $2$3 $4 "); 
document.getElementById("MT").value = res;
//MOST + NOUN ALWAYS
var str = document.getElementById("MT").value;
var res = str.replace(/\b(\w+_DAT)_RGT (\w+_[NI]\w*)\s/ig, "$1 $2 "); 
document.getElementById("MT").value = res;
//
var str = document.getElementById("MT").value;
var res = str.replace(/\b(citizenship|cuisine|delta|desk|diagram|habit|healthcare|homework|household|part|diary|drought|landfill|instrument|retirement|roadside|sky|unemployment|voyage)\s/ig, "$1_NN1 "); 
document.getElementById("MT").value = res;
//$390_NNU
var str = document.getElementById("MT").value;
var res = str.replace(/( \$[0-9]+)\s/ig, " $1_NNU ");
document.getElementById("MT").value = res;
//
var str = document.getElementById("MT").value;
var res = str.replace(/\b(in)_[^R]\w* (part)_\w*\s/ig, "$1_RR21 $2_RR22 ");
document.getElementById("MT").value = res;
// in_BCL21 order_BCL22 
var str = document.getElementById("MT").value;
var res = str.replace(/\b(in)_\w* (order)_\w*\s/ig, "$1_BCL21 $2_BCL22 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(in_BCL21 order_BCL22 to)_II\s/ig, "$1_TO ");
document.getElementById("MT").value = res;
//
//for_RR21 sure_RR22
var str = document.getElementById("MT").value;
var res = str.replace(/\b(for)_[^R]\w* (sure)_\w*\s/ig, "$1_RR21 $2_RR22 ");
document.getElementById("MT").value = res;
//
var str = document.getElementById("MT").value;
var res = str.replace(/\b(on|in)_\w* (the)_[^I]\w* (part|light)_\w* (of)_\w*\s/ig, "$1_II41 $2_II42 $3_II43 $4_II44 ");
document.getElementById("MT").value = res;
// out of touch with
var str = document.getElementById("MT").value;
var res = str.replace(/\b(out)_\w* (of)_\w* (touch)_N\w* (with)_\w*\s/ig, "$1_II41 $2_II42 $3_II43 $4_II44 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(ABOUT)\s/ig, "$1_II_RG_RP ");
document.getElementById("MT").value = res;
//about_II_RG_RP what_DDQ//_II_RG_RP 
var str = document.getElementById("MT").value;
var res = str.replace(/(_II)_RG_RP (\w+_D\w+)\s/ig, "$1 $2 ");
document.getElementById("MT").value = res;
//has_VHZ about_II_RG_RP 30,000_NNU genes_NN2
var str = document.getElementById("MT").value;
var res = str.replace(/_II(_RG)_RP ([\d\w\,]+_NNU)\s/ig, "$1 $2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/_II(_RG)_RP ([\w\-]+_M\w+)\s/ig, "$1 $2 ");
document.getElementById("MT").value = res;
//about a year
var str = document.getElementById("MT").value;
var res = str.replace(/_II(_RG)_RP (\w+ \w+_NNT\w+)\s/ig, "$1 $2 ");
document.getElementById("MT").value = res;
//talk_NN1 about_RP//happy_JJ about_II_RG_RP that_DD1
var str = document.getElementById("MT").value;
var res = str.replace(/(_[JN]\w* \w+_II)_RG_RP\s/ig, "$1 ");
document.getElementById("MT").value = res;
//on_II_RP your_APPGE// I really need to address that all words should allow hyphens!
var str = document.getElementById("MT").value;
var res = str.replace(/(_II)_RP ([\w\-]+_[NAJ]\w+)\s/ig, "$1 $2 ");
document.getElementById("MT").value = res;
//put_VVI a_AT1 wetsuit_NN1 on_II_RP
var str = document.getElementById("MT").value;
var res = str.replace(/(_VV\w+ \w+_A\w+ \w+_N\w+ on)_II(_RP)\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
//about_II_RG_RP Fergus_NP1
var str = document.getElementById("MT").value;
var res = str.replace(/(_II)_RG_RP (\w+_[NAJ]\w+)\s/ig, "$1 $2 ");
document.getElementById("MT").value = res;
//be_VBI about_II_RG_RP
var str = document.getElementById("MT").value;
var res = str.replace(/(_VB\w+ \w+_II)_RG_RP\s/ig, "$1 ");
document.getElementById("MT").value = res;
//about_II_RP_RG ._.
var str = document.getElementById("MT").value;
var res = str.replace(/_II_RG(_RP \W+_\W+)\s/ig, "$1 ");
document.getElementById("MT").value = res;
//about_II_RG_RP her_PPHO1
var str = document.getElementById("MT").value;
var res = str.replace(/(_II)_RG_RP (\w+_P\w+)\s/ig, "$1 $2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(blown|broken|forbidden|forgotten|stolen|spoken|written)\s/ig, "$1_JJ_VVN ");
document.getElementById("MT").value = res;
// written_JJ_VVN by_II //written_JJ into_II
var str = document.getElementById("MT").value;
var res = str.replace(/_JJ(_VVN \w+_II)\s/ig, "$1 ");
document.getElementById("MT").value = res;
//was_VBDZ more_DAR and_CC more_RGR surprised_JJ_VVN ._.
var str = document.getElementById("MT").value;
var res = str.replace(/(_VB[\w\s]+ \w+_JJ)_VVN([\w\s]*._.)\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
//more_DAR_RGR_RRR than_CSN
var str = document.getElementById("MT").value;
var res = str.replace(/(_DAR)_RGR_RRR (\w+_CSN)\s/ig, "$1 $2 ");
document.getElementById("MT").value = res;
//more_DAR_RGR_RRR focused_VVN
var str = document.getElementById("MT").value;
var res = str.replace(/_DAR_RGR(_RRR \w+_VV\w+ \w+_I\w+)\s/ig, "$1 "); 
document.getElementById("MT").value = res;
//had_VHD my_APPGE right_JJ hand_NN1 broken_JJ_VVN ._.
var str = document.getElementById("MT").value;
var res = str.replace(/(_VH[\w\s]+ \w+)_JJ(_VVN)\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
//these_DD2 stolen_JJ vehichles_NN2 ._.
var str = document.getElementById("MT").value;
var res = str.replace(/(_D\w+ \w+_JJ)_VVN (\w+_N\w+ \._\.)\s/ig, "$1 $2 ");
document.getElementById("MT").value = res;
//excited_JJ_VVN about_RP
var str = document.getElementById("MT").value;
var res = str.replace(/_JJ(_VVN \w+_RP)\s/ig, "$1 ");
document.getElementById("MT").value = res;
//scared_JJ_VVN of_IO
var str = document.getElementById("MT").value;
var res = str.replace(/(_JJ)_VVN( of_IO)\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(ON)\s/ig, "$1_II_RP ");
document.getElementById("MT").value = res;
//about_II_RP_RG any_DD / quotes_NN2 on_II_RP social_JJ
var str = document.getElementById("MT").value;
var res = str.replace(/(_II)_RP\w* (\w+_[NJD]\w*)\s/ig, "$1 $2 ");
document.getElementById("MT").value = res;
//on_II_RP ?_?
var str = document.getElementById("MT").value;
var res = str.replace(/_II(_RP \W+_\W+)\s/ig, "$1 ");
document.getElementById("MT").value = res;
//on_II_RP to_II
var str = document.getElementById("MT").value;
var res = str.replace(/_II(_RP \w+_I\w*)\s/ig, "$1 ");
document.getElementById("MT").value = res;
//
var str = document.getElementById("MT").value;
var res = str.replace(/\b(alley|asset|behalf|DDT|truck|doorknob|soul)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
// on_II behalf_VV0 of_IO //  on_II31 behalf_II32 of_II33
var str = document.getElementById("MT").value;
var res = str.replace(/\b(on)_\w* (behalf)_\w* (of)_\w*\s/ig, "$1_II31 $2_II32 $3_II33 ");
document.getElementById("MT").value = res;
//_VBZ about_II to_TO
var str = document.getElementById("MT").value;
var res = str.replace(/(_VB\w* about)\w* (to_TO)\s/ig, "$1_RPK $2 ");
document.getElementById("MT").value = res;
//was_VBDZ n't_XX about_II to_TO
var str = document.getElementById("MT").value;
var res = str.replace(/(_VB\w* n.t_XX about)\w* (to_TO)\s/ig, "$1_RPK $2 ");
document.getElementById("MT").value = res;
//forget the above codes about to is always RPK TO
var str = document.getElementById("MT").value;
var res = str.replace(/(about)\w* (to_TO)\s/ig, "$1_RPK $2 ");
document.getElementById("MT").value = res;
//_JJ_RR about_RPK
var str = document.getElementById("MT").value;
var res = str.replace(/_JJ(_RR \w+_RPK)\s/ig, "$1 ");
document.getElementById("MT").value = res;
//"_" Still_JJ_RR ,_,
var str = document.getElementById("MT").value;
var res = str.replace(/(\W+_\W+ \w+)_JJ(_RR \W+_\W+)\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
//thing_NN1 's_VBZ for
var str = document.getElementById("MT").value;
var res = str.replace(/(_NN1 's) (\w+_I\w*)\s/ig, "$1_VBZ $2 ");
document.getElementById("MT").value = res;
//
var str = document.getElementById("MT").value;
var res = str.replace(/\b(accent|arm|bash|boss|commute|end|harness|joke|leap|light|implant|insult|limit|mess|obey|programme|puff|REFERENCE|resume|revenge|shave|shift|shop|spread|stone|USE|vent|walk|want)\s/ig, "$1_NN1_VV0 ");
document.getElementById("MT").value = res;
//_VBZ not_XX love_NN1_VV0
var str = document.getElementById("MT").value;
var res = str.replace(/(_VBZ n.t_\w+ \w+_NN1)_VV[I0]\s/ig, "$1 "); 
document.getElementById("MT").value = res;
//_VM a_AT1 man_NN1 look_NN1
var str = document.getElementById("MT").value;
var res = str.replace(/(_VM \w+_[AJD]\w+ \w+_N\w+ \w+)_NN1(_VV)0\s/ig, "$1$2I "); 
document.getElementById("MT").value = res;
// watched_VVD him_PPHO1 walk_NN1 out_RP
var str = document.getElementById("MT").value;
var res = str.replace(/(\w+)_NN1(_VV0 \w+_RP)\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
//took_VVD place_VV0
var str = document.getElementById("MT").value;
var res = str.replace(/(_VVD \w+_NN1)_VV0\s/ig, "$1 ");
document.getElementById("MT").value = res;
//shed_VVI some_DD ligh_VV0
var str = document.getElementById("MT").value;
var res = str.replace(/(_V\w+ \w+_DD \w+_NN1)_VV0\s/ig, "$1 ");
document.getElementById("MT").value = res;
//How_RRQ would_VM that_DD1 end_NN1
var str = document.getElementById("MT").value;
var res = str.replace(/(_\w+Q \w+_VM \w+_DD1 \w+)_NN1(_VV0)\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
//_XX just_RR shave_NN1_VVI 
var str = document.getElementById("MT").value;
var res = str.replace(/(_XX \w+_RR \w+)_NN1(_VVI)\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
//do_VD0 fly_NN1_VVI
var str = document.getElementById("MT").value;
var res = str.replace(/(_VD0 \w+)_NN1(_VVI)\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
//first_MD book_NN1_VV0
var str = document.getElementById("MT").value;
var res = str.replace(/(_M\w+ \w+_NN1)_VV0\s/ig, "$1 ");
document.getElementById("MT").value = res;
//_VM first_MD choose_VV0
var str = document.getElementById("MT").value;
var res = str.replace(/(_VM \w+_M\w+ \w+_VV)0\s/ig, "$1I ");
document.getElementById("MT").value = res;
//agree_VVI that_CST_DD1 things_NN2 are_VBR
var str = document.getElementById("MT").value;
var res = str.replace(/(_VV\w+ \w+_CST)_DD1 (\w+_N\w+ \w+_V\w+)\s/ig, "$1 $2 ");
document.getElementById("MT").value = res;
//
var str = document.getElementById("MT").value;
var res = str.replace(/\b(of)\s/ig, "$1_IO ");//3
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(in)\s/ig, "$1_II_RP "); 
document.getElementById("MT").value = res;
//hanging_VVG on_II_RP //needs to be delayed  it_PPH1 was_VBDZ established_VVN in_RP in_II 2006_MC ._.
var str = document.getElementById("MT").value;
var res = str.replace(/(_II)_RP (\w+_M\w*)\s/g, "$1 $2 "); 
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/(_VV\w+ \w+)_II(_RP[\w\s]*._.)\s/g, "$1$2 "); 
document.getElementById("MT").value = res;
//In_II_RP
var str = document.getElementById("MT").value;
var res = str.replace(/\b([A-Z]+[a-z]+_II)_RP\s/g, "$1 "); 
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/(_II)_RP ([\w\s]*._.)\s/ig, "$1 $2 "); 
document.getElementById("MT").value = res;
//work_VV0 on_II_RP yourselves_PPX2
var str = document.getElementById("MT").value;
var res = str.replace(/(_II)_RP (\w+_P\w+)\s/ig, "$1 $2 "); 
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(SAME)\s/ig, "$1_DA ");
document.getElementById("MT").value = res;
//the full stops in this is killing codes everywhere. best to just remove.
var str = document.getElementById("MT").value;
var res = str.replace(/\b(A)\.(M)\.\s/ig, " $1$2_RA ");
document.getElementById("MT").value = res;
//
//
var str = document.getElementById("MT").value;
var res = str.replace(/\b(ABILITY|beacon|debut|singer|horror|pussy|dick|ass|asshole|initiative|kingdom|racism|queen|scenario)\s/ig, "$1_NN1 "); 
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(ABLE)\s/ig, "$1_JK ");
document.getElementById("MT").value = res;
//rarer able_JK student_NN1 = should be JJ
var str = document.getElementById("MT").value;
var res = str.replace(/(_J)K( \w+_NN\w*)\s/ig, "$1J$2 "); 
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(ABROAD|here)\s/ig, "$1_RL ");
document.getElementById("MT").value = res;
////ABOVE HAS II JJ@ NN1 //II JJ NN1 RL
var str = document.getElementById("MT").value;
var res = str.replace(/\b(above)\s/ig, "$1_II_JJ_NN1_RL ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/(_II)_JJ_NN1_RL (\w+_[ADP]\w*)\s/ig, "$1 $2 ");//ABOVE HAS II JJ@ NN1
document.getElementById("MT").value = res;
//learn_VVI English_JJ_NN1 ,_,
var str = document.getElementById("MT").value;
var res = str.replace(/(_VV\w+ \w+)_JJ(_NN1 ._.)\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
//the_AT above_JJ product_NN1
var str = document.getElementById("MT").value;
var res = str.replace(/(\w+_A\w+) (\w+)_II(_JJ)_NN1_RL (\w+_N\w*)\s/ig, "$1 $2$3 $4 ");
document.getElementById("MT").value = res;
//II_RG_RL
var str = document.getElementById("MT").value;
var res = str.replace(/\b(BELOW)\s/ig, "$1_II_RG_RL ");
document.getElementById("MT").value = res;
// below_II_RG_RL the_AT
var str = document.getElementById("MT").value;
var res = str.replace(/(_II)_RG_RL( \w+_A\w+)\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
// link_NN1 below_II_RG_RL and_CC//copied_VVN below_II_RG_RL with_IW
var str = document.getElementById("MT").value;
var res = str.replace(/(_[NV]\w+ \w+)_II_RG(_RL \w+_[CI]\w*)\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
//below_II_RG_RL you_PPY
var str = document.getElementById("MT").value;
var res = str.replace(/_II_RG(_RL \w+_P\w*)\s/ig, "$1 ");
document.getElementById("MT").value = res;
//JJR_RRR_VV0
var str = document.getElementById("MT").value;
var res = str.replace(/\b(LOWer)\s/ig, "$1_JJR_RRR_VV0 ");
document.getElementById("MT").value = res;
//day_NNT1 just_RR a_RR31 little_RR32 bit_RR33 brighter_JJR_RRR ._. 
var str = document.getElementById("MT").value;
var res = str.replace(/(_N\w+ \w+_R\w+ \w+_R\w+ \w+_R\w+ \w+_R\w+ \w+_JJR)_RRR\s/ig, "$1 ");
document.getElementById("MT").value = res;
//are_VBR lower_JJR_RRR_VV0
var str = document.getElementById("MT").value;
var res = str.replace(/(_VB\w+ \w+_JJR)_RRR_VV0\s/ig, "$1 ");
document.getElementById("MT").value = res;
//gone_VVN to_II bed_NN1 earlier_JJR_RRR
var str = document.getElementById("MT").value;
var res = str.replace(/(_V[DV]\w+ [\w\s]+)_JJR(_RRR)\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
//find_VVI below_II_RG_RL ._.
var str = document.getElementById("MT").value;
var res = str.replace(/(_V\w+ \w+)_II_RG(_RL \W+_\W+)\s/ig, "$1$2 ");
document.getElementById("MT").value = res; 
var str = document.getElementById("MT").value;
var res = str.replace(/\b(over)_\w* (here)_\w*\s/ig, "$1_RL21 $2_RL22 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(up)_\w* (front)_\w* (._.|\w+_C\w+)\s/ig, "$1_RL21 $2_RL22 $3 ");
document.getElementById("MT").value = res;
//inside_II out_RP
var str = document.getElementById("MT").value;
var res = str.replace(/\b(inside)_I\w* (out)_\w*\s/ig, "$1_RL21 $2_RL22 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(ONly|OK|OKAY)\s/ig, "$1_JJ_RR ");
document.getElementById("MT").value = res;
// the_AT only_RR one_PN1
var str = document.getElementById("MT").value;
var res = str.replace(/(_A\w+ \w+_JJ)_RR\s/ig, "$1 ");
document.getElementById("MT").value = res;
//Only_JJ_RR by_II (risky) probably should capitalise 
var str = document.getElementById("MT").value;
var res = str.replace(/([A-Z]+\w+)_JJ(_RR \w+_II[\w\s]*._.)\s/g, "$1$2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(ABSOLUTE|colourful|conceptual|distraught|fraught|fortunate|great|intermediate|joyful|needless|out-of-date|self-made|self-driving|self-taught|instructional|pungent|satisfactory|quick|easy|unaware|unfamiliar|familiar|first-come|first-served)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(ACADEMIC|FURIOUS|NICE|muddy|unfit)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(ACCEPT|assert|conserve|contradict|convey|cope|drown|emancipate|eradicate|exorcise|hatch|plead|pronounce|reconnect|rejoice|reinforce|replicate|revive|swallow|unsee|yearn)\s/ig, "$1_VV0 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value; 
var res = str.replace(/\b(access)\s/ig, "$1_NN1_VV0 "); 
document.getElementById("MT").value = res;
// this_DD1 message_NN1_VVI if_CS
var str = document.getElementById("MT").value;
var res = str.replace(/(_DD1 \w+_NN1)_VV\w+ (\w+_C\w+)\s/ig, "$1 $2 "); 
document.getElementById("MT").value = res;
//had_VHD n't_XX come_VV0_VVN
var str = document.getElementById("MT").value;
var res = str.replace(/(_VH\w+ n.t_XX \w+)_VV0(_VVN)\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
// to_TO come_VV0_VVN
var str = document.getElementById("MT").value;
var res = str.replace(/(_TO \w+_VV)0_VVN\s/ig, "$1I ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/(ACCEPTABLE)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/(ACCESSIBLE|unlucky)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/(Away)_\w* (from)_\w*\s/ig, "$1_II21 $2_II22 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(As)_\w* (to)_\w*\s/ig, "$1_II21 $2_II22 ");//this was catching "has to"
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/(next)_M\w* (to)_I\w*\s/ig, "$1_II21 $2_II22 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/(As_II) (to_II)\s/ig, "$121 $222 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(ALONG)\w* (WITH)_\w*\s/ig, "$1_II21 $2_II22 ");
document.getElementById("MT").value = res;
//interesting this didnt tag because according had not tag before so took away the underscore.
var str = document.getElementById("MT").value;
var res = str.replace(/\b(ACCORDING)\w* (to)_\w*\s/ig, "$1_II21 $2_II22 ");
document.getElementById("MT").value = res;
//Instead_RR of_IO
var str = document.getElementById("MT").value;
var res = str.replace(/\b(instead)_RR (of)_I\w*\s/ig, "$1_II21 $2_II22 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(artifacts|atoms|bananas|butterflies|compromises|fruits|gentlemen|habits|impulses|injuries|Democracies|lifestyles|MIDTERMS|photons|platforms|HEROES|humans|towns|walls)\s/ig, "$1_NN2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(i?n?ACCURATE|accustomed|\w+grown|polite|tranquil)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(ACHIEVE|agree|compose|distinguish|enter|distract)\s/ig, "$1_VV0 "); 
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(ACHIEVED|answered|elected|started|stood)\s/ig, "$1_VVD_VVN ");
document.getElementById("MT").value = res;
//if elected 
var str = document.getElementById("MT").value;
var res = str.replace(/(_CS\w* \w+)_VVD(_VVN)\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
//been_VBN "_" confirmed_VVD
var str = document.getElementById("MT").value;
var res = str.replace(/(_VB\w+ "_" \w+)_VVD(_VVN)\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
//America_NP1 stayed_VVD_VVN in_II Afganistan_NP1 until_CS they_PPHS2 reached_VVN a_AT1 deal_NN1 ._.//wrote_VVD he_PPHS1 anticipated_VVD_VVN
var str = document.getElementById("MT").value;
var res = str.replace(/(_[PN]\w* \w+_VVD)_VVN([\w\s\']*._.)\s/ig, "$1$2 ");
document.getElementById("MT").value = res; 
//have_VHI a_AT1 car_NN1 painted_VVD
var str = document.getElementById("MT").value;
var res = str.replace(/(_VH\w+ [\w\s-']+ \w+)_VVD(_VVN)\s/ig, "$1$2 ");
document.getElementById("MT").value = res; 
// II_RL_RP across //../across/
var str = document.getElementById("MT").value;
var res = str.replace(/\b(ACross)\s/ig, "$1_II_RL_RP ");
document.getElementById("MT").value = res;
//above_II_RL 6,000_NNU
var str = document.getElementById("MT").value;
var res = str.replace(/(_II)_RL ([\d\,]+_[NM]\w+)\s/ig, "$1 $2 ");
document.getElementById("MT").value = res;
//beyond_II_RL these_DD2//between_II_RL them_PPHO2
var str = document.getElementById("MT").value;
var res = str.replace(/(_II)_RL (\w+_[DP]\w+)\s/ig, "$1 $2 ");
document.getElementById("MT").value = res;
//preposition + gerund RP
var str = document.getElementById("MT").value;
var res = str.replace(/(_I\w* \w+_VVG \w+)_II_RL(_RP)\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
//to_TO keeping_VVG//mega problems here!!!!but seems only a part of the problem.
var str = document.getElementById("MT").value;
var res = str.replace(/(to)_TO (\w+_VVG)\s/ig, "$1_II $2 ");
document.getElementById("MT").value = res;
//
var str = document.getElementById("MT").value;
var res = str.replace(/\b(\w+)_II(_RL)_RP (\W+_\W+)\s/ig, "$1$2 $3 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(\w+)_II(_RL)_RP (\w+_[ICV]\w*)\s/ig, "$1$2 $3 ");
document.getElementById("MT").value = res;
//
var str = document.getElementById("MT").value;
var res = str.replace(/\b(\w+_II)_RL_RP (\w+_[ADJNP]\w*)\s/ig, "$1 $2 ");
document.getElementById("MT").value = res;
//
//
////discourage_VVI smoking_NN1 can_VM //moved up to stop first clash
var str = document.getElementById("MT").value;
var res = str.replace(/(_V\w* \w+)_JJ(_NN1)_VVG (\w+_V\w*)\s/ig, "$1$2 $3 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(achieving|ACTING|alleging|apologi[zs]ing|attaining|busking|concerning|cutting|documenting|digging|discussing|doodling|drinking|earning|employing|finishing|hearing|inserting|phoning|protecting|resting|scanning|securing|treating|tutoring|wanting)\s/ig, "$1_VVG ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(bulb|heck|self\w*confidence|nitrogen|oxygen|pollen|vaccine|vice-premier)\s/ig, "$1_NN1 "); 
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(ACTION|blaze|camper|oven|PREFERENCE|rice|4k|semester|self.confidence)\s/ig, "$1_NN1 "); 
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b((?:ACTION|can|camera|custom|novel|peanut)s)\s/ig, "$1_NN2 ");//notice s
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(ACTIVITIES|salaries|bonuses|cosmetics|HOLES|spirits)\s/ig, "$1_NN2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(ACTIVITY|stamina|tomato|violence)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(ACUTE)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(AD|honey)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b((?:ADD|adjust|defin|EXPLAIN|kill|observ|retir|refus|schedul)ING)\s/ig, "$1_VVG ");
document.getElementById("MT").value = res;
//this can be a preposition phrase
var str = document.getElementById("MT").value;
var res = str.replace(/\b(IN)_\w* (ADDITION)_\w* (to)_\w+\s/ig, "$1_II31 $2_II32 $3_II33 ");
document.getElementById("MT").value = res;
//must not change the above.
var str = document.getElementById("MT").value;
var res = str.replace(/\b(IN)_\w* (ADDITION)_[^I]\w*\s/ig, "$1_RR21 $2_RR22 ");
document.getElementById("MT").value = res;
//as_RR21 well_RR22 ._.
var str = document.getElementById("MT").value;
var res = str.replace(/\b(as)_\w* (well)_\w* (._.)\s/ig, "$1_RR21 $2_RR22 $3 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(accompanies|ADDS|r?e?affirms|clears|cools|huffs|hurts|lets|obstructs|prevents|promotes|proves|relies|tends|weighs|wets)\s/ig, "$1_VVZ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(ADEQUATE|awake|biased|heartbreaking|old-fashioned|privy|vigorous)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(ADJUST|coincide|conquer|derive|discourage)\s/ig, "$1_VV0 "); 
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(ADJUSTABLE|fearless)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(ADMINISTRATION|cake|earthquake|moisture|perspective|prince|sheet|teammate)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(ADMINISTRATIVE)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(ADULTS|earthquakes|consequences)\s/ig, "$1_NN2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/(bored|convicted|displaced|impressed|increased|justified|ADVANCED|lost|offended|pointed|relaxed|scared|stream-?lined|terrified|injured|worried|wrapped)\s/ig, "$1_JJ_VVD_VVN ");
document.getElementById("MT").value = res;
//looked_VVD a_RR21 little_RR22 scared_JJ_VVD
var str = document.getElementById("MT").value;
var res = str.replace(/(look\w+_V\w+ \w+_R\w+ \w+_R\w+ \w+_JJ)_VVD\s/ig, "$1 ");
document.getElementById("MT").value = res;
//anger_NN1 justified_JJ ?_? 
var str = document.getElementById("MT").value;
var res = str.replace(/(_[NPD]\w+ \w+)_JJ_VVD(_VVN ?_?)\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
//the_AT aerodynamically_RR streamlined_JJ
var str = document.getElementById("MT").value;
var res = str.replace(/(_A\w+ \w+_R\w+ \w+_JJ)_VVD_VVN\s/ig, "$1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(ADVANTAGE|grief|ribbon|teen)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(ADVERSE)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(ADVICE)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(ADVISORY|astonishing|dead)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(AFFECT|bury)\s/ig, "$1_VV0 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(AFFECTED|appreciated|brought|deceived|deemed|eased|explained|influenced|kept|kidnapped|made|painted|published|insinuated|sent|solved|watched)\s/ig, "$1_VVD_VVN "); 
document.getElementById("MT").value = res;
//She_PPHS1 always_RR said_VVD_VVN capital //can't work out why they dont catch:
var str = document.getElementById("MT").value;
var res = str.replace(/([A-Z]\w+_[NPD]\w+ \w+_RR \w+_VVD)_VVN\s/g, "$1 "); 
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/(_[NPD]\w+ \w+_RR \w+_VVD)_VVN ([\w\s\,\-\']+\._\.)\s/ig, "$1 $2 ");  
document.getElementById("MT").value = res;//with full stop
//I_PPIS1 found_VVD_VVN
var str = document.getElementById("MT").value;
var res = str.replace(/(\w+_[NPD]\w+ \w+_VVD)_VVN ([\w\s\,-]+\._.)\s/ig, "$1 $2 "); 
document.getElementById("MT").value = res;
//'re_VBR already_RR being_VBG affected_VVD
var str = document.getElementById("MT").value;
var res = str.replace(/(_VB\w+ \w+_RR \w+_VB\w+ \w+)_VVD(_VVN)\s/ig, "$1$2 "); 
document.getElementById("MT").value = res;
//problem_NN1 solved_VVD_VVN//impossible!!!!
var str = document.getElementById("MT").value;
var res = str.replace(/(problem_NN1 solved)_VVD(_VVN)\s/ig, "$1$2 "); 
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(AFFECTS|agrees|employs|illustrates|demonstrates)\s/ig, "$1_VVZ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(AFFORD)\s/ig, "$1_VV0 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(AFFORDABLE|disgusting|eventual)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(AFRAID)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(AFRICAN|moist)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(AFTERWARD)\s/ig, "$1_RL ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(midway)\s/ig, "$1_JJ_NN1_RL ");
document.getElementById("MT").value = res;
//
var str = document.getElementById("MT").value;
var res = str.replace(/\b(AFTER|SINCE)\s/ig, "$1_CS_II ");
document.getElementById("MT").value = res;
//After_CS_II ,_,
var str = document.getElementById("MT").value;
var res = str.replace(/(_CS)_II (,_,)\s/ig, "$1 $2 ");
document.getElementById("MT").value = res;
//after_CS a_AT1 while_NNT1 because_CS
var str = document.getElementById("MT").value;
var res = str.replace(/_CS(_II \w+_[AJD]\w+ \w+_N\w+ \w+_CS)\s/ig, "$1 ");
document.getElementById("MT").value = res;
//after_CS_II 9/11_MF
var str = document.getElementById("MT").value;
var res = str.replace(/_CS(_II) ([\d\/]+_MF)\s/ig, "$1 $2 ");
document.getElementById("MT").value = res;
//takes_VVZ after_II her_APPGE
var str = document.getElementById("MT").value;
var res = str.replace(/(_V\w+ \w+)_CS(_II \w+_A\w+)\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
//until_CS_II 18.00_MC
var str = document.getElementById("MT").value;
var res = str.replace(/_CS(_II [\w\.]+_M\w+)\s/ig, "$1 ");
document.getElementById("MT").value = res;
//until_II you_PPY see_VV0
var str = document.getElementById("MT").value;
var res = str.replace(/\b(_CS)_II (\w+_[PN]\w+ \w+_V\w+)\s/ig, "$1 $2 ");//SINCE_RR RARELY
document.getElementById("MT").value = res;
// after_CS being_VBG shot_VVN multiple_JJ times_NNT2 in_II Peterburg_NP1 ._. 
//var str = document.getElementById("MT").value;
//var res = str.replace(/_CS(_II \w+_V\wG \w+_V\wN [\w\s^V]*\s\W+_\W+)\s/g, "$1 ");
//document.getElementById("MT").value = res;
//after_CS_II having_VHG been_VBN exposed_VVN to_II
var str = document.getElementById("MT").value;
var res = str.replace(/_CS(_II \w+_V\wG)\s/ig, "$1 ");
document.getElementById("MT").value = res;
//
//clause vs preposition look verb // CODE TO FIND CLAUSE or non clause WITH OR WITHOUT OTHER WORDS.
var str = document.getElementById("MT").value;
var res = str.replace(/\b(\w+)(_CS)_II ([\w\s]*\w+_V\w+\s[\w\s]*\W+_\W+)\s/ig, "$1$2 $3 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(\w+)_CS(_II) ([\w\s^V]+\s\W+_\W+)\s/g, "$1$2 $3 ");
document.getElementById("MT").value = res;
//that_CST_DD1 saying_VVG before_RT ?_? to deal with gerund
var str = document.getElementById("MT").value;
var res = str.replace(/\b(\w+)_CS\w(_DD1) (\w+) ([\w\s^V]+\s._.)\s/ig, "$1$2 $3 $4 ");
document.getElementById("MT").value = res;
//all_DB that_DD1 happened_VVN //randi error
var str = document.getElementById("MT").value;
var res = str.replace(/(_DB that)_DD1 (\w+_VVN)\s/ig, "$1_CST $2 ");
document.getElementById("MT").value = res;
//that_CST_DD1 Trump_NP1 keeps_VVZ
var str = document.getElementById("MT").value;
var res = str.replace(/\b(\w+_CS\w)_DD1 (\w+_N\w* \w+_V\w*)\s/ig, "$1 $2 ");
document.getElementById("MT").value = res;
//that_CST_DD1 's
var str = document.getElementById("MT").value;
var res = str.replace(/(_CST_DD1 's)\s/ig, "$1_VBZ_VHZ ");
document.getElementById("MT").value = res;
//'s_VBZ_VHZ never_RR been_VBN
var str = document.getElementById("MT").value;
var res = str.replace(/_VBZ(_VHZ [\w\s]+ been_VBN)\s/ig, "$1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/_CST(_DD1 ._.)\s/ig, "$1 ");
document.getElementById("MT").value = res;
//'s_VBZ_VHZ like_II_VV0
var str = document.getElementById("MT").value;
var res = str.replace(/(_VBZ)_VHZ (\w+_II)_VV0\s/ig, "$1 $2 ");  
document.getElementById("MT").value = res;
// feel_VV0 like_II I_PPIS1 'm_VBM
var str = document.getElementById("MT").value;
var res = str.replace(/(_VV\w+ like)_II (\w+_[PDN]\w+ [\'\w]+_V\w+)\s/ig, "$1_CS $2 ");  
document.getElementById("MT").value = res;
//look_VVI anything_PN1 like_VVI
var str = document.getElementById("MT").value;
var res = str.replace(/(_V\w+ \w+_PN\w+ like_II)_VV0 (\w+_[AJNDP]\w+)\s/ig, "$1 $2 ");  
document.getElementById("MT").value = res;
//something_PN1 like_VV0//but this catches I like her.I_PPIS1 like_II her_PPHO1
var str = document.getElementById("MT").value;
var res = str.replace(/(\w+_P\w+ like)_II(_VV0 \w+_P\w+)\s/ig, "$1$2 ");  
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/(_PN1 \w+_II)_VV0\s/ig, "$1 ");  
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/(_\w+1 like)_VV0 (._.)\s/ig, "$1_II $2 ");  
document.getElementById("MT").value = res;
//'s_VBZ kind_RR21 of_RR22 like_II_VV0
var str = document.getElementById("MT").value;
var res = str.replace(/(_VB\w+ [\w\s]+ \w+_II)_VV0\s/ig, "$1 ");  
document.getElementById("MT").value = res;
// It_PPH1 was_VBDZ kind_RR21 of_RR22 you_PPY to_TO 
var str = document.getElementById("MT").value;
var res = str.replace(/\b(kind_)RR21( of_)RR22( \w+_P\w+ to_TO)\s/ig, "$1JJ$2IO$3 ");  
document.getElementById("MT").value = res;
//,_, like_II_VV0 what_DDQ
var str = document.getElementById("MT").value;
var res = str.replace(/(,_, \w+_II)_VV0 (\w+_D\w+)\s/ig, "$1 $2 ");  
document.getElementById("MT").value = res;
//like_II_VV0 my_APPGE grandmother_NN1 add_VV0
var str = document.getElementById("MT").value;
var res = str.replace(/(_II)_VV0 (\w+_A\w+ \w+_N\w+ \w+_VV0)\s/ig, "$1 $2 ");  
document.getElementById("MT").value = res;
//things_NN2 like_II_VV0 earrings_NN2
var str = document.getElementById("MT").value;
var res = str.replace(/(things_NN2 like_II)_VV0 (\w+_NN2)\s/ig, "$1 $2 ");  
document.getElementById("MT").value = res;
//are_VBR like_II_VV0
var str = document.getElementById("MT").value;
var res = str.replace(/(_VB\w+) (\w+_II)_VV0\s/ig, "$1 $2 "); 
document.getElementById("MT").value = res;
//man_NN1 like_II_VV0
var str = document.getElementById("MT").value;
var res = str.replace(/(_NN1 \w+_II)_VV0\s/ig, "$1 ");
document.getElementById("MT").value = res;
//I_PPIS1 like_II_VV0 a_AT1
var str = document.getElementById("MT").value;
var res = str.replace(/(_P\w+ \w+)_II(_VV0 \w+_A\w+[\w\s]*)\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
//is_VBZ just_RR like_II_VV0 an_AT1 empty_JJ world_NN1
var str = document.getElementById("MT").value;
var res = str.replace(/(_V\w+ \w+_R\w+ \w+_II)_VV0 (\w+_[JNDA]\w+)\s/ig, "$1 $2 ");
document.getElementById("MT").value = res;
//felt_VVD_VVN like_II_VV0
var str = document.getElementById("MT").value;
var res = str.replace(/(_VV\w* \w+_II)_VV0\s/ig, "$1 ");
document.getElementById("MT").value = res;
//He_PPHS1 also_RR plays_VVZ traditional_JJ ,_, individual_JJ sports_NN2 like_II_VV0 tennis_NN1 and_CC golf_NN1 ._.
var str = document.getElementById("MT").value;
var res = str.replace(/(_V\w*[\w\s\,]+\w+_II)_VV0 ([\w\s]+\W+_\W+)\s/ig, "$1 $2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(AFTERWARDS|sometime|then)\s/ig, "$1_RT ");// then = jj%
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(AGAINST)\s/ig, "$1_II ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(AGE|pandemic|fork|knife|Lab)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(AGENCY|speech)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(AGENT)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(AGGRESSIVE|unconditional)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(AGO)\s/ig, "$1_RA ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(AGREEMENT|basketball)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(AHEAD)\s/ig, "$1_RL ");
document.getElementById("MT").value = res;
//ahead_II21 of_II22
var str = document.getElementById("MT").value;
var res = str.replace(/\b(AHEAD)\w* (of)\w*\s/ig, "$1_II21 $2_II22 ");
document.getElementById("MT").value = res;
//As_II21 for_II22
var str = document.getElementById("MT").value;
var res = str.replace(/\b(as)_\w* (for)_\w*\s/ig, "$1_II21 $2_II22 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(AIR)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(AIRPORT)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(AL)\s/ig, "$1_RA22 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(ALBUM|fate|golf)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(ALIVE)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(ALLEGED|avian|tragic)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(ALLOWED)\s/ig, "$1_VVD_VVN ");
document.getElementById("MT").value = res;
//which_DDQ allowed_VVD_VVN
var str = document.getElementById("MT").value;
var res = str.replace(/(_D\w+ \w+_VVD)_VVN\s/ig, "$1 ");
document.getElementById("MT").value = res;
//it_PPH1 instantly_RR felt_VVD_VVN like_II home_NN1 ._.
var str = document.getElementById("MT").value;
var res = str.replace(/(_[PN]\w* \w+_R\w* \w+_VVD)_VVN ([\w\s]*._.)\s/ig, "$1 $2 ");
document.getElementById("MT").value = res; 
var str = document.getElementById("MT").value;
var res = str.replace(/(\w+\-known)\s/ig, "$1_JJ ");//well-known
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/(known)\s/ig, "$1_JJ_VVN ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(ALLOWING|attaching|combining|deciding|DRESSING|emanating|conducting|MIXING|owning|regarding|shopping|sleeping|supposing)\s/ig, "$1_VVG ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(ALLOWS)\s/ig, "$1_VVZ ");
document.getElementById("MT").value = res;
//so is very hard to decide.  general adverb – “So much for studying grammar everyday.” (RR)   suborinating conjunction – “I need to pass, so I study often.” (CS)  degree adverb – “Thanks so much for explaining this to me.” (RG)
var str = document.getElementById("MT").value;
var res = str.replace(/\b(so)\s/ig, "$1_CS_RG_RR ");
document.getElementById("MT").value = res;
//so fat .
var str = document.getElementById("MT").value;
var res = str.replace(/\b(so)_CS(_RG)_RR (\w+_JJ (?:._.|\w+_C\w+))\s/ig, "$1$2 $3 ");
document.getElementById("MT").value = res;
//so_RR very_RG little_DA1
var str = document.getElementById("MT").value;
var res = str.replace(/\b(so)_\w+ (very)_\w+ (little)_\w+\s/ig, "$1_RR $2_RG $3_DA1 ");
document.getElementById("MT").value = res;
//so_CS_RG maybe_RR
var str = document.getElementById("MT").value;
var res = str.replace(/(_CS)_RG (maybe_RR)\s/ig, "$1 $2 ");
document.getElementById("MT").value = res;
//quite_RG_RR a_RR21
var str = document.getElementById("MT").value;
var res = str.replace(/(_RG)_RR (\w+_R\w+)\s/ig, "$1 $2 ");
document.getElementById("MT").value = res;
//So_CS ,_, // the \b doesnt catch if first word.
var str = document.getElementById("MT").value;
var res = str.replace(/(so)_CS_RG(_RR ._.)\s/ig, "$1$2 "); 
document.getElementById("MT").value = res;
//so_CS_RG_RR I_PPIS1
var str = document.getElementById("MT").value;
var res = str.replace(/\b(so_CS)_RG_RR (\w+_[PNA]\w+)\s/ig, "$1 $2 ");
document.getElementById("MT").value = res;
//IF NOT SURE DEFAULT TO MOST COMMON RR
var str = document.getElementById("MT").value;
var res = str.replace(/\b(SO)_CS_RG(_RR[\w\s]*._.)\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/_CS(_RG)_RR (\w+_[JR]\w*)\s/ig, "$1 $2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/(\,_\, \w+_CS)_RG_RR (\w+_[PN]\w* \w+_V\w*)\s/ig, "$1 $2 ");
document.getElementById("MT").value = res;
//too_RG_RR much_DA1
var str = document.getElementById("MT").value;
var res = str.replace(/(_RG)_RR (\w+_DA1)\s/ig, "$1 $2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(yet|ALMOST|EVE[NR]|basically|forth)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(ALOUD|absolutely|actually)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(ALREADY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(ALRIGHT|alone|online|worldwide)\s/ig, "$1_JJ_RR "); 
document.getElementById("MT").value = res;
//you_PPY still_JJ hang_VVI 
var str = document.getElementById("MT").value;
var res = str.replace(/(_P\w+ \w+)_JJ(_RR \w+_V\w+)\s/ig, "$1$2 "); 
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(ALSO)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(if)\s/ig, "$1_CS_CSW ");
document.getElementById("MT").value = res;
// or_CC if_CS_CSW//while_CS if_CS_CSW
var str = document.getElementById("MT").value;
var res = str.replace(/(_C\w+ \w+_CS)_CSW\s/ig, "$1 ");
document.getElementById("MT").value = res;
//,_, if_CS_CSW
var str = document.getElementById("MT").value;
var res = str.replace(/(._. if_CS)_CSW\s/ig, "$1 ");
document.getElementById("MT").value = res;
//What_DDQ if_CS_CSW
var str = document.getElementById("MT").value;
var res = str.replace(/(_D\w+ \w+_CS)_CSW\s/ig, "$1 ");
document.getElementById("MT").value = res;
// underneath_RL if_CS_CSW you_PPY 
var str = document.getElementById("MT").value;
var res = str.replace(/(_R\w+ \w+_CS)_CSW (\w+_[NTAP]\w+)\s/ig, "$1 $2 ");
document.getElementById("MT").value = res;
////((?:kn[eo]w|matter|seen?|saw|care|wonder|tell|told|remember|determine|mind)\w*)
var str = document.getElementById("MT").value;
var res = str.replace(/\b((?:kn[eo]w|matter|seen?|saw|care|wonder|tell|told|remember|determine|mind)\w* if)_CS(_CSW)\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
//
var str = document.getElementById("MT").value;
var res = str.replace(/\b(if_CS)_CSW ([\w\s\']*._.)\s/ig, "$1 $2 ");
document.getElementById("MT").value = res;
//If_CS_CSW
var str = document.getElementById("MT").value;
var res = str.replace(/\b(If_CS)_CSW\s/g, "$1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(albeit|ALTHOUGH)\s/ig, "$1_CS ");
document.getElementById("MT").value = res;
//2 WHEN (CS) 8290974 4 WHEN (RRQ) 2397700 5 WHEN (CS22) 355663 6 WHEN (RRQV33) 3767
var str = document.getElementById("MT").value;
var res = str.replace(/\b(WHEN)\s/ig, "$1_CS_RRQ ");
document.getElementById("MT").value = res;
//when_CS_RRQ a_AT1 company_NN1 ca_VM (this is confusing) I imagine if it is a verb then it might be a question.
var str = document.getElementById("MT").value;
var res = str.replace(/(_CS)_RRQ (\w+_[^V]\w*)\s/ig, "$1 $2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/_CS(_\w+Q \w+_V\w*)\s/ig, "$1 ");
document.getElementById("MT").value = res;
//question ending When_CS_RRQ did_VDD you_PPY last_VVI see_VVI your_APPGE family_NN1 and_CC friends_NN2 ?_? (didnt add this yet)
var str = document.getElementById("MT").value;
var res = str.replace(/\b(though)\s/ig, "$1_CS_RR ");
document.getElementById("MT").value = res;
//when_CS and_CC
var str = document.getElementById("MT").value;
var res = str.replace(/_CS(_RRQ \w+_C\w*)\s/ig, "$1 ");
document.getElementById("MT").value = res;
//TILL (CS_II)
var str = document.getElementById("MT").value;
var res = str.replace(/\b(until|till)\s/ig, "$1_CS_II ");
document.getElementById("MT").value = res;
//till_CS_II they_PPHS2 're_VBR
var str = document.getElementById("MT").value;
var res = str.replace(/(_CS)_II (\w+_[NEPD]\w+ [\'\w]+_V\w+)\s/ig, "$1 $2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(ALTOGETHER)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(ALWAYS)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(AMAZING|outraged|susceptible)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(AMERICA|Kardashian)\s/ig, "$1_NP1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(AMERICAN|reclusive)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(Ainu|AMERICANS|blankets|influenzas|poles)\s/ig, "$1_NN2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(AMONG|beside)\s/ig, "$1_II ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(AMOUNT|cue|jail|muddle|sway|stunt|take)\s/ig, "$1_NN1_VV0 ");
document.getElementById("MT").value = res;
//Notice_NN1_VV0 //IMPERATIVE
var str = document.getElementById("MT").value;
var res = str.replace(/([A-Z]\w+)_NN1(_VV0)\s/g, "$1$2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(NEED|dare)\s/ig, "$1_NN1_VM_VV0 ");
document.getElementById("MT").value = res;
//did_VDD need_NN1_VM_VVI 
var str = document.getElementById("MT").value;
var res = str.replace(/(_VD\w+ \w+)_NN1_VM(_VVI)\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
//all_DB I_PPIS1 need_NN1_VM_VV0 is_VBZ
var str = document.getElementById("MT").value;
var res = str.replace(/(_D\w+ \w+_[NP]\w+ \w+)_NN1_VM(_VV0 \w+_VB\w+)\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/(_A\w+ \w+_NN1)_VM_VV0\s/ig, "$1 ");
document.getElementById("MT").value = res;
//How_RRQ dare_VV0 you_PPY talk_NN1
var str = document.getElementById("MT").value;
var res = str.replace(/(_RRQ dare_\w+ \w+_P\w+ \w+)_NN1_VM(_VV)0\s/ig, "$1$2I ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/(_RRQ dare_VV0 \w+_P\w+ talk_)NN1\s/ig, "$1VVI ");
document.getElementById("MT").value = res;
//I_PPIS1 need_NN1_VM_VV0 you_PPY
var str = document.getElementById("MT").value;
var res = str.replace(/(_[NP]\w+ \w+)_NN1_VM(_VV0 \w+_[NDP]\w+)\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
//will_VM not_XX usually_RR need_NN1_VM_VVI 
var str = document.getElementById("MT").value;
var res = str.replace(/(_VM [\w\']+_XX \w+_R\w+ \w+)_NN1_VM(_VVI)\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
//will_VM always_RR need_NN1_VM_VVI 
var str = document.getElementById("MT").value;
var res = str.replace(/(_VM \w+_R\w+ \w+)_NN1_VM(_VVI)\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
// we_PPIS2 need_NN1_VM_VV0 now_RT is_VBZ
var str = document.getElementById("MT").value;
var res = str.replace(/(_P\w+ \w+)_NN1_VM(_VV0 \w+_R\w+ \w+_VB\w+)\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
//children_NN2 need_NN1_VM_VV0 picking_VVG
var str = document.getElementById("MT").value;
var res = str.replace(/(_NN2 \w+)_NN1_VM(_VV0 \w+_VVG)\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
//jj need
var str = document.getElementById("MT").value;
var res = str.replace(/(_J\w+ \w+_NN1)_VM_VV0\s/ig, "$1 ");
document.getElementById("MT").value = res;
//I_PPIS1 need_NN1_VM_VV0 ._.
var str = document.getElementById("MT").value;
var res = str.replace(/(_[PN]\w+ \w+)_NN1_VM(_VV0 ._.)\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
//We_PPIS2 need_NN1_VM_VV0 blankets_NN2
var str = document.getElementById("MT").value;
var res = str.replace(/(_[NPD]\w+ \w+)_NN1_VM(_VV0 \w+_[ADJN]\w+)\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
//need_NN1_VM_VV0 n't_XX
var str = document.getElementById("MT").value;
var res = str.replace(/_NN1(_VM)_VV0 (n't_XX)\s/ig, "$1 $2 ");
document.getElementById("MT").value = res;
// How_RRQ dare_NN1_VM_VV0
var str = document.getElementById("MT").value;
var res = str.replace(/(_\w+Q \w+)_NN1_VM(_VV0)\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
//going_VVGK to_TO need_NN1_VM_VV0
var str = document.getElementById("MT").value;
var res = str.replace(/(to_\w+ \w+)_NN1_VM(_VV)0\s/ig, "$1$2I ");
document.getElementById("MT").value = res;
//_XX need_NN1_VM_VVI
var str = document.getElementById("MT").value;
var res = str.replace(/(_XX \w+)_NN1_VM(_VVI)\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
// should_VM need_NN1_VM_VVI
var str = document.getElementById("MT").value;
var res = str.replace(/(_VM \w+)_NN1_VM(_VVI)\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
//you_PPY need_NN1_VM_VV0 at_II
//you_PPY need_NN1_VM_VV0 to_TO
var str = document.getElementById("MT").value;
var res = str.replace(/(_[NP]\w+ \w+)_NN1_VM(_VV0 \w+_[IT]\w+)\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
//Students_NN2 need_VM not_XX even_RR go_VVI//_NN1_VM_VV0 not_XX
var str = document.getElementById("MT").value;
var res = str.replace(/_NN1(_VM)_VV0 (\w+_XX)\s/ig, "$1 $2 ");
document.getElementById("MT").value = res;
//do_VD0 we_PPIS2 need_NN1_VM_VVI
var str = document.getElementById("MT").value;
var res = str.replace(/(_VD\w+ \w+_[NP]\w+ \w+)_NN1_VM(_VV)[0I]\s/ig, "$1$2I ");
document.getElementById("MT").value = res;
//stir_VV0 up_RP dust_NN1_VV0
var str = document.getElementById("MT").value;
var res = str.replace(/(_RP \w+_NN1)_VV\w+\s/ig, "$1 ");
document.getElementById("MT").value = res;
//amount_NN1_VV0
var str = document.getElementById("MT").value;
var res = str.replace(/(_A\w+ \w+_NN1)_VV0/g, "$1 ");
document.getElementById("MT").value = res;
// which_DDQ cost_NN1_VV0 on_II
var str = document.getElementById("MT").value;
var res = str.replace(/(_D\w* \w+)_NN1(_VV0 \w+_II\w*)\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(AN)\s/ig, "$1_AT1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(awe|ANALYSIS|censorship|dancer|doorbell|fella|garage|gold|grandchild|mystery|silver|shortage|shirt|slavery)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(ANCIENT|earthlike)\s/ig, "$1_JJ "); 
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(ANGRY)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(ANIMAL)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(ANIMALS|charities|crops)\s/ig, "$1_NN2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(ANNOYING|aspiring|closing|coming|controlling|disturbing|flying|growing|participating|supporting)\s/ig, "$1_JJ_VVG ");
document.getElementById("MT").value = res;
//is_VBZ really_RR annoying_JJ_VVG ._.  
var str = document.getElementById("MT").value;
var res = str.replace(/(_VB\w+ \w+_R\w+ \w+_JJ)_VVG (._.)\s/ig, "$1 $2 "); 
document.getElementById("MT").value = res;
//_XX coming_JJ_VVG
//'m_VBM coming_JJ_VVG
var str = document.getElementById("MT").value;
var res = str.replace(/(_(?:VB|XX\w*) \w+)_JJ(_VVG)\s/ig, "$1$2 "); 
document.getElementById("MT").value = res;
//_VBR not_XX coming_JJ_VVG ._. 
var str = document.getElementById("MT").value;
var res = str.replace(/(_VB\w+ \w+_XX \w+)_JJ(_VVG)\s/ig, "$1$2 ");  
document.getElementById("MT").value = res;
// coming_JJ_VVG back_RP//just not a noun?
var str = document.getElementById("MT").value;
var res = str.replace(/_JJ(_VVG \w+_[^N]\w+)\s/ig, "$1 "); 
document.getElementById("MT").value = res;
//working_JJ_VVG with_IW Craig_NP1 got_VVD
var str = document.getElementById("MT").value;
var res = str.replace(/_JJ(_VVG \w+_I\w+ \w+_N\w+ \w+_V\w+)\s/ig, "$1 "); 
document.getElementById("MT").value = res;
//controlling_JJ_VVG your_APPGE
var str = document.getElementById("MT").value;
var res = str.replace(/_JJ(_VVG \w+_APPGE)\s/ig, "$1 ");
document.getElementById("MT").value = res;
//making_VVG decisions_NN2 and_CC working_JJ_VVG
var str = document.getElementById("MT").value;
var res = str.replace(/(_VVG \w+ \w+_CC\w* \w+)_JJ(_VVG)\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
//been_VBN working_JJ_VVG //this is quite impossible to distinguish!
var str = document.getElementById("MT").value;
var res = str.replace(/(_VB\w+ working)_JJ(_VVG \w+_I\w+)\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
//smoking_JJ_VVG is_VBZ
var str = document.getElementById("MT").value;
var res = str.replace(/_JJ(_VVG \w+_VB\w+)\s/ig, "$1 ");
document.getElementById("MT").value = res;
//
var str = document.getElementById("MT").value;
var res = str.replace(/(_VV\w+ \w+)_JJ(_VVG[\w\s]*._.)\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
//noise_NN1 disturbing_JJ_VVG me_PPIO1
var str = document.getElementById("MT").value;
var res = str.replace(/(_N\w+ \w+)_JJ(_VVG \w+_P\w+)\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(ANNUM)\s/ig, "$1_RA22 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(ANONYMOUS|evolutionary|frantic|large-scale)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(ANOTHER|THIS)\s/ig, "$1_DD1 ");
document.getElementById("MT").value = res;
//this_DD1 sounds_NN2_VVZ
var str = document.getElementById("MT").value;
var res = str.replace(/\b(\w+_DD1) (\w+)_NN2(_VVZ)\s/ig, "$1 $2$3 ");
document.getElementById("MT").value = res;
//that_CST bullies_NN2_VVZ ,_, the_AT bystanders_NN2
var str = document.getElementById("MT").value;
var res = str.replace(/(_CST \w+_NN2)_VVZ (,_, \w+_A\w+ \w+_NN2)\s/ig, "$1 $2 ");
document.getElementById("MT").value = res;
//during_II visits_NN2_VVZ
var str = document.getElementById("MT").value;
var res = str.replace(/(_II \w+_NN2)_VVZ\s/ig, "$1 ");
document.getElementById("MT").value = res;
// events_NN2 or_CC practices_NN2_VVZ ._. 
var str = document.getElementById("MT").value;
var res = str.replace(/(_NN2 \w+_CC \w+_NN2)_VVZ\s/ig, "$1 ");
document.getElementById("MT").value = res;
//ranks_NN2_VVZ quickly_RR increased_VVD_VVN (this should be delayed to stop clashing.
var str = document.getElementById("MT").value;
var res = str.replace(/(_NN2)_VVZ (\w+_R\w* \w+_VVD)_VVN([\w\s]*\W+_\W+)\s/ig, "$1 $2$3 ");
document.getElementById("MT").value = res;
//
var str = document.getElementById("MT").value;
var res = str.replace(/\b(ANYHOW)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(ANYMORE|afoul)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(ANYONE|ANYTHING|naught|nobody|somebody)\s/ig, "$1_PN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(ANYTHING)_\w* (BUT)_\w*\s/ig, "$1_RR21 $2_RR22 ");
document.getElementById("MT").value = res;
//
var str = document.getElementById("MT").value;
var res = str.replace(/\b(in)_\w* (general)_\w*\s/ig, "$1_RR21 $2_RR22 ");
document.getElementById("MT").value = res;
//as_RR21 well_RR22 so_R //may_VM as_RR21 well_RR22
var str = document.getElementById("MT").value;
var res = str.replace(/\b(as)_\w* (well)_\w* (\w+_[VR]\w*)\s/ig, "$1_RR21 $2_RR22 $3 ");
document.getElementById("MT").value = res;
//
var str = document.getElementById("MT").value;
var res = str.replace(/(uncommon)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
//in_II full_NN1
var str = document.getElementById("MT").value;
var res = str.replace(/\b(in)_\w* (full|common)_\w*\s/ig, "$1_RR21 $2_RR22 ");
document.getElementById("MT").value = res;
//of_RR21 course_RR22
var str = document.getElementById("MT").value;
var res = str.replace(/\b(of)_\w* (course)_\w*\s/ig, "$1_RR21 $2_RR22 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(ANYWAY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
//upwards of rg
var str = document.getElementById("MT").value;
var res = str.replace(/(upwards)_RL (of)_IO\s/ig, "$1_RG21 $2_RG22 ");
document.getElementById("MT").value = res;  
var str = document.getElementById("MT").value;
var res = str.replace(/\b(ANYWHERE|upwards)\s/ig, "$1_RL ");
document.getElementById("MT").value = res;  
var str = document.getElementById("MT").value;
var res = str.replace(/\b(APART)\s/ig, "$1_RL ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(APP|architect|behaviour|lid|exam|example|\w+hood)\s/ig, "$1_NN1 ");//childhoodetc
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(APPARENT|under-the-radar)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(APPEARANCE)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
//_VVN ,_, got_VVD_VVN even though this not always the case.
var str = document.getElementById("MT").value;
var res = str.replace(/(_VVN ,_, \w+)_VVD(_VVN)\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
//again just wild guessing probability = _CC fired_VVD_VVN
var str = document.getElementById("MT").value;
var res = str.replace(/(_C\w* \w+_VVD)_VVN\s/ig, "$1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(\w+APPEARS)\s/ig, "$1_VVZ ");//dis
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(APPLE)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(APPLICABLE)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(APPLICATION)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(APPLICATIONS)\s/ig, "$1_NN2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(APPLIED)\s/ig, "$1_VVD_VVN ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(APPLIES)\s/ig, "$1_VVZ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(APPLYING|circulating|postponing)\s/ig, "$1_VVG "); 
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(APPROACH|disadvantage)\s/ig, "$1_NN1_VV0 ");
document.getElementById("MT").value = res;
//one_PN1 disadvantage_VV0
var str = document.getElementById("MT").value;
var res = str.replace(/(_PN1 \w+_NN1)_VV0\s/ig, "$1 ");
document.getElementById("MT").value = res;
//one_MC1 second_NNT1 one_PN1 second_MD
var str = document.getElementById("MT").value;
var res = str.replace(/(one_)PN1 (second_)MD\s/ig, "$1MC1 $2NNT1 ");
document.getElementById("MT").value = res;
//Only_RR one_PN1 disadvantage_NN1
var str = document.getElementById("MT").value;
var res = str.replace(/(one)_PN1 (\w+_NN1)\s/ig, "$1_MC1 $2 ");
document.getElementById("MT").value = res;
//coal_NN1 or_CC iron_NN1_VV0 ._. 
var str = document.getElementById("MT").value;
var res = str.replace(/(_NN1 or_CC \w+_NN1)_VV0 (._.)\s/ig, "$1 $2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(APPROPRIATE)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(APPROVED)\s/ig, "$1_VVD_VVN ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(APPROX)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(APRIL)\s/ig, "$1_NPM1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(AREA|destiny)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(AREAS|dramas)\s/ig, "$1_NN2 ");
document.getElementById("MT").value = res; 
var str = document.getElementById("MT").value;
var res = str.replace(/\b(ARMED)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(ARMY|arrow)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
//1		  AROUND (II)	2642412	2		  AROUND (RP)	2001519	4		  AROUND (RG)	1185609
var str = document.getElementById("MT").value;
var res = str.replace(/\b(ARound)\s/ig, "$1_II_RG_RP ");
document.getElementById("MT").value = res;
// I_PPIS1 just_RR was_VBDZ n't_XX around_II_RG_RP as_CSA much_DA1_RR as_CSA I_PPIS1
var str = document.getElementById("MT").value;
var res = str.replace(/(_VB\w+ n.t_XX \w+)_II_RG(_RP \w+_CSA\w*)\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
//is_VBZ n't_XX around_II_RG_RP at_II 
var str = document.getElementById("MT").value;
var res = str.replace(/(_VB\w+ n.t_XX \w+)_II_RG(_RP \w+_I\w+)\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/(_VB\w+ \w+)_II_RG(_RP (?:\w+_I\w+|._.))\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
//about_II_RG_RP taking_VVG
var str = document.getElementById("MT").value;
var res = str.replace(/(_II)_RG_RP (\w+_VVG)\s/ig, "$1 $2 ");
document.getElementById("MT").value = res;
//PREPOSITION BEFORE NOUN PHRASE around_II_RG_RP the_AT
var str = document.getElementById("MT").value;
var res = str.replace(/(_II)_RG_RP (\w+_A\w*)\s/ig, "$1 $2 ");
document.getElementById("MT").value = res;
//around_II_RG_RP $5_NNU
var str = document.getElementById("MT").value;
var res = str.replace(/_II(_RG)_RP (\W*\d+%*_NNU)\s/ig, "$1 $2 ");
document.getElementById("MT").value = res;
//15%_NNU
var str = document.getElementById("MT").value;
var res = str.replace(/\b(\d+%)\s/ig, "$1_NNU ");
document.getElementById("MT").value = res;
//
var str = document.getElementById("MT").value;
var res = str.replace(/\b(ARRESTED)\s/ig, "$1_VVD_VVN ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(ARRow)\w* (key)\w*\s/ig, "$1_NN1 $2_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(ART)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(ARTICLE)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(ARTICLES|colleagues|doctorates)\s/ig, "$1_NN2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(ARTIST)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(ARTISTIC)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(ARTISTS)\s/ig, "$1_NN2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(ARTS)\s/ig, "$1_NN2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(ASIAN)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(ASIDE)\s/ig, "$1_RL ");
document.getElementById("MT").value = res;
//aside_II21 from_II22 
var str = document.getElementById("MT").value;
var res = str.replace(/(ASIDE)_R\w+ (from)_\w+\s/ig, "$1_II21 $2_II22 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(accepting|ASKING|bullying)\s/ig, "$1_VVG "); 
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(ASKS)\s/ig, "$1_VVZ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(ASLEEP)\s/ig, "$1_JJ "); 
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(ASPECTS|insights)\s/ig, "$1_NN2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(ASSESSMENT)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b((?:ASSET|bulb)s)\s/ig, "$1_NN2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(ASSIGNED)\s/ig, "$1_VVD_VVN ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(ASSIST)\s/ig, "$1_VVI ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(ASSISTANCE)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(ASSOCIATION)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(ASSUMING)\s/ig, "$1_VVG ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(ATHLETIC)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(ATTACHED|complained|constructed|heard|held|lined|separated|serviced)\s/ig, "$1_VVD_VVN "); 
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/(_M\w+ \w+_VVD)_VVN\s/ig, "$1 ");
document.getElementById("MT").value = res;
//with_IW whom_PNQO I_PPIS1 worked_VVN 
var str = document.getElementById("MT").value;
var res = str.replace(/(_I\w+ \w+_P\w+ \w+_P\w+ \w+_VVD)_VVN\s/ig, "$1 ");
document.getElementById("MT").value = res;
//Though_CS separated_VVD
var str = document.getElementById("MT").value;
var res = str.replace(/(_CS \w+)_VVD(_VVN)\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(ATTACK)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(ATTEND)\s/ig, "$1_VVI ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(ATTENDING)\s/ig, "$1_VVG ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(ATTENTION)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(ATTRACTIVE)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(AUDIENCE)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(AUGUST)\s/ig, "$1_NPM1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(AUSTRALIA)\s/ig, "$1_NP1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(AUSTRALIAN)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(AUTHENTIC)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(AUTHOR)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(AUTHORITY)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(AUTOMATED)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(AUTOMATIC)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(AUTOMOTIVE)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(AVAILABLE)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(AWARD)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(AWARD-WINNING)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(AWARDED)\s/ig, "$1_VVD_VVN ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(AWARE)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(AWESOME)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(AWFUL)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(BABY|AC)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
//1 BACK (RP) 6374291 3 BACK (NN1) 1521907 7 BACK (VVI) 95994 13 BACK (VV0) 23213 20 BACK (JJ) 11650 (ONLY VV0 IS NEEDED FIRST)
var str = document.getElementById("MT").value;
var res = str.replace(/\b(BACK)\s/ig, "$1_JJ_NN1_RP_VV0 ");
document.getElementById("MT").value = res;
//back_JJ_NN1_RP_VV0 downstairs_RL right_JJ_RR away_JJ_RL_RP
var str = document.getElementById("MT").value;
var res = str.replace(/_JJ_NN1(_RP)_VV0 (\w+_RL)\s/ig, "$1 $2 ");
document.getElementById("MT").value = res;
//right_JJ_RR away_JJ_RL_RP
var str = document.getElementById("MT").value;
var res = str.replace(/_JJ(_RR \w+)_JJ(_RL)_RP\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;//_NN1_RP_VV0
var res = str.replace(/(BACK_NN1)_RP_VV0 (to)_\w+ (front)_\w+\s/ig, "$1 $2_II $3_NN1 ");
document.getElementById("MT").value = res;
//You've got your trousers on back to front.
//missing_VVG back_RP then_RT ._.  there is no option as a preposition???
//come_VV0 all_DB the_AT way_NN1 back_JJ_NN1_RP_VV0
var str = document.getElementById("MT").value;
var res = str.replace(/(_VV\w+ \w+_D\w+ \w+_A\w+ \w+_N\w+ \w+)_JJ_NN1(_RP)_VV0\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
//viral_JJ content_JJ_NN1 becomes_VVZ
var str = document.getElementById("MT").value;
var res = str.replace(/(_JJ \w+)_JJ(_NN1 \w+_V\w+)\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
//on_II the_AT whole_JJ_NN1 we_PPIS2
var str = document.getElementById("MT").value;
var res = str.replace(/(_II \w+_A\w+ \w+)_JJ(_NN1 \w+_P\w+)\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
//get_VVI back_NN1_RP_VV0
var str = document.getElementById("MT").value;
var res = str.replace(/(_V\w+ \w+)_NN1(_RP)_VV[I0]\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
//get_VVI the_AT statue_NN1 back_JJ_NN1_RP_VV0 :_: he_PPHS1 pretends_VVZ as_CS21 if_CS22 he_PPHS1 is_VBZ a_AT1 policeman_NN1 ,_, goes_VVZ to_II that_DD1 guy[ ' ]s house_NN1 and_CC takes_VVZ it_PPH1 back_JJ_NN1_RP_VV0 ._.  
var str = document.getElementById("MT").value;
var res = str.replace(/(_V\w* \w+_[DAJ]\w* \w+_N\w+ \w+)_JJ_NN1(_RP)_VV0\s/ig, "$1$2 ");
document.getElementById("MT").value = res; 
var str = document.getElementById("MT").value;
var res = str.replace(/(_V\w* \w+_[PN]\w* \w+)_JJ_NN1(_RP)_VV0\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
//converted_VVN back_JJ_NN1_RP_VV0
var str = document.getElementById("MT").value;
var res = str.replace(/(_V\w* \w+)_JJ_NN1(_RP)_VV0\s/ig, "$1$2 ");
document.getElementById("MT").value = res; 
//on_II average_JJ_NN1 - big clash!!!!!!!!!!! so add sentence stop.
var str = document.getElementById("MT").value;
var res = str.replace(/(_I\w \w+)_JJ(_NN1[\w\s]*\W+_\W+)\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
//Looking_VVG back_JJ_NN1_RP_VV0 ,_,
var str = document.getElementById("MT").value;
var res = str.replace(/(_VV\w \w+)_JJ_NN1(_RP)_VV0 (\W+_\W+)\s/ig, "$1$2 $3 ");
document.getElementById("MT").value = res; 
//_APPGE back_JJ_NN1_RP_VV0
var str = document.getElementById("MT").value;
var res = str.replace(/(_A\w*) (\w+_JJ_NN1)_RP_VV0\s/ig, "$1 $2 ");
document.getElementById("MT").value = res;
//come_VVI back_NN1_RP_VV0
var str = document.getElementById("MT").value;
var res = str.replace(/(_V\w* \w+)_NN1(_RP)_VV0 ([\w\s\']*._.)\s/ig, "$1$2 $3 ");
document.getElementById("MT").value = res;
// his_APPGE professional_NN1 and_CC private_JJ lives_NN2 ,_, 
var str = document.getElementById("MT").value;
var res = str.replace(/(_A\w* \w+_JJ)_NN1 (\w+_CC\w* \w+_JJ \w+_NN\w+)\s/ig, "$1 $2 ");
document.getElementById("MT").value = res;
//his_APPGE back_JJ_NN1 before_CS_II_RT//must be delayed and only full stop for extra time. 
var str = document.getElementById("MT").value;
var res = str.replace(/(_A\w* \w+)_JJ(_NN1 \w+_[CIR]\w*[\w\s]*\._\.)\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
//before_CS_II_RT all_DB this_DD1 ._. 
var str = document.getElementById("MT").value;
var res = str.replace(/_CS(_II)_RT (\w+_[AJDN]\w+ \w+_[ADN]\w+ ._.)\s/ig, "$1 $2 ");
document.getElementById("MT").value = res;
//before_CS_II_RT walking_VVG
var str = document.getElementById("MT").value;
var res = str.replace(/_CS(_II)_RT (\w+_V\wG)\s/ig, "$1 $2 ");
document.getElementById("MT").value = res;
//The_AT day_NNT1 before_CS_II_RT Christmas_NNT1 Eve_NP1
var str = document.getElementById("MT").value;
var res = str.replace(/(_NNT\w+ \w+)_CS(_II)_RT (\w+_NNT\w+)\s/ig, "$1$2 $3 ");
document.getElementById("MT").value = res;
//
var str = document.getElementById("MT").value;
var res = str.replace(/\b(BACKGROUND)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(BACKWARDS)\s/ig, "$1_RL ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(ample|BAD)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(BAG)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(BALANCED)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(BALL)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(BAND)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(BANK)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(BAR)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(BASE)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(BASIC)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(BASIS)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(barbeque|BATTERY|curry)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(BATTLE)\s/ig, "$1_NN1_VV0 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(BC)\s/ig, "$1_RA ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value; 
var res = str.replace(/\b(BEACH)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(BEAUTIFUL|competent|fond|selfish)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(BEAUTY)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(BECAME|drove|drank|forgot|rang|sang|stole|threw|woke)\s/ig, "$1_VVD "); 
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(BECOMES)\s/ig, "$1_VVZ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(BECOMING|STARTING)\s/ig, "$1_VVG ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(BECause)\w* (of)_\w*\s/ig, "$1_II21 $2_II22 ");//1 BECAUSE (CS) 2  BECAUSE (II21)	2092503
document.getElementById("MT").value = res;
// question_NN1 as_CSA to_II what_DDQ
var str = document.getElementById("MT").value;
var res = str.replace(/(_N\w+ as)_C\w* (to)_\w* (\w+_[ADJN]\w+)\s/ig, "$1_II21 $2_II22 $3 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(BECause)\s/ig, "$1_CS ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(BED|porch|THERAPIST)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
//1 BEFORE (II) 3240842 3 BEFORE (CS) 2449322 4 BEFORE (RT) 1195294
var str = document.getElementById("MT").value;
var res = str.replace(/\b(BEFORE)\s/ig, "$1_CS_II_RT ");
document.getElementById("MT").value = res;
//before_CS_II_RT him_PPHO1 ,_, //before_CS_II_RT your_APPGE mouth_NN1 .
var str = document.getElementById("MT").value;
var res = str.replace(/_CS(_II)_RT (\w+_P\w+ ._.)\s/ig, "$1 $2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/_CS(_II)_RT (\w+_A\w+ \w+_N\w+ ._.)\s/ig, "$1 $2 ");
document.getElementById("MT").value = res;
//heard_VVN before_II and_CC
var str = document.getElementById("MT").value;
var res = str.replace(/(_V\w+ \w+)_CS(_II)_RT (\w+_CC)\s/ig, "$1$2 $3 ");
document.getElementById("MT").value = res;
//before_CS_II_RT I_PPIS1 fell_VVD
var str = document.getElementById("MT").value;
var res = str.replace(/(_CS)_II_RT (\w+ \w+_V\w*)\s/ig, "$1 $2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(\w+)_CS_II(_RT) (\W+_\W+)\s/ig, "$1$2 $3 ");
document.getElementById("MT").value = res;
//before_CS_II_RT we_PPIS2 take_VV0 the_AT car_NN1 to_II Phillip_NP1 Island_NN1 ._.
var str = document.getElementById("MT").value;
var res = str.replace(/\b(\w+)(_CS)_II_RT ([\w\s]*\w+_V\w+\s[\w\s]*\W+_\W+)\s/ig, "$1$2 $3 ");
document.getElementById("MT").value = res;
//
var str = document.getElementById("MT").value;
var res = str.replace(/\b(BEFOREHAND)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(BEGAN)\s/ig, "$1_VVD ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(BEGINS)\s/ig, "$1_VVZ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(BEHAVIOR|bread|constituent|dough|lawn|mower|pill)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;

var str = document.getElementById("MT").value;
var res = str.replace(/\b(BELIEVES)\s/ig, "$1_VVZ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(bated|BELOVED|well-drained)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(alarms|answers|BENEFITS|conflicts|contacts|cracks|bullies|jumps|grades|pains|phones|stops|storms|troubles|works)\s/ig, "$1_NN2_VVZ "); 
document.getElementById("MT").value = res;
//splitting hoping to work better_JJR
//plural or third person//note sometimes the following list doesnt capture!  so need to pull them out..?  failing long lists...
var str = document.getElementById("MT").value;
var res = str.replace(/\b(jams|tunnels|POINTS|COSTS|NEEDS|PLANS|FEATURES|RESULTS|CHANGES|TIPS|SHOWS)\s/ig, "$1_NN2_VVZ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(REPORTS|REVIEWS|ISSUES|NOTES|PROJECTS|LINKS|COMMENTS|RECORDS|SETS|STATES|FORMS|RATES|APPS|CALLS|UPDATES|CONCERNS|CREDITS|AWARDS|RULES|RUNS|PRACTICES|SUPPLIES|DATES|CONTROLS|CLAIMS|LIVES|SOUNDS|ACCOUNTS|INCREASES|RETURNS|TALKS|LEAVES|TRIPS|ENDS|VALUES|LISTS|FUNCTIONS|TESTS|LIMITS|HITS|MEASURES|DEALS|ADDRESSES|MATTERS|WHEELS|USES|PLACES|NAMES|STEPS|PROCESSES|CHECKS|FRAMES|SERVICES|TAGS|WINS|POSITIONS|DOCUMENTS|PASSES|CUTS|ATTACKS|EXERCISES|COVERS|RINGS|REQUESTS|BANDS|BRANDS|MATCHES|FILTERS|CONS|VIEWS|SPEEDS|DRIVES|MOVES|ORDERS|THANKS|ATTEMPTS|REBOUNDS|PLAYS|BARS|RELEASES|ACTS|CUPS|BLOCKS|APPROACHES|ACTIONS|COLORS|TRAILS|GRANTS|BOXES|PICTURES|DROPS|OBJECTS|HEADS|BREAKS|SPORTS|SIGNS|ROUNDS|TRICKS|FIGURES|DISPLAYS|STYLES|SHARES|STANDS|KEYS|TRACKS|CHALLENGES|CAUSES|SCORES|PROGRAMS|GAMES|MARKS|GAINS|FORCES|BOARDS|UPGRADES|HIGHLIGHTS|HOUSES|SCREWS|BLOGS|REWARDS|REPAIRS|COMMANDS|CLIPS|RIDES|RANGES|ESTIMATES|FILES|BUTTONS|SUPPORTS|COUNTS|FINISHES|CONTRACTS|SHIPS|QUOTES|FALLS|STICKS|FLOWS|SPOTS|SAMPLES|TIES|VISITS|LIES|SHOPS|ATTRIBUTES|FACES|RANKS|WALKS|PERMITS|SIGNALS|SHES|STATS|DRINKS|SLOTS|TRAINS|MONITORS|THREADS|RESORTS|EMAILS|LEVELS|SWITCHES|STRUCTURES|TRANSFERS|STRIKES|TOURS|STRIPS|ASSOCIATES|LICENSES|FLAVORS|FLOWERS|HOLIDAYS|HONORS|WATERS|TREATS|HANDLES|AGES|RISKS|WATCHES|SEALS|APPEALS|RACES|PROCEEDS|NOTES|ROLLS|INTERESTS|WAVES|SUITS|STOCKS|JUDGES|PARKS|REFERENCES|LIKES|RISES|PROFILES|SHIFTS|SLIDES|DETAILS|QUESTIONS|PURCHASES|FIXES|SAVES|STAYS|SPELLS|NOTICES|BANKS|HOPES|DOWNLOADS|DEMANDS|SCREENS|HEADACHES|WINDS|FIGHTS|MODELS|EXPERIENCES|MOTORS|BEATS|FITS|LINES|CENTRES|HANDS|CRASHES|LEAKS|OUTPUTS|COMPOUNDS|MOUNTS|FEEDS|GROUPS|TASTES|DESIRES|BLOGGERS|PRESENTS|STAMPS|FEARS|EFFECTS|FLIES|LIGHTS|BALANCES|CYCLES|STRINGS|ADVANCES|PUZZLES|STAINS|STROKES|SWINGS|REMEDIES|PARTS|EXPORTS|BOOKS|TOPS|POWERS|BUGS|ROOTS|BONDS|DRESSES|PLUGS|BEARS|BOLTS|REPLIES|STUDIES|SPRINGS|TYPES|RESERVES|GUARDS|POSTS|LOVES|YIELDS|PURPOSES|PROMISES|PAINTS|LAUNCHES|EXHIBITS|TUNES|WIRES|LOCKS|CONDITIONS|CONGRATS|FIRES|FLAGS|STARTUPS|SINGLES|SEARCHES|BACKS|EXPERIMENTS|DRONES|STITCHES|WONDERS|SURVEYS|SCHEDULES|SHOOTS|SEGMENTS|OILS|AMOUNTS|TOUCHES|ANALYSES|WINGS|COURTS|STRIKEOUTS|TRIES|PROFITS)\s/ig, "$1_NN2_VVZ ");
document.getElementById("MT").value = res;
//ourselves_PPX2 questions_VVZ
var str = document.getElementById("MT").value;
var res = str.replace(/(_PPX2 \w+_NN2)_VVZ\s/ig, "$1 ");
document.getElementById("MT").value = res;
//have_VH0 any_DD questions_VVZ
var str = document.getElementById("MT").value;
var res = str.replace(/(_V\w+ \w+_DD \w+_NN2)_VVZ\s/ig, "$1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(STEMS|CARBS|BRANCHES|CLASSES|COURSES|SHELTERS|BURNS|INPUTS|DEFAULTS|TRIGGERS|INTERFACES|WRAPS|BASES|STRAPS|LIFTS|LOOPS|NUMBERS|NOODLES|STRAINS|TWEETS|STAGES|FINES|PIECES|BACKUPS|PRICES|FUNDS|DOUBLES|STRUGGLES|INSERTS|BATS|ENCOUNTERS|HINTS|CASES|PHOTOGRAPHS|GUARANTEES|SCHOOLS|CAREGIVERS|SMELLS|BLENDS|REMARKS|WHITES|BITES|FAIRS|KICKS|TOWELS|SPONSORS|WEIGHTS|MINDS|SLICES|SHADES|SMILES|MIXES|ROWS|FACTORS|SHIELDS|GRIPS|DRAWS|HACKS|SHOCKS|TOWERS|PODCASTS|PLANTS|ACHES|BIDS|LOADS|SQUARES|INFLUENCES|REGISTERS|VOICES|BRUSHES|WEEDS|CHANNELS|TOTALS|TRAPS|TRUMPS|HALVES|PACKAGES|COOKS|SUSPECTS|WOMENS|TEARS|FLOODS|STAKES|WHISTLES|TRAVELS|WARRANTS|SCANS|OFFENSES|PRINTS|MARKETS|BUFFS|SCARS|BAYS|JOKES|MASKS|SPRAYS|SCAMS|RIGS|PLAYOFFS|MEDS|WITNESSES|RIFLES|AIMS|SCOUTS|SNAPS|BUDGETS|CLOTS|BOMBS|EXITS|TERMS|MAPS|TWISTS|TWINS|DAMAGES|BREEDS|DIAPERS|TAPS|SOILS|BOWS|MAJORS|COUNTERS|THUMBS|PARKS|BOWLS|FAVORS|ALLIES|STRETCHES|JACKS|MENTIONS|SEATS|CLAMPS|BUYS|RACKS|FIELDS|SIZES|LECTURES|DRAFTS|FORECASTS|BRACES|BUMPS|WORDS|CUPCAKES|RIVALS|PROMPTS|BLOWS|CONTESTS|AIDS|SINKS|BAGS|BRACKETS|CENTERS|FIRMS|MOLDS|INTERNS|HOMES|SPROUTS|FARES|SKINS|RETREATS|REASONS|TWEAKS|SPLITS|PROTESTS|ANCHORS|WEDGES|HINGES|SCROLLS|FLASHES|WOUNDS|DIPS|WORRIES|SPIKES|SLIPS|SPICES|RESTS|BEAMS|SANCTIONS|BOTS|ROCKETS|SPARKS|MACHINES|PARTITIONS|ENDEAVORS|WASHES|CUFFS|CHATS|COUNTERPARTS|RECRUITS|TIMELINES|FILMS|SHADOWS|BASKETS|LOGS|VENTS|RESPECTS|BROWNS|AUCTIONS|MENS|CHEATS|ROOMS|SOMEONES|NETWORKS|CHICKS|SACRIFICES|STATIONS|REELS|RELAYS|SORTS|EVERYONES|CROWNS|LOANS|HUNTS|EXTRACTS|BERRIES|SPANS|BOUNDS|SHAPES|EYES|NONPROFITS|PRESSES|STACKS|BOSSES|BLOOMS|CLOTHES|REFORMS|SHOWERS|YOLKS|CROSSES|BROADCASTS|IPHONES|SUPPLIES|AVERAGES|DISLIKES|LEGUMES|FRANCHISES|FLAPS|FLAKES|FREEZES|TRUSTS|DISCIPLINES|RALLIES|BOOTS|URLS|DIETS|PROBES|TRACES|SWAPS|BURSTS|BENDS|STALLS|SCRATCHES|SIDES|LENTILS|PARTIES|TAXES|BREACHES|ARMS|GASKETS|BANS|SKATES|POUNDS|DARTS|RUINS|SCENTS|COLLAPSES|IMPLEMENTS|SWEATS|REBELS|WAFFLES|DOGS|LEAFS|ESCAPES|HEADSETS|BASINS|DRIES|COPIES|EQUALS|CAPTURES|RHYMES|CASTS|RAIDS|STRIDES|LOWS|BUCKS|TRAINS|SECTIONS|PUMPS|DIALS|REFUNDS|PINES|MISSES|TRIMS|GOGGLES|BOASTS|BETS|CRIES|HASHTAGS|SLOPES|HOTSPOTS|BILLS|OFFS|CYSTS|VETS)\s/ig, "$1_NN2_VVZ ");
document.getElementById("MT").value = res;
//plural or third person//note sometimes the following list doesnt capture!  so need to pull them out..?  failing long lists...//try moving this up the page
//ends_NN2 up_RP//but this must come after article!!!!
var str = document.getElementById("MT").value;
var res = str.replace(/(few_DA2 \w+_NN2)_VVZ\s/ig, "$1 "); //a few bucks 
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/(_A\w+ \w+_NN2)_VVZ\s/ig, "$1 "); 
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/_NN2(_VVZ \w+_RP)\s/ig, "$1 "); 
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/(_\w+1 \w+_RR \w+)_NN2(_VVZ)\s/ig, "$1$2 "); 
document.getElementById("MT").value = res;
//Between_II_RL now_RT//if they are capital....
var str = document.getElementById("MT").value;
var res = str.replace(/\b(Between|Beyond|Inside|Aboard)\s/g, "$1_II ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(BETWEEN|BEyond|INSIDE|aboard)\s/ig, "$1_II_RL ");//rl@
document.getElementById("MT").value = res;
// inside_II_RL to_TO
var str = document.getElementById("MT").value;
var res = str.replace(/_II(_RL \w+_T\w*)\s/ig, "$1 ");
document.getElementById("MT").value = res;
//beyond_II_RL Dublin_NN1 //between_II_RL short-term_JJ
var str = document.getElementById("MT").value;
var res = str.replace(/\b(\w+_II)_RL (\w+\-*\w*_[ANJ]\w*)\s/ig, "$1 $2 ");//rl@
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(\w+)_II(_RL \w+_[CVE]\w*)\s/ig, "$1$2 ");//rl@
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(\w+)_II(_RL \W+_\W+)\s/ig, "$1$2 ");//rl@
document.getElementById("MT").value = res;
//cut
var str = document.getElementById("MT").value;
var res = str.replace(/\b(cut)\s/ig, "$1_NN1_VV0_VVD_VVN ");
document.getElementById("MT").value = res;
//get_VVI your_APPGE hair_NN1 cut_NN1_VV0_VVD
var str = document.getElementById("MT").value;
var res = str.replace(/\b(g[eo]t_V\w+ \w+_A\w+ \w+_N\w+ \w+)_NN1_VV0_VVD(_VVN)\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(BIG|extinct)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
//high is not an adjective really...
var str = document.getElementById("MT").value;
var res = str.replace(/(high)_\w+ (schools?_N\w+)\s/ig, "$1_NN1 $2 ");
document.getElementById("MT").value = res;
//comparative adjectives/adverb
var str = document.getElementById("MT").value;
var res = str.replace(/\b(BETTER|AIRIER|ANGRIER|APTER|BADDER|BALDER|BEEFIER|BETTER-INFORMED|BETTER-KNOWN|BETTER-LOOKING|BETTER-OFF|BETTER-THAN-EXPECTED|BIGGER|BLACKER|BLEAKER|BLONDER|BLOODIER|BLUER|BLUNTER|BLURRIER|BOLDER|BOSSIER|BOUNCIER|BRAINIER|BRASHER|BRAVER|BRIEFER|BRIGHTER|BROADER|BROWNER|BULKIER|BUMPIER|BUSHIER|BUSIER|BUSTIER|CALMER|CAMPER|CATHETER|CHEAPER|CHEWIER|CHILLIER|CHUNKIER|CLASSIER|CLEANER|CLEARER|CLEVERER|CLOSER|CLOUDIER|CLUNKIER|COARSER|COLDER|COMFIER|COOLER|COSTLIER|COZIER|CRAPPIER|CRAZIER|CREAMER|CREAMIER|CREEPIER|CRISPER|CRISPIER|CROSSER|CRUDER|CRUELER|CRUNCHIER|CURIOUSER|CURLIER|CURVIER|CUTER|DAMPER|DARKER|DEADER|DEADLIER|DEARER|DEEPER|DENSER|DIMMER|DIRTIER|DRESSIER|DRIER|DULLER|DUMBER|EARLIER|EARTHIER|EASIER|EDGIER|EMPTIER|EVER-GREATER|EVER-HIGHER|FAINTER|FAIRER|FANCIER|FARTHER|FASTER|FATTER|FIERCER|FINER|FIRMER|FITTER|FLASHIER|FLATTER|FLUFFIER|FONDER|FREER|FRESHER|FRIENDLIER|FRUITIER|FULLER|FUNKIER|FUNNIER|FURTHER|FUZZIER|GENTLER|GLAZIER|GLOOMIER|GLOSSIER|GRANDER|GRAVER|GRAYER|GREATER|GREENER|GRIMMER|GRITTIER|GROSSER|HAIRIER|HANDIER|HAPPIER|HARDER|HARSHER|HEALTHIER|HEARTIER|HEAVIER|HEFTIER|HIGHER-PRICED|HIGHER-THAN-AVERAGE|HOLIER|HOTTER|HUGER|HUMBLER|HUNGRIER|JUICIER|KEENER|KINDER|LARGER|LATER|LAZIER|LEANER|LEFTHANDER|LENGTHIER|LESS-DEVELOPED|LIGHTER|LIKELIER|LITTLER|LIVELIER|LOFTIER|LONELIER|LONGER|LONGER-LASTING|LOOSER|LOUDER|LOVELIER|LOWER-PRICED|LUCKIER|LUSHER|MADDER|MEANER|MEATIER|MEEKER|MELLOWER|MERRIER|MESSIER|MIGHTIER|MILDER|MOISTER|MOODIER|MUDDIER|MURKIER|NARROWER|NASTIER|NEATER|NEWER|NICER|NIMBLER|NOBLER|NOISIER|NONLAWYER|ODDER|OILIER|OLDER|OUTLIER|OVERNIGHTER|PALER|PHOTOMULTIPLIER|PICKIER|PINKER|PLAINER|PLUMPER|POORER|PRETTIER|PRICIER|PROUDER|PUNCHIER|PURER|QUICKER|QUIETER|QUIRKIER|RACIER|RAINIER|RARER|REDDER|REMOTER|RICHER|RISKIER|ROCKIER|ROOMIER|ROSIER|ROUGHER|ROUNDER|RUDER|RUNNIER|SADDER|SAFER|SALTIER|SALTWATER|SANER|SAWYER|SCARCER|SCARIER|SEEDIER|SEVERER|SEXIER|SHADIER|SHAKIER|SHALLOWER|SHARPER|SHINIER|SHORTER|SICKER|SILKIER|SILLIER|SIMPLER|SKINNIER|SLACKER|SLEEKER|SLICKER|SLIGHTER|SLIMMER|SLOPPIER|SLOWER|SMALLER|SMARTER|SMOOTHER|SNAPPIER|SNUGGER|SOFTER|SPARSER|SPEEDIER|SPICIER|SPORTIER|SQUISHIER|STARKER|STEADIER|STEEPER|STERNER|STICKIER|STIFFER|STOCKIER|STRAIGHTER|STRANGER|STRICTER|STRONGER|STURDIER|SUBTLER|SUNNIER|SURER|SWEETER|SWIFTER|TALLER|TAMER|TANKIER|TASTIER|THICKER|THINNER|THIRSTIER|TIDIER|TIGHTER|TIMELIER|TINIER|TOUGHER|TRENDIER|TRICKIER|TRIMMER|TRUER|UGLIER|VASTER|WARMER|WASTEWATER|WEAKER|WEALTHIER|WEIGHTIER|WEIRDER|WETTER|WHITER|WIDER|WILDER|WINDIER|WISER|WORSE|WORTHIER|YOUNGER|ZAPIER|higher)\s/ig, "$1_JJR_RRR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/(_VB\w+ \w+_JJR)_RRR\s/ig, "$1 "); 
document.getElementById("MT").value = res;
// look_VV0 older_RRR
var str = document.getElementById("MT").value;
var res = str.replace(/((?:look|g[oe]t|bec[ao]m)\w*_V\w+ \w+_JJR)_RRR\s/ig, "$1 "); 
document.getElementById("MT").value = res;
//stronger_JJR and_CC stronger_RRR 
var str = document.getElementById("MT").value;
var res = str.replace(/(_JJR \w+_CC\w* \w+er_JJR)_RRR\s/ig, "$1 "); 
document.getElementById("MT").value = res;
//explore_VVI that_DD1 path_NN1 further_JJR
var str = document.getElementById("MT").value;
var res = str.replace(/(_VV\w+ [\w\s]*)_JJR(_RRR)\s/ig, "$1$2 "); 
document.getElementById("MT").value = res;
//_VBZ not_XX any_DD thicker_RRR 
var str = document.getElementById("MT").value;
var res = str.replace(/(_VB\w+ [\w\s]+?_JJR)_RRR\s/ig, "$1 ");
document.getElementById("MT").value = res;
//earlier_RRR ,_, she_PPHS1 'd_VM
var str = document.getElementById("MT").value;
var res = str.replace(/(_\w[^B]\w+ \w+)_JJR(_RRR ,_, [\w\s\']+_V\w+)\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
//get_VVI there_RL quicker_JJR_RRR
var str = document.getElementById("MT").value;
var res = str.replace(/(_VV\w+ \w+_R\w+ \w+)_JJR(_RRR)\s/ig, "$1$2 "); 
document.getElementById("MT").value = res;
//was_VBDZ a_RR21 lot_RR22 higher_JJR
var str = document.getElementById("MT").value;
var res = str.replace(/(_VB\w+ \w+_R\w+ \w+_R\w+ \w+_JJR)_RRR\s/ig, "$1 "); 
document.getElementById("MT").value = res;
//be_VBI no_AT higher_RRR
var str = document.getElementById("MT").value;
var res = str.replace(/(_VB\w+ \w+_A\w+ \w+_JJR)_RRR\s/ig, "$1 "); 
document.getElementById("MT").value = res;
//Worse_JJR_RRR ,_,
var str = document.getElementById("MT").value;
var res = str.replace(/([A-Z]\w+_JJR)_RRR (,_,)\s/g, "$1 $2 "); 
document.getElementById("MT").value = res;
//get worse//make_VVI matters_NN2 worse_RRR
var str = document.getElementById("MT").value;
var res = str.replace(/(g[oe]tt?e?i?n?g?_V\w* \w+_JJR)_RRR\s/ig, "$1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/(mak\w+_V\w* \w+_[NDPR]\w+ \w+_JJR)_RRR\s/ig, "$1 ");
document.getElementById("MT").value = res;
//Is_VBZ it_PPH1 better_RRR
var str = document.getElementById("MT").value;
var res = str.replace(/(_VB\w* \w+_[NDPR]\w+ \w+_JJR)_RRR\s/ig, "$1 ");
document.getElementById("MT").value = res;
//it_PPH1 's_VBZ simpler_RRR
var str = document.getElementById("MT").value;
var res = str.replace(/(_VB\w* \w+_JJR)_RRR\s/ig, "$1 ");
document.getElementById("MT").value = res;
//preading_VVG further_RRR and_CC deeper_JJR_RRR
var str = document.getElementById("MT").value;
var res = str.replace(/(_RRR \w+_CC\w* \w+)_JJR(_RRR)\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
//done_VDN better_JJR_RRR ._. 
var str = document.getElementById("MT").value;
var res = str.replace(/(_V[^B]\w+ \w+)_JJR(_RRR ._.)\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
// 's_VBZ nothing_PN1 worse_RRR 
var str = document.getElementById("MT").value;
var res = str.replace(/(_VB\w+ \w+_P\w+ \w+_JJR)_RRR\s/ig, "$1 ");
document.getElementById("MT").value = res;
//make_VVI it_PPH1 a_RR21 bit_RR22 clearer_JJR_RRR
var str = document.getElementById("MT").value;
var res = str.replace(/(ma\w+_V\w+[\w\s-]* \w+_JJR)_RRR\s/ig, "$1 ");
document.getElementById("MT").value = res;
//is_VBZ quite_RG a_RR21 bit_RR22 higher_RRR
var str = document.getElementById("MT").value;
var res = str.replace(/(_VB\w+ \w+_R\w+ \w+_R\w+ \w+_R\w+ \w+_JJR)_RRR\s/ig, "$1 ");
document.getElementById("MT").value = res;
//be_VBI even_RR worse_RRR
var str = document.getElementById("MT").value;
var res = str.replace(/(_VB\w+ \w+_[RX]\w+ \w+_JJR)_RRR\s/ig, "$1 ");
document.getElementById("MT").value = res;
//got_VVD funkier_RRR
var str = document.getElementById("MT").value;
var res = str.replace(/(g[eo]tt?s?i?n?g?_V\w+ \w+_JJR)_RRR\s/ig, "$1 ");
document.getElementById("MT").value = res;
//stronger_JJR and_CC stronger_JJR_RRR 
var str = document.getElementById("MT").value;
var res = str.replace(/(_JJR and_CC \w+_JJR)_RRR\s/ig, "$1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/(bec[ao]mes?i?n?g?_V\w+ \w+_JJR)_RRR\s/ig, "$1 ");
document.getElementById("MT").value = res;
//make_VVI your_APPGE trip_NN1 better_JJR_RRR
var str = document.getElementById("MT").value;
var res = str.replace(/(_V\w* \w+_[AJ]\w* \w+_N\w+ \w+)_JJR(_RRR)\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
//been_VBN better_JJR of_IO late_RR ,_, but_CCB not_XX that_RG much_DA1 better_JJR ._.
var str = document.getElementById("MT").value;
var res = str.replace(/(_VB[\w\s\,]+ \w+)_JJR(_RRR)\s/ig, "$1$2 "); 
document.getElementById("MT").value = res;
//YEARS (NNT2) LATER (RRR) , (,) comparative adjective adverb
var str = document.getElementById("MT").value;
var res = str.replace(/(_NNT\w* \w+)_JJR(_RRR)\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/(_[AI]\w* \w+_JJR)_RRR\s/ig, "$1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/(_VB\w* \w+_JJR)_RRR\s/ig, "$1 ");
document.getElementById("MT").value = res;
//is_VBZ a_AT1 lot_NN1 cheaper_JJR_RRR
var str = document.getElementById("MT").value;
var res = str.replace(/(_VB\w*[\w\s]+\w+_JJR)_RRR\s/ig, "$1 ");
document.getElementById("MT").value = res;
//up_RP better_JJR_RRR before_CS
var str = document.getElementById("MT").value;
var res = str.replace(/(_RP \w+)_JJR(_RRR \w+_C\w+)\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
//a_RR21 lot_RR22 cheaper_JJR
var str = document.getElementById("MT").value;
var res = str.replace(/(a)_\w* (lot)_\w* (\w+_\w\wR)\s/ig, "$1_RR21 $2_RR22 $3 ");
document.getElementById("MT").value = res;
//helped_VVD me_PPIO1 a_AT1 lot_NN1 during_II 
var str = document.getElementById("MT").value;
var res = str.replace(/(_VV[\w\s]* a)_\w* (lot)_\w* (\w+_II\w*)\s/ig, "$1_RR21 $2_RR22 $3 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(\w+_JJR)_RRR (\w+_N\w*)\s/ig, "$1 $2 ");
document.getElementById("MT").value = res;
//later_JJR_RRR told_VVD
var str = document.getElementById("MT").value;
var res = str.replace(/_JJR(_RRR \w+_V\w*)\s/ig, "$1 ");
document.getElementById("MT").value = res;
//get_VV0 smarter_RRR
var str = document.getElementById("MT").value;
var res = str.replace(/(get|got|gotten|getting|gets_V\w+ \w+_JJR)_RRR\s/ig, "$1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(got)(ta)\s/ig, "$1_VVD $2_TO ");
document.getElementById("MT").value = res;
//announced_VVD earlier_JJR_RRR 
var str = document.getElementById("MT").value;
var res = str.replace(/(_VV\w+ \w+)_JJR(_RRR)\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(BIGGEST|cheapest|lightest|richest|merest)\s/ig, "$1_JJT "); 
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(Besides)\s/ig, "$1_II_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(BIKE|cone|inheritance|lotto|opium)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(BILL)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(BILLION|hundred|thousand|dozen|trillion|zillion)\s/ig, "$1_NNO "); 
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(BIRTH|irony)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(BLANK)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(BLIND|deliberate|faint|open)\s/ig, "$1_JJ_VV0 ");
document.getElementById("MT").value = res;
//left_VVN it_PPH1 open_VV0
var str = document.getElementById("MT").value;
var res = str.replace(/(_PPH1 \w+_JJ)_VV0\s/ig, "$1 ");
document.getElementById("MT").value = res;
//_VBR more_DAR than_CSN welcome_JJ_VV0
var str = document.getElementById("MT").value;
var res = str.replace(/(_VB\w+ \w+_DAR than_CSN \w+_JJ)_VV0\s/ig, "$1 ");
document.getElementById("MT").value = res;
//in_II cool_JJ_VV0
var str = document.getElementById("MT").value;
var res = str.replace(/(_II \w+_JJ)_VV0\s/ig, "$1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(BLOCK)\s/ig, "$1_NN1_VV0 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(BLOG|tweet)\s/ig, "$1_NN1_VV0 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(BLOOD)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(BLOODy)\s/ig, "$1_JJ_RG_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(BOAT)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(BODY)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(BOLD)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(BORING)\s/ig, "$1_JJ_VVG ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(BORN|sunk)\s/ig, "$1_VVN ");
document.getElementById("MT").value = res;
//1		  BOTH (DB2)	3206028	2		  BOTH (RR)	2848445 followed by choice 1 AND 2.
var str = document.getElementById("MT").value;
var res = str.replace(/\b(BOTH)\s/ig, "$1_DB2_RR ");
document.getElementById("MT").value = res;
//both_DB2_RR formats_NN2
// they_PPHS2 were_VBDR both_DB2_RR pork_NN1 chops_VVZ ._.//both saw 
var str = document.getElementById("MT").value; 
var res = str.replace(/(_DB2)_RR (\w+_[NV]\w+)\s/ig, "$1 $2 ");
document.getElementById("MT").value = res;
//pork_NN1 chops_VVZ
var str = document.getElementById("MT").value; 
var res = str.replace(/(pork_NN1 chops_)VVZ\s/ig, "$1NN2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value; 
var res = str.replace(/\b(\w+)_DB2(_RR [\w\s]+ and_\w*[\w\s]+._.)\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(BOUnd)\s/ig, "$1_VVD_VVN_VVNK ");
document.getElementById("MT").value = res;
//_VBZ_VHZ bound_VVD_VVN_VVNK to_TO happen_VVI
var str = document.getElementById("MT").value;
var res = str.replace(/(_VBZ)_VHZ (\w+)_VVD_VVN(_VVNK to_TO \w+_VVI)\s/ig, "$1 $2$3 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/(_VVN)_VVNK (\w+_[^T]\w*)\s/ig, "$1 $2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/_VVN(_VVNK \w+_TO)\s/ig, "$1 ");
document.getElementById("MT").value = res;
//
var str = document.getElementById("MT").value;
var res = str.replace(/\b(BOX)\s/ig, "$1_NN1_VV0 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(BOY|fur|ocean|virtue|talent)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/(BOYS|brownies|fingerprints|crosswords|oceans|specialties|specialities|talents)\s/ig, "$1_NN2 ");// if I use /b first word doesnt work. 
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(BRAIN|mum|lesson|refugee)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(BRANDS)\s/ig, "$1_NN2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(BREAKING|figuring|breathing)\s/ig, "$1_VVG ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(BRIDGE)\s/ig, "$1_NN1_VV0 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(BRIEF)\s/ig, "$1_JJ_VV0 ");
document.getElementById("MT").value = res;
//must_VM not_XX separate_JJ_VVI
var str = document.getElementById("MT").value;
var res = str.replace(/(_VM n.t_XX \w+)_JJ(_VV\w+)\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(BRIGHT|ill|unborn)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(BRILLIANT|inclusive|delusional)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(BRINGING|singing)\s/ig, "$1_VVG ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(BRINGS|connects)\s/ig, "$1_VVZ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(BRITISH)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(BROAD)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(BROADER|older)\s/ig, "$1_JJR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(BROKE)\s/ig, "$1_VVD ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(BROTHER)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(BROWN)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(BUDGET)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(BUILDING|booking|ending|meaning|planning|suffering)\s/ig, "$1_NN1_VVG ");
document.getElementById("MT").value = res;
//building_NN1_VVG activities_NN2
var str = document.getElementById("MT").value;
var res = str.replace(/_NN1(_VVG \w+_NN2)\s/ig, "$1 ");
document.getElementById("MT").value = res;
//are_VBR feeling_NN1_VVG
var str = document.getElementById("MT").value;
var res = str.replace(/(_VB\w+ \w+)_NN1(_VVG)\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(BUILDINGS|cookies|dots|purposes)\s/ig, "$1_NN2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(BUILT-IN)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(BUSINESS|wisdom)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(BUSINESSES)\s/ig, "$1_NN2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(BUSY)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(BUTTON)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(BUY|criticize|remember|fasten)\s/ig, "$1_VV0 "); 
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(BUY)\s/ig, "$1_VVI ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(BUYING)\s/ig, "$1_VVG ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(CA)\s/ig, "$1_VM ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(CABLE|theater|theatre|poetry|prose)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(CALIFORNIA|covid|Paris)\s/ig, "$1_NP1 ");
//
//
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(CALLING)\s/ig, "$1_VVG ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(CALLS)\s/ig, "$1_VVZ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(CAME)\s/ig, "$1_VVD ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(CAMERA)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(CAMPAIGN)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(CAMPUS)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(CANADA|ITALY)\s/ig, "$1_NP1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(CANCER)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(CAPABLE)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(CAPACITY)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(CAPITAL|heavyweight|championship)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(CAR)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(CARD)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(CARDS|\w*names|gardens|libraries)\s/ig, "$1_NN2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(CAREER)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(CAREFUL)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(CARRYING|forming)\s/ig, "$1_VVG ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(CARS|brains)\s/ig, "$1_NN2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(CASE)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(CASES|clubs)\s/ig, "$1_NN2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(CASH)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(CAST|upset)\s/ig, "$1_JJ_NN1_VV0_VVD_VVN ");
document.getElementById("MT").value = res;
//help_VVI cast_JJ_NN1_VV0_VVN some_DD light_NN1 on_RP
var str = document.getElementById("MT").value;
var res = str.replace(/(_VV\w+ cast)_JJ_NN1(_VV)0_VV\w+ (\w+ light_NN1)\s/ig, "$1$2I $3 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(CAT)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(CATCH)\s/ig, "$1_VVI ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(CATEGORY)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(CAUSING)\s/ig, "$1_VVG ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(CELEBRATE)\s/ig, "$1_VVI ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(disorder|CELL)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(CELLS)\s/ig, "$1_NN2 ");
document.getElementById("MT").value = res;
//per_NNU21 cent_NNU22
var str = document.getElementById("MT").value;
var res = str.replace(/\b(per)\w* (cent)\w*\s/ig, "$1_NNU21 $2_NNU22 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(CENT)\s/ig, "$1_NNU22 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(CENTER)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(CENTRE)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(CENTURY|eve|fortnight|mid-autumn|mid-summer|mid-winter|mid-spring|noon)\s/ig, "$1_NNT1 ");
document.getElementById("MT").value = res;
//a_AT1 five-minute_JJ walk_NN1//must be followed by V.Z not VV0
var str = document.getElementById("MT").value;
var res = str.replace(/([a-z]+-[a-z]+_)NNT1 (\w+_NN1)_VV0\s/ig, "$1JJ $2 "); 
document.getElementById("MT").value = res;
//1		  LENT (NNT1)	19033	2		  LENT (VVD)	16347	3		  LENT (VVN)
var str = document.getElementById("MT").value;
var res = str.replace(/\b(lent)\s/ig, "$1_NNT1_VVD_VVN "); 
document.getElementById("MT").value = res;
//lent_NNT1_VVD me_PPIO1
var str = document.getElementById("MT").value;
var res = str.replace(/_NNT1(_VVD \w+_P\w+)\s/ig, "$1 "); 
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(CERTIFICATE)\s/ig, "$1_NN1 "); 
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(CERTIFIED)\s/ig, "$1_JJ_VVD_VVN ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(axe|canvas|rumble)\s/ig, "$1_NN1_VV0 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(preferences)\s/ig, "$1_NN2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(changing|CHALLENGING|improving)\s/ig, "$1_JJ_VVG ");
document.getElementById("MT").value = res;
//at_II improving_JJ_VVG
var str = document.getElementById("MT").value;
var res = str.replace(/(_II \w+)_JJ(_VVG [\w\s]*\W+_\W+)\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
//challenging_JJ_VVG and_CC competitive_JJ ._.
var str = document.getElementById("MT").value;
var res = str.replace(/(_JJ)_VVG (\w+_CC\w* \w+_JJ \W+_\W+)\s/ig, "$1 $2 ");
document.getElementById("MT").value = res;
//Working_JJ_VVG within_II
var str = document.getElementById("MT").value;
var res = str.replace(/([A-Z]\w+)_JJ(_VVG \w+_I\w+)\s/g, "$1$2 ");
document.getElementById("MT").value = res;
//with_IW flying_JJ_VVG colours_NN2
var str = document.getElementById("MT").value;
var res = str.replace(/(_I\w+ \w+_JJ)_VVG (\w+_N\w+)\s/g, "$1 $2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(CHANCE|prison)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(CHANGED|gained|happened)\s/ig, "$1_VVD_VVN ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(CHANGES)\s/ig, "$1_NN2_VVZ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(CHANNEL)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(CHAPTER)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(CHARACTER)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(CHARACTERS)\s/ig, "$1_NN2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(CHARGE)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(CHARGED)\s/ig, "$1_VVD_VVN ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(CHARGES)\s/ig, "$1_NN2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(CHARMING)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(CHEAP|tight)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(CHEAPER)\s/ig, "$1_JJR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(CHECKING)\s/ig, "$1_VVG ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(CHILD)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(CHILDREN)\s/ig, "$1_NN2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(CHINA)\s/ig, "$1_NP1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(CHINESE)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(CHOICE)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(CHOOSING)\s/ig, "$1_VVG ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(CHOSE|ate)\s/ig, "$1_VVD ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(CHOSEN|slain|undone)\s/ig, "$1_VVN "); 
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(CHRIST)\s/ig, "$1_NP1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(CHRISTIAN)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(CHRISTMAS)\s/ig, "$1_NNT1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(CHRONIC)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(CHURCH)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(CIRCA)\s/ig, "$1_RG ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(CIRCUMSTANCES)\s/ig, "$1_NN2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(CITIES)\s/ig, "$1_NN2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(CITY)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(CIVIL)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(CLASS)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(CLASSES)\s/ig, "$1_NN2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(CLASSICAL)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(CLEVER)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(CLICKING)\s/ig, "$1_VVG ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(CLIENT)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(CLIENTS)\s/ig, "$1_NN2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(CLIMATE)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(CLINICAL)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(CLOSED)\s/ig, "$1_JJ_VVD_VVN ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(CLOSEST|quickest)\s/ig, "$1_JJT_RRT ");
document.getElementById("MT").value = res;
// help_VV0 society_NN1 the_AT best_JJT_RRT
var str = document.getElementById("MT").value;
var res = str.replace(/(_VV\w+ \w+_N\w+ \w+_A\w+ \w+)_JJT(_RRT)\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(CLOUD)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(CLUB)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(COACH)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(COAST)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(COASTAL|queer)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(CODE)\s/ig, "$1_NN1_VV0 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(COFFEE)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(COGNITIVE)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(COLD)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(COLLABORATIVE)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(COLLECT)\s/ig, "$1_VVI ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(COLLECTION)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(COLLEGE)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(COLOR)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(COLORFUL)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(COLOu?RS)\s/ig, "$1_NN2_VVZ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(COMBINATION)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(COMES|expects)\s/ig, "$1_VVZ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(COMFORTABLE|wealthy)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/([\w-]*)(thirds?|quarters?|fifths?|sixths?|sevenths?|eighths?|ninths?|tenths?)\s/ig, "$1$2_MF "); 
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(COMMENTS)\s/ig, "$1_NN2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(COMMERCIAL)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(COMMISSION)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(COMMITMENT)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(COMMITTED)\s/ig, "$1_VVD_VVN ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(COMMITTEE)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(COMMUNICATE)\s/ig, "$1_VVI ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(COMMUNICATION)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(COMMUNITIES)\s/ig, "$1_NN2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(COMMUNITY)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(COMPANIES)\s/ig, "$1_NN2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(COMPANY)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(COMPARABLE)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(COMPARE)\s/ig, "$1_VVI ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(COMPARED)\s/ig, "$1_VVD_VVN ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(COMPATIBLE)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(COMPETE)\s/ig, "$1_VVI ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(COMPETITION)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(COMPETITIVE)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(COMPLETING|undergoing|testing)\s/ig, "$1_VVG ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(COMPLICATED)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(COMPONENTS)\s/ig, "$1_NN2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(COMPREHENSIVE)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(COMPUTER)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(CONCEPT|cottage|cheese)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(CONCERNED)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(CONDITION)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(CONDITIONS)\s/ig, "$1_NN2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(CONDUCTED)\s/ig, "$1_VVD_VVN ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(CONFERENCE)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(CONFIDENT)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(CONFIDENTIAL)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(CONFIRM)\s/ig, "$1_VVI ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(CONNECTED)\s/ig, "$1_VVD_VVN ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(CONNECTION)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(CONSCIOUS)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(CONSECUTIVE)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(CONSIDERABLE)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(CONSIDERED|woken)\s/ig, "$1_VVN ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(CONSISTENT)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(CONSISTS)\s/ig, "$1_VVZ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(CONSTANT)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(CONSTRUCTION)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(CONSUMER)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(CONSUMERS)\s/ig, "$1_NN2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(CONTAINING)\s/ig, "$1_VVG ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(CONTAINS)\s/ig, "$1_VVZ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(CONTEMPORARY)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(CONTINUES)\s/ig, "$1_VVZ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(CONTINUOUS)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(CONTRACT)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(CONTRIBUTE)\s/ig, "$1_VVI ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(CONTROVERSIAL)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(CONVENIENT)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(CONVENTIONAL)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(COPY)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(CORE)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(CORNER)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(CORPORATE)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(CORRECT)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(CORRESPONDING)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(COSTLY)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(COSTS)\s/ig, "$1_NN2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(COUNCIL)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(COUNTLESS)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(COUNTRIES)\s/ig, "$1_NN2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(COUNTRY)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(COUNTY)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(COUPLE)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(COURSE)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(COURT|stealth)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(COVER)\s/ig, "$1_NN1_VV0 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(COVERAGE|crisis|entrepreneur)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(COVERED|required)\s/ig, "$1_VVD_VVN ");
document.getElementById("MT").value = res;
//are_VBR n't_XX made_VVD_VVN
var str = document.getElementById("MT").value;
var res = str.replace(/(_VB\w* n.t_XX \w+)_VVD(_VVN)\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
//
var str = document.getElementById("MT").value;
var res = str.replace(/\b(COVERING)\s/ig, "$1_VVG ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(COVERS|chops)\s/ig, "$1_NN2_VVZ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(CRAZY)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(CREATES)\s/ig, "$1_VVZ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(CREATING)\s/ig, "$1_VVG ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(CREATIVE)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(CREDIT|karate)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(CRIME)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(CRITICAL)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(CRUCIAL)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(CULTURAL)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(CULTURE)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(CUP)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(CURIOUS)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(CUSTOM)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(CUSTOMER)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(CUSTOMERS)\s/ig, "$1_NN2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(CUTE)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(DAD|DAMAGE)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
//1		  DAMNED ()	10421
var str = document.getElementById("MT").value;
var res = str.replace(/\b(damned)\s/ig, "$1_JJ_RG_VVD_VVN ");
document.getElementById("MT").value = res;
//about_II damned_JJ_RG_VVN time_NNT1
var str = document.getElementById("MT").value;
var res = str.replace(/(_II \w+_JJ)_RG_VVN (\w+_N\w+)\s/ig, "$1 $2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(DANGEROUS|secretive)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(DARKER)\s/ig, "$1_JJR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(DATA|aircraft)\s/ig, "$1_NN ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(DATABASE)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(DAUGHTER)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(DAVID)\s/ig, "$1_NP1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(DAY)\s/ig, "$1_NNT1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(DAYS|decades|evenings|weekends)\s/ig, "$1_NNT2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(DEALING)\s/ig, "$1_VVG ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(aunt|DEATH)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(DEBT)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(DECEMBER)\s/ig, "$1_NPM1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(DECENT|exemplary)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(DECISION|worker)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(DECISIONS)\s/ig, "$1_NN2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(DEDICATED)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(DEFAULT)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(DEFENSE)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(DEFENSIVE)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(DEFINED)\s/ig, "$1_VVN ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(DEGREE)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(DEGREES)\s/ig, "$1_NN2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(DELICATE)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(DELICIOUS)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(DELIVER)\s/ig, "$1_VVI ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(DELIVERED)\s/ig, "$1_VVN ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(DELIVERING)\s/ig, "$1_VVG ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(DELIVERS)\s/ig, "$1_VVZ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(DELIVERY|denier)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(DEMOCRATIC)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(DENTAL)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(DEPARTMENT)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(DEPENDENT)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(DEPENDS)\s/ig, "$1_VVZ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(DESCRIBE|comprehend|refine)\s/ig, "$1_VV0 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(DESCRIBED)\s/ig, "$1_VVN ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(DESCRIBES)\s/ig, "$1_VVZ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(cream|DESCRIPTION)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(DESIGN)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(DESIGNATED)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(DESIGNS)\s/ig, "$1_NN2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(DESIRABLE)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(DESIRED)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(DESPERATE)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(Apparently|DESPERATELY|regretfully)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(DETAIL)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(DETAILED)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(DETAILS|Englishes|lessons)\s/ig, "$1_NN2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value; 
var res = str.replace(/\b(DETERMINE)\s/ig, "$1_VVI ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(DETERMINED|disguised|discovered)\s/ig, "$1_VVD_VVN ");
document.getElementById("MT").value = res;
//Although_CS discovered_VVD
var str = document.getElementById("MT").value;
var res = str.replace(/(_CS\w* \w+)_VVD(_VVN)\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(DEVELOPED)\s/ig, "$1_VVN ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(DEVELOPING|noting)\s/ig, "$1_VVG ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(DEVELOPMENT)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(DEVICE|commissioner)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(DEVICES|roles)\s/ig, "$1_NN2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(DIAGNOSTIC)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(DID)\s/ig, "$1_VDD ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(DIED)\s/ig, "$1_VVD ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(DIET)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(DIFFERENCE)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(DIFFERENT)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(DIFFERENTLY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(DIFFICULT)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(DIGITAL|low-paid)\s/ig, "$1_JJ "); 
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(DIGITALLY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(DILIGENTLY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(DINNER)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(alternate|cool|DIRECT|dry|fancy|humble|shy|clear|select)\s/ig, "$1_JJ_VV0 ");
document.getElementById("MT").value = res;
//wide_JJ open_JJ_VV0 
var str = document.getElementById("MT").value;
var res = str.replace(/(wide_)JJ( open_JJ)_VV0\s/ig, "$1RR$2 ");
document.getElementById("MT").value = res;
//'re_VBR instantly_RR clear_JJ_VV0
var str = document.getElementById("MT").value;
var res = str.replace(/(_VB\w+ \w+_RR \w+_JJ)_VV0\s/ig, "$1 ");
document.getElementById("MT").value = res;
//might_VM as_RR21 well_RR22 just_RR open_JJ_VV0
var str = document.getElementById("MT").value;
var res = str.replace(/(_VM \w+_R\w+ \w+_R\w+ \w+_R\w+ \w+_)JJ_VV0\s/ig, "$1VVI ");
document.getElementById("MT").value = res;
//on_II alternate_JJ_VV0 weekends_NNT2
var str = document.getElementById("MT").value;
var res = str.replace(/(_I\w+ \w+_JJ)_VV0 (\w+_N\w+)\s/ig, "$1 $2 ");
document.getElementById("MT").value = res;
//More_RGR dry_JJ_VV0 ,_, mild_JJ weather_NN1
//cool_JJ ,_, dry_JJ_VV0 
var str = document.getElementById("MT").value;
var res = str.replace(/(_JJ ,_, \w+_JJ)_VV0\s/ig, "$1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/(_JJ)_VV0 (,_, \w+_JJ)\s/ig, "$1 $2 ");
document.getElementById("MT").value = res;
//keeping_VVG calm_JJ_VV0 
var str = document.getElementById("MT").value;
var res = str.replace(/\b(keep\w*_V\w+ \w+_JJ)_VV0\s/ig, "$1 ");
document.getElementById("MT").value = res;
//those_DD2 humble_JJ_VV0 beginnings_NN2
var str = document.getElementById("MT").value;
var res = str.replace(/(_D\w+ \w+_JJ)_VV0 (\w+_N\w+)\s/ig, "$1 $2 ");
document.getElementById("MT").value = res;
//Welcome_JJ_VV0 aboard_II_RL
var str = document.getElementById("MT").value;
var res = str.replace(/_JJ(_VV0 \w+)_II(_RL[\w\s]*._.)\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(DIRECTION)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(DIRECTLY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(DIRECTOR)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(DIRTY)\s/ig, "$1_JJ_VV0 ");
document.getElementById("MT").value = res;
//get_VVI their_APPGE hands_NN2 dirty_VV0 ._. 
var str = document.getElementById("MT").value;
var res = str.replace(/\b(g[oe]t\w*_V\w+ \w+_[JDA]\w+ \w+_N\w+ \w+_JJ)_VV0\s/ig, "$1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(amazed|amused|confused|convinced|crowded|decorated|DISABLED|disgusted|frightened|frustrated|infected|insured|loved|misunderstood)\s/ig, "$1_JJ_VVD_VVN ");
document.getElementById("MT").value = res;
//convinced_JJ_VVN that_CST
var str = document.getElementById("MT").value;
var res = str.replace(/(_JJ)_VVN (that_CST)\s/ig, "$1 $2 ");
document.getElementById("MT").value = res;
//re_VBR a_RR21 little_RR22 frightened_JJ_VVD by_II 
var str = document.getElementById("MT").value;
var res = str.replace(/(_VB[\w\s]* \w+)_JJ_VVD(_VVN by_I\w+)\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
//drank_VVD coffee_NN1 and_CC pointed_JJ_VVD
var str = document.getElementById("MT").value;
var res = str.replace(/(_VVD [\w\s]+_CC \w+)_JJ(_VVD)\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
//_VBM convinced_JJ_VVN that_CST
var str = document.getElementById("MT").value;
var res = str.replace(/(_VB\w+ \w+_JJ)_VVN (\w+_C\w+)\s/ig, "$1 $2 ");
document.getElementById("MT").value = res;
//got_VVD frightened_VVN ._. 
var str = document.getElementById("MT").value;
var res = str.replace(/\b(get|got|gotten|getting|gets)(_V\w+ \w+_JJ)_VVD_VVN (._.)\s/ig, "$1$2 $3 ");
document.getElementById("MT").value = res;
//_VBZ_VHZ even_RR decorated_JJ the_AT 
var str = document.getElementById("MT").value;
var res = str.replace(/_VBZ(_VHZ \w+_RR \w+)_JJ_VVD(_VVN)\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
// 's_VBZ_VHZ also_RR an_AT1 
var str = document.getElementById("MT").value;
var res = str.replace(/(_VBZ)_VHZ (\w+_RR \w+_A\w+)\s/ig, "$1 $2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/(_N\w+ ,_, \w+)_JJ_VVD(_VVN \w+_I\w+)\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
//'s hitting_VVG
var str = document.getElementById("MT").value;
var res = str.replace(/(\'s) (\w+_VVG)\s/ig, "$1_VBZ $2 ");
document.getElementById("MT").value = res;
//keep_VVI them_PPHO2 amused_VVD 
var str = document.getElementById("MT").value;
var res = str.replace(/(ke\w+_V\w+ \w+_[PN]\w+ \w+_JJ)_VVD_VVN\s/ig, "$1 ");
document.getElementById("MT").value = res;
//this is impossible to decide // they_PPHS2 'd_VHD_VM already_RR become_VV0_VVN infected_JJ_VVD
var str = document.getElementById("MT").value;
var res = str.replace(/(_VHD)_VM (\w+_RR \w+)_VV0(_VVN \w+_JJ)_VVD\s/ig, "$1 $2$3 ");
document.getElementById("MT").value = res;
//we_PPIS2 'd_VHD_VM never_RR seen_VVN before_CS_II_RT on_II such_DA a_AT1 scale_NN1
var str = document.getElementById("MT").value;
var res = str.replace(/(_VHD)_VM (\w+_RR \w+_VVN \w+)_CS_II(_RT \w+_I\w+)\s/ig, "$1 $2$3 ");
document.getElementById("MT").value = res;
//Johnson_NP1 added_JJ_VVD
//I_PPIS1 loved_JJ_VVD
var str = document.getElementById("MT").value;
var res = str.replace(/(_[NP]\w+ \w+)_JJ(_VVD)\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
//I_PPIS1 never_RR really_RR loved_JJ_VVD
var str = document.getElementById("MT").value;
var res = str.replace(/(_P\w+ \w+_R\w+ \w+_R\w+ \w+)_JJ(_VVD)\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(DISCUSS)\s/ig, "$1_VV0 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(DISCUSSION|route)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(DISEASE)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(DISPLAYED)\s/ig, "$1_VVN ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(DISTANCE)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(DISTANT|careless|cheerful|exponential|skinny)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(DISTINCT)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(DISTINCTIVE)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(DISTINCTLY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(DISTRIBUTION)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(DISTRICT)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(DIVERSE)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(DIVINE)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(DIVISION)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(DO)\s/ig, "$1_VD0 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(DOCTOR)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
//
var str = document.getElementById("MT").value;
var res = str.replace(/\b(mile|kilo|metre|meter)\s/ig, "$1_NNU1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(DOCUMENT)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(DOCUMENTS)\s/ig, "$1_NN2_VVZ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(DOES)\s/ig, "$1_VDZ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(DOG)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(DOGS|aunts|six-?packs)\s/ig, "$1_NN2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(DOING)\s/ig, "$1_VDG ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(DOLLARS|inches|tons|metres|meters)\s/ig, "$1_NNU2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(DOMESTIC|wide)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(DOMINANT)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(DONE)\s/ig, "$1_VDN ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(DOOR)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(DOUBLE)\s/ig, "$1_DB_JJ_VV0 ");
document.getElementById("MT").value = res;
//would_VM double_DB_VVI your_APPGE
var str = document.getElementById("MT").value;
var res = str.replace(/(_VM \w+)_DB_JJ(_VV)0\s/ig, "$1$2I ");
document.getElementById("MT").value = res;
//claws7 gets this wrong///_VBDZ nearly_RR double_DB_JJ_VV0 the_AT
var str = document.getElementById("MT").value;
var res = str.replace(/(_V\w+ \w+_RR \w+_DB)_JJ_VV0 (\w+_A\w+)\s/ig, "$1 $2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(DOUBT|lie|spy)\s/ig, "$1_NN1_VV0 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/(\w+_[DA]\w+ \w+_NN1)_VV0\s/ig, "$1 ");
document.getElementById("MT").value = res;
// doubt_NN1_VV0 it_PPH1
var str = document.getElementById("MT").value;
var res = str.replace(/_NN1(_VV0 \w+_P\w+)\s/ig, "$1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(DOWNLOAD)\s/ig, "$1_NN1_VV0 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(DOWNSTAIRS|inland)\s/ig, "$1_RL ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(DRAMATIC)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(DRAMATICALLY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(DRASTICALLY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(DRAW)\s/ig, "$1_VVI ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(DRAWN)\s/ig, "$1_VVN ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(DRIVEN)\s/ig, "$1_VVN ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(D?RIVER|cricket|criticism|interpretation)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(DRIVERS)\s/ig, "$1_NN2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(DRIVING|burning)\s/ig, "$1_JJ_VVG ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(DROP)\s/ig, "$1_VVI ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(DRUG)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(DRUGS|pots)\s/ig, "$1_NN2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(DUAL)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(DULY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(DURABLE)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(DURING)\s/ig, "$1_II ");
document.getElementById("MT").value = res;
//this is a complex debate for WORTH... many say this is an adjective yet it is a very complex word that some say is a preposition.  so claws doesnt list it as an adj.
var str = document.getElementById("MT").value;
var res = str.replace(/\b(worth)\s/ig, "$1_II_NN1 "); 
document.getElementById("MT").value = res;
//Its_APPGE worth_II_NN1 was_VBDZ 
var str = document.getElementById("MT").value;
var res = str.replace(/(_A\w+ [\-\w]+)_II(_NN1 (?:\w+_V\w+|._.))\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
//The_AT worth_II_NN1
var str = document.getElementById("MT").value;
var res = str.replace(/(_A\w+ [\-\w]+)_II(_NN1)\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
//worth_II_NN1 about_II
var str = document.getElementById("MT").value;
var res = str.replace(/(worth_II)_NN1 (about)/ig, "$1 $2 "); 
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/(_VB\w+ [\w\s\']+worth_II)_NN1\s/ig, "$1 "); 
document.getElementById("MT").value = res;
//about_II_RG_RP £
var str = document.getElementById("MT").value;
var res = str.replace(/_II(_RG)_RP (£|$)/ig, "$1 $2 "); 
document.getElementById("MT").value = res;
//_APPGE self-worth_II_NN1 ,_,
var str = document.getElementById("MT").value;
var res = str.replace(/\b(DYNAMIC)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(DYNAMICALLY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(EACH)\s/ig, "$1_DD1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(EAGER|unrelenting)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(EAGERLY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(EARN)\s/ig, "$1_VVI ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(EARTH|myth|neighbour)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(EASIEST|straightest)\s/ig, "$1_JJT_RRT ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(earliest)\s/ig, "$1_JJT_RRT ");
document.getElementById("MT").value = res;
//learn_VV0 best_JJT_RRT
var str = document.getElementById("MT").value;
var res = str.replace(/(_VV\w+ \w+)_JJT(_RRT)\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
//to_II the_AT best_JJT_RRT
var str = document.getElementById("MT").value;
var res = str.replace(/(_I\w+ \w+_A\w+ \w+_JJT)_RRT\s/ig, "$1 ");
document.getElementById("MT").value = res;
//do_VDI the_AT best_JJT_RRT
var str = document.getElementById("MT").value;
var res = str.replace(/(_V[VD]\w+ \w+_A\w+ \w+)_JJT(_RRT)\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(EASILY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(EAST)\s/ig, "$1_ND1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(EASTERN)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(EATING|emerging|spreading)\s/ig, "$1_VVG ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(ECONOMIC)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(ECONOMICALLY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(ECONOMY)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(EDGE)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(EDITION)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(EDUCATION)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(EDUCATIONAL)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(EFFECT)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(EFFECTIVE)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(EFFECTIVELY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(EFFECTS|outcomes)\s/ig, "$1_NN2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(EFFICIENT)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(EFFICIENTLY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(EFFORT)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(EFFORTLESSLY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(EFFORTS|eggs)\s/ig, "$1_NN2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(EGG|professor)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(EGG)\w* (whites)\w*\s/ig, "$1_NN1 $2_NN2 ");
document.getElementById("MT").value = res;
//1		  EITHER (RR)	2  (DD1)
var str = document.getElementById("MT").value;
var res = str.replace(/\b(EITHER)\s/ig, "$1_DD1_RR ");
document.getElementById("MT").value = res;
//either_DD1_RR there_EX
var str = document.getElementById("MT").value;
var res = str.replace(/_DD1(_RR \w+_EX)\s/ig, "$1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(EITHER)\w* (\w+_[NI]\w*)\s/ig, "$1_DD1 $2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(ELDERLY)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(ELECTION)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(ELECTRIC)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(ELECTRICAL)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(ELECTRONIC)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(ELECTRONICALLY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(ELEGANT)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(ELEMENT)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(ELEMENTARY)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(ELEMENTS)\s/ig, "$1_NN2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(associate|level)\s/ig, "$1_JJ_NN1_VV0 ");
document.getElementById("MT").value = res;
//any_DD level_JJ_NN1_VV0 whatsoever_DDQV
var str = document.getElementById("MT").value;
var res = str.replace(/(_DD \w+)_JJ(_NN1)_VV0 (\w+_DDQV)\s/ig, "$1$2 $3 ");
document.getElementById("MT").value = res;
//current_JJ_NN1 and_CC future_JJ
var str = document.getElementById("MT").value;
var res = str.replace(/(_JJ)_NN1 (\w+_CC \w+_JJ)\s/ig, "$1 $2 ");
document.getElementById("MT").value = res;
//_NN1 and_CC mass_JJ_NN1 ._.
var str = document.getElementById("MT").value;
var res = str.replace(/(_NN1 \w+_CC \w+)_JJ(_NN1 ._.)\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
//one_MC1 kind_JJ_NN1 or_CC 
var str = document.getElementById("MT").value;
var res = str.replace(/(_M\w+ \w+)_JJ(_NN1 \w+_CC)\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
//closest_JJT relative_JJ_NN1
var str = document.getElementById("MT").value;
var res = str.replace(/(_JJT \w+)_JJ(_NN1)\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
// the_AT farm_NN1 level_JJ_NN1
var str = document.getElementById("MT").value;
var res = str.replace(/(_A\w* \w+_NN1 \w+)_JJ(_NN1)\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
//to_TO be_VBI kind_JJ
var str = document.getElementById("MT").value;
var res = str.replace(/(_TO be_VBI \w+_JJ)_NN1\s/ig, "$1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(ELSE)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(ELSEWHERE|someplace)\s/ig, "$1_RL ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(EMAIL)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(EMERGENCY)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(appalling|EMOTIONAL)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(EMOTIONALLY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(EMPLOYEE)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(EMPLOYEES)\s/ig, "$1_NN2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(EMPLOYMENT)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(EMPTY)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(EN)\s/ig, "$1_RR21 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(ENABLE)\s/ig, "$1_VVI ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(earns|ENABLES|interferes)\s/ig, "$1_VVZ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(ENCOURAGE|vanish)\s/ig, "$1_VV0 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(ENCOURAGE)\s/ig, "$1_VVI ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(ENDED|raised)\s/ig, "$1_VVD_VVN ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(ENDLESS)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(ENDLESSLY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(ENERGY)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(d?i?s?ENGAGE)\s/ig, "$1_VV0 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(ENGINE)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(ENGINEERING)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(ENGLAND)\s/ig, "$1_NP1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(ENHANCE)\s/ig, "$1_VVI ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(ENHANCED)\s/ig, "$1_JJ_VVD_VVN ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(ENJOYABLE)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(ENJOYED)\s/ig, "$1_VVD_VVN ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(ENJOYING)\s/ig, "$1_VVG ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(ENORMOUS)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(ENORMOUSLY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
// ENOUGH (DD_RR) RR is more common.
var str = document.getElementById("MT").value;
var res = str.replace(/\b(ENOugh)\s/ig, "$1_DD_RR ");
document.getElementById("MT").value = res;
//got_VVN enough_RR
var str = document.getElementById("MT").value;
var res = str.replace(/\b(g[eo]t_V\w* enough_)RR\s/ig, "$1DD ");
document.getElementById("MT").value = res;
//if followed by noun = DD determiner or adverb DD_RR
var str = document.getElementById("MT").value;
var res = str.replace(/\b(\w+)(_DD)_RR (\w+_(?:NN\w*|IO))\s/ig, "$1$2 $3 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(\w+)_DD(_RR) (\w+_[^N]\w*)\s/ig, "$1$2 $3 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(\w+)_DD(_RR) (\W+_\W+)\s/ig, "$1$2 $3 ");
document.getElementById("MT").value = res;
//
var str = document.getElementById("MT").value;
var res = str.replace(/\b(ENSURING)\s/ig, "$1_VVG ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(ENTERING)\s/ig, "$1_VVG ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(ENTIRE)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(ENTIRELY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(ENTITLED)\s/ig, "$1_VVN ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(ENTRY)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(ENVIRONMENT)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(ENVIRONMENTAL)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(ENVIRONMENTALLY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(EPISODE)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(EQUAL)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(EQUALLY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(EQUIPMENT)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(EQUIPPED)\s/ig, "$1_VVN ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(EQUIVALENT)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(ERROR)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(ESPECIALLY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(ESSENTIAL)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(ESSENTIALLY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(ESTABLISH)\s/ig, "$1_VVI ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(ESTATE)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(ESTIMATED)\s/ig, "$1_JJ_VVD_VVN ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(ET)\s/ig, "$1_RA21 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(ETC)\s/ig, "$1_RA ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(ETERNAL)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(ETHICAL)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(ETHNIC)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(EUROPE)\s/ig, "$1_NP1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(EUROPEAN)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
//even_CS21 though_CS22
var str = document.getElementById("MT").value;
var res = str.replace(/\b(EVEN_)[^C]\w+ (though|when)_\w+\s/ig, "$1CS21 $2_CS22 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(EVENING)\s/ig, "$1_NNT1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(EVENLY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(EVENT|sake)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(audiences|EVENTS|ethics)\s/ig, "$1_NN2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(EVENTUALLY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(EVERY)\s/ig, "$1_AT1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(EVERYDAY)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(EVERYONE)\s/ig, "$1_PN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(EVERYTHING)\s/ig, "$1_PN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(EVERYTIME)\s/ig, "$1_RT ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(EVERYWHERE)\s/ig, "$1_RL ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(EVIDENCE|gluten)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(EVIDENT)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(EVIDENTLY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(EXACT)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(EXACTLY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(EXAMPLES)\s/ig, "$1_NN2 ");
document.getElementById("MT").value = res;
// EXCEPT
var str = document.getElementById("MT").value;
var res = str.replace(/\b(EXCEPT)\s/ig, "$1_CS_II_VV0 ");
document.getElementById("MT").value = res;
//except_CS_II_VV0 that_DD1 it_PPH1
var str = document.getElementById("MT").value;
var res = str.replace(/(_CS)_II_VV0 (that_)\w* (\w+_P\w*)\s/ig, "$121 $2CS22 $3 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(EXCEEDINGLY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(EXCEL)\s/ig, "$1_VV0 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(EXCELLENT)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/(EXCEPT)_\w* (FOR)_\w*\s/ig, "$1_II21 $2_II22 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/(outside)_\w* (of)_Io\s/ig, "$1_II21 $2_II22 "); 
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(let)_\w* (alone)_\w*\s/ig, "$1_II21 $2_II22 ");
document.getElementById("MT").value = res;
// OWING (JJ_VVG)
var str = document.getElementById("MT").value;
var res = str.replace(/\b(owing)\s/ig, "$1_JJ_VVG ");
document.getElementById("MT").value = res;
//homework_NN1 or_CC working_JJ_VVG ._. 
var str = document.getElementById("MT").value;
var res = str.replace(/(_NN1 \w+_CC \w+)_JJ(_VVG ._.)\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
//due to be released is not a preposition!
var str = document.getElementById("MT").value;
var res = str.replace(/\b(due|owing)_\w* (to)_\w* (\w+_[^V]\w*)\s/ig, "$1_II21 $2_II22 $3 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(EXCEPTIONAL)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(EXCEPTIONALLY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(EXCESSIVE)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(EXCESSIVELY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(EXCHANGE|fairy|tale)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(EXCITING)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(EXCLUSIVE)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(EXCLUSIVELY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(EXISTING)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(EXISTS|strengthens)\s/ig, "$1_VVZ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(EXPAND)\s/ig, "$1_VVI ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(abdominal|EXPENSIVE)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(EXPERIENCES|muscles)\s/ig, "$1_NN2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(EXPERIENCING)\s/ig, "$1_VVG ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(EXPERIMENTAL)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(EXPERTLY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(EXPERTS)\s/ig, "$1_NN2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(EXPLAIN)\s/ig, "$1_VVI ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(EXPLAINS|explores)\s/ig, "$1_VVZ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(EXPLICITLY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b((?:account|EXPLOR|rais)ING)\s/ig, "$1_VVG ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(EXPONENTIALLY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(EXPRESSLY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(EXTEND)\s/ig, "$1_VV0 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(EXTENDED|added)\s/ig, "$1_JJ_VVD_VVN ");
document.getElementById("MT").value = res;
//Added_JJ_VVD_VVN
var str = document.getElementById("MT").value;
var res = str.replace(/\b([A-Z]+\w+)_JJ_VVD(_VVN \w+_[IR]\w*)\s/g, "$1$2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b([A-Z]+\w+)_VVD(_VVN \w+_[IR]\w*)\s/g, "$1$2 ");
document.getElementById("MT").value = res;
// ,_, extended_JJ_VVD family_NN1
var str = document.getElementById("MT").value;
var res = str.replace(/(_JJ)_VVD (\w+_NN1)\s/ig, "$1 $2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(EXTENSIVE)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(EXTENSIVELY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(EXTERNAL|Preliminary)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(EXTERNALLY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(EXTRAORDINARILY|miraculously)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(alike|straight)\s/ig, "$1_JJ_RR "); //straight can be a noun but it is rarer and too hard to catch...
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(EXTRA|right)\s/ig, "$1_JJ_NN1_RR "); 
document.getElementById("MT").value = res;
//take_VVI it_PPH1 well_JJ_NN1
var str = document.getElementById("MT").value;
var res = str.replace(/(_VV\w+ \w+_P\w+ \w+)_JJ_NN1(_RR ._.)\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
//go_VVI right_JJ_NN1 through_II //go_VVI straight_NN1 ?_? //
var str = document.getElementById("MT").value;
var res = str.replace(/(_VV\w+ \w+)_JJ_NN1(_RR ._.)\s/ig, "$1$2 "); //mean well ,
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/(_VV\w+ \w+)_JJ_NN1(_RR \w+_(?:II|._.))\s/ig, "$1$2 "); 
document.getElementById("MT").value = res;
//some_DD extra_NN1 points_VVZ ._. 
var str = document.getElementById("MT").value;
var res = str.replace(/(_[AD]\w+ \w+_JJ)_NN1_RR (\w+_N\w+)\s/ig, "$1 $2 "); 
document.getElementById("MT").value = res;
//,_, right_JJ_NN1_RR
var str = document.getElementById("MT").value;
var res = str.replace(/(._. \w+)_JJ_NN1(_RR ._.)\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(EXTRAORDINARY)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(EXTREME)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(EXTREMELY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(EYE|mortality)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(EYES)\s/ig, "$1_NN2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(FABULOUS)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(FACIAL)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(FACILITIES|habitats)\s/ig, "$1_NN2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(FACILITY|mainland)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(FACING)\s/ig, "$1_VVG ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(FACT|genius)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(FACTOR)\s/ig, "$1_NN1_VV0 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(FACTORS)\s/ig, "$1_NN2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(FAIL)\s/ig, "$1_VV0 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(FAILURE)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(FAIRLY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(FAITH|guru)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(FAITHFUL)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(FAITHFULLY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(FAKE)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(FALLING)\s/ig, "$1_VVG ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(FALSELY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(FAMILIAR)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(FAMILIES|grenades)\s/ig, "$1_NN2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(FAMILY)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(FAMOUS)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(FAMOUSLY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(FAN)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(FANS|discounts)\s/ig, "$1_NN2_VVZ ");
document.getElementById("MT").value = res;
//EXCEPTION 'FOOTBALL FANS'
var str = document.getElementById("MT").value;
var res = str.replace(/(NN1 FANS_NN2)_VVZ\s/ig, "$1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(FANTASTIC)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(FARM)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(FASCINATING|fatal)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(FASHION)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(FATHER|aisle|secretary)\s/ig, "$1_NN1 "); 
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(FEATURE|console|SLAP)\s/ig, "$1_NN1_VV0 ");
document.getElementById("MT").value = res;
//,_, move_NN1_VV0 the_AT
var str = document.getElementById("MT").value;
var res = str.replace(/(_, \w+)_NN1(_VV0 \w+_A\w+)\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
//_XX surprise_NN1_VVI
var str = document.getElementById("MT").value;
var res = str.replace(/(_XX \w+)_NN1(_VVI)\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
//ready_JJ to_II hit_NN1_VVI
var str = document.getElementById("MT").value;
var res = str.replace(/(_JJ to)_II (\w+)_NN1(_VVI)\s/ig, "$1_TO $2$3 ");
document.getElementById("MT").value = res;
//you_PPY visit_NN1_VVI my_APPGE
var str = document.getElementById("MT").value;
var res = str.replace(/(_P\w+ \w+)_NN1(_VVI \w+_A\w*)\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
//Either_RR you_PPY deal_NN1_VV0
var str = document.getElementById("MT").value;
var res = str.replace(/(_R\w* \w+_P\w* \w+)_NN1(_VV0)\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
//Console_NN1_VV0 players_NN2 need_VV0 - risky
var str = document.getElementById("MT").value;
var res = str.replace(/(_NN1)_VV0 (\w+_NN2 \w+_VV0)\s/ig, "$1 $2 ");
document.getElementById("MT").value = res;
//_C _P _N not possible // when_CS you_PPY walk_NN1_VV0
var str = document.getElementById("MT").value;
var res = str.replace(/(_C\w* \w+_P\w* \w+)_NN1(_VV0)\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
//
var str = document.getElementById("MT").value;
var res = str.replace(/\b(FEATURING|referring)\s/ig, "$1_VVG ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(FEBRUARY)\s/ig, "$1_NPM1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(FEDERAL)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(fee|sovereignty)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(FEEDBACK)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(FEELING|painting)\s/ig, "$1_NN1_VVG ");
document.getElementById("MT").value = res;
//That_DD1 feeling_NN1_VVG 
var str = document.getElementById("MT").value;
var res = str.replace(/(_[JAD]\w+ \w+_NN1)_VVG\s/ig, "$1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(FEELS)\s/ig, "$1_VVZ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(FEES)\s/ig, "$1_NN2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(FEET)\s/ig, "$1_NN2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(FELL|wore)\s/ig, "$1_VVD ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(FESTIVAL)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(FEW)\s/ig, "$1_DA2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(FEWer)\s/ig, "$1_DAR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(FIELD)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(FIELDS)\s/ig, "$1_NN2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(FILE)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(FILES)\s/ig, "$1_NN2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(FILLED)\s/ig, "$1_VVN ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(FILM)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(FINALLY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(FINANCIAL)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(FINANCIALLY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(FINDING|going)\s/ig, "$1_VVG ");
document.getElementById("MT").value = res;
//_VBDR never_RR going_VVG to_TO tell_VVI
var str = document.getElementById("MT").value;
var res = str.replace(/(_VB\w* \w+ going_VVG) (to_TO \w+_V\wI)\s/ig, "$1K $2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(FINDS)\s/ig, "$1_VVZ ");
document.getElementById("MT").value = res;
//
var str = document.getElementById("MT").value;
var res = str.replace(/\b(FINE)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(consequently|FINELY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
//biggest|hottest|fittest|saddest|wettest|fattest|slimmest|hippest|funnest|flattest|dimmest|maddest|raddest|grimmest 
var str = document.getElementById("MT").value;
var res = str.replace(/\b(FINEST|simplest|slightest|biggest|hottest|fittest|saddest|wettest|fattest|slimmest|hippest|funnest|flattest|dimmest|maddest|raddest|grimmest|WEAKEST)\s/ig, "$1_JJT ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(FINISH)\s/ig, "$1_VV0 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(located)\s/ig, "$1_VVD_VVN ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(FIRMLY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(FIRST|fourth|\d+(?:st|nd|rd|th))\s/ig, "$1_MD ");// RR22@
document.getElementById("MT").value = res;
//midway_RL through_II_RP_RR
var str = document.getElementById("MT").value;
var res = str.replace(/(_RL \w+_II)_RP_RR\s/ig, "$1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(FIRSTLY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(FISCAL)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(FISH)\s/ig, "$1_NN_VV0 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(fit)\s/ig, "$1_JJ_NN1_VV0 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(eighty?|eleven|forty|twelve|ninet?y?|FIVE|seven|seventy|sixty|fifty|ten|\w+teen)\s/ig, "$1_MC ");  // teen
document.getElementById("MT").value = res;
//twenties
var str = document.getElementById("MT").value;
var res = str.replace(/\b(FIVEs|twenties|thirties|forties|fifties|sixties|seventies|eighties|nineties|\d+s)\s/ig, "$1_MC2 "); 
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(FIX)\s/ig, "$1_VVI ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(FIXED)\s/ig, "$1_JJ_VVD_VVN ");
document.getElementById("MT").value = res;
//_VH0 n't_XX fixed_JJ_VVN
var str = document.getElementById("MT").value;
var res = str.replace(/(_VH\w+ n.t_XX \w+)_JJ(_VVN)\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(FLEXIBLE|sleepless)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(FLIGHT|birthday|tragedy)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(FLOOR)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(Florida|Tiktok|Twitter)\s/g, "$1_NP1 ");//not insensitive
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(FLOW)\s/ig, "$1_NN1_VV0 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(FOCUSES)\s/ig, "$1_VVZ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(FOCUSING)\s/ig, "$1_VVG ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(FOLLOWED)\s/ig, "$1_VVD_VVN ");
document.getElementById("MT").value = res;
//_II_JJ_NN1_VVG
var str = document.getElementById("MT").value;
var res = str.replace(/\b(FOLLOWing)\s/ig, "$1_II_JJ_NN1_VVG "); 
document.getElementById("MT").value = res;
//,_, following_II_VVG the_AT
var str = document.getElementById("MT").value;
var res = str.replace(/(._. following)_II(_VVG \w+_A\w+)\s/ig, "$1$2 "); 
document.getElementById("MT").value = res;
//the_AT following_II_JJ_NN1 
var str = document.getElementById("MT").value;
var res = str.replace(/(_A\w+ \w+)_II(_JJ_NN1)\s/ig, "$1$2 "); 
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(FOLLOWS)\s/ig, "$1_VVZ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(FOOD|hashtag)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(colleges|difficulties|universities|FOODS|treadmills|pianos)\s/ig, "$1_NN2 ");
document.getElementById("MT").value = res; 
var str = document.getElementById("MT").value;
var res = str.replace(/\b(FOOT)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(FOOTBALL|difficulty)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(FORCED)\s/ig, "$1_VVD_VVN ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(FORCES)\s/ig, "$1_NN2_VVZ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(FOREIGN)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(again|FOREVER)\s/ig, "$1_RT ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(FORMAL)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(FORMALLY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(FORMER|latter)\s/ig, "$1_DA ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(FORMERLY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(FORMS)\s/ig, "$1_NN2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(FORTUNATELY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(FORWARDS)\s/ig, "$1_RL_VVZ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(FOUNDATION|mom)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(FOUR|twenty)\s/ig, "$1_MC ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(FRAME)\s/ig, "$1_NN1_VV0 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(FRANCE)\s/ig, "$1_NP1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(FRANKLY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(FREEDOM)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(FREELY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(bare|calm|clean|complete|FREE|mean)\s/ig, "$1_JJ_VV0 ");//free  VV@ //mean is usually vvi
document.getElementById("MT").value = res;
//Feel_VV0 free_JJ_VV0
var str = document.getElementById("MT").value;
var res = str.replace(/(_VV0 \w+_JJ)_VV0\s/ig, "$1 ");
document.getElementById("MT").value = res;
// to_II calm_JJ_VV0
var str = document.getElementById("MT").value;
var res = str.replace(/(to_\w* \w+)_JJ(_VV)0\s/ig, "$1$2I ");
document.getElementById("MT").value = res;
//the_AT complete_JJ_VV0
var str = document.getElementById("MT").value;
var res = str.replace(/(_A\w* \w+_JJ)_VV\w\s/ig, "$1 ");
document.getElementById("MT").value = res;
//this is strange: was_VBDZ not_XX free_JJ_VVI 
var str = document.getElementById("MT").value;
var res = str.replace(/(_VB\w+ n.t_XX \w+_JJ)_VV[0I]\s/ig, "$1 ");
document.getElementById("MT").value = res;
//does_VDZ n't_XX mean_JJ_VVI
var str = document.getElementById("MT").value;
var res = str.replace(/\b(does_VDZ) (n.t_XX) (\w+)_JJ(_VV[0I])\s/ig, "$1 $2 $3$4 ");
document.getElementById("MT").value = res;
//do_VD0 n't_XX live_JJ_VVI
var str = document.getElementById("MT").value;
var res = str.replace(/(\w+_V[VD]\w+ [\w\'\s]+ \w+)_JJ(_VVI)\s/ig, "$1$2 ");
document.getElementById("MT").value = res; 
//to_TO separate_JJ_VVI and_CC divorce_NN1_VVI ._. 
var str = document.getElementById("MT").value;
var res = str.replace(/(_TO \w+)_JJ(_VVI)\s/ig, "$1$2 ");
document.getElementById("MT").value = res; 
//separate_VVI and_CC divorce_NN1_VVI 
var str = document.getElementById("MT").value;
var res = str.replace(/(_VVI \w+_CC\w* \w+)_NN1(_VVI)\s/ig, "$1$2 ");
document.getElementById("MT").value = res; 
//
var str = document.getElementById("MT").value;
var res = str.replace(/\b(FREQUENT)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(FREQUENTLY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(FRESH)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(FRESHLY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(FRIDAY)\s/ig, "$1_NPD1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(girlfriend|boyfriend|FRIEND)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(FRIENDS)\s/ig, "$1_NN2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(FROZEN)\s/ig, "$1_JJ_VVN ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(FRUIT)\s/ig, "$1_NN ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(FRUSTRATING)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(FUEL)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(FULL-TIME|fuzzy|full)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(FULLY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(FUNCTIONAL)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(FUNCTIONS)\s/ig, "$1_NN2_VVZ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(FUND)\s/ig, "$1_NN1_VV0 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(FUNDAMENTAL)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(FUNDAMENTALLY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(FUNDS)\s/ig, "$1_NN2_VV0 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(FUNNY)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(FURTHERMORE)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(GAIN)\s/ig, "$1_VVI ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(GAME)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(GAMES|galleries|differences)\s/ig, "$1_NN2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(GARDEN|vocabulary)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(GAS)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(GAVE)\s/ig, "$1_VVD ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(GAY)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(GEAR)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(GENDER)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(GENERALLY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(GENERATE)\s/ig, "$1_VVI ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(GENERATION)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(GENERIC)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(GENEROUS)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(GENEROUSLY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(GENETIC)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(GENETICALLY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(GENTLE)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(GENTLY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(GENUINE)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(GENUINELY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(GEORGE)\s/ig, "$1_NP1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(GETS)\s/ig, "$1_VVZ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(GETTING|landing|dancing|judging)\s/ig, "$1_VVG ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(GIFT)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(GIRL|presentation)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(GIRLS|ads)\s/ig, "$1_NN2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(GIVES)\s/ig, "$1_VVZ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(GIVING)\s/ig, "$1_VVG ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(GLAD)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(GLADLY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(GLASS)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(GLOBAL)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(GLOBALLY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(GMT)\s/ig, "$1_RA ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(GO)\s/ig, "$1_VV0 ");
document.getElementById("MT").value = res;
//a_AT1 full_JJ go_VV0
var str = document.getElementById("MT").value;
var res = str.replace(/(_A\w+ \w+_JJ go_)VV0\s/ig, "$1NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(GOAL)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(GOALS)\s/ig, "$1_NN2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(GOES)\s/ig, "$1_VVZ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(GOLDEN|good)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(GON)(NA)\s/ig, "$1_VVGK $2_TO ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(waN)(NA)\s/ig, "$1_VV0 $2_TO ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(drunk|GONE)\s/ig, "$1_JJ_VVN ");//claws doesnt say jj but dictionaries do...
document.getElementById("MT").value = res;
//give_VVI written_JJ_VVN notice_NN1
var str = document.getElementById("MT").value;
var res = str.replace(/(_VV\w+ \w+_JJ)_VVN (\w+_NN\w*)\s/ig, "$1 $2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(GOODS)\s/ig, "$1_NN2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(GORGEOUS)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(GOTTEN)\s/ig, "$1_VVN ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(bell|GOVERNMENT)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(GRADUALLY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(GRAND)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(GRANTED)\s/ig, "$1_VVN ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(GRAPHIC)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(GRATEFUL)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(GREATER)\s/ig, "$1_JJR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(fondest|GREATEST)\s/ig, "$1_JJT ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(GREATLY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(GREW)\s/ig, "$1_VVD ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(GROSS)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(GROUND)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(GROUP)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(chimneys|GROUPS)\s/ig, "$1_NN2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(eaten|GROWN)\s/ig, "$1_VVN ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(GROWTH)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(GUESS)\s/ig, "$1_NN1_VV0 ");
document.getElementById("MT").value = res;
// na_TO prescribe_VV0
var str = document.getElementById("MT").value;
var res = str.replace(/(_TO \w+_VV)0\s/ig, "$1I ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(GUESTS|vitamins)\s/ig, "$1_NN2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(GUIDE)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(GUILTY)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(GUN)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(GUY)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(GUYS|frogs|lizards)\s/ig, "$1_NN2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(HAD)\s/ig, "$1_VHD ");//amazing the pp version has not been used for so long!
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(HAIR)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
//1 HALF (DB) 1183937 3 HALF (NN1) 199149 9 HALF way (RR21) 46025 13 HALF (RR) 17702
var str = document.getElementById("MT").value;
var res = str.replace(/\b(HALF)\s/ig, "$1_DB_NN1_RR ");
document.getElementById("MT").value = res;
//after adverb db
var str = document.getElementById("MT").value;
var res = str.replace(/(_R\w* \w+_DB)_NN1\w*\s/ig, "$1 ");
document.getElementById("MT").value = res;
//half_DB_NN1 or_CC full_JJ time_NNT1 / not sure about this.
var str = document.getElementById("MT").value;
var res = str.replace(/(_V\w* \w+_DB)_NN1\w* (\w+_C\w* \w+_J\w*)\s/ig, "$1 $2 ");
document.getElementById("MT").value = res;
//half_DB_NN1 an_AT1//Half_DB_NN1 of_IO 
var str = document.getElementById("MT").value;
var res = str.replace(/(_DB)_NN1\w* (\w+_[IA]\w+)\s/ig, "$1 $2 ");
document.getElementById("MT").value = res;
//a half_DB_NN1 after_CS
var str = document.getElementById("MT").value;
var res = str.replace(/(_A\w+ \w+)_DB(_NN1)\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
//
var str = document.getElementById("MT").value;
var res = str.replace(/\b(HALL)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(HAND)\s/ig, "$1_NN1_VV0 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(HANDLE)\s/ig, "$1_VVI ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(HANDS)\s/ig, "$1_NN2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(HANDS-ON)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(corny|HANDY)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(HAPPENING)\s/ig, "$1_VVG ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(HAPPENS)\s/ig, "$1_VVZ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(HAPPILY|Definitely)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(HAPPY)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(fast|halfway|HARD|alone|late|prior)\s/ig, "$1_JJ_RR ");
document.getElementById("MT").value = res;
//hard_RR and_CC fast_JJ_RR
var str = document.getElementById("MT").value;
var res = str.replace(/(_RR \w+_CC \w+)_JJ(_RR)\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
//fast asleep
var str = document.getElementById("MT").value;
var res = str.replace(/_JJ(_RR) (\w+_JJ)\s/ig, "$1 $2 ");
document.getElementById("MT").value = res;
//be_VBI going_VVG fast_JJ ._. 
var str = document.getElementById("MT").value;
var res = str.replace(/(_VV\w+ \w+)_JJ(_RR)\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
//is_VBZ n't_XX anything_PN1 wrong_JJ_RR 
var str = document.getElementById("MT").value;
var res = str.replace(/(_VB[\w\s\']+_JJ)_RR\s/ig, "$1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/(prior)_[JR]\w+ (to)_\w+\s/ig, "$1_II21 $2_II22 ");
document.getElementById("MT").value = res;
//eating_VVG fast_RR food_NN1
var str = document.getElementById("MT").value;
var res = str.replace(/(_VVG \w+_JJ)_RR (\w+_NN1)\s/ig, "$1 $2 ");
document.getElementById("MT").value = res;
//be hard//but this must wait because: "I am still working hard.
var str = document.getElementById("MT").value;
var res = str.replace(/(_VB\w+ \w+_JJ)_RR ([\w\s]*._.)\s/ig, "$1 $2 ");
document.getElementById("MT").value = res;
//this still doesnt work when copy pasting: _VBM still_JJ_RR working_JJ_NN1_VVG hard_JJ_RR//can't solve this.
var str = document.getElementById("MT").value;
var res = str.replace(/(_VB\w+ \w+)_JJ(_RR \w+)_JJ_NN1(_VVG \w+)_JJ(_RR)\s/ig, "$1$2$3$4 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/(still)_J\w+  (\w+ing)_J\w+ (hard)_J\w+\s/ig, "$1_RR $2_VVG $3_RR ");
document.getElementById("MT").value = res;
//States_NP1 alone_RR ,_,
var str = document.getElementById("MT").value;
var res = str.replace(/(_N\w+ \w+)_JJ(_RR ._.)\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
//the_AT wrong_JJ_RR answer_NN1
var str = document.getElementById("MT").value;
var res = str.replace(/(_A\w+ \w+_JJ)_RR (\w+_N\w+)\s/ig, "$1 $2 "); 
document.getElementById("MT").value = res;
//"_" only_JJ_RR when_CS
var str = document.getElementById("MT").value;
var res = str.replace(/(._. \w+)_JJ(_RR \w+_CS)\s/ig, "$1$2 "); 
document.getElementById("MT").value = res;
//only if
var str = document.getElementById("MT").value;
var res = str.replace(/(only)_JJ(_RR \w+_CS)\s/ig, "$1$2 "); 
document.getElementById("MT").value = res;
//learn_VVI English_NP1 fast_JJ
var str = document.getElementById("MT").value;
var res = str.replace(/(_V\w+ \w+_N\w+ \w+)_JJ(_RR)\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
//was_VBDZ still_JJ alive_JJ
var str = document.getElementById("MT").value;
var res = str.replace(/(_VB\w+ \w+)_JJ(_RR \w+_JJ)\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
//much_DA1_RR time_NNT1
var str = document.getElementById("MT").value;
var res = str.replace(/(_DA1)_RR (\w+_NN\w+)\s/ig, "$1 $2 ");
document.getElementById("MT").value = res;
//That_DD1 much_DA1_RR
var str = document.getElementById("MT").value;
var res = str.replace(/(that_)DD1 (\w+_DA1)_RR\s/ig, "$1RG $2 ");
document.getElementById("MT").value = res;
//without_IW much_DA1_RR 
var str = document.getElementById("MT").value;
var res = str.replace(/(_I\w+ \w+_DA1)_RR\s/ig, "$1 ");
document.getElementById("MT").value = res;
//much_DA1 notice_NN1_VV0
var str = document.getElementById("MT").value;
var res = str.replace(/(_DA1 \w+_NN1)_VV0\s/ig, "$1 ");
document.getElementById("MT").value = res;
//_RGQV33 much_DA1_RR 
var str = document.getElementById("MT").value;
var res = str.replace(/(_R\w+ \w+)_DA1(_RR)\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
//not_XX that_RG much_DA1 better_JJR ._.
//much_DA1_RR of_IO
var str = document.getElementById("MT").value;
var res = str.replace(/(_DA1)_RR (of_IO)\s/ig, "$1 $2 ");
document.getElementById("MT").value = res;//not catching
//imagined_VVN much_RR of_IO// forcing it
var str = document.getElementById("MT").value;
var res = str.replace(/(_V\w+ much_)RR (of_IO)\s/ig, "$1DA1 $2 ");
document.getElementById("MT").value = res;
//not_XX that_DD1 much_DA1_RR better_RRR ._. 
var str = document.getElementById("MT").value;
var res = str.replace(/(_XX that)\w+ (much_DA1)_RR (\w+_JJR)_RRR\s/ig, "$1_RG $2 $3 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/(_XX that)\w+ (much_DA1)_RR (\w+_)RRR\s/ig, "$1_RG $2 $3JJR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(HARDLY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(HARDWARE)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(HARMFUL)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(HARSH)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(HAS)\s/ig, "$1_VHZ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/(embarrass|\bHATE|worsen)\s/ig, "$1_VV0 ");
document.getElementById("MT").value = res;
//must_VM he_PPHS1 necessarily_RR wait_VV0// change VV0 to VVI
var str = document.getElementById("MT").value;
var res = str.replace(/(_VM \w+_[PN]\w+ \w+_R\w+ \w+_VV)0\s/ig, "$1I ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(HAVE)\s/ig, "$1_VH0 ");
document.getElementById("MT").value = res;
//Could_VM n't_XX she_PPHS1 have_VH0
var str = document.getElementById("MT").value;
var res = str.replace(/(_VM n.t_XX \w+ have_VH)0\s/ig, "$1I ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(HAVING)\s/ig, "$1_VHG ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(HE)\s/ig, "$1_PPHS1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(HEALTH|poet)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(HEALTHIER)\s/ig, "$1_JJR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(HEALTHY|sudden)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(HEART)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(HEAT)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(HEAVIER)\s/ig, "$1_JJR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(HEAVILY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(HEAVY)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(HEIGHT|hero)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(HELPFUL)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(HELPS)\s/ig, "$1_VVZ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(HENCE)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(HEREBY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(HEREIN)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(HIDDEN)\s/ig, "$1_JJ_VVN ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(faintest|HIGHEST)\s/ig, "$1_JJT ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(HIGHLY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(HIM)\s/ig, "$1_PPHO1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(HIMSELF|herself)\s/ig, "$1_PPX1 ");
document.getElementById("MT").value = res;
//
var str = document.getElementById("MT").value;
var res = str.replace(/\b(HerS|theirs|yours)\s/ig, "$1_PPGE ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(HIS)\s/ig, "$1_APPGE ");
document.getElementById("MT").value = res;
//_JJ_NN1_VV0 
var str = document.getElementById("MT").value;
var res = str.replace(/(_APPGE \w+)_JJ(_NN1)_VV0\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
//his_PPGE is_VBZ //must delay
var str = document.getElementById("MT").value;
var res = str.replace(/(his_)A(PPGE \w+_V[\w\s]+._.)\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/(his_)A(PPGE ._.)\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(HISTORIC)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(HISTORICAL)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(HISTORICALLY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(HISTORY|lunch|reception)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(HIT)\s/ig, "$1_NN1_VV0_VVD_VVN ");
document.getElementById("MT").value = res;
//
var str = document.getElementById("MT").value;
var res = str.replace(/(_VH\w+ \w+)_NN1_VV0_VVD(_VVN)\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
//_XX hit_NN1_VV0_VVD
var str = document.getElementById("MT").value;
var res = str.replace(/(_XX \w+)_NN1(_VV)0_VVD_VVN\s/ig, "$1$2I ");
document.getElementById("MT").value = res;
//a_AT1 big_JJ hit_NN1_VV0_VVD_VVN
var str = document.getElementById("MT").value;
var res = str.replace(/(_[JA]\w* \w+_NN1)_VV0_VVD_VVN\s/ig, "$1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(avoiding|HITTING)\s/ig, "$1_VVG ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(HOLDING)\s/ig, "$1_VVG ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(HOLDS|insists)\s/ig, "$1_VVZ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(HOLE)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(HOLIDAY)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(HOLY)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(HOMELESS)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(HOMEMADE)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
//HOME (NN1_RL)
var str = document.getElementById("MT").value;
var res = str.replace(/\b(HOME)\s/ig, "$1_NN1_RL ");
document.getElementById("MT").value = res;
//walked_VVD me_PPIO1 home_RL ._. //So, you drove her home in her car.
var str = document.getElementById("MT").value;
var res = str.replace(/(_VV\w+ \w+_[NP]\w+ \w+)_NN1(_RL)\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
//some_DD home_NN1_RL
var str = document.getElementById("MT").value;
var res = str.replace(/(_DD \w+_NN1)_RL\s/ig, "$1 ");
document.getElementById("MT").value = res;
// get_VV0 home_NN1_RL ._. 
var str = document.getElementById("MT").value;
var res = str.replace(/(_VV\w* \w+)_NN1(_RL)\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
// the_AT home_NN1_RL / at_II home_NN1_RL
var str = document.getElementById("MT").value;
var res = str.replace(/(_[IAJ]\w* \w+_NN1)_RL\s/ig, "$1 ");
document.getElementById("MT").value = res;
//
var str = document.getElementById("MT").value;
var res = str.replace(/\b(HOMES|tasks)\s/ig, "$1_NN2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(HONEST)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(HONESTLY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(HOPE)\s/ig, "$1_NN1_VV0 ");
document.getElementById("MT").value = res;
//claws gets this one wrong too.  All_DB you_PPY can_VM do_VDI is_VBZ hope_NN1
var str = document.getElementById("MT").value;
var res = str.replace(/(_VD\w+ is_VBZ \w+)_NN1(_VV0)\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
//go_VV0 to_II the_AT cinema_NN1 or_CC watch_NN1_VV0
var str = document.getElementById("MT").value;
var res = str.replace(/(_VV0 [\w\s]*\w+_CC\w* \w+)_NN1(_VV0)\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(HOPEFULLY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b((?:HOP|cook)ing)\s/ig, "$1_VVG ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(HORIZONTAL)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(HORIZONTALLY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(HORRIBLE)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(HORRIBLY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(cinema|HOSPITAL)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(HOSTING)\s/ig, "$1_VVG ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(HOT)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(HOTEL|voter)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(HOUR)\s/ig, "$1_NNT1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(HOURS)\s/ig, "$1_NNT2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(courage|HOUSE|architecture|disaster)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(HOW-TO|how)\s/ig, "$1_RRQ ");
document.getElementById("MT").value = res;
//this is bad not to add rgq but it is late onto coding now to find this one!  maybe simpler to just do post edit.
var str = document.getElementById("MT").value;
var res = str.replace(/\b(how_R)RQ ((?:many|much)_\w+)\s/ig, "$1GQ $2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(where)\s/ig, "$1_CS_RRQ ");
document.getElementById("MT").value = res;
//with_IW where_CS//That's where I create.
var str = document.getElementById("MT").value;
var res = str.replace(/(_[IV]\w+ \w+)_CS(_RRQ)\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/_CS(_RRQ[\w\s\']*\?_\?)\s/ig, "$1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/(_CS)_RRQ ([\w\s]+) (\._\.)\s/ig, "$1 $2 $3 ");
document.getElementById("MT").value = res;
//1 HOWEVER (RR) 5768894 2 HOWEVER (RRQV) 338069 5 HOWEVER (RGQV) 86333
var str = document.getElementById("MT").value;
var res = str.replace(/\b(HOWEVER)\s/ig, "$1_RGQV_RR_RRQV ");
document.getElementById("MT").value = res;
//REVERT TO MOST COMMON IF NOT PICKED UP EARLIER
//However_RR it_PPH1 happened_VVD ,_,
var str = document.getElementById("MT").value;
var res = str.replace(/_RGQV_RR(_RRQV [\w\s]*\w+_V\w+)/ig, "$1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/_RGQV(_RR)_RRQV ([\w\s]*\W+_\W+)/ig, "$1 $2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(HTTP)\s/ig, "$1_NNU ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(HUGE)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(HUGELY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(dozens|HUNDREDS)\s/ig, "$1_NNO2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(HUNGRY|hurtful|boutique)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(HUrt)\s/ig, "$1_JJ_VV0_VVD_VVN ");
document.getElementById("MT").value = res;
//been hurt
var str = document.getElementById("MT").value;
var res = str.replace(/(_VBN \w+)_JJ_VV0_VVD(_VVN)\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
//gotten_VVN hurt_JJ_VV0
var str = document.getElementById("MT").value;
var res = str.replace(/\b(gotten_VVN \w+_JJ)_VV0\w*\s/ig, "$1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(HUSBAND)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(ICE)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(ICONIC)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(IDEA)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(IDEAL)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(IDEALLY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(IDEAS)\s/ig, "$1_NN2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(IDENTICAL)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(IDENTIFIED)\s/ig, "$1_VVN ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(IDENTIFY)\s/ig, "$1_VVI ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(IE)\s/ig, "$1_REX ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(ILLEGAL)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(ILLEGALLY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(IMAGE)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(IMAGES)\s/ig, "$1_NN2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(IMMEDIATE)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(IMMENSELY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(IMMUNE)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(IMPACT)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(IMPLEMENT)\s/ig, "$1_VVI ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(IMPORTANCE)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(IMPORTANT)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(IMPORTANTLY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(IMPOSSIBLE)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(IMPRESSIVE)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(IMPROPERLY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(IMPROVED)\s/ig, "$1_JJ_VVD_VVN "); 
document.getElementById("MT").value = res;
//could_VM be_VBI improved
var str = document.getElementById("MT").value;
var res = str.replace(/(improved)_JJ(_VVD_VVN ._.)\s/ig, "$1$2"); 
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(IN-DEPTH)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(INADVERTENTLY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(INC)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(INCIDENTALLY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(INCLUDES)\s/ig, "$1_VVZ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/(INCLUDing)\s/ig, "$1_II_VVG ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/(_. INCLUDing)_II(_VVG)\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/( _\w+ INCLUDing_II)_VVG (\w+)\s/ig, "$1 $2 ");
document.getElementById("MT").value = res;
//continued_VVD following_II_VVG my_APPGE
var str = document.getElementById("MT").value;
var res = str.replace(/(_VV\w+ \w+)_II(_VVG)\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
//,_, including_II_VVG pretty_RG sensitive_JJ questions_NN2 ,_,
var str = document.getElementById("MT").value;
var res = str.replace(/(,_, including_II)_VVG (\w+_R\w+ \w+_J\w+ \w+_N\w+)\s/ig, "$1 $2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(INCOME|workplace|accident)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(INCOMING)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(INCORRECT)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(INCORRECTLY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(INCREASINGLY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(INCREDIBLE)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(INCREDIBLY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(INDEED)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(INDEFINITELY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(INDEPENDENT)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(INDEPENDENTLY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(INDIAN)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(INDICATES)\s/ig, "$1_VVZ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(INDIGENOUS)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(INDIRECTLY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(INDIVIDUALLY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(INDIVIDUALS)\s/ig, "$1_NN2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(INDOOR)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(INDOORS)\s/ig, "$1_RL ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(INDUSTRIAL)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(INDUSTRY)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(INEVITABLY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(INEXPENSIVE)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(INFINITE)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(INFINITELY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(INFLUENTIAL)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(INFO)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(INFORMATION)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(INFORMATIVE)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(INGREDIENTS)\s/ig, "$1_NN2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(INHERENTLY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(INITIALLY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(INJURY)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(INNER)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(INNOVATIVE)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(INSANELY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(INSPIRED)\s/ig, "$1_VVN ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(INSTALLATION)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(INSTALLED)\s/ig, "$1_VVN ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(INSTALLING)\s/ig, "$1_VVG ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(INSTANCE)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
//For_REX21 instance_REX22
var str = document.getElementById("MT").value;
var res = str.replace(/\b(For)_\w+ (instance|example)_\w+\s/ig, "$1_REX21 $2_REX22 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(INSTANT)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(INSTANTLY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(INSTEAD)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(INSTITUTE)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(INSTITUTIONAL)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(INSTRUCTIONS)\s/ig, "$1_NN2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(INSURANCE)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(INTEGRAL)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(INTEGRATED)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(INTELLIGENT)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(INTENDED)\s/ig, "$1_VVD_VVN ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(INTENSE)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(INTENSELY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(INTENSIVE)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(INTENTIONALLY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(INTERACTIVE)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(INTEREST)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(INTERESTED)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(INTERESTING)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(INTERESTINGLY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(INTERNAL)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(INTERNALLY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(INTERNATIONAL)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(INTERNATIONALLY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(Internet)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
//Internet_NP1  // unsolved problem
var str = document.getElementById("MT").value;
var res = str.replace(/\b(Internet)_NP1\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(INTERVIEW)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(INTO)\s/ig, "$1_II ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(INTRODUCE)\s/ig, "$1_VVI ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(INTRODUCtion)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(INTUITIVE)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(INVARIABLY|clearly)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(INVEST)\s/ig, "$1_VV0 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(INVESTMENT|province)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(INVISIBLE)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(INVOLVED)\s/ig, "$1_JJ_VVD_VVN ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(INVOLVED_JJ)_VVD_VVN( in_II)\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
//man_NN1 involved_VVD has_VHZ
var str = document.getElementById("MT").value;
var res = str.replace(/(_[PN]\w+ \w+)_JJ_VVD(_VVN \w+_V\w+)\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(INVOLVES|marries|cares)\s/ig, "$1_VVZ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(INVOLVING)\s/ig, "$1_VVG ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(IRELAND)\s/ig, "$1_NP1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(IRISH)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(IRONICALLY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(ISLAMIC)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(ISLAND|co-worker)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(ISSUE)\s/ig, "$1_NN1_VV0 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(called|ISSUED|wondered)\s/ig, "$1_VVD_VVN ");
document.getElementById("MT").value = res;
//has_VHZ now_RT emerged_VVD_VVN
var str = document.getElementById("MT").value;
var res = str.replace(/(_VH\w* \w+ \w+)_VVD(_VVN)\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
//So_RR I_PPIS1 figured_VVD_VVN
var str = document.getElementById("MT").value;
var res = str.replace(/(_R\w+ \w+ \w+_VVD)_VVN\s/ig, "$1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(ISSUES)\s/ig, "$1_NN2_VVZ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(ITEM)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(ITEMS)\s/ig, "$1_NN2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(ITS)\s/ig, "$1_APPGE ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(ITSELF)\s/ig, "$1_PPX1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(JAMES)\s/ig, "$1_NP1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(JANUARY)\s/ig, "$1_NPM1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(JESUS)\s/ig, "$1_NP1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(JEWISH)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(JOB)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(JOBS)\s/ig, "$1_NN2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(JOHN)\s/ig, "$1_NP1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(JOINED)\s/ig, "$1_VVD ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(JOINING)\s/ig, "$1_VVG ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(JOINT)\s/ig, "$1_JJ "); 
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(JOINTLY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(JOURNEY)\s/ig, "$1_NN1_VV0 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(JULY)\s/ig, "$1_NPM1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(JUNE)\s/ig, "$1_NPM1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(JUNIOR)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(JUSTICE)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(KEEN)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(KEEPING)\s/ig, "$1_VVG ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(KEEPS)\s/ig, "$1_VVZ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(KIDS)\s/ig, "$1_NN2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(KILL)\s/ig, "$1_VVI ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(KILLED)\s/ig, "$1_VVN ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(KINDA)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(KINDLY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(KING)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(KIT)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(KITCHEN)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(KNEW)\s/ig, "$1_VVD ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(KNOWING)\s/ig, "$1_VVG ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(KNOWINGLY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(KNOWLEDGE)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(KNOWLEDGEABLE)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(KNOWS)\s/ig, "$1_VVZ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(KOREAN|famed|common)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(LACK)\s/ig, "$1_NN1_VV0 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(LAND)\s/ig, "$1_NN1_VV0 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(LANGUAGE|asparagus)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(LARGELY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(LARGER)\s/ig, "$1_JJR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(LARGEST)\s/ig, "$1_JJT ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(LASTLY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(LATELY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(LATEST)\s/ig, "$1_JJT ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(LAW)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(LAWS|kinds|PERSPECTIVES)\s/ig, "$1_NN2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(LAYER)\s/ig, "$1_NN1_VV0 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(LAZY|life-?long)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(LEADER|calendar)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(LEADERS)\s/ig, "$1_NN2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(LEADERSHIP)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(LEADS)\s/ig, "$1_VVZ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(LEAGUE)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(LEARNING)\s/ig, "$1_NN1_VVG ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(LEAVE)\s/ig, "$1_VV0 "); 
document.getElementById("MT").value = res;
// Leave_VV0 me_PPIO1 alone_JJ_RR
var str = document.getElementById("MT").value;
var res = str.replace(/(_V\w+ \w+_[NP]\w+ \w+_JJ)_RR\s/ig, "$1 "); 
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(LEAVES)\s/ig, "$1_NN2_VVZ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(LEAVING)\s/ig, "$1_VVG ");
document.getElementById("MT").value = res;
//LEFT IS A KILLER! 1		  LEFT (VVN)	825113 2		  LEFT (JJ)	812850	3		  LEFT (VVD)	655523	11		  LEFT (RL) 75837	15		  LEFT (NN1)	38688 / BUT KEEP THEM ALPHABETICAL!
var str = document.getElementById("MT").value;
var res = str.replace(/\b(LEFT)\s/ig, "$1_JJ_NN1_RL_VVD_VVN ");
document.getElementById("MT").value = res;
//She_PPHS1 left_VVN me_PPIO1
var str = document.getElementById("MT").value;
var res = str.replace(/([A-Z]\w+_PPHS1 \w+)_JJ_NN1_RL(_VVD)_VVN\s/g, "$1$2");//not insensitive.
document.getElementById("MT").value = res;
//the_AT left_NN1_RL_VVD_VVN ,_,
var str = document.getElementById("MT").value;
var res = str.replace(/(_A\w+ \w+_)\w*(NN1)_RL_VV\w*\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
//we_PPIS2 left_JJ_NN1_RL_VVN ._. //im not changing that it should have had VVD in it.//sometimes it changes so need to capture d and n
var str = document.getElementById("MT").value;
var res = str.replace(/(_[PN]\w+ \w+)_JJ_NN1_RL(_VV)[ND]\s/ig, "$1$2D ");
document.getElementById("MT").value = res;
//had_VHD left_JJ_NN1_RL_VVN ._. 
var str = document.getElementById("MT").value;
var res = str.replace(/(_VH\w+ \w+)_JJ_NN1_RL(_VVN ._.)\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
//It_PPH1 is_VBZ left_VVN ._. There_EX are_VBR two_MC left_JJ ._. The_AT two_MC left_JJ ._. They_PPHS2 left_VVD ._. The_AT left_JJ are_VBR left_JJ wing_NN1 ._. Turn_VV0 left_RL ._. How_RGQ many_DA2 are_VBR left_VVN ?_?
var str = document.getElementById("MT").value;
var res = str.replace(/(_MC \w+_JJ)_NN1_RL_VVD_VVN\s/ig, "$1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/(_VB\w*) (\w+)_JJ_NN1_RL_VVD(_VVN)\s/ig, "$1 $2$3 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/(_VV\w*) (\w+)_JJ_NN1(_RL)_VVD_VVN\s/ig, "$1 $2$3 ");
document.getElementById("MT").value = res;
//if nothing can be worked out by the end of the sentence: choose vvn
var str = document.getElementById("MT").value;
var res = str.replace(/\b(LEFT)_\w+_\w+ ([\w\s]+\W+_\W+)\s/ig, "$1_VVN $2 ");
document.getElementById("MT").value = res;
//
var str = document.getElementById("MT").value;
var res = str.replace(/\b(LEGAL)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(LEGALLY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(LEGENDARY)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(LEGISLATIVE|naive)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(LEGITIMATE)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(hermit|LENGTH|sentence)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(LESSER|beneficial)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
//Let_VV0 's
var str = document.getElementById("MT").value;
var res = str.replace(/\b(LET)_\w* ('S)\s/ig, "$1_VM21 $2_VM22 ");
document.getElementById("MT").value = res;
//_VM22 take_NN1_VVI
var str = document.getElementById("MT").value;
var res = str.replace(/(_VM22 \w+)_NN1(_VVI)\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(LETTER|technique)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b((?:blam|help|LETT|read|cross)ing)\s/ig, "$1_VVG ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(LEVELS|sentences|suburbs)\s/ig, "$1_NN2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(LIABLE)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(LIBERAL)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(LIBRARY)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(LICENSED)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(LIFE|discovery|COVID-19|outlook|margin)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(LIGHTLY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(LIGHTS|diseases)\s/ig, "$1_NN2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(LIKE)\s/ig, "$1_II_VV0 "); //1 LIKE (II) 12859907 2 LIKE (VVI)2829631 3 LIKE (VV0) 1807281 8 LIKE (CS) 242194 27 LIKE (JJ) 54117
document.getElementById("MT").value = res;
//is  it_PPH1 like_VV0
var str = document.getElementById("MT").value;
var res = str.replace(/(_VB\w+ \w+_[NDP]\w+ like_II)_VV0\s/ig, "$1 "); 
document.getElementById("MT").value = res;
//make_VVI them_PPHO2 like_VV0 they_PPHS2 used_VMK, the conjunction is important.
var str = document.getElementById("MT").value;
var res = str.replace(/(_V\w+ \w+_[NDP]\w+ like)_II_VV0 (\w+_[NDP]\w+ \w+_V\w+)\s/ig, "$1_CS $2 "); 
document.getElementById("MT").value = res;
//I_PPIS1 like_II_VV0
var str = document.getElementById("MT").value;
var res = str.replace(/(_P\w+ \w+)_II(_VV0 [\w\s]*._.)\s/ig, "$1$2 "); 
document.getElementById("MT").value = res;
// I_PPIS1 just_RR like_II_VV0 some_DD of_IO them_PPHO2 ._. 
var str = document.getElementById("MT").value;
var res = str.replace(/(_PPIS1 \w+_R\w+ \w+)_II(_VV0)\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
//would_VM like_II_VVI
var str = document.getElementById("MT").value;
var res = str.replace(/\b(\w+_VM) (\w+)_II(_VVI)\s/ig, "$1 $2$3 ");
document.getElementById("MT").value = res;
//Would_VM you_PPY like_II_VVI
//do_VD0 n't_XX like_II_VVI
//Do_VD0 you_PPY like_II_VVI
var str = document.getElementById("MT").value;
var res = str.replace(/(_V[MD]\w* [\'\w]+_[PNDX]\w+ \w+)_II(_VVI)\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
//sound_VVI like_II_VVI a_AT1 lot_NN1 ._. 
var str = document.getElementById("MT").value;
var res = str.replace(/(_VVI \w+_II)_VV[0I]\s/ig, "$1 ");
document.getElementById("MT").value = res;
//'s_VBZ not_XX like_II_VVI
var str = document.getElementById("MT").value;
var res = str.replace(/(_VBD?[RZ] n.t_XX \w+_II)_VV[0I]\s/ig, "$1 ");
document.getElementById("MT").value = res;
//do_VD0 not_XX like_II_VVI
var str = document.getElementById("MT").value;
var res = str.replace(/(_VD\w* not_XX \w+)_II(_VVI)\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
//would_VM you_PPY like_II_VVI to
var str = document.getElementById("MT").value;
var res = str.replace(/(\w+)_II(_VVI to_TO)\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
//MUST NEVER USE \w* after word because it cuts longer versions.
var str = document.getElementById("MT").value;
var res = str.replace(/\b(\W+_\W+) (LIKE)_\w* (\W+_\W+)\s/ig, "$1 $2_RR $3 "); //, (,) LIKE (RR) , (,)
document.getElementById("MT").value = res;
// 
var str = document.getElementById("MT").value;
var res = str.replace(/\b(LIKEly|WRONG|easy)\s/ig, "$1_JJ_RR ");//RR@
document.getElementById("MT").value = res;
//go_VVI wrong_JJ_RR
var str = document.getElementById("MT").value;
var res = str.replace(/\b(\w+_VV\w* \w+)_JJ(_RR)\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
//its much more common adjective to = easy_JJ_RR to_TO
var str = document.getElementById("MT").value;
var res = str.replace(/(_JJ)_RR (to_TO)\s/ig, "$1 $2 ");//RR@
document.getElementById("MT").value = res;
//_VBZ_VHZ quite_RG easy_JJ
var str = document.getElementById("MT").value;
var res = str.replace(/(_VBZ)_VHZ (\w+_RG \w+_JJ)\s/ig, "$1 $2 ");
document.getElementById("MT").value = res;
//'s_VBZ_VHZ why_RRQ
var str = document.getElementById("MT").value;
var res = str.replace(/(_VBZ)_VHZ (\w+_\w+Q\w*)\s/ig, "$1 $2 ");
document.getElementById("MT").value = res;
//_VBZ_VHZ where_CS
var str = document.getElementById("MT").value;
var res = str.replace(/(_VBZ)_VHZ (\w+_CS)\s/ig, "$1 $2 ");
document.getElementById("MT").value = res;
//'s_VBZ_VHZ worth_II visiting_NN1
var str = document.getElementById("MT").value;
var res = str.replace(/(_VBZ)_VHZ (\w+_I\w+)\s/ig, "$1 $2 ");
document.getElementById("MT").value = res;
// 's_VBZ_VHZ all_DB
//_VBZ_VHZ dropping_VVG
var str = document.getElementById("MT").value;
var res = str.replace(/(_VBZ)_VHZ (\w+_(?:D\w*|VVG))\s/ig, "$1 $2 ");
document.getElementById("MT").value = res;
//It_PPH1 's_VBZ_VHZ something_PN1
var str = document.getElementById("MT").value;
var res = str.replace(/(\w+_P\w+ \'s_VBZ)_VHZ (\w+_P\w+)\s/ig, "$1 $2 ");
document.getElementById("MT").value = res;
//risky because all are possible =except_CS_II_VV0 it_PPH1 's_VBZ
var str = document.getElementById("MT").value;
var res = str.replace(/(_CS)_II_VV0 (\w+_P\w+)\s/ig, "$1 $2 ");
document.getElementById("MT").value = res;
//are_VBR much_RR more_RGR likely_JJ_RR
var str = document.getElementById("MT").value;
var res = str.replace(/\b(\w+_VB\w* \w+_R\w* \w+_R\w*) (\w+)(_JJ)_RR\s/ig, "$1 $2$3 ");//RR@
document.getElementById("MT").value = res;
// are_VBR the_AT more_RGR likely_JJ_RR//CAN'T LEAVE THIS SO WIDE ///must delay
var str = document.getElementById("MT").value;
var res = str.replace(/\b(\w+_VB\w* \w+_R\w+ \w+_JJ)_RR([\w\s]*._.)\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(\w+_VM \w+)_JJ(_RR)\s/ig, "$1$2 ");//RR@
document.getElementById("MT").value = res;
//any_DD more_DAR_RGR_RRR
var str = document.getElementById("MT").value;
var res = str.replace(/(_D\w+ \w+_DAR)_RGR_RRR\s/ig, "$1 ");
document.getElementById("MT").value = res;
//_PN1 more_DAR to_TO
var str = document.getElementById("MT").value;
var res = str.replace(/(_PN\w+ \w+_DAR)_RGR_RRR (to_TO)\s/ig, "$1 $2 ");
document.getElementById("MT").value = res;
//more_DAR_RGR_RRR old-fashioned_JJ - hypen is important for adjectives!
var str = document.getElementById("MT").value;
var res = str.replace(/_DAR(_RGR)_RRR ([-\w]+_JJ)\s/ig, "$1 $2 ");
document.getElementById("MT").value = res;
//The_AT more_RGR you_PPY  the_AT more_DAR_RGR_RRR you_PPY
var str = document.getElementById("MT").value;
var res = str.replace(/(_A\w* more)_DAR(_RGR)_RRR (\w+_P\w*)\s/ig, "$1$2 $3 ");
document.getElementById("MT").value = res;
//_DAR_RGR_RRR self-confidence_NN1
var str = document.getElementById("MT").value;
var res = str.replace(/(_DAR)_RGR_RRR ([\w-]+_N\w*)\s/ig, "$1 $2 ");
document.getElementById("MT").value = res;
//the_AT fund_NN1 has_VHZ less_DAR_RGR_RRR and_CC less_DAR_RGR_RRR achieved_VVD_VVN the_AT goal_NN1 //just following claws here (this is confusing! and risky)
var str = document.getElementById("MT").value;
var res = str.replace(/(_V\w* \w+_DAR)_RGR_RRR (\w+_CC \w+)_DAR_RGR(_RRR \w+_V\w*)\s/ig, "$1 $2$3 ");
document.getElementById("MT").value = res;
//more_DAR_RGR_RRR and_CC more_DAR
var str = document.getElementById("MT").value;
var res = str.replace(/_DAR(_RGR)_RRR (\w+_C\w* \w+_DAR)\s/ig, "$1 $2 ");
document.getElementById("MT").value = res;
//
var str = document.getElementById("MT").value;
var res = str.replace(/\b(LIKED)\s/ig, "$1_VVD ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(LIKEWISE)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/(call|LINE)\s/ig, "$1_NN1_VV0 "); 
document.getElementById("MT").value = res;
//this_DD1 book_NN1_VV0
var str = document.getElementById("MT").value;
var res = str.replace(/(_DD1 \w+_NN1)_VV0\s/ig, "$1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(depressed|LINEAR|lonely|\w*sensory)\s/ig, "$1_JJ ");//multi-sensory
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(LINES)\s/ig, "$1_NN2_VVZ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(LINK)\s/ig, "$1_NN1_VV0 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(LINKED)\s/ig, "$1_VVN ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(LIST)\s/ig, "$1_NN1_VV0 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(LISTening|running|tracking|working)\s/ig, "$1_JJ_NN1_VVG ");
document.getElementById("MT").value = res;
//or_CC running_JJ_VVG water_NN1
var str = document.getElementById("MT").value;
var res = str.replace(/(_CC \w+_JJ)_VVG (\w+_NN\w*)\s/ig, "$1 $2 ");
document.getElementById("MT").value = res;
//the_AT living_JJ_NN1_VVG expenses // _JJ_NN1_VVG in cool running water
var str = document.getElementById("MT").value;
var res = str.replace(/(_[IAJ]\w+ \w+_JJ)_NN1_VVG (\w+_N\w+)\s/ig, "$1 $2 ");
document.getElementById("MT").value = res;
//tracking_JJ_VVG each_DD1
var str = document.getElementById("MT").value;
var res = str.replace(/_JJ(_VVG \w+_DD1)\s/ig, "$1 ");
document.getElementById("MT").value = res;
//were_VBDR currently_RR working_JJ_NN1_VVG
var str = document.getElementById("MT").value;
var res = str.replace(/(_VB\w+ \w+_R\w* \w+)_JJ_NN1(_VVG)\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
//After_II debating_NN1_VVG - claws chooses vvg after I or nn1 after _A
var str = document.getElementById("MT").value;
var res = str.replace(/(_I\w+ \w+)_NN1(_VVG)\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/(_A\w+ \w+_NN1)_VVG\s/ig, "$1 ");
document.getElementById("MT").value = res;
//working_NN1_VVG ._.
var str = document.getElementById("MT").value;
var res = str.replace(/_NN1(_VVG[\w\s]*._.)\s/ig, "$1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(LITERALLY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(LITERARY|talkative)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(LITtle)\s/ig, "$1_DA1_JJ ");
document.getElementById("MT").value = res;
//a_AT1 little_DA1_JJ more_DAR_RGR_RRR // 'm_VBM a_AT1 little_DA1_JJ more_DAR relaxed_VVN ._. 
var str = document.getElementById("MT").value;
var res = str.replace(/(a_)AT1( little_)DA1_JJ( more_\w+)\s/ig, "$1RR21$2RR22$3 ");//this just wont catch in order
document.getElementById("MT").value = res;
// little_RR22 more_DAR relaxed_VVN ._. 
var str = document.getElementById("MT").value;
var res = str.replace(/(_RR22 more_)DAR( \w+ed_)VVN\s/ig, "$1RGR$2JJ ");//this just wont catch in order//risky to change to adjective...
document.getElementById("MT").value = res;
//_DA1_JJ //Lisa_NP1 was_VBDZ little_DA1_JJ ._. 
var str = document.getElementById("MT").value;
var res = str.replace(/(_[PN]\w+ \w+_VB\w+ \w+_)DA1_(JJ ._.)\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
//and_CC little_DA1_JJ fish_NN
var str = document.getElementById("MT").value;
var res = str.replace(/_DA1(_JJ \w+_NN\w*)\s/ig, "$1 ");
document.getElementById("MT").value = res;
//has_VHZ little_DA1_JJ to_TO
var str = document.getElementById("MT").value;
var res = str.replace(/(_DA1)_JJ (to_TO)\s/ig, "$1 $2 ");
document.getElementById("MT").value = res;
//little_DA1_JJ brains_NN2 
//a_RR21 little_RR22 careless_JJ //a_AT1 little_DA1_JJ more_RGR//A_AT1 little_DA1_JJ to_II the_AT
var str = document.getElementById("MT").value;
var res = str.replace(/(a_)A\w* (little_)[DJ]\w* (\w+_[IRJ]\w*)\s/ig, "$1RR21 $2RR22 $3 ");
document.getElementById("MT").value = res;
//as_RR21 well_RR22 as_II
var str = document.getElementById("MT").value;
var res = str.replace(/(as_)RR21 (well_)RR22 (as_II)\s/ig, "$1II31 $2II32 $333 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/(by_)\w+ (reason_)N\w+ (of_I)\w+\s/ig, "$1II31 $2II32 $3I33 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/(with_)\w+ (respect_)N\w+ (to_I)\w+\s/ig, "$1II31 $2II32 $3I33 ");
document.getElementById("MT").value = res;
// in_II line_NN1 with_IW 
var str = document.getElementById("MT").value;
var res = str.replace(/(in_II) (line_)NN1 (with_I)W\s/ig, "$131 $2II32 $3I33 ");
document.getElementById("MT").value = res;
//little_DA1_JJ secret_NN1//let_VVI you_PPY in_RP on_II a_RR21 little_RR22 secret_JJ_NN1
var str = document.getElementById("MT").value;
var res = str.replace(/(a_)\w* (little_)\w* (secret_)\w*\s/ig, "$1AT1 $2JJ $3NN1 ");
document.getElementById("MT").value = res;
//a_AT1 little_DA1_JJ bit_NN1 ._.
var str = document.getElementById("MT").value;  
var res = str.replace(/_DA1(_JJ \w+_NN\w+)\s/ig, "$1 ");
document.getElementById("MT").value = res;
//cuts_VVZ little_DA1_JJ and_CC
var str = document.getElementById("MT").value;
var res = str.replace(/\b(\w+_V\w* \w+_DA1)_JJ (\w+_C\w*)\s/ig, "$1 $2 ");
document.getElementById("MT").value = res;
//not an article has_VHZ little_DA1 effect_NN1
var str = document.getElementById("MT").value;
var res = str.replace(/\b(\w+_[^A][^T]\w*) (\w+)(_DA1)_JJ (\w+_NN1)\s/ig, "$1 $2$3 $4 ");
document.getElementById("MT").value = res;
//1		  LIVE (VVI)	1113850	2		  LIVE (VV0)	982676	3		  LIVE (JJ)	784541 //CHOOSE VV0 BECAUSE IT CHANGES TO INFINITIVE WHEN NEEDED
var str = document.getElementById("MT").value;
var res = str.replace(/\b(LIVE)\s/ig, "$1_JJ_VV0 ");
document.getElementById("MT").value = res;
//find_VVI live_JJ_VV0 - ALMOST ALWAYS AN ADJECTIVE FOLLOWS INFINITVE
var str = document.getElementById("MT").value;
var res = str.replace(/\b(\w+_VVI) (\w+)(_JJ)_VV0\s/ig, "$1 $2$3 ");
document.getElementById("MT").value = res;
//to_TO live_JJ_VV0
var str = document.getElementById("MT").value;
var res = str.replace(/(_TO \w+)_JJ(_VV)0\s/ig, "$1$2I ");
document.getElementById("MT").value = res;
//that_CST some_DD people_NN live_JJ_VV0
var str = document.getElementById("MT").value;
var res = str.replace(/(_C\w* \w+_[ADJ]\w* \w+_N\w* \w+)_JJ(_VV0)\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
//1		  LIVING (VVG)	527836	LIVING (NN1)	334279	15		  LIVING (JJ)	24186
var str = document.getElementById("MT").value;
var res = str.replace(/\b(Living|smoking)\s/ig, "$1_JJ_NN1_VVG ");
document.getElementById("MT").value = res;
//colorful_JJ and_CC fun_JJ_NN1 than_CSN
var str = document.getElementById("MT").value;
var res = str.replace(/(_JJ \w+_CC \w+_JJ)_NN1 (\w+_CSN)\s/ig, "$1 $2 ");
document.getElementById("MT").value = res;
//Arabic_JJ_NN1 and_CC Latin_JJ_NN1 are_VBR different_JJ
var str = document.getElementById("MT").value;
var res = str.replace(/_JJ(_NN1 \w+_VB\w+)\s/ig, "$1 ");
document.getElementById("MT").value = res;
//_JJ_NN1 and_CC Latin_NP1
var str = document.getElementById("MT").value;
var res = str.replace(/_JJ(_NN1 and_CC \w+_N\w+)\s/ig, "$1 ");
document.getElementById("MT").value = res;
//the_AT enter_VV0 key_JJ_NN1
var str = document.getElementById("MT").value;
var res = str.replace(/(_A\w+ \w+_V\w+ \w+)_JJ(_NN1)\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
//been_VBN living_JJ_NN1_VVG
var str = document.getElementById("MT").value;
var res = str.replace(/(_VB\w* \w+)_JJ_NN1(_VVG)\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
//listening_JJ_NN1_VVG to_II
var str = document.getElementById("MT").value;
var res = str.replace(/_JJ(_NN1_VVG \w+_I\w+)\s/ig, "$1 ");
document.getElementById("MT").value = res;
//_NN1 and_CC listening_NN1_VVG
var str = document.getElementById("MT").value;
var res = str.replace(/(_NN1 \w*_CC\w* \w+_NN1)_VVG\s/ig, "$1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(LOAN|lifestyle)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(LOCAL|linguistic)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(LOCALLY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(LOCATION|identity)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(CHOCOLATES|LOCATIONS)\s/ig, "$1_NN2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(LOGIC)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(LOGICAL|depressing)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(LOGICALLY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(London|Mars)\s/g, "$1_NP1 ");
document.getElementById("MT").value = res;
//JJ_RR_VV0
var str = document.getElementById("MT").value;
var res = str.replace(/\b(close|LONG)\s/ig, "$1_JJ_RR_VV0 ");
document.getElementById("MT").value = res;
//very_RG close_JJ_RR_VV0 
var str = document.getElementById("MT").value;
var res = str.replace(/(_RG \w+_JJ_RR)_VV0\s/ig, "$1 ");
document.getElementById("MT").value = res;
//get_VVI too_RR close_JJ_RR_VV0 to_II
var str = document.getElementById("MT").value;
var res = str.replace(/(_VV\w+ \w+_R\w+ \w+)_JJ(_RR)_VV0\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
//it_PPH1 all_DB long_JJ_RR_VV0 before_CS
var str = document.getElementById("MT").value;
var res = str.replace(/(_PPH1 \w+_D\w+ \w+)_JJ(_RR)_VV0( \w+_CS)\s/ig, "$1$2$3 ");
document.getElementById("MT").value = res;
//must_VM close_JJ_RR_VVI
var str = document.getElementById("MT").value;
var res = str.replace(/(_VM \w+)_JJ_RR(_VV)[0I]\s/ig, "$1$2I ");
document.getElementById("MT").value = res;
//How_RRQ long_JJ_RR_VV0 had_VHD
var str = document.getElementById("MT").value;
var res = str.replace(/(_RRQ \w+)_JJ(_RR)_VV0 (\w+_V\w+)\s/ig, "$1$2 $3 ");
document.getElementById("MT").value = res;
//Taking_VVG the_AT long_JJ view_NN1 
var str = document.getElementById("MT").value;
var res = str.replace(/(long)_\w+ (view)_\w+\s/ig, "$1_JJ $2_NN1 ");
document.getElementById("MT").value = res;
// long_JJ ,_, long_JJ_RR_VV0 time_NNT1
var str = document.getElementById("MT").value;
var res = str.replace(/(_JJ ,_, \w+_JJ)_RR_VV0 (\w+_N\w+)\s/ig, "$1 $2 "); 
document.getElementById("MT").value = res;
//was_VBDZ n't_XX long_JJ_RR_VVI
var str = document.getElementById("MT").value;
var res = str.replace(/(_VB\w*[\w\s\']*\w+_JJ)_RR_VV[I0]\s/ig, "$1 ");
document.getElementById("MT").value = res;
//_DD2 long_JJ_RR_VV0 rainy_JJ
var str = document.getElementById("MT").value;
var res = str.replace(/(_D\w* \w+_JJ)_RR_VV0 (\w+_JJ)\s/ig, "$1 $2 ");
document.getElementById("MT").value = res;
//_V*0 _V*0 _V*N is not possible! this is the first example of chopping off long impossible peaces first. this will create more reusable code.
var str = document.getElementById("MT").value;
var res = str.replace(/(V\w0 \w+_JJ_RR)_VV0 (\w+_V\wN)\s/ig, "$1 $2 ");
document.getElementById("MT").value = res;
//_V _JJ _V*N is very rarely possible. 
var str = document.getElementById("MT").value;
var res = str.replace(/(_V\w+ \w+)_JJ(_RR \w+_V\wN)\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
//
var str = document.getElementById("MT").value;
var res = str.replace(/\b(LONG-TERM)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(LOOK)\s/ig, "$1_NN1_VV0 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(FORWARD)\s/ig, "$1_JJ_NN1_RL_VV0 ");
document.getElementById("MT").value = res;
//move_VVI forward_JJ_NN1_RL_VV0
var str = document.getElementById("MT").value;
var res = str.replace(/(_VV\w+ forward)_JJ_NN1(_RL)_VV0( \w+_I\w+)\s/ig, "$1$2$3 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/((?:go\w*|went)_V\w+ forward)_JJ_NN1(_RL)_VV0\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
//I_PPIS1 look_VV0 forward_RL to_II the_AT story_NN1 ._. 
var str = document.getElementById("MT").value;
var res = str.replace(/(look\w*_V\w+ forward)_JJ_NN1(_RL)_VV0 (to_II)\s/ig, "$1$2 $3 ");
document.getElementById("MT").value = res;
//look_VV0 forward_NN1_RL_VV0 to// something else caught it first.
var str = document.getElementById("MT").value;
var res = str.replace(/(look\w*_V\w+ forward)_NN1(_RL)_VV0 (to_\w+) /ig, "$1$2 $3 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(LOOKING)\s/ig, "$1_VVG ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(appears|emerges|LOOKS)\s/ig, "$1_VVZ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(LOOSE)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(LOOSELY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(LOSING)\s/ig, "$1_VVG ");
document.getElementById("MT").value = res;
//
var str = document.getElementById("MT").value;
var res = str.replace(/\b(LOSS|lot|slang)\s/ig, "$1_NN1 ");//1 (NN1)	4534533 2		  LOT (RR22) 675308	3		  LOT (NN1_RR22)	559427	4		  LOT (RR22_NN1)	538167	5		  LOT (NN1_NP1@)16717	6		  LOT (RR55)	14780	7		  LOT (RR33)	10511
document.getElementById("MT").value = res;
//WAY
var str = document.getElementById("MT").value;
var res = str.replace(/\b(way)\s/ig, "$1_NN1_RR ");
document.getElementById("MT").value = res;
//most efficient way possible
var str = document.getElementById("MT").value;
var res = str.replace(/(_JJ \w+_NN1)_RR (\w+_JJ)\s/ig, "$1 $2 ");
document.getElementById("MT").value = res;
//way is RR before (RGR)(RRR)(RP)(JJ)(JJR) 
var str = document.getElementById("MT").value;
var res = str.replace(/\b(\w+)_NN1(_RR \w+_(?:RGR|RRR|RP|JJ|JJR))\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(\w+_NN1)_RR (\w+_[^RJ]\w*)\s/ig, "$1 $2 ");
document.getElementById("MT").value = res;
//
//LOTS (NN2_PN) nn2@
var str = document.getElementById("MT").value;
var res = str.replace(/\b(LOTS)\s/ig, "$1_NN2_PN ");
document.getElementById("MT").value = res;
//the_AT vacant_JJ lots_NN2_PN
var str = document.getElementById("MT").value;
var res = str.replace(/\b(\w+_[JA][JT]) (\w+)(_NN2)_PN\s/ig, "$1 $2$3 ");
document.getElementById("MT").value = res;
//although both possible one is by far more common // LOTS (PN) OF (IO)have_VH0 lots_NN2_PN of_IO things_NN2
var str = document.getElementById("MT").value;
var res = str.replace(/\b(\w+)_NN2(_PN of_IO)\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
//
var str = document.getElementById("MT").value;
var res = str.replace(/\b(LOUDLY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(LOVELY|commonsense)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(LOVES)\s/ig, "$1_VVZ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(LOWEST)\s/ig, "$1_JJT ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(LOYAL)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(LTD)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(LUCK|origin)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(LUCKILY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(LUCKY)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(MACHINE)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(MAD)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(MAGAZINE)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(MAGICAL)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(MAGICALLY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(MAGNETIC)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(MAGNIFICENT)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(MAIN)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(MAINLY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(MAINSTREAM)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(arriving|MAINTAINING|making)\s/ig, "$1_VVG ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(MAINTENANCE)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(MAJORITY|jet|yacht)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(MAKES)\s/ig, "$1_VVZ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(MAN)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(MANAGED)\s/ig, "$1_VVD_VVN ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(MANAGEMENT)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(MANAGER)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(MANDATORY)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(MANNER)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(MANUALLY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(MANY)\s/ig, "$1_DA2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(MAP)\s/ig, "$1_NN1_VV0 ");
document.getElementById("MT").value = res;
//people_NN work_NN1_VV0
var str = document.getElementById("MT").value;
var res = str.replace(/(_NN \w+)_NN1(_VV0)\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(MARCH)\s/ig, "$1_NPM1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(MARINE)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(MARKET)\s/ig, "$1_NN1_VV0 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b((?:debat|MARKET|shoot|meet)ing)\s/ig, "$1_NN1_VVG ");
document.getElementById("MT").value = res;
//the_AT August_NPM1 meeting_NN1_VVG ._.
var str = document.getElementById("MT").value;
var res = str.replace(/(_A\w* \w+_N\w* \w+_NN1)_VVG (._.)\s/ig, "$1 $2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(MARRIAGE|arena|tennis)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(accepted|ESTIMATED|excited|polished|MARRIED)\s/ig, "$1_JJ_VVD_VVN ");
document.getElementById("MT").value = res;
//been_VBN estimated_JJ 
var str = document.getElementById("MT").value;
var res = str.replace(/(_VB\w+ married_JJ)_VVD_VVN\s/ig, "$1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/(_VB\w+ estimated_)JJ_\w+\s/ig, "$1VVN ");
document.getElementById("MT").value = res;
//has_VHZ n't_XX recovered_VVD_VVN ._. 
var str = document.getElementById("MT").value;
var res = str.replace(/(_VH\w+ [\w\']+_XX \w+)_VVD(_VVN)\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
// has_VHZ less_DAR and_CC less_RRR achieved_VVD_VVN//this will be quite wild so delay it.
var str = document.getElementById("MT").value;
var res = str.replace(/(_VH\w+[\w\s]+\w+)_VVD(_VVN[\w\s]*._.)\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
//Letters_NN2 already_RR published_VVN in_II other_JJ papers_NN2 will_VM
var str = document.getElementById("MT").value;
var res = str.replace(/(\w+_N\w+ \w+_R\w+ \w+)_VVD(_VVN \w+_I\w* \w+_J\w* \w+_N\w* \w+_V\w)\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
//'s_VBZ_VHZ published_VVN
var str = document.getElementById("MT").value;
var res = str.replace(/(\'s_VBZ)_VHZ (published_VVN)\s/ig, "$1 $2 ");
document.getElementById("MT").value = res;
//'s_VBZ_VHZ not_XX likely_JJ 
var str = document.getElementById("MT").value;
var res = str.replace(/(_VBZ)_VHZ (n.t_XX \w+_JJ)\s/ig, "$1 $2 ");
document.getElementById("MT").value = res;
//_VBZ_VHZ not_XX really_RR how_RRQ
var str = document.getElementById("MT").value;
var res = str.replace(/(_VBZ)_VHZ (\w+_XX \w+_R\w+ \w+_\w+Q\w*)\s/ig, "$1 $2 ");
document.getElementById("MT").value = res;
// ,_, posted_VVD_VVN 
var str = document.getElementById("MT").value;
var res = str.replace(/(\W+_\W+ \w+_VVD)_VVN\s/ig, "$1 ");
document.getElementById("MT").value = res;
//Some_DD jumped_VVD_VVN - capital 
var str = document.getElementById("MT").value;
var res = str.replace(/\b([A-Z]+[a-z]+_D\w* \w+_VVD)_VVN\s/g, "$1 ");
document.getElementById("MT").value = res;
//hard one, get_VVI married_JJ_VVD_VVN
var str = document.getElementById("MT").value;
var res = str.replace(/\b(get|gets|got|gotten)(_\w*) (\w+)_JJ_VVD(_VVN)\s/ig, "$1$2 $3$4 ");
document.getElementById("MT").value = res;
//without adjective tag
var str = document.getElementById("MT").value;
var res = str.replace(/\b(get|gets|got|gotten)(_\w*) (\w+)_VVD(_VVN)\s/ig, "$1$2 $3$4 ");
document.getElementById("MT").value = res;
//
var str = document.getElementById("MT").value;
var res = str.replace(/\b(MASSIVE|counterproductive|reproductive)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(MASSIVELY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(adventure|MASTER|ration)\s/ig, "$1_NN1_VV0 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(MATCH)\s/ig, "$1_NN1_VV0 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(alcohol|biology|MATERIAL|maths|transportation)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(MATERIALLY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(hotels|MATERIALS|organs|mice)\s/ig, "$1_NN2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(MAYBE)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
//
//
var str = document.getElementById("MT").value;
var res = str.replace(/\b(residing)\s/ig, "$1_VVG ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(MEANINGFUL|unchanged)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
//MEANS (NN_VVZ)
var str = document.getElementById("MT").value;
var res = str.replace(/\b(MEANs)\s/ig, "$1_NN_VVZ ");
document.getElementById("MT").value = res;
//a_AT1 highly_RR effective_JJ means_NN_VVZ
var str = document.getElementById("MT").value;
var res = str.replace(/(_A\w+ \w+_RR \w+_JJ \w+_NN)_VVZ\s/ig, "$1 ");
document.getElementById("MT").value = res;
//by_II any_DD means_NN_VVZ
var str = document.getElementById("MT").value;
var res = str.replace(/(_II \w+_DD \w+_NN)_VVZ\s/ig, "$1 ");
document.getElementById("MT").value = res;
//concept_NN1 of_IO academic_JJ careers_NN2 in_II academic_JJ communities_NN2 means_VVZ
var str = document.getElementById("MT").value;
var res = str.replace(/(_NN1 \w+_I\w+ \w+_J\w+ \w+N_\w+ \w+_I\w+ \w+_J\w+ \w+_N\w+ \w+)_NN(_VVZ )\s/ig, "$1$2 "); 
document.getElementById("MT").value = res;
//food_NN1 only_RR means_NN_VVZ
var str = document.getElementById("MT").value;
var res = str.replace(/(_N\w+ \w+_RR \w+)_NN(_VVZ)\s/ig, "$1$2 "); 
document.getElementById("MT").value = res;
//means_NN_VVZ something_PN1
var str = document.getElementById("MT").value;
var res = str.replace(/(\w+)_NN(_VVZ \w+_PN1)\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
//this it name
var str = document.getElementById("MT").value;
var res = str.replace(/\b(\w+_\w*1) (MEANs)_NN(_VVZ)\w*\s/ig, "$1 $2$3 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(MEANWHILE)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(MEASURE)\s/ig, "$1_NN1_VV0 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(MECHANICAL)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(MEDIA)\s/ig, "$1_NN ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(MEDICAL)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(MEDICALLY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(MEDICINE|soccer|baseball)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(bouncy|spicy|juicy|icy|MEDIEVAL)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(MEETS|warns)\s/ig, "$1_VVZ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(MEMBER)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(MEMBERS)\s/ig, "$1_NN2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(MEMORABLE)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(MEMORY|seafloor)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(MEN)\s/ig, "$1_NN2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(MENTAL|fearful)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(MENTALLY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(MENTION)\s/ig, "$1_NN1_VV0 ");
document.getElementById("MT").value = res;
//did_VDD not_XX even_RR mention_VV0
var str = document.getElementById("MT").value;
var res = str.replace(/(_XX \w+_RR \w+_VV)0\s/ig, "$1I ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(MENU|nicotine)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(MERE)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(MERELY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(MESSAGE)\s/ig, "$1_NN1_VV0 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(MESSAGES)\s/ig, "$1_NN2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(METAL)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(METHOD)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(METHODS)\s/ig, "$1_NN2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(METICULOUSLY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(MEXICAN)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(MICHAEL)\s/ig, "$1_NP1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(MICROSOFT)\s/ig, "$1_NP1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(MID)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(MILD)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(MILDLY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(kilomet[er][er]s|MILES|millimetres)\s/ig, "$1_NNU2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(MILK)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(MILLION)\s/ig, "$1_NNO ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(MINIMAL|trans)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(MINOR)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(MINUTES|afternoons)\s/ig, "$1_NNT2 ");
document.getElementById("MT").value = res;
//Miss// case insensitive
var str = document.getElementById("MT").value;
var res = str.replace(/(Miss|madam)\s/g, "$1_NNB ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(MISS)\s/ig, "$1_NN1_VV0 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(MISSION)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(MISTAKENLY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(MIXED)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(MODE)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(MODEL)\s/ig, "$1_NN1_VV0 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(movies)\s/ig, "$1_NN2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(MODERATE)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(MODERATELY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(MODERN)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(MOMENT)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(MONDAY)\s/ig, "$1_NPD1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(MONEY)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(MONTH)\s/ig, "$1_NNT1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(dawn)\s/ig, "$1_NNT1_VV0 ");
document.getElementById("MT").value = res;
//At_II dawn_NNT1_VV0
var str = document.getElementById("MT").value;
var res = str.replace(/(_II \w+_NNT1)_VV0\s/ig, "$1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(MONTHLY)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(MONTHS)\s/ig, "$1_NNT2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(MORAL|certain|large)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(MORALLY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
//1 comparative after-determiner (DAR) 2 comparative degree (RGR) 6 comparative general (RRR) LESS IS EXACTLY SAME
var str = document.getElementById("MT").value;
var res = str.replace(/\b(MORE|LESS)\s/ig, "$1_DAR_RGR_RRR ");
document.getElementById("MT").value = res;
//Fifty_MC million_NNO more_DAR_RGR_RRR will_VM
var str = document.getElementById("MT").value;
var res = str.replace(/(_N\w+ \w+_DAR)_RGR_RRR( \w+_V\w+)\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
//The_AT less_DAR_RGR_RRR you_PPY know_VV0 
var str = document.getElementById("MT").value;
var res = str.replace(/(_AT \w+)_DAR(_RGR)_RRR (\w+ \w+_V\w+)\s/ig, "$1$2 $3 ");
document.getElementById("MT").value = res;
//_DAR_RGR_RRR
var str = document.getElementById("MT").value;
var res = str.replace(/_DAR_RGR(_RRR ._.)\s/ig, "$1 ");
document.getElementById("MT").value = res;
//more_DAR and_CC more_RGR surprised_JJ
var str = document.getElementById("MT").value;
var res = str.replace(/_DAR_RGR(_RRR \w+_CC \w+_RGR)\s/ig, "$1 ");
document.getElementById("MT").value = res;
//or_CC more_RRR ._.
var str = document.getElementById("MT").value;
var res = str.replace(/(_CC \w+)_DAR_RGR(_RRR ._.)\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
//develop_VVI more_DAR_RGR_RRR and_CC
var str = document.getElementById("MT").value;
var res = str.replace(/(_VV\w* \w+_DAR)_RGR_RRR (\w+_CC)\s/ig, "$1 $2 ");
document.getElementById("MT").value = res;
//RRR if followed by prep but not OF
var str = document.getElementById("MT").value;
var res = str.replace(/\b(\w+)_DAR_RGR(_RRR \w+_I[A-NP-Z])\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(\w+_DAR)_RGR_RRR (\w+_(?:IO|NN\w*))\s/ig, "$1 $2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(MORE|less)_\w* (\w+_[JR]\w*)\s/ig, "$1_RGR $2 ");
document.getElementById("MT").value = res;
//it_PPH1 more_RRR than_CSN you_PPY
var str = document.getElementById("MT").value;
var res = str.replace(/\b(\w+_[PN]\w*) (MORE|less)\w* (than\w*) (\w+_[PN]\w*)\s/ig, "$1 $2_RRR $3 $4 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(MOREOVER)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(MORNING)\s/ig, "$1_NNT1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(MOSTLY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
//most_DAT_RGT widely_RR
var str = document.getElementById("MT").value;
var res = str.replace(/\b(\w+)_DAT(_RGT \w+_(?:RR|JJ))\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
//most_DAT_RGT giving_VVG
var str = document.getElementById("MT").value;
var res = str.replace(/_DAT_RGT (\w+_VVG)\s/ig, "_RRT $1 ");
document.getElementById("MT").value = res;
//
var str = document.getElementById("MT").value;
var res = str.replace(/\b(MOTHER|relief|recognition)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(MOTION|electricity)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(MOTOR)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(MOVEMENT)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(MOVIE|publicity|joy)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(MOVING)\s/ig, "$1_VVG ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(MR|president|Dr|sir)\s/ig, "$1_NNB ");
document.getElementById("MT").value = res;
//1 MUCH (DA1) 4843000 2 3 MUCH (RR) 2568351
var str = document.getElementById("MT").value;
var res = str.replace(/\b(MUCH)\s/ig, "$1_DA1_RR ");
document.getElementById("MT").value = res;
//They_PPHS2 are_VBR much_DA1_RR the_AT same_DA ._. He_PPHS1 is_VBZ much_DA1_RR like_II me_PPIO1 ._. Did_VDD it_PPH1 hurt_VVI much_DA1_RR ?_?  
var str = document.getElementById("MT").value;
var res = str.replace(/_DA1(_RR \w+_A\w+ \w+_D\w+)\s/ig, "$1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/_DA1(_RR \w+_I\w+)\s/ig, "$1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/_DA1(_RR ._.)\s/ig, "$1 ");
document.getElementById("MT").value = res;
//much_DA1_RR previously_RR
var str = document.getElementById("MT").value;
var res = str.replace(/_DA1(_RR \w+_RR)\s/ig, "$1 ");
document.getElementById("MT").value = res;
//so_RG much_DA1 is_VBZ
var str = document.getElementById("MT").value;
var res = str.replace(/(_RG \w+_DA1)_RR (\w+_V\w*)\s/ig, "$1 $2 ");
document.getElementById("MT").value = res;
//as_CSA_II_RG games_NN2 ._.
var str = document.getElementById("MT").value;
var res = str.replace(/_CSA(_II)_RG (\w+_N\w* ._.)\s/ig, "$1 $2 ");
document.getElementById("MT").value = res; 
//as_CSA_II_RG Mid-Autumn_NNT1 Festival_NP1 ,_,
var str = document.getElementById("MT").value;
var res = str.replace(/_CSA(_II)_RG (\w+-\w+_N\w* \w+_N\w+ ._.)\s/ig, "$1 $2 ");
document.getElementById("MT").value = res;
//as_RG much_DA1_RR as_CSA always da1
var str = document.getElementById("MT").value;
var res = str.replace(/\b(\w+_RG \w+_DA1)\w* (\w+_CSA)\w*\s/ig, "$1 $2 "); 
document.getElementById("MT").value = res; 
//as_CSA_II_RG much_DA1 space_NN1 as_II the house.
//as_RG much_DA1 space_NN1 as_CSA the las part is wrong in claws because it ends with a noun phrase.
var str = document.getElementById("MT").value;
var res = str.replace(/_CSA_II(_RG \w+_D\w+)\s/ig, "$1 ");
document.getElementById("MT").value = res; 
//as_CSA_II_RG a_AT1 child_NN1 and_CC
var str = document.getElementById("MT").value;
var res = str.replace(/_CSA(_II)_RG (\w+_A\w* \w+_N\w* \w+_C\w*)\s/ig, "$1 $2 ");
document.getElementById("MT").value = res;
//as_CSA_II_RG a_AT1 national_JJ project_NN1 with_IW
var str = document.getElementById("MT").value;
var res = str.replace(/_CSA(_II)_RG (\w+_A\w* \w+_J\w* \w+_N\w* \w+_I\w*)\s/ig, "$1 $2 ");
document.getElementById("MT").value = res;
//as_CSA_II_RG diverse_JJ as_CSA_II_RG ours_PPGE
var str = document.getElementById("MT").value;
var res = str.replace(/_CSA_II(_RG \w+_JJ\w*)\s/ig, "$1 ");
document.getElementById("MT").value = res;
// diverse_JJ as_CSA_II_RG ours_PPGE
var str = document.getElementById("MT").value;
var res = str.replace(/(_JJ\w* \w+_CSA)_II_RG (\w+_P\w*)\s/ig, "$1 $2 ");
document.getElementById("MT").value = res;
//much_DA1_RR tougher_JJR (clearer as RR)////much_DA1_RR more_RGR never DA1
var str = document.getElementById("MT").value;
var res = str.replace(/\b(\w+)_DA1(_RR) (\w+_(?:JJR|RGR)\w*)\s/ig, "$1$2 $3 ");
document.getElementById("MT").value = res;
//so_RG much_DA1_RR experience_NN1_VV0 - should be noun.
var str = document.getElementById("MT").value;
var res = str.replace(/\b(\w+_RG) (\w+)(_DA1)_RR (\w+)(_NN1)_VV0\s/ig, "$1 $2$3 $4$5 ");
document.getElementById("MT").value = res;
//so_RG much_DA1_RR
var str = document.getElementById("MT").value;
var res = str.replace(/(_RG \w+_DA1)_RR\s/ig, "$1 ");
document.getElementById("MT").value = res;
//one_PN1 you_PPY love_NN1_VV0 ._. pronoun + verb
var str = document.getElementById("MT").value;
var res = str.replace(/\b(\w+_P\w* \w+_P\w* \w+)_NN1(_VV0)\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
//so_RG much_DA1_RR experience_VV0 (drive me crazy!!!!!!)
var str = document.getElementById("MT").value;
var res = str.replace(/\b(\w+_RG) (\w+)(_DA1)_RR (\w+)_VV0/ig, "$1 $2$3 $4_NN1 ");
document.getElementById("MT").value = res;
//much_DA1_RR experience_NN1
var str = document.getElementById("MT").value;
var res = str.replace(/\b(\w+)(_DA1)_RR (\w+_NN1)\s/ig, "$1$2 $3 ");
document.getElementById("MT").value = res;
//
var str = document.getElementById("MT").value;
var res = str.replace(/\b(MUNICIPAL)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(buffet|MUSEUM)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(MUSIC)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(MUSICAL)\s/ig, "$1_JJ_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(MUSLIM)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(MUTUAL)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(MUTUALLY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(MY)\s/ig, "$1_APPGE ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(MYSELF)\s/ig, "$1_PPX1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(MYSTERIOUS)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(N'T)\s/ig, "$1_XX ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(NAKED)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(NAME)\s/ig, "$1_NN1_VV0 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(NAMED)\s/ig, "$1_VVN ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(NAMELY)\s/ig, "$1_REX ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(NAMES|detectives|trends)\s/ig, "$1_NN2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(NARROW)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(NARROWLY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(NASTY|actual)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(NATION|cauliflower)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(NATIONAL)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(NATIONALLY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(NATIONWIDE)\s/ig, "$1_RL ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(NATIVE)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(NATURAL)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(NATURALLY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(NATURE)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
//1 NEAR (II) 1173513 4 NEAR (RL) 87096 12 NEAR (VVI) 18064 17 NEAR (JJ) 8170 21 NEAR (RR) 5765 
var str = document.getElementById("MT").value;
var res = str.replace(/\b(NEAR)\s/ig, "$1_II_JJ_RL_RR_VV0 ");
document.getElementById("MT").value = res;
//come_VV0 near_II the_AT
var str = document.getElementById("MT").value;
var res = str.replace(/(_VV\w+ \w+_II)_JJ_RL_RR_VV0( \w+_A\w+)\s/ig, "$1$2 ");//I have no idea why but this is from claws7
document.getElementById("MT").value = res;
//went_VVD near_II_JJ_RL_RR_VV0 it_PPH1
var str = document.getElementById("MT").value;
var res = str.replace(/(_VV\w+ \w+_)II_JJ_(RL)_RR_VV0( \w+_[NP]\w+)\s/ig, "$1$2$3 ");
document.getElementById("MT").value = res;
// is_VBZ an_AT1 area_NN1 near_II_JJ_RL_RR_VV0 me_PPIO1
var str = document.getElementById("MT").value;
var res = str.replace(/(_V\w+ \w+_A\w+ \w+_NN1 \w+_II)_JJ_RL_RR_VV0 (\w+_[AJNP]\w+)\s/ig, "$1 $2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/(_A\w+ \w+)_II(_JJ)_RL_RR_VV0\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
//stated_VVN above_II_JJ_RL ,_,
var str = document.getElementById("MT").value;
var res = str.replace(/(_VV\w+ \w+)_II_JJ(_RL ._.)\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/(_RL \w+_II)_JJ_RL_RR_VV0\s/ig, "$1 ");
document.getElementById("MT").value = res;
//near_II_JJ_RL_RR fire_NN1
var str = document.getElementById("MT").value;
var res = str.replace(/(_II)_JJ_RL_RR (\w+_N\w+)\s/ig, "$1 $2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(NEARLY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(NEAT)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(NEATLY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(NECESSARILY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(NECESSARY)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(NEGATIVE)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(NEGATIVELY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
//DD1_RR
var str = document.getElementById("MT").value;
var res = str.replace(/\b(n?either)\s/ig, "$1_DD1_RR ");
document.getElementById("MT").value = res;
//NEITHER_DD1 \w+_(IO|NN|VM)\w* NEITHER_RR \w+_(A|II|J|VD|VH|R)\w* //Neither_DD1_RR is_VBZ easy_JJ
var str = document.getElementById("MT").value;
var res = str.replace(/(_DD1)_RR (\w+_(?:IO|NN|VM|VB)\w*)\s/ig, "$1 $2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/_DD1(_RR \w+_(?:A|II|J|VD|VH|R)\w*)\s/ig, "$1 ");
document.getElementById("MT").value = res;
//can_VM neither_DD1_RR confirm_VVI //can_VM be_VBI neither_DD1_RR created_VVN
var str = document.getElementById("MT").value;
var res = str.replace(/(_VM[\w\s]*\w+)_DD1(_RR \w+_V\w[IN]\w*)\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
//that_DD1 way_NN1_RR
var str = document.getElementById("MT").value;
var res = str.replace(/(_DD1 \w+_NN1)_RR\s/ig, "$1 ");
document.getElementById("MT").value = res;
//one_MC1 way_NN1_RR
var str = document.getElementById("MT").value;
var res = str.replace(/(_M\w+ \w+_NN1)_RR\s/ig, "$1 ");
document.getElementById("MT").value = res;
//a_AT1 unique_JJ way_NN1_RR
var str = document.getElementById("MT").value;
var res = str.replace(/(_A\w+ \w+_JJ\w* \w+_NN1)_RR\s/ig, "$1 ");
document.getElementById("MT").value = res;
//way_NN1_RR ,_,
var str = document.getElementById("MT").value;
var res = str.replace(/(_NN1)_RR (._.)\s/ig, "$1 $2 ");
document.getElementById("MT").value = res;
//
var str = document.getElementById("MT").value;
var res = str.replace(/\b(NERVOUS)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(needle|NETWORK|existence|investigation)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(NEUTRAL)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(NEVER)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(NEVERTHELESS)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(NEW)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(NEWER)\s/ig, "$1_JJR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(NEWEST)\s/ig, "$1_JJT ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(NEWLY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(NEWS|employer|negligence|virus)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(NEXT|1st|2nd|3rd)\s/ig, "$1_MD ");
document.getElementById("MT").value = res;
//ieth
var str = document.getElementById("MT").value;
var res = str.replace(/\b(\w+ieth)\s/ig, "$1_MD ");
document.getElementById("MT").value = res;
//  1ST (MD)
var str = document.getElementById("MT").value;
var res = str.replace(/\b(\dTH)\s/ig, "$1_MD ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(NICELY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(NIGHT)\s/ig, "$1_NNT1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(NOW)\s/ig, "$1_RT ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/(by_)I\w+ (NOW_RT)\s/ig, "$1RT21 $222 ");
document.getElementById("MT").value = res;
//can_VM now_RT use_VV0
var str = document.getElementById("MT").value;
var res = str.replace(/(_VM \w+_R\w+ \w+_VV)0\s/ig, "$1I ");
document.getElementById("MT").value = res;
//now_CS21 that_CS22
var str = document.getElementById("MT").value;
var res = str.replace(/\b(NOW)\w* (that)\w*\s/ig, "$1_CS21 $2_CS22 ");
document.getElementById("MT").value = res;
//1		  NO (AT)	13137044	2		  NO (UH)	1428572	3		  NO (RR21)	1170031	4		  NO (AT_UH)	1036291	5		  NO (PN121)	881535
var str = document.getElementById("MT").value;
var res = str.replace(/\b(NO)\s/ig, "$1_AT ");
document.getElementById("MT").value = res;
//looking at the rarity it is easier to just convert cases.
var str = document.getElementById("MT").value;
var res = str.replace(/\b(NO_)AT (._.)\s/ig, "$1UH $2 ");
document.getElementById("MT").value = res;
//
var str = document.getElementById("MT").value;
var res = str.replace(/\b(ONE)\s/ig, "$1_MC1_PN1 ");
document.getElementById("MT").value = res;
//choose_VVI one_MC1_PN1 ._.
var str = document.getElementById("MT").value;
var res = str.replace(/_MC1(_PN1 ._.)\s/ig, "$1 ");
document.getElementById("MT").value = res;
//one_MC1 in_II four_MC
var str = document.getElementById("MT").value;
var res = str.replace(/(_MC1)_PN1 (\w+_I\w+ \w+_MC\w*)\s/ig, "$1 $2 ");
document.getElementById("MT").value = res;
//one_MC1_PN1 's
var str = document.getElementById("MT").value;
var res = str.replace(/_MC1(_PN1 \'s)\s/ig, "$1_GE ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/(_MC\w* \w+_MC1)_PN1\s/ig, "$1 ");
document.getElementById("MT").value = res;
//species_NN ' 
var str = document.getElementById("MT").value;
var res = str.replace(/(_NN ')\s/ig, "$1_GE "); 
document.getElementById("MT").value = res;
//car_NN1 's playing_VVG
var str = document.getElementById("MT").value;
var res = str.replace(/(_NN1 's) (\w+_VVG)\s/ig, "$1_VBZ $2 "); 
document.getElementById("MT").value = res;
//one_MC1_PN1 's best
var str = document.getElementById("MT").value;
var res = str.replace(/_MC1(_PN1 \'s) (\w+_JJT)_RRT\s/ig, "$1_GE $2 ");
document.getElementById("MT").value = res;
//_MC1_PN1 's_VBZ best_JJT_RRT //too hard to catch.
var str = document.getElementById("MT").value;
var res = str.replace(/_MC1(_PN1 \'s_)VBZ (\w+_JJT)\w*\s/ig, "$1GE $2 ");
document.getElementById("MT").value = res;
//other_NN1 one_MC1_PN1
var str = document.getElementById("MT").value;
var res = str.replace(/(other_)NN1 (one)_MC1(_PN1)\s/ig, "$1JJ $2$3 ");
document.getElementById("MT").value = res;
//one_MC1_PN1 's_GE
var str = document.getElementById("MT").value;
var res = str.replace(/_MC1(_PN1 's_GE)\s/ig, "$1 ");
document.getElementById("MT").value = res;
// another_DD1 one_MC1_PN1 ._.
var str = document.getElementById("MT").value;
var res = str.replace(/(_D\w+ \w+)_MC1(_PN1 ._.)\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
//One_MC1_PN1 day_NNT1
var str = document.getElementById("MT").value;
var res = str.replace(/(_MC1)_PN1 (\w+_N\w*)\s/ig, "$1 $2 ");
document.getElementById("MT").value = res;
//one_MC1_PN1 of
var str = document.getElementById("MT").value;
var res = str.replace(/(_MC1)_PN1 (\w+_IO)\s/ig, "$1 $2 ");
document.getElementById("MT").value = res;
//
var str = document.getElementById("MT").value;
var res = str.replace(/_MC1(_PN1) (\w+_[^JN]\w*)\s/ig, "$1 $2 ");
document.getElementById("MT").value = res;
//loved one
var str = document.getElementById("MT").value;
var res = str.replace(/(_[AJ]\w+ \w+)_MC1(_PN1)\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
//No_PN121 one_PN1 - this has to later...
var str = document.getElementById("MT").value;
var res = str.replace(/\b(NO)_\w* (ONE)_\w*\s/ig, "$1_PN121 $2_PN122 ");
document.getElementById("MT").value = res;
//one_PPX121 another_PPX122
var str = document.getElementById("MT").value;
var res = str.replace(/\b(one)_\w* (another)_\w*\s/ig, "$1_PPX121 $2_PPX122 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(NON-PROFIT|paranoid)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(NONETHELESS)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(NONPROFIT)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(NORMAL)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(NORMALLY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(NORTH|south)\s/ig, "$1_ND1 "); 
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(NORTHERN)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(NOT)\s/ig, "$1_XX ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(NOTABLE)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(NOTABLY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(NOTHING)\s/ig, "$1_PN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(NOTICEABLY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(NOTORIOUSLY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(NOVEMBER)\s/ig, "$1_NPM1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(NOWADAYS)\s/ig, "$1_RT ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(NOWHERE)\s/ig, "$1_RL ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(NUCLEAR)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(NUMBER|check|snowboard)\s/ig, "$1_NN1_VV0 ");
document.getElementById("MT").value = res;
//Do_VD0 check_NN1 ._.
var str = document.getElementById("MT").value;
var res = str.replace(/(_VD0 \w+)_NN1_VV0\s/ig, "$1_VVI ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(mountains|NUMBERS)\s/ig, "$1_NN2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(NUMEROUS)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(O'CLOCK)\s/ig, "$1_RA ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(OBJECT)\s/ig, "$1_NN1_VV0 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(OBJECTIVES)\s/ig, "$1_NN2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(OBTAIN)\s/ig, "$1_VVI ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(OBTAINED)\s/ig, "$1_VVN ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(OBVIOUS)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(OBVIOUSLY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(OCCASIONAL)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(OCCASIONALLY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(OCCUR)\s/ig, "$1_VVI ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(OCCURS)\s/ig, "$1_VVZ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(OCTOBER)\s/ig, "$1_NPM1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(ODD)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(ODDLY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
//
var str = document.getElementById("MT").value;
var res = str.replace(/\b(unlike)\s/ig, "$1_II_JJ ");
document.getElementById("MT").value = res;
//Unlike_II_JJ the_AT 
//Unlike_II_JJ some_DD
var str = document.getElementById("MT").value;
var res = str.replace(/(_II)_JJ (\w+_[AD]\w+)\s/ig, "$1 $2 ");
document.getElementById("MT").value = res;
//the_AT following_II_JJ
var str = document.getElementById("MT").value;
var res = str.replace(/(_A\w+ \w+)_II(_JJ)\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
//II_JJ_RP
var str = document.getElementById("MT").value;
var res = str.replace(/\b(OFF)\s/ig, "$1_II_JJ_RP ");
document.getElementById("MT").value = res;
//give_VVI back_JJ_RP
var str = document.getElementById("MT").value;
var res = str.replace(/(_V\w+ \w+)_JJ(_RP)\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
//somewhere_RL back_JJ_NN1_RP_VV0 in_II 
var str = document.getElementById("MT").value;
var res = str.replace(/(_RL \w+)_JJ_NN1(_RP)_VV0 (\w+_II)\s/ig, "$1$2 $3 ");
document.getElementById("MT").value = res;
// pull_VVI the_AT top_NN1 off_II_JJ_RP
var str = document.getElementById("MT").value;
var res = str.replace(/(_V\w* \w+_[AIJ]\w* \w+_N\w* \w+)_II_JJ(_RP)\s/ig, "$1$2 "); 
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/(_II)_JJ_RP (\w+_P\w*)\s/ig, "$1 $2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/_II(_JJ)_RP (\w+_N\w*)\s/ig, "$1 $2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/_II_JJ(_RP \w+_[CI]\w*)\s/ig, "$1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/_II_JJ(_RP \W+_\W+)\s/ig, "$1 ");
document.getElementById("MT").value = res;
//
var str = document.getElementById("MT").value;
var res = str.replace(/\b(OFFENSIVE)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/(name|OFFER)\s/ig, "$1_NN1_VV0 "); 
document.getElementById("MT").value = res;
//to name
var str = document.getElementById("MT").value;
var res = str.replace(/\b(to)_II (name)_NN1\s/ig, "$1_TO $2_VVI "); 
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(OFFERs)\s/ig, "$1_NN2_VVZ ");
document.getElementById("MT").value = res;
//two_MC quotes_NN2_VVZ
var str = document.getElementById("MT").value;
var res = str.replace(/(\w+_MC\w* \w+_NN2)_VVZ\s/ig, "$1 ");
document.getElementById("MT").value = res;
//games_NN2 and_CC entertainment_NN1 offers_VVZ
var str = document.getElementById("MT").value;
var res = str.replace(/(_N\w+ and_CC \w+_N\w+ \w+_NN2)_VVZ\s/ig, "$1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(cheated|meant|OFFERED)\s/ig, "$1_VVD_VVN "); 
document.getElementById("MT").value = res;
//Have_VH0 you_PPY ever_RR cheated_VVD
var str = document.getElementById("MT").value;
var res = str.replace(/(_VH\w+ \w+_[NDP]\w+ \w+_R\w+ \w+)_VVD(_VVN)\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(exaggerating|identifying|OFFERING|[fs]ucking|toking)\s/ig, "$1_VVG ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(nightmare|OFFICE|bong|\w+erty|smoker|SNOWSTORM)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(OFFICER)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(OFFICERS)\s/ig, "$1_NN2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(OFFICIALLY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(OFFICIALS)\s/ig, "$1_NN2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(OFTEN)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(OFTENTIMES)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(OIL)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(OLD|seasoned|flavou?rful)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(OLDEST)\s/ig, "$1_JJT ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(OLYMPIC)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(OUT)_\w* (of)_\w*\s/ig, "$1_II21 $2_II22 ");
document.getElementById("MT").value = res; 
//I would like to do it sooner rather than later. NOT A PREPOSITION.
var str = document.getElementById("MT").value;
var res = str.replace(/\b(rather)_\w* (than)_\w* (\w+_[^R]\w+)\s/ig, "$1_II21 $2_II22 $3 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(rather)_\w* (than)_\w* (\w+_R\w+)\s/ig, "$1_C221 $2_C222 $3 ");
document.getElementById("MT").value = res;
//rather_RG_RR a_AT1
var str = document.getElementById("MT").value;
var res = str.replace(/(_RG)_RR (\w+_[JA]\w*)\s/ig, "$1 $2 ");
document.getElementById("MT").value = res;
//would_VM rather_RG_RR that_CST_DD1 did_VDD
var str = document.getElementById("MT").value;
var res = str.replace(/_RG(_RR that)_CST(_DD1 \w+_V\w+)\s/ig, "$1$2 "); 
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(ON|OFF|UP|OUT)\s/ig, "$1_RP ");//why \/
document.getElementById("MT").value = res;
//down can be a noun and a verb too - but rarer
var str = document.getElementById("MT").value;
var res = str.replace(/\b(down)\s/ig, "$1_II_JJ_RP ");
document.getElementById("MT").value = res;
//in_II a_AT1 healthy_JJ way_NN1 down_II_JJ_RP the_AT road_NN1
var str = document.getElementById("MT").value;
var res = str.replace(/(_N\w+ \w+_II)_JJ_RP (\w+_A\w+)\s/ig, "$1 $2 ");
document.getElementById("MT").value = res;
//the_AT down_JJ direction_NN1
var str = document.getElementById("MT").value;
var res = str.replace(/(_A\w+ \w+)_II(_JJ)_RP (\w+_NN\w*)\s/ig, "$1$2 $3 ");
document.getElementById("MT").value = res;
//JJ_NN1_RL //added II very late....
var str = document.getElementById("MT").value;
var res = str.replace(/\b(Outside)\s/ig, "$1_II_JJ_NN1_RL ");
document.getElementById("MT").value = res;
//get_VVI outside_JJ_NN1_RL risky
var str = document.getElementById("MT").value;
var res = str.replace(/(_V\w* \w+)_JJ_NN1(_RL)\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
//female_JJ_NN1 reproductive_JJ organs_NN2
var str = document.getElementById("MT").value;
var res = str.replace(/(_JJ)_NN1 (\w+_JJ \w+_NN2)\s/ig, "$1 $2 ");
document.getElementById("MT").value = res;
//'s_GE manual_JJ_NN1 for_IF
var str = document.getElementById("MT").value;
var res = str.replace(/(_GE \w+)_JJ(_NN1 \w+_I\w+)\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
//
var str = document.getElementById("MT").value;
var res = str.replace(/\b(ONES)\s/ig, "$1_NN2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(ONGOING|rainy)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
//ADJECTIVE OR ADVERB
var str = document.getElementById("MT").value;
var res = str.replace(/\b(early|just|ONLINE|STILL|ready)\s/ig, "$1_JJ_RR ");
document.getElementById("MT").value = res;
//was_VBDZ just_JJ on_II the point// was just off the top of my head.
var str = document.getElementById("MT").value;
var res = str.replace(/(_VB\w+ just)_JJ(_RR \w+_II)\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
//still_JJ fast_RR asleep_JJ ._. //too hard to make work.
var str = document.getElementById("MT").value;
var res = str.replace(/(still_)JJ( fast_RR asleep_JJ)\s/ig, "$1RR$2 ");
document.getElementById("MT").value = res;
//it is just to let you know.  this is too hard to decide.
var str = document.getElementById("MT").value;
var res = str.replace(/(just)_JJ(_RR) (\w+_TO)\s/ig, "$1$2 $3 ");
document.getElementById("MT").value = res;
//impossible to get right: still working hard
var str = document.getElementById("MT").value;
var res = str.replace(/(still)_\w+ (working)_\w+ (hard)_\w+\s/ig, "$1_RR $2_VVG $3_RR ");  
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/(still)_JJ(_RR really\w+)\s/ig, "$1$2 ");  
document.getElementById("MT").value = res;
//is_VBZ n't_XX anywhere_RL near_II ready_JJ
var str = document.getElementById("MT").value;
var res = str.replace(/(_VB\w+ [\'\w\s]+ ready_JJ)_RR\s/ig, "$1 "); 
document.getElementById("MT").value = res;
//risky!!!
var str = document.getElementById("MT").value;
var res = str.replace(/_JJ(_RR \w+_A[\w\s]+._.)\s/ig, "$1 "); 
document.getElementById("MT").value = res;
//ready meals
var str = document.getElementById("MT").value;
var res = str.replace(/(_JJ)_RR (\w+_NN\w*)\s/ig, "$1 $2 ");
document.getElementById("MT").value = res;
//only_JJ_RR some_DD
var str = document.getElementById("MT").value;
var res = str.replace(/_JJ(_RR \w+_D\w+)\s/ig, "$1 ");
document.getElementById("MT").value = res;
//can't have adjective after modal = can_VM still_JJ_RR
var str = document.getElementById("MT").value;
var res = str.replace(/\b(\w+_VM) (\w+)_JJ(_RR)\s/ig, "$1 $2$3 ");
document.getElementById("MT").value = res;
//_JJ_RR love_VV0
var str = document.getElementById("MT").value;
var res = str.replace(/_JJ(_RR \w+_V\w*)\s/ig, "$1 ");
document.getElementById("MT").value = res;
//is_VBZ likely_JJ_RR THIS IS TOO GENERAL CLASHING!!!
var str = document.getElementById("MT").value;
var res = str.replace(/\b(\w+_VB\w* \w+_JJ)_RR ([\w\s]*\W+_\W+)\s/ig, "$1 $2 ");
document.getElementById("MT").value = res;
//infinitve after adverb and modal - can_VM still_RR see_VV0
var str = document.getElementById("MT").value;
var res = str.replace(/\b(\w+_VM) (\w+_RR) (\w+_V\w)0\s/ig, "$1 $2 $3I ");
document.getElementById("MT").value = res;
//correcting singular noun befor singular verb = debris_NN2 was_VBDZ -MASSIVE PROBLEM HERE!!!! The_AT use_NN1 of_IO fingerprints_NN1 does_VDZ 
//var str = document.getElementById("MT").value;
//var res = str.replace(/\b(\w+_NN)2 (\w+_V\w*Z)\s/ig, "$11 $2 ");
//document.getElementById("MT").value = res;
//
var str = document.getElementById("MT").value;
var res = str.replace(/\b(ONWARDs?)\s/ig, "$1_RL ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(OPENING|bragging)\s/ig, "$1_VVG ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(OPENLY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(OPENS)\s/ig, "$1_VVZ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(OPERATE)\s/ig, "$1_VVI ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(goodbye|grandma|lady|OPERATION|sphere)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(false|hilarious|insane|OPERATIONAL|optimistic|VACANT)\s/ig, "$1_JJ "); 
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(OPERATIONS)\s/ig, "$1_NN2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(OPINION)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(OPPORTUNITIES)\s/ig, "$1_NN2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(OPPORTUNITY)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(OPPOSITE)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(OPTICAL)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(OPTIMAL)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(OPTION|GDP)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(OPTIONAL)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(OPTIONS)\s/ig, "$1_NN2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(OR)\s/ig, "$1_CC ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(ORALLY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(ORDINARILY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(ORDINARY)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(ORGANIC)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(ORGANIZATION)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(ORGANIZATIONAL)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(ORGANIZATIONS)\s/ig, "$1_NN2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(ORIGINALLY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(OTHERS)\s/ig, "$1_NN2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(OTHERWISE)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(OUght)\s/ig, "$1_VMK ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(OUR)\s/ig, "$1_APPGE ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(OUTDOOR)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(OUTER)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(OUTPUT)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(OUTSTANDING)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
//preposition adverb of degree adverb particle 
var str = document.getElementById("MT").value;
var res = str.replace(/\b(OVER)\s/ig, "$1_II_RG_RP ");//1 OVER (II) 5556774 3 OVER (RG) 2900750 4 OVER (RP) 2142008 ../over/
document.getElementById("MT").value = res;
//was_VBDZ all_RR21 but_RR22 over_II_RG_RP
var str = document.getElementById("MT").value;
var res = str.replace(/(_V\w+ \w+_R\w+ \w+_R\w+ \w+)_II_RG(_RP)\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
//over_II_RG_RP there_RL //is_VBZ over_II_RG_RP ._. 
var str = document.getElementById("MT").value;
var res = str.replace(/_II_RG(_RP) (\w+_R\w*|._.)\s/ig, "$1 $2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(\w+)_II(_RG)_RP (\w+_MC)\s/ig, "$1$2 $3 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(\w+_VB\w*) (\w+)(_II)_RG_RP (\w+_[^M])\s/ig, "$1 $2$3 $4 ");
document.getElementById("MT").value = res;
//
var str = document.getElementById("MT").value;
var res = str.replace(/\b(OVERall)\s/ig, "$1_NN1_JJ_RR ");
document.getElementById("MT").value = res;
//Overall_NN1_JJ_RR ,_, I_PPIS1
var str = document.getElementById("MT").value;
var res = str.replace(/([A-Z]\w+)_NN1_JJ(_RR ,_,)\s/g, "$1$2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(OVERLY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(OVERWHELMING|overweight)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(OVERWHELMINGLY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
//1		  OWN (DA)	7276042	2		  OWN (VV0@)	286010	3		  OWN (VVI)
var str = document.getElementById("MT").value;
var res = str.replace(/\b(OWN)\s/ig, "$1_DA_VV0 ");
document.getElementById("MT").value = res;
//own_DA_NN1 way_NN1
var str = document.getElementById("MT").value;
var res = str.replace(/(_[PA]\w+ \w+_DA)_\w+ (\w+_N\w+)\s/ig, "$1 $2 ");
document.getElementById("MT").value = res;
//_XX own_DA_VVI 
var str = document.getElementById("MT").value;
var res = str.replace(/(_XX \w+_DA_VV)[0I]\s/ig, "$1I "); 
document.getElementById("MT").value = res;
//own_DA_VV0 a_AT1
var str = document.getElementById("MT").value;
var res = str.replace(/_DA(_VV0 \w+_A\w+)\s/ig, "$1 ");
document.getElementById("MT").value = res;
//our_APPGE own_DA_VV0 
var str = document.getElementById("MT").value;
var res = str.replace(/(_APPGE \w+_DA)_VV\w*\s/ig, "$1 ");
document.getElementById("MT").value = res;
//her_PPHO1 own_DA_VV0 accord_NN1
var str = document.getElementById("MT").value;
var res = str.replace(/(_PPH\w+ \w+_DA)_VV\w*\s/ig, "$1 ");
document.getElementById("MT").value = res;
//
var str = document.getElementById("MT").value;
var res = str.replace(/\b(OWNED)\s/ig, "$1_VVD_VVN ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(OWNER)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(OWNERS)\s/ig, "$1_NN2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(pm)\s/ig, "$1_RA "); 
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(PACKAGE)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(PAGE)\s/ig, "$1_NN1_VV0 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(PAGES)\s/ig, "$1_NN2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value; 
var res = str.replace(/\b(bonus|PAIN|tongue)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(PAINFUL)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(PAINFULLY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(PAIR)\s/ig, "$1_NN ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(PANEL)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(PAPER)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(PARENT)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(PARENTS)\s/ig, "$1_NN2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(PARK)\s/ig, "$1_NN1_VV0 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(PARTIAL)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(PARTIALLY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(PARTICIPANTS)\s/ig, "$1_NN2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(PARTICIPATE)\s/ig, "$1_VVI ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(PARTICULARLY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(PARTIES)\s/ig, "$1_NN2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(PARTLY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(PARTNER)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(PARTNERS)\s/ig, "$1_NN2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(PARTS)\s/ig, "$1_NN2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(PARTY|arc)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(PASS)\s/ig, "$1_VV0 ");
document.getElementById("MT").value = res;
//II JJ NN1 RL RT
var str = document.getElementById("MT").value;
var res = str.replace(/\b(PASt)\s/ig, "$1_II_JJ_NN1_RL_RT ");
document.getElementById("MT").value = res;
//the_AT past_II_NN1_RL_RT few_DA2 months_NN2 ._. 
var str = document.getElementById("MT").value;
var res = str.replace(/(_A\w+ \w+)_II(_JJ)_NN1_RL_RT (\w+_[DN]\w+)\s/ig, "$1$2 $3 ");
document.getElementById("MT").value = res;
//the_AT past_II_NN1_RL_RT have.//the_AT past_II_NN1_RL_RT ,_, 
var str = document.getElementById("MT").value;
var res = str.replace(/(_A\w+ \w+)_II_JJ(_NN1)_RL_RT (\w+_V\w+|._.)\s/ig, "$1$2 $3 ");
document.getElementById("MT").value = res;
//somewhere_RL safe_JJ_NN1 to_TO
var str = document.getElementById("MT").value;
var res = str.replace(/(_RL \w+_JJ)_NN1 (to_TO)\s/ig, "$1 $2 ");
document.getElementById("MT").value = res;
//past_II_JJ_NN1_RL_RT Greenock_NP1
var str = document.getElementById("MT").value;
var res = str.replace(/(_II)_JJ_NN1_RL_RT (\w+_NP\w*)\s/ig, "$1 $2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/_II(_JJ)_NN1_RL_RT (\w+_NN\w*)\s/ig, "$1 $2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(PASSED)\s/ig, "$1_VVD_VVN ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(PASSIONATE|windswept)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(PASSIVE|GREYISH)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(PATH)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(PATIENTLY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(PATIENTS)\s/ig, "$1_NN2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(PATTERN)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(PAUL)\s/ig, "$1_NP1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(PAYING)\s/ig, "$1_VVG ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(PAYMENT)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(PAYMENTS)\s/ig, "$1_NN2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(PEACE)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(PEACEFUL)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(PEACEFULLY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(PEOPLE)\s/ig, "$1_NN ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(PEOPLEs)\s/ig, "$1_NN2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(PERCENT)\s/ig, "$1_NNU ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(PERFECT)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(PERFECTLY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(PERFORMANCE)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(PERFORMED)\s/ig, "$1_VVN ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(PERHAPS)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
//So_CS_RG perhaps_RR
var str = document.getElementById("MT").value;
var res = str.replace(/(_CS)_RG (\w+s_RR)\s/ig, "$1 $2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(PERIOD)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(PERIODICALLY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(PERMANENT)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(PERMANENTLY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(PERSON)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(PERSONAL)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(PERSONALLY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(PETER)\s/ig, "$1_NP1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(PHONE)\s/ig, "$1_NN1_VV0 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(PHOTO)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(PHOTOS)\s/ig, "$1_NN2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(PHYSICAL)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(PHYSICALLY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(PICKING)\s/ig, "$1_VVG ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(PICTURE)\s/ig, "$1_NN1_VV0 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(PICTURES)\s/ig, "$1_NN2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(PIECE)\s/ig, "$1_NN1_VV0 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(PIECES)\s/ig, "$1_NN2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(PINK)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(PLACED)\s/ig, "$1_VVN ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(PLACES)\s/ig, "$1_NN2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(PLAINLY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(PLANS)\s/ig, "$1_NN2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(PLANT)\s/ig, "$1_NN1_VV0 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(PLANTS)\s/ig, "$1_NN2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(PLASTIC)\s/ig, "$1_JJ_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(PLATFORM|dealer)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(PLAYER)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(PLAYERS)\s/ig, "$1_NN2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(PLAYING)\s/ig, "$1_VVG ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(PLAYS)\s/ig, "$1_VVZ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(PLEASANT)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(PLEASANTLY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
//
var str = document.getElementById("MT").value;
var res = str.replace(/\b(PLEASE)\s/ig, "$1_RR_VV0 ");
document.getElementById("MT").value = res;
//,_, please_RR_VV0 ?_?
var str = document.getElementById("MT").value;
var res = str.replace(/(._. \w+_RR)_V\w+( ._.)\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
//please_RR_VVI listen_VV0
var str = document.getElementById("MT").value;
var res = str.replace(/(_RR)_VVI (\w+_VV0)\s/ig, "$1 $2 ");
document.getElementById("MT").value = res;
//will_VM you_PPY please_RR_VV0 forgive_VV0//please_RR_VVI just_RR stop_VV0 
var str = document.getElementById("MT").value;
var res = str.replace(/(_RR)_VVI (\w+_RR \w+_VV0)\s/ig, "$1 $2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/(_VM\w* \w+_[NP]\w* \w+_RR)_VV[0I] (\w+_VV)[0I]\s/ig, "$1 $2I ");
document.getElementById("MT").value = res;
//Please_RR_VV0 come_VV0
var str = document.getElementById("MT").value;
var res = str.replace(/(_RR)_VV0 (\w+_VV0)\s/ig, "$1 $2 ");
document.getElementById("MT").value = res;
// they_PPHS2 please_RR_VV0
var str = document.getElementById("MT").value;
var res = str.replace(/(_P\w+ \w+)_RR(_VV0 ._.)\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
//
var str = document.getElementById("MT").value;
var res = str.replace(/\b(PLEASED)\s/ig, "$1_JJ_VVD_VVN ");
document.getElementById("MT").value = res;
//II_NN1_RL
var str = document.getElementById("MT").value;
var res = str.replace(/\b(behind)\s/ig, "$1_II_NN1_RL ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/(_I\w+ \w+)_II_NN1(_RL)\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
//leave_VVI something_PN1 behind_II_NN1_RL ._. 
var str = document.getElementById("MT").value;
var res = str.replace(/(_P\w+ \w+)_II_NN1(_RL ._.)\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
//_II_NN1_RL 
var str = document.getElementById("MT").value;
var res = str.replace(/(_II)_NN1_RL( \w+_[PNDJ]\w+)\s/ig, "$1$2 "); 
document.getElementById("MT").value = res;
//
var str = document.getElementById("MT").value;
var res = str.replace(/\b(PLUS)\s/ig, "$1_CC_II_NN1_RR ");
document.getElementById("MT").value = res;
//four_MC bedrooms_NN2 plus_CC_II_NN1
var str = document.getElementById("MT").value;
var res = str.replace(/(_M[\s\w,]+)_CC(_II)_NN1_RR\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
//a_AT1 big_JJ plus_CC_II_NN1
var str = document.getElementById("MT").value;
var res = str.replace(/(_AT1 \w+)_CC_II(_NN1)\w*\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/(_AT1 \w+_J\w+ \w+)_CC_II(_NN1)\w*\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/([A-Z]\w+_CC)_II_NN1_RR (,_,)\s/g, "$1 $2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(POINT)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(POLICE)\s/ig, "$1_NN2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(POLICIES)\s/ig, "$1_NN2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(POLICY)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/(noisy|POLITICAL)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(POLITICALLY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(POOL)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(POOR)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(POPULAR)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(POPULATION)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(PORT)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(PORTABLE)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(POSITION)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(POSITIVE)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(POSITIVELY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(POSSIBLE)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(POSSIBLY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(POST|weed)\s/ig, "$1_NN1_VV0 ");
document.getElementById("MT").value = res;
//off_RP and_CC check_NN1_VV0
var str = document.getElementById("MT").value;
var res = str.replace(/(_RP \w+_CC\w* \w+)_NN1(_VV0)\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(POSTS)\s/ig, "$1_NN2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(POTENTIALLY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(POWER|drama|universe)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(POWERFUL)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(PRACTICAL)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(PRACTICALLY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(PRACTI[SC]E)\s/ig, "$1_NN1_VV0 "); 
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(PRECIOUS)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(PRECISE)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(PRECISELY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(PREDOMINANTLY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(PREFER)\s/ig, "$1_VV0 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(PREFERABLY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(finished|PREFERRED|prepared)\s/ig, "$1_JJ_VVD_VVN ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(PREGNANT)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
//this is ridiculuously hard to catch right in multiple places.
var str = document.getElementById("MT").value;
var res = str.replace(/\b(PREPARED)\w* (to)\w* (work)\w* (hard)\w*\s/ig, "$1_VVN $2_TO $3_VVI $4_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(championed|mapped|prosecuted|obliged)\s/ig, "$1_VVD_VVN ");
document.getElementById("MT").value = res;
//have_VHI their_APPGE voices_NN2 heard_VVD_VVN
var str = document.getElementById("MT").value;
var res = str.replace(/(_VH\w* \w+_[JA]\w* \w+_N\w* \w+)_VVD(_VVN)\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(PREPARING)\s/ig, "$1_VVG ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(PRESENCE)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(PRESENTED)\s/ig, "$1_VVD_VVN ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(PRESENTLY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(PRESIDENTIAL)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(PRESS)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(PRESSURE)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(PRESUMABLY|accordingly)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
//1		  PRETTY (RG)	2020022	2		  PRETTY (RG_JJ)	698636	3	PRETTY JJ)	323355	4		  PRETTY (JJ_RG)	77204
var str = document.getElementById("MT").value;
var res = str.replace(/\b(PREtty)\s/ig, "$1_JJ_RG ");
document.getElementById("MT").value = res;
//very_JJ_RG first_MD time_NNT1 
var str = document.getElementById("MT").value;
var res = str.replace(/_JJ(_RG \w+_MD \w+_N\w+)\s/ig, "$1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(PREVENT)\s/ig, "$1_VVI ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(PREVIOUS)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(PREVIOUSLY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/(PRICE|diesel)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(PRICES)\s/ig, "$1_NN2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(PRIMARILY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(PRIME)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(PRINTED)\s/ig, "$1_JJ_VVD_VVN ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(PRIVACY)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(PRIVATE)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(PRIVATELY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(PROACTIVELY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(PROBABLY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(PROBLEM)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(PROBLEMS)\s/ig, "$1_NN2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(PROCEDURES)\s/ig, "$1_NN2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(PRODUCED)\s/ig, "$1_VVN ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(PRODUCES)\s/ig, "$1_VVZ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(PRODUCING)\s/ig, "$1_VVG ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(PRODUCT|producer)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(PRODUCTION)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(PRODUCTIVE)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(PRODUCTS)\s/ig, "$1_NN2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(PROFESSIONALLY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(PROFESSIONALS)\s/ig, "$1_NN2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(PROFILE)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(PROFITABLE)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(PROFOUNDLY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(PROGRAM)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(PROGRAMS)\s/ig, "$1_NN2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(PROGRESS)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(PROGRESSIVE)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(PROGRESSIVELY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(PROJECT)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(PROJECTS)\s/ig, "$1_NN2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(PROMINENT)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(PROMINENTLY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(PROMOTE)\s/ig, "$1_VVI ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(PROMOTIONAL)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(PROMPTLY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(PRONE)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(PROPER)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(PROPERLY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(PROPERTIES)\s/ig, "$1_NN2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(PROPERTY)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(PROPOSED)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(PROPRIETARY)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(PROSPECTIVE)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(PROTECT)\s/ig, "$1_VVI ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(PROTECTION)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(PROTECTIVE)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(PROTEIN)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(PROUD)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(PROUDLY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(appoint|PROVE)\s/ig, "$1_VV0 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(PROVEN)\s/ig, "$1_JJ_VVN ");
document.getElementById("MT").value = res;
//
var str = document.getElementById("MT").value;
var res = str.replace(/\b(PROVIDED)\s/ig, "$1_CS_VVD_VVN ");
document.getElementById("MT").value = res;
//provided_CS_VVN with_IW
var str = document.getElementById("MT").value;
var res = str.replace(/_CS(_VV\w+ \w+_I\w+)\s/ig, "$1 ");
document.getElementById("MT").value = res;
//provided_VVD_VVN they_PPHS2 are_V
var str = document.getElementById("MT").value;
var res = str.replace(/(_CS)_VVD_VVN (\w+_[PN]\w* \w+_V\w*)\s/ig, "$1 $2 ");
document.getElementById("MT").value = res;
//provided_CS_VVD_VVN that_CST the_AT person_NN1 is_VBZ
var str = document.getElementById("MT").value;
var res = str.replace(/(_CS)_VVD_VVN (\w+_CS)T\s/ig, "$121 $222 ");
document.getElementById("MT").value = res;
//Provided_CS_VVD_VVN that_CST_DD1 (case sensitive)
var str = document.getElementById("MT").value;
var res = str.replace(/([A-Z]+[a-z]+_CS)_VVD_VVN (\w+_CS)\w*\s/g, "$121 $222 ");
document.getElementById("MT").value = res;
//But_CCB that_CST_DD1
var str = document.getElementById("MT").value;
var res = str.replace(/(_CC\w* \w+)_CST(_DD1)\s/g, "$1$2 "); 
document.getElementById("MT").value = res;
//something_PN1 that_CST_DD1 was_VBDZ
var str = document.getElementById("MT").value;
var res = str.replace(/(_P\w* \w+_CST)_DD1 (\w+_V\w+)\s/g, "$1 $2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(PROVIDER)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(PROVIDES)\s/ig, "$1_VVZ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(PROVIDING)\s/ig, "$1_VVG ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(PROVINCIAL)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(PSYCHOLOGICAL)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(PUBLICLY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(PURE|awkward)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(PURELY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(PURPLE)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(PURPOSE|puberty)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(persons|PURPOSES)\s/ig, "$1_NN2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(PUSH)\s/ig, "$1_VVI ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(PUSHING)\s/ig, "$1_VVG ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(PUT|let)\s/ig, "$1_VV0_VVD_VVN ");
document.getElementById("MT").value = res;
//wo_VM n't_XX let_VV0_VVD
var str = document.getElementById("MT").value;
var res = str.replace(/(_VM n.t_XX \w+_VV)0_VVD\w*\s/ig, "$1I ");
document.getElementById("MT").value = res;
//washed_VVD up_RP his_APPGE mug_NN1 and_CC put_VV0_VVD
var str = document.getElementById("MT").value;
var res = str.replace(/(_V\wD [\w\s]+_CC \w+)_VV0(_VVD)\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
//_VH0 always_RR let_VV0_VVN
var str = document.getElementById("MT").value;
var res = str.replace(/(_V[HB]\w+ [\'\w]+_[XR]\w+ \w+)_VV0_VVD(_VVN)\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
//being_VBG put_VV0 up_RP ._. put_VV0_VVD_VVN
var str = document.getElementById("MT").value;
var res = str.replace(/(_VB\w+ \w+)_VV0_VVD(_VVN)\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
//let_VVN me_PPIO1 choose_VVI
var str = document.getElementById("MT").value;
var res = str.replace(/(let_V\w+ \w+_[NP]\w+ \w+_VV)0\s/ig, "$1I ");
document.getElementById("MT").value = res;
//Simply_RR put_VV0_VVD_VVN ,_,
var str = document.getElementById("MT").value;
var res = str.replace(/([A-Z]\w+_RR \w+)_VV0_VVD(_VVN ,_,)\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
//_VM put_VV0_VVD
var str = document.getElementById("MT").value;
var res = str.replace(/(_VM \w+_VV)0_VVD_VVN\s/ig, "$1I ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/(_VM \w+_VV)0_VVD\s/ig, "$1I ");
document.getElementById("MT").value = res;
// to_TO put_VV0_VVN
var str = document.getElementById("MT").value;
var res = str.replace(/(_TO \w+_VV)0_VVD_VVN\s/ig, "$1I ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(PUTS)\s/ig, "$1_VVZ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(PUTTING)\s/ig, "$1_VVG ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(QUALIFIED)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(QUALITY|PC|emphasis)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(QUARTER)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(QUESTION)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(plagiarism)\s/ig, "$1_NN2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(QUICKLY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(QUIET)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(QUIETLY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(RACE)\s/ig, "$1_NN1_VV0 ");
document.getElementById("MT").value = res;
//know_VVI if_CSW race_VV0 relations_NN2
var str = document.getElementById("MT").value;
var res = str.replace(/(_CS\w* \w+_NN1)_VV0\s/ig, "$1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(RACIAL)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(RADICALLY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(RADIO)\s/ig, "$1_NN1_VV0 ");
document.getElementById("MT").value = res;
//radio_VV0 information_NN1 back_JJ_NN1_RP_VVI
var str = document.getElementById("MT").value;
var res = str.replace(/(_VV\w+ \w+_[NP]\w+ \w+)_JJ_NN1(_RP)_VVI\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(rainfall)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(RAISE)\s/ig, "$1_VVI ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(RAISED)\s/ig, "$1_VVN ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(RAN)\s/ig, "$1_VVD ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(RANDOMLY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(RANGE)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(RANGING)\s/ig, "$1_VVG ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(RAPID)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(RAPIDLY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(RARE)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(RARELY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(RATE)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(RATES)\s/ig, "$1_NN2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(RAW)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(REACHED)\s/ig, "$1_VVD_VVN ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(REACHING)\s/ig, "$1_VVG ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(READERS)\s/ig, "$1_NN2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(READILY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(REAL)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/(REAL)_\w* (estate_NN1)\s/ig, "$1_NN1 $2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(REALISTIC)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(REALISTICALLY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(REALITY)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(REALIZED)\s/ig, "$1_VVD ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(REALLY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(REASON)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(REASONABLE)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(REASONABLY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(REASONS|recipes)\s/ig, "$1_NN2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(RECEIVING)\s/ig, "$1_VVG ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(RECENT)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(RECENTLY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(RECIPE)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
//1		  RECOGNIZING (VVG)	112133	2 RECOGNIZING (NN1)	168
var str = document.getElementById("MT").value;
var res = str.replace(/\b(RECOGNI[ZS]ING)\s/ig, "$1_VVG ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(RECOMMENDED)\s/ig, "$1_VVD_VVN ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(RECOVERY)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(RECREATIONAL)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(REDUCED)\s/ig, "$1_VVN ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(REDUCES)\s/ig, "$1_VVZ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(REDUCING)\s/ig, "$1_VVG ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(dishonour|REFER)\s/ig, "$1_VV0 ");
document.getElementById("MT").value = res;
//they_PPHS2 refer_VV0 to_TO ._. 
var str = document.getElementById("MT").value;
var res = str.replace(/(refer_VV0 to_)TO (._. )\s/ig, "$1II $2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(personnel|tourism)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(REFERS)\s/ig, "$1_VVZ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(REFLECT)\s/ig, "$1_VVI ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(REGARDLESS)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(REGION)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(REGIONAL)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(REGISTER)\s/ig, "$1_NN1_VV0 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(REGISTERED)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(REGISTRATION)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(REGULAR)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(REGULARLY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(REGULATIONS)\s/ig, "$1_NN2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(REGULATORY)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(RELATING)\s/ig, "$1_VVG ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(RELATIONSHIP)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(RELATIONSHIPS)\s/ig, "$1_NN2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(RELATIVELY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(RELEASED)\s/ig, "$1_VVN ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(RELEVANT)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(RELIABLE)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(RELIABLY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(RELIGIOUS)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(REMAINING)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(REMAINS)\s/ig, "$1_VVZ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(REMARKABLE)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(REMARKABLY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(REMOTE)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(REMOTELY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(REMOVED)\s/ig, "$1_VVN ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(REMOVING)\s/ig, "$1_VVG ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(RENOWNED)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(REPEAT)\s/ig, "$1_NN1_VV0 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(REPEATEDLY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(REPLACE)\s/ig, "$1_VVI ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(REPLACED)\s/ig, "$1_VVN ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(REPLACING)\s/ig, "$1_VVG ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(REPORTEDLY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(REPORTS)\s/ig, "$1_NN2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(REPRESENTS)\s/ig, "$1_VVZ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(REQUEST)\s/ig, "$1_NN1_VV0 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(REQUIREMENTS)\s/ig, "$1_NN2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(REQUIRES)\s/ig, "$1_VVZ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(REQUIRING)\s/ig, "$1_VVG ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(RESEARCH)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(RESEARCHERS)\s/ig, "$1_NN2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(RESIDENTIAL)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(RESIDENTS)\s/ig, "$1_NN2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(RESISTANT)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(RESOURCE)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(RESOURCES)\s/ig, "$1_NN2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(RESPECTIVE)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(RESPECTIVELY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(RESPOND)\s/ig, "$1_VVI ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(RESPONSE)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(RESPONSIBILITY)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(RESPONSIBLE)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(RESPONSIBLY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(RESPONSIVE)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(REST)\s/ig, "$1_NN1_VV0 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(RESTAURANT)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(RESULTS)\s/ig, "$1_NN2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(RETAIL)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(RETURNED)\s/ig, "$1_VVN ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(RETURNING)\s/ig, "$1_VVG ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(REVENUE)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(REVOLUTIONARY)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(RICH)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(RID)\s/ig, "$1_VVN ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(RIDICULOUS)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(RIDICULOUSLY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(RIGHTLY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(RIGHTS|studios)\s/ig, "$1_NN2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(RISK)\s/ig, "$1_NN1_VV0 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(ROAD)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(ROBUST)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(ROCK)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(ROLE)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
//ROLL CALL - specific problem compound nouns NN1 NN1
var str = document.getElementById("MT").value;
var res = str.replace(/\b(ROLL)\w* (CALL)\w*\s/ig, "$1_NN1 $2_NN1 ");
document.getElementById("MT").value = res;
//
var str = document.getElementById("MT").value;
var res = str.replace(/\b(ROMANTIC)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(ROOM)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(ROOMS)\s/ig, "$1_NN2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(ROUGH)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(ROUGHLY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(ROUND)\s/ig, "$1_RP ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(ROUTINELY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(ROYAL)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(RULE)\s/ig, "$1_NN1_VV0 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(RULES)\s/ig, "$1_NN2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(RURAL)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(RUSSIAN)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(SACRED)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(SAD)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(SADLY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(SAFELY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(SAFETY|routine)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(SALE)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(SALES|salmon)\s/ig, "$1_NN ");
document.getElementById("MT").value = res;
//smoked_JJ_VVD_VVN salmon_NN ._. always jj for claws
var str = document.getElementById("MT").value;
var res = str.replace(/\b(smoked)\w* (salmon)\w*\s/ig, "$1_JJ $2_NN ");
document.getElementById("MT").value = res;
//
var str = document.getElementById("MT").value;
var res = str.replace(/\b(SAN)\s/ig, "$1_NP1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(SAT)\s/ig, "$1_VVD ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(SATURDAY)\s/ig, "$1_NPD1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(SAVE)\s/ig, "$1_VV0 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(SAVE)\s/ig, "$1_VVI ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(SAVED)\s/ig, "$1_VVN ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(SAW)\s/ig, "$1_VVD ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(SAY)\s/ig, "$1_VV0 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(SAY)\s/ig, "$1_VVI ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(SAYING)\s/ig, "$1_VVG ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(SAYS)\s/ig, "$1_VVZ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(SCALE)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(SCARY)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(SCENE)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(SCHEDULE)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(SCHOOL)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(SCHOOLS)\s/ig, "$1_NN2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(SCIENCE)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(SCIENTIFIC)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(SCIENTIFICALLY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(SCOTTISH)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(SCREEN)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(SE)\s/ig, "$1_RR22 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(SEA)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(SEAMLESSLY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(SEARCHING)\s/ig, "$1_VVG ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(SEASON)\s/ig, "$1_NNT1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(SEASONAL)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(SEAT)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(SECOND)\s/ig, "$1_MD_NNT1 ");
document.getElementById("MT").value = res;
//first word in sentence
var str = document.getElementById("MT").value;
var res = str.replace(/([A-Z][a-z]+_MD)_NNT1\s/ig, "$1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(\w+)(_MD)_NNT1 (\w+_[NDIM]\w*)\s/ig, "$1$2 $3  ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(\w+)_MD(_NNT1) (\W+_\W+)\s/ig, "$1$2 $3  ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(\w+)_MD(_NNT1) (\w+_C\w*)\s/ig, "$1$2 $3  ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(SECONDLY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(SECONDS)\s/ig, "$1_NNT2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(SECRETLY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(SECTION)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(SECTOR)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(SECURELY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(SECURITY)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(SEEING)\s/ig, "$1_VVG ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(SEEKING)\s/ig, "$1_VVG ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(SEEMED)\s/ig, "$1_VVD ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(SEEMINGLY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(SEEMS)\s/ig, "$1_VVZ ");
document.getElementById("MT").value = res;
////seem IS FOLLOWED BY 
var str = document.getElementById("MT").value;
var res = str.replace(/\b(SEEM\w*) (\w+)_JJ_NN1\s/ig, "$1 $2_JJ ");
document.getElementById("MT").value = res;
//571 jj
//565 vvi
//445 vv
//189 rr
//57 ii
//45 nn
var str = document.getElementById("MT").value;
var res = str.replace(/\b(SEEN)\s/ig, "$1_VVN ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(SEES)\s/ig, "$1_VVZ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(SELDOM)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(SELECTING)\s/ig, "$1_VVG ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(SELECTION)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(SELLING)\s/ig, "$1_VVG ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(SENDING)\s/ig, "$1_VVG ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(SENIOR)\s/ig, "$1_JJ_NN1 ");
document.getElementById("MT").value = res;
//senior_JJ Daniel_NP1...apposition not sure though
var str = document.getElementById("MT").value;
var res = str.replace(/_JJ(_NN1 ,_, \w+_NP\w+)\s/ig, "$1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(SENSE)\s/ig, "$1_NN1_VV0 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(SENSITIVE|sly)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(corrupt|SEPARATE)\s/ig, "$1_JJ_VV0 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(SEPARATELY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(SEPTEMBER)\s/ig, "$1_NPM1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(SERIES)\s/ig, "$1_NN ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(SERIOUS)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(SERIOUSLY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(SERVER)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(SERVES)\s/ig, "$1_VVZ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(SERVICE)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(buses|SERVICES)\s/ig, "$1_NN2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(SERVING)\s/ig, "$1_VVG ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(SESSION)\s/ig, "$1_NNT1 ");
document.getElementById("MT").value = res;
//this is in the wrong alphabetical order! 0 is before letters. but not worth changing now for just one mistake!
var str = document.getElementById("MT").value;
var res = str.replace(/\b(SET)\s/ig, "$1_NN1_VVD_VVN_VV0 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(bit)\s/ig, "$1_NN1_VVD ");
document.getElementById("MT").value = res;
//can_VM set_NN1_VVD_VVN_VVI
var str = document.getElementById("MT").value;
var res = str.replace(/(_VM \w+)_NN1_VVD_VVN(_VV[0I])\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
//the_AT first_MD set_NN1_VVN_VV0
var str = document.getElementById("MT").value;
var res = str.replace(/(_A\w+ \w+_M\w+ \w+_NN1)_VVN_VV0\s/ig, "$1 ");
document.getElementById("MT").value = res;
// is_VBZ set_NN1_VVD_VVN_VV0
var str = document.getElementById("MT").value;
var res = str.replace(/(_VB\w+ \w+)_NN1_VVD(_VVN)_VV0\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
//'m_VBM all_DB set_NN1_VVN_VV0 !_! 
var str = document.getElementById("MT").value;
var res = str.replace(/(_VB\w+ all_)\w+ (set_)NN1_VVN_VV0\s/ig, "$1RG $2JJ ");
document.getElementById("MT").value = res;
//set_NN1_VVD_VVN_VV0 up_RP
var str = document.getElementById("MT").value;
var res = str.replace(/_NN1_VVD_VVN(_VV0 \w+_RP)\s/ig, "$1 ");
document.getElementById("MT").value = res;
//have_VH0 set_NN1_VVN_VV0 a_AT1
var str = document.getElementById("MT").value;
var res = str.replace(/(_VH\w+ \w+)_NN1(_VVN)_VV0( \w+_A\w+)\s/ig, "$1$2$3 ");
document.getElementById("MT").value = res;
//to_II set_VV0
var str = document.getElementById("MT").value;
var res = str.replace(/(to_)II (\w+_VV)0\s/ig, "$1TO $2I ");
document.getElementById("MT").value = res;
//_VM have_VHI set_NN1_VVD_VVN_VV0
var str = document.getElementById("MT").value;
var res = str.replace(/(_VM \w+_VHI \w+)_NN1_VVD(_VVN)_VV0\s/ig, "$1$2 ");//_NN1_VVN_VV0
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(SETS)\s/ig, "$1_VVZ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(SETTING)\s/ig, "$1_VVG ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(SETTINGS|specialties)\s/ig, "$1_NN2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(SEVERAL)\s/ig, "$1_DA2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(SEVERE)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(SEVERELY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(proton|SEX)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(SEXUAL)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(SEXUALLY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(SEXY)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(SHAPE)\s/ig, "$1_NN1_VV0 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(SHARED)\s/ig, "$1_JJ_VVD_VVN ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(SHARING)\s/ig, "$1_VVG ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(SHARP)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(SHARPLY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(SHEER)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(SHOES)\s/ig, "$1_NN2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(SHORTER)\s/ig, "$1_JJR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(SHORTLY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(SHOWED)\s/ig, "$1_VVD ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(SHOWING)\s/ig, "$1_VVG ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(SHOWN)\s/ig, "$1_VVN ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(SIC)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(SICK)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
//been_VBN violently_RR sick_JJ down_II_JJ_RP
var str = document.getElementById("MT").value;
var res = str.replace(/(_VB\w+ [\w\s]+_JJ \w+)_II_JJ(_RP)\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(SIDE)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(SIDE-BY-SIDE)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(SIDES)\s/ig, "$1_NN2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(SIDEWAYS)\s/ig, "$1_RL ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(SIGNED)\s/ig, "$1_VVN ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(SIGNIFICANT)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(SIGNIFICANTLY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(SIGNS)\s/ig, "$1_NN2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(SILENT)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(SILENTLY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(SILLY)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(SIMILAR)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(SIMILARLY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(SIMPLE)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(SIMPLY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(SIMULTANEOUSLY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(SINCERELY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(SITE)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(SITES)\s/ig, "$1_NN2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(SITS)\s/ig, "$1_VVZ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(SITTING)\s/ig, "$1_VVG ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(SITUATION)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(SIX)\s/ig, "$1_MC ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(SIZE)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(SKILL)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(SKILLED)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(SKILLS|laptops|smartphones)\s/ig, "$1_NN2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(SKIN|planet)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(SLIGHT)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(SLIGHTLY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(SLOW)\s/ig, "$1_JJ_VV0 ");
document.getElementById("MT").value = res;
//_JJ_VV0 down_RP 
var str = document.getElementById("MT").value;
var res = str.replace(/_JJ(_VV0 \w+_RP)\s/ig, "$1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(SLOWLY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(SMALL)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(SMALLER)\s/ig, "$1_JJR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(SMALLEST|sweetest)\s/ig, "$1_JJT_RRT ");
document.getElementById("MT").value = res;
//their_APPGE best_JJT_RRT
var str = document.getElementById("MT").value;
var res = str.replace(/(_AP\w+ \w+_JJT)_RRT\s/ig, "$1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(SMART)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
//
var str = document.getElementById("MT").value;
var res = str.replace(/\b(united|embedded|glorified|licensed|SMOked|surprised|subdued|tarnished)\s/ig, "$1_JJ_VVD_VVN ");//1		  SMOKED (JJ)	18607	2		  SMOKED (VVN)	18061	3  SMOKED (VVD)	15398
document.getElementById("MT").value = res;
//were_VBDR greatly_RR surprised_JJ_VVD_VVN that_CST
var str = document.getElementById("MT").value;
var res = str.replace(/(_VB\w+ \w+_RR \w+_JJ)_VVD_VVN (\w+_CST)\s/ig, "$1 $2 ");
document.getElementById("MT").value = res;
//_RGR subdued_JJ_VVD_VVN more adjective
var str = document.getElementById("MT").value;
var res = str.replace(/(_RGR \w+_JJ)_VVD_VVN\s/ig, "$1 ");
document.getElementById("MT").value = res;
//ed adjectives more often than vvn
var str = document.getElementById("MT").value;
var res = str.replace(/(_VB\w* (?:surpris|involv|interest)ed_JJ)_VVN\s/ig, "$1 ");
document.getElementById("MT").value = res;
//
var str = document.getElementById("MT").value;
var res = str.replace(/\b(SMOOTH|anti-racist)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(SMOOTHLY)\s/ig, "$1_RR ");
//so phrase starts
//capital at start of sentence.
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(So)\w* (much)\w* (for)\w*\s/g, "$1_RR $2_RR $3_IF ");
document.getElementById("MT").value = res;
//so_RR many_DA
var str = document.getElementById("MT").value;
var res = str.replace(/\b(So)_RR (\w+)_DA\w*\s/ig, "$1_RG $2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(SO-CALLED)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(SOCIAL)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(SOCIALLY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(SOCIETY)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(SOFT)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(SOFTLY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(SOFTWARE)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(SOLAR)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(SOLE)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(SOLELY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(SOLID|cruel)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(SOLUTION|collaboration)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(SOLUTIONS|zoos)\s/ig, "$1_NN2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(SOLVE)\s/ig, "$1_VVI ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(SOME|any)\s/ig, "$1_DD ");//any RR@ too late to change and rare so just change for cases
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/(any)_DD (\w+_RR\w*)\s/ig, "$1_RR $2 ");//any further
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(SOMEDAY)\s/ig, "$1_RT ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(SOMEHOW)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(SOMEONE)\s/ig, "$1_PN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(SOMETHING|anybody|everybody)\s/ig, "$1_PN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(SOMETIMES|tomorrow)\s/ig, "$1_RT ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(SOMEWHAT)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
//somewhat followed by 'of' is exception.
var str = document.getElementById("MT").value;
var res = str.replace(/\b(somewhat)_RR (of_IO)\s/ig, "$1_DD1 $2 ");
document.getElementById("MT").value = res;
//
var str = document.getElementById("MT").value;
var res = str.replace(/\b(SOMEWHERE)\s/ig, "$1_RL ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(SON)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(SONG)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(SONGS)\s/ig, "$1_NN2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(SOON)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(SOONER)\s/ig, "$1_RRR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(SOPHISTICATED|unprecedented)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(SORRY)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(SOURCE)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(concerts|SOURCES)\s/ig, "$1_NN2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(SOUTHERN)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(SOVIET)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(SPACE)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(SPACIOUS)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(SPANISH)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
//SPARKLING (JJ_VVG)
var str = document.getElementById("MT").value;
var res = str.replace(/\b(leading|SPArkling|CONVINCING|embarrasing)\s/ig, "$1_JJ_VVG ");
document.getElementById("MT").value = res;
//'s_GE leading_JJ_VVG run_NN1
var str = document.getElementById("MT").value;
var res = str.replace(/(_GE \w+_JJ)_VVG (\w+_NN\w+)\s/ig, "$1 $2 ");
document.getElementById("MT").value = res;
//everybody_PN1 's safety_NN1 is_VBZ
var str = document.getElementById("MT").value;
var res = str.replace(/(_PN1 's) (\w+_N\w+ \w+_VB\w+)\s/ig, "$1_GE $2 ");
document.getElementById("MT").value = res;
//very_RG embarrasing_JJ
var str = document.getElementById("MT").value;
var res = str.replace(/(_RG \w+_JJ)_VVG\s/ig, "$1 ");
document.getElementById("MT").value = res;
//careless_JJ driving_JJ_VVG
var str = document.getElementById("MT").value;
var res = str.replace(/(_JJ \w+)_JJ(_VVG)\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
//more_RGR convincing_JJ_VVG
var str = document.getElementById("MT").value;
var res = str.replace(/(_RGR \w+_JJ)_VVG\s/ig, "$1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(\w+_A\w* \w+_JJ)_VVG (\w+_N\w*)\s/ig, "$1 $2 ");
document.getElementById("MT").value = res;
//By_II listening_JJ_VVG to_II music_NN1
var str = document.getElementById("MT").value;
var res = str.replace(/(_II \w+)_JJ(_VVG \w+_II \w+_N\w+)\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
//
var str = document.getElementById("MT").value;
var res = str.replace(/\b(SPEAKING)\s/ig, "$1_VVG ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(SPECIAL)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(SPECIALIZED)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(SPECIALLY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(SPECIES)\s/ig, "$1_NN ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(SPECIFIC)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(SPECIFICALLY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(SPECIFIED)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(SPECTACULAR)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(SPEED|scorer)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(SPENDING)\s/ig, "$1_VVG ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(SPIRIT)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(SPIRITUAL)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(SPIRITUALLY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(SPOKE)\s/ig, "$1_VVD ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(SPORT)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(SPORTS)\s/ig, "$1_NN2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(SPOT)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(SPRING)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
//1 SPLIT (VVN) 88303 2 SPLIT (VVI) 85577 6 SPLIT (NN1) 26531 7 SPLIT (JJ) 17450 12 SPLIT (VVD) 9537 16 SPLIT (VV0) 7780
var str = document.getElementById("MT").value;
var res = str.replace(/\b(SPLIT)\s/ig, "$1_JJ_NN1_VV0_VVI_VVN ");
document.getElementById("MT").value = res;
//when no obvious way then wait till end of phrase and choose most common VVN //and_CC split_JJ_NN1_VV0_VVI_VVN into_II 
var str = document.getElementById("MT").value;
var res = str.replace(/\b(split)_JJ_NN1_VV0_VVI(_VVN [\w\s]*\W+_\W+)\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(STABLE)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(STAFF)\s/ig, "$1_NN ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(STAGE)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(STAINLESS)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(STANDARDS)\s/ig, "$1_NN2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(STANDING)\s/ig, "$1_VVG ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(STAR)\s/ig, "$1_JJ_NN1_VV0 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(STARS)\s/ig, "$1_NN2_VVZ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(STARTS|stimulates)\s/ig, "$1_VVZ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(STATEMENT)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(STATIC)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(STATION)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(STATISTICAL)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(STATISTICALLY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(STATUS)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(STAYING)\s/ig, "$1_VVG ");
document.getElementById("MT").value = res;
//both are possible after vvg = staying_VVG fit_JJ_NN1 //
var str = document.getElementById("MT").value;
var res = str.replace(/(_VVG fit_JJ)_NN1_VV0\s/ig, "$1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(STEADILY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(STEADY)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(STEEL)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(STEPS)\s/ig, "$1_NN2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(STICK)\s/ig, "$1_VVI ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(STOCK)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(STORAGE)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(STORES)\s/ig, "$1_NN2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(STORIES)\s/ig, "$1_NN2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(STORY)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(STRAIGHTFORWARD)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(STRANGE)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(STRANGELY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(STRATEGIC)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(STRATEGICALLY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(STRATEGIES)\s/ig, "$1_NN2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(STRATEGY)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(STRENGTH)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(STRESS)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(STRICT)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(STRICTLY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(STRONG)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(STRONGER)\s/ig, "$1_JJR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(STRONGEST)\s/ig, "$1_JJT_RRT ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(STRONGLY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(STRUCTURAL)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(STRUCTURE)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(STUDENT|generator)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(seas|STUDENTS)\s/ig, "$1_NN2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(formats|guides|STUDIES)\s/ig, "$1_NN2_VVZ ");
document.getElementById("MT").value = res;
//guides_NN2_VVZ him_PPHO1
var str = document.getElementById("MT").value;
var res = str.replace(/_NN2(_VVZ \w+_P\w+)\s/ig, "$1 ");
document.getElementById("MT").value = res;
//business_NN1 ' success_NN1
var str = document.getElementById("MT").value;
var res = str.replace(/(s_NN1 ') (\w+_N\w+)\s/ig, "$1_GE $2 ");
document.getElementById("MT").value = res;
//It_PPH1 's_GE people_NN
var str = document.getElementById("MT").value;
var res = str.replace(/(_PPH1 's)_GE\s/ig, "$1_VBZ ");
document.getElementById("MT").value = res;
// father_NN1 's ._. // shouldnt be necessary since Ares_NP1 '_GE//negotiating_NN1 position_NN1 was_VBDZ
var str = document.getElementById("MT").value;
var res = str.replace(/(_NN1 's) (._.)\s/ig, "$1_GE $2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/(_NP1 ') (\w+ing_[VN]\w+ \w+_NN\w+ \w+_V\w+)\s/ig, "$1_GE $2 ");
document.getElementById("MT").value = res;
//'_GE needs_NN2_VVZ
var str = document.getElementById("MT").value;
var res = str.replace(/(_GE \w+_NN2)_VVZ\s/ig, "$1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(polo|STUDIO)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(STUDYING)\s/ig, "$1_VVG ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(STUFF)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(STUNNING)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(STUPID)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(STYLE)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(STYLISH)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(SUBJECT)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(SUBMIT)\s/ig, "$1_VVI ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(SUBMITTED)\s/ig, "$1_VVN ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(SUBSEQUENT)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(SUBSEQUENTLY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(SUBSTANTIAL)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(SUBSTANTIALLY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(SUBTLE)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(SUBTLY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(SUCCESS)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(SUCCESSFUL)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(SUCCESSFULLY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(SUDDENLY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(SUFFICIENT)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(SUFFICIENTLY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(SUGAR|lobby)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(SUGGESTS)\s/ig, "$1_VVZ ");
document.getElementById("MT").value = res;
//such_II21 as_II22
var str = document.getElementById("MT").value;
var res = str.replace(/\b(SUCH)\w* (as)\w*\s/ig, "$1_II21 $2_II22 ");
document.getElementById("MT").value = res;
//in_II21 between_II22
var str = document.getElementById("MT").value;
var res = str.replace(/\b(in)_\w* (between)\w*\s/ig, "$1_II21 $2_II22 ");
document.getElementById("MT").value = res;
//are_VBR in_II21 between_II22 ._. 
var str = document.getElementById("MT").value;
var res = str.replace(/(_V\w+ in_)II(21 between_)II(22 ._.)\s/ig, "$1RL$2RL$3 ");
document.getElementById("MT").value = res;
//other_JJ_NN1 than_CSN
var str = document.getElementById("MT").value;
var res = str.replace(/\b(other)_\w* (than)_\w*\s/ig, "$1_II21 $2_II22 ");
document.getElementById("MT").value = res;
// a_AT1 sweet_JJ_NN1 old_JJ
var str = document.getElementById("MT").value;
var res = str.replace(/(_A\w+ \w+_JJ)_NN1 (\w+_JJ)\s/ig, "$1 $2 ");
document.getElementById("MT").value = res;
//with_IW low_JJ_NN1 self-esteem_NN1
var str = document.getElementById("MT").value;
var res = str.replace(/(_I\w+ \w+_JJ)_NN1 ([\-\w]+_N\w+)\s/ig, "$1 $2 ");
document.getElementById("MT").value = res;
//apart_RL from_II
var str = document.getElementById("MT").value;
var res = str.replace(/\b(apart)_\w* (from)_\w*\s/ig, "$1_II21 $2_II22 ");
document.getElementById("MT").value = res;
//1		  SUCH (DA)	5786410	2		  SUCH (II21)	5622972	3		  SUCH (CS21)	113055
var str = document.getElementById("MT").value;
var res = str.replace(/\b(SUCH)\s/ig, "$1_DA ");
document.getElementById("MT").value = res;
//
var str = document.getElementById("MT").value;
var res = str.replace(/\b(SUITABLE)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(SUMMER)\s/ig, "$1_NNT1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(SUN)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(SUNDAY)\s/ig, "$1_NPD1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(SUNNY)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(SUPER)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(SUPERB)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(SUPERIOR)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(SUPPLY)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(SUPPORTED)\s/ig, "$1_VVN ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(SUPPORTIVE)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(SUPPORTS)\s/ig, "$1_VVZ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(disturb|SUPPOSE)\s/ig, "$1_VV0 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(SUPPOSED)\s/ig, "$1_JJ_VVD_VVN ");
document.getElementById("MT").value = res;
//was_VBDZ n't_XX supposed_JJ_VVN//this is a special word!
var str = document.getElementById("MT").value;
var res = str.replace(/(_VB\w+ [\w\s\']*supposed_JJ)_VVD_VVN\s/ig, "$1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/(_VB\w+ n.t_\w+ \w+)_JJ_VVD(_VVN)\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
//are_VBR being_VBG added_JJ
var str = document.getElementById("MT").value;
var res = str.replace(/(_VB\w+ being_VBG \w+)_JJ_VVD(_VVN)\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(SUPPOSEDLY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(SUPREME)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(u?n?SURE)\s/ig, "$1_JJ "); 
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(SURELY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(SURFACE)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
//causes big problems to catch = nn1 nn2 (not vvz)
var res = str.replace(/\b(SURF)\w* (SHOPS)\w*\s/ig, "$1_NN1 $2_NN2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(SURGERY)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(SURGICAL)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(SURPRISING)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(SURPRISINGLY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(SURROUNDING|rising)\s/ig, "$1_JJ_VVG ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(SURVEY)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(SURVIVE)\s/ig, "$1_VV0 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(SUSTAINABLE)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(SWIFTLY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(concepts|droughts|SYMPTOMS|victims)\s/ig, "$1_NN2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(SYNTHETIC)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(instructor|SYSTEM|theft|victim)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(SYSTEMATICALLY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(SYSTEMS)\s/ig, "$1_NN2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(TABLE)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(TAKEN)\s/ig, "$1_VVN ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(TAKES)\s/ig, "$1_VVZ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(TAKING)\s/ig, "$1_VVG ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(TALENTED)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(TALKING)\s/ig, "$1_VVG ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(TALL)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(TANK)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(TARGET)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(TASK)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(TASTY)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(camp|TAX)\s/ig, "$1_NN1_VV0 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(chamber|TEA)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(TEACH)\s/ig, "$1_VVI ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(TEACHER)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(TEACHERS)\s/ig, "$1_NN2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(TEAM)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(TEAMS)\s/ig, "$1_NN2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(TECH)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(TECHNICAL)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(TECHNICALLY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(TECHNIQUES)\s/ig, "$1_NN2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(TECHNOLOGICAL)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(TECHNOLOGIES)\s/ig, "$1_NN2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(TECHNOLOGY)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(TELEVISION)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(TELLING|THINKING)\s/ig, "$1_VVG ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(TELLS)\s/ig, "$1_VVZ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(greed|TEMPERATURE)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(TEMPORARILY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(TEMPORARY)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(TEND)\s/ig, "$1_VV0 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(TERMS)\s/ig, "$1_NN2 ");
document.getElementById("MT").value = res;
//in_II terms_NN2 of_IO
var str = document.getElementById("MT").value;
var res = str.replace(/(in_II) (terms_)NN2 (of_I)O\s/ig, "$131 $2II32 $3I33 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(TERRIBLE)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(TERRIBLY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(aspired|TESTED)\s/ig, "$1_VVD_VVN ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(TESTS)\s/ig, "$1_NN2_VVZ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(TEXAS)\s/ig, "$1_NP1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(TEXT)\s/ig, "$1_NN1_VV0 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(THAN)\s/ig, "$1_CSN ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(THANK)\s/ig, "$1_VV0 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(THANKFULLY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(THANKS)\s/ig, "$1_NN2 ");
document.getElementById("MT").value = res;
//1 THAT (CST) 68828662 3 THAT (DD1) 25191738 5 THAT (CS22) 3093377 6 THAT (RG) 524810 7 THAT (REX21) 308941
var str = document.getElementById("MT").value;
var res = str.replace(/\b(THAT)\s/ig, "$1_CST_DD1 ");
document.getElementById("MT").value = res;
//that_DD1 my_APPGE
var str = document.getElementById("MT").value;
var res = str.replace(/\b(THAT_CST)_DD1( \w+_A\w+)\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
// entirely_RR possible_JJ that_DD1
var str = document.getElementById("MT").value;
var res = str.replace(/(_JJ that_CST)_DD1\s/ig, "$1 ");
document.getElementById("MT").value = res;
//hear_VV0 that_DD1 John_NP1 and_CC Susie_NP1 are_VBR
var str = document.getElementById("MT").value;
var res = str.replace(/(_VV\w+ \w+_CST)_DD1 ([\w\s\']+\w+_V\w+)\s/ig, "$1 $2 ");
document.getElementById("MT").value = res;
//that_CST_DD1 yesterday_RT ._.
var str = document.getElementById("MT").value;
var res = str.replace(/_CST(_DD1 \w+ ._.)\s/ig, "$1 ");
document.getElementById("MT").value = res;
//was_VBDZ something_PN1 that_CST_DD1
var str = document.getElementById("MT").value;
var res = str.replace(/(_VB\w* \w+_P\w* \w+_CST)_DD1\s/ig, "$1 ");
document.getElementById("MT").value = res;
//_CST_DD1 can_VM happen_VVI is_VBZ
var str = document.getElementById("MT").value;
var res = str.replace(/(_CS\w)_DD1 (\w+_V\w* \w*_V\w* \w+_VB\w*)\s/ig, "$1 $2 ");
document.getElementById("MT").value = res;
//_V that _D verb that determiner (only a couple of exceptions like 'that much'
var str = document.getElementById("MT").value;
var res = str.replace(/\b(\w+_V\w* \w+_CST)_DD1 (\w+_D\w*)\s/ig, "$1 $2 ");
document.getElementById("MT").value = res;
//certain_JJ that_CST_DD1 ,_,
var str = document.getElementById("MT").value;
var res = str.replace(/(_JJ \w+_CS\w*)_DD1 (,_,)\s/ig, "$1 $2 ");
document.getElementById("MT").value = res;
//that_CST_DD1 does_VDZ // clash so delay//this is wrong!'the school that is best'//adding captial for sentence start.
var str = document.getElementById("MT").value;
var res = str.replace(/\b([A-Z]+\w+)_CS\w*(_DD1) (\w+_V\wZ[\w\s]*._.)\s/g, "$1$2 $3 ");
document.getElementById("MT").value = res;
//that_CST_DD1 other_JJ shows_NN2 - can't be before plural
var str = document.getElementById("MT").value;
var res = str.replace(/(_CST)_DD1 (\w+_J\w* \w+_NN2)\s/ig, "$1 $2 ");
document.getElementById("MT").value = res;
//page_NN1 that_CST_DD1 'll_VM noun that verb always CST// contraction non word character
var str = document.getElementById("MT").value;
var res = str.replace(/(_N\w* \w+_CST)_DD1 (\W*\w+_V\w*)\s/ig, "$1 $2 ");
document.getElementById("MT").value = res;
//' ll_VM //notice space
var str = document.getElementById("MT").value;
var res = str.replace(/(') (ll_VM)\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
//apparent_JJ that_DD1 Bill_NN1 and_CC Lesley_NN1 needed_VVD
var str = document.getElementById("MT").value;
var res = str.replace(/\b(\w+_JJ \w+CST)_DD1 ([\w\s^V]+[\w+_VV]+)\s/ig, "$1 $2 ");
document.getElementById("MT").value = res;
//
var str = document.getElementById("MT").value;
var res = str.replace(/\b(THEIR)\s/ig, "$1_APPGE ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(THEME|synesthesia)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(THEMSELVES|yourselves|ourselves)\s/ig, "$1_PPX2 ");
document.getElementById("MT").value = res;
//each_PPX221 other_PPX222
var str = document.getElementById("MT").value;
var res = str.replace(/\b(each_)\w* (other_)\w*\s/ig, "$1PPX221 $2PPX222 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(THEORETICALLY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(THEORY)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(THERAPY)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(THEREAFTER|TOMORROW)\s/ig, "$1_RT ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(THEREBY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(THEREFORE)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(THEREIN)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(THEREOF)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(THERMAL)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(THESE)\s/ig, "$1_DD2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(THICK)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(THIN)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(neurons|THINGS)\s/ig, "$1_NN2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(THINKS)\s/ig, "$1_VVZ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(THIRD)\s/ig, "$1_MD ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(THIRD-PARTY)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(THOROUGH)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(THOROUGHLY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(THOSE)\s/ig, "$1_DD2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(felt|THOUGHT|shot)\s/ig, "$1_NN1_VVD_VVN ");
document.getElementById("MT").value = res;
//have_VHI thought_NN1_VVN//she_PPHS1 had_VHD thought_NN1_VVN ._. 
var str = document.getElementById("MT").value;
var res = str.replace(/(_VH\w+ thought)_NN1(_VVN)\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
// bothersome_JJ thought_NN1_VVD
var str = document.getElementById("MT").value;
var res = str.replace(/(_JJ \w+_NN1)_VVD\s/ig, "$1 ");
document.getElementById("MT").value = res;
//Have_VH0 you_PPY thought_NN1_VVN
var str = document.getElementById("MT").value;
var res = str.replace(/(_VH\w+ \w+_P\w+ \w+)_NN1(_VVN)\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
//the_AT single_JJ shot_NN1_VVD
var str = document.getElementById("MT").value;
var res = str.replace(/(_A\w+ \w+_JJ \w+_NN1)_VVD\s/ig, "$1 ");
document.getElementById("MT").value = res;
//Never_RR thought_NN1_VVD I_PPIS1 would_VM//team_NN1 thought_NN1_VVD 
var str = document.getElementById("MT").value;
var res = str.replace(/(_N\w+ \w+)_NN1(_VVD)\s/ig, "$1$2 "); 
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/(_RR \w+)_NN1(_VVD \w+_[PDN]\w+ \w+_V\w+)\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
//felt_NN1_VVD tired_JJ
var str = document.getElementById("MT").value;
var res = str.replace(/_NN1(_VVD \w+_J\w+)\s/ig, "$1 ");
document.getElementById("MT").value = res;
//I_PPIS1 always_RR thought_NN1_VVD
var str = document.getElementById("MT").value;
var res = str.replace(/(_[PN]\w+ \w+_RR \w+)_NN1(_VVD)\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
//I_PPIS1 thought_NN1_VVD
var str = document.getElementById("MT").value;
var res = str.replace(/(_P\w+ \w+)_NN1(_VVD)\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
// the_AT thought_NN1_VVD
var str = document.getElementById("MT").value;
var res = str.replace(/(_A\w+ \w+_NN1)_VVD\s/ig, "$1 ");
document.getElementById("MT").value = res;
//_VBZ often_RR thought_NN1_VV0_VVN
var str = document.getElementById("MT").value;
var res = str.replace(/(_VB\w+ \w+_R\w+ \w+)_NN1(_VVN)\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
//_VBZ thought_NN1_VVN to_TO
var str = document.getElementById("MT").value;
var res = str.replace(/(_VB\w+ \w+)_NN1(_VVN to_TO)\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
//a_AT1 shot_NN1_VVN
var str = document.getElementById("MT").value;
var res = str.replace(/(_A\w+ \w+_NN1)_VVN\s/ig, "$1 ");
document.getElementById("MT").value = res;
//was_VBDZ thought_NN1_VVN risky
var str = document.getElementById("MT").value;
var res = str.replace(/(_VB\w+ \w+)_NN1(_VVN)\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(cabs|THOUGHTS)\s/ig, "$1_NN2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(THOUSANDS|millions)\s/ig, "$1_NNO2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(THREE)\s/ig, "$1_MC ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(THROW)\s/ig, "$1_VV0 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(THROWN)\s/ig, "$1_VVN ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(THROWING)\s/ig, "$1_VVG ");
document.getElementById("MT").value = res;
//
var str = document.getElementById("MT").value;
var res = str.replace(/\b(\w+)_II(_RR \W+_\W+)\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(\w+)_II(_RR \w+_C\w*)\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(\w+_II)_RR (\w+_[JAN]\w*)\s/ig, "$1 $2 ");
document.getElementById("MT").value = res;
//
var str = document.getElementById("MT").value;
var res = str.replace(/\b(THROugh|ALONG)\s/ig, "$1_II_RP_RR ");
document.getElementById("MT").value = res;
//weather_NN1 through_II_RP_RR
var str = document.getElementById("MT").value;
var res = str.replace(/(_[PN]\w+ \w+_II)_RP_RR\s/ig, "$1 ");
document.getElementById("MT").value = res;
//wanting_VVG all_DB along_II_RP_RR ._. 
var str = document.getElementById("MT").value;
var res = str.replace(/(_V\w+ \w+_D\w+ \w+)_II(_RP)_RR\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
//tagging_VV0 along_RP_RR ._. 
var str = document.getElementById("MT").value;
var res = str.replace(/(_V\w+ \w+_RP)_RR\s/ig, "$1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/(_V\w+ \w+)_II(_RP)_RR\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
//help_VVI you_PPY through_II_RP_RR out_RP
var str = document.getElementById("MT").value;
var res = str.replace(/(_VV\w* \w+_[PND]\w* \w+)_II(_RP)_RR (\w+_RP)\s/ig, "$1$2 $3 ");
document.getElementById("MT").value = res;
//in_II_RP today_RT
var str = document.getElementById("MT").value;
var res = str.replace(/(_II)_RP (\w+_RT)\s/ig, "$1 $2 ");
document.getElementById("MT").value = res;
//broken_VVN down_II_RP
var str = document.getElementById("MT").value;
var res = str.replace(/(_VV\w+ \w+)_II(_RP)\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
//come_VVN in_II by_II ambulance_NN1
var str = document.getElementById("MT").value;
var res = str.replace(/_II(_RP \w+_I\w+)\s/ig, "$1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(THURSDAY)\s/ig, "$1_NPD1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(THUS)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(expert|god|HOODIE|outcome|TICKET|turtle|vessel|womb)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(TICKETS)\s/ig, "$1_NN2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(TIGHTLY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(TIMELY)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(TIMES)\s/ig, "$1_NNT2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(TINY)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(crucify|TIRE|shrink)\s/ig, "$1_VV0 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(intentional|TIRED)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(TIRES|operates)\s/ig, "$1_VVZ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(diamond|TITLE)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(TODAY)\s/ig, "$1_RT ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(TOGETHER)\s/ig, "$1_RL ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(TOLD)\s/ig, "$1_VVD_VVN ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(TOMORROW)\s/ig, "$1_RT ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(TONIGHT)\s/ig, "$1_RT ");
document.getElementById("MT").value = res;
//
var str = document.getElementById("MT").value;
var res = str.replace(/\b(TOO|RATHER)\s/ig, "$1_RG_RR ");//RR@
document.getElementById("MT").value = res;
//too_RG_RR much_DA1_RR
var str = document.getElementById("MT").value;
var res = str.replace(/(_RG)_RR (\w+_DA1)_RR\s/ig, "$1 $2 ");
document.getElementById("MT").value = res;
//_DA1_RR how much
var str = document.getElementById("MT").value;
var res = str.replace(/(_RGQ \w+_DA1)_RR\s/ig, "$1 ");
document.getElementById("MT").value = res;
//much_DA1_RR easier_RRR 
var str = document.getElementById("MT").value;
var res = str.replace(/_DA1(_RR \w+_RRR)\s/ig, "$1 ");
document.getElementById("MT").value = res;
//_RG_RR have_V
var str = document.getElementById("MT").value;
var res = str.replace(/_RG(_RR \w+_V\w*)\s/ig, "$1 ");
document.getElementById("MT").value = res;
//  , (,) TOO (RR@) . (.) DEGREE ADVERB VS GENERAL ADVERB //too_RG_RR ._.
var str = document.getElementById("MT").value;
var res = str.replace(/_RG(_RR \W+_\W+)\s/ig, "$1 ");
document.getElementById("MT").value = res;
//removed\b to accept undertook
var str = document.getElementById("MT").value;
var res = str.replace(/(TOOK)\s/ig, "$1_VVD ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(TOOL)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(TOOLS)\s/ig, "$1_NN2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(TOPIC)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(TOTALLY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(TOUGH)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(grace|stomach|TOUR)\s/ig, "$1_NN1_VV0 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(TOWN)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(TOXIC)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(TRADE)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(TRADITIONAL)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(TRADITIONALLY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(TRAFFIC)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(TRANSPARENT)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(kicking|TRAVELING|tagging)\s/ig, "$1_VVG ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(TREAT)\s/ig, "$1_VVI ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(TREATED)\s/ig, "$1_VVD_VVN ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(TREATMENT)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(TREE)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(TREES)\s/ig, "$1_NN2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(TREMENDOUS)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(TREMENDOUSLY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(TRIAL)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(TRICKY)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(TRIP)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(TROPICAL)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(TROUBLE)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(TRUE)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(TRULY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(TRUMP)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(TRUTH|noise)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(TRYING)\s/ig, "$1_VVG ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(TUESDAY)\s/ig, "$1_NPD1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(TURNING)\s/ig, "$1_VVG ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(TURNS)\s/ig, "$1_NN2_VVZ ");
document.getElementById("MT").value = res;
//he_PPHS1 studies_NN2_VVZ
var str = document.getElementById("MT").value;
var res = str.replace(/(_P\w+ \w+)_NN2(_VVZ)\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
//big problem not putting underscore because it removes s plural
var str = document.getElementById("MT").value;
var res = str.replace(/\b(TV)\w* (SHOW)_\w*\s/ig, "$1_NN1 $2_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(TV)\w* (SHOWS)_\w*\s/ig, "$1_NN1 $2_NN2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(TV|chick)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res; 
var str = document.getElementById("MT").value;
var res = str.replace(/\b(TWICE)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(TWO)\s/ig, "$1_MC ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(TYPE)\s/ig, "$1_NN1_VV0 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(TYPES)\s/ig, "$1_NN2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(engrossed|TYPICAL)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(TYPICALLY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(U.S.)\s/ig, "$1_NP1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(UGLY)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(UK)\s/ig, "$1_NP1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(ULTIMATE)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(additionally|ULTIMATELY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(ULTRA)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(UNABLE)\s/ig, "$1_JK ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(UNANIMOUSLY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(UNCOMFORTABLE)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
//1 UNDER (II) 4978809 2 UNDER (RG) 542379 7 UNDER (RP
var str = document.getElementById("MT").value;
var res = str.replace(/\b(UNDER)\s/ig, "$1_II_RG_RP ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(UNDERground)\s/ig, "$1_JJ_NN1_RL "); 
document.getElementById("MT").value = res;
//drive_VV0 HIV_NP1 underground_JJ_NN1_RL
var str = document.getElementById("MT").value;
var res = str.replace(/(_VV\w+ \w+_[PN]\w+ \w+)_JJ_NN1(_RL)\s/ig, "$1$2 "); 
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(UNDERLYING)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(UNDERNEATH)\s/ig, "$1_RL ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(UNDERSTANDABLY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(UNDERSTANDING)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
//jj_RL
var str = document.getElementById("MT").value;
var res = str.replace(/\b(nearby|UNDERWAter)\s/ig, "$1_JJ_RL ");
document.getElementById("MT").value = res;
// at_II nearby_JJ_RL computers_NN2 ._. 
var str = document.getElementById("MT").value;
var res = str.replace(/(_II \w+_JJ)_RL (\w+_N\w+)\s/ig, "$1 $2 ");
document.getElementById("MT").value = res;
//1		  AWAY (RL)	3176947	2		  AWAY (II21_RL)	937289	3		  AWAY (II21)	411361	4		  AWAY (RL_JJ%)	93496	5		  AWAY (RR22)	51010	6		  AWAY (JJ%_RL)	26473	7		  AWAY (JJ)	17013	8		  AWAY (JJ%)	15405	9		  AWAY (RP)	3475	10		  AWAY (RR44)	1674
var str = document.getElementById("MT").value;
var res = str.replace(/\b(AWAY)\s/ig, "$1_JJ_RL_RP ");
document.getElementById("MT").value = res;
//take_VVI my_APPGE pain_NN1 away_JJ_RL_RP
var str = document.getElementById("MT").value;
var res = str.replace(/(_VV\w+ \w+_A\w+ \w+_N\w+ \w+)_JJ_RL(_RP)\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(BACK_\w+ \w+)_JJ_RL(_RP)\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
//own_DA back_JJ_NN1_RP_VV0 by_II 
var str = document.getElementById("MT").value;
var res = str.replace(/(_D\w+ \w+)_JJ(_NN1)_RP_VV0 (\w+_II)\s/ig, "$1$2 $3 ");
document.getElementById("MT").value = res;
//it_PPH1 back_JJ_NN1_RP_VV0 on_II
var str = document.getElementById("MT").value;
var res = str.replace(/(_PPH1 \w+)_JJ_NN1(_RP)_VV0 (\w+_II)\s/ig, "$1$2 $3 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/(_V\w* \w+)_JJ(_RL)_RP\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/(_[ITA]\w* \w+_JJ)_RL_RP (\w+_N\w*)\s/ig, "$1 $2 ");
document.getElementById("MT").value = res;
//disappear_VV0 underwater_JJ_RL in_II
var str = document.getElementById("MT").value;
var res = str.replace(/(_VV\w* \w+)_JJ(_RL \w+_I\w*)\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
//
var str = document.getElementById("MT").value;
var res = str.replace(/\b(UNDERWAY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(UNDOUBTEDLY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(UNEXPECTED)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(UNEXPECTEDLY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(UNFORTUNATELY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(UNIQUE)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(UNIQUELY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(UNIT)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(UNITS)\s/ig, "$1_NN2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(UNIVERSAL)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(UNIVERSALLY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(UNIVERSITY|piston)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(UNIVERSes)\s/ig, "$1_NN2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(UNKNOWN)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(UNLESS)\s/ig, "$1_CS ");
document.getElementById("MT").value = res;
//unless_CS directed_VVD
var str = document.getElementById("MT").value;
var res = str.replace(/(_CS \w+_VV)D\s/ig, "$1N "); 
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(UNLIKELY)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(DAILY)\s/ig, "$1_JJ_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(UNLIMITED)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(UNNECESSARILY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(UNNECESSARY)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/(U?N?USUAL)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
//As_II usual_JJ ,_, 
var str = document.getElementById("MT").value;
var res = str.replace(/(As_)II (usual_)JJ (._.)\s/g, "$1RR21 $2RR22 $3 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/(._. As_)II (usual_)JJ (._.)\s/ig, "$1RR21 $2RR22 $3 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(UNUSUALLY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
//getting on for
var str = document.getElementById("MT").value;
var res = str.replace(/(getting)_[NV]\w+ (on)_\w+ (for)_\w+\s/ig, "$1_RG31 $2_RG32 $3_RG33 ");
document.getElementById("MT").value = res;
//Up_RG21 to_RG22 only with numbers
var str = document.getElementById("MT").value;
var res = str.replace(/\b(Up)_\w* (to)_\w* (\w+_M\w+)\s/ig, "$1_RG21 $2_RG22 $3 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/(_VB[\s\w\']* Up)_\w* (to)_\w* (\w+_[PNAJD]\w+)\s/ig, "$1_II21 $2_II22 $3 ");
document.getElementById("MT").value = res;
//far_RR from_II clear_JJ_VV0 ._. 
var str = document.getElementById("MT").value;
var res = str.replace(/\b(far)_\w* (from)_\w* (\w+_JJ\w+)\s/ig, "$1_RG21 $2_RG22 $3 ");
document.getElementById("MT").value = res;
//from_RG22 clear_JJ_VV0
var str = document.getElementById("MT").value;
var res = str.replace(/(_RG\w* \w+_JJ)_VV0\s/ig, "$1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(UPCOMING)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(UPDATE)\s/ig, "$1_NN1_VV0 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(UPDATED)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(UPFRONT)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(UPON|throughout|toward|within)\s/ig, "$1_II ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(UPPER|upper-class)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(UPRIGHT)\s/ig, "$1_RL ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(UPSIDE|wealth)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/(fed)_V\w+ (up)_\w+\s/ig, "$1_JJ21 $2_JJ22 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/(_A\w+ UPSIDE)_\w+ (down)_\w+\s/ig, "$1_JJ21 $2_JJ22 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/(_V[\s\w\']+UPSIDE)_NN1 (down)_\w+\s/ig, "$1_RL21 $2_RL22 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(UPSTAIRS)\s/ig, "$1_RL "); 
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(URBAN)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(USA|US)\s/g, "$1_NP1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(us)\s/g, "$1_PPIO2 ");
document.getElementById("MT").value = res;
//USED_JJ_VMK_VVD_VVN
var str = document.getElementById("MT").value;
var res = str.replace(/\b(USEd)\s/ig, "$1_JJ_VMK_VVD_VVN ");
document.getElementById("MT").value = res;
//I_PPIS1 used_JJ_VMK_VVD to_TO ,_, 
var str = document.getElementById("MT").value;
var res = str.replace(/(_[NDP]\w+ \w+)_JJ(_VMK)_VVD (to_TO ._.)\s/ig, "$1$2 $3 ");
document.getElementById("MT").value = res;
//language_NN1 used_JJ_VMK_VVD when_CS
var str = document.getElementById("MT").value;
var res = str.replace(/(_N\w+ \w+)_JJ_VMK\w*(_VVN \w+_C\w+)\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
//have_VHI used_JJ_VMK_VVN it_PPH1
var str = document.getElementById("MT").value;
var res = str.replace(/(_VH\w+ \w+)_JJ_VMK(_VVN \w+_P\w+)\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
//are_VBR used_JJ_VMK_VVN not_XX to_TO
var str = document.getElementById("MT").value;
var res = str.replace(/(_VB\w+ \w+)_JJ_VMK(_VVN not_X\w+)\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
//used_JJ_VMK_VVN for_IF//used_JJ_VMK_VVN in_II 
var str = document.getElementById("MT").value;
var res = str.replace(/_JJ_VMK(_VVN [^t]\w+_I\w+)\s/ig, "$1 ");
document.getElementById("MT").value = res;
//he_PPHS1 used_JJ_VMK_VVD the_AT
var str = document.getElementById("MT").value;
var res = str.replace(/(_P\w+ \w+)_JJ_VMK(_VVD)\w* (\w+_[DA]\w+)\s/ig, "$1$2 $3 ");
document.getElementById("MT").value = res;
//being_VBG used_JJ_VMK_VVN
var str = document.getElementById("MT").value;
var res = str.replace(/(_VB\w+ \w+_VB\w+ used)_JJ_VMK\w*(_VVN)\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
//used_JJ_VMK_VVD to_TO work_VVI//to do
var str = document.getElementById("MT").value;
var res = str.replace(/_JJ(_VMK)_VVD\w* (to_TO \w+_V.I)\s/ig, "$1 $2 ");
document.getElementById("MT").value = res;
//_VBR used_JJ_VMK_VVN to_II tourists_NN2// used to as adjective.//
var str = document.getElementById("MT").value;
var res = str.replace(/(_VB\w+ [\w\s\']*used_JJ)_VMK_VVN( to_II)\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/((?:g[oe]t|bec[ao]m)\w*_V\w+ [\w\s\']*used_JJ)_VMK_VVN( to_II)\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(USEFUL)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
//petroleum-based_VVD
var str = document.getElementById("MT").value;
var res = str.replace(/(\w+\-\w+[dg])\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(USELESS)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(belief|disappointment|USER|trainee|tourist|mankind|stationery)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(pens|USERS)\s/ig, "$1_NN2 ");
document.getElementById("MT").value = res;
////plural noun after DA2
var str = document.getElementById("MT").value;
var res = str.replace(/\b(\w+_DA2) ([a-z]+s)\s/ig, "$1 $2_NN2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(USING)\s/ig, "$1_VVG ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(USUALLY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(UTTERLY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(VAIN)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(in_)I\w+ (VAIN_)\w+\s/ig, "$1RR21 $2RR22 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(VALID)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(VALUABLE)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(VALUE)\s/ig, "$1_NN1_VV0 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(limits|VALUES|wishes)\s/ig, "$1_NN2_VVZ "); 
document.getElementById("MT").value = res;
//Cholerton_NP1 wishes_NN2
var str = document.getElementById("MT").value;
var res = str.replace(/(_N.1 \w+)_NN2(_VVZ)\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(VARIETY)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(VARIOUS)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(VARY)\s/ig, "$1_VVI ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(VAST)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(VASTLY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(VEHICLE)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(VEHICLES|SUVs|sedans)\s/ig, "$1_NN2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(VERBALLY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(VERSA)\s/ig, "$1_RR22 ");
document.getElementById("MT").value = res;
//vice_JJ_NN1 versa_RR22
var str = document.getElementById("MT").value;
var res = str.replace(/(vice)_[^R]\w+ (versa_RR22)\s/ig, "$1_RR21 $2");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(VERSATILE)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(VERSION)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(VERTICAL)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(VERTICALLY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
//1		  VERY (RG)	13922843	2		  VERY (JJ)	491714
var str = document.getElementById("MT").value;
var res = str.replace(/\b(VERY)\s/ig, "$1_JJ_RG ");
document.getElementById("MT").value = res;
//rr is always rare.
var str = document.getElementById("MT").value;
var res = str.replace(/\b(quite)\s/ig, "$1_RG_RR ");
document.getElementById("MT").value = res;
//No_PN121 one_PN122 quite_RR understands_VVZ
var str = document.getElementById("MT").value;
var res = str.replace(/_RG(_RR \w+_V\w*)\s/ig, "$1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/(_RG)_RR (\w+_J\w*)\s/ig, "$1 $2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(amongst|VIA|despite|towards)\s/ig, "$1_II ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(VIABLE)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(VIBRANT)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(VIDEO)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(VIDEOS)\s/ig, "$1_NN2 ");
document.getElementById("MT").value = res;
//video_NN1 games_VVZ
var str = document.getElementById("MT").value;
var res = str.replace(/\b(video_NN1 (?:game|clip)s_)VVZ\s/ig, "$1NN2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(VIEWS)\s/ig, "$1_NN2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(VIGOROUSLY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(VIOLENT)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(VIOLENTLY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(VIRTUAL)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(VIRTUALLY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(VISIBLE)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(VISIBLY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(VISION)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(VISITORS|fairytales|themes|principles|PARAGRAPHS)\s/ig, "$1_NN2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(VISUAL)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(VISUALLY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(VITAL)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(VOCAL)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(VOICE)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(VOLUME)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(VOLUNTARILY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(VOLUNTARY)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(VULNERABLE)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(WAITING)\s/ig, "$1_VVG ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(WALKING|distancing)\s/ig, "$1_VVG ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(WALL)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(WANTS|understands|motivates)\s/ig, "$1_VVZ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(WAR)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(WARM)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(WASHINGTON)\s/ig, "$1_NP1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(WATCHING)\s/ig, "$1_VVG ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(WATER)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(authorities|WAYS|germans)\s/ig, "$1_NN2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(WEAK)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(WEARING)\s/ig, "$1_VVG ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(WEATHER)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(WEB)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(WEBSITE)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(WEDDING)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(WEDNESDAY)\s/ig, "$1_NPD1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(WEEK)\s/ig, "$1_NNT1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(WEEKEND)\s/ig, "$1_NNT1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(WEEKLY)\s/ig, "$1_JJ_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(WEEKS)\s/ig, "$1_NNT2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(WEIGHT)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(WEIRD)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(fit|present|WELCOME|reverse)\s/ig, "$1_JJ_NN1_VV0 ");
document.getElementById("MT").value = res;
//tennis_NN1 and_CC squash_NN1_VV0
var str = document.getElementById("MT").value;
var res = str.replace(/(_NN1 \w+_CC \w+_NN1)_VV0\s/ig, "$1 ");
document.getElementById("MT").value = res;
//keep_VVI yourself_PPX1 fit_VV0
var str = document.getElementById("MT").value;
var res = str.replace(/(_V\w+ \w+_P\w+ \w+_JJ)_NN1_VV0\s/ig, "$1 ");
document.getElementById("MT").value = res;
//and_CC present_JJ_VV0 the_AT
//I_PPIS1 welcome_JJ_VV0 the_AT
var str = document.getElementById("MT").value;
var res = str.replace(/(_[CP]\w+ \w+)_JJ(_VV0 \w+_A\w+)\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
//1		  WELL (RR)	6597012	2		  WELL (II32) 3252147 6		  WELL (JJ)	381066	7		  WELL (NN1)	208854	9		  WELL (RR22)	191497
var str = document.getElementById("MT").value;
var res = str.replace(/\b(WELL)\s/ig, "$1_JJ_NN1_RR ");//why is this at rr only?
document.getElementById("MT").value = res;
//may_VM well_JJ_NN1 be_VBI
var str = document.getElementById("MT").value;
var res = str.replace(/(_VM well_)JJ_NN1_(RR \w+_V.[I0])\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/(Well_)JJ_NN1_(RR ._.)\s/g, "$1$2 ");//capital adverb
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/(Well_)JJ_NN1( ._.)\s/g, "$1RR$2 ");//capital adverb
document.getElementById("MT").value = res;
//worked_VVD half_DB as_CSA well_JJ_NN1 as_CSA
var str = document.getElementById("MT").value;
var res = str.replace(/(_VV\w+ half_)DB( as_)CSA( well_)JJ_NN1( as_CSA)\s/ig, "$1RR$2RG$3RR$4 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(WELL-KNOWN)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(WENT|flew)\s/ig, "$1_VVD ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(WEST)\s/ig, "$1_ND1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(WET)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(WHAT|which)\s/ig, "$1_DDQ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(WHAtever|whatsoever)\s/ig, "$1_DDQV ");
document.getElementById("MT").value = res;
//No_DDQV31 matter_DDQV32 what_DDQV33
var str = document.getElementById("MT").value;
var res = str.replace(/(No)_A\w+ (matter)_\w+ (what|which|when|where)_\w+\s/ig, "$1_DDQV31 $2_DDQV32 $3_DDQV33 ");
document.getElementById("MT").value = res;
//No_RGQV31 matter_RGQV32 how_RGQV33
var str = document.getElementById("MT").value;
var res = str.replace(/(No)_A\w+ (matter)_\w+ (how)_\w+\s/ig, "$1_RGQV31 $2_RGQV32 $3_RGQV33 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(Whom)\s/ig, "$1_PNQO ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(Whoever)\s/ig, "$1_PNQV ");
document.getElementById("MT").value = res;
//_DDQGE 
var str = document.getElementById("MT").value;
var res = str.replace(/\b(Whose)\s/ig, "$1_DDQGE ");
document.getElementById("MT").value = res;
//
var str = document.getElementById("MT").value;
var res = str.replace(/\b(WHile)\s/ig, "$1_CS ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/(AT1 WHile_)CS\s/ig, "$1NNT1 ");
document.getElementById("MT").value = res;
//while_CS ._. 
var str = document.getElementById("MT").value;
var res = str.replace(/(WHile_)CS (\._.)\s/ig, "$1NNT1 $2 ");
document.getElementById("MT").value = res;
//a_AT1 little_DA1_JJ while_CS
var str = document.getElementById("MT").value;
var res = str.replace(/(AT1 \w+_JJ WHile_)CS\s/ig, "$1NNT1 ");
document.getElementById("MT").value = res;
//do_VD0 very_RG little_DA1_JJ ,_,
var str = document.getElementById("MT").value;
var res = str.replace(/(_VD\w* \w+_RG \w+_DA1)_JJ (._.)\s/ig, "$1 $2 ");
document.getElementById("MT").value = res;
//worth_II my_APPGE while_CS 
var str = document.getElementById("MT").value;
var res = str.replace(/(worth_II\w* \w+_AP\w+ WHile_)CS\s/ig, "$1NNT1 "); 
document.getElementById("MT").value = res;
//
var str = document.getElementById("MT").value;
var res = str.replace(/\b(WHEreabouts)\s/ig, "$1_NN2_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/(_A\w+ \w+_NN2)_RR\s/ig, "$1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/_NN2(_RR \w+_V[DBH]\w+)\s/ig, "$1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(WHEreas)\s/ig, "$1_CS ");
document.getElementById("MT").value = res;
//after_CS_II the_AT committee_NN1 were_VBDR // must have words before verb to avoid gerund.
var str = document.getElementById("MT").value;
var res = str.replace(/(_CS)_II ([\w\s]+) (\w+_V\w*)\s/ig, "$1 $2 $3 ");
document.getElementById("MT").value = res;
//Except_CS_II_VV0 as_CSA_II_RG
var str = document.getElementById("MT").value;
var res = str.replace(/(_CS)_II_VV0 (\w+_CS\w*)_II_RG\s/ig, "$1 $2 ");
document.getElementById("MT").value = res;
//,_, except_CS_II_VV0 insofar_CS21 as_CS22
var str = document.getElementById("MT").value;
var res = str.replace(/(_. \w+_CS)_II_VV0 (\w+_CS\w*)\s/ig, "$1 $2 ");
document.getElementById("MT").value = res;
// 's_VBZ_VHZ as_CS21 if_CS22
var str = document.getElementById("MT").value;
var res = str.replace(/(_VBZ)_VHZ (\w+_CS21 \w+_CS22)\s/ig, "$1 $2 ");
document.getElementById("MT").value = res;
//_VBZ_VHZ not_XX someone_PN1
var str = document.getElementById("MT").value;
var res = str.replace(/(_VBZ)_VHZ (\w+_XX \w+_[PN]\w+)\s/ig, "$1 $2 ");
document.getElementById("MT").value = res;
//_VBZ_VHZ nice_JJ to_TO
var str = document.getElementById("MT").value;
var res = str.replace(/(_VBZ)_VHZ (\w+_JJ to_TO)\s/ig, "$1 $2 ");
document.getElementById("MT").value = res;
//_VBZ_VHZ written_VVN it_PPH1 // risky 
var str = document.getElementById("MT").value;
var res = str.replace(/_VBZ(_VHZ \w+_VVN \w+_P\w+)\s/ig, "$1 ");
document.getElementById("MT").value = res;
//I_PPIS1 like_II_VV0 to_TO know_VVI
var str = document.getElementById("MT").value;
var res = str.replace(/(_P\w+ \w+)_II(_VV0 to_TO \w+_VVI)\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
//fun_JJ than_CSN the_AT more_RGR serious_JJ apps_NN2 like_II_VV0 Mondly_NP1 //crazy hard!
var str = document.getElementById("MT").value;
var res = str.replace(/(_JJ \w+_C\w* \w+_A\w* \w+_R\w+ \w+_JJ \w+_N\w+ \w+_II)_VV0 (\w+_N\w*)\s/ig, "$1 $2 ");
document.getElementById("MT").value = res;
//this_DD1 like_II_VV0
var str = document.getElementById("MT").value;
var res = str.replace(/(_\w+1 \w+_II)_VV0\s/ig, "$1 ");
document.getElementById("MT").value = res;
// before_CS_II_RT September_NPM1 ._. 
var str = document.getElementById("MT").value;
var res = str.replace(/_CS(_II)_RT (\w+_N\w+ \W+_\W+)\s/ig, "$1 $2 ");
document.getElementById("MT").value = res;
//Never_RR before_CS_II_RT had_VHD
var str = document.getElementById("MT").value;
var res = str.replace(/(_R\w* \w+)_CS_II(_RT \w+_V\w*)\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(WHENEVER|wherever)\s/ig, "$1_RRQV ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(WHEREBY)\s/ig, "$1_RRQ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(WHEREIN)\s/ig, "$1_RRQ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(WHEREVER)\s/ig, "$1_RRQV ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(WHETHER)\s/ig, "$1_CSW ");
document.getElementById("MT").value = res;
//whether or not
var str = document.getElementById("MT").value;
var res = str.replace(/\b(WHETHER)_\w+ (or)_\w+ (not)_\w+\s/ig, "$1_CSW31 $2_CSW32 $3_CSW33 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(WHO)\s/ig, "$1_PNQS ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(WHOLLY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(WHY)\s/ig, "$1_RRQ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(WIDELY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(WIDER)\s/ig, "$1_JJR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(obsessed|WIDESPREAD|concurrent|intimate)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(automobile|WIFE|paragraph|lawyer|representation)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(WILD)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(WILDLY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(wavy|curly)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
//1		  WILLING (JJ) 2		  WILLING (JJ_VVG%)	26100	3		  WILLING (JK)	8236
var str = document.getElementById("MT").value;
var res = str.replace(/\b(WILLING)\s/ig, "$1_JJ_JK_VVG ");
document.getElementById("MT").value = res;
//He_PPHS1 's_VBZ willing_JJ_JK_VVG to_TO return_VVI to_II the_AT UFC_NN1 ._. 
var str = document.getElementById("MT").value;
var res = str.replace(/_JJ(_JK)_VVG (to_TO)\s/ig, "$1 $2 ");
document.getElementById("MT").value = res;
//a_AT1 willing_JJ_JK_VVG subject_NN1
var str = document.getElementById("MT").value;
var res = str.replace(/(_A\w+ \w+_JJ)_JK_VVG (\w+_N\w+)\s/ig, "$1 $2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(WILLINGLY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(WIN)\s/ig, "$1_VVI ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(WINDOW)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(WINE)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(WINNING)\s/ig, "$1_VVG ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(WINTER)\s/ig, "$1_NNT1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(WISE)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(WISELY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(WISH)\s/ig, "$1_NN1_VV0 ");
document.getElementById("MT").value = res;
//Please_RR_VV0 wish_NN1
var str = document.getElementById("MT").value;
var res = str.replace(/(Please_RR)_VV0 (\w+)_NN1(_VV0)\s/g, "$1 $2$3 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(with|WITHOUT)\s/ig, "$1_IW ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(WO)\s/ig, "$1_VM ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(WOMAN)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(WOMEN)\s/ig, "$1_NN2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(WONDER)\s/ig, "$1_VV0 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(WONDERFUL)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(WONDERFULLY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b((?:hang|WONDER)ING)\s/ig, "$1_VVG ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(WOOD)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
//
var str = document.getElementById("MT").value;
var res = str.replace(/\b(WOODEN|additional|short\-term)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(framework|WORD|knee)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(WORDS)\s/ig, "$1_NN2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b((?:WORKER|alien|son)s)\s/ig, "$1_NN2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(WORLD|carbon|spectrum|leisure)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(begun|WORN|GIVEN|risen)\s/ig, "$1_VVN "); 
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(WORRY)\s/ig, "$1_VVI ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(WORST)\s/ig, "$1_JJT_RRT ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(WRITES)\s/ig, "$1_VVZ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(WRONGLY)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(WROTE)\s/ig, "$1_VVD ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(YEAR)\s/ig, "$1_NNT1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(YEARS)\s/ig, "$1_NNT2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(yeah|YES|oh|hi|huh|hey|whoa)\s/ig, "$1_UH "); 
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(YESTERDAY)\s/ig, "$1_RT ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(YORK)\s/ig, "$1_NP1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(YOUNG|autonomous)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(YOUNGER)\s/ig, "$1_JJR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(YOUR)\s/ig, "$1_APPGE ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(mine|ours)\s/ig, "$1_PPGE ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(YOURSELF)\s/ig, "$1_PPX1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(YOUTH|cock|bitch)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
//general GRAMMAR
//noun SUFFIXes + noun vs adjective (this is not differentiating about tags (what has been tagged) or suffixes which causes problems.  'Y' [^_] this could also be changed by being case insensitive since these are all at the end of words...
var str = document.getElementById("MT").value;
var res = str.replace(/\b(\w+ness)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(\w+_[AIJD]\w*) ([a-z]+(?:AL|ANCE|ATION|TION|SION|URE|MENT|AGE|ING|ERY|ITY|ISM|TH|ERY|TY|ANT|ENT|EE|IST|AR|ER|OR|ster|ARIAN|EE|ER|EER|IST|ETTE|SIE|SY|IE|LET|LING|KIN|DOM|SHIP|HOOD)) (\w+_[^N]\w*)\s/ig, "$1 $2_NN1 $3 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;//'AR' CLASHES WITH CODING!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
var res = str.replace(/\b(\w+_[AIJD]\w*) (\w+(?:AL|ANCE|ATION|TION|SION|URE|MENT|AGE|ING|ERY|ITY|ISM|TH|ERY|TY|ANT|ENT|EE|IST|ER|OR|ster|ARIAN|EE|ER|EER|IST|ETTE|SIE|SY|IE|LET|LING|KIN|DOM|SHIP|HOOD)) (\w+_N\w*)\s/ig, "$1 $2_JJ $3 ");
document.getElementById("MT").value = res;
//case sensitive first word in sentence.//must be delayed to stop pre stealing it from other codes.//removed er because still not working
var str = document.getElementById("MT").value; 
var res = str.replace(/\b([A-Z]\w+(?:al|ance|ation|tion|sion|ure|ment|age|ing|ery|ity|ism|th|y|ery|ty|ant|ent|ee|ist|or|ster|arian|ee|er|eer|ist|ette|sie|sy|ie|let|ling|kin|dom|ship|hood)) ([\w\s]*._.)\s/g, "$1_NN1 $2 ");
document.getElementById("MT").value = res;
//plural nouns (removed -y)will need manual check.
var str = document.getElementById("MT").value;
var res = str.replace(/\b(\w+(?:al|ance|ance|ation|tion|sion|ure|ment|age|ing|ery|ity|ism|th|eries|ties|ant|ent|ee|ist|ar|er|or|ster|arian|ee|er|eer|ist|ette|sie|sies|ies|let|ling|kin|dom|ship|hood)s)\s/ig, "$1_NN2 ");
document.getElementById("MT").value = res;
//modal or not change vv0 to infinitive
var str = document.getElementById("MT").value;
var res = str.replace(/\b(\w+_(?:VM|XX)\w*) (\w+_V\w)0\s/ig, "$1 $2I ");
document.getElementById("MT").value = res;
//article modal not possible (can will)
var str = document.getElementById("MT").value;
var res = str.replace(/\b(\w+_A\w*) (\w+)_VM\s/ig, "$1 $2_NN1 ");
document.getElementById("MT").value = res;
//lovers_NN2 need_NN1_VV0 
var str = document.getElementById("MT").value;
var res = str.replace(/\b(\w+_NN2 \w+)_NN1(_VV0)\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
//a_AT1 51%_NNU stake_NN1_VV0
var str = document.getElementById("MT").value;
var res = str.replace(/(_[JA]\w* \w+%?_NNU \w+_NN1)_VV0\s/ig, "$1 ");
document.getElementById("MT").value = res;
//_GE face_NN1_VV0
var str = document.getElementById("MT").value;
var res = str.replace(/(_GE face_NN1)_VV0\s/ig, "$1 ");
document.getElementById("MT").value = res;
//today_RT 's_GE 7.6_MC billion_NNO
var str = document.getElementById("MT").value;
var res = str.replace(/(_RT 's) ([\w\d\.]+_[NM]\w+)\s/ig, "$1_GE $2 ");
document.getElementById("MT").value = res;
//There_EX 's_VBZ one_PN1 USB_NN1_VV0
var str = document.getElementById("MT").value;
var res = str.replace(/(_VB\w* \w+)_PN1 (\w+_NN1)_VV\w\s/ig, "$1_MC1 $2 ");
document.getElementById("MT").value = res;
//women_NN2 's water_NN1
var str = document.getElementById("MT").value;
var res = str.replace(/(_N\w+ 's) (\w+_N\w+)\s/ig, "$1_GE $2 "); 
document.getElementById("MT").value = res;
//in_II the_AT same_DA order_NN1_VV0
var str = document.getElementById("MT").value;
var res = str.replace(/(_I\w* \w+_A\w* \w+_D\w* \w+_NN1)_VV\w\s/ig, "$1 ");
document.getElementById("MT").value = res;
//modal question verb
var str = document.getElementById("MT").value;
var res = str.replace(/\b(\w+_VM) (\w+_P\w*) (\w+)_NN1_VV0\s/g, "$1 $2 $3_VVI ");
document.getElementById("MT").value = res;
//exercise_NN1_VV0 stimulates_VVZ
var str = document.getElementById("MT").value;
var res = str.replace(/(_NN1)_VV\w (\w+_VVZ)\s/g, "$1 $2 ");
document.getElementById("MT").value = res;
//is_VBZ chicken_NN1_VV0
var str = document.getElementById("MT").value;
var res = str.replace(/(\w+_V\w+ \w+_NN1)_VV0\s/g, "$1 ");
document.getElementById("MT").value = res;
//_VHI seemed_VVD
var str = document.getElementById("MT").value;
var res = str.replace(/(_VH\w \w+_VV)D\s/g, "$1N ");
document.getElementById("MT").value = res;
//noun at end of sentence //careful that it doesnt tag more than once! 
var str = document.getElementById("MT").value;
var res = str.replace(/\b(\w+_A\w*) ([a-z]+s) (\W+_\W+)\s/ig, "$1 $2_NN2 $3 ");
document.getElementById("MT").value = res;
//should not be pretagged!
var str = document.getElementById("MT").value;
var res = str.replace(/\b(\w+_[DIA]\w*) ([a-z]+) (\W+_\W+)\s/g, "$1 $2_NN1 $3 ");
document.getElementById("MT").value = res;
//third person verb must go after da2 // this is a big clash!!!! = it_PPH1 while_CS_VVZ - get rid of \w 
var str = document.getElementById("MT").value;
var res = str.replace(/\b(\w+_PPHS?1) ([a-z]+s)\s/ig, "$1 $2_VVZ ");
document.getElementById("MT").value = res;
//to infinitve fullstop (exception = work) - massive problems = DO NOT WRITE (to)\w* BECAUSE IT EQUALS TOURISM
var str = document.getElementById("MT").value;
var res = str.replace(/\b(to_TO) ([a-z]+) (\W+_\W+)\s/ig, "$1 $2_VVI $3");
document.getElementById("MT").value = res;
//'this' as adverb
var str = document.getElementById("MT").value;
var res = str.replace(/\b(this)_DD1 (\w+_[JR]\w*) (\W+_\W+) \s/ig, "$1_RG $2 $3 ");
document.getElementById("MT").value = res;
//going
var str = document.getElementById("MT").value;
var res = str.replace(/\b(\w+_VB\w*) (going) (to_TO)\s/ig, "$1 $2_VVGK $3 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(\w+_VB\w*) (going) (\w+_I\w*)\s/ig, "$1 $2_VVG $3 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/ ('s) (\w+_P\w*)\s/ig, " $1_VBZ $2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(\w+_A\w*) (\w+s)\s/g, "$1 $2_NN2 ");
document.getElementById("MT").value = res;
//verb agreement nouns
var str = document.getElementById("MT").value;
var res = str.replace(/\b([A-Za-z]+s) (\w+_VBD?R)\s/g, "$1_NN2 $2 ");
document.getElementById("MT").value = res;
//perfect ed - RISKY 
var str = document.getElementById("MT").value;
var res = str.replace(/\b(\w+_VH\w*) (\w+(?:ed|n))\s/g, "$1 $2_VVN ");
document.getElementById("MT").value = res;
//GE nouns
var str = document.getElementById("MT").value;
var res = str.replace(/\b(\w+_[AID]\w*) ([a-z]+) (\'s) (\w+_N\w*)\s/g, "$1 $2_NN1 $3 $4 ");
document.getElementById("MT").value = res;
//superlative Adjective or adverb
var str = document.getElementById("MT").value;
var res = str.replace(/\b(FASTEST|LOWEST|LONGEST|HARDEST|CLOSEST|EARLIEST|NEAREST|BRIGHTEST|LOUDEST|WIDEST|FURTHEST|FARTHEST|CAREER-BEST|SEASON-BEST|PERSONAL-BEST|THIRD-BEST|SECOND-LONGEST|SECOND-FASTEST)\s/ig, "$1_JJT_RRT ");
document.getElementById("MT").value = res;
//'s_VBZ the_AT best_JJT_RRT
var str = document.getElementById("MT").value;
var res = str.replace(/(_VB\w+ \w+_A\w+ \w+_JJT)_RRT\s/ig, "$1 ");
document.getElementById("MT").value = res;
//superlative followed by noun = jj
var str = document.getElementById("MT").value;
var res = str.replace(/(_JJT)_RRT (\w+_N\w*)\s/ig, "$1 $2 ");
document.getElementById("MT").value = res;
//best possible outcome
var str = document.getElementById("MT").value;
var res = str.replace(/(_JJT)_RRT (\w+_J\w+ \w+_N\w*)\s/ig, "$1 $2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(\w+)(_JJT)_RRT (\._\.)\s/ig, "$1$2 $3 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(\w+)_JJT(_RRT) (\w+_I\w*)\s/ig, "$1$2 $3 ");
document.getElementById("MT").value = res;
//noun or adjective
var str = document.getElementById("MT").value;
var res = str.replace(/\b(adult|PUBLIC|HUMAN|TOP|GENERAL|FINAL|OTHER|MULTIPLE|FUTURE|FAVORITE|STANDARD|KEY|MOBILE|TOTAL|AVERAGE|POTENTIAL|FUN|LIGHT|INDIVIDUAL|FRONT|PRIMARY|RED|INITIAL|DARK|ENGLISH|OFFICIAL|MAXIMUM|GREEN|CANADIAN|CLASSIC|CANT|CONTENT|CHIEF|FRENCH|MINIMUM|AUDIO|CRIMINAL|FEMALE|BOTTOM|MIDDLE|BLACK|GERMAN|WHOLE|REAR|NET|BLUE|ALTERNATIVE|WHITE|SAFE|COLD|JAPANESE|PATIENT|PREMIUM|MALE|SECONDARY|FELLOW|PROFESSIONAL|FAVOURITE|CHEMICAL|FAT|ITALIAN|SECRET|CATHOLIC|MASS|GIANT|ORANGE|MEDIUM|PREMIER|COMPLEX|GREEK|CURRENT|ROMAN|ASSISTANT|SINGLE|LUXURY|ORIGINAL|ORAL|INTERIOR|MANUAL|FLAT|INTELLECTUAL|MILITARY|EVIL|LIQUID|RELATIVE|PRINCIPAL|RUBBER|CONCRETE|FRIENDLY|EXCESS|SQUARE|FIRM|MAGIC|PRO|COLLECTIVE|CONSERVATIVE|VARIABLE|VICE|YELLOW|PLAIN|COMPACT|MAJOR|MINI|COMIC|EPIC|FLASH|SWEET|OLIVE|PRIVATE|LIGHTWEIGHT|BASS|COMMERCIAL|SPANISH|BROWN|HEALING|RESIDENT|AMERICAN|REAL-TIME|CONSERVATION|HYBRID|SOLID|NATIVE|IDEAL|NURSING|MAIN|PINK|ACADEMIC|TERRORIST|LOW|NEGATIVE|RESERVE|EQUIVALENT|RADICAL|MEDIAN|LOCAL|TERMINAL|VETERAN|ALIEN|CIRCULAR|MINOR|ROUND|NOVEL|JOINT|SUPER|QUIET|CHRISTIAN|EXTERIOR|REPRESENTATIVE|UNIFORM|OBJECTIVE|ISRAELI|ACOUSTIC|EGYPTIAN|CIVILIAN|EDITORIAL|SENIOR|ARAB|WELCOME|JUNIOR|LATIN|ANNUAL|HERBAL|THYROID|TOUGH|AMATEUR|SUB|OPPOSITE|FATTY|CONSTANT|ELECTRIC|CERAMIC|PARALLEL|BINARY|TRIPLE|PURPLE|INTERIM|FOLLOW-UP|BROADBAND|INVALID|BRAZILIAN|EUROPEAN|PASSING|DYNAMIC|ANTIQUE|STABLE|VETERINARY|QUARTERLY|MACRO|HEBREW|DEAR|AMBIENT|MUSICAL|E-COMMERCE|EXTREME|PALESTINIAN|NARRATIVE|MINT|AGGREGATE|SPECIAL|QUALIFYING|OVERHEAD|INTENT|CONDITIONAL|ELASTIC|WEB-BASED|URINARY|CRISP|RACIST|MARINE|API|DOMESTIC|RULING|CARDBOARD|VEGETARIAN|GRAY|AGING|LOW-INCOME|BLIND|ACRYLIC|SUPERIOR|CHARACTERISTIC|CHARGING|NORWEGIAN|EQUAL|HOLLOW|AUTOMATIC|SOVEREIGN|IMMIGRANT|DIFFERENTIAL|OVAL|CONSULTING|OFFENSIVE|CLOUD-BASED|GRAPHIC|INDEPENDENT|PRIMITIVE|MORTAL|NEURAL|VERTICAL|DROP-DOWN|ALCOHOLIC|GREY|AMBER|BUDDHIST|RUSSIAN|WERENT|LONG-TIME|SINGULAR|BELGIAN|VIRGIN|INDIAN|GRAVE|FITTING|ENTRY-LEVEL|COMPREHENSIVE|CONTEMPORARY|CONTINENTAL|METHODIST|DUPLICATE|THAI|DECIMAL|ACCESSORY|RIVAL|POSTERIOR|HIGH-TECH|GINGER|BRIEF|SPORTING|PORTUGUESE|DRIVING|AUXILIARY|ALERT|SOLE|ARABIC|WISE|FINE|DECISION-MAKING|PROTESTANT|EVIDENCE-BASED|FAIR|BLANK|VOID|ARCH|HIGH-PERFORMANCE|PHANTOM|SPECIFIC|DIABETIC|FEMINIST|MORAL|MONTHLY|WEBSITE|BLU-RAY|HIGH|MAINSTREAM|PORTABLE|CHINESE|AUSTRIAN|TENDER|SPIRAL|CORRECTIVE|CANINE|CAPITALIST|MUSLIM|STATIC|CARNIVAL|ADHESIVE|FOUL|WIFI|SURPLUS|SLICK|TRIM|NOT-FOR-PROFIT|ADOLESCENT|PERENNIAL|WEE|AUSTRALIAN|PARTICULAR|PROMPT|OPIOID|RANDOM|OFF-ROAD|LABOUR|DUTCH|PAGAN|TASTING|ROTARY|START-UP|OVARIAN|HEARTY|ANTIOXIDANT|DEEP|BAPTIST|CONVERTIBLE|ON-DEMAND|PRACTICAL|64-BIT|PRE-EXISTING|BUMPER|SEMI|WEEKLY|SAVVY|PRESCHOOL|POST-SECONDARY|ABSTRACT|FAST-PACED|MULTIDISCIPLINARY|LIFE-THREATENING|CHIC|RITUAL|PLUSH|DERIVATIVE|MILD|TAN|DUE|ANCIENT|MULTICULTURAL|AFFIRMATIVE|RAPID|DEPENDENT|ADD-ON|DECEASED|MAIDEN|CONTINGENT|INNOCENT|CAPTIVE|FOLDING|ONE-OFF|IN-PERSON|JR|BELOVED|COMMUNITY-BASED|ON-CAMPUS|PASSIVE|COMPOSITE|DEDUCTIBLE|LIBERAL|FAKE|CEREMONIAL|BACK-TO-BACK|FULL-SERVICE|STEROID|ARCHIVAL|CONNECTIVE|TOP-NOTCH|HOMOSEXUAL|UNCONSCIOUS|OTTOMAN|HEAVY-DUTY|OFFSET|TOKEN|HDMI|CRIMSON|OPEN-SOURCE|UPPER|DIVINE|SUBSTITUTE|BLONDE|HVAC|REQUISITE|ACE|ANALOGUE|HIP-HOP|STERN|IMPERATIVE|SUGARY|SAVORY|LIFE-CHANGING|INCUMBENT|STANDBY|SCANDINAVIAN|MANAGING|MORMON|COZY|RESTORATIVE|PASTEL|FIDUCIARY|UNFORESEEN|SHORT|EVERGREEN|CONDITIONING|GRAMMY|TURQUOISE|WEBINAR|PROGRESSIVE|ONE-STOP|BITTER|MYSTIC|SHITTY|MALIGNANT|DATA-DRIVEN|DIVING|STAND-UP|REPUBLICAN|PARTISAN|SUBSIDIARY|LOOSE|SORE|LESBIAN|RECURRENT|SLIGHT|ENDOCRINE|DUMMY|PAKISTANI|FOR-PROFIT|ANGLICAN|ROAST|FLOWERING|OLD-SCHOOL|INVERSE|NIGERIAN|HIGH-RESOLUTION|OFFENDING|TRUE|MAMMOTH|RUNAWAY|INDUSTRY-LEADING|FERAL|EXTREMIST|SUBCONSCIOUS|MILITANT|EARNEST|RHEUMATOID|SMALL|CARING|THREE-POINT|ASIAN|SPARE|FACIAL|ISLAMIST|NATIONALIST|JUMBO|TOUCHSCREEN)\s/ig, "$1_JJ_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(FRONT-END|CATCHY|MOROCCAN|SLACK|COOPERATIVE|COUNTERFEIT|CASE-BY-CASE|DARLING|BURST|TART|PEER-REVIEWED|OPEN-AIR|COLOMBIAN|RIGHT-CLICK|CRUDE|FEMININE|JESUIT|SAVAGE|LUSH|SENTENCING|FIRST-PERSON|CARDINAL|BACCALAUREATE|PEER-TO-PEER|IN-APP|SINGLE-FAMILY|AT-RISK|DOWNHILL|MAYAN|POSTSECONDARY|ASTRAL|360-DEGREE|MEXICAN|FILIPINO|PITUITARY|COSMOPOLITAN|BRAVE|LONG-AWAITED|SELF-HELP|POSTDOCTORAL|PREREQUISITE|TRANSVERSE|TWO-PART|DECADENT|AMISH|DELINQUENT|PERPENDICULAR|T-MOBILE|LIFE-SAVING|WORK-RELATED|CONTRACEPTIVE|FIRST-DEGREE|KOREAN|IMPROMPTU|CLOSE-UP|3-POINT|NUDE|UP-AND-COMING|JAMAICAN|MIDI|INUIT|X-RAY|BOOMING|ALL-AMERICAN|GRIZZLY|INDIGO|FLEDGLING|PLURAL|SCOTCH|POLISH|EMERGENT|SWITCHING|IN-STATE|AFRICAN|DEV|FORENSIC|SOYBEAN|BINDING|HEXADECIMAL|SHIFTING|LOW-FAT|LYRIC|WIN-WIN|OFF-CAMPUS|DO-IT-YOURSELF|STEEP|IN-HOME|REFLEX|HEALTH-RELATED|OUT-OF-POCKET|MRI|PICTORIAL|WORK-LIFE|OFF-SITE|GOOFY|ON-THE-JOB|WELSH|ALL-PURPOSE|OVER-THE-COUNTER|MOISTURIZING|BUTTERY|FREAK|HIGH-ENERGY|T-SHIRT|E-LEARNING|NUTTY|ARCHITECTURAL|MODAL|SUNSCREEN|SOMALI|MOSAIC|COMMAND-LINE|MANIFOLD|BANKRUPT|HARD-EARNED|NON-STANDARD|SEPERATE|ANTI-VIRUS|DAMP|BLOCKING|CONTRARY|MAORI|GRINDING|MULTI-CHANNEL|ZIONIST|MONOCHROME|WESLEYAN|BACK-END|WATER-BASED|LAMINATE|AZTEC|COMEDIAN|FEMORAL|NOBLE|PRE-MADE|EXPLOSIVE|AWE-INSPIRING|FLIMSY|TWO-STORY|SECOND-DEGREE|KARDASHIAN|LITHIUM-ION|WIZARD|MATING|DAMN|BEIGE|HOMECOMING|PRE-OWNED|THOUGHT-PROVOKING|SELF-DIRECTED|CELIAC|RECORD-BREAKING|CROSS-PLATFORM|LITE|INFRARED|HANDHELD|FLUSH|BULGARIAN|HIGH-SCHOOL|TITAN|SQUAT|RASH|WHOLESALE|ETSY|PARALYMPIC|SWEDISH|CAPILLARY|FIRST-COME|VENEZUELAN|LIEN|TWO-RUN|AIR-CONDITIONED|IN-LINE|CIRCADIAN|SCULPTURAL|TOP-TIER|IN-FLIGHT|HIGH-PRESSURE|AT-HOME|BRICK-AND-MORTAR|NON-RESIDENT|STORE-BOUGHT|GAME-WINNING|GUI|CRAZY|ELIZABETHAN|MARCHING|SOCIALIST|GALACTIC|STRETCHY|VIOLET|TREBLE|MIXED-USE|SERVER-SIDE|SINGLE-PLAYER|HIGH-VALUE|CHEVY|OUTBOARD|POINTY|ONE-MAN|LIVE-ACTION|TUSCAN|VERTEBRAL|LIBERTARIAN|HIGH-POWERED|ONE-PIECE|EXPECTANT|TURKISH|ADVENTIST|ISSUING|HIGH-DEFINITION|ATTENDANT|SCRIPTURAL|COSMETIC|EXTRATERRESTRIAL|STOUT|PARMESAN|MOTLEY|UTMOST|WII|ACTION-PACKED|LOWERCASE|ARGENTINE|AVANT-GARDE|PRO-LIFE|THREE-WAY|COLLEGE-LEVEL|FAST-FOOD|SENTIENT|CHILEAN|APRICOT|QUAKER|EMMY|CAUCASIAN|MID-SIZE|MINIATURE|JUMPING|ROUND-TRIP|ANGLO-SAXON|HIGH-GRADE|DEPENDANT|GIRLY|SELF-GUIDED|TENSE|BI|ANTIVIRAL|POTTY|SOLID-STATE|LOW-CARB|CLIENT-SIDE|LOW-LIGHT|MAYORAL|TABOO|NON-NATIVE|WIDE-ANGLE|GRASS-FED|E-BOOK|COMMUNIST|SUFFERING|HIGH-FREQUENCY|MULTI-LEVEL|MASCULINE|GAME-CHANGING|CLEARING|SEARING|CAROTID|DYSTOPIAN|MERCENARY|SAVOURY|SELF-TITLED|GROTESQUE|TRANSCENDENT|BUBBLY|SAXON|ON-PREMISE|POLYCARBONATE|DEBIAN|ALL-WHEEL|WIDESCREEN|NO-NONSENSE|TOP-RATED|KITTY|LIMP|EUCALYPTUS|FUNDAMENTALIST|STIFF|FOUR-WHEEL|TOP-OF-THE-LINE|COSY|TALIBAN|CATALAN|CUNNING|HUMANOID|OFF-THE-SHELF|GROWN-UP|PARATHYROID|TABLOID|SELF-WORTH|VALUE-BASED|SEMI-FINAL|HIGH-INTENSITY|DIMINUTIVE|IN-ROOM|LESSER-KNOWN|JAW-DROPPING|FALLOPIAN|TWO-STEP|TWO-YEAR-OLD|CONSTITUTIONAL|ON-AIR|ROLLING|FOUR-CYLINDER|MELANCHOLY|MOLAR|EARLY-STAGE|WEIGHT-LOSS|ANSWERING|NONVERBAL|HIGHER-LEVEL|NERDY|SELF-DEFENSE|ERRANT|HIGH-VOLUME|INTERCULTURAL|TAXING|OPERATIVE|REGULAR|MID-LEVEL|BREAKAWAY|MOUTH-WATERING|DIE-HARD|ROMANCE|BUFF|ANTIDEPRESSANT|SELF-TAUGHT|COMMONPLACE|KINDRED|HIGH-IMPACT|DJI|BOARD-CERTIFIED|PROJECT-BASED|API|E-LIQUID|SHRINKING|SECOND-ROUND|ANESTHETIC|ABSOLUTE|NAZI|NEOLIBERAL|GOD-GIVEN|CARDIAC|ATHEIST|LONG-HAUL|FOUR-YEAR-OLD|SECOND-PLACE|MONGOLIAN|ADEPT|RHYMING|FOOTBALLING|AFRICAN-AMERICAN|RADIAL|COLONIAL)\s/ig, "$1_JJ_NN1 ");
document.getElementById("MT").value = res;
//Prison_NP1 complex_JJ_NN1
var str = document.getElementById("MT").value;
var res = str.replace(/(\w+_N\w+ complex)_JJ(_NN1)\s/ig, "$1$2 "); 
document.getElementById("MT").value = res;
//The_AT sales_NN assistant_JJ_NN1 persuaded_VVD
var str = document.getElementById("MT").value;
var res = str.replace(/(_A\w+ \w+_N\w+ \w+)_JJ(_NN1 \w+_V\w+)\s/ig, "$1$2 "); 
document.getElementById("MT").value = res;
//that_DD1 female_JJ_NN1 if_CS
var str = document.getElementById("MT").value;
var res = str.replace(/(_D\w+ \w+)_JJ(_NN1 \w+_C\w+)\s/ig, "$1$2 "); 
document.getElementById("MT").value = res;
// due_JJ_NN1 to_TO arrive_VVI
var str = document.getElementById("MT").value;
var res = str.replace(/(due_JJ)_NN1 (to_TO \w+_V.I)\s/ig, "$1 $2 "); 
document.getElementById("MT").value = res;
//English_JJ_NN1 is_VBZ
var str = document.getElementById("MT").value;
var res = str.replace(/_JJ(_NN1 is_VBZ)\s/ig, "$1 "); 
document.getElementById("MT").value = res;
//teaching_NN1 English_JJ_NN1 to_II students_NN2
var str = document.getElementById("MT").value;
var res = str.replace(/(ing_NN1 \w+)_JJ(_NN1 \w+_II \w+_NN\w+)\s/ig, "$1$2 "); 
document.getElementById("MT").value = res;
//studied_VVD English_NP1 ,_, French_JJ_NN1
var str = document.getElementById("MT").value;
var res = str.replace(/(_V\w+ \w+_N\w+ ,_, \w+)_JJ(_NN1)\s/ig, "$1$2 "); 
document.getElementById("MT").value = res;
//air_NN1 conditioning_JJ_NN1
var str = document.getElementById("MT").value;
var res = str.replace(/(air_NN1 conditioning)_JJ(_NN1)\s/ig, "$1$2 "); 
document.getElementById("MT").value = res;
//Other_NN1 charities_NN2 //the_AT right_NN1 one_PN1 ._. right_JJ_NN1 
var str = document.getElementById("MT").value;
var res = str.replace(/(_JJ)_NN1 (\w+_P?N\w+)\s/ig, "$1 $2 "); 
document.getElementById("MT").value = res;
//ory suffix
var str = document.getElementById("MT").value;
var res = str.replace(/\b([A-Za-z]+ory)\s/ig, "$1_JJ_NN1 ");
document.getElementById("MT").value = res;
//second_MD annual_JJ_NN1 Wetzlar_NP
var str = document.getElementById("MT").value;
var res = str.replace(/(_M\w* \w+_JJ)_NN1 (\w+_NP\w+)\s/ig, "$1 $2 ");
document.getElementById("MT").value = res;
//terrible patch =  In_II other_NN1 words_NN2 
var str = document.getElementById("MT").value;
var res = str.replace(/(_I\w* \w+_JJ)_NN1 (\w+_N\w*)\s/ig, "$1 $2 ");
document.getElementById("MT").value = res;
//noun or singular verb 
var str = document.getElementById("MT").value;
var res = str.replace(/\b(access|dip|WORK|SUPPORT|PROCESS|EXPERIENCE|ACCOUNT|PLACE|SHOW|CHANGE|MARKET|HELP|SERVICE|PLAN|TEST|FORM|CARE|LOVE|PROGRAM|STATE|DRIVE|CONTROL|PLAY|RESEARCH|EMAIL|STEP|VIDEO|TEAM|CREDIT|LOOK|DESIGN|GUIDE|TRUMP|TRAVEL|APP|CALL|RELEASE|END|DAMAGE|FILE|LINK|NOTE|START|NEED|SHARE|CHECK|FORMAT|TAX|COLOR|PRESS|CONTACT|INCREASE|PHONE|SEARCH|AGE|RISK|POINT|COST|CODE|SUPPLY|FIRE|TRUST|STOP|PAY|PACK|TRANSFER|LIST|STORE|LEAD|ATTACK|QUESTION|REPORT|ADDRESS|GRADE|TRAIL|MIND|CAREER|DEAL|ISSUE|WATCH|MATCH|LINE|FAN|HEAD|COMMAND|DISPLAY|FOCUS|REVIEW|VIEW|INTERFACE|ORDER|BREAK|LICENSE|MACHINE|SPACE|FALL|STUDY|TWITTER|EXERCISE|DATE|TAB|STAND|TAG|SCORE|HOUSE|CHALLENGE|RIDE|COACH|REPAIR|MOVE|SWITCH|TITLE|WALK)\s/ig, "$1_NN1_VV0 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(PAINT|REQUEST|VISIT|OBJECT|BOARD|TALK|BLOG|FINISH|HEAT|TRAIN|GUARD|SKIN|FACE|BUTTON|SITE|RING|OFFER|PASS|RETURN|PROJECT|CAUSE|DEMAND|COMFORT|BENEFIT|SIGN|NOTICE|FINANCE|SLEEP|RANGE|CLICK|SPEED|DANCE|DROP|PURCHASE|TURN|STUFF|MARK|TIP|SPRING|RECORD|GRADUATE|MIX|REASON|TRACK|FEATURE|COUNT|TRADE|FUNCTION|HOPE|CASH|HOST|ROLL|LOAD|DRAFT|SCREEN|ACT|FEED|DRESS|MATTER|LIMIT|COMMENT|BAR|PRINT|TOUCH|CLOUD|LABEL|COPY|DRINK|ROCK|GAIN|RESULT|CLAIM|FEAR|POSITION|ANSWER|CRUISE|THREAD|FIGHT|SHOP|MONITOR|PLANT|IRON|SEARCH|DOWNLOAD|PAGE|BRAND|GUARANTEE|CABLE|STICK|TARGET|ROW|CHANNEL|WIND|PAD|WASTE|STRING|RISE|ACT|BUDGET|RULE|LAUNCH|CHAT|RESPECT|BLOCK|WATER|SECTION|HOLD|STRESS|TELEPHONE|BACKUP|SUIT|BASE|PRICE|LOG|FASHION|MAP|REST|TYPE|BOOK|FIELD|DREAM|POP|LEAVE|PACKAGE|BREAKFAST|REFERENCE|DEFAULT|BOOST|BALANCE|SCHEDULE|PICTURE|FIGURE|HANDLE|BRUSH|UPGRADE|SHAPE|BOX|MOUNT|EXIT|IPHONE|DEPOSIT|PARTNER|SAMPLE|APPROACH|SOUND|WASH|BOOT|CHICKEN|DOCUMENT|HOLIDAY|LABOR|FLAVOR|IMPACT|FRAME|POWER|ATTEMPT|RESCUE|FILTER|NECK|MOTOR|LIFT|FORCE|CRASH|COUPLE|PLUG|CONTRACT|E-MAIL|WEATHER|CLIP|FIX|SMOKE|PROGRESS|JUMP|CHARGE|INFLUENCE|STROKE|BUG|SKI|LAND|DELAY|VISA|RACK|SCALE|SPRAY|SEAL|BRAKE|VOICE|STRIKE|CAMPAIGN|ARCHIVE|INTERVIEW|BIN|SURVEY|CAPTURE|CRAFT|GRANT|RENT|VOTE|WRAP|VERSE|STEM|PROFILE|FOOTAGE|TASTE|MASTER|COUNTER|QUOTE|SCAN|GAME|DUST|EXCHANGE|CHASE|GRIP|PIN|GROUP|WONDER|PREVIEW|TIE|COMBAT|AWARD|WORKOUT|SOIL|RAIN|OUTPUT|REACH|DESERT|BEACH|COLOUR|WIRE|TANK|JUDGE|SNOW|SLIDE|ROOM|BOND|MASSAGE|VALUE|JAM|EXPORT|LOL|HAND|SUPPLEMENT|DIET|SIDE|EXTRACT|HARM|BATTLE|CHART|DETAIL|FLY|KICK|GLUE|MAIL|BAN|INDEX|SHIP|EXHAUST|HIRE|LAYER|BANK|SIGNAL|SPELL|CHAIN|SURPRISE|HONOR|SEED|TREAT|PLOT|BLEND|EFFECT|STACK|RELAY|HAVENT|STATE|RALLY|ALARM|MAN|WISH|TRICK|SCREW|SYRUP|TAPE|BEAM|STAR|PATROL|DISCOUNT|OFFENSE|WAX|BOMB|FUND|DESIRE|PROFIT|SHOULDER|PROMISE|ESCAPE|EXPERIMENT|HATE|INPUT|THEYVE|ROOT|COIL|ADVANCE|PEDAL|SPONSOR|SPOT|CAP|COULDNT|BURN|STREAM|HINT|ATTRIBUTE|QUERY|ANGER|TAP|DEFEAT|PARK|MOON|SHINE|POST|DRILL|NURSE|SINK|VENTURE|PEAK|SCOUT|HOP|VOLUNTEER|AID|SMELL|SHOWER|PRAISE|TRAP|PITCH|ZIP|AIR|CLUSTER|HORSEPOWER|CASE|CONFLICT|STORM|WITNESS|CONCERN|FLOWER|TUNE|STAMP|SHADOW|JOURNEY|SORT|CONDUCT|STRAIN|BRIDGE|SWIM|PLANT|SWING|SMARTPHONE|DIVE|BRANCH|SPRINT|PASTE|ALOT|JACK|DAM|SIZE|CROSS|ESTIMATE|TABLE|SHIELD|TEAR|SPIN|TRANSPORT|INSERT|BET|FERRY|HUNT|LACK|WAVE|THROW|PHOTOGRAPH|CHAIR|OUTREACH|YIELD|LOOP|APPEAL|DRAIN|COMPOUND|SHAME|DIAL|EASE|BORDER|SLIP|BOTTLE|PIPE|CONTRAST|PLAYOFF|PUMP|ABUSE|COUNSEL|RATE|FOIL|STARTUP|DEBIT|NAIL|BEAR|LEAK|CATCH|MINISTER|REPLY|FOUNDER|STYLE|EBAY|SENSE|CAMPAIGN|DASH|STOCK|COOK|TROUBLE|DECREASE|RUSH|THEYLL|CHARM|SCHOOL|FOAM|INTEREST|CENTER)\s/ig, "$1_NN1_VV0 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(ENCOUNTER|FLOOD|TRIGGER|CRY|PICTURE|ECHO|STRUGGLE|STITCH|PINE|POWDER|PILOT|MOLD|RIG|PATCH|EXHIBIT|HARVEST|LOUNGE|DISCHARGE|REWARD|SHOCK|BLOGGER|SMILE|CLASS|TRASH|ANGLE|DECLINE|ADVOCATE|ENGINEER|LOCK|CURE|CUP|BULK|FARE|RUST|MURDER|WARRANT|LEASE|CAUTION|URL|STREAK|SETUP|NETWORK|BLAST|IMPORT|BITE|SPARK|DISH|REVIEW|SCHEME|PUNCH|DRONE|SWEAT|CONTEST|BID|SHELTER|BATH|PART|LANDSCAPE|BAY|CIRCLE|SOAP|BLOW|YOGURT|LAG|STAIN|LEAF|IVE|CLASH|IMAGE|FREEZE|DRUM|COAT|WEB|GAMEPLAY|TRANSIT|TONE|VACUUM|SACRIFICE|REMEDY|COACH|SIN|MIRROR|KID|FLASH|NUMBER|CLIMB|DIVORCE|WEVE|TWIST|COMMISSION|CONSENT|PICNIC|CROP|PORN|ECOSYSTEM|OIL|SOURCE|QUEUE|FAX|CONTENT|POT|RESERVE|FRANCHISE|NERVE|FLIP|FORECAST|SNACK|GRILL|ZOOM|BOW|YEAST|PROBE|WING|CLUTCH|FILM|LIGHT|SHOE|AUTHOR|GRIT|MARVEL|AFFECT|FOLD|AUDIT|PANIC|DEBATE|VAULT|STATION|COMMISSION|HIKE|WORSHIP|BARK|CARD|ACTION|LECTURE|PEER|FOOTPRINT|TOILET|SHAKE|TACKLE|EXCUSE|TRIM|FUCK|BOWL|BUTT|MOTORCYCLE|REFUND|KISS|BEND|CROWN|TILE|WELCOME|SURGE|GOOGLE|REGARD|DUMP|CLOCK|BREED|DECAY|FLOAT|STRIP|PEN|KERNEL|ASSAULT|ANALOG|BOSS|FLEX|PAUSE|HEADSET|CHARTER|STAGE|WEIGHT|CRUSH|CUSHION|POSITION|NEGLECT|AUCTION|TOAST|POSE|CRACK|BEAT|BUBBLE|FUEL|UPLOAD|SPIKE|BREACH|HACK|ECOMMERCE|BICYCLE|BATTER|SIGHT|THEYD|EXPRESS|ANCHOR|SCRATCH|SLOT|BAIT|SHOULDNT|PRIDE|POISON|VET|HAMMER|GRAB|PARTY|SHADE|SAP|MERCHANDISE|OUTLINE|THUNDER|MASK|VIBE|HEDGE|SIGH|FAULT|SURF|POUND|CARPET|CLUB|BLAME|ACCORD|AIM|WINDOW|TIMELINE|LABOUR|RAPE|OVERSIGHT|ARREST|CHAMPION|RAP|WAKE|CROWD|CLONE|HIGHLIGHT|GANG|CONVERT|BATCH|CRUNCH|PACE|COMPROMISE|TIL|CONFIG|BYPASS|GREASE|SPLASH|PAIN|WHIP|SHORTCUT|STAKE|PROMPT|RAID|PROTEST|SCRUB|PAN|STAPLE|PRINT|PIT|BAIL|SHUTTER|COP|SKATE|DEFECT|WRENCH|PUZZLE|PROP|TORTURE|FAVOR|BALM|BREATH|CON|MINDSET|SPICE|BREW|SCULPTURE|INT|GUM|CROSSOVER|COIN|CLAMP|POST|DUCT|DRIP|PHASE|REFORM|SLICE|LICENCE|PROJECT|PACKET|CURVE|BOUNCE|SWEEP|PEEK|WAGE|PRESSURE|MASSACRE|USERNAME|PIONEER|TRACE|REGRET|CARB|PADDLE|SURFACE|GEL|STALL|REFRESH|BRACE|MATE|SCAM|STRUCTURE|REBATE|WORD|BLUR|DISPUTE|PONG|SPAN|SCROLL|NEST|MERIT|HARBOR|AMOUNT|DRIFT|TOOL|POPCORN|DISTANCE|CHECKOUT|CHILL|TOGGLE|IP|GASKET|SPOON|CART|MISTAKE|CLEANUP|HOOK|PHRASE|CHEAT|AWARD|RADIO|CHEER|PAPER|GAS|DELIGHT|BRUNCH|THROTTLE|MILK|RANK|USD|COUGH|SQUASH|RETREAT|HASSLE|SLAVE|IMPLEMENT|HUMOR|STARCH|GLOW|RINSE|GOSSIP|BUFFER|WHATNOT|FLAP|CORD|SKETCH|SAND|COURT|PEEL|FACTOR|TICK|USB|SOUNDTRACK|DISPATCH|MORTAR|LINE-UP|JAIL|PLEDGE|SCRAP|SUSPECT|CENTRE|RETURN|PIECE|SPOT|TILT|MANUFACTURE|TAR|WEDGE|PIVOT|STROLL|HAZARD|SLAM|BIAS|CYCLE|GEAR|HEAL|SPONGE|RECRUIT|GLANCE|OVERFLOW|BAT|LICENSURE|SKIP|SUGAR|HASH|HEADLINE|REBEL|PUN|TRAFFIC|BILL|SEAT|AIRFLOW|mortgage|SHOUT|LANCE|BUNDLE|ARMOUR|GAMBLE|premise|jail|assault|silence|duck)\s/ig, "$1_NN1_VV0 ");
document.getElementById("MT").value = res;
//we_PPIS2 could_VM harness_NN1
var str = document.getElementById("MT").value;
var res = str.replace(/(_[PN]\w+ \w+_VM \w+)_NN1(_VV)0\s/ig, "$1$2I "); 
document.getElementById("MT").value = res;
//_TO ,_, maybe_RR ,_, smell_VV0
var str = document.getElementById("MT").value;
var res = str.replace(/(_TO ,_, \w+_RR ,_, \w+_VV)0\s/ig, "$1I ");
document.getElementById("MT").value = res;
//Go_VV0 help_NN1//same for come
var str = document.getElementById("MT").value;
var res = str.replace(/\b((?:go|come)_VV0 \w+)_NN1(_VV0)\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
//_GE back_JJ_NN1_RP_VV0 ._. 
var str = document.getElementById("MT").value;
var res = str.replace(/(_GE \w+)_JJ(_NN1)_\w+ (._.)\s/ig, "$1$2 $3 ");
document.getElementById("MT").value = res;
//get_VVI my_APPGE self-confidence_NN1 back_JJ_NN1_RP_VV0
var str = document.getElementById("MT").value;
var res = str.replace(/(_VV\w+ \w+_A\w+ [\w\-]+_N\w+ \w+)_JJ_NN1(_RP)_VV0\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
//this is a hard one.  
var str = document.getElementById("MT").value;
var res = str.replace(/(_N\w* to)_T\w+ (date)_V\w+\s/ig, "$1_II $2_NN1 ");
document.getElementById("MT").value = res;
////a_AT1 very_RG intimate_JJ record_NN1_VV0
var str = document.getElementById("MT").value;
var res = str.replace(/(_\w+1 \w+_RG \w+_JJ \w+_NN1)_VV0\s/ig, "$1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/(_JJ \w+_NN1)_VV0\s/ig, "$1 ");//not catching the above!
document.getElementById("MT").value = res;
// is_VBZ currently_RR number_VV0
var str = document.getElementById("MT").value;
var res = str.replace(/(_VB\w+ \w+_RR \w+_NN1)_VV0\s/ig, "$1 ");
document.getElementById("MT").value = res;
//number_NN1 one_PN1
var str = document.getElementById("MT").value;
var res = str.replace(/(number_NN1 one_MC1)_PN1\s/ig, "$1 ");
document.getElementById("MT").value = res;
//my_APPGE head_VV0
var str = document.getElementById("MT").value;
var res = str.replace(/(_APPGE \w+_NN1)_VV0\s/ig, "$1 ");
document.getElementById("MT").value = res;
//give_VVI them_PPHO2 access_VV0
var str = document.getElementById("MT").value;
var res = str.replace(/(_VV\w+ \w+_P\w+ \w+_NN1)_VV0\s/ig, "$1 ");
document.getElementById("MT").value = res;
//wrote_VVD her_APPGE email_NN1 address_VV0//because it should be vvz after nn1.
var str = document.getElementById("MT").value;
var res = str.replace(/(_NN1 \w+_NN1)_VV0\s/ig, "$1 ");
document.getElementById("MT").value = res;
//as_CSA Gossip_VV0
var str = document.getElementById("MT").value;
var res = str.replace(/(_CSA \w+_NN1)_VV0\s/ig, "$1 ");
document.getElementById("MT").value = res;
//ca_VM n't_XX bear_NN1_VV0
var str = document.getElementById("MT").value;
var res = str.replace(/(_VM n.t_XX \w+)_NN1(_VV)0\s/ig, "$1$2I ");
document.getElementById("MT").value = res;
//might_VM help_NN1_VV0
var str = document.getElementById("MT").value;
var res = str.replace(/(_VM \w+_)NN1_(VV)0\s/ig, "$1$2I ");
document.getElementById("MT").value = res;
//Help_VV0 us_PPIO2 understand_VV0
var str = document.getElementById("MT").value;
var res = str.replace(/(Help\w*_VV\w+ \w+_[NDP]\w+ \w+_VV)0\s/ig, "$1I ");
document.getElementById("MT").value = res;
//by_II conscious_JJ control_VV0
var str = document.getElementById("MT").value;
var res = str.replace(/(_II \w+_JJ \w+_NN1)_VV0\s/ig, "$1 "); 
document.getElementById("MT").value = res;
//complicated_JJ process_VV0 to_TO get_VVI
var str = document.getElementById("MT").value;
var res = str.replace(/(_JJ \w+_NN1)_VV0 (to_TO)\s/ig, "$1 $2 "); 
document.getElementById("MT").value = res;
//this is a specific problem even CLAWS gets it wrong: problem_NN1 we_PPIS2 all_DB face_NN1
var str = document.getElementById("MT").value;
var res = str.replace(/(problem_NN1 \w+_P\w+ \w+_DB face)_NN1(_VV0)\s/ig, "$1$2 "); 
document.getElementById("MT").value = res;
// identity_NN1 and_CC comfort_VVI
var str = document.getElementById("MT").value;
var res = str.replace(/(_NN1 \w+_CC\w* \w+_NN1)_VV\w*\s/ig, "$1 "); 
document.getElementById("MT").value = res;
//pretty smile
//pretty_JJ_RG smile_NN1_VV0 = double double! pretty_JJ_RG face_VV0
var str = document.getElementById("MT").value;
var res = str.replace(/(_JJ)_RG (\w+_NN1)_VV0\s/ig, "$1 $2 ");
document.getElementById("MT").value = res;
//yet_RR humans_NN2 today_RT no_RR21 longer_RR22 fear_NN1 animal_NN1
var str = document.getElementById("MT").value;
var res = str.replace(/(_R\w+ \w+)_NN1(_VV0 \w+_N\w+)\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
//frustration_NN1 and_CC anger_NN1_VV0 ._. 
var str = document.getElementById("MT").value;
var res = str.replace(/(_NN1 \w+_CC \w+_NN1)_VV0 (._.)\s/ig, "$1 $2 ");
document.getElementById("MT").value = res;
//please_RR_VV0 contact_NN1_VV0 me_PPIO1 ._.
var str = document.getElementById("MT").value;
var res = str.replace(/(_RR)_VV0 (\w+)_NN1(_VV0)\s/ig, "$1 $2$3 ");
document.getElementById("MT").value = res;
//choose_VVI this_DD1 place_VV0
var str = document.getElementById("MT").value;
var res = str.replace(/(_V\w+ \w+_D\w+ \w+_NN1)_VV0\s/ig, "$1 ");
document.getElementById("MT").value = res;
//take good_JJ care
//the_AT biggest_JJT challenge_VV0
var str = document.getElementById("MT").value;
var res = str.replace(/(_[VAD]\w+ \w+_J\w+ \w+_NN1)_VV0\s/ig, "$1 ");
document.getElementById("MT").value = res;
//to_II figure_NN1_VVI out_RP
var str = document.getElementById("MT").value;
var res = str.replace(/(\w+)_NN1(_VV[0I] \w+_RP)\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
//how_RRQ to_TO work_NN1_VVI 
var str = document.getElementById("MT").value;
var res = str.replace(/(_RRQ to_TO \w+)_NN1(_VVI)\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/(to_)II (\w+_VVI)\s/ig, "$1TO $2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/(fire)_\w+ (dancing)_\w+\s/ig, "$1_NN1 $2_NN1 ");
document.getElementById("MT").value = res;
//this just gets incorrectly tagged...
var str = document.getElementById("MT").value;
var res = str.replace(/(silence)_\w+ (needs)_\w+\s/ig, "$1_NN1 $2_VVZ ");
document.getElementById("MT").value = res;
//the_AT morning_NNT1 fight_NN1_VV0
var str = document.getElementById("MT").value;
var res = str.replace(/(_A\w+ \w+_NNT1 \w+_NN1)_VV0\s/ig, "$1 ");
document.getElementById("MT").value = res;
//being_VBG work_NN1_VV0
var str = document.getElementById("MT").value;
var res = str.replace(/(_V\wG \w+_NN1)_VV0\s/ig, "$1 ");
document.getElementById("MT").value = res;
//a_AT1 peaceful_JJ end_VV0// a_AT1 satisfactory_JJ answer_VV0
var str = document.getElementById("MT").value;
var res = str.replace(/(_A\w+ \w+_JJ \w+_NN1)_VV0\s/ig, "$1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/(_II \w+_NN1)_VV0\s/ig, "$1 ");
document.getElementById("MT").value = res;
////Less_DAR waste_NN1_VV0
var str = document.getElementById("MT").value;
var res = str.replace(/(_DAR)\w* (\w+_NN1)_VV0\s/ig, "$1 $2 ");
document.getElementById("MT").value = res;
////needed_VVD help_NN1_VV0
var str = document.getElementById("MT").value;
var res = str.replace(/\b(\w+_VV\w* \w+_NN1)_VV0\s/ig, "$1 "); 
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(\w+_A\w* \w+_NN1)_VV0\s/ig, "$1 "); 
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;//so frustrating that these long pages of words don't catch now.  so have to make shorter ones again.
var res = str.replace(/\b(dealt|found|got|talked|touched|won|worked|said)\s/ig, "$1_VVD_VVN "); 
document.getElementById("MT").value = res; 
//past simple vs past particple VVD_VVN// try splitting this up into lines of 10?
//
var str = document.getElementById("MT").value;
var res = str.replace(/\b(associated|based|seduced|INCLUDED|NEEDED|RECEIVED|TURNED|STARTED|WANTED|DECIDED|PUBLISHED|ANNOUNCED|FELT|REPORTED|ADDED|HELD|BROUGHT|CREATED|POSTED|PLAYED|SENT|OPENED|BOUGHT|SPENT|BUILT|LOOKED|CHANGED|LED|CONTINUED|HELPED|PASSED|FAILED|DIED|KEPT|HAPPENED|MOVED|MEANT|ASKED|ARRIVED|CAUSED|HEARD|OFFERED|MENTIONED|FOLLOWED|APPEARED|REMAINED|SOLD|MANAGED|PAID|REVEALED|NAMED|SERVED|PRODUCED|REACHED|INSTALLED|LIVED|STATED|ENJOYED|OCCURRED|MET|LEARNED|NOTED|SUGGESTED|PROVED|STOPPED|EARNED|SCORED|AGREED|SEEMED|JOINED|ISSUED|DESCRIBED|ENTERED|BELIEVED|EXPLAINED|LAUNCHED|PICKED|LOCATED|DROPPED|CLAIMED|REMOVED|COMPLETED|RAISED|COVERED|PRESENTED|NOTICED|INCREASED|CONSIDERED|PULLED|DEVELOPED|ORDERED|CAUGHT|PURCHASED|CONTAINED|INTRODUCED|INDICATED|LISTED|RETURNED|CARRIED|KILLED|REFUSED|DESIGNED|CONFIRMED|INTENDED|SIGNED|PERFORMED|STAYED|ESTABLISHED|TRIED|ENABLED|ATTENDED|DELIVERED|LIKED|FEATURED|EXPECTED|CONCLUDED|POINTED|RELATED|SUFFERED|GAINED|RECORDED|FORMED|STRUCK|FOCUSED|REPLACED|VISITED|FILLED|TESTED|SAVED|MISSED|RECOMMENDED|HOSTED|REALIZED|SOUGHT|SAT|EXISTED|DECLINED|STOOD|REPRESENTED|CONDUCTED|SUPPORTED|APPROVED|FILED|SUBMITTED|FED|ANSWERED|VOTED|CHECKED|LAID|DISCUSSED|CAPTURED|PUSHED|FORCED|TAUGHT|RATED|GRANTED|HANDED|FACED|GENERATED|EXPERIENCED|DECLARED|FIRED|DESTROYED|PLANNED|OWNED|REDUCED|ROLLED|WALKED|REVIEWED|APPLIED|COLLECTED|UPDATED|DEMONSTRATED|INFORMED|PARTICIPATED|ORGANIZED|RULED|ARGUED|ADMITTED|READ|MIXED|ADOPTED|EMERGED|RESPONDED|FIGURED|TIED)\s/ig, "$1_VVD_VVN ");
document.getElementById("MT").value = res;
//
var str = document.getElementById("MT").value;//keep me posted
var res = str.replace(/(Kee?ps?t?i?n?g?_V\w+ [\w\s]+)_VVD(_VVN)\s/ig, "$1$2 "); 
document.getElementById("MT").value = res; 
var str = document.getElementById("MT").value;
var res = str.replace(/\b(ACCEPTED|KICKED|TARGETED|DENIED|RECOGNIZED|REJECTED|ENCOURAGED|ATTEMPTED|FOUGHT|UNDERSTOOD|ACQUIRED|RESULTED|APPROACHED|EXPRESSED|CHARGED|WRAPPED|WARNED|DEFINED|COMMENTED|INSPIRED|JUMPED|DISPLAYED|GRABBED|OBSERVED|COMBINED|STUCK|SOUNDED|PROMISED|OBTAINED|EXCEEDED|DEMANDED|EMPLOYED|CITED|CROSSED|ATTACKED|CONTRIBUTED|CLEANED|BACKED|MAINTAINED|STEPPED|CONTROLLED|CENTERED|HUNG|EXAMINED|DISAPPEARED|STUDIED|SPECIFIED|THREATENED|FOUNDED|HIGHLIGHTED|CLEARED|CONTACTED|SUPPLIED|ADDRESSED|BURNED|PROMPTED|LANDED|TOPPED|STRUGGLED|BELONGED|ASSUMED|DIRECTED|MEASURED|GATHERED|LOCKED|CELEBRATED|TRAVELED|LIFTED|WELCOMED|PREVENTED|IGNORED|ADVISED|COMPARED|CRAFTED|SIDED|REFLECTED|u?n?SETTLED|ACCUSED|URGED|INVITED|EXPANDED|TAGGED|PROPOSED|KNOCKED|HANDLED|ATTRACTED|REMINDED|HOPED|WATCHED|SECURED|SHIPPED|AIMED|POPPED|VIEWED|DECREASED|PREDICTED|DONATED|COMPLAINED|CRASHED|STRESSED|PLEADED|SEIZED|EXPOSED|SURVEYED|IMPLIED|FLED|REGISTERED|WEIGHED|COMPETED|TRADED|AVERAGED|SPARKED|EDITED|INVESTED|LASTED|ABANDONED|DOMINATED|HIRED|BLOCKED|SWITCHED|COMPOSED|APPRECIATED|WASHED|ACKNOWLEDGED|DISMISSED|DELETED|LISTENED|WAITED|PRESSED|PACKED|HEADQUARTERED|ENGAGED|CONSUMED|REPEATED|REINFORCED|QUESTIONED|WITNESSED|MOUNTED|PROGRESSED|ACTED|REMEMBERED|ILLUSTRATED|DEDICATED|BENT|NESTLED|RESERVED|ENTERTAINED|SEARCHED|CANCELLED|CHALLENGED|POURED|GUARANTEED|INVENTED|COLLAPSED|RUSHED|RECOVERED|STRETCHED|LIT|CALCULATED|EXPLODED|RESOLVED|DESIRED|EVOLVED|YIELDED|COOKED|RANGED)\s/ig, "$1_VVD_VVN ");
document.getElementById("MT").value = res;
//
var str = document.getElementById("MT").value;
var res = str.replace(/\b(DEFENDED|PERMITTED|SLOWED|RECALLED|TUCKED|DEFEATED|REALISED|ENSURED|INTERVIEWED|QUOTED|TASTED|EXECUTED|OWED|REFERENCED|ESCAPED|REFERRED|PRAISED|VIOLATED|POWERED|CLICKED|TRANSFORMED|EXPLORED|COMPILED|SHIFTED|INITIATED|WOUND|DRIED|ARRANGED|INVESTIGATED|AMOUNTED|PITCHED|SURROUNDED|OPPOSED|SURVIVED|SHAPED|DOWNLOADED|STORED|OUTLINED|CONVERTED|ASSISTED|DOUBLED|SWEPT|RETAINED|POSSESSED|LAUGHED|SLIPPED|REVERSED|SPOTTED|EMBRACED|CEASED|EMPHASIZED|EVALUATED|SORTED|LABELED|INFUSED|DETECTED|ELIMINATED|IMPOSED|TRIGGERED|AVOIDED|RETIRED|BRUSHED|SLEPT|POSED|WIPED|TUNED|DEBUTED|ALLEGED|CLIMBED|ENROLLED|DRAGGED|EMITTED|STUMBLED|COPIED|FEARED|UPLOADED|ORIENTED|SEALED|SUCCEEDED|OPTED|SET|CONSISTED|DELAYED|ORIGINATED|ACTIVATED|COUNTED|MODIFIED|COMMENCED|COMPRISED|ROUNDED|AIRED|TOSSED|FLIPPED|BLAMED|EXHIBITED|TIPPED|LOWERED|ACCOMPLISHED|ALIGNED|TEAMED|LOGGED|TASKED|SUCKED|AUGMENTED|BORROWED|DIVIDED|IMPACTED|WASTED|SUED|REACTED|PRAYED|RIPPED|SUPERVISED|PAIRED|SCREWED|INSISTED|DOCUMENTED|UTILIZED|RESTORED|TRANSLATED|DIAGNOSED|PURSUED|DEALT|COINCIDED|PLEDGED|TESTIFIED|CRITICIZED|REMARKED|SURPASSED|ACCOMPANIED|ASSEMBLED|PICTURED|RUBBED|COMMISSIONED|PERCEIVED|INSERTED|DESIGNATED|DRILLED|TRAVELLED|VALUED|RUINED|PARKED|PILED|COLLABORATED|COMMANDED|THANKED|CORRECTED|CARED|PROCEEDED|DUMPED|VERIFIED|SAILED|AIDED|WIRED|DIPPED|ENSUED|SPONSORED|VARIED|ENACTED|EXPIRED|RACED|MARCHED|RESUMED|PRACTICED|CRACKED|AFFIRMED|INSTRUCTED|APPROPRIATED|UPGRADED|LIED|SPELLED|ACCESSED|LEARNT|ADAPTED|RESEMBLED|BOTHERED)\s/ig, "$1_VVD_VVN ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(DRAFTED|MESSED|SMILED|DEPICTED|RENAMED|APPEALED|ENDORSED|ALTERED|RENTED|ASSURED|GRADUATED|HOUSED|TERMED|BRED|UNLOCKED|MODELED|FLOWED|BOOSTED|MONITORED|MELTED|CONSTITUTED|SLATED|FLOODED|PREMIERED|DEPARTED|CONDEMNED|ENHANCED|EXCHANGED|SUSPENDED|INDUCED|DUG|ADVERTISED|TAILORED|SURFACED|ATTRIBUTED|INVADED|REPAIRED|SCREAMED|GREETED|VOLUNTEERED|TONED|STRIPPED|STAGED|VANISHED|STARRED|RECOGNISED|HACKED|INHERITED|SPUN|STIRRED|ANTICIPATED|GLUED|ENLISTED|SNAPPED|OVERLOOKED|ASSAULTED|BANNED|TENDED|FACILITATED|ECHOED|NUMBERED|SPAWNED|ROCKED|SPURRED|REPLIED|IMAGINED|CONCEDED|RAIDED|TAPPED|STUFFED|DREAMED|SUSTAINED|SUMMED|TOURED|RALLIED|UNCOVERED|ENCODED|RESONATED|DERIVED|SCRATCHED|SWUNG|TRAPPED|FILMED|TRIMMED|PROCESSED|SMASHED|DISTRACTED|DEVISED|INTERPRETED|NOTIFIED|CONTRACTED|AFFORDED|TRACKED|GUIDED|RESISTED|PUMPED|ETCHED|WAVED|STEMMED|LEANED|BONDED|GEARED|FUELED|PERPETRATED|TYPED|JUDGED|UNFOLDED|CUSTOMIZED|HEALED|SPRAYED|CONFRONTED|INSPECTED|CHASED|UNLEASHED|RELIED|EXCLUDED|WARMED|CHEERED|LEAKED|STOCKED|HYDRATED|COLORED|INTERRUPTED|PROHIBITED|FREED|PREVAILED|SURRENDERED|GROUNDED|NOMINATED|SOURCED|COUPLED|SHOWCASED|FULFILLED|COACHED|COOLED|SUSPECTED|AWAITED|WHIPPED|HED|FADED|TRANSPORTED|BEGGED|REGAINED|FLOURISHED|CONCEIVED|EDGED|SOARED|SLID|SLOTTED|INJECTED|KISSED|BOARDED|PHOTOGRAPHED|MURDERED|RESCUED|DEPOSITED|VOICED|STRENGTHENED|BARRED|PARTNERED|FLASHED|CLARIFIED|STACKED|RESTED|SHONE|CENTRED|FLOCKED|CONFESSED|PERSUADED|HONORED|SMELLED|STARED|ACCENTED)\s/ig, "$1_VVD_VVN ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(UNVEILED|CURLED|SURGED|RENOVATED|ERECTED|SHUT|ERUPTED|TIMED|PROVOKED|PLUNGED|PRECEDED|NARROWED|WISHED|SCREENED|DISCONNECTED|EMPOWERED|SUITED|MATTERED|CRUSHED|SCALED|MERGED|BENEFITED|CHARACTERIZED|GUESSED|TIGHTENED|PIONEERED|MOLDED|ENGINEERED|TWEETED|FAVORED|EMBODIED|DESERVED|STABBED|SPILLED|CHOPPED|PERSISTED|ROTATED|CHIPPED|INSTITUTED|DIFFERENTIATED|APOLOGIZED|CURED|RESIGNED|CURATED|DIMINISHED|BEHAVED|NOTCHED|CARVED|FARED|FINANCED|EXTRACTED|DANCED|SINGLED|DESCENDED|HALTED|TWEAKED|REVISED|PROTESTED|WOUNDED|ENDURED|STYLED|EXCLAIMED|SQUEEZED|REPEALED|OVERTURNED|TRACED|IMPORTED|DARED|RESIDED|SHOUTED|SLAMMED|ADMIRED|FLOATED|ORGANISED|HARVESTED|REPRODUCED|ABSORBED|IGNITED|BAKED|DRAINED|FILTERED|MASTERED|ANALYZED|RESTARTED|RETREATED|USHERED|FREAKED|SAMPLED|OUTFITTED|COMMUNICATED|TACKLED|SKIPPED|BOWED|BOUNCED|BUMPED|DICTATED|DEBATED|SUCCUMBED|DIFFERED|DISCOURAGED|YELLED|WITHHELD|PROGRAMMED|AMENDED|SUBSTITUTED|CONQUERED|DRIFTED|WEAKENED|REGULATED|ANALYSED|BLENDED|SLAPPED|TRANSITIONED|FORMATTED|BREACHED|WANDERED|PATENTED|ELEVATED|PREACHED|SPRINKLED|ATTAINED|LACKED|TAPED|DROWNED|SHATTERED|FASHIONED|BROWNED|DISSOLVED|MARKETED|ASSERTED|ACCOUNTED|CONVEYED|TRUSTED|UPPED|NEGOTIATED|HAILED|CONTEMPLATED|MANIFESTED|CIRCULATED|GROUPED|INFLICTED|CONVENED|SHAVED|WATERED)\s/ig, "$1_VVD_VVN ");
document.getElementById("MT").value = res;
//gets_VVZ walked_VVD
var str = document.getElementById("MT").value;
var res = str.replace(/\b(g[oe]t\w*_V\w+ \w+)_VVD(_VVN)\s/g, "$1$2 "); 
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/(._. \w+)_VVD(_VVN)\s/g, "$1$2 "); 
document.getElementById("MT").value = res;
//a_AT1 verified_JJ phone_NN1 number_NN1 and_CC confirmed_JJ email_NN1 address_NN1 ._. past verbs to adjectives // risky?
var str = document.getElementById("MT").value;
var res = str.replace(/(_A\w+ \w+_)VVD_VVN (\w+_NN[12])\s/ig, "$1JJ $2 "); 
document.getElementById("MT").value = res;
//_VBZ_VHZ waited_VVN 
var str = document.getElementById("MT").value;
var res = str.replace(/_VBZ(_VHZ waited_VVN)\s/ig, "$1 "); 
document.getElementById("MT").value = res;
// work_VVI based_VVD solely_RR on_II
var str = document.getElementById("MT").value;
var res = str.replace(/(_VV\w+ \w+)_VVD(_VVN)\s/ig, "$1$2 "); 
document.getElementById("MT").value = res;
//that_CST God_NP1 made_VVN
var str = document.getElementById("MT").value;
var res = str.replace(/(_C\w+ \w+_[PN]\w+ \w+_VVD)_VVN\s/ig, "$1 "); 
document.getElementById("MT").value = res;
////had_VHD my_APPGE car_NN1 repaired_VVD
var str = document.getElementById("MT").value;
var res = str.replace(/(_VH\w+ \w+_A\w+ \w+_N\w+ \w+)_VVD(_VVN)\s/ig, "$1$2 "); 
document.getElementById("MT").value = res;
//have_VH0 n't_XX decided_VVD
var str = document.getElementById("MT").value;
var res = str.replace(/(_VH\w+ n.t_XX \w+)_VVD(_VVN)\s/ig, "$1$2 "); 
document.getElementById("MT").value = res;
//_VBZ_VHZ not_XX included_VVN ._. 
var str = document.getElementById("MT").value;
var res = str.replace(/(_VBZ)_VHZ (not_XX included_VVN ._.)\s/ig, "$1 $2 "); 
document.getElementById("MT").value = res;
// 's_VBZ_VHZ even_RR stronger_JJR than_CSN
var str = document.getElementById("MT").value;
var res = str.replace(/(_VBZ)_VHZ (\w+_RR \w+_JJR \w+_CSN)\s/ig, "$1 $2 "); 
document.getElementById("MT").value = res;
//_VBZ_VHZ lost_VVN his_APPGE
var str = document.getElementById("MT").value;
var res = str.replace(/_VBZ(_VHZ \w+_VVN \w+_A\w+)\s/ig, "$1 "); 
document.getElementById("MT").value = res;
//'s_VBZ_VHZ now_RT believed_VVN that_DD1//this is impossible.
var str = document.getElementById("MT").value;
var res = str.replace(/(_VBZ)_VHZ (\w+_R\w+ believed)_\w+ (that)_\w+ ([\w\s]+._.)\s/ig, "$1 $2_VVN $3_CST $4 "); 
document.getElementById("MT").value = res;
//_VBZ_VHZ believed_VVN that_CST
var str = document.getElementById("MT").value;
var res = str.replace(/(VBZ)_VHZ (\w+_VVN that_C\w+)\s/ig, "$1 $2 ");
document.getElementById("MT").value = res;
//has_VHZ now_RT turned_VVN green_JJ
var str = document.getElementById("MT").value;
var res = str.replace(/(_VH\w+ \w+_R\w+ \w+)_VVD(_VVN)\s/ig, "$1$2 "); 
document.getElementById("MT").value = res;
//get_VV0 criticized_VVN
var str = document.getElementById("MT").value;
var res = str.replace(/\b(g[oet]\w+ \w+)_VVD(_VVN)\s/ig, "$1$2 "); 
document.getElementById("MT").value = res;
//get_VV0 things_NN2 sorted_VVD_VVN 
var str = document.getElementById("MT").value;
var res = str.replace(/\b(g[oet]\w+ \w+_[PN]\w+ \w+)_VVD(_VVN)\s/ig, "$1$2 "); 
document.getElementById("MT").value = res; 
//They_PPHS2 said_VVD_VVN
var str = document.getElementById("MT").value;
var res = str.replace(/([A-Z]+\w+_P\w+ \w+_VVD)_VVN\s/g, "$1 ");
document.getElementById("MT").value = res;
//I_PPIS1 'd_VHD_VM even_RR have_VHI//a gain no idea why ' words wont follow.
var str = document.getElementById("MT").value;
var res = str.replace(/('d)_VHD(_VM \w+_R\w+ \w+_VH)\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
//'d_VHD_VM already_RR left_VVN// ' punctuation does weird things to regex.
var str = document.getElementById("MT").value;
var res = str.replace(/(_VHD)_VM (\w+_R\w+ \w+_VVN)\s/ig, "$1 $2 ");
document.getElementById("MT").value = res;
//'d_VHD_VM washed_VVD_VVN
var str = document.getElementById("MT").value;
var res = str.replace(/(\'d)_VHD_VM (\w+)_VVD(_VVN)\s/ig, "$1_VHD $2$3 ");
document.getElementById("MT").value = res;
//is_VBZ now_RT mapped_VVD_VVN (this clashes with lots of stuff so it needs a delay. if_CS I_PPIS1 mentioned_VVN
var str = document.getElementById("MT").value;
var res = str.replace(/(_CS\w* \w+_[NP]\w* \w+_VVD)_VVN\s/ig, "$1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/(_VB\w+[\w\s]*\w+)_VVD(_VVN[\w\s]*\W+_\W+)\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
//those_DD2 featured_VVD_VVN  if verb follows then VVN passive
var str = document.getElementById("MT").value;
var res = str.replace(/(_D\w* \w+)_VVD(_VVN \w+_V\w*)\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
//
//'d_VHD_VM washed_VVN
var str = document.getElementById("MT").value;
var res = str.replace(/('d)_VHD_VM (\w+_V\wN)\s/ig, "$1_VHD $2 ");
document.getElementById("MT").value = res;
//base verb//the problem with '\b' is that it doesn't allow first word in sentence... 
var str = document.getElementById("MT").value;
var res = str.replace(/\b(accumulate|hesitate|WANT|GET|THINK|KNOW|MAKE|USE|SEE|TAKE|GO|LOVE|FIND|FEEL|INCLUDE|SAY|KEEP|CLICK|TRY|ADD|BELIEVE|GIVE|THANK|NOTE|PROVIDE|START|HOPE|REMEMBER|OFFER|HELP|CALL|CHOOSE|ASK|ENJOY|CREATE|LEARN|CONTINUE|FOLLOW|WISH|TELL|BUY|ALLOW|PLAY|UNDERSTAND|VISIT|CONSIDER|SUPPORT|SEEM|TURN|AGREE|SHARE|LEAVE|BRING|PLACE|RECOMMEND|APPLY|REQUIRE|ENTER|GUESS|CHANGE|PAY|TEND|RECEIVE|MOVE|SEND|WATCH|MEET|SAVE|STAY|WRITE|BUILD|PLAN|HOLD|EXPECT|WAIT|REMOVE|SPEND|STOP|STATE|BEGIN|PREFER|prance|JOIN|EAT|PICK|HEAR|APPEAR|SUGGEST|REMAIN|SERVE|SELL|LEAD|GROW|CARRY|TRAVEL|PRESS|RETURN|CONNECT|INSTALL|WELCOME|STAND|DEVELOP|FORM|IMAGINE|DRIVE|FOCUS|WALK|WEAR|AVOID|NOTICE|DECIDE|CONTAIN|WIN|FACE|FALL|CAUSE|FILL|CAN|ENSURE|TEST|HAPPEN|SPEAK|LISTEN|INCREASE|WONDER|COST|LOSE|REACH|SIT|APPRECIATE|SIGN|REVIEW|PULL|HATE|MANAGE|TRUST|ENCOURAGE|ACT|DROP|OWN|DOWNLOAD|REFER|SEEK|REDUCE)\s/ig, "$1_VV0 ");
document.getElementById("MT").value = res;

var str = document.getElementById("MT").value;
var res = str.replace(/\b(PRODUCE|MARKET|DIE|EXPLORE|r?e?DISCOVER|PERFORM|IMPROVE|FORGET|REPRESENT|PASS|SUPPOSE|REPEAT|ACCOUNT|REALIZE|FAIL|EXCEL|EXIST|PREPARE|DRAW|ASSUME|TIRE|PUSH|MIX|EDIT|MAINTAIN|PURCHASE|ACCEPT|TEACH|SUBMIT|OCCUR|COMPARE|COMMENT|VIEW|IDENTIFY|EXPLAIN|HEAD|KILL|COMBINE|CLAIM|REPLACE|ENABLE|DRINK|DRAG|DISCUSS|LOL|STEP|EMAIL|DESCRIBE|LINK|ROLL|ARRIVE|VARY|RELEASE|FEATURE|PRINT|THROW|DELIVER|GAIN|PROTECT|SUSPECT|STICK|FINISH|DISPLAY|GOOGLE|AFFECT|EARN|INDICATE|COLLECT|DETERMINE|SHOOT|OPERATE|DELETE|DEAL|SWITCH|SLEEP|GRAB|POUR|COOK|REPORT|TRANSFER|SEARCH|DESERVE|SUFFER|RELY|REFLECT|PROMOTE|FEAR|PREVENT|MATTER|DEFINE|ENGAGE|HANG|QUOTE|ASSIST|TAP|ATTEND|FIGURE|FEED|POP|RECOGNIZE|CONTRIBUTE|BENEFIT|SECURE|COPY|NAME|APP|PRAY|RIDE)\s/ig, "$1_VV0 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(RESPOND|GRADUATE|INVOLVE|REGISTER|WASH|ADJUST|TIP|INVITE|STIR|PARTICIPATE|DEMONSTRATE|COACH|JUMP|MARK|COUNT|CROSS|MIND|TRAIN|SOUND|DEMAND|CATCH|BAKE|LIE|TWITTER|PAINT|CELEBRATE|PROGRAM|AIM|LIST|REPLY|SUPPLY|GENERATE|STORE|PACK|INTEND|TAB|LOAD|RECALL|RISK|BEAT|HOST|PROMISE|SCORE|GATHER|RELAX|IGNORE|ADVISE)\s/ig, "$1_VV0 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(INSERT|RESULT|SUBSCRIBE|BET|ATTACH|ATTEMPT|GRADE|REVEAL|INVEST|BELONG|MONITOR|FIX|PERMIT|ACHIEVE|WORRY|WAKE|MENTION|EXTEND|DEPEND|BLOG|CONSULT|RANGE|SPECIFY|COMMUNICATE|ATTACK|CHALLENGE|TRUMP|HANDLE|INTERACT|STRIVE|LIMIT|DANCE|EXPAND|ENHANCE|EXPRESS|RELATE|TEAM|BROWSE|CHARGE|MACHINE|RESTORE|ADDRESS|SCROLL)\s/ig, "$1_VV0 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(STUDY|STRETCH|DESIRE|REST|CONDUCT|LIFT|DESIGN|DISAGREE|ARISE|WRAP|CONFIRM|HIDE|REFUSE|APPROACH|EXIT|OPT|SING)\s/ig, "$1_VV0 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(ILACK|LOG|ARGUE|ESTABLISH|YOUD|FILE|DRESS|COMMIT|LAUNCH|SLIDE|RECORD|FAN|UPLOAD|DIFFER|PLUG|ADMIT|RENT|COMMAND|STRUGGLE|LICENSE|PUBLISH|HIRE|CONSOLE|DAMAGE|SERVICE|ACKNOWLEDGE)\s/ig, "$1_VV0 ");
document.getElementById("MT").value = res;
//these are still to long = no actually they were missing a line of code!!!
var str = document.getElementById("MT").value;
var res = str.replace(/\b(OBTAIN|ISSUE|POSSESS|RISE|FINANCE|PROCEED|OWE|BURN|RESEARCH|RESERVE|UPGRADE|EXAMINE|RESPECT|INFLUENCE|THEYLL|CANCEL|JUDGE|DREAM|INTRODUCE|FOLD|LINE|SKIP|FORMAT|KINDLE|TIE|HIGHLIGHT|NAVIGATE|PROVE|EVALUATE|MODIFY|SPRAY|UTILIZE|CONSUME|CONVERT|GUARANTEE|WILL|SHOP|LAY|IMPLEMENT|QUALIFY|SNAP|ANALYZE|ENCOUNTER|REMIND|WAN|DIVIDE|BLESS|DIG|TRACK|SOLVE|CONSIST|SHAKE|COMPETE|REACT|INSPIRE|BOOK|OBSERVE|TYPE|VOLUNTEER|BLEND|HEAT|POST|REPAIR|DESTROY|SHUT|VOTE|BEWARE|VALUE|KICK|BRUSH|WASTE|RINSE|CONFIGURE|RESOURCE|GRANT|VERIFY|CALCULATE|ELIMINATE|ASSIGN|RETAIN|OBJECT|EMPLOY|TRANSFORM|ADVANCE|EXPORT|CLIMB|SMOKE|BOOST|WEIGH|FLIP|BLOW|MERGE|TAG|RUB|SPRINKLE|INCORPORATE|EMBRACE|EXCEED|ALERT|IMPORT|SURROUND|SWEAR|ATTRACT|TOSS|SWAP|BREATHE|ARRANGE|YOUVE|RING|ASSESS|DONATE|LAUGH|WARM|QUIT|RENDER|DISABLE|DRAIN|LOCATE|FUCK|WIPE|AGE|TASTE|CUSTOMIZE|ACTIVATE|COOL|UNLOCK|LABEL|ORGANIZE|ZIP|THRIVE|IPHONE|ESTIMATE)\s/ig, "$1_VV0 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(EXHIBIT|DISCONNECT|INFORM|PLANT|MELT|COMPLAIN|GLUE|PICTURE|LIGHT|SUCK|DECREASE|EXECUTE|BEHOLD|TRAIL|FORCE|POSITION|CORRECT|SCREW|CRUISE|SMELL|QUESTION|ADMIRE|SCHEDULE|ALIGN|CONCENTRATE|REALISE|COMBAT|DISTRIBUTE|SHIP|RESIST|SOAK|CHAT|STRIKE|SUCCEED|AGOFROM|TOP|MOUNT|FIRE|SLIP|NOTIFY|INTEGRATE|FADE|DISAPPEAR|MASSAGE|CREDIT|FREEZE|APOLOGIZE|RESIDE|RESET|TARGET|ROTATE|BACKUP|DENY|RESCUE|HONOR|STEAL|SCAN|INSIST|DIRECT|SWIM|MULTIPLY|EMERGE|PASTE|RECOVER|SPECIALIZE|SEW|AFFORD|THREAD|LEAN|HOUSE|PRAISE|THEYVE|SQUEEZE|CONSTITUTE|SLOW|BUTTON|ALTER|POSE|ADOPT|DON|BUG|SETTLE|BLAME|PREDICT|TRACE|ADORE|FORGIVE|INTERFACE|SEAL|DIVE|URGE|TRANSLATE|ESCAPE|WEVE|INVESTIGATE|HOVER|TRADE|FANCY|DEBIT|COLOR|SAIL|PURSUE|SPIN|BEND|GUARD|ACQUIRE|WITNESS|REJECT|CRY|CHASE|STRENGTHEN|DRILL|CF|ADAPT|PERCEIVE|SWING|TUNE|STUFF|RESOLVE|SLICE|ANTICIPATE|BEHAVE|TRIM|COLLABORATE|STAR|COMPLY|STEM|FACILITATE|SIMMER|EVOLVE|COMPRISE|DRAFT|ROCK|DECLARE|DEPLOY|SHINE|LAND|COORDINATE|PREHEAT|OCCUPY|DEFEND|BOARD|STACK|LOCK|TELEPHONE|HOP|CONSTRUCT|CASE|VENTURE|PRESERVE|EDUCATE|REGRET|SUIT|RECOGNISE|INSPECT|MAKEOVER|YIELD|DISLIKE|ASPIRE|ROW|BOOT|ITLL|WHISK|FAX|PROPOSE|TRANSMIT|PLOT|USB|RESTART|VIDEO|FLASH|EXTRACT|CODE|STAFF|AWAIT|TAX|PROGRESS|COUNTER|BANG|PRETEND|APPEAL|BLEED|DETECT|EXCUSE|BOIL|PRIDE|CONCLUDE|WARN|CLEANSE|EMPHASIZE|BIND|ZOOM|DEPOSIT|ANNOUNCE|ADVOCATE)\s/ig, "$1_VV0 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(SKI|RECKON|ABSORB|PEEL|COMPUTE|DATE|PROJECT|FRY|KNOCK|INTERPRET|FLOAT|TIGHTEN|MARVEL|SUSTAIN|BROADCAST|RECYCLE|ILLUSTRATE|DELAY|DOMINATE|MAR|OPTIMIZE|BID|TWEET|MINIMIZE|THREATEN|SPEED|APPROVE|WIND|SMILE|BRAKE|RULE|SPOT|WED|STROKE|EXPOSE|INT|MAXIMIZE|REBUILD|RESEMBLE|TWIST|SHAPE|ANGER|STOCK|PEER|LEND|STITCH|OPPOSE|BIN|CRAVE|DEFEAT|ATTRIBUTE|MATURE|OUTLINE|ADHERE|REGARD|DEPART|STRAIN|DUMP|CORRESPOND|IMPACT|RUSH|DIAL|ABOUND|RESTRICT|HUNT|TACKLE|KISS|SEASON|WANDER|ASSEMBLE|ASSURE|CHUCK|WITHDRAW|SCREEN|PREVIEW|ECHO|BAR|FAVOR|EMBED|GREET|RETIRE|LINUX|CONTENT|STRESS|SPONSOR|DOCUMENT|HEAL|SUPPLEMENT|COMPILE|RANK|DECORATE|IP|SHED|BOND|SNEAK|TREAD|UNDERGO|SHEAR|ERASE|PHONE|OVERCOME|CRACK|ISNT|TICK|FLOOD|RENEW|SWEAT|ADVERTISE|EXCLUDE|HARVEST|GOVERN|SUMMON|CEASE|MASTER|PUNCH|FLAVOR|PIN|RENAME|SHOULDNT|BULK|BORROW|BUSY|UNDERTAKE|RACE|ENROLL|EXPLOIT|BASE|CITE|CATER|BOUNCE|WORKOUT|IPOD|MAP|SPAN|REFERENCE|EXHAUST|SPILL|BALANCE|PACKAGE|OMG|REGULATE|FORECAST|DAMN|UNITE|TRIPLE|SCRATCH|PRICE|CONSENT|PERSIST|E-MAIL|TAPE|BOAST|INITIATE|OVERLOOK|BEG|BITE|DESERT|HARM|PERFECT|COUPLE|GRIND|SATISFY|PARTNER|MAIL|MARRY|WARRANT|CRAWL|SINK|RECRUIT|SPACE|DISCARD|SPRING|HAIL|DINE|BOTHER|GRIP|CAMPAIGN|BULLPEN|SIMPLIFY|SCALE|BATTLE|CHEW|BREED|INDULGE|VIOLATE|EMPOWER|ACCOMPANY|YOUTUBE|PRESUME|SUBTRACT|EASE|UP|THEYD|ARCHIVE|ACCELERATE|WORDPRESS|INTERFERE|CUZ)\s/ig, "$1_VV0 ");
document.getElementById("MT").value = res;
//a little risky possibly but there are so many rare uses of mostly verbs as nouns.. like 'the find'//change verb to noun
var str = document.getElementById("MT").value;
var res = str.replace(/(_A\w+ \w+_)VV0\s/ig, "$1NN1 ");
document.getElementById("MT").value = res;
//did_VDD hear_VV0
var str = document.getElementById("MT").value;
var res = str.replace(/(_VD\w+ \w+_VV)0\s/ig, "$1I ");
document.getElementById("MT").value = res;
//Would_VM n't_XX you_PPY agree_VV0
var str = document.getElementById("MT").value;
var res = str.replace(/(_VM [\'\w]+_XX \w+_[NDP]\w+ \w+_VV)0\s/ig, "$1I ");
document.getElementById("MT").value = res;
//do_VD0 agree_VV0
var str = document.getElementById("MT").value;
var res = str.replace(/(_VD0 \w+_VV)0\s/ig, "$1I ");
document.getElementById("MT").value = res;
//'d_VHD_VM go_VVI - modal choice.
var str = document.getElementById("MT").value;
var res = str.replace(/('d)_VHD_VM (\w+_V\w)[0I]\s/ig, "$1_VM $2I ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(dreams|REPEATS|WORMS|SENSES|ROUTES|SCREAMS|CHIPS|KNOCKS|SAILS|AIRBAGS|DIAGNOSES|JOINS|SCRUBS|NUGGETS|COMFORTS|PEELS|STALKS|SUMS|RIFFS|SKIRTS|INCREMENTS|BLASTS|STAPLES|SEEDS|GERMS|CAPS|BUCKLES|SCALES|SHEDS|LASHES|SPACES|COLLECTIBLES|SURCHARGES|HEALS|FECES|STRESSES|BOTTLES|REACHES|HARNESSES|LABELS|IMPLANTS|CONCENTRATES|ELECTRODES|SWEEPSTAKES|STINGS|SPRINTS|STREAMS|ABUSES|MICROBES|CONVERTS|AUDITS|BUTTS|LEASES|STRUTS|MICROSECONDS|FIREWALLS|NODS|TREASURES|SNIPPETS|SURGES|ERRANDS|SAFEGUARDS|DISHES|SKETCHES|MOTORCYCLES|HIRES|HUGS|AUDITIONS|PARALLELS|HIDES|GEEKS|BAITS|COVENANTS|AIRS|SPORES|BREWS|SCOOPS|TRIPLES|ROCKS|PUPS|FOOTPRINTS|CHAIRS|HERBICIDES|SURPRISES|RIOTS|SURROUNDS|MIGRAINES|RENTS|CLAMS|AXES|WASTES|KERNELS|VOWS|MANEUVERS|GLITCHES|GROUNDS|PINS|PAPERS|REFILLS|COMBS|UPLOADS|PREMIERES|BRIDGES|CLONES|FAUCETS|SHUTOUTS|BLINDS|EXERCISES|INSULTS|BRIEFS|SCHEMES|SOUNDTRACKS|CONSENTS|CHECKPOINTS|STATUSES|ENGINEERS|VERSES|NAILS|KISSES|MARSHMALLOWS|LEGS|MASTERS|KNUCKLES|DICTATES|HANDSETS|WAXES|BANGS|ENDEAVOURS|SUBJECTS|CLASHES|PROPORTIONS|BARBECUES|ESPORTS|MATCHUPS|AUTHORS|PUFFS|SINS|LURES|PUNCHES|BARGAINS|LUGS|REGRETS|BIKES|MISTAKES|SCRIPTS|PLEDGES|CHRONICLES|PITS|FRETS|SNACKS|FREAKS|STUBS|DOUBTS|STAFFS|CRAMPS|PADDLES|SIMS|PRINTABLES|BAGELS|ROASTS|BOBS|DISCHARGES|DELAYS|FORCES|E-MAILS|REBATES|BIASES|TOLLS|TRUFFLES|BLUFFS|SCAMMERS|BICYCLES|TRIUMPHS|REMOTES|PAUSES|FLOPS|SPRAINS|GRILLS|SYRINGES|NIPPLES|MICROGRAMS|JUNKIES|SKIS|SWELLS|IPS|ROOKIES|HANDGUNS|CHIVES|GLUTES|LODGES|EYEGLASSES|CAUTIONS|RESCUES|ROTATES|CROSSOVERS|MARCHES|PLOTS|VAULTS|ARCHES|AGGREGATES|AUTOGRAPHS|MEGAPIXELS|BUFFERS|WHISPERS|OVERDOSES|WRENCHES|MUGS|CLUTCHES|BEDS|ETFS|DRAPES|STOCKHOLDERS|SACKS|FOULS|GRABS|IPODS|GRAFTS|ARRESTS|SHRINKS|TRINKETS|ALLOYS|SLITS|BOUNCES|CARDHOLDERS|VOTES|LAYOFFS|RESTARTS|TRANSPLANTS|CURSES|ALIASES|NOTCHES|MUMPS|SOAPS|BOOBS|WILDFLOWERS|CRAFTS|RECEIVABLES|TUBES|ZONES|STINTS|FLARES|PACES|VERTICES|CURVES|SAWS|STORYLINES|METASTASES|CATARACTS|MANS|EXPATS|GRITS|MOBS|RENEWABLES|CONDUCTS|SWATCHES|CASCADES|MEGAWATTS|COUGHS|INVERTEBRATES|BALMS|HARMS|REPLAYS|SPIES|CHANTS|CASHEWS|BICEPS|RUSHES|METERS|PROGRAMMES|SHOUTS|WELDS|BUSTS|NUTS|SPAWNS|INLAYS|SOLDIERS|TROPES|BLISTERS|SMARTS|FORECLOSURES|BACKLINKS|OVERRUNS|JUDGES|OVERFLOWS|TEES|LATCHES|GELS|SLINGS|LEAPS|CANNONS|TRICEPS|TOTES|FASHIONS|ECHOES|SABRES|FAXES|SYRUPS|REMIXES|SPARES|BITCHES|DOSAGES|BRIBES|URGES|REGARDS|POCKETS|CLOCKS|CREASES|EARPHONES|STARCHES|FLANGES|DROPOUTS|CRUNCHES|EXCHANGERS|BARTENDERS|REGARDS|FLOURISHES|TILES|BARCODES|HYPERLINKS|SINUSES|BRAVES|MARSHALS|PIPES|SWABS|MATES|CHILLS|RIPS|SWIRLS|WRECKS|BUSES|PATCHES|SLIDESHOWS|PHRASES|BUSSES|FAVOURS|SPINDLES|GASSES|ASSAULTS|ZIPS|BEEPS|POMS|WEBPAGES|SCARES|SANDS|PARADES|ARCHETYPES|PROSPECTS|REVIEWS|REBOOTS|HASSLES|SPOONS|DWARVES|FARMS|CHEERLEADERS|AIRSTRIKES|escorts|graduates|lands)\s/ig, "$1_NN2_VVZ ");
document.getElementById("MT").value = res;
//Rachel_NP1 talks_NN2 about_II
var str = document.getElementById("MT").value;
var res = str.replace(/(_N\w+1 \w+)_NN2(_VVZ \w+_I\w+)\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
//Who_PNQS controls_NN2
//Which uses the...?
var str = document.getElementById("MT").value;
var res = str.replace(/(_(?:DDQ|PNQS) \w+)_NN2(_VVZ \w+_A\w+)\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
//_CST scares_NN2 people_NN is_VBZ
var str = document.getElementById("MT").value;
var res = str.replace(/(_CST \w+)_NN2(_VVZ \w+ \w+_V.Z)\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
//nothing beats
var str = document.getElementById("MT").value;
var res = str.replace(/(_PN1 \w+)_NN2(_VVZ)\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/(tree_NN1 roots_NN2)_VVZ\s/ig, "$1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/(apartment_NN1 markets_NN2)_VVZ\s/ig, "$1 ");
document.getElementById("MT").value = res;
//always vvz between two rr never_RR ends_NN2_VVZ well_RR
var str = document.getElementById("MT").value;
var res = str.replace(/(_RR\w* \w+)_NN2(_VVZ \w+_RR\w*)\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
//shows_VVZ do_VD0
var str = document.getElementById("MT").value;
var res = str.replace(/(_NN2)_VVZ (do_VD0)\s/ig, "$1 $2 "); 
document.getElementById("MT").value = res;
//there needs to be
var str = document.getElementById("MT").value;
var res = str.replace(/(_EX \w+)_NN2(_VVZ)\s/ig, "$1$2 "); 
document.getElementById("MT").value = res;
// document_NN1 needs_NN2 finishing_VVG
var str = document.getElementById("MT").value;
var res = str.replace(/(_NN1 \w+)_NN2(_VVZ)\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
//Houses_NN2_VVZ
var str = document.getElementById("MT").value;
var res = str.replace(/([A-Z][a-z]+_NN2)_VVZ\s/ig, "$1 ");
document.getElementById("MT").value = res;
//and_CC answers_NN2 correctly_RR ._. 
var str = document.getElementById("MT").value;
var res = str.replace(/(_CC \w+)_NN2(_VVZ \w+_RR ._.)\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
//fear_VV0 animal_NN1 attacks_NN2
var str = document.getElementById("MT").value;
var res = str.replace(/(_VV0 \w+_NN1 \w+_NN2)_VVZ\s/ig, "$1 ");
document.getElementById("MT").value = res;
////olic adjective
var str = document.getElementById("MT").value;
var res = str.replace(/([a-z]olic)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
//this_DD1 causes_NN2
var str = document.getElementById("MT").value;
var res = str.replace(/(_\w+1 \w+)_NN2(_VVZ)\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
//of_IO books_NN2_VVZ
var str = document.getElementById("MT").value;
var res = str.replace(/(_I\w+ \w+_NN2)_VVZ\s/ig, "$1 ");
document.getElementById("MT").value = res;
//
var str = document.getElementById("MT").value;
var res = str.replace(/_NN2(_VVZ \w+)_JJ(_RG \w+_JJ)_NN1\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
// loudness_NN1 needs_NN2_VVZ
var str = document.getElementById("MT").value;
var res = str.replace(/(_NN1 \w+)_NN2(_VVZ)\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
//one_MC1_PN1 wonders_NN2
var str = document.getElementById("MT").value;
var res = str.replace(/_MC1(_PN1 \w+_)NN2_(VVZ)\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
//for some reason the above doesnt work so dirty fix
var str = document.getElementById("MT").value;
var res = str.replace(/_MC1(_PN1 \w+s_)NN2 /ig, "$1VVZ ");
document.getElementById("MT").value = res;
//play_NN1 grounds_VVZ 
var str = document.getElementById("MT").value;
var res = str.replace(/(play_NN1 grounds_)VVZ /ig, "$1NN2 "); 
document.getElementById("MT").value = res;
//all_DB sorts_NN2_VVZ
var str = document.getElementById("MT").value;
var res = str.replace(/(_D\w+ \w+_NN2)_VVZ/ig, "$1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(united)_\w* (states)_\w*/ig, "$1_NP1 $2_NP1 ");
document.getElementById("MT").value = res;
//other_JJ escorts_NN2_VVZ
var str = document.getElementById("MT").value;
var res = str.replace(/(_JJ \w+_NN2)_VVZ\s/ig, "$1 ");
document.getElementById("MT").value = res;
//
var str = document.getElementById("MT").value;
var res = str.replace(/\b(mobile)_JJ (phone\w*)\s/ig, "$1_NN1 $2 ");
document.getElementById("MT").value = res;
//on_II the_AT dog_NN1 walks_NN2_VVZ ._. plural singular problem - even claws7 cant do this. this has to go higher than the other related shorter choices.
var str = document.getElementById("MT").value;
var res = str.replace(/\b(\w+_I\w* \w+_A\w* \w+_NN1) (\w+)(_NN2)_VVZ (\W+_\W+)\s/ig, "$1 $2$3 $4 ");
document.getElementById("MT").value = res;
// four_MC arena_NN1 shows_VVZ shows_NN2
var str = document.getElementById("MT").value;
var res = str.replace(/\b(\w+_MC \w+_NN1 \w+_NN2)_VVZ\s/ig, "$1 ");
document.getElementById("MT").value = res;
//turned_VVN green_JJ_NN1 ,_,
var str = document.getElementById("MT").value;
var res = str.replace(/(turn\w*_V\w+ \w+_JJ)_NN1 (._.)\s/g, "$1 $2 ");
document.getElementById("MT").value = res;
// Just_JJ right_JJ_NN1 at_II the_AT back_NN1
var str = document.getElementById("MT").value;
var res = str.replace(/(Just)_JJ (right)_JJ_NN1 (\w+_II)\s/ig, "$1_RR $2_RR $3 ");
document.getElementById("MT").value = res;
//not_XX safe_JJ_NN1 for_IF IS VERY RARE TO HAVE A NOUN!
var str = document.getElementById("MT").value;
var res = str.replace(/(_XX \w+_JJ)_NN1 (\w+_I\w*)\s/g, "$1 $2 ");
document.getElementById("MT").value = res;
//intense_JJ orange_JJ_NN1 !_! 
var str = document.getElementById("MT").value;
var res = str.replace(/(_[JAI]\w* \w+)_JJ(_NN1 \W+_\W+)\s/g, "$1$2 ");
document.getElementById("MT").value = res;
//
var str = document.getElementById("MT").value;
var res = str.replace(/\b([\w-]+)_JJ_NN1 (\w+_NN\w*)\s/g, "$1_JJ $2 ");
document.getElementById("MT").value = res;
//be_VBI adult_JJ_NN1 - adjective is a lot more common.
var str = document.getElementById("MT").value;
var res = str.replace(/\b(\w+_VB\w* \w+_JJ)_NN1\s/g, "$1 ");
document.getElementById("MT").value = res;
//other_NN1 two_MC other_JJ_NN1
var str = document.getElementById("MT").value;
var res = str.replace(/(_JJ)_NN1 (\w+_MC)\s/g, "$1 $2 ");
document.getElementById("MT").value = res;
//The_AT running_JJ_NN1 (this clashes when noun follows so should be deffered till full sentence.)
var str = document.getElementById("MT").value;
var res = str.replace(/\b(\w+_A\w*) (\w+)_JJ(_NN1[\w\s]*\W+_\W+)\s/g, "$1 $2$3 ");
document.getElementById("MT").value = res;
//
var str = document.getElementById("MT").value;
var res = str.replace(/\b(\w+_[AID]\w*) ([\w-]+)_JJ_NN1 (\w+_V\w*)\s/g, "$1 $2_NN1 $3 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(\w+_[AID]\w*) ([\w-]+)_JJ_NN1 (\W+_\W+)\s/g, "$1 $2_NN1 $3 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(\w+_VV\w*) ([\w-]+)_JJ_NN1 (.)\s/g, "$1 $2_NN1 $3 ");
document.getElementById("MT").value = res;
//ADVERB LY EXCEPTION - adverb vs adjective//doesnt work at start of sentence.
var str = document.getElementById("MT").value;
var res = str.replace(/\b(\w+_[^A]\w*) (ONly)\w*\s/ig, "$1 $2_RR ");
document.getElementById("MT").value = res;
//-ly adverbs risky
var str = document.getElementById("MT").value;
var res = str.replace(/\b(\w+ly)\s/ig, "$1_RR ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(\w+_A\w*) (early)\w*\s/ig, "$1 $2_JJ ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(\w+_VB\w*) ([a-z]+ing)\s/ig, "$1 $2_VVG ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(\w+_VB\w*) (n.t_XX) ([a-z]+ing)\s/ig, "$1 $2 $3_VVG ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(\w+_VB\w*) ([a-z]+(?:ught|wn))\s/ig, "$1 $2_VVN ");
document.getElementById("MT").value = res;
//perfect passive -ed
var str = document.getElementById("MT").value;
var res = str.replace(/\b(\w+_VH\w*) (n.t_XX) (\w+_VBN) ([a-z]+ed)\s/ig, "$1 $2 $3 $4_VVN ");
document.getElementById("MT").value = res;
//noun gerund after prepositions
var str = document.getElementById("MT").value;
var res = str.replace(/\b(\w+_[AI]\w*) ([a-z]+ing)\s/ig, "$1 $2_NN1 ");
document.getElementById("MT").value = res;
//noun between verb and article. NN2 for plural
var str = document.getElementById("MT").value;
var res = str.replace(/\b(\w+_[AI]\w*) ([a-z]+[^s]) (\w+_V\w*)\s/ig, "$1 $2_NN1 $3 ");
document.getElementById("MT").value = res;
//adjective suffix -ern
var str = document.getElementById("MT").value;
var res = str.replace(/\b(\w+_[AID]\w*) ([a-z]+ern) (\w+_N\w*)\s/ig, "$1 $2_JJ $3 ");
document.getElementById("MT").value = res;
//questions continuous simple get verb
var str = document.getElementById("MT").value;
var res = str.replace(/\b(\w+_VB\w*) (\w+_[NP]\w*) ([a-z]+ing)\s/ig, "$1 $2 $3_VVG ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(\w+_VD\w*) (\w+_[NP]\w*) ([a-z]+)\s/ig, "$1 $2 $3_VV0 ");
document.getElementById("MT").value = res;
//would_VM one_MC1 day_NNT1 restore_VV0
var str = document.getElementById("MT").value;
var res = str.replace(/(_VM \w+_M\w+ \w+_N\w+ \w+_VV)0\s/ig, "$1I ");
document.getElementById("MT").value = res;
//so conjunction too hard to catch even on c7
var str = document.getElementById("MT").value;
var res = str.replace(/(,_,) (so)_\w* (\w+_[PN]\w*)\s/ig, "$1 $2_CS $3 ");
document.getElementById("MT").value = res;
//this is terrible: needed to look for ages to find it.  Must have _
var str = document.getElementById("MT").value;
var res = str.replace(/\b(So)_\w* (,_,)\s/g, "$1_CS $2 ");
document.getElementById("MT").value = res;
//and_CC so_CS_RG_RR
var str = document.getElementById("MT").value;
var res = str.replace(/(_C\w* \w+)_CS_RG(_RR)\s/ig, "$1$2 "); 
document.getElementById("MT").value = res;
//so_CS_RG easily_RR undone_VVN ._. 
var str = document.getElementById("MT").value;
var res = str.replace(/_CS(_RG \w+_RR \w+_VVN)\s/ig, "$1 "); 
document.getElementById("MT").value = res;
//risen_VVN so_CS_RG far_RR so_CS_RG fast_JJ_RR
var str = document.getElementById("MT").value;
var res = str.replace(/(_VV\w+ (?:\w\s]+ )?\w+)_CS(_RG \w+_RR)\s/ig, "$1$2 "); 
document.getElementById("MT").value = res;
//far_RR so_CS_RG fast_JJ_RR
var str = document.getElementById("MT").value;
var res = str.replace(/(_RR \w+)_CS(_RG \w+)_JJ(_RR)\s/ig, "$1$2$3 "); 
document.getElementById("MT").value = res;
//So_CS_RG in_II
var str = document.getElementById("MT").value;
var res = str.replace(/(_CS)_RG (\w+_I\w+)\s/ig, "$1 $2 "); 
document.getElementById("MT").value = res;
//So_CS_RG much_DA1
var str = document.getElementById("MT").value;
var res = str.replace(/_CS(_RG \w+_DA1)\s/ig, "$1 ");
document.getElementById("MT").value = res;
//so_CS_RG long_JJ_RR_VV0 as_CSA
var str = document.getElementById("MT").value;
var res = str.replace(/_CS(_RG \w+)_JJ(_RR)_VV0 (as_CSA)\s/ig, "$1$2 $3 ");
document.getElementById("MT").value = res;
//so_CS_RG naive_JJ
var str = document.getElementById("MT").value;
var res = str.replace(/_CS(_RG \w+_JJ)\s/ig, "$1 "); 
document.getElementById("MT").value = res;
//so_CS_RG frustrated_JJ_VVD
var str = document.getElementById("MT").value;
var res = str.replace(/_CS(_RG \w+_JJ)_VVD\s/ig, "$1 "); 
document.getElementById("MT").value = res;
//so_CS_RG much_DA1 traffic_NN1 ?_? 
var str = document.getElementById("MT").value;
var res = str.replace(/_CS(_RG \w+_D\w+ \w+_\w+ ._.)\s/ig, "$1 "); 
document.getElementById("MT").value = res;
//work_VV0 so_CS_RG hard_JJ_RR
var str = document.getElementById("MT").value;
var res = str.replace(/(_VV\w* \w+)_CS(_RG \w+)_JJ(_RR)\s/ig, "$1$2$3 "); 
document.getElementById("MT").value = res;
//was_VBDZ so_CS_RG hot_JJ
var str = document.getElementById("MT").value;
var res = str.replace(/(_V\w+ \w+)_CS(_RG \w+_JJ)\s/ig, "$1$2 "); 
document.getElementById("MT").value = res;
//so_CS_RG_RR there_EX will_VM
var str = document.getElementById("MT").value;
var res = str.replace(/(_CS)_RG_RR (\w+_E\w+ \w+_V\w+)\s/ig, "$1 $2 "); 
document.getElementById("MT").value = res;
//should be first of these because clash and longer // Does_VDZ this_DD1 sound_NN1 familiar_JJ ?_? sound_NN1_VV0 
var str = document.getElementById("MT").value;
var res = str.replace(/\b(Does_VDZ \w+) (\w+)_NN1(_VV)0\s/g, "$1 $2$3I ");
document.getElementById("MT").value = res;
//delicious_JJ dip_NN1_VV0 recipes_NN2
var str = document.getElementById("MT").value;
var res = str.replace(/\b(\w+_JJ \w+_NN1)_VV0 (\w+_NN2)\s/g, "$1 $2 ");
document.getElementById("MT").value = res;
//noun vs verb
var str = document.getElementById("MT").value;
var res = str.replace(/\b(\w+)_NN1_VV0 (\w+_\w+O\w*)\s/g, "$1_VV0 $2 ");
document.getElementById("MT").value = res;
//I_PPIS1 love_NN1_VV0 you_PPY ._.
var str = document.getElementById("MT").value;
var res = str.replace(/\b(\w+_\w*S\w*) (\w+)_NN1_VV0\s/g, "$1 $2_VV0 ");
document.getElementById("MT").value = res;
//NN love_NN1_VV0 people_N
var str = document.getElementById("MT").value;
var res = str.replace(/\b(\w+_N\w*) (\w+)_NN1_VV[0I] (\w+_N\w*)\s/ig, "$1 $2_VV0 $3 ");
document.getElementById("MT").value = res;
//_XX love_NN1_VVI cars_N
var str = document.getElementById("MT").value;
var res = str.replace(/(XX) (\w+)_NN1_VV[0I] (\w+_[IADN]\w*)\s/ig, "$1 $2_VVI $3 ");
document.getElementById("MT").value = res;
//Does_VDZ caring_JJ_NN1 about_II
var str = document.getElementById("MT").value;
var res = str.replace(/(VD\w*) (\w+)_JJ_NN1 (\w+_I\w*)\s/ig, "$1 $2_NN1 $3 ");
document.getElementById("MT").value = res;
//_NN care_NN1_VVI about_I 
var str = document.getElementById("MT").value;
var res = str.replace(/(N\w*) (\w+)_NN1_(VV[I0]) (\w+_I\w*)\s/ig, "$1 $2_$3 $4 ");
document.getElementById("MT").value = res;
//some_DD fun_JJ_NN1 with_IW
var str = document.getElementById("MT").value;
var res = str.replace(/(D\w*) (\w+)_JJ_(NN1) (\w+_I\w*)\s/ig, "$1 $2_$3 $4 ");
document.getElementById("MT").value = res;
//Some_DD care_NN1_VV0 should_VM
var str = document.getElementById("MT").value;
var res = str.replace(/(D\w*) (\w+)_(NN1)_VV[0I] (\w+_V\w*)\s/ig, "$1 $2_$3 $4 ");
document.getElementById("MT").value = res;
//is_VBZ unavoidable ._. // this cand be wider. adjective suffix - but just wait...
var str = document.getElementById("MT").value;
var res = str.replace(/([a-z]+able) ([\w\s\']*._.)\s/ig, "$1_JJ $2 ");
document.getElementById("MT").value = res;
//risky infintive - this was clashing to_TO GDP_VVI ._. SO MUST BE DELAYED
//var str = document.getElementById("MT").value;
//var res = str.replace(/(to_TO) ([a-z]+) ([\w\s]*\W+_\W+)\s/ig, "$1 $2_VVI $3");
//document.getElementById("MT").value = res;
//I_PPIS1 want to_TO or ed
var str = document.getElementById("MT").value;
var res = str.replace(/(\w+_P\w*) ([a-z]+ed) (to_TO)\s/ig, "$1 $2_VVD $3 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/(\w+_P\w*) ([a-z]+) (to_TO)\s/ig, "$1 $2_VV0 $3 ");
document.getElementById("MT").value = res;
//AT1 long_JJ time_N - CAUSING CLASHING - MUST NOT ADD TO _ UNDERSCORE MUST BE CASE SENSITIVE
var str = document.getElementById("MT").value;
var res = str.replace(/(\w+_A\w*) ([a-z]+) (\w+_N\w*)\s/g, "$1 $2_JJ $3 ");
document.getElementById("MT").value = res;
//comes_VVZ to_TO making//one error here took me half an hour to locate. _ I can't remember why it was crap.//looks like it was one of the very early codes!
var str = document.getElementById("MT").value;
var res = str.replace(/(\w+_V\w* to)_TO ([a-z]+ing_VVG)\s/ig, "$1_II $2 ");
document.getElementById("MT").value = res;
//a_AT1 big_JJ change_NN1_VV0
var str = document.getElementById("MT").value;
var res = str.replace(/(\w+_A\w*) (\w+_J\w*) (\w+)_(NN1)_VV0\s/ig, "$1 $2 $3_$4 ");
document.getElementById("MT").value = res;
//You_PPY fear_NN1_VV0 it_PPH1 ._.
var str = document.getElementById("MT").value;
var res = str.replace(/(\w+_P\w*) (\w+)_NN1_(VV0) (\w+_P\w*)\s/ig, "$1 $2_$3 $4 ");
document.getElementById("MT").value = res;
//She_PPHS1 fears_NN2 it_PPH1 ._.
var str = document.getElementById("MT").value;
var res = str.replace(/(\w+_P\w*) (\w+)_NN2 (\w+_P\w*)\s/ig, "$1 $2_VVZ $3 ");
document.getElementById("MT").value = res;
//be_VBI made_VVD_VVN 
var str = document.getElementById("MT").value;
var res = str.replace(/(\w+_V[BH]\w*) (\w+)_VVD(_VVN)\s/ig, "$1 $2$3 ");
document.getElementById("MT").value = res;
// is_VBZ good_JJ_NN1 that_CST (almost always adjective.
var str = document.getElementById("MT").value;
var res = str.replace(/(\w+_V\w*) (\w+)(_JJ)_NN1 (that_\w*)\s/ig, "$1 $2$3 $4 ");
document.getElementById("MT").value = res;
//are_VBR broken up_RP
var str = document.getElementById("MT").value;
var res = str.replace(/(\w+_V[HB]\w*) ([a-z]+(?:en|ed)) (\w+_RP)\s/ig, "$1 $2_VVN $3 ");
document.getElementById("MT").value = res;
//which_DDQ feature_NN1_VV0 real_JJ kids_NN2 // no noun ever.
var str = document.getElementById("MT").value;
var res = str.replace(/(\w+_DDQ\w*) (\w+)_NN1(_VV0) (\w+_JJ\w*) (\w+_N\w*)\s/ig, "$1 $2$3 $4 $5 ");
document.getElementById("MT").value = res;
//the_AT curve_NN1_VV0
var str = document.getElementById("MT").value;
var res = str.replace(/(\w+_[AI]\w*) (\w+)(_NN1)_VV0\s/ig, "$1 $2$3 ");
document.getElementById("MT").value = res;
// other_JJ shows_NN2_VVZ _V
var str = document.getElementById("MT").value;
var res = str.replace(/(_JJ \w+_NN2)_VVZ (\w+_V\w*)\s/ig, "$1 $2 ");
document.getElementById("MT").value = res;
//Samsung_NP1 aims_NN2_VVZ // must be delayed! skin books that were
var str = document.getElementById("MT").value;
var res = str.replace(/(\w+_N\w1\w*) (\w+)_NN2(_VVZ[\w\s]*._.)\s/ig, "$1 $2$3 ");
document.getElementById("MT").value = res;
// books_NN2_VVZ that_CST were_VBDR
var str = document.getElementById("MT").value;
var res = str.replace(/(_NN2)_VVZ (\w+_C\w+ \w+_VB\w*R)\s/ig, "$1 $2 ");
document.getElementById("MT").value = res;
//solution_NN1 that_DD1 some_DD games_NN2 implement_VVI
var str = document.getElementById("MT").value;
var res = str.replace(/(_N\w+ \w+_CST)_DD1 (\w+_[AJD]\w* \w+_N\w* \w+_V\w*)\s/ig, "$1 $2 ");
document.getElementById("MT").value = res;
//and_CC delays_NN2_VVZ occur_VVI
var str = document.getElementById("MT").value;
var res = str.replace(/(\w+_C\w* \w+_NN2)_VVZ (\w+_VV)\w\s/ig, "$1 $20 ");
document.getElementById("MT").value = res;
//allowing_VVG ships_VVZ to_TO return_VVI ._. ships_NN2_VVZ //nouns are 10x more common.
var str = document.getElementById("MT").value;
var res = str.replace(/(\w+_VVG \w+_NN2)_VVZ\s/ig, "$1 ");
document.getElementById("MT").value = res;
//ultimately_RR experience_NN1_VV0 the_AT //always a verb!//have checked r n a great.
var str = document.getElementById("MT").value;
var res = str.replace(/(\w+_R\w*) (\w+)_NN1(_VV[0I]) (\w+_A\w*)\s/ig, "$1 $2$3 ");
document.getElementById("MT").value = res;
//magic_JJ_NN1 of_IO
var str = document.getElementById("MT").value;
var res = str.replace(/(\w+)_JJ(_NN1) (\w+_IO)\s/ig, "$1$2 $3 ");
document.getElementById("MT").value = res;
//with_IW Note20_FO //careful this catches the tags! not underscores = the \b is the saver! worked and then stopped with the mc follow...
var str = document.getElementById("MT").value;
var res = str.replace(/\b([A-Za-z]+[0-9]+)\s/ig, "$1_FO ");
document.getElementById("MT").value = res;
//must add space to stop catching $
var str = document.getElementById("MT").value;
var res = str.replace(/( [0-9]+)\s/ig, " $1_MC ");
document.getElementById("MT").value = res;
//Be_VBI verb at start of sentence - case sensitive
var str = document.getElementById("MT").value;
var res = str.replace(/\b([A-Z]+[a-z]+_V\w)I\s/g, "$10 ");
document.getElementById("MT").value = res;
//list of same = name_NN1 ,_, address_NN1_VV0 ,_,
var str = document.getElementById("MT").value;
var res = str.replace(/\b(\w+_NN1) (\,_\,) (\w+)(_NN1)_VV0 (\,_\,)\s/g, "$1 $2 $3$4 $5 ");
document.getElementById("MT").value = res;
//NN1 VV0 is impossible without a comma / emergency_NN1 contact_NN1_VV0
var str = document.getElementById("MT").value;
var res = str.replace(/\b(\w+_NN1) (\w+)(_NN1)_VV0\s/g, "$1 $2$3 ");
document.getElementById("MT").value = res;
// diary_NN1 can_VM help_NN1_VVI
var str = document.getElementById("MT").value;
var res = str.replace(/\b(\w+_N\w*) (\w+_VM) (\w+)_NN1_VV[I0]\s/g, "$1 $2 $3_VVI "); 
document.getElementById("MT").value = res;
// wrote_VVD he_PPHS1 anticipated_VVD_VVN (not VH question) this clashes with longer vvn - so must delay
var str = document.getElementById("MT").value;
var res = str.replace(/\b(\w+_\w[^H]\w* \w+_[NP]\w* \w+_VVD)_VVN([\w\s]*\W+_\W+)\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
//as_CSA stated_VVD_VVN = never vvd
var str = document.getElementById("MT").value;
var res = str.replace(/\b(as_CSA) (\w+)_VVD(_VVN)\s/ig, "$1 $2$3 ");
document.getElementById("MT").value = res;
//as_CSA_II_RG to_TO
var str = document.getElementById("MT").value;
var res = str.replace(/(_CSA)_II_RG (to_TO)\s/ig, "$1 $2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(\w+_VH\w*) (\w+_[NP]\w*) (\w+)_VVD(_VVN)\s/g, "$1 $2 $3$4 ");
document.getElementById("MT").value = res;
//not possible!It_PPH1 's_GE time
var str = document.getElementById("MT").value;
var res = str.replace(/\b(It_PPH1) (\'s)_GE (\w+_\w*T\w*)\s/g, "$1 $2_VBZ $3 ");
document.getElementById("MT").value = res;
//That_DD1 's because_CS
var str = document.getElementById("MT").value;
var res = str.replace(/(_D\w+ 's) (\w+_C\w+)\s/g, "$1_VBZ $2 ");
document.getElementById("MT").value = res;
//is_VBZ free_JJ_VV0
var str = document.getElementById("MT").value;
var res = str.replace(/\b(\w+_VB\w*) (\w+)(_JJ)_VV0\s/ig, "$1 $2$3 ");
document.getElementById("MT").value = res;
//I_PPIS1 live_JJ_VV0//people_NN live_JJ_VV0 longer_RRR //that_CST live_JJ_VV0 longer_RRR
var str = document.getElementById("MT").value;
var res = str.replace(/(_CST \w+)_JJ(_VV0 \w+_RR\w+)\s/ig, "$1$2 "); 
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/(_[PN]\w+ \w+)_JJ(_VV0)\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
//a_AT1 long_JJ_RR_NN1 period_NN1 //cant work out where this error comes from. deleting
var str = document.getElementById("MT").value;
var res = str.replace(/(_JJ_RR)_NN1\s/ig, "$1 ");
document.getElementById("MT").value = res;
// human_JJ experience_NN1_VV0 - always NN1
var str = document.getElementById("MT").value;
var res = str.replace(/(_JJ \w+_NN1)_VV0\s/ig, "$1 ");
document.getElementById("MT").value = res;
//attend_VVI online_JJ_RR classes_NN2 - adjective is  10x more common
var str = document.getElementById("MT").value;
var res = str.replace(/\b(\w+_V\w*) (\w+)(_JJ)_RR (\w+_N\w*[\w\s]*\W+_\W+)\s/g, "$1 $2$3 $4 ");
document.getElementById("MT").value = res;
//just_JJ_RR him_PPHO1
var str = document.getElementById("MT").value;
var res = str.replace(/_JJ(_RR \w+_P\w+)\s/ig, "$1 ");
document.getElementById("MT").value = res; 
//_VBR likely_JJ_RR (this is clashing must wait till the end of sentence. for example: It is still an elephant.
var str = document.getElementById("MT").value;
var res = str.replace(/(_VB\w* \w+_JJ)_RR ([\w\s]*\W+_\W+)\s/g, "$1 $2");
document.getElementById("MT").value = res;
// is_VBZ still_JJ_RR an_AT1 - both are possible but JJ is rare! Make sure" is an exception SO WAIT TILL END
var str = document.getElementById("MT").value;
var res = str.replace(/(_VB\w*) (\w+)_JJ(_RR \w+_AT1[\w\s]+\W+_\W+)\s/g, "$1 $2$3 ");
document.getElementById("MT").value = res;
//as above... there is no way to change it... just_JJ_RR
var str = document.getElementById("MT").value;
var res = str.replace(/\b(just)_JJ(_RR [\w\s]+\W+_\W+)\s/g, "$1$2 ");
document.getElementById("MT").value = res;
//extremely rare to follow have with a verb have_VHI access_NN1_VV0
var str = document.getElementById("MT").value;
var res = str.replace(/\b(\w+_VH\w*) (\w+)(_NN1)_VV0\s/ig, "$1 $2$3 ");
document.getElementById("MT").value = res;
//She_PPHS1 's washed_VVD_VVN / 's v *note had to remove \b
var str = document.getElementById("MT").value;
var res = str.replace(/('s)\w* (\w+)_VVD(_VVN)\s/ig, "$1_VBZ_VHZ $2$3 ");
document.getElementById("MT").value = res;
//It_PPH1 's_VBZ_VHZ good_JJ of_IO
var str = document.getElementById("MT").value;
var res = str.replace(/(_VBZ)_VHZ (\w+_JJ of_IO)\s/ig, "$1 $2 ");
document.getElementById("MT").value = res;
//'s_VBZ_VHZ not_XX going_VVGK to_TO be_VBI
var str = document.getElementById("MT").value;
var res = str.replace(/(_VBZ)_VHZ (not_XX \w+_VVG\w*)\s/ig, "$1 $2 ");
document.getElementById("MT").value = res;
//the following has caused monstrous issues!//have removed part.
var str = document.getElementById("MT").value;
var res = str.replace(/('s) (\w+_V\wN)\s/ig, "$1_VBZ_VHZ $2 ");
document.getElementById("MT").value = res;
//nightmare 's_VBZ_VHZ been_VBN washed_VVN
var str = document.getElementById("MT").value;
var res = str.replace(/('s)_VBZ(_VHZ) (\w+_V\wN) (\w+_V\wN)\s/ig, "$1$2 $3 $4 ");
document.getElementById("MT").value = res;
//_VBZ_VHZ got_VVN
var str = document.getElementById("MT").value;
var res = str.replace(/_VBZ(_VHZ got_VVN)\s/ig, "$1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(\w+)(_JJ)_RG (\w+_N\w*)\s/ig, "$1$2 $3 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(\w+)_JJ(_RG) (\w+_[JR]\w*)\s/ig, "$1$2 $3 ");
document.getElementById("MT").value = res;
//that_CST helped_VVD_VVN (only that is followed by vvd)
var str = document.getElementById("MT").value;
var res = str.replace(/\b(\w+_CST) (\w+)(_VVD)_VVN\s/ig, "$1 $2$3 ");
document.getElementById("MT").value = res;
//preposition before that_DD1 always 
var str = document.getElementById("MT").value;
var res = str.replace(/\b(\w+_I\w*) (\w+)_CST(_DD1)\s/ig, "$1 $2$3 ");
document.getElementById("MT").value = res;
//that_DD1 show_NN1_VV0 (this clashes with questions.
var str = document.getElementById("MT").value;
var res = str.replace(/\b(\w+_[^V][^D][^Z]) (\w+_DD1) (\w+)(_NN1)_VV0\s/ig, "$1 $2 $3$4 ");
document.getElementById("MT").value = res;
//think_VVI that_CST_DD1 food_NN1 here_RL is_VBZ
var str = document.getElementById("MT").value;
var res = str.replace(/(_VV\w+ that_CST)_DD1 (\w+_N\w+ \w+_R\w+ \w+_V\w+)\s/ig, "$1 $2 ");
document.getElementById("MT").value = res;
//,_, that_CST_DD1
var str = document.getElementById("MT").value;
var res = str.replace(/(_, \w+)_CST(_DD1)\s/ig, "$1$2 "); 
document.getElementById("MT").value = res;
//that_cst + ap / that_CST_DD1 it_PPH1
var str = document.getElementById("MT").value;
var res = str.replace(/\b(\w+_CST)_DD1 (\w+_[AP]\w*)\s/ig, "$1 $2 ");
document.getElementById("MT").value = res;
//that_CST_DD1 were_VBDR
var str = document.getElementById("MT").value;
var res = str.replace(/(_CST)_DD1 (\w+_VB\w*R)\s/ig, "$1 $2 ");
document.getElementById("MT").value = res;
//that_CST_DD1 this_DD1 //_CST_DD1 there_EX //understand_VVI that_DD1 there_EX
var str = document.getElementById("MT").value;
var res = str.replace(/(_CST)_DD1 (\w+_(?:DD1|EX))\s/ig, "$1 $2 ");
document.getElementById("MT").value = res;
//well_RR run_NN1_VV0 = almost always verb follows rr *well-run = adjective!
var str = document.getElementById("MT").value;
var res = str.replace(/\b(\w+_RR) (\w+)_NN1(_VV0)\s/ig, "$1 $2$3 ");
document.getElementById("MT").value = res;
//_N 's _J('s always GE)
var str = document.getElementById("MT").value;
var res = str.replace(/\b(\w+_N\w*) ('s)\w* (\w+_J\w*)\s/ig, "$1 $2_GE $3 ");
document.getElementById("MT").value = res;
//_VVI concerns_NN2_VVZ
var str = document.getElementById("MT").value;
var res = str.replace(/(_V\w* \w+_NN2)_VVZ\s/ig, "$1 ");
document.getElementById("MT").value = res;
//can_VM now_RT use_NN1_VV0 - verb after modal and adverb
var str = document.getElementById("MT").value;
var res = str.replace(/\b(\w+_VM) (\w+_R\w*) (\w+)_NN1_VV\w\s/ig, "$1 $2 $3_VVI ");
document.getElementById("MT").value = res;
//can_VM fans_NN2 expect_VV0
var str = document.getElementById("MT").value;
var res = str.replace(/(_VM \w+_N\w* \w+_VV)0\s/ig, "$1I ");
document.getElementById("MT").value = res;
//would_VM wake_NN1_VVI // as_CSA to_TO cast_NN1_VVI
var str = document.getElementById("MT").value;
var res = str.replace(/\b(\w+_(?:VM|TO) \w+)_NN1(_VVI)\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
//to_TO easily_RR find_VV0
var str = document.getElementById("MT").value;
var res = str.replace(/\b(to_TO) (\w+_R\w*) (\w+_VV)0\s/ig, "$1 $2 $3I ");
document.getElementById("MT").value = res;
//to infinitive to_TO read_VVD_VVN 
var str = document.getElementById("MT").value;
var res = str.replace(/\b(to_TO) (\w+)_VVD_VVN\s/ig, "$1 $2_VVI ");
document.getElementById("MT").value = res;
//,_, Stephanie_NN1 added_VVD_VVN
var str = document.getElementById("MT").value;
var res = str.replace(/\b(\W+_\W+) (\w+_[PN]\w*) (\w+)(_VVD)_VVN\s/ig, "$1 $2 $3$4 ");
document.getElementById("MT").value = res;
//the_AT imminent_JJ future_JJ_NN1 ._. (this needs to wait till sentence finish or it clashes)
var str = document.getElementById("MT").value;
var res = str.replace(/\b(\w+_A\w*) (\w+_J\w*) (\w+)_JJ(_NN1[\w\s]*\W+_\W+)\s/ig, "$1 $2 $3$4 ");
document.getElementById("MT").value = res;
// of_IO other_JJ_NN1 licensed_JJ products_NN2
var str = document.getElementById("MT").value;
var res = str.replace(/\b(\w+_IO) (\w+_JJ)_NN1 (\w+_JJ \w+_NN\w*)\s/ig, "$1 $2 $3 ");
document.getElementById("MT").value = res;
//more_RGR complex_JJ_NN1 - always adjective //physically_RR present_JJ_NN1 // AND SINGULAR VERB BE
var str = document.getElementById("MT").value;
var res = str.replace(/\b(\w+_(?:RGR|RR|VBD?R)) (\w+)(_JJ)_NN1\s/ig, "$1 $2$3 ");
document.getElementById("MT").value = res;
//clear_JJ and_CC present_JJ_NN1_VV0 danger_NN1
var str = document.getElementById("MT").value;
var res = str.replace(/(_JJ and_CC \w+_JJ)_NN1_VV0 (\w+_NN1)\s/ig, "$1 $2 ");
document.getElementById("MT").value = res;
// that_CST_DD1 ,_, unfortunately_RR ,_, the_AT a conjunction expecting more
var str = document.getElementById("MT").value;
var res = str.replace(/\b(that)(_CST)_DD1 (,_, \w+_RR ,_,)\s/ig, "$1$2 $3 ");
document.getElementById("MT").value = res;
//Do_VD0 n't_XX you_PPY think_VV0
var str = document.getElementById("MT").value;
var res = str.replace(/\b(\w+_VD\w* n.t_XX \w+_[NP]\w* \w+_VV)0\s/ig, "$1I ");
document.getElementById("MT").value = res;
//Have_VH0 n't_XX you_PPY heard_VVD
var str = document.getElementById("MT").value;
var res = str.replace(/\b(\w+_VH\w* n.t_XX \w+_[NP]\w* \w+_VV)D\s/ig, "$1N ");
document.getElementById("MT").value = res;
// 've_VH0 had_VHD// also adverbs in mid position.
var str = document.getElementById("MT").value;
var res = str.replace(/\b(\w+_VH\w* \w+_VH)D\s/ig, "$1N ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b([\w\']+_VH\w* [\w\']+_[XR]\w+ \w+_VH)D\s/ig, "$1N ");
document.getElementById("MT").value = res;
//_VM 've_VH0
var str = document.getElementById("MT").value;
var res = str.replace(/(_VM 've_VH)0\s/ig, "$1I "); 
document.getElementById("MT").value = res;
//would_VM never_RR actually_RR have_VH0
var str = document.getElementById("MT").value;
var res = str.replace(/(_VM \w+_R\w+ \w+_R\w+ \w+_V\w)0\s/ig, "$1I ");
document.getElementById("MT").value = res;
//risky - the_AT top_NN1 female_JJ players_NN2 - adjective in noun phrase
var str = document.getElementById("MT").value;
var res = str.replace(/\b(\w+_A\w* \w+_)NN1( \w+_JJ \w+_NN2)\s/ig, "$1JJ$2 ");
document.getElementById("MT").value = res;
//risky :_: look_NN1_VV0 beyond_II Dublin_NN1 ._. if there's no verb its probably the choice.
var str = document.getElementById("MT").value;
var res = str.replace(/\b(\W+_\W+ \w+)_NN1(_VV0 [\w\s^V]+\s\W+_\W+)\s/ig, "$1$2 "); 
document.getElementById("MT").value = res;
// the_AT UFC_VV0 if_CS capital noun after article
var str = document.getElementById("MT").value;
var res = str.replace(/\b(\w+_A\w* [A-Z]+[a-z]*) (\w+_C\w*)\s/g, "$1_NP1 $2 "); 
document.getElementById("MT").value = res;
// is_VBZ something_PN1 that_CST_DD1 's_VBZ_VHZ (this is a risky headache that is too hard to solve. //CST is more common by far though.
var str = document.getElementById("MT").value;
var res = str.replace(/\b(\w+_V\w* \w+_PN1 that_CST)_DD1 ('s_VBZ_VHZ)\s/ig, "$1 $2 ");
document.getElementById("MT").value = res;
//_VBZ_VHZ awesome_JJ !_! 
var str = document.getElementById("MT").value;
var res = str.replace(/(_VBZ)_VHZ (\w+_JJ ._.)\s/ig, "$1 $2 ");
document.getElementById("MT").value = res;
//What_DDQ 's 
var str = document.getElementById("MT").value;
var res = str.replace(/(_\w*Q 's)\s/ig, "$1_VBZ_VHZ ");
document.getElementById("MT").value = res;
//_VBZ_VHZ the_AT
var str = document.getElementById("MT").value;
var res = str.replace(/(_VBZ)_VHZ (\w+_A\w*)\s/ig, "$1 $2 ");
document.getElementById("MT").value = res;
//_VBZ_VHZ always_RR with_IW
var str = document.getElementById("MT").value;
var res = str.replace(/(_VBZ)_VHZ (\w+_R\w* \w+_I\w*)\s/ig, "$1 $2 ");
document.getElementById("MT").value = res;
// time_NNT1 learning_NN1
var str = document.getElementById("MT").value;
var res = str.replace(/(_NNT\w* \w+ing_)NN1\s/ig, "$1VVG ");
document.getElementById("MT").value = res;
//cycle_NN1_VV0 traffic_NN1 - this is just collocation
var str = document.getElementById("MT").value;
var res = str.replace(/(cycle_NN1)_VV0 (traffic_NN1)\s/ig, "$1 $2 ");
document.getElementById("MT").value = res;
//provide_VVI contact_NN1_VVI
var str = document.getElementById("MT").value;
var res = str.replace(/(_VVI \w+_NN1)_VVI\s/ig, "$1 ");
document.getElementById("MT").value = res;
//_VM live_JJ_VVI
var str = document.getElementById("MT").value;
var res = str.replace(/(_VM) (\w+)_JJ(_VVI)\s/ig, "$1 $2$3 ");
document.getElementById("MT").value = res;
//to_TO fit_JJ_VVI
var str = document.getElementById("MT").value;
var res = str.replace(/(_TO \w+)_JJ(_VVI)\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
//dare_VVI touch_NN1_VV0
var str = document.getElementById("MT").value;
var res = str.replace(/\b(dare_V\w*) (\w+)_NN1(_VV0)\s/ig, "$1 $2$3 ");
document.getElementById("MT").value = res;
//Dare_NN1_VM_VV0 I_PPIS1 admit_VVI
var str = document.getElementById("MT").value;
var res = str.replace(/_NN1(_VM)_VV0 (\w+_P\w+ \w+_VV\w+)\s/ig, "$1 $2 ");
document.getElementById("MT").value = res;
//capital letter for np - not case sensitive! and must not be start of sentence!
var str = document.getElementById("MT").value;
var res = str.replace(/\b(\w+ [A-Z]+[a-z]+_N)N1\s/g, "$1P1 ");
document.getElementById("MT").value = res;
//_VBZ going_VVG to_TO deal_VVI add K
var str = document.getElementById("MT").value;
var res = str.replace(/(_VB\w* going_VVG)( to_TO \w+_V\wI)\s/g, "$1K$2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/(_VB\w* \w+_XX going_VVG)( to_TO \w+_V\wI)\s/g, "$1K$2 ");
document.getElementById("MT").value = res;
//_VM n't_XX really_RR blame_VV0
var str = document.getElementById("MT").value;
var res = str.replace(/(_VM n.t_XX \w+_R\w+ \w+_V\w)0\s/g, "$1I ");
document.getElementById("MT").value = res;
//get_VVI outside_RL and_CC take_VV0 matching infinitive.
var str = document.getElementById("MT").value;
var res = str.replace(/(_VVI \w+_R\w* \w+_CC\w* \w+_VV)0\s/g, "$1I ");
document.getElementById("MT").value = res;
//_VVI and_CC stay_VV0
var str = document.getElementById("MT").value;
var res = str.replace(/(_VVI \w+_CC\w* \w+_VV)0\s/g, "$1I ");
document.getElementById("MT").value = res;
//tunnels_VVZ could_VM third person not possible before modal // MUST INCLUDE FULL WORD SO IT DOESNT ADD TAGS TO TAGS!!!!!!!! \w+_ IS IMPORTANT
var str = document.getElementById("MT").value;
var res = str.replace(/(\w+_NN2)_VVZ (\w+_VM)\s/g, "$1 $2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/(\w+)_VVZ (\w+_VM)\s/g, "$1_NN2 $2 ");
document.getElementById("MT").value = res;
//up_JJ31 to_JJ32 date_JJ33 // cancel the to always being preposition before noun!
var str = document.getElementById("MT").value;
var res = str.replace(/(up)\w* (to)\w* (date)\w*\s/ig, "$1_JJ31 $2_JJ32 $3_JJ33 ");
document.getElementById("MT").value = res;
//out_JJ31 of_JJ32 date_JJ33
var str = document.getElementById("MT").value;
var res = str.replace(/(out)\w* (of)\w* (date)\w*\s/ig, "$1_JJ31 $2_JJ32 $3_JJ33 ");
document.getElementById("MT").value = res;
//the_AT lifestyle he_PPHS1 = always noun
var str = document.getElementById("MT").value;
var res = str.replace(/(\w+_A\w* [a-z]+) (\w+_P\w*)\s/ig, "$1_NN1 $2 ");
document.getElementById("MT").value = res;
//32-day_NNT1 hyphenated adjective with number
var str = document.getElementById("MT").value;
var res = str.replace(/\b(\d+\-\w+)_NNT1\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
//guess adjective with hyphens // fish-holding_JJ pens_NN2 with_IW different-height_JJ walls_NN2// this is killing correct tags that are nouns = self-confidence//no solution but to turn it off.
//var str = document.getElementById("MT").value;
//var res = str.replace(/\b([a-z]+\-[a-z]+)_[^J]\w+ (\w+_NN\w+)\s/ig, "$1_JJ $2 ");
//document.getElementById("MT").value = res;
//let_VVI Colt_NP1 know_VV0 after lexical noun its vvi infinitive
var str = document.getElementById("MT").value;
var res = str.replace(/(_VV\w \w+_N\w* \w+_VV)0\s/ig, "$1I ");
document.getElementById("MT").value = res;
//ity suffix noun
var str = document.getElementById("MT").value;
var res = str.replace(/\b([a-z]+ity) ([\w\s]*\W+_\W+)\s/ig, "$1_NN1 $2 ");
document.getElementById("MT").value = res;
// to_TO will_VM
var str = document.getElementById("MT").value;
var res = str.replace(/\b(to_)TO (\w+_VM)\s/ig, "$1II $2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b(New)\w* (Zealand)\w*\s/g, "$1_NP1 $2_NP1 ");
document.getElementById("MT").value = res;
//
var str = document.getElementById("MT").value;
var res = str.replace(/(brand)_N\w+ (new)_J\w+\s/g, "$1_JJ21 $2_JJ22 ");
document.getElementById("MT").value = res;
//IS (VBZ) BASED (VVN) ON (II) vvn is by far most common.//It_PPH1 's_VBZ_VHZ based_VVN 
var str = document.getElementById("MT").value;
var res = str.replace(/(VB\w* \w+ed)_JJ(_VVN \w+_I\w*)\s/g, "$1$2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/(VBZ)_VH\w+ (\w+ed_VVN \w+_I\w*)\s/g, "$1 $2 ");
document.getElementById("MT").value = res;
//untagged 
var str = document.getElementById("MT").value;
var res = str.replace(/(VB\w* \w+ed) (\w+_I\w*)\s/g, "$1_VVN $2 ");
document.getElementById("MT").value = res;
// place_NN1 ,_, which_DDQ is_VBZ managed_VVN by_II the_AT SSD_JJ Concerts_NP1 company_NN1 ,_, promises_NN2_VVZ // difficult spaced SVA
var str = document.getElementById("MT").value;
var res = str.replace(/(\w+_NN1 ,_, \w+Q [\w\s]+ ,_, promises)_NN2(_VVZ)\s/g, "$1$2 ");
document.getElementById("MT").value = res;
//DIFFERENT (JJ) TYPES (NN2) OF (IO) - plural noun between adjective and preposition.
var str = document.getElementById("MT").value;
var res = str.replace(/(\w+_[AJ]\w* [a-z]+es) (\w+_I\w)\s/g, "$1_NN2 $2 ");
document.getElementById("MT").value = res;
//
//ING words are nouns after adjective and nothing more.
var str = document.getElementById("MT").value;
var res = str.replace(/(\w+_JJ \w+ing) (\W+_\W+)\s/g, "$1_NN1 $2 ");
document.getElementById("MT").value = res;
//that as conjunction needs a verb before it.
var str = document.getElementById("MT").value;
var res = str.replace(/(\W+_\W+ \w+_A\w* \w+_N\w* \w+_CST)_DD1\s/g, "$1 ");
document.getElementById("MT").value = res;
//._. That_CST_DD1
var str = document.getElementById("MT").value;
var res = str.replace(/([A-Z]\w+)_CST(_DD1)\s/g, "$1$2 ");
document.getElementById("MT").value = res;
//law_NN1 that_DD1 has_VHZ
var str = document.getElementById("MT").value;
var res = str.replace(/(_NN1 \w+_CST)_DD1 (\w+_V\w+)\s/g, "$1 $2 ");
document.getElementById("MT").value = res;
//both are possible but more common is:1		  THAT (CST) ALTHOUGH (CS)	48585	2		  THAT (CST_DD1) ALTHOUGH (CS)	4981	3		  THAT (DD1) ALTHOUGH (CS)	737
var str = document.getElementById("MT").value;
var res = str.replace(/\b(that)_\w* (although\w*)\s/ig, "$1_CST $2 ");
document.getElementById("MT").value = res;
//part_RR44 that_CST_DD1 's_VBZ true_JJ ._. 
var str = document.getElementById("MT").value;
var res = str.replace(/(_R\w+ \w+)_CST(_DD1 \'s_VBZ \w+_JJ)\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
//usually adjective //most_RGT widely_RR accepted_JJ_VVD_VVN
var str = document.getElementById("MT").value;
var res = str.replace(/(_RGT \w+_RR \w+_JJ)_VVD_VVN\s/ig, "$1 ");
document.getElementById("MT").value = res;
//no way to fix really //areas_NN2 already_RR infected_JJ_VVD
var str = document.getElementById("MT").value;
var res = str.replace(/(_N\w+ \w+_RR \w+ed)_JJ_VVD ([\w\s]+\W+_\W+)\s/ig, "$1_VVN $2 ");
document.getElementById("MT").value = res;
//I_PPIS1 really_RR ,_, really_RR loved_JJ_VVD
var str = document.getElementById("MT").value;
var res = str.replace(/(_[NPD]\w+ \w+_RR ,_, \w+_RR \w+)_JJ(_VVD)\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
//he_PPHS1 actually_RR lost_JJ_VVD
var str = document.getElementById("MT").value;
var res = str.replace(/(_[NPD]\w+ \w+_RR \w+)_JJ(_VVD)\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
//go_VVI to_TO jail_VVI ._.
var str = document.getElementById("MT").value;
var res = str.replace(/(go_\w+ to)_TO (jail)_VVI\s/ig, "$1_II $2_NN1 ");
document.getElementById("MT").value = res;
//
var str = document.getElementById("MT").value;
var res = str.replace(/\b(ELIGIBLE)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
//first-time
var str = document.getElementById("MT").value;
var res = str.replace(/\b(first-time)_\w*\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
//Type-C = CAPITAL LETTER PROPER NOUN WHEN SENTENCE IS DONE.
var str = document.getElementById("MT").value;
var res = str.replace(/\b([A-Z]+[a-z\-]*) ([\w\s]*\W+_\W+)\s/g, "$1_NP1 $2 ");
document.getElementById("MT").value = res;
//IAL suffix
var str = document.getElementById("MT").value;
var res = str.replace(/\b([a-z]+ial) ([\w\s]*\W+_\W+)\s/ig, "$1_JJ_NN1 $2 ");
document.getElementById("MT").value = res;
//of_IO glorified_JJ_VVN shooting_NN1_VVG
var str = document.getElementById("MT").value;
var res = str.replace(/(_[AI]\w* \w+_JJ)_VVN (\w+_NN1)_VVG\s/ig, "$1 $2 ");
document.getElementById("MT").value = res;
//have_VH0 n't_XX you_PPY written_JJ_VVN
var str = document.getElementById("MT").value;
var res = str.replace(/(_VH\w+ n.t_XX \w+_P\w+ \w+)_JJ(_VVN)\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
//getting_VVG married_JJ_VVN
var str = document.getElementById("MT").value;
var res = str.replace(/(g[eo]t\w* \w+)_JJ(_VVN)/ig, "$1$2 ");
document.getElementById("MT").value = res;
//s_NN2 are_VBR
var str = document.getElementById("MT").value;
var res = str.replace(/\b([a-z]+s) (\w+_VBR)\s/g, "$1_NN2 $2 ");
document.getElementById("MT").value = res;
// can_VM all_DB focus_NN1_VV0
var str = document.getElementById("MT").value;
var res = str.replace(/(_VM \w+_D\w* \w+)_NN1(_VV)0\s/ig, "$1$2I ");
document.getElementById("MT").value = res;
//You_PPY need_NN1_VV0 both possible but subject is more likely
var str = document.getElementById("MT").value;
var res = str.replace(/(_P\w* \w+_)NN1_(VV0)\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
//does_VDZ it_PPH1 allow_VV0
var str = document.getElementById("MT").value;
var res = str.replace(/(_VD\w* \w+ \w+_VV)0\s/ig, "$1I ");
document.getElementById("MT").value = res;
//should_VM let_VVI everyone_PN1 know_VV0
var str = document.getElementById("MT").value;
var res = str.replace(/(_VM \w+_VVI \w+_P\w+ \w+_VV)0\s/ig, "$1I ");
document.getElementById("MT").value = res;
//ies suffix
var str = document.getElementById("MT").value;
var res = str.replace(/\b([a-z]+ies) ([\'\w\s]*\W+_\W+)\s/g, "$1_NN2_VVZ $2 ");
document.getElementById("MT").value = res;
//the_AT fans_NN2_VVZ
var str = document.getElementById("MT").value;
var res = str.replace(/(_A\w+ \w+_NN2)_VVZ\s/ig, "$1 ");
document.getElementById("MT").value = res;
//IAN ADJECTIVE NOUN SUFFIX
var str = document.getElementById("MT").value;
var res = str.replace(/\b([a-z]+IAN)\s/ig, "$1_JJ_NN1 ");
document.getElementById("MT").value = res;
//prefix suffix un ed
var str = document.getElementById("MT").value;
var res = str.replace(/\b(un[a-z]+ed)\s/g, "$1_JJ ");
document.getElementById("MT").value = res;
//authorities_NN2_VVZ said_VVD //lives_NN2_VVZ are_VBR 
var str = document.getElementById("MT").value;
var res = str.replace(/(_NN2)_VVZ (\w+_V(?:VD|BR))\s/ig, "$1 $2 ");
document.getElementById("MT").value = res;
// inspire_VVI you_PPY and_CC keep_VV0 you_PPY
var str = document.getElementById("MT").value;
var res = str.replace(/(_VVI \w+ \w+_CC \w+_V\w)0\s/ig, "$1I ");
document.getElementById("MT").value = res;
//risky in_II Windows_NP1 10_MC search_NN1_VV0 ._.
var str = document.getElementById("MT").value;
var res = str.replace(/(_I\w* \w+_N\w* \w+_MC \w+_NN1)_VV\w\s/ig, "$1 ");
document.getElementById("MT").value = res;
//Anelou_NP1 quote_NN1_VV0 would have to be singular.
var str = document.getElementById("MT").value;
var res = str.replace(/(_NP1 \w+_NN1)_VV0\s/ig, "$1 ");
document.getElementById("MT").value = res;
//former_DA board_NN1_VV0
var str = document.getElementById("MT").value;
var res = str.replace(/(_DA \w+_NN1)_VV0\s/ig, "$1 ");
document.getElementById("MT").value = res;
//_GE peer_NN1_VV0
var str = document.getElementById("MT").value;
var res = str.replace(/(_GE \w+_NN1)_VV0\s/ig, "$1 ");
document.getElementById("MT").value = res;
//today_RT 's_GE lifestyles_NN2
var str = document.getElementById("MT").value;
var res = str.replace(/(_RT 's) (\w+_NN\w+)\s/ig, "$1_GE $2 ");
document.getElementById("MT").value = res;
//or_CC watch_NN1_VV0 a_AT1
var str = document.getElementById("MT").value;
var res = str.replace(/(_CC \w+)_NN1(_VV[I0] \w+_A\w*)\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
//with_IW self-examination and_CC
var str = document.getElementById("MT").value;
var res = str.replace(/([a-z-]+(?:ion|CY))\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/([a-z-]+ions)\s/ig, "$1_NN2 ");
document.getElementById("MT").value = res;
//Hollis said_VVD_VVN
var str = document.getElementById("MT").value;
var res = str.replace(/\b([A-Z]+[a-z]+) (\w+_VVD)_VVN\s/g, "$1_NP1 $2 ");
document.getElementById("MT").value = res;
////scalp-care //but it is not correct for all three-quarters
var str = document.getElementById("MT").value;
var res = str.replace(/\b([a-z]+-[a-z]+)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
//names like McDonald...
var str = document.getElementById("MT").value;
var res = str.replace(/\b([A-Z]+[a-z]+[A-Z]*[a-z]*)\s/g, "$1_NP1 ");
document.getElementById("MT").value = res;
//after_CS_II she_PPHS1 appeared_VVN
var str = document.getElementById("MT").value;
var res = str.replace(/(_CS)_II (\w+_[PN]\w* \w+_VV)N\s/g, "$1 $2D ");
document.getElementById("MT").value = res;
//30-second_MD_JJ spot_NN1 // I think this is an adjective (claws doesnt)
var str = document.getElementById("MT").value;
var res = str.replace(/_MD(_JJ \w+_N\w*)\s/ig, "$1 ");
document.getElementById("MT").value = res;
//nasty mistake somewhere to_II sing_VVG
var str = document.getElementById("MT").value;
var res = str.replace(/(to_)II (sing_VV)G\s/ig, "$1TO $2I ");
document.getElementById("MT").value = res;
//nasty mistake those_DD2 films_NN1
var str = document.getElementById("MT").value;
var res = str.replace(/(_\w*2 \w+s_NN)\w*\s/ig, "$12 ");
document.getElementById("MT").value = res;
// 254_MC historical_JJ cameras_NN2
var str = document.getElementById("MT").value;
var res = str.replace(/(_MC \w+_JJ [a-z]+s)\s/g, "$1_NN2 ");
document.getElementById("MT").value = res;
//4Q
var str = document.getElementById("MT").value;
var res = str.replace(/\b(\d+[a-z]+)\s/ig, "$1_FO ");
document.getElementById("MT").value = res;
//a_AT1 podcast about_II
var str = document.getElementById("MT").value;
var res = str.replace(/(_A\w+ [a-z]+s) (\w+_I\w*)\s/g, "$1_NN2 $2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/(_A\w+ [a-z]+) (\w+_I\w*)\s/g, "$1_NN1 $2 ");
document.getElementById("MT").value = res;
//its_APPGE fullest_NN1
var str = document.getElementById("MT").value;
var res = str.replace(/(_A\w+ [a-z]+est)\s/g, "$1_JJT ");
document.getElementById("MT").value = res;
//with_IW some_DD of_IO the_AT changes_NN2 made_VVD_VVN
var str = document.getElementById("MT").value;
var res = str.replace(/(_I\w* \w+_A\w* \w+_N\w+ \w+)_VVD(_VVN)\s/g, "$1$2 ");
document.getElementById("MT").value = res;
//the_AT lintel_VV0 and_CC
var str = document.getElementById("MT").value;
var res = str.replace(/(\w+_A\w* [a-z]+) (\w+_C\w+)\s/g, "$1_NN1 $2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/(\w+_A\w* [a-z]+s) (\w+_C\w+)\s/g, "$1_NN2 $2 ");
document.getElementById("MT").value = res;
////words ending in *IC  (jj): 68 (nn1): 16 (jj_nn1): 8 suffixes
var str = document.getElementById("MT").value;
var res = str.replace(/([a-z]+ic)\s/ig, "$1_JJ_NN1 ");
document.getElementById("MT").value = res;
//word enging -less JJ
var str = document.getElementById("MT").value;
var res = str.replace(/([a-z]+less)\s/ig, "$1_JJ ");
document.getElementById("MT").value = res;
//use_VV0 English_JJ_NN1 to_TO
var str = document.getElementById("MT").value;
var res = str.replace(/(_VV\w* \w+)_JJ(_N\w* to_TO)\s/ig, "$1$2 ");
document.getElementById("MT").value = res;
//all_DB over_RP again_RT
var str = document.getElementById("MT").value;
var res = str.replace(/(all)_DB (over)_RP (again_RT)\s/ig, "$1_RR $2_II $3 ");
document.getElementById("MT").value = res;
//noun verb change > infinitive question aux
//NOT WORKING AS WANTED!!!!!!
var str = document.getElementById("MT").value;
var res = str.replace(/(\w+_V[DM]\w*) ([\'\w\s]*) (\w+)_VV0 ([\w\s]*) (\?_\?)\s/ig, "$1 $2 $3_VVI $4 $5 ");
document.getElementById("MT").value = res;
//guess adjective suffiix ful chy //must go before plural noun.
var str = document.getElementById("MT").value;
var res = str.replace(/(\w+(:?al|ful|chy|ous|ive))\s/ig, "$1_JJ "); 
document.getElementById("MT").value = res;
//guess adjective or noun jj_nn1
var str = document.getElementById("MT").value;
var res = str.replace(/([a-z]+ant)\s/ig, "$1_JJ_NN1 ");  
document.getElementById("MT").value = res;
//guess plural noun//careful you can't use \w+ because it was tagging _CS_NN2!!!
var str = document.getElementById("MT").value;
var res = str.replace(/([a-z]+(?:rd|nt|c)s)\s/ig, "$1_NN2 ");  
document.getElementById("MT").value = res;
//in_II pronouns
var str = document.getElementById("MT").value;
var res = str.replace(/(_I\w+ [a-z]+s)\s/ig, "$1_NN2 ");  
document.getElementById("MT").value = res;
//and_CC almost_RR deemed_VVD_VVN it_PPH1 impossible_JJ for_IF me_PPIO1 to_TO succeed_VVI ,_,// past simple is safer since it wont give a c2 value. but this is risky choice. so must go last.
var str = document.getElementById("MT").value;
var res = str.replace(/(_VVD)_VVN ([\w\s]+._.)\s/ig, "$1 $2 ");
document.getElementById("MT").value = res;
//p ._. m ._.
var str = document.getElementById("MT").value;
var res = str.replace(/\bp \._\. m \._\.\s/g, "pm_RA ");  
document.getElementById("MT").value = res;
//p ._. m._RA
var str = document.getElementById("MT").value;
var res = str.replace(/\bp \._\. m\._RA\s/ig, "pm_RA ");  
document.getElementById("MT").value = res;
//p. m .
var str = document.getElementById("MT").value;
var res = str.replace(/\bp\. m \.\s/ig, "pm_RA ");  
document.getElementById("MT").value = res;
//p. m ._RA
var str = document.getElementById("MT").value;
var res = str.replace(/\bp\. m \._RA\s/ig, "pm_RA ");  
document.getElementById("MT").value = res;
//p ._. m ._.
var str = document.getElementById("MT").value;
var res = str.replace(/\ba \._\. m \._\.\s/ig, "am_RA ");  
document.getElementById("MT").value = res;
//p ._. m._RA
var str = document.getElementById("MT").value;
var res = str.replace(/\ba \._\. m\._RA\s/ig, "am_RA ");  
document.getElementById("MT").value = res;
//p. m .
var str = document.getElementById("MT").value;
var res = str.replace(/\ba\. m \.\s/ig, "am_RA ");  
document.getElementById("MT").value = res;
//p. m ._RA
var str = document.getElementById("MT").value;
var res = str.replace(/\ba\. m \._RA\s/ig, "am_RA ");  
document.getElementById("MT").value = res;
//U_NP1 ._. S_NP1 ._.//U_NN1 ._. S ._NP1 //there is no solution for this.except remove full stops.
var str = document.getElementById("MT").value;
var res = str.replace(/\bU_N\w+ ._. S_NP1 ._.\s/ig, "US_NP1 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\bU_NN1 ._. S ._NP1\s/ig, "US_NP1 ");
document.getElementById("MT").value = res;
//guess third person verb vvz //_PPHS1 simply_RR imports_VV0
var str = document.getElementById("MT").value;
var res = str.replace(/(_PPHS1 \w+_RR \w+s)\s/g, "$1_VVZ ");
document.getElementById("MT").value = res;
//traffic_NN1 jams_VVZ
var str = document.getElementById("MT").value;
var res = str.replace(/(traffic_NN1 jams_)VVZ\s/ig, "$1NN2 ");  
document.getElementById("MT").value = res;
// it_PPH1 's_VBZ_VHZ really_RR not_XX that/// miss tagged as D
var str = document.getElementById("MT").value;
var res = str.replace(/(_VBZ)_VHZ (\w+_RR \w+_XX \w+_[DC]\w+)\s/ig, "$1 $2 "); 
document.getElementById("MT").value = res;
//'s_VBZ_VHZ been_VBN //not working! not sure why.
var str = document.getElementById("MT").value;
var res = str.replace(/_VBZ(_VHZ \w+_VBN)\s/ig, "$1 ");
document.getElementById("MT").value = res;
//'s_VBZ_VHZ confused_VVN ._.
var str = document.getElementById("MT").value;
var res = str.replace(/(_VBZ)_VHZ (\w+_VVN ._.)\s/ig, "$1 $2 ");
document.getElementById("MT").value = res;
//'s_VBZ_VHZ Lon_NP1
var str = document.getElementById("MT").value;
var res = str.replace(/(_VBZ)_VHZ (\w+_NP\w* ._.)\s/ig, "$1 $2 ");
document.getElementById("MT").value = res;
//9/11_MF fractions
var str = document.getElementById("MT").value;
var res = str.replace(/(\d+\/\d+)\s/ig, "$1_MF ");
document.getElementById("MT").value = res;
//TRAPPIST-1. 
var str = document.getElementById("MT").value;
var res = str.replace(/\b([A-Z]+-\d+)(.)\s/g, "$1_NP1 $2_. ");
document.getElementById("MT").value = res;
//on_II_RP TRAPPIST-1_NP1
var str = document.getElementById("MT").value;
var res = str.replace(/(_II)_RP ([\w\-\d]+_N\w+)\s/ig, "$1 $2 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/(that)_\w* (is)_\w* (to)_\w* (say)_\w*\s/ig, "$1_REX41 $2_REX42 $3_REX43 $4_REX44 "); 
document.getElementById("MT").value = res;
//call_VVI on_II the_AT Android_NP1 APIs_NP1 in_II exactly_RR the_AT same_DA way_NN1 as_CSA_II_RG
var str = document.getElementById("MT").value;
var res = str.replace(/(_V\w+ [\w\s\,]* as_CSA)_II_RG (\w+_N\w+)\s/ig, "$1 $2 "); 
document.getElementById("MT").value = res;
//The_AT ones_NN2 that_RG best_RRT fit_VV0 the_AT data_NN//I think claws is wrong for RG
//The_AT ones_NN2 that_DD1 best_JJT fit_JJ_NN1
var str = document.getElementById("MT").value;
var res = str.replace(/(that_\w+ best)_\w+ (fit)_\w+\s/ig, "$1_RRT $2_VV0 ");
document.getElementById("MT").value = res;
//discuss_VVI each_DD1 change_NN1 and_CC see_VV0 //change to infinitive
var str = document.getElementById("MT").value;
var res = str.replace(/(_VVI \w+_[^V]\w+ \w+_[^V]\w+ \w+_CC\w* \w+_VV)0\s/ig, "$1I ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/(\w+_NN2 that)_\w* (\w+_RRT \w+_VV\w+)\s/ig, "$1_CST $2 "); 
document.getElementById("MT").value = res;
//guess past verb//this was turned off by accident a long time... _
var str = document.getElementById("MT").value;
var res = str.replace(/(\w+ed)\s/ig, "$1_VVD_VVN ");  
document.getElementById("MT").value = res;
//guess noun 
//of_IO soup_VVI
//the_AT hot_JJ soup and_CC
var str = document.getElementById("MT").value;
var res = str.replace(/(_A\w+ \w+_JJ\w* [a-z]+[^s]) (\w+_C\w+|._.)\s/ig, "$1_NN1 $2 "); 
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/(_IO [a-z]+[^s]) (\w+_I\w+|._.)\s/ig, "$1_NN1 $2 "); 
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/(\w+(?:cle|ence|logy|ma|ism|er|ony|cide))\s/ig, "$1_NN1 "); 
document.getElementById("MT").value = res;
//noun guessing is blocked higher up.
var str = document.getElementById("MT").value;
var res = str.replace(/(_A\w+ [a-z]+) (to_TO)\s/ig, "$1_NN1 $2 "); 
document.getElementById("MT").value = res; 
//guess verb VVI  We_PPIS2 must_VM reassess the_AT
var str = document.getElementById("MT").value;
var res = str.replace(/(_[PND]\w+ \w+_VM [a-z]+) (\w+_[ADJN]\w+)\s/ig, "$1_VVI $2 "); 
document.getElementById("MT").value = res;
//an_AT1 afterlife_VV0 just_RR
var str = document.getElementById("MT").value;
var res = str.replace(/(_AT1 [a-z]+) (\w+_R\w+)\s/ig, "$1_NN1 $2 "); 
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/([a-z]+es)\s/ig, "$1_NN2_VVZ "); 
document.getElementById("MT").value = res;
//guess plural noun two_MC callbacks_VV0//of_IO goats_VV0
var str = document.getElementById("MT").value;
var res = str.replace(/(_(?:MC|IO) [a-z]+s)\s/ig, "$1_NN2 "); 
document.getElementById("MT").value = res;
// adjective list //  itchy_JJ and_CC red_JJ_NN1 ._. 
var str = document.getElementById("MT").value;
var res = str.replace(/([a-z]_JJ \w+_CC \w+_JJ)_NN1\s/g, "$1 ");
document.getElementById("MT").value = res;
//guessing verbing ing or adjective (much rarer)
var str = document.getElementById("MT").value;
var res = str.replace(/([a-z]+ing [\w\s]+._.)\s/ig, "$1_JJ_VVG ");
document.getElementById("MT").value = res;
//but when cant decide vvg is more in end position after BE.
var str = document.getElementById("MT").value;
var res = str.replace(/_JJ(_VVG ._.)\s/g, "$1 ");
document.getElementById("MT").value = res;
//gues noun suffix////not sure what is going on but it wont work... 
var str = document.getElementById("MT").value;
var res = str.replace(/([a-z]+ion)\s/ig, "$1_NN1 ");
document.getElementById("MT").value = res;
//guessing adjective or pp // be_VBI demolished 
var str = document.getElementById("MT").value;
var res = str.replace(/(_VB\w+ [a-z]+ed)\s/g, "$1_VVN "); 
document.getElementById("MT").value = res;
//lists//_VVN ,_, altered_VVD
var str = document.getElementById("MT").value;
var res = str.replace(/([a-z]_VVN ,_, \w+ed_VV)D\s/g, "$1N "); 
document.getElementById("MT").value = res;
//lists or //altered_VVN or_CC otherwise_RR interfered_VVD
var str = document.getElementById("MT").value;
var res = str.replace(/([a-z]_VVN \w+_CC \w+_RR \w+ed_VV)D\s/g, "$1N "); 
document.getElementById("MT").value = res;
//GUESSING NOUN a_AT1 big_JJ horse ._. 
var str = document.getElementById("MT").value;
var res = str.replace(/(_AT1 \w+_JJ [a-z]+) (._.)\s/ig, "$1_NN1 $2 "); 
document.getElementById("MT").value = res;
//GUESSING verbing 
var str = document.getElementById("MT").value;
var res = str.replace(/([a-z]+ing)\s/ig, "$1_VVG "); 
document.getElementById("MT").value = res;
//The_AT so-called_JJ experts_NN2 put_VV0_VVD_VVN//this is just impossible...
var str = document.getElementById("MT").value;
var res = str.replace(/(_AT [\w\-]+_JJ \w+_NN2 \w+_VV0_VVD)_VVN\s/ig, "$1 ");
document.getElementById("MT").value = res;
//try putting at the end of this document.
//proper nouns guess - TOO RISKY MUST WAIT TILL PUNCTUATION//this is ruining imperatives at the start of sentences.
var str = document.getElementById("MT").value;
var res = str.replace(/\b([A-Z]+[a-z]+) ([\w\s]*\W+_\W+)\s/g, "$1_NP1 $2 ");
document.getElementById("MT").value = res;
///////must go last always!!!!!! because very wild.
// find a sentence without a verb and one word missing its tag. ED
var str = document.getElementById("MT").value;
var res = str.replace(/\b([\w\s]+_[^V]\w*) ([a-z]+ed) ([\w\s]+_[^V]\w*) (\W+_\W+)\s/ig, "$1 $2_VVD $3 $4 ");
document.getElementById("MT").value = res;
var str = document.getElementById("MT").value;
var res = str.replace(/\b([\w\s]+_[^V]\w*) ([a-z]+) ([\w\s]+_[^V]\w*) (\W+_\W+)\s/ig, "$1 $2_VV0 $3 $4 ");
document.getElementById("MT").value = res;
//THIS IS SOME WEIRD GLITCH SOMEWHERE ,_,_VVG
var str = document.getElementById("MT").value;
var res = str.replace(/(,_,)_[A-Z]+\s/g, "$1 ");
document.getElementById("MT").value = res;
//ise suffix
var str = document.getElementById("MT").value;
var res = str.replace(/(\w+ise)\s/g, "$1_JJ_NN1_VV0 ");
document.getElementById("MT").value = res;
//ized suffix
var str = document.getElementById("MT").value;
var res = str.replace(/(\w+i[zs]ed)\s/g, "$1_JJ_VVD_VVN ");
document.getElementById("MT").value = res;
//MENT SUFFIX full sentence
var str = document.getElementById("MT").value;
var res = str.replace(/\b([a-z]+MENT)\s/ig, "$1_NN1 ");//can't remember what this code is, it was really high up with \W+ but now changed to simple again.
document.getElementById("MT").value = res;
//of (io)+ing next word (vvg): 48 (nn1): 9 NOT BEING_VBG OR DOING OR HAVING //MUST NOT JUST ADD \w* without the _ because it catches lots of things!//terrible ruin of 'thing'
//var str = document.getElementById("MT").value;
//var res = str.replace(/\b(of_IO) ([^b^d^h][a-z]*ing)_\w*\s/g, "$1 $2_VVG "); 
//document.getElementById("MT").value = res;
}