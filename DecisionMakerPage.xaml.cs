namespace DecisionAssistant;

public partial class DecisionMakerPage : ContentPage
{
    private string decisionPoint = string.Empty;
	public DecisionMakerPage()
	{
		InitializeComponent();
	}

    private void OnSubmitClicked(object sender, EventArgs e)
    {
        App.Current.MainPage = new NavigationPage(new DecisionPointsPage(decisionPoint));
    }

    void OnTextChanged(object sender, TextChangedEventArgs e)
    {
        decisionPoint = e.NewTextValue;
    }
}