import React from 'react';
import ResourceList from './ResourceList';

const ResourceContainer = ({data, handleDeleteResource, handleUpdateResource}) => {
  return (
    <>
    <br/>
    <h2>My Resources </h2>
    <br />
    <ResourceList
    data={data}
    handleDeleteResource={handleDeleteResource}
    handleUpdateResource={handleUpdateResource}
    />
      
    </>
  )
}

export default ResourceContainer;
