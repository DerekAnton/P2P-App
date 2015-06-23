package com.AG.pictureapp;

import java.util.ArrayList;

import android.os.Parcel;
import android.os.Parcelable;
import android.util.Log;

public class PostNode implements Parcelable
{
	private int m_postNumber;
	private String m_postName;
	private int m_picResource;
	private int m_identifier;
	private ArrayList<PostNode> m_children;
	
	//---constructors---
	public PostNode(int postNumber, String postName, int picResource)
	{
		this.m_postNumber = postNumber;
		this.m_postName = postName;
		this.m_picResource = picResource;
		this.m_identifier = m_postNumber;
		this.m_children = new ArrayList<PostNode>();
	}
	//---constructors end---
	
	

	//---getters and setters start---
	public int getPostNumber()
	{
		return m_postNumber;
	}
	
	public String getPostName()
	{
		return m_postName;
	}
	
	public int getPicResource()
	{
		return m_picResource;
	}
	
	public int getIdentifier()
	{
		return m_identifier;
	}
	
	public ArrayList<PostNode> getChildren()
	{
		Log.d("PostNode.java", "current status of children" + "\n" + m_children.toString());
		return m_children;
	}
	
	public PostNode getChild(int index)
	{
		return m_children.get(index);
	}
	

	public void setPostName(String postName)
	{
		this.m_postName = postName;
	}

	public void setPicResource(int picResource)
	{
		this.m_picResource = picResource;
	}
	
	public void setIdentifier(int identifier)
	{
		this.m_identifier = identifier;
	}
	//---getters and setters end---
	

	//---Public interface
	public void addChild(PostNode pNode)
	{
		m_children.add(pNode);
	}
	
	public boolean isEmpty()
	{
		return m_children.isEmpty();
	}
	

	//---Post toString---
	public String toString()
	{
		return 	"Post Name: " + m_postName + "\n" +
				"Post Number: " + m_postNumber + "\n" +
				"Post IDNum: " + m_identifier + "\n" +
				"Post Number of children: " + m_children.size() + "\n";
	}


	//---Methods to implement Parcelable
	@Override
	public int describeContents() 
	{
		return 0;
	}

	@Override
	public void writeToParcel(Parcel out, int flags) 
	{
		out.writeInt(m_postNumber);
		out.writeString(m_postName);
		out.writeInt(m_picResource);
		out.writeInt(m_identifier);
		out.writeTypedList(m_children);
	}
	
	public static final Parcelable.Creator<PostNode> CREATOR = new Parcelable.Creator<PostNode>()
	{
		@Override
		public PostNode createFromParcel(Parcel in) 
		{
			return new PostNode(in);
		}

		@Override
		public PostNode[] newArray(int size) 
		{
			return new PostNode[size];
		}
	};
	
	private PostNode(Parcel in)
	{
		//MyLoader classLoader = new MyLoader(PostNode.class.getClassLoader());
		
		m_postNumber = in.readInt();
		m_postName = in.readString();
		m_picResource = in.readInt();
		m_identifier = in.readInt();
		m_children =  in.createTypedArrayList(CREATOR);
	}
	

	
}
