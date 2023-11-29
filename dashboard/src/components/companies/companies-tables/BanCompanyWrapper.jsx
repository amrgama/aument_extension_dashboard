import React, { useState } from 'react'
import ModalButton from '../../UI-kits/modals/action-modal/ModalButton'
import FormModal from '../../UI-kits/modals/action-modal/FormModal'
import BanFormContainer from './BanFormContainer'

const BanCompanyWrapper = ({companyId, isBanned, setIsBanned, isDeleted}) => {

  const [show, setShow] = useState(isBanned);

  return (
    <>
      <ModalButton 
        text={"Ban"}
        modalId={'ban-user-modal'} 
        setShow={setShow}
        extraClasses={`border-primary hover:border-primary text-primary hover:text-white bg-transparent hover:bg-primary ${(isBanned || isDeleted)? "btn-disabled": ""}`} 
      />
      {
        (show) &&
        <FormModal
          id={'ban-user-modal'}
          title={"Ban User"} 
          message={"Are you sure you want to ban this user?"}
          form={<BanFormContainer companyId={companyId}/>}
          show={show}
          setShow={setShow}
        />
      }
    </>
  )
}

export default BanCompanyWrapper