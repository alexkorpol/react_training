import data from '../../data.json';
import { Head } from '../Head/Head';
// import styled from 'styled-components';
import { Container, Photo } from './Card.styled';
// import css from './Card.module.css';
// import clsx from 'clsx';



export const Card = ({isOnline, isOffline}) => {
    return data.map((photo) => {
      return (
        <Container key={photo.id}  isHide={isOnline}>          
        
            <Photo
              src={photo.url}
              alt={photo.title}
            />

            <div >
                <h5>Card title: {photo.title}</h5>
                 {/* {head()} */}
                {/* {Head({ clas:"card-title", id:"id-123"})} */}
                <Head clas="card-title" id="id-123">
                  qwerty
                <div>23456</div>
                <p>asdfgh</p>
                </Head>
                {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                <a href="http" >Go somewhere</a>
              </div>
        </Container>)
    })
}


// Module
// export const Card = ({isOnline, isOffline}) => {
//     return data.map((photo) => {
//       return (
//         <div
//           key={photo.id}

          // 1 вариант Card.module.css
          // className={isOnline
          //   ? `${css.main} ${css.red}`
          //   : `${css.main} ${css.blue}`}

          // 2 вариант 
          // className={clsx(css.main, isOnline && css.red, !isOnline && css.blue)}
          
          // 3 вариант
          // className={clsx(css.main, {
          //   [css.red]: isOnline,
          //   [css.blue]: isOffline,
          // })}

          // 4 вариант c тернарным оператором 
          // className={clsx(css.main, isOnline ? css.red : css.blue)}
//         >          
        
//         <img
//           src={photo.url}
//             alt={photo.title}
//             className={css.photo}
//         />

//       <div >
//           <h5>Card title: {photo.title}</h5>
//           {/* {head()} */}
//           {/* {Head({ clas:"card-title", id:"id-123"})} */}
//           <Head clas="card-title" id="id-123">
//             qwerty
//             <div>23456</div>
//             <p>asdfgh</p>
//           </Head>
//         {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
//         <a href="http" >Go somewhere</a>
//       </div>
//     </div>)
//     })
// } 



// bootstrap
  
// export const Card = () => {
//     return data.map((photo) => {
//     return (
//       <div key={photo.id} className="card mx-auto my-2" style={{ width: '18rem' }}>
//       <img src={photo.url} className="card-img-top" alt={photo.title} />
//       <div className="card-body">
//           <h5 className="card-title">Card title: {photo.title}</h5>
//           {/* {head()} */}
//           {/* {Head({ clas:"card-title", id:"id-123"})} */}
//           <Head clas="card-title" id="id-123">
//             qwerty
//             <div>23456</div>
//             <p>asdfgh</p>
//           </Head>
//         {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
//         <a href="http" className="btn btn-primary">Go somewhere</a>
//       </div>
//     </div>)
//     })
// }   
