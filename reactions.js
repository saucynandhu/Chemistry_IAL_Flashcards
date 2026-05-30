// reactions.js
const REACTION_CARDS = [
  // UNIT 1: ALKANES
  {
    id: "rxn-001",
    unit: "unit1",
    cat: "reactions",
    subcat: "alkanes",
    q: "Alkane + Cl₂ or Br₂ → Halogenoalkane",
    a: "Reagents & Conditions: Cl₂ or Br₂, Ultraviolet (UV) light\nMechanism: Free radical substitution (initiation, propagation, termination)\nObservations: Decolourisation of halogen gas (slowly); steamy fumes of HCl/HBr produced\nExceptions/Notes: Provides a mixture of substituted products and isomers; not suitable for pure synthesis of one product",
    detail: "Unit 1 · Topic 4: Alkanes"
  },
  {
    id: "rxn-002",
    unit: "unit1",
    cat: "reactions",
    subcat: "alkanes",
    q: "Alkane + O₂ → CO₂ + H₂O",
    a: "Reagents & Conditions: Excess oxygen, spark/flame (ignition)\nMechanism: Complete combustion (oxidation)\nObservations: Blue flame; no soot/smoke produced\nExceptions/Notes: Highly exothermic; fuels like methane or octane are used for energy",
    detail: "Unit 1 · Topic 4: Alkanes"
  },
  {
    id: "rxn-003",
    unit: "unit1",
    cat: "reactions",
    subcat: "alkanes",
    q: "Alkane + O₂ → CO or C + H₂O",
    a: "Reagents & Conditions: Limited oxygen supply, ignition\nMechanism: Incomplete combustion (oxidation)\nObservations: Orange/yellow smoky flame; black soot (carbon) or odourless toxic gas (CO)\nExceptions/Notes: Dangerous in poorly ventilated areas due to Carbon Monoxide poisoning",
    detail: "Unit 1 · Topic 4: Alkanes"
  },

  // UNIT 1: ALKENES
  {
    id: "rxn-004",
    unit: "unit1",
    cat: "reactions",
    subcat: "alkenes",
    q: "Alkene + H₂ → Alkane",
    a: "Reagents & Conditions: H₂ gas, Nickel (Ni) catalyst at 150°C (or Pt/Pd at RT)\nMechanism: Catalytic hydrogenation (electrophilic addition on surface)\nObservations: No visible change; confirmed by loss of ability to decolourise bromine water\nExceptions/Notes: Used industrially to saturate vegetable oils into margarine",
    detail: "Unit 1 · Topic 5: Alkenes"
  },
  {
    id: "rxn-005",
    unit: "unit1",
    cat: "reactions",
    subcat: "alkenes",
    q: "Alkene + HBr → Bromoalkane",
    a: "Reagents & Conditions: HBr(g) or HBr in non-polar solvent, room temperature\nMechanism: Electrophilic addition\nObservations: No visible change\nExceptions/Notes: Follows Markovnikov's rule: H adds to carbon with more H atoms to form more stable carbocation intermediate",
    detail: "Unit 1 · Topic 5: Alkenes"
  },
  {
    id: "rxn-006",
    unit: "unit1",
    cat: "reactions",
    subcat: "alkenes",
    q: "Alkene + Br₂ → Dibromoalkane",
    a: "Reagents & Conditions: Br₂ (liquid or in organic solvent) or Bromine water, RT\nMechanism: Electrophilic addition (via cyclic bromonium ion)\nObservations: Orange/brown bromine decolourises to colourless\nExceptions/Notes: Standard test for C=C unsaturation",
    detail: "Unit 1 · Topic 5: Alkenes"
  },
  {
    id: "rxn-007",
    unit: "unit1",
    cat: "reactions",
    subcat: "alkenes",
    q: "Alkene + H₂O → Alcohol",
    a: "Reagents & Conditions: Steam (H₂O(g)), concentrated H₃PO₄ catalyst, 300°C, 60-70 atm\nMechanism: Electrophilic addition (hydration)\nObservations: No visible change\nExceptions/Notes: Industrial method for ethanol production; reversible reaction",
    detail: "Unit 1 · Topic 5: Alkenes"
  },
  {
    id: "rxn-008",
    unit: "unit1",
    cat: "reactions",
    subcat: "alkenes",
    q: "Alkene + cold dilute KMnO₄ → Diol",
    a: "Reagents & Conditions: Cold, dilute, acidified or alkaline KMnO₄(aq)\nMechanism: Syn-dihydroxylation (oxidation)\nObservations: Purple MnO₄⁻ decolourises; brown precipitate of MnO₂ formed if alkaline\nExceptions/Notes: Adds two –OH groups across the double bond; used as a test for alkenes",
    detail: "Unit 1 · Topic 5: Alkenes"
  },
  {
    id: "rxn-009",
    unit: "unit1",
    cat: "reactions",
    subcat: "alkenes",
    q: "Alkene + hot conc. KMnO₄ → Cleavage products",
    a: "Reagents & Conditions: Hot, concentrated, acidified KMnO₄\nMechanism: Oxidative cleavage of C=C bond\nObservations: Purple solution decolourises\nExceptions/Notes: Produces CO₂ (from =CH₂), Carboxylic acids (from =CHR), or Ketones (from =CR₂)",
    detail: "Unit 1 · Topic 5: Alkenes"
  },
  {
    id: "rxn-010",
    unit: "unit1",
    cat: "reactions",
    subcat: "alkenes",
    q: "Alkene → Poly(alkene)",
    a: "Reagents & Conditions: High pressure, heat, and a catalyst (Ziegler-Natta or radical initiator)\nMechanism: Addition polymerisation\nObservations: Change from gas/liquid monomer to solid polymer\nExceptions/Notes: Atomic economy is 100% as all atoms in monomer end up in polymer",
    detail: "Unit 1 · Topic 5: Alkenes"
  },

  // UNIT 2: HALOGENOALKANES
  {
    id: "rxn-011",
    unit: "unit2",
    cat: "reactions",
    subcat: "halogenoalkanes",
    q: "1° Halogenoalkane + KOH(aq) → Alcohol",
    a: "Reagents & Conditions: Aqueous KOH or NaOH, heat under reflux\nMechanism: SN2 Nucleophilic substitution (bimolecular)\nObservations: No immediate change; can be tested with AgNO₃ after neutralisation\nExceptions/Notes: Ethanol used as solvent to dissolve both reactants; SN2 involves a transition state, not an intermediate",
    detail: "Unit 2 · Topic 9: Halogenoalkanes"
  },
  {
    id: "rxn-012",
    unit: "unit2",
    cat: "reactions",
    subcat: "halogenoalkanes",
    q: "1° Halogenoalkane + KOH(ethanol) → Alkene",
    a: "Reagents & Conditions: Potassium hydroxide in ethanol, heat\nMechanism: E2 Elimination\nObservations: Formation of a gaseous product (if alkene is small) or decolourises bromine water\nExceptions/Notes: OH⁻ acts as a base, not a nucleophile, in anhydrous ethanol",
    detail: "Unit 2 · Topic 9: Halogenoalkanes"
  },
  {
    id: "rxn-013",
    unit: "unit2",
    cat: "reactions",
    subcat: "halogenoalkanes",
    q: "Halogenoalkane + excess NH₃(ethanol) → 1° Amine",
    a: "Reagents & Conditions: Concentrated Ammonia in ethanol, excess NH₃, sealed tube, heat\nMechanism: Nucleophilic substitution\nObservations: Smelly (fishy) amine produced; steamy fumes of HX (captured by NH₃ to form NH₄X)\nExceptions/Notes: Excess ammonia prevents further substitution to 2°/3° amines",
    detail: "Unit 2 · Topic 9: Halogenoalkanes"
  },
  {
    id: "rxn-014",
    unit: "unit2",
    cat: "reactions",
    subcat: "halogenoalkanes",
    q: "Halogenoalkane + KCN(ethanol) → Nitrile",
    a: "Reagents & Conditions: Potassium cyanide in ethanol, heat under reflux\nMechanism: Nucleophilic substitution\nObservations: Formation of a liquid layer\nExceptions/Notes: Increases the carbon chain length by one; KCN is highly toxic",
    detail: "Unit 2 · Topic 9: Halogenoalkanes"
  },
  {
    id: "rxn-015",
    unit: "unit2",
    cat: "reactions",
    subcat: "halogenoalkanes",
    q: "3° Halogenoalkane + KOH(aq) → Alcohol",
    a: "Reagents & Conditions: Aqueous KOH/NaOH, heat under reflux\nMechanism: SN1 Nucleophilic substitution (unimolecular)\nObservations: Faster reaction than 1° halogenoalkanes\nExceptions/Notes: Involves a stable tertiary carbocation intermediate; rate depends only on [RX]",
    detail: "Unit 2 · Topic 9: Halogenoalkanes"
  },

  // UNIT 2: ALCOHOLS
  {
    id: "rxn-016",
    unit: "unit2",
    cat: "reactions",
    subcat: "alcohols",
    q: "1° Alcohol + K₂Cr₂O₇/H⁺ (distil) → Aldehyde",
    a: "Reagents & Conditions: Potassium dichromate(VI), dilute H₂SO₄, warm, immediate distillation\nMechanism: Partial oxidation\nObservations: Orange dichromate turns green (Cr³⁺)\nExceptions/Notes: Distillation prevents further oxidation to carboxylic acid",
    detail: "Unit 2 · Topic 10: Alcohols"
  },
  {
    id: "rxn-017",
    unit: "unit2",
    cat: "reactions",
    subcat: "alcohols",
    q: "1° Alcohol + K₂Cr₂O₇/H⁺ (reflux) → Carboxylic Acid",
    a: "Reagents & Conditions: Excess Potassium dichromate(VI), dilute H₂SO₄, heat under reflux\nMechanism: Full oxidation\nObservations: Orange dichromate turns green; smell of aldehyde replaced by vinegar-like smell\nExceptions/Notes: Reflux ensures any aldehyde formed is returned to the flask for further oxidation",
    detail: "Unit 2 · Topic 10: Alcohols"
  },
  {
    id: "rxn-018",
    unit: "unit2",
    cat: "reactions",
    subcat: "alcohols",
    q: "2° Alcohol + K₂Cr₂O₇/H⁺ → Ketone",
    a: "Reagents & Conditions: Potassium dichromate(VI), dilute H₂SO₄, heat under reflux\nMechanism: Oxidation\nObservations: Orange dichromate turns green\nExceptions/Notes: Ketones cannot be further oxidised under these conditions",
    detail: "Unit 2 · Topic 10: Alcohols"
  },
  {
    id: "rxn-019",
    unit: "unit2",
    cat: "reactions",
    subcat: "alcohols",
    q: "3° Alcohol + K₂Cr₂O₇/H⁺ → No Reaction",
    a: "Reagents & Conditions: Potassium dichromate(VI), dilute H₂SO₄, heat under reflux\nMechanism: No reaction\nObservations: Solution remains orange\nExceptions/Notes: 3° alcohols lack a H atom on the carbon carrying the –OH group, preventing easy oxidation",
    detail: "Unit 2 · Topic 10: Alcohols"
  },
  {
    id: "rxn-020",
    unit: "unit2",
    cat: "reactions",
    subcat: "alcohols",
    q: "Alcohol + conc. H₂SO₄ → Alkene",
    a: "Reagents & Conditions: Concentrated H₂SO₄ or H₃PO₄ catalyst, ~170°C\nMechanism: Elimination (dehydration)\nObservations: Gas produced; product decolourises bromine water\nExceptions/Notes: Acid acts as a catalyst and dehydrating agent",
    detail: "Unit 2 · Topic 10: Alcohols"
  },
  {
    id: "rxn-021",
    unit: "unit2",
    cat: "reactions",
    subcat: "alcohols",
    q: "Alcohol + Carboxylic Acid → Ester",
    a: "Reagents & Conditions: Concentrated H₂SO₄ catalyst, heat under reflux\nMechanism: Esterification (nucleophilic substitution/condensation)\nObservations: Sweet fruity smell; oily layer formed on top of water\nExceptions/Notes: Reversible reaction; equilibrium shifted by removing water or using excess alcohol",
    detail: "Unit 2 · Topic 10: Alcohols"
  },
  {
    id: "rxn-022",
    unit: "unit2",
    cat: "reactions",
    subcat: "alcohols",
    q: "Alcohol + PCl₅ → Chloroalkane",
    a: "Reagents & Conditions: Phosphorus(V) chloride, room temperature, dry conditions\nMechanism: Substitution\nObservations: Misty/steamy fumes of HCl produced; test with glass rod dipped in NH₃ (white smoke)\nExceptions/Notes: Used as a test for the hydroxyl (–OH) group",
    detail: "Unit 2 · Topic 10: Alcohols"
  },
  {
    id: "rxn-023",
    unit: "unit2",
    cat: "reactions",
    subcat: "alcohols",
    q: "Alcohol + Na → Sodium Alkoxide + H₂",
    a: "Reagents & Conditions: Sodium metal, room temperature\nMechanism: Redox / Acid-base\nObservations: Effervescence (fizzing); Na dissolves; white solid produced\nExceptions/Notes: Slower reaction than Na + Water; test for H₂ with lit splint (squeaky pop)",
    detail: "Unit 2 · Topic 10: Alcohols"
  },

  // UNIT 2: INORGANIC
  {
    id: "rxn-024",
    unit: "unit2",
    cat: "reactions",
    subcat: "inorganic",
    q: "Group 1 Metal + Water → Hydroxide + H₂",
    a: "Reagents & Conditions: Room temperature\nMechanism: Redox (Metal is oxidised)\nObservations: Fizzing; metal floats and moves (Na/K); lilac flame for K; metal dissolves\nExceptions/Notes: Reactivity increases down the group; solution becomes highly alkaline (pH 13-14)",
    detail: "Unit 2 · Topic 7: Groups 1 and 2"
  },
  {
    id: "rxn-025",
    unit: "unit2",
    cat: "reactions",
    subcat: "inorganic",
    q: "Group 2 Metal + Water → Hydroxide + H₂",
    a: "Reagents & Conditions: Room temperature or steam (for Mg)\nMechanism: Redox\nObservations: Mg reacts slowly with water but vigorously with steam (giving MgO + H₂); Ca/Ba react vigorously with water\nExceptions/Notes: Reactivity increases down the group as Ionisation Energy decreases",
    detail: "Unit 2 · Topic 7: Groups 1 and 2"
  },
  {
    id: "rxn-026",
    unit: "unit2",
    cat: "reactions",
    subcat: "inorganic",
    q: "Group 2 Metal + Acid → Salt + H₂",
    a: "Reagents & Conditions: Dilute HCl or H₂SO₄, room temperature\nMechanism: Redox / Displacement\nObservations: Rapid effervescence; metal disappears; solution heats up\nExceptions/Notes: Group 2 sulfates become less soluble down the group; Ba + H₂SO₄ is slow due to insoluble BaSO₄ coating",
    detail: "Unit 2 · Topic 7: Groups 1 and 2"
  },
  {
    id: "rxn-027",
    unit: "unit2",
    cat: "reactions",
    subcat: "inorganic",
    q: "Group 2 Oxide + Water → Hydroxide",
    a: "Reagents & Conditions: Room temperature\nMechanism: Acid-base reaction\nObservations: White solid dissolves to form a colourless alkaline solution\nExceptions/Notes: Solubility of Group 2 hydroxides increases down the group (Mg(OH)₂ is barely soluble, Ba(OH)₂ is very soluble)",
    detail: "Unit 2 · Topic 7: Groups 1 and 2"
  },
  {
    id: "rxn-028",
    unit: "unit2",
    cat: "reactions",
    subcat: "inorganic",
    q: "Cl₂ + cold dilute NaOH → NaCl + NaOCl + H₂O",
    a: "Reagents & Conditions: Cold, dilute aqueous Sodium Hydroxide\nMechanism: Disproportionation (Cl is both oxidised and reduced)\nObservations: Greenish colour of Cl₂ disappears; pale yellow solution formed\nExceptions/Notes: Product NaOCl is the active ingredient in household bleach",
    detail: "Unit 2 · Topic 8: Group 7"
  },
  {
    id: "rxn-029",
    unit: "unit2",
    cat: "reactions",
    subcat: "inorganic",
    q: "Cl₂ + hot conc. NaOH → NaCl + NaClO₃ + H₂O",
    a: "Reagents & Conditions: Hot, concentrated aqueous Sodium Hydroxide\nMechanism: Disproportionation\nObservations: Greenish colour of Cl₂ disappears\nExceptions/Notes: Forms Chlorate(V) instead of Chlorate(I)",
    detail: "Unit 2 · Topic 8: Group 7"
  },
  {
    id: "rxn-030",
    unit: "unit2",
    cat: "reactions",
    subcat: "inorganic",
    q: "Halide Ion + AgNO₃(aq) → AgX(s)",
    a: "Reagents & Conditions: Silver Nitrate solution, acidified with dilute HNO₃\nMechanism: Precipitation / Ion exchange\nObservations: Cl⁻: White ppt (dissolves in dil. NH₃); Br⁻: Cream ppt (dissolves in conc. NH₃); I⁻: Yellow ppt (insoluble in NH₃)\nExceptions/Notes: Nitric acid must be used to remove carbonate ions that also form ppts",
    detail: "Unit 2 · Topic 8: Group 7"
  },
  {
    id: "rxn-031",
    unit: "unit2",
    cat: "reactions",
    subcat: "inorganic",
    q: "Displacement reactions of Halogens",
    a: "Reagents & Conditions: Halogen (Cl₂, Br₂) added to aqueous halide (Br⁻, I⁻)\nMechanism: Redox / Displacement\nObservations: Cl₂ + Br⁻ → Orange (Br₂ formed); Cl₂ + I⁻ → Brown (I₂ formed); Br₂ + I⁻ → Brown (I₂ formed)\nExceptions/Notes: A more reactive halogen (higher in group) displaces a less reactive halide from its salt",
    detail: "Unit 2 · Topic 8: Group 7"
  },

  // UNIT 4: CARBONYLS
  {
    id: "rxn-032",
    unit: "unit4",
    cat: "reactions",
    subcat: "carbonyls",
    q: "Aldehyde/Ketone + LiAlH₄ → Alcohol",
    a: "Reagents & Conditions: LiAlH₄ in dry ether, then add H₂O/dil. acid\nMechanism: Nucleophilic addition (Reduction)\nObservations: No visible change during addition; vigorous reaction with water\nExceptions/Notes: LiAlH₄ is a powerful reducing agent; reduces both aldehydes and ketones; must be used in anhydrous conditions",
    detail: "Unit 4 · Topic 15: Carbonyls"
  },
  {
    id: "rxn-033",
    unit: "unit4",
    cat: "reactions",
    subcat: "carbonyls",
    q: "Aldehyde/Ketone + NaBH₄ → Alcohol",
    a: "Reagents & Conditions: NaBH₄ in ethanol or water solvent, room temperature\nMechanism: Nucleophilic addition (Reduction by H⁻)\nObservations: No visible change\nExceptions/Notes: Safer reagent than LiAlH₄; can be used in protic solvents; does not reduce C=C bonds",
    detail: "Unit 4 · Topic 15: Carbonyls"
  },
  {
    id: "rxn-034",
    unit: "unit4",
    cat: "reactions",
    subcat: "carbonyls",
    q: "Aldehyde/Ketone + HCN/KCN → Hydroxynitrile",
    a: "Reagents & Conditions: KCN(aq) followed by dilute H₂SO₄, or HCN with KCN catalyst, pH 5-8\nMechanism: Nucleophilic addition (CN⁻ is the nucleophile)\nObservations: No visible change\nExceptions/Notes: If starting from an unsymmetrical carbonyl, produces a racemic mixture of enantiomers due to planar C=O",
    detail: "Unit 4 · Topic 15: Carbonyls"
  },
  {
    id: "rxn-035",
    unit: "unit4",
    cat: "reactions",
    subcat: "carbonyls",
    q: "Aldehyde/Ketone + 2,4-DNPH → Orange PPT",
    a: "Reagents & Conditions: 2,4-dinitrophenylhydrazine (Brady's reagent), methanol/acid solvent\nMechanism: Nucleophilic addition-elimination (Condensation)\nObservations: Bright orange or yellow crystalline precipitate forms\nExceptions/Notes: Used to identify C=O; MP of purified derivative identifies the specific carbonyl",
    detail: "Unit 4 · Topic 15: Carbonyls"
  },
  {
    id: "rxn-036",
    unit: "unit4",
    cat: "reactions",
    subcat: "carbonyls",
    q: "Aldehyde + Tollens' Reagent → Silver Mirror",
    a: "Reagents & Conditions: [Ag(NH₃)₂]⁺, warm in a water bath\nMechanism: Oxidation of aldehyde to carboxylic acid\nObservations: Silver mirror formed on glass or black precipitate of Ag\nExceptions/Notes: Ketones give no reaction; used to distinguish aldehydes from ketones",
    detail: "Unit 4 · Topic 15: Carbonyls"
  },
  {
    id: "rxn-037",
    unit: "unit4",
    cat: "reactions",
    subcat: "carbonyls",
    q: "Aldehyde + Fehling's Solution → Brick Red PPT",
    a: "Reagents & Conditions: Fehling's A (CuSO₄) and B (Tartrate/NaOH), warm in water bath\nMechanism: Oxidation of aldehyde (Cu²⁺ reduced to Cu⁺)\nObservations: Blue solution turns to a brick-red precipitate (Cu₂O)\nExceptions/Notes: Ketones give no reaction; aromatic aldehydes (like benzaldehyde) also give no reaction with Fehling's",
    detail: "Unit 4 · Topic 15: Carbonyls"
  },
  {
    id: "rxn-038",
    unit: "unit4",
    cat: "reactions",
    subcat: "carbonyls",
    q: "Aldehyde + K₂Cr₂O₇/H⁺ → Carboxylic Acid",
    a: "Reagents & Conditions: Potassium dichromate(VI), dilute H₂SO₄, heat under reflux\nMechanism: Oxidation\nObservations: Orange solution turns green\nExceptions/Notes: Ketones give no reaction",
    detail: "Unit 4 · Topic 15: Carbonyls"
  },
  {
    id: "rxn-039",
    unit: "unit4",
    cat: "reactions",
    subcat: "carbonyls",
    q: "CH₃CO– Compound + I₂/NaOH → CHI₃ Yellow PPT",
    a: "Reagents & Conditions: Iodine and aqueous Sodium Hydroxide, warm\nMechanism: Triiodination and cleavage (Iodoform reaction)\nObservations: Yellow crystalline precipitate of Triiodomethane (CHI₃) formed; antiseptic smell\nExceptions/Notes: Positive for methyl ketones (RCOCH₃) and ethanol/secondary methyl alcohols (RCH(OH)CH₃)",
    detail: "Unit 4 · Topic 15: Carbonyls"
  },

  // UNIT 4: CARBOXYLIC ACIDS
  {
    id: "rxn-040",
    unit: "unit4",
    cat: "reactions",
    subcat: "carboxylic-acids",
    q: "Carboxylic Acid + LiAlH₄ → 1° Alcohol",
    a: "Reagents & Conditions: LiAlH₄ in dry ether, then add H₂O/dil. acid\nMechanism: Reduction\nObservations: Effervescence when water added (to destroy excess LiAlH₄)\nExceptions/Notes: Cannot use NaBH₄ to reduce carboxylic acids",
    detail: "Unit 4 · Topic 16: Carboxylic Acids"
  },
  {
    id: "rxn-041",
    unit: "unit4",
    cat: "reactions",
    subcat: "carboxylic-acids",
    q: "Carboxylic Acid + PCl₅ → Acyl Chloride",
    a: "Reagents & Conditions: Phosphorus(V) chloride, room temperature, anhydrous conditions\nMechanism: Substitution\nObservations: Steamy fumes of HCl; vigorous reaction\nExceptions/Notes: Products are RCOCl, POCl₃, and HCl; POCl₃ is liquid at RT",
    detail: "Unit 4 · Topic 16: Carboxylic Acids"
  },
  {
    id: "rxn-042",
    unit: "unit4",
    cat: "reactions",
    subcat: "carboxylic-acids",
    q: "Carboxylic Acid + Alcohol → Ester",
    a: "Reagents & Conditions: Concentrated H₂SO₄ catalyst, heat under reflux\nMechanism: Fischer Esterification (nucleophilic substitution/condensation)\nObservations: Sweet fruity smell\nExceptions/Notes: Reversible; low yield unless water removed; slower than acyl chloride method",
    detail: "Unit 4 · Topic 16: Carboxylic Acids"
  },
  {
    id: "rxn-043",
    unit: "unit4",
    cat: "reactions",
    subcat: "carboxylic-acids",
    q: "Carboxylic Acid + Na₂CO₃ → Salt + CO₂ + H₂O",
    a: "Reagents & Conditions: Sodium carbonate (solid or aq), room temperature\nMechanism: Acid-base reaction\nObservations: Vigorous effervescence; solid dissolves; colourless gas turns limewater cloudy\nExceptions/Notes: Used to distinguish carboxylic acids from phenols (phenols are not acidic enough to react with carbonates)",
    detail: "Unit 4 · Topic 16: Carboxylic Acids"
  },
  {
    id: "rxn-044",
    unit: "unit4",
    cat: "reactions",
    subcat: "carboxylic-acids",
    q: "Carboxylic Acid + NaOH → Sodium Salt + H₂O",
    a: "Reagents & Conditions: Aqueous Sodium Hydroxide, room temperature\nMechanism: Neutralisation (Acid-base)\nObservations: No visible change; solution heats up slightly\nExceptions/Notes: Produces water-soluble sodium carboxylate salts",
    detail: "Unit 4 · Topic 16: Carboxylic Acids"
  },

  // UNIT 4: ACYL CHLORIDES
  {
    id: "rxn-045",
    unit: "unit4",
    cat: "reactions",
    subcat: "acyl-chlorides",
    q: "Acyl Chloride + H₂O → Carboxylic Acid + HCl",
    a: "Reagents & Conditions: Room temperature, water\nMechanism: Nucleophilic addition-elimination\nObservations: Vigorous reaction; misty steamy fumes of HCl produced; solution becomes strongly acidic\nExceptions/Notes: Much more reactive than halogenoalkanes due to polar C=O and Cl group",
    detail: "Unit 4 · Topic 16: Carboxylic Acids"
  },
  {
    id: "rxn-046",
    unit: "unit4",
    cat: "reactions",
    subcat: "acyl-chlorides",
    q: "Acyl Chloride + Alcohol → Ester + HCl",
    a: "Reagents & Conditions: Room temperature, anhydrous alcohol\nMechanism: Nucleophilic addition-elimination\nObservations: Vigorous reaction; steamy fumes of HCl; fruity smell of ester produced\nExceptions/Notes: Superior to Fischer esterification: not reversible, higher yield, no catalyst needed",
    detail: "Unit 4 · Topic 16: Carboxylic Acids"
  },
  {
    id: "rxn-047",
    unit: "unit4",
    cat: "reactions",
    subcat: "acyl-chlorides",
    q: "Acyl Chloride + conc. NH₃ → 1° Amide + HCl",
    a: "Reagents & Conditions: Room temperature, concentrated aqueous Ammonia\nMechanism: Nucleophilic addition-elimination\nObservations: Violent reaction; white smoke of NH₄Cl produced\nExceptions/Notes: Amide group is –CONH₂",
    detail: "Unit 4 · Topic 16: Carboxylic Acids"
  },
  {
    id: "rxn-048",
    unit: "unit4",
    cat: "reactions",
    subcat: "acyl-chlorides",
    q: "Acyl Chloride + 1° Amine → 2° Amide + HCl",
    a: "Reagents & Conditions: Room temperature, Primary Amine (RNH₂)\nMechanism: Nucleophilic addition-elimination\nObservations: Vigorous reaction; white solid amide produced\nExceptions/Notes: Used in condensation polymerisation to make polyamides (like Kevlar)",
    detail: "Unit 4 · Topic 16: Carboxylic Acids"
  },

  // UNIT 4: ESTERS
  {
    id: "rxn-049",
    unit: "unit4",
    cat: "reactions",
    subcat: "esters",
    q: "Ester + H₂O + dil. acid → Carboxylic Acid + Alcohol",
    a: "Reagents & Conditions: Dilute HCl or H₂SO₄, heat under reflux\nMechanism: Acid-catalysed hydrolysis\nObservations: Fruity smell disappears slowly\nExceptions/Notes: Reversible reaction; results in an equilibrium mixture",
    detail: "Unit 4 · Topic 16: Carboxylic Acids"
  },
  {
    id: "rxn-050",
    unit: "unit4",
    cat: "reactions",
    subcat: "esters",
    q: "Ester + NaOH(aq) → Carboxylate salt + Alcohol",
    a: "Reagents & Conditions: Aqueous Sodium Hydroxide, heat under reflux\nMechanism: Alkaline hydrolysis (Saponification)\nObservations: Fruity smell disappears; clear solution formed\nExceptions/Notes: Irreversible as carboxylate ion is resonance-stabilised and not nucleophilic; base is a reactant, not a catalyst",
    detail: "Unit 4 · Topic 16: Carboxylic Acids"
  },
  {
    id: "rxn-051",
    unit: "unit4",
    cat: "reactions",
    subcat: "esters",
    q: "Dicarboxylic Acid + Diol → Polyester",
    a: "Reagents & Conditions: Heat, catalyst (e.g. Sb₂O₃)\nMechanism: Condensation polymerisation\nObservations: Formation of a solid/fibrous material\nExceptions/Notes: Water is eliminated; e.g. Terylene from benzene-1,4-dicarboxylic acid and ethane-1,2-diol",
    detail: "Unit 4 · Topic 16: Carboxylic Acids"
  },

  // UNIT 4: NITRILES
  {
    id: "rxn-052",
    unit: "unit4",
    cat: "reactions",
    subcat: "nitriles",
    q: "Nitrile + LiAlH₄ → 1° Amine",
    a: "Reagents & Conditions: LiAlH₄ in dry ether, then add dil. acid\nMechanism: Reduction\nObservations: Effervescence during workup\nExceptions/Notes: Can also be reduced industrially by H₂ gas with Ni catalyst",
    detail: "Unit 4 · Topic 17: Nitriles and Amines"
  },
  {
    id: "rxn-053",
    unit: "unit4",
    cat: "reactions",
    subcat: "nitriles",
    q: "Nitrile + dil. HCl/H₂SO₄ → Carboxylic Acid",
    a: "Reagents & Conditions: Dilute acid, heat under reflux\nMechanism: Acid hydrolysis\nObservations: No visible change; smell of ammonia produced (as NH₄⁺ salt)\nExceptions/Notes: Overall reaction: RCN + 2H₂O + HCl → RCOOH + NH₄Cl",
    detail: "Unit 4 · Topic 17: Nitriles and Amines"
  },
  {
    id: "rxn-054",
    unit: "unit4",
    cat: "reactions",
    subcat: "nitriles",
    q: "Nitrile + NaOH(aq) → Carboxylate salt",
    a: "Reagents & Conditions: Aqueous NaOH, heat under reflux\nMechanism: Base hydrolysis\nObservations: Pungent smell of Ammonia gas (NH₃)\nExceptions/Notes: Ammonia gas can be tested with damp red litmus paper (turns blue)",
    detail: "Unit 4 · Topic 17: Nitriles and Amines"
  },

  // UNIT 5: ARENES
  {
    id: "rxn-055",
    unit: "unit5",
    cat: "reactions",
    subcat: "arenes",
    q: "Benzene + Br₂ → Bromobenzene + HBr",
    a: "Reagents & Conditions: Liquid Bromine, anhydrous FeBr₃ or AlBr₃ catalyst (halogen carrier)\nMechanism: Electrophilic Aromatic Substitution (EAS)\nObservations: Orange bromine decolourises; steamy fumes of HBr produced\nExceptions/Notes: Catalyst generates the Br⁺ electrophile; cannot use bromine water (not reactive enough)",
    detail: "Unit 5 · Topic 18: Arenes"
  },
  {
    id: "rxn-056",
    unit: "unit5",
    cat: "reactions",
    subcat: "arenes",
    q: "Benzene + conc. HNO₃ + conc. H₂SO₄ → Nitrobenzene",
    a: "Reagents & Conditions: Concentrated HNO₃ and H₂SO₄ mixed, temperature strictly 50-55°C\nMechanism: Electrophilic Aromatic Substitution (EAS)\nObservations: Pale yellow oily liquid formed; almond smell\nExceptions/Notes: NO₂⁺ (nitronium ion) is the electrophile; H₂SO₄ is the catalyst; >55°C leads to dinitration",
    detail: "Unit 5 · Topic 18: Arenes"
  },
  {
    id: "rxn-057",
    unit: "unit5",
    cat: "reactions",
    subcat: "arenes",
    q: "Benzene + RCOCl → Acylbenzene",
    a: "Reagents & Conditions: Acyl Chloride, anhydrous AlCl₃ catalyst, reflux\nMechanism: Friedel-Crafts Acylation (EAS)\nObservations: Steamy fumes of HCl produced\nExceptions/Notes: Electrophile is the acylium ion (RC≡O⁺); AlCl₃ must be dry",
    detail: "Unit 5 · Topic 18: Arenes"
  },
  {
    id: "rxn-058",
    unit: "unit5",
    cat: "reactions",
    subcat: "arenes",
    q: "Benzene + RCl → Alkylbenzene",
    a: "Reagents & Conditions: Halogenoalkane, anhydrous AlCl₃ catalyst, reflux\nMechanism: Friedel-Crafts Alkylation (EAS)\nObservations: Steamy fumes of HCl produced\nExceptions/Notes: Electrophile is R⁺ carbocation; longer chains prone to carbocation rearrangement (e.g. propyl → isopropyl)",
    detail: "Unit 5 · Topic 18: Arenes"
  },
  {
    id: "rxn-059",
    unit: "unit5",
    cat: "reactions",
    subcat: "arenes",
    q: "Benzene + 3H₂ → Cyclohexane",
    a: "Reagents & Conditions: H₂ gas, Nickel catalyst, 200°C, 30 atm (high pressure)\nMechanism: Addition (Hydrogenation)\nObservations: No visible change; substantial volume of H₂ gas consumed\nExceptions/Notes: Difficult due to loss of aromatic stability; resonance energy of benzene is ~150 kJ/mol",
    detail: "Unit 5 · Topic 18: Arenes"
  },
  {
    id: "rxn-060",
    unit: "unit5",
    cat: "reactions",
    subcat: "arenes",
    q: "Nitrobenzene → Phenylamine",
    a: "Reagents & Conditions: Tin (Sn) and concentrated HCl, heat under reflux; then add NaOH(aq)\nMechanism: Reduction\nObservations: Pungent smell of amine; solution becomes clear then cloudy as amine liberated\nExceptions/Notes: Six-electron reduction; Sn is the reducing agent",
    detail: "Unit 5 · Topic 18: Arenes"
  },

  // UNIT 5: AMINES
  {
    id: "rxn-061",
    unit: "unit5",
    cat: "reactions",
    subcat: "amines",
    q: "Amine + HCl → Ammonium salt",
    a: "Reagents & Conditions: Dilute HCl, room temperature\nMechanism: Acid-base (Neutralisation)\nObservations: Smelly amine dissolves to form an odourless solution; solution heats up\nExceptions/Notes: Lone pair on Nitrogen accepts H⁺; aliphatic amines are more basic than ammonia",
    detail: "Unit 5 · Topic 19: Amines"
  },
  {
    id: "rxn-062",
    unit: "unit5",
    cat: "reactions",
    subcat: "amines",
    q: "Amine + Acyl Chloride → Amide",
    a: "Reagents & Conditions: Acyl Chloride, room temperature\nMechanism: Nucleophilic addition-elimination\nObservations: Violent reaction; white solid produced; misty fumes of HCl\nExceptions/Notes: Primary amines give 2° amides",
    detail: "Unit 5 · Topic 19: Amines"
  },
  {
    id: "rxn-063",
    unit: "unit5",
    cat: "reactions",
    subcat: "amines",
    q: "1° Amine + Halogenoalkane → 2° Amine",
    a: "Reagents & Conditions: Heat in a sealed tube or reflux\nMechanism: Nucleophilic substitution\nObservations: No visible change\nExceptions/Notes: Difficult to stop at 2°; usually results in mixture of 2°, 3° and quaternary salts",
    detail: "Unit 5 · Topic 19: Amines"
  },
  {
    id: "rxn-064",
    unit: "unit5",
    cat: "reactions",
    subcat: "amines",
    q: "Phenylamine + NaNO₂/HCl → Diazonium Salt",
    a: "Reagents & Conditions: NaNO₂ and concentrated HCl (to make HNO₂ in situ), temperature < 10°C\nMechanism: Diazotisation\nObservations: Clear solution produced; ice-cold conditions necessary\nExceptions/Notes: Benzenediazonium chloride is unstable above 10°C and explodes when dry",
    detail: "Unit 5 · Topic 19: Amines"
  },
  {
    id: "rxn-065",
    unit: "unit5",
    cat: "reactions",
    subcat: "amines",
    q: "Diazonium salt + Phenol/Amine → Azo Dye",
    a: "Reagents & Conditions: Alkaline Phenol or Aromatic Amine, temperature < 10°C\nMechanism: Coupling (EAS)\nObservations: Immediate formation of an intensely coloured (red/orange/yellow) precipitate or solution\nExceptions/Notes: –N=N– group is the chromophore; used industrially as fabric dyes",
    detail: "Unit 5 · Topic 19: Amines"
  },

  // UNIT 5: AMINO ACIDS
  {
    id: "rxn-066",
    unit: "unit5",
    cat: "reactions",
    subcat: "amino-acids",
    q: "Amino Acid + Amino Acid → Dipeptide",
    a: "Reagents & Conditions: Catalyst/Enzyme, room temperature (lab synthesis requires protecting groups)\nMechanism: Condensation (Amidation)\nObservations: Loss of water\nExceptions/Notes: Bond formed is the Peptide Bond (–CONH–); orientation matters (A+B or B+A)",
    detail: "Unit 5 · Topic 20: Amino Acids"
  },
  {
    id: "rxn-067",
    unit: "unit5",
    cat: "reactions",
    subcat: "amino-acids",
    q: "Protein + HCl(aq) → Amino Acids",
    a: "Reagents & Conditions: 6M HCl, heat under reflux for 24 hours\nMechanism: Acid hydrolysis of peptide bonds\nObservations: Solid protein dissolves to form a clear solution\nExceptions/Notes: Breaks protein down into its constituent amino acids (as NH₃⁺ salts)",
    detail: "Unit 5 · Topic 20: Amino Acids"
  },
  {
    id: "rxn-068",
    unit: "unit5",
    cat: "reactions",
    subcat: "amino-acids",
    q: "Protein + NaOH(aq) → Amino Acid Salts",
    a: "Reagents & Conditions: Aqueous NaOH, heat under reflux\nMechanism: Base hydrolysis\nObservations: Protein dissolves\nExceptions/Notes: Carboxylic acid groups are in the salt form (–COO⁻ Na⁺)",
    detail: "Unit 5 · Topic 20: Amino Acids"
  },

  // UNIT 5: POLYAMIDES
  {
    id: "rxn-069",
    unit: "unit5",
    cat: "reactions",
    subcat: "esters",
    q: "Diamine + Diacid → Polyamide + H₂O",
    a: "Reagents & Conditions: High temperature, vacuum (to remove water)\nMechanism: Condensation polymerisation\nObservations: Formation of solid polymer melt\nExceptions/Notes: e.g. Nylon-6,6 from hexanedioic acid and 1,6-diaminohexane",
    detail: "Unit 5 · Topic 20: Amino Acids"
  },
  {
    id: "rxn-070",
    unit: "unit5",
    cat: "reactions",
    subcat: "esters",
    q: "Diamine + Diacyl Chloride → Polyamide + HCl",
    a: "Reagents & Conditions: Room temperature, interface between two phases\nMechanism: Condensation polymerisation\nObservations: Fast formation of solid polymer at the interface\nExceptions/Notes: e.g. Kevlar from benzene-1,4-diamine and benzene-1,4-dicarbonyl chloride",
    detail: "Unit 5 · Topic 20: Amino Acids"
  },

  // UNIT 5: TRANSITION METALS
  {
    id: "rxn-071",
    unit: "unit5",
    cat: "reactions",
    subcat: "transition-metals",
    q: "[Cu(H₂O)₆]²⁺ + excess NH₃(aq) → [Cu(NH₃)₄(H₂O)₂]²⁺",
    a: "Reagents & Conditions: Concentrated aqueous Ammonia added to Copper(II) salt solution\nMechanism: Partial ligand exchange\nObservations: Pale blue solution → Light blue ppt (Cu(OH)₂) → Deep blue solution\nExceptions/Notes: The complex is octahedral but elongated due to Jahn-Teller effect; only 4 NH₃ ligands replace water",
    detail: "Unit 5 · Topic 21: Transition Metals"
  },
  {
    id: "rxn-072",
    unit: "unit5",
    cat: "reactions",
    subcat: "transition-metals",
    q: "[Cu(H₂O)₆]²⁺ + conc. HCl → [CuCl₄]²⁻",
    a: "Reagents & Conditions: Concentrated HCl, room temperature\nMechanism: Ligand exchange\nObservations: Pale blue solution turns yellow/green\nExceptions/Notes: Large Cl⁻ ligands force a change in coordination number from 6 to 4; shape is tetrahedral",
    detail: "Unit 5 · Topic 21: Transition Metals"
  },
  {
    id: "rxn-073",
    unit: "unit5",
    cat: "reactions",
    subcat: "transition-metals",
    q: "[Co(H₂O)₆]²⁺ + conc. HCl → [CoCl₄]²⁻",
    a: "Reagents & Conditions: Concentrated HCl, room temperature\nMechanism: Ligand exchange\nObservations: Pink solution turns deep blue\nExceptions/Notes: Tetrahedral shape; common test for water (blue silica gel/paper turns pink)",
    detail: "Unit 5 · Topic 21: Transition Metals"
  },
  {
    id: "rxn-074",
    unit: "unit5",
    cat: "reactions",
    subcat: "transition-metals",
    q: "TM Ion + NaOH(aq) → Metal Hydroxide PPT",
    a: "Reagents & Conditions: Dilute aqueous Sodium Hydroxide\nMechanism: Acid-base / Precipitation\nObservations: Fe²⁺: Green ppt (turns brown in air); Fe³⁺: Orange-brown ppt; Cu²⁺: Pale blue ppt; Cr³⁺: Green ppt (dissolves in excess to green solution)\nExceptions/Notes: Amphoteric hydroxides (like Cr or Zn) dissolve in excess NaOH",
    detail: "Unit 5 · Topic 21: Transition Metals"
  },
  {
    id: "rxn-075",
    unit: "unit5",
    cat: "reactions",
    subcat: "transition-metals",
    q: "TM Ion + excess NH₃(aq) → Complex Ion",
    a: "Reagents & Conditions: Excess concentrated aqueous Ammonia\nMechanism: Ligand exchange\nObservations: Cu²⁺: Deep blue solution; Co²⁺: Yellow/brown solution; Cr³⁺: Purple solution\nExceptions/Notes: Initial reaction forms the metal hydroxide precipitate, which then dissolves into the complex",
    detail: "Unit 5 · Topic 21: Transition Metals"
  },
  {
    id: "rxn-076",
    unit: "unit5",
    cat: "reactions",
    subcat: "transition-metals",
    q: "Vanadium species interconversions",
    a: "Reagents & Conditions: Zinc metal and HCl (reducing agent); KMnO₄ (oxidising agent)\nMechanism: Redox (stepwise reduction/oxidation)\nObservations: Yellow (VO₂⁺, +5) → Blue (VO²⁺, +4) → Green (V³⁺, +3) → Violet (V²⁺, +2)\nExceptions/Notes: Zn/H⁺ can reduce all the way to V²⁺; KMnO₄ can re-oxidise back to +5",
    detail: "Unit 5 · Topic 21: Transition Metals"
  },
  {
    id: "rxn-077",
    unit: "unit5",
    cat: "reactions",
    subcat: "transition-metals",
    q: "MnO₄⁻ + Fe²⁺ + H₂SO₄ → Mn²⁺ + Fe³⁺",
    a: "Reagents & Conditions: Acidified KMnO₄ titrated into Fe²⁺ solution\nMechanism: Redox titration (Mn reduced from +7 to +2)\nObservations: Purple MnO₄⁻ decolourises; endpoint is the first permanent very pale pink\nExceptions/Notes: Self-indicating; must use H₂SO₄ (HCl would be oxidised to Cl₂, HNO₃ is an oxidising agent itself)",
    detail: "Unit 5 · Topic 21: Transition Metals"
  },
  {
    id: "rxn-078",
    unit: "unit5",
    cat: "reactions",
    subcat: "transition-metals",
    q: "I₂ + S₂O₃²⁻ → I⁻ + S₄O₆²⁻",
    a: "Reagents & Conditions: Iodine solution titrated with Sodium Thiosulfate; starch added near endpoint\nMechanism: Redox titration\nObservations: Yellow-brown iodine fades to pale straw; then blue-black starch fades to colourless at endpoint\nExceptions/Notes: Used to determine concentration of oxidising agents that can generate I₂ from I⁻",
    detail: "Unit 5 · Topic 21: Transition Metals"
  }
];
