class Form {

    constructor() {
      this.input = createInput("Name");
      this.input1 = createInput("Emergancy Number (eg. 999,911,112");
      this.input2 = createInput("Emergancy Contact (eg. Dad - +44 07683 673389");
      this.button = createButton('Login');
      this.greeting = createElement('h2');
    }
    hide(){
      this.greeting.hide();
      this.button.hide();
      this.input.hide();
    }
  
    display(){
      var title = createElement('h2')
      title.html("Snake & Spider BitIfy");
      title.position(displayWidth/2-50, 0);
  
      this.input.position(displayWidth/2-40, displayHeight/2-80);
      this.button.position(displayWidth/2+30, displayHeight/2);
  
      this.button.mousePressed(()=>{
        this.input.hide();
        this.button.hide();
        user.name = this.input.value();
        userCount+=1;
        user.index = playerCount;
        user.update();
        user.updateCount(playerCount);
        this.greeting.html("Hello " + player.name)
        this.greeting.position(displayWidth/2-70, displayHeight/4);
      });
  
    }
  }
  