package com.AG.pictureapp;

import java.io.File;
import java.util.ArrayList;

import android.app.Activity;
import android.app.ListActivity;
import android.net.Uri;
import android.os.Bundle;
import android.provider.MediaStore;
import android.content.Intent;
import android.content.pm.ActivityInfo;
import android.view.Menu;
import android.view.MenuItem;
import android.view.View;
import android.widget.ArrayAdapter;
import android.widget.Button;
import android.widget.Toast;
import android.widget.ImageView;
import android.widget.ListView;


public class MenuActivity extends ListActivity {
	Post[] posts = new Post[4];
	
	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		setContentView(R.layout.menu);

		posts[0] = new Post(1, "This pic was cool! Look!");
		posts[1] = new Post(2, "This pic was stupid! don't look!");
		posts[2] = new Post(3, "This pic was awesome! SMD!");
		posts[3] = new Post(4, "This pic was weird! #WTF?!");
		
		//---Construct the data source---
		ArrayList<Post> myList = new ArrayList<Post>();
		
		//---Create the adapter to convert the array to views---
		PostAdapter adapter = new PostAdapter(this, myList);
		
		//---Attached adapter to a ListView---
		ListView listView = (ListView) findViewById(android.R.id.list);
		listView.setAdapter(adapter);
		
		//---example use!!---
		//---add an item to the list view---
		adapter.addAll(posts);
		
		Button btnPost = (Button) findViewById(R.id.btnPost);
		btnPost.setOnClickListener(new View.OnClickListener()
		{
			public void onClick(View v)
			{
				startActivityForResult(new Intent("com.AG.new_post"), 1);
			}
		});

	}

}
