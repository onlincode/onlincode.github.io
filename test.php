<!DOCTYPE html><html><head>
<meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
  <style>body {background-color: #cccccc;}</style>
</head><body><div class="container-fluid"><div class="row"><div class="col-sm-4"><h1><a href="index.html">EnglishGrammar.Pro</a></h1><form action="action.php" method="post"><p>This English grammar profiler requires that you click this link &gt; <br><a href="http://ucrel-api.lancaster.ac.uk/claws/free.html" target="_blank"> to get <b>C7 horizontal</b> tagged text </a><br><br><textarea id="MT" name="name" rows="10" cols="60" onkeyup="myFunction()" placeholder="and then paste it here to work properly.  Although it is possible to directly add untagged text in this box, it is still in beta mode. This beta 'tag as you type' is triggered using the keypad.  When you have finished adding and or editing the tags, you need to click the grey button below 'check complexity' to submit your text."></textarea></p><p>
<input type="submit" value="check complexity"></p></form>
<script src="t1.js"></script>
<h4>What does this English Grammar Profiler do?</h4> 
<b>1.</b> First, it works at the single word or token level.  It assigns and highlights a CEFR level to vocabulary found in the English Vocabulary Profile (EVP).  This is done by part of speech (POS) for more accuracy but still uses the lowest sense of the word.  It also highlights vocabulary not found in the EVP but is found in the New Academic Word List (NAWL).  This happens first because there are some grammar points that will later refer to vocabulary range.<br><b>2.</b> Next, it works on groups of tokens to assign a CEFR level to grammar points found in the English Grammar Profile and phrases found in the EVP.  By rolling your mouse over a highlight, a brief explanation appears or you can click on an underlined link to a page with more corpus information about it.<br><b>3.</b> Finally, it compares the proportions of all the CEFR highlights in the text to the proportions found in large samples of the Cambridge Learner Corpus (CLC).<br><b>Limitations:</b>
We guess that about 15% of grammar points cannot be identified with form alone in addition to the ambiguity, overlapping and clashing CEFR levels across the EGP and EVP.  Learner texts with language errors or spoken texts with non-standard language or  punctuation will disrupt tagging and analysis. It does not report absolutely every language feature because we believe, for example, there is no point in marking an A1 noun phrase if it is a C2 idiomatic phrase. There is no perfect POS tagging software that exists.  
<p></p></div>
<div class="col-sm-4"><p>
You can edit any incorrect tags using the following CLAWS7 tagset on this page:<br>
<b>APPGE</b>	possessive <b>pronoun</b>, pre-nominal (my, your, our)
<b>AT</b>	<b>article</b> (the, no)
<b>AT1</b>	singular (a, an, every)<br><br>
<b>BCL</b>	before-clause marker (in order (that),in order (to))<br><br>
<b>CC</b>	coordinating <b>conjunction</b> (and, or)
<b>CCB</b>	adversative coordinating (but)
<b>CS</b>	subordinating (if)
<b>CSA</b>	as <b>CSN</b> than, <b>CST</b>	that, <b>CSW</b> whether<br><br>
<b>DA</b>	after/post-<b>determiner</b> capable of pronominal function (such, former, same)
<b>DA1</b>	singular after-determiner (little, much)
<b>DA2</b>	plural after-determiner (few, several, many)
<b>DAR</b>	comparative after-determiner (more, less, fewer)
<b>DAT</b>	superlative after-determiner (most, least, fewest)
<b>DB</b>	before determiner or pre-determiner capable of pronominal function (all, half)
<b>DB2</b>	plural before-determiner (both)
<b>DD</b>	capable of pronominal function (any,some)
<b>DD1</b>	singular (this, that, another)
<b>DD2</b>	plural (these,those)
<b>DDQ</b>	wh-determiner (which, what)
<b>DDQGE</b>	wh- genitive (whose)
<b>DDQV</b>	wh-ever (whichever, whatever)
<b>EX	</b>existential there<br>
<b>FO	</b>formula
<b>FU	</b>unclassified word
<b>FW	</b>foreign word<br>
<b>GE	</b>germanic genitive marker - (or's)<br><br>
<b>IF	</b>for (as <b>preposition</b>)
<b>II	</b>general 
<b>IO	</b>of 
<b>IW	</b>with, without<br><br>
<b>JJ	</b>general adjective
<b>JJR	</b>general comparative (older)
<b>JJT	</b>general superlative (oldest)
<b>JK	</b>catenative (able to, willing to)<br>
<b>MC	</b>cardinal number,neutral for number (two)
<b>MC1	</b>singular cardinal (one)
<b>MC2	</b>plural cardinal (sixes)
<b>MCGE	</b>genitive cardinal, neutral for (two's)
<b>MCMC	</b>hyphenated (40-50)
<b>MD	</b>ordinal (first)
<b>MF	</b>fraction,neutral (quarters)<br><br>
<b>ND1	</b>singular noun of direction (north)
<b>NN	</b>common, neutral for number (sheep)
<b>NN1	</b>singular common (book)
<b>NN2	</b>plural common (books)
<b>NNA	</b>following noun of title ( M.A.)
<b>NNB	</b>preceding noun of title (Mr. Prof.)
<b>NNL1	</b>singular locative (Island)
<b>NNL2	</b>plural locative (Islands)
<b>NNO	</b>numeral noun, neutral for number (dozen)
<b>NNO2	</b>numeral, plural (hundreds)
<b>NNT1	</b>temporal, singular (day)
<b>NNT2	</b>temporal, plural (days, weeks, years)
<b>NNU	</b>unit of measurement, neutral for number (in, cc)
<b>NNU1	</b>singular unit of measurement (inch, centimetre)
<b>NNU2	</b>plural unit of measurement (ins., feet)
<b>NP	</b>proper noun, neutral for number (IBM, Andes)
<b>NP1	</b>singular proper (London, Jane, Frederick)
<b>NP2	</b>plural proper (Browns, Reagans, Koreas)
<b>NPD1	</b>singular weekday (Sunday)
<b>NPD2	</b>plural weekday(Sundays)
<b>NPM1	</b>singular month (October)
<b>NPM2	</b>plural month(Octobers)<br>
</p></div>
<div class="col-sm-4"><p>
<b>PN	</b>indefinite <b>pronoun</b>, neutral for number (none)
<b>PN1	</b>indefinite singular (anyone, everything, nobody, one)
<b>PNQO	</b>objective wh- (whom)
<b>PNQS	</b>subjective wh- (who)
<b>PNQV	</b>wh-ever (whoever)
<b>PNX1	</b>reflexive indefinite (oneself)
<b>PPGE	</b>nominal possessive personal (mine, yours)
<b>PPH1	</b>3rd person sing. neuter personal (it)
<b>PPHO1</b>	3rd person sing. objective personal (him, her)
<b>PPHO2</b>	3rd person plural objective personal (them)
<b>PPHS1</b>	3rd person sing. subjective personal (he, she)
<b>PPHS2</b>	3rd person plural subjective personal (they)
<b>PPIO1</b>	1st person sing. objective personal (me)
<b>PPIO2</b>	1st person plural objective personal (us)
<b>PPIS1</b>	1st person sing. subjective personal (I)
<b>PPIS2</b>	1st person plural subjective personal (we)
<b>PPX1	</b>singular reflexive personal (yourself, itself)
<b>PPX2	</b>plural reflexive personal (yourselves, themselves)
<b>PPY	</b>2nd person personal (you)
<b>RA	adverb</b>, after nominal head (else, galore)
<b>REX	</b>introducing appositional constructions (namely, e.g.)<br>
<b>RG	</b>degree (very, so, too)
<b>RGQ	</b>wh- degree (how)
<b>RGQV	</b>wh-ever degree (however)
<b>RGR	</b>comparative degree (more, less)
<b>RGT	</b>superlative degree (most, least)<br>
<b>RL	</b>locative adverb (alongside, forward)
<b>RP	</b>prep. particle (about, in)
<b>RPK	</b>prep. catenative (be about to)<br>
<b>RR	</b>general
<b>RRQ	</b>wh- general (where, when, why, how)
<b>RRQV	</b>wh-ever general (wherever, whenever)
<b>RRR	</b>comparative general (better, longer)
<b>RRT	</b>superlative general (best, longest)
<b>RT	</b>quasi-nominal of time (now, tomorrow)<br><br>
<b>TO	</b>infinitive marker (to)<br>
<b>UH	</b>interjection (oh, yes, um)<br><br>
<b>VB0	</b>be, base form (finite i.e. imperative, subjunctive)
<b>VBDR	</b>were
<b>VBDZ	</b>was
<b>VBG	</b>being
<b>VBI	</b>be, infinitive (To be or not... It will be ..)
<b>VBM	</b>am
<b>VBN	</b>been
<b>VBR	</b>are
<b>VBZ	</b>is<br>
<b>VD0	</b>do, base form (finite)
<b>VDD	</b>did
<b>VDG	</b>doing
<b>VDI	</b>do, infinitive (I may do... To do...)
<b>VDN	</b>done
<b>VDZ	</b>does<br>
<b>VH0	</b>have, base form (finite)
<b>VHD	</b>had (past tense)
<b>VHG	</b>having
<b>VHI	</b>have, infinitive
<b>VHN	</b>had (past participle)
<b>VHZ	</b>has<br>
<b>VM	</b>modal auxiliary (can, will, would)
<b>VMK	</b>modal catenative (ought, used)<br>
<b>VV0	</b>base form of lexical <b>verb</b> (give, work)
<b>VVD	</b>past tense of lexical (gave, worked)
<b>VVG	</b>-ing participle of lexical (giving, working)
<b>VVGK	</b>-ing participle catenative (going in be going to)
<b>VVI	</b>infinitive (to give... It will work...)
<b>VVN	</b>past participle of lexical (given, worked)
<b>VVNK	</b>past participle catenative (bound in be bound to)
<b>VVZ	</b>-s form of lexical (gives, works)<br><br>
<b>XX	</b>not, n't<br>
<b>ZZ1	</b>singular letter of the alphabet (e.g. A,b)
<b>ZZ2	</b>plural letter of the alphabet (e.g. A's, b's)</p>
</div>
</div>
</div>
<p></p>

</body></html>