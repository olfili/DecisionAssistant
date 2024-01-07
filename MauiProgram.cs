using MauiIcons.Fluent;
using MauiIcons.SegoeFluent;
using Microsoft.Extensions.Logging;

namespace DecisionAssistant;

public static class MauiProgram
{
	public static MauiApp CreateMauiApp()
	{
		var builder = MauiApp.CreateBuilder();
		builder
			.UseMauiApp<App>()
			.ConfigureFonts(fonts =>
			{
				fonts.AddFont("OpenSans-Regular.ttf", "OpenSansRegular");
				fonts.AddFont("OpenSans-Semibold.ttf", "OpenSansSemibold");
			});

#if DEBUG
		builder.Logging.AddDebug();
#endif
        builder.UseMauiApp<App>().UseFluentMauiIcons();
        builder.UseMauiApp<App>().UseSegoeFluentMauiIcons();
        return builder.Build();
	}
}
