export const ocularLayers = [
  { id: "all", label: "All Structures" },
  { id: "fibrosa", label: "Tunica Fibrosa (Outer)" },
  { id: "vasculosa", label: "Tunica Vasculosa / Uvea" },
  { id: "nervosa", label: "Tunica Nervosa (Retina)" },
  { id: "optical", label: "Optical Refractive Media" },
  { id: "neural", label: "Neural Pathways" }
];

export const anatomicalStructures = [
  {
    id: "cornea",
    name: "Cornea",
    latin: "Cornea Transparens",
    layerCategory: "fibrosa",
    layer: "Tunica Fibrosa (Anterior 1/6th)",
    pinPosition: [0.0, 3.5, 11.2],
    cameraTarget: [0.0, 0.0, 9.0],
    color: "#7dd3fc",
    opticalMetrics: {
      refractiveIndex: "n = 1.376",
      dioptricPower: "+43.0 Diopters (~70% total eye refraction)",
      thickness: "535 µm central, ~650 µm peripheral"
    },
    medicalDescription: "The anterior, transparent, highly curved window of the eye. Completely avascular, receiving oxygen directly from ambient air through the tear film and nutrients from the anterior chamber's aqueous humor. Comprises five classical histological layers: non-keratinized stratified squamous epithelium, Bowman's membrane, stroma (90% thickness composed of orthogonally arranged type I/V collagen fibrils), Descemet's membrane, and metabolic monolayer endothelium.",
    clinicalPathology: "Keratoconus (biomechanical stromal degradation causing conical ectasia), Fuchs' endothelial corneal dystrophy, microbial keratitis, bullous keratopathy.",
    medicalSources: [
      {
        authority: "American Academy of Ophthalmology (AAO)",
        title: "Basic and Clinical Science Course (BCSC), Section 8: External Disease and Cornea",
        url: "https://www.aao.org/education/bcsc"
      },
      {
        authority: "Gray's Anatomy: The Anatomical Basis of Clinical Practice (42nd Ed.)",
        title: "Chapter 41: The Visual Apparatus and Orbit",
        url: "https://www.elsevier.com/books/grays-anatomy/standring/978-0-7020-7705-0"
      },
      {
        authority: "National Center for Biotechnology Information (NCBI)",
        title: "StatPearls: Anatomy, Head and Neck, Eye Cornea",
        url: "https://www.ncbi.nlm.nih.gov/books/NBK470344/"
      }
    ],
    historicalTreatise: {
      author: "Alhazen (Ibn al-Haytham)",
      work: "Kitāb al-Manāẓir (Book of Optics, c. 1021)",
      note: "Refuted classical extramission theory (Pythagoras, Euclid, Galen), demonstrating through geometry and camera obscura experiments that perpendicular rays of light enter through the corneal hemisphere to initiate vision."
    },
    literaryAnalysis: {
      figure: "Seamus Heaney",
      text: "'Personal Helicon' (Death of a Naturalist, 1966)",
      quote: "Others had echoes, gave back your own call / With a clean new music in it. And one was mean for water: a shallow / To stare, big-eyed Narcissus, into some spring / Is beneath all adult dignity. I rhyme / To see myself, to set the darkness echoing.",
      commentary: "The cornea is the surface of the well: an organic lens that is both transparent aperture and reflective barrier. In Heaney's poetic archaeology, gazing into water mirrors the corneal threshold where the observing subject is confronted with their own submerged reflection."
    }
  },
  {
    id: "sclera",
    name: "Sclera & Episclera",
    latin: "Tunica Sclera",
    layerCategory: "fibrosa",
    layer: "Tunica Fibrosa (Posterior 5/6ths)",
    pinPosition: [0.0, 11.8, 0.0],
    cameraTarget: [0.0, 0.0, 0.0],
    color: "#f8fafc",
    opticalMetrics: {
      refractiveIndex: "Opaque (irregular collagen scatter)",
      hydration: "68% hydration (vs. 78% in cornea)",
      thickness: "1.0 mm at posterior pole, 0.3 mm behind rectus insertions"
    },
    medicalDescription: "The dense, opaque, fibrous protective envelope of the globe. Consists of dense irregular bundles of collagen fibrils and elastic fibers that resist intraocular pressure (10–21 mmHg) and provide dynamic insertion points for the six extraocular muscles. Pierced posteriorly by the lamina cribrosa, through which retinal ganglion cell axons emerge to form the optic nerve.",
    clinicalPathology: "Scleritis (frequently associated with systemic autoimmune disorders like rheumatoid arthritis and granulomatosis with polyangiitis), episcleritis, scleral staphyloma, blue sclera (osteogenesis imperfecta).",
    medicalSources: [
      {
        authority: "American Academy of Ophthalmology (AAO)",
        title: "Sclera and Episclera: Anatomy and Inflammation Management",
        url: "https://www.aao.org/eyenet/article/scleritis-diagnosis-management"
      },
      {
        authority: "Stanford University School of Medicine",
        title: "Ocular Pathology & Scleral Biomechanics",
        url: "https://med.stanford.edu/ophthalmology.html"
      }
    ],
    historicalTreatise: {
      author: "Andreas Vesalius",
      work: "De Humani Corporis Fabrica (1543, Book VII)",
      note: "Vesalius systematically dissected the hard scleral tunic ('tunica dura / cornea dura') to dismantle Galen's rete mirabile within human cranial anatomy, demonstrating direct ocular-cerebral continuity."
    },
    literaryAnalysis: {
      figure: "Dante Alighieri",
      text: "Inferno, Canto XXXII & XXXIII (Cocytus)",
      quote: "Lo pianto stesso lì pianger non lascia, / e 'l duol che truova in su li occhi rintoppo, / si volge in entro a far crescer l'ambascia; / ché le lagrime prime fanno groppo, / e sì come visiere di cristallo, / rïempion sotto 'l ciglio tutto 'l coppo.",
      commentary: "At the icy nadir of Dante's Inferno, frozen tears turn the ocular coats into rigid crystal visors. The sclera, as the protective armor of the eye, petrifies: weeping cannot escape, turning inward to intensify existential agony."
    }
  },
  {
    id: "iris",
    name: "Iris & Pupil",
    latin: "Iris / Pupilla",
    layerCategory: "vasculosa",
    layer: "Tunica Vasculosa (Anterior Uvea)",
    pinPosition: [0.0, 3.8, 8.35],
    cameraTarget: [0.0, 0.0, 7.5],
    color: "#ca8a04",
    opticalMetrics: {
      apertureRange: "2.0 mm (miosis) to 8.0 mm (mydriasis)",
      focalRatio: "f/2.1 to f/8.3 optical aperture adjustment",
      aberrationControl: "Restricts peripheral spherical and chromatic aberration"
    },
    medicalDescription: "The contractile pigmented diaphragm dividing the anterior and posterior chambers. Regulates retinal illuminance via antagonistic smooth muscle systems: the circumferentially arranged sphincter pupillae (parasympathetic innervation via CN III / ciliary ganglion) and the radially arranged dilator pupillae (sympathetic innervation via superior cervical ganglion). Posterior pigmented epithelium prevents light leakage.",
    clinicalPathology: "Acute angle-closure glaucoma (pupillary block resulting in aqueous outflow obstruction at the trabecular meshwork), anterior uveitis (iritis with keratic precipitates), Horner's syndrome, Argyll Robertson pupil.",
    medicalSources: [
      {
        authority: "American Academy of Ophthalmology (AAO)",
        title: "Basic and Clinical Science Course, Section 2: Fundamentals and Principles of Ophthalmology",
        url: "https://www.aao.org/education/bcsc"
      },
      {
        authority: "National Institutes of Health (NIH)",
        title: "National Eye Institute: Pupil Reflex and Uveal Biology",
        url: "https://www.nei.nih.gov/"
      }
    ],
    historicalTreatise: {
      author: "Galen of Pergamon",
      work: "De Usu Partium (On the Usefulness of the Parts of the Body, 2nd Century CE)",
      note: "Interpreted the pupillary aperture as the conduit for the pneuma optikon (visual spirit) descending from the ventricles of the brain to illuminate the crystalline lens."
    },
    literaryAnalysis: {
      figure: "Seamus Heaney",
      text: "'The Haw Lantern' (1987)",
      quote: "A small light for small people, wanting no / great beam, but testing what they say / with an eye that burns right into your soul / ... Diogenes with his lantern, seeking one just man.",
      commentary: "The pupil in Heaney becomes Diogenes' lantern: an aperture that tests moral illumination. It does not merely receive light but interrogates the observer with a concentrated, piercing pinpoint."
    }
  },
  {
    id: "lens",
    name: "Crystalline Lens & Zonules",
    latin: "Lens Crystallina",
    layerCategory: "optical",
    layer: "Optical Refractive Media",
    pinPosition: [0.0, 2.5, 5.0],
    cameraTarget: [0.0, 0.0, 5.0],
    color: "#e0f2fe",
    opticalMetrics: {
      refractiveIndex: "Gradient index: n = 1.386 (cortex) to 1.406 (nucleus)",
      dioptricPower: "+15.0 to +20.0 Diopters (unaccommodated), up to +30.0 D",
      accommodation: "Helmholtz mechanism mediated by ciliary muscle contraction"
    },
    medicalDescription: "A transparent, biconvex, flexible optical element suspended between the iris and vitreous humor by the delicate zonular fibers of Zinn (ciliary zonule). Highly specialized, mature lens fibers lose their nuclei and organelles to maintain optical clarity, packing high concentrations of crystallin proteins (alpha, beta, gamma). Modulates dynamic focus via Helmholtzian accommodation.",
    clinicalPathology: "Cataracts (nuclear sclerotic, cortical, or posterior subcapsular opacification due to crystallin protein aggregation), presbyopia (loss of zonular elasticity and lens hardness with age), ectopia lentis (zonular dehiscence in Marfan syndrome).",
    medicalSources: [
      {
        authority: "American Academy of Ophthalmology (AAO)",
        title: "Lens and Cataract: BCSC Section 11",
        url: "https://www.aao.org/education/bcsc"
      },
      {
        authority: "NCBI Bookshelf: Webvision",
        title: "Physiological Optics of the Human Lens and Accommodation",
        url: "https://www.ncbi.nlm.nih.gov/books/NBK11530/"
      }
    ],
    historicalTreatise: {
      author: "Galen & Ibn al-Jazzar",
      work: "Medical Canon on the 'Seat of the Soul' (Classical Antiquity)",
      note: "From Galen through Islamic medieval medicine, the crystalline lens was mistakenly crowned as the ultimate central organ of visual perception ('principale organum visionis'), rather than a simple refractive lens."
    },
    literaryAnalysis: {
      figure: "Dante Alighieri",
      text: "Purgatorio, Canto XV & Paradiso, Canto XXVI",
      quote: "Come quando da l'acqua o da lo specchio / salta lo raggio a l'opposita parte, / salendo su per lo modo parecchio / a quel che scende, e tanto si diparte / dal cader de la pietra in igual tratta, / sì come mostra esperïenza e arte...",
      commentary: "Dante understands optical accommodation spiritually: as his pilgrim ascends the spheres of Paradise, Beatrice cleanses his ocular crystalline faculty so that his gaze can endure escalating intensities of celestial illumination."
    }
  },
  {
    id: "ciliaryBody",
    name: "Ciliary Body & Trabecular Meshwork",
    latin: "Corpus Ciliare",
    layerCategory: "vasculosa",
    layer: "Tunica Vasculosa (Middle Uvea)",
    pinPosition: [0.0, 5.35, 6.85],
    cameraTarget: [0.0, 3.0, 6.0],
    color: "#b45309",
    opticalMetrics: {
      aqueousProduction: "2.0–2.5 µL/min secretional rate",
      accommodationForce: "Smooth muscle vectors adjusting zonular tension",
      intraocularPressure: "Regulated homeostatically around 15.5 mmHg"
    },
    medicalDescription: "The circumferential uveal tissue connecting the choroid with the iris. Composed of two parts: pars plicata (anterior corrugated zone bearing ~70 ciliary processes) and pars plana (posterior flattened zone). Produces aqueous humor through active secretion and ultrafiltration by the dual-layered ciliary epithelium, while containing the smooth ciliary muscle fibers (longitudinal, radial, circular) responsible for lens accommodation.",
    clinicalPathology: "Primary Open-Angle Glaucoma (trabecular meshwork resistance), cyclitis, hypotony, malignant ciliary block glaucoma.",
    medicalSources: [
      {
        authority: "American Academy of Ophthalmology (AAO)",
        title: "Glaucoma: Pathophysiology of Aqueous Outflow and Intraocular Pressure",
        url: "https://www.aao.org/education/bcsc"
      },
      {
        authority: "European Glaucoma Society (EGS)",
        title: "Terminology and Guidelines for Glaucoma (5th Ed.)",
        url: "https://www.eugs.org/"
      }
    ],
    historicalTreatise: {
      author: "Hermann von Helmholtz",
      work: "Handbuch der Physiologischen Optik (Treatise on Physiological Optics, 1856–1867)",
      note: "Formulated the definitive mechanism of ocular accommodation: ciliary muscle contraction releases zonular tension, allowing the elastic lens capsule to bulge into greater convexity."
    },
    literaryAnalysis: {
      figure: "Seamus Heaney",
      text: "'The Tollund Man' & Bog Poems",
      quote: "Those dark man-killing parishes. / ... I will feel lost, / Unhappy and at home.",
      commentary: "The hydraulic pressure within the ciliary apparatus parallels the bog's peat-press: an enclosed, dark anatomical engine regulating fluid balance, preserving archaic bodily tensions beneath peat and flesh."
    }
  },
  {
    id: "choroid",
    name: "Choroid",
    latin: "Choroidea",
    layerCategory: "vasculosa",
    layer: "Tunica Vasculosa (Posterior Uvea)",
    pinPosition: [0.0, 11.5, -3.5],
    cameraTarget: [0.0, 0.0, -2.0],
    color: "#7f1d1d",
    opticalMetrics: {
      bloodFlow: "Highest blood flow per unit weight in human body (~1000 mL/min/100g)",
      pigmentation: "Dense melanin concentration for thermal/light dissipation",
      thickness: "0.2 mm (posterior pole) thinning to 0.1 mm anteriorly"
    },
    medicalDescription: "The posterior, extensively vascularized section of the uveal tract bounded internally by Bruch's membrane and externally by the sclera. Formed of four histological layers: Haller's layer (large vessel layer), Sattler's layer (medium vessels), choriocapillaris (fenestrated capillary monolayer), and Bruch's membrane (extracellular lamina). Nourishes the avascular outer retina, photoreceptors, and retinal pigment epithelium.",
    clinicalPathology: "Choroidal neovascularization (CNV in wet age-related macular degeneration), choroidal melanoma, central serous chorioretinopathy, choroidal detachment.",
    medicalSources: [
      {
        authority: "American Academy of Ophthalmology (AAO)",
        title: "Retina and Vitreous: BCSC Section 12",
        url: "https://www.aao.org/education/bcsc"
      },
      {
        authority: "NCBI / NIH Webvision",
        title: "The Choroid: Anatomy, Vascular Architecture, and Bruch's Membrane",
        url: "https://www.ncbi.nlm.nih.gov/books/NBK11554/"
      }
    ],
    historicalTreatise: {
      author: "Johannes Kepler",
      work: "Ad Vitellionem Paralipomena (Astronomiae Pars Optica, 1604)",
      note: "Recognized the choroid as the dark, light-absorptive lining of the anatomical camera obscura, preventing internal light back-scatter."
    },
    literaryAnalysis: {
      figure: "Dante Alighieri",
      text: "Inferno, Canto IX (The City of Dis)",
      quote: "O voi ch'avete li 'ntelletti sani, / mirate la dottrina che s'asconde / sotto 'l velame de li versi strani.",
      commentary: "The vascular, blood-gorged choroid is the hidden anatomical veil ('velame') beneath the visual screen: a dark, pulsing under-tunic that sustains perception while remaining entirely concealed from conscious sight."
    }
  },
  {
    id: "vitreous",
    name: "Vitreous Humor (Corpus Vitreum)",
    latin: "Corpus Vitreum",
    layerCategory: "optical",
    layer: "Optical Refractive Media",
    pinPosition: [0.0, 0.0, 0.0],
    cameraTarget: [0.0, 0.0, 0.0],
    color: "#38bdf8",
    opticalMetrics: {
      refractiveIndex: "n = 1.336 (matched closely to aqueous humor)",
      composition: "98-99% water, type II collagen scaffolding, hyaluronic acid",
      volume: "4.0 mL (~80% of total globe volume)"
    },
    medicalDescription: "A clear, viscoelastic, transparent gel occupying the posterior four-fifths of the globe between the lens and retina. The hyaloid membrane encloses the vitreous core and establishes firm anatomical attachments at the vitreous base (straddling the ora serrata), optic disc margin, macula, and retinal blood vessels. Traversed embryologically by Cloquet's canal (vestige of the fetal hyaloid artery).",
    clinicalPathology: "Posterior vitreous detachment (PVD), vitreous hemorrhage, asteroid hyalosis, vitreomacular traction syndrome, floaters (vitreous syneresis).",
    medicalSources: [
      {
        authority: "American Academy of Ophthalmology (AAO)",
        title: "Vitreous Body Physiology and Vitreoretinal Surgery",
        url: "https://www.aao.org/education/bcsc"
      },
      {
        authority: "National Eye Institute (NEI / NIH)",
        title: "Vitreous Mechanics and Retinal Traction",
        url: "https://www.nei.nih.gov/"
      }
    ],
    historicalTreatise: {
      author: "René Descartes",
      work: "La Dioptrique (1637)",
      note: "Used the transparent vitreous humor as a mechanical medium in his treatise on optics to model the physical transmission of motion particles (photons) directly onto the cerebral pineal gland."
    },
    literaryAnalysis: {
      figure: "Seamus Heaney",
      text: "'The Grauballe Man' & Bog Poems",
      quote: "As if he had been poured / in tar, he lies / on a pillow of turf / and seems to weep / the black river of himself.",
      commentary: "The vitreous body is the internal gelatinous abyss of the eye: a preserved, primordial fluid chamber preserving optical memory just as the peat bog embalms the sacrificed body in fluid suspension."
    }
  },
  {
    id: "retina",
    name: "Retina & Ora Serrata",
    latin: "Tunica Interna / Retina",
    layerCategory: "nervosa",
    layer: "Tunica Nervosa (Inner Sensorium)",
    pinPosition: [0.0, 11.2, -6.5],
    cameraTarget: [0.0, 0.0, -3.0],
    color: "#f43f5e",
    opticalMetrics: {
      photoreceptorCount: "~120 million rods, ~6 million cones",
      signalTransduction: "11-cis-retinal photoisomerization to all-trans-retinal in <1 picosecond",
      thickness: "100 µm at ora serrata to 230 µm adjacent to optic disc"
    },
    medicalDescription: "The neurosensory tissue of the inner eye that converts incident photons into action potentials. Histologically organized into 10 precisely stratified layers: (1) Retinal Pigment Epithelium, (2) Photoreceptor layer, (3) External Limiting Membrane, (4) Outer Nuclear Layer, (5) Outer Plexiform Layer, (6) Inner Nuclear Layer, (7) Inner Plexiform Layer, (8) Ganglion Cell Layer, (9) Nerve Fiber Layer, and (10) Internal Limiting Membrane.",
    clinicalPathology: "Rhegmatogenous retinal detachment (retinal tears allowing liquefied vitreous subretinal access), diabetic retinopathy, retinitis pigmentosa, retinal vein occlusion.",
    medicalSources: [
      {
        authority: "NCBI Bookshelf: Webvision",
        title: "The Organization of the Retina and Visual System (Kolb, Fernandez, Nelson)",
        url: "https://www.ncbi.nlm.nih.gov/books/NBK11530/"
      },
      {
        authority: "American Academy of Ophthalmology (AAO)",
        title: "Retinal Anatomy, Physiology, and Vascular Diseases: BCSC Section 12",
        url: "https://www.aao.org/education/bcsc"
      }
    ],
    historicalTreatise: {
      author: "Johannes Kepler & Santiago Ramón y Cajal",
      work: "Ad Vitellionem Paralipomena (1604) / The Structure of the Retina (1892)",
      note: "Kepler proved mathematically that an inverted and reversed physical image is projected onto the retinal screen; Cajal subsequently proved the individual neuronal circuit architecture using Golgi staining."
    },
    literaryAnalysis: {
      figure: "Dante Alighieri",
      text: "Paradiso, Canto XXXIII (The Beatific Vision)",
      quote: "Ne la profonda e chiara sussistenza / de l'alto lume parvermi tre giri / di tre colori e d'una contenenza; / e l'un da l'altro come iri da iri / parea reflesso, e 'l terzo parea foco / che quinci e quindi igualmente si spiri.",
      commentary: "Dante's climax in the Empyrean is the ultimate retinal exposure: the divine trinity appears as three concentric rings of light of three distinct colors, striking the pilgrim's sensorium directly in pure optical geometry."
    }
  },
  {
    id: "fovea",
    name: "Macula Lutea & Fovea Centralis",
    latin: "Fovea Centralis",
    layerCategory: "nervosa",
    layer: "Tunica Nervosa (Visual Axis Core)",
    pinPosition: [3.6, 0.8, -11.2],
    cameraTarget: [0.0, 0.0, -11.0],
    color: "#f59e0b",
    opticalMetrics: {
      diameter: "1.5 mm (Fovea), 0.35 mm (Foveola / avascular zone)",
      visualAcuity: "20/20 central foveal acuity (100% packed midget cone system)",
      pigmentation: "High concentration of lutein and zeaxanthin carotenoids"
    },
    medicalDescription: "The specialized, avascular central retinal depression located ~4.0 mm temporal and 0.8 mm inferior to the optic disc center. In the foveola, inner retinal layers are displaced laterally (creating the foveal pit/clivus) to allow unhindered light access to densely packed cone photoreceptors (~200,000 cones/mm²), providing maximal visual resolution and trichromatic color vision.",
    clinicalPathology: "Age-Related Macular Degeneration (dry/wet AMD with drusen and geographic atrophy), macular hole, central serous chorioretinopathy, cystoid macular edema.",
    medicalSources: [
      {
        authority: "American Academy of Ophthalmology (AAO)",
        title: "Age-Related Macular Degeneration PPP (Preferred Practice Pattern)",
        url: "https://www.aao.org/preferred-practice-pattern/age-related-macular-degeneration-ppp"
      },
      {
        authority: "Journal of Comparative Neurology",
        title: "Curcio CA, et al. 'Human photoreceptor topography' (1990)",
        url: "https://pubmed.ncbi.nlm.nih.gov/2358643/"
      }
    ],
    historicalTreatise: {
      author: "Samuel Thomas von Sömmerring",
      work: "De Foramine Centrali Retinae (1799)",
      note: "First documented the yellow pigment (macula lutea) and central foveal pit ('foramen centrale') in the human ocular fundus."
    },
    literaryAnalysis: {
      figure: "Dante Alighieri",
      text: "Paradiso, Canto XXVIII",
      quote: "Un punto vidi che raggiava lume / acuto sì, che 'l viso ch'elli affoca / chiuder conviensi per lo forte acume; / e quale stella par quinci più poca, / parrebbe luna, locata con esso / come stella con stella si colloca.",
      commentary: "The fovea centralis is Dante's 'point that radiated light so piercing'—an infinitesimal, blazing focal point of pure resolution around which the entire universe and sensory apparatus pivots."
    }
  },
  {
    id: "opticDisc",
    name: "Optic Disc (Mariotte's Blind Spot)",
    latin: "Discus Nervi Optici / Punctum Caecum",
    layerCategory: "neural",
    layer: "Neural Pathways / Physiological Scotoma",
    pinPosition: [0.0, 0.0, -11.38],
    cameraTarget: [0.0, 0.0, -11.0],
    color: "#fbbf24",
    opticalMetrics: {
      scotomaSize: "5.5° wide by 7.5° high in visual field (~15° temporal to fixation)",
      dimension: "1.5 mm horizontal x 1.75 mm vertical diameter",
      photoreceptorDensity: "Zero (complete absence of rods and cones)"
    },
    medicalDescription: "The anatomical exit point for ~1.2 million unmyelinated axons of retinal ganglion cells as they coalesce and pass through the fenestrated scleral lamina cribrosa. Because the disc is devoid of photoreceptors and retinal pigment epithelium, it generates an absolute physiological scotoma (blind spot) in the visual field. Contains the physiological cup and the central retinal artery/vein bifurcations.",
    clinicalPathology: "Papilledema (bilateral optic disc swelling from elevated intracranial pressure), glaucomatous optic neuropathy (cupping and neuroretinal rim loss), ischemic optic neuropathy (AION/NAION).",
    medicalSources: [
      {
        authority: "American Academy of Ophthalmology (AAO)",
        title: "Neuro-Ophthalmology: BCSC Section 5",
        url: "https://www.aao.org/education/bcsc"
      },
      {
        authority: "NCBI / StatPearls",
        title: "Physiology, Blind Spot (Punctum Caecum)",
        url: "https://www.ncbi.nlm.nih.gov/books/NBK545229/"
      }
    ],
    historicalTreatise: {
      author: "Edme Mariotte",
      work: "Nouvelle Découverte touchant la Vue (Royal Academy of Sciences, Paris, 1668)",
      note: "Discovered the physiological blind spot by demonstrating that an object positioned at a 15-degree eccentricity disappears completely when its image strikes the optic nerve head."
    },
    literaryAnalysis: {
      figure: "Seamus Heaney",
      text: "'The Haw Lantern' & 'The Underground'",
      quote: "There we were in the vaulted tunnel running, / You ahead of me, / ... All the while / I thought of Orpheus, turning to look back.",
      commentary: "Mariotte's blind spot is the structural blind spot of Orpheus: the inevitable dark void in the center of perception where looking directly causes the object of desire to vanish. Vision is constructed around what it cannot see."
    }
  },
  {
    id: "opticNerve",
    name: "Optic Nerve (Cranial Nerve II)",
    latin: "Nervus Opticus (CN II)",
    layerCategory: "neural",
    layer: "Neural Pathways (Ocular-Cerebral Conduit)",
    pinPosition: [0.0, 0.0, -17.3],
    cameraTarget: [0.0, 0.0, -16.0],
    color: "#fde047",
    opticalMetrics: {
      axonCount: "~1.2 million myelinated nerve fibers (oligodendrocytes post-lamina)",
      length: "40–50 mm total (intraocular 1mm, intraorbital 25mm, intracanalicular 9mm, intracranial 10mm)",
      sheathMeninges: "Ensheathed by dura mater, arachnoid mater, and pia mater with subarachnoid space (CSF)"
    },
    medicalDescription: "The paired cranial nerve transmitting visual sensory information from the retina to the lateral geniculate nucleus (LGN), superior colliculus, and pretectal nuclei. Anatomically not a true peripheral nerve but an outpouching of the diencephalon; thus wrapped by all three meningeal sheaths and vulnerable to intracranial pressure transmitted through the subarachnoid space.",
    clinicalPathology: "Optic neuritis (demyelination in Multiple Sclerosis), optic nerve glioma, traumatic optic neuropathy, compressive pituitary adenoma at the optic chiasm (bitemporal hemianopia).",
    medicalSources: [
      {
        authority: "American Academy of Ophthalmology (AAO)",
        title: "Neuro-Ophthalmology and Optic Nerve Diseases",
        url: "https://www.aao.org/education/bcsc"
      },
      {
        authority: "Gray's Anatomy (42nd Ed.)",
        title: "Cranial Nerves: Cranial Nerve II (Optic Nerve Pathway)",
        url: "https://www.elsevier.com/books/grays-anatomy/standring/978-0-7020-7705-0"
      }
    ],
    historicalTreatise: {
      author: "Andreas Vesalius & Galen",
      work: "De Humani Corporis Fabrica (1543)",
      note: "Dismantled the ancient Galenic doctrine that the optic nerves were hollow pipes ('canales perforati') channeling spiritus visivus, proving they were solid fibrillar neural cables leading to the optic chiasm."
    },
    literaryAnalysis: {
      figure: "Dante Alighieri",
      text: "Purgatorio, Canto XXI & Paradiso, Canto XXX",
      quote: "Non è fantastico lo splendore ond'io mi sento fasciato; / ... e vidi lume in forma di rivera / fulvido di fulgore, intra due rive / dipinte di mirabil primavera.",
      commentary: "The optic nerve is the river of light connecting Dante's corporeal body to the Empyrean: a biological cable conveying light through darkness until neural sensation transforms into pure spiritual intellect."
    }
  }
];
