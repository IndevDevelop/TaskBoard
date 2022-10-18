import React from "react";

function useLocalStorage(itemName, initialValue){
    const [err, setErr] = React.useState(false);
    const [loading, setLoading] = React.useState(true);
    const [item, setItem] = React.useState(initialValue);
  
    React.useEffect(() =>{
      setTimeout(()=>{
        try {
          const localStorageItem = localStorage.getItem(itemName); 
          let parseItem;
          if(!localStorageItem){
            localStorage.setItem(itemName,initialValue);
            parseItem = [];
          } else {
            parseItem = JSON.parse(localStorageItem);
          }
  
          setItem(parseItem);
          setLoading(false);
        } catch (error) {
          setErr(error);
        }
      },1000)
    });
  
    const saveItem = (newItem) =>{
      try {
        localStorage.setItem(itemName, JSON.stringify(newItem));
        setItem(newItem);
      } catch (error) {
        setErr(err);
      }
    }
  
    return {
      item,
      saveItem,
      loading,
      err
    }
  }

  export {useLocalStorage};