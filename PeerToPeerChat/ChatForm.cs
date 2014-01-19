/*
 * Created by SharpDevelop.
 * User: George
 * Date: 1/18/2014
 * Time: 2:06 PM
 * 
 * To change this template use Tools | Options | Coding | Edit Standard Headers.
 */
using System;
using System.Collections.Generic;
using System.Drawing;
using System.Windows.Forms;
using System.IO;
using System.Net;
using System.Net.Sockets;
using System.Threading;
using System.Text;
using System.Media;

namespace PeerToPeerChat
{
	delegate void AddMessage(string message);

	/// <summary>
	/// Description of MainForm.
	/// </summary>
	public partial class ChatForm : Form
	{
		string userName;

		const int port = 54545;
		const string broadcastAddress = "255.255.255.255";

		UdpClient receivingClient;
		UdpClient sendingClient=null;
		bool receivingClientExit=false;

		Thread receivingThread;

		public ChatForm()
		{
		    InitializeComponent();
		
		    this.Load += new EventHandler(ChatForm_Load);
		    btnSend.Click += new EventHandler(btnSend_Click);
		}
		
		void ChatForm_Load(object sender, EventArgs e)
		{
		    this.Hide();
		
		    using (LoginForm loginForm = new LoginForm())
		    {
		        loginForm.ShowDialog();
		
		        if (loginForm.UserName == "")
		            this.Close();
		        else
		        {
		            userName = loginForm.UserName;
		            this.Show();
		        }
		    }
		
		    tbSend.Focus();
			this.AcceptButton=btnSend;
			
		    InitializeSender();
		    if(InitializeReceiver())
		    	SendString("++++ Has Joined ++++");
		    else {
	
		    	  MessageBox.Show("UDP Port cannot be opened.",
				"Network Error",
				MessageBoxButtons.OK,
				MessageBoxIcon.Exclamation,
				MessageBoxDefaultButton.Button1);
		    	Application.Exit();
		    }
		}

		private void InitializeSender()
		{
		    sendingClient = new UdpClient(broadcastAddress, port);
		    sendingClient.EnableBroadcast = true;
		}
		
		private bool InitializeReceiver()
		{
			bool bRcvOK=false;	
		
			try {
		    receivingClient = new UdpClient(port);
		    ThreadStart start = new ThreadStart(Receiver);
		    receivingThread = new Thread(start);
		    receivingThread.IsBackground = true;
		    receivingThread.Start();
		    bRcvOK=true;	
			} catch {
			}
		    
			return bRcvOK;
		}
		void SendString(string sendString)
		{
		    string toSend = userName + ":\n" + sendString;
	        byte[] data = Encoding.ASCII.GetBytes(toSend);
	        sendingClient.Send(data, data.Length);
	        tbSend.Text = "";
		}
		void ChatFormFormClosing(object sender, System.Windows.Forms.FormClosingEventArgs e)
		{
			receivingClientExit=true;
			Thread.Sleep(500);
			if(sendingClient!=null)
				SendString("**** Has Disconnected ****");
		}	
		
		void btnSend_Click(object sender, EventArgs e)
		{
		    tbSend.Text = tbSend.Text.TrimEnd();
		
		    if (!string.IsNullOrEmpty(tbSend.Text))
		    {
		        string toSend = userName + ":\n" + tbSend.Text;
		        byte[] data = Encoding.ASCII.GetBytes(toSend);
		        sendingClient.Send(data, data.Length);
		        tbSend.Text = "";
		    }
		
		    tbSend.Focus();
		}
		
		private void Receiver()
		{
		    IPEndPoint endPoint = new IPEndPoint(IPAddress.Any, port);
		    AddMessage messageDelegate = MessageReceived;
		
		    while (!receivingClientExit)
		    {
		        byte[] data = receivingClient.Receive(ref endPoint);
		        string message = Encoding.ASCII.GetString(data);
		        if(!receivingClientExit)
			        Invoke(messageDelegate, message);
		    }
		}
		
		private void MessageReceived(string message)
		{
			int nIndex=message.IndexOf(':');
			string sTemp="";
			if(nIndex>=0)
				sTemp=message.Substring(nIndex+2);

			if(this.WindowState== FormWindowState.Minimized)
			{
				System.Media.SystemSounds.Asterisk.Play();
				this.WindowState= FormWindowState.Normal;
			}
			else
				this.Activate();
		
			if (sTemp.StartsWith("http://www.youtube.com"))
			{
			   	sTemp.TrimEnd('\r');
			   	sTemp.TrimEnd('\n');
			   	goURL(sTemp);
			}
			else
			{
		    	rtbChat.Text += message + "\n";
		    	rtbChat.SelectionStart = rtbChat.Text.Length; //Set the current caret position at the end
   				rtbChat.ScrollToCaret(); 
			}
		}

