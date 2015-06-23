package com.AG.pictureapp;

import java.util.ArrayList;

public class PostTree
{
	private ArrayList<PostNode> nodes;
	
	public PostTree()
	{
		this.nodes = new ArrayList<PostNode>();
	}
	
	
	//---public interface---
	public void addNode(PostNode pNode)
	{
		nodes.add(pNode);
	}


	//---getters and setters
	public ArrayList<PostNode> getAllNodes()
	{
		return nodes;
	}
	
	public PostNode getNode(int index)
	{
		return nodes.get(index);
	}
	//---getters and setters---
	
	

}
