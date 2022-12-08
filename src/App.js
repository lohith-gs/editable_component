import './App.css';
import EditableComponent from './EditableComponent/EditableComponent';
import DatePickerComponent from './DatePickerComponent/DatePickerComponent';
import { ChakraProvider, UnorderedList } from '@chakra-ui/react'
import { useState } from 'react';


function App() {

  
  const [selectedDate,setSelectedDate]=useState(new Date())
  
  
  const handleDateChange=(date)=>{
    setSelectedDate(date);
  }

  return (
    <ChakraProvider>
        <p>Editable Input Component</p>
        <div className='editable-component-wrapper'>
          <EditableComponent/>
        </div>
        <p>Date Picker</p>
        <div className='date-picker-wrapper'>
          <DatePickerComponent selectedDate={selectedDate} handleDateChange={handleDateChange}/>
        </div>
    </ChakraProvider>
  );
}

export default App;
