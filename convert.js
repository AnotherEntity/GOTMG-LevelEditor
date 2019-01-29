function dictionary(pixel){
  if(pixel){
    pixel = pixel.substring(4,pixel.length - 1)
    pixel = pixel.split(',')
    pixel = {ground:Number(pixel[0]), wall:Number(pixel[1]), roof:Number(pixel[2])}
    //Some basic filters
    pixel.ground = Math.ceil(pixel.ground/10)
    pixel.wall = Math.ceil(pixel.wall/10)
    pixel.roof = Math.ceil(pixel.roof/10)

    //End
    return pixel
  }else{
    return({ground:0,wall:0,roof:0})
  }
}

var level = []
function convert(){
  level = []
  var grid = document.getElementById("pixel-canvas")
  for(y=0;y<grid.children.length;y++){
    level.push([])
    for(x=0;x<grid.children[y].children.length;x++){
      var tile = dictionary(grid.children[y].children[x].style.backgroundColor)
      level[y].push(tile)
    }
  }
  document.getElementById("output-json").innerHTML = JSON.stringify(level)
}
