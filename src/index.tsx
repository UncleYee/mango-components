import React from 'react'
import ReactDOM from 'react-dom'

import config from './config'
import './index.css'

const { CMSComponent, testData, defaultProps } = config

function App() {
  const ref = React.createRef<HTMLDivElement>()
  return (
    <div className="app">
      <CMSComponent
        defaultProps={defaultProps}
        data={testData}
        ref={ref}
      />
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
