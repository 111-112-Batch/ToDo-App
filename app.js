function addTask(){
    let userInput = document.getElementById("txtUserInput").value;
    document.getElementById("todoList").innerHTML+= `
    <div class="card">
  <div class="card-header">
    Featured
  </div>
  <div class="card-body">
    <h5 class="card-title">${userInput}</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
    `;
}