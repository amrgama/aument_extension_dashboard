import {AnimatePresence, motion} from "framer-motion";
import {MdError} from "react-icons/md";

const ErrorMsg = ({ message, extraClasses }) => {
    const Classes = extraClasses? extraClasses: "";
    return (
        <motion.p
            className={`flex items-center gap-1 px-2 font-medium text-red-500 ${Classes}`}
            // {...framerError}
            initial= {{ opacity: 0, y: 10 }}
            animate= {{ opacity: 1, y: 0 }}
            exit={{opacity: 0, y:10}}
            transition={{duration: 0.2}}
        >
            <MdError />
            {message}
        </motion.p>
    )
  }

  export default ErrorMsg