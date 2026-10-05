import logoTransparent from '../assets/logo-transparent.png';
import drArchanaImage from '../assets/dr-archana.jpeg';

export interface Treatment {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  description: string;
  duration: string;
  sessions: string;
  downtime: string;
  benefits: string[];
}

export interface Concern {
  id: string;
  label: string;
  headline: string;
  overview: string;
  recommendedTreatments: string[];
}

export interface Review {
  id: string;
  name: string;
  role: string;
  rating: number;
  comment: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  aspectClass: string;
}

export const HERO_IMAGE_URL = "https://lh3.googleusercontent.com/aida-public/AB6AXuBoNu07RQ0o2yVj0ZIIugFucBjI4UEGPaoGQVTNWPqqZLTPs1iwoZF4MKHxe28TzopvKZNdd0lpp4i4F55cbRGeFetsP_99LMPD63bgHTLbX4gtDtAMDV0BAQ2hMOY9vhxc7I69apLkNtwpYr58j2RBx2Rrfaym0DWHLuGG4PcCcHCm_3zt44rh3ArDd8EdIuXb3HEqfyoMTJc5ySXDi-3Ssdqv21Do4N_NJhqcJWrXwKmBlxsXTR7w";

export const LOGO_URL = logoTransparent;

export const ABOUT_IMAGE_URL = drArchanaImage;

export const MAP_IMAGE_URL = "https://lh3.googleusercontent.com/aida-public/AB6AXuDHDyiyAx01CzVtwuFrH-OW71CXuw1sIEEzGpcGFwkThBEJqg0zlgztyar3yQ5aIjFVi9mFOv3UzRMe9Ik5y0h4tyfQA9GAbJldC1kviY9q-afvPJ18v5zbX4D7CXt2MUaClDSQij-DAIVrsgTn-g9q_arZEKi9W8yI1lPeqQJQDbXUNAIkRAQ6nA7DIZXn1KIGsshoiu5HJK7I81xlsj9MpByeQgKLENZFfMFtxosqvq3kRZHXm_Ki";

export const CLINIC_CONCERNS: Concern[] = [
  {
    id: "acne",
    label: "Acne & Pimples",
    headline: "Active Acne, Papules & Congested Pores",
    overview: "Medical comedone extraction, anti-bacterial laser therapy, and bespoke salicylic peel protocols to stop active flare-ups and prevent blemishes.",
    recommendedTreatments: ["Salicylic Clarifying Peels", "Blue Light Laser Sterilization", "Dermoscopic Comedone Extraction"]
  },
  {
    id: "pigmentation",
    label: "Pigmentation",
    headline: "Hormonal Melasma, Sunspots & Epidermal Freckles",
    overview: "Targeted Q-switched laser toning, glutathione infusions, and depigmenting cocktails to dissolve stubborn sun damage and hormonal melasma.",
    recommendedTreatments: ["Q-Switched Nd:YAG Laser Toning", "Glutathione & Vitamin C Mesotherapy", "Botanical Depigmentation Protocols"]
  },
  {
    id: "darkspots",
    label: "Dark Spots",
    headline: "Post-Inflammatory Hyperpigmentation (PIH)",
    overview: "Gradual dermal illumination through targeted micro-exfoliation and pigment-shattering optical wavelengths.",
    recommendedTreatments: ["Fractional Laser Peeling", "Kojic & Mandelic Infusion", "Barrier-Supportive Post-Care"]
  },
  {
    id: "wrinkles",
    label: "Wrinkles & Aging",
    headline: "Fine Lines, Expression Wrinkles & Laxity",
    overview: "HIFU non-surgical facelifts, collagen induction therapy, and youth rejuvenation lasers that restore structural skin elasticity without synthetic stiffness.",
    recommendedTreatments: ["High-Intensity Focused Ultrasound (HIFU)", "Collagen Induction Microneedling", "Polynucleotide Skin Boosters"]
  },
  {
    id: "darkcircles",
    label: "Dark Circles",
    headline: "Periorbital Pigmentation & Fatigue Shadows",
    overview: "Periorbital laser illumination, tear-trough micro-hydration, and peptide bio-revitalization to brighten shadowed, fatigued under-eyes.",
    recommendedTreatments: ["Tear-Trough Hyaluronic Micro-Fill", "Under-Eye Laser Lightening", "Peptide Cold Cryo-Toning"]
  },
  {
    id: "pores",
    label: "Enlarged Pores",
    headline: "Open Dermal Architecture & Excessive Sebum",
    overview: "Carbon laser peel ('Hollywood facial'), diamond microdermabrasion, and pore-refining astringent therapies to tighten open dermal architecture.",
    recommendedTreatments: ["Spectra Carbon Laser Peel", "Diamond Microdermabrasion", "Sebum Normalizing Regimen"]
  },
  {
    id: "rashes",
    label: "Rashes & Allergies",
    headline: "Contact Dermatitis, Eczema & Atopic Flare-Ups",
    overview: "Comprehensive dermatological diagnostic patch testing, barrier-repair medical emollients, and soothing immuno-modulating regimens.",
    recommendedTreatments: ["Scientific Dermoscopic Evaluation", "Ceramide Mantle Reconstruction", "Hypoallergenic Calming Compresses"]
  },
  {
    id: "hairfall",
    label: "Hair Fall & Scalp",
    headline: "Androgenetic Alopecia, Telogen Effluvium & Dandruff",
    overview: "High-concentration Autologous Platelet-Rich Plasma (PRP), scalp mesotherapy, and anti-fungal trichology to awaken dormant hair follicles.",
    recommendedTreatments: ["Centrifuged Autologous PRP", "Scalp Biotin & Copper Mesotherapy", "Medical Anti-Dandruff Trichology"]
  },
  {
    id: "scars",
    label: "Acne Scars",
    headline: "Ice-Pick, Boxcar & Rolling Atrophic Scars",
    overview: "Fractional CO2 laser resurfacing, subcision for deep ice-pick scars, and TCA CROSS for dramatic epidermal retexturing.",
    recommendedTreatments: ["Fractional CO2 Dermal Resurfacing", "Subcision Fibrotic Band Release", "TCA CROSS Chemical Reconstruction"]
  },
  {
    id: "uneven",
    label: "Uneven Skin Tone",
    headline: "Dullness, Weather Tan & Textured Complexion",
    overview: "Multi-fruit enzymatic peels and hydrating hydro-dermabrasion that slough away deceased keratin for radiant, translucent skin.",
    recommendedTreatments: ["Signature Glow Medi-Facial", "Lactic Acid Radiance Polish", "Antioxidant Oxygen Jet Therapy"]
  }
];

