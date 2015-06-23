package com.AG.pictureapp;

import java.io.File;

import android.app.Activity;
import android.net.Uri;
import android.os.Bundle;
import android.provider.MediaStore;
import android.content.Intent;
import android.content.pm.ActivityInfo;
import android.util.Log;
import android.view.Menu;
import android.view.MenuItem;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;
import android.widget.ImageView;

public class NewPost extends Activity 
{
	private final int CAPTURE_IMAGE_ACTIVITY_REQUEST_CODE = 100;
	private final int MEDIA_TYPE_IMAGE = 1;
	private Uri fileUri;
	private String photoPath;
	private ImageView imageView;

	Intent camera = new Intent(MediaStore.ACTION_IMAGE_CAPTURE);
	
	@Override
	protected void onCreate(Bundle savedInstanceState)
	{
		super.onCreate(savedInstanceState);
		setContentView(R.layout.new_post);

		// set to stay portrait
		setRequestedOrientation(ActivityInfo.SCREEN_ORIENTATION_PORTRAIT);

		// Snap a Picture Button
		constructPictureButton();

		// Cancel Button
		constructCancelButton();

		// Post Text Button
		constructPostTextButton();
	}

	// Activities which have completed will execute the following code
	public void onActivityResult(int requestCode, int resultCode, Intent data)
	{
        switch (requestCode)
        {
            case CAPTURE_IMAGE_ACTIVITY_REQUEST_CODE:
                switch (resultCode)
                {
                    case RESULT_OK:
                        imageView.setImageURI(data.getData());
                        Toast.makeText(this, "Picture was saved to: " + data.getData(), Toast.LENGTH_SHORT).show();
                        break;
                    case RESULT_CANCELED:
                        Toast.makeText(this, "Canceled Picture", Toast.LENGTH_SHORT).show();
                        break;
                    default:
                        Toast.makeText(this, "An error occured with request code: " + resultCode, Toast.LENGTH_SHORT).show();
                        break;
                }
                break;
            default:
                break;
        }
	}

	public void constructPictureButton()
	{
		imageView = (ImageView) findViewById(R.id.image1);
		Button btnPic = (Button) findViewById(R.id.btnPicture);
		btnPic.setOnClickListener(new View.OnClickListener()
		{
			public void onClick(View v) {

				//File photo = new File(photoPath);
				startActivityForResult(camera, CAPTURE_IMAGE_ACTIVITY_REQUEST_CODE);
			}
		});
	}
	public void constructCancelButton()
	{
		Button btnCancel = (Button) findViewById(R.id.btnCancel);
		btnCancel.setOnClickListener(new View.OnClickListener()
		{
			public void onClick(View v)
			{
				finish();
			}
		});
	}
	public void constructPostTextButton()
	{
		Button btnPostText = (Button) findViewById(R.id.postTxtBtn);
		btnPostText.setOnClickListener(new View.OnClickListener()
		{
			public void onClick(View v)
			{
				EditText userTxtInput = (EditText) findViewById(R.id.editText1);
				Intent i = new Intent();
				i.putExtra("postTextData", userTxtInput.getText().toString());
				setResult(RESULT_OK, i);
				finish();
			}
		});
	}
}