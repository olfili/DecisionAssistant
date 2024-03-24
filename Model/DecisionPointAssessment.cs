namespace DecisionAssistant.Model
{
    public class DecisionPointAssessment
    {
        public DecisionPointAssessment(List<DecisionPoint> decisionPoints, DecisionOption decisionOption)
        {
            this.decisionPoints = decisionPoints;
            this.decisionOption = decisionOption;
        }

        public List<DecisionPoint> decisionPoints { get; set; }
        public DecisionOption decisionOption { get; set; }
    }
}
