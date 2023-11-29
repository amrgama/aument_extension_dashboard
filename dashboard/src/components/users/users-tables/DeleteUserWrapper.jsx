import React, { useEffect, useState } from 'react'
import ModalButton from '../../UI-kits/modals/action-modal/ModalButton'
// import ActionModal from '../../UI-kits/modals/action-modal/ActionModal'
// import { useSelector } from 'react-redux';
// import { deleteUser, selectAdmin } from '../../../features/admin/adminSlice';
import DeleteUserActionModalContainer from './DeleteUserActionModalContainer';
// import { ActionContext, ActionContextProvider } from '../context/actionContext'

const DeleteUserWrapper = ({userId}) => {
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
        <DeleteUserActionModalContainer
          show={show}
          setShow={setShow}
          userId={userId}
        />
      }
    </>
  )
}

export default DeleteUserWrapper