const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const xmlData = `<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n
<?xml-model href=\"../odd/tei_revue.rng\" type=\"application/xml\" schematypens=\"http://relaxng.org/ns/structure/1.0\"?>
<?xml-model href=\"../odd/tei_revue.rng\" type=\"application/xml\" schematypens=\"http://purl.oclc.org/dsdl/schematron\"?>
<div
    xmlns=\"http://www.tei-c.org/ns/1.0\" xml:id=\"entities\">\n  
    <listPerson>\n    
        <person xml:id=\"RL\">\n      
            <persName>Pierre-François Honoré Richard de Lucy de Fossarieu</persName>\n      
            <note resp=\"#abel\" xml:lang=\"fr\">\n        
                <p>\n          Né à Saint-Pierre le 18 décembre 1790, il y décède le 1
                    <hi rend=\"superscript\">er</hi> février 1839 à l’âge de 48 ans. Ce blanc créole appartenait à une riche famille de colons de la Martinique. Son père Xavier Lucy de Fossarieu fut d’ailleurs capitaine d’infanterie. Richard de Lucy de Fossarieu épousa le 3 février 1814 Claire Elisabeth Eyma, blanche créole dont la famille était apparentée à son futur époux par sa mère Hélène de Lussy de Fossarieu. Il fut conseiller à la Cour royale de la Martinique en 1821, procureur général par intérim de 1822 à 1824 et président du Conseil général en 1830. C’est lui qui fit exécuter l’arrêt de condamnation contre Cyrille Bissette en janvier 1824.\n        
                </p>\n        
                <bibl>\n          Françoise Thésée, « La Révolte des esclaves du Carbet à la Martinique (octobre-novembre 1822) », 
                    <title>Revue Française d’Histoire d’Outre-Mer</title>, tome 80, n° 301, 4e trimestre 1993, pp. 551-584 [note 54, p. 568]. DOI : 
                    <ref target=\"https//doi.org/10.3406/outre.1993.3148\">https//doi.org/10.3406/outre.1993.3148</ref>. \n        
                </bibl>\n      
            </note>\n      
            <note resp=\"#abel\" xml:lang=\"en\">\n        
                <p>\n          Born in Saint-Pierre on December 18, 1790 and died in the same town on February 1, 1839, at the age of 48, Pierre-François Honoré Richard de Lucy de Fossarieu belonged to an affluent settler family in colonial Martinique, with his father, Xavier Lucy de Fossarieu, holding the rank of infantry captain. On February 3, 1814, he married Claire Elisabeth Eyma, a fellow white Creole, whose family had ties to his through her mother Hélène de Lussy de Fossarieu. He served as a counselor at the Royal Court of Martinique in 1821 and President of the General Council in 1830, following his tenure as interim Attorney General from 1822 to 1824, in which capacity he oversaw the execution of the verdict of condemnation against Cyrille Bissette in January 1824. \n        </p>\n        
                <bibl>\n          Françoise Thésée, “La Révolte des esclaves du Carbet à la Martinique (octobre-novembre 1822)”, 
                    <title>Revue Française d’Histoire d’Outre-Mer</title>, 80-301, 1993, 551-584 [n. 54, 568]. DOI: 
                    <ref target=\"https//doi.org/10.3406/outre.1993.3148\">https//doi.org/10.3406/outre.1993.3148</ref>. \n        
                </bibl>\n      
            </note>\n    
        </person>\n    
        <person xml:id=\"DES\">\n      
            <persName>Pierre Dessalles</persName>\n      
            <note resp=\"#abel\" xml:lang=\"fr\">\n        
                <p>\n          Né à Castillonnès dans le département du Lot-et-Garonne, il décède le 5 mars 1857 à Brest à l’âge de 71 ans. Pierre François Marie Dieudonné Dessalles, plus connu en tant que Pierre Dessalles, était le fils de Régis Dessalles et de Manon d’Albis de Gissac. Marié le 6 octobre 1808 à Fort-Royal, capitale administrative de la colonie de la Martinique, à Anna Bence de Sainte-Catherine, blanche créole du Lamentin, Pierre Dessalles, bien que métropolitain, fut l’archétype du colon blanc par sa famille paternelle et maternelle, ainsi que par son alliance matrimoniale. Il fit une carrière dans la magistrature en tant que conseiller à la Cour d’appel de la Martinique (assesseur le 4 janvier 1809, titulaire le 4 janvier 1812). C’est à ce titre qu’il prit part à l’affaire Bissette (1823-1824) et fit condamner Cyrille Auguste Bissette aux galères à perpétuité et à être marqué au fer rouge des lettres GAL (Galérien). Puis, il fut conseiller à la Cour royale de la Martinique le 5 octobre 1828. Il fut aussi capitaine dans les milices de la colonie le 25 février 1829. Nommé ensuite procureur général par intérim à la Cour d’appel le 16 juin 1831, il fut démissionnaire le 31 juillet suivant, suspendu le 4 août 1832, et destitué le 19 septembre 1832. L’homme fut aussi propriétaire d’habitations, sucrerie et caféière à Sainte-Marie, commune du nord atlantique de la Martinique. Fin connaisseur de la société coloniale esclavagiste de la Martinique, il s’épancha sur cette dernière dans son ouvrage intitulé « La Vie d’un colon à la Martinique au XIX
                    <hi rend=\"superscript\">e</hi> siècle » (1808-1856) dans lequel il revint sur plusieurs évènements marquants comme les révoltes d’esclaves (ou plus exactement d’esclavisés) en 1811 et 1831, l’affaire Bissette en 1823-1824, l’affaire de la Grande Anse en 1833 et les prémices de l’abolition de l’esclavage en Martinique.\n        
                </p>\n        
                <bibl>\n          Henri de Frémont, 
                    <title>Histoire et généalogie de la famille Dessalles ou Des Salles</title>, 
                    <ref target=\"https://gw.geneanet.org/pierfit?lang=fr&amp;p=pierre&amp;n=dessalles&amp;oc=3\">https://gw.geneanet.org/pierfit?lang=fr&amp;p=pierre&amp;n=dessalles&amp;oc=3</ref>. \n        
                </bibl>\n        
                <bibl>\n          Abel Alexis Louis, 
                    <title>Marchands et négociants de couleur à Saint-Pierre (1777-1830) : milieux socioprofessionnels, fortune et mode de vie</title>, Paris, L’Harmattan, 2015.\n        
                </bibl>\n      
            </note>\n      
            <note resp=\"#abel\" xml:lang=\"en\">\n        
                <p>\n          Pierre François Marie Dieudonné Dessalles, better known as Pierre Dessalles, was born in Castillonnès, in the department of Lot-et-Garonne and died at the age of 71 on March 5, 1857, in Brest. The son of Régis Dessalles and Manon d’Albis de Gissac, he married Anna Bence de Sainte-Catherine, a white Creole from Le Lamentin, in Fort-Royal, the administrative capital of the Martinique colony on October 6, 1808.\n        </p>\n        
                <p>\n          Despite his metropolitan origin, Pierre Dessalles became the epitome of a white settler due to his family background and marital alliance. He pursued a career in the judiciary as a counselor at the Court of Appeal of Martinique, initially as an assessor on January 4, 1809, and later as a full counselor on January 4, 1812. In this capacity, he played a role in the Bissette case (1823-1824), securing the conviction of Cyrille Auguste Bissette to life imprisonment with hard labor and branding with the letters GAL (Galley Slave).\n        </p>\n        
                <p>\n          Subsequently, he assumed the role of counselor at the Royal Court of Martinique on October 5, 1828, and also held the position of captain in the colony's militias starting from February 25, 1829. However, his tenure as interim Attorney General at the Court of Appeal, which began on June 16, 1831, was short-lived, as he resigned on July 31 of the same year, was suspended on August 4, 1832, and ultimately dismissed on September 19, 1832.\n        </p>\n        
                <p>\n          Beyond his legal career, Pierre Dessalles owned plantations, sugar refineries, and coffee estates in Sainte-Marie, a town in the north Atlantic region of Martinique. Familiar with intricacies of Martinique’s colonial slave society, he explored the subject in his book “Life of a Settler in Martinique in the 19th Century” (1808-1856). This publication explored significant events such as the uprisings of enslaved people in 1811 and 1831, the Bissette affair of 1823-1824, the Grande Anse affair of 1833, and the early stages of the abolition of slavery in Martinique.\n        </p>\n        
                <bibl>\n          Henri de Frémont, 
                    <title>Histoire et généalogie de la famille Dessalles ou Des Salles</title>, 
                    <ref target=\"https://gw.geneanet.org/pierfit?lang=fr&amp;p=pierre&amp;n=dessalles&amp;oc=3\">https://gw.geneanet.org/pierfit?lang=fr&amp;p=pierre&amp;n=dessalles&amp;oc=3</ref>. \n        
                </bibl>\n        
                <bibl>\n          Abel Alexis Louis, 
                    <title>Marchands et négociants de couleur à Saint-Pierre (1777-1830) : milieux socioprofessionnels, fortune et mode de vie</title>, Paris, L’Harmattan, 2015.\n        
                </bibl>\n      
            </note>\n    
        </person>\n    
        <person xml:id=\"LaF\">\n      
            <persName>Gilbert du Motier, marquis de Lafayette</persName>\n      
            <birth>1757</birth>\n      
            <death>1834</death>\n      
            <note resp=\"#greg\" xml:lang=\"fr\">\n        
                <p>\n          Issu de la noblesse fortunée, Marie-Joseph Paul Yves Roch Gilbert du Motier naît en 1757 en Auvergne, où il grandit avant de poursuivre ses études à Paris au collège du Plessis (futur lycée Louis le Grand). Suivant la tradition familiale il poursuit une carrière militaire et devient officier de cavalerie. Informé des troubles agitant les colonies anglaises d’Amérique du Nord, Lafayette rejoint les insurgés, faisant usage de sa colossale fortune personnelle pour soutenir l’effort de guerre. Son engagement fait de lui un héros des deux côtés de l’Atlantique. Il participe aux discussions menant au Traité de Paris en 1783, et se voit nommé maréchal de camp par Louis XVI. Connu pour ses convictions progressistes, il est un des rares représentants de la noblesse à prêter serment au Jeu de Paume aux États-Généraux de 1789. Il rédige dans les journées qui suivent le premier jet de la Déclaration des Droits de l’Homme et du Citoyen. \n        </p>\n        
                <p>\n          Nommé à la tête de la Garde Nationale, Lafayette perd en  popularité durant la Constituante du fait de sa position modérée. Décrié par les royalistes et déclaré traître à la nation à l’Assemblée, il s’exile  en août 1792. De retour en France en 1800, après des années d’emprisonnement et d’exil, son opposition à Napoléon reste silencieuse jusqu’aux Cent Jours; élu à la Chambre, il joue un rôle clé dans la seconde abdication. Il devient chef de file de l’opposition de gauche sous Louis XVIII. Après une tournée triomphale aux États-Unis entre 1824 et 1825, il reprend son rôle dans l’opposition démocratique aux velléités absolutistes de Charles X. Au premier rang de la révolution de Juillet, il apporte soutien à Louis-Philippe, contribuant à faire accepter la monarchie parlementaire. La rapide dérive autocratique du nouveau régime pousse Lafayette de nouveau dans l’opposition. Il meurt d’une pneumonie en 1834, après avoir assisté à l’enterrement de François-Charles Dulong, député d’extrême-gauche tué en duel par le général Bugeaud.  \n        </p>\n        
                <p>\n          La nécrologie de Lafayette publiée dans le premier numéro de la 
                    <title>Revue des Colonies</title> souligne l’engagement abolitionniste de l’homme d’état, qui semble dater de sa visite aux États-Unis. Une lettre à George Washington datant de 1783, le montre essayant de convaincre le général américain de se joindre à lui pour acquérir une plantation qui emploierait des affranchis. Si Washington n’en fit rien, Lafayette mit ce projet en place deux années plus tard, dans une plantation de Guyane. Il fut parmi les premiers membres de la Société des Amis des Noirs, fondée en France en 1788, et se prononça à la Constituante en faveur des droits civiques pour les gens de couleur. La carrière politique de Lafayette sera caractérisée jusque dans les dernières années de sa vie par un des prises de position en soutien aux efforts abolitionnistes, modérés comme radicaux. Il deviendra notamment vice-président à vie de l’American Colonization Society, combattra la traite clandestine, et se positionnera en soutien à Haïti avant même que le pays ne soit officiellement reconnu par la France. \n        
                </p>\n        
                <bibl>\n          Étienne Taillemitte, « La Fayette et l’abolition de l’esclavage », 
                    <title>L'esclave et les plantations : de l'établissement de la servitude à son abolition. Hommage à Pierre Pluchon</title>. Rennes : Presses universitaires de Rennes, 2009 (généré le 28 septembre 2023). 
                    <ref target=\"http://books.openedition.org/pur/97682\">http://books.openedition.org/pur/97682</ref>.\n        
                </bibl>\n      
            </note>\n      
            <note resp=\"#greg\" xml:lang=\"en\">\n        
                <p>\n          Born into an aristocratic family in Auvergne in 1757, Marie-Joseph Paul Yves Roch Gilbert du Motier spent his early years there before moving to Paris to study at the Collège du Plessis, which would later become Louis-le-Grand high school. Following his family's tradition, he embarked on a military career, eventually becoming a cavalry officer.\n        </p>\n        
                <p>\n          Upon learning of the unrest in the English colonies of North America, Lafayette joined the rebels, using his substantial personal wealth to fund the war effort. His involvement in the war earned him a heroic reputation on both sides of the Atlantic. He was involved in the discussions that led to the Treaty of Paris in 1783 and was later appointed field marshal by Louis XVI. Known for his progressive views, he was one of the few nobles to take the oath at the Jeu de Paume during the Estates-General of 1789, signaling the start of the French Revolution. In the days that followed, he penned the original draft Declaration of the Rights of Man and of the Citizen.\n        </p>\n        
                <p>\n          Lafayette was appointed commander of the National Guard, but his popularity waned during the Constituent Assembly due to his moderate stance. Criticized by the royalists and branded a traitor by the Assembly, he was forced into exile in August 1792 and immediately captured. After enduring years of imprisonment and exile, he returned to France in 1800. He generally concealed his opposition to Napoleon, avoiding politics for most of his reign. After Napoleon's escape from Elba, Lafayette was elected to the Chamber of Deputies during the early Restoration and during Napoleon’s short-lived return. Lafayette played a crucial role in securing Napoleon's second abdication. Under Louis XVIII, Lafayette led the left-wing opposition. Following a year-long tour of the United States between 1824 and 1825, he resumed his role in the democratic opposition during Charles X's reign. He was also a leading figure in the July Revolution of 1830, publicly backing Louis-Philippe and aiding in the establishment of a parliamentary monarchy. However, Lafayette soon grew disenchanted with the new regime as it quickly turned autocratic. He died of pneumonia in 1834 after attending the funeral of François-Charles Dulong, a far-left deputy who was killed in a duel by General Thomas Robert Bugeaud.\n        </p>\n        
                <p>\n          Lafayette's obituary, published in the inaugural issue of the Revue des Colonies, highlighted his commitment to abolitionism, which appears to have grown out of his first visit to the United States. In a 1783 letter to George Washington, Lafayette proposed that they jointly purchase a plantation to employ freed slaves. Although Washington did not agree, Lafayette carried out this plan two years later on a plantation in Guyana. He was one of the founding members of the abolitionist Société des Amis des Noirs in France in 1788 and advocated for civil rights for people of color at the Constituent Assembly. Throughout his political career, Lafayette consistently supported abolitionist causes, even radical ones. He served as the lifelong vice-president of the American Colonization Society, frequently spoke out against the illegal slave trade in the French parliament, and expressed his support for Haiti years before France officially recognized the country in 1825.\n        </p>\n        
                <bibl>\n          Étienne Taillemitte, “La Fayette et l’abolition de l’esclavage,” 
                    <title>L'esclave et les plantations : de l'établissement de la servitude à son abolition. Hommage à Pierre Pluchon</title>. Presses universitaires de Rennes, 2009. 
                    <ref target=\"http://books.openedition.org/pur/97682\">http://books.openedition.org/pur/97682</ref>.\n        
                </bibl>\n      
            </note>\n    
        </person>\n    
        <person xml:id=\"CB\">\n      
            <persName>Cyrille Bissette</persName>\n      
            <note resp=\"#masha\" xml:lang=\"fr\">\n        
                <figure>\n          
                    <graphic url=\"portrait_Bissette.jpg\"/>\n          
                    <figDesc>Portrait de Cyrille Bissette. Courtesy of the Schomburg Center for Research in Black Culture</figDesc>\n        
                </figure>\n        
                <p>Né à Fort-Royal (Martinique) le 9 juillet 1795, Cyrille Charles Auguste Bissette est le fondateur et rédacteur en chef de la 
                    <title>Revue des Colonies</title>, premier organe de presse à plaider publiquement pour une abolition immédiate.
                </p>\n        
                <p>Ses parents Charles Borromée Bissette et Elizabeth Mélanie Bellaine, étaient libres de couleur. Par sa mère, la fille naturelle de Joseph-Gaspard de Tascher de La Pagerie, Cyrille Bissette est un neveu de Joséphine de Beauharnais.</p>\n        
                <p>En 1816, Bissette épouse Augustine Séverin, une femme de couleur libre, avec qui il a quatre enfants. Négociant et propriétaire d’esclaves, il n’est pas encore engagé dans le mouvement antiesclavagiste, participant, en 1822, à la répression de la révolte du Carbet. Quelque mois plus tard, cependant, il est arrêté, ainsi que six autres hommes de couleur libres — Montlouis Thébia, Joseph Richer, Joseph Millet, Laborde, Louis Fabien, fils et Jean-Baptiste Volny — pour détention et distribution présumées d’un pamphlet séditieux imprimé à Paris, 
                    <title>De la situation des homme de couleur libre aux Antilles françaises </title>(que Bissette aurait écrit). 
                </p>\n        
                <p>Jugés comme meneurs présumés d’un complot visant à renverser l’organisation ségrégationniste de la société martiniquaise, Bissette, Fabien 
                    <title>fils </title>et Volny sont marqués au fer rouge et condamnés aux galères à perpétuité. En 1827, avec l’aide de l’avocat François Isambert, Bissette voit sa peine réduite à dix ans de bannissement et les frais juridiques de la procédure, qui demeureront un fardeau important. Bénéficiant d’une importante couverture médiatique, la dénommée « Affaire Bissette » donne l’impulsion à sa carrière politique. 
                </p>\n        
                <p>A Paris, Bissette participe aux Trois Glorieuses ce qui lui vaudra d’être décoré de la Croix de Juillet, fréquente les cercles républicains comme l’
                    <title>Association libre pour l'éducation du peuple</title>, rejoint une loge maçonnique, publie plusieurs pétitions à visée émancipatrice, et fonde la 
                    <title>Revue des Colonies, </title>organe de presse pour ses plaidoyers pour une abolition totale et immédiate de l'esclavage. Cette position radicale le met en porte-à-faux avec la majorité de la communauté abolitionniste française,dont Victor Schoelcher. \\
                </p>\n        
                <p>La distance entre les deux abolitionnistes tourne au conflit après la publication 
                    <title>Des Colonies Françaises </title>de Schoelcher, que Bissette critique sévèrement pour sa caractérisation stigmatisante - allant jusqu’au racisme décomplexé - de la population de couleur libre des Antilles.  Occulté par le culte de Schoelcher dans la bourgeoisie intellectuelle assimilationniste, Cyrille Bissette est rejeté de la mémoire collective pour sa plateforme réconciliationniste et son alliance stratégique avec un planteur blanc aux élections législatives de 1849. 
                </p>\n        
                <bibl>Bongie, Chris. “1835, ou ‘Le troisième cycle’: The Creole Afterlives of Cyrille-Charles Auguste Bissette, Louis de Maynard de Queilhe, and Victor Schoelcher.” In 
                    <title>Islands and Exiles: The Creole Identities of Post/Colonial Literature</title>. Stanford: Stanford University Press, 1998. 264-287, 323-340.
                </bibl>\n        
                <bibl>Bongie, Chris. “A Street Named Bissette: Assimilating the Cent-cinquantenaire of the Abolition of Slavery in Martinique (1848–1998).” In 
                    <title>Friends and Enemies, </title>vol.3. Liverpool: Liverpool University Press. 2008. 185‑220. 
                </bibl>\n        
                <bibl>Jennings, Lawrence C. “Cyrille Bissette,  Radical Black French Abolitionist.” French History 9.1 (1995): p. 48-66 </bibl>\n        
                <bibl>Jennings, Lawrence C.  
                    <title>French Anti-Slavery: The Movement for the Abolition of Slavery in France, 1802-1848</title>. Cambridge: Cambridge University Press, 2000. 29-37, 49-50, 71-73, 266-69. 
                </bibl>\n        
                <bibl>Mesnard, Eric. “Les Mouvements de Résistance dans les colonies franchisées : L'affaire Bissette (1823-1827).” In 
                    <title>The Abolitions of Slavery : From Leger Felicite Sonthonax to Victor Schoelcher, 1793, 1794, 1848</title>, edited by Marcel Dorigny. Paris: UNESCO, 2003. 293-97.
                </bibl>\n        
                <bibl>Pâme, Stella. 
                    <title>Cyrille Bissette: un martyr de la liberté</title>. Fort-de-France, Martinique: Editions Désormeaux, 1999.
                </bibl>\n      
            </note>\n      
            <note resp=\"#masha\" xml:lang=\"en\">\n        
                <figure>\n          
                    <graphic url=\"portrait_Bissette.jpg\"/>\n          
                    <figDesc>Portrait de Cyrille Bissette. Courtesy of the Schomburg Center for Research in Black Culture</figDesc>\n        
                </figure>\n        
                <p>Born in Fort-Royal (now Fort-de-France, Martinique) on July 9, 1795, Cyrille Charles Auguste Bissette was the founder and editor-in-chief of the Revue des Colonies, the first French press outlet to advocate for immediate and total abolition. His parents, Charles Borromée Bissette and Elizabeth Mélanie Bellaine, were free people of color, and his mother was the illegitimate daughter of Joseph-Gaspard de Tascher de La Pagerie, making Bissette a nephew of Empress Joséphine de Beauharnais.</p>\n        
                <p>In 1816, Bissette married Augustine Séverin, a free woman of color, with whom he had four children. During these early years in Fort-Royal, Bissette was not engaged in abolitionist activities, and was in fact himself a slaveowner, taking part, in 1822, in the suppression of a slave revolt in the village of Le Carbet. The following year, however, he was arrested, along with six other free men of color — Montlouis Thébia, Joseph Richer, Joseph Millet, Laborde, Louis Fabien, 
                    <title>fils</title> and Jean-Baptiste Volny — for possession and alleged distribution of a seditious pamphlet printed in Paris, entitled 
                    <title>De la situation des hommes de color libre aux Antilles françaises </title>(which Bissette was alleged to have written). 
                </p>\n        
                <p>Accused as architects of a plot to overthrow the segregationist organization of Martinican society, Bissette, Fabien, 
                    <title>fils</title> and Volny were branded and sentenced to the galleys for life. In 1827, with the help of attorney François Isambert, Bissette’s sentence was reduced to ten years’ banishment and the legal costs of the proceedings, which would remain a substantial burden. Garnering significant media coverage, the so-called 
                    <title>Affaire Bissette </title>catalyzed his political career. 
                </p>\n        
                <p>In Paris, Bissette participated in the 
                    <title>Trois Glorieuses </title>(“the three glorious days” of riots that led to the end of the reign of Charles X and the restored Bourbon dynasty), which earned him the decoration of the July Cross, frequented Republican circles such as the 
                    <title>Free Association for the Education of the People</title>, joined a Masonic lodge, published several emancipatory petitions, and founded the 
                    <title>Revue des Colonies, </title>a press organ for the cause of the total and immediate abolition of slavery. This radical position would put him at odds with the majority of the French abolitionist community, including Victor Schoelcher, the eventual author of the 1848 decree. The distance between these two abolitionists develops into a rivalry after the publication of Schoelcher’s 
                    <title>Des Colonies Françaises</title>, which Bissette harshly criticizes for its stigmatizing, indeed, uninhibitedly racist, characterization of the free population of color of the Antilles. Overshadowed by the cult of Schoelcher in the assimilationist intellectual bourgeoisie, Bissette is deliberately written out of abolitionist history for his later reconciliationist platform and his strategic alliance with a white planter in the legislative elections of 1849. 
                </p>\n        
                <bibl>Bongie, Chris. “1835, ou ‘Le troisième cycle’: The Creole Afterlives of Cyrille-Charles Auguste Bissette, Louis de Maynard de Queilhe, and Victor Schoelcher.” In 
                    <title>Islands and Exiles: The Creole Identities of Post/Colonial Literature</title>. Stanford: Stanford University Press, 1998. 264-287, 323-340.
                </bibl>\n        
                <bibl>Bongie, Chris. “A Street Named Bissette: Assimilating the Cent-cinquantenaire of the Abolition of Slavery in Martinique (1848–1998).” In 
                    <title>Friends and Enemies, </title>vol.3. Liverpool: Liverpool University Press. 2008. 185‑220. 
                </bibl>\n        
                <bibl>Jennings, Lawrence C. “Cyrille Bissette,  Radical Black French Abolitionist.” French History 9.1 (1995): p. 48-66 </bibl>\n        
                <bibl>Jennings, Lawrence C.  
                    <title>French Anti-Slavery: The Movement for the Abolition of Slavery in France, 1802-1848</title>. Cambridge: Cambridge University Press, 2000. 29-37, 49-50, 71-73, 266-69. 
                </bibl>\n        
                <bibl>Mesnard, Eric. “Les Mouvements de Résistance dans les colonies franchisées : L'affaire Bissette (1823-1827).” In
                    <title> Les Abolitions de l'Esclavage de LF Sonthonax à V. Schoelcher1793, 1794, 1848</title>, edited by Marcel Dorigny (Paris: Editions UNESCO, 1995). 293-97.
                </bibl>\n        
                <bibl>Pâme, Stella. 
                    <title>Cyrille Bissette: un martyr de la liberté</title>. Fort-de-France, Martinique: Editions Désormeaux, 1999.
                </bibl>\n      
            </note>\n    
        </person>\n    
        <person xml:id=\"Dfy\">\n      
            <persName>Louis-­Pierre Dufay</persName>\n      
            <note resp=\"#masha\" xml:lang=\"fr\">\n        
                <p>Louis-­Pierre Dufay (ou Dufahy, l’orthographe employée par Bissette est peu répandue) est parmi les députés envoyés pour représenter Saint-Domingue à la Convention à l’issue des élections de 1793 et ​​soutient par la suite l’abolition de 1794. Avant ce revirement politique, cependant , il avait été membre du Club de l’hôtel de Massiac, une association de propriétaires terriens caribéens qui s'opposaient au premier groupe abolitionniste La Société des amis des Noirs et s'opposaient à l'application de la Déclaration des droits de l'homme et du citoyen aux colonies.</p>\n        
                <bibl>Benzaken, Jean-­Charles. « Louis-­Pierre Dufahy, député abo­­li­­tion­­niste et homme d’affaires avisé. Esquisse bio­­gra­­phique », 
                    <title>Annales historiques de la Révolution française</title>. 1 juin 2012 n
                    <hi rend=\"superscript\">o</hi> 368. p. 61‑85.
                </bibl>\n      
            </note>\n      
            <note resp=\"#masha\" xml:lang=\"en\">\n        
                <p>Louis-­Pierre Dufay (or Dufaÿ, Bissette’s spelling is not standard) was among the deputies sent to represent Saint-Domingue in the National Convention as a result of the elections of 1793 and subsequently supported the abolition of 1794. Prior to this political reversal, however, he had been a member of the Club de l’hôtel de Massiac, an association of Caribbean planters who opposed the the early abolitionist group 
                    <title>La Société des amis des Noirs </title>and opposed the application of the Declaration of the Rights of Man and of the Citizen to the colonies. 
                </p>\n        
                <bibl>Benzaken, Jean-­Charles. “Louis-­Pierre Dufay, député abo­­li­­tion­­niste et homme d’affaires avisé. Esquisse bio­­gra­­phique.” 
                    <title>Annales historiques de la Révolution française</title> 368 (2012): 61‑85.
                </bibl>\n      
            </note>\n    
        </person>\n    
        <person xml:id=\"Plv\">\n      
            <persName>Étienne Polverel</persName>\n      
            <note resp=\"#masha\" xml:lang=\"fr\">\n        
                <p>Issu de l’aristocratie provinciale, Étienne Polverel est avocat au parlement de Paris à partir de 1780. Secrétaire du club des Jacobins dès 1790, il s’y lie avec Léger-Félicité Sonthonax et Jacques Pierre Brissot, créateur de la 
                    <title>Société des Amis des Noirs</title>, en 1788. Nommé commissaire civil, il est envoyé avec Sonthonax à Saint-Domingue pour faire appliquer la loi du 4 avril 1792 reconnaissant les droits politiques des « libres de couleur ».  Face aux importantes insurrections antiesclavagistes et à l’alliance hispano-britannique contre la France, les deux commissaires civils accordent de manière ponctuelle la liberté à tous les Africains et descendants d’Africains acceptant de combattre sous les drapeaux de la République. Responsable de la partie Ouest de l’île, Polverel y étend, en septembre 1793, l’émancipation générale proclamée par Sonthonax dans la province du Nord le 29 août 1793. 
                </p>\n        
                <bibl>Dorigny, Marcel, éd. 
                    <title>Les Abolitions de l’esclavage: de L.F. Sonthonax à V. Schoelcher, 1793, 1794, 1848</title>. Paris: Presses universitaires de Vincennes, UNESCO, 1995.
                </bibl>\n        
                <bibl>Dubois, Laurent. 
                    <title>Avengers of the New World: The Story of the Haitian Revolution</title>. Cambridge, Mass: Harvard University Press, 2004
                </bibl>\n      
            </note>\n      
            <note resp=\"#masha\" xml:lang=\"en\">\n        
                <p>A lawyer in the 
                    <title>Parlement </title>of Paris (the regional appellate court), Étienne Polverel became secretary of the Jacobin Club in 1790, where he was introduced to Léger-Félicité Sonthonax and Jacques Pierre Brissot, founder of the 
                    <title>Société des Amis des Noirs</title>. Appointed civil commissioner, he was sent with Sonthonax to Saint-Domingue to enforce the law of April 4, 1792 recognizing the political rights of free people of color. Faced with important anti-slavery insurrections and the Spanish-British alliance against France, the two civil commissioners gradually granted freedom to all Africans and Afro-descendants agreeing to fight for the Republic. In September 1793, Polverel extended to the western part of the island under his jurisdiction the general emancipation proclaimed in the Northern Province by Sonthonax on 29 August 1793.
                </p>\n        
                <bibl>Dorigny, Marcel, ed. 
                    <title>The Abolitions of Slavery : From Leger Felicite Sonthonax to Victor Schoelcher, 1793, 1794, 1848</title>. Paris: UNESCO, 2003. 
                </bibl>\n        
                <bibl>Dubois, Laurent. 
                    <title>Avengers of the New World: The Story of the Haitian Revolution</title>. Cambridge, Mass: Harvard University Press, 2004
                </bibl>\n      
            </note>\n    
        </person>\n    
        <person xml:id=\"Stx\">\n      
            <persName>Léger-Félicité Sonthonax</persName>\n      
            <note resp=\"#masha\" xml:lang=\"fr\">\n        
                <p>Avocat au parlement de Paris à la veille de la Révolution, Léger-Félicité Sonthonax fréquente le club des Jacobins où il fait la connaissance d’Étienne Polverel et de Jacques Pierre Brissot, créateur de la 
                    <title>Société des Amis des Noirs</title>, en 1788. Nommé commissaire civil, il est envoyé avec Polverel à Saint-Domingue pour faire appliquer la loi du 4 avril 1792 reconnaissant les droits politiques des « libres de couleur ». Face aux importantes insurrections antiesclavagistes et à l’alliance hispano-britannique contre la France, les deux commissaires civils accordent de manière ponctuelle la liberté à tous les Africains et descendants d’Africains acceptant de combattre sous les drapeaux de la République. La proclamation de Sonthonax, le 29 août 1793, officialise l’émancipation générale dans la partie Nord de l’île.
                </p>\n        
                <bibl>Dorigny, Marcel, éd. 
                    <title>Les Abolitions de l’esclavage: de L.F. Sonthonax à V. Schoelcher, 1793, 1794, 1848</title>. Paris: Presses universitaires de Vincennes, UNESCO, 1995.
                </bibl>\n        
                <bibl>Dubois, Laurent. 
                    <title>Avengers of the New World: The Story of the Haitian Revolution</title> (Cambridge, Mass: Belknap Press of Harvard University Press, 2004).
                </bibl>\n      
            </note>\n      
            <note resp=\"#masha\" xml:lang=\"en\">\n        
                <p>A lawyer in the 
                    <title>Parlement</title> of Paris (the regional appellate court) on the eve of the Revolution, Léger-Félicité Sonthonax frequented the Jacobin Club where he associated with Étienne Polverel and Jacques Pierre Brissot, founder of the 
                    <title>Société des Amis des Noirs</title>. He was sent with Polverel as part of the Civil Commission to Saint-Domingue to enforce the law of April 4, 1792 recognizing the political rights of free people of color. Faced with major anti-slavery insurgencies and the Spanish-British alliance against France, the two civil commissioners gradually granted freedom to all Africans and descendants of Africans who agreed to fight for the Republic. Sonthonax’s August 29, 1793 proclamation formalized the general emancipation in the Northern Province.
                </p>\n        
                <bibl>Dorigny, Marcel, ed. 
                    <title>The Abolitions of Slavery : From Leger Felicite Sonthonax to Victor Schoelcher, 1793, 1794, 1848</title>. Paris: UNESCO, 2003. 
                </bibl>\n        
                <bibl>Dubois, Laurent. 
                    <title>Avengers of the New World: The Story of the Haitian Revolution</title>. Cambridge, Mass: Harvard University Press, 2004
                </bibl>\n      
            </note>\n    
        </person>\n    
        <person xml:id=\"NB\">\n      
            <persName>Napoléon Bonaparte</persName>\n      
            <note resp=\"#masha\" xml:lang=\"fr\">\n        
                <p>En 1802, Napoléon Bonaparte, alors Premier Consul du gouvernement républicain français, plus tard empereur, rétablit l’esclavage dans les colonies où il avait été aboli ou partiellement aboli en 1794 et le ratifie sur les territoires coloniaux où l’abolition n’avait pas pris effet, comme par exemple la Martinique. Son invasion de Saint-Domingue pour y rétablir l’esclavage a été repoussée, aboutissant à la déclaration d’une Haïti indépendante. </p>\n        
                <p>Bissette avait un lien personnel avec Napoléon en tant que neveu de Joséphine de Beauharnais. </p>\n        
                <p>Lorsque Bonaparte, à la suite de la paix d’Amiens, décide de rétablir l’esclavage dans les possessions françaises (loi du 20 mai 1802), une guerre particulièrement meurtrière éclate, qui conduit à l’indépendance du pays.</p>\n      
            </note>\n      
            <note resp=\"#masha\" xml:lang=\"en\">\n        
                <p>In 1802, Napoleon Bonaparte, then First Consul of the French Republican government, later Emperor, reestablished slavery in the colonies where it had been abolished or partially abolished in 1794 and reaffirmed it in the colonial territories where abolition had not taken effect, such as Martinique. His invasion of Saint-Domingue to reestablish slavery there was repulsed, resulting in the declaration of an independent Haiti. </p>\n        
                <p>Bissette had a personal connection to Napoleon as the nephew of Joséphine de Beauharnais. </p>\n      
            </note>\n    
        </person>\n    
        <person xml:id=\"ADp\">\n      
            <persName>Alexandre Dumas</persName>\n      
            <note resp=\"#masha\" xml:lang=\"fr\">\n        
                <figure>\n          
                    <graphic url=\"dumas.jpg\"/>\n          
                    <figDesc>Portrait de Alexandre Dumas</figDesc>\n        
                </figure>\n        
                <p>Born in 1802 to Marie-Louise Elisabeth Labouret and Thomas-Alexandre Dumas Davy de la Pailleterie, a Revolutionary War general from Saint-Domingue, Alexandre Dumas (also known as Alexandre Dumas 
                    <foreign>père</foreign>) was among the most popular French playwrights and novelists of the nineteenth century. Dumas received early education in his native Villers-Cotterets from Abbé Grégoire, who ran a local school. By the 1830’s, Dumas was a successful dramatist and a leading figure in the Romantic movement, though he was not favored by contemporary critics. Over the course of the twentieth century, Dumas’ canonical status would be solidified, culminating with the transfer of his remains to the Pantheon in 2002. 
                </p>\n        
                <p>Dumas’ Haitian ancestry, and accordingly, his race were regular subjects of caricature and malicious insinuation in his time, thus Dumas rarely explicitly identified himself as a person of color or took up questions of race and slavery in his writing. One notable exception is the 1843 novel 
                    <title>Georges</title>, which depicts a slave uprising in Isle de France (Mauritius), and in its narrative and rhetoric appears to reflect Dumas’ engagement with the 
                    <title>Revue des Colonies</title>.
                </p>\n        
                <bibl>Daut, Marlene L. “Haiti and the Black Romantics: Enlightenment and Color Prejudice after the Haitian Revolution in Alexandre Dumas’s Georges (1843).” 
                    <title>Studies in Romanticism</title>, vol. 56, no. 1 (2017): 73–92.\n        
                </bibl>\n        
                <bibl>\n          Desormeaux, Daniel. “L’amour Nègre Chez Alexandre Dumas.” In 
                    <title>Dumas Amoureux : Formes et Imaginaires de l’Éros Dumasien</title>, edited by Julie Anselmini and Claude Schopp, 373–87. Presses universitaires de Caen, 2021.\n        
                </bibl>\n        
                <bibl>\n          Martone, Eric, ed. 
                    <title>Alexandre Dumas as a French Symbol Since 1870</title>. Cambridge Scholars Publishing, 2021.\n        
                </bibl>\n      
            </note>\n      
            <note resp=\"#masha\" xml:lang=\"en\">\n        
                <figure>\n          
                    <graphic url=\"dumas.jpg\"/>\n          
                    <figDesc>Portrait of Alexandre Dumas</figDesc>\n        
                </figure>\n        
                <p>Born in 1802 to Marie-Louise Elisabeth Labouret and Thomas-Alexandre Dumas Davy de la Pailleterie, a Revolutionary War general from Saint-Domingue, Alexandre Dumas (also known as Alexandre Dumas 
                    <foreign>père</foreign>) was among the most popular French playwrights and novelists of the nineteenth century. Dumas received early education in his native Villers-Cotterets from Abbé Grégoire, who ran a local school. By the 1830’s, Dumas was a successful dramatist and a leading figure in the Romantic movement, though he was not favored by contemporary critics. Over the course of the twentieth century, Dumas’ canonical status would be solidified, culminating with the transfer of his remains to the Pantheon in 2002. 
                </p>\n        
                <p>Dumas’ Haitian ancestry, and accordingly, his race were regular subjects of caricature and malicious insinuation in his time, thus Dumas rarely explicitly identified himself as a person of color or took up questions of race and slavery in his writing. One notable exception is the 1843 novel 
                    <title>Georges</title>, which depicts a slave uprising in Isle de France (Mauritius), and in its narrative and rhetoric appears to reflect Dumas’ engagement with the 
                    <title>Revue des Colonies</title>.
                </p>\n        
                <bibl>Daut, Marlene L. “Haiti and the Black Romantics: Enlightenment and Color Prejudice after the Haitian Revolution in Alexandre Dumas’s Georges (1843).” 
                    <title>Studies in Romanticism</title>, vol. 56, no. 1 (2017): 73–92.\n        
                </bibl>\n        
                <bibl>\n          Desormeaux, Daniel. “L’amour Nègre Chez Alexandre Dumas.” In 
                    <title>Dumas Amoureux : Formes et Imaginaires de l’Éros Dumasien</title>, edited by Julie Anselmini and Claude Schopp, 373–87. Presses universitaires de Caen, 2021.\n        
                </bibl>\n        
                <bibl>\n          Martone, Eric, ed. 
                    <title>Alexandre Dumas as a French Symbol Since 1870</title>. Cambridge Scholars Publishing, 2021.\n        
                </bibl>\n      
            </note>\n    
        </person>\n    
        <person xml:id=\"Equ\">\n      
            <persName>Olaudah Equiano</persName>\n      
            <note resp=\"#masha\" xml:lang=\"fr\">\n        
                <figure>\n          
                    <graphic url=\"Equiano.jpg\"/>\n          
                    <figDesc>Portrait de Equiano</figDesc>\n        
                </figure>\n        
                <p>Olaudah Equiano was among the most prominent British abolitionists of the late eighteenth century. Born around 1745, he was sold as a child to the British captain Michael Pascal, who gave him the name Gustavus Vassa, which remained his legal name for the remainder of his life. Equiano served in the British Navy during the Seven Years’ War and in 1766, he purchased his freedom from the American merchant Robert King.</p>\n        
                <p>\n          As a free man in London in the 1780s, Equiano became more active in the abolitionist movement, notably working with Granville Sharp to bring public attention to the 1781 Zong massacre, in which more than 130 enslaved people were thrown overboard to their deaths while crossing the Atlantic. In 1789, Equiano published his autobiography (his first public use of the name Olaudah Equiano), 
                    <title>The Interesting Narrative of the Life of Olaudah Equiano, or Gustavus Vassa, the African</title>, which was an instant success in Britain and abroad, becoming the standard for the genre of the slave narrative. \n        
                </p>\n        
                <p>\n          The feature on Equiano that appears in the 
                    <title>Revue</title> is taken directly from Abbé Grégoire’s 
                    <title>De la littérature des nègres</title> (1808) a survey of writing by Black authors through the turn of the nineteenth century. In the included passage, Grégoire paraphrases the accounts of Equiano’s early childhood in 
                    <title>The Interesting Narrative</title>. These passages reflect a consistent point of emphasis in the 
                    <title>Revue</title> itself, that the Euopean slave trade corrupts otherwise functional and sophisticated cultures. Later in 
                    <title>The Interesting Narrative</title>, Equiano makes a plea for the end of the slave trade in the British Empire that the 
                    <title>Revue</title> echoes regularly: that free trade with the African continent would ultimately be more profitable to the nations that supposedly benefit from slave economies. \n        
                </p>\n        
                <bibl>Equiano, Olaudah. 
                    <title>The Interesting Narrative</title>, edited by Brycchan Carey. Oxford University Press 2018.\n        
                </bibl>\n      
            </note>\n      
            <note resp=\"#masha\" xml:lang=\"en\">\n        
                <figure>\n          
                    <graphic url=\"Equiano.jpg\"/>\n          
                    <figDesc>Portrait of Equiano</figDesc>\n        
                </figure>\n        
                <p>Olaudah Equiano was among the most prominent British abolitionists of the late eighteenth century. Born around 1745, he was sold as a child to the British captain Michael Pascal, who gave him the name Gustavas Vassa, which remained his legal name for the remainder of his life. Equiano served in the British Navy during the Seven Years’ War and in 1766, he purchased his freedom from the American merchant Robert King.</p>\n        
                <p>\n          As a free man in London in the 1780s, Equiano became more active in the abolitionist movement, notably working with Granville Sharp to bring public attention to the 1781 Zong massacre, in which more than 130 enslaved people were thrown overboard to their deaths while crossing the Atlantic. In 1789, Equiano published his autobiography (his first public use of the name Olaudah Equiano), 
                    <title>The Interesting Narrative of the Life of Olaudah Equiano</title>, or Gustavus Vassa, the African, which was an instant success in Britain and abroad, becoming the standard for the genre of the slave narrative. \n        
                </p>\n        
                <p>\n          The feature on Equiano that appears in the Revue is taken directly from 
                    <title>Abbé Grégoire’s De la littérature des nègres</title> (1808) a survey of writing by Black authors through the turn of the nineteenth century. In the included passage, Grégoire paraphrases the accounts of Equiano’s early childhood in 
                    <title>The Interesting Narrative</title>. These passages reflect a consistent point of emphasis in the 
                    <title>Revue</title> itself, that the Euopean slave trade corrupts otherwise functional and sophisticated cultures. Later in 
                    <title>The Interesting Narrative</title>, Equiano makes a plea for the end of the slave trade in the British Empire that the 
                    <title>Revue</title> echoes regularly: that free trade with the African continent would ultimately be more profitable to the nations that supposedly benefit from slave economies. \n        
                </p>\n        
                <bibl>Equiano, Olaudah. 
                    <title>The Interesting Narrative</title>, edited by Brycchan Carey. Oxford University Press 2018.\n        
                </bibl>\n      
            </note>\n    
        </person>\n  
    </listPerson>\n  
    <listPlace>\n    
        <place xml:id=\"Alg\">\n      
            <placeName>Alger</placeName>\n      
            <note resp=\"#masha\" xml:lang=\"fr\">\n        
                <p>Les forces françaises entrent pour la première fois dans la ville d’Alger en juillet 1830, dans les derniers jours du règne de Charles X, avec une annexion militaire formelle commençant en 1834. Au moment de la première livraison de la 
                    <title>Revue</title>, Alger est métonymique de l’ensemble des conquêtes effectuées au cours des opérations de « pacification », constituant un territoire trop restreint pour être perçu différemment de la ville. C’est en 1847, lorsque la conquête amorce un tournant définitif avec la reddition d’Abd el-Kader, que le territoire de l’Algérie coloniale commence à s’étendre de manière précipitée. Bien qu’elle soit généralement opposée à la violence des forces d’occupation, la 
                    <title>Revue </title>ne se montre jamais explicitement hostile à la colonisation de l’Algérie.
                </p>\n        
                <bibl>Bouchène, Abderrahmane, Jean-Pierre Peyroulou, Ouanassa Siari Tengour, Sylvie Thénault, eds. 
                    <title>Histoire de l’Algérie à la période coloniale, 1830-1962. </title>Paris: La Découverte, 2014.
                </bibl>\n        
                <bibl>Jennifer E. Sessions. 
                    <title>By Sword and Plow: France and the Conquest of Algeria</title>. Ithaca: Cornell University Press, 2014.
                </bibl>\n      
            </note>\n      
            <note resp=\"#masha\" xml:lang=\"en\">\n        
                <p>French forces first entered the city of Algiers in July, 1830, in the closing days of the reign of Charles X, with formal military annexation beginning in 1834. At the time of the 
                    <title>Revue</title>’s initial publication, Algiers was metonymic of all the conquests carried out during the “pacification” operations, constituting a territory too restricted to be perceived distinctly from the city. It was in 1847, when the conquest took a definitive turn with the surrender of Abd el-Kader, that the territory of colonial Algeria began to expand in a precipitous manner. Although it generally opposes the violence of the occupying forces, the 
                    <title>Revue </title>is never explicitly critical of the colonization of Algeria.
                </p>\n        
                <bibl>Bouchène, Abderrahmane, Jean-Pierre Peyroulou, Ouanassa Siari Tengour, Sylvie Thénault, eds.
                    <title> Histoire de l’Algérie à la période coloniale, 1830-1962. </title>Paris: La Découverte, 2014.
                </bibl>\n        
                <bibl>Sessions, Jennifer E. 
                    <title>By Sword and Plow: France and the Conquest of Algeria</title>. Ithaca: Cornell University Press, 2014.
                </bibl>\n      
            </note>\n    
        </place>\n    
        <place xml:id=\"BrB\">\n      
            <placeName>Bourbon</placeName>\n      
            <note resp=\"#masha\" xml:lang=\"fr\">\n        
                <p>Située dans l’océan Indien à l’est de Madagascar, l’île de Bourbon est sous contrôle français depuis le 17e siècle. Devenue Réunion à la Révolution, puis île Bonaparte sous l’Empire, elle est occupée par les Britanniques entre 1810 et 1814, avant d’être définitivement rendue à la France dans le cadre du traité de Paris. D’abord employée comme escale pour les navires de la Compagnie française des Indes orientales, l’île intègre, dans la première moitié du 18e siècle, le modèle de la société de plantation esclavagiste. D’après le recensement de 1788, environ 80% de la population de l’île, d’origine africaine, malgache, ou indienne, est esclavisée. L’esclavagisme bourbonnais repose, par ailleurs, sur une politique de division éthnique d’africains, de malgaches et d’indiens dans le but d’éviter la constitution d’un groupe majoritaire menaçant pour l’ordre colonial. L’abolition décrétée par la Convention le 4 février 1794, n’y est jamais appliquée et les actes de résistance, notamment le marronnage, sont répandus. </p>\n        
                <p>Comme c’est le cas dans d’autres territoires coloniaux, la 
                    <title>Revue des Colonies </title>y dispose d’un distributeur et d’un correspondant chargé de rendre compte de l’actualité de l’île. Cependant, la circulation de la 
                    <title>Revue</title>, estimée dangereuse pour l’ordre colonial, y est entravée par l’administration locale. Ainsi, dans une lettre datée de mai 1836, Louis-Timagène Houat, lui-même incarcéré, avec d’autres hommes de couleur, pour incitation à l’insurrection, propose de prendre la relève du correspondant précédent, victime d’intimidations. 
                </p>\n        
                <bibl>Ève, Prosper. 
                    <title>Naître et mourir à l’île Bourbon à l’époque de l’esclavage</title>. Paris &amp; Saint-Denis: L’Harmattan, 1999.
                </bibl>\n        
                <bibl>Little, Roger et Pratima Prasad (eds.). 
                    <title>Esclaves marrons à Bourbon Une anthologie littéraire (1831-1848)</title>. 2005. vol.64. 
                </bibl>\n        
                <bibl>Prasad, Pratima. « Colour and Conflict in Nineteenth-Century Île Bourbon: the Case of the Affaire Houat », Dix-Neuf. 2 janvier 2020, vol.24 no 1. p. 1‑16.</bibl>\n      
            </note>\n      
            <note resp=\"#masha\" xml:lang=\"en\">\n        
                <p>Located in the Indian Ocean to the east of Madagascar, the island of Bourbon has been under French control since the seventeenth century. Renamed Réunion during the Revolution, then Bonaparte Island under the Empire, it was occupied by the British between 1810 and 1814, before definitively returning to France in the Treaty of Paris. First used as a stopover for the ships of the French East India Company, the island adopted a slave plantation economy in the first half of the eighteenth century. According to the 1788 census, approximately 80% of the island’s population, originating in Africa, Madagascar or India, was enslaved. The abolition decreed by the Convention on February 4, 1794 was never actually applied and acts of resistance, notably 
                    <title>marronage</title>, were common.
                </p>\n        
                <p>As is in other colonial territories, the 
                    <title>Revue des Colonies</title> maintained a distributor and a correspondent there responsible for reporting on the island’s current events. However, the circulation of the 
                    <title>Revue</title> was hampered by the local administration, who considered the publication seditious. Thus, in a letter dated May 1836, Louis-Timagène Houat, himself imprisoned, along with other men of color, for incitement to insurrection, offered to take over from the previous correspondent, who had been the victim of such intimidation.
                </p>\n        
                <bibl>Ève, Prosper. 
                    <title>Naître et mourir à l’île Bourbon à l’époque de l’esclavage.</title> Paris &amp; Saint-Denis: L'Harmattan, 1999.
                </bibl>\n        
                <bibl>Little, Roger Pratima Prasad, eds. 
                    <title>Esclaves marrons à Bourbon Une anthologie littéraire (1831-1848)</title>. Paris: L’Harmattan, 2005
                </bibl>\n        
                <bibl>Prasad, Pratima. “Colour and Conflict in Nineteenth-Century 
                    <title>Île Bourbon:</title> the Case of the 
                    <title>Affaire Houat.</title>” 
                    <title>Dix-Neuf </title> 24.1 (2020): 1‑16.
                </bibl>\n      
            </note>\n    
        </place>\n    
        <place xml:id=\"Cay\">\n      
            <placeName>Cayenne </placeName>\n      
            <note resp=\"#masha\" xml:lang=\"fr\">\n        
                <p>Situé sur l’île de Cayenne, dans l’estuaire de la rivière du même nom, Cayenne est le chef-lieu de la Guyane française. Issue du premier empire colonial français, voisine du Brésil et du Suriname, cette colonie fondée sur l’économie de plantation devient un lieu de déportation lors de la Révolution française, accueillant plusieurs convois de proscrits. D’après le recensement de 1788,  la population esclavisée y représente un peu plus de 80% de la population. L’abolition de l’esclavage, en application du décret de la Convention, y est proclamée le 14 juin 1794. En 1802, Victor Hugues, le commissaire chargé de faire appliquer le décret d’abolition de l’esclavage en Guadeloupe, y impose le rétablissement de l’esclavage promulgué en 1802 par Napoléon Bonaparte, Premier Consul, et instaure un régime de conscription locale. Cette régression aux dispositions antérieures à la Révolution entraîne d’importants mouvements de marronnage. Conquise par les forces portugaises en 1809, la colonie est restituée à la France en 1817, à l’issue du traité de Paris. La 
                    <title>Revue des Colonies </title>dispose d’un correspondant à Cayenne qui rend compte des nouvelles, notamment électorales, de Guyane dès la première livraison.
                </p>\n        
                <bibl>Mam Lam Fouck, Serge. 
                    <title>La Guyane française au temps de l'esclavage, de l'or et de la francisation (1802-1946)</title>, Ibis Rouge Editions, 1999.
                </bibl>\n        
                <bibl>Schmidt, Nelly. 
                    <title>La France a-t-elle aboli l'esclavage ? Guadeloupe, Martinique, Guyane, 1830-1935</title>, Perrin, 2009.
                </bibl>\n      
            </note>\n      
            <note resp=\"#masha\" xml:lang=\"en\">\n        
                <p>The island of Cayenne, in the estuary of the river of the same name, is also the location of the city of Cayenne, the capital of French Guiana. According to the 1788 census, Cayenne’s enslaved population represented just over 80% of the total population. During the Revolution, Cayenne received multiple convoys of exiles from metropolitan France, beginning its eventual transformation into a penal colony in the nineteenth century. The 1794 abolition decree was never meaningfully enforced there. Victor Hugues, the commissioner in charge of enforcing the decree in Guadeloupe, was named governor of Guiana in 1799, replacing slavery with a system of conscripted labor until the official restoration of slavery in 1802 by the decree of First Consul Napoleon Bonaparte. This regression to pre-Revolutionary conditions  led to high frequencies of marronage. Conquered by Portuguese forces in 1809, the colony was returned to France in 1817, following the Treaty of Paris. From its inaugural issue, the 
                    <title>Revue des Colonie</title> features regular reports from a correspondent in Cayenne, including detailed electoral data.
                </p>\n        
                <bibl>Mam Lam Fouck, Serge. 
                    <title>La Guyane française au temps de l'esclavage, de l'or et de la francisation (1802-1946)</title>. Matoury, French Guiana: Ibis Rouge Editions, 1999.
                </bibl>\n        
                <bibl>Schmidt, Nelly. 
                    <title>La France a-t-elle aboli l'esclavage ? Guadeloupe, Martinique, Guyane, 1830-1935</title>. Paris: Perrin, 2009.
                </bibl>\n      
            </note>\n    
        </place>\n    
        <place xml:id=\"ANG\">\n      
            <placeName>Angleterre </placeName>\n      
            <note resp=\"#masha\" xml:lang=\"fr\">\n        
                <p>À la fois puissance militaire et coloniale rivale de la France et modèle du mouvement abolitionniste français, l’Angleterre bénéficie, au sein de la 
                    <title>Revue, </title>d’une couverture médiatique particulièrement intéressante. 
                </p>\n        
                <p>Adversaire de la France pendant la période révolutionnaire et napoléonienne, la Grande-Bretagne saisit et restitue à plusieurs reprises diverses possessions coloniales françaises. </p>\n        
                <p>Quelque peu freiné, dans les années 1790, par les craintes que suscitent les Révolution française et haïtienne, le mouvement abolitionniste britannique se popularise à partir de 1807, sous la double perspective de l’immoralité du maintien de l’esclavage et l’intérêt économique de son abolition. En 1833, le Parlement britannique proclame l’abolition de l’esclavage, devant entrer en vigueur en 1834 et culminerait avec l’émancipation effective de tous les esclaves dans les colonies britanniques en 1838 après une période d ’«apprentissage». Le processus d’abolition britannique, qui se déroule parallèlement aux premières années de publication de la 
                    <title>Revue</title>, signale le caractère inévitable de l’abolition en France, déplaçant le débat vers la question de l’émancipation immédiate ou gradualiste.
                </p>\n        
                <p>Comme d’autres abolitionnistes français, Bissette a reçu un soutien avéré de la 
                    <title>British and Foreign Anti-Slavery Society</title> (BFASS), au moins pour la publication de son éphémère 
                    <title>Revue Abolioniste </title>en 1847.
                </p>\n        
                <bibl>Jennings, Lawrence C. “Slavery and the Venality of the July Monarchy Press.” 
                    <title>French Historical Studies</title> 17.4 (1992): 957–78.
                </bibl>\n        
                <bibl>Walvin, James. \"British Abolitionism, 1787-1838.\" In 
                    <title>The Abolitions of Slavery: From the LF Sonthonax to Victor Schoelcher, 1793, 1794, 1848</title>,edited by Marcel Dorigny (New York: Bergham Books, 2003), 71-78
                </bibl>\n      
            </note>\n      
            <note resp=\"#masha\" xml:lang=\"en\">\n        
                <p>As both France’s primary military and colonial rival and a model for the French abolitionist movement, England is a particularly interesting topic of coverage within the 
                    <title>Revue.</title>
                </p>\n        
                <p>France’s adversary through the Revolution and Napoleonic wars, British forces repeatedly seized and returned various French colonial possessions.</p>\n        
                <p>Though hampered in the 1790s by panic over the French and Haitian Revolutions, the British abolitionist movement successfully campaigned for the end of the slave trade in 1807, gaining popular support by emphasizing, simultaneously, the immorality of maintaining slavery and the possible economic advantages of its abolition. In 1833, British Parliament proclaimed the abolition of slavery, to be enacted in 1834, culminating in the effective emancipation of all enslaved people in the British colonies by 1838, after a period of “apprenticeship.” The process of British abolition, which occurred in parallel to the first years of publication of the 
                    <title>Revue</title>, signaled the inevitability of abolition in France, shifting the debate to the question of immediate or gradualist emancipation.
                </p>\n        
                <p>Like other French abolitionists, Bissette received confirmed support from the 
                    <title>British and Foreign Anti-Slavery Society </title>(BFASS), at least for the publication of his short-lived 
                    <title>Revue Abolioniste </title>in 1847.
                </p>\n        
                <bibl>Jennings, Lawrence C. “Slavery and the Venality of the July Monarchy Press.” 
                    <title>French Historical Studies</title> 17.4 (1992): 957–78.
                </bibl>\n        
                <bibl>Walvin, James. \"British Abolitionism, 1787-1838.\" In 
                    <title>The Abolitions of Slavery: From the LF Sonthonax to Victor Schoelcher, 1793, 1794, 1848</title>,edited by Marcel Dorigny (New York: Bergham Books, 2003), 71-78
                </bibl>\n      
            </note>\n    
        </place>\n    
        <place xml:id=\"MQ\">\n      
            <placeName>Martinique</placeName>\n      
            <note resp=\"#masha\" xml:lang=\"fr\">\n        
                <p>Principalement sous contrôle français depuis le milieu du 17e siècle, la Martinique, comme l’archipel guadeloupéen voisin, fait partie du premier empire colonial français. Il s’agit d’une société coloniale fondée sur une économie de plantation esclavagiste, principalement consacrée à la monoculture sucrière. L’île passe sous contrôle Britannique entre 1759 et 1763, et de nouveau, en 1794, avec l’appui des planteurs cherchant à se soustraire à l’abolition décrétée par la Convention. Lors du recensement de 1789, la population esclavisée y représente environ 84% du total, pour 11% de blancs et 5% de « libres de couleur ». </p>\n        
                <p>La Martinique redevient française en 1802, après le rétablissement de l’esclavage par Napoléon Bonaparte, alors Premier Consul, sans que l’abolition ait pu entrer y en vigueur. </p>\n        
                <p>Dans les dernières années de la Restauration, l’île est le théâtre de la retentissante 
                    <title>affaire Bissette</title>, qui voit plus d’une centaine d’hommes de couleur libres, accusés de complicité de complot, condamnés à la déportation à vie. Largement diffusée dans la presse, l’affaire sensibilise les milieux libéraux métropolitains à la cause des « libres de couleur » et aide à populariser les sentiments antiesclavagistes. 
                </p>\n        
                <p>À la suite de la Révolution de Juillet 1830, de nombreuses mobilisations réunissant la population esclavisée et les « libres de couleur » dans une lutte commune contre les hiérarchies socio-raciales imposées par le colonialisme esclavagiste. Ces mobilisations influent sur les autorités métropolitaines, notamment par l’entremise de Bissette et de ses associés. L’île natale de Bissette bénéficie en effet d’une couverture médiatique abondante dans la 
                    <title>Revue des Colonies</title>, notamment quand aux conséquences de la loi électorale du 24 avril 1833, qui écarte de fait la plupart des « libres de couleur » de la vie politique en imposant un cens éléctoral près de deux fois plus élevé dans les colonies qu’en métropole. Le taux de participation des hommes de couleur libres aux éléctions de 1834 en Martinique ne dépasse pas 3 % des électeurs.
                </p>\n        
                <bibl>Kováts Beaudoux, Édith,
                    <title> Les Blancs créoles de la Martinique : une minorité dominante</title>, préface de Michel Giraud, Paris, France, L’Harmattan, 2003.
                </bibl>\n        
                <bibl>Larcher, Silyane. 
                    <title>L’autre citoyen: L’idéal républicain et les Antilles après l’esclavage</title>. Paris. Armand Colin. 2014, p. 109-125.
                </bibl>\n        
                <bibl>Régent, Frédéric. « Préjugé de couleur, esclavage et citoyennetés dans les colonies françaises (1789-1848) », 
                    <title>La Révolution française</title>. 17 novembre 2015 n
                    <hi rend=\"superscript\">o</hi> 9. En ligne : 
                    <ref target=\"http://journals.openedition.org/lrf/1403\">http://journals.openedition.org/lrf/1403</ref> [consulté le 13 novembre 2021].
                </bibl>\n      
            </note>\n      
            <note resp=\"#masha\" xml:lang=\"en\">\n        
                <p>Principally under French control since the mid seventeenth century, Martinique, like the neighboring archipelago of Guadeloupe, was part of the first French colonial empire. A slave plantation economy, mainly devoted to sugar monoculture, the island came under British control between 1759 and 1763, and again, in 1794, with the support of planters seeking to avoid the abolition decreed by the National Convention. According to the 1789 census, the enslaved population there represented approximately 84% of the total population, with 11% white and 5% free people of color.</p>\n        
                <p>Martinique returned to French control in 1802, after Napoleon Bonaparte, then First Consul, reinstated slavery in the colonies, without abolition having ever been implemented there.</p>\n        
                <p>In 1823, the island was the scene of the infamous 
                    <title>affaire Bissette</title>, in which more than a hundred free men of color, accused of sedition, were exiled for life. Covered widely in the press, the affair helped to advance the cause of free men of color among liberal circles in metropolitan France to and to popularize anti-slavery sentiments.
                </p>\n        
                <p>Following the Revolution of July 1830, activism against colonial socio-racial hierarchies garnered significant attention from metropolitan authorities, particularly through the efforts of Bissette and his associates. Bissette's native island was  indeed  covered extensively in the 
                    <title>Revue des Colonies</title>, with early issues giving particular attention to the disappointing results of the laws of April 1833, which effectively maintained the exclusion of free men of color from political life by imposing electoral qualifications in the colonies nearly twice as stringent as those in metropolitan France. The participation rate of free men of color in the 1834 elections in Martinique was thus under 3%.
                </p>\n        
                <bibl>Kováts Beaudoux, Édith,
                    <title> Les Blancs créoles de la Martinique : une minorité dominante</title>. Paris: L’Harmattan, 2003.
                </bibl>\n        
                <bibl>Larcher, Silyane. 
                    <title>L’autre citoyen: L’idéal républicain et les Antilles après l’esclavage</title>. Paris: Armand Colin, 2014. 109-125.
                </bibl>\n        
                <bibl>Régent, Frédéric, 
                    <title>La France et ses esclaves : de la colonisation aux abolitions, 1620-1848</title>. Paris: Hachette Littératures, 2009.
                </bibl>\n      
            </note>\n    
        </place>\n    
        <place xml:id=\"GP\">\n      
            <placeName>Guadeloupe</placeName>\n      
            <note resp=\"#masha\" xml:lang=\"fr\">\n        
                <p>Comme son île voisine de la Martinique, l'archipel guadeloupéen fait partie du premier empire colonial français. Il s’agit d’une société coloniale fondée sur une économie de plantation esclavagiste, principalement consacrée à la monoculture sucrière. Lors du recensement de 1789, la population esclavisée y représente environ 85% du total, pour 13% de blancs et 3% de « libres de couleur ».</p>\n        
                <p>L’archipel passe sous contrôle Britannique entre 1759 et 1763, puis de nouveau en 1794, avec l’appui des planteurs cherchant à se soustraire à l’abolition décrétée par la Convention.</p>\n        
                <p>L’invasion britannique est repoussée par les forces de l’île, composées, entre autres, de plusieurs milliers de nouveaux affranchis et dirigées par Victor Hugues, commissaire civil envoyé par la Convention pour faire appliquer le décret de l’abolition. Celle-ci n’est toutefois promulguée que de manière symbolique, l’esclavage étant remplacé par une forme de travail forcé. </p>\n        
                <p>En 1802, une importante armée insurrectionnelle commandée par Louis Delgrès, homme de couleur libre, s’oppose au général Richepanse envoyé rétablir l’esclavage sur ordre de Napoléon Bonaparte, alors Premier Consul. L’insurrection brutalement réprimée s’achève par le suicide de Delgrès et ses compagnons. </p>\n        
                <p>Comme la Martinique, la Guadeloupe passe de nouveau sous contrôle Britannique pendant les guerres napoléoniennes. Brièvement cédée à la Suède lors du traité de Paris de 1814, elle revient définitivement sous contrôle français en 1815. </p>\n        
                <p>À l’époque de la fondation de la 
                    <title>Revue des Colonies</title>, les libres de couleur y sont aussi nombreux que les blancs, et possèdent environ un quart des terres. La 
                    <title>Revue </title>accorde une place importante à l’actualité de la Guadeloupe, sans doute avec le concours de Mondésir Richard, « mandataire des libres de couleur de Guadeloupe » et membre très probable de la « Société d’hommes de couleur » qui fonde le périodique. 
                </p>\n        
                <bibl>Marcel Dorigny et Bernard Gainot. 
                    <title>Atlas des esclavages. Traités, sociétés coloniales, abolitions, de l’Antiquité à nos jours</title>. Paris : Éditions Autrement, 2006
                </bibl>\n        
                <bibl>Frédéric Régent, « Préjugé de couleur, esclavage et citoyennetés dans les colonies françaises (1789-1848) », 
                    <title>La Révolution française</title>, no. 9 (2015), 
                    <ref target=\"https://doi.org/10.4000/lrf.1403\">https://doi.org/10.4000/lrf.1403</ref>.
                </bibl>\n        
                <bibl>Fallope, Josette. 
                    <title>Esclaves et citoyens. Les Noirs à la Guadeloupe au XIXe siècle dans les processus de résistance et d’intégration</title> (1802-1910), Basse-Terre, Bibliothèque d’Histoire antillaise, 1992
                </bibl>\n      
            </note>\n      
            <note resp=\"#masha\" xml:lang=\"en\">\n        
                <p>Like Martinique, the Guadeloupe archipelago was part of the first French colonial empire of the seventeenth century. As a slave economy primarily devoted to sugar cultivation, the island’s enslaved population represented approximately 85% of the total, per the 1789 census, with 13% white and 3% “free people of color.” The archipelago came under British control between 1759 and 1763, and was briefly occupied again in 1794, following the National Convention’s abolition decree. This occupation was, however, expelled by military forces including several thousand newly emancipated men, led by Victor Hugues, the civil commissioner sent by the Convention to enforce the abolition decree. The implementation of this abolition was, however, largely symbolic, with chattel slavery replaced, in many instances, by forced labor. In 1802, a large insurrectionary army commanded by Louis Delgrès, a free man of color, opposed the French General Richepanse, who had been sent to restore slavery on the orders of Napoleon Bonaparte, then First Consul. The brutally repressed insurrection would end with the suicide of Delgrès and his company. </p>\n        
                <p>Guadeloupe again came under British control during the Napoleonic Wars. Briefly ceded to Sweden during the Treaty of Paris in 1814, it definitively returned to French control in 1815. At the time of the foundation of the  
                    <title>Revue des Colonies</title>, the population of free people of color equaled the white population, and owned about a quarter of the land. The 
                    <title>Revue</title> gives significant attention to current events in Guadeloupe, likely through the efforts of Mondésir Richard, a “
                    <title>mandataire</title> of the free people of color of Guadeloupe\" and apparent member of the “Society of men of color” who founded the periodical.
                </p>\n        
                <bibl>Dorigny, Marcel, and Bernard Gainot, eds. 
                    <title>Atlas des esclavages. Traités, sociétés coloniales, abolitions, de l’Antiquité à nos jours</title>. Paris: Éditions Autrement, 2006
                </bibl>\n        
                <bibl>Régent, Frédéric. “Préjugé de couleur, esclavage et citoyennetés dans les colonies françaises (1789-1848).” 
                    <title>La Révolution française</title> 9 (2015) 
                    <ref target=\"https://doi.org/10.4000/lrf.1403\">https://doi.org/10.4000/lrf.1403</ref>.
                </bibl>\n        
                <bibl>Fallope, Josette.,
                    <title> Esclaves et citoyens: Les Noirs à la Guadeloupe au XIXe siècle dans les processus de résistance et d’intégration: 1802-1910</title>. Basse-Terre: Bibliothèque d’Histoire antillaise, 1992.
                </bibl>\n      
            </note>\n    
        </place>\n    
        <place xml:id=\"HT\">\n      
            <placeName>Haiti</placeName>\n      
            <note resp=\"#masha\" xml:lang=\"fr\">\n        
                <p>L’ancienne colonie de Saint-Domingue, située sur la partie occidentale de l’île d’Hispaniola, était de loin le territoire le plus profitable du premier empire colonial français. En 1789, 90% de sa population de près d’un demi-million est esclavisée et produit trois quarts du sucre mondial.</p>\n        
                <p>Les soulèvements de masse qui s’y produisent dès 1791 incitent la proclamation d’une émancipation locale en 1793, suivie d’élections législatives auxquelles participent les hommes nouvellement affranchis. C’est à l’issue de ces éléctions que les députés Mills, Dufaÿ et Belley, le premier parlementaire noir, rejoignent la Convention et l’incitent à décréter, le 4 février 1794, l’abolition étendue à l’ensemble des colonies françaises esclavagistes. Saint-Domingue est alors gouvernée par Toussaint Louverture, ancien affranchi, qui souhaite garantir l’autonomie de l’île en élaborant une constitution qui l’émancipe des institutions métropolitaines. En 1802, le Napoléon Bonaparte, à titre de Premier Consul, ordonne la reconquête de la colonie et le rétablissement de l’esclavage. À l’incarcération de Louverture, son second, Jean-Jacques Dessalines, prend la tête du mouvement révolutionnaire pour imposer, le 1er janvier 1804, l’indépendance de l’ancienne colonie sous le nom arawak d’Haïti. En 1825, le président Jean-Baptiste Boyer en fait reconnaître la légitimité au roi Charles X, au prix d’une indemnité de 150 millions de francs qui asphyxie l’économie du pays. </p>\n        
                <p>Il reste que l’auto-émancipation des esclaves de Saint-Domingue et la constitution de l'État souverain haïtien que celle-ci a amené ont inauguré, de fait, un siècle de réformes émancipatrices et abolitionnistes à échelle mondiale.</p>\n        
                <p>La 
                    <title>Revue des Colonies </title>présente la Révolution haïtienne comme une incarnation puissante et durable des principes de la Révolution française, alors même que la violence par laquelle elle s’est accomplie et l’instabilité politique qui s’en est suivie ont été régulièrement brandies comme arguments en faveur du maintien de l’esclavage dans les colonies françaises, les colonies britanniques et les États-Unis. La caractérisation d’Haïti par la 
                    <title>Revue </title>comme un Etat-modèle à prendre en exemple pour les puissances colonisatrices européennes fait donc partie de ses positions éditoriales les plus radicales.
                </p>\n        
                <bibl>Brickhouse, Anna. 
                    <title>Transamerican Literary Relations and Nineteenth-Century Public Sphere</title>, Cambridge: Cambridge University Press, 2004
                </bibl>\n        
                <bibl>Daut, Marlene. 
                    <title>Tropics of Haiti: Race and the Literary History of the Haitian Revolution in the Atlantic World, 1789-1865</title>. Liverpool: Liverpool University Press, 2015
                </bibl>\n        
                <bibl>Dubois, Laurent. 
                    <title>Avengers of the New World: The Story of the Haitian Revolution</title>. Cambridge, Mass: Harvard University Press, 2004.
                </bibl>\n        
                <bibl>Pierrot, Grégory. 
                    <title>The Black Avenger in Atlantic Culture</title>. Athens: The University of Georgia Press, 2019.
                </bibl>\n        
                <bibl>Stieber, Chelsea. 
                    <title>Haiti’s Paper War: Post-Independence Writing, Civil War, and the Making of the Republic, 1804-1954</title>. New York: New York University Press, 2020.
                </bibl>\n      
            </note>\n      
            <note resp=\"#masha\" xml:lang=\"en\">\n        
                <p>The former colony of Saint-Domingue, located on the western part of the island of Hispaniola, was by far the most profitable territory of the first French colonial empire. In 1789, 90% of its population of almost half a million consisted of enslaved people, who produced three quarters of the world's sugar.</p>\n        
                <p>The mass uprisings of enslaved people that began there 1791 prompted the proclamation of local emancipation in 1793, followed by legislative elections in which the newly enfranchised took part, electing deputies Mills, Dufaÿ, and Belley, the first Black parliamentarian, to represent the colony in the National Convention. In Paris, these deputies encourage the Convention to decree complete and immediate abolition in all French colonies on February 4, 1794. Saint-Domingue was then governed by the formerly enslaved general Toussaint Louverture, who sought to guarantee the autonomy of the colony by drafting a constitution emancipating it from metropolitan institutions. In 1802, Napoleon Bonaparte, as First Consul, ordered the reconquest of the colony and the reestablishment of slavery. When Louverture is imprisoned, his second, Jean-Jacques Dessalines, takes the lead of the revolutionary movement and imposed, on January 1, 1804, the independence of the former colony under the Arawak name of Haiti. In 1825, President Jean-Baptiste Boyer had King Charles X recognize its legitimacy, at the cost of an indemnity of 150 million francs, effectively suffocating the country's economy.</p>\n        
                <p>That the first total abolition of slavery occured in response to slave insurrections is a testament to the importance and agency of enslaved people within the global struggle for abolition. Anticipating the arguments of twentieth-century historians, the 
                    <title>Revue </title>presents the Haitian Revolution as a true and lasting embodiment of the universalist principles of the French Revolution, even as the violence through which it was accomplished and the political instability that followed were regularly wielded as arguments in favor of the maintenance of slavery in the French colonies, the British colonies, and the United States. The 
                    <title>Revue</title>’s characterization of Haiti as a kind of countermodel to the exploitative and prejudiced nations of Europe is thus among its most radical editorial positions. 
                </p>\n        
                <bibl>Brickhouse, Anna. 
                    <title>Transamerican Literary Relations and Nineteenth-Century Public Sphere</title>, Cambridge: Cambridge University Press, 2004
                </bibl>\n        
                <bibl>Daut, Marlene. 
                    <title>Tropics of Haiti: Race and the Literary History of the Haitian Revolution in the Atlantic World, 1789-1865</title>. Liverpool: Liverpool University Press, 2015
                </bibl>\n        
                <bibl>Dubois, Laurent. 
                    <title>Avengers of the New World: The Story of the Haitian Revolution</title>. Cambridge, Mass: Harvard University Press, 2004.
                </bibl>\n        
                <bibl>Pierrot, Grégory. 
                    <title>The Black Avenger in Atlantic Culture</title>. Athens: The University of Georgia Press, 2019.
                </bibl>\n        
                <bibl>Stieber, Chelsea. 
                    <title>Haiti’s Paper War: Post-Independence Writing, Civil War, and the Making of the Republic, 1804-1954</title>. New York: New York University Press, 2020.
                </bibl>\n      
            </note>\n    
        </place>\n    
        <place xml:id=\"DOM\">\n      
            <placeName>Dominique</placeName>\n      
            <note resp=\"#masha\" xml:lang=\"fr\">\n        
                <p>La Dominique, située directement entre la Guadeloupe et la Martinique, a d’abord été colonisée par des colons français de ces îles à la fin du XVIIe siècle, qui ont rapidement amené des esclaves africains. Comme la Martinique et la Guadeloupe, la Dominique a été prise par les forces britanniques pendant la guerre de Sept Ans. Contrairement à ces îles, cependant, elle est restée sous contrôle britannique. Après une ré-invasion française en 1775, la colonie est formellement rendue aux Britanniques en 1783 et resta sous contrôle britannique jusqu’à son indépendance en 1978. </p>\n      
            </note>\n      
            <note resp=\"#masha\" xml:lang=\"en\">\n        
                <p>Dominica, located directly between Guadeloupe and Martinique, was first settled by French settlers from these islands in the late seventeenth century, who soon brought in African slaves. Like Martinique and Guadeloupe, Dominica was taken by British forces during the Seven Years' War. Unlike those islands, however, it remained under British control. After a French re-invasion in 1775, the colony was formally returned to the British in 1783 and remained under British control until its independence in 1978.</p>\n      
            </note>\n    
        </place>\n    
        <place xml:id=\"Esk\">\n      
            <placeName>Essaka</placeName>\n      
            <note resp=\"#masha\" xml:lang=\"fr\">\n        
                <p>The place of birth of Oladuah Equiano, according to his autobiography 
                    <title>The Interesting Narrative of the Life of Olaudah Equiano, Or Gustavus Vassa, The African</title>. This work, which is the source for the chapter on Equiano in Abbé Grégoire’s 
                    <title>De la littérature des nègres</title> reprinted in the 
                    <title>Revue</title>, contains the only known reference to “Essaka” with this spelling. The actual place of Equiano’s birth has been the subject of some debate, with some claiming that Essaka refers to Issieke, in Igboland, present day Nigeria. Other scholars have pointed out that Equiano’s baptismal records (whose information would have been provided by the family of his master), and other documents from his naval career, list his place of birth as South Carolina.
                </p>\n        
                <bibl>\n          Lovejoy, Paul E. \"Olaudah Equiano or Gustavus Vassa, What's in a Name?\" 
                    <title>Atlantic Studies</title> 9.2 (2012), 165-84.\n        
                </bibl>\n      
            </note>\n      
            <note resp=\"#masha\" xml:lang=\"en\">\n        
                <p>The place of birth of Oladuah Equiano, according to his autobiography 
                    <title>The Interesting Narrative of the Life of Olaudah Equiano, Or Gustavus Vassa, The African</title>. This work, which is the source for the chapter on Equiano in Abbé Grégoire’s 
                    <title>De la littérature des nègres</title> reprinted in the 
                    <title>Revue</title>, contains the only known reference to “Essaka” with this spelling. The actual place of Equiano’s birth has been the subject of some debate, with some claiming that Essaka refers to Issieke, in Igboland, present day Nigeria. Other scholars have pointed out that Equiano’s baptismal records (whose information would have been provided by the family of his master), and other documents from his naval career, list his place of birth as South Carolina.
                </p>\n        
                <bibl>\n          Lovejoy, Paul E. \"Olaudah Equiano or Gustavus Vassa, What's in a Name?\" 
                    <title>Atlantic Studies</title> 9.2 (2012), 165-84.\n        
                </bibl>\n      
            </note>\n    
        </place>\n  
    </listPlace>\n  
    <listOrg>\n    
        <org xml:id=\"SHC\">\n      
            <orgName>Société d’Hommes de Couleur</orgName>\n      
            <note resp=\"#masha\" xml:lang=\"fr\">\n        
                <p>La présence éphémère de cette « société » sur la page de titre de la 
                    <title>Revue </title>(jusqu’en janvier 1835), conjuguée à l’absence de toute autre trace documentaire, suggère qu’il s’agirait d’une construction éditoriale plutôt que d’un véritable organisme associatif. 
                </p>\n        
                <p>La revendication, dès la page de titre, d’une identité collective en complément de l’appareil éditorial de la 
                    <title>Revue </title>est, du reste, un geste d’auto-légitimation courant dans la culture de l’imprimé des années 1830. C’est également une manière d’afficher et de souligner l’importance, démographique et, par conséquent, politique, des 
                    <title>«</title> hommes de couleur » libres — groupe au statut contesté, comprenant aussi bien les descendants d’unions interraciales que les esclaves africains affranchis, et se trouvant systématiquement et dans les deux cas écartés de la citoyenneté par les ordonnances locales.
                </p>\n        
                <p>Hormis Bissette, la 
                    <title>«</title> société d’hommes de couleur » comprenait très certainement au moins deux de ses coauteurs pour plusieurs écrits et pétitions à visée émancipatrice parus au cours des années précédentes: Mondésir Richard, mandataire des libres de couleur de Guadeloupe, et Louis Fabien 
                    <title>fils</title>, mandataire, comme Bissette, des libres de couleur de Martinique et son coaccusé dans l'
                    <title>Affaire Bissette.</title>
                </p>\n        
                <p>L’expression « mandataire des hommes de couleur » apparaît, ainsi que l’explique un article paru dans la 
                    <title>Revue</title> à la livraison suivante (août 1834), en réaction aux lois du 24 avril 1833 sur le régime législatif des colonies (également appelées 
                    <title>Charte coloniale</title>) qui, tout en reconnaîssant des droits civils identiques à toutes les populations libres des colonies, imposent un cens électoral écartant de fait la quasi-totalité de la population libre de couleur, et établissent des conseils coloniaux laissant l’administration des colonies entre les mains de colons blancs. L’utilisation de l’expression 
                    <title>«</title> hommes de couleur » en 1834 est particulièrement significative car ces lois auraient dû, en principe, en abolir l’usage en lui ôtant sa valeur juridique par la suppression de  toute distinction légale entre les hommes de couleur libres et les colons blancs.
                </p>\n        
                <bibl>Braun, Juliane. « Transatlantic Vistas: Changing Alliances at Home and Abroad » 
                    <title>Creole Drama</title>. University of Virginia Press. 2019, p. 141‑143.
                </bibl>\n        
                <bibl>Pâme, Stella. 
                    <title>Cyrille Bisette</title>. 1. éd. Fort-de-France, Martinique: Editions Désormeaux. 1997. 123-124.
                </bibl>\n        
                <bibl>Schmidt, Nelly. 
                    <title>Abolitionnistes de l'esclavage et réformateurs des colonies, 1820-1851 : analyses et documents</title>. Hommes et Sociétés. Paris : Karthala, 2000. 254–263 ; 283–285.
                </bibl>\n      
            </note>\n      
            <note resp=\"#masha\" xml:lang=\"en\">\n        
                <p>The ephemeral presence of this “society” on the title page of the 
                    <title>Revue </title>(until January 1835), combined with the absence of any other documentary trace, suggests that it was more an editorial construction than a formal organization. 
                </p>\n        
                <p>This claim of a collective identity for the 
                    <title>Revue</title>’s editorial apparatus was a common gesture of self-legitimation in the print culture of the 1830s. It is furthermore a way of signalling the demographic and, consequently, political importance of free 
                    <title>“</title>men of color,” a group of contested status, which included descendants of interracial unions and recently emancipated men, both of whom were systematically barred from citizenship by local ordinances.
                </p>\n        
                <p>Apart from Bissette, the 
                    <title>“</title>society of men of color” almost certainly included at least two of his co-authors for several emancipatory pamphlets and petitions published in previous years: Mondésir Richard, 
                    <title>mandataire</title>, or self-appointed representative of the free people of color of Guadeloupe, and Louis Fabien 
                    <title>fils</title>, 
                    <title>mandataire</title>, like Bissette, of the free people of color of Martinique and his co-defendant in the 
                    <title>affaire Bissette.</title>
                </p>\n        
                <p>Their roles as 
                    <title>“</title>mandataires des hommes de couleur
                    <title>”</title> are assumed, as explained in the 
                    <title>Revue</title>’s subsequent issue (August 1834), in reaction to the laws of April 24, 1833 (sometimes referred to as the 
                    <title>Colonial Charter</title>) which, while nominally establishing equal rights for all free populations of the colonies, imposed electoral qualifications that functionally excluded almost all of the free population of color, and established colonial councils that left the administration of the colonies in the hands of white planters. The use of the expression “men of color” in 1834 is particularly significant because these laws, in principle, should have removed any practical distinction between white men and free men of color.
                </p>\n        
                <bibl>Braun, Juliane. 
                    <title>Creole drama: Theatre and Society in Antebellum New Orleans</title>. Charlottesville: University of Virginia Press, 2019. 141‑143.
                </bibl>\n        
                <bibl>Pâme, Stella. 
                    <title>Cyrille Bissette: un martyr de la liberté</title>. Fort-de-France, Martinique: Editions Désormeaux, 1999.
                </bibl>\n        
                <bibl>Schmidt, Nelly. 
                    <title>Abolitionnistes de l'esclavage et réformateurs des colonies, 1820-1851: analyses et documents</title>. Paris: Karthala, 2000.
                </bibl>\n      
            </note>\n    
        </org>\n    
        <org xml:id=\"AN\">\n      
            <orgName>Assemblée Nationale</orgName>\n      
            <note resp=\"#masha\" xml:lang=\"fr\">\n        
                <p>Il s’agit de l’Assemblée nationale auto-proclamée, le 17 juin 1789, soit un mois après la réunion des états généraux, par les députés du tiers état. Cette date est depuis retenue comme marquant le début de la Révolution française. </p>\n      
            </note>\n      
            <note resp=\"#masha\" xml:lang=\"en\">\n        
                <p>The National Assembly was formed on June 17, 1789, one month after the meeting of the Estates General, by the deputies of the Third Estate. This date commonly marks the beginning of the French Revolution. </p>\n      
            </note>\n    
        </org>\n    
        <org xml:id=\"CNat\">\n      
            <orgName>Convention Nationale</orgName>\n      
            <note resp=\"#masha\" xml:lang=\"fr\">\n        
                <p>Assemblée constituante pendant la Révolution française, elle succède à l’Assemblée législative en 1792, fonde la Ière République et gouverne la France jusqu’au 26 octobre 1795. </p>\n        
                <p>L’esclavage est aboli une première fois, par décret de la Convention, le 4 février 1794, accordant les droits de citoyenneté à tous, dans toutes les colonies françaises et sans distinction de race. Cette première abolition est surtout un acte de pragmatisme, venant ratifier l’émancipation proclamée quelques mois auparavant dans la colonie française de Saint-Domingue sous l’effet de l’insurrection antiesclavagiste menée sur ce territoire par des africains esclavisés depuis 1791.</p>\n        
                <bibl>Schmidt, Nelly. 
                    <title>L’abolition de l’esclavage: cinq siècles de combats (xvie - xxe siècle)</title>. Paris : Fayard, 2006.
                </bibl>\n      
            </note>\n      
            <note resp=\"#masha\" xml:lang=\"en\">\n        
                <p>An assembly of the French Revolution, it succeeded the Legislative Assembly in 1792, established the First Republic, and governed France until October 26, 1795.</p>\n        
                <p>Slavery was abolished for the first time, by decree of the Convention, on February 4, 1794, which granted the rights of citizenship to all, in all the colonies, without distinction of race. This first abolition is above all an act of pragmatism, ratifying the emancipation proclaimed a few months earlier in the colony of Saint-Domingue as an effort to quell a slave insurrection that began in 1791.</p>\n        
                <bibl>Schmidt, Nelly. 
                    <title>L’abolition de l’esclavage: cinq siècles de combats (xvie - xxe siècle)</title>. Paris : Fayard, 2006.
                </bibl>\n      
            </note>\n    
        </org>\n  
    </listOrg>\n  
    <listBibl>\n    
        <bibl xml:id=\"MU\" type=\"periodical\">\n      
            <title>Le Moniteur universel</title>\n      
            <note resp=\"#laure\" xml:lang=\"fr\">\n        
                <p>
                    <title>Le Moniteur universel</title>, ou « Le Moniteur », est l’un des journaux les plus cités, sous cette forme abrégée et familière, au cours du XIX
                    <hi rend=\"superscript\">e</hi> siècle : on le retrouve, véritable élément de civilisation, dans la presse, dans les fictions, probablement dans les discussions d’alors. Ce titre, qui renvoie au langage des Lumières et de la Révolution, dérive étymologiquement du verbe 
                    <emph>monere</emph>, signifiant avertir ou conseiller. Il n’est d’abord que le sous-titre de la 
                    <title>Gazette nationale</title>, créée en 1789 par Charles-Joseph Panckouke, éditeur entre autres de l’
                    <title>Encyclopédie</title> de Diderot et d’Alembert ; ce n’est qu’en 1811 que le sous-titre, 
                    <title>Le Moniteur universel</title>, devient officiellement titre.
                </p>\n        
                <p>\n          Lancé en 1789, ce périodique devient en 1799 l’organe officiel du gouvernement consulaire ; il obtient ensuite, sous l’Empire, le privilège de la publication des actes du gouvernement et des communications officielles, passant de fait au statut d’« organe de propagande cardinal de l’Empire ». Il ne se limite pourtant pas à cette fonction, et survit aux différents régimes politiques comme il a survécu à la Révolution et à la mort de Panckouke en 1798. Sa survie est notamment liée à sa capacité à changer : les modèles adoptés par sa rédaction, qu'ils soient choisis ou imposés par le pouvoir en place, reflètent de manière révélatrice la culture politique propre à chaque période marquante de son histoire. Ainsi, comme le souligne Laurence Guellec, il se transforme en une grande encyclopédie pendant la Révolution, devient un instrument de propagande étatique sous le Premier Empire, se mue en recueil des discours des orateurs durant la monarchie constitutionnelle et la Seconde République, puis se positionne en tant que quotidien grand public et journal d'opinion sous le règne de Napoléon III. Ajoutons enfin que les titres constitués du syntagme « Moniteur » suivi d’un toponyme sont nombreux, au cours du siècle, en France : les titres locaux ou coloniaux adoptent cette formule pour mettre en exergue leur ancrage officiel, et respectent la distinction entre partie officielle et non officielle. \n        </p>\n        
                <p>\n          À l’époque de la 
                    <title>Revue des Colonies</title>, 
                    <title>Le Moniteur universel</title> est organisé en deux grandes parties : la « partie officielle » et la « partie non officielle ». Les actes du gouvernement et les communications officielles, quand il y en a, sont publiés dans la partie officielle, en une – mais parfois en quelques lignes – et les autres textes, tous d’actualité mais aux thèmes divers, paraissent dans la partie non officielle sous des rubriques elles aussi variées : intérieur, nouvelles extérieures, spectacles, etc. Les textes que cite la Revue des Colonies paraissent dans la partie non officielle, le plus souvent sous la rubrique « Intérieur » et en une.   \n        
                </p>\n        
                <bibl>\n          Laurence Guellec, « Les journaux officiels », 
                    <title>La Civilisation du journal</title> (dir. Dominique Kalifa, Philippe Régnier, Marie-Ève Thérenty, Alain Vaillant), Paris, Nouveau Monde, 2011. \n          
                    <ref target=\"https://www.retronews.fr/titre-de-presse/gazette-nationale-ou-le-moniteur-universel\">https://www.retronews.fr/titre-de-presse/gazette-nationale-ou-le-moniteur-universel</ref>.\n        
                </bibl>\n      
            </note>\n      
            <note resp=\"#laure\" xml:lang=\"en\">\n        
                <p>\n          
                    <title>Le Moniteur universel</title>, often simply referred to as the “Le Moniteur” is one of the most frequently referenced nineteenth-century French newspapers. An important cultural signifier, it was referenced frequently in other publications, in fiction, and likely in contemporary discussions. Its title, derived from the verb 
                    <emph>monere</emph>, meaning to warn or advise, gestures at Enlightenment and Revolutionary ideals of intelligent counsel. \n        
                </p>\n        
                <p>\n          Initially, 
                    <title>Le Moniteur universel</title> was merely a subtitle of the 
                    <title>Gazette Nationale</title>, established in 1789 by Charles-Joseph Panckouke, who also published Diderot and d’Alembert’s 
                    <title>Encyclopédie</title>. Only in 1811 that the subtitle officially ascended to title.\n        
                </p>\n        
                <p>\n          The 
                    <title>Moniteur</title> had become the official voice of the consular government in 1799. Under the Empire, it gained the privilege of publishing government acts and official communications, effectively becoming the Empire's primary propaganda outlet. However, its role was not confined to this function. It survived various political regimes, including the Revolution and the death of Panckouke in 1798. Its longevity can be attributed to its adaptability, with its successive iterations reflecting the political culture of each historical stage, transitioning from an encyclopedic model during the Revolution, to a state propaganda tool during the First Empire, to a collection of political speeches under the constitutional monarchy and the Second Republic, and finally, to a daily opinion newspaper for the general public under Napoleon III.\n        
                </p>\n        
                <p>\n          During the print run of the 
                    <title>Revue des Colonies</title>, the “Moniteur” was divided into two main sections: the “official” and the “unofficial” part. Government documents and official communications were published in the official section, while other current events and various topics were featured in the unofficial section under a range of headings such as “Domestic,” “International,” “Entertainment,” etc. The texts cited in 
                    <title>Revue des Colonies</title> were most often found in the unofficial section, typically under the “Domestic” heading and on the front page.\n        
                </p>\n        
                <p>\n          Titles containing the label “Moniteur” followed by a toponym abounded throughout the nineteenth century:  local or colonial titles used this formula to emphasize their official status, maintaining the distinction between the official and unofficial sections.\n        </p>\n        
                <bibl>\n          Laurence Guellec, “Les journaux officiels”, 
                    <title>La Civilisation du journal</title> (dir. Dominique Kalifa, Philippe Régnier, Marie-Ève Thérenty, Alain Vaillant), Paris, Nouveau Monde, 2011. 
                    <ref target=\"https://www.retronews.fr/titre-de-presse/gazette-nationale-ou-le-moniteur-universel\">https://www.retronews.fr/titre-de-presse/gazette-nationale-ou-le-moniteur-universel</ref>.\n        
                </bibl>\n      
            </note>\n    
        </bibl>\n    
        <bibl xml:id=\"RC\" type=\"periodical\">\n      
            <title>Revue Coloniale</title>\n      
            <note resp=\"#masha\" xml:lang=\"fr\">\n        
                <p>Fondée par Édouard Bouvet et dirigée par Rosemond Beauvallon, la 
                    <title>Revue Coloniale</title>, sous-titrée 
                    <title>intérêts des colons : marine, commerce, littérature, beaux-arts, théâtres, modes</title>, souscrit au modèle des revues destinées aux propriétaires coloniaux, rendant compte de l'actualité politique et économique des colonies tout en ménageant une place aux contenus littéraires, culturels et mondains. Dans le numéro de décembre 1838 de la 
                    <title>Revue des Colonies</title>, Cyrille Bissette reconnaît en la 
                    <title>Revue Coloniale</title> tant un adversaire idéologique qu'un concurrent dans le paysage médiatique.
                </p>\n      
            </note>\n      
            <note resp=\"#masha\" xml:lang=\"en\">\n        
                <p>The 
                    <title>Revue Coloniale</title>, was an ephemeral monthly periodical, printed in Paris during the year 1838. Its founder Édouard Bouvet and editor Rosemond Beauvallon conceived of it on the model of many similar, contemporaneous publications reporting on political and economic questions of interest to white colonists while also attending to arts and literature, as attested by the journal’s complete title: 
                    <title>Revue Coloniale. intérêts des colons : marine, commerce, littérature, beaux-arts, théâtres, modes</title>. In the December 1838 issue of the 
                    <title>Revue des Colonies</title>, Cyrille Bissette acknowledges the 
                    <title>Revue Coloniale</title> as both an ideological opponent and a competitor in the print market.
                </p>\n      
            </note>\n    
        </bibl>\n  
    </listBibl>\n
</div>`;

