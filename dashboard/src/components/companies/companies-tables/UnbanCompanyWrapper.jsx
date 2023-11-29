import React, {useState} from 'react'
import ModalButton from '../../UI-kits/modals/action-modal/ModalButton'
import UnbanCompanyActionModalContainer from './UnbanCompanyActionModalContainer';

const UnbanCompanyWrapper = ({companyId}) => {
  const [show, setShow] = useState(false);
    
  return (
    <>
      <ModalButton 
        text={"unban"} 
        modalId={'unbanCompanyModal'} 
        setShow={setShow}
        extraClasses={"border-primary hover:border-primary text-primary hover:text-white bg-transparent hover:bg-primary"} 
      />
      {
        show &&
        <UnbanCompanyActionModalContainer
          companyId={companyId}
          show={show}
          setShow={setShow}
        />
      }
    </>
  )
}

export default UnbanCompanyWrapper