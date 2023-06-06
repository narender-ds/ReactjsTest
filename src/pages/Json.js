// import React, { useState } from "react";

// const Json = () => {
//   const [selectItem, setSelectItem] = useState(0);
//   const [getItem, setGetItem] = useState("");
//   const data = [
//     {
//       heading: "Shop by room",
//       menu: [
//         {
//           id: 1,
//           title: "MKM Home",
//           slug: "/mkm-home",
//           subMenu: [
//             {
//               id: 1,
//               title: "Bathroom",
//               slug: "/bathroom",
//             },
//             {
//               id: 2,
//               title: "Landscaping",
//               slug: "/landscaping",
//             },
//             {
//               id: 3,
//               title: "Kitchens",
//               slug: "/kitchens",
//             },
//             {
//               id: 4,
//               title: "Tiles",
//               slug: "/tiles",
//             },
//           ],
//           adverisement: {
//             title: "IN THE TRADE?",
//             content: "Open your MKM Trade account today",
//             ctaLabel: "WHY MKM?",
//             ctaLink: null,
//           },
//         },
//         {
//           id: 2,
//           title: "Sustainable Building",
//           slug: "sustainable-building",
//           subMenu: [],
//           adverisement: {},
//         },
//       ],
//     },
//     {
//       heading: "Shop by build",
//       menu: [
//         {
//           id: 1,
//           title: "Bathrooms",
//           slug: "/bathrooms",
//           subMenu: [
//             {
//               id: 1,
//               title: "Basins",
//               slug: "/basins",
//               childMenu: [
//                 {
//                   id: 1,
//                   title: "Basins & Pedestals",
//                   slug: "/basins&pedestals",
//                 },
//                 {
//                   id: 2,
//                   title: "Brackets",
//                   slug: "/brackets",
//                 },
//                 {
//                   id: 3,
//                   title: "Cloakroom Basins",
//                   slug: "/cloakroom-Basins",
//                 },
//                 {
//                   id: 4,
//                   title: "Countertop Basins",
//                   slug: "/countertop-Basins",
//                 },
//                 {
//                   id: 5,
//                   title: "Semi Recessed Basins",
//                   slug: "/semi-recessed-basins",
//                 },
//                 {
//                   id: 6,
//                   title: "Wall Hung Basins",
//                   slug: "/wall-hung-basins",
//                 },
//               ],
//             },
//             {
//               id: 2,
//               title: "Bathroom & Kitchen Taps",
//               slug: "/bathroom-kitchen-taps",
//               childMenu: [
//                 {
//                   id: 1,
//                   title: "Basin Taps",
//                   slug: "/basin-taps",
//                 },
//                 {
//                   id: 2,
//                   title: "Bath Taps",
//                   slug: "/bath-taps",
//                 },
//                 {
//                   id: 3,
//                   title: "Kitchen Taps",
//                   slug: "/kitchen-taps",
//                 },
//                 {
//                   id: 4,
//                   title: "Tap Spares & Accessories",
//                   slug: "/tap-Spares-accessories",
//                 },
//                 {
//                   id: 5,
//                   title: "Wall & Floor Mounted Taps",
//                   slug: "/wall-floor-mounted-taps",
//                 },
//               ],
//             },
//             {
//               id: 3,
//               title: "Bathroom Accessories",
//               slug: "/bathroom-accessories",
//               childMenu: [
//                 {
//                   id: 1,
//                   title: "Extractor Fans & Accessories",
//                   slug: "/extractor-fans-accessories",
//                 },
//                 {
//                   id: 2,
//                   title: "Robe Hooks",
//                   slug: "/robe-hooks",
//                 },
//                 {
//                   id: 3,
//                   title: "Soap Dishes & Dispensers",
//                   slug: "/soap-dishes-dispensers",
//                 },
//                 {
//                   id: 4,
//                   title: "Toilet Roll Holders",
//                   slug: "/toilet-roll-holders",
//                 },
//                 {
//                   id: 5,
//                   title: "Toothbrush Holders & Tumblers",
//                   slug: "/toothbrush-holders-tumblers",
//                 },
//                 {
//                   id: 6,
//                   title: "Towel Rails & Rings",
//                   slug: "/towel-rails-rings",
//                 },
//                 {
//                   id: 7,
//                   title: "Wire Baskets & Caddies",
//                   slug: "/wire-baskets-caddies",
//                 },
//               ],
//             },
//             {
//               id: 4,
//               title: "Bathroom Cabinets & Mirrors",
//               slug: "/bathroom-cabinets-mirrors",
//               childMenu: [
//                 {
//                   id: 1,
//                   title: "Illuminated, Heated & Powered Mirrors",
//                   slug: "/illuminated-heated-powered-mirrors",
//                 },
//               ],
//             },
//             {
//               id: 5,
//               title: "Bathroom Furniture",
//               slug: "/bathroom-furniture",
//               childMenu: [
//                 {
//                   id: 1,
//                   title: "Fitted Furniture",
//                   slug: "/fitted-furniture",
//                 },
//                 {
//                   id: 2,
//                   title: "Modular Furniture",
//                   slug: "/modular-furniture",
//                 },
//               ],
//             },
//             {
//               id: 6,
//               title: "Bathroom Taps",
//               slug: "/bathroom-taps",
//               childMenu: [
//                 { id: 1, title: "Basin Taps", slug: "/basin-taps" },
//                 { id: 2, title: "Bath Taps", slug: "/bath-taps" },
//                 {
//                   id: 3,
//                   title: "Wastes & Accessories",
//                   slug: "/wastes-accessories",
//                 },
//               ],
//             },
//             {
//               id: 7,
//               title: "Baths",
//               slug: "/baths",
//               childMenu: [
//                 {
//                   id: 1,
//                   title: "Bath Panels",
//                   slug: "/bath-panels",
//                 },
//                 {
//                   id: 2,
//                   title: "Bath Screens",
//                   slug: "/bath-screens",
//                 },
//                 {
//                   id: 3,
//                   title: "Free Standing Bath Accessories",
//                   slug: "/free-standing-bath-accessories",
//                 },
//                 {
//                   id: 4,
//                   title: "Free Standing Baths",
//                   slug: "/free-standing-baths",
//                 },
//                 {
//                   id: 5,
//                   title: "Shower Baths",
//                   slug: "/shower-baths",
//                 },
//                 {
//                   id: 6,
//                   title: "Single & Double Ended Baths",
//                   slug: "/single-double-ended-baths",
//                 },
//                 {
//                   id: 7,
//                   title: "Steel Baths",
//                   slug: "/steel-baths",
//                 },
//               ],
//             },
//             {
//               id: 8,
//               title: "Shower Wall Systems",
//               slug: "/shower-wall-systems",
//               childMenu: [
//                 {
//                   id: 1,
//                   title: "Shower Wall Panels",
//                   slug: "/shower-wall-panels",
//                 },
//               ],
//             },
//             {
//               id: 9,
//               title: "Showers & Accessories",
//               slug: "/showers-accessories",
//               childMenu: [
//                 {
//                   id: 1,
//                   title: "Digital Showers",
//                   slug: "/digital-showers",
//                 },
//                 {
//                   id: 2,
//                   title: "Electric Showers",
//                   slug: "/electric-showers",
//                 },
//                 { id: 3, title: "Mixer Showers", slug: "/mixer-showers" },
//                 {
//                   id: 4,
//                   title: "Shower Enclosures",
//                   slug: "/shower-enclosures",
//                 },
//                 {
//                   id: 5,
//                   title: "Shower Fixing Plates & Kits",
//                   slug: "/shower-fixing-plates-kits",
//                 },
//                 { id: 6, title: "Shower Seats", slug: "/shower-seats" },
//                 {
//                   id: 7,
//                   title: "Shower Wall Panels",
//                   slug: "/shower-wall-panels",
//                 },
//               ],
//             },
//             {
//               id: 10,
//               title: "Toilets & Bidets",
//               slug: "/toilets-bidets",
//               childMenu: [
//                 {
//                   id: 1,
//                   title: "Back To Wall Toilets",
//                   slug: "/back-to-wall-toilets",
//                 },
//                 {
//                   id: 2,
//                   title: "Close Coupled Toilets",
//                   slug: "/close-coupled-toilets",
//                 },
//                 {
//                   id: 3,
//                   title: "Concealed Cisterns",
//                   slug: "/concealed-cisterns",
//                 },
//                 {
//                   id: 4,
//                   title: "Flush Panels",
//                   slug: "/flush-panels",
//                 },
//                 {
//                   id: 5,
//                   title: "High & Low Level Toilets",
//                   slug: "/high-low-level-toilets",
//                 },
//                 {
//                   id: 6,
//                   title: "Toilet Levers",
//                   slug: "/toilet-levers",
//                 },
//                 {
//                   id: 7,
//                   title: "Toilet Seats",
//                   slug: "/toilet-seats",
//                 },
//                 {
//                   id: 8,
//                   title: "Urinals",
//                   slug: "/urinals",
//                 },
//                 {
//                   id: 9,
//                   title: "Wall Hung Toilets",
//                   slug: "/wall-hung-toilets",
//                 },
//               ],
//             },
//             {
//               id: 11,
//               title: "Wetrooms",
//               slug: "/wetrooms",
//               childMenu: [
//                 {
//                   id: 1,
//                   title: "Wetroom Glass Panels",
//                   slug: "/wetroom-glass-panels",
//                 },
//                 {
//                   id: 2,
//                   title: "Wetroom Installation & Fixings",
//                   slug: "/wetroom-installation-fixings",
//                 },
//                 {
//                   id: 3,
//                   title: "Wetroom Installation Parts",
//                   slug: "/wetroom-installation-parts",
//                 },
//               ],
//             },
//           ],
//           adverisement: {},
//         },
//         {
//           id: 2,
//           title: "Building Materials",
//           slug: "/building-materials",
//           subMenu: [],
//           adverisement: {},
//         },
//         {
//           id: 3,
//           title: "Doors, Windows & Joinery",
//           slug: "/doors-windows-joinery",
//           subMenu: [],
//           adverisement: {},
//         },
//         {
//           id: 4,
//           title: "Electrical",
//           slug: "/electrical",
//           subMenu: [],
//           adverisement: {},
//         },
//         {
//           id: 5,
//           title: "Kitchens",
//           slug: "/kitchens",
//           subMenu: [],
//           adverisement: {},
//         },
//         {
//           id: 6,
//           title: "Landscaping",
//           slug: "/landscaping",
//           subMenu: [],
//           adverisement: {},
//         },
//         {
//           id: 7,
//           title: "Nails, Screws & Fixings",
//           slug: "/nails-screws-fixings",
//           subMenu: [],
//           adverisement: {},
//         },
//         {
//           id: 8,
//           title: "Paint & Decorating",
//           slug: "/paint-decorating",
//           subMenu: [],
//           adverisement: {},
//         },
//         {
//           id: 9,
//           title: "Plumbing & Heating",
//           slug: "/plumbing-heating",
//           subMenu: [],
//           adverisement: {},
//         },
//         {
//           id: 10,
//           title: "Tiles",
//           slug: "/tiles",
//           subMenu: [],
//           adverisement: {},
//         },
//         {
//           id: 11,
//           title: "Timber",
//           slug: "/timber",
//           subMenu: [],
//           adverisement: {},
//         },
//         {
//           id: 12,
//           title: "Tools & Equipment",
//           slug: "/tools-equipment",
//           subMenu: [],
//           adverisement: {},
//         },
//       ],
//     },
//   ];
//   const Items = [
//     {
//       menu: [
//         {
//           id: 1,
//           title: "India",
//         },
//         {
//           id: 1,
//           title: "Pok",
//         },
//         {
//           id: 1,
//           title: "Uk",
//         },
//       ],
//       subMenu: [
//         {
//           id: 1,
//           title: "Raj",
//         },
//         {
//           id: 1,
//           title: "Lahore",
//         },
//         {
//           id: 1,
//           title: "London",
//         },
//       ],
//     },
//   ];

