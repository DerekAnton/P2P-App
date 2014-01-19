/*
 * Created by SharpDevelop.
 * User: George
 * Date: 1/18/2014
 * Time: 2:06 PM
 * 
 * To change this template use Tools | Options | Coding | Edit Standard Headers.
 */
namespace PeerToPeerChat
{
	partial class ChatForm
	{
		/// <summary>
		/// Designer variable used to keep track of non-visual components.
		/// </summary>
		private System.ComponentModel.IContainer components = null;
		
		/// <summary>
		/// Disposes resources used by the form.
		/// </summary>
		/// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
		protected override void Dispose(bool disposing)
		{
			if (disposing) {
				if (components != null) {
					components.Dispose();
				}
			}
			base.Dispose(disposing);
		}
		
		/// <summary>
		/// This method is required for Windows Forms designer support.
		/// Do not change the method contents inside the source code editor. The Forms designer might
		/// not be able to load this method if it was changed manually.
		/// </summary>
		private void InitializeComponent()
		{
			this.rtbChat = new System.Windows.Forms.RichTextBox();
			this.tbSend = new System.Windows.Forms.TextBox();
			this.btnSend = new System.Windows.Forms.Button();
			this.SuspendLayout();
			// 
			// rtbChat
			// 
			this.rtbChat.Anchor = ((System.Windows.Forms.AnchorStyles)((((System.Windows.Forms.AnchorStyles.Top | System.Windows.Forms.AnchorStyles.Bottom) 
									| System.Windows.Forms.AnchorStyles.Left) 
									| System.Windows.Forms.AnchorStyles.Right)));
			this.rtbChat.Font = new System.Drawing.Font("Tahoma", 9.75F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
			this.rtbChat.Location = new System.Drawing.Point(2, 1);
			this.rtbChat.Margin = new System.Windows.Forms.Padding(3, 4, 3, 4);
			this.rtbChat.Name = "rtbChat";
			this.rtbChat.Size = new System.Drawing.Size(712, 330);
			this.rtbChat.TabIndex = 0;
			this.rtbChat.Text = "";
			this.rtbChat.LinkClicked += new System.Windows.Forms.LinkClickedEventHandler(this.RtbChatLinkClicked);
			// 
			// tbSend
			// 
			this.tbSend.Anchor = ((System.Windows.Forms.AnchorStyles)(((System.Windows.Forms.AnchorStyles.Bottom | System.Windows.Forms.AnchorStyles.Left) 
									| System.Windows.Forms.AnchorStyles.Right)));
			this.tbSend.Font = new System.Drawing.Font("Tahoma", 9.75F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
			this.tbSend.Location = new System.Drawing.Point(2, 339);
			this.tbSend.Margin = new System.Windows.Forms.Padding(3, 4, 3, 4);
			this.tbSend.Multiline = true;
			this.tbSend.Name = "tbSend";
			this.tbSend.Size = new System.Drawing.Size(600, 74);
			this.tbSend.TabIndex = 1;
			// 
			// btnSend
			// 
			this.btnSend.Anchor = ((System.Windows.Forms.AnchorStyles)((System.Windows.Forms.AnchorStyles.Bottom | System.Windows.Forms.AnchorStyles.Right)));
			this.btnSend.Font = new System.Drawing.Font("Tahoma", 8.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
			this.btnSend.Location = new System.Drawing.Point(639, 366);
			this.btnSend.Margin = new System.Windows.Forms.Padding(3, 4, 3, 4);
			this.btnSend.Name = "btnSend";
			this.btnSend.Size = new System.Drawing.Size(59, 28);
			this.btnSend.TabIndex = 2;
			this.btnSend.Text = "&Send";
			this.btnSend.UseVisualStyleBackColor = true;
			this.btnSend.Click += new System.EventHandler(this.BtnSendClick);
			// 
			// ChatForm
			// 
			this.AllowDrop = true;
			this.AutoScaleDimensions = new System.Drawing.SizeF(7F, 16F);
			this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
			this.ClientSize = new System.Drawing.Size(715, 426);
			this.Controls.Add(this.btnSend);
			this.Controls.Add(this.tbSend);
			this.Controls.Add(this.rtbChat);
			this.Font = new System.Drawing.Font("Tahoma", 9.75F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
			this.Margin = new System.Windows.Forms.Padding(3, 4, 3, 4);
			this.Name = "ChatForm";
			this.Text = "Peer To Peer Chat";
			this.DragDrop += new System.Windows.Forms.DragEventHandler(this.ChatFormDragDrop);
			this.DragEnter += new System.Windows.Forms.DragEventHandler(this.ChatFormDragEnter);
			this.FormClosing += new System.Windows.Forms.FormClosingEventHandler(this.ChatFormFormClosing);
			this.ResumeLayout(false);
			this.PerformLayout();
		}
		private System.Windows.Forms.Button btnSend;
		private System.Windows.Forms.TextBox tbSend;
		private System.Windows.Forms.RichTextBox rtbChat;
		
		void BtnSendClick(object sender, System.EventArgs e)
		{
			
		}

		

	}
}
