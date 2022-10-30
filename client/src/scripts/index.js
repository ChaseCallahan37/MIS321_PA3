let drivers = [];
const fields = [
  { name: "name", type: "text", display: "Name" },
  { name: "rating", type: "number", display: "Rating" },
];
const app = document.getElementById("root");
const tableContainer = document.getElementById("table-container");

const handleOnLoad = async () => {
  tableContainer.innerHTML = "";
  app.appendChild(tableContainer);
  drivers = await getDrivers();
  tableContainer.appendChild(
    createTable(drivers, [
      ...fields,
      { name: "dateHired", type: "datetime-local", display: "Date Hired" },
    ])
  );

  tableContainer.appendChild(createForm(fields, handleAddDriver));
};

const render = () => {
  tableContainer.innerHTML = "";
  tableContainer.appendChild(
    createTable(drivers, [
      ...fields,
      { name: "dateHired", type: "datetime-local", display: "Date Hired" },
    ])
  );

  tableContainer.appendChild(createForm(fields, handleAddDriver));
};

const handleAddDriver = async (newDriver) => {
  await createDriver(newDriver);
  drivers.push(newDriver);
  render();
};

const handleEditDriver = async (driver) => {
  await updateDriver(driver);
  drivers.map((d) => {
    if (d.id !== driver.id) {
      return d;
    } else {
      if (!driver.deleted) {
        return driver;
      }
    }
  });
  render();
};

const handleDeleteDriver = async (driver) => {
  await deleteDriver(driver);
  drivers = drivers.filter((d) => d.id !== driver.id);
  render();
};
