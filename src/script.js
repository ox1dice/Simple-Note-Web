document.addEventListener("DOMContentLoaded", () => {
  let cardTitle = document.querySelector("#title");
  let addTitle = document.querySelector("#add-title");
  let noteContainer = document.querySelector(".note-content.row");
  let date = new Date();

  function getCurrentDate() {
    months = new Array("January", "February", "March", "April", "May", "June", "July", 
                       "August", "September", "October", "November", "December");
    curDate = date.getDate();
    curMonth = date.getMonth();
    curYear = date.getFullYear();

    return `${months[curMonth]} ${curDate}, ${curYear}`;
  }

  addTitle.addEventListener("click", () => {
    event.preventDefault();
    if(cardTitle.value){
      let notes = `
        <div class="note-card col">
          <h3 class="card-title">${cardTitle.value}</h3>
          <div class="card-nested-container col">
          </div>
          <div class="input-wrap">
            <textarea id="desc" cols="40" rows="4" required="required"></textarea>
            <span>Description</span>
          </div>
          <div class="button-wrap row">
            <button id="add-desc"><i class="fa-solid fa-plus"></i>Add a New Note</button>
          </div>
          <div class="card-date">
            <p class="date">${getCurrentDate()}</p>
          </div>
        </div>
      `;
      noteContainer.insertAdjacentHTML("beforeend", notes);
      cardTitle.value = ""

      let addDesc = document.querySelectorAll("#add-desc");
      addDesc.forEach(button => {
        button.addEventListener("click", (event) => {
          event.preventDefault();
          let noteCard = event.target.closest(".note-card");
          let cardDesc = noteCard.querySelector("#desc");
          let noteNestedContainer = noteCard.querySelector(".card-nested-container.col");
          if (cardDesc.value) {
            let nestedNotes = `
              <div class="card-nested">
                <p class="card-desc">${cardDesc.value}</p>
              </div>
            `;
            noteNestedContainer.insertAdjacentHTML("beforeend", nestedNotes);
            cardDesc.value = "";
          }
        });
      });
    }
  });
});