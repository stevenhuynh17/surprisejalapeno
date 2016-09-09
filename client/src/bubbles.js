var diameter = 1200,
    format = d3.format(",d"), //d3 format handles number formatting
                              //flag , is thousands group seperator
                              //flag d is decimal notation rounded to integer
    color = d3.scale.category10(); // sets the color scale

var newsBubble = d3.layout.pack()  //pack() creates a new pack layout created with default settings
    .sort(null)                  //sets sort
    .size([diameter, diameter])  //sets the size of the layout
    .padding(10);                //space between bubbles (like margin)

var svg = d3.select("body").append("svg")  //append svg to the body with height/width set to diameter
    .attr("width", diameter)
    .attr("height", diameter)
    .attr("class", "newsBubble");  

d3.json("data.json", function(error, root) {  //read the .json data file, and do things if no err
  if (error) throw error;

  var node = svg.selectAll(".node")     // .data joins data with selected elements, and readies enter() selection
      .data(newsBubble.nodes(classes(root)) // .nodes provides array of non-null ele's
      .filter(function(d) { return !d.children; })) //filter returns selection where filter returns true
    .enter().append("g")  //add g elements for the data points that didn't already get mapped
      .attr("class", "node")  //give each g element the class 'node'
      .attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });
                                                            //sets transform property to translate(num, num)

  node.append("title")  //add <title> element inside g element 
      .text(function(d) { return d.storyName + ": " + format(d.value); }); 

  node.append("circle")  //add <circle> element inside g element with radius and fill style
      .attr("r", function(d) { return d.r; })
      .style("fill", function(d) { return color(d.newsCategory); })
      .on("click", bubbleClick);

  node.append("text")  //add <text> element inside g element
      .attr("dy", ".3em")
      .style("text-anchor", "middle")
      .text(function(d) {
        return d.storyName.substring(0, d.r / 3);
      });

  function bubbleClick(d) {
    console.log(d.url);
    window.open(d.url, '_blank');
  }

});

// Returns a flattened hierarchy containing all leaf nodes under the root.
function classes(root) { //this result gets passed to .nodes in .data in the d3.json block above^^
  var classes = [];

  function recurse(name, story) {
    if (story.children) story.children.forEach(function(child) { recurse(story.newsCategory, child); });
    else classes.push(
      {newsCategory: name, storyName: story.storyName, value: story.rating, url: story.url}
    );
  }

  recurse(null, root);
  return {children: classes};
}