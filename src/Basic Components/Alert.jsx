import { useAppContext } from "../context/AppContext"


function Alert() {
    const {alertText} = useAppContext()
  return (
    <div>
      {alertText}
    </div>
  )
}

export default Alert
