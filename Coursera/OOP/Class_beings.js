class Creatures{
    moving(){
        console.log("With foot or with wings.")
    }
}

class HumanBeings extends Creatures{
    moving(){
        super.moving()
        console.log("They walk on foot")
    }

}

class Eagle extends Creatures{
    moving(){
        console.log("Barely Flapping!")
    }
}
class Fish extends Creatures{
    moving(){
        console.log("Diving!")
    }
}

var hiHumanBeings = new HumanBeings();
var hiEagle = new Eagle();
var hiFish = new Fish();

hiHumanBeings.moving();
hiEagle.moving();
hiFish.moving();