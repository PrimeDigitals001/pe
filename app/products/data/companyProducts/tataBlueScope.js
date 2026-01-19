// app/products/data/companyProducts/tataBlueScope.js

export const tataBluescopeData = {
  companyInfo: {
    name: "Roof and Wall Cladding",
    logo: "/images/products/tata-bluescope/logo.png",
    description: "The LYSAGHT® range of colour coated Roofing and Wall Cladding profiles from Tata BluesScope Steel are suitable for a variety of applications and design considerations.The roofing and walling profiles are manufactured from high strength ZINCALUME® steel and COLORBOND® steel exhibiting wider spanning capabilities with better uplift performance. Aesthetic appearance, longer life, environment-friendly, capability of sustaining high wind, and impact load, are some of the benefits of the LYSAGHT® Roofing and Wall cladding sheets.",
  },

  categories: [
    {
      id: "screw-down-roof-wall",
      name: "Screw Down Roof and Wall Sheets",
      count: 8,
      products: [
        {
          id: 1,
          name: "TRIMDEK® 1015",
          slug: "trimdek-1015",
          category: "Screw Down Roof and Wall Sheets",

          // Card Display
          image: "/images/products/tata-bluescope/trimdek-1015.png",
          onelinerDescription: "Versatile Trapezoidal Roof and Wall Cladding",
          cardDescription: "LYSAGHT® TRIMDEK® 1015 is a versatile, trapezoidal ribbed roofing and wall cladding profile.",
          backgroundColor: "#FFFEEF",

          // Individual Product Page
          longDescription: "LYSAGHT® TRIMDEK® 1015 is a versatile, trapezoidal ribbed roofing and wall cladding profile with subtle fluting in the pans to provide strength and long spanning capabilities. It is ideal for industrial and commercial applications.",

          specifications: ["Base Metal Thickness - 0.42 mm/ 0.45 mm", "Depth - 28.5 mmOverall width - 1072 mm", "Steel Grade - G550 (550 MPa yield strength)", "Total Coated Thickness - 0.47 mm/ 0.50 mm", "Effective cover width - 1015 mm", "Min. Roof Slope - 5 degree, 3 degree acceptable for applications without end laps and ridge", "Coating Class (min.) - ZINCALUME AZ150 (150g/m2) (55% Aluminium, 43.5% Zinc, 1.5% Si) as per AS1397 / IS15961 – with Super Durable Polyester COLORBOND®; steel XRW quality paint system of approved color conforming to AS/NZS 2728  "],

          applications: [
            "Roofing, Wall cladding"
          ],

          brochure: "/pdf/products/tata-bluescope/trimdek-1015-brochure.pdf",
          brochureFileName: "Trimdek 1015", // ← ADD THIS
          brochureFileSize: "100KB",

          colorRange: {
            colors: [
              { name: "Surfmist", sri: "87", hex: "#F6F5F6" },
              { name: "Headland", sri: "38", hex: "#AD574D" },
              { name: "Pale Eucalypt", sri: "44", hex: "#98A994" },
              { name: "Cottage Green", sri: "25", hex: "#2A614A" },
              { name: "Aquamarine", sri: "41", hex: "#479271" },
              { name: "Sky Blue", sri: "46", hex: "#0091BD" },
              { name: "Torres Blue", sri: "27", hex: "#345E83" },
              { name: "Toba Blue", sri: "37", hex: "#0077AA" },
              {
                name: "Zincalume Steel",
                sri: "57",
                image: "/images/products/tata-bluescope/zincalume-steel.png" // ← Image instead of hex
              }
            ]
          },

          note: "Above standard colour shades are given for guidance only. The Colour shades may look different due to print limitation. Please contact the nearest Tata BlueScope Steel sales office for any other colour shade enquiry. We would be glad to send an actual COLORBOND® colour sample or help with any other colour requirement."
        },

        {
          id: 2,
          name: "BR-II™ 900",
          slug: "br-ii-900",
          category: "Screw Down Roof and Wall Sheets",

          // Card Display
          image: "/images/products/tata-bluescope/br-ii-900.png",
          onelinerDescription: "Deep Trapezoidal Roof and wall Cladding",
          cardDescription: "LYSAGHT® BR-II™ 900 is a weather-tight deep trapezoidal roof and wall cladding system.",
          backgroundColor: "#FFFEEF",

          // Individual Product Page
          longDescription: "LYSAGHT® BR-II™ 900 is a weather-tight deep trapezoidal roof and wall cladding system that is economical to install, maintain and is ideal for industrial and commercial applications. All BR-II™ 900 roof panels have a full 38.1 mm deep corrugation, thus making it the strongest fastened roof system in the industry.",

          specifications: [
            "Base Metal Thickness - 0.42 mm/ 0.45 mm",
            "Depth - 38.1 mm",
            "Overall width - 965 mm",
            "Steel Grade - G550 (550 MPa yield strength)",
            "Total Coated Thickness - 0.47 mm/ 0.50 mm",
            "Effective cover width - 900 mm",
            "Min. Roof Slope - 5 degree, 3 degree acceptable for applications without end laps and ridge",
            "Coating Class (min.) - ZINCALUME AZ150 (150g/m2) (55% Aluminium, 43.5% Zinc, 1.5% Si) as per AS1397 / IS15961 – with Super Durable Polyester COLORBOND®; steel XRW quality paint system of approved color conforming to AS/NZS 2728 type-4 / IS15965 class 3"
          ],

          applications: [
            "Roofing, Wall cladding"
          ],

          brochure: "https://tatabluescopesteel.com/wp-content/uploads/2024/12/BR-II-900.pdf",
          brochureFileName: "BR - II 900",
          brochureFileSize: "91KB",

          colorRange: {
            colors: [
              { name: "Surfmist", sri: "87", hex: "#F6F5F6" },
              { name: "Headland", sri: "38", hex: "#AD574D" },
              { name: "Pale Eucalypt", sri: "44", hex: "#98A994" },
              { name: "Cottage Green", sri: "25", hex: "#2A614A" },
              { name: "Aquamarine", sri: "41", hex: "#479271" },
              { name: "Sky Blue", sri: "46", hex: "#0091BD" },
              { name: "Torres Blue", sri: "27", hex: "#345E83" },
              { name: "Toba Blue", sri: "37", hex: "#0077AA" },
              {
                name: "Zincalume Steel",
                sri: "57",
                image: "/images/products/tata-bluescope/zincalume-steel.png"
              }
            ]
          },

          note: "Above standard colour shades are given for guidance only. The Colour shades may look different due to print limitation. Please contact the nearest Tata BlueScope Steel sales office for any other colour shade enquiry. We would be glad to send an actual COLORBOND® colour sample or help with any other colour requirement."
        },
        {
          id: 3,
          name: "SPANDEK® 935",
          slug: "spandek-935",
          category: "Screw Down Roof and Wall Sheets",

          // Card Display
          image: "/images/products/tata-bluescope/spandek-935.png",
          onelinerDescription: "Modern Trapezoidal Corrugated roofing and walling",
          cardDescription: "LYSAGHT® SPANDEK® 935 roofing and walling has a contemporary, trapezoidal profile.",
          backgroundColor: "#FFFEEF",

          // Individual Product Page
          longDescription: "LYSAGHT® SPANDEK® 935 roofing and walling has a contemporary, trapezoidal profile, making it ideal for projects which need a modern appearance. Originally designed as an attractive profile for industrial construction, it is now equally popular for Commercial, Residential and Public buildings.",

          specifications: [
            "Base Metal Thickness - 0.42 mm/ 0.45 mm",
            "Depth - 24 mm",
            "Overall width - 992 mm",
            "Steel Grade - G550 (550 MPa yield strength)",
            "Total Coated Thickness - 0.47 mm/ 0.50 mm",
            "Effective cover width - 935 mm",
            "Min. Roof Slope - 3 degree",
            "Coating Class (min.) - ZINCALUME AZ150 (150g/m2) (55% Aluminium, 43.5% Zinc, 1.5% Si) as per AS1397 / IS15961 – with Super Durable Polyester COLORBOND®; steel XRW quality paint system of approved color conforming to AS/NZS 2728 type-4 / IS15965 class 3"
          ],

          applications: [
            "Roofing, Wall cladding"
          ],

          brochure: "https://tatabluescopesteel.com/wp-content/uploads/2024/12/SPANDEK.pdf",
          brochureFileName: "SPANDEK 935",
          brochureFileSize: "91KB",

          colorRange: {
            colors: [
              { name: "Surfmist", sri: "87", hex: "#F6F5F6" },
              { name: "Headland", sri: "38", hex: "#AD574D" },
              { name: "Pale Eucalypt", sri: "44", hex: "#98A994" },
              { name: "Cottage Green", sri: "25", hex: "#2A614A" },
              { name: "Aquamarine", sri: "41", hex: "#479271" },
              { name: "Sky Blue", sri: "46", hex: "#0091BD" },
              { name: "Torres Blue", sri: "27", hex: "#345E83" },
              { name: "Toba Blue", sri: "37", hex: "#0077AA" },
              {
                name: "Zincalume Steel",
                sri: "57",
                image: "/images/products/tata-bluescope/zincalume-steel.png"
              }
            ]
          },

          note: "Above standard colour shades are given for guidance only. The Colour shades may look different due to print limitation. Please contact the nearest Tata BlueScope Steel sales office for any other colour shade enquiry. We would be glad to send an actual COLORBOND® colour sample or help with any other colour requirement."
        },
        {
          id: 4,
          name: "CUSTOM ORB® 990",
          slug: "custom-orb-990",
          category: "Screw Down Roof and Wall Sheets",

          // Card Display
          image: "/images/products/tata-bluescope/custom-orb-990.png",
          onelinerDescription: "Corrugated roofing and wall cladding",
          cardDescription: "LYSAGHT® CUSTOM ORB® 990 is a tough and corrugated roofing and wall cladding profile.",
          backgroundColor: "#FFFEEF",

          // Individual Product Page
          longDescription: "LYSAGHT® CUSTOM ORB® 990 is a tough and corrugated roofing and wall cladding profile, which offers flexibility of design for Roof and Wall cladding applications in Industrial, Commercial, Residential and Public buildings.",

          specifications: [
            "Base Metal Thickness - 0.42 mm/ 0.45 mm",
            "Depth - 19 mm",
            "Overall width - 1066 mm",
            "Steel Grade - G550 (300 MPa yield strength)",
            "Total Coated Thickness - 0.47 mm/ 0.50 mm",
            "Effective cover width - 990 mm",
            "Min. Roof Slope - 6 degree",
            "Coating Class (min.) - ZINCALUME AZ150 (150g/m2) (55% Aluminium, 43.5% Zinc, 1.5% Si) as per AS1397 / IS15961 – with Super Durable Polyester COLORBOND®; steel XRW quality paint system of approved color conforming to AS/NZS 2728 type-4 / IS15965 class 3"
          ],

          applications: [
            "Roofing, Wall cladding"
          ],

          brochure: "https://tatabluescopesteel.com/wp-content/uploads/2024/12/Custom-Orb-990.pdf",
          brochureFileName: "CUSTOM ORB 990",
          brochureFileSize: "91KB",

          colorRange: {
            colors: [
              { name: "Surfmist", sri: "87", hex: "#F6F5F6" },
              { name: "Headland", sri: "38", hex: "#AD574D" },
              { name: "Pale Eucalypt", sri: "44", hex: "#98A994" },
              { name: "Cottage Green", sri: "25", hex: "#2A614A" },
              { name: "Aquamarine", sri: "41", hex: "#479271" },
              { name: "Sky Blue", sri: "46", hex: "#0091BD" },
              { name: "Torres Blue", sri: "27", hex: "#345E83" },
              { name: "Toba Blue", sri: "37", hex: "#0077AA" },
              {
                name: "Zincalume Steel",
                sri: "57",
                image: "/images/products/tata-bluescope/zincalume-steel.png"
              }
            ]
          },

          note: "Above standard colour shades are given for guidance only. The Colour shades may look different due to print limitation. Please contact the nearest Tata BlueScope Steel sales office for any other colour shade enquiry. We would be glad to send an actual COLORBOND® colour sample or help with any other colour requirement."
        },

        {
          id: 5,
          name: "VARYDEK™ 1000",
          slug: "varydek-1000",
          category: "Screw Down Roof and Wall Sheets",

          // Card Display
          image: "/images/products/tata-bluescope/varydek-1000.png",
          onelinerDescription: "Trapezoidal Roof and wall Cladding",
          cardDescription: "VARYDEK™ 1000 is an innovative subtle square fluted steel roofing and walling profile.",
          backgroundColor: "#FFFEEF",

          // Individual Product Page
          longDescription: "VARYDEK™ 1000 is an innovative subtle square fluted steel roofing and walling profile. It is ideal for Industrial, Infrastructure, Commercial and large residential projects.",

          specifications: [
            "Base Metal Thickness - 0.42 mm/ 0.45 mm",
            "Depth - 28.5 mm",
            "Steel Grade - G550 (550 MPa yield strength)",
            "Total Coated Thickness - 0.47 mm/ 0.50 mm",
            "Effective cover width - 1000 mm",
            "Min. Roof Slope - 6 degree",
            "Coating Class (min.) - ZINCALUME AZ150 (150g/m2) (55% Aluminium, 43.5% Zinc, 1.5% Si) as per AS1397 / IS15961 – with Super Durable Polyester COLORBOND®; steel XRW quality paint system of approved color conforming to AS/NZS 2728 type-4 / IS15965 class 3"
          ],

          applications: [
            "Roofing, Wall cladding"
          ],

          brochure: "https://tatabluescopesteel.com/wp-content/uploads/2024/12/VARYDEK.pdf",
          brochureFileName: "VARYDEK 1000",
          brochureFileSize: "91KB",

          colorRange: {
            colors: [
              { name: "Surfmist", sri: "87", hex: "#F6F5F6" },
              { name: "Headland", sri: "38", hex: "#AD574D" },
              { name: "Pale Eucalypt", sri: "44", hex: "#98A994" },
              { name: "Cottage Green", sri: "25", hex: "#2A614A" },
              { name: "Aquamarine", sri: "41", hex: "#479271" },
              { name: "Sky Blue", sri: "46", hex: "#0091BD" },
              { name: "Torres Blue", sri: "27", hex: "#345E83" },
              { name: "Toba Blue", sri: "37", hex: "#0077AA" },
              {
                name: "Zincalume Steel",
                sri: "57",
                image: "/images/products/tata-bluescope/zincalume-steel.png"
              }
            ]
          },

          note: "Above standard colour shades are given for guidance only. The Colour shades may look different due to print limitation. Please contact the nearest Tata BlueScope Steel sales office for any other colour shade enquiry. We would be glad to send an actual COLORBOND® colour sample or help with any other colour requirement."
        },

        {
          id: 6,
          name: "SHADOWRIB™ 900",
          slug: "shadowrib-900",
          category: "Screw Down Roof and Wall Sheets",

          // Card Display
          image: "/images/products/tata-bluescope/shadowrib-900.png",
          onelinerDescription: "Aesthetically Superior Walling Profile",
          cardDescription: "SHADOWRIB™ 900 is a wall cladding profile which provides architecturally pleasing appearance to your building.",
          backgroundColor: "#FFFFFF",

          // Individual Product Page
          longDescription: "SHADOWRIB™ 900 is a wall cladding profile which provides architecturally pleasing appearance to your building. It is a strong profile, engineered to take high wind load and pressure.",

          specifications: [
            "Base Metal Thickness - 0.42 mm/ 0.45 mm",
            "Depth - 38.1 mm",
            "Steel Grade - G550 (550 MPa yield strength)",
            "Total Coated Thickness - 0.47 mm/ 0.50 mm",
            "Effective cover width - 900 mm",
            "Min. Roof Slope - 6 degree",
            "Coating Class (min.) - ZINCALUME AZ150 (150g/m2) (55% Aluminium, 43.5% Zinc, 1.5% Si) as per AS1397 / IS15961 – with Super Durable Polyester COLORBOND®; steel XRW quality paint system of approved color conforming to AS/NZS 2728 type-4 / IS15965 class 3"
          ],

          applications: [
            "Roofing, Wall cladding"
          ],

          brochure: "/pdf/products/tata-bluescope/shadowrib-900-brochure.pdf",
          brochureFileName: "SHADOWRIB 900",
          brochureFileSize: "91KB",

          colorRange: {
            colors: [
              { name: "Surfmist", sri: "87", hex: "#F6F5F6" },
              { name: "Headland", sri: "38", hex: "#AD574D" },
              { name: "Pale Eucalypt", sri: "44", hex: "#98A994" },
              { name: "Cottage Green", sri: "25", hex: "#2A614A" },
              { name: "Aquamarine", sri: "41", hex: "#479271" },
              { name: "Sky Blue", sri: "46", hex: "#0091BD" },
              { name: "Torres Blue", sri: "27", hex: "#345E83" },
              { name: "Toba Blue", sri: "37", hex: "#0077AA" },
              {
                name: "Zincalume Steel",
                sri: "57",
                image: "/images/products/tata-bluescope/zincalume-steel.png"
              }
            ]
          },

          note: "Above standard colour shades are given for guidance only. The Colour shades may look different due to print limitation. Please contact the nearest Tata BlueScope Steel sales office for any other colour shade enquiry. We would be glad to send an actual COLORBOND® colour sample or help with any other colour requirement."
        },
        {
          id: 7,
          name: "SMARTDEK® 51",
          slug: "smartdek-51",
          category: "Screw Down Roof and Wall Sheets",

          // Card Display
          image: "/images/products/tata-bluescope/smartdek-51.png",
          onelinerDescription: "Structural Decking System",
          cardDescription: "LYSAGHT SMARTDEK® 51 Structural Decking System is an innovative high strength zinc-coated steel decking system.",
          backgroundColor: "#C6D5ED",

          // Individual Product Page
          longDescription: "SMARTDEK® 51 is a high-strength structural decking system designed for composite concrete floor slabs and formwork in construction. It is a precision-engineered \"W\" profile steel decking sheet that serves both as permanent formwork during construction and as structural reinforcement in the finished slab.",

          specifications: [
            "Base Metal Thickness - 0.70 mm, 1.00 mm, 1.20 mm",
            "Depth - 51 mm",
            "Steel Grade - G550 (550 MPa yield strength)",
            "Total Coated Thickness - 0.47 mm/ 0.50 mm",
            "Effective cover width - 960 mm",
            "Min. Roof Slope - 6 degree",
            "Coating Class (min.) - Z275 (min 275 g/m² total) (55% Aluminium, 43.5% Zinc, 1.5% Si) as per AS1397 / IS15961 – with Super Durable Polyester COLORBOND®; steel XRW quality paint system of approved color conforming to AS/NZS 2728 type-4 / IS15965 class 3"
          ],

          applications: [
            "structural floor decking"
          ],

          brochure: "https://tatabluescopesteel.com/wp-content/uploads/2024/12/SMARTDEK-51.pdf",
          brochureFileName: "SMARTDEK51",
          brochureFileSize: "91KB",

          // colorRange: {
          //   colors: [
          //     { name: "Surfmist", sri: "87", hex: "#F6F5F6" },
          //     { name: "Headland", sri: "38", hex: "#AD574D" },
          //     { name: "Pale Eucalypt", sri: "44", hex: "#98A994" },
          //     { name: "Cottage Green", sri: "25", hex: "#2A614A" },
          //     { name: "Aquamarine", sri: "41", hex: "#479271" },
          //     { name: "Sky Blue", sri: "46", hex: "#0091BD" },
          //     { name: "Torres Blue", sri: "27", hex: "#345E83" },
          //     { name: "Toba Blue", sri: "37", hex: "#0077AA" },
          //     {
          //       name: "Zincalume Steel",
          //       sri: "57",
          //       image: "/images/products/tata-bluescope/zincalume-steel.png"
          //     }
          //   ]
          // },

          // note: "Above standard colour shades are given for guidance only. The Colour shades may look different due to print limitation. Please contact the nearest Tata BlueScope Steel sales office for any other colour shade enquiry. We would be glad to send an actual COLORBOND® colour sample or help with any other colour requirement."
        },
        {
          id: 8,
          name: "EZYDEK™ 44",
          slug: "ezydek-44",
          category: "Screw Down Roof and Wall Sheets",

          // Card Display
          image: "/images/products/tata-bluescope/ezydek-44.png",
          onelinerDescription: "Trapezoidal decking profile",
          cardDescription: "EZYDEK™ 44 profile is a zinc-coated steel sheet that acts as a permanent formwork and provides a strong working platform.",
          backgroundColor: "#FFFFFF",

          // Individual Product Page
          longDescription: "EZYDEK™ 44 is a steel decking profile from Tata BlueScope Steel (LYSAGHT®). It acts as permanent framework/shuttering and provides a strong working platform for concrete slab construction. It features a trapezoidal profile for easy overlap and faster installation.",

          specifications: [
            "Effective Cover Width - 910 mm",
            "Depth (Profile Height) - 44 mm",
            "Steel Grade - 245 MPa (typical structural grade)",
            "Thickness (Total Coated Thickness – TCT) - 0.7, 0.8, 1.0, 1.2, 1.5 mm",
            "Unit Weight (kg/m) - 6.67, 7.63, 9.54, 11.46, 14.33 kg/m",
            "Unit Weight (kg/m²) - 6.98, 7.98, 9.98, 11.99, 14.99 kg/m²",
            "Moment of Inertia - 21.96, 25.28, 31.93, 38.58, 48.55 cm⁴/m",
            "Sectional Modulus (Top) - 9.67, 11.11, 13.97, 16.81, 21.02 cm³/m",
            "Sectional Modulus (Bottom) - 10.00, 11.49, 14.44, 17.37, 21.72 cm³/m"
          ],

          applications: [
            "Residential buildings, Commercial & offices, Industrial & warehouses, Infrastructure projects, Concrete slab flooring"
          ],

          brochure: "https://tatabluescopesteel.com/wp-content/uploads/2024/12/EZYDEK-44.pdf",
          brochureFileName: "EZYDEK44",
          brochureFileSize: "91KB",

          // colorRange: {
          //   colors: [
          //     { name: "Surfmist", sri: "87", hex: "#F6F5F6" },
          //     { name: "Headland", sri: "38", hex: "#AD574D" },
          //     { name: "Pale Eucalypt", sri: "44", hex: "#98A994" },
          //     { name: "Cottage Green", sri: "25", hex: "#2A614A" },
          //     { name: "Aquamarine", sri: "41", hex: "#479271" },
          //     { name: "Sky Blue", sri: "46", hex: "#0091BD" },
          //     { name: "Torres Blue", sri: "27", hex: "#345E83" },
          //     { name: "Toba Blue", sri: "37", hex: "#0077AA" },
          //     {
          //       name: "Zincalume Steel",
          //       sri: "57",
          //       image: "/images/products/tata-bluescope/zincalume-steel.png"
          //     }
          //   ]
          // },

          // note: "Above standard colour shades are given for guidance only. The Colour shades may look different due to print limitation. Please contact the nearest Tata BlueScope Steel sales office for any other colour shade enquiry. We would be glad to send an actual COLORBOND® colour sample or help with any other colour requirement."
        },
      ]
    },

    {
      id: "concealed-fix-roofing",
      name: "Concealed Fix Roofing Sheets",
      count: 2,
      products: [
        {
          id: 9,
          name: "KLIP-LOK® 700",
          slug: "klip-lok-700",
          category: "Concealed Fix Roofing Sheets",

          // Card Display
          image: "/images/products/tata-bluescope/klip-lok-700.png",
          onelinerDescription: "Concealed fixed Roof and Wall cladding Sheets",
          cardDescription: "LYSAGHT® KLIP-LOK® 700 is a new generation concealed roof and wall cladding profile.",
          backgroundColor: "#FFFEEF",

          // Individual Product Page
          longDescription: "LYSAGHT® KLIP-LOK® 700 is a new generation concealed roof and wall cladding profile. It has a wider span and better uplift performance than all available comparable profiles.",

          specifications: [
            "Base Metal Thickness - 0.42 mm/ 0.45 mm",
            "Depth - 43 mm",
            "Steel Grade - G550 (550 MPa yield strength)",
            "Total Coated Thickness - 0.47 mm/ 0.50 mm",
            "Effective cover width - 700 mm",
            "Min. Roof Slope - 2 degree",
            "Coating Class (min.) - ZINCALUME AZ150 (150g/m2) (55% Aluminium, 43.5% Zinc, 1.5% Si) as per AS1397 / IS15961 – with Super Durable Polyester COLORBOND®; steel XRW quality paint system of approved color conforming to AS/NZS 2728 type-4 / IS15965 class 3"
          ],

          applications: [
            "Roofing, Wall cladding"
          ],

          brochure: "https://tatabluescopesteel.com/wp-content/uploads/2024/12/KLIPLOK-700-2.pdf",
          brochureFileName: "KLIP-LOK700",
          brochureFileSize: "91KB",

          colorRange: {
            colors: [
              { name: "Surfmist", sri: "87", hex: "#F6F5F6" },
              { name: "Headland", sri: "38", hex: "#AD574D" },
              { name: "Pale Eucalypt", sri: "44", hex: "#98A994" },
              { name: "Cottage Green", sri: "25", hex: "#2A614A" },
              { name: "Aquamarine", sri: "41", hex: "#479271" },
              { name: "Sky Blue", sri: "46", hex: "#0091BD" },
              { name: "Torres Blue", sri: "27", hex: "#345E83" },
              { name: "Toba Blue", sri: "37", hex: "#0077AA" },
              {
                name: "Zincalume Steel",
                sri: "57",
                image: "/images/products/tata-bluescope/zincalume-steel.png"
              }
            ]
          },

          note: "Above standard colour shades are given for guidance only. The Colour shades may look different due to print limitation. Please contact the nearest Tata BlueScope Steel sales office for any other colour shade enquiry. We would be glad to send an actual COLORBOND® colour sample or help with any other colour requirement."
        },
        {
          id: 10,
          name: "KLIP-LOK® 770",
          slug: "klip-lok-770",
          category: "Concealed Fix Roofing Sheets",

          // Card Display
          image: "/images/products/tata-bluescope/klip-lok-770_2.png",
          onelinerDescription: "Concealed fixed Roof and Wall cladding Sheets",
          cardDescription: "LYSAGHT KLIP-LOK® 770 is a new generation widest cover with concealed-fixed cladding.",
          backgroundColor: "#FFFEEF",

          // Individual Product Page
          longDescription: "LYSAGHT KLIP-LOK® 770 is a new generation widest cover with concealed-fixed cladding. Made of high tensile steel of 550 MPa yield strength, it spans widest, with better uplift performance than all available comparable profiles.",

          specifications: [
            "Base Metal Thickness - 0.42 mm/ 0.45 mm",
            "Depth - 31.2 mm",
            "Steel Grade - G550 (550 MPa yield strength)",
            "Total Coated Thickness - 0.47 mm/ 0.50 mm",
            "Effective cover width - 770 mm",
            "Min. Roof Slope - 3 degree",
            "Coating Class (min.) - ZINCALUME AZ150 (150g/m2) (55% Aluminium, 43.5% Zinc, 1.5% Si) as per AS1397 / IS15961 – with Super Durable Polyester COLORBOND®; steel XRW quality paint system of approved color conforming to AS/NZS 2728 type-4 / IS15965 class 3"
          ],

          applications: [
            "Roofing, Wall cladding"
          ],

          brochure: "https://tatabluescopesteel.com/wp-content/uploads/2024/12/KLIPLOK-770.pdf",
          brochureFileName: "KLIP-LOK770",
          brochureFileSize: "91KB",

          colorRange: {
            colors: [
              { name: "Surfmist", sri: "87", hex: "#F6F5F6" },
              { name: "Headland", sri: "38", hex: "#AD574D" },
              { name: "Pale Eucalypt", sri: "44", hex: "#98A994" },
              { name: "Cottage Green", sri: "25", hex: "#2A614A" },
              { name: "Aquamarine", sri: "41", hex: "#479271" },
              { name: "Sky Blue", sri: "46", hex: "#0091BD" },
              { name: "Torres Blue", sri: "27", hex: "#345E83" },
              { name: "Toba Blue", sri: "37", hex: "#0077AA" },
              {
                name: "Zincalume Steel",
                sri: "57",
                image: "/images/products/tata-bluescope/zincalume-steel.png"
              }
            ]
          },

          note: "Above standard colour shades are given for guidance only. The Colour shades may look different due to print limitation. Please contact the nearest Tata BlueScope Steel sales office for any other colour shade enquiry. We would be glad to send an actual COLORBOND® colour sample or help with any other colour requirement."
        },
      ]
    },

    {
      id: "standing-seam-roofing",
      name: "Standing Seam Roofing System",
      count: 2,
      products: [
        {
          id: 11,
          name: "FLEXLOK™ 400",
          slug: "flexlok-400",
          category: "Standing Seam Roofing System",

          // Card Display
          image: "/images/products/tata-bluescope/flexlok-400.png",
          onelinerDescription: "Standing Seam Roof Sheets",
          cardDescription: "LYSAGHT FLEX-LOK concealed standing seam system is a roofing system with an innovative architectural appearance.",
          backgroundColor: "#FFFEEF",

          // Individual Product Page
          longDescription: "LYSAGHT FLEX-LOK concealed standing seam system is a roofing system with an innovative architectural appearance. It can be roll formed in flat, curved or tapered shape.",

          specifications: [
            "Base Metal Thickness - 0.50 mm",
            "Depth - 65 mm",
            "Steel Grade - G300 (300 MPa yield strength)",
            "Total Coated Thickness - 0.55 mm",
            "Effective cover width - 400 mm",
            "Min. Roof Slope - 2 degree",
            "Coating Class (min.) - ZINCALUME AZ150 (150g/m2) (55% Aluminium, 43.5% Zinc, 1.5% Si) as per AS1397 / IS15961 – with Super Durable Polyester COLORBOND®; steel XRW quality paint system of approved color conforming to AS/NZS 2728 type-4 / IS15965 class 3"
          ],

          applications: [
            "Standing Seam Roof Sheet"
          ],

          brochure: "https://tatabluescopesteel.com/wp-content/uploads/2024/12/Flexlok-6-pager-New.pdf",
          brochureFileName: "FLEXLOK400",
          brochureFileSize: "91KB",

          colorRange: {
            colors: [
              { name: "Surfmist", sri: "87", hex: "#F6F5F6" },
              { name: "Headland", sri: "38", hex: "#AD574D" },
              { name: "Pale Eucalypt", sri: "44", hex: "#98A994" },
              { name: "Cottage Green", sri: "25", hex: "#2A614A" },
              { name: "Aquamarine", sri: "41", hex: "#479271" },
              { name: "Sky Blue", sri: "46", hex: "#0091BD" },
              { name: "Torres Blue", sri: "27", hex: "#345E83" },
              { name: "Toba Blue", sri: "37", hex: "#0077AA" },
              {
                name: "Zincalume Steel",
                sri: "57",
                image: "/images/products/tata-bluescope/zincalume-steel.png"
              }
            ]
          },

          note: "Above standard colour shades are given for guidance only. The Colour shades may look different due to print limitation. Please contact the nearest Tata BlueScope Steel sales office for any other colour shade enquiry. We would be glad to send an actual COLORBOND® colour sample or help with any other colour requirement."
        },

        {
          id: 12,
          name: "MR-24®",
          slug: "mr-24",
          category: "Standing Seam Roofing System",

          // Card Display
          image: "/images/products/tata-bluescope/mr-24.png",
          onelinerDescription: "360 degree Standing Seam Roofing System",
          cardDescription: "The MR-24® Roof System is like a monolithic steel membrane, covering your entire building.",
          backgroundColor: "#FFFEEF",

          // Individual Product Page
          longDescription: "The MR-24® Roof System is like a monolithic steel membrane, covering your entire building. The panels are joined together with a Pittsburgh 360 degree double-lock standing seam.",

          specifications: [
            "Base Metal Thickness - 0.60 mm / 0.72 mm",
            "Depth - 50 mm",
            "Steel Grade - G345 (345 MPa yield strength)",
            "Total Coated Thickness - 0.65 mm/ 0.77 mm",
            "Effective cover width - 600 mm",
            "Min. Roof Slope - 1.2 degree",
            "Coating Class (min.) - ZINCALUME AZ150 (150g/m2) (55% Aluminium, 43.5% Zinc, 1.5% Si) as per AS1397 / IS15961 – with Super Durable Polyester COLORBOND®; steel XRW quality paint system of approved color conforming to AS/NZS 2728 type-4 / IS15965 class 3"
          ],

          applications: [
            "Roofing"
          ],

          brochure: "https://tatabluescopesteel.com/wp-content/uploads/2024/12/MR-24.pdf",
          brochureFileName: "MR24",
          brochureFileSize: "91KB",

          colorRange: {
            colors: [
              { name: "Surfmist", sri: "87", hex: "#F6F5F6" },
              { name: "Headland", sri: "38", hex: "#AD574D" },
              { name: "Pale Eucalypt", sri: "44", hex: "#98A994" },
              { name: "Cottage Green", sri: "25", hex: "#2A614A" },
              { name: "Aquamarine", sri: "41", hex: "#479271" },
              { name: "Sky Blue", sri: "46", hex: "#0091BD" },
              { name: "Torres Blue", sri: "27", hex: "#345E83" },
              { name: "Toba Blue", sri: "37", hex: "#0077AA" },
              {
                name: "Zincalume Steel",
                sri: "57",
                image: "/images/products/tata-bluescope/zincalume-steel.png"
              }
            ]
          },

          note: "Above standard colour shades are given for guidance only. The Colour shades may look different due to print limitation. Please contact the nearest Tata BlueScope Steel sales office for any other colour shade enquiry. We would be glad to send an actual COLORBOND® colour sample or help with any other colour requirement."
        },
      ]
    },

    {
      id: "wall-liner-panels",
      name: "Wall Liner Panels",
      count: 2,
      products: [
        {
          id: 13,
          name: "FLEXICLAD® 1110",
          slug: "flexiclad-1110",
          category: "Wall Liner Panels",

          // Card Display
          image: "/images/products/tata-bluescope/flexiclad-1110.png",
          onelinerDescription: "Multi Ribbed Wall cladding",
          cardDescription: "LYSAGHT® FLEXICLAD® 1110 is an economical and attractive wall cladding profile.",
          backgroundColor: "#FFFEEF",

          // Individual Product Page
          longDescription: "LYSAGHT KLIP-LOK® 770 is a new generation widest cover with concealed-fixed cladding. Made of high tensile steel of 550 MPa yield strength, it spans widest, with better uplift performance than all available comparable profiles.",

          specifications: [
            "Base Metal Thickness - 0.42 mm/ 0.45 mm",
            "Depth - 31.2 mm",
            "Steel Grade - G550 (550 MPa yield strength)",
            "Total Coated Thickness - 0.47 mm/ 0.50 mm",
            "Effective cover width - 770 mm",
            "Min. Roof Slope - 3 degree",
            "Coating Class (min.) - ZINCALUME AZ150 (150g/m2) (55% Aluminium, 43.5% Zinc, 1.5% Si) as per AS1397 / IS15961 – with Super Durable Polyester COLORBOND®; steel XRW quality paint system of approved color conforming to AS/NZS 2728 type-4 / IS15965 class 3"
          ],

          applications: [
            "Roofing, Wall cladding"
          ],

          brochure: "/pdf/products/tata-bluescope/flexiclad-1110-brochure.pdf",
          brochureFileName: "FLEXICLAD1110",
          brochureFileSize: "91KB",

          colorRange: {
            colors: [
              { name: "Surfmist", sri: "87", hex: "#F6F5F6" },
              { name: "Headland", sri: "38", hex: "#AD574D" },
              { name: "Pale Eucalypt", sri: "44", hex: "#98A994" },
              { name: "Cottage Green", sri: "25", hex: "#2A614A" },
              { name: "Aquamarine", sri: "41", hex: "#479271" },
              { name: "Sky Blue", sri: "46", hex: "#0091BD" },
              { name: "Torres Blue", sri: "27", hex: "#345E83" },
              {
                name: "Zincalume Steel",
                sri: "57",
                image: "/images/products/tata-bluescope/zincalume-steel.png"
              }
            ]
          },

          note: "Above standard colour shades are given for guidance only. The Colour shades may look different due to print limitation. Please contact the nearest Tata BlueScope Steel sales office for any other colour shade enquiry. We would be glad to send an actual COLORBOND® colour sample or help with any other colour requirement."
        },

        {
          id: 14,
          name: "PANELRIB® 1110",
          slug: "panelrib-1110",
          category: "Wall Liner Panels",

          // Card Display
          image: "/images/products/tata-bluescope/panelrib-1110.png",
          onelinerDescription: "Lightly Ribbed Wall Cladding & Liner Panel",
          cardDescription: "LYSAGHT® PANELRIB® 1110 is an attractive, slightly-fluted walling and ceiling cladding profile.",
          backgroundColor: "#FFFEEF",

          // Individual Product Page
          longDescription: "LYSAGHT® PANELRIB® 1110 is an attractive, slightly-fluted walling and ceiling cladding profile suitable for many applications where a flat sheet would not be normally considered.",

          specifications: [
            "Base Metal Thickness - 0.50 mm",
            "Depth - 3.5 mm",
            "Steel Grade - G550 (550 MPa yield strength)",
            "Total Coated Thickness - 0.47 mm/ 0.50 mm",
            "Effective cover width - 1110 mm",
            "Coating Class (min.) - ZINCALUME AZ150 (150g/m2) (55% Aluminium, 43.5% Zinc, 1.5% Si) as per AS1397 / IS15961 – with Super Durable Polyester COLORBOND®; steel XRW quality paint system of approved color conforming to AS/NZS 2728 type-4 / IS15965 class 3"
          ],

          applications: [
            "Wall cladding, Liner Panel, False ceiling"
          ],

          brochure: "https://tatabluescopesteel.com/wp-content/uploads/2024/12/Flexlok-6-pager-New.pdf",
          brochureFileName: "PANELRIB1110",
          brochureFileSize: "91KB",

          colorRange: {
            colors: [
              { name: "Surfmist", sri: "87", hex: "#F6F5F6" },
              { name: "Headland", sri: "38", hex: "#AD574D" },
              { name: "Pale Eucalypt", sri: "44", hex: "#98A994" },
              { name: "Cottage Green", sri: "25", hex: "#2A614A" },
              { name: "Aquamarine", sri: "41", hex: "#479271" },
              { name: "Sky Blue", sri: "46", hex: "#0091BD" },
              { name: "Torres Blue", sri: "27", hex: "#345E83" },
              { name: "Toba Blue", sri: "37", hex: "#0077AA" },
              {
                name: "Zincalume Steel",
                sri: "57",
                image: "/images/products/tata-bluescope/zincalume-steel.png"
              }
            ]
          },

          note: "Above standard colour shades are given for guidance only. The Colour shades may look different due to print limitation. Please contact the nearest Tata BlueScope Steel sales office for any other colour shade enquiry. We would be glad to send an actual COLORBOND® colour sample or help with any other colour requirement."
        }
      ]
    }
  ],

  // COMPUTED PROPERTIES
  get totalProducts() {
    return this.categories.reduce((total, category) => {
      return total + category.products.length;
    }, 0);
  }
};

