class Form {

    constructor() {
      this.input = createInput("Name");
      this.input1 = createInput("Age");
      this.input2 = createInput("Weight");
      this.input3 = createInput("Emergancy Number (eg. 999,911,112");
      this.input4 = createInput("Phone Number (eg. +44 07683 673389");
      this.input5 = createInput("Next of Kin");
      this.input6 = createInput("Next of Kin's Phone No");
      this.input7 = createInput("Medical Conditions");
      this.input8 = createInput("Allergies");
      this.input9 = createInput("Medication");
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
        user.age = this.input1.value();
        user.weight = this.input2.value();
        user.EmergancyNumber = this.input3.value();
        user.PhoneNumber = this.input4.value();
        user.NextofKin = this.input5.value();
        user.NextofKinNumber = this.input6.value();
        user.MedicalCondition = this.input7.value();
        user.Allergies = this.input8.value();
        user.Medication = this.input9.value();
        userCount+=1;
        user.index = playerCount;
        user.update();
        user.updateCount(playerCount);
        this.greeting.html("Hello " + player.name)
        this.greeting.position(displayWidth/2-70, displayHeight/4);
      });
  
    }
  }
  
