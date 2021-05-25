class Player {
    constructor(){
        this.index = null;
        this.name = null;
    }
  
    getCount(){
      var userCountRef = database.ref('userCount');
      userCountRef.on("value",(data)=>{
        userCount = data.val();
      })
    }
  
    updateCount(count){
      database.ref('/').update({
        userCount: count
      });
    }
  
    update(){
      var userIndex = "users/users" + this.index;
      database.ref(userIndex).set({
        name:this.name,
      });
    }
  
    static getUserInfo(){
      var userInfoRef = database.ref('users');
      userInfoRef.on("value",(data)=>{
        allUsers = data.val();
      })
    }
  }
  