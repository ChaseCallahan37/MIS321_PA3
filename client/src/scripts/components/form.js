// fields = [
//   {
//     name: "field name",
//     type: "text",
//   },
// ];

const createForm = (fields, cb) => {
  const form = document.createElement("form");

  const header = document.createElement("h2");
  header.innerHTML = "Create New Driver";
  form.appendChild(header);

  fields.forEach((field) => {
    const div = document.createElement("div");
    div.className = "md-3";

    const label = document.createElement("label");
    label.className = "form-label";
    label.innerText = field.display;
    div.appendChild(label);

    const input = document.createElement("input");
    input.className = "form-control";
    input.type = field.type;
    input.name = field.name;
    div.appendChild(input);

    form.appendChild(div);
  });

  const button = document.createElement("button");
  button.innerText = "Save";
  form.appendChild(button);

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const newObj = {};
    const { elements } = e.target;
    fields.forEach((field) => {
      const el = elements[field.name];
      newObj[field.name] = el.value;
    });
    cb(newObj);
  });

  return form;
};
