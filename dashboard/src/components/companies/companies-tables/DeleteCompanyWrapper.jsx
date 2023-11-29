import React, { useEffect, useState } from 'react'
import ModalButton from '../../UI-kits/modals/action-modal/ModalButton'
// import ActionModal from '../../UI-kits/modals/action-modal/ActionModal'
// import { useSelector } from 'react-redux';
// import { deleteUser, selectAdmin } from '../../../features/admin/adminSlice';
import DeleteCompanyActionModalContainer from './DeleteCompanyActionModalContainer';
// import { ActionContext, ActionContextProvider } from '../context/actionContext'

const DeleteCompanyWrapper = ({companyId}) => {
  const [show, setShow] = useState(false);

  return (
    <>
      <ModalButton 
        text={"Delete"} 
        modalId={'delete-user-modal'} 
        setShow={setShow}
        extraClasses={`border-red-100 hover:border-red-400 text-red-400 bg-red-100 hover:bg-transparent`} 
      />
      {
        show &&
        <DeleteCompanyActionModalContainer
          show={show}
          setShow={setShow}
          companyId={companyId}
        />
      }
    </>
  )
}

export default DeleteCompanyWrapper