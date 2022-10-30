const createTable = (items, fields) => {
  const table = document.createElement("table");
  table.className = "table table-striped";
  table.id = "table";

  table.appendChild(createHeader(fields));

  table.appendChild(createBody(fields, items));

  return table;
};

const createHeader = (fields) => {
  const head = document.createElement("thead");

  const tr = document.createElement("tr");
  tr.id = "table-head";
  tr.className = "table-head";
  head.appendChild(tr);

  fields.forEach((field) => {
    const th = document.createElement("th");
    th.innerText = field.display;
    tr.appendChild(th);
  });

  return head;
};

const createBody = (fields, items) => {
  const body = document.createElement("tbody");

  items.forEach((item) => {
    const tr = document.createElement("tr");
    fields.forEach((field) => {
      const td = document.createElement("td");

      const input = document.createElement("input");
      input.addEventListener("change", (e) => {
        if (field.type === "checkbox") {
          item[field.name] = e.target.checked;
        } else {
          item[field.name] = e.target.value;
        }
      });
      input.type = field.type;
      input.value = item[field.name];
      input.className = "form-control";
      !item.edit && input.setAttribute("disabled", !item.edit);
      td.appendChild(input);

      td.innerText;
      tr.appendChild(td);
    });
    const td = document.createElement("td");
    const editButton = document.createElement("button");
    editButton.innerText = item.edit ? "Save" : "Edit";
    editButton.className = item.edit ? "btn btn-success" : "btn btn-primary";
    editButton.addEventListener("click", () => {
      item.edit = !item.edit;
      if (!item.edit) {
        handleEditDriver(item);
      }
      render();
    });
    td.appendChild(editButton);

    const deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    deleteButton.className = "btn btn-danger";
    deleteButton.addEventListener("click", (e) => {
      if (confirm("Are you sure you want to delete this driver?")) {
        handleDeleteDriver(item);
      }
    });
    td.appendChild(deleteButton);

    tr.appendChild(td);
    body.appendChild(tr);
  });

  return body;
};