// ============================================
// HELPER FUNCTIONS
// ============================================

/**
 * Get all products as a flat array
 */
export function getAllProducts() {
  return tataBluescopeData.categories.flatMap(cat => cat.products);
}

/**
 * Get product by slug
 */
export function getProductBySlug(slug) {
  return getAllProducts().find(product => product.slug === slug);
}

/**
 * Get category by ID
 */
export function getCategoryById(categoryId) {
  return tataBluescopeData.categories.find(cat => cat.id === categoryId);
}

/**
 * Get products by category
 */
export function getProductsByCategory(categoryId) {
  const category = getCategoryById(categoryId);
  return category ? category.products : [];
}

/**
 * Get product count by category
 */
export function getProductCountByCategory(categoryId) {
  const category = getCategoryById(categoryId);
  return category ? category.count : 0;
}

/**
 * Search products by name or description
 */
export function searchProducts(query) {
  const lowerQuery = query.toLowerCase();
  return getAllProducts().filter(product =>
    product.name.toLowerCase().includes(lowerQuery) ||
    product.onelinerDescription.toLowerCase().includes(lowerQuery) ||
    product.cardDescription.toLowerCase().includes(lowerQuery)
  );
}

/**
 * Get related products (same category, excluding current)
 */
export function getRelatedProducts(productSlug, limit = 3) {
  const currentProduct = getProductBySlug(productSlug);
  if (!currentProduct) return [];

  const categoryProducts = getProductsByCategory(
    tataBluescopeData.categories.find(cat =>
      cat.products.some(p => p.slug === productSlug)
    )?.id
  );

  return categoryProducts
    .filter(p => p.slug !== productSlug)
    .slice(0, limit);
}