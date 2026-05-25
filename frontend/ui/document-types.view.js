class DocumentTypesView {

    constructor() {
  
      this.loadBtn =
        document.getElementById("loadBtn");
  
      this.tableBody =
        document.getElementById("tableBody");
  
      this.bindEvents();
  
    }
  
    bindEvents() {
  
      this.loadBtn.addEventListener(
        "click",
        () => this.loadDocumentTypes()
      );
  
    }
  
    async loadDocumentTypes() {
  
      this.showLoading();
  
      try {
  
        const response = await fetch(
          "http://localhost:3000/documentTypes"
        );
  
        const documentTypes =
          await response.json();
  
        console.log(documentTypes);
  
        this.renderTable(documentTypes);
  
      } catch (error) {
  
        console.error(error);
  
        this.showError();
  
      }
  
    }
  
    renderTable(documentTypes) {
  
      this.tableBody.innerHTML = "";
  
      documentTypes.forEach((item) => {
  
        this.tableBody.innerHTML += `
          <tr>
            <td>${item.id}</td>
            <td>${item.name}</td>
          </tr>
        `;
  
      });
  
    }
  
    showLoading() {
  
      this.tableBody.innerHTML = `
        <tr>
          <td colspan="2">
            Loading...
          </td>
        </tr>
      `;
  
    }
  
    showError() {
  
      this.tableBody.innerHTML = `
        <tr>
          <td colspan="2">
            Error loading data
          </td>
        </tr>
      `;
  
    }
  
  }