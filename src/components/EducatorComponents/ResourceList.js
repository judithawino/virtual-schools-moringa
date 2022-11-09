import React, { useState } from 'react';
import ResourceCard from './ResourceCard';

const ResourceList = ({data, handleDeleteResource, handleUpdateResource}) => {
    const [dataIndex, setDataIndex] = useState(0)

    const resourcelist =[...data]
    .filter((data) =>{
        return data.user.username.toLowerCase();
    })
    .slice(dataIndex, dataIndex +4)

    .map((data) =>
    <ResourceCard
    key={data.id}
    data={data}
    handleDeleteResource={handleDeleteResource}
    handleUpdateResource={handleUpdateResource}
    />
    )

    function handleClickMore(){
        setDataIndex((dataIndex) => (dataIndex + 4) % data.length); 
    }

  return (
      <> 
        <div className='res-list'>
         {resourcelist}
        </div>
        <br/>
        <div className='next-cont'>
            <button className='next-btn' onClick={handleClickMore}> Next </button>
        </div>
      </>
  
    

  )
}

export default ResourceList;
