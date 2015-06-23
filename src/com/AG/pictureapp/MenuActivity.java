package com.AG.pictureapp;

import java.io.File;
import java.util.ArrayList;

import android.app.Activity;
import android.app.ListActivity;
import android.location.Location;
import android.location.LocationListener;
import android.location.LocationManager;
import android.net.Uri;
import android.os.Bundle;
import android.os.Parcel;
import android.provider.MediaStore;
import android.content.Context;
import android.content.Intent;
import android.content.pm.ActivityInfo;
import android.util.Log;
import android.view.Menu;
import android.view.MenuItem;
import android.view.View;
import android.widget.AdapterView.OnItemClickListener;
import android.widget.AdapterView;
import android.widget.ArrayAdapter;
import android.widget.Button;
import android.widget.Toast;
import android.widget.ImageView;
import android.widget.ListView;


public class MenuActivity extends ListActivity {
	private final int REQUEST_CODE = 100;
	
	private LocationManager lm;
	private LocationListener locationListener;
	
	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		setContentView(R.layout.menu);
		
		lm = (LocationManager) getSystemService(Context.LOCATION_SERVICE);
		
		locationListener = new MyLocationListener();

		final PostTree pTree = new PostTree();

		PostNode pNode0 = new PostNode(1, "This pic was cool! Look!", R.drawable.pic4);
		PostNode childPNode0 = new PostNode(1, "This is a child post!", R.drawable.pic5);
		PostNode childPNode1 = new PostNode(1, "This is a child post too!", R.drawable.pic5);
		childPNode0.setIdentifier(pNode0.getIdentifier() + 1);
		childPNode1.setIdentifier(pNode0.getIdentifier() + 1);
		pNode0.addChild(childPNode0);
		pNode0.addChild(childPNode1);
		PostNode grandChildPNode0 = new PostNode(1, "This is a grand child post OMG!", R.drawable.pic7);
		grandChildPNode0.setIdentifier(childPNode0.getIdentifier() + 1);
		childPNode0.addChild(grandChildPNode0);
		PostNode pNode1 = new PostNode(1, "This pic was stupid! don't look!", R.drawable.pic5);
		PostNode pNode2 = new PostNode(1, "This pic was awesome! SMD!", R.drawable.pic6);
		PostNode pNode3 = new PostNode(1, "This pic was weird! #WTF?!", R.drawable.pic7);
		
		pTree.addNode(pNode0);
		pTree.addNode(pNode1);
		pTree.addNode(pNode2);
		pTree.addNode(pNode3);
		
		//---Construct the data source---
		ArrayList<PostNode> myList = pTree.getAllNodes();
		
		//---Create the adapter to convert the array to views---
		PostAdapter adapter = new PostAdapter(this, myList);
		
		//---Attached adapter to a ListView---
		ListView listView = (ListView) findViewById(android.R.id.list);
		listView.setAdapter(adapter);
		
		//---example use!!---
		//---add an item to the list view---

		//---set listView on click listener---
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
		
		Button btnPost = (Button) findViewById(R.id.btnPost);
		btnPost.setOnClickListener(new View.OnClickListener()
		{
			public void onClick(View v)
			{
				startActivityForResult(new Intent("com.AG.new_post"), REQUEST_CODE);
			}
		});

	}
	
	@Override
	public void onPause()
	{
		lm.removeUpdates(locationListener);
		super.onPause();
	}

	
	//---Methods other than activity overrides---
	private class MyLocationListener implements LocationListener
	{
		@Override
		public void onLocationChanged(Location loc)
		{
			if (loc != null)
			{
				Toast.makeText(	getBaseContext(),
								"Location changed : Lat: " + loc.getLatitude() + 
								" Lng: " + loc.getLongitude(),
								Toast.LENGTH_SHORT).show();
			}
		}
		
		@Override
		public void onProviderDisabled(String provider)
		{
		}
		
		@Override
		public void onProviderEnabled(String provider)
		{
		}
		
		@Override
		public void onStatusChanged(String provider, int status, Bundle extras)
		{
		}
	}
	
}
