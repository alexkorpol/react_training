import React from 'react';
import ReactDOM from 'react-dom/client';
import data from './data.json';
// import './index.css';

// const div = document.createElement('div');
// const root = document.getElementById('root');
// root.append(div);


// const paragraph = React.createElement('p', { id: 'test-P-Id', children: ['I am paragraph'], });

// const p = <p id='test-Id' name='aux'> I am paragraph 2</p>
// const div = React.createElement('div', { name: "main", id: 'test-Id', className: 'test-class', children: p,  });


// const div = (<div name='main' id='test-Id' className='test-class' >{p}</div>)
// console.log(" div>>>>> :", div )
console.log(data);
const card = (
  data.map(photo => {
    return (
      <div key={photo.id} className="card mx-auto my-2" style={{ width: '18rem' }}>
      <img src={photo.url} className="card-img-top" alt={photo.title} />
      <div className="card-body">
        <h5 className="card-title">Card title: {photo.title}</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="http" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>)
  })
)
 
console.log(card);

ReactDOM.createRoot(document.getElementById('root')).render(card);


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<React.StrictMode> </React.StrictMode>);



