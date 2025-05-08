import React from "react";
import './tabledata.css'
const TableData = () =>{

   
    const mainHeader = ['Sr.No', ...Array.from({length:13},(_,i)=>`Category ${i  + 1}`)]
    const mainHeader2 = ['Item', ...Array.from({length:13},(_,i)=>`Category ${i  + 1}`)]
    const subHeader = ['1','Last Rate','Pack Size','No.of Size','Quoted Rate','Discount','Net Price','Total Value','Last Rate','Make','Pack Size','No. Of Packs','Quoted Rates',...Array.from({lenght:13},(_,i)=>`Sub ${i + 1}`)]
    const data = Array.from({length:20},(_,rowIndex)=>{
        return [
            `user ${rowIndex + 1}`,
            `ID - ${1000 + rowIndex}`,
            ...Array.from({length:13},(_,colId)=>`Data ${rowIndex + 1} - ${colId + 1}`)
        ]
    })
  
    return(
        <div className="table-container">
            <table className="scroll-table">
                <thead>
                    <tr>
                        {mainHeader.map((header,i) => (<th key={`main -${i}`}>{header}</th>))}
                    </tr>
                  
                    <tr>
                        {subHeader.map((header,i) => (<th key={`sub -${i}`}>{header}</th>))}
                    </tr> 
                </thead>
                <tbody>
                    {data.map((row,i)=>{
                        <tr key={`row - ${i}`}>
                            {row.map((cell,j)=>{
                             
                                <td key={`cell - ${i} - ${j}`}>{cell}</td>
                            })}
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    )

};

export default TableData;