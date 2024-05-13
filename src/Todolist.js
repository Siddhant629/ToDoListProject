    import React, { useState } from 'react'
    import './App.css'

    const Todolist = () => {
        const [activity, setActivity]=useState("");
        const [listdata, setlistData]=useState([]);
        function addActivity(){
            setlistData((listdata)=>{
                const updatedlist=[...listdata, activity]
                console.log(updatedlist)
                setActivity("");
            
                return updatedlist

            })        
        }
        function removeActivity(i){
            const updatedlistData = listdata.filter((elem,id)=>{
                return i!=id;
            })
            setlistData(updatedlistData);

        }
        function removeAll(){
            setlistData([])
        }
    return (
        <>
        <div className='container'>
            <div className='heading'>TODO List App</div>
            <input className='inp' type='text' placeholder='Add Activity Here' value={activity} onChange={(e)=>setActivity(e.target.value)}></input>
            <button id='btadd' onClick={addActivity}>Add</button>
            <p id='lis'>List of Tasks </p>
            {listdata!=[] && listdata.map((data,i)=>{
                return (
                    <>
                    <p key={i}>
                        <div className='listdata'>{data}</div>
                       
                        <button className='rembt'  onClick={()=>removeActivity(i)}>Remove</button>
                        
                    
                    </p>
                
                    </>
                )
            })}
    {listdata.length>=1 && <button className='button' onClick={removeAll}>Delete All Task</button>}
        
        

        </div>
        </>
    )
    }

    export default Todolist