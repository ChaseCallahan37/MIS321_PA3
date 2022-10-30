using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using api.Models;
using api.DataAccess;

namespace api.Controllers
{
    [Route("api/driver")]
    [ApiController]
    public class DriverController : ControllerBase
    {
        public DriverAccess DriverAccess;

        public DriverController()
        {
            DriverAccess = new DriverAccess();
        }
        // GET: api/Driver
        [HttpGet]
        public IEnumerable<Driver> Get()
        {
            return DriverAccess.GetDrivers();
        }

        // GET: api/Driver/5
        [HttpGet("{id}", Name = "Get")]
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Driver
        [HttpPost]
        public void Post([FromBody] Driver value)
        {
            DriverAccess.SaveDriver(value);
        }

        // PUT: api/Driver
        [HttpPut]
        public void Put([FromBody] Driver value)
        {
            DriverAccess.UpdateDriver(value);
        }

        // DELETE: api/Driver/5
        [HttpDelete("{id}")]
        public void Delete(string id)
        {
            DriverAccess.DeleteDriver(id);
        }

    }
}
