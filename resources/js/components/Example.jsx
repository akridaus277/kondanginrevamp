import React from 'react';
import  ReactDOM  from 'react-dom';

function Example() {
    return (
        <div className="example">
            This is a React component! jhadsya
        </div>
    );
}

export default Example;

if (document.getElementById('example')) {
    ReactDOM.render(<Example></Example>, document.getElementById("example"))
}

