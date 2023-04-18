import { useState } from 'react'

const useInput = (type, name,RegExr) => {
    const [value, setValue] = useState()
    const [isfieldempty,setisfieldempty] = useState(+false)
    const [classnameinput, setclassnameinput] = useState()
    const [msg,setmsg] = useState()
    const [isvalid, setIsValid] = useState(+true)

    const onChange = (e) =>{
        setValue(e.target.value)
    }
    const onBlur= (e) =>{
        validateEmptyField(e.target.value)
    }
    const validateEmptyField = (fieldValue) => {
        if (fieldValue.length === 0) {
            setisfieldempty(+true)
            setclassnameinput('error')
            setmsg('Este campo es obligatorio')
            setIsValid(+false)
        }else{
            setisfieldempty(+false)
            setclassnameinput('')
            setmsg('')
            validateField()
            // setIsValid(+true)
        }
      }    
      const validateField = () => {
        if(RegExr){
        if (RegExr.test(value)) {
            setclassnameinput('ok')
            setmsg('')
            setisfieldempty(+false)
            setIsValid(+true)
        }else{
            setclassnameinput('error')
            setmsg('Este campo es invalido')
            setisfieldempty(+false)
            setIsValid(+false)
        }
    }
      }    
return {
    value,
    onChange,
    type,
    name,
    onBlur,
    isfieldempty,
    classnameinput,
    msg,
    isvalid
}
}

export default useInput