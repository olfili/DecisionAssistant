namespace DecisionAssistant.Model
{
    public class DecisionPoint
    {
        public DecisionPoint(string Name, int Score)
        {
            this.Name = Name;
            this.Score = Score;
        }

        public string Name { get; set; }
        public int Score { get; set; }
    }
}
