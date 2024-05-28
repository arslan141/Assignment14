// Sample Input
let hospitals = [
    { "id": 1, "name": "Hospital A", "location": "Delhi", "noOfBeds": 450, "availability": "Yes" },
    { "id": 2, "name": "Hospital B", "location": "Pune", "noOfBeds": 150, "availability": "No" },
    { "id": 3, "name": "Hospital C", "location": "Pune", "noOfBeds": 350, "availability": "Yes" }
];

// a) Filter hospitals according to Number of Beds > 200
let hospitalsWithBedsGreaterThan200 = hospitals.filter(hospital => hospital.noOfBeds > 200);
console.log("Hospitals with Beds > 200:", hospitalsWithBedsGreaterThan200);

// b) Filter hospitals according to Availability of Beds = Yes
let hospitalsWithAvailableBeds = hospitals.filter(hospital => hospital.availability === "Yes");
console.log("Hospitals with Availability of Beds = Yes:", hospitalsWithAvailableBeds);

// c) Filter hospitals according to Location = Pune
let hospitalsInPune = hospitals.filter(hospital => hospital.location === "Pune");
console.log("Hospitals in Pune:", hospitalsInPune);
