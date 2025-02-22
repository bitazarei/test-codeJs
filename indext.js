// Create Element

  // Create element:
var para = document.createElement('p');
para.innerHTML = 'this is paragraph.';
  // Append to body:
document.body.appendChild(para);

// Create Event

/*
// Create a new MouseEvent object for a "mouseover" event
const mouseOverEvent = new MouseEvent("mouseover", {
  // Indicates that the event should bubble up through the DOM
  bubbles: true,
  
  // Indicates that the event can be canceled (e.g., preventDefault() can be called)
  cancelable: true,
  
  // Specifies the window in which the event is being created
  view: window,
  
  // Sets the horizontal coordinate of the mouse pointer relative to the viewport
  clientX: 0,
  
  // Sets the vertical coordinate of the mouse pointer relative to the viewport
  clientY: 0,
  
  // Indicates which mouse button was pressed (0 for the primary button, usually left)
  button: 0
});
 */

function myFunction(event) {
  const ev = document.createEvent("MouseEvent");
  ev.initMouseEvent("mouseover", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
  // "initMouseEvent works"
  document.getElementById("myDiv").dispatchEvent(ev); 
}

// Select the buttons using their IDs
const triggerButton = document.getElementById('triggerButton');
const targetButton = document.getElementById('targetButton');

// Add an event listener to the trigger button
triggerButton.addEventListener('click', function() {
    // Create a click event
    const clickEvent = document.createEvent('MouseEvents');
    clickEvent.initEvent('click', true, true); // Initialize the event

    // Dispatch the click event on the target button
    targetButton.dispatchEvent(clickEvent);
});

// Add an event listener for the target button to respond to the click
targetButton.addEventListener('click', function() {
    alert('Target Button was clicked!');
});
