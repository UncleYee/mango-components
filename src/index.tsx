import React from 'react'
import ReactDOM from 'react-dom'

import config from './config'
import './index.css'

const { MangoComponent, testData, defaultProps } = config

function App() {
  const ref = React.createRef<HTMLDivElement>()
  return (
    <div className="app">
      <MangoComponent
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
