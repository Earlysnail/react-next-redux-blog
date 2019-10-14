const maxBrange = 80;
const maxBox = 60;
var count = 0;
var road = 0;
//消耗最少

function abc() {
    var leftBrange = maxBrange;
    var leftBox = maxBox;
    while(leftBrange > leftBox){
        road++;
        count++;
        leftBrange--;
        leftBox--;
    }
    if(leftBrange <= leftBox){
        return count;
    }
}
