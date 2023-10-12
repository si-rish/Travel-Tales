import React from "react";

import './Dreamcard.css';

function ContactCard({Place,Date,deleteContact,enableEditMode,index}){

    return(

        <div className="wish-card">

                        <p className="wish-place m">💎{Place}</p>

                        <p className="wish-Date m">📅{Date}</p>
                        
                        <span className="delete-wish"

                         onClick={()=>{

                            deleteContact(Date)

                         }

                        }

                        >🗑</span>

                        <span className="edit-contact"

                         onClick={()=>{

                         enableEditMode(index)

                         }

                        }

                        >🖋</span>
   </div>

    )
}

export default ContactCard