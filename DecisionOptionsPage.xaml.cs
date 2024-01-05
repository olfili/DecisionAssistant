using DecisionAssistant.Model;
using System.Collections.ObjectModel;

namespace DecisionAssistant;

public partial class DecisionOptionsPage : ContentPage
{
    public ObservableCollection<DecisionOption> DecisionOptions { get; set; } = new ObservableCollection<DecisionOption>();
    private string decisionOptionName = string.Empty;

    public DecisionOptionsPage(string decisionPoint)
	{
		InitializeComponent();
        BindingContext = this;
        DecisionPoint.Text = decisionPoint;
        SubmitBtn.IsVisible = IsSubmitVisible();
    }

    private void OnAddClicked(object sender, EventArgs e)
    {
        DecisionOptions.Add(new DecisionOption(decisionOptionName));
        decisionOptionName = string.Empty;
        SubmitEntry.Text = string.Empty;
        SubmitBtn.IsVisible = IsSubmitVisible();
    }

    private void OnSubmitClicked(object sender, EventArgs e)
    {
       // App.Current.MainPage = new NavigationPage(new DecisionPointsAssessments(DecisionOptions.ToList()));
    }

    void OnTextChanged(object sender, TextChangedEventArgs e)
    {
        decisionOptionName = e.NewTextValue;
    }

    bool IsSubmitVisible()
    {
        return DecisionOptions.Count > 1 ? true : false;
    }
}