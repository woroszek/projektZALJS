const incomeSum = document.getElementById("incomeSum");
const spendingSum = document.getElementById("spendingSum");
const balance = document.getElementById("balanceValue");
const balanceText = document.getElementById("balanceTitle");

function balanceCheck() {
  balance.innerHTML =
    parseInt(incomeSum.innerHTML) - parseInt(spendingSum.innerHTML);
  if (balance.innerHTML > 0) {
    balanceText.innerHTML = "Możesz jeszcze wydać:";
  } else if (balance.innerHTML < 0) {
    balanceText.innerHTML = "Bilans jest ujemny. Jesteś na minusie:";
  } else {
    balanceText.innerHTML = "Bilans wynosi:";
  }
}

document.getElementById("AddValue").addEventListener("click", function () {
  const incomeName = document.getElementById("incomeName").value;
  let incomeValue = document.getElementById("incomeValue").value;
  const newParagraph = document.createElement("li");
  newParagraph.textContent = `${incomeName}: ${incomeValue} PLN`;
  const editButton = document.createElement("button");
  editButton.textContent = "Edytuj";
  editButton.addEventListener("click", function () {
    const modal = document.getElementById("myModal");
    const span = document.getElementsByClassName("close")[0];
    const modalBtn = document.getElementById("modalBtn");
    modal.style.display = "block";
    modalBtn.onclick = function () {
      const modalName = document.getElementById("modalName").value;
      const modalValue = document.getElementById("modalValue").value;
      if (modalName === "" && modalValue === "") {
      } else if (modalName === "") {
        newParagraph.innerHTML = `${incomeName}: ${modalValue} PLN:`;
      } else if (modalValue === "") {
        newParagraph.innerHTML = `${modalName}: ${incomeValue} PLN:`;
      } else {
        newParagraph.innerHTML = `${modalName}: ${modalValue} PLN:`;
      }
      if (modalValue > 0) {
        const difference = parseInt(modalValue) - parseInt(incomeValue);
        incomeSum.innerHTML = parseInt(incomeSum.innerHTML) + difference;
        incomeValue = modalValue;
      }
      balanceCheck();
      newParagraph.appendChild(editButton);
      newParagraph.appendChild(deleteButton);
    };
    span.onclick = function () {
      modal.style.display = "none";
    };
  });
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Usuń";
  deleteButton.addEventListener("click", function () {
    incomeList.removeChild(newParagraph);
    incomeSum.innerHTML = parseInt(incomeSum.innerHTML) - parseInt(incomeValue);
    balanceCheck();
  });

  newParagraph.appendChild(editButton);
  newParagraph.appendChild(deleteButton);

  if (incomeValue > 0) {
    const incomeList = document.getElementById("incomeList");
    incomeList.appendChild(newParagraph);
    incomeSum.innerHTML = parseInt(incomeSum.innerHTML) + parseInt(incomeValue);
  }
  balanceCheck();
});

document.getElementById("AddSpending").addEventListener("click", function () {
  const spendingName = document.getElementById("spendingName").value;
  let spendingValue = document.getElementById("spendingValue").value;
  const newParagraph = document.createElement("li");
  newParagraph.textContent = `${spendingName}: ${spendingValue} PLN`;
  const editButton = document.createElement("button");
  editButton.textContent = "Edytuj";
  editButton.addEventListener("click", function () {
    const modal = document.getElementById("myModal");
    const span = document.getElementsByClassName("close")[0];
    const modalBtn = document.getElementById("modalBtn");
    modal.style.display = "block";
    modalBtn.onclick = function () {
      const modalName = document.getElementById("modalName").value;
      const modalValue = document.getElementById("modalValue").value;
      if (modalName === "" && modalValue === "") {
      } else if (modalName === "") {
        newParagraph.innerHTML = `${spendingName}: ${modalValue} PLN:`;
      } else if (modalValue === "") {
        newParagraph.innerHTML = `${modalName}: ${spendingValue} PLN:`;
      } else {
        newParagraph.innerHTML = `${modalName}: ${modalValue} PLN:`;
      }
      if (modalValue > 0) {
        const difference = parseInt(modalValue) - parseInt(spendingValue);
        spendingSum.innerHTML = parseInt(spendingSum.innerHTML) + difference;
        spendingValue = modalValue;
      }
      balanceCheck();
      newParagraph.appendChild(editButton);
      newParagraph.appendChild(deleteButton);
    };
    span.onclick = function () {
      modal.style.display = "none";
    };
  });
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Usuń";
  deleteButton.addEventListener("click", function () {
    spendingList.removeChild(newParagraph);
    spendingSum.innerHTML =
      parseInt(spendingSum.innerHTML) - parseInt(spendingValue);
    balanceCheck();
  });

  newParagraph.appendChild(editButton);
  newParagraph.appendChild(deleteButton);

  if (spendingValue > 0) {
    const spendingList = document.getElementById("spendingList");
    spendingList.appendChild(newParagraph);
    spendingSum.innerHTML =
      parseInt(spendingSum.innerHTML) + parseInt(spendingValue);
  }
  balanceCheck();
});
