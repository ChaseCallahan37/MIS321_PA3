namespace api.Models
{
    public class Driver
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public int Rating { get; set; }
        public DateTime DateHired { get; set; }
        public bool Deleted { get; set; }

        public string ToString()
        {
            return "Driver: " + Name + " Rating: " + Rating + " Date Hired: " + DateHired + " Deleted: " + Deleted;
        }
    }

}