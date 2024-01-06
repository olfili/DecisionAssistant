using DecisionAssistant.Model;
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
        this.decisionPoint = decisionPoint;
        BindingContext = this;
        DecisionPoint.Text = decisionPoint;
        SubmitBtn.IsVisible = IsSubmitVisible();
        AddBtn.IsVisible= IsAddVisible();
    }

    private void OnAddClicked(object sender, EventArgs e)
    {
        DecisionOptions.Add(new DecisionOption(decisionOptionName));
        SubmitBtn.IsVisible = IsSubmitVisible();
        decisionOptionName = string.Empty;       
        SubmitEntry.Text = string.Empty;
    }

    private void OnSubmitClicked(object sender, EventArgs e)
    {
        App.Current.MainPage = new NavigationPage(new DecisionPointsPage(this.decisionPoint, DecisionOptions.ToList()));
    }

    void OnTextChanged(object sender, TextChangedEventArgs e)
    {
        decisionOptionName = e.NewTextValue;
        AddBtn.IsVisible = IsAddVisible();
    }

    bool IsSubmitVisible()
    {
        return DecisionOptions.Count > 1 ? true : false;
    }

    bool IsAddVisible()
    {
        return string.IsNullOrEmpty(decisionOptionName) ? false : true;
    }
}