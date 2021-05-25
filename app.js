class App {
    constructor(){}

    getState(){
        var gameStateRef = database.ref('gameState')
        gameStateRef.on("value",function(data){
            gameState = data.val();
        })
    }

    update(state){
        database.ref('/').update({
            gameState: state
        });
    }
    async start(){
        if(gameState === 0){
          player = new Player();
          var playerCountRef = await database.ref('playerCount').once("value");
          if(playerCountRef.exists()){
            playerCount = playerCountRef.val();
            player.getCount();
          }
          form = new Form()
          form.display();
         
        }
      }
    
    
      play(){
        form.hide();
        textSize(30);
        text("Thank you for using Snake & Spider BiteIfy", 120, 100)
        user.getUserInfo();
        quiz();
      }
      
    }