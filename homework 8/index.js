 const countProps = function (obj) {
     // let total = 0;
     // // const keys = Object.keys(obj);

     // for(const key in keys){
     //     total += 1;
     // }
     // return total;
     const keys = Object.keys(obj);         // 2 спосіб
     return keys.length;                      //2 cпосіб
   };

  
   /*
    * Викличи функції для перевірки працездатності твоєї реалізації.
    */
   console.log(countProps({})); // 0
  
   console.log(countProps({ name: 'Mango', age: 2 })); // 2
  
   console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); // 3
