class Box {
    constructor(x,y) {
      var options = {
          isStatic: true
      }

      this.width = 200;
      this.height = 100;
      this.thickness = 20;

      this.bottomBody = Bodies.rectangle(x,y,this.width,this.thickness,options);
      World.add(world, this.bottomBody);
      
      this.rightBody = Bodies.rectangle(x+100,y-50,this.thickness,this.height,options);
      World.add(world, this.rightBody);

      this.leftBody = Bodies.rectangle(x-100,y-50,this.thickness,this.height,options);
      World.add(world, this.leftBody);
    }
    display(){
      var pos1 =this.bottomBody.position;
      var pos2 =this.rightBody.position;
      var pos3 =this.leftBody.position;
      
      rectMode(CENTER);
      
      fill("brown");
      rect(pos1.x, pos1.y, this.width, this.thickness);
      rect(pos2.x, pos2.y, this.thickness, this.height);
      rect(pos3.x, pos3.y, this.thickness, this.height);
    }
  };
