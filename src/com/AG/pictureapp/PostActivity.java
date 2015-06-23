package com.AG.pictureapp;

import java.util.ArrayList;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.AdapterView;
import android.widget.Button;
import android.widget.ListView;
import android.widget.AdapterView.OnItemClickListener;

public class PostActivity extends Activity
{
	private final int REQUEST_CODE = 100;

	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		setContentView(R.layout.post_activity);
		
		Bundle b = getIntent().getExtras();
		PostNode passedPostNode = (PostNode) b.getParcelable("postNode");
		
		final PostTree pTree = new PostTree();
		
		for ( int i = 0; i < passedPostNode.getChildren().size(); i++ )
		{
			pTree.addNode(passedPostNode.getChild(i));
		}
		
		//---Construct the data source---
		ArrayList<PostNode> myList = passedPostNode.getChildren();
		
		//---Create the adapter to convert the array to views---
		PostAdapter adapter = new PostAdapter(this, myList);
		
		//---Attached adapter to a ListView---
		final ListView listView = (ListView) findViewById(android.R.id.list);
		listView.setAdapter(adapter);
		
		listView.setOnItemClickListener(new OnItemClickListener()
		{
			@Override
			public void onItemClick(AdapterView<?> parent, View view, int position, long id) 
			{
				PostNode passPostNode = pTree.getNode(position);
				Intent i = new Intent("com.AG.post_activity");
				i.putExtra("postNode", passPostNode);
				startActivityForResult(i, REQUEST_CODE);
			}
			
		});	
		
		Button btnReply = (Button) findViewById(R.id.btnReply);
		btnReply.setOnClickListener(new View.OnClickListener()
		{
			public void onClick(View v)
			{
				startActivityForResult(new Intent("com.AG.new_post"), REQUEST_CODE);
			}
		});
		
		Button btnBack = (Button) findViewById(R.id.btnBack);
		btnBack.setOnClickListener(new View.OnClickListener()
		{
			public void onClick(View v) 
			{
				
				finish();
			}
		});
		
	}
}
