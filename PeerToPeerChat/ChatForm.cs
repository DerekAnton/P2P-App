using System;
using System.Collections.Generic;
using System.Drawing;
using System.Windows.Forms;
using System.Net;
using System.Net.Sockets;
using System.Threading;
using System.Text;

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
		UdpClient sendingClient;

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
		
		    InitializeSender();
		    InitializeReceiver();
		}

		private void InitializeSender()
		{
		    sendingClient = new UdpClient(broadcastAddress, port);
		    sendingClient.EnableBroadcast = true;
		}
		
		private void InitializeReceiver()
		{
		    receivingClient = new UdpClient(port);
		
		    ThreadStart start = new ThreadStart(Receiver);
		    receivingThread = new Thread(start);
		    receivingThread.IsBackground = true;
		    receivingThread.Start();
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
		
		    while (true)
		    {
		        byte[] data = receivingClient.Receive(ref endPoint);
		        string message = Encoding.ASCII.GetString(data);
		        Invoke(messageDelegate, message);
		    }
		}
		
		private void MessageReceived(string message)
		{
		    rtbChat.Text += message + "\n";
		}
	}
}
