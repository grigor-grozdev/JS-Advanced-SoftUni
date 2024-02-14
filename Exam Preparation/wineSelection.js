class WineSelection {
    space;
    constructor(space) {
        this.space = space;
        this.wines = [];
        this.bill = 0;
    };

    reserveABottle(wineName, wineType, price) {
        if (this.wines.length >= this.space) {
            throw new Error('Not enough space in the cellar.');
        }

        this.wines.push({
            wineName,
            wineType,
            price,
            paid: false
        });
        return `You reserved a bottle of ${wineName} ${wineType} wine.`
    };

    payWineBottle(wineName, price) {

        let data = this.wines.find((p) => p.wineName == wineName);

        if (!data) {
            throw new Error(`${wineName} is not in the cellar.`);
        };

        if (data.paid) {
            throw new Error(`${wineName} has already been paid.`);
        };

        data.paid = true;
        this.bill += price;
        return `You bought a ${wineName} for a ${price}$.`
    };

    openBottle(wineName) {

        let data = this.wines.find((p) => p.wineName == wineName);

        if (!data) {
            throw new Error(`The wine, you're looking for, is not found.`);
        };

        if (!data.paid) {
            throw new Error(`${wineName} need to be paid before open the bottle.`);
        };

        this.wines.splice((this.wines.indexOf(data)), 1);
        return `You drank a bottle of ${wineName}.`

    };

    cellarRevision(wineType) {

        if (wineType) {
            let wineTypeArr = this.wines.filter((p) => p.wineType == wineType);
            let result = [];
            if (!wineTypeArr) {
                throw new Error(`There is no ${wineType} in the cellar.`);
            } else {
                for (let { wineName, wineType, price, paid } of wineTypeArr) {
                    result.push(`${wineName} > ${wineType} - ${paid ? 'Has Paid' : 'Not Paid'}.`);
                }
            }
            return result.join('\n');
        } else {
            let result = [`You have space for ${this.space - this.wines.length} bottles more.`,
            `You paid ${this.bill}$ for the wine.`];
            this.wines.sort((a, b) => a.wineName.localeCompare(b.wineName));
            for (let { wineName, wineType, price, paid } of this.wines) {
                result.push(`${wineName} > ${wineType} - ${paid ? 'Has Paid' : 'Not Paid'}.`);
            };
            return result.join('\n');
        };

    };

};

//5
try {
    const selection = new WineSelection(5)

selection.reserveABottle('Bodegas Godelia Mencía', 'Rose', 144);

selection.payWineBottle('Bodegas Godelia Mencía', 144);
console.log(selection.openBottle('Bodegas Godelia Mencía'))
selection.reserveABottle('Sauvignon Blanc Marlborough', 'White', 50); 
selection.reserveABottle('Cabernet Sauvignon Napa Valley', 'Red', 120); 
console.log(selection.cellarRevision());
} catch (err) {
    console.log(err)
}