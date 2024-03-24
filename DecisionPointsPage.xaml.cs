using DecisionAssistant.Model;
using MauiIcons.Core;
using System.Collections.ObjectModel;

namespace DecisionAssistant;

public partial class DecisionPointsPage : ContentPage
{
    public ObservableCollection<DecisionPoint> DecisionPoints { get; set; } = new ObservableCollection<DecisionPoint>();
    public List<DecisionOption> decisionOptions { get; set; } = new List<DecisionOption>();
    private string decisionPointName = string.Empty;
    private string decisionPoint = string.Empty;

    public DecisionPointsPage(string decisionPoint, List<DecisionOption> decisionOptions)
	{
		InitializeComponent();
        _ = new MauiIcon();
        this.decisionPoint = decisionPoint;
        this.decisionOptions = decisionOptions;
        BindingContext = this;
        DecisionPoint.Text = decisionPoint;
        SubmitBtn.IsEnabled = IsSubmitEnabled();
        AddBtn.IsEnabled = IsAddEnabled();
    }

    private void OnAddClicked(object sender, EventArgs e)
    {
        DecisionPoints.Add(new DecisionPoint(decisionPointName, 0));
        SubmitBtn.IsEnabled = IsSubmitEnabled();
        decisionPointName = string.Empty;
        SubmitEntry.Text = string.Empty;
    }

    private void OnSubmitClicked(object sender, EventArgs e)
    {
       App.Current.MainPage = new NavigationPage(new DecisionPointsAssessments(this.decisionPoint ,this.decisionOptions, DecisionPoints.ToList()));
    }

    private void OnDeleteClicked(object sender, EventArgs e)
    {
        DecisionPoints.Remove((DecisionPoint)((Button)sender).BindingContext);
    }

    void OnTextChanged(object sender, TextChangedEventArgs e)
    {
        decisionPointName = e.NewTextValue;
        AddBtn.IsEnabled = IsAddEnabled();
    }

    bool IsSubmitEnabled()
    {
        return DecisionPoints.Count > 1 ? true : false;
    }

    bool IsAddEnabled()
    {
        return string.IsNullOrEmpty(decisionPointName) ? false : true;
    }
}