import React from 'react'
import { removeProfileId } from '../../services/characterService'
import styles from './RemoveCharacter.module.css'

const RemoveCharacter = (props) => {
  const removeFromCollection = evt => {
    removeProfileId(props.detailId)
    props.handleClick(true)
  }

  return (  
    <>
      <div>
        <button 
            onClick={removeFromCollection}
            type="submit"  
            className={styles.removeCharBtn} 
          >
            Remove from Collection
        </button>
      </div>
    </>
  );
}

export default RemoveCharacter;