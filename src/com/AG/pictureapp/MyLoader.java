package com.AG.pictureapp;

import java.io.DataInputStream;
import java.io.File;
import java.io.IOException;
import java.io.InputStream;

import android.util.Log;

public class MyLoader extends ClassLoader
{
	public MyLoader(ClassLoader parent)
	{
		super(parent);
	}
	
	private Class getClass(String name) throws ClassNotFoundException 
	{
		String file = name.replace('.', File.pathSeparatorChar) + "class";
		byte[] b = null;
		
		try
		{
			b = loadClassFileData(file);
			Class c = defineClass(name, b, 0, b.length);
			resolveClass(c);
			return c;
		}
		catch(IOException e)
		{
			e.printStackTrace();
			return null;
		}
	}

	public Class loadClass(String name) throws ClassNotFoundException
	{
		Log.d("MyLoader.java", "Loading Class '" + name + "'");
		if ( name.startsWith("com.AG"))
		{
			return getClass(name);
		}
		return super.loadClass(name);
	}

	private byte[] loadClassFileData(String name) throws IOException
	{
		InputStream stream = getClass().getClassLoader().getResourceAsStream(name);

		int size = stream.available();
		byte buff[] = new byte[size];

		DataInputStream in = new DataInputStream(stream);
		
		in.readFully(buff);
		in.close();
		return buff;
	}
}
