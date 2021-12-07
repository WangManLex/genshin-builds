import React, { useState } from 'react'
import { createCharacter } from '../../services/characterService'
import styles from './CharacterForm.module.css'

const CharacterForm = (props) => {
  const [formData, setFormData] = useState({
    characterName: '',
    characterWeaponType: '',
    rarity: '',
  })

  const handleSubmit = evt => {
    evt.preventDefault()
    createCharacter(formData)
  }

  const addToCollection = evt => {
    setFormData({
      characterName: `${props.detailId}`,
      characterWeaponType: `${props.characterDetails.weapon}`,
      rarity: `${props.characterDetails.rarity}`
    })
    props.handleClick(false)
  }

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <button 
              onClick={addToCollection}
              type="submit"  
              className={styles.addCharBtn} 
            > 
              Add to Collection
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default CharacterForm;