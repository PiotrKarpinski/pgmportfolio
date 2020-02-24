import React from 'react';
import workinprogressImg from '../images/workinprogress.jpg';
import layzeebeatshopImg from '../images/layzeebeatshop.jpg';
import greenoakImg from '../images/greenoak.jpg';
import vocalizerImg from '../images/vocalizer.jpg';

import '../App.css';



class Image extends React.Component {

  render() {
    let imgObj =
      {
"workinprogress":workinprogressImg,
"layzeebeatshop":layzeebeatshopImg,
"greenoak":greenoakImg,
"vocalizer":vocalizerImg

}
        return (
        <img
        className='project-img'
        alt={this.props.img}
        src={imgObj[this.props.img]}/>

    )
  }
}






export default Image;