

var marriagecheck = function(age, candidateName){
    if (age>=21) {
        console.log(`Eligible for marriage : Age-${age},Name-${candidateName}`);
    }
    console.log(`Marriage eligibility check done`);
}
marriagecheck(23,"Bill");
marriagecheck(20,"Stew");
marriagecheck(21,"Elon");

console.log(`==========================`);

var marriageEligibility = function(age, candidateName,gender){
    if (age>=21 && gender=="Mae") {
        console.log(`Eligible for marriage : Age-${age},Name-${candidateName}`);
    }
}
marriagecheck(23,"Bill","Male");
marriagecheck(20,"Stew","Male");