import React, {useState} from 'react'
import ModalButton from '../../UI-kits/modals/action-modal/ModalButton'
import ActionModal from '../../UI-kits/modals/action-modal/ActionModal'
import UnbanUserActionModalContainer from './UnbanUserActionModalContainer';
// import { ActionContext, ActionContextProvider } from '../context/actionContext'

const UnbanUserWrapper = ({userId}) => {
  const [show, setShow] = useState(false);
    
  return (
    <>
      <ModalButton 
        text={"unban"} 
        modalId={'unban-user-modal'} 
        setShow={setShow}
        extraClasses={"border-primary hover:border-primary text-primary hover:text-white bg-transparent hover:bg-primary"} 
      />
      {
        show &&
        <UnbanUserActionModalContainer
          show={show}
          setShow={setShow}
          userId={userId}
        />
      }
    </>
  )
}

export default UnbanUserWrapper