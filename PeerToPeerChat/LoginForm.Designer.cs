/*
 * Created by SharpDevelop.
 * User: George
 * Date: 1/18/2014
 * Time: 2:10 PM
 * 
 * To change this template use Tools | Options | Coding | Edit Standard Headers.
 */
namespace PeerToPeerChat
{
	partial class LoginForm
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
			this.tbUserName = new System.Windows.Forms.TextBox();
			this.btnOK = new System.Windows.Forms.Button();
			this.label1 = new System.Windows.Forms.Label();
			this.SuspendLayout();
			// 
			// tbUserName
			// 
			this.tbUserName.Font = new System.Drawing.Font("Tahoma", 9.75F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
			this.tbUserName.Location = new System.Drawing.Point(19, 38);
			this.tbUserName.MaxLength = 40;
			this.tbUserName.Name = "tbUserName";
			this.tbUserName.Size = new System.Drawing.Size(194, 23);
			this.tbUserName.TabIndex = 0;
			// 
			// btnOK
			// 
			this.btnOK.Location = new System.Drawing.Point(239, 38);
			this.btnOK.Name = "btnOK";
			this.btnOK.Size = new System.Drawing.Size(85, 23);
			this.btnOK.TabIndex = 1;
			this.btnOK.Text = "&OK";
			this.btnOK.UseVisualStyleBackColor = true;
			// 
			// label1
			// 
			this.label1.Location = new System.Drawing.Point(15, 13);
			this.label1.Name = "label1";
			this.label1.Size = new System.Drawing.Size(201, 17);
			this.label1.TabIndex = 2;
			this.label1.Text = "Enter your user name:";
			// 
			// LoginForm
			// 
			this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
			this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
			this.ClientSize = new System.Drawing.Size(346, 83);
			this.Controls.Add(this.label1);
			this.Controls.Add(this.btnOK);
			this.Controls.Add(this.tbUserName);
			this.FormBorderStyle = System.Windows.Forms.FormBorderStyle.FixedSingle;
			this.Name = "LoginForm";
			this.Text = "Peer to Peer Chat";
			this.ResumeLayout(false);
			this.PerformLayout();
		}
		private System.Windows.Forms.Label label1;
		private System.Windows.Forms.Button btnOK;
		private System.Windows.Forms.TextBox tbUserName;
	}
}
