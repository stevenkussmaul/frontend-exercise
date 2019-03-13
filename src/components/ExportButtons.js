import IconButton from "./IconButton";
import "styles/ExportButtons.css";

/**
 * Contains buttons to export data in multiple formats
 */
export default class ExportButtons {
  /**
   * Create a ExportButtons component
   */
  constructor() {
    this._container = document.createElement("div");
  }

  /**
   * Get the component's HTMLElement
   * @return {HTMLElement}
   */
  getElement() {
    this._container.className = "export-buttons";

    const title = document.createElement("h2");
    title.className = "export-buttons-title";
    title.innerText = "Export";

    const pdfButton = new IconButton("file-pdf");
    const excelButton = new IconButton("file-excel");
    const csvButton = new IconButton("file-csv");

    const buttonContainer = document.createElement("div");
    buttonContainer.className = "export-buttons-container";
    buttonContainer.appendChild(pdfButton.getElement());
    buttonContainer.appendChild(excelButton.getElement());
    buttonContainer.appendChild(csvButton.getElement());

    this._container.append(title);
    this._container.append(buttonContainer);

    return this._container;
  }
}
