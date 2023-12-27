namespace DecisionAssistant;

public partial class MainPage : ContentPage
{
	public MainPage()
	{
		InitializeComponent();
	}

	private void OnStartClicked(object sender, EventArgs e)
	{
        App.Current.MainPage = new NavigationPage(new DecisionMakerPage());
    }
}