		private void goURL(string strURL)
		{
			
			WebView wview = new WebView();
			wview.NavTo(strURL);
			wview.Show();
		}
		
		void RtbChatLinkClicked(object sender, LinkClickedEventArgs e)
		{
			//WebView wview = new WebView();
			//wview.NavTo(e.LinkText);
			//wview.Show();
			
			System.Diagnostics.Process.Start(e.LinkText);
		}
		
		void ChatFormDragEnter(object sender, DragEventArgs e)
		{
			   // Display a suitable icon if the drag-and-drop data contains a URL
            if (DoesDragDropDataContainUrl(e.Data))
            {
                e.Effect = DragDropEffects.Link;
            }
		}
		
		void ChatFormDragDrop(object sender, DragEventArgs e)
		{
			 // Check whether a URL was dropped on this text box and display it if found. Be very careful
            // how long you take in this method - the source application for the URL is blocked until you
            // exit the method.
            string droppedUrl = ReadUrlFromDragDropData(e.Data);
            if (droppedUrl != null && droppedUrl.Trim().Length != 0)
            {
                tbSend.Text = droppedUrl;
            }
		}
		/// <summary>The name of the ASCII URL data format in the drag-and-drop data.</summary>
        private const string _asciiUrlDataFormatName = "UniformResourceLocator";

        /// <summary>The text encoding used to read ASCII URLs from the drag-and-drop data.</summary>
        private static readonly Encoding _asciiUrlEncoding = Encoding.ASCII;

        /// <summary>The name of the Unicode URL data format in the drag-and-drop data.</summary>
        private const string _unicodeUrlDataFormatName = "UniformResourceLocatorW";

        /// <summary>The text encoding used to read Unicode URLs from the drag-and-drop data.</summary>
        private static readonly Encoding _unicodeUrlEncoding = Encoding.Unicode;

        /// <summary>Tests whether drag-and-drop data contains a URL.</summary>
        /// <param name="data">The drag-and-drop data.</param>
        /// <returns><see langword="true"/> if <paramref name="data"/> contains a URL,
        /// <see langword="false"/> otherwise.</returns>
        private static bool DoesDragDropDataContainUrl(IDataObject data)
        {
            // Test for both Unicode and ASCII URLs
            return
                DoesDragDropDataContainUrl(data, _unicodeUrlDataFormatName) ||
                DoesDragDropDataContainUrl(data, _asciiUrlDataFormatName);
        }

        /// <summary>Tests whether drag-and-drop data contains a URL using a particular text encoding.</summary>
        /// <param name="data">The drag-and-drop data.</param>
        /// <param name="urlDataFormatName">The data format name of the URL type.</param>
        /// <returns><see langword="true"/> if <paramref name="data"/> contains a URL of the correct type,
        /// <see langword="false"/> otherwise.</returns>
        private static bool DoesDragDropDataContainUrl(IDataObject data, string urlDataFormatName)
        {
            return data != null && data.GetDataPresent(urlDataFormatName);
        }

        /// <summary>Reads a URL from drag-and-drop data.</summary>
        /// <param name="data">The drag-and-drop data.</param>
        /// <returns>A URL, or <see langword="null"/> if <paramref name="data"/> does not contain a URL.</returns>
        private string ReadUrlFromDragDropData(IDataObject data)
        {
            // Try to read a Unicode URL from the data
            string unicodeUrl = ReadUrlFromDragDropData(data, _unicodeUrlDataFormatName, _unicodeUrlEncoding);
            if (unicodeUrl != null)
            {
                return unicodeUrl;
            }

            // Try to read an ASCII URL from the data
            return ReadUrlFromDragDropData(data, _asciiUrlDataFormatName, _asciiUrlEncoding);
        }

        /// <summary>Reads a URL using a particular text encoding from drag-and-drop data.</summary>
        /// <param name="data">The drag-and-drop data.</param>
        /// <param name="urlDataFormatName">The data format name of the URL type.</param>
        /// <param name="urlEncoding">The text encoding of the URL type.</param>
        /// <returns>A URL, or <see langword="null"/> if <paramref name="data"/> does not contain a URL
        /// of the correct type.</returns>
        private string ReadUrlFromDragDropData(IDataObject data, string urlDataFormatName, Encoding urlEncoding)
        {
            // Check whether the data contains a URL
            if (!DoesDragDropDataContainUrl(data, urlDataFormatName))
            {
                return null;
            }

            // Read the URL from the data
            string url;
            using (Stream urlStream = (Stream)data.GetData(urlDataFormatName))
            {
                using (TextReader reader = new StreamReader(urlStream, urlEncoding))
                {
                    url = reader.ReadToEnd();
                }
            }

            // URLs in drag/drop data are often padded with null characters so remove these
            return url.TrimEnd('\0');
        }
	}
}
