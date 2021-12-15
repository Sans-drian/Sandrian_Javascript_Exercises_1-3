//The Blood Type Combination in this script is based off of the combination types of donors and recievers found on Google Images.

//create function
function canGiveBlood(x, y) {

    //test for combination of donors of O+
    if ((x == "O+" && y == "O+") || (x== "O+" && y == "O-")) {
        console.log("Compatible");

    //test for combination of donors of O-
    } else if (x == "O-" && y == "O-") {
        console.log("Compatible");

    //test for combination of donors of A+    
    } else if ((x == "A+" && y == "O+") || (x == "A+" && y == "O-") || (x == "A+" && y == "A+") || (x == "A+" && y == "A-")) {
        console.log("Compatible");

    //test for combination of donors of A-
    } else if ((x == "A-" && y == "O-") || (x == "A-" && y == "A-")) {
        console.log("Compatible");

    //test for combination of donors of B+
    } else if ((x == "B+" && y == "O+") || (x == "B+" && y == "O-") || (x == "B+" && y == "B+") || (x == "B+" && y == "B-")) {
        console.log("Compatible");

    //test for combination of donors of B-
    } else if ((x == "B-" && y == "O-") || (x == "B-" && y == "B-")) {
        console.log("Compatible");

    //test for combination of donors of AB+
    } else if ((x == "AB+" && y == "O+") || (x == "AB+" && y == "O-") || (x == "AB+" && y == "A+") || (x == "AB+" && y == "A-")) {
        console.log("Compatible");

    //test for combination of donors of AB+
    } else if ((x == "AB+" && y == "B+") || (x == "AB+" && y == "B-") || (x == "AB+" && y == "AB+") || (x == "AB+" && y == "AB-")) {
        console.log("Compatible");

    //test for combination of donors of AB-
    } else if ((x == "AB-" && y == "O-") || (x == "AB-" && y == "A-") || (x == "AB-" && y == "B-") || (x == "AB-" && x == "AB-")) {
        console.log("Compatible");

    //if no combinations, output "false"
    } else {
        console.log("Not compatible");

    }

}

//call the function
canGiveBlood("O+", "O+")
canGiveBlood("A-", "B-")
canGiveBlood("AB+", "B-")

