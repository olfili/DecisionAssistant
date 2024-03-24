using DecisionAssistant.Model;
using System.Collections.ObjectModel;
using System.Data;

namespace DecisionAssistant;

public partial class DecisionPointsAssessments : ContentPage
{
    public ObservableCollection<DecisionPointAssessment> Assessments { get; set; } = new ObservableCollection<DecisionPointAssessment>();
    public List<DecisionOption> decisionOptions = new List<DecisionOption>();
    private string decisionPoint = string.Empty;

    public DecisionPointsAssessments(string decisionPoint, List<DecisionOption> decisionOptions, List<DecisionPoint> decisionPoints)
	{
		InitializeComponent();
        BindingContext = this;
        this.decisionPoint = decisionPoint;
        DecisionPoint.Text = decisionPoint;
        this.decisionOptions = decisionOptions;

        foreach (var point in this.AssemblePoints(decisionOptions, decisionPoints))
        {
            this.Assessments.Add(point);
        }
    }

    private List<DecisionPointAssessment> AssemblePoints(List<DecisionOption> decisionOptions, List<DecisionPoint> decisionPoints)
    {
        var result = new List<DecisionPointAssessment>();
        foreach (var option in decisionOptions)
        {
            result.Add(new DecisionPointAssessment(decisionPoints, option));
        }

        return result;
    }
}