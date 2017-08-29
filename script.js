

// create a network
var container = document.getElementById('mynetwork');
var data = {
  nodes: nodes,
  edges: edges
};
var options = {
  edges: {
    arrows: 'to'
  }
};
var network = new vis.Network(container, data, options);