const teiData = `<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n
<?xml-model href=\"../odd/tei_revue.rng\" type=\"application/xml\" schematypens=\"http://relaxng.org/ns/structure/1.0\"?>
<?xml-model href=\"../odd/tei_revue.rng\" type=\"application/xml\" schematypens=\"http://purl.oclc.org/dsdl/schematron\"?>
<TEI
    xmlns=\"http://www.tei-c.org/ns/1.0\"
    xmlns:xi=\"http://www.w3.org/2001/XInclude\" xml:id=\"RdCv2n1-en\">\n   
    <teiHeader>\n      
        <fileDesc>\n         
            <titleStmt>\n            
                <title>Revue des Colonies V.2 N°1 (selection in English translation)</title>\n            
                <editor>Maria Beliaeva Solomon</editor>\n         
            </titleStmt>\n         
            <editionStmt>\n  
                <respStmt>\n    
                    <resp>Annotated by</resp>\n    
                    <name xml:id=\"masha\">M. Beliaeva Solomon</name>\n    
                    <name xml:id=\"greg\">G. Pierrot</name>\n    
                    <name xml:id=\"laure\">L. Demougin</name>\n    
                    <name xml:id=\"abel\">A. Louis</name>\n  
                </respStmt>\n
            </editionStmt>\n         
            <publicationStmt>\n            
                <p>Publication Information</p>\n         
            </publicationStmt>\n         
            <sourceDesc>\n            
                <p>Information about the source</p>\n         
            </sourceDesc>\n      
        </fileDesc>\n   
    </teiHeader>\n   
    <text>\n      
        <front>\n      
            <pb n=\"1\" facs=\"v2n1p1\"/>\n         
            <titlePage>\n            
                <titlePart type=\"main\">
                    <seg>REVUE</seg>
                    <lb/>DES
                    <lb/>
                    <seg>COLONIES</seg>
                </titlePart>\n            
                <titlePart type=\"sub\">MONTHLY COMPENDIUM
                    <lb/> OF POLITICS, ADMINISTRATION, JUSTICE,\n               INSTRUCTION AND COLONIAL CUSTOMS,
                </titlePart>\n            
                <byline>DIRECTED
                    <lb/>
                    <hi rend=\"bold\">BY</hi>
                    <persName ref=\"#CB\">C.-A. BISSETTE</persName>.
                </byline>\n            
                <docEdition>2nd year — n.1 — July.
                    <lb/>
                </docEdition>\n            
                <figure>\n               
                    <graphic url=\"v2n1-vignette.jpg\"/>\n               
                    <figDesc>Am I not a man and your brother?....
                        <ptr target=\"#n6D92\" n=\"26\"/>
                    </figDesc>\n            
                </figure>\n            
                <docImprint>
                    <pubPlace>
                        <settlement>PARIS</settlement>,
                        <lb/> AT THE OFFICE OF THE REVUE DES COLONIES, 
                        <lb/> 28, RUE LOUIS-LE-GRAND.
                    </pubPlace>
                    <lb/>
                    <date>1835</date>.
                </docImprint>\n         
            </titlePage>\n      
        </front>\n      
        <body>\n         
            <div>\n         
                <pb n=\"3\" facs=\"v2n1p3\"/>\n            
                <head>REVUE DES COLONIES</head>\n            
                <head>2nd YEAR. JULY 1835. N° 1.</head>\n            
                <div>\n               
                    <list>\n                  
                        <item>On the abolition of slavery by the National Convention.</item> \n                  
                        <item>— Bill for the abolition of slavery.</item>\n                  
                        <item>— Inquiry into the colonies, Vote on the last law on the colonies.</item>\n                  
                        <item>— Electoral question.</item>\n                  
                        <item>— FRANCE. House of Representatives. Discussion of the budget of the Navy\n                  and the Colonies.</item> \n                  
                        <item>— Of the passing of the law relating to criminal legislation.</item>\n                  
                        <item>— Chamber of Peers.</item>\n                  
                        <item>— Discussion of the law of an additional credit of 650,000\n                  francs granted to the Minister of the Navy and the Colonies.</item> \n                  
                        <item>— Foreign colonies. Bermuda. Barbados.</item>\n                  
                        <item>— Miscellaneous News.</item>\n                  
                        <item>— Varieties.</item>\n                  
                        <item>— Biography.</item>\n                  
                        <item>— Poetry.</item>\n                  
                        <item>— Bibliography.
                            <ptr target=\"#n9D67\" n=\"27\"/>
                        </item>\n               
                    </list>\n            
                </div>\n            
                <div xml:id=\"abolition\">\n               
                    <head>ON THE ABOLITION OF SLAVERY BY THE NATIONAL CONVENTION. — REVUE DES COLONIES\n                  BILL.</head>\n               
                    <p> Slavery, which is tending to disappear completely and in all its forms from human\n                  societies, and the abolition of which by legislative means in our colonies cannot\n                  be long in coming, was once already outlawed, with admirable spontaneity, by the\n                     
                        <orgName ref=\"#CNat\">National Convention</orgName>. The National Convention did\n                  not put off this just reparation for an hour, and from the moment that the\n                  question had been submitted, it was resolved without hesitation in the direction\n                  of the revolution and of the philosophical spirit of the eighteenth century;\n                  better said yet, it was not even a question. In the first preoccupations of '89,\n                  the colonies were only considered momentarily. In a rush, free men of color were\n                  called to enjoy the rights of citizenship. In the colonies themselves, the\n                  question, although then as now at the heart of the matter, was kept as far as\n                  possible out of discussion by a kind of apprehension and vague dread of the\n                  future.
                    </p>\n               
                    <p> However, the French Revolution had taken effect. The new ideas distributed by the\n                  press, spread by the word, had crossed the seas
                        <ptr target=\"#n5676\" n=\"28\"/>; the French Antilles
                        <ptr target=\"#n2B16\" n=\"29\"/> were also consumed with this new state of mind.\n                  In general, however, it was only among the whites that parties had been formed. In\n                  the colonies
                        <pb n=\"4\" facs=\"v2n1p4\"/> as in France there were revolutionaries, and\n                  counter-revolutionaries, supporters of royalty and supporters of democracy. The\n                  tricolor flag had appeared to some as an odious sign, to others, a glorious sign;\n                  the latter were the most numerous, the former the richest. Hence divisions,\n                  parties; a silent disagreement between those who clung desperately to the\n                  privileges of the past, and those whom the breath of new liberty had touched as it\n                  crossed the seas. The debate was still only between them. Of the liberation of\n                  slaves, not a clear and distinct word, as if the rights of man had not been\n                  proclaimed and the Bastille had not been taken. By whatever names the colonists\n                  used, republican or royalist, none among them was led by the spirit of age
                        <ptr target=\"#n17AB\" n=\"30\"/> to draw from the principles that they claimed for themselves,\n                  a conclusion favorable to the freedom of the other race; the distinction of color\n                  remained, slavery was the holy ark which no one dreamed of touching.
                    </p>\n               
                    <p>However, the counter-revolutionary work advanced, 
                        <placeName ref=\"#ANG\">England</placeName>, then at the head of the retrograde movement, attacked us\n                  everywhere in the two seas. Mistress of 
                        <placeName ref=\"#MQ\">Martinique</placeName>, poorly defended by its inhabitants, of whom several,\n                  and of the highest rank, were traitors to the fatherland (1),
                        <ptr target=\"#n239B\" n=\"31\"/> England had vainly tried to conquer several other points, including 
                        <placeName ref=\"#GP\">Guadeloupe</placeName> and 
                        <placeName ref=\"#HT\">Saint-Domingue</placeName>. Saint-Domingue, however, was seriously threatened.\n                  At the first news of the danger, the National Convention sent two of its members\n                  to organize the defense: they found nothing but dispiritedness.
                    </p>\n               
                    <p>In the most perilous circumstances, the commissioners had recourse to a great\n                  measure of public safety, completely conforming to the</p>\n               
                    <p>\n                  
                        <note>(1) M. le Chevalier Dubuc, who then was at the head of the colonial\n                     committee in Martinique, crossed furtively to the island of Dominica, whence he\n                     embarked for England, and returned with the English Admiral Gardener to attempt\n                     the conquest of Martinique. This expedition, which was repelled with heavy\n                     losses, did not discourage M. Dubuc; he returned to England, and succeeded in\n                     inducing the British government to grant him, as well as M. de Clairfontaine,\n                     deputy for Guadeloupe, new forces for the conquest of Guadeloupe and\n                     Martinique. A squadron, under the orders of Admiral Jervis, and an army under\n                     the orders of General Grey, seized Martinique in 1794. Guadeloupe thus fell\n                     into the power of the English, but they were driven out forty days\n                     later.</note>
                    </p>\n               
                    <pb n=\"5\" facs=\"v2n1p5\"/>\n               
                    <p>nature of their mission and for which they took full responsibility: they called\n                  the slaves to freedom. The slaves rushed in mass to the defense of the colony, and\n                  from then on the blacks
                        <ptr target=\"#n4F06\" n=\"32\"/> were won over to the great cause of\n                  the French republic.
                    </p>\n               
                    <p> In the meantime, an election was held in Saint-Domingue in which all classes of\n                  the population took part, without distinction of color. 
                        <persName ref=\"#Dfy\">Dufahy</persName> a man of courage and heart, who had shown in the\n                  administration of his properties at Saint-Domingue an unequivocal sympathy for the\n                  oppressed race, was one of the deputies appointed on this occasion.
                    </p>\n               
                    <p>Scarcely had the National Convention learned of the acts of 
                        <persName ref=\"#Plv\">Polverel</persName> and of 
                        <persName ref=\"#Stx\">Sonthonax</persName>, its\n                  commissioners with regard to everything concerning slaves, that it approved them;\n                  their greatness was recognized. And immediately, to the applause of the immortal\n                  assembly, was pronounced forthwith, at the request of Dufahy, not only the\n                  emancipation of the entire black race, but also its reintegration into the great\n                  national family.
                        <ptr target=\"#nA2CD\" n=\"33\"/>
                    </p>\n               
                    <p>Thus was manifested, at the first appeal with regard to the blacks, the French\n                  revolution's spirit of justice; and its project of the reintegration of the rights\n                  of man, undertaken against all obstacles, seemed for a moment codified\n                  forever.</p>\n               
                    <p>It was in the month of February 1794, that the National Convention issued the\n                  memorable decree which abolished slavery throughout the French\n                  colonies; a decree believed to be forever irrevocable.</p>\n               
                    <p>All that remained for the French Republic to do was to take pride in this most glorious measure, to which it proceeded with such a resolute spirit and with such firmness. Freedom\n                  established itself in consequence, 
                        <foreign>de facto</foreign> and 
                        <foreign>de jure</foreign>, in\n                  those of our colonies which England had not succeeded in seizing.
                    </p>\n               
                    <p>The emancipation of the blacks had the first result of preserving for France its\n                  richest colony, Saint-Domingue. Once free, the blacks of Saint-Domingue, who it\n                  would have been hardly surprising to see comport themselves differently upon\n                  achieving liberty, gave striking proofs of their good will, and of their aptitude\n                  for all kinds of work. Under this regenerative regime, the colony organized\n                  itself, the workshops were all in activity, the crops 
                        <pb n=\"6\" facs=\"v2n1p6\"/> flourished. This\n                  state of affairs lasted, not without remarkable progress, until 1802, when\n                     
                        <persName ref=\"#NB\">Napoleon</persName>, misled by the fatality of his\n                  illiberal ideas, tried to reestablish slavery where the National Convention had\n                  made it disappear. We must see in Mr. Macaulay's excellent book on Haiti 
                        <ptr target=\"#n8414\" n=\"34\"/> the curious details of this emancipation, somewhat\n                  improvised, of the black race in the most considerable of our colonial possessions\n                  of that period. Mr. Macaulay's work is filled not only with unknown facts about\n                  the war of independence in 
                        <placeName ref=\"#HT\">Haiti</placeName>, but also with irrefutable evidence against the\n                  errors propagated with the most flagrant bad faith by the enemies of the cause of\n                  the blacks.
                    </p>\n               
                    <p> He triumphantly proves that the greatest disasters were the result of the return\n                  to slavery in 1802, undertaken beyond all reason and all necessity by the First\n                  Consul.</p>\n               
                    <p> The French army, fighting for a bad cause, was defeated, and perished. The blacks\n                  remained masters of the land, and laid there the foundations of the social state\n                  which they enjoy today, a social state far superior to that of many supposedly\n                  civilized European nations.
                        <ptr target=\"#n82F8\" n=\"35\"/> The problem of free labor in the\n                  Antilles was thereby solved, and today the example of the emancipated English\n                  colonies must have convinced even the most dimwitted of the falsity and infamy of\n                  the assertions of the colonists against the blacks.
                        <ptr target=\"#n411B\" n=\"36\"/>
                    </p>\n               
                    <p> That which was decreed by the National Convention in 1794, for the French\n                  possessions, which was established by force of circumstance following the wars of\n                  independence of Saint-Domingue, which has just been organized for the English\n                  colonies, namely: the emancipation of the blacks and free labor, we claim it today\n                  on the most legitimate grounds, in the name of principle and necessity, and we\n                  want to establish it by reason and according to a law of justice and reparation,\n                  without delay.
                        <ptr target=\"#n1FC1\" n=\"37\"/>
                    </p>\n            
                </div>\n            
                <pb n=\"7\" facs=\"v2n1p7\"/>\n            
                <div xml:id=\"bill\">\n               
                    <head>BILL FOR THE ABOLITION OF SLAVERY IN THE FRENCH COLONIES.</head>\n               
                    <p> Considering that slavery is contrary to all divine and human laws; that it could\n                  only have been established through violence, injustice and contempt for the most\n                  imprescriptible of human rights, the right to dispose of one's person and one's\n                  work according to one's will, insofar as this will does not infringe upon the\n                  rights of others, which it is for the law alone to determine; considering that\n                  slavery is not only a usurpation of man by man, which can no longer be tolerated\n                  morally, but furthermore an inexhaustible source of misfortunes, troubles, and\n                  concerns of all kinds for the peoples whom it affects; that, moreover, experience\n                  has sufficiently proven that wherever slavery persists, only material development\n                  can take place, and that it implies contempt for the true principles of social\n                  morality;</p>\n               
                    <p>By all these causes, etc.</p>\n               
                    <p> FIRST ARTICLE.
                        <lb/> Slavery is abolished in all French overseas\n                  possessions.
                        <lb/>All the inhabitants of the French colonies, without distinction\n                  of color, are declared free and equal in rights.
                        <ptr target=\"#n0380\" n=\"38\"/>
                    </p>\n               
                    <p>ART. 2.
                        <lb/>They therefore enjoy all family, civil and political rights, in the\n                  same way as other French citizens, in accordance with the law.
                    </p>\n               
                    <p>ART. 3.
                        <lb/>The nature and the quota of the wages between the laborers
                        <ptr target=\"#n1542\" n=\"39\"/> and the landowners will be regulated by the government of the\n                     metropole.
                    </p>\n               
                    <p>ART. 4
                        <lb/> There will be created, in all the communes of the different French\n                  colonies, free schools for the civil and religious instruction of the laborers.\n                  This instruction will be compulsory for all those who have not reached the age of\n                  21.
                        <ptr target=\"#n3F04\" n=\"40\"/>
                    </p>\n               
                    <pb n=\"8\" facs=\"v2n1p8\"/>\n               
                    <p>ART. 5.
                        <lb/> A special code called the code of culture will regulate all that\n                  concerns the details and the execution of this law.
                    </p>\n               
                    <p>ART. 6.
                        <lb/> All laws and ordinances, all regulations whatever, which relate to\n                  slavery, are from now on and remain annulled and abrogated.
                    </p>\n               
                    <p> This law is but a law of principles; and in this respect it seems to us to\n                  establish, in a clear and precise manner, the bases on which the regulatory code\n                  of the colonies will need to rest. The six articles that precede are, in a way,\n                  only the social charter promulgated in the colonies by the French government. If\n                  we do not enter into the examination of the various questions which the\n                  establishment of these new principles may raise, our readers will find the reasons\n                  for this silence in the article that follows this one, entitled: 
                        <title>Inquiry\n                     into the colonies</title>.
                    </p>\n               
                    <p> We will explain ourselves here on only one point, that of the indemnity that some\n                  want to grant and that others refuse to the owners of slaves. We have said nothing\n                  about it in the law constituting the social state of the colonies, and here is\n                  why:</p>\n               
                    <p> Between the master and the slave there can be no question of indemnity.
                        <ptr target=\"#n3542\" n=\"41\"/> If one absolutely wanted to establish one, it would be the\n                  master who would owe it to the slave, as reparation for the physical and moral\n                  violence he has exercised against him.
                        <ptr target=\"#n678F\" n=\"42\"/>
                    </p>\n               
                    <p> The principle of indemnity can only be debated between French society and the\n                  colonial landowners. Let us prove that if France granted an indemnity, it would\n                  be, on its part, a pure act of liberality, from which, consequently, it would do\n                  well to abstain.</p>\n               
                    <p>Freedom is neither sold nor acquired. It exists forever, everywhere, and for\n                  everyone. One no more loses it under the whip of a master than one buys it for\n                  cold cash; and this way of acquiring it strikes more at its principle than the\n                  material violence that causes it to be lost, in fact, because this, at least,\n                  leaves the right intact. The word indemnity is, accordingly, the one which we have\n                  most carefully banished from a bill of principles on the abolition of slavery.
                        <ptr target=\"#n49AF\" n=\"43\"/>
                    </p>\n               
                    <pb n=\"9\" facs=\"v2n1p9\"/>\n               
                    <p> This law is therefore not a dispossession, an expropriation, for reasons of\n                  public utility; on the contrary, it is the negation of the state of property, to\n                  which it puts an end. It is the reestablishment of rights, a real restoration
                        <ptr target=\"#n09EC\" n=\"44\"/> this time: in this respect, the indemnity would be immoral.\n                  Consider it from a purely material point of view; the colonists would ask France\n                  for an indemnity, founded on what? on the actual loss they incur; what is it that\n                  they are losing? the purchase price and the fruit of slave labor? Neither; even in\n                  the hypothesis most favorable to the slave owners, the purchase price must be put\n                  out of the question for the greatest number, since the slave trade has been\n                  abolished for a long time, and that it would be unreasonable to found the demand\n                  for justice upon the violation of the law. Moreover, the purchase price of a slave\n                  is nothing more than a kind of import duty paid in order to be able to take\n                  advantage of the labor of the imported 
                        <emph>commodity</emph>
                        <ptr target=\"#n07F3\" n=\"45\"/>. This work is the one and only profit generator of the masters. One should not\n                  quantify the particular industry of each slave because under this mode it is\n                  exerted too narrowly, too restricted; because intelligence, dulled by servitude,\n                  and the ignorance which is its necessary consequence, is without force, without\n                  guide, without direction, and because the small savings acquired by the slave are\n                  often discarded to him by the master.
                        <ptr target=\"#n90C0\" n=\"46\"/> But let us say in passing that this\n                  industry, besides the work in the fields, will certainly be one of the means of\n                  prosperity of the colonies when it is practiced by free hands and directed by\n                  cultivated intelligences.
                    </p>\n               
                    <p>The master therefore derives only one profit, either from the slave whom he buys,\n                  or from the one who is born on his property: labor; and this profit imposes on him\n                  a fairly large number of expenses: food, clothing, care of every kind for the\n                  preservation of his slaves.</p>\n               
                    <p>Well, the colonies are constituted in such a way that the masters, whatever their\n                  rights may be, cannot dispense with having their former slaves work the land, and\n                  that these, upon becoming free, will no less be laborers. The law changes, but the\n                  fact will not, the master loses nothing; what the labor of his former slaves cost\n                  him in overhead will be replaced by the wages he will give to them as free\n                  laborers. Let him not come and say that the slave we 
                        <pb n=\"10\" facs=\"v2n1p10\"/> removed from\n                  under his dominion cost him 1500 and 2000 francs; for he has paid this price and\n                  other expenses to profit from a labor that he may always obtain from the will of\n                  the worker. Wages replace a great number of cares and expenses, and if, all things\n                  considered, there is an increase, that is the fate of all modern industries.
                    </p>\n               
                    <p>Who does not see now that by compensating the former owners, the state would use\n                  200 million to repair a chimerical evil. We have tried to leave the principles\n                  aside for a moment, but if it were true that the dispossession of the master were\n                  for him a material loss of money, that would not give him any more right to be\n                  compensated; because there is 
                        <emph>no right against rights.</emph>.
                    </p>\n               
                    <p> One will object, as a delegate in the tribune already has: “The blacks who have\n                  become free will no longer work, the landowners will lose, the blacks will gain\n                  nothing, the colonies will perish; all this with no advantage to anyone.” Error!\n                  societies do not perish; they transform; blacks will work as laborers, and for two\n                  reasons: so as not to starve, and in the hopes of obtaining a piece of land. They\n                  will work better than before, and their crops, improved in the interest of the\n                  landowners, would enable the farmers and workmen to successfully practice the\n                  exercise of their industrial imaginations. Observe, moreover, that in all that\n                  relates to the colonies, we always ask for an arbiter, France. We conceive nothing\n                  without this moderating power; for, indeed, we do not dispute the difficulties\n                  which the transition from the old to the new state produced by the abolition of\n                  slavery may present; but that is no reason to adjourn the question\n                     indefinitely.
                        <ptr target=\"#n435A\" n=\"47\"/>
                    </p>\n               
                    <p>With the help of the French government, the colonies can reform themselves and\n                  live without harm to any portion of their inhabitants. Without this intervention,\n                  they will certainly not perish as human societies, but they will perish as\n                  European societies. There would come a day when an inevitable, terrible struggle\n                  would begin, and where force would determine the law. One must not think that, in\n                  closing one's eyes, that which offends the gaze disappears, and that facts cease\n                  to exist simply because one does not speak of them. The intermediary race of the\n                  colonies is the necessary link between the old and the new order, the keystone of\n                  the new social edifice.
                        <ptr target=\"#nA4C7\" n=\"48\"/> Building on a legal basis, reforming\n                  without viol
                        <pb n=\"11\" facs=\"v2n1p11\"/>ence, repairing without damage, such is our aim. It can be\n                  accomplished under the patronage of France, and what's more, it can only be\n                  accomplished with the aid of France.
                    </p>\n            
                </div>\n         
            </div>\n      
        </body>\n      
        <back>\n         
            <noteGrp xml:id=\"RdCv2n1-notes\">\n  
                <noteGrp xml:id=\"n6D92\">\n    
                    <note xml:lang=\"fr\" type=\"commentaire\">\n      
                        <p>Vignette signée du dessinateur-lithographe parisien Levasseur, et du collectif de graveurs sur bois Andrew, Best et Leloir, actifs à Paris dans les années 1830-1840. </p>\n      
                        <p>La représentation d’un esclave africain enchaîné et agenouillé, les mains jointes, la jambe gauche fléchie suggérant qu’il s’apprête à se relever, est dérivée, légende comprise, d’un médaillon conçu par l’industriel britannique Josiah Wedgewood en 1787 comme sceau officiel du Comité de Londres de la Société pour l’Abolition de la Traite. </p>\n      
                        <p>Wedgewood aurait lui-même critiqué la reproduction commerciale de l’image comme n’étant pas sensiblement différente de la traite qu’elle condamnait, mais elle a circulé massivement tout au long du 19e siècle, contribuant à populariser le mouvement abolitionniste. Elle n’en réifie pas moins le sujet représenté, réduisant, par extension, une population de millions de personnes à un objet abstrait de contemplation sentimentale.</p>\n      
                        <p>L’image circule en France dès 1788 sur les imprimés de la 
                            <title>Société des amis des noirs.</title> Dans les utilisations françaises, le texte de la légende varie, selon les cas, entre N
                            <title>e suis-je pas un homme et ton frère? Ne suis-je pas ton frère? </title>
                        </p>\n      
                        <p>Thomas Clarkson. 
                            <title>History of the Rise, Progress, and Accomplishment of the Abolition of the African Slave Trade by the British Parliament</title>. 2 vols. Philadelphia: James P. Parke, 1808.
                        </p>\n      
                        <p>Lynn M. Festa, 
                            <title>Sentimental Figures of Empire in Eighteenth-Century Britain and France</title> (Baltimore: Johns Hopkins University Press, 2006). 165-166.
                        </p>\n      
                        <p>J.R. Oldfield. 
                            <title>Popular Politics and British Anti-Slavery: The Mobilisation of Public Opinion Against the Slave Trade, 1787–1807</title>. London: Frank Cass, 1998.
                        </p>\n    
                    </note>\n    
                    <note xml:lang=\"en\" type=\"commentary\">\n      
                        <p>The image used on the title page, including the text, is derived from a medallion designed by Josiah Wedgewood as the official seal of the London Committee of the Society for the Abolition of the Slave Trade in 1787 (the text of the original mediallion reads “Am I not a man and a brother?”). Though Wedgewood himself refused to sell these small black and white medallions because, he argued, trading in representations of the enslaved was not altogether different from the actual slave trade, they were immediately and extremely popular, with the image, text, or both reproduced on a number of goods, and adapted in numerous printed works such as the 
                            <title>Revue</title>. As contemporary critics have noted, this image, while undoubtedly succeeding in the goal of publicizing and popularizing the abolitionist movement, nonetheless objectifies enslaved people, reducing a population of millions into an abstract object of sentimental contemplation, and asking the--presumably white--reader to benevolently affirm the enslaved man’s plea for humanity. On the other hand, his posture, resting on one knee with his right foot flexed behind might also suggest that he is poised to elevate himself. 
                        </p>\n      
                        <p>Thomas Clarkson. 
                            <title>History of the Rise, Progress, and Accomplishment of the Abolition of the African Slave Trade by the British Parliament</title>. 2 vols. Philadelphia: James P. Parke, 1808.
                        </p>\n      
                        <p>Lynn M. Festa, 
                            <title>Sentimental Figures of Empire in Eighteenth-Century Britain and France</title>. Baltimore: Johns Hopkins University Press, 2006. 165-166.
                        </p>\n      
                        <p>J.R. Oldfield. 
                            <title>Popular Politics and British Anti-Slavery: The Mobilisation of Public Opinion Against the Slave Trade, 1787–1807</title>. London: Frank Cass, 1998.
                        </p>\n    
                    </note>\n  
                </noteGrp>\n  
                <noteGrp xml:id=\"n9D67\">\n    
                    <note xml:lang=\"fr\" type=\"commentaire\">\n      
                        <p>Cette table de matières atteste de la grande diversité des textes, à l’origine et à la forme variée, dont sont composées les livraisons de la 
                            <title>Revue </title>: projets de loi et enquêtes juridiques y côtoient les rubriques labellisées variétés, nouvelles diverses, poésie et fiction, biographie et bibliographie portant sur un vaste éventail de sujets.
                        </p>\n      
                        <p>Introduits au second volume, la table des matières, la numérotation continue des pages et l’index alphabétique qui clôt la dernière livraison, témoignent de la volonté de proposer aux abonnés un ensemble, certes diversifié, mais cohérent, pouvant être intégré aux bibliothèques sous forme de recueil annuel relié.</p>\n    
                    </note>\n    
                    <note xml:lang=\"en\" type=\"commentary\">\n      
                        <p>This table of contents attests to the internal diversity of the 
                            <title>Revue’</title>s issues, both in terms of source and genre: bills and legal analysis are juxtaposed with “varieties,” miscellaneous news covering a range of subjects, poetry, fiction, biography, and bibliography.
                        </p>\n      
                        <p>Introduced in the second volume, the table of contents, along with the continuous numbering of the pages between issues, and the alphabetical index that closes the final issue of each year, testify to an intent to offer subscribers a varied but coherent set of texts that might be bound and cataloged in a library.</p>\n    
                    </note>\n  
                </noteGrp>\n  
                <noteGrp xml:id=\"n5676\">\n    
                    <note xml:lang=\"fr\" type=\"commentaire\">\n      
                        <p>Cette référence à la circulation transatlantique des idées révolutionnaires, notamment dans la presse, permet d’identifier implicitement la 
                            <title>Revue </title>comme un organe historiquement important de d'organisation politique diasporique et transnationale.
                        </p>\n      
                        <p>Bryant, Kelly Duke. « Black but Not African: Francophone Black Diaspora and the “Revue des Colonies,” 1834-1842 », 
                            <title>The International Journal of African Historical Studies</title>. 2007, vol.40 nᵒ 2. p. 251‑282.
                        </p>\n      
                        <p>Johnson, Sara E. 
                            <title>The Fear of French Negroes: Transcolonial Collaboration in the Revolutionary Americas</title>. Berkeley: University of California Press, 2012.
                        </p>\n    
                    </note>\n    
                    <note xml:lang=\"en\" type=\"commentary\">\n      
                        <p>In crediting the press specifically with propagating the ideas of the French Revolution, this reference to the transatlantic circulation of print implicitly identifies the 
                            <title>Revue </title>as a historically important medium for transnational and diasporic political engagement.
                        </p>\n      
                        <p>Bryant, Kelly Duke. « Black but Not African: Francophone Black Diaspora and the “Revue des Colonies,” 1834-1842 », 
                            <title>The International Journal of African Historical Studies</title>. 40, no.2 (2007). 251‑282.
                        </p>\n      
                        <p>Johnson, Sara E. 
                            <title>The Fear of French Negroes: Transcolonial Collaboration in the Revolutionary Americas</title>. Berkeley: University of California Press, 2012.
                        </p>\n    
                    </note>\n  
                </noteGrp>\n  
                <noteGrp xml:id=\"n239B\">\n    
                    <note xml:lang=\"fr\" type=\"commentaire\">\n      
                        <p>Les notes de bas de page comme celle-ci témoignent des ambitions pédagogiques de la 
                            <title>Revue,</title> qui s’attache, en l’occurrence, à retracer tout un pan de l’histoire antillaise à la période révolutionnaire. 
                        </p>\n    
                    </note>\n    
                    <note xml:lang=\"en\" type=\"commentary\">\n      
                        <p>Footnotes such as this one attest to the pedagogical ambitions of the 
                            <title>Revue</title>, which endeavors, in this case, to provide an overview of an aspect of Caribbean history during the revolutionary period.
                        </p>\n    
                    </note>\n  
                </noteGrp>\n  
                <noteGrp xml:id=\"n738C\">\n    
                    <note xml:lang=\"fr\" type=\"commentaire\">\n      
                        <p>Les élections tenues suite à l’abolition promulguée à Saint-Domingue en 1793 sont importantes pour avoir été les premières à garantir la participation des hommes de couleur, y compris ceux récemment émancipés. Ce récit condensé des événements entre les décrets de 1792 et 1794, présente les interventions de la Convention en Haïti sous un jour uniformément positif, conformément à la tendance générale de la 
                            <title>Revue de Colonies</title> à ne jamais critiquer l’empire colonial français en tant que tel. 
                        </p>\n      
                        <p>Dubois, Laurent. 
                            <title>Avengers of the New World: The Story of the Haitian Revolution</title> Cambridge, Mass: Harvard University Press, 2004
                        </p>\n      
                        <p>Fick, Caroline E. 
                            <title>The Making of Haiti: The Saint Domingue Revolution from Below</title>. Knoxville: University of Tennessee Press, 1990
                        </p>\n    
                    </note>\n    
                    <note xml:lang=\"en\" type=\"commentary\">\n      
                        <p>The elections held following the abolition enacted in Saint-Domingue in 1793 are important for having been the first to guarantee the participation of men of color, including those recently emancipated. This condensed account of the events between the decrees of 1792 and 1794, however, treats the French revolutionary government’s interventions in Haiti in an uncomplicatedly positive light, an editorial decision consistent with the 
                            <title>Revue des Colonies</title>’ general reticence to criticize the French colonial empire as such. 
                        </p>\n      
                        <p>Dubois, Laurent. 
                            <title>Avengers of the New World: The Story of the Haitian Revolution</title> Cambridge, Mass: Harvard University Press, 2004
                        </p>\n      
                        <p>Fick, Caroline E. 
                            <title>The Making of Haiti: The Saint Domingue Revolution from Below</title>. Knoxville: University of Tennessee Press, 1990
                        </p>\n    
                    </note>\n  
                </noteGrp>\n  
                <noteGrp xml:id=\"nA2CD\">\n    
                    <note xml:lang=\"fr\" type=\"commentaire\">\n      
                        <p>Les envolées rhétoriques de ce passage témoignent d’une stratégie médiatique complexe, voire contradictoire, multipliant d’un côté les signes d’allégeance aux idéaux républicains y compris dans leur incarnation coloniale, et réclamant, de l’autre côté, un démantèlement du système esclavagiste coextensif de l’entreprise coloniale, et de la hiérarchie socio-raciale que celui-ci met en place. </p>\n    
                    </note>\n    
                    <note xml:lang=\"en\" type=\"commentary\">\n      
                        <p>The rhetorical flourishes of this passage testify to a complex, even contradictory media strategy. While affirming his allegiance France and its sovereignty over the colonies, Bissette demands the abolition of  the institution of slavery on with the colonial economy depends, and the dismantling of the socio-racial hierarchy that it entails.</p>\n    
                    </note>\n  
                </noteGrp>\n  
                <noteGrp xml:id=\"n82F8\">\n    
                    <note xml:lang=\"fr\" type=\"commentaire\">\n      
                        <p>Cette déclaration est remarquable non seulement par son apologie de l’État haïtien mais par la mise en accusation, tout aussi exceptionnelle, des puissances coloniales européennes. Si la 
                            <title>Revue de Colonies </title> se montre, de manière générale, très favorable à la nation haïtienne, opposant systématiquement le libéralisme éclairé d’Haïti aux brutalités de la société esclavagiste de Saint-Domingue, elle reste circonspecte quant aux mobilisations dissidentes et à tout acte de résistance violent. La peur de nouvelles révolutions, mais aussi des représailles économiques qu’a connu l’État haïtien après son indépendance, notamment avec l’accord d’indemnisation de 1825, ont servi implicitement et explicitement d’arguments en faveur de la nécessité du régime colonial existant, et la 
                            <title>Revue</title> ne diffère pas, en ce sens, d’autres publications contemporaines. 
                        </p>\n      
                        <p>Braun, Juliane. “Transatlantic Vistas: Changing Alliances at Home and Abroad.” 
                            <title>Creole Drama: Theatre and Society in Antebellum New Orleans.</title> Charlottesville: University of Virginia Press. 2019. 138‑164.
                        </p>\n      
                        <p>Brickhouse, Anna. 
                            <title>Transamerican Literary Relations and Nineteenth-Century Public Sphere. </title>Cambridge: Cambridge University Press, 2004.
                        </p>\n      
                        <p>Johnson, Sara E. 
                            <title>The Fear of French Negroes: Transcolonial Collaboration in the Revolutionary Americas</title>. Berkeley: University of California Press, 2012.
                        </p>\n    
                    </note>\n    
                    <note xml:lang=\"en\" type=\"commentary\">\n      
                        <p>This declaration is remarkable not only for its praise of the Haitian state, but for its indictment of European colonial powers. If the 
                            <title>Revue des Colonies </title> is, in general, very favorable to Haiti, systematically opposing the country’s enlightened liberalism to the brutalities of colonial Saint-Domingue, it remains ambivalent as to the necessity of revolutionary violence. The fear of political instability and economic retribution served explicitly as arguments for the maintenance of the colonial order, and the 
                            <title>Revue </title>does not differ, in this regard, from other contemporary publications.
                        </p>\n      
                        <p>Braun, Juliane. “Transatlantic Vistas: Changing Alliances at Home and Abroad.” 
                            <title>Creole Drama: Theatre and Society in Antebellum New Orleans.</title> Charlottesville: University of Virginia Press. 2019. 138‑164.
                        </p>\n      
                        <p>Brickhouse, Anna. 
                            <title>Transamerican Literary Relations and Nineteenth-Century Public Sphere. </title>Cambridge: Cambridge University Press, 2004.
                        </p>\n      
                        <p>Johnson, Sara E. 
                            <title>The Fear of French Negroes: Transcolonial Collaboration in the Revolutionary Americas</title>. Berkeley: University of California Press, 2012.
                        </p>\n    
                    </note>\n  
                </noteGrp>\n  
                <noteGrp xml:id=\"n411B\">\n    
                    <note xml:lang=\"fr\" type=\"commentaire\">\n      
                        <p>En prônant l’abolition immédiate de l’esclavage, la 
                            <title>Revue des Colonies </title>adopte une position radicale non seulement vis à vis le discours dominant mais aussi l’ensemble du mouvement abolitionniste. Celui-ci préconise en effet une période d’« apprentissage », justifiée par la nécessité de maintenir l’ordre et la productivité agricole. L’
                            <title>Abolition Act</title> Britannique prévoyait ainsi une période de plusieurs années obligeant les nouveaux affranchis à travailler pour leurs anciens maîtres. Ce n’est qu’en 1841, au terme d’un séjour aux Antilles, que Victor Schoelcher, le rédacteur du décret de l’abolition définitive de 1848, n’abandonne sa position gradualiste militer pour une abolition immédiate et définitive.
                        </p>\n      
                        <p>Marcel Dorigny et Alexis Pernsteiner, « Antiesclavagisme, abolitionnisme et abolition en France de la fin du XVIIIe siècle aux années 1840 », 
                            <title>La culture coloniale en France depuis la Révolution</title>, éd. Pascal Blanchard et al. (Bloomington : Indiana University Press, 2014), p. 56–74.
                        </p>\n    
                    </note>\n    
                    <note xml:lang=\"en\" type=\"commentary\">\n      
                        <p>By advocating the immediate abolition of slavery, the 
                            <title>Revue des Colonies </title>adopts a radical position not only vis-à-vis mainstream discourse but also the abolitionist movement at the time, which supported a period of “apprenticeship,” justified by the need to maintain order and agricultural productivity. The British Abolition Act imposed such a period of several years requiring the newly emancipated to work for their former masters. It was not until 1841, at the end of a stay in the French Antilles, that Victor Schoelcher, who drafted the abolition decree of 1848, abandoned his gradualist position and insisted on an immediate and definitive abolition.
                        </p>\n      
                        <p>Dorigny, Marcel and Alexis Pernsteiner. “Antiesclavagisme, abolitionnisme et abolition en France de la fin du XVIIIe siècle aux années 1840,” In 
                            <title>La culture coloniale en France depuis la Révolution</title>. Ed. Pascal Blanchard et al. Bloomington: Indiana University Press, 2014. 56–74.
                        </p>\n    
                    </note>\n  
                </noteGrp>\n  
                <noteGrp xml:id=\"n1FC1\">\n    
                    <note xml:lang=\"fr\" type=\"commentaire\">\n      
                        <p>Ce préambule inscrit le projet de loi dans le prolongement du projet éditorial de la 
                            <title>Revue</title>, ici défini comme un travail avant tout « parlementaire et social ». Ce discours marqué par un engagement humanitaire fort rappelle la « Déclaration de principes » de la première livraison.
                        </p>\n      
                        <p>
                            <ref target=\"RdCv1n1-fr#declaration\">Juillet 1834: Déclaration de principes.</ref>
                        </p>\n    
                    </note>\n    
                    <note xml:lang=\"en\" type=\"commentary\">\n      
                        <p>This preamble presents the bill as an extension of the 
                            <title>Revue</title>’s editorial project, defined here as above all “parliamentary and social” work. The humanitarian rhetoric here recalls the \"Declaration of Principles\" of the inaugural issue.
                        </p>\n      
                        <p>
                            <ref target=\"RdCv1n1-en#declaration\">July 1834: Declaration of principles.</ref>
                        </p>\n    
                    </note>\n  
                </noteGrp>\n  
                <noteGrp xml:id=\"n0380\">\n    
                    <note xml:lang=\"fr\" type=\"commentaire\">\n      
                        <p>Ce premier article renvoie explicitement à l’article 1 de la Déclaration des Droits de l'Homme et du Citoyen de 1789. </p>\n      
                        <p>
                            <ref target=\"RdCv1n1-fr#art1\">Article 1 de la déclaration de principes.</ref>
                        </p>\n    
                    </note>\n    
                    <note xml:lang=\"en\" type=\"commentary\">\n      
                        <p>This first article refers explicitly to Article 1 of the Declaration of the Rights of Man and of the Citizen of 1789.</p>\n      
                        <p>
                            <ref target=\"RdCv1n1-en#art1\">Article 1 of the Declaration of the Rights of Man and of the Citizen.</ref>
                        </p>\n    
                    </note>\n  
                </noteGrp>\n  
                <noteGrp xml:id=\"n3542\">\n    
                    <note xml:lang=\"fr\" type=\"commentaire\">\n      
                        <p>Bissette rejette, en principe, la proposition selon laquelle l’émancipation exigerait le versement d’une indemnité aux anciens propriétaires d’esclaves. L’article 17 de la Déclaration des Droits de l’Homme et du Citoyen, notamment, stipule qu’une indemnité est nécessaire pour toute saisie publique de « biens », et c’est dans ce cadre que s’opérera l’abolition britannique, via le 
                            <title>Slave Compensation Act</title> de 1837. 
                        </p>\n      
                        <p>
                            <ref target=\"RdCv1n1-fr#art17\">Article 17 de la déclaration de principes.</ref>
                        </p>\n    
                    </note>\n    
                    <note xml:lang=\"en\" type=\"commentary\">\n      
                        <p>Bissette rejects in principle the proposition that emancipation should require an indemnity paid to former slave owners. Article 17 of the Declaration of the Rights of Man and of the Citizen, notably, stipulates that an indemnity is necessary for any public seizure of “property,” and this was the framework through which the British abolition would take place, via the Slave Compensation Act of 1837. </p>\n      
                        <p>
                            <ref target=\"RdCv1n1-en#art17\">Article 17 of the Declaration of the Rights of Man and of the Citizen.</ref>
                        </p>\n    
                    </note>\n  
                </noteGrp>\n  
                <noteGrp xml:id=\"n678F\">\n    
                    <note xml:lang=\"fr\" type=\"commentaire\">\n      
                        <p>Puisque, « la liberté ne se vend ni ne s’acquiert », Bissette n’évoque que de manière hypothétique la question des réparations pour les esclaves et leurs descendants — notion, toutefois, si radicale que même l’allusion oblique de Bissette est ici assez provocante. </p>\n      
                        <p>Bessone, Magali et Myriam Cottias, eds. 
                            <title>Lexique des réparations de l’esclavage</title>. Paris: Karthala, 2021. 
                        </p>\n    
                    </note>\n    
                    <note xml:lang=\"en\" type=\"commentary\">\n      
                        <p>Since \"freedom is neither sold nor acquired,\" Bissette only hypothetically raises the question of reparations for slaves and their descendants — a notion, however, so radical that even Bissette's oblique allusion is here quite provocative. </p>\n      
                        <p>Bessone, Magali and Myriam Cottias, eds. 
                            <title>Lexique des réparations de l’esclavage</title>. Paris: Karthala, 2021. 
                        </p>\n    
                    </note>\n  
                </noteGrp>\n  
                <noteGrp xml:id=\"n90C0\">\n    
                    <note xml:lang=\"fr\" type=\"commentaire\">\n      
                        <p>Pour démontrer l’absurdité du débat sur le montant de l’indemnité à verser aux anciens propriétaires, Bissette s’épanche ici sur l’impossibilité de quantifier le prix du travail d’une personne esclavisée. Spécifiquement, il répond à la suggestion que la valeur d’un esclave pourrait être déterminée par la rentabilité de son industrie privée, c’est-à-dire de son travail à titre personnel. En raison de la variabilité du temps libre et des ressources accordées par les propriétaires, une telle évaluation, selon Bissette, serait fondamentalement injuste.</p>\n    
                    </note>\n    
                    <note xml:lang=\"en\" type=\"commentary\">\n      
                        <p>To demonstrate the absurdity of debating the compensation to be paid to former slave owners, Bissette discusses here the impossibility of quantifying the price of the work of an enslaved person. Specifically, he responds to the suggestion that the value of a slave might be determined by the profitability of his private industry, that is, of his work in a personal capacity. Due to the variability of free time and resources afforded by owners, such an assessment, according to Bissette, would be fundamentally unfair.</p>\n    
                    </note>\n  
                </noteGrp>\n  
                <noteGrp xml:id=\"n435A\">\n    
                    <note xml:lang=\"fr\" type=\"commentaire\">\n      
                        <p>La légitimité incontestée de l’autorité coloniale française est ici en référence à 
                            <ref target=\"RdCv1n1-fr#art3\">l’article 3 de la Déclaration des Droits de l’Homme et du Citoyen</ref>. Les difficultés que peut entraîner l’abolition du système esclavagiste sont une allusion claire à Haïti et aux conséquences politiques et économiques qui ont suivi son indépendance. 
                        </p>\n    
                    </note>\n    
                    <note xml:lang=\"en\" type=\"commentary\">\n      
                        <p>The unquestioned legitimacy of France’s colonial authority is here in reference to 
                            <ref target=\"RdCv1n1-en#art3\">article 3 of the Declaration of the Rights of Man and of the Citizen</ref>. In citing \"the difficulties which the transition from the old to the new state produced by the abolition of slavery may present,” Bissette also alludes to Haiti and the devastating economic consequences of its having to manage abolition, independence, war, and embargo all at once. 
                        </p>\n    
                    </note>\n  
                </noteGrp>\n  
                <noteGrp xml:id=\"n49AF\">\n    
                    <note xml:lang=\"fr\" type=\"contexte_historique\">\n      
                        <p>Ici, la 
                            <title>Revue </title>distingue son propre projet de loi de celui, favorable à l’indemnité, proposé par la
                            <title> Société française pour l’abolition de l’esclavage</title>, et donc par Isambert et Schoelcher, quelques semaines auparavant. Un article intitulé « Examen des projets de loi de la Société française pour l’abolition de l’esclavage » paru à la livraison précédente (juin 1835,  p. 9-10), critique vivement ce projet de loi fondé sur un système de « rachat » que Bissette éstime fondamentalement contraire au principe de liberté. Dans les années qui suivent l’abolition de 1848, des indemnités seront finalement versées aux anciens propriétaires d’esclaves avec la stipulation qu’une partie des fonds couvre le salaire des émancipés, mais cette disposition était pourvue d’une brèche législative. 
                        </p>\n      
                        <p>Balguy, Jessica. 
                            <title>Indemniser l'esclavage en 1848 ? Débats dans l’Empire français du XIX siècle</title>, Paris, Karthala / CIRESC. 2020. 
                        </p>\n      
                        <p>Bessone, Magali et Myriam Cottias, eds. 
                            <title>Lexique des réparations de l’esclavage</title>. Paris: Karthala. 2021. 
                        </p>\n      
                        <p>Nelly Schmidt, 
                            <title>L’engrenage de La Liberté : Caraïbes XIXe</title>. Aix-en-Provence : Publications de l’Université de Provence, 1995
                        </p>\n    
                    </note>\n    
                    <note xml:lang=\"en\" type=\"historical_context\">\n      
                        <p>Here, the Review distinguishes its own bill from the one proposed by the French Society for the Abolition of Slavery (including Isambert and Schoelcher) a few weeks prior, which was favorable to indemnities. An article published in the preceding issue (June 1835), entitled “Examen des projets de loi de la Société francaise pour l’abolition de l’esclavage” [“An examination of the bills drafted by the French Society for the Abolition of Slavery”, 9-10] strongly criticizes this bill founded on a “buyout” system, which Bissette believed to be fundamentally opposed to the concept of liberty.</p>\n      
                        <p>In the years following the emancipation of 1848, indemnities would ultimately be paid out to former slave owners with a stipulation that part of the funds be used to pay the emancipated as free laborers, but this provision was hardly ironclad. </p>\n      
                        <p>Balguy, Jessica. 
                            <title>Indemniser l'esclavage en 1848 ? Débats dans l’Empire français du XIX siècle</title>, Paris: Karthala / CIRESC, 2020. 
                        </p>\n      
                        <p>Bessone, Magali and Myriam Cottias, eds. 
                            <title>Lexique des réparations de l’esclavage</title>. Paris: Karthala. 2021. 
                        </p>\n      
                        <p>Nelly Schmidt, 
                            <title>L’engrenage de La Liberte: Caraibes XIXe</title>. Aix-en-Provence : Publications de l'Université de Provence, 1995.
                        </p>\n    
                    </note>\n  
                </noteGrp>\n  
                <noteGrp xml:id=\"n3F04\">\n    
                    <note xml:lang=\"fr\" type=\"contexte_historique\">\n      
                        <p>L'éducation des personnes esclavisées étant interdite sous le 
                            <title>Code Noir</title>, elle se trouve au cœur du projet émancipateur de Bissette qui, avant de fonder la 
                            <title>Revue</title>, a été membre de l’
                            <title>Association libre pour l’éducation du peuple</title>. L’article 4 du projet de loi pour l’abolition préconise ainsi l’éducation gratuite et obligatoire dans les colonies jusqu’à l’âge de 21 ans. Cette mesure se distingue sensiblement de celle comprise dans l’
                            <title>Abolition Act </title>Britannique qui imposait une éducation morale et spirituelle dans le cadre d’une période d’apprentissage de plusieurs années avant de procéder à une émancipation définitive.
                        </p>\n      
                        <p>Draper, Nicholas. 
                            <title>The Price of Emancipation. Slave-Ownership, Compensation and British Society at the End ofSlavery</title>. Cambridge: Cambridge University Press. 2013.
                        </p>\n      
                        <p>Ursulet, Léo. « Les francs-maçons et l’abolition de l’esclavage aux Antilles Françaises », 
                            <title>Humanisme</title> 310, no. 1, 2016, p.87–91.
                        </p>\n      
                        <p>Jennings, Lawrence C. « Cyrille Bissette, Radical Black French Abolitionist », French History. 1 mars 1995, vol.9 no 1. p. 52.</p>\n    
                    </note>\n    
                    <note xml:lang=\"en\" type=\"historical_context\">\n      
                        <p>Because the education of enslaved people was forbidden under the 
                            <title>Code Noir</title>; it was, therefore, central to the emancipatory project of the 
                            <title>Revue</title>, and of Bissette, who, prior to founding the journal, had been a member of the 
                            <title>Association libre pour l'éducation du peuple</title>. In calling for free and compulsory education in the colonies until the age of 21, the 
                            <title>Revue</title>'s bill for immediate abolition differs substantially from the British Abolition Act of 1833, which included an the “apprenticeship” provision requiring formerly enslaved people to work for their former masters for several years while receiving “moral and spiritual education” until their ultimate enfranchisement. 
                        </p>\n      
                        <p>Draper, Nicholas. 
                            <title>The Price of Emancipation. Slave-Ownership, Compensation and British Society at the End ofSlavery</title>. Cambridge: Cambridge University Press. 2013.
                        </p>\n      
                        <p>Ursulet, Léo. “Les francs-maçons et l’abolition de l’esclavage aux Antilles Françaises.” 
                            <title>Humanisme</title> 310, no. 1 (2016): 87–91. (https://doi.org/10.3917/huma.310.0087)
                        </p>\n      
                        <p>Jennings, Lawrence C. “Cyrille Bissette, Radical Black French Abolitionist,” 
                            <title>French History</title> 9, no. 1 (1995). 52.
                        </p>\n    
                    </note>\n  
                </noteGrp>\n  
                <noteGrp xml:id=\"nA4C7\">\n    
                    <note xml:lang=\"fr\" type=\"contexte_historique\">\n      
                        <p>Par cette identification du métissage comme condition nécessaire à l’accession à une société post-esclavagiste, Bissette s’oppose à la stigmatisation persistante des personnes d’ascendance mixte comme traîtres des autres races. Cette idée est devenue particulièrement omniprésente après la Révolution haïtienne, notamment dans littérature avec le roman de Victor Hugo, 
                            <title>Bug Jargal </title>(1826). Dans les années 1840, cette question sera au cœur de la querelle de Bissette avec Victor Schoelcher, qui qualifiait les Haïtiens métis de « faction jaune » oeuvrant contre la cause de la libération des Noirs.
                        </p>\n      
                        <p>Chris Bongie, 
                            <title>Islands and Exiles: The Creole Identities of Post/colonial Literature</title>. Stanford, Calif: Stanford University Press, 1998. 262-287.
                        </p>\n      
                        <p>Marlene L. Daut, 
                            <title>Tropics of Haiti</title>. Liverpool: Liverpool University Press, 2015. 524-567.
                        </p>\n    
                    </note>\n    
                    <note xml:lang=\"en\" type=\"historical_context\">\n      
                        <p>In explicitly identifying 
                            <title>metissage</title> as a necessary condition to the accession of a post-slavery future, Bissette is countering a persistent stigmatization of mixed race people as self-interested and incapable of allegiance with either race. This trope became particularly ubiquitous after the Haitian Revolution, appearing in popular literature like Victor Hugo’s early novel 
                            <title>Bug Jargal </title>(1826). In the 1840’s, such prejudice would be central to Bissette’s feud with Victor Schoelcher, who referred to mixed race Haitians as a “yellow faction” working against the cause of Black liberation. 
                        </p>\n      
                        <p>Bongie, Chris. 
                            <title>Islands and Exiles: The Creole Identities of Post/colonial Literature</title>. Stanford, Calif: Stanford University Press, 1998.  262-287.
                        </p>\n      
                        <p>Daut, Marlene L. 
                            <title>Tropics of Haiti</title>. Liverpool: Liverpool University Press, 2015. 524-567.
                        </p>\n    
                    </note>\n  
                </noteGrp>\n  
                <noteGrp xml:id=\"n8414\">\n    
                    <note xml:lang=\"fr\" type=\"référence_culturelle\">\n      
                        <p>En 1835, un ouvrage intitulé 
                            <title>Haïti ou renseignements authentiques sur l’abolition de l’esclavage et ses résultats à Saint-Domingue et à la Guadeloupe </title>est imprimé à Paris, sa page de titre l’identifiant comme la traduction anglaise d’un ouvrage de l’abolitionniste écossais Zachary Macaulay. Cette étude ne semble, cependant, pas avoir été publiée en anglais, avec des spécialistes suggérant Thomas Clarkson comme véritable auteur principal, avec la contribution de Macaulay.
                        </p>\n      
                        <p>Bissainthe, Max. 
                            <title>Dictionnaire De Bibliographie Haitienne</title>. Washington: The Scarecrow Press, 1951. p. 32.
                        </p>\n    
                    </note>\n    
                    <note xml:lang=\"en\" type=\"cultural_reference\">\n      
                        <p>In 1835, a work titled 
                            <title>Haïti ou renseignements authentiques sur l'abolition de l'esclavage et ses résultats à Saint-Domingue et à la Guadeloupe </title>was printed in Paris, with its title page identifying it as a translation of an English language work by the Scottish abolitionist Zachary Macaulay. This work, however, does not appear to have been published in English, and Max Bissainthe has suggested that Thomas Clarkson is the actual primary author, with Macaulay contributing.
                        </p>\n      
                        <p>Bissainthe, Max. 
                            <title>Dictionnaire De Bibliographie Haitienne</title>. Washington: The Scarecrow Press, 1951. 32.
                        </p>\n    
                    </note>\n  
                </noteGrp>\n  
                <noteGrp xml:id=\"n2B16\">\n    
                    <note xml:lang=\"en\" type=\"translation_note\">\n      
                        <p>The territories under French authority in the Caribbean, which at the time of the 
                            <title>Revue</title>’s publication included the colonies of Martinique and Guadeloupe. 
                        </p>\n    
                    </note>\n  
                </noteGrp>\n  
                <noteGrp xml:id=\"n17AB\">\n    
                    <note xml:lang=\"en\" type=\"translation_note\">\n      
                        <p>The original uses the word “century” rather than “age,” referring to the eighteenth century, which is generally associated, in France, with the spread of concepts such as natural rights and natural law.</p>\n    
                    </note>\n  
                </noteGrp>\n  
                <noteGrp xml:id=\"n4F06\">\n    
                    <note xml:lang=\"en\" type=\"translation_note\">\n      
                        <p>The 
                            <title>Revue</title> uses the term “noir” (“black”) more frequently than the derogatory term “nègre” (“negro”), a distinction that closely parallels contemporary English. In cases where the substantive adjective “les noirs,” or “blacks”/“the blacks” is used, I have preserved this form both for the sake of accuracy and because these terms do not carry the same derogatory connotations in contemporary French as in contemporary English. 
                        </p>\n    
                    </note>\n  
                </noteGrp>\n  
                <noteGrp xml:id=\"n1542\">\n    
                    <note xml:lang=\"en\" type=\"translation_note\">\n      
                        <p>The term used throughout this issue is “cultivateurs,” that is to say, emancipated people performing agricultural labor.</p>\n    
                    </note>\n  
                </noteGrp>\n  
                <noteGrp xml:id=\"n09EC\">\n    
                    <note xml:lang=\"en\" type=\"translation_note\">\n      
                        <p>In context, the French term “restauration” also calls to mind the restoration of the monarchy (following the fall of Napoleon) in 1814, and the failure of Revolutionary ideals to take hold.</p>\n    
                    </note>\n  
                </noteGrp>\n  
                <noteGrp xml:id=\"n07F3\">\n    
                    <note xml:lang=\"en\" type=\"translation_note\">\n      
                        <p>The French term here is “denrée,” literally commodity or merchandise, a deliberately degrading way of referring to enslaved people that ventriloquizes the thinking of the plantation owner. </p>\n    
                    </note>\n  
                </noteGrp>\n
            </noteGrp>\n         
            <div xml:id=\"entities\">\n  
                <listPerson>\n    
                    <person xml:id=\"RL\">\n      
                        <persName>Pierre-François Honoré Richard de Lucy de Fossarieu</persName>\n      
                        <note resp=\"#abel\" xml:lang=\"fr\">\n        
                            <p>\n          Né à Saint-Pierre le 18 décembre 1790, il y décède le 1
                                <hi rend=\"superscript\">er</hi> février 1839 à l’âge de 48 ans. Ce blanc créole appartenait à une riche famille de colons de la Martinique. Son père Xavier Lucy de Fossarieu fut d’ailleurs capitaine d’infanterie. Richard de Lucy de Fossarieu épousa le 3 février 1814 Claire Elisabeth Eyma, blanche créole dont la famille était apparentée à son futur époux par sa mère Hélène de Lussy de Fossarieu. Il fut conseiller à la Cour royale de la Martinique en 1821, procureur général par intérim de 1822 à 1824 et président du Conseil général en 1830. C’est lui qui fit exécuter l’arrêt de condamnation contre Cyrille Bissette en janvier 1824.\n        
                            </p>\n        
                            <bibl>\n          Françoise Thésée, « La Révolte des esclaves du Carbet à la Martinique (octobre-novembre 1822) », 
                                <title>Revue Française d’Histoire d’Outre-Mer</title>, tome 80, n° 301, 4e trimestre 1993, pp. 551-584 [note 54, p. 568]. DOI : 
                                <ref target=\"https//doi.org/10.3406/outre.1993.3148\">https//doi.org/10.3406/outre.1993.3148</ref>. \n        
                            </bibl>\n      
                        </note>\n      
                        <note resp=\"#abel\" xml:lang=\"en\">\n        
                            <p>\n          Born in Saint-Pierre on December 18, 1790 and died in the same town on February 1, 1839, at the age of 48, Pierre-François Honoré Richard de Lucy de Fossarieu belonged to an affluent settler family in colonial Martinique, with his father, Xavier Lucy de Fossarieu, holding the rank of infantry captain. On February 3, 1814, he married Claire Elisabeth Eyma, a fellow white Creole, whose family had ties to his through her mother Hélène de Lussy de Fossarieu. He served as a counselor at the Royal Court of Martinique in 1821 and President of the General Council in 1830, following his tenure as interim Attorney General from 1822 to 1824, in which capacity he oversaw the execution of the verdict of condemnation against Cyrille Bissette in January 1824. \n        </p>\n        
                            <bibl>\n          Françoise Thésée, “La Révolte des esclaves du Carbet à la Martinique (octobre-novembre 1822)”, 
                                <title>Revue Française d’Histoire d’Outre-Mer</title>, 80-301, 1993, 551-584 [n. 54, 568]. DOI: 
                                <ref target=\"https//doi.org/10.3406/outre.1993.3148\">https//doi.org/10.3406/outre.1993.3148</ref>. \n        
                            </bibl>\n      
                        </note>\n    
                    </person>\n    
                    <person xml:id=\"DES\">\n      
                        <persName>Pierre Dessalles</persName>\n      
                        <note resp=\"#abel\" xml:lang=\"fr\">\n        
                            <p>\n          Né à Castillonnès dans le département du Lot-et-Garonne, il décède le 5 mars 1857 à Brest à l’âge de 71 ans. Pierre François Marie Dieudonné Dessalles, plus connu en tant que Pierre Dessalles, était le fils de Régis Dessalles et de Manon d’Albis de Gissac. Marié le 6 octobre 1808 à Fort-Royal, capitale administrative de la colonie de la Martinique, à Anna Bence de Sainte-Catherine, blanche créole du Lamentin, Pierre Dessalles, bien que métropolitain, fut l’archétype du colon blanc par sa famille paternelle et maternelle, ainsi que par son alliance matrimoniale. Il fit une carrière dans la magistrature en tant que conseiller à la Cour d’appel de la Martinique (assesseur le 4 janvier 1809, titulaire le 4 janvier 1812). C’est à ce titre qu’il prit part à l’affaire Bissette (1823-1824) et fit condamner Cyrille Auguste Bissette aux galères à perpétuité et à être marqué au fer rouge des lettres GAL (Galérien). Puis, il fut conseiller à la Cour royale de la Martinique le 5 octobre 1828. Il fut aussi capitaine dans les milices de la colonie le 25 février 1829. Nommé ensuite procureur général par intérim à la Cour d’appel le 16 juin 1831, il fut démissionnaire le 31 juillet suivant, suspendu le 4 août 1832, et destitué le 19 septembre 1832. L’homme fut aussi propriétaire d’habitations, sucrerie et caféière à Sainte-Marie, commune du nord atlantique de la Martinique. Fin connaisseur de la société coloniale esclavagiste de la Martinique, il s’épancha sur cette dernière dans son ouvrage intitulé « La Vie d’un colon à la Martinique au XIX
                                <hi rend=\"superscript\">e</hi> siècle » (1808-1856) dans lequel il revint sur plusieurs évènements marquants comme les révoltes d’esclaves (ou plus exactement d’esclavisés) en 1811 et 1831, l’affaire Bissette en 1823-1824, l’affaire de la Grande Anse en 1833 et les prémices de l’abolition de l’esclavage en Martinique.\n        
                            </p>\n        
                            <bibl>\n          Henri de Frémont, 
                                <title>Histoire et généalogie de la famille Dessalles ou Des Salles</title>, 
                                <ref target=\"https://gw.geneanet.org/pierfit?lang=fr&amp;p=pierre&amp;n=dessalles&amp;oc=3\">https://gw.geneanet.org/pierfit?lang=fr&amp;p=pierre&amp;n=dessalles&amp;oc=3</ref>. \n        
                            </bibl>\n        
                            <bibl>\n          Abel Alexis Louis, 
                                <title>Marchands et négociants de couleur à Saint-Pierre (1777-1830) : milieux socioprofessionnels, fortune et mode de vie</title>, Paris, L’Harmattan, 2015.\n        
                            </bibl>\n      
                        </note>\n      
                        <note resp=\"#abel\" xml:lang=\"en\">\n        
                            <p>\n          Pierre François Marie Dieudonné Dessalles, better known as Pierre Dessalles, was born in Castillonnès, in the department of Lot-et-Garonne and died at the age of 71 on March 5, 1857, in Brest. The son of Régis Dessalles and Manon d’Albis de Gissac, he married Anna Bence de Sainte-Catherine, a white Creole from Le Lamentin, in Fort-Royal, the administrative capital of the Martinique colony on October 6, 1808.\n        </p>\n        
                            <p>\n          Despite his metropolitan origin, Pierre Dessalles became the epitome of a white settler due to his family background and marital alliance. He pursued a career in the judiciary as a counselor at the Court of Appeal of Martinique, initially as an assessor on January 4, 1809, and later as a full counselor on January 4, 1812. In this capacity, he played a role in the Bissette case (1823-1824), securing the conviction of Cyrille Auguste Bissette to life imprisonment with hard labor and branding with the letters GAL (Galley Slave).\n        </p>\n        
                            <p>\n          Subsequently, he assumed the role of counselor at the Royal Court of Martinique on October 5, 1828, and also held the position of captain in the colony's militias starting from February 25, 1829. However, his tenure as interim Attorney General at the Court of Appeal, which began on June 16, 1831, was short-lived, as he resigned on July 31 of the same year, was suspended on August 4, 1832, and ultimately dismissed on September 19, 1832.\n        </p>\n        
                            <p>\n          Beyond his legal career, Pierre Dessalles owned plantations, sugar refineries, and coffee estates in Sainte-Marie, a town in the north Atlantic region of Martinique. Familiar with intricacies of Martinique’s colonial slave society, he explored the subject in his book “Life of a Settler in Martinique in the 19th Century” (1808-1856). This publication explored significant events such as the uprisings of enslaved people in 1811 and 1831, the Bissette affair of 1823-1824, the Grande Anse affair of 1833, and the early stages of the abolition of slavery in Martinique.\n        </p>\n        
                            <bibl>\n          Henri de Frémont, 
                                <title>Histoire et généalogie de la famille Dessalles ou Des Salles</title>, 
                                <ref target=\"https://gw.geneanet.org/pierfit?lang=fr&amp;p=pierre&amp;n=dessalles&amp;oc=3\">https://gw.geneanet.org/pierfit?lang=fr&amp;p=pierre&amp;n=dessalles&amp;oc=3</ref>. \n        
                            </bibl>\n        
                            <bibl>\n          Abel Alexis Louis, 
                                <title>Marchands et négociants de couleur à Saint-Pierre (1777-1830) : milieux socioprofessionnels, fortune et mode de vie</title>, Paris, L’Harmattan, 2015.\n        
                            </bibl>\n      
                        </note>\n    
                    </person>\n    
                    <person xml:id=\"LaF\">\n      
                        <persName>Gilbert du Motier, marquis de Lafayette</persName>\n      
                        <birth>1757</birth>\n      
                        <death>1834</death>\n      
                        <note resp=\"#greg\" xml:lang=\"fr\">\n        
                            <p>\n          Issu de la noblesse fortunée, Marie-Joseph Paul Yves Roch Gilbert du Motier naît en 1757 en Auvergne, où il grandit avant de poursuivre ses études à Paris au collège du Plessis (futur lycée Louis le Grand). Suivant la tradition familiale il poursuit une carrière militaire et devient officier de cavalerie. Informé des troubles agitant les colonies anglaises d’Amérique du Nord, Lafayette rejoint les insurgés, faisant usage de sa colossale fortune personnelle pour soutenir l’effort de guerre. Son engagement fait de lui un héros des deux côtés de l’Atlantique. Il participe aux discussions menant au Traité de Paris en 1783, et se voit nommé maréchal de camp par Louis XVI. Connu pour ses convictions progressistes, il est un des rares représentants de la noblesse à prêter serment au Jeu de Paume aux États-Généraux de 1789. Il rédige dans les journées qui suivent le premier jet de la Déclaration des Droits de l’Homme et du Citoyen. \n        </p>\n        
                            <p>\n          Nommé à la tête de la Garde Nationale, Lafayette perd en  popularité durant la Constituante du fait de sa position modérée. Décrié par les royalistes et déclaré traître à la nation à l’Assemblée, il s’exile  en août 1792. De retour en France en 1800, après des années d’emprisonnement et d’exil, son opposition à Napoléon reste silencieuse jusqu’aux Cent Jours; élu à la Chambre, il joue un rôle clé dans la seconde abdication. Il devient chef de file de l’opposition de gauche sous Louis XVIII. Après une tournée triomphale aux États-Unis entre 1824 et 1825, il reprend son rôle dans l’opposition démocratique aux velléités absolutistes de Charles X. Au premier rang de la révolution de Juillet, il apporte soutien à Louis-Philippe, contribuant à faire accepter la monarchie parlementaire. La rapide dérive autocratique du nouveau régime pousse Lafayette de nouveau dans l’opposition. Il meurt d’une pneumonie en 1834, après avoir assisté à l’enterrement de François-Charles Dulong, député d’extrême-gauche tué en duel par le général Bugeaud.  \n        </p>\n        
                            <p>\n          La nécrologie de Lafayette publiée dans le premier numéro de la 
                                <title>Revue des Colonies</title> souligne l’engagement abolitionniste de l’homme d’état, qui semble dater de sa visite aux États-Unis. Une lettre à George Washington datant de 1783, le montre essayant de convaincre le général américain de se joindre à lui pour acquérir une plantation qui emploierait des affranchis. Si Washington n’en fit rien, Lafayette mit ce projet en place deux années plus tard, dans une plantation de Guyane. Il fut parmi les premiers membres de la Société des Amis des Noirs, fondée en France en 1788, et se prononça à la Constituante en faveur des droits civiques pour les gens de couleur. La carrière politique de Lafayette sera caractérisée jusque dans les dernières années de sa vie par un des prises de position en soutien aux efforts abolitionnistes, modérés comme radicaux. Il deviendra notamment vice-président à vie de l’American Colonization Society, combattra la traite clandestine, et se positionnera en soutien à Haïti avant même que le pays ne soit officiellement reconnu par la France. \n        
                            </p>\n        
                            <bibl>\n          Étienne Taillemitte, « La Fayette et l’abolition de l’esclavage », 
                                <title>L'esclave et les plantations : de l'établissement de la servitude à son abolition. Hommage à Pierre Pluchon</title>. Rennes : Presses universitaires de Rennes, 2009 (généré le 28 septembre 2023). 
                                <ref target=\"http://books.openedition.org/pur/97682\">http://books.openedition.org/pur/97682</ref>.\n        
                            </bibl>\n      
                        </note>\n      
                        <note resp=\"#greg\" xml:lang=\"en\">\n        
                            <p>\n          Born into an aristocratic family in Auvergne in 1757, Marie-Joseph Paul Yves Roch Gilbert du Motier spent his early years there before moving to Paris to study at the Collège du Plessis, which would later become Louis-le-Grand high school. Following his family's tradition, he embarked on a military career, eventually becoming a cavalry officer.\n        </p>\n        
                            <p>\n          Upon learning of the unrest in the English colonies of North America, Lafayette joined the rebels, using his substantial personal wealth to fund the war effort. His involvement in the war earned him a heroic reputation on both sides of the Atlantic. He was involved in the discussions that led to the Treaty of Paris in 1783 and was later appointed field marshal by Louis XVI. Known for his progressive views, he was one of the few nobles to take the oath at the Jeu de Paume during the Estates-General of 1789, signaling the start of the French Revolution. In the days that followed, he penned the original draft Declaration of the Rights of Man and of the Citizen.\n        </p>\n        
                            <p>\n          Lafayette was appointed commander of the National Guard, but his popularity waned during the Constituent Assembly due to his moderate stance. Criticized by the royalists and branded a traitor by the Assembly, he was forced into exile in August 1792 and immediately captured. After enduring years of imprisonment and exile, he returned to France in 1800. He generally concealed his opposition to Napoleon, avoiding politics for most of his reign. After Napoleon's escape from Elba, Lafayette was elected to the Chamber of Deputies during the early Restoration and during Napoleon’s short-lived return. Lafayette played a crucial role in securing Napoleon's second abdication. Under Louis XVIII, Lafayette led the left-wing opposition. Following a year-long tour of the United States between 1824 and 1825, he resumed his role in the democratic opposition during Charles X's reign. He was also a leading figure in the July Revolution of 1830, publicly backing Louis-Philippe and aiding in the establishment of a parliamentary monarchy. However, Lafayette soon grew disenchanted with the new regime as it quickly turned autocratic. He died of pneumonia in 1834 after attending the funeral of François-Charles Dulong, a far-left deputy who was killed in a duel by General Thomas Robert Bugeaud.\n        </p>\n        
                            <p>\n          Lafayette's obituary, published in the inaugural issue of the Revue des Colonies, highlighted his commitment to abolitionism, which appears to have grown out of his first visit to the United States. In a 1783 letter to George Washington, Lafayette proposed that they jointly purchase a plantation to employ freed slaves. Although Washington did not agree, Lafayette carried out this plan two years later on a plantation in Guyana. He was one of the founding members of the abolitionist Société des Amis des Noirs in France in 1788 and advocated for civil rights for people of color at the Constituent Assembly. Throughout his political career, Lafayette consistently supported abolitionist causes, even radical ones. He served as the lifelong vice-president of the American Colonization Society, frequently spoke out against the illegal slave trade in the French parliament, and expressed his support for Haiti years before France officially recognized the country in 1825.\n        </p>\n        
                            <bibl>\n          Étienne Taillemitte, “La Fayette et l’abolition de l’esclavage,” 
                                <title>L'esclave et les plantations : de l'établissement de la servitude à son abolition. Hommage à Pierre Pluchon</title>. Presses universitaires de Rennes, 2009. 
                                <ref target=\"http://books.openedition.org/pur/97682\">http://books.openedition.org/pur/97682</ref>.\n        
                            </bibl>\n      
                        </note>\n    
                    </person>\n    
                    <person xml:id=\"CB\">\n      
                        <persName>Cyrille Bissette</persName>\n      
                        <note resp=\"#masha\" xml:lang=\"fr\">\n        
                            <figure>\n          
                                <graphic url=\"portrait_Bissette.jpg\"/>\n          
                                <figDesc>Portrait de Cyrille Bissette. Courtesy of the Schomburg Center for Research in Black Culture</figDesc>\n        
                            </figure>\n        
                            <p>Né à Fort-Royal (Martinique) le 9 juillet 1795, Cyrille Charles Auguste Bissette est le fondateur et rédacteur en chef de la 
                                <title>Revue des Colonies</title>, premier organe de presse à plaider publiquement pour une abolition immédiate.
                            </p>\n        
                            <p>Ses parents Charles Borromée Bissette et Elizabeth Mélanie Bellaine, étaient libres de couleur. Par sa mère, la fille naturelle de Joseph-Gaspard de Tascher de La Pagerie, Cyrille Bissette est un neveu de Joséphine de Beauharnais.</p>\n        
                            <p>En 1816, Bissette épouse Augustine Séverin, une femme de couleur libre, avec qui il a quatre enfants. Négociant et propriétaire d’esclaves, il n’est pas encore engagé dans le mouvement antiesclavagiste, participant, en 1822, à la répression de la révolte du Carbet. Quelque mois plus tard, cependant, il est arrêté, ainsi que six autres hommes de couleur libres — Montlouis Thébia, Joseph Richer, Joseph Millet, Laborde, Louis Fabien, fils et Jean-Baptiste Volny — pour détention et distribution présumées d’un pamphlet séditieux imprimé à Paris, 
                                <title>De la situation des homme de couleur libre aux Antilles françaises </title>(que Bissette aurait écrit). 
                            </p>\n        
                            <p>Jugés comme meneurs présumés d’un complot visant à renverser l’organisation ségrégationniste de la société martiniquaise, Bissette, Fabien 
                                <title>fils </title>et Volny sont marqués au fer rouge et condamnés aux galères à perpétuité. En 1827, avec l’aide de l’avocat François Isambert, Bissette voit sa peine réduite à dix ans de bannissement et les frais juridiques de la procédure, qui demeureront un fardeau important. Bénéficiant d’une importante couverture médiatique, la dénommée « Affaire Bissette » donne l’impulsion à sa carrière politique. 
                            </p>\n        
                            <p>A Paris, Bissette participe aux Trois Glorieuses ce qui lui vaudra d’être décoré de la Croix de Juillet, fréquente les cercles républicains comme l’
                                <title>Association libre pour l'éducation du peuple</title>, rejoint une loge maçonnique, publie plusieurs pétitions à visée émancipatrice, et fonde la 
                                <title>Revue des Colonies, </title>organe de presse pour ses plaidoyers pour une abolition totale et immédiate de l'esclavage. Cette position radicale le met en porte-à-faux avec la majorité de la communauté abolitionniste française,dont Victor Schoelcher. \\
                            </p>\n        
                            <p>La distance entre les deux abolitionnistes tourne au conflit après la publication 
                                <title>Des Colonies Françaises </title>de Schoelcher, que Bissette critique sévèrement pour sa caractérisation stigmatisante - allant jusqu’au racisme décomplexé - de la population de couleur libre des Antilles.  Occulté par le culte de Schoelcher dans la bourgeoisie intellectuelle assimilationniste, Cyrille Bissette est rejeté de la mémoire collective pour sa plateforme réconciliationniste et son alliance stratégique avec un planteur blanc aux élections législatives de 1849. 
                            </p>\n        
                            <bibl>Bongie, Chris. “1835, ou ‘Le troisième cycle’: The Creole Afterlives of Cyrille-Charles Auguste Bissette, Louis de Maynard de Queilhe, and Victor Schoelcher.” In 
                                <title>Islands and Exiles: The Creole Identities of Post/Colonial Literature</title>. Stanford: Stanford University Press, 1998. 264-287, 323-340.
                            </bibl>\n        
                            <bibl>Bongie, Chris. “A Street Named Bissette: Assimilating the Cent-cinquantenaire of the Abolition of Slavery in Martinique (1848–1998).” In 
                                <title>Friends and Enemies, </title>vol.3. Liverpool: Liverpool University Press. 2008. 185‑220. 
                            </bibl>\n        
                            <bibl>Jennings, Lawrence C. “Cyrille Bissette,  Radical Black French Abolitionist.” French History 9.1 (1995): p. 48-66 </bibl>\n        
                            <bibl>Jennings, Lawrence C.  
                                <title>French Anti-Slavery: The Movement for the Abolition of Slavery in France, 1802-1848</title>. Cambridge: Cambridge University Press, 2000. 29-37, 49-50, 71-73, 266-69. 
                            </bibl>\n        
                            <bibl>Mesnard, Eric. “Les Mouvements de Résistance dans les colonies franchisées : L'affaire Bissette (1823-1827).” In 
                                <title>The Abolitions of Slavery : From Leger Felicite Sonthonax to Victor Schoelcher, 1793, 1794, 1848</title>, edited by Marcel Dorigny. Paris: UNESCO, 2003. 293-97.
                            </bibl>\n        
                            <bibl>Pâme, Stella. 
                                <title>Cyrille Bissette: un martyr de la liberté</title>. Fort-de-France, Martinique: Editions Désormeaux, 1999.
                            </bibl>\n      
                        </note>\n      
                        <note resp=\"#masha\" xml:lang=\"en\">\n        
                            <figure>\n          
                                <graphic url=\"portrait_Bissette.jpg\"/>\n          
                                <figDesc>Portrait de Cyrille Bissette. Courtesy of the Schomburg Center for Research in Black Culture</figDesc>\n        
                            </figure>\n        
                            <p>Born in Fort-Royal (now Fort-de-France, Martinique) on July 9, 1795, Cyrille Charles Auguste Bissette was the founder and editor-in-chief of the Revue des Colonies, the first French press outlet to advocate for immediate and total abolition. His parents, Charles Borromée Bissette and Elizabeth Mélanie Bellaine, were free people of color, and his mother was the illegitimate daughter of Joseph-Gaspard de Tascher de La Pagerie, making Bissette a nephew of Empress Joséphine de Beauharnais.</p>\n        
                            <p>In 1816, Bissette married Augustine Séverin, a free woman of color, with whom he had four children. During these early years in Fort-Royal, Bissette was not engaged in abolitionist activities, and was in fact himself a slaveowner, taking part, in 1822, in the suppression of a slave revolt in the village of Le Carbet. The following year, however, he was arrested, along with six other free men of color — Montlouis Thébia, Joseph Richer, Joseph Millet, Laborde, Louis Fabien, 
                                <title>fils</title> and Jean-Baptiste Volny — for possession and alleged distribution of a seditious pamphlet printed in Paris, entitled 
                                <title>De la situation des hommes de color libre aux Antilles françaises </title>(which Bissette was alleged to have written). 
                            </p>\n        
                            <p>Accused as architects of a plot to overthrow the segregationist organization of Martinican society, Bissette, Fabien, 
                                <title>fils</title> and Volny were branded and sentenced to the galleys for life. In 1827, with the help of attorney François Isambert, Bissette’s sentence was reduced to ten years’ banishment and the legal costs of the proceedings, which would remain a substantial burden. Garnering significant media coverage, the so-called 
                                <title>Affaire Bissette </title>catalyzed his political career. 
                            </p>\n        
                            <p>In Paris, Bissette participated in the 
                                <title>Trois Glorieuses </title>(“the three glorious days” of riots that led to the end of the reign of Charles X and the restored Bourbon dynasty), which earned him the decoration of the July Cross, frequented Republican circles such as the 
                                <title>Free Association for the Education of the People</title>, joined a Masonic lodge, published several emancipatory petitions, and founded the 
                                <title>Revue des Colonies, </title>a press organ for the cause of the total and immediate abolition of slavery. This radical position would put him at odds with the majority of the French abolitionist community, including Victor Schoelcher, the eventual author of the 1848 decree. The distance between these two abolitionists develops into a rivalry after the publication of Schoelcher’s 
                                <title>Des Colonies Françaises</title>, which Bissette harshly criticizes for its stigmatizing, indeed, uninhibitedly racist, characterization of the free population of color of the Antilles. Overshadowed by the cult of Schoelcher in the assimilationist intellectual bourgeoisie, Bissette is deliberately written out of abolitionist history for his later reconciliationist platform and his strategic alliance with a white planter in the legislative elections of 1849. 
                            </p>\n        
                            <bibl>Bongie, Chris. “1835, ou ‘Le troisième cycle’: The Creole Afterlives of Cyrille-Charles Auguste Bissette, Louis de Maynard de Queilhe, and Victor Schoelcher.” In 
                                <title>Islands and Exiles: The Creole Identities of Post/Colonial Literature</title>. Stanford: Stanford University Press, 1998. 264-287, 323-340.
                            </bibl>\n        
                            <bibl>Bongie, Chris. “A Street Named Bissette: Assimilating the Cent-cinquantenaire of the Abolition of Slavery in Martinique (1848–1998).” In 
                                <title>Friends and Enemies, </title>vol.3. Liverpool: Liverpool University Press. 2008. 185‑220. 
                            </bibl>\n        
                            <bibl>Jennings, Lawrence C. “Cyrille Bissette,  Radical Black French Abolitionist.” French History 9.1 (1995): p. 48-66 </bibl>\n        
                            <bibl>Jennings, Lawrence C.  
                                <title>French Anti-Slavery: The Movement for the Abolition of Slavery in France, 1802-1848</title>. Cambridge: Cambridge University Press, 2000. 29-37, 49-50, 71-73, 266-69. 
                            </bibl>\n        
                            <bibl>Mesnard, Eric. “Les Mouvements de Résistance dans les colonies franchisées : L'affaire Bissette (1823-1827).” In
                                <title> Les Abolitions de l'Esclavage de LF Sonthonax à V. Schoelcher1793, 1794, 1848</title>, edited by Marcel Dorigny (Paris: Editions UNESCO, 1995). 293-97.
                            </bibl>\n        
                            <bibl>Pâme, Stella. 
                                <title>Cyrille Bissette: un martyr de la liberté</title>. Fort-de-France, Martinique: Editions Désormeaux, 1999.
                            </bibl>\n      
                        </note>\n    
                    </person>\n    
                    <person xml:id=\"Dfy\">\n      
                        <persName>Louis-­Pierre Dufay</persName>\n      
                        <note resp=\"#masha\" xml:lang=\"fr\">\n        
                            <p>Louis-­Pierre Dufay (ou Dufahy, l’orthographe employée par Bissette est peu répandue) est parmi les députés envoyés pour représenter Saint-Domingue à la Convention à l’issue des élections de 1793 et ​​soutient par la suite l’abolition de 1794. Avant ce revirement politique, cependant , il avait été membre du Club de l’hôtel de Massiac, une association de propriétaires terriens caribéens qui s'opposaient au premier groupe abolitionniste La Société des amis des Noirs et s'opposaient à l'application de la Déclaration des droits de l'homme et du citoyen aux colonies.</p>\n        
                            <bibl>Benzaken, Jean-­Charles. « Louis-­Pierre Dufahy, député abo­­li­­tion­­niste et homme d’affaires avisé. Esquisse bio­­gra­­phique », 
                                <title>Annales historiques de la Révolution française</title>. 1 juin 2012 n
                                <hi rend=\"superscript\">o</hi> 368. p. 61‑85.
                            </bibl>\n      
                        </note>\n      
                        <note resp=\"#masha\" xml:lang=\"en\">\n        
                            <p>Louis-­Pierre Dufay (or Dufaÿ, Bissette’s spelling is not standard) was among the deputies sent to represent Saint-Domingue in the National Convention as a result of the elections of 1793 and subsequently supported the abolition of 1794. Prior to this political reversal, however, he had been a member of the Club de l’hôtel de Massiac, an association of Caribbean planters who opposed the the early abolitionist group 
                                <title>La Société des amis des Noirs </title>and opposed the application of the Declaration of the Rights of Man and of the Citizen to the colonies. 
                            </p>\n        
                            <bibl>Benzaken, Jean-­Charles. “Louis-­Pierre Dufay, député abo­­li­­tion­­niste et homme d’affaires avisé. Esquisse bio­­gra­­phique.” 
                                <title>Annales historiques de la Révolution française</title> 368 (2012): 61‑85.
                            </bibl>\n      
                        </note>\n    
                    </person>\n    
                    <person xml:id=\"Plv\">\n      
                        <persName>Étienne Polverel</persName>\n      
                        <note resp=\"#masha\" xml:lang=\"fr\">\n        
                            <p>Issu de l’aristocratie provinciale, Étienne Polverel est avocat au parlement de Paris à partir de 1780. Secrétaire du club des Jacobins dès 1790, il s’y lie avec Léger-Félicité Sonthonax et Jacques Pierre Brissot, créateur de la 
                                <title>Société des Amis des Noirs</title>, en 1788. Nommé commissaire civil, il est envoyé avec Sonthonax à Saint-Domingue pour faire appliquer la loi du 4 avril 1792 reconnaissant les droits politiques des « libres de couleur ».  Face aux importantes insurrections antiesclavagistes et à l’alliance hispano-britannique contre la France, les deux commissaires civils accordent de manière ponctuelle la liberté à tous les Africains et descendants d’Africains acceptant de combattre sous les drapeaux de la République. Responsable de la partie Ouest de l’île, Polverel y étend, en septembre 1793, l’émancipation générale proclamée par Sonthonax dans la province du Nord le 29 août 1793. 
                            </p>\n        
                            <bibl>Dorigny, Marcel, éd. 
                                <title>Les Abolitions de l’esclavage: de L.F. Sonthonax à V. Schoelcher, 1793, 1794, 1848</title>. Paris: Presses universitaires de Vincennes, UNESCO, 1995.
                            </bibl>\n        
                            <bibl>Dubois, Laurent. 
                                <title>Avengers of the New World: The Story of the Haitian Revolution</title>. Cambridge, Mass: Harvard University Press, 2004
                            </bibl>\n      
                        </note>\n      
                        <note resp=\"#masha\" xml:lang=\"en\">\n        
                            <p>A lawyer in the 
                                <title>Parlement </title>of Paris (the regional appellate court), Étienne Polverel became secretary of the Jacobin Club in 1790, where he was introduced to Léger-Félicité Sonthonax and Jacques Pierre Brissot, founder of the 
                                <title>Société des Amis des Noirs</title>. Appointed civil commissioner, he was sent with Sonthonax to Saint-Domingue to enforce the law of April 4, 1792 recognizing the political rights of free people of color. Faced with important anti-slavery insurrections and the Spanish-British alliance against France, the two civil commissioners gradually granted freedom to all Africans and Afro-descendants agreeing to fight for the Republic. In September 1793, Polverel extended to the western part of the island under his jurisdiction the general emancipation proclaimed in the Northern Province by Sonthonax on 29 August 1793.
                            </p>\n        
                            <bibl>Dorigny, Marcel, ed. 
                                <title>The Abolitions of Slavery : From Leger Felicite Sonthonax to Victor Schoelcher, 1793, 1794, 1848</title>. Paris: UNESCO, 2003. 
                            </bibl>\n        
                            <bibl>Dubois, Laurent. 
                                <title>Avengers of the New World: The Story of the Haitian Revolution</title>. Cambridge, Mass: Harvard University Press, 2004
                            </bibl>\n      
                        </note>\n    
                    </person>\n    
                    <person xml:id=\"Stx\">\n      
                        <persName>Léger-Félicité Sonthonax</persName>\n      
                        <note resp=\"#masha\" xml:lang=\"fr\">\n        
                            <p>Avocat au parlement de Paris à la veille de la Révolution, Léger-Félicité Sonthonax fréquente le club des Jacobins où il fait la connaissance d’Étienne Polverel et de Jacques Pierre Brissot, créateur de la 
                                <title>Société des Amis des Noirs</title>, en 1788. Nommé commissaire civil, il est envoyé avec Polverel à Saint-Domingue pour faire appliquer la loi du 4 avril 1792 reconnaissant les droits politiques des « libres de couleur ». Face aux importantes insurrections antiesclavagistes et à l’alliance hispano-britannique contre la France, les deux commissaires civils accordent de manière ponctuelle la liberté à tous les Africains et descendants d’Africains acceptant de combattre sous les drapeaux de la République. La proclamation de Sonthonax, le 29 août 1793, officialise l’émancipation générale dans la partie Nord de l’île.
                            </p>\n        
                            <bibl>Dorigny, Marcel, éd. 
                                <title>Les Abolitions de l’esclavage: de L.F. Sonthonax à V. Schoelcher, 1793, 1794, 1848</title>. Paris: Presses universitaires de Vincennes, UNESCO, 1995.
                            </bibl>\n        
                            <bibl>Dubois, Laurent. 
                                <title>Avengers of the New World: The Story of the Haitian Revolution</title> (Cambridge, Mass: Belknap Press of Harvard University Press, 2004).
                            </bibl>\n      
                        </note>\n      
                        <note resp=\"#masha\" xml:lang=\"en\">\n        
                            <p>A lawyer in the 
                                <title>Parlement</title> of Paris (the regional appellate court) on the eve of the Revolution, Léger-Félicité Sonthonax frequented the Jacobin Club where he associated with Étienne Polverel and Jacques Pierre Brissot, founder of the 
                                <title>Société des Amis des Noirs</title>. He was sent with Polverel as part of the Civil Commission to Saint-Domingue to enforce the law of April 4, 1792 recognizing the political rights of free people of color. Faced with major anti-slavery insurgencies and the Spanish-British alliance against France, the two civil commissioners gradually granted freedom to all Africans and descendants of Africans who agreed to fight for the Republic. Sonthonax’s August 29, 1793 proclamation formalized the general emancipation in the Northern Province.
                            </p>\n        
                            <bibl>Dorigny, Marcel, ed. 
                                <title>The Abolitions of Slavery : From Leger Felicite Sonthonax to Victor Schoelcher, 1793, 1794, 1848</title>. Paris: UNESCO, 2003. 
                            </bibl>\n        
                            <bibl>Dubois, Laurent. 
                                <title>Avengers of the New World: The Story of the Haitian Revolution</title>. Cambridge, Mass: Harvard University Press, 2004
                            </bibl>\n      
                        </note>\n    
                    </person>\n    
                    <person xml:id=\"NB\">\n      
                        <persName>Napoléon Bonaparte</persName>\n      
                        <note resp=\"#masha\" xml:lang=\"fr\">\n        
                            <p>En 1802, Napoléon Bonaparte, alors Premier Consul du gouvernement républicain français, plus tard empereur, rétablit l’esclavage dans les colonies où il avait été aboli ou partiellement aboli en 1794 et le ratifie sur les territoires coloniaux où l’abolition n’avait pas pris effet, comme par exemple la Martinique. Son invasion de Saint-Domingue pour y rétablir l’esclavage a été repoussée, aboutissant à la déclaration d’une Haïti indépendante. </p>\n        
                            <p>Bissette avait un lien personnel avec Napoléon en tant que neveu de Joséphine de Beauharnais. </p>\n        
                            <p>Lorsque Bonaparte, à la suite de la paix d’Amiens, décide de rétablir l’esclavage dans les possessions françaises (loi du 20 mai 1802), une guerre particulièrement meurtrière éclate, qui conduit à l’indépendance du pays.</p>\n      
                        </note>\n      
                        <note resp=\"#masha\" xml:lang=\"en\">\n        
                            <p>In 1802, Napoleon Bonaparte, then First Consul of the French Republican government, later Emperor, reestablished slavery in the colonies where it had been abolished or partially abolished in 1794 and reaffirmed it in the colonial territories where abolition had not taken effect, such as Martinique. His invasion of Saint-Domingue to reestablish slavery there was repulsed, resulting in the declaration of an independent Haiti. </p>\n        
                            <p>Bissette had a personal connection to Napoleon as the nephew of Joséphine de Beauharnais. </p>\n      
                        </note>\n    
                    </person>\n    
                    <person xml:id=\"ADp\">\n      
                        <persName>Alexandre Dumas</persName>\n      
                        <note resp=\"#masha\" xml:lang=\"fr\">\n        
                            <figure>\n          
                                <graphic url=\"dumas.jpg\"/>\n          
                                <figDesc>Portrait de Alexandre Dumas</figDesc>\n        
                            </figure>\n        
                            <p>Born in 1802 to Marie-Louise Elisabeth Labouret and Thomas-Alexandre Dumas Davy de la Pailleterie, a Revolutionary War general from Saint-Domingue, Alexandre Dumas (also known as Alexandre Dumas 
                                <foreign>père</foreign>) was among the most popular French playwrights and novelists of the nineteenth century. Dumas received early education in his native Villers-Cotterets from Abbé Grégoire, who ran a local school. By the 1830’s, Dumas was a successful dramatist and a leading figure in the Romantic movement, though he was not favored by contemporary critics. Over the course of the twentieth century, Dumas’ canonical status would be solidified, culminating with the transfer of his remains to the Pantheon in 2002. 
                            </p>\n        
                            <p>Dumas’ Haitian ancestry, and accordingly, his race were regular subjects of caricature and malicious insinuation in his time, thus Dumas rarely explicitly identified himself as a person of color or took up questions of race and slavery in his writing. One notable exception is the 1843 novel 
                                <title>Georges</title>, which depicts a slave uprising in Isle de France (Mauritius), and in its narrative and rhetoric appears to reflect Dumas’ engagement with the 
                                <title>Revue des Colonies</title>.
                            </p>\n        
                            <bibl>Daut, Marlene L. “Haiti and the Black Romantics: Enlightenment and Color Prejudice after the Haitian Revolution in Alexandre Dumas’s Georges (1843).” 
                                <title>Studies in Romanticism</title>, vol. 56, no. 1 (2017): 73–92.\n        
                            </bibl>\n        
                            <bibl>\n          Desormeaux, Daniel. “L’amour Nègre Chez Alexandre Dumas.” In 
                                <title>Dumas Amoureux : Formes et Imaginaires de l’Éros Dumasien</title>, edited by Julie Anselmini and Claude Schopp, 373–87. Presses universitaires de Caen, 2021.\n        
                            </bibl>\n        
                            <bibl>\n          Martone, Eric, ed. 
                                <title>Alexandre Dumas as a French Symbol Since 1870</title>. Cambridge Scholars Publishing, 2021.\n        
                            </bibl>\n      
                        </note>\n      
                        <note resp=\"#masha\" xml:lang=\"en\">\n        
                            <figure>\n          
                                <graphic url=\"dumas.jpg\"/>\n          
                                <figDesc>Portrait of Alexandre Dumas</figDesc>\n        
                            </figure>\n        
                            <p>Born in 1802 to Marie-Louise Elisabeth Labouret and Thomas-Alexandre Dumas Davy de la Pailleterie, a Revolutionary War general from Saint-Domingue, Alexandre Dumas (also known as Alexandre Dumas 
                                <foreign>père</foreign>) was among the most popular French playwrights and novelists of the nineteenth century. Dumas received early education in his native Villers-Cotterets from Abbé Grégoire, who ran a local school. By the 1830’s, Dumas was a successful dramatist and a leading figure in the Romantic movement, though he was not favored by contemporary critics. Over the course of the twentieth century, Dumas’ canonical status would be solidified, culminating with the transfer of his remains to the Pantheon in 2002. 
                            </p>\n        
                            <p>Dumas’ Haitian ancestry, and accordingly, his race were regular subjects of caricature and malicious insinuation in his time, thus Dumas rarely explicitly identified himself as a person of color or took up questions of race and slavery in his writing. One notable exception is the 1843 novel 
                                <title>Georges</title>, which depicts a slave uprising in Isle de France (Mauritius), and in its narrative and rhetoric appears to reflect Dumas’ engagement with the 
                                <title>Revue des Colonies</title>.
                            </p>\n        
                            <bibl>Daut, Marlene L. “Haiti and the Black Romantics: Enlightenment and Color Prejudice after the Haitian Revolution in Alexandre Dumas’s Georges (1843).” 
                                <title>Studies in Romanticism</title>, vol. 56, no. 1 (2017): 73–92.\n        
                            </bibl>\n        
                            <bibl>\n          Desormeaux, Daniel. “L’amour Nègre Chez Alexandre Dumas.” In 
                                <title>Dumas Amoureux : Formes et Imaginaires de l’Éros Dumasien</title>, edited by Julie Anselmini and Claude Schopp, 373–87. Presses universitaires de Caen, 2021.\n        
                            </bibl>\n        
                            <bibl>\n          Martone, Eric, ed. 
                                <title>Alexandre Dumas as a French Symbol Since 1870</title>. Cambridge Scholars Publishing, 2021.\n        
                            </bibl>\n      
                        </note>\n    
                    </person>\n    
                    <person xml:id=\"Equ\">\n      
                        <persName>Olaudah Equiano</persName>\n      
                        <note resp=\"#masha\" xml:lang=\"fr\">\n        
                            <figure>\n          
                                <graphic url=\"Equiano.jpg\"/>\n          
                                <figDesc>Portrait de Equiano</figDesc>\n        
                            </figure>\n        
                            <p>Olaudah Equiano was among the most prominent British abolitionists of the late eighteenth century. Born around 1745, he was sold as a child to the British captain Michael Pascal, who gave him the name Gustavus Vassa, which remained his legal name for the remainder of his life. Equiano served in the British Navy during the Seven Years’ War and in 1766, he purchased his freedom from the American merchant Robert King.</p>\n        
                            <p>\n          As a free man in London in the 1780s, Equiano became more active in the abolitionist movement, notably working with Granville Sharp to bring public attention to the 1781 Zong massacre, in which more than 130 enslaved people were thrown overboard to their deaths while crossing the Atlantic. In 1789, Equiano published his autobiography (his first public use of the name Olaudah Equiano), 
                                <title>The Interesting Narrative of the Life of Olaudah Equiano, or Gustavus Vassa, the African</title>, which was an instant success in Britain and abroad, becoming the standard for the genre of the slave narrative. \n        
                            </p>\n        
                            <p>\n          The feature on Equiano that appears in the 
                                <title>Revue</title> is taken directly from Abbé Grégoire’s 
                                <title>De la littérature des nègres</title> (1808) a survey of writing by Black authors through the turn of the nineteenth century. In the included passage, Grégoire paraphrases the accounts of Equiano’s early childhood in 
                                <title>The Interesting Narrative</title>. These passages reflect a consistent point of emphasis in the 
                                <title>Revue</title> itself, that the Euopean slave trade corrupts otherwise functional and sophisticated cultures. Later in 
                                <title>The Interesting Narrative</title>, Equiano makes a plea for the end of the slave trade in the British Empire that the 
                                <title>Revue</title> echoes regularly: that free trade with the African continent would ultimately be more profitable to the nations that supposedly benefit from slave economies. \n        
                            </p>\n        
                            <bibl>Equiano, Olaudah. 
                                <title>The Interesting Narrative</title>, edited by Brycchan Carey. Oxford University Press 2018.\n        
                            </bibl>\n      
                        </note>\n      
                        <note resp=\"#masha\" xml:lang=\"en\">\n        
                            <figure>\n          
                                <graphic url=\"Equiano.jpg\"/>\n          
                                <figDesc>Portrait of Equiano</figDesc>\n        
                            </figure>\n        
                            <p>Olaudah Equiano was among the most prominent British abolitionists of the late eighteenth century. Born around 1745, he was sold as a child to the British captain Michael Pascal, who gave him the name Gustavas Vassa, which remained his legal name for the remainder of his life. Equiano served in the British Navy during the Seven Years’ War and in 1766, he purchased his freedom from the American merchant Robert King.</p>\n        
                            <p>\n          As a free man in London in the 1780s, Equiano became more active in the abolitionist movement, notably working with Granville Sharp to bring public attention to the 1781 Zong massacre, in which more than 130 enslaved people were thrown overboard to their deaths while crossing the Atlantic. In 1789, Equiano published his autobiography (his first public use of the name Olaudah Equiano), 
                                <title>The Interesting Narrative of the Life of Olaudah Equiano</title>, or Gustavus Vassa, the African, which was an instant success in Britain and abroad, becoming the standard for the genre of the slave narrative. \n        
                            </p>\n        
                            <p>\n          The feature on Equiano that appears in the Revue is taken directly from 
                                <title>Abbé Grégoire’s De la littérature des nègres</title> (1808) a survey of writing by Black authors through the turn of the nineteenth century. In the included passage, Grégoire paraphrases the accounts of Equiano’s early childhood in 
                                <title>The Interesting Narrative</title>. These passages reflect a consistent point of emphasis in the 
                                <title>Revue</title> itself, that the Euopean slave trade corrupts otherwise functional and sophisticated cultures. Later in 
                                <title>The Interesting Narrative</title>, Equiano makes a plea for the end of the slave trade in the British Empire that the 
                                <title>Revue</title> echoes regularly: that free trade with the African continent would ultimately be more profitable to the nations that supposedly benefit from slave economies. \n        
                            </p>\n        
                            <bibl>Equiano, Olaudah. 
                                <title>The Interesting Narrative</title>, edited by Brycchan Carey. Oxford University Press 2018.\n        
                            </bibl>\n      
                        </note>\n    
                    </person>\n  
                </listPerson>\n  
                <listPlace>\n    
                    <place xml:id=\"Alg\">\n      
                        <placeName>Alger</placeName>\n      
                        <note resp=\"#masha\" xml:lang=\"fr\">\n        
                            <p>Les forces françaises entrent pour la première fois dans la ville d’Alger en juillet 1830, dans les derniers jours du règne de Charles X, avec une annexion militaire formelle commençant en 1834. Au moment de la première livraison de la 
                                <title>Revue</title>, Alger est métonymique de l’ensemble des conquêtes effectuées au cours des opérations de « pacification », constituant un territoire trop restreint pour être perçu différemment de la ville. C’est en 1847, lorsque la conquête amorce un tournant définitif avec la reddition d’Abd el-Kader, que le territoire de l’Algérie coloniale commence à s’étendre de manière précipitée. Bien qu’elle soit généralement opposée à la violence des forces d’occupation, la 
                                <title>Revue </title>ne se montre jamais explicitement hostile à la colonisation de l’Algérie.
                            </p>\n        
                            <bibl>Bouchène, Abderrahmane, Jean-Pierre Peyroulou, Ouanassa Siari Tengour, Sylvie Thénault, eds. 
                                <title>Histoire de l’Algérie à la période coloniale, 1830-1962. </title>Paris: La Découverte, 2014.
                            </bibl>\n        
                            <bibl>Jennifer E. Sessions. 
                                <title>By Sword and Plow: France and the Conquest of Algeria</title>. Ithaca: Cornell University Press, 2014.
                            </bibl>\n      
                        </note>\n      
                        <note resp=\"#masha\" xml:lang=\"en\">\n        
                            <p>French forces first entered the city of Algiers in July, 1830, in the closing days of the reign of Charles X, with formal military annexation beginning in 1834. At the time of the 
                                <title>Revue</title>’s initial publication, Algiers was metonymic of all the conquests carried out during the “pacification” operations, constituting a territory too restricted to be perceived distinctly from the city. It was in 1847, when the conquest took a definitive turn with the surrender of Abd el-Kader, that the territory of colonial Algeria began to expand in a precipitous manner. Although it generally opposes the violence of the occupying forces, the 
                                <title>Revue </title>is never explicitly critical of the colonization of Algeria.
                            </p>\n        
                            <bibl>Bouchène, Abderrahmane, Jean-Pierre Peyroulou, Ouanassa Siari Tengour, Sylvie Thénault, eds.
                                <title> Histoire de l’Algérie à la période coloniale, 1830-1962. </title>Paris: La Découverte, 2014.
                            </bibl>\n        
                            <bibl>Sessions, Jennifer E. 
                                <title>By Sword and Plow: France and the Conquest of Algeria</title>. Ithaca: Cornell University Press, 2014.
                            </bibl>\n      
                        </note>\n    
                    </place>\n    
                    <place xml:id=\"BrB\">\n      
                        <placeName>Bourbon</placeName>\n      
                        <note resp=\"#masha\" xml:lang=\"fr\">\n        
                            <p>Située dans l’océan Indien à l’est de Madagascar, l’île de Bourbon est sous contrôle français depuis le 17e siècle. Devenue Réunion à la Révolution, puis île Bonaparte sous l’Empire, elle est occupée par les Britanniques entre 1810 et 1814, avant d’être définitivement rendue à la France dans le cadre du traité de Paris. D’abord employée comme escale pour les navires de la Compagnie française des Indes orientales, l’île intègre, dans la première moitié du 18e siècle, le modèle de la société de plantation esclavagiste. D’après le recensement de 1788, environ 80% de la population de l’île, d’origine africaine, malgache, ou indienne, est esclavisée. L’esclavagisme bourbonnais repose, par ailleurs, sur une politique de division éthnique d’africains, de malgaches et d’indiens dans le but d’éviter la constitution d’un groupe majoritaire menaçant pour l’ordre colonial. L’abolition décrétée par la Convention le 4 février 1794, n’y est jamais appliquée et les actes de résistance, notamment le marronnage, sont répandus. </p>\n        
                            <p>Comme c’est le cas dans d’autres territoires coloniaux, la 
                                <title>Revue des Colonies </title>y dispose d’un distributeur et d’un correspondant chargé de rendre compte de l’actualité de l’île. Cependant, la circulation de la 
                                <title>Revue</title>, estimée dangereuse pour l’ordre colonial, y est entravée par l’administration locale. Ainsi, dans une lettre datée de mai 1836, Louis-Timagène Houat, lui-même incarcéré, avec d’autres hommes de couleur, pour incitation à l’insurrection, propose de prendre la relève du correspondant précédent, victime d’intimidations. 
                            </p>\n        
                            <bibl>Ève, Prosper. 
                                <title>Naître et mourir à l’île Bourbon à l’époque de l’esclavage</title>. Paris &amp; Saint-Denis: L’Harmattan, 1999.
                            </bibl>\n        
                            <bibl>Little, Roger et Pratima Prasad (eds.). 
                                <title>Esclaves marrons à Bourbon Une anthologie littéraire (1831-1848)</title>. 2005. vol.64. 
                            </bibl>\n        
                            <bibl>Prasad, Pratima. « Colour and Conflict in Nineteenth-Century Île Bourbon: the Case of the Affaire Houat », Dix-Neuf. 2 janvier 2020, vol.24 no 1. p. 1‑16.</bibl>\n      
                        </note>\n      
                        <note resp=\"#masha\" xml:lang=\"en\">\n        
                            <p>Located in the Indian Ocean to the east of Madagascar, the island of Bourbon has been under French control since the seventeenth century. Renamed Réunion during the Revolution, then Bonaparte Island under the Empire, it was occupied by the British between 1810 and 1814, before definitively returning to France in the Treaty of Paris. First used as a stopover for the ships of the French East India Company, the island adopted a slave plantation economy in the first half of the eighteenth century. According to the 1788 census, approximately 80% of the island’s population, originating in Africa, Madagascar or India, was enslaved. The abolition decreed by the Convention on February 4, 1794 was never actually applied and acts of resistance, notably 
                                <title>marronage</title>, were common.
                            </p>\n        
                            <p>As is in other colonial territories, the 
                                <title>Revue des Colonies</title> maintained a distributor and a correspondent there responsible for reporting on the island’s current events. However, the circulation of the 
                                <title>Revue</title> was hampered by the local administration, who considered the publication seditious. Thus, in a letter dated May 1836, Louis-Timagène Houat, himself imprisoned, along with other men of color, for incitement to insurrection, offered to take over from the previous correspondent, who had been the victim of such intimidation.
                            </p>\n        
                            <bibl>Ève, Prosper. 
                                <title>Naître et mourir à l’île Bourbon à l’époque de l’esclavage.</title> Paris &amp; Saint-Denis: L'Harmattan, 1999.
                            </bibl>\n        
                            <bibl>Little, Roger Pratima Prasad, eds. 
                                <title>Esclaves marrons à Bourbon Une anthologie littéraire (1831-1848)</title>. Paris: L’Harmattan, 2005
                            </bibl>\n        
                            <bibl>Prasad, Pratima. “Colour and Conflict in Nineteenth-Century 
                                <title>Île Bourbon:</title> the Case of the 
                                <title>Affaire Houat.</title>” 
                                <title>Dix-Neuf </title> 24.1 (2020): 1‑16.
                            </bibl>\n      
                        </note>\n    
                    </place>\n    
                    <place xml:id=\"Cay\">\n      
                        <placeName>Cayenne </placeName>\n      
                        <note resp=\"#masha\" xml:lang=\"fr\">\n        
                            <p>Situé sur l’île de Cayenne, dans l’estuaire de la rivière du même nom, Cayenne est le chef-lieu de la Guyane française. Issue du premier empire colonial français, voisine du Brésil et du Suriname, cette colonie fondée sur l’économie de plantation devient un lieu de déportation lors de la Révolution française, accueillant plusieurs convois de proscrits. D’après le recensement de 1788,  la population esclavisée y représente un peu plus de 80% de la population. L’abolition de l’esclavage, en application du décret de la Convention, y est proclamée le 14 juin 1794. En 1802, Victor Hugues, le commissaire chargé de faire appliquer le décret d’abolition de l’esclavage en Guadeloupe, y impose le rétablissement de l’esclavage promulgué en 1802 par Napoléon Bonaparte, Premier Consul, et instaure un régime de conscription locale. Cette régression aux dispositions antérieures à la Révolution entraîne d’importants mouvements de marronnage. Conquise par les forces portugaises en 1809, la colonie est restituée à la France en 1817, à l’issue du traité de Paris. La 
                                <title>Revue des Colonies </title>dispose d’un correspondant à Cayenne qui rend compte des nouvelles, notamment électorales, de Guyane dès la première livraison.
                            </p>\n        
                            <bibl>Mam Lam Fouck, Serge. 
                                <title>La Guyane française au temps de l'esclavage, de l'or et de la francisation (1802-1946)</title>, Ibis Rouge Editions, 1999.
                            </bibl>\n        
                            <bibl>Schmidt, Nelly. 
                                <title>La France a-t-elle aboli l'esclavage ? Guadeloupe, Martinique, Guyane, 1830-1935</title>, Perrin, 2009.
                            </bibl>\n      
                        </note>\n      
                        <note resp=\"#masha\" xml:lang=\"en\">\n        
                            <p>The island of Cayenne, in the estuary of the river of the same name, is also the location of the city of Cayenne, the capital of French Guiana. According to the 1788 census, Cayenne’s enslaved population represented just over 80% of the total population. During the Revolution, Cayenne received multiple convoys of exiles from metropolitan France, beginning its eventual transformation into a penal colony in the nineteenth century. The 1794 abolition decree was never meaningfully enforced there. Victor Hugues, the commissioner in charge of enforcing the decree in Guadeloupe, was named governor of Guiana in 1799, replacing slavery with a system of conscripted labor until the official restoration of slavery in 1802 by the decree of First Consul Napoleon Bonaparte. This regression to pre-Revolutionary conditions  led to high frequencies of marronage. Conquered by Portuguese forces in 1809, the colony was returned to France in 1817, following the Treaty of Paris. From its inaugural issue, the 
                                <title>Revue des Colonie</title> features regular reports from a correspondent in Cayenne, including detailed electoral data.
                            </p>\n        
                            <bibl>Mam Lam Fouck, Serge. 
                                <title>La Guyane française au temps de l'esclavage, de l'or et de la francisation (1802-1946)</title>. Matoury, French Guiana: Ibis Rouge Editions, 1999.
                            </bibl>\n        
                            <bibl>Schmidt, Nelly. 
                                <title>La France a-t-elle aboli l'esclavage ? Guadeloupe, Martinique, Guyane, 1830-1935</title>. Paris: Perrin, 2009.
                            </bibl>\n      
                        </note>\n    
                    </place>\n    
                    <place xml:id=\"ANG\">\n      
                        <placeName>Angleterre </placeName>\n      
                        <note resp=\"#masha\" xml:lang=\"fr\">\n        
                            <p>À la fois puissance militaire et coloniale rivale de la France et modèle du mouvement abolitionniste français, l’Angleterre bénéficie, au sein de la 
                                <title>Revue, </title>d’une couverture médiatique particulièrement intéressante. 
                            </p>\n        
                            <p>Adversaire de la France pendant la période révolutionnaire et napoléonienne, la Grande-Bretagne saisit et restitue à plusieurs reprises diverses possessions coloniales françaises. </p>\n        
                            <p>Quelque peu freiné, dans les années 1790, par les craintes que suscitent les Révolution française et haïtienne, le mouvement abolitionniste britannique se popularise à partir de 1807, sous la double perspective de l’immoralité du maintien de l’esclavage et l’intérêt économique de son abolition. En 1833, le Parlement britannique proclame l’abolition de l’esclavage, devant entrer en vigueur en 1834 et culminerait avec l’émancipation effective de tous les esclaves dans les colonies britanniques en 1838 après une période d ’«apprentissage». Le processus d’abolition britannique, qui se déroule parallèlement aux premières années de publication de la 
                                <title>Revue</title>, signale le caractère inévitable de l’abolition en France, déplaçant le débat vers la question de l’émancipation immédiate ou gradualiste.
                            </p>\n        
                            <p>Comme d’autres abolitionnistes français, Bissette a reçu un soutien avéré de la 
                                <title>British and Foreign Anti-Slavery Society</title> (BFASS), au moins pour la publication de son éphémère 
                                <title>Revue Abolioniste </title>en 1847.
                            </p>\n        
                            <bibl>Jennings, Lawrence C. “Slavery and the Venality of the July Monarchy Press.” 
                                <title>French Historical Studies</title> 17.4 (1992): 957–78.
                            </bibl>\n        
                            <bibl>Walvin, James. \"British Abolitionism, 1787-1838.\" In 
                                <title>The Abolitions of Slavery: From the LF Sonthonax to Victor Schoelcher, 1793, 1794, 1848</title>,edited by Marcel Dorigny (New York: Bergham Books, 2003), 71-78
                            </bibl>\n      
                        </note>\n      
                        <note resp=\"#masha\" xml:lang=\"en\">\n        
                            <p>As both France’s primary military and colonial rival and a model for the French abolitionist movement, England is a particularly interesting topic of coverage within the 
                                <title>Revue.</title>
                            </p>\n        
                            <p>France’s adversary through the Revolution and Napoleonic wars, British forces repeatedly seized and returned various French colonial possessions.</p>\n        
                            <p>Though hampered in the 1790s by panic over the French and Haitian Revolutions, the British abolitionist movement successfully campaigned for the end of the slave trade in 1807, gaining popular support by emphasizing, simultaneously, the immorality of maintaining slavery and the possible economic advantages of its abolition. In 1833, British Parliament proclaimed the abolition of slavery, to be enacted in 1834, culminating in the effective emancipation of all enslaved people in the British colonies by 1838, after a period of “apprenticeship.” The process of British abolition, which occurred in parallel to the first years of publication of the 
                                <title>Revue</title>, signaled the inevitability of abolition in France, shifting the debate to the question of immediate or gradualist emancipation.
                            </p>\n        
                            <p>Like other French abolitionists, Bissette received confirmed support from the 
                                <title>British and Foreign Anti-Slavery Society </title>(BFASS), at least for the publication of his short-lived 
                                <title>Revue Abolioniste </title>in 1847.
                            </p>\n        
                            <bibl>Jennings, Lawrence C. “Slavery and the Venality of the July Monarchy Press.” 
                                <title>French Historical Studies</title> 17.4 (1992): 957–78.
                            </bibl>\n        
                            <bibl>Walvin, James. \"British Abolitionism, 1787-1838.\" In 
                                <title>The Abolitions of Slavery: From the LF Sonthonax to Victor Schoelcher, 1793, 1794, 1848</title>,edited by Marcel Dorigny (New York: Bergham Books, 2003), 71-78
                            </bibl>\n      
                        </note>\n    
                    </place>\n    
                    <place xml:id=\"MQ\">\n      
                        <placeName>Martinique</placeName>\n      
                        <note resp=\"#masha\" xml:lang=\"fr\">\n        
                            <p>Principalement sous contrôle français depuis le milieu du 17e siècle, la Martinique, comme l’archipel guadeloupéen voisin, fait partie du premier empire colonial français. Il s’agit d’une société coloniale fondée sur une économie de plantation esclavagiste, principalement consacrée à la monoculture sucrière. L’île passe sous contrôle Britannique entre 1759 et 1763, et de nouveau, en 1794, avec l’appui des planteurs cherchant à se soustraire à l’abolition décrétée par la Convention. Lors du recensement de 1789, la population esclavisée y représente environ 84% du total, pour 11% de blancs et 5% de « libres de couleur ». </p>\n        
                            <p>La Martinique redevient française en 1802, après le rétablissement de l’esclavage par Napoléon Bonaparte, alors Premier Consul, sans que l’abolition ait pu entrer y en vigueur. </p>\n        
                            <p>Dans les dernières années de la Restauration, l’île est le théâtre de la retentissante 
                                <title>affaire Bissette</title>, qui voit plus d’une centaine d’hommes de couleur libres, accusés de complicité de complot, condamnés à la déportation à vie. Largement diffusée dans la presse, l’affaire sensibilise les milieux libéraux métropolitains à la cause des « libres de couleur » et aide à populariser les sentiments antiesclavagistes. 
                            </p>\n        
                            <p>À la suite de la Révolution de Juillet 1830, de nombreuses mobilisations réunissant la population esclavisée et les « libres de couleur » dans une lutte commune contre les hiérarchies socio-raciales imposées par le colonialisme esclavagiste. Ces mobilisations influent sur les autorités métropolitaines, notamment par l’entremise de Bissette et de ses associés. L’île natale de Bissette bénéficie en effet d’une couverture médiatique abondante dans la 
                                <title>Revue des Colonies</title>, notamment quand aux conséquences de la loi électorale du 24 avril 1833, qui écarte de fait la plupart des « libres de couleur » de la vie politique en imposant un cens éléctoral près de deux fois plus élevé dans les colonies qu’en métropole. Le taux de participation des hommes de couleur libres aux éléctions de 1834 en Martinique ne dépasse pas 3 % des électeurs.
                            </p>\n        
                            <bibl>Kováts Beaudoux, Édith,
                                <title> Les Blancs créoles de la Martinique : une minorité dominante</title>, préface de Michel Giraud, Paris, France, L’Harmattan, 2003.
                            </bibl>\n        
                            <bibl>Larcher, Silyane. 
                                <title>L’autre citoyen: L’idéal républicain et les Antilles après l’esclavage</title>. Paris. Armand Colin. 2014, p. 109-125.
                            </bibl>\n        
                            <bibl>Régent, Frédéric. « Préjugé de couleur, esclavage et citoyennetés dans les colonies françaises (1789-1848) », 
                                <title>La Révolution française</title>. 17 novembre 2015 n
                                <hi rend=\"superscript\">o</hi> 9. En ligne : 
                                <ref target=\"http://journals.openedition.org/lrf/1403\">http://journals.openedition.org/lrf/1403</ref> [consulté le 13 novembre 2021].
                            </bibl>\n      
                        </note>\n      
                        <note resp=\"#masha\" xml:lang=\"en\">\n        
                            <p>Principally under French control since the mid seventeenth century, Martinique, like the neighboring archipelago of Guadeloupe, was part of the first French colonial empire. A slave plantation economy, mainly devoted to sugar monoculture, the island came under British control between 1759 and 1763, and again, in 1794, with the support of planters seeking to avoid the abolition decreed by the National Convention. According to the 1789 census, the enslaved population there represented approximately 84% of the total population, with 11% white and 5% free people of color.</p>\n        
                            <p>Martinique returned to French control in 1802, after Napoleon Bonaparte, then First Consul, reinstated slavery in the colonies, without abolition having ever been implemented there.</p>\n        
                            <p>In 1823, the island was the scene of the infamous 
                                <title>affaire Bissette</title>, in which more than a hundred free men of color, accused of sedition, were exiled for life. Covered widely in the press, the affair helped to advance the cause of free men of color among liberal circles in metropolitan France to and to popularize anti-slavery sentiments.
                            </p>\n        
                            <p>Following the Revolution of July 1830, activism against colonial socio-racial hierarchies garnered significant attention from metropolitan authorities, particularly through the efforts of Bissette and his associates. Bissette's native island was  indeed  covered extensively in the 
                                <title>Revue des Colonies</title>, with early issues giving particular attention to the disappointing results of the laws of April 1833, which effectively maintained the exclusion of free men of color from political life by imposing electoral qualifications in the colonies nearly twice as stringent as those in metropolitan France. The participation rate of free men of color in the 1834 elections in Martinique was thus under 3%.
                            </p>\n        
                            <bibl>Kováts Beaudoux, Édith,
                                <title> Les Blancs créoles de la Martinique : une minorité dominante</title>. Paris: L’Harmattan, 2003.
                            </bibl>\n        
                            <bibl>Larcher, Silyane. 
                                <title>L’autre citoyen: L’idéal républicain et les Antilles après l’esclavage</title>. Paris: Armand Colin, 2014. 109-125.
                            </bibl>\n        
                            <bibl>Régent, Frédéric, 
                                <title>La France et ses esclaves : de la colonisation aux abolitions, 1620-1848</title>. Paris: Hachette Littératures, 2009.
                            </bibl>\n      
                        </note>\n    
                    </place>\n    
                    <place xml:id=\"GP\">\n      
                        <placeName>Guadeloupe</placeName>\n      
                        <note resp=\"#masha\" xml:lang=\"fr\">\n        
                            <p>Comme son île voisine de la Martinique, l'archipel guadeloupéen fait partie du premier empire colonial français. Il s’agit d’une société coloniale fondée sur une économie de plantation esclavagiste, principalement consacrée à la monoculture sucrière. Lors du recensement de 1789, la population esclavisée y représente environ 85% du total, pour 13% de blancs et 3% de « libres de couleur ».</p>\n        
                            <p>L’archipel passe sous contrôle Britannique entre 1759 et 1763, puis de nouveau en 1794, avec l’appui des planteurs cherchant à se soustraire à l’abolition décrétée par la Convention.</p>\n        
                            <p>L’invasion britannique est repoussée par les forces de l’île, composées, entre autres, de plusieurs milliers de nouveaux affranchis et dirigées par Victor Hugues, commissaire civil envoyé par la Convention pour faire appliquer le décret de l’abolition. Celle-ci n’est toutefois promulguée que de manière symbolique, l’esclavage étant remplacé par une forme de travail forcé. </p>\n        
                            <p>En 1802, une importante armée insurrectionnelle commandée par Louis Delgrès, homme de couleur libre, s’oppose au général Richepanse envoyé rétablir l’esclavage sur ordre de Napoléon Bonaparte, alors Premier Consul. L’insurrection brutalement réprimée s’achève par le suicide de Delgrès et ses compagnons. </p>\n        
                            <p>Comme la Martinique, la Guadeloupe passe de nouveau sous contrôle Britannique pendant les guerres napoléoniennes. Brièvement cédée à la Suède lors du traité de Paris de 1814, elle revient définitivement sous contrôle français en 1815. </p>\n        
                            <p>À l’époque de la fondation de la 
                                <title>Revue des Colonies</title>, les libres de couleur y sont aussi nombreux que les blancs, et possèdent environ un quart des terres. La 
                                <title>Revue </title>accorde une place importante à l’actualité de la Guadeloupe, sans doute avec le concours de Mondésir Richard, « mandataire des libres de couleur de Guadeloupe » et membre très probable de la « Société d’hommes de couleur » qui fonde le périodique. 
                            </p>\n        
                            <bibl>Marcel Dorigny et Bernard Gainot. 
                                <title>Atlas des esclavages. Traités, sociétés coloniales, abolitions, de l’Antiquité à nos jours</title>. Paris : Éditions Autrement, 2006
                            </bibl>\n        
                            <bibl>Frédéric Régent, « Préjugé de couleur, esclavage et citoyennetés dans les colonies françaises (1789-1848) », 
                                <title>La Révolution française</title>, no. 9 (2015), 
                                <ref target=\"https://doi.org/10.4000/lrf.1403\">https://doi.org/10.4000/lrf.1403</ref>.
                            </bibl>\n        
                            <bibl>Fallope, Josette. 
                                <title>Esclaves et citoyens. Les Noirs à la Guadeloupe au XIXe siècle dans les processus de résistance et d’intégration</title> (1802-1910), Basse-Terre, Bibliothèque d’Histoire antillaise, 1992
                            </bibl>\n      
                        </note>\n      
                        <note resp=\"#masha\" xml:lang=\"en\">\n        
                            <p>Like Martinique, the Guadeloupe archipelago was part of the first French colonial empire of the seventeenth century. As a slave economy primarily devoted to sugar cultivation, the island’s enslaved population represented approximately 85% of the total, per the 1789 census, with 13% white and 3% “free people of color.” The archipelago came under British control between 1759 and 1763, and was briefly occupied again in 1794, following the National Convention’s abolition decree. This occupation was, however, expelled by military forces including several thousand newly emancipated men, led by Victor Hugues, the civil commissioner sent by the Convention to enforce the abolition decree. The implementation of this abolition was, however, largely symbolic, with chattel slavery replaced, in many instances, by forced labor. In 1802, a large insurrectionary army commanded by Louis Delgrès, a free man of color, opposed the French General Richepanse, who had been sent to restore slavery on the orders of Napoleon Bonaparte, then First Consul. The brutally repressed insurrection would end with the suicide of Delgrès and his company. </p>\n        
                            <p>Guadeloupe again came under British control during the Napoleonic Wars. Briefly ceded to Sweden during the Treaty of Paris in 1814, it definitively returned to French control in 1815. At the time of the foundation of the  
                                <title>Revue des Colonies</title>, the population of free people of color equaled the white population, and owned about a quarter of the land. The 
                                <title>Revue</title> gives significant attention to current events in Guadeloupe, likely through the efforts of Mondésir Richard, a “
                                <title>mandataire</title> of the free people of color of Guadeloupe\" and apparent member of the “Society of men of color” who founded the periodical.
                            </p>\n        
                            <bibl>Dorigny, Marcel, and Bernard Gainot, eds. 
                                <title>Atlas des esclavages. Traités, sociétés coloniales, abolitions, de l’Antiquité à nos jours</title>. Paris: Éditions Autrement, 2006
                            </bibl>\n        
                            <bibl>Régent, Frédéric. “Préjugé de couleur, esclavage et citoyennetés dans les colonies françaises (1789-1848).” 
                                <title>La Révolution française</title> 9 (2015) 
                                <ref target=\"https://doi.org/10.4000/lrf.1403\">https://doi.org/10.4000/lrf.1403</ref>.
                            </bibl>\n        
                            <bibl>Fallope, Josette.,
                                <title> Esclaves et citoyens: Les Noirs à la Guadeloupe au XIXe siècle dans les processus de résistance et d’intégration: 1802-1910</title>. Basse-Terre: Bibliothèque d’Histoire antillaise, 1992.
                            </bibl>\n      
                        </note>\n    
                    </place>\n    
                    <place xml:id=\"HT\">\n      
                        <placeName>Haiti</placeName>\n      
                        <note resp=\"#masha\" xml:lang=\"fr\">\n        
                            <p>L’ancienne colonie de Saint-Domingue, située sur la partie occidentale de l’île d’Hispaniola, était de loin le territoire le plus profitable du premier empire colonial français. En 1789, 90% de sa population de près d’un demi-million est esclavisée et produit trois quarts du sucre mondial.</p>\n        
                            <p>Les soulèvements de masse qui s’y produisent dès 1791 incitent la proclamation d’une émancipation locale en 1793, suivie d’élections législatives auxquelles participent les hommes nouvellement affranchis. C’est à l’issue de ces éléctions que les députés Mills, Dufaÿ et Belley, le premier parlementaire noir, rejoignent la Convention et l’incitent à décréter, le 4 février 1794, l’abolition étendue à l’ensemble des colonies françaises esclavagistes. Saint-Domingue est alors gouvernée par Toussaint Louverture, ancien affranchi, qui souhaite garantir l’autonomie de l’île en élaborant une constitution qui l’émancipe des institutions métropolitaines. En 1802, le Napoléon Bonaparte, à titre de Premier Consul, ordonne la reconquête de la colonie et le rétablissement de l’esclavage. À l’incarcération de Louverture, son second, Jean-Jacques Dessalines, prend la tête du mouvement révolutionnaire pour imposer, le 1er janvier 1804, l’indépendance de l’ancienne colonie sous le nom arawak d’Haïti. En 1825, le président Jean-Baptiste Boyer en fait reconnaître la légitimité au roi Charles X, au prix d’une indemnité de 150 millions de francs qui asphyxie l’économie du pays. </p>\n        
                            <p>Il reste que l’auto-émancipation des esclaves de Saint-Domingue et la constitution de l'État souverain haïtien que celle-ci a amené ont inauguré, de fait, un siècle de réformes émancipatrices et abolitionnistes à échelle mondiale.</p>\n        
                            <p>La 
                                <title>Revue des Colonies </title>présente la Révolution haïtienne comme une incarnation puissante et durable des principes de la Révolution française, alors même que la violence par laquelle elle s’est accomplie et l’instabilité politique qui s’en est suivie ont été régulièrement brandies comme arguments en faveur du maintien de l’esclavage dans les colonies françaises, les colonies britanniques et les États-Unis. La caractérisation d’Haïti par la 
                                <title>Revue </title>comme un Etat-modèle à prendre en exemple pour les puissances colonisatrices européennes fait donc partie de ses positions éditoriales les plus radicales.
                            </p>\n        
                            <bibl>Brickhouse, Anna. 
                                <title>Transamerican Literary Relations and Nineteenth-Century Public Sphere</title>, Cambridge: Cambridge University Press, 2004
                            </bibl>\n        
                            <bibl>Daut, Marlene. 
                                <title>Tropics of Haiti: Race and the Literary History of the Haitian Revolution in the Atlantic World, 1789-1865</title>. Liverpool: Liverpool University Press, 2015
                            </bibl>\n        
                            <bibl>Dubois, Laurent. 
                                <title>Avengers of the New World: The Story of the Haitian Revolution</title>. Cambridge, Mass: Harvard University Press, 2004.
                            </bibl>\n        
                            <bibl>Pierrot, Grégory. 
                                <title>The Black Avenger in Atlantic Culture</title>. Athens: The University of Georgia Press, 2019.
                            </bibl>\n        
                            <bibl>Stieber, Chelsea. 
                                <title>Haiti’s Paper War: Post-Independence Writing, Civil War, and the Making of the Republic, 1804-1954</title>. New York: New York University Press, 2020.
                            </bibl>\n      
                        </note>\n      
                        <note resp=\"#masha\" xml:lang=\"en\">\n        
                            <p>The former colony of Saint-Domingue, located on the western part of the island of Hispaniola, was by far the most profitable territory of the first French colonial empire. In 1789, 90% of its population of almost half a million consisted of enslaved people, who produced three quarters of the world's sugar.</p>\n        
                            <p>The mass uprisings of enslaved people that began there 1791 prompted the proclamation of local emancipation in 1793, followed by legislative elections in which the newly enfranchised took part, electing deputies Mills, Dufaÿ, and Belley, the first Black parliamentarian, to represent the colony in the National Convention. In Paris, these deputies encourage the Convention to decree complete and immediate abolition in all French colonies on February 4, 1794. Saint-Domingue was then governed by the formerly enslaved general Toussaint Louverture, who sought to guarantee the autonomy of the colony by drafting a constitution emancipating it from metropolitan institutions. In 1802, Napoleon Bonaparte, as First Consul, ordered the reconquest of the colony and the reestablishment of slavery. When Louverture is imprisoned, his second, Jean-Jacques Dessalines, takes the lead of the revolutionary movement and imposed, on January 1, 1804, the independence of the former colony under the Arawak name of Haiti. In 1825, President Jean-Baptiste Boyer had King Charles X recognize its legitimacy, at the cost of an indemnity of 150 million francs, effectively suffocating the country's economy.</p>\n        
                            <p>That the first total abolition of slavery occured in response to slave insurrections is a testament to the importance and agency of enslaved people within the global struggle for abolition. Anticipating the arguments of twentieth-century historians, the 
                                <title>Revue </title>presents the Haitian Revolution as a true and lasting embodiment of the universalist principles of the French Revolution, even as the violence through which it was accomplished and the political instability that followed were regularly wielded as arguments in favor of the maintenance of slavery in the French colonies, the British colonies, and the United States. The 
                                <title>Revue</title>’s characterization of Haiti as a kind of countermodel to the exploitative and prejudiced nations of Europe is thus among its most radical editorial positions. 
                            </p>\n        
                            <bibl>Brickhouse, Anna. 
                                <title>Transamerican Literary Relations and Nineteenth-Century Public Sphere</title>, Cambridge: Cambridge University Press, 2004
                            </bibl>\n        
                            <bibl>Daut, Marlene. 
                                <title>Tropics of Haiti: Race and the Literary History of the Haitian Revolution in the Atlantic World, 1789-1865</title>. Liverpool: Liverpool University Press, 2015
                            </bibl>\n        
                            <bibl>Dubois, Laurent. 
                                <title>Avengers of the New World: The Story of the Haitian Revolution</title>. Cambridge, Mass: Harvard University Press, 2004.
                            </bibl>\n        
                            <bibl>Pierrot, Grégory. 
                                <title>The Black Avenger in Atlantic Culture</title>. Athens: The University of Georgia Press, 2019.
                            </bibl>\n        
                            <bibl>Stieber, Chelsea. 
                                <title>Haiti’s Paper War: Post-Independence Writing, Civil War, and the Making of the Republic, 1804-1954</title>. New York: New York University Press, 2020.
                            </bibl>\n      
                        </note>\n    
                    </place>\n    
                    <place xml:id=\"DOM\">\n      
                        <placeName>Dominique</placeName>\n      
                        <note resp=\"#masha\" xml:lang=\"fr\">\n        
                            <p>La Dominique, située directement entre la Guadeloupe et la Martinique, a d’abord été colonisée par des colons français de ces îles à la fin du XVIIe siècle, qui ont rapidement amené des esclaves africains. Comme la Martinique et la Guadeloupe, la Dominique a été prise par les forces britanniques pendant la guerre de Sept Ans. Contrairement à ces îles, cependant, elle est restée sous contrôle britannique. Après une ré-invasion française en 1775, la colonie est formellement rendue aux Britanniques en 1783 et resta sous contrôle britannique jusqu’à son indépendance en 1978. </p>\n      
                        </note>\n      
                        <note resp=\"#masha\" xml:lang=\"en\">\n        
                            <p>Dominica, located directly between Guadeloupe and Martinique, was first settled by French settlers from these islands in the late seventeenth century, who soon brought in African slaves. Like Martinique and Guadeloupe, Dominica was taken by British forces during the Seven Years' War. Unlike those islands, however, it remained under British control. After a French re-invasion in 1775, the colony was formally returned to the British in 1783 and remained under British control until its independence in 1978.</p>\n      
                        </note>\n    
                    </place>\n    
                    <place xml:id=\"Esk\">\n      
                        <placeName>Essaka</placeName>\n      
                        <note resp=\"#masha\" xml:lang=\"fr\">\n        
                            <p>The place of birth of Oladuah Equiano, according to his autobiography 
                                <title>The Interesting Narrative of the Life of Olaudah Equiano, Or Gustavus Vassa, The African</title>. This work, which is the source for the chapter on Equiano in Abbé Grégoire’s 
                                <title>De la littérature des nègres</title> reprinted in the 
                                <title>Revue</title>, contains the only known reference to “Essaka” with this spelling. The actual place of Equiano’s birth has been the subject of some debate, with some claiming that Essaka refers to Issieke, in Igboland, present day Nigeria. Other scholars have pointed out that Equiano’s baptismal records (whose information would have been provided by the family of his master), and other documents from his naval career, list his place of birth as South Carolina.
                            </p>\n        
                            <bibl>\n          Lovejoy, Paul E. \"Olaudah Equiano or Gustavus Vassa, What's in a Name?\" 
                                <title>Atlantic Studies</title> 9.2 (2012), 165-84.\n        
                            </bibl>\n      
                        </note>\n      
                        <note resp=\"#masha\" xml:lang=\"en\">\n        
                            <p>The place of birth of Oladuah Equiano, according to his autobiography 
                                <title>The Interesting Narrative of the Life of Olaudah Equiano, Or Gustavus Vassa, The African</title>. This work, which is the source for the chapter on Equiano in Abbé Grégoire’s 
                                <title>De la littérature des nègres</title> reprinted in the 
                                <title>Revue</title>, contains the only known reference to “Essaka” with this spelling. The actual place of Equiano’s birth has been the subject of some debate, with some claiming that Essaka refers to Issieke, in Igboland, present day Nigeria. Other scholars have pointed out that Equiano’s baptismal records (whose information would have been provided by the family of his master), and other documents from his naval career, list his place of birth as South Carolina.
                            </p>\n        
                            <bibl>\n          Lovejoy, Paul E. \"Olaudah Equiano or Gustavus Vassa, What's in a Name?\" 
                                <title>Atlantic Studies</title> 9.2 (2012), 165-84.\n        
                            </bibl>\n      
                        </note>\n    
                    </place>\n  
                </listPlace>\n  
                <listOrg>\n    
                    <org xml:id=\"SHC\">\n      
                        <orgName>Société d’Hommes de Couleur</orgName>\n      
                        <note resp=\"#masha\" xml:lang=\"fr\">\n        
                            <p>La présence éphémère de cette « société » sur la page de titre de la 
                                <title>Revue </title>(jusqu’en janvier 1835), conjuguée à l’absence de toute autre trace documentaire, suggère qu’il s’agirait d’une construction éditoriale plutôt que d’un véritable organisme associatif. 
                            </p>\n        
                            <p>La revendication, dès la page de titre, d’une identité collective en complément de l’appareil éditorial de la 
                                <title>Revue </title>est, du reste, un geste d’auto-légitimation courant dans la culture de l’imprimé des années 1830. C’est également une manière d’afficher et de souligner l’importance, démographique et, par conséquent, politique, des 
                                <title>«</title> hommes de couleur » libres — groupe au statut contesté, comprenant aussi bien les descendants d’unions interraciales que les esclaves africains affranchis, et se trouvant systématiquement et dans les deux cas écartés de la citoyenneté par les ordonnances locales.
                            </p>\n        
                            <p>Hormis Bissette, la 
                                <title>«</title> société d’hommes de couleur » comprenait très certainement au moins deux de ses coauteurs pour plusieurs écrits et pétitions à visée émancipatrice parus au cours des années précédentes: Mondésir Richard, mandataire des libres de couleur de Guadeloupe, et Louis Fabien 
                                <title>fils</title>, mandataire, comme Bissette, des libres de couleur de Martinique et son coaccusé dans l'
                                <title>Affaire Bissette.</title>
                            </p>\n        
                            <p>L’expression « mandataire des hommes de couleur » apparaît, ainsi que l’explique un article paru dans la 
                                <title>Revue</title> à la livraison suivante (août 1834), en réaction aux lois du 24 avril 1833 sur le régime législatif des colonies (également appelées 
                                <title>Charte coloniale</title>) qui, tout en reconnaîssant des droits civils identiques à toutes les populations libres des colonies, imposent un cens électoral écartant de fait la quasi-totalité de la population libre de couleur, et établissent des conseils coloniaux laissant l’administration des colonies entre les mains de colons blancs. L’utilisation de l’expression 
                                <title>«</title> hommes de couleur » en 1834 est particulièrement significative car ces lois auraient dû, en principe, en abolir l’usage en lui ôtant sa valeur juridique par la suppression de  toute distinction légale entre les hommes de couleur libres et les colons blancs.
                            </p>\n        
                            <bibl>Braun, Juliane. « Transatlantic Vistas: Changing Alliances at Home and Abroad » 
                                <title>Creole Drama</title>. University of Virginia Press. 2019, p. 141‑143.
                            </bibl>\n        
                            <bibl>Pâme, Stella. 
                                <title>Cyrille Bisette</title>. 1. éd. Fort-de-France, Martinique: Editions Désormeaux. 1997. 123-124.
                            </bibl>\n        
                            <bibl>Schmidt, Nelly. 
                                <title>Abolitionnistes de l'esclavage et réformateurs des colonies, 1820-1851 : analyses et documents</title>. Hommes et Sociétés. Paris : Karthala, 2000. 254–263 ; 283–285.
                            </bibl>\n      
                        </note>\n      
                        <note resp=\"#masha\" xml:lang=\"en\">\n        
                            <p>The ephemeral presence of this “society” on the title page of the 
                                <title>Revue </title>(until January 1835), combined with the absence of any other documentary trace, suggests that it was more an editorial construction than a formal organization. 
                            </p>\n        
                            <p>This claim of a collective identity for the 
                                <title>Revue</title>’s editorial apparatus was a common gesture of self-legitimation in the print culture of the 1830s. It is furthermore a way of signalling the demographic and, consequently, political importance of free 
                                <title>“</title>men of color,” a group of contested status, which included descendants of interracial unions and recently emancipated men, both of whom were systematically barred from citizenship by local ordinances.
                            </p>\n        
                            <p>Apart from Bissette, the 
                                <title>“</title>society of men of color” almost certainly included at least two of his co-authors for several emancipatory pamphlets and petitions published in previous years: Mondésir Richard, 
                                <title>mandataire</title>, or self-appointed representative of the free people of color of Guadeloupe, and Louis Fabien 
                                <title>fils</title>, 
                                <title>mandataire</title>, like Bissette, of the free people of color of Martinique and his co-defendant in the 
                                <title>affaire Bissette.</title>
                            </p>\n        
                            <p>Their roles as 
                                <title>“</title>mandataires des hommes de couleur
                                <title>”</title> are assumed, as explained in the 
                                <title>Revue</title>’s subsequent issue (August 1834), in reaction to the laws of April 24, 1833 (sometimes referred to as the 
                                <title>Colonial Charter</title>) which, while nominally establishing equal rights for all free populations of the colonies, imposed electoral qualifications that functionally excluded almost all of the free population of color, and established colonial councils that left the administration of the colonies in the hands of white planters. The use of the expression “men of color” in 1834 is particularly significant because these laws, in principle, should have removed any practical distinction between white men and free men of color.
                            </p>\n        
                            <bibl>Braun, Juliane. 
                                <title>Creole drama: Theatre and Society in Antebellum New Orleans</title>. Charlottesville: University of Virginia Press, 2019. 141‑143.
                            </bibl>\n        
                            <bibl>Pâme, Stella. 
                                <title>Cyrille Bissette: un martyr de la liberté</title>. Fort-de-France, Martinique: Editions Désormeaux, 1999.
                            </bibl>\n        
                            <bibl>Schmidt, Nelly. 
                                <title>Abolitionnistes de l'esclavage et réformateurs des colonies, 1820-1851: analyses et documents</title>. Paris: Karthala, 2000.
                            </bibl>\n      
                        </note>\n    
                    </org>\n    
                    <org xml:id=\"AN\">\n      
                        <orgName>Assemblée Nationale</orgName>\n      
                        <note resp=\"#masha\" xml:lang=\"fr\">\n        
                            <p>Il s’agit de l’Assemblée nationale auto-proclamée, le 17 juin 1789, soit un mois après la réunion des états généraux, par les députés du tiers état. Cette date est depuis retenue comme marquant le début de la Révolution française. </p>\n      
                        </note>\n      
                        <note resp=\"#masha\" xml:lang=\"en\">\n        
                            <p>The National Assembly was formed on June 17, 1789, one month after the meeting of the Estates General, by the deputies of the Third Estate. This date commonly marks the beginning of the French Revolution. </p>\n      
                        </note>\n    
                    </org>\n    
                    <org xml:id=\"CNat\">\n      
                        <orgName>Convention Nationale</orgName>\n      
                        <note resp=\"#masha\" xml:lang=\"fr\">\n        
                            <p>Assemblée constituante pendant la Révolution française, elle succède à l’Assemblée législative en 1792, fonde la Ière République et gouverne la France jusqu’au 26 octobre 1795. </p>\n        
                            <p>L’esclavage est aboli une première fois, par décret de la Convention, le 4 février 1794, accordant les droits de citoyenneté à tous, dans toutes les colonies françaises et sans distinction de race. Cette première abolition est surtout un acte de pragmatisme, venant ratifier l’émancipation proclamée quelques mois auparavant dans la colonie française de Saint-Domingue sous l’effet de l’insurrection antiesclavagiste menée sur ce territoire par des africains esclavisés depuis 1791.</p>\n        
                            <bibl>Schmidt, Nelly. 
                                <title>L’abolition de l’esclavage: cinq siècles de combats (xvie - xxe siècle)</title>. Paris : Fayard, 2006.
                            </bibl>\n      
                        </note>\n      
                        <note resp=\"#masha\" xml:lang=\"en\">\n        
                            <p>An assembly of the French Revolution, it succeeded the Legislative Assembly in 1792, established the First Republic, and governed France until October 26, 1795.</p>\n        
                            <p>Slavery was abolished for the first time, by decree of the Convention, on February 4, 1794, which granted the rights of citizenship to all, in all the colonies, without distinction of race. This first abolition is above all an act of pragmatism, ratifying the emancipation proclaimed a few months earlier in the colony of Saint-Domingue as an effort to quell a slave insurrection that began in 1791.</p>\n        
                            <bibl>Schmidt, Nelly. 
                                <title>L’abolition de l’esclavage: cinq siècles de combats (xvie - xxe siècle)</title>. Paris : Fayard, 2006.
                            </bibl>\n      
                        </note>\n    
                    </org>\n  
                </listOrg>\n  
                <listBibl>\n    
                    <bibl xml:id=\"MU\" type=\"periodical\">\n      
                        <title>Le Moniteur universel</title>\n      
                        <note resp=\"#laure\" xml:lang=\"fr\">\n        
                            <p>
                                <title>Le Moniteur universel</title>, ou « Le Moniteur », est l’un des journaux les plus cités, sous cette forme abrégée et familière, au cours du XIX
                                <hi rend=\"superscript\">e</hi> siècle : on le retrouve, véritable élément de civilisation, dans la presse, dans les fictions, probablement dans les discussions d’alors. Ce titre, qui renvoie au langage des Lumières et de la Révolution, dérive étymologiquement du verbe 
                                <emph>monere</emph>, signifiant avertir ou conseiller. Il n’est d’abord que le sous-titre de la 
                                <title>Gazette nationale</title>, créée en 1789 par Charles-Joseph Panckouke, éditeur entre autres de l’
                                <title>Encyclopédie</title> de Diderot et d’Alembert ; ce n’est qu’en 1811 que le sous-titre, 
                                <title>Le Moniteur universel</title>, devient officiellement titre.
                            </p>\n        
                            <p>\n          Lancé en 1789, ce périodique devient en 1799 l’organe officiel du gouvernement consulaire ; il obtient ensuite, sous l’Empire, le privilège de la publication des actes du gouvernement et des communications officielles, passant de fait au statut d’« organe de propagande cardinal de l’Empire ». Il ne se limite pourtant pas à cette fonction, et survit aux différents régimes politiques comme il a survécu à la Révolution et à la mort de Panckouke en 1798. Sa survie est notamment liée à sa capacité à changer : les modèles adoptés par sa rédaction, qu'ils soient choisis ou imposés par le pouvoir en place, reflètent de manière révélatrice la culture politique propre à chaque période marquante de son histoire. Ainsi, comme le souligne Laurence Guellec, il se transforme en une grande encyclopédie pendant la Révolution, devient un instrument de propagande étatique sous le Premier Empire, se mue en recueil des discours des orateurs durant la monarchie constitutionnelle et la Seconde République, puis se positionne en tant que quotidien grand public et journal d'opinion sous le règne de Napoléon III. Ajoutons enfin que les titres constitués du syntagme « Moniteur » suivi d’un toponyme sont nombreux, au cours du siècle, en France : les titres locaux ou coloniaux adoptent cette formule pour mettre en exergue leur ancrage officiel, et respectent la distinction entre partie officielle et non officielle. \n        </p>\n        
                            <p>\n          À l’époque de la 
                                <title>Revue des Colonies</title>, 
                                <title>Le Moniteur universel</title> est organisé en deux grandes parties : la « partie officielle » et la « partie non officielle ». Les actes du gouvernement et les communications officielles, quand il y en a, sont publiés dans la partie officielle, en une – mais parfois en quelques lignes – et les autres textes, tous d’actualité mais aux thèmes divers, paraissent dans la partie non officielle sous des rubriques elles aussi variées : intérieur, nouvelles extérieures, spectacles, etc. Les textes que cite la Revue des Colonies paraissent dans la partie non officielle, le plus souvent sous la rubrique « Intérieur » et en une.   \n        
                            </p>\n        
                            <bibl>\n          Laurence Guellec, « Les journaux officiels », 
                                <title>La Civilisation du journal</title> (dir. Dominique Kalifa, Philippe Régnier, Marie-Ève Thérenty, Alain Vaillant), Paris, Nouveau Monde, 2011. \n          
                                <ref target=\"https://www.retronews.fr/titre-de-presse/gazette-nationale-ou-le-moniteur-universel\">https://www.retronews.fr/titre-de-presse/gazette-nationale-ou-le-moniteur-universel</ref>.\n        
                            </bibl>\n      
                        </note>\n      
                        <note resp=\"#laure\" xml:lang=\"en\">\n        
                            <p>\n          
                                <title>Le Moniteur universel</title>, often simply referred to as the “Le Moniteur” is one of the most frequently referenced nineteenth-century French newspapers. An important cultural signifier, it was referenced frequently in other publications, in fiction, and likely in contemporary discussions. Its title, derived from the verb 
                                <emph>monere</emph>, meaning to warn or advise, gestures at Enlightenment and Revolutionary ideals of intelligent counsel. \n        
                            </p>\n        
                            <p>\n          Initially, 
                                <title>Le Moniteur universel</title> was merely a subtitle of the 
                                <title>Gazette Nationale</title>, established in 1789 by Charles-Joseph Panckouke, who also published Diderot and d’Alembert’s 
                                <title>Encyclopédie</title>. Only in 1811 that the subtitle officially ascended to title.\n        
                            </p>\n        
                            <p>\n          The 
                                <title>Moniteur</title> had become the official voice of the consular government in 1799. Under the Empire, it gained the privilege of publishing government acts and official communications, effectively becoming the Empire's primary propaganda outlet. However, its role was not confined to this function. It survived various political regimes, including the Revolution and the death of Panckouke in 1798. Its longevity can be attributed to its adaptability, with its successive iterations reflecting the political culture of each historical stage, transitioning from an encyclopedic model during the Revolution, to a state propaganda tool during the First Empire, to a collection of political speeches under the constitutional monarchy and the Second Republic, and finally, to a daily opinion newspaper for the general public under Napoleon III.\n        
                            </p>\n        
                            <p>\n          During the print run of the 
                                <title>Revue des Colonies</title>, the “Moniteur” was divided into two main sections: the “official” and the “unofficial” part. Government documents and official communications were published in the official section, while other current events and various topics were featured in the unofficial section under a range of headings such as “Domestic,” “International,” “Entertainment,” etc. The texts cited in 
                                <title>Revue des Colonies</title> were most often found in the unofficial section, typically under the “Domestic” heading and on the front page.\n        
                            </p>\n        
                            <p>\n          Titles containing the label “Moniteur” followed by a toponym abounded throughout the nineteenth century:  local or colonial titles used this formula to emphasize their official status, maintaining the distinction between the official and unofficial sections.\n        </p>\n        
                            <bibl>\n          Laurence Guellec, “Les journaux officiels”, 
                                <title>La Civilisation du journal</title> (dir. Dominique Kalifa, Philippe Régnier, Marie-Ève Thérenty, Alain Vaillant), Paris, Nouveau Monde, 2011. 
                                <ref target=\"https://www.retronews.fr/titre-de-presse/gazette-nationale-ou-le-moniteur-universel\">https://www.retronews.fr/titre-de-presse/gazette-nationale-ou-le-moniteur-universel</ref>.\n        
                            </bibl>\n      
                        </note>\n    
                    </bibl>\n    
                    <bibl xml:id=\"RC\" type=\"periodical\">\n      
                        <title>Revue Coloniale</title>\n      
                        <note resp=\"#masha\" xml:lang=\"fr\">\n        
                            <p>Fondée par Édouard Bouvet et dirigée par Rosemond Beauvallon, la 
                                <title>Revue Coloniale</title>, sous-titrée 
                                <title>intérêts des colons : marine, commerce, littérature, beaux-arts, théâtres, modes</title>, souscrit au modèle des revues destinées aux propriétaires coloniaux, rendant compte de l'actualité politique et économique des colonies tout en ménageant une place aux contenus littéraires, culturels et mondains. Dans le numéro de décembre 1838 de la 
                                <title>Revue des Colonies</title>, Cyrille Bissette reconnaît en la 
                                <title>Revue Coloniale</title> tant un adversaire idéologique qu'un concurrent dans le paysage médiatique.
                            </p>\n      
                        </note>\n      
                        <note resp=\"#masha\" xml:lang=\"en\">\n        
                            <p>The 
                                <title>Revue Coloniale</title>, was an ephemeral monthly periodical, printed in Paris during the year 1838. Its founder Édouard Bouvet and editor Rosemond Beauvallon conceived of it on the model of many similar, contemporaneous publications reporting on political and economic questions of interest to white colonists while also attending to arts and literature, as attested by the journal’s complete title: 
                                <title>Revue Coloniale. intérêts des colons : marine, commerce, littérature, beaux-arts, théâtres, modes</title>. In the December 1838 issue of the 
                                <title>Revue des Colonies</title>, Cyrille Bissette acknowledges the 
                                <title>Revue Coloniale</title> as both an ideological opponent and a competitor in the print market.
                            </p>\n      
                        </note>\n    
                    </bibl>\n  
                </listBibl>\n
            </div>\n      
        </back>\n   
    </text>\n
</TEI>`


