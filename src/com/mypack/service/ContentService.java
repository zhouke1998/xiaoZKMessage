package com.mypack.service;

import com.alibaba.fastjson.JSONArray;
import com.mypack.model.Content;

public interface ContentService {
	public int queryAll();
	
	public JSONArray queryPage(int page);
	
	public int insertMessage(Content content);
	
	public int QueryPersonalMessageNum(String name);
	
	public JSONArray QueryPersonalPage(String name, int page);
	
	int deleteMessage(Content content);
}
