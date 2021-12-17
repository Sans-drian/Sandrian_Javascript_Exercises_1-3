//This script was made done by the help of a friend/other lecturer. It may look very similar but I still understood the assignment. I wanted to clarify that I still learned from the code and not just copied without thought.

//However with this code, I am still a bit confused. I apologize if there's no variation or uniqueness with my code in comparison with other's codes but I am actively trying to work towards understanding this more.


//this function determines the minimum cost picked based on the amount that's started and the stairsay/amount of stairs inputed.
recursion = (cost, stairs) => {
    let currentCost = cost
    if (stairs.length > 2) {
        let recursion1 = recursion(currentCost + stairs[0], stairs.slice(1));
        let recursion2 = recursion(currentCost + stairs[0], stairs.slice(2));
        if (recursion1 > recursion2) {
            currentCost = recursion2;
        } else {
            currentCost = recursion1;
        }
    } else {
        currentCost += stairs[0];
    } 

    return currentCost;
}

//this function "calls" the previous recursion function
climbingStairs = (stairs) => {
    let cost = recursion(0, stairs);
    let cost2 = recursion(0, stairs.slice(1));
    if (cost2 < cost) {
        cost = cost2;
    }

    return cost;
}

console.log(climbingStairs([0, 2, 2, 1]));
console.log(climbingStairs([0, 2, 3, 2]));
console.log(climbingStairs([10, 15, 20]));
console.log(climbingStairs([0, 0, 0, 0, 0, 0]));