const parseEntities = (xmlData) => {
    const entitiesObj = {
        "persons":[],
        "org":[],
        "places":[],
        "bibl":[]
    }
    const entitiesXML = new JSDOM(xmlData, {contentType:'text/xml'}).window.document;

    const parseEntityTag = (tagName,entityName,nameAttr,idAttr) => {
        const lists = entitiesXML.querySelector(tagName);

        if(lists) {
            const entities = lists.querySelectorAll(entityName)
            let entityArr = []
            entities.forEach((entity)=> {
                let name = entity.querySelector(nameAttr).textContent
                let id = entity.getAttribute(idAttr)
                if(name && id) {
                    entityArr.push({
                        id,
                        name,
                        occurrences:[]
                    })
                }
            })
            return entityArr;
        }
        return []
    }
    entitiesObj.persons  = parseEntityTag("listPerson","person","persName","xml:id")
    entitiesObj.places   = parseEntityTag("listPlace","place","placeName","xml:id")
    entitiesObj.org      = parseEntityTag("listOrg","org","orgName","xml:id")
    entitiesObj.bibl     = parseEntityTag("listBibl","bibl","title","xml:id");

    return entitiesObj;
}

const xmlDocumentParser = (entitiesObj, teiDocument) => {
    const teiXML = new JSDOM(teiDocument, {contentType:'text/xml'}).window.document;
    const teiDoc = teiXML.querySelector("TEI")
    const fileId = teiDoc.getAttribute("xml:id")
    let occurenceObj = {
        "teiID": fileId
    }

    const findOccurences = (entities, tagName, ref) => {
        teiXML.querySelectorAll(tagName).forEach((tag) => {
            let refValue = tag.getAttribute(ref)
            if(refValue) {
                refValue = refValue.substring(1)
                const entity = entities.find((entity)=>entity.id === refValue)
                if(entity) {
                    entity.occurrences.push(occurenceObj)
                }
            }
        })
    }
    findOccurences(entitiesObj.persons,"persName","ref")
    findOccurences(entitiesObj.places,"placeName","ref")
    findOccurences(entitiesObj.org,"orgName","ref")
} 

const entitiesObj = parseEntities(xmlData)
xmlDocumentParser(entitiesObj,teiData)

console.log(JSON.stringify(entitiesObj))