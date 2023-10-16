import React ,{useEffect, useState}from "react";
import './Wishcard.css'
import Dreamcard from '../../components/Dreamcard/Dreamcard'
import showToast from 'crunchy-toast';
import Navbar from "../../components/Navbar/Navbar";
function Wishcard (){
    const [Dream,setDream] = useState([
        {
            Place:'Pune',
            Date:'12-12-23',
        },
        {
            Place:' Delhi',
            Dream:'01-01-24',
            
        }
    ]);
    const [Place,setPlace]=useState('');
    const [Date,setDate]=useState('');
    const[editIndex,setEditIndex]=useState(-1);
    const [isEditMode,setIsEditMode]=useState(false);

    const addContact = ()=>{


      if(!Place){
        showToast('Place is required','alert',3000);
        return;
      }
      if(!Date){
        showToast('Date is required','alert',3000);
        return;
      }
      
      const obj ={
        Place:Place,
        Date:Date,
      }
      const newDream=[...Dream,obj];
      setDream(newDream);
      saveToLocalStorage(newDream);
      showToast('Dream Added Succesfully !','success',5000);

      setPlace('');
      setDate('');
      
      
    };

    const deleteContact=(Date)=>{
      let indexToDelete = -1;

      Dream.forEach((contactDetail,index)=>{
        if(contactDetail.Date===Date){
          indexToDelete = index;

        }
      })

      Dream.splice(indexToDelete,1);
      saveToLocalStorage(Dream);

      setDream([...Dream]);
      showToast('Dream deleted Succesfully','success',5000);
    }

    const saveToLocalStorage =(DreamData)=>{
      localStorage.setItem('Dream',JSON.stringify(DreamData));

    }
    const loadFromLocalStrorage= ()=>{
      const DreamData =JSON.parse(localStorage.getItem('Dream'));
      if(DreamData){
        setDream(DreamData);
      }
    }
    useEffect(()=>{
      loadFromLocalStrorage();
    },[] )

    
    const enableEditMode = (index)=>{
      const DreamData = Dream[index];

      setPlace(DreamData.Place);
      setDate(DreamData.Date);
    
      setEditIndex(index);
      setIsEditMode(true);

    }
    const editContact = ()=>{
      const obj = {
        Place:Place,
        Date : Date,
        
      }
      Dream[editIndex]=obj;
      setDream([...Dream]);
      saveToLocalStorage(Dream);
      showToast('Dream Edited Successfully !','success',3000);
    setPlace('');
    setDate('');
    

    setIsEditMode(false);

    }
    useEffect(()=>{
      loadFromLocalStrorage();
    },[] )

    return(
        <div className="app-container" >
          <Navbar/>
            <h1 className="app-title">Add Your Dream Place...✈</h1>
            <div className="app-body">
                <div className="Whish-container">
                  <h2 className="sub-heading">Show Dream Places</h2>
                  {
                    Dream.map((Dream,index)=>{
            
                    return(
                    <Dreamcard key={index}
                    Place={Dream.Place}
                    Date={Dream.Date}
                    
                    deleteContact={deleteContact}
                    enableEditMode={enableEditMode}
                    index={index}
                    />
                     )
                    })

                  }
                </div>
                <div className="add-whish">
                  <h2 className="sub-heading">{ isEditMode ? 'Edit Dream':'Add Dream'}</h2>
                  <form>
                    
                    <input type="text" 
                    placeholder="Place"
                     className="user-input"
                     onChange={(e)=>{
                        setPlace(e.target.value)
                     }}
                     value={Place}/>

                    <input type="text" 
                    placeholder="Date"
                    className="user-input"
                    onChange={(e)=>{
                        setDate(e.target.value)
                     }}
                     value={Date}/>
                     
                    
                    <button type="button"
                    className="btn-add" onClick={ ()=>
                    {
                      isEditMode ? editContact() : addContact()
                    }}>
                      {isEditMode ? 'Edit Dream' : 'Add Dream'}
                      </button>
                  </form>
                </div>
            </div>
       </div>
    )
}
export default Wishcard