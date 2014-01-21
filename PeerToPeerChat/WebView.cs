/*
 * Created by SharpDevelop.
 * User: George
 * Date: 1/18/2014
 * Time: 7:08 PM
 * 
 * To change this template use Tools | Options | Coding | Edit Standard Headers.
 */
using System;
using System.Drawing;
using System.Windows.Forms;

namespace PeerToPeerChat
{
	/// <summary>
	/// Description of WebView.
	/// </summary>
	public partial class WebView : Form
	{
		public WebView()
		{
			//
			// The InitializeComponent() call is required for Windows Forms designer support.
			//
			InitializeComponent();
			
			//
			// TODO: Add constructor code after the InitializeComponent() call.
			//
		}
		
	
		public void NavTo(string urlString){
			webBrowser1.DocumentCompleted += new WebBrowserDocumentCompletedEventHandler(wb_DocumentCompleted);

			webBrowser1.Navigate(urlString,false);
		}
		private void wb_DocumentCompleted(object sender, WebBrowserDocumentCompletedEventArgs e)
    {
      WebBrowser wb = sender as WebBrowser;
     
     
     
      // wb.Document is not null at this point
    }
	}
}
