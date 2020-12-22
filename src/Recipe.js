import React,{useState} from 'react';
import style from './recipe.module.css'
import Modal from "react-modal"
Modal.setAppElement('#root')
const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-20%',
    transform             : 'translate(-50%, -50%)'
  }
};
const Recipe = ({nbServings, title, healthlabel, calories, image, ingredients, diet}) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return(
    <div className={style.recipe}>
      <h2>{title}</h2>
      <img className={style.image} src={image} alt="" ></img>
      <p>{healthlabel}</p>
      <p>{diet}</p>
      <p>{nbServings} people</p>

      <button className="see-more-button" onClick={() => setModalIsOpen(true)}> See more</button>
      <Modal 
        isOpen={modalIsOpen}
        style={customStyles}
        onRequestClose={() => setModalIsOpen(false)}
        >
        <div className="recipe-card">
          <button className="btn-close-modal" onClick={() => setModalIsOpen(false)}>&times;</button>
          <h2>{title}</h2>
          <img className={style.image} src={image} alt="" ></img>
          <ul>
            {ingredients.map(ingredient =>(
              <li>{ingredient.text}</li>
            ) )}
          </ul>
          <p>{Math.round(calories)+" calories"}</p>
          <p>{healthlabel}</p>
          <p>{diet}</p>
          <p>{nbServings}</p>
        </div>
      </Modal>
    </div>
  );
}

export default Recipe;

