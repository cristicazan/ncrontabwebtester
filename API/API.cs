using System;
using System.IO;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using System.Linq;

namespace API
{
    public static class API
    {
        [FunctionName("API")]
        public static async Task<IActionResult> Run(
            [HttpTrigger(AuthorizationLevel.Anonymous, "post", Route = "getnextoccurrences")] HttpRequest req,
            ILogger log)
        {
            try
            {
                string serializedBody = await new StreamReader(req.Body).ReadToEndAsync();
                var body = JsonConvert.DeserializeObject<Body>(serializedBody);

                var options = new NCrontab.CrontabSchedule.ParseOptions();
                options.IncludingSeconds = body.IsSixPart;
                var cronSchedule = NCrontab.CrontabSchedule.Parse(body.Expression, options);
                var occurrences = cronSchedule.GetNextOccurrences(body.StartDate, body.EndDate).ToArray();
                return new OkObjectResult(JsonConvert.SerializeObject(occurrences));
            }
            catch (Exception exception)
            {
                return new BadRequestObjectResult(JsonConvert.SerializeObject(exception.Message));
            }
        }

        public class Body
        {
            public string Expression { get; set; }
            public DateTime StartDate { get; set; }
            public DateTime EndDate { get; set; }
            public bool IsSixPart { get; set; }
        }
    }
}
