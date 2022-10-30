using System.Collections.Generic;
using MySql.Data.MySqlClient;
using api.Models;

namespace api.DataAccess
{
    public class DriverAccess : DataAccess
    {
        public List<Driver> GetDrivers()
        {
            using var con = new MySqlConnection(connectionString);
            con.Open();
            cmd = new MySqlCommand("SELECT * FROM driver", con);
            reader = cmd.ExecuteReader();
            List<Driver> drivers = new List<Driver>();
            while (reader.Read())
            {
                if (reader["deleted"].ToString() == "0")
                {
                    System.Console.WriteLine(reader["deleted"].ToString());
                    Driver driver = new Driver();
                    driver.Id = reader["id"].ToString();
                    driver.Name = reader["name"].ToString();
                    driver.Rating = int.Parse(reader["rating"].ToString());
                    driver.DateHired = System.DateTime.Parse(reader["date_hired"].ToString());
                    driver.Deleted = reader["deleted"].ToString() == "0" ? false : true;
                    drivers.Add(driver);
                }
            }
            return drivers;
        }

        public void SaveDriver(Driver driver)
        {
            using var con = new MySqlConnection(connectionString);
            con.Open();
            cmd = new MySqlCommand("INSERT INTO driver (id, name, rating, date_hired, deleted) VALUES (@id, @name, @rating, @date_hired, @deleted)", con);
            cmd.Parameters.AddWithValue("@id", driver.Id);
            cmd.Parameters.AddWithValue("@name", driver.Name);
            cmd.Parameters.AddWithValue("@rating", driver.Rating);
            cmd.Parameters.AddWithValue("@date_hired", driver.DateHired);
            cmd.Parameters.AddWithValue("@deleted", driver.Deleted);
            System.Console.WriteLine("\n\n I am here \n\n");
            cmd.ExecuteNonQuery();
            con.Close();
        }

        public void UpdateDriver(Driver driver)
        {
            System.Console.WriteLine(driver.ToString());
            using var con = new MySqlConnection(connectionString);
            con.Open();
            cmd = new MySqlCommand("UPDATE driver SET name = @name, rating = @rating, date_hired = @date_hired, deleted = @deleted WHERE id = @id", con);
            cmd.Parameters.AddWithValue("@id", driver.Id);
            cmd.Parameters.AddWithValue("@name", driver.Name);
            cmd.Parameters.AddWithValue("@rating", driver.Rating);
            cmd.Parameters.AddWithValue("@date_hired", driver.DateHired);
            cmd.Parameters.AddWithValue("@deleted", driver.Deleted);
            cmd.ExecuteNonQuery();
            con.Close();
        }

        public void DeleteDriver(string id)
        {
            using var con = new MySqlConnection(connectionString);
            con.Open();
            cmd = new MySqlCommand("UPDATE driver SET deleted = 1 WHERE id = @id", con);
            cmd.Parameters.AddWithValue("@id", id);
            cmd.ExecuteNonQuery();
            con.Close();
        }

    }
}