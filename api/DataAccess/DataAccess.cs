using MySql.Data.MySqlClient;
using api.Models;


namespace api.DataAccess
{
    public abstract class DataAccess
    {
        public string connectionString;
        public MySqlCommand cmd;
        public MySqlDataReader reader;
        public DataAccess()
        {
            this.connectionString = ConnectionString.GetConnectionString();
        }


    }
}