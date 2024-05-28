const userColor = (count, color) => {
    if(count==10 || count ==20 || count ==30){
        return `bg-${color}-950`
    }
    const baseCount = count % 10 ;  //FOR EX 2 COUNT 2/10 NOT DIVISIBLE SO 2 IS REMINDER
    return `bg-${color}-${100*baseCount}`;
  };

  export default userColor;