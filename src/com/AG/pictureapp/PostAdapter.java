package com.AG.pictureapp;

import java.util.ArrayList;

import android.content.Context;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.AdapterView;
import android.widget.AdapterView.OnItemClickListener;
import android.widget.ArrayAdapter;
import android.widget.ImageView;
import android.widget.TextView;

public class PostAdapter extends ArrayAdapter<PostNode>{
	public PostAdapter(Context context, ArrayList<PostNode> posts)
	{
		super(context, 0, posts);
	}
	
	@Override
	public View getView(int position, View convertView, ViewGroup parent)
	{
		//---Get the data item for this position---
		PostNode post = getItem(position);

		//---Check if an existing view is being reused, otherwise inflate the view---
		if ( convertView == null )
		{
			convertView = LayoutInflater.from(getContext()).inflate(R.layout.item_post, parent, false);
		}

		//---Lookup view for data population---
		//TextView txtPostNum = (TextView) convertView.findViewById(R.id.txtPostNum);
		TextView txtPostName = (TextView) convertView.findViewById(R.id.txtPostName);
		ImageView imgPostPic = (ImageView) convertView.findViewById(R.id.imgPostPic);
		
		//---Post the data into the template view using the data object
		//txtPostNum.setText(Integer.toString(post.getPostNumber()));
		txtPostName.setText(post.getPostName());
		imgPostPic.setImageResource(post.getPicResource());
		
		return convertView;
	}
	
}
