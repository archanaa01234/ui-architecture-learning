const loadBtn =
  document.getElementById("loadBtn");

const tableBody =
  document.getElementById("tableBody");

loadBtn.addEventListener("click", async function () {

  tableBody.innerHTML = `
    <tr>
      <td colspan="2">
        Loading...
      </td>
    </tr>
  `;

  try {

    // REAL HTTP API CALL
    const response = await fetch(
      "http://localhost:3000/documentTypes"
    );

    const documentTypes =
      await response.json();

    console.log(documentTypes);

    tableBody.innerHTML = "";

    documentTypes.forEach(function (item) {

      tableBody.innerHTML += `
        <tr>
          <td>${item.id}</td>
          <td>${item.name}</td>
        </tr>
      `;

    });

  } catch (error) {

    console.error(error);

    tableBody.innerHTML = `
      <tr>
        <td colspan="2">
          Error loading data
        </td>
      </tr>
    `;

  }

});