import React, { useEffect, useState } from 'react';
import mainUtility from '../utility/search'


const Card = ({ title }) => {
    let api = mainUtility();
    const [bookSummary, setbookSummary] = useState('');
    const [bookAuthor, setbookAuthor] = useState('');
    useEffect(() => {
        const index = api.getIndexfromTitle(title);
        const summary = api.getSummaryfromIndex(index);
        const author = api.getAuthorfromindex(index);
        setbookSummary(summary);
        setbookAuthor(author);

    }, [])
    return <div className="card">
        <div className="container">
            <h4><b>{title}</b></h4>
            <p>{bookSummary}</p>
            <hr />
            <div>{bookAuthor}</div>
        </div>
    </div>

}

export default Card;