import React, { useState } from 'react'
import ModalButton from '../../UI-kits/modals/action-modal/ModalButton'
// import ActionModal from '../../UI-kits/modals/action-modal/ActionModal'
// import { ActionContext, ActionContextProvider } from '../../context/actionContext'
import FormModal from '../../UI-kits/modals/action-modal/FormModal'
// import BanForm from './BanForm'
import BanFormContainer from './BanFormContainer'
// import { selectAdmin } from '../../../features/admin/adminSlice'
// import { useSelector } from 'react-redux'

const BanUserWrapper = ({userId, disable, setDisable}) => {
  // const {admin :{bannedUsers}} = useSelector(selectAdmin);
  // const [disable, setDisable] = useState(false);
  const [show, setShow] = useState(false);
 
  // useEffect(()=>{
  //   bannedUsers?.forEach((bannedUser)=>{
  //     console.log(bannedUser.userId._id === userId);
  //     if(bannedUser.userId._id === userId) setDisable(true);
  //   })
  // }, [])

  return (
    <>
      <ModalButton 
        text={"Ban"}
        modalId={'ban-user-modal'} 
        setShow={setShow}
        extraClasses={`border-primary hover:border-primary text-primary hover:text-white bg-transparent hover:bg-primary ${(disable)? "btn-disabled": ""}`} 
      />
      {
        (show && !disable) &&
        <FormModal
          id={'ban-user-modal'}
          title={"Ban User"} 
          message={"Are you sure you want to ban this user?"}
          form={<BanFormContainer userId={userId} setDisable={setDisable}/>}
          show={show}
          setShow={setShow}
        />
      }
    </>
  )
}

export default BanUserWrapper