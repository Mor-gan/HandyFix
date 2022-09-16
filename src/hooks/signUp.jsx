import {useState} from 'react'

function formInput(initValue) {
const [value, setValue] = useState(initValue)
const reset = () => {
setValue(initValue)
}
const binder = {
value ,
onchange: e => {
    setValue(e.targer.value)
}
}
return [value, binder, reset]
  }

export default formInput

