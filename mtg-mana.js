function canCast(mana, cost, cost2, cost3, cost4, cost5, cost6, cost7) {
    var manaArray = mana.split('');
    var costArray = [];
    var costHolder = '';
    
    for (var i = 1; i < arguments.length; i++) {
        console.log(arguments[i]);
        costHolder = costHolder.concat(arguments[i]);
        costArray = costHolder.split('');
    }

    var totalMana = {
        white: 0,
        green: 0,
        blue: 0,
        red: 0,
        black: 0,
        total: 0,
    }

    var totalCost = {
        white: 0,
        green: 0,
        blue: 0,
        red: 0,
        black: 0,
        total: 0,
    }

    var canCast = false;

    for (let i = 0; i < manaArray.length; i++) {
        if (!isNaN(parseInt(manaArray[i]))) {
            totalMana.total += parseInt(manaArray[i]);
        }
        switch(manaArray[i]) {
            case 'W':
                totalMana.white++;
                totalMana.total++;
                break;
            case 'G':
                totalMana.green++;
                totalMana.total++;
                break;
            case 'U':
                totalMana.blue++;
                totalMana.total++;
                break;
            case 'R':
                totalMana.red++;
                totalMana.total++;
                break;
            case 'B':
                totalMana.black++;
                totalMana.total++;
                break;
        }
    }

    for (let i = 0; i < costArray.length; i++) {
        if (!isNaN(parseInt(costArray[i]))) {
            totalCost.total += parseInt(costArray[i]);
        }
        switch(costArray[i]) {
            case 'W':
                totalCost.white++;
                totalCost.total++;
                break;
            case 'G':
                totalCost.green++;
                totalCost.total++;
                break;
            case 'U':
                totalCost.blue++;
                totalCost.total++;
                break;
            case 'R':
                totalCost.red++;
                totalCost.total++;
                break;
            case 'B':
                totalCost.black++;
                totalCost.total++;
                break;
        }
    }

    totalMana.white = totalMana.white - totalCost.white;
    totalMana.green = totalMana.green - totalCost.green;
    totalMana.blue = totalMana.blue - totalCost.blue;
    totalMana.black = totalMana.black - totalCost.black;
    totalMana.red = totalMana.red - totalCost.red;
    totalMana.total = totalMana.total - totalCost.total;

    if (totalMana.white >= 0 && totalMana.green >= 0 && totalMana.blue >= 0 && totalMana.black >= 0 && totalMana.red >= 0 && totalMana.total >= 0) {
        canCast = true;
    } else { canCast = false; }
    return canCast;
}




// Testing framework
function test(attempt, answer) {

    console.log(` Attempt is : ${attempt} --- Answer is : ${answer}`);

    if (attempt === answer) {
        console.log(" ┌──────────────────┐");
        console.log(" │   Test Passed.   │");
        console.log(" └──────────────────┘");
        console.log('\n');
    } else {
        console.log(" ┌──────────────────┐");
        console.log(" │   Test Failed.   │");
        console.log(" └──────────────────┘");
        console.log('\n');
    }
}

// "B" -> One black mana
// "G" -> One green mana
// "R" -> One red mana
// "U" -> One blue mana
// "W" -> One white mana
// "1" -> One colorless mana

// Tests
test(canCast("BBRR", "BR"), true);
test(canCast("URRR", "UUR"), false);
test(canCast("GWWW", "3G"), true);
test(canCast("BRRBB", "2BB"), true);
test(canCast("2RR", "3R"), true);
test(canCast("GB", "2"), true);