export const CLINIC_TREATMENTS: Treatment[] = [
  {
    id: "acne-pimples",
    title: "Acne & Pimples",
    subtitle: "Active Flare-up Eradication",
    icon: "bubble_chart",
    description: "Medical comedone extraction, anti-bacterial laser therapy, and bespoke salicylic peel protocols to stop active flare-ups and prevent blemishes.",
    duration: "45 - 60 Mins",
    sessions: "3 - 5 Sessions",
    downtime: "None (Zero downtime)",
    benefits: ["Clears active inflamed papules", "Extracts deep subterranean blackheads", "Sterilizes Cutibacterium acnes bacteria", "Reduces future breakout frequency"]
  },
  {
    id: "pigmentation-melasma",
    title: "Pigmentation & Melasma",
    subtitle: "Deep Dermal Depigmentation",
    icon: "gradient",
    description: "Targeted Q-switched laser toning, glutathione infusions, and depigmenting cocktails to dissolve stubborn sun damage and hormonal melasma.",
    duration: "45 Mins",
    sessions: "4 - 6 Sessions",
    downtime: "Mild transient erythema (2-4 hrs)",
    benefits: ["Breaks down concentrated melanin clusters", "Evens out mottled dermal tone", "Safe for Indian FitzPatrick skin types IV-VI", "Long-term recurrence prevention"]
  },
  {
    id: "dark-circles",
    title: "Dark Circles",
    subtitle: "Periorbital Illumination",
    icon: "visibility",
    description: "Periorbital laser illumination, tear-trough micro-hydration, and peptide bio-revitalization to brighten shadowed, fatigued under-eyes.",
    duration: "30 Mins",
    sessions: "3 - 4 Sessions",
    downtime: "None",
    benefits: ["Brightens vascular and pigment shadows", "Hydrates hollow tear troughs", "Firms delicate suborbital skin", "Reduces micro-swelling and puffiness"]
  },
  {
    id: "wrinkles-aging",
    title: "Wrinkles & Anti-Aging",
    subtitle: "Non-Surgical Structural Renewal",
    icon: "hourglass_top",
    description: "HIFU non-surgical facelifts, collagen induction therapy, and youth rejuvenation lasers that restore structural skin elasticity without synthetic stiffness.",
    duration: "60 - 75 Mins",
    sessions: "1 - 3 Sessions",
    downtime: "1 - 2 Days minimal redness",
    benefits: ["Lifts sagging jowls and brow lines", "Stimulates neo-collagenesis deep in SMAS layer", "Smooths forehead lines and crow's feet", "Natural dynamic facial movement preserved"]
  },
  {
    id: "enlarged-pores",
    title: "Enlarged Pores",
    subtitle: "Carbon Laser & Refinement",
    icon: "grain",
    description: "Carbon laser peel ('Hollywood facial'), diamond microdermabrasion, and pore-refining astringent therapies to tighten open dermal architecture.",
    duration: "40 Mins",
    sessions: "3 - 5 Sessions",
    downtime: "None",
    benefits: ["Instant porcelain skin texture", "Vaporizes dead sebum plugs", "Tightens follicular ostia", "Balances greasy T-zone shine"]
  },
  {
    id: "allergies-eczema",
    title: "Allergies & Eczema",
    subtitle: "Immuno-Modulated Barrier Repair",
    icon: "healing",
    description: "Comprehensive dermatological diagnostic patch testing, barrier-repair medical emollients, and soothing immuno-modulating regimens.",
    duration: "30 Mins Consult",
    sessions: "Ongoing clinical monitoring",
    downtime: "None",
    benefits: ["Pinpoints allergic contact triggers", "Restores compromised skin barrier lipid mantle", "Soothes chronic pruritus (itching)", "Non-steroidal sustainable care paths"]
  },
  {
    id: "psoriasis-care",
    title: "Psoriasis Care",
    subtitle: "Phototherapy & Systemic Health",
    icon: "spa",
    description: "Targeted narrowband phototherapy, biologic management plans, and holistic skin mantle recovery regimens for chronic plaque psoriasis.",
    duration: "30 Mins",
    sessions: "Multi-week schedule",
    downtime: "None",
    benefits: ["Suppresses accelerated keratinocyte turnover", "Clears chronic silvery scale plaques", "Mitigates skin redness and fissures", "Compassionate chronic disease guidance"]
  },
  {
    id: "hair-fall-prp",
    title: "Hair Fall & Dandruff",
    subtitle: "Autologous Follicle Vitalization",
    icon: "temp_preferences_custom",
    description: "High-concentration Autologous Platelet-Rich Plasma (PRP), scalp mesotherapy, and anti-fungal trichology to awaken dormant hair follicles.",
    duration: "50 Mins",
    sessions: "4 - 6 Sessions",
    downtime: "Few hours of mild scalp tightness",
    benefits: ["Reverses early male & female pattern thinning", "Stimulates cellular anagen hair growth phase", "Eliminates stubborn Malassezia fungal dandruff", "Thickens miniaturized shaft caliber"]
  },
  {
    id: "laser-treatments",
    title: "Laser Treatments",
    subtitle: "Triple-Wavelength Diode & Optics",
    icon: "flare",
    description: "Painless triple-wavelength laser hair reduction, vascular lesion eradication, and skin brightening with cutting-edge medical optics.",
    duration: "20 - 90 Mins",
    sessions: "6 - 8 Sessions",
    downtime: "None",
    benefits: ["Chill-tip painless contact cooling", "Permanent hair reduction by up to 90%", "Targets both coarse and fine unwanted hair", "Eliminates ingrown hair bumps and folliculitis"]
  },
  {
    id: "scar-reconstruction",
    title: "Scar Reconstruction",
    subtitle: "Fractional Subcision & Resurfacing",
    icon: "texture",
    description: "Fractional CO2 laser resurfacing, subcision for deep ice-pick scars, and TCA CROSS for dramatic epidermal retexturing.",
    duration: "60 Mins",
    sessions: "3 - 5 Sessions",
    downtime: "3 - 5 Days micro-crusting",
    benefits: ["Breaks tethering fibrous scar adhesions", "Fills atrophic pitted indentations", "Triggers fresh collagen matrix deposition", "Significantly smoothes facial shadows"]
  }
];