//   return (
//     <div>
//       {/* {data.map((item) => {
//         console.log("item", item);
//         return (
//           <>
//             <h1>{item.heading}</h1>
//             <select onChange={(e) => setSelectItem(e.target.value)}>
//               {item.menu.map((item2, index) => {
//                 return (
//                   <>
//                     <option>{item2.title}</option>
//                   </>
//                 );
//               })}
//             </select>
//           </>
//         );
//       })} */}
//       <select>
//         {Items.map((item) => {
//           return item.menu.map((item1) => {
//             return <option>{item1.title}</option>;
//           });
//         })}
//       </select>
//       <select onChange={(e) => setGetItem(e.target.value)}>
//         {Items[selectItem].subMenu.map((item2) => {
//           return <option>{item2.title}</option>
//         })}
//       </select>
//     </div>
//   );
// };
// export default Json;
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const DropdownMenu = () => {
  const Items = [
    {
      menu: [
        {
          id: 1,
          title: "India",
        },
        {
          id: 1,
          title: "Pok",
        },
        {
          id: 1,
          title: "Uk",
        },
      ],
      subMenu: [
        {
          id: 1,
          title: "Raj",
        },
        {
          id: 1,
          title: "Lahore",
        },
        {
          id: 1,
          title: "London",
        },
      ],
    },
  ];
  const [selectedValue, setSelectedValue] = useState("");
  const [done, setDone] = useState("false");
  useEffect(() => {
    setDone("true");
    return () => {
      console.log("done", done);
      setDone("false");
    };
  }, []);

  console.log("done", done);
  return (
    <div>
      <h1>{done}</h1>
      <select
        value={selectedValue}
        onChange={(event) => setSelectedValue(event.target.value)}
      >
        <option value="">Select an option</option>
        {Items.map((item, index) => {
          return (
            <>
              {item.menu.map((item1, index) => {
                return (
                  <>
                    <option value={index}>{item1.title}</option>;
                    {selectedValue === `${item1.title[index]}` && (
                      <SubmenuDropdown />
                    )}
                  </>
                );
              })}
            </>
          );
        })}
      </select>
      <Link to={"/counter/users"}>Go To Counter App</Link>
    </div>
  );
};

const SubmenuDropdown = () => {
  const Items = [
    {
      menu: [
        {
          id: 1,
          title: "India",
        },
        {
          id: 1,
          title: "Pok",
        },
        {
          id: 1,
          title: "Uk",
        },
      ],
      subMenu: [
        {
          id: 1,
          title: "Raj",
        },
        {
          id: 1,
          title: "Lahore",
        },
        {
          id: 1,
          title: "London",
        },
      ],
    },
  ];
  const [selectedSubmenuItem, setSelectedSubmenuItem] = useState("");

  return (
    <div>
      <select
        value={selectedSubmenuItem}
        onChange={(event) => setSelectedSubmenuItem(event.target.value)}
      >
        <option value="">Select a submenu option</option>
        {Items.map((item) => {
          return item.subMenu.map((item1, index) => {
            return <option value={index}>{item1.title}</option>;
          });
        })}
      </select>
    </div>
  );
};

export default DropdownMenu;
