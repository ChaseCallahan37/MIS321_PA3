const getGuid = () => {
  const rndNum = Math.random() * (1000000 - 0);
  return Math.trunc(rndNum).toString();
};

const formatDriver = (driver) => {
  return {
    id: driver.id,
    name: driver.name,
    rating: parseInt(driver.rating),
    dateHired: driver.dateHired,
    deleted: driver.deleted,
  };
};

const apiUrl = "https://localhost:7247/api";

const getDrivers = async () => {
  const response = await fetch(`${apiUrl}/driver`, {
    Method: "GET",
    Headers: {
      Accept: "application.json",
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  return data.map((d) => Driver.deserialize(d));
};

const createDriver = async (driver) => {
  driver.id = getGuid();
  driver.deleted = false;
  driver.dateHired = getTime();

  const data = formatDriver(driver);
  try {
    const response = await fetch(`${apiUrl}/driver`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  } catch (er) {
    await er;
    console.log(er);
  }
};

const updateDriver = async (driver) => {
  const data = formatDriver(driver);
  try {
    const response = await fetch(`${apiUrl}/driver`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  } catch (er) {
    await er;
    console.log(er);
  }
};

const deleteDriver = async (driver) => {
  const data = formatDriver(driver);
  try {
    const response = await fetch(`${apiUrl}/driver/${driver.id}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
  } catch (er) {
    await er;
    console.log(er);
  }
};
