// types of action
const Types = {
    CREATE_ITEM: "CREATE_ITEM",
    DELETE_ITEM: "DELETE_ITEM"
  };
  // actions
  var month;
  var day;
  var max;
  var min;

  const createItem = task => ({
    type: Types.CREATE_ITEM,
    payload: month,day,max,min
  });
  
  const deleteItem = id => ({
    type: Types.DELETE_ITEM,
    payload: id
  });
  
  export default {
    createItem,
    deleteItem,
    Types
  };