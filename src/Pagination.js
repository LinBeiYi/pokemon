import React from 'react';

export default function Pagination({gotoNextPage, gotoPrevPage}) {
    // false && false will be false, so second part will not be run
    return (
        <div>
            {gotoPrevPage && <button onClick={gotoPrevPage}> Previous </button>}
            {gotoNextPage && <button onClick={gotoNextPage}> Next </button>}
        </div>
    )
}
