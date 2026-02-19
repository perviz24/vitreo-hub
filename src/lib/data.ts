// Static data for vitreoretinal surgery innovations, techniques, and timeline
// Will migrate to Convex database in future session

export type Innovation = {
  id: string;
  title: string;
  category: Category;
  year: number;
  status: "established" | "emerging" | "experimental";
  impact: number; // 1-10
  summary: string;
  description: string;
  keyBenefits: string[];
  manufacturers?: string[];
  imageAlt: string;
};

export type Category =
  | "instruments"
  | "imaging"
  | "robotics"
  | "pharmaceuticals"
  | "visualization"
  | "ai";

export type Technique = {
  id: string;
  name: string;
  category: TechniqueCategory;
  complexity: "basic" | "intermediate" | "advanced";
  description: string;
  indications: string[];
  steps: string[];
  relatedInnovationIds: string[];
  successRate?: string;
};

export type TechniqueCategory =
  | "vitrectomy"
  | "retinal-detachment"
  | "macular"
  | "diabetic"
  | "other";

export type TimelineEvent = {
  year: number;
  title: string;
  description: string;
  category: Category | "milestone";
  significance: "landmark" | "major" | "notable";
};

export const categoryLabels: Record<Category, string> = {
  instruments: "Instruments",
  imaging: "Imaging",
  robotics: "Robotics & AI",
  pharmaceuticals: "Pharmaceuticals",
  visualization: "Visualization",
  ai: "AI Diagnostics",
};

export const techniqueCategoryLabels: Record<TechniqueCategory, string> = {
  vitrectomy: "Vitrectomy",
  "retinal-detachment": "Retinal Detachment",
  macular: "Macular Surgery",
  diabetic: "Diabetic Surgery",
  other: "Other Procedures",
};

