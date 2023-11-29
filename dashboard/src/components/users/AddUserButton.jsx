import React, { useState } from 'react'
import {BiUserPlus} from "react-icons/bi"
import { useDispatch, useSelector } from 'react-redux'
import AddUserForm from './AddUserForm'
import FormModal from '../UI-kits/modals/action-modal/FormModal'
import AddUserFormContainer from './AddUserFormContainer'
import ModalButton from '../UI-kits/modals/action-modal/ModalButton'

const AddUserButton = () => {
  const [closeModal, setCloseModal] = useState(false);

  return (
    <>
        <ModalButton
            text={"Add New User"}
            modalId={"form_modal_1"}
            icon={<BiUserPlus className="text-xl me-1" />}
            extraClasses={"!min-h-[2.8rem] text-white hover:text-secondary font-medium capitalize border-secondary hover:border-secondary bg-secondary hover:bg-transparent"}
        />
        <FormModal 
          id={"form_modal_1"}
          title={"Add New User"} 
          form={<AddUserFormContainer setCloseModal={setCloseModal} />}
          close={closeModal}
        />
    </>
  )
}

export default AddUserButton