package com.mypack.mapper;

import java.util.List;
import java.util.Map;

import com.mypack.model.Content;

public interface ContentMapper {

	public int queryAll();
	
	public List<Content> queryPage(int page);
	
	public int insertMessage(Content content);
	
	public int QueryPersonalMessageNum(String name);
	
	public List<Content> QueryPersonalPage(Map<String,Object> map);
	
	int deleteMessage(Content content);
}

