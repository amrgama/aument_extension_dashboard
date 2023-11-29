import React, { useState } from 'react'
import {BiUserPlus} from "react-icons/bi"
import FormModal from '../UI-kits/modals/action-modal/FormModal'
import AddCompanyFormContainer from './AddCompanyFormContainer'
import ModalButton from '../UI-kits/modals/action-modal/ModalButton'

const AddCompanyButton = () => {
  // const [closeModal, setCloseModal] = useState(false);
  const [show, setShow] = useState(false);
console.log("show in addCompanyButton: ", show);

  return (
    <>
      <ModalButton
        text={"Add New Company"}
        modalId={"createCompanyModal"}
        icon={<BiUserPlus className="text-xl me-1" />}
        setShow={setShow}
        extraClasses={"!min-h-[2.8rem] text-white hover:text-secondary font-medium capitalize border-secondary hover:border-secondary bg-secondary hover:bg-transparent"}
      />
      {
        show &&
        <FormModal 
          id={"createCompanyModal"}
          title={"Add New Company"} 
          form={<AddCompanyFormContainer setCloseModal={setShow} />}
          show={show}
          setShow={setShow}
        />
      }
    </>
  )
}

export default AddCompanyButton