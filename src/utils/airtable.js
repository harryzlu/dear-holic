import Airtable from 'airtable';

const base = new Airtable({ apiKey: process.env.API_KEY }).base(
    process.env.AIRTABLE_ID
);

export function getItems() {
    const sort = [{
        field: 'DatePurchased',
        direction: 'desc',
    }];
    let itemsArr = [];

    return new Promise((resolve, reject) => {
        base('annie')
            .select({
                sort,
            })
            .eachPage(
                (items, fetchNextPage) => {
                    itemsArr = [...itemsArr, ...items];
                    fetchNextPage();
                },
                (err) => {
                    if (err) {
                        const error = new Error(err.statusText);
                        error.response = err;
                        reject(error);
                    }
                    resolve(itemsArr);
                }
            );
    });
};