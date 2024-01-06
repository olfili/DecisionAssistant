namespace DecisionAssistant;

public partial class DecisionMakerPage : ContentPage
{
    private string decisionPoint = string.Empty;
	public DecisionMakerPage()
	{
		InitializeComponent();
        SubmitBtn.IsVisible = IsSubmitVisible();
    }

    private void OnSubmitClicked(object sender, EventArgs e)
    {
        App.Current.MainPage = new NavigationPage(new DecisionOptionsPage(decisionPoint));
    }

    void OnTextChanged(object sender, TextChangedEventArgs e)
    {
        decisionPoint = e.NewTextValue;
        SubmitBtn.IsVisible = IsSubmitVisible();
    }

    bool IsSubmitVisible()
    {
        return string.IsNullOrEmpty(decisionPoint) ? false : true;
    }
}