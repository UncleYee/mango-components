import React from 'react'
import ReactDOM from 'react-dom'

import config from './config'
import './index.css'

const { CMSComponent, testData, defaultProps } = config

console.log(testData);

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

document.body.appendChild(
	Object.assign(document.createElement(`div`), { id: 'root' })
);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);