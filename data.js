const PRODUCTS = [
  {id:1,name:"Premium Ceramic Brake Pads",category:"brakes",brand:"Brembo",price:89.99,oldPrice:119.99,rating:4.7,reviews:234,stock:45,image:"🛑",sku:"BP-4501",isNew:false,sale:true,
    description:"High-performance ceramic brake pads offering superior stopping power and reduced brake dust.",
    specs:{Material:"Ceramic",Position:"Front",Warranty:"3 Years","Fits Vehicles":"Honda Civic 2015-2023",Weight:"4.2 lbs"},
    compatibleWith:["Honda Civic","Honda Accord","Acura ILX"]},
  {id:2,name:"AGM Car Battery 12V 75Ah",category:"batteries",brand:"Optima",price:229.99,rating:4.8,reviews:412,stock:12,image:"🔋",sku:"BAT-7501",isNew:false,
    description:"Maintenance-free AGM battery with superior cold-cranking performance.",
    specs:{Voltage:"12V",Capacity:"75Ah",Type:"AGM","CCA":"750",Warranty:"4 Years"}},
  {id:3,name:"All-Season Tire 225/65R17",category:"tires",brand:"Michelin",price:179.99,rating:4.6,reviews:589,stock:28,image:"🛞",sku:"TR-2265",isNew:true,
    description:"Premium all-season tire with excellent wet and dry traction.",
    specs:{Size:"225/65R17",Type:"All-Season","Load Index":"102","Speed Rating":"H",Warranty:"60,000 miles"}},
  {id:4,name:"Performance Oil Filter",category:"engine",brand:"K&N",price:24.99,rating:4.5,reviews:156,stock:120,image:"⚙️",sku:"OF-301",
    description:"High-flow oil filter designed for performance engines.",
    specs:{"Filter Media":"Synthetic",Height:"3.75\"",Thread:"3/4-16","Anti-drain":"Yes"}},
  {id:5,name:"LED Headlight Bulbs H11",category:"lights",brand:"Philips",price:79.99,oldPrice:99.99,rating:4.9,reviews:891,stock:67,image:"💡",sku:"LED-H11",sale:true,isNew:true,
    description:"Ultra-bright LED headlight bulbs with 6000K pure white light.",
    specs:{"Bulb Type":"H11",Lumens:"8000lm","Color Temp":"6000K",Lifespan:"50,000 hrs",Wattage:"30W"}},
  {id:6,name:"OBD2 Diagnostic Scanner",category:"electronics",brand:"Autel",price:159.99,rating:4.7,reviews:234,stock:34,image:"📟",sku:"OBD-500",
    description:"Professional OBD2 scanner with Bluetooth connectivity.",
    specs:{Connectivity:"Bluetooth 5.0",Compatibility:"All OBD2 vehicles",Display:"3.5\" LCD"}},
  {id:7,name:"Socket Wrench Set 108pc",category:"tools",brand:"Craftsman",price:149.99,rating:4.8,reviews:345,stock:19,image:"🔧",sku:"TL-108",
    description:"Complete 108-piece socket wrench set with carrying case.",
    specs:{Pieces:"108","Drive Sizes":"1/4\", 3/8\", 1/2\"",Material:"Chrome Vanadium",Warranty:"Lifetime"}},
  {id:8,name:"Spark Plugs (Set of 4)",category:"engine",brand:"NGK",price:39.99,rating:4.6,reviews:678,stock:200,image:"⚡",sku:"SP-404",
    description:"Iridium spark plugs for longer life and better ignition.",
    specs:{Material:"Iridium","Gap":"0.044\"",Pack:"4 plugs",Lifespan:"100,000 miles"}},
  {id:9,name:"Car Floor Mats (All-Weather)",category:"accessories",brand:"WeatherTech",price:189.99,rating:4.9,reviews:1023,stock:45,image:"🚗",sku:"FM-AW01",isNew:true,
    description:"Custom-fit all-weather floor mats with raised edges.",
    specs:{Material:"Thermoplastic",Pieces:"4",Color:"Black","Custom Fit":"Yes"}},
  {id:10,name:"Premium Windshield Wipers 22\"",category:"accessories",brand:"Bosch",price:34.99,rating:4.5,reviews:456,stock:89,image:"🌧️",sku:"WW-22",
    description:"All-season beam wiper blades with superior visibility.",
    specs:{Size:"22\"",Type:"Beam",Material:"Natural Rubber"}},
  {id:11,name:"Turbocharger Upgrade Kit",category:"engine",brand:"Garrett",price:1299.99,rating:4.7,reviews:89,stock:5,image:"💨",sku:"TB-G25",
    description:"High-performance turbocharger for increased HP.",
    specs:{"Max HP":"450","Boost":"18 PSI",Material:"Forged Steel"}},
  {id:12,name:"Brake Rotor Pair",category:"brakes",brand:"Powerstop",price:149.99,rating:4.6,reviews:178,stock:22,image:"🛑",sku:"BR-PAIR",
    description:"Drilled and slotted brake rotors for performance braking.",
    specs:{Type:"Drilled/Slotted",Pack:"Pair (2)",Material:"Cast Iron",Position:"Front"}}
];

const REVIEWS = {
  1:[{author:"Mike J.",rating:5,date:"2024-09-15",comment:"Excellent brake pads! Great stopping power and minimal dust."},
     {author:"Sarah K.",rating:4,date:"2024-08-20",comment:"Good quality, easy to install. Quiet operation."}],
  5:[{author:"Tom R.",rating:5,date:"2024-10-02",comment:"Super bright! Night driving is so much better now."},
     {author:"Lisa M.",rating:5,date:"2024-09-28",comment:"Perfect fit, installation took 15 minutes."}]
};

const VEHICLES = {
  makes:["Honda","Toyota","Ford","Chevrolet","BMW","Mercedes","Audi","Nissan"],
  models:{Honda:["Civic","Accord","CR-V","Pilot"],Toyota:["Camry","Corolla","RAV4","Highlander"],
          Ford:["F-150","Mustang","Explorer","Escape"],Chevrolet:["Silverado","Equinox","Malibu"],
          BMW:["3 Series","5 Series","X3","X5"],Mercedes:["C-Class","E-Class","GLC"],
          Audi:["A4","Q5","A6"],Nissan:["Altima","Sentra","Rogue"]}
};

// Sample orders for demo
const SAMPLE_ORDERS = [
  {id:"ORD-1001",date:"2024-10-15",total:319.98,status:"Delivered",tracking:"1Z999AA10123456784",items:[{id:1,name:"Premium Ceramic Brake Pads",qty:2,price:89.99},{id:8,name:"Spark Plugs",qty:1,price:39.99}]},
  {id:"ORD-1002",date:"2024-10-28",total:229.99,status:"Shipped",tracking:"1Z999AA10123456785",items:[{id:2,name:"AGM Car Battery",qty:1,price:229.99}]},
  {id:"ORD-1003",date:"2024-11-05",total:79.99,status:"Processing",tracking:null,items:[{id:5,name:"LED Headlight Bulbs",qty:1,price:79.99}]}
];