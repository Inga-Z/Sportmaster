console.log('worked');

const previousPurchases = 160000;
const currentPurchases = 4000;

let bonusesPerOneThousand;
if (previousPurchases <= 15000) {
    bonusesPerOneThousand = 50;
} else if (previousPurchases <= 150000) {
        bonusesPerOneThousand = 70;
    } else {
        bonusesPerOneThousand = 100;
    }




console.log(bonusesPerOneThousand);