export const innovations: Innovation[] = [
  {
    id: "27g-vitrectomy",
    title: "27-Gauge Vitrectomy Systems",
    category: "instruments",
    year: 2015,
    status: "established",
    impact: 9,
    summary:
      "Ultra-small gauge instruments enabling minimally invasive vitreoretinal surgery with sutureless wound closure.",
    description:
      "The evolution from 20-gauge to 27-gauge vitrectomy represents one of the most significant advances in surgical technique. Modern 27-gauge systems feature dual-blade cutters operating at up to 16,000 cuts per minute, reducing vitreous traction and improving safety. The smaller gauge allows for sutureless, self-sealing sclerotomies, dramatically reducing operative time and postoperative inflammation.",
    keyBenefits: [
      "Sutureless wound closure",
      "Reduced postoperative inflammation",
      "Faster patient recovery",
      "Lower risk of endophthalmitis",
    ],
    manufacturers: ["Alcon", "Bausch + Lomb", "DORC"],
    imageAlt: "27-gauge vitrectomy probe tip comparison",
  },
  {
    id: "ioct",
    title: "Intraoperative OCT (iOCT)",
    category: "imaging",
    year: 2014,
    status: "established",
    impact: 9,
    summary:
      "Real-time optical coherence tomography integrated into surgical microscopes for live retinal imaging during surgery.",
    description:
      "Intraoperative OCT provides real-time, cross-sectional imaging of retinal structures during surgery. Microscope-integrated systems like the Zeiss RESCAN 700 and Leica EnFocus overlay OCT images directly in the surgeon's view. The DISCOVER and PIONEER studies demonstrated that iOCT altered surgical decision-making in 27-43% of membrane peeling cases, revealing residual membranes invisible to standard visualization.",
    keyBenefits: [
      "Real-time tissue visualization at retinal-layer resolution",
      "Altered surgical decisions in 27-43% of cases",
      "Reduced need for reoperation",
      "Enhanced surgical training capabilities",
    ],
    manufacturers: ["Zeiss", "Leica"],
    imageAlt: "Intraoperative OCT scan during membrane peeling",
  },
  {
    id: "3d-hud",
    title: "3D Heads-Up Display Surgery",
    category: "visualization",
    year: 2017,
    status: "established",
    impact: 8,
    summary:
      "Digital 3D visualization systems replacing traditional optical microscopes with high-definition displays.",
    description:
      "3D heads-up display systems such as the Alcon NGENUITY and TrueVision project a stereoscopic, digitally enhanced surgical view onto large screens. Surgeons wear passive 3D glasses and operate looking at the screen rather than through microscope oculars. Benefits include improved ergonomics (reducing neck strain), enhanced depth perception, digital image processing (filtering, contrast enhancement), and the ability to integrate iOCT and other data overlays.",
    keyBenefits: [
      "Superior surgeon ergonomics",
      "Enhanced depth perception",
      "Digital image processing and filtering",
      "Reduced light toxicity to retina",
    ],
    manufacturers: ["Alcon (NGENUITY)", "TrueVision"],
    imageAlt: "3D heads-up display surgical system in operating room",
  },
  {
    id: "preceyes",
    title: "PRECEYES Robotic Surgical System",
    category: "robotics",
    year: 2019,
    status: "emerging",
    impact: 10,
    summary:
      "CE-marked robotic platform for vitreoretinal microsurgery, enabling precision beyond human capability.",
    description:
      "The PRECEYES Surgical System is the world's first CE-marked robot for intraocular surgery. It provides motion scaling and tremor filtration, achieving positioning accuracy of 10 micrometers — far beyond the 100-micrometer limit of human hands. In 2021, it performed the first-in-human subretinal drug injection under local anesthesia. Randomized trials show improved precision and reduced tissue damage, particularly beneficial for subretinal gene therapy delivery and membrane peeling.",
    keyBenefits: [
      "10-micrometer positioning accuracy",
      "Tremor filtration and motion scaling",
      "Enables subretinal gene therapy delivery",
      "Reduced tissue damage vs manual surgery",
    ],
    manufacturers: ["Preceyes BV"],
    imageAlt: "PRECEYES robotic arm performing vitreoretinal surgery",
  },
  {
    id: "anti-vegf",
    title: "Anti-VEGF Intravitreal Therapy",
    category: "pharmaceuticals",
    year: 2004,
    status: "established",
    impact: 10,
    summary:
      "Revolutionary pharmacotherapy that transformed treatment of wet AMD, diabetic macular edema, and retinal vein occlusion.",
    description:
      "Anti-VEGF agents (bevacizumab, ranibizumab, aflibercept, brolucizumab, faricimab) are the most transformative development in retinal medicine. By blocking vascular endothelial growth factor, these drugs halt pathological neovascularization and reduce macular edema. The treatment shifted numerous conditions from inevitable blindness to manageable chronic diseases. Faricimab, the newest agent, offers bispecific activity against both VEGF-A and Ang-2 with extended dosing intervals up to 16 weeks.",
    keyBenefits: [
      "Preserved or improved vision in 90%+ of patients",
      "Shifted wet AMD from untreatable to manageable",
      "Extended durability with newer agents",
      "Reduced surgical intervention rates",
    ],
    manufacturers: [
      "Genentech/Roche",
      "Regeneron",
      "Novartis",
      "AbbVie",
    ],
    imageAlt: "Anti-VEGF intravitreal injection procedure",
  },
  {
    id: "eva-nexus",
    title: "EVA Nexus Surgical Platform",
    category: "instruments",
    year: 2022,
    status: "emerging",
    impact: 8,
    summary:
      "Advanced vitrectomy platform with dual VacuFlow pumps — the only FDA-cleared system for subretinal injection.",
    description:
      "The EVA Nexus by DORC features dual VacuFlow VTi pumps with dynamic infusion that responds in real-time to maintain physiologic intraocular pressure. Its unique subretinal injection capability (the only FDA-cleared platform for this) positions it as essential for emerging gene therapy delivery. The system supports 25g, 27g, and experimental 28g instrumentation with cut rates up to 30,000 cpm using dual-blade technology.",
    keyBenefits: [
      "Only FDA-cleared subretinal injection platform",
      "Dynamic IOP-responsive infusion",
      "Up to 30,000 cuts per minute",
      "Essential for gene therapy delivery",
    ],
    manufacturers: ["DORC (Dutch Ophthalmic Research Center)"],
    imageAlt: "EVA Nexus surgical console and handpieces",
  },
  {
    id: "ai-diagnostics",
    title: "AI-Powered Retinal Diagnostics",
    category: "ai",
    year: 2018,
    status: "emerging",
    impact: 9,
    summary:
      "FDA-approved autonomous AI systems for diabetic retinopathy screening and emerging applications in surgical planning.",
    description:
      "AI diagnostic systems have achieved FDA approval for autonomous diabetic retinopathy screening: IDx-DR (Digital Diagnostics) was the first in 2018, followed by EyeArt (EyeNuk). These systems analyze fundus photographs without ophthalmologist oversight. Emerging applications include Deepeye for AMD activity identification from OCT, attention-gated CNNs achieving 93.4% accuracy for central serous retinopathy leakage detection (surpassing ophthalmologists at 89.7%), and AI-assisted surgical planning combining OCT and fundus data for robotic procedures.",
    keyBenefits: [
      "Autonomous screening without specialist oversight",
      "Detection accuracy surpassing human graders",
      "Scalable screening for underserved populations",
      "Emerging surgical planning applications",
    ],
    manufacturers: ["Digital Diagnostics", "EyeNuk", "Google Health"],
    imageAlt: "AI analysis overlay on retinal fundus photograph",
  },
  {
    id: "chandelier",
    title: "Chandelier Endoillumination",
    category: "instruments",
    year: 2008,
    status: "established",
    impact: 7,
    summary:
      "Fixed-position, hands-free illumination enabling bimanual surgical techniques during vitrectomy.",
    description:
      "Chandelier illumination systems provide wide-angle, panoramic illumination through a fixed scleral port, freeing both of the surgeon's hands for instrument manipulation. This enables critical bimanual techniques such as bimanual membrane peeling, complex scleral buckle placement during vitrectomy, and simultaneous use of scissors and forceps. Modern fiber-optic and LED chandelier systems offer adjustable intensity and color temperature with minimal heat generation.",
    keyBenefits: [
      "Enables bimanual surgical techniques",
      "Panoramic wide-angle illumination",
      "Adjustable intensity and color temperature",
      "Reduced operative complexity",
    ],
    manufacturers: ["Synergetics", "Alcon", "DORC"],
    imageAlt: "Chandelier endoillumination probe providing wide-field lighting",
  },
  {
    id: "gene-therapy",
    title: "Subretinal Gene Therapy Delivery",
    category: "pharmaceuticals",
    year: 2017,
    status: "emerging",
    impact: 10,
    summary:
      "Surgical delivery of gene therapy vectors to treat inherited retinal dystrophies, beginning a new era in ophthalmology.",
    description:
      "Luxturna (voretigene neparvovec), approved in 2017, was the first FDA-approved gene therapy for a genetic disease — treating RPE65-mediated inherited retinal dystrophy. The procedure requires precise subretinal injection to deliver AAV vectors beneath the neurosensory retina. Active clinical trials target additional conditions including choroideremia, X-linked retinitis pigmentosa, achromatopsia, and Leber hereditary optic neuropathy. The technique demands exceptional precision, driving adoption of robotic surgical systems and specialized injection platforms.",
    keyBenefits: [
      "First curative treatment for inherited blindness",
      "Growing pipeline targeting 30+ retinal conditions",
      "Driving innovation in precision delivery systems",
      "Paradigm shift from management to cure",
    ],
    manufacturers: ["Spark Therapeutics", "AGTC", "MeiraGTx"],
    imageAlt: "Subretinal injection delivering gene therapy vector",
  },
  {
    id: "wide-angle",
    title: "Wide-Angle Viewing Systems",
    category: "visualization",
    year: 2005,
    status: "established",
    impact: 8,
    summary:
      "Non-contact panoramic viewing systems providing 120-130 degree visualization of the retinal periphery.",
    description:
      "Wide-angle viewing systems such as the BIOM (Binocular Indirect Ophthalmomicroscope) and Resight enable panoramic, non-contact visualization of the retina during vitrectomy. These systems replaced older contact lens-based viewing, providing up to 130-degree field of view without the need for an assistant to hold a lens. Combined with 3D visualization systems, they allow the surgeon to see from the macula to the ora serrata simultaneously, critical for complex retinal detachment repair and peripheral pathology.",
    keyBenefits: [
      "120-130 degree panoramic view",
      "Non-contact, no assistant needed",
      "Critical for peripheral retinal work",
      "Compatible with 3D visualization",
    ],
    manufacturers: ["Oculus (BIOM)", "Zeiss (Resight)", "Volk"],
    imageAlt: "Wide-angle view of retina through BIOM system",
  },
];

