using Newtonsoft.Json;

namespace ReactMessenger.Models
{
    public class Comment
    {
        [JsonProperty(PropertyName = "author")]
        public string Author { get; set; }

        [JsonProperty(PropertyName = "text")]
        public string Text { get; set; }

        [JsonProperty(PropertyName = "image")]
        public string Image { get; set; }
    }
}
