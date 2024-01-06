using DecisionAssistant.Model;
using System.Collections.ObjectModel;

namespace DecisionAssistant;

public partial class DecisionPointsPage : ContentPage
{
    public ObservableCollection<DecisionPoint> DecisionPoints { get; set; } = new ObservableCollection<DecisionPoint>();
    private string decisionPointName = string.Empty;
    
	public DecisionPointsPage(string decisionPoint, List<DecisionOption> decisionOptions)
	{
		InitializeComponent();
        BindingContext = this;
        DecisionPoint.Text = decisionPoint;
    }

    private void OnAddClicked(object sender, EventArgs e)
    {
        DecisionPoints.Add(new DecisionPoint(decisionPointName, 0));
    }

    private void OnSubmitClicked(object sender, EventArgs e)
    {
       // App.Current.MainPage = new NavigationPage(new DecisionPointsAssessments(DecisionPoints.ToList()));
    }

    void OnTextChanged(object sender, TextChangedEventArgs e)
    {
        decisionPointName = e.NewTextValue;
    }
}