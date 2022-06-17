import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import SVGComponent from './SVGComponent';
import Tag from './Tag';
import Graphica from './Graphica';
import esquina from './img/esquina.svg'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used

const Index = () =>{
  return(
  <div className='flex main'>
    <section className='flex flex-f-d-c flex-a-c flex-j-c base-width'>
      <Tag title="Temperatura" value="value" logo={solid('temperature-half')}/>
      <SVGComponent className=''/>
      <Tag title="Humedad" value="value" logo={solid('droplet')}/>
      <img src={esquina} alt='decoration' className='decoration'/>
    </section>
    <section className='base-width base-width__blue flex flex-f-d-c flex-a-c flex-j-c'>
      <h2 className='white'>Historico</h2>
      <Graphica/>
    </section>
  </div>
  )
}

ReactDOM.render(<Index/>,document.getElementById('app'));