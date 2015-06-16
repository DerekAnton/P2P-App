package com.AG.pictureapp;

import java.util.ArrayList;

import android.content.Context;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ArrayAdapter;
import android.widget.TextView;

public class Post
{
	private int m_postNumber;
	private String m_postName;
	
	//---constructors---
	public Post()
	{
		this(9999, "");
	}
	
	public Post(int postNumber)
	{
		this(postNumber, "");
	}
	
	public Post (int postNumber, String postName)
	{
		this.m_postNumber = postNumber;
		this.m_postName = postName;
	}
	//---constructors end---
	
	

	//---getters and setters---
	public int getPostNumber()
	{
		return m_postNumber;
	}
	
	public String getPostName()
	{
		return m_postName;
	}
	
	public void setPostName(String postName)
	{
		this.m_postName = postName;
	}
	//---getters and setters end---
	
	
	//---Post toString---
	public String toString()
	{
		return m_postName;
	}
	
	/*
	public class PostAdapter extends ArrayAdapter<Post>
	{
		private class ViewHolder
		{
			private TextView itemView;
		}
		
		public PostAdapter(Context context, int textViewResourceId, ArrayList<Post> items)
		{
			super(context, textViewResourceId, items);
		}
		
		public View getView(int position, View convertView, ViewGroup parent)
		{
			if( convertView == null)
			{
				convertView = LayoutInflater.from(this.getContext()).inflate(R.layout.listview_association, parent, false);
				
				ViewHolder viewHolder = new ViewHolder();
				viewHolder.itemView = (TextView) convertView.findViewVyId(R.id.ItemView);
				viewHolder.setTag(viewHolder);
			
			}
		}
	}
	*/
}
