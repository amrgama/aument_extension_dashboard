import React, {useState} from 'react'
import ModalButton from '../../UI-kits/modals/action-modal/ModalButton'
import UndeleteCompanyActionModalContainer from './UndeleteCompanyActionModalContainer';

const UndeleteCompanyWrapper = ({companyId, setIsDeleted}) => {
  const [show, setShow] = useState(false);
    // console.log("companyId: ", companyId)
  return (
    <>
      <ModalButton 
        text={"undelete"} 
        modalId={'undeleteCompanyModal'} 
        setShow={setShow}
        extraClasses={"border-primary hover:border-primary text-primary hover:text-white bg-transparent hover:bg-primary"} 
      />
      {
        show &&
        <UndeleteCompanyActionModalContainer
          companyId={companyId}
          show={show}
          setShow={setShow}
          setIsDeleted={setIsDeleted}
        />
      }
    </>
  )
}

export default UndeleteCompanyWrapper