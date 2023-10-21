import React from 'react';
import  ReactDOM  from 'react-dom';

function Example() {
    return (
        <div className="example">
            This is a React component! Hiya hiya tanpa clear cache
        </div>
    );
}

export default Example;

if (document.getElementById('example')) {
    ReactDOM.render(<Example></Example>, document.getElementById("example"))
}

