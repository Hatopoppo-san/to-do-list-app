
function newItem(){

  //1, Adding a new item to the list of items
  let list = $('#list');
  let li = $('<li></li>');
  list.append(li);

  let inputValue = $('#input').val();

  if(inputValue === ''){
    alert("You must write something!");
  }else{
    li.append(inputValue);
  }
  //1 seems to work properly.
  //2, crossing out an item from the list of items:
  function crossOut(){
    li.toggleClass("strike");
  }

  li.on("dblclick", function() {
    return crossOut()
  });
  // done!

  //3,(i). Adding the delete button 'X':
  /*I wasn't sure if I can assign  li > crossOutButton, so
  I added class 'crossOutButton' and modify css to .crossOutButton */
    let crossOutButton = $("<button></button>")
    crossOutButton.addClass('crossOutButton')
    crossOutButton.append(document.createTextNode('X'))
    li.append(crossOutButton);

  //3(ii) adding class delete from the css
    crossOutButton.on('click', function(){
      li.addClass('delete')
    });
  //done!:D

  //4. Reordering the items
  list.sortable();
}
