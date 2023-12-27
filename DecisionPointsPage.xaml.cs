namespace DecisionAssistant;

public partial class DecisionPointsPage : ContentPage
{
	public DecisionPointsPage(string decisionPoint)
	{
		InitializeComponent();
        DecisionPoint.Text = decisionPoint;
    }
}