export const CLINIC_GALLERY: GalleryItem[] = [
  {
    id: "suite-01",
    title: "Laser Rejuvenation & Resurfacing Lounge",
    category: "Clinical Suite 01",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC8xeUxIIMUu6WR169SwOgeJgm6EoVMlPLIU6SpGXx8lA9v2SjQsiftjnj4drSUi-sCej9nLXTIyuTw6_0aF7mKbE3Nz_E7DolGHdj0TMvWWl1qEvuxXWC5XX8g7JY-Q0wcpmtFfGmyNduraYuRssoTPZTDzJt4WZOy3AOZOgE4r6UMQByxDH-KfnrcOm6WuR9PJ1XAh6n1i6l84B6nNMkN6jJ0eKiOA0wAJNQxOiEtubDT3LxBbQuA",
    aspectClass: "md:col-span-2 lg:col-span-2 aspect-[16/10]"
  },
  {
    id: "formulations",
    title: "Medical-Grade Skincare Dispensary",
    category: "Formulations",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDfp5VHLrALa8xn5GvwZRfQml6NjWgh1iVMzLpx9lTnyhGJEwHFAA4Hn9lrgGI4diu9pvb1XBG9r0i0-lZkScdWkqVgxMjW3qrEdjxXYbizPOmWPROX3BL1L4ZzQIXV8y5sQUe9bkeB2biz05Malp_nhXGvqqQeFbAH0NmPSHzYo-pQmGXHlgd3I6zIs6-1-9B-RJEfcCkvE80llOzF5RcP_yexxw0_8ltyWk2jtJ_G2BpcB9tZ3Qi6",
    aspectClass: "aspect-[4/5] md:aspect-auto"
  },
  {
    id: "consultation",
    title: "Private Diagnostic Doctor's Desk",
    category: "Consultation",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDKgVTcwy-Fk3b0wiDSwBA5_HsTx8kyDA1AUm0NkzV13tEDxttnY_OV2F4pYDHKye9YZB3Iuf_rqN5XB4PhdNYWfcd2zQVl8QwVS77ddmdVnoPxkba35ql5zYhqJJfXT06UdvjX86q8O6QiPOn3PLC52NcpwJLMoDf81NaI29so8pJTGZpOA7leMRv2j0q9Qy7ZRBcaAlJeuLvwY-bCaX0VFD6xH3SZbInQ9JYAd21o1oQXyd6CvJfg",
    aspectClass: "aspect-[4/5] md:aspect-auto"
  },
  {
    id: "reception",
    title: "Welcoming Reception & Patient Lounge",
    category: "Arrival",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBuX8Q7gEA8sAw1D2ux8WbR-Sh2Rb1aE8_bnjOUEZ4j03mrr6GTLxM5ch5DsPGcJYeE7vcPrdQM-N6_4AxqeRvqMKH5XFggtRhwdzc4HuRnGbQBVXdcWT89zv8rNTUryeFLxshoJJKk2cMPSsSFGUrnf8JgR-P-iDMjEiPXVbrW3UHs1VnRDCN09dFUxKFT7-1HBBSZtiIUV_K_7XzL7NZUjC9CkQPyiKbMRnDSwNJdXTsQezKZw5zF",
    aspectClass: "md:col-span-2 lg:col-span-2 aspect-[16/9]"
  },
  {
    id: "trichology",
    title: "PRP & Advanced Hair Vitalization Unit",
    category: "Trichology Room",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDZTglFo4lpfktUi3ZcqKGyI3EYCy2CBkW9cUxWlJTmJPOUrdmN0hOSLC0FZjCclXBu-vwHsRsgSrQuSgtz1VUj4OMCpw6ukOouqW_p0rQnkMN3d-5QzqR6xi6cy-agx8JUENvNJU2w5LKRHR5u3D5BWSLxl215eGsSghkhzc9-a_9LJWuoyMgsuxRoLmBIqilKCI7aalKIvIAF9hCiCiiMsxa4e3IWsRSbLfR9tdQ0MBDt30esEG6z",
    aspectClass: "md:col-span-1 lg:col-span-2 aspect-[16/9]"
  }
];

export const CLINIC_REVIEWS: Review[] = [
  {
    id: "shalan",
    name: "Shalan",
    role: "Ashta Patient • Google Review",
    rating: 5,
    comment: "The doctor at Derma Remedy takes time to understand the root cause of skin issues instead of recommending random treatments. Extremely happy with the results for my pigmentation problem. The clinic is clean, well maintained, and peaceful."
  },
  {
    id: "rajaram",
    name: "Rajaram Maskepatil",
    role: "Ashta Patient • Google Review",
    rating: 5,
    comment: "Excellent experience at Derma Remedy Ashta. Modern equipment and very professional approach. The hair treatment started showing positive improvement within few sessions. Very polite staff and honest medical guidance."
  },
  {
    id: "shraddheya",
    name: "Shraddheya Maske Patil",
    role: "Ashta Patient • Google Review",
    rating: 5,
    comment: "Best skin and laser clinic in the region! I went for acne scar treatment and the personalized laser session was very smooth with minimal discomfort. Truly grateful to have such high quality dermatological care right here in Ashta."
  }
];
