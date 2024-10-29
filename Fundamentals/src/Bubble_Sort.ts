class Sorter {
    collection: number[];
    constructor(collection: number[]) {
        this.collection = collection
    }

    sort() {
        const length = this.collection.length;
        // console.log(length);
        // const length = 5
        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length - i - 1; j++) {
                if (this.collection[j] > this.collection[j + 1]) {
                    const temp = this.collection[j];
                    this.collection[j] = this.collection[j + 1];
                    this.collection[j + 1] = temp;

                }
            }
        }
    }
}

const sorter = new Sorter([10, 5, 3, 0, 11, 9, -5]);
sorter.sort();
console.log(sorter.collection)