import React,{useState} from "react";
import {
   Input
  } from '@chakra-ui/react'
  import {
    IconButton,
    ButtonGroup,
    Flex,
    useEditableControls
  } from '@chakra-ui/react'
  import {CheckIcon,CloseIcon,EditIcon} from '@chakra-ui/icons';

const EditableComponent=(props)=>{ 

  const [value,setValue]=useState('');
  const [tempText,setTempText]=useState('');
  const [isEditing,setIsEditing]=useState(false);
  
  const handleChange=(e)=>{
    setValue(e.target.value);
  }

  const handleSubmit=()=>{
    setIsEditing(false);
  }
  
  const handleCancel=()=>{
    setValue(tempText)
    setIsEditing(false);
  }
  
  const makeEditable=()=>{
    setTempText(value);
    setIsEditing(true);
  }

    return(        
      <div>
      <Input
        placeholder="Enter Text"
        value={value}
        onChange={handleChange}
        onClick={makeEditable}
      />
      {isEditing?
            <ButtonGroup>
              <div onClick={()=>handleSubmit()}><IconButton icon={<CheckIcon />}/></div>
              <div onClick={()=>handleCancel()}><IconButton icon={<CloseIcon />}/></div>
            </ButtonGroup>
            :''
          }
      </div>
  
    );
}




export default EditableComponent;