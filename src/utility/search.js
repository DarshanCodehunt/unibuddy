import { titles, summaries, authors } from './data.json';


export default function mainUtility() {
    const searchTitle = (searchString, returnvalue) => {
        let chars = searchString.split('');
        let mainArr = [];
        chars.map(val => {
            let filtered = [];
            titles.map((match, index) => {
                if (match.includes(val)) {
                    filtered.push(index)
                }

            });
            mainArr = [...mainArr, ...filtered]
        });
        if (mainArr.length > 0) {
            let repeatCounts = mainArr.reduce((acc, indval) => {
                if (acc[indval]) {
                    acc[indval]++;
                } else {
                    acc[indval] = 1;
                }
                return acc;
            }, {});
            let arraySort = Object.keys(repeatCounts).map(valA => {
                return [valA, repeatCounts[valA]];
            });
            arraySort.sort((a, b) => {
                return b[1] - a[1];
            });
            let result = arraySort.map(i => {
                return i[0];
            });
            return result.splice(0,returnvalue)
        }

    }

    const gettitleByIndex = (indexinput) => {
        return titles.find((val, index) => indexinput == index)
    }

    const getIndexfromTitle = (title) => {
        return titles.findIndex(val => title == val);

    }

    const getSummaryfromIndex = (index) => {
        const summaryObj = summaries.find(obj => obj.id == index);
        return summaryObj.summary;
    }

    const getAuthorfromindex = (index) => {
        const authorObj = authors.find(obj => obj.book_id == index);
        return authorObj.author;
    }

    return {
        searchTitle,
        gettitleByIndex,
        getIndexfromTitle,
        getSummaryfromIndex,
        getAuthorfromindex
    }

}