export const techniques: Technique[] = [
  {
    id: "ppv",
    name: "Pars Plana Vitrectomy (PPV)",
    category: "vitrectomy",
    complexity: "intermediate",
    description:
      "The fundamental vitreoretinal procedure involving removal of vitreous gel through small-gauge ports inserted at the pars plana. Modern PPV uses 25g or 27g instrumentation with high-speed cutters, endoillumination, and wide-angle viewing. It is the gateway procedure for accessing the retinal surface for membrane peeling, retinal detachment repair, and subretinal surgery.",
    indications: [
      "Vitreous hemorrhage",
      "Epiretinal membrane",
      "Macular hole",
      "Retinal detachment",
      "Retained lens fragments",
      "Endophthalmitis",
    ],
    steps: [
      "Trocar/cannula insertion at pars plana (3.5-4mm from limbus)",
      "Core vitrectomy with high-speed cutter",
      "Posterior vitreous detachment induction (if not present)",
      "Peripheral vitreous shaving under scleral depression",
      "Address primary pathology (membrane peel, laser, etc.)",
      "Fluid-air exchange or tamponade injection",
      "Trocar removal and wound inspection",
    ],
    relatedInnovationIds: ["27g-vitrectomy", "ioct", "3d-hud", "wide-angle"],
    successRate: "90-95%",
  },
  {
    id: "scleral-buckle",
    name: "Scleral Buckling",
    category: "retinal-detachment",
    complexity: "advanced",
    description:
      "External approach to retinal detachment repair using a silicone band or sponge sutured to the sclera. The buckle indents the eye wall inward, closing retinal breaks by approximating the retinal pigment epithelium to the detached neurosensory retina. Often combined with cryotherapy to create a chorioretinal adhesion. Remains the gold standard for simple rhegmatogenous retinal detachments in young phakic patients.",
    indications: [
      "Rhegmatogenous retinal detachment (especially in young/phakic patients)",
      "Inferior retinal breaks",
      "Dialysis-related detachments",
      "Pediatric retinal detachment",
    ],
    steps: [
      "360-degree conjunctival peritomy",
      "Isolation of rectus muscles with bridle sutures",
      "Localization of retinal breaks with indirect ophthalmoscopy",
      "Cryotherapy application to retinal breaks",
      "Buckle element selection and positioning",
      "Scleral suture placement (mattress sutures)",
      "Drainage of subretinal fluid (if indicated)",
      "Buckle tightening and break confirmation",
    ],
    relatedInnovationIds: ["chandelier"],
    successRate: "85-90%",
  },
  {
    id: "membrane-peel",
    name: "Membrane Peeling (ERM/ILM)",
    category: "macular",
    complexity: "advanced",
    description:
      "Microsurgical removal of epiretinal membranes (ERM) or internal limiting membrane (ILM) from the macular surface. Requires exceptional precision as the target tissue is only 1-4 micrometers thick. ILM peeling has become standard for macular hole surgery, and dye-assisted techniques using indocyanine green (ICG) or Brilliant Blue G improve membrane visualization.",
    indications: [
      "Symptomatic epiretinal membrane",
      "Macular hole (ILM peel)",
      "Vitreomacular traction",
      "Macular edema with tractional component",
    ],
    steps: [
      "Standard 3-port PPV setup",
      "Core and peripheral vitrectomy",
      "Dye application (ICG or Brilliant Blue G) for membrane staining",
      "Membrane edge identification and initiation",
      "Controlled circumferential peeling with ILM forceps",
      "iOCT confirmation of complete membrane removal",
      "Tamponade selection (gas or air for macular holes)",
    ],
    relatedInnovationIds: ["ioct", "27g-vitrectomy", "preceyes"],
    successRate: "90-97% (macular hole closure)",
  },
  {
    id: "pneumatic-retinopexy",
    name: "Pneumatic Retinopexy",
    category: "retinal-detachment",
    complexity: "basic",
    description:
      "Office-based procedure for select retinal detachments using intravitreal gas injection and cryotherapy or laser. A gas bubble is injected to tamponade the retinal break, and the patient maintains specific head positioning to keep the bubble against the break. Advantages include outpatient setting, reduced cost, and avoidance of operating room resources.",
    indications: [
      "Superior retinal breaks (8-4 o'clock)",
      "Single or clustered breaks within 1 clock hour",
      "Phakic patients with uncomplicated detachment",
      "Good patient compliance for positioning",
    ],
    steps: [
      "Confirm break location with indirect ophthalmoscopy",
      "Cryotherapy to retinal break(s)",
      "Intravitreal gas injection (SF6 or C3F8)",
      "Patient positioning (break at highest point)",
      "Laser retinopexy (if needed, 1-2 days post-injection)",
      "Positioning maintained for 5-10 days",
    ],
    relatedInnovationIds: [],
    successRate: "75-85% (single procedure)",
  },
  {
    id: "macular-hole-surgery",
    name: "Macular Hole Surgery",
    category: "macular",
    complexity: "advanced",
    description:
      "Vitrectomy-based procedure to close full-thickness macular holes. The standard technique involves vitrectomy, ILM peeling around the hole, and gas tamponade. For large or chronic holes, the inverted ILM flap technique significantly improved closure rates. Face-down positioning remains debated, with recent evidence suggesting shorter positioning durations may be equally effective for smaller holes.",
    indications: [
      "Full-thickness macular hole (Stage 2-4)",
      "Traumatic macular hole",
      "Myopic macular hole (with or without detachment)",
    ],
    steps: [
      "25g or 27g pars plana vitrectomy",
      "PVD induction if not present",
      "ILM staining with Brilliant Blue G",
      "ILM peeling (standard or inverted flap technique)",
      "Fluid-air exchange",
      "Gas tamponade (SF6 20% or C3F8 14%)",
      "Face-down positioning (duration varies by surgeon preference)",
    ],
    relatedInnovationIds: ["ioct", "27g-vitrectomy", "3d-hud"],
    successRate: "92-97% closure rate",
  },
  {
    id: "diabetic-trd",
    name: "Diabetic Traction Detachment Repair",
    category: "diabetic",
    complexity: "advanced",
    description:
      "Complex vitrectomy for tractional retinal detachments caused by proliferative diabetic retinopathy. Fibrovascular membranes are carefully dissected from the retinal surface using segmentation, delamination, and en-bloc techniques. These are among the most challenging vitreoretinal procedures due to the vascularity of the membranes and risk of iatrogenic breaks. Bimanual techniques with chandelier illumination are frequently employed.",
    indications: [
      "Tractional retinal detachment involving macula",
      "Combined tractional-rhegmatogenous detachment",
      "Non-clearing vitreous hemorrhage with traction",
      "Progressive fibrovascular proliferation",
    ],
    steps: [
      "25g or 27g PPV with chandelier endoillumination",
      "Core vitrectomy avoiding traction on membranes",
      "Membrane segmentation (cutting between epicenters)",
      "Membrane delamination (separating from retinal surface)",
      "Hemostasis with endodiathermy or raised IOP",
      "Peripheral vitreous removal and endolaser",
      "Tamponade selection (silicone oil for severe cases)",
    ],
    relatedInnovationIds: [
      "27g-vitrectomy",
      "chandelier",
      "3d-hud",
      "wide-angle",
    ],
    successRate: "85-90% anatomical success",
  },
  {
    id: "endolaser",
    name: "Endolaser Photocoagulation",
    category: "other",
    complexity: "intermediate",
    description:
      "Intraoperative laser application to the retina using a fiber-optic probe inserted through a vitrectomy port. Used to create chorioretinal adhesions around retinal breaks, treat ischemic retina in diabetic disease, and seal retinal tears. Modern systems offer multiple wavelengths (532nm green, 577nm yellow) and pattern scanning capabilities for efficient treatment delivery.",
    indications: [
      "Retinal break treatment during vitrectomy",
      "Panretinal photocoagulation for proliferative diabetic retinopathy",
      "Retinopexy around drainage sites",
      "Treatment of peripheral retinal ischemia",
    ],
    steps: [
      "Select appropriate probe (straight, curved, or illuminated)",
      "Set laser parameters (power, duration, spot size)",
      "Apply treatment to target area under wide-angle viewing",
      "Achieve adequate whitening response",
      "Treat 360 degrees for PRP or focal for breaks",
    ],
    relatedInnovationIds: ["wide-angle", "27g-vitrectomy"],
    successRate: "Standard adjunctive procedure",
  },
  {
    id: "silicone-oil",
    name: "Silicone Oil Tamponade",
    category: "other",
    complexity: "intermediate",
    description:
      "Long-acting internal tamponade using medical-grade silicone oil for complex retinal detachments requiring extended support. Unlike gas tamponade, silicone oil provides indefinite support but requires a second surgery for removal. Used in cases with inferior breaks (where gas is less effective), giant retinal tears, severe PVR, and patients unable to maintain positioning. Heavy silicone oil (Densiron 68) is available for inferior pathology.",
    indications: [
      "Complex retinal detachment with PVR",
      "Giant retinal tears",
      "Inferior retinal pathology",
      "Patients unable to position (one-eyed, pediatric)",
      "Traumatic retinal detachment",
    ],
    steps: [
      "Complete vitrectomy with retinal reattachment",
      "Fluid-air exchange",
      "Air-silicone oil exchange via viscous injection",
      "Confirm retinal reattachment under oil",
      "IOP check and adjustment",
      "Plan removal surgery (typically 3-6 months later)",
    ],
    relatedInnovationIds: ["27g-vitrectomy", "wide-angle"],
    successRate: "Adjunctive — improves complex case outcomes",
  },
];

export const timelineEvents: TimelineEvent[] = [
  {
    year: 1970,
    title: "First Pars Plana Vitrectomy",
    description:
      "Robert Machemer performs the first pars plana vitrectomy using the VISC (Vitreous Infusion Suction Cutter), a single 17-gauge instrument combining infusion, cutting, and aspiration. This landmark achievement creates the entire field of vitreoretinal surgery.",
    category: "milestone",
    significance: "landmark",
  },
  {
    year: 1972,
    title: "Multi-Port Vitrectomy System",
    description:
      "Conor O'Malley and Ralph Heintz develop the three-port pars plana vitrectomy system using 20-gauge instruments, separating infusion, illumination, and cutting into dedicated ports. This design becomes the standard for decades.",
    category: "instruments",
    significance: "landmark",
  },
  {
    year: 1980,
    title: "Introduction of Perfluorocarbon Liquids",
    description:
      "Perfluorocarbon liquids (PFCLs) are introduced as intraoperative tools for retinal surgery. Their high specific gravity allows them to unfold and flatten detached retina from posterior to anterior, revolutionizing complex detachment repair.",
    category: "pharmaceuticals",
    significance: "major",
  },
  {
    year: 1987,
    title: "Silicone Oil Tamponade Standardized",
    description:
      "The Silicone Oil Study establishes evidence-based guidelines for silicone oil use in complex retinal detachments with PVR, standardizing tamponade selection for severe cases.",
    category: "pharmaceuticals",
    significance: "major",
  },
  {
    year: 1996,
    title: "25-Gauge Vitrectomy Development",
    description:
      "Claus Eckardt develops the first 25-gauge sutureless vitrectomy system, beginning the trend toward minimally invasive vitreoretinal surgery with self-sealing sclerotomies.",
    category: "instruments",
    significance: "landmark",
  },
  {
    year: 2002,
    title: "Wide-Angle Viewing Systems",
    description:
      "Non-contact wide-angle viewing systems achieve mainstream adoption, providing panoramic retinal visualization without an assistant holding a contact lens.",
    category: "visualization",
    significance: "major",
  },
  {
    year: 2004,
    title: "Anti-VEGF Era Begins",
    description:
      "Off-label intravitreal bevacizumab (Avastin) demonstrates dramatic efficacy for wet AMD, launching the anti-VEGF revolution. Ranibizumab (Lucentis) receives FDA approval in 2006, aflibercept (Eylea) in 2011.",
    category: "pharmaceuticals",
    significance: "landmark",
  },
  {
    year: 2005,
    title: "23-Gauge Vitrectomy Introduced",
    description:
      "Claus Eckardt introduces 23-gauge vitrectomy, offering a middle ground between the rigidity of 20-gauge and the flexibility limitations of early 25-gauge instruments.",
    category: "instruments",
    significance: "notable",
  },
  {
    year: 2008,
    title: "Chandelier Endoillumination",
    description:
      "Chandelier illumination systems gain widespread adoption, enabling bimanual surgical techniques by providing fixed, hands-free panoramic illumination during vitrectomy.",
    category: "instruments",
    significance: "major",
  },
  {
    year: 2010,
    title: "ILM Peeling Becomes Standard",
    description:
      "Internal limiting membrane peeling is established as standard of care for macular hole surgery, with closure rates exceeding 95% compared to 70% without ILM peel.",
    category: "milestone",
    significance: "major",
  },
  {
    year: 2014,
    title: "Intraoperative OCT Integration",
    description:
      "Microscope-integrated intraoperative OCT systems (Zeiss RESCAN 700) enter clinical use, providing real-time retinal cross-sections during surgery. The DISCOVER study demonstrates altered decision-making in 43% of cases.",
    category: "imaging",
    significance: "landmark",
  },
  {
    year: 2015,
    title: "27-Gauge Vitrectomy Systems",
    description:
      "27-gauge vitrectomy platforms achieve clinical maturity with improved cutter technology and instrument stiffness, establishing new standard for minimally invasive surgery.",
    category: "instruments",
    significance: "major",
  },
  {
    year: 2017,
    title: "First Gene Therapy for Inherited Blindness",
    description:
      "Luxturna (voretigene neparvovec) receives FDA approval — the first gene therapy for any genetic disease — treating RPE65-mediated inherited retinal dystrophy via subretinal injection.",
    category: "pharmaceuticals",
    significance: "landmark",
  },
  {
    year: 2017,
    title: "3D Heads-Up Display Surgery",
    description:
      "3D visualization platforms (Alcon NGENUITY, TrueVision) gain FDA clearance and rapid adoption, offering digital enhancement of surgical viewing with improved ergonomics.",
    category: "visualization",
    significance: "major",
  },
  {
    year: 2018,
    title: "First FDA-Approved Autonomous AI Diagnostic",
    description:
      "IDx-DR becomes the first FDA-approved AI system for autonomous medical diagnosis, screening for diabetic retinopathy from fundus photographs without specialist oversight.",
    category: "ai",
    significance: "landmark",
  },
  {
    year: 2019,
    title: "PRECEYES Robotic Surgery CE Mark",
    description:
      "The PRECEYES Surgical System receives CE marking in Europe, becoming the first certified robot for intraocular surgery with 10-micrometer positioning precision.",
    category: "robotics",
    significance: "landmark",
  },
  {
    year: 2021,
    title: "First Robotic Subretinal Injection",
    description:
      "PRECEYES performs the first-in-human robotic subretinal drug injection under local anesthesia, demonstrating feasibility of robot-assisted gene therapy delivery.",
    category: "robotics",
    significance: "major",
  },
  {
    year: 2022,
    title: "Faricimab Bispecific Antibody Approved",
    description:
      "Faricimab (Vabysmo) receives FDA approval as the first bispecific antibody for retinal disease, targeting both VEGF-A and Ang-2 with extended dosing intervals up to 16 weeks.",
    category: "pharmaceuticals",
    significance: "major",
  },
  {
    year: 2022,
    title: "EVA Nexus Platform Launch",
    description:
      "DORC launches the EVA Nexus, the only FDA-cleared vitrectomy platform with integrated subretinal injection capability, positioning it as essential infrastructure for gene therapy delivery.",
    category: "instruments",
    significance: "major",
  },
  {
    year: 2023,
    title: "OQrimo Surgical Robot Approved in Japan",
    description:
      "OQrimo, an intraocular endoscope-holding robot, receives approval in Japan, enabling two-handed surgical manipulation during vitreoretinal surgery for proliferative diabetic retinopathy.",
    category: "robotics",
    significance: "notable",
  },
  {
    year: 2024,
    title: "AI Surgical Planning Integration",
    description:
      "Clinical trials begin for AI-assisted surgical planning systems that combine preoperative OCT and fundus data to optimize robotic surgery parameters and predict surgical outcomes.",
    category: "ai",
    significance: "notable",
  },
];

// Helper functions
export function getInnovationById(id: string): Innovation | undefined {
  return innovations.find((i) => i.id === id);
}

export function getTechniqueById(id: string): Technique | undefined {
  return techniques.find((t) => t.id === id);
}

export function getInnovationsByCategory(category: Category): Innovation[] {
  return innovations.filter((i) => i.category === category);
}

export function getTechniquesByCategory(
  category: TechniqueCategory
): Technique[] {
  return techniques.filter((t) => t.category === category);
}

export function getRelatedInnovations(technique: Technique): Innovation[] {
  return technique.relatedInnovationIds
    .map((id) => getInnovationById(id))
    .filter(Boolean) as Innovation[];
}
