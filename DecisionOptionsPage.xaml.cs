using DecisionAssistant.Model;
using MauiIcons.Core;
using System.Collections.ObjectModel;

namespace DecisionAssistant;

public partial class DecisionOptionsPage : ContentPage
{
    public ObservableCollection<DecisionOption> DecisionOptions { get; set; } = new ObservableCollection<DecisionOption>();
    private string decisionOptionName = string.Empty;
    private string decisionPoint = string.Empty;

    public DecisionOptionsPage(string decisionPoint)
	{
		InitializeComponent();
        _ = new MauiIcon();
        this.decisionPoint = decisionPoint;
        BindingContext = this;
        DecisionPoint.Text = decisionPoint;
        SubmitBtn.IsEnabled = IsSubmitEnabled();
        AddBtn.IsEnabled = IsAddEnabled();
    }

    private void OnAddClicked(object sender, EventArgs e)
    {
        DecisionOptions.Add(new DecisionOption(decisionOptionName));
        SubmitBtn.IsEnabled = IsSubmitEnabled();
        decisionOptionName = string.Empty;       
        SubmitEntry.Text = string.Empty;
    }

    private void OnSubmitClicked(object sender, EventArgs e)
    {
        App.Current.MainPage = new NavigationPage(new DecisionPointsPage(this.decisionPoint, DecisionOptions.ToList()));
    }

    private void OnDeleteClicked(object sender, EventArgs e)
    {
        DecisionOptions.Remove((DecisionOption)((Button)sender).BindingContext);
    }

    void OnTextChanged(object sender, TextChangedEventArgs e)
    {
        decisionOptionName = e.NewTextValue;
        AddBtn.IsEnabled = IsAddEnabled();
    }

    bool IsSubmitEnabled()
    {
        return DecisionOptions.Count > 1 ? true : false;
    }

    bool IsAddEnabled()
    {
        return string.IsNullOrEmpty(decisionOptionName) ? false : true;
    }
}