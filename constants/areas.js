// {
//     questionText:"",
//     solveMethod:"",
//     solveEquation:""
// }

// n in questionText = new
// p in questionText = product
// p in variance = plus
// c = change in number referenced in slot 2
// w in questionText = whole number
// dn in questionText = decimal number with n decimal places
// vn in questionText = variance n from variance field

// example variable: {n,2,15,d1} = new number between 2 and 15 inclusive, contains 1 decimal place (some example numbers generated are: 9.5, 7.8, 14.2)
// example variable: {n,60,100,d0} = new number between 2 and 15 inclusive, contains 1 decimal place (some example numbers generated are: 65, 87, 95)
// example variable: {c,2,p,3,6,d0} =  change in variable 2, p for plus, so add a random number between 3 and 6, whole numbers

const areaData = {
  areaCount: 20,

  areas: [
    {
      title: "Basic Dose Rate Calculations",
      disabled: false,
      desc: "Calculations using dose rates and drug concentrations to determine drug doses",
      icon: "pills",
      questions: [
        {
          questionText: "A {n,2,60,d1} kg dog needs {n,3,5,d0} mg/kg of Ampicillin (100 mg/mL).  How many mL do they need?",
          solveMethod: "{1} kg x {2} mg/kg = [{1}*{2}] mg x 1 mL/100 mg = [({1}*{2})*0.01] mL",
          solveEquation: "({1}*{2})*0.01"
        },
        {
          questionText: "A {n,1.5,10,d1} kg dog needs {n,3,5,d0} mg/kg of Ampicillin (100 mg/mL). How many mL do they need?",
          solveMethod: "{1} kg x {2} mg/kg = [{1}*{2}] mg x 1 mL/100 mg = [({1}*{2})*0.01] mL",
          solveEquation: "({1}*{2})*0.01"
        },
        {
          questionText: "A {n,2,60,d1} kg dog needs Propofol (10 mg/mL) with a dose range of {n,3,6,d0}-{n,7,10,d0} mg/kg. What is the dose range in mL for this patient? Answer in the format \"low-high\"",
          solveMethod: "{1} kg x {2} mg = [{1}*{2}] mg, {1} kg x {3} mg = [{1}*{3}] mg, [{1}*{2}] mg x 1 mL/10 mg = [({1}*{2})*0.1] mL   [{1}*{3}] mg x 1 mL/10 mg = [({1}*{3})*0.1] mL  Range = [({1}*{2})*0.1]-[({1}*{3})*0.1] mL",
          solveEquation: "({1}*{2})*0.1-({1}*{3})*0.1"
        }
      ],
      topicFilter: "Pharmacology"
    },
    {
      title: "Metric System",
      disabled: true,
      desc: "Commonly used metric system conversions",
      icon: "ruler",
      questions: [],
      topicFilter: "Place_holder"
    },
    {
      title: "Dispensing Medication",
      disabled: false,
      desc: "Calculations used to fill veterinary prescriptions",
      icon: "prescription",
      questions: [
        {
          questionText: "A {n,2,60,d0} kg dog needs Aminophylline (100 mg/tab) at 11 mg/kg. How many tablets does he need in 1 dose?",
          solveMethod: "{1} kg x 11 mg/kg = [{1}*11] mg x 1 tab/100 mg = [({1}*11)/100] tab",
          solveEquation: "({1}*11)/100"
        },
        {
          questionText: "If a dog needs 5.5 tabs in one dose how many tablets will you dispense if he needs it bid for {n,5,21,d0} days?",
          solveMethod: "5.5 x 2 x {1} = [5.5 x 2 x {1}] tabs",
          solveEquation: "5.5*2*{1}"
        }
      ],
      topicFilter: "Pharmacology"
    },
    {
      title: "Percent Concentrations",
      disabled: false,
      desc: "Converting percent concentrations to mg/mL concentrations",
      icon: "percentage",
      questions: [
        {
          questionText: "A drug concentration is {n,1,99,d1}%. What is the concentration in mg/mL?",
          solveMethod: "{1} % x 10 = [{1}*10] mg/mL",
          solveEquation: "{1}*10"
        },
        {
          questionText: "A drug concentration is {n,1,99,d1} mg/mL. What is the concentration in % ?",
          solveMethod: "{1} mg/mL / 0.1 = [{1}/0.1] %",
          solveEquation: "{1}/0.1"
        }
      ],
      topicFilter: "Alternate_Concentrations_and_Dilutions"
    },
    {
      title: "Ratio Concentrations",
      disabled: false,
      desc: "Converting ratio concentrations to mg/mL concentrations",
      icon: "tablets",
      questions: [
        {
          questionText: "A drug concentration is 1:{n,1,10000,d1}. What is the concentration in mg/mL?",
          solveMethod: "1/{1} x 1000 = [(1/{1}) * 1000) mg/mL",
          solveEquation: "(1/{1})*1000"
        }
      ],
      topicFilter: "Alternate_Concentrations_and_Dilutions"
    },
    {
      title: "Reconstitution",
      disabled: false,
      desc: "Adding diluent to powdered drugs to created desired concentrations",
      icon: "hammer",
      questions: [
        {
          questionText: "Drug A is available in a {n,10,5000,d0} mg vial. How much diluent is needed to create a {n,1,100,d0} % solution?",
          solveMethod: "{1} mg/{2} ml * 10 mg",
          solveEquation: "{1}/({2}*10)"
        }
      ],
      topicFilter: "Alternate_Concentrations_and_Dilutions"
    },
    {
      title: "Dilutions",
      disabled: false,
      desc: "Adding diluent to liquid drugs to create desired concentrations",
      icon: "flask",
      questions: [
        {
          questionText: "Drug A, is available as {n,100,1000,d0} mg/mL.  You need to make {n,10,100} mL of a {n,100,500,d0} mg/mL solution.  How much starting solution do you need?  How much diluent?",
          solveMethod: "{2} mL x {3} mg/mL = [{2}*{3}] mg x 1 mL/{1} mg = [({2}*{3})*(1/{1})] mL starting solution   {2} mL - [({2}*{3})*(1/{1})] mL = [{2}-(({2}*{3})*(1/{1}))] mL diluent",
          solveEquation: "{2}-(({2}*{3})*(1/{1}))"
        },
        {
          questionText: "Drug A is available as {n,10,50,d1} mL of {n,100,500,d0} mg/mL.  You need to make a {n,60,95,d0} mg/mL solution using the whole bottle.  How much diluent will you need?  What is the volume of the new bottle?",
          solveMethod: "{1} mL x {2} mg/mL = [{1}*{2}] mg x 1 mL/{3} mg = [({1}*{2})*(1/{3})] mL total volume  [({1}*{2})*(1/{3})] mL - {1} mL = [(({1}*{2})*(1/{3}))-{1}] mL diluent",
          solveEquation: "(({1}*{2})*(1/{3}))-{1}"
        },
        {
          questionText: "You have created {n,10,40,d0} mL of a diluted solution with a concentration of {n,50,100,d1} mg/mL. You used {n,1,5,d0} mL of Drug A. What was the original concentration of Drug A?",
          solveMethod: "{1} mL x {2} mg/mL = [{1}*{2}] mg/{3} mL = [({1}*{2})/{3}] mg/mL starting solution concentration",
          solveEquation: "({1}*{2})/{3}"
        },
        {
          questionText: "A cleaning solution must be used at a {n,1,5,d1}:{n,10,20,d0} dilution. How many mL of the original solution are needed if you want {n,100,2000,d0} mL of diluted solution? How much diluent?",
          solveMethod: "{3} mL x {1}/{2} = [{3}*({1}/{2})] mL of original solution  {3} mL - [{3}*({1}/{2})] mL = [{3}-({3}*({1}/{2}))] mL diluent",
          solveEquation: "{3}-({3}*({1}/{2}))"
        }
      ],
      topicFilter: "Alternate_Concentrations_and_Dilutions"
    },
    {
      title: "IV Fluids – Maintenance",
      disabled: false,
      desc: "Calculations to determine the minimum fluid requirements for patients",
      icon: "water",
      questions: [
        {
          questionText: "A  {n,1,12,d0} yo {n,5,70,d1} kg dog needs a maintenance rate of IV fluids.  What is his fluid rate in mL/hr?",
          solveMethod: "{1} kg x 60 mL/kg/day = [{1}*60] mL/day / 24 hr = [({1}*60)/24] mL/hr",
          solveEquation: "({1}*60)/24"
        },
        {
          questionText: "A  {n,1,11,d0} mo {n,1,15,d1} kg dog needs a maintenance rate of IV fluids.  What is her fluid rate in mL/hr?",
          solveMethod: "{1} kg x 90 mL/kg/day = [{1}*90] mL/day / 24 hr = [({1}*90)/24] mL/hr",
          solveEquation: "({1}*90)/24"
        },
        {
          questionText: "A  {n,1,20,d0} yo {n,1.5,8,d1} kg cat needs a maintenance rate of IV fluids.  What is her fluid rate in mL/hr?",
          solveMethod: "{1} kg x 60 mL/kg/day = [{1}*60] mL/day / 24 hr = [({1}*60)/24] mL/hr",
          solveEquation: "({1}*60)/24"
        },
        {
          questionText: "A  {n,1,11,d0} mo {n,1,2.5,d1} kg cat needs a maintenance rate of IV fluids.  What is her fluid rate in mL/hr?",
          solveMethod: "{1} kg x 90 mL/kg/day = [{1}*90] mL/day / 24 hr = [({1}*90)/24] mL/hr",
          solveEquation: "({1}*90)/24"
        }
      ],
      topicFilter: "IV_Fluid_Therapy"
    },
    {
      title: "IV Fluids - Drip Rate",
      disabled: false,
      desc: "Converting mL/hr fluid rates to drip rates using IV fluid drip sets",
      icon: "fill-drip",
      questions: [
        {
          questionText: "A {n,2,60,d1} kg dog needs IV fluids at {n,50,250,d1} mL/hr  Using a 10 gtt/mL drip set, what is his rate in gtt/s?",
          solveMethod: "{2} mL/hr x 10 gtt/mL = [{2}*10] gtt/hr /60 min / 60 sec = [(({2}*10)/60)/60] gtt/s",
          solveEquation: "(({2}*10)/60)/60"
        },
        {
          questionText: "A {n,2,60,d1} kg dog needs IV fluids at {n,50,250,d1} mL/hr  Using a 15 gtt/mL drip set, what is his rate in gtt/s?",
          solveMethod: "{2} mL/hr x 15 gtt/mL = [{2}*15] gtt/hr /60 min / 60 sec = [(({2}*15)/60)/60] gtt/s",
          solveEquation: "(({2}*15)/60)/60"
        },
        {
          questionText: "A {n,2,60,d1} kg dog needs IV fluids at {n,50,250,d1} mL/hr  Using a 20 gtt/mL drip set, what is his rate in gtt/s?",
          solveMethod: "{2} mL/hr x 20 gtt/mL = [{2}*20] gtt/hr /60 min / 60 sec = [(({2}*20)/60)/60] gtt/s",
          solveEquation: "(({2}*20)/60)/60"
        },
        {
          questionText: "A {n,2,60,d1} kg dog needs IV fluids at {n,50,250,d1} mL/hr  Using a 60 gtt/mL drip set, what is his rate in gtt/s?",
          solveMethod: "{2} mL/hr x 60 gtt/mL = [{2}*60] gtt/hr /60 min / 60 sec = [(({2}*60)/60)/60] gtt/s",
          solveEquation: "(({2}*60)/60)/60"
        },
        {
          questionText: "A {n,1.5,10,d1} kg cat needs IV fluids at {n,50,250,d1} mL/hr  Using a 10 gtt/mL drip set, what is his rate in gtt/s?",
          solveMethod: "{2} mL/hr x 10 gtt/mL = [{2}*10] gtt/hr /60 min / 60 sec = [(({2}*10)/60)/60] gtt/s",
          solveEquation: "(({2}*10)/60)/60"
        },
        {
          questionText: "A {n,1.5,10,d1} kg cat needs IV fluids at {n,50,250,d1} mL/hr  Using a 15 gtt/mL drip set, what is his rate in gtt/s?",
          solveMethod: "{2} mL/hr x 15 gtt/mL = [{2}*15] gtt/hr /60 min / 60 sec = [(({2}*15)/60)/60] gtt/s",
          solveEquation: "(({2}*15)/60)/60"
        },
        {
          questionText: "A {n,1.5,10,d1} kg cat needs IV fluids at {n,50,250,d1} mL/hr  Using a 20 gtt/mL drip set, what is his rate in gtt/s?",
          solveMethod: "{2} mL/hr x 20 gtt/mL = [{2}*20] gtt/hr /60 min / 60 sec = [(({2}*20)/60)/60] gtt/s",
          solveEquation: "(({2}*20)/60)/60"
        },
        {
          questionText: "A {n,1.5,10,d1} kg cat needs IV fluids at {n,50,250,d1} mL/hr  Using a 60 gtt/mL drip set, what is his rate in gtt/s?",
          solveMethod: "{2} mL/hr x 60 gtt/mL = [{2}*60] gtt/hr /60 min / 60 sec = [(({2}*60)/60)/60] gtt/s",
          solveEquation: "(({2}*60)/60)/60"
        }
      ],
      topicFilter: "IV_Fluid_Therapy"
    },
    {
      title: "IV Fluids - Ongoing Losses",
      disabled: true,
      desc: "Calculations to determine replacement fluid volumes when losses are occurring",
      icon: "weight",
      questions: [],
      topicFilter: "IV_Fluid_Therapy"
    },
    {
      title: "IV Fluids – Dehydration",
      disabled: false,
      desc: "Calculations to determine replacement fluid volumes when the patient is dehydrated",
      icon: "tint-slash",
      questions: [
        {
          questionText: "A {n,2,60,d1} kg dog is {n,5,11,d0}% dehydrated.  The vet wants to correct her dehydration over {n,12,48,d0} hours.  What is her IV fluid rate in mL/hr just to correct the dehydration?",
          solveMethod: "{1} kg x {2}% = [{1}*({2}/100)] kg = [{1}*({2}/100)] L = [({1}*({2}/100))*1000] mL/12 hr = [(({1}*({2}/100))*1000)/12] mL/hr",
          solveEquation: "[(({1}*({2}/100))*1000)/12]"
        },
        {
          questionText: "A {n,1.5,10,d1} kg cat is {n,5,11,d0}% dehydrated.  The vet wants to correct her dehydration over {n,12,48,d0} hours.  What is her IV fluid rate in mL/hr just to correct the dehydration?",
          solveMethod: "{1} kg x {2}% = [{1}*({2}/100)] kg = [{1}*({2}/100)] L = [({1}*({2}/100))*1000] mL/12 hr = [(({1}*({2}/100))*1000)/12] mL/hr",
          solveEquation: "[(({1}*({2}/100))*1000)/12]"
        }
      ],
      topicFilter: "IV_Fluid_Therapy"
    },
    {
      title: "IV Fluids – Shock",
      disabled: false,
      desc: "Calculations to determine fluid volumes given to patients in shock",
      icon: "heartbeat",
      questions: [
        {
          questionText: "Marius the {n,2,60,d1}kg dog is in shock and you must begin IV fluid treatment immediate to attempt to stabilize them for an emergency surgery.. Determine a shock fluid dose for Marius. What is his fluid rate in mL/hr?",
          solveMethod: "{1}kg x 90 mL/kg = [{1}*90] mL x 0.25 = [({1}*90)*0.25] mL in 10 min x 6 = [(({1}*90)*0.25)*6] mL/hr",
          solveEquation: "(({1}*90)*0.25)*6"
        },
        {
          questionText: "Chloe the {n,2,15,d1}kg cat is in shock and you must begin IV fluid treatment immediate to attempt to stabilize them for an emergency surgery.. Determine a shock fluid dose for Chloe. What is his fluid rate in mL/hr?",
          solveMethod: "{1}kg x 60 mL/kg = [{1}*60] mL x 0.25 = [({1}*60)*0.25] mL in 10 min x 6 = [(({1}*60)*0.25)*6] mL/hr",
          solveEquation: "(({1}*60)*0.25)*6"
        }
      ],
      topicFilter: "IV_Fluid_Therapy"
    },
    {
      title: "Simplified Dose Rates",
      disabled: false,
      desc: "Creating simplified dose rates using drug dose rates and concentrations",
      icon: "syringe",
      questions: [
        {
          questionText: "A drug has a concentration of {n,1,100,d0} mg/mL and is dosed at {n,1,100,d0} mg/kg. Determine two simplified dose rates for this drug. (Separate the answers by a space!)",
          solveMethod: "{1} mg/mL x 1 kg/{2} mg = 1 mL/[{1}*(1/{2})] kg and {2} mg/kg x 1 mL/{1} mg = [{2}*(1/{1})] mL/kg",
          solveEquation: "(1/[{1}*(1/{2})]) ([{2}*(1/{1})])",
        }
      ],
      topicFilter: "Pharmacology"
    },
    {
      title: "Anesthetic Pre-Mixes",
      disabled: true,
      desc: "Determining mg dosing when patient receives a pre-mixed combination of drugs",
      icon: "blender",
      questions: [],
      topicFilter: "Anesthetic_Premixes"
    },
    {
      title: "Constant Rate Infusions",
      disabled: false,
      desc: "Adding drugs to IV fluids for long-term drug dosing",
      icon: "slash",
      questions: [
        {
          questionText: "A {n,2,60,d1} kg dog needs a constant rate infusion of Fentanyl ({n,0.05,0.10,d2} mg/mL) at {n,0.02,0.04,d2} mcg/kg/min.  The infusion needs to last for 3 hours. How many mg and mL of Fentanyl are needed? (separate both answers with a space, mg then mL)",
          solveMethod: "{3} mcg/kg/min x 60 min/hr = [{3} * 60] mcg/kg/hr = [({3} * 60)/1000] mg/kg/hr  {1} kg x [({3} * 60)/1000] mg/kg/hr = [{1}*(({3} * 60)/1000)] mg/hr x 3 hr = [3*({1}*(({3} * 60)/1000))] mg x 1 mL/{2} mg = [(3*({1}*(({3} * 60)/1000)))*(1/{2})] mL",
          solveEquation: "({1}*(({3}*60)/1000)) ((3*({1}*(({3}*60)/1000)))*(1/{2}))"
        }
      ],
      topicFilter: "IV_Fluid_Therapy"
    },
    {
      title: "Nutrition - RER and MER",
      disabled: false,
      desc: "Calculations to determine the basic caloric needs of patients and how much to feed (dry)",
      icon: "apple-alt",
      questions: [
        {
          questionText: "What is the MER for a {n,2,60,d1} kg {n,1,12,d0} yo FS dog in kCal/day?",
          solveMethod: "{1} kg^0.75 x 70 = [({1}^0.75)*70] kCal/day RER x 1.6 = [(({1}^0.75)*70)*1.6] kCal/day MER",
          solveEquation: "(({1}^0.75)*70)*1.6"
        },
        {
          questionText: "What is the MER for a {n,2,60,d1} kg {n,1,12,d0} yo F dog in kCal/day?",
          solveMethod: "{1} kg^0.75 x 70 = [({1}^0.75)*70] kCal/day RER x 1.8 = [(({1}^0.75)*70)*1.8] kCal/day MER",
          solveEquation: "(({1}^0.75)*70)*1.8"
        },
        {
          questionText: "What is the MER for a {n,2,60,d1} kg {n,1,12,d0} yo MN dog in kCal/day?",
          solveMethod: "{1} kg^0.75 x 70 = [({1}^0.75)*70] kCal/day RER x 1.6 = [(({1}^0.75)*70)*1.6] kCal/day MER",
          solveEquation: "(({1}^0.75)*70)*1.6"
        },
        {
          questionText: "What is the MER for a {n,2,60,d1} kg {n,1,12,d0} yo M dog in kCal/day?",
          solveMethod: "{1} kg^0.75 x 70 = [({1}^0.75)*70] kCal/day RER x 1.8 = [(({1}^0.75)*70)*1.8] kCal/day MER",
          solveEquation: "(({1}^0.75)*70)*1.8"
        },
        {
          questionText: "What is the MER for a {n,1.5,8,d1} kg {n,1,20,d0} yo FS cat in kCal/day?",
          solveMethod: "{1} kg^0.75 x 70 = [({1}^0.75)*70] kCal/day RER x 1.2 = [(({1}^0.75)*70)*1.2] kCal/day MER",
          solveEquation: "(({1}^0.75)*70)*1.2"
        },
        {
          questionText: "What is the MER for a {n,1.5,8,d1} kg {n,1,20,d0} yo F cat in kCal/day?",
          solveMethod: "{1} kg^0.75 x 70 = [({1}^0.75)*70] kCal/day RER x 1.4 = [(({1}^0.75)*70)*1.4] kCal/day MER",
          solveEquation: "(({1}^0.75)*70)*1.4"
        },
        {
          questionText: "What is the MER for a {n,1.5,8,d1} kg {n,1,20,d0} yo MN cat in kCal/day?",
          solveMethod: "{1} kg^0.75 x 70 = [({1}^0.75)*70] kCal/day RER x 1.2 = [(({1}^0.75)*70)*1.2] kCal/day MER",
          solveEquation: "(({1}^0.75)*70)*1.2"
        },
        {
          questionText: "What is the MER for a {n,1.5,8,d1} kg {n,1,20,d0} yo M cat in kCal/day?",
          solveMethod: "{1} kg^0.75 x 70 = [({1}^0.75)*70] kCal/day RER x 1.4 = [(({1}^0.75)*70)*1.4] kCal/day MER",
          solveEquation: "(({1}^0.75)*70)*1.4"
        },
        {
          questionText: "What is the MER for a {n,2,60,d1} kg {n,1,12,d0} yo pregnant dog in kCal/day?",
          solveMethod: "{1} kg^0.75 x 70 = [({1}^0.75)*70] kCal/day RER x 1.6 = [(({1}^0.75)*70)*1.6] kCal/day MER",
          solveEquation: "(({1}^0.75)*70)*1.6"
        },
        {
          questionText: "What is the MER for a {n,1.5,8,d1} kg {n,1,20,d0} yo pregnant cat in kCal/day?",
          solveMethod: "{1} kg^0.75 x 70 = [({1}^0.75)*70] kCal/day RER x 2.0 = [(({1}^0.75)*70)*2.0] kCal/day MER",
          solveEquation: "(({1}^0.75)*70)*2.0"
        },
        {
          questionText: "Gustav is a {n,1,12,d0} yo {n,2,60,d1} kg MN dog with a BCS of 3/5. Using the RER and MER for Gustav in kCal/day and if Gustav's dry food is {n,225,500,d0} kCal/cup.  How many cups will Gustav need per day?",
          solveMethod: "{1} kg^0.75 x 70 = [({1}^0.75)*70] kCal/day RER x 1.6 = [(({1}^0.75)*70)*1.6] kCal/day MER. [(({1}^0.75)*70)*1.6] x 1 cup/{3} kCal = [((({1}^0.75)*70)*1.6)/{3}] cups/day",
          solveEquation: "((({1}^0.75)*70)*1.6)/{3}"
        },
        {
          questionText: "Gustav is a {n,1,12,d0} yo {n,2,60,d1} kg M dog with a BCS of 3/5. Using the RER and MER for Gustav in kCal/day and if Gustav's dry food is {n,225,500,d0} kCal/cup.  How many cups will Gustav need per day?",
          solveMethod: "{1} kg^0.75 x 70 = [({1}^0.75)*70] kCal/day RER x 1.8 = [(({1}^0.75)*70)*1.8] kCal/day MER. [(({1}^0.75)*70)*1.8] x 1 cup/{3} kCal = [((({1}^0.75)*70)*1.8)/{3}] cups/day",
          solveEquation: "((({1}^0.75)*70)*1.8)/{3}"
        },
        {
          questionText: "Princess is a {n,1,12,d0} yo {n,2,60,d1} kg FS dog with a BCS of 3/5. Using the RER and MER for Princess in kCal/day and if Princess's dry food is {n,225,500,d0} kCal/cup.  How many cups will Princess need per day?",
          solveMethod: "{1} kg^0.75 x 70 = [({1}^0.75)*70] kCal/day RER x 1.6 = [(({1}^0.75)*70)*1.6] kCal/day MER. [(({1}^0.75)*70)*1.6] x 1 cup/{3} kCal = [((({1}^0.75)*70)*1.6)/{3}] cups/day",
          solveEquation: "((({1}^0.75)*70)*1.6)/{3}"
        },
        {
          questionText: "Princess is a {n,1,12,d0} yo {n,2,60,d1} kg F dog with a BCS of 3/5. Using the RER and MER for Princess in kCal/day and if Princess's dry food is {n,225,500,d0} kCal/cup.  How many cups will Princess need per day?",
          solveMethod: "{1} kg^0.75 x 70 = [({1}^0.75)*70] kCal/day RER x 1.8 = [(({1}^0.75)*70)*1.8] kCal/day MER. [(({1}^0.75)*70)*1.8] x 1 cup/{3} kCal = [((({1}^0.75)*70)*1.8)/{3}] cups/day",
          solveEquation: "((({1}^0.75)*70)*1.8)/{3}"
        },
        {
          questionText: "Tom is a {n,1,20,d0} yo {n,1.5,8,d1} kg MN cat with a BCS of 3/5. Using the RER and MER for Tom in kCal/day and if Tom's dry food is {n,225,500,d0} kCal/cup.  How many cups will Tom need per day?",
          solveMethod: "{1} kg^0.75 x 70 = [({1}^0.75)*70] kCal/day RER x 1.2 = [(({1}^0.75)*70)*1.2] kCal/day MER. [(({1}^0.75)*70)*1.2] x 1 cup/{3} kCal = [((({1}^0.75)*70)*1.2)/{3}] cups/day",
          solveEquation: "((({1}^0.75)*70)*1.2)/{3}"
        },
        {
          questionText: "Tom is a {n,1,20,d0} yo {n,1.5,8,d1} kg M cat with a BCS of 3/5. Using the RER and MER for Tom in kCal/day and if Tom's dry food is {n,225,500,d0} kCal/cup.  How many cups will Tom need per day?",
          solveMethod: "{1} kg^0.75 x 70 = [({1}^0.75)*70] kCal/day RER x 1.4 = [(({1}^0.75)*70)*1.4] kCal/day MER. [(({1}^0.75)*70)*1.4] x 1 cup/{3} kCal = [((({1}^0.75)*70)*1.4)/{3}] cups/day",
          solveEquation: "((({1}^0.75)*70)*1.4)/{3}"
        },
        {
          questionText: "Bella is a {n,1,20,d0} yo {n,1.5,8,d1} kg FS cat with a BCS of 3/5. Using the RER and MER for Bella in kCal/day and if Bella's dry food is {n,225,500,d0} kCal/cup.  How many cups will Bella need per day?",
          solveMethod: "{1} kg^0.75 x 70 = [({1}^0.75)*70] kCal/day RER x 1.2 = [(({1}^0.75)*70)*1.2] kCal/day MER. [(({1}^0.75)*70)*1.2] x 1 cup/{3} kCal = [((({1}^0.75)*70)*1.2)/{3}] cups/day",
          solveEquation: "((({1}^0.75)*70)*1.2)/{3}"
        },
        {
          questionText: "Ginny is a {n,1,20,d0} yo {n,1.5,8,d1} kg F cat with a BCS of 3/5. Using the RER and MER for Ginny in kCal/day and if Ginny's dry food is {n,225,500,d0} kCal/cup.  How many cups will Ginny need per day?",
          solveMethod: "{1} kg^0.75 x 70 = [({1}^0.75)*70] kCal/day RER x 1.4 = [(({1}^0.75)*70)*1.4] kCal/day MER. [(({1}^0.75)*70)*1.4] x 1 cup/{3} kCal = [((({1}^0.75)*70)*1.4)/{3}] cups/day",
          solveEquation: "((({1}^0.75)*70)*1.4)/{3}"
        }
      ],
      topicFilter: "Nutrition"
    },
    {
      title: "Nutrition - Adding Canned Food and Treats",
      disabled: false,
      desc: "Calculations to determine a feeding plan that includes dry, canned and treats",
      icon: "cookie",
      questions: [
        {
          questionText: "Sparky is a {n,1,12,d0}yo {n,2,60,d1} kg MN dog with a BCS of 3/5. What is the RER and MER for Sparky in kCal/day? (Separate RER and MER by a space)",
          solveMethod: "{2} kg^0.75 x 70 = [({2}^0.75)*70] kCal/day RER. [({2}^0.75)*70] x 1.6 = [(({2}^0.75)*70 * 1.6)] kCal/day MER",
          solveEquation: "(({2}^0.75)*70) (({2}^0.75)*70*1.6)",
        }
      ],
      topicFilter: "Nutrition"
    },
    {
      title: "Nutrition - Weight Loss",
      disabled: false,
      desc: "Calculations to determine a feeding plan to accomplish weight loss",
      icon: "balance-scale",
      questions: [
        {
          // 3.5/5  ideal body weight
          questionText:"Sparky is a {n,1,12,d0} yo {n,2,60,d1} kg MN dog with a BCS of 3.5/5.  What is Sparky's ideal body weight?",
          solveMethod:"{2} kg x 70% = [{2}*0.70] kg / 0.8 = [({2}*0.70)/0.8] kg ideal body weight",
          solveEquation:"({2}*0.70)/0.8"
        },
        {
          questionText:"Sparky is a {n,1,20,d0} yo {n,1.5,10,d1} kg MN cat with a BCS of 3.5/5.  What is Sparky's ideal body weight?",
          solveMethod:"{2} kg x 70% = [{2}*0.70] kg / 0.8 = [({2}*0.70)/0.8] kg ideal body weight",
          solveEquation:"({2}*0.70)/0.8"
        },
        {
          // 4/5  ideal body weight
          questionText:"Sparky is a {n,1,12,d0} yo {n,2,60,d1} kg MN dog with a BCS of 4/5.  What is Sparky's ideal body weight?",
          solveMethod:"{2} kg x 80% = [{2}*0.80] kg / 0.8 = [({2}*0.80)/0.8] kg ideal body weight",
          solveEquation:"({2}*0.80)/0.8"
        },
        {
          questionText:"Sparky is a {n,1,20,d0} yo {n,1.5,10,d1} kg MN cat with a BCS of 4/5.  What is Sparky's ideal body weight?",
          solveMethod:"{2} kg x 80% = [{2}*0.80] kg / 0.8 = [({2}*0.80)/0.8] kg ideal body weight",
          solveEquation:"({2}*0.80)/0.8"
        },
        {
          // 4.5/5  ideal body weight
          questionText:"Sparky is a {n,1,12,d0} yo {n,2,60,d1} kg MN dog with a BCS of 4.5/5.  What is Sparky's ideal body weight?",
          solveMethod:"{2} kg x 90% = [{2}*0.90] kg / 0.8 = [({2}*0.90)/0.8] kg ideal body weight",
          solveEquation:"({2}*0.90)/0.8"
        },
        {
          questionText:"Sparky is a {n,1,20,d0} yo {n,1.5,10,d1} kg MN cat with a BCS of 4.5/5.  What is Sparky's ideal body weight?",
          solveMethod:"{2} kg x 90% = [{2}*0.90] kg / 0.8 = [({2}*0.90)/0.8] kg ideal body weight",
          solveEquation:"({2}*0.90)/0.8"
        },
        {
          // 5/5  ideal body weight
          questionText:"Sparky is a {n,1,12,d0} yo {n,2,60,d1} kg MN dog with a BCS of 5/5.  What is Sparky's ideal body weight?",
          solveMethod:"{2} kg x 100% = [{2}*1] kg / 0.8 = [({2}*1)/0.8] kg ideal body weight",
          solveEquation:"({2}*1)/0.8"
        },
        {
          questionText:"Sparky is a {n,1,20,d0} yo {n,1.5,10,d1} kg MN cat with a BCS of 5/5.  What is Sparky's ideal body weight?",
          solveMethod:"{2} kg x 100% = [{2}*1] kg / 0.8 = [({2}*1)/0.8] kg ideal body weight",
          solveEquation:"({2}*1)/0.8"
        },
        {
          //3.5 achieve weight loss
          questionText:"Sparky is a {n,1,12,d0} yo {n,2,60,d1} kg MN dog with a BCS of 3.5/5.  How many kCal/day does Sparky need to achieve weight loss?",
          solveMethod:"{2} kg x 70% = [{2}*0.70] kg / 0.8 = [({2}*0.70)/0.8] kg ideal body weight [((({2}*0.70)/0.8)^0.75)*70] kCal/day RER x 1 = [((({2}*0.70)/0.8)^0.75)*70] kCal/day MER",
          solveEquation:"((({2}*0.70)/0.8)^0.75)*70"
        },
        {
          questionText:"Sparky is a {n,1,20,d0} yo {n,1.5,10,d1} kg MN cat with a BCS of 3.5/5.  How many kCal/day does Sparky need to achieve weight loss?",
          solveMethod:"{2} kg x 70% = [{2}*0.70] kg / 0.8 = [({2}*0.70)/0.8] kg ideal body weight [((({2}*0.70)/0.8)^0.75)*70] kCal/day RER x 1 = [((({2}*0.70)/0.8)^0.75)*70] kCal/day MER",
          solveEquation:"((({2}*0.70)/0.8)^0.75)*70"
        },
        {
          //4/5 achieve weight loss
          questionText:"Sparky is a {n,1,12,d0} yo {n,2,60,d1} kg MN dog with a BCS of 4/5.  How many kCal/day does Sparky need to achieve weight loss?",
          solveMethod:"{2} kg x 80% = [{2}*0.80] kg / 0.8 = [({2}*0.80)/0.8] kg ideal body weight [((({2}*0.80)/0.8)^0.75)*70] kCal/day RER x 1 = [((({2}*0.80)/0.8)^0.75)*70] kCal/day MER",
          solveEquation:"((({2}*0.80)/0.8)^0.75)*70"
        },
        {
          questionText:"Sparky is a {n,1,20,d0} yo {n,1.5,10,d1} kg MN cat with a BCS of 4/5.  How many kCal/day does Sparky need to achieve weight loss?",
          solveMethod:"{2} kg x 80% = [{2}*0.80] kg / 0.8 = [({2}*0.80)/0.8] kg ideal body weight [((({2}*0.80)/0.8)^0.75)*70] kCal/day RER x 1 = [((({2}*0.80)/0.8)^0.75)*70] kCal/day MER",
          solveEquation:"((({2}*0.80)/0.8)^0.75)*70"
        },
        {
          //4.5/5 achieve weight loss
          questionText:"Sparky is a {n,1,12,d0} yo {n,2,60,d1} kg MN dog with a BCS of 4.5/5.  How many kCal/day does Sparky need to achieve weight loss?",
          solveMethod:"{2} kg x 90% = [{2}*0.90] kg / 0.8 = [({2}*0.90)/0.8] kg ideal body weight [((({2}*0.90)/0.8)^0.75)*70] kCal/day RER x 1 = [((({2}*0.90)/0.8)^0.75)*70] kCal/day MER",
          solveEquation:"((({2}*0.90)/0.8)^0.75)*70"
        },
        {
          questionText:"Sparky is a {n,1,20,d0} yo {n,1.5,10,d1} kg MN cat with a BCS of 4.5/5.  How many kCal/day does Sparky need to achieve weight loss?",
          solveMethod:"{2} kg x 90% = [{2}*0.90] kg / 0.8 = [({2}*0.90)/0.8] kg ideal body weight [((({2}*0.90)/0.8)^0.75)*70] kCal/day RER x 1 = [((({2}*0.90)/0.8)^0.75)*70] kCal/day MER",
          solveEquation:"((({2}*0.90)/0.8)^0.75)*70"
        },
        {
          //5/5 achieve weight loss
          questionText:"Sparky is a {n,1,12,d0} yo {n,2,60,d1} kg MN dog with a BCS of 5/5.  How many kCal/day does Sparky need to achieve weight loss?",
          solveMethod:"{2} kg x 100% = [{2}*1] kg / 0.8 = [({2}*1)/0.8] kg ideal body weight [((({2}*1)/0.8)^0.75)*70] kCal/day RER x 1 = [((({2}*1)/0.8)^0.75)*70] kCal/day MER",
          solveEquation:"((({2}*1)/0.8)^0.75)*70"
        },
        {
          questionText:"Sparky is a {n,1,20,d0} yo {n,1.5,10,d1} kg MN cat with a BCS of 5/5.  How many kCal/day does Sparky need to achieve weight loss?",
          solveMethod:"{2} kg x 100% = [{2}*1] kg / 0.8 = [({2}*1)/0.8] kg ideal body weight [((({2}*1)/0.8)^0.75)*70] kCal/day RER x 1 = [((({2}*1)/0.8)^0.75)*70] kCal/day MER",
          solveEquation:"((({2}*1)/0.8)^0.75)*70"
        }
      ],
      topicFilter: "Nutrition"
    },
    {
      title: "Nutrition - Refeeding Syndrome",
      disabled: true,
      desc: "Calculations to determine a feeding plan for patients in danger of refeeding syndrome",
      icon: "drumstick-bite",
      questions: [],
      topicFilter: "Nutrition"
    },
    {
      title: "Blood Transfusions",
      desc: "Calculations for both the blood donor and the recipient",
      icon: "tint",
      questions: [
        {
          questionText: "Alexander is a {n,2,15,d1}kg male cat. His PCV is {11,20,d0}%. After he is stabilized, the vet asks you to collect blood from Hamilton, the {n,4.5,8,d1}kg clinic cat, for a transfusion. He has a HCT of {n,0.3,0.55,d2}L/L. How much blood is it safe to collect from Hamilton?",
          solveMethod: "{3} kg x 60 mL/kg = [{3}*60] mL x 0.2 = [({3}*60)*0.2] mL.",
          solveEquation: "({3}*60)*0.2"
        },
        {
          questionText: "Alexander is a {n,2,15,d1}kg male cat. His PCV is {11,20,d0}%. After he is stabilized, the vet asks you to collect blood from Hamilton, the {n,4.5,8,d1}kg clinic cat, for a transfusion. He has a HCT of {n,0.3,0.55,d2}L/L. How much blood does Alexander need to increase his PCV to {c,2,p,3,6,d0}%?",
          solveMethod: "{4} L/L = {4*100}%, {1} kg x 70 x (({5}-{2})/[{4}*100]) = [{1}*70*(({5}-{2})/({4}*100))] mL",
          solveEquation: "{1}*70*(({5}-{2})/({4}*100))"
        },
        {
          questionText: "Thomas is a {n,5,60,d1}kg 6 yo MN German Shepherd. His HCT is {n,0.11,0.2,d2}L/L and the vet wants to raise it to {n,0.11,0.2,d2}L/L.  The donor dog, Jefferson, weighs {n,25,70,d1}kg and has a PCV of {30,55,d0}%.  " +
              "a. How much blood can safely be collected from Jefferson?  ",
          solveMethod: "{4}kg x 90 mL/kg = [{4}*90] x 0.2 = [({4}*90)*0.2] mL.",
          solveEquation: "({4}*90)*0.2"
        },
        {
          questionText: "Thomas is a {n,5,60,d1}kg 6 yo MN German Shepherd. His HCT is {n,0.11,0.2,d2}L/L and the vet wants to raise it to {n,0.11,0.2,d2}L/L.  The donor dog, Jefferson, weighs {n,25,70,d1}kg and has a PCV of {30,55,d0}%.  " +
              "b. How much blood does Thomas need to increase his HCT to ?",
          solveMethod: "{5}% = ({5}/100)L/L    {1}kg x 80 x (({3}-{2})/({5}/100)) = [{1} x 80 x (({3}-{2})/({5}/100))]mL",
          solveEquation: "{1}*80*(({3}-{2})/({5}/100))"
        }
      ],
      topicFilter: "Blood_Transfusions"
    }
  ]
}
export default areaData;