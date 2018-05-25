import React from 'react'
import CreateReact from 'create-react-class'
import Header from './Header'
import Setting from './Setting'

var App = CreateReact({
    render: function() {
        return (
            <div>
                <Header />
                <Setting />
            </div>
        );
      }
})

export default App;