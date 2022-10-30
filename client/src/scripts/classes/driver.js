const getTime = () => {
  const now = new Date();
  const time = now.toISOString().toString();
  return time;
};

class Driver {
  constructor() {
    this.edit = false;
    this.dateHired = getTime();
  }
  static deserialize(data) {
    const driver = new Driver();
    driver.id = data.id;
    driver.name = data.name;
    driver.rating = data.rating;
    driver.dateHired = data.dateHired;
    driver.deleted = data.deleted;
    return driver;
